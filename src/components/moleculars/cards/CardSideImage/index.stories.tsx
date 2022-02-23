import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardSideImage, { Props } from ".";

export default {
  title: "CardSideImage",
  component: CardSideImage,
} as ComponentMeta<typeof CardSideImage>;

const Template: ComponentStory<typeof CardSideImage> = function (args: Props) {
  return <CardSideImage {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  imageUrl: "https://picsum.photos/id/237/200/300",
  imageAlt: "Image",
  text: "Você doou 99 dias de ração para animais resgatados",
};
