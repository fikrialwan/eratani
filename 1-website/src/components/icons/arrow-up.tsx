import React from "react";

export const ArrowUpIcon = ({
  width = "34",
  height = "20",
  fill = "#121212",
  ...props
}: React.ComponentProps<"svg">) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29.0002 19.4L17.0002 7.39995L5.0002 19.4L0.200195 17L17.0002 0.199951L33.8002 17L29.0002 19.4Z"
        fill={fill}
      />
    </svg>
  );
};
