import { contact } from "../../../Constent";
export const FillLocationIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 16.8094 11.25 22.1409 11.5697 22.3641C11.6958 22.4524 11.846 22.4998 12 22.4998C12.154 22.4998 12.3042 22.4524 12.4303 22.3641C12.75 22.1409 20.25 16.8094 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5ZM12 6.75C12.5933 6.75 13.1734 6.92595 13.6667 7.25559C14.1601 7.58524 14.5446 8.05377 14.7716 8.60195C14.9987 9.15013 15.0581 9.75333 14.9424 10.3353C14.8266 10.9172 14.5409 11.4518 14.1213 11.8713C13.7018 12.2909 13.1672 12.5766 12.5853 12.6924C12.0033 12.8081 11.4001 12.7487 10.8519 12.5216C10.3038 12.2946 9.83524 11.9101 9.50559 11.4167C9.17595 10.9234 9 10.3433 9 9.75C9 8.95435 9.31607 8.19129 9.87868 7.62868C10.4413 7.06607 11.2044 6.75 12 6.75Z"
      fill="white"
    />
  </svg>
);
export const CallIcon = () => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx={20} cy={20} r="19.5" stroke="white" />
    <g clipPath="url(#clip0_543_247)">
      <mask
        id="mask0_543_247"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x={10}
        y={10}
        width={21}
        height={21}
      >
        <path d="M30.67 10.0002H10V30.6702H30.67V10.0002Z" fill="white" />
      </mask>
      <g mask="url(#mask0_543_247)">
        <mask
          id="mask1_543_247"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x={7}
          y={7}
          width={27}
          height={28}
        >
          <path
            d="M7.33203 7.66715H33.9987V34.3338H7.33203V7.66715Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_543_247)">
          <path
            d="M17.4387 20.1181C17.8833 20.6803 18.3726 21.2312 18.9047 21.7634C19.4369 22.2956 19.9879 22.7849 20.5499 23.2294C21.631 24.0844 23.1626 23.9953 24.1372 23.0207L24.4662 22.6918C25.4368 21.7212 27.0251 21.7212 27.9957 22.6918L29.3051 24.0011C31.6692 26.3652 27.8797 29.5528 26.3665 29.7817C23.3736 30.769 18.8386 29.1329 15.1869 25.4812C11.5352 21.8296 9.89904 17.2945 10.8864 14.3016C11.1153 12.7884 14.3029 8.99893 16.667 11.3631L17.9763 12.6724C18.947 13.643 18.947 15.2313 17.9763 16.2019L17.6474 16.5309C16.6728 17.5055 16.5836 19.0371 17.4387 20.1181Z"
            stroke="white"
            strokeMiterlimit="22.926"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.8049 14.1113C23.7286 14.3016 24.5762 14.7583 25.243 15.4252C25.9003 16.0825 26.3538 16.9157 26.5487 17.8247"
            stroke="white"
            strokeMiterlimit="22.926"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.3789 11.6547C22.786 11.1676 25.277 11.9187 27.0136 13.6553C28.7473 15.389 29.499 17.8751 29.0163 20.279"
            stroke="white"
            strokeMiterlimit="22.926"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_543_247">
        <rect
          width="20.67"
          height="20.67"
          fill="white"
          transform="translate(10 10.0002)"
        />
      </clipPath>
    </defs>
  </svg>
);
export const navUpper = [
  {
    label: "Dehradun, Uttarakhand",
    href: contact.addressUrl,
    icon: <FillLocationIcon />,
  },
  {
    label: contact.phoneNumber,
    href: "tel:" + contact.phoneNumber,
    icon: <CallIcon />,
  },
];
