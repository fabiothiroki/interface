import { ComponentStory, ComponentMeta } from "@storybook/react";
import SliderImage, { Props } from ".";

export default {
  title: "SliderImage",
  component: SliderImage,
} as ComponentMeta<typeof SliderImage>;

const Template: ComponentStory<typeof SliderImage> = function (args: Props) {
  return <SliderImage {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  sliderImages: [{imageUrl:'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}],
};
