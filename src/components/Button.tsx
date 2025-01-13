import { Link, LinkProps } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  to?: LinkProps["to"];
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  to,
  ...props
}) => {
  const baseClass =
    "px-5 py-4 rounded-full z-10 relative flex gap-2 font-semibold items-center justify-center text-center whitespace-nowrap cursor-pointer transition-all duration-300 ease-in-out";
  const variantClass = {
    primary: "bg-white text-black hover:bg-[#064386] hover:text-white",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300",
    outline:
      "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-100 focus:ring-blue-300",
  };

  return (
    <div className="relative inline-block group w-fit">
      <div
        className="absolute top-1.5 right-1.5 w-full h-full rounded-full border border-dashed border-light-grey z-0 group-hover:border-[#064386] transition-all duration-300 ease-in-out"
        aria-hidden="true"
      ></div>
      {to ? (
        <Link
          to={to}
          className={`${baseClass} ${variantClass[variant]} ${className}`}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </Link>
      ) : (
        <button
          className={`${baseClass} ${variantClass[variant]} ${className}`}
          {...props}
        >
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
