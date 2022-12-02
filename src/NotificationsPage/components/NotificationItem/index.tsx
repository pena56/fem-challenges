import style from "./style.module.scss";

interface User {
  name: string;
  profileImage: string;
}

interface CommonProps {
  user: User;
  date: string;
  read: boolean;
}

type ConditionalProps =
  | {
      post?: string;
      group?: never;
      message?: never;
      picture?: never;
      type: "reaction";
    }
  | {
      post?: never;
      group?: never;
      message?: never;
      picture?: never;
      type: "follow";
    }
  | {
      post?: never;
      group?: string;
      message?: never;
      picture?: never;
      type: "joined" | "leave";
    }
  | {
      post?: never;
      group?: never;
      message?: string;
      picture?: never;
      type: "dm";
    }
  | {
      post?: never;
      group?: never;
      message?: never;
      picture?: string;
      type: "comment";
    };

export type NotificationItemProp = CommonProps & ConditionalProps;

export default function NotificationItem({
  user,
  type,
  date,
  group,
  message,
  picture,
  post,
  read,
}: NotificationItemProp) {
  const verbSentence = {
    reaction: "reacted to your recent post",
    follow: "followed you",
    joined: "has joined your group",
    dm: "sent you a private message",
    comment: "commented on your picture",
    leave: "left the group",
  };

  return (
    <div className={`${style.container} ${!read && style.unread}`}>
      <img src={user.profileImage} alt="" />
      <div className={style.container__contents}>
        <div className={style.container__writeup}>
          <p>
            {/* username */}
            <a href="/notifications" className={style.username}>
              {user.name}
            </a>
            {/* verb */}
            <span className={style.verb}>{verbSentence[type]}</span>
            {/* object */}
            {type === "reaction" && (
              <a href="/notifications" className={style.object}>
                {post}
              </a>
            )}
            {(type === "joined" || type === "leave") && (
              <a href="/notifications" className={style.object}>
                {group}
              </a>
            )}
            {!read && <span className={style.circle} />}
          </p>
          <p className={style.date}>{date}</p>
          {type === "dm" && <p className={style.message}>{message}</p>}
        </div>
        {type === "comment" && (
          <img className={style.post} src={picture} alt="" />
        )}
      </div>
    </div>
  );
}
