import React from "react";

const Button = ({ children, onClick, className = "", variant = "primary", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 text-lg cursor-pointer font-semibold rounded-lg transition-all ${
        variant === "primary"
          ? "bg-primary text-white outline-none hover:bg-opacity-90"
          : "border border-primary text-primary bg-white hover:bg-primary hover:text-white "
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
