// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from "@storybook/react";

import Input from "./index";

export default {
  title: "Card Input",
  component: Input,
} as Meta<typeof Input>;

const Template: Story = (args) => <Input {...args} />;

export const BasicInput = Template.bind({});
