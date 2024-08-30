export const formattedHashValue = (hash: string) => {
  return hash ? hash.slice(0, 5) + '...' + hash?.slice(-4) : '-';
};

export const handleSliderSlideSize = (id: number, slide: number, totalSlide: number) => {
  if (
    (slide <= totalSlide - 3 && id === slide + 2) ||
    (slide >= 2 && id === slide - 2) ||
    (slide === 0 && id === totalSlide - 2) ||
    (slide === 0 && id === 2) ||
    (slide === 1 && id === totalSlide - 1) ||
    (slide === 1 && id === 3) ||
    (slide === 2 && id === totalSlide - 1) ||
    (slide === totalSlide - 2 && id === 0) ||
    (slide === totalSlide - 1 && id === 1)
  ) {
    return 'scale-75';
  } else if (
    (slide <= totalSlide - 4 && id === slide + 3) ||
    (slide >= 3 && id === slide - 3) ||
    (slide === 0 && id === totalSlide - 3) ||
    (slide === 0 && id === 3) ||
    (slide === 1 && id === totalSlide - 2) ||
    (slide === 1 && id === 4) ||
    (slide === totalSlide - 3 && id === 0) ||
    (slide === totalSlide - 2 && id === 1) ||
    (slide === totalSlide - 1 && id === 2)
  ) {
    return 'scale-50';
  } else {
    return '';
  }
};
