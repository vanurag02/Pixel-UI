import "./Avatar.css";

function Avatar({ src, alt, initials, size = "md", className, style }) {
  return (
    <div
      className={[
        "avatar",
        `avatar--${size}`,
        !src ? "avatar--initials" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="avatar__image"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentNode.classList.add("avatar--initials");
            e.target.parentNode.classList.remove("avatar--image");
          }}
        />
      ) : initials ? (
        <span className="avatar__initials">
          {initials.slice(0, 2).toUpperCase()}
        </span>
      ) : (
        <svg
          className="avatar__fallback"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="8" r="4" fill="currentColor" />
          <path
            d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  );
}

export default Avatar;
