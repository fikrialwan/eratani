import React from "react";

export const GlobeIcon = ({
  width = "12",
  height = "12",
  fill = "#F3F3F3",
  ...props
}: React.ComponentProps<"svg">) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_0_3392)">
        <path
          d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 6C4 8.76142 4.89543 11 6 11C7.10457 11 8 8.76142 8 6C8 3.23858 7.10457 1 6 1C4.89543 1 4 3.23858 4 6Z"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 6H11"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_3392">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
