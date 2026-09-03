interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className: customClassName = "",
}: ButtonProps) => {
  const buttonStyles = {
    base: "flex justify-center items-center gap-2 text-nowrap leading-none hover:cursor-pointer transition-colors duration-200 font-medium rounded-full transition py-2.5",
    variant: {
      primary: "bg-white text-primary hover:bg-gray-100",
      secondary:
        "bg-transparent border border-white text-white hover:bg-white hover:text-black",
    },
    size: {
      sm: "px-5",
      md: "px-8",
      lg: "px-10",
    },
  };

  const buttonClassName = `${buttonStyles.base} ${buttonStyles.variant[variant]} ${buttonStyles.size[size]} ${customClassName}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};
