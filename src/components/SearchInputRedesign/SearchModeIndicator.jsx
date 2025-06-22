import React from 'react';
import GoogleLogoBlue from '../../assets/icons/google-logo_blue.svg';
import BaiduLogoRed from '../../assets/icons/baidu_logo_red.svg';
import ArchiveIcon from '../../assets/icons/folder_open_search.svg';

function SearchModeIndicator({ mode }) {
  if (mode === 'compare') {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <img src={GoogleLogoBlue} alt="Google" className="h-4 w-auto" />
          <img src={BaiduLogoRed} alt="Baidu" className="h-4 w-auto" />
        </div>
        <span className="font-semibold text-red-600">Compare</span>
      </div>
    );
  }

  if (mode === 'archive') {
    return (
      <div className="flex items-center gap-2">
        <img src={ArchiveIcon} alt="Archive" className="h-4 w-auto text-gray-600" />
        <span className="font-semibold text-red-600">Archive</span>
      </div>
    );
  }

  return null;
}

export default SearchModeIndicator;