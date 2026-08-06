import { PiTagSimpleFill } from "react-icons/pi";

const SpecItem = ({ label, value }) => (
  <div className="flex items-center space-x-3">
    <div className="flex-shrink-0 text-[#9FB3C9]"><PiTagSimpleFill sm:size={24} size={20} /></div>
    <div>
      <p className="sm:text-lg font-semibold text-[#666666] capitalize">{label}</p>
      <p className="font-semibold sm:text-xl text-lg text-[#1E1E1E]">{value}</p>
    </div>
  </div>
);
export default SpecItem;