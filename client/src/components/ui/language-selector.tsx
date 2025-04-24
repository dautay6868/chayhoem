import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("VN");
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const selectLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    setIsOpen(false);
  };
  
  return (
    <div className="relative language-selector">
      <span 
        className="text-sm font-semibold cursor-pointer flex items-center" 
        onClick={toggleDropdown}
      >
        <Globe className="h-4 w-4 text-[#d4af37] mr-2" />
        {currentLanguage} <ChevronDown className="ml-1 h-3 w-3" />
      </span>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-white shadow-lg rounded-md z-50">
          <button 
            onClick={() => selectLanguage("VN")}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            VN
          </button>
          <button 
            onClick={() => selectLanguage("EN")}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            EN
          </button>
        </div>
      )}
    </div>
  );
}
