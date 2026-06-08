interface RobotLogoProps {
  size?: number;
  className?: string;
}

const RobotLogo = ({ size = 48, className = "" }: RobotLogoProps) => {
  const scale = size / 120;
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 120 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Hard hat */}
      <ellipse cx="60" cy="18" rx="28" ry="10" fill="#e8702a"/>
      <rect x="34" y="16" width="52" height="8" rx="2" fill="#e8702a"/>
      <rect x="30" y="22" width="60" height="4" rx="2" fill="#cf5e1a"/>
      {/* Hard hat brim */}
      <ellipse cx="60" cy="26" rx="32" ry="5" fill="#cf5e1a"/>

      {/* Head */}
      <rect x="36" y="26" width="48" height="36" rx="10" fill="#1a2035"/>
      <rect x="38" y="28" width="44" height="32" rx="9" fill="#0f1b2d"/>

      {/* Visor/Eyes — angry/determined look */}
      <rect x="40" y="36" width="14" height="9" rx="3" fill="#e8702a"/>
      <rect x="66" y="36" width="14" height="9" rx="3" fill="#e8702a"/>
      {/* Angry eyebrow slant */}
      <line x1="40" y1="34" x2="54" y2="37" stroke="#cf5e1a" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="80" y1="34" x2="66" y2="37" stroke="#cf5e1a" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Eye glow */}
      <rect x="42" y="38" width="5" height="3" rx="1" fill="white" opacity="0.5"/>
      <rect x="68" y="38" width="5" height="3" rx="1" fill="white" opacity="0.5"/>

      {/* Mouth — determined line */}
      <rect x="46" y="52" width="28" height="4" rx="2" fill="#e8702a" opacity="0.7"/>
      <rect x="50" y="52" width="4" height="4" rx="1" fill="#0f1b2d"/>
      <rect x="57" y="52" width="4" height="4" rx="1" fill="#0f1b2d"/>
      <rect x="64" y="52" width="4" height="4" rx="1" fill="#0f1b2d"/>

      {/* Neck */}
      <rect x="52" y="62" width="16" height="8" rx="3" fill="#1a2035"/>

      {/* BODY — wide and muscular */}
      <rect x="20" y="70" width="80" height="50" rx="12" fill="#1a2035"/>
      <rect x="22" y="72" width="76" height="46" rx="11" fill="#0f1b2d"/>

      {/* Chest muscles detail */}
      <rect x="28" y="76" width="28" height="16" rx="5" fill="#1a2035"/>
      <rect x="64" y="76" width="28" height="16" rx="5" fill="#1a2035"/>

      {/* Chest panel / power core */}
      <rect x="40" y="96" width="40" height="18" rx="6" fill="#1a2035"/>
      <circle cx="60" cy="105" r="7" fill="#e8702a"/>
      <circle cx="60" cy="105" r="4" fill="#cf5e1a"/>
      <path d="M60 101 L60 105" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M57 103 A4 4 0 1 0 63 103" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      {/* Status lights */}
      <circle cx="44" cy="105" r="2.5" fill="#4ade80"/>
      <circle cx="75" cy="105" r="2.5" fill="#e8702a"/>

      {/* Shoulder armor */}
      <ellipse cx="22" cy="76" rx="10" ry="8" fill="#e8702a"/>
      <ellipse cx="98" cy="76" rx="10" ry="8" fill="#e8702a"/>
      <ellipse cx="22" cy="76" rx="7" ry="5" fill="#cf5e1a"/>
      <ellipse cx="98" cy="76" rx="7" ry="5" fill="#cf5e1a"/>

      {/* LEFT ARM — raised, crossing chest */}
      <rect x="4" y="74" width="20" height="36" rx="10" fill="#1a2035"/>
      <rect x="6" y="76" width="16" height="32" rx="9" fill="#0f1b2d"/>
      {/* Forearm crossing */}
      <rect x="8" y="94" width="50" height="14" rx="7" fill="#1a2035"/>
      <rect x="10" y="96" width="46" height="10" rx="6" fill="#0f1b2d"/>
      {/* Left fist */}
      <rect x="6" y="108" width="18" height="12" rx="6" fill="#e8702a"/>

      {/* RIGHT ARM — crossed over left */}
      <rect x="96" y="74" width="20" height="36" rx="10" fill="#1a2035"/>
      <rect x="98" y="76" width="16" height="32" rx="9" fill="#0f1b2d"/>
      {/* Forearm crossing over */}
      <rect x="62" y="88" width="50" height="14" rx="7" fill="#1a2035"/>
      <rect x="64" y="90" width="46" height="10" rx="6" fill="#0f1b2d"/>
      {/* Right fist */}
      <rect x="96" y="100" width="18" height="12" rx="6" fill="#e8702a"/>

      {/* Legs */}
      <rect x="32" y="118" width="24" height="38" rx="10" fill="#1a2035"/>
      <rect x="34" y="120" width="20" height="34" rx="9" fill="#0f1b2d"/>
      <rect x="64" y="118" width="24" height="38" rx="10" fill="#1a2035"/>
      <rect x="66" y="120" width="20" height="34" rx="9" fill="#0f1b2d"/>

      {/* Knee pads */}
      <ellipse cx="44" cy="136" rx="8" ry="6" fill="#e8702a" opacity="0.8"/>
      <ellipse cx="76" cy="136" rx="8" ry="6" fill="#e8702a" opacity="0.8"/>

      {/* Boots */}
      <rect x="28" y="150" width="32" height="16" rx="6" fill="#e8702a"/>
      <rect x="60" y="150" width="32" height="16" rx="6" fill="#e8702a"/>
      <rect x="28" y="158" width="32" height="8" rx="4" fill="#cf5e1a"/>
      <rect x="60" y="158" width="32" height="8" rx="4" fill="#cf5e1a"/>

      {/* Belt */}
      <rect x="20" y="116" width="80" height="8" rx="4" fill="#e8702a" opacity="0.6"/>
      <rect x="54" y="114" width="12" height="12" rx="3" fill="#e8702a"/>
    </svg>
  );
};

export default RobotLogo;
