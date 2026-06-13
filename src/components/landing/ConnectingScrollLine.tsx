import { useEffect, useRef, useState, useCallback, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Refs to each row/block the line should connect through */
  anchorRefs: React.RefObject<HTMLElement | null>[];
};

/** Serpentine SVG line that draws as you scroll — mattxwebb / Stone-style connector */
const ConnectingScrollLine = ({ children, anchorRefs }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathD, setPathD] = useState("");
  const [pathLen, setPathLen] = useState(0);
  const [drawn, setDrawn] = useState(0);

  const buildPath = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const cRect = container.getBoundingClientRect();
    const cw = cRect.width;
    const ch = cRect.height;
    if (cw === 0 || ch === 0) return;

    const points = anchorRefs
      .map((ref) => {
        const el = ref.current;
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          x: ((r.left + r.width / 2 - cRect.left) / cw) * 100,
          y: ((r.top + r.height / 2 - cRect.top) / ch) * 100,
        };
      })
      .filter(Boolean) as { x: number; y: number }[];

    if (points.length < 2) return;

    const start = { x: 50, y: 0 };
    let d = `M ${start.x} ${start.y}`;
    d += ` C ${start.x} ${points[0].y * 0.4}, ${points[0].x} ${points[0].y * 0.4}, ${points[0].x} ${points[0].y}`;

    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const midY = (prev.y + curr.y) / 2;
      d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
    }
    setPathD(d);
  }, [anchorRefs]);

  const onScroll = useCallback(() => {
    const container = containerRef.current;
    const path = pathRef.current;
    if (!container || !path) return;

    const len = path.getTotalLength();
    if (len !== pathLen) setPathLen(len);

    const rect = container.getBoundingClientRect();
    const vh = window.innerHeight;
    const start = vh * 0.85;
    const end = -rect.height * 0.15;
    const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
    setDrawn(len * progress);
  }, [pathLen]);

  useEffect(() => {
    buildPath();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      buildPath();
      onScroll();
    });
    const t = setTimeout(() => {
      buildPath();
      onScroll();
    }, 400);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", buildPath);
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
        {/* faint track */}
        {pathD && (
          <path
            d={pathD}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.35"
            className="text-gray-200"
            vectorEffect="non-scaling-stroke"
          />
        )}
        {/* animated draw */}
        {pathD && (
          <path
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-900"
            strokeLinecap="round"
            strokeDasharray={pathLen || 1000}
            strokeDashoffset={Math.max(0, (pathLen || 1000) - drawn)}
            vectorEffect="non-scaling-stroke"
          />
        )}
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ConnectingScrollLine;
