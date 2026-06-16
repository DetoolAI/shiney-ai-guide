import { useEffect, useRef, useState, useCallback, ReactNode } from "react";

type Props = {
  children: ReactNode;
  anchorRefs: React.RefObject<HTMLElement | null>[];
};

type Point = { x: number; y: number };

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Organic SVG line that bends toward the cursor — interactive connector through feature blocks */
const ConnectingScrollLine = ({ children, anchorRefs }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef<Point>({ x: 50, y: 50 });
  const activeRef = useRef(false);

  const [pathD, setPathD] = useState("");
  const [cursor, setCursor] = useState<Point>({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  const buildPath = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const cRect = container.getBoundingClientRect();
    const cw = cRect.width;
    const ch = cRect.height;
    if (cw === 0 || ch === 0) return;

    const mouse = mouseRef.current;
    const isActive = activeRef.current;

    const anchors = anchorRefs
      .map((ref, i) => {
        const el = ref.current;
        if (!el) return null;
        const r = el.getBoundingClientRect();
        const centerX = r.left + r.width / 2 - cRect.left;
        const weave = i % 2 === 0 ? -0.12 : 0.12;
        return {
          x: ((centerX / cw) + weave) * 100,
          y: ((r.top + r.height / 2 - cRect.top) / ch) * 100,
        };
      })
      .filter(Boolean) as Point[];

    if (anchors.length < 1) return;

    const start: Point = { x: lerp(50, mouse.x, 0.25), y: 0 };
    const end: Point = isActive
      ? { x: mouse.x, y: mouse.y }
      : anchors[anchors.length - 1];

    const waypoints = [start, ...anchors];
    if (isActive) waypoints.push(end);

    let d = `M ${waypoints[0].x} ${waypoints[0].y}`;

    for (let i = 1; i < waypoints.length; i++) {
      const prev = waypoints[i - 1];
      const curr = waypoints[i];
      const midY = (prev.y + curr.y) / 2;

      const pull = isActive ? 0.55 : 0.2;
      const c1x = lerp(prev.x, mouse.x, pull);
      const c1y = lerp(midY, mouse.y, pull * 0.6);
      const c2x = lerp(curr.x, mouse.x, pull);
      const c2y = lerp(midY, mouse.y, pull * 0.6);

      d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${curr.x} ${curr.y}`;
    }

    setPathD(d);
  }, [anchorRefs]);

  const scheduleUpdate = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(buildPath);
  }, [buildPath]);

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const cRect = container.getBoundingClientRect();
      const inside =
        e.clientX >= cRect.left &&
        e.clientX <= cRect.right &&
        e.clientY >= cRect.top &&
        e.clientY <= cRect.bottom;

      if (!inside) {
        activeRef.current = false;
        setActive(false);
        scheduleUpdate();
        return;
      }

      activeRef.current = true;
      setActive(true);
      const x = ((e.clientX - cRect.left) / cRect.width) * 100;
      const y = ((e.clientY - cRect.top) / cRect.height) * 100;
      mouseRef.current = { x, y };
      setCursor({ x, y });
      scheduleUpdate();
    },
    [scheduleUpdate],
  );

  const onPointerLeave = useCallback(() => {
    activeRef.current = false;
    setActive(false);
    scheduleUpdate();
  }, [scheduleUpdate]);

  useEffect(() => {
    buildPath();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      cancelAnimationFrame(rafRef.current);
    };
  }, [buildPath, scheduleUpdate]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);

    const t = setTimeout(buildPath, 400);
    return () => {
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
      clearTimeout(t);
    };
  }, [buildPath, onPointerMove, onPointerLeave]);

  return (
    <div ref={containerRef} className="relative md:cursor-crosshair">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        {pathD && (
          <>
            <path
              d={pathD}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.35"
              className="text-gray-200"
              vectorEffect="non-scaling-stroke"
            />
            <path
              ref={pathRef}
              d={pathD}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
              className="text-gray-900 transition-opacity duration-300"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ opacity: active ? 1 : 0.65 }}
              vectorEffect="non-scaling-stroke"
            />
            {active && (
              <circle
                cx={cursor.x}
                cy={cursor.y}
                r="1.2"
                className="text-primary"
                fill="currentColor"
                vectorEffect="non-scaling-stroke"
              />
            )}
          </>
        )}
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ConnectingScrollLine;
