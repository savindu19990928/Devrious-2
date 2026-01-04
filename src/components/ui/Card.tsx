import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}
export function Card({
  children,
  className = '',
  hoverEffect = true
}: CardProps) {
  return <div className={`bg-white rounded-xl border border-gray-100 p-6 ${hoverEffect ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#10B981]/30' : 'shadow-sm'} ${className}`}>
      {children}
    </div>;
}