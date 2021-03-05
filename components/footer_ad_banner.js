import React, { useEffect } from "react";

const FooterAdBanner = () => {
  // https://github.com/vercel/next.js/discussions/14395

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
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
      data-ad-slot="2331868267"
      data-ad-format="auto"
      data-full-width-responsive="true"
    >
    </ins>
  );
};

export default FooterAdBanner;