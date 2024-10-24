import React from "react";

export const MenuIcon = ({
  width = "56",
  height = "56",
  fill = "#0E9749",
  ...props
}: React.ComponentProps<"svg">) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_103_229)">
        <rect
          x="12"
          y="9"
          width="32"
          height="32"
          rx="5"
          fill="white"
          fillOpacity="0.1"
          shapeRendering="crispEdges"
        />
        <path
          d="M17.3333 33H38.6667C39.4 33 40 32.4 40 31.6667C40 30.9333 39.4 30.3333 38.6667 30.3333H17.3333C16.6 30.3333 16 30.9333 16 31.6667C16 32.4 16.6 33 17.3333 33ZM17.3333 26.3333H38.6667C39.4 26.3333 40 25.7333 40 25C40 24.2667 39.4 23.6667 38.6667 23.6667H17.3333C16.6 23.6667 16 24.2667 16 25C16 25.7333 16.6 26.3333 17.3333 26.3333ZM16 18.3333C16 19.0667 16.6 19.6667 17.3333 19.6667H38.6667C39.4 19.6667 40 19.0667 40 18.3333C40 17.6 39.4 17 38.6667 17H17.3333C16.6 17 16 17.6 16 18.3333Z"
          fill={fill}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_103_229"
          x="0"
          y="0"
          width="56"
          height="56"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_229"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_229"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
