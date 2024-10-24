import React from "react";

export const TiktokIcon = ({
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
      <path
        d="M9.79507 3.345C9.29665 3.2354 8.84576 2.97072 8.50711 2.58895C8.16846 2.20717 7.95945 1.72794 7.91007 1.22V1H6.18507V7.835C6.18542 8.13828 6.09034 8.43398 5.91329 8.68022C5.73625 8.92646 5.48621 9.11075 5.1986 9.20699C4.911 9.30323 4.6004 9.30653 4.31081 9.21644C4.02122 9.12634 3.76732 8.94741 3.58507 8.705C3.4218 8.49042 3.32182 8.23444 3.29644 7.966C3.27106 7.69756 3.32129 7.42738 3.44146 7.186C3.56163 6.94462 3.74694 6.74168 3.97643 6.60013C4.20592 6.45858 4.47044 6.38406 4.74007 6.385C4.88919 6.38415 5.03757 6.40607 5.18007 6.45V4.7C5.01424 4.67946 4.84713 4.67111 4.68007 4.675C4.06473 4.69144 3.46753 4.88697 2.96161 5.23763C2.4557 5.5883 2.06302 6.07889 1.83166 6.64932C1.6003 7.21975 1.54031 7.84527 1.65903 8.44928C1.77775 9.05329 2.07003 9.60957 2.50007 10.05C2.94082 10.4981 3.50482 10.8051 4.12042 10.9319C4.73602 11.0587 5.37543 10.9997 5.9574 10.7623C6.53937 10.5249 7.03764 10.1199 7.38889 9.59863C7.74013 9.0774 7.92851 8.46353 7.93007 7.835V4.335C8.6258 4.83197 9.46008 5.09782 10.3151 5.095V3.395C10.1471 3.39569 9.97956 3.37894 9.81507 3.345H9.79507Z"
        fill={fill}
      />
    </svg>
  );
};