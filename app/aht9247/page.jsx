'use client';

import React from "react";

const ScribdViewer = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white">
      <div className="w-full flex-1 flex flex-col justify-center items-center px-0 sm:px-4 py-4">
        <iframe
          className="scribd_iframe_embed"
          title="p g 8_2021_2023"
          src="https://www.scribd.com/embeds/615881360/content?start_page=1&view_mode=scroll&access_key=key-kRpz9WMwdcPmoeRh862a"
          tabIndex={0}
          data-auto-height="true"
          data-aspect-ratio="0.7080062794348508"
          scrolling="no"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ minHeight: "80vh", maxWidth: "100vw", border: "none" }}
          allowFullScreen
        ></iframe>
        <div className="mt-4 text-center text-sm">
          <a
            title="View p g 8_2021_2023 on Scribd"
            href="https://www.scribd.com/document/615881360/p-g-8-2021-2023#from_embed"
            className="text-green-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            p g 8_2021_2023
          </a>{" "}
          by {" "}
          <a
            title="View acelya's profile on Scribd"
            href="https://www.scribd.com/user/333747598/acelya#from_embed"
            className="text-green-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            acelya
          </a>
        </div>
      </div>
      <style jsx>{`
        .scribd_iframe_embed {
          width: 100vw;
          height: 100vh;
          min-height: 80vh;
          max-width: 100vw;
        }
        @media (max-width: 640px) {
          .scribd_iframe_embed {
            height: 80vh;
            min-height: 60vh;
          }
        }
      `}</style>
    </div>
  );
};

export default ScribdViewer;
