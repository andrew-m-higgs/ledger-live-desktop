import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function GiftCardUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.92 20.46H19.08C20.184 20.46 21 19.644 21 18.54V10.14C21 9.036 20.184 8.22 19.08 8.22H17.472C18.192 7.716 18.48 6.9 18.48 6.228C18.48 4.812 17.352 3.54 15.84 3.54C15.384 3.54 14.88 3.684 14.496 3.924C13.704 4.38 13.128 5.292 12.648 6.204L12 7.452L11.352 6.204C10.872 5.292 10.296 4.38 9.504 3.924C9.12 3.684 8.616 3.54 8.16 3.54C6.648 3.54 5.52 4.812 5.52 6.228C5.52 6.9 5.808 7.716 6.528 8.22H4.92C3.816 8.22 3 9.036 3 10.14V18.54C3 19.644 3.816 20.46 4.92 20.46ZM3.84 18.564V13.62H20.16V18.564C20.16 19.236 19.752 19.644 19.08 19.644H4.944C4.248 19.644 3.84 19.236 3.84 18.564ZM3.84 11.7V10.116C3.84 9.42 4.248 9.036 4.944 9.036H19.08C19.752 9.036 20.16 9.42 20.16 10.116V11.7H3.84ZM5.64 17.748H9.24V15.828H5.64V17.748ZM6.288 6.228C6.288 5.22 7.104 4.332 8.16 4.332C9.336 4.332 10.056 5.388 10.656 6.54L11.544 8.244H9.6C8.736 8.244 7.8 8.22 7.152 7.812C6.552 7.476 6.288 6.804 6.288 6.228ZM12.456 8.244L13.344 6.54C13.944 5.388 14.664 4.332 15.84 4.332C16.896 4.332 17.712 5.22 17.712 6.228C17.712 6.804 17.448 7.476 16.848 7.812C16.224 8.22 15.264 8.244 14.4 8.244H12.456Z"
        fill={color}
      />
    </svg>
  );
}

export default GiftCardUltraLight;