import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardCircleImage, { Props } from ".";

export default {
  title: "CardCircleImage",
  component: CardCircleImage,
} as ComponentMeta<typeof CardCircleImage>;

const Template: ComponentStory<typeof CardCircleImage> = function (
  args: Props,
) {
  return (
    <div style={{ height: 184, width: 184 }}>
      <CardCircleImage {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  image: "https://picsum.photos/600/600",
};
