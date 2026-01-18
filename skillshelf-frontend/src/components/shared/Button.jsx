import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  type = 'button',
  disabled = false,
  ...props 
}) => {
  const baseStyles = 'btn font-medium transition-all duration-300';
  
  const variants = {
    primary: 'border-2 border-[#17a2b7] text-[#17a2b7] bg-transparent hover:bg-[#f7c32f] hover:border-[#f7c32f] hover:text-[#24292d] dark:text-[#17a2b7] dark:hover:text-[#24292d]',
    secondary: 'border-2 border-[#24292d] text-[#24292d] bg-transparent hover:bg-[#f7c32f] hover:border-[#f7c32f] dark:border-gray-300 dark:text-gray-300 dark:hover:text-[#24292d]',
    solid: 'bg-[#17a2b7] text-white border-2 border-[#17a2b7] hover:bg-[#f7c32f] hover:border-[#f7c32f] hover:text-[#24292d]',
  };

  const sizes = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
