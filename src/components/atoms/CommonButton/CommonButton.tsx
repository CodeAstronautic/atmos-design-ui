import React from 'react';

interface CommonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({ onClick, children, className = '', style = {}, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`gap-2.5 self-stretch  whitespace-nowrap bg-white rounded-lg text-[color:var(--,#4A77FF)] ${className}`}
      style={style}
      {...props}>
      {children}
    </button>
  );
};

export default CommonButton;
