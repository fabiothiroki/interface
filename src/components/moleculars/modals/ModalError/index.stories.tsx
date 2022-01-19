import { ComponentStory, ComponentMeta } from "@storybook/react";
import ModalError, { Props } from ".";

export default {
  title: "ModalError",
  component: ModalError,
} as ComponentMeta<typeof ModalError>;

const Template: ComponentStory<typeof ModalError> = function (args: Props) {
  return <ModalError {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  visible: true,
  title: "Title",
  body: "Um erro ocorreu",
  buttonText: "voltar",
  customStyles: {
    overlay: {
      backgroundColor: "rgba(0, 68, 89, 0.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 3,
    },
    content: {
      border: "",
      marginTop: 0,
    },
  },
};
