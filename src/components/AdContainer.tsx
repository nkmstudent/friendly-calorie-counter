
import React, { useEffect, useRef } from 'react';

interface AdContainerProps {
  className?: string;
  adSlot: string;
}

const AdContainer: React.FC<AdContainerProps> = ({ className = "", adSlot }) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This effect will run when the component mounts.
    // In a real implementation, this is where you would initialize the ad
    // using the Google AdSense script
    
    // Example of what you might do when implementing actual AdSense:
    // if (window.adsbygoogle && adRef.current) {
    //   try {
    //     (window.adsbygoogle = window.adsbygoogle || []).push({});
    //   } catch (e) {
    //     console.error('AdSense error:', e);
    //   }
    // }
    
    console.log(`Ad container for slot ${adSlot} mounted`);
    
    return () => {
      console.log(`Ad container for slot ${adSlot} unmounted`);
    };
  }, [adSlot]);

  return (
    <div 
      ref={adRef}
      className={`ad-container min-h-[100px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center ${className}`}
      data-ad-slot={adSlot}
    >
      <div className="text-gray-400 text-sm">
        Ad Space: {adSlot}
      </div>
    </div>
  );
};

export default AdContainer;
