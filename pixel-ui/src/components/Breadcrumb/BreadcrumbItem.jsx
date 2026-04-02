import "./Breadcrumb.css";

function BreadcrumbItem({ children, href, active = false }) {
  return active ? (
    <span
      className="breadcrumb__link breadcrumb__link--active"
      aria-current="page"
    >
      {children}
    </span>
  ) : (
    <a href={href} className="breadcrumb__link">
      {children}
    </a>
  );
}

export default BreadcrumbItem;
