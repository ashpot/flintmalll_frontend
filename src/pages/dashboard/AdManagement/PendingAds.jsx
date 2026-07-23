import React, { useEffect, useState } from 'react';
import { getAllAds, approveAd, rejectAd } from '../../../services/adminAuthService';
import Alert from '../../../components/ui/Alert';
import AdDetailsModal from '../../../components/modals/AdDetailsModal';

const getSellerName = (user) => {
  if (!user) return '—';
  if (user.business_name) return user.business_name;
  const fullName = [user.first_name, user.last_name].filter(Boolean).join(' ').trim();
  return fullName || user.username || '—';
};

const formatDate = (isoString) => {
  if (!isoString) return '—';
  try {
    return new Date(isoString).toLocaleDateString();
  } catch {
    return '—';
  }
};

const PendingAds = () => {
  const [ads, setAds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [actionLoadingId, setActionLoadingId] = useState(null);
  const [selectedAdId, setSelectedAdId] = useState(null);

  const fetchAds = async () => {
    setIsLoading(true);
    setError('');
    try {
      const data = await getAllAds();
      const list = Array.isArray(data) ? data : [];
      setAds(list.filter((ad) => (ad.status || '').toLowerCase() === 'pending'));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  const handleApprove = async (id) => {
    setActionLoadingId(id);
    setError('');
    try {
      await approveAd(id);
      setMessage('Ad approved.');
      fetchAds();
    } catch (err) {
      setError(err.message);
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleReject = async (id) => {
    setActionLoadingId(id);
    setError('');
    try {
      await rejectAd(id);
      setMessage('Ad rejected.');
      fetchAds();
    } catch (err) {
      setError(err.message);
    } finally {
      setActionLoadingId(null);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold">Pending Approval</h3>
      <p className="text-gray-600">Ads waiting for moderation approval</p>

      <Alert type="success" message={message} onClose={() => setMessage('')} />
      <Alert type="error" message={error} onClose={() => setError('')} />

      {isLoading ? (
        <p className="mt-6 text-gray-500">Loading pending ads...</p>
      ) : ads.length === 0 ? (
        <p className="mt-6 text-gray-500">No pending ads.</p>
      ) : (
        ads.map((ad) => (
          <div key={ad.id} className="mt-6 border p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{ad.title || '—'}</h4>
                <p className="text-sm text-gray-500">
                  Submitted: {formatDate(ad.date_added)} | Seller: {getSellerName(ad.user)} | Category: {ad.category?.title || '—'}
                </p>
              </div>
              <button
                onClick={() => setSelectedAdId(ad.id)}
                className="text-sm text-primaryLight font-medium border border-primaryInput px-3 py-1.5 rounded-lg hover:bg-[#E7ECF2]"
              >
                View Details
              </button>
            </div>
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => handleApprove(ad.id)}
                disabled={actionLoadingId === ad.id}
                className="px-4 py-2 bg-green-600 text-white rounded-lg disabled:opacity-50"
              >
                Approve
              </button>
              <button
                onClick={() => handleReject(ad.id)}
                disabled={actionLoadingId === ad.id}
                className="px-4 py-2 bg-red-600 text-white rounded-lg disabled:opacity-50"
              >
                Reject
              </button>
            </div>
          </div>
        ))
      )}

      {selectedAdId && (
        <AdDetailsModal
          adId={selectedAdId}
          onClose={() => setSelectedAdId(null)}
          onActioned={fetchAds}
        />
      )}
    </div>
  );
}
export default PendingAds;