import { FC } from 'react';
import { Box } from '@radix-ui/themes';
import Image from 'next/image';

import { CustomArrowProps } from '@/constants/badges';

const NextArrow: FC<CustomArrowProps> = ({ className, onClick }) => {
  return (
    <Box
      className={`${className} !h-full !right-0 !z-[999] !bg-elevation-dark-three rounded-buttonRounded !w-[47px] before:!content-none !flex items-center justify-center`}
      onClick={onClick}>
      <Image src={'/chevron-right.png'} alt="Next" width={24} height={24} />
    </Box>
  );
};

const PrevArrow: FC<CustomArrowProps> = ({ className, onClick }) => {
  return (
    <Box
      className={`${className} !h-full !left-0 !z-[999] !bg-elevation-dark-three rounded-buttonRounded !w-[47px] before:!content-none !flex items-center justify-center`}
      onClick={onClick}>
      <Image src={'/chevron-left.png'} alt="Left" width={24} height={24} />
    </Box>
  );
};

export { NextArrow, PrevArrow };
