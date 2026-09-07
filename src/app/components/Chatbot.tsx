'use client';

import React, { useEffect } from 'react';

declare global {
  interface Window {
    VG_CONFIG?: {
      ID: string;
      region: string;
      render: string;
      stylesheets: string[];
    };
  }
}

const Chatbot = () => {
  useEffect(() => {
    // Ensure this code runs only in the browser
    if (typeof window !== 'undefined') {
      const existingScript = document.querySelector('script[src="https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js"]');
      if (existingScript) {
        return;
      }

      window.VG_CONFIG = {
          ID: "0NlNv4BeglyHr2Cq8Rrc",
          region: 'na', // 'eu' or 'na'corresponding to Europe and North America
          render: 'bottom-right', // popup or full-width
          stylesheets: [
              "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
          ],
      };

      const vgScript = document.createElement("script");
      vgScript.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
      vgScript.defer = true;
      document.body.appendChild(vgScript);

      return () => {
        // Clean up the script when the component unmounts
        const script = document.querySelector('script[src="https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js"]');
        if (script) {
          document.body.removeChild(script);
        }
        // Also remove the config
        if (window.VG_CONFIG) {
          delete window.VG_CONFIG;
        }
      };
    }
  }, []);

  return (
    <div style={{ width: '0', height: '0' }} id="VG_OVERLAY_CONTAINER">
      {/* Here is where CONVOCORE renders the widget. */}
    </div>
  );
};

export default Chatbot;
