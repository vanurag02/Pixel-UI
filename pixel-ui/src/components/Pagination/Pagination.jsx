import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Pagination.css";

function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function getPages(total, page, siblings, boundaries) {
  const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;

  if (totalPageNumbers >= total) {
    return range(1, total);
  }

  const leftSiblingIndex = Math.max(page - siblings, boundaries + 1);
  const rightSiblingIndex = Math.min(page + siblings, total - boundaries);

  const showLeftDots = leftSiblingIndex > boundaries + 2;
  const showRightDots = rightSiblingIndex < total - boundaries - 1;

  const leftPages = range(1, boundaries);
  const rightPages = range(total - boundaries + 1, total);

  if (!showLeftDots && showRightDots) {
    const leftRange = range(1, 3 + siblings * 2);
    return [...leftRange, "...", ...rightPages];
  }

  if (showLeftDots && !showRightDots) {
    const rightRange = range(total - (3 + siblings * 2) + 1, total);
    return [...leftPages, "...", ...rightRange];
  }

  const middleRange = range(leftSiblingIndex, rightSiblingIndex);
  return [...leftPages, "...", ...middleRange, "...", ...rightPages];
}

function Pagination({
  total,
  page = 1,
  onChange,
  siblings = 1,
  boundaries = 1,
  size = "md",
  className,
  style,
}) {
  const pages = getPages(total, page, siblings, boundaries);

  const handlePrev = () => {
    if (page > 1) onChange(page - 1);
  };
  const handleNext = () => {
    if (page < total) onChange(page + 1);
  };

  return (
    <div
      className={["pagination", `pagination--${size}`, className]
        .filter(Boolean)
        .join(" ")}
      style={style}
      role="navigation"
      aria-label="Pagination"
    >
      {/* Previous */}
      <button
        className="pagination__btn pagination__btn--control"
        onClick={handlePrev}
        disabled={page === 1}
        aria-label="Previous page"
        type="button"
      >
        <ChevronLeft size={16} />
      </button>

      {/* Pages */}
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`dots-${i}`} className="pagination__dots">
            ...
          </span>
        ) : (
          <button
            key={p}
            className={[
              "pagination__btn",
              p === page ? "pagination__btn--active" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => onChange(p)}
            aria-current={p === page ? "page" : undefined}
            type="button"
          >
            {p}
          </button>
        ),
      )}

      {/* Next */}
      <button
        className="pagination__btn pagination__btn--control"
        onClick={handleNext}
        disabled={page === total}
        aria-label="Next page"
        type="button"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

export default Pagination;
