import React from 'react'
import './css/styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// --- Layouts ---
import DashboardLayout from './components/layout/DashboardLayout'; 
import AdManagementLayout from './components/layout/AdManagement';
import PaymentsLayout from './components/layout/PaymentLayout';
import SupportLayout from './components/layout/SupportLayout';
import SettingsLayout from './components/layout/SettingsLayout';

// --- Public Pages ---
import LandingPage from './pages/home/LandingPage'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import CategoryDetails from './pages/home/CategoryDetails'
import SubcategoryDetails from './pages/home/SubcategoryDetails'
import GadgetsLandingPage from './pages/gadgets/GadgetsLandingPage'
import Phones from './pages/gadgets/Phones'
import Laptops from './pages/gadgets/Laptops'
import MyAdsPage from './pages/myAds/Adverts'
import BoostAds from './pages/myAds/BoostAds'
import PaymentMethod from './pages/payment/PaymentMethod'
import ProfilePage from './pages/profile/ProfilePages'
import PostAdFlow from './pages/postAds/PostAdFlow'
import AddPhoneNumber from './pages/auth/AddPhoneNumber'
import ForgotPassword from './pages/auth/ForgotPassword'
import ProductDetails from './pages/productDetails/ProductDetails'
import PrivacyPolicy from './pages/home/PrivacyPolicy'

// --- Dashboard Auth Pages (No Sidebar) ---
import SignupPage from './pages/dashboard/auth/Signup'
import LoginPage from './pages/dashboard/auth/Signin'
import ForgotPasswordPage from './pages/dashboard/auth/ForgotPassword'
import CheckEmail from './pages/dashboard/auth/CheckEmail'
import ResetPassword from './pages/dashboard/auth/ResetPassword'
import SecuredPassword from './pages/dashboard/auth/SecuredPassword'

// --- Dashboard Content Pages (With Sidebar) ---
import Overview from './pages/dashboard/Overview'
import PendingAds from './pages/dashboard/AdManagement/PendingAds';
import ActiveAds from './pages/dashboard/AdManagement/ActiveAds';
import ReportedAds from './pages/dashboard/AdManagement/ReportedAds';
import UserManagement from './pages/dashboard/UserManagement';
import TransactionHistory from './pages/dashboard/Payments/TransactionHistory';
import PromotionAnalytics from './pages/dashboard/Payments/PromotionAnalytics';
import PricingConfiguration from './pages/dashboard/Payments/PricingConfiguration';
import ReportsAndAnalytics from './pages/dashboard/ReportAnalytics';
import SupportTickets from './pages/dashboard/Support/SupportTickets';
import FraudDetection from './pages/dashboard/Support/FraudDetection';
import ActionHistory from './pages/dashboard/Support/ActionHistory';
import Categories from './pages/dashboard/Settings/Categories';
import AdminRoles from './pages/dashboard/Settings/AdminRoles';
import ProfileSettings from './pages/dashboard/ProfileSettings';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route index element={<LandingPage />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/add-phone-number' element={<AddPhoneNumber />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/category/:id' element={<CategoryDetails />} />
        <Route path='/sucategory/:id' element={<SubcategoryDetails />} />
        <Route path='/gadgets' element={<GadgetsLandingPage />} />
        <Route path='/gadgets/phones' element={<Phones />} />
        <Route path='/gadgets/laptops' element={<Laptops />} />
        <Route path='/adverts' element={<MyAdsPage />} />
        <Route path='/boost-ad' element={<BoostAds />} />
        <Route path='/payment-method' element={<PaymentMethod />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/post-ad' element={<PostAdFlow />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='privacy-policy' element={<PrivacyPolicy />} />

        {/* DASHBOARD AUTH ROUTES  */}
        
        <Route path='/dashboard/signup' element={<SignupPage />} />
        <Route path='/dashboard/login' element={<LoginPage />} />
        <Route path='/dashboard/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/dashboard/check-email' element={<CheckEmail />} />
        <Route path='/dashboard/reset-password' element={<ResetPassword />} />
        <Route path='/dashboard/secured-password' element={<SecuredPassword />} />

        {/* MAIN DASHBOARD ROUTES  */}
            
        <Route path="/dashboard" element={<DashboardLayout />}>
          
          <Route index element={<Overview />} /> 
          
          <Route path="overview" element={<Overview />} /> 

          <Route path="user-management" element={<UserManagement />} />

          <Route path="ad-management" element={<AdManagementLayout />}>
            <Route index element={<PendingAds />} />
            <Route path="active" element={<ActiveAds />} />
            <Route path="reported" element={<ReportedAds />} />
          </Route>

          <Route path="payments" element={<PaymentsLayout />}>
            <Route index element={<TransactionHistory />} />
            <Route path="analytics" element={<PromotionAnalytics />} />
            <Route path="config" element={<PricingConfiguration />} />
          </Route>

          <Route path='reports' element={<ReportsAndAnalytics />} />

          <Route path="support" element={<SupportLayout />}>
            <Route index element={<SupportTickets />} />
            <Route path="fraud-detection" element={<FraudDetection />} />
            <Route path="action-history" element={<ActionHistory />} />
          </Route>

          <Route path="settings" element={<SettingsLayout />}>
            <Route index element={<Categories />} />
            <Route path="roles" element={<AdminRoles />} />
          </Route>

         
        </Route>
        <Route path='profile-settings' element={<ProfileSettings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App