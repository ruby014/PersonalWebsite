import { assets } from "@/public/assets/assets";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState("right");
  const prevXRef = useRef(0);

  useEffect(() => {
    const updatePosition = (e) => {
        const currentX = e.clientX;
        const prevX = prevXRef.current;

        if (currentX > prevX) {
          setDirection("right");
        } else if (currentX < prevX) {
          setDirection("left");
        }
  
        prevXRef.current = currentX;
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  const currentCursor = direction == "right" ? assets.catback : assets.catheart; 

  return (
    <Image
      src={currentCursor} 
      alt="Cursor Icon"
      className="fixed z-50 w-17 h-17 z-[9999]"
      style={{
        top: position.y + 10, 
        left: position.x + 10,
      }}
    />
  );
}
