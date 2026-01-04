import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-[#10B981] text-white hover:bg-[#059669] focus:ring-[#10B981] shadow-sm hover:shadow-md hover:-translate-y-0.5',
    secondary: 'bg-[#FBBF24] text-gray-900 hover:bg-[#F59E0B] focus:ring-[#FBBF24] shadow-sm hover:shadow-md hover:-translate-y-0.5',
    outline: 'border-2 border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-white focus:ring-[#10B981]',
    ghost: 'text-gray-600 hover:text-[#10B981] hover:bg-gray-50'
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3.5 text-lg'
  };
  const widthClass = fullWidth ? 'w-full' : '';
  return <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`} {...props}>
      {children}
    </button>;
}