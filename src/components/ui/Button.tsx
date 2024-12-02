import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
}

export const Button = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button',
  variant = 'primary' 
}: ButtonProps) => {
  const baseStyles = 'px-6 py-2 rounded-lg font-medium transition-all duration-300';
  const variantStyles = {
    primary: 'neon-border bg-background hover:bg-primary hover:text-background',
    secondary: 'neon-border-secondary bg-background hover:bg-secondary hover:text-background'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};