// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from "@storybook/react";

import NotificationItem, { NotificationItemProp } from "./index";
import sampleProfile from "../../assets/images/avatar-anna-kim.webp";
import samplePost from "../../assets/images/image-chess.webp";

export default {
  title: "Notification Item",
  component: NotificationItem,
} as Meta<typeof NotificationItem>;

const Template: Story<NotificationItemProp> = (args) => (
  <NotificationItem {...args} />
);

export const PostReactionNotification = Template.bind({});
export const FollowsNotification = Template.bind({});
export const JoinGroupNotification = Template.bind({});
export const DMNotification = Template.bind({});
export const CommentNotification = Template.bind({});
export const LeaveGroupNotification = Template.bind({});

PostReactionNotification.args = {
  date: "1m ago",
  read: false,
  type: "reaction",
  post: "My first tournament today!",
  user: {
    name: "Jane Doe",
    profileImage: sampleProfile,
  },
};

FollowsNotification.args = {
  date: "1m ago",
  read: false,
  type: "follow",
  user: {
    name: "Jane Doe",
    profileImage: sampleProfile,
  },
};

JoinGroupNotification.args = {
  date: "1m ago",
  read: false,
  type: "joined",
  group: "Chess Club",
  user: {
    name: "Jane Doe",
    profileImage: sampleProfile,
  },
};

DMNotification.args = {
  date: "1m ago",
  read: false,
  type: "dm",
  message:
    " Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  user: {
    name: "Jane Doe",
    profileImage: sampleProfile,
  },
};

CommentNotification.args = {
  date: "1m ago",
  read: false,
  type: "comment",
  picture: samplePost,
  user: {
    name: "Jane Doe",
    profileImage: sampleProfile,
  },
};

LeaveGroupNotification.args = {
  date: "1m ago",
  read: false,
  type: "leave",
  group: "Chess Club",
  user: {
    name: "Jane Doe",
    profileImage: sampleProfile,
  },
};
