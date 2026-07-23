import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuArrowUpRight, LuArrowDownRight } from 'react-icons/lu';
import { FaUsers } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { PiMoneyWavyFill } from "react-icons/pi";
import { getDashboardStats, approveAd, rejectAd } from '../../services/adminAuthService';
import Alert from '../../components/ui/Alert';

const StatCard = ({ title, value, percentage, icon, iconBg, isPositive }) => {
  return (
    <div className="bg-white p-5 border border-[#E5E5E5] rounded-xl shadow-sm ">
      <div>
        <div className='flex items-start justify-between'>
          <p className="text-sm font-semibold text-[#000000] mb-5">{title}</p>
          <div className={`p-2 rounded-xl ${iconBg}`}>
            {icon}
          </div>
        </div>

        <h3 className="text-[28px] font-bold mt-1">{value}</h3>
        {percentage && (
          <div className={`flex items-center text-sm mt-2 ${isPositive ? 'text-[#0DAC4F]' : 'text-[#FF3030]'}`}>
            {isPositive ? <LuArrowUpRight size={14} /> : <LuArrowDownRight size={14} />}
            <span className="ml-1 text-sm font-medium">{percentage} from last month</span>
          </div>
        )}
      </div>
    </div>
  );
};

const PendingAdItem = ({ id, title, store, category, price, time, onApprove, onReject, actionLoading }) => {
  return (
    <div className="flex flex-wrap items-center max-w-[95%] mx-auto justify-between gap-y-3 p-4 rounded-xl border mb-4">
      <div>
        <h4 className="font-semibold text-lg text-[#1E1E1E]">{title}</h4>
        <div className="flex items-center gap-6 mt-1">
          <span className="text-lg font-medium text-[#666666]">{store}</span>
          <span className="text-sm font-medium border border-[#B7B7B7] bg-white text-[#666666] px-2.5 py-1 rounded-lg">
            {category}
          </span>
          <span className="font-medium text-lg text-[#285386]">{price}</span>
          <span className="text-lg font-medium text-[#666666]">{time}</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onApprove(id)}
          disabled={actionLoading}
          className="px-4 py-2 bg-[#0DAC4F] text-white rounded-lg text-sm font-medium hover:bg-[#E9FAF1] hover:text-[#0DAC4F] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
        >
          Approve
        </button>
        <button
          onClick={() => onReject(id)}
          disabled={actionLoading}
          className="px-4 py-2 bg-[#FF3030] text-white rounded-lg text-sm font-medium hover:bg-[#FFEAEA] hover:text-[#FF3030] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

// Builds a display name for the ad owner: business name if present, else full name, else username
const getSellerName = (user) => {
  if (!user) return '—';
  if (user.business_name) return user.business_name;
  const fullName = [user.first_name, user.last_name].filter(Boolean).join(' ').trim();
  return fullName || user.username || '—';
};

// Formats an ISO date string into a relative-ish readable string; falls back to raw date
const formatDate = (isoString) => {
  if (!isoString) return '—';
  try {
    return new Date(isoString).toLocaleDateString();
  } catch {
    return '—';
  }
};

const Overview = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [actionLoadingId, setActionLoadingId] = useState(null);

  const fetchStats = async () => {
    setIsLoading(true);
    setError('');
    try {
      const data = await getDashboardStats('month');
      setStats(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const handleViewAll = () => {
    navigate('/dashboard/ad-management');
  };

  const handleApprove = async (id) => {
    setActionLoadingId(id);
    setError('');
    try {
      await approveAd(id);
      setMessage('Ad approved.');
      fetchStats();
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
      fetchStats();
    } catch (err) {
      setError(err.message);
    } finally {
      setActionLoadingId(null);
    }
  };

  const pendingAds = stats?.pending_ads || [];

  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-[28px] text-[#1E1E1E] font-semibold">Dashboard Overview</h2>
        <p className="text-[#666666] font-medium text-base">Monitor platform performance and activity</p>
      </div>

      <Alert type="success" message={message} onClose={() => setMessage('')} />
      <Alert type="error" message={error} onClose={() => setError('')} />

      {isLoading ? (
        <p className="text-[#666666]">Loading dashboard...</p>
      ) : (
        <>
          {/* Stat Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <StatCard
              title="Total Users"
              value={stats?.total_users ?? '—'}
              icon={<FaUsers size={14} className="text-primary" />}
              iconBg="bg-[#E7ECF2]"
            />
            <StatCard
              title="Total Amount"
              value={stats?.total_amount != null ? `₦${Number(stats.total_amount).toLocaleString()}` : '—'}
              icon={<FaTag size={14} className="text-secondary" />}
              iconBg="bg-[#E5F9FE]"
            />
            <StatCard
              title="Pending Ads"
              value={pendingAds.length}
              icon={<GoClockFill size={14} className="text-[#FF3030]" />}
              iconBg="bg-[#FFEAEA]"
            />
            <StatCard
              title="Today's Total Amount"
              value={stats?.todays_total_amount != null ? `₦${Number(stats.todays_total_amount).toLocaleString()}` : '—'}
              icon={<PiMoneyWavyFill size={14} className="text-[#0DAC4F]" />}
              iconBg="bg-[#E9FAF1]"
            />
          </div>

          {/* Charts Section - kept as placeholders; API returns transaction_trends: [] so no chart data yet */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 border border-[#E5E5E5] rounded-xl shadow-sm">
              <h4 className="text-lg text-[#1E1E1E] font-semibold">Ad Posting Trend</h4>
              <p className='font-medium text-base text-[#666666]'>Monthly ad posting activity</p>
              <div className="h-64 mt-4 bg-gray-100 flex items-center justify-center rounded">
                <p className="text-gray-500">[Ad Posting Trend Chart Goes Here]</p>
              </div>
            </div>
            <div className="bg-white p-6 border border-[#E5E5E5] rounded-xl shadow-sm">
              <h4 className="text-lg text-[#1E1E1E] font-semibold">Revenue Trend</h4>
              <p className='font-medium text-base text-[#666666]'>Monthly revenue from promotions</p>
              <div className="h-64 mt-4 bg-gray-100 flex items-center justify-center rounded">
                <p className="text-gray-500">[Revenue Trend Chart Goes Here]</p>
              </div>
            </div>
          </div>

          {/* Pending Ads Section */}
          <div className="bg-white border border-[#E5E5E5] rounded-xl shadow-sm">
            <div className="p-5">
              <h4 className="text-2xl text-[#1E1E1E] font-semibold">Pending Ads - Quick Actions</h4>
              <p className="text-lg font-medium text-[#666666]">Ads waiting for approval</p>
            </div>
            <div>
              {pendingAds.length === 0 ? (
                <p className="text-center text-[#666666] pb-5">No pending ads right now.</p>
              ) : (
                pendingAds.slice(0, 5).map((ad) => (
                  <PendingAdItem
                    key={ad.id}
                    id={ad.id}
                    title={ad.title || '—'}
                    store={getSellerName(ad.user)}
                    category={ad.category?.title || '—'}
                    price={ad.price != null ? `₦${Number(ad.price).toLocaleString()}` : '—'}
                    time={formatDate(ad.date_added)}
                    onApprove={handleApprove}
                    onReject={handleReject}
                    actionLoading={actionLoadingId === ad.id}
                  />
                ))
              )}
            </div>
            <div className="p-4 text-center ">
              <button onClick={handleViewAll} className="text-primaryLight font-medium text-lg border border-primaryInput px-5 py-3 rounded-xl hover:bg-[#E7ECF2]">
                View all pending ads
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default Overview;