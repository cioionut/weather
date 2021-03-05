import React, { useEffect } from "react";
import { Card } from 'react-bootstrap';

const FeedAd = () => {
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
      data-ad-format="fluid"
      data-ad-layout-key="-6t+ed+2i-1n-4w"
      data-ad-slot="8283033095"
    >
    </ins>
  );
};

export const FeedCardAd = () => <Card><FeedAd/></Card>

export default FeedAd;