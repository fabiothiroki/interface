import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardRoundImage, { Props } from ".";

export default {
  title: "CardRoundImage",
  component: CardRoundImage,
} as ComponentMeta<typeof CardRoundImage>;

const Template: ComponentStory<typeof CardRoundImage> = function (args: Props) {
  return <CardRoundImage {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  rigthImage: "https://picsum.photos/200/300",
  leftImage: "https://picsum.photos/200/300",
  centerImage: "https://picsum.photos/200/300",
  bottomImage: "https://picsum.photos/200/300",
};
