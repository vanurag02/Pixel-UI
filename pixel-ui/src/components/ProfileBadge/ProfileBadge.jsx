import Avatar from "../Avatar/Avatar";
import "./ProfileBadge.css";

function ProfileBadge({
  src,
  initials,
  name,
  description,
  size = "md",
  avatarSize = "md",
  className,
  style,
}) {
  return (
    <div
      className={["profile-badge", `profile-badge--${size}`, className]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      <Avatar src={src} initials={initials} size={avatarSize} />
      <div className="profile-badge__info">
        {name && <span className="profile-badge__name">{name}</span>}
        {description && (
          <span className="profile-badge__description">{description}</span>
        )}
      </div>
    </div>
  );
}

export default ProfileBadge;
