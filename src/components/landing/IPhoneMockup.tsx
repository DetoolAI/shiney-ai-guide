import { ReactNode } from "react";

type Props = {
  videoSrc?: string;
  poster?: string;
  label?: string;
  children?: ReactNode;
  className?: string;
};

const IPhoneMockup = ({ videoSrc, poster, label, children, className = "" }: Props) => {
  return (
    <div className={`relative flex justify-center ${className}`}>
      <div className="relative w-[260px] sm:w-[280px]">
        {/* Phone frame */}
        <div className="relative bg-gray-900 rounded-[2.75rem] border-[6px] border-gray-800 shadow-2xl overflow-hidden aspect-[9/19]">
          {/* Notch */}
          <div className="absolute top-0 inset-x-0 z-20 flex justify-center pt-2">
            <div className="w-24 h-6 bg-gray-900 rounded-b-2xl" />
          </div>

          {/* Screen */}
          <div className="absolute inset-[3px] rounded-[2.4rem] overflow-hidden bg-black">
            {videoSrc ? (
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={poster}
                aria-label={label || "Feature demo"}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            ) : (
              children
            )}
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/30 rounded-full z-20" />
        </div>

        {label && (
          <p className="text-center text-xs text-gray-400 mt-3 font-medium">{label}</p>
        )}
      </div>
    </div>
  );
};

export default IPhoneMockup;
