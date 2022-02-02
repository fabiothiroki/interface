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
  rightImage: "https://i.imgur.com/0ReKH37.png",
  leftImage: "https://i.imgur.com/usCwtqX.png",
  centerImage: "https://i.imgur.com/XcuQwoJ.png0",
  bottomImage: "https://i.imgur.com/5oJSpVO.png",
};
