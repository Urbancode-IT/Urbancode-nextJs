import { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="loader" id="loader">
      <div className="ldr-logo">
        <img
          className="ldr-logo__img"
          src="/portfolio/urbancode-logo.png"
          alt="urbancode Training and Solutions"
          width={260}
          height={56}
          decoding="async"
        />
      </div>
      <div className="ldr-bar">
        <div className="ldr-fill"></div>
      </div>
      <div className="ldr-label">Loading excellence...</div>
    </div>
  );
}