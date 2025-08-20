interface OnlyButtonProps {
  label: string;
  className?: string;
  onclick?: () => void;
}
const OnlyButton: React.FC<OnlyButtonProps> = ({
  label,
  className = "",
  onclick,
  ...props
}) => {
  return (
    <button
      className={`transition-all rounded-lg max-md:w-full flex items-center justify-center font-medium border duration-300 ease-in-out hover:scale-x-105 active:scale-95 hover:shadow-2xl px-6 py-3  ${className}`}
      {...props}
      onClick={onclick}
    >
      {label}
    </button>
  );
};

export default OnlyButton;
