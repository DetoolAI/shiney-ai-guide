interface RobotLogoProps {
  size?: number;
  className?: string;
}

const RobotLogo = ({ size = 48, className = "" }: RobotLogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Antenna */}
      <line x1="50" y1="8" x2="50" y2="20" stroke="#e8702a" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="50" cy="6" r="4" fill="#e8702a"/>

      {/* Head */}
      <rect x="28" y="20" width="44" height="34" rx="8" fill="#1a2035"/>
      <rect x="30" y="22" width="40" height="30" rx="7" fill="#0f1b2d"/>

      {/* Eyes */}
      <rect x="35" y="30" width="12" height="10" rx="3" fill="#e8702a"/>
      <rect x="53" y="30" width="12" height="10" rx="3" fill="#e8702a"/>
      {/* Eye shine */}
      <rect x="37" y="32" width="4" height="3" rx="1" fill="white" opacity="0.6"/>
      <rect x="55" y="32" width="4" height="3" rx="1" fill="white" opacity="0.6"/>

      {/* Mouth */}
      <rect x="38" y="44" width="24" height="5" rx="2.5" fill="#e8702a" opacity="0.8"/>
      <rect x="41" y="44" width="4" height="5" rx="1" fill="#0f1b2d"/>
      <rect x="47" y="44" width="4" height="5" rx="1" fill="#0f1b2d"/>
      <rect x="53" y="44" width="4" height="5" rx="1" fill="#0f1b2d"/>

      {/* Neck */}
      <rect x="44" y="54" width="12" height="6" rx="2" fill="#1a2035"/>

      {/* Body */}
      <rect x="22" y="60" width="56" height="32" rx="10" fill="#1a2035"/>
      <rect x="24" y="62" width="52" height="28" rx="9" fill="#0f1b2d"/>

      {/* Chest panel */}
      <rect x="33" y="67" width="34" height="18" rx="5" fill="#1a2035"/>
      {/* Power button */}
      <circle cx="50" cy="72" r="5" fill="#e8702a" opacity="0.9"/>
      <path d="M50 69 L50 72" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M47 70.5 A4 4 0 1 0 53 70.5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Status lights */}
      <circle cx="37" cy="79" r="2.5" fill="#4ade80"/>
      <circle cx="43" cy="79" r="2.5" fill="#e8702a"/>
      <circle cx="49" cy="79" r="2.5" fill="#e8702a"/>

      {/* Left arm */}
      <rect x="8" y="62" width="13" height="26" rx="6" fill="#1a2035"/>
      <rect x="10" y="64" width="9" height="22" rx="5" fill="#0f1b2d"/>
      {/* Left hand */}
      <rect x="9" y="86" width="11" height="8" rx="4" fill="#e8702a"/>

      {/* Right arm */}
      <rect x="79" y="62" width="13" height="26" rx="6" fill="#1a2035"/>
      <rect x="81" y="64" width="9" height="22" rx="5" fill="#0f1b2d"/>
      {/* Right hand */}
      <rect x="80" y="86" width="11" height="8" rx="4" fill="#e8702a"/>

      {/* Shoulder bolts */}
      <circle cx="24" cy="65" r="3" fill="#e8702a" opacity="0.7"/>
      <circle cx="76" cy="65" r="3" fill="#e8702a" opacity="0.7"/>
    </svg>
  );
};

export default RobotLogo;
