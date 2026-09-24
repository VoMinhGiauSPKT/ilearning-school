import React from 'react';
import './_sectionHeading.scss';

export default function SectionHeading({
  subtitle,
  title,
  align = 'center', // 'left' | 'center'
  className = '',
}) {
  return (
    <div className={`section-heading align-${align} ${className}`}>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      {title && <h2 className="section-title">{title}</h2>}
    </div>
  );
}
