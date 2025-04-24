import React, { useRef, useEffect } from 'react';
import { Search, FileText, Home, MapPin } from 'lucide-react';
import { searchByKeyword } from '@/data/search-data';

interface SearchDropdownProps {
  keyword: string;
  onItemClick: (url: string) => void;
  onClose: () => void;
}

export default function SearchDropdown({ keyword, onItemClick, onClose }: SearchDropdownProps) {
  const searchResults = searchByKeyword(keyword);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Click bên ngoài để đóng dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  
  // Nếu không có từ khóa hoặc không có kết quả, không hiển thị
  if (keyword.trim() === '' || searchResults.length === 0) {
    return null;
  }

  // Lấy icon dựa trên loại mục
  const getIcon = (type: 'page' | 'section') => {
    if (type === 'page') return <FileText className="h-4 w-4 text-gray-500" />;
    return <MapPin className="h-4 w-4 text-gray-500" />;
  };

  return (
    <div 
      ref={dropdownRef}
      className="absolute top-full left-0 right-0 mt-1 bg-gray-700 rounded-md shadow-lg overflow-hidden z-50 max-h-80 overflow-y-auto"
    >
      {searchResults.length > 0 ? (
        <>
          <div className="p-2 border-b border-gray-600 flex items-center">
            <Search className="h-4 w-4 text-gray-400 mr-2" />
            <span className="text-gray-400 text-sm">Kết quả tìm kiếm cho "{keyword}"</span>
          </div>
          
          <div>
            {searchResults.map((result) => (
              <div
                key={result.id}
                className="px-4 py-2 hover:bg-gray-600 cursor-pointer transition-colors duration-150"
                onClick={() => {
                  onItemClick(result.url);
                  onClose();
                }}
              >
                <div className="flex items-center">
                  {getIcon(result.type)}
                  <div className="ml-2">
                    <div className="text-gray-200 font-medium">{result.title}</div>
                    {result.description && (
                      <div className="text-xs text-gray-400 mt-0.5 line-clamp-1">{result.description}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="p-4 text-center text-gray-400">
          Không tìm thấy kết quả phù hợp
        </div>
      )}
    </div>
  );
}