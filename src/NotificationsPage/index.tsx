import { useContext } from "react";

// import "./style.scss";
import NotificationItem from "./components/NotificationItem";
import {
  NotificationContext,
  NotificationContextProps,
} from "./context/NotificationContext";

export default function Index() {
  const { data, unread, markAllAsRead } = useContext(
    NotificationContext
  ) as NotificationContextProps;

  return (
    <main>
      <header>
        <div>
          <h1>Notifications</h1>
          <span>{unread}</span>
        </div>
        <button onClick={markAllAsRead} type="button">
          Mark all as read
        </button>
      </header>

      <div className="notification__list">
        {data.map((item) => (
          <NotificationItem
            key={item.user.name}
            date={item.date}
            user={item.user}
            type={item.type}
            post={item.post}
            read={item.read}
            picture={item.picture}
            message={item.message}
            group={item.group}
          />
        ))}
      </div>
    </main>
  );
}
