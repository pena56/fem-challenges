import { NotificationItemProp } from "../components/NotificationItem";

import angelaAvatar from "../assets/images/avatar-angela-gray.webp";
import annaAvatar from "../assets/images/avatar-anna-kim.webp";
import jacobAvatar from "../assets/images/avatar-jacob-thompson.webp";
import kimberlyAvatar from "../assets/images/avatar-kimberly-smith.webp";
import markAvatar from "../assets/images/avatar-mark-webber.webp";
import nathanAvatar from "../assets/images/avatar-nathan-peterson.webp";
import rizkyAvatar from "../assets/images/avatar-rizky-hasanuddin.webp";

import picture from "../assets/images/image-chess.webp";

const data: NotificationItemProp[] = [
  {
    user: {
      name: "Mark Webber",
      profileImage: markAvatar,
    },
    type: "reaction",
    post: "My first tournament today!",
    date: "1m ago",
    read: false,
  },
  {
    user: {
      name: "Angela Gray",
      profileImage: angelaAvatar,
    },
    type: "follow",
    date: "5m ago",
    read: false,
  },
  {
    user: {
      name: "Jacob Thompson",
      profileImage: jacobAvatar,
    },
    type: "joined",
    group: "Cheese Club",
    date: "1 day ago",
    read: false,
  },
  {
    user: {
      name: "Rizky Hasanuddin",
      profileImage: rizkyAvatar,
    },
    type: "dm",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    date: "5 days ago",
    read: true,
  },
  {
    user: {
      name: "Kimberly Smith",
      profileImage: kimberlyAvatar,
    },
    type: "comment",
    picture,
    date: "1 week ago",
    read: true,
  },
  {
    user: {
      name: "Nathan Peterson",
      profileImage: nathanAvatar,
    },
    type: "reaction",
    post: "5 end-game strategies to increase your win rate",
    date: "2 weeks ago",
    read: true,
  },
  {
    user: {
      name: "Anna Kim",
      profileImage: annaAvatar,
    },
    type: "leave",
    group: "Cheese Club",
    date: "2 weeks ago",
    read: true,
  },
];

export default data;
