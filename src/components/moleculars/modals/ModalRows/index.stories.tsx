import { ComponentStory, ComponentMeta } from "@storybook/react";
import ModalRows, { Props } from ".";
import icon from "assets/images/newspaper.svg";

export default {
  title: "ModalRows",
  component: ModalRows,
} as ComponentMeta<typeof ModalRows>;

const Template: ComponentStory<typeof ModalRows> = function (args: Props) {
  return <ModalRows {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  title: "ModalRows",
  visible: true,
  primaryButtonText: "Primary",
  secondaryButtonText: "Secondary",
  rowsContent: [
    {
        id: 1,
        icon: icon,
        text: "dunaaa"
    }]
};
