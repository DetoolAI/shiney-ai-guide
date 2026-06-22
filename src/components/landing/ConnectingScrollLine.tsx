import { useEffect, useRef, useState, useCallback, ReactNode } from "react";

type Props = {
  children: ReactNode;
  anchorRefs: React.RefObject<HTMLElement | null>[];
};

type Point = { x: number; y: number };

/** Zig-zag SVG line that draws through each section as you scroll */
const ConnectingScrollLine = ({ children, anchorRefs }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathD, setPathD] = useState("");
  const [pathLen, setPathLen] = useState(0);
  const [drawn, setDrawn] = useState(0);
  const [dots, setDots] = useState<Point[]>([]);
  const [activeDot, setActiveDot] = useState(-1);

  const buildPath = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const cRect = container.getBoundingClientRect();
    const cw = cRect.width;
    const ch = cRect.height;
    if (cw === 0 || ch === 0) return;

    const anchors = anchorRefs
      .map((ref, i) => {
        const el = ref.current;
        if (!el) return null;
        const r = el.getBoundingClientRect();
        // Zig-zag: alternate left / right through each section
        const xPct = i % 2 === 0 ? 22 : 78;
        return {
          x: xPct,
          y: ((r.top + r.height / 2 - cRect.top) / ch) * 100,
        };
      })
      .filter(Boolean) as Point[];

    if (anchors.length < 1) return;

    const start: Point = { x: 50, y: 0 };
    const end: Point = { x: anchors.length % 2 === 0 ? 22 : 78, y: 100 };
    const waypoints = [start, ...anchors, end];

    let d = `M ${waypoints[0].x} ${waypoints[0].y}`;

    for (let i = 1; i < waypoints.length; i++) {
      const prev = waypoints[i - 1];
      const curr = waypoints[i];
      const midY = (prev.y + curr.y) / 2;
      // Smooth S-curve between zig-zag points
      d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
    }

    setPathD(d);
    setDots(anchors);
  }, [anchorRefs]);

  const onScroll = useCallback(() => {
    const container = containerRef.current;
    const path = pathRef.current;
    if (!container || !path) return;

    const len = path.getTotalLength();
    if (len > 0 && len !== pathLen) setPathLen(len);

    const rect = container.getBoundingClientRect();
    const vh = window.innerHeight;
    const start = vh * 0.9;
    const end = -rect.height * 0.1;
    const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
    const drawnLen = len * progress;
    setDrawn(drawnLen);

    if (dots.length > 0) {
      const hit = Math.min(dots.length - 1, Math.floor(progress * dots.length));
      setActiveDot(progress > 0.05 ? hit : -1);
    }
  }, [pathLen, dots]);

  useEffect(() => {
    buildPath();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onResize = () => {
      buildPath();
      onScroll();
    };
    window.addEventListener("resize", onResize);
    const t = setTimeout(() => {
      buildPath();
      onScroll();
    }, 400);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, [buildPath, onScroll]);

  useEffect(() => {
    if (pathRef.current && pathD) {
      const len = pathRef.current.getTotalLength();
      setPathLen(len);
    }
  }, [pathD]);

  return (
    <div ref={containerRef} className="relative">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        {pathD && (
          <>
            {/* faint track */}
            <path
              d={pathD}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.35"
              className="text-gray-200"
              vectorEffect="non-scaling-stroke"
            />
            {/* animated draw */}
            <path
              ref={pathRef}
              d={pathD}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
              className="text-gray-900"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={pathLen || 1000}
              strokeDashoffset={Math.max(0, (pathLen || 1000) - drawn)}
              vectorEffect="non-scaling-stroke"
            />
            {/* dots at each section */}
            {dots.map((dot, i) => (
              <g key={i}>
                <circle
                  cx={dot.x}
                  cy={dot.y}
                  r={activeDot >= i ? 1.8 : 1.2}
                  className={activeDot >= i ? "text-primary" : "text-gray-300"}
                  fill="currentColor"
                  vectorEffect="non-scaling-stroke"
                  style={{ transition: "r 0.3s ease, fill 0.3s ease" }}
                />
                {activeDot >= i && (
                  <circle
                    cx={dot.x}
                    cy={dot.y}
                    r="3"
                    className="text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.3"
                    opacity="0.4"
                    vectorEffect="non-scaling-stroke"
                  />
                )}
              </g>
            ))}
          </>
        )}
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ConnectingScrollLine;
