import { IoClose } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const SkipModal = ({onClose}) => {
const navigate = useNavigate()
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 w-[90%] max-w-md relative">
        <button
            onClick={onClose}
            className="absolute top-4 right-4"
        >
            <IoClose size={24} />
        </button>
        {/* <div className="mx-auto flex justify-center">
            <img src={deleteIcon} alt="deleteIcon" />
        </div> */}

        <h2 className="text-2xl font-semibold text-center">Skip phone number?</h2>
        <p className="text-center text-gray-500 mt-3">
            You may not be able access certain features without a valid phone number
        </p>

        <div className="flex gap-4 mt-6">
            <button
            onClick={onClose}
            className="flex-1 py-3 bg-gray-200 rounded-lg"
            >
                No
            </button>
            <button
            onClick={()=>navigate('/login')}
            className="flex-1 py-3 bg-red-500 text-white rounded-lg"
            >
                Yes
            </button>
        </div>
        </div>
    </div>
  )
}

export default SkipModal
