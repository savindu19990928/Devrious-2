import React from 'react';
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}
export function TextArea({
  label,
  error,
  className = '',
  ...props
}: TextAreaProps) {
  return <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {label}
        </label>}
      <textarea className={`w-full px-4 py-2.5 rounded-lg border bg-gray-50 focus:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent ${error ? 'border-red-500' : 'border-gray-200'} ${className}`} rows={4} {...props} />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>;
}