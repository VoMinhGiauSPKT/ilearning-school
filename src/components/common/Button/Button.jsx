import './_button.scss';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'outline' | 'text'
  size = 'md', // 'sm' | 'md' | 'lg'
  shape = 'pill', // 'pill' | 'rounded' | 'square' | 'circle'
  icon,
  iconPosition = 'right', // 'left' | 'right'
  className = '',
  type = 'button',
  onClick,
  ...props
}) {
  return (
    <button
      type={type}
      className={`custom-btn btn-${variant} btn-${size} shape-${shape} ${className}`.trim()}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="btn-icon icon-left">{icon}</span>}
      {children && <span className="btn-text-content">{children}</span>}
      {icon && iconPosition === 'right' && <span className="btn-icon icon-right">{icon}</span>}
    </button>
  );
}
