import React, { useCallback, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { isVideo } from "lib/fileExtensions";
import Arrow from "components/atomics/arrows/Arrow";
import * as S from "./styles";
import "keen-slider/keen-slider.min.css";

export type Props = {
  sliderImages: Array<Record<any, string>>;
};

function DonationImageSlider({ sliderImages }: Props): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slide) {
      setCurrentSlide(slide.track.details.maxIdx);
    },
  });

  function sliderSize() {
    return (slider.current?.track.details.maxIdx || 0) + 1;
  }

  const onPrevPress = useCallback(
    (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      e.stopPropagation();
      slider.current?.prev();
    },
    [],
  );

  const onNextPress = useCallback(
    (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      e.stopPropagation();
      slider.current?.next();
    },
    [],
  );

  return (
    <>
      <S.NavigationWrapper>
        <S.SlideImageContainer
          ref={sliderRef}
          className="keen-slider"
          id="slider"
        >
          {sliderImages.map((item, idx) =>
            isVideo(item.imageUrl) ? (
              <S.SlideVideo
                src={item.imageUrl}
                autoPlay
                loop
                muted
                playsInline
                className="keen-slider__slide"
              />
            ) : (
              <S.SlideImage
                key={idx.toString()}
                image={item.imageUrl}
                className="keen-slider__slide"
                aria-label="NgoImage 3"
              />
            ),
          )}
        </S.SlideImageContainer>

        {slider && (
          <>
            <Arrow
              direction="left"
              onClick={onPrevPress}
              disabled={currentSlide === 0}
            />
            <Arrow
              direction="right"
              onClick={onNextPress}
              disabled={currentSlide === (slider.current?.size || 1) - 1}
            />
          </>
        )}
      </S.NavigationWrapper>

      {slider && (
        <S.PaginationContainer>
          <S.PaginationNumber>
            {currentSlide + 1}/{sliderSize()}
          </S.PaginationNumber>
        </S.PaginationContainer>
      )}
    </>
  );
}

export default DonationImageSlider;
