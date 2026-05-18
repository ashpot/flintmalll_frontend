// import { useEffect, useState } from "react";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoClose } from "react-icons/io5";
// import { formatPrice } from "../../lib/formatPrice";
// import copy from 'copy-to-clipboard';
// import { Copy, Check } from 'lucide-react';
// import { API_ENDPOINTS } from "../../services/api";
// import { lockScroll } from "../../lib/LockScroll";

// const PaymentModal = ({ onClose, onSubmit, adType, dependency}) => {
//     const price = (adType === 3) ? "15,000.00" : "4,000.00";
//     const [isCopied, setIsCopied] = useState(false);
//     const [loading, setLoading] = useState(false)
//     const [bank, setBank] = useState(null)
//     useEffect(()=>lockScroll(dependency), [dependency])
//     useEffect(()=>{
//       const getBankDetails = async ()=>{
//         const token = localStorage.getItem('authToken');
//         try {
//           setLoading(true)
//           const res = await fetch(API_ENDPOINTS.GET_COMPANY_DETAILS, {
//             method: "GET",
//             headers:{
//               Authorization: `Token ${token}`
//             }
//           })
//           const data = await res.json()
//           switch (res.status) {
//             case 200:
//               setBank(data);
//               break;
//               case 500:
//               alert('error loading account details')
//               break;
//           }
//         } catch (error) {
//           console.log('network error')
//         } finally{
//           setLoading(false)
//         }
//       }
//       getBankDetails()
//     }, [])
//   const handleCopy = (accountNum) => {
//     const success = copy(accountNum);

//     if (success) {
//       setIsCopied(true);
//       setTimeout(() => setIsCopied(false), 3000); // Reset the icon back to 'Copy' after 3 seconds
//     }
//   };
//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="relative bg-white rounded-3xl w-[90%] max-w-xl p-8">

//         {/* Close */}
//         <button
//           onClick={()=> onClose(false)}
//           className="absolute top-6 right-6 text-gray-300 hover:text-gray-500"
//         >
//           <IoClose size={28} />
//         </button>

//         <h2 className="text-2xl font-semibold text-center mb-6 text-blue-900">
//           Make Payment
//         </h2>

//         <p className="text-lg font-semibold">Transfer the sum of ₦{price} to the account number below:</p>

//         <hr className="mb-6" />

//         <div className="text-lg flex flex-col text-blue-900 items-center justify-center gap-3 mb-6 font-semibold">
//           {loading || !bank?.company ? (
//             <div className="flex justify-center items-center gap-2">
//               <div className="animate-spin h-5 w-5 border-2 border-blue-900 border-t-transparent rounded-full"></div>
//             </div>
//             ) : (
//             <>
//               <span>{bank.company.account_name}</span>

//               <span className="flex gap-2 text-blue-900/70">
//                 {bank.company.account_number}
//                 <button
//                   onClick={() => handleCopy(bank.company.account_number)}
//                 >
//                   {isCopied ? (
//                     <Check size={16} color="#38a169" />
//                   ) : (
//                     <Copy size={16} color="#4a5568" />
//                   )}
//                 </button>
//               </span>

//               <span>{bank.company.account_bank}</span>
//             </>
//           )}
//         </div>
//         <button
//           disabled={loading || !bank?.company}
//           onClick={onSubmit}
//           className={`w-full text-white py-4 rounded-2xl font-medium transition hover:bg-blue-900 bg-blue-800 disabled:cursor-not-allowed`}
//         >
//           I have made the transfer
//         </button>
//       </div>
//       </div>
//   );
// };

// export default PaymentModal;
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { lockScroll } from "../../lib/LockScroll";

const PaymentModal = ({
  onClose,
  onSubmit,
  adType,
  dependency
}) => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    lockScroll(dependency);
  }, [dependency]);

  const amount =
    adType === 3
      ? "₦15,000"
      : "₦4,000";

  const handleProceed = async () => {

    try {

      setLoading(true);

      await onSubmit();

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="relative bg-white rounded-3xl w-[90%] max-w-xl p-8">

        <button
          onClick={() => onClose(false)}
          className="absolute top-6 right-6 text-gray-300 hover:text-gray-500"
        >
          <IoClose size={28} />
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-900">

          Complete Payment

        </h2>

        <div className="bg-[#F7F7F7] rounded-2xl p-6 mb-6">

          <p className="text-gray-500 text-sm mb-2">

            Promotion Amount

          </p>

          <h3 className="text-3xl font-bold text-primary">

            {amount}

          </h3>

        </div>

        <p className="text-gray-600 mb-8">

          Clicking proceed will redirect you to Paystack checkout to complete payment securely.

        </p>

        <div className="flex gap-4">

          <button

            onClick={() => onClose(false)}

            className="flex-1 py-4 rounded-2xl border"

          >

            Cancel

          </button>

          <button

            disabled={loading}

            onClick={handleProceed}

            className="
            flex-1
            py-4
            rounded-2xl
            bg-blue-800
            text-white
            disabled:opacity-50
            "

          >

            {

              loading

              ?

              "Redirecting..."

              :

              "Proceed to Payment"

            }

          </button>

        </div>

      </div>

    </div>

  );

};

export default PaymentModal;