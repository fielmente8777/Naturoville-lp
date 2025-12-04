import { ArrowUpIcons } from "@/utils/icons";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  label: string;
  className?: string;
  [key: string]: unknown;
  showIcon?: boolean;
}
const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  label,
  className = "",
  showIcon = false,
  ...props
}) => {
  return (
    <Link
      href={href}
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-all ${showIcon ? "rounded-full" : "rounded-lg"} gap-2 max-md:w-full flex items-center justify-center  font-medium border duration-300 ease-in-out hover:scale-x-105 active:scale-95 hover:shadow-2xl px-6 py-3  ${className}`}
    >
      {label}
      {showIcon && (
        <span className="">
          <ArrowUpIcons />
        </span>
      )}
    </Link>
  );
};

export default LinkButton;
