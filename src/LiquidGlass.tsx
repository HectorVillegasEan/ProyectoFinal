import type { FC, ReactNode } from 'react';
import './LiquidGlass.css';

interface LiquidGlassProps {
  children: ReactNode;
  className?: string; 
}

const LiquidGlass: FC<LiquidGlassProps> = ({ children, className }) => {
  return (
    <div className={`liquidGlass-wrapper ${className || ''}`}>
      <div className="liquidGlass-effect"></div>
      <div className="liquidGlass-tint"></div>
      <div className="liquidGlass-shine"></div>
      <div className="liquidGlass-text">
        {children}
      </div>
    </div>
  );
};

export default LiquidGlass;