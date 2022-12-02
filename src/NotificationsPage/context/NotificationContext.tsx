import { createContext, useMemo, useState, useCallback } from "react";

import data from "../data/notificationData";
import { NotificationItemProp } from "../components/NotificationItem";

interface NotificationProviderProps {
  children: React.ReactNode;
}

export interface NotificationContextProps {
  unread: number;
  data: NotificationItemProp[];
  markAllAsRead: () => void;
}

export const NotificationContext =
  createContext<NotificationContextProps | null>(null);

export default function NotificationProvider({
  children,
}: NotificationProviderProps) {
  const [unread, setUnread] = useState(() => {
    return data.filter((item) => !item.read).length;
  });
  const [notifications, setNotifications] = useState(data);

  const setAllAsRead = useCallback(() => {
    const newData = data.map((item) => ({ ...item, read: true }));
    setNotifications(newData);
    setUnread(() => {
      return newData.filter((item) => !item.read).length;
    });
  }, []);

  const values = useMemo(
    () => ({
      unread,
      data: notifications,
      markAllAsRead: setAllAsRead,
    }),
    [notifications, setAllAsRead, unread]
  );

  return (
    <NotificationContext.Provider value={values}>
      {children}
    </NotificationContext.Provider>
  );
}
