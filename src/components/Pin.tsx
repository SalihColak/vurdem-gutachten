import * as React from "react";

function SvgComponent(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      data-name="Ebene 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 155 252"
      {...props}
    >
      <path
        d="M77.5 0C34.7 0 0 34.7 0 77.5S77.5 252 77.5 252 155 120.3 155 77.5 120.3 0 77.5 0zm0 112C58.45 112 43 96.55 43 77.5S58.45 43 77.5 43 112 58.45 112 77.5 96.55 112 77.5 112z"
        fill={props.fill}
        strokeWidth={0}
        data-name="Ebene 1"
      />
    </svg>
  );
}

export default SvgComponent;
