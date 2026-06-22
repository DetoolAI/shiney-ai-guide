import { useEffect, useRef, useCallback, useState, ReactNode } from "react";

const ORANGE = "#e8702a";
const SVG_WIDTH = 400;
const LEFT_X = SVG_WIDTH * 0.28;
const RIGHT_X = SVG_WIDTH * 0.72;
const DOT_R = 8;

type Dot = { x: number; y: number; pathLen: number };

type Point = { x: number; y: number };

function yInContainer(el: Element, container: HTMLElement): number {
  const elRect = el.getBoundingClientRect();
  const cRect = container.getBoundingClientRect();
  return elRect.top - cRect.top + elRect.height / 2;
}

function findPathLengthAt(path: SVGPathElement, target: Point, total: number): number {
  let bestLen = 0;
  let bestDist = Infinity;
  const step = Math.max(4, total / 400);
  for (let l = 0; l <= total; l += step) {
    const pt = path.getPointAtLength(l);
    const dist = (pt.x - target.x) ** 2 + (pt.y - target.y) ** 2;
    if (dist < bestDist) {
      bestDist = dist;
      bestLen = l;
    }
  }
  return bestLen;
}

/** Full-page zig-zag line drawn on scroll — connects every [data-scroll-anchor] section */
const PageScrollLine = ({ children }: { children: ReactNode }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const [svgHeight, setSvgHeight] = useState(0);
  const [pathD, setPathD] = useState("");
  const [pathLen, setPathLen] = useState(0);
  const [drawn, setDrawn] = useState(0);
  const [dots, setDots] = useState<Dot[]>([]);
  const [visible, setVisible] = useState(false);

  const buildPath = useCallback(() => {
    const wrap = wrapRef.current;
    const path = pathRef.current;
    if (!wrap || window.innerWidth < 768) {
      setVisible(false);
      return;
    }

    setVisible(true);
    const height = wrap.scrollHeight;
    setSvgHeight(height);

    const anchors = Array.from(wrap.querySelectorAll("[data-scroll-anchor]"));
    if (anchors.length === 0) return;

    const anchorPoints: Point[] = anchors.map((el, i) => ({
      x: i % 2 === 0 ? LEFT_X : RIGHT_X,
      y: yInContainer(el, wrap),
    }));

    const start: Point = { x: SVG_WIDTH / 2, y: 60 };
    const end: Point = {
      x: anchorPoints.length % 2 === 0 ? LEFT_X : RIGHT_X,
      y: height - 60,
    };
    const waypoints = [start, ...anchorPoints, end];

    let d = `M ${waypoints[0].x} ${waypoints[0].y}`;
    for (let i = 1; i < waypoints.length; i++) {
      const prev = waypoints[i - 1];
      const curr = waypoints[i];
      const midY = (prev.y + curr.y) / 2;
      d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
    }

    setPathD(d);

    requestAnimationFrame(() => {
      const p = pathRef.current;
      if (!p) return;
      const total = p.getTotalLength();
      setPathLen(total);

      const dotData = anchorPoints.map((pt) => ({
        x: pt.x,
        y: pt.y,
        pathLen: findPathLengthAt(p, pt, total),
      }));
      setDots(dotData);
    });
  }, []);

  const onScroll = useCallback(() => {
    if (!visible || pathLen === 0) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
    setDrawn(pathLen * progress);
  }, [visible, pathLen]);

  useEffect(() => {
    buildPath();
    onScroll();

    const handleScroll = () => onScroll();
    const handleResize = () => {
      buildPath();
      onScroll();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    const ro = new ResizeObserver(() => {
      buildPath();
      onScroll();
    });
    if (wrapRef.current) ro.observe(wrapRef.current);

    const t = setTimeout(() => {
      buildPath();
      onScroll();
    }, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      ro.disconnect();
      clearTimeout(t);
    };
  }, [buildPath, onScroll]);

  return (
    <div ref={wrapRef} className="relative">
      {visible && svgHeight > 0 && pathD && (
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none hidden md:block"
          style={{ width: SVG_WIDTH, height: svgHeight, zIndex: 0 }}
          viewBox={`0 0 ${SVG_WIDTH} ${svgHeight}`}
          fill="none"
          aria-hidden
        >
          {/* faint full track */}
          <path
            d={pathD}
            stroke={ORANGE}
            strokeWidth={3}
            strokeOpacity={0.12}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* drawn line */}
          <path
            ref={pathRef}
            d={pathD}
            stroke={ORANGE}
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            strokeDasharray={pathLen || 1}
            strokeDashoffset={Math.max(0, (pathLen || 1) - drawn)}
          />
          {/* section dots */}
          {dots.map((dot, i) => {
            const reached = drawn >= dot.pathLen;
            return (
              <circle
                key={i}
                cx={dot.x}
                cy={dot.y}
                r={DOT_R}
                fill={reached ? ORANGE : "#ffffff"}
                stroke={ORANGE}
                strokeWidth={2}
                style={{ transition: "fill 0.35s ease" }}
              />
            );
          })}
        </svg>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default PageScrollLine;
