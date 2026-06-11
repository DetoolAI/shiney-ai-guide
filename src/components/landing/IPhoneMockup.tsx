import { ReactNode, useRef } from "react";
import { Play } from "lucide-react";

type Props = {
  videoSrc?: string;
  poster?: string;
  label?: string;
  children?: ReactNode;
  className?: string;
  /** 'cover' fills the screen (cropped). 'contain' shows the full frame (zoomed out). */
  videoFit?: "cover" | "contain";
};

const IPhoneMockup = ({ videoSrc, poster, label, children, className = "", videoFit = "cover" }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    void video.play();
  };

  return (
    <div className={`relative flex justify-center ${className}`}>
      <div className="relative w-[280px] sm:w-[300px] md:w-[320px]">
        <div className="relative bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden aspect-[9/19.5]">
          {/* Side buttons */}
          <div className="absolute -left-[10px] top-24 w-[3px] h-10 bg-gray-700 rounded-l" />
          <div className="absolute -left-[10px] top-40 w-[3px] h-14 bg-gray-700 rounded-l" />
          <div className="absolute -right-[10px] top-32 w-[3px] h-16 bg-gray-700 rounded-r" />

          {/* Screen */}
          <div className={`absolute inset-[4px] rounded-[2.5rem] overflow-hidden ${videoFit === "contain" ? "bg-white" : "bg-black"}`}>
            {videoSrc ? (
              <>
                <video
                  ref={videoRef}
                  className={`w-full h-full ${videoFit === "contain" ? "object-contain object-top scale-[0.92] origin-top" : "object-cover"}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="auto"
                  poster={poster}
                  aria-label={label || "Feature demo"}
                  onLoadedData={handlePlay}
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
                <button
                  type="button"
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity md:hidden"
                  aria-label="Play video"
                >
                  <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-primary fill-primary ml-1" />
                  </span>
                </button>
              </>
            ) : (
              children
            )}
          </div>

          {/* Notch — pointer-events-none so it doesn't block video controls */}
          <div className="absolute top-0 inset-x-0 z-10 flex justify-center pt-2 pointer-events-none">
            <div className="w-28 h-7 bg-gray-900 rounded-b-2xl" />
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/40 rounded-full z-10 pointer-events-none" />
        </div>

        {label && (
          <p className="text-center text-xs text-gray-500 mt-4 font-semibold uppercase tracking-wide">{label}</p>
        )}
      </div>
    </div>
  );
};

export default IPhoneMockup;
