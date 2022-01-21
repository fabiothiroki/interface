import React from "react";
import { useKeenSlider } from "keen-slider/react";
import * as S from "./styles";
import "keen-slider/keen-slider.min.css";

export type Props = {
  sliderPerView?: number;
  spacing?: number;
  children: JSX.Element[];
};
function Carousel({
  sliderPerView = 2,
  spacing = 15,
  children,
}: Props): JSX.Element {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: sliderPerView,
      spacing,
    },
  });
  return (
    <S.Container>
      <div ref={ref} className="keen-slider">
        {children.map((component) => (
          <div className="keen-slider__slide">{component}</div>
        ))}
      </div>
    </S.Container>
  );
}

export default Carousel;
