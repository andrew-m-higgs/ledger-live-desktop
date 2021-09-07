import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function QrCodeUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7041 9.636H19.8721V3.468H13.7041V9.636ZM2.64014 12.732H21.3601V11.916H2.64014V12.732ZM4.12814 20.532H10.2961V14.94H9.52814V19.764H4.89614V14.94H4.12814V20.532ZM4.12814 9.636H10.2961V3.468H4.12814V9.636ZM4.89614 8.868V4.236H9.52814V8.868H4.89614ZM6.50414 18.156H7.96814V16.668H6.50414V18.156ZM6.50414 7.284H7.96814V5.82H6.50414V7.284ZM13.7041 20.508H15.0961V19.116H13.7041V20.508ZM13.7041 16.332H16.5121V14.94H13.7041V16.332ZM14.4721 8.868V4.236H19.1041V8.868H14.4721ZM15.0961 19.116H17.8801V16.332H16.5121V17.7H15.0961V19.116ZM16.0561 7.284H17.5201V5.82H16.0561V7.284ZM18.3121 20.508H19.8721V17.7H18.3121V20.508Z"
        fill={color}
      />
    </svg>
  );
}

export default QrCodeUltraLight;