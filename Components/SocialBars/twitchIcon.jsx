"use client";
import { useState } from "react";

export default function TwitchIcon({ width, height }) {
  const [fillState, setFillState] = useState("white");
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 19"
      onMouseEnter={() => setFillState("red")}
      onMouseLeave={() => setFillState("white")}>
      <path
        d="M19.9602 13.6252V9.5538V0.680176H2.93894L0.811279 2.97688V15.0868H6.13043V18.845H8.47085L11.024 16.1307H17.407L19.9602 13.6252ZM7.40694 13.4165H4.00268C3.76864 13.4165 3.57715 13.2286 3.57715 12.9989V2.76817C3.57715 2.5385 3.76864 2.35059 4.00268 2.35059H17.6197C17.8537 2.35059 18.0452 2.5385 18.0452 2.76817V10.7022C18.0452 10.8171 18.0027 10.9215 17.9229 10.9998L15.5825 13.2965C15.5027 13.3748 15.391 13.4165 15.2793 13.4165H11.3697L8.07183 15.6401C8.00268 15.6871 7.91757 15.7132 7.83247 15.7132C7.76332 15.7132 7.69949 15.6976 7.63566 15.6662C7.49204 15.5932 7.40694 15.4522 7.40694 15.2956V13.4165Z"
        fill={fillState}
      />
      <path
        d="M13.79 9.76274V5.58691H12.0878V9.76274H13.79ZM9.53465 9.76274V5.58691H7.83252V9.76274H9.53465Z"
        fill={fillState}
      />
    </svg>
  );
}
