import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function WalletMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.56014 20.4001H21.3601V7.2001H6.36014V9.0001H19.5601V18.6001H4.56014C4.44014 18.6001 4.44014 18.6001 4.44014 18.4801V5.5201C4.44014 5.4001 4.44014 5.4001 4.56014 5.4001H19.4401C19.3921 4.3441 18.5761 3.6001 17.5201 3.6001H4.56014C3.45614 3.6001 2.64014 4.4161 2.64014 5.5201V18.4801C2.64014 19.5841 3.45614 20.4001 4.56014 20.4001ZM15.0481 13.9201C15.0481 14.5921 15.6001 15.1921 16.3201 15.1921C17.0161 15.1921 17.5681 14.5921 17.5681 13.9201C17.5681 13.2241 17.0161 12.6721 16.3201 12.6721C15.6001 12.6721 15.0481 13.2241 15.0481 13.9201Z"
        fill={color}
      />
    </svg>
  );
}

export default WalletMedium;