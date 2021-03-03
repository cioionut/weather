import React, { useEffect } from "react";

const MainAdBanner = () => {
  // https://github.com/vercel/next.js/discussions/14395

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      // (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{
      display: "block"
      }}
      data-ad-client="ca-pub-7711070281943881"
      data-ad-slot="9078537185"
      data-ad-format="auto"
      data-full-width-responsive="true"
      data-adtest="on"
    >
    </ins>
  );
};

export default MainAdBanner;