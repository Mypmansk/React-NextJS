"use client";
import { useState } from "react";

export default function YoutybeIcon({ width, height }) {
  const [fillState, setFillState] = useState("white");
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 26 19"
      onMouseEnter={() => setFillState("red")}
      onMouseLeave={() => setFillState("white")}
      fill={fillState}>
      <path d="M20.61 0.183594H5.98961C3.12627 0.183594 0.799805 2.55085 0.799805 5.4644V12.8973C0.799805 15.8163 3.12627 18.1781 5.98961 18.1781H20.6046C23.4733 18.1781 25.7944 15.8108 25.7944 12.8973V5.4644C25.7998 2.55085 23.4733 0.183594 20.61 0.183594ZM17.0959 9.54779L10.2575 12.8642C10.0731 12.9524 9.86705 12.82 9.86705 12.6103V5.7679C9.86705 5.55821 10.084 5.42578 10.2629 5.51958L17.1013 9.04564C17.3074 9.15048 17.302 9.44846 17.0959 9.54779Z" />
    </svg>
  );
}