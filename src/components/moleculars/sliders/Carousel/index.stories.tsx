import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardSideImageButton from "components/moleculars/CardSideImageButton";
import image from "assets/images/newspaper.svg";
import theme from "styles/theme";
import Carousel, { Props } from ".";

export default {
  title: "Carousel",
  component: Carousel,
  parameters: {
    backgrounds: {
      default: "ribonBlue",
      values: [{ name: "ribonBlue", value: theme.colors.ribonBlue }],
    },
  },
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = function (args: Props) {
  return <Carousel {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  sliderPerView: 3,
  spacing: 10,
  children: [
    <CardSideImageButton
      icon={image}
      title="title"
      onClick={() => {}}
      buttonText="button"
    />,
    <CardSideImageButton
      icon={image}
      title="title"
      onClick={() => {}}
      buttonText="button"
    />,
    <CardSideImageButton
      icon={image}
      title="title"
      onClick={() => {}}
      buttonText="button"
    />,
    <CardSideImageButton
      icon={image}
      title="title"
      onClick={() => {}}
      buttonText="button"
    />,
    <CardSideImageButton
      icon={image}
      title="title"
      onClick={() => {}}
      buttonText="button"
    />,
  ],
};
