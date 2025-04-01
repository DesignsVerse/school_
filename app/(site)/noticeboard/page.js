'use client'
import React, { useEffect, useState } from "react";

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);

  useEffect(() => {
    fetch("https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjnuVHM9vzjvW1nqnmQtEPdcdPV6I-HuchQlxTliUcdstpRKHJ2V7mKG3_YhTmJwARzdfnQkRMHceXVX93_c9tDCCl-QSpwJecmcIXMxbaFS3m31oCfidGF0oXEAJez4fsCOSKMZDwiEe2iX7jwL0lI3zD8O947gl72QPhRrjsaj-JEmJjiccKpbh2ODfiBsmtk8Ru6mbxfSq6I_DLfipxME_GBrzsTxv6NoLTBUxMUTyN3BdUfHRBBYxxGJ5Jk_EqA63EgWPMLNzcZ1HBgp6WtdQUzDT_L3B7zqExO&lib=MjR6L20I3hCYuWhWJgQnUliCktw7OAYQS") // Replace with your API URL
      .then((res) => res.json())
      .then((data) => setNotices(data))
      .catch((err) => console.error("Error fetching notices:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center mt-32 p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">📢 School Notice Board</h1>
        <div className="space-y-4">
          {notices.length > 0 ? (
            notices.map((notice) => (
              <div 
                key={notice.id} 
                className="p-4 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-200 transition-all cursor-pointer"
                onClick={() => setSelectedNotice(notice)}
              >
                <h2 className="text-lg font-semibold text-gray-900">{notice.title}</h2>
                <p className="text-gray-600 text-sm">{notice.date}</p>
                <p className="text-gray-700 mt-1 line-clamp-2">{notice.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No notices available.</p>
          )}
        </div>
      </div>

      {/* Modal for Detailed Notice */}
      {selectedNotice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
              onClick={() => setSelectedNotice(null)}
            >
              ❌
            </button>
            <h2 className="text-xl font-bold text-gray-900">{selectedNotice.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{selectedNotice.date}</p>
            <p className="text-gray-700">{selectedNotice.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeBoard;
