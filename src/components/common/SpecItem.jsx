import { PiTagSimpleFill } from "react-icons/pi";

const SpecItem = ({ label, value }) => (
  <div className="flex items-center space-x-3">
    <div className="flex-shrink-0 text-[#9FB3C9]"><PiTagSimpleFill size={24}/></div>
    <div>
      <p className="text-lg font-semibold text-[#666666] capitalize">{label}</p>
      <p className="font-semibold text-2xl text-[#1E1E1E]">{value}</p>
    </div>
  </div>
);
export default SpecItem;