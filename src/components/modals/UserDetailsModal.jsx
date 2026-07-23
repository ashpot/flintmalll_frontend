import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import profilePhoto from '../../assets/images/profilePhoto.png';
import { getUserDetails, blockUser } from '../../services/adminAuthService';
import Alert from '../ui/Alert';

const formatDate = (isoString) => {
  if (!isoString) return '—';
  try {
    return new Date(isoString).toLocaleDateString();
  } catch {
    return '—';
  }
};

const getDisplayName = (user) => {
  if (!user) return '—';
  if (user.type === 'Business' && user.business_name) return user.business_name;
  const fullName = [user.first_name, user.last_name].filter(Boolean).join(' ').trim();
  return fullName || user.username || '—';
};

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between py-2 border-b border-[#F0F0F0] last:border-b-0">
    <span className="text-sm font-medium text-[#666666]">{label}</span>
    <span className="text-sm font-semibold text-[#1E1E1E] text-right">{value || '—'}</span>
  </div>
);

// userId: id to fetch details for. onClose: closes modal. onBlocked: callback to refresh parent list after a block action.
const UserDetailsModal = ({ userId, onClose, onBlocked }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isBlocking, setIsBlocking] = useState(false);

  useEffect(() => {
    if (!userId) return;
    const fetchDetails = async () => {
      setIsLoading(true);
      setError('');
      try {
        const data = await getUserDetails(userId);
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [userId]);

  const handleBlock = async () => {
    setIsBlocking(true);
    setError('');
    try {
      await blockUser(userId);
      onBlocked?.();
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsBlocking(false);
    }
  };

  if (!userId) return null;

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
          <h3 className="text-xl font-semibold text-[#1E1E1E]">User Details</h3>
          <button onClick={onClose} aria-label="Close">
            <IoClose size={24} className="text-[#666666]" />
          </button>
        </div>

        <Alert type="error" message={error} onClose={() => setError('')} />

        {isLoading ? (
          <p className="text-[#666666] py-6 text-center">Loading...</p>
        ) : !user ? (
          <p className="text-[#666666] py-6 text-center">User not found.</p>
        ) : (
          <>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={user.photo_url || profilePhoto}
                alt={getDisplayName(user)}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-lg text-[#1E1E1E]">{getDisplayName(user)}</p>
                <p className="text-sm text-[#666666]">@{user.username}</p>
              </div>
            </div>

            <div className="border border-[#E5E5E5] rounded-xl p-4">
              <DetailRow label="Email" value={user.email} />
              <DetailRow label="Phone" value={user.phone} />
              <DetailRow label="Type" value={user.type} />
              <DetailRow label="Status" value={user.account_status} />
              <DetailRow label="Address" value={user.address} />
              {user.type === 'Business' && (
                <>
                  <DetailRow label="Business Name" value={user.business_name} />
                  <DetailRow label="Business Address" value={user.business_address} />
                </>
              )}
              <DetailRow label="Joined" value={formatDate(user.date_joined)} />
              <DetailRow label="Verified" value={user.is_verified ? 'Yes' : 'No'} />
            </div>

            <div className="flex gap-3 mt-5">
              <button
                onClick={handleBlock}
                disabled={isBlocking || user.account_status?.toLowerCase() !== 'active'}
                className="flex-1 py-2.5 bg-[#FF3030] text-white rounded-lg text-sm font-medium hover:bg-[#FFEAEA] hover:text-[#FF3030] disabled:opacity-50"
              >
                {isBlocking ? 'Blocking...' : user.account_status?.toLowerCase() !== 'active' ? 'Already Blocked' : 'Block User'}
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2.5 border border-[#E5E5E5] text-[#666666] rounded-lg text-sm font-medium hover:bg-[#F7F7F7]"
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDetailsModal;