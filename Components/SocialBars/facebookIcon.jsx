"use client";
import { useState } from "react";

export default function FacebookIcon({ width, height }) {
  const [fillState, setFillState] = useState("white");

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 10 20"
      onMouseEnter={() => setFillState("red")}
      onMouseLeave={() => setFillState("white")}
      fill={fillState}>
      <path d="M6.65382 19.1726H2.56282V9.67859H0.517822V6.40559H2.56282V4.44159C2.56282 1.77259 3.71782 0.183594 6.99582 0.183594H9.72582V3.45659H8.02082C6.74282 3.45659 6.65882 3.91459 6.65882 4.76859L6.65382 6.40559H9.74582L9.38382 9.67859H6.65382V19.1726Z" />
    </svg>
  );
}
