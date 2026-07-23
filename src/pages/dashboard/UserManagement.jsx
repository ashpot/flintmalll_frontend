import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuSearch } from 'react-icons/lu';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import profilePhoto from '../../assets/images/profilePhoto.png';
import { getAllUsers } from '../../services/adminAuthService';
import Alert from '../../components/ui/Alert';
import UserDetailsModal from '../../components/modals/UserDetailsModal';

const UserTableRow = ({ avatar, name, location, contact, email, type, status, joinDate, ads, onViewDetails }) => {

  const getStatusClasses = (status) => {
    switch ((status || '').toLowerCase()) {
      case 'active':
        return 'bg-[#E9FAF1] text-[#0DAC4F] border border-[#7EE4A8] p-2 rounded-lg';
      case 'suspended':
        return 'bg-[#FDF4E1] text-[#C99507] border border-[#FEEAB8] p-2 rounded-lg';
      case 'banned':
      case 'blocked':
        return 'bg-[#FFEAEA] text-[#FF3030] border border-[#FF9797] p-2 rounded-lg';
      default:
        return 'bg-gray-100 text-gray-700 border border-[#666666] p-2 rounded-lg';
    }
  };

  const getTypeClasses = (type) => {
    return (type || '').toLowerCase() === 'business'
      ? 'bg-[#E5F9FE] text-[#285386] border border-[#80DFF9] p-2 rounded-lg'
      : 'bg-[#F3E8FF] text-[#6E11B0] border border-[#DFC1FF] p-2 rounded-lg';
  };

  return (
    <tr className="border-b border-[#B7B7B7] bg-white hover:bg-gray-50">
      <td className="py-5 px-5">
        <div className="flex items-center gap-3">
          <img src={avatar || profilePhoto} alt={name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <p className="font-semibold text-base mb-1 text-[#1E1E1E]">{name || '—'}</p>
            <p className="text-base font-medium text-[#666666]">{location || '—'}</p>
          </div>
        </div>
      </td>
      <td className="py-3 px-5">
        <p className="font-medium text-base mb-1 text-[#1E1E1E]">{email || '—'}</p>
        <p className="text-base font-medium text-[#1E1E1E]">{contact || '—'}</p>
      </td>
      <td className="py-3 px-5">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeClasses(type)}`}>
          {type || '—'}
        </span>
      </td>
      <td className="py-3 px-5">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusClasses(status)}`}>
          {status || '—'}
        </span>
      </td>
      <td className="py-3 px-5 text-base font-medium text-[#1E1E1E]">{joinDate || '—'}</td>
      <td className="py-3 px-5 text-base font-medium text-[#1E1E1E]">{ads ?? '—'}</td>
      <td className="py-3 px-5">
        <button
          onClick={onViewDetails}
          className="text-[#1E1E1E] border bg-[#E5E5E5] p-1 rounded-lg hover:text-primary"
          title="View details"
        >
          <BiDotsHorizontalRounded size={20} />
        </button>
      </td>
    </tr>
  );
};

const getDisplayName = (user) => {
  if (user.type === 'Business' && user.business_name) return user.business_name;
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

const UserManagement = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(null);

  const fetchUsers = async () => {
    setIsLoading(true);
    setError('');
    try {
      const data = await getAllUsers();
      const list = Array.isArray(data) ? data : data?.users || [];
      setUsers(list);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleViewAll = () => {
    navigate('/dashboard');
  };

  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-[28px] text-[#1E1E1E] font-semibold">User Management</h2>
        <p className="text-[#666666] font-medium text-base">Monitor platform users and their activities</p>
      </div>

      <Alert type="error" message={error} onClose={() => setError('')} />

      <div className="bg-white p-4 border border-[#E5E5E5] rounded-xl shadow-sm flex items-center justify-between">
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="pl-4 pr-4 py-3 w-96 rounded-xl font-medium text-base text-[#666666] placeholder:text-[#666666] placeholder:text-base placeholder:font-medium border border-[#E5E5E5] bg-[#F7F7F7] focus:outline-none"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B7B7B7]">
            <LuSearch size={20} />
          </span>
        </div>
        <div className="flex items-center gap-4">
          <select className="px-4 py-2 rounded-lg border text-[#1E1E1E] text-base font-medium border-[#E5E5E5] bg-[#F7F7F7]">
            <option>All Status</option>
            <option>Active</option>
            <option>Suspended</option>
            <option>Banned</option>
          </select>
          <select className="px-4 py-2 rounded-lg border text-[#1E1E1E] text-base font-medium border-[#E5E5E5] bg-[#F7F7F7]">
            <option>All Types</option>
            <option>Individual</option>
            <option>Business</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-[#E5E5E5] overflow-hidden">
        <div className="p-5">
          <h3 className="text-2xl text-[#1E1E1E] font-semibold">Users ({users.length})</h3>
          <p className="text-lg font-medium text-[#666666]">All registered users on the platform</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="">
              <tr className="border-b border-[#B7B7B7]">
                <th className="py-3 px-5 text-left text-base font-semibold text-[#1E1E1E]">User</th>
                <th className="py-3 px-5 text-left text-base font-semibold text-[#1E1E1E]">Contact</th>
                <th className="py-3 px-5 text-left text-base font-semibold text-[#1E1E1E]">Type</th>
                <th className="py-3 px-5 text-left text-base font-semibold text-[#1E1E1E]">Status</th>
                <th className="py-3 px-5 text-left text-base font-semibold text-[#1E1E1E]">Join Date</th>
                <th className="py-3 px-5 text-left text-base font-semibold text-[#1E1E1E]">Ads</th>
                <th className="py-3 px-5 text-left text-base font-semibold text-[#1E1E1E]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr><td colSpan={7} className="py-6 text-center text-[#666666]">Loading users...</td></tr>
              ) : users.length === 0 ? (
                <tr><td colSpan={7} className="py-6 text-center text-[#666666]">No users found.</td></tr>
              ) : (
                users.map((user) => (
                  <UserTableRow
                    key={user.id}
                    avatar={user.photo_url}
                    name={getDisplayName(user)}
                    location={user.address}
                    contact={user.phone}
                    email={user.email}
                    type={user.type}
                    status={user.account_status}
                    joinDate={formatDate(user.date_joined)}
                    ads={null}
                    onViewDetails={() => setSelectedUserId(user.id)}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="p-4 text-center mt-5">
          <button onClick={handleViewAll} className="text-primaryLight font-medium text-lg border border-primaryInput px-5 py-3 rounded-xl hover:bg-[#E7ECF2]">
            Back to overview
          </button>
        </div>
      </div>

      {selectedUserId && (
        <UserDetailsModal
          userId={selectedUserId}
          onClose={() => setSelectedUserId(null)}
          onBlocked={fetchUsers}
        />
      )}

    </div>
  );
}
export default UserManagement;