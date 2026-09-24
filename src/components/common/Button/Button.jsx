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
  href,
  as,
  ...props
}) {
  const Component = as || (href ? 'a' : 'button');
  const componentProps = Component === 'button' ? { type, onClick, ...props } : { href, onClick, ...props };

  return (
    <Component
      className={`custom-btn btn-${variant} btn-${size} shape-${shape} ${className}`.trim()}
      {...componentProps}
    >
      {icon && iconPosition === 'left' && <span className="btn-icon icon-left">{icon}</span>}
      {children && <span className="btn-text-content">{children}</span>}
      {icon && iconPosition === 'right' && <span className="btn-icon icon-right">{icon}</span>}
    </Component>
  );
}
