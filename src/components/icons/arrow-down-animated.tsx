import React from "react";
import type { SVGProps } from "react";

type CustomType = SVGProps<SVGSVGElement> & {
  width?: string;
  height?: string;
  color?: string;
};

export default function LineMdChevronSmallTripleDown({ width, height, color, ...props }: CustomType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "1em"}
      height={height || "1em"}
      viewBox="0 0 24 24"
      {...props}
    >
      <g transform="rotate(-90 12 12)">
        <g
          fill="none"
          stroke={color || "currentColor"}
          strokeDasharray={8}
          strokeDashoffset={8}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path d="M14 12L19 7M14 12L19 17">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.3s"
              values="8;0"
            ></animate>
          </path>
          <path d="M9 12L14 7M9 12L14 17">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.3s"
              dur="0.3s"
              values="8;0"
            ></animate>
          </path>
          <path d="M4 12L9 7M4 12L9 17">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.6s"
              dur="0.3s"
              values="8;0"
            ></animate>
          </path>
        </g>
      </g>
    </svg>
  );
}
