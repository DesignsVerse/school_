'use client'
import React, { useEffect, useState } from "react";

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  

  useEffect(() => {
    setIsLoading(true);
    fetch("https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjnuVHM9vzjvW1nqnmQtEPdcdPV6I-HuchQlxTliUcdstpRKHJ2V7mKG3_YhTmJwARzdfnQkRMHceXVX93_c9tDCCl-QSpwJecmcIXMxbaFS3m31oCfidGF0oXEAJez4fsCOSKMZDwiEe2iX7jwL0lI3zD8O947gl72QPhRrjsaj-JEmJjiccKpbh2ODfiBsmtk8Ru6mbxfSq6I_DLfipxME_GBrzsTxv6NoLTBUxMUTyN3BdUfHRBBYxxGJ5Jk_EqA63EgWPMLNzcZ1HBgp6WtdQUzDT_L3B7zqExO&lib=MjR6L20I3hCYuWhWJgQnUliCktw7OAYQS")
      .then((res) => res.json())
      .then((data) => {
        setNotices(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching notices:", err);
        setIsLoading(false);
      });
  }, []);

  // Function to format date (remove time part)
  const formatDate = (dateString) => {
    if (!dateString) return '';
    return dateString.split(',')[0]; // Take only the date part before comma
  };

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center py-8 md:py-16 px-4">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="bg-indigo-600 p-4 md:p-6 text-white">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
            School Notice Board
          </h1>
          <p className="text-indigo-100 mt-1 text-sm md:text-base">Stay updated with the latest announcements</p>
        </div>
        
        <div className="p-4 md:p-6 space-y-4">
          {isLoading ? (
            <div className="text-center py-10">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
              <p className="text-gray-500 mt-4">Loading notices...</p>
            </div>
          ) : notices.length > 0 ? (
            notices.map((notice) => (
              <div 
                key={notice.id} 
                className="p-4 md:p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer bg-white hover:bg-indigo-50 group"
                onClick={() => setSelectedNotice(notice)}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 ">
                  
                  <span className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">
                    {formatDate(notice.date)}
                  </span>
                  <h2 className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full self-start md:self-auto">
                    {notice.title}
                  </h2>
                </div>
                <p className="text-gray-600 mt-2 line-clamp-2 text-sm md:text-base">
                  {notice.description}
                </p>
                <div className="mt-3 text-sm text-indigo-600 font-medium flex items-center">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500 mt-2">No notices available at the moment</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Detailed Notice */}
      {selectedNotice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 overflow-hidden relative">
            <div className="bg-indigo-600 p-4 md:p-5 text-white">
            <p className=" text-xl md:text-2xl font-bold ">{formatDate(selectedNotice.date)}</p>

              <h2 className="text-indigo-100 text-sm md:text-base">{selectedNotice.title}</h2>
            </div>
            
            <div className="p-4 md:p-6 max-h-[60vh] md:max-h-[70vh] overflow-y-auto">
              <p className="text-gray-700 whitespace-pre-line text-sm md:text-base">
                {selectedNotice.description}
              </p>
            </div>
            
            <div className="px-4 md:px-6 py-3 md:py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm md:text-base"
                onClick={() => setSelectedNotice(null)}
              >
                Close
              </button>
            </div>
            
            <button
              className="absolute top-3 right-3 md:top-4 md:right-4 text-white hover:text-indigo-200 transition-colors"
              onClick={() => setSelectedNotice(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeBoard;