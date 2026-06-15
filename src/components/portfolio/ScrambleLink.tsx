import { useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

type Props = {
  href: string;
  children: string;
  className?: string;
};


export function ScrambleLink({ href, children, className }: Props) {
  const [display, setDisplay] = useState(children);
  const frameRef = useRef(0);
  const rafRef = useRef(0);

  const scramble = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    cancelAnimationFrame(rafRef.current);
    const target = children;
    const start = display;
    const len = Math.max(start.length, target.length);
    const queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];
    for (let i = 0; i < len; i++) {
      const from = start[i] || "";
      const to = target[i] || "";
      const s = Math.floor(Math.random() * 8);
      const e = s + Math.floor(Math.random() * 8) + 4;
      queue.push({ from, to, start: s, end: e });
    }
    frameRef.current = 0;
    const update = () => {
      let output = "";
      let complete = 0;
      for (let i = 0; i < queue.length; i++) {
        const q = queue[i];
        if (frameRef.current >= q.end) {
          complete++;
          output += q.to;
        } else if (frameRef.current >= q.start) {
          if (!q.char || Math.random() < 0.28) {
            q.char = CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          output += q.char;
        } else {
          output += q.from;
        }
      }
      setDisplay(output);
      if (complete < queue.length) {
        frameRef.current++;
        rafRef.current = requestAnimationFrame(update);
      }
    };
    update();
  };

  return (
    <a href={href} className={className} onMouseEnter={scramble} onFocus={scramble}>
      {display}
    </a>
  );
}
