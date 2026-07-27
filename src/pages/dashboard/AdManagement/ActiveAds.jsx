import React, { useEffect, useState } from 'react';
import { getAllAds } from '../../../services/adminAuthService';
import Alert from '../../../components/ui/Alert';
import AdDetailsModal from '../../../components/modals/AdDetailsModal';

const getSellerName = (user) => {
  if (!user) return '—';
  if (user.business_name) return user.business_name;
  const fullName = [user.first_name, user.last_name].filter(Boolean).join(' ').trim();
  return fullName || user.username || '—';
};

const ActiveAds = () => {
  const [ads, setAds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedAdId, setSelectedAdId] = useState(null);

  const fetchAds = async () => {
    setIsLoading(true);
    setError('');
    try {
      const data = await getAllAds();
      const list = Array.isArray(data) ? data : [];
      setAds(list.filter((ad) => (ad.status || '').toLowerCase() === 'approved'));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold">Active Advertisements</h3>

      <Alert type="error" message={error} onClose={() => setError('')} />

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left">Ad Title</th>
              <th className="py-2 px-4 text-left">Seller</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan={4} className="py-6 text-center text-gray-500">Loading active ads...</td></tr>
            ) : ads.length === 0 ? (
              <tr><td colSpan={4} className="py-6 text-center text-gray-500">No active ads.</td></tr>
            ) : (
              ads.map((ad) => (
                <tr key={ad.id} className="border-b">
                  <td className="py-3 px-4">{ad.title || '—'}</td>
                  <td className="py-3 px-4">{getSellerName(ad.user)}</td>
                  <td className="py-3 px-4">{ad.price != null ? `₦${Number(ad.price).toLocaleString()}` : '—'}</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => setSelectedAdId(ad.id)}
                      className="px-3 py-1 text-primaryLight border border-primaryInput rounded-lg hover:bg-[#E7ECF2]"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

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
export default ActiveAds;