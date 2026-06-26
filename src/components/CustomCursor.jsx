import { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setIsEnabled(media.matches);

    updateEnabled();
    media.addEventListener("change", updateEnabled);
    return () => media.removeEventListener("change", updateEnabled);
  }, []);

  useEffect(() => {
    if (!isEnabled) return undefined;

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      cursorRef.current = { x: clientX, y: clientY };
      setCursor({ x: clientX, y: clientY });
      setIsVisible(true);
    };

    const handleLeave = () => setIsVisible(false);
    const handleDown = () => setIsPressed(true);
    const handleUp = () => setIsPressed(false);

    let frameId;
    const animateRing = () => {
      const target = cursorRef.current;
      ringRef.current = {
        x: ringRef.current.x + (target.x - ringRef.current.x) * 0.14,
        y: ringRef.current.y + (target.y - ringRef.current.y) * 0.14,
      };
      setRing({
        x: ringRef.current.x,
        y: ringRef.current.y,
      });
      frameId = window.requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseenter", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    frameId = window.requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseenter", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.cancelAnimationFrame(frameId);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60] hidden lg:block"
      aria-hidden="true"
    >
      <div
        className="absolute rounded-full bg-primary/90 shadow-[0_0_18px_rgba(139,92,246,0.65)] transition-[opacity,transform] duration-200"
        style={{
          left: cursor.x,
          top: cursor.y,
          width: isPressed ? 8 : 10,
          height: isPressed ? 8 : 10,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
        }}
      />
      <div
        className="absolute rounded-full border border-primary/50 bg-primary/10 backdrop-blur-[2px] transition-[opacity,transform,border-color] duration-200"
        style={{
          left: ring.x,
          top: ring.y,
          width: isPressed ? 42 : 54,
          height: isPressed ? 42 : 54,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
        }}
      />
    </div>
  );
};
