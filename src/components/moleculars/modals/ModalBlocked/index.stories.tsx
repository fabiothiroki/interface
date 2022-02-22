import { ComponentStory, ComponentMeta } from "@storybook/react";
import ModalBlocked, { Props } from ".";

export default {
  title: "ModalBlocked",
  component: ModalBlocked,
} as ComponentMeta<typeof ModalBlocked>;

const Template: ComponentStory<typeof ModalBlocked> = function (args: Props) {
  return <ModalBlocked {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  visible: true,
  title: "Donation blocked",
  body: "This account has already used it’s daily donation ticket. Come back tomorrow!",
  buttonText: "Ok",
};
