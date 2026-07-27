import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { getAdDetails, approveAd, rejectAd } from '../../services/adminAuthService';
import Alert from '../ui/Alert';

const formatDate = (isoString) => {
  if (!isoString) return '—';
  try {
    return new Date(isoString).toLocaleDateString();
  } catch {
    return '—';
  }
};

const getSellerName = (user) => {
  if (!user) return '—';
  if (user.business_name) return user.business_name;
  const fullName = [user.first_name, user.last_name].filter(Boolean).join(' ').trim();
  return fullName || user.username || '—';
};

// Prefix relative image paths (e.g. "/media/ads/x.jpg") with the API host.
// Adjust MEDIA_HOST if your media actually lives on a different domain than the API.
const MEDIA_HOST = "https://flintmall.com.ng";
const resolveImageUrl = (path) => {
  if (!path) return null;
  if (path.startsWith('http')) return path;
  return `${MEDIA_HOST}${path}`;
};

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between py-2 border-b border-[#F0F0F0] last:border-b-0">
    <span className="text-sm font-medium text-[#666666]">{label}</span>
    <span className="text-sm font-semibold text-[#1E1E1E] text-right">{value || '—'}</span>
  </div>
);

// adId: id to fetch details for. onClose: closes modal. onActioned: callback to refresh parent list after approve/reject.
const AdDetailsModal = ({ adId, onClose, onActioned }) => {
  const [ad, setAd] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    if (!adId) return;
    const fetchDetails = async () => {
      setIsLoading(true);
      setError('');
      try {
        const data = await getAdDetails(adId);
        setAd(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [adId]);

  const handleApprove = async () => {
    setActionLoading(true);
    setError('');
    try {
      await approveAd(adId);
      onActioned?.();
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setActionLoading(false);
    }
  };

  const handleReject = async () => {
    setActionLoading(true);
    setError('');
    try {
      await rejectAd(adId);
      onActioned?.();
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setActionLoading(false);
    }
  };

  if (!adId) return null;

  const imageUrl = resolveImageUrl(ad?.cover_photo);

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-[#1E1E1E]">Ad Details</h3>
          <button onClick={onClose} aria-label="Close">
            <IoClose size={24} className="text-[#666666]" />
          </button>
        </div>

        <Alert type="error" message={error} onClose={() => setError('')} />

        {isLoading ? (
          <p className="text-[#666666] py-6 text-center">Loading...</p>
        ) : !ad ? (
          <p className="text-[#666666] py-6 text-center">Ad not found.</p>
        ) : (
          <>
            {imageUrl && (
              <img
                src={imageUrl}
                alt={ad.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
            )}

            <h4 className="font-semibold text-lg text-[#1E1E1E] mb-1">{ad.title}</h4>
            <p className="text-sm text-[#666666] mb-4">{ad.description}</p>

            <div className="border border-[#E5E5E5] rounded-xl p-4">
              <DetailRow label="Seller" value={getSellerName(ad.user)} />
              <DetailRow label="Category" value={ad.category?.title} />
              <DetailRow label="Sub-category" value={ad.sub_category?.title} />
              <DetailRow label="Ad Type" value={ad.ad_type?.name} />
              <DetailRow label="Price" value={ad.price != null ? `₦${Number(ad.price).toLocaleString()}` : '—'} />
              <DetailRow label="Negotiable" value={ad.is_negotiable ? 'Yes' : 'No'} />
              <DetailRow label="Location" value={[ad.city, ad.state].filter(Boolean).join(', ')} />
              <DetailRow label="Status" value={ad.status} />
              <DetailRow label="Views" value={ad.views} />
              <DetailRow label="Date Added" value={formatDate(ad.date_added)} />
            </div>

            {ad.status?.toLowerCase() === 'pending' && (
              <div className="flex gap-3 mt-5">
                <button
                  onClick={handleApprove}
                  disabled={actionLoading}
                  className="flex-1 py-2.5 bg-[#0DAC4F] text-white rounded-lg text-sm font-medium hover:bg-[#E9FAF1] hover:text-[#0DAC4F] disabled:opacity-50"
                >
                  {actionLoading ? 'Working...' : 'Approve'}
                </button>
                <button
                  onClick={handleReject}
                  disabled={actionLoading}
                  className="flex-1 py-2.5 bg-[#FF3030] text-white rounded-lg text-sm font-medium hover:bg-[#FFEAEA] hover:text-[#FF3030] disabled:opacity-50"
                >
                  {actionLoading ? 'Working...' : 'Reject'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdDetailsModal;