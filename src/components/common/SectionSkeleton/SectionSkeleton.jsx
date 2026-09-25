import './_sectionSkeleton.scss';

export default function SectionSkeleton({ minHeight = 400, className = '' }) {
  return (
    <div
      className={`section-skeleton-placeholder ${className}`}
      style={{ minHeight: typeof minHeight === 'number' ? `${minHeight}px` : minHeight }}
      aria-hidden="true"
    >
      <div className="skeleton-shimmer" />
    </div>
  );
}
