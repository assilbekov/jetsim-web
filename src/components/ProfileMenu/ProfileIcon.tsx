interface ProfileIconProps extends React.SVGProps<SVGSVGElement> {
  backgroundColor?: string;
  personColor?: string;
}

export const ProfileIcon: React.FC<ProfileIconProps> = ({
  backgroundColor = "#E9F0F2",
  personColor = "#00B5F2",
  className = "w-8 h-8",
  ...props
}) => {
  const combinedClassName = `${className}`.trim();

  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={combinedClassName}
      {...props}
    >
      <g id="image">
        <path
          d="M18 1C8.61116 1 1 8.61116 1 18C1 27.3888 8.61116 35 18 35C27.3888 35 35 27.3888 35 18C35 8.61116 27.3888 1 18 1Z"
          fill={backgroundColor}
        />
        <path
          d="M18 1C8.61116 1 1 8.61116 1 18C1 27.3888 8.61116 35 18 35C27.3888 35 35 27.3888 35 18C35 8.61116 27.3888 1 18 1Z"
          stroke="white"
          strokeWidth="2"
        />
        <path
          id="person"
          d="M17.9996 16.9977C17.1196 16.9977 16.3663 16.6843 15.7396 16.0577C15.1129 15.431 14.7996 14.6777 14.7996 13.7977C14.7996 12.9177 15.1129 12.1643 15.7396 11.5377C16.3663 10.911 17.1196 10.5977 17.9996 10.5977C18.8796 10.5977 19.6329 10.911 20.2596 11.5377C20.8863 12.1643 21.1996 12.9177 21.1996 13.7977C21.1996 14.6777 20.8863 15.431 20.2596 16.0577C19.6329 16.6843 18.8796 16.9977 17.9996 16.9977ZM11.5996 24.3977V22.1577C11.5996 21.7043 11.7163 21.2877 11.9496 20.9077C12.1829 20.5277 12.4929 20.2377 12.8796 20.0377C13.7063 19.6243 14.5463 19.3143 15.3996 19.1077C16.2529 18.901 17.1196 18.7977 17.9996 18.7977C18.8796 18.7977 19.7463 18.901 20.5996 19.1077C21.4529 19.3143 22.2929 19.6243 23.1196 20.0377C23.5063 20.2377 23.8163 20.5277 24.0496 20.9077C24.2829 21.2877 24.3996 21.7043 24.3996 22.1577V24.3977H11.5996Z"
          fill={personColor}
        />
      </g>
    </svg>
  );
};