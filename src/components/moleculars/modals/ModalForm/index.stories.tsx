import { ComponentStory, ComponentMeta } from "@storybook/react";
import ModalFormEmailConfirm, { Props } from ".";

export default {
  title: "ModalFormEmailConfirm",
  component: ModalFormEmailConfirm,
} as ComponentMeta<typeof ModalFormEmailConfirm>;

const Template: ComponentStory<typeof ModalFormEmailConfirm> = function (args: Props) {
  return <ModalFormEmailConfirm {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  text: "ModalFormEmailConfirm",
};
