import { Children } from "react";
import Avatar from "../Avatar/Avatar";
import "./AvatarGroup.css";

function AvatarGroup({ children, max = 5, size = "md", className, style }) {
  const avatars = Children.toArray(children);
  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  return (
    <div
      className={["avatar-group", className].filter(Boolean).join(" ")}
      style={style}
    >
      {visibleAvatars.map((avatar, index) => (
        <div key={index} className="avatar-group__item">
          {avatar}
        </div>
      ))}

      {remainingCount > 0 && (
        <div className="avatar-group__item">
          <Avatar initials={`+${remainingCount}`} size={size} />
        </div>
      )}
    </div>
  );
}

export default AvatarGroup;
