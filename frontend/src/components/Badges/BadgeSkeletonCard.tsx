import { FC } from 'react';
import { Box, Flex } from '@radix-ui/themes';
import Image from 'next/image';

import { BadgeType } from '@/constants/badges';
import { handleSliderSlideSize } from '@/utils';

interface Props {
  badge: BadgeType;
  currentSlide: number;
  totalSlides: number;
}

const BadgeSkeletonCard: FC<Props> = ({ badge, currentSlide, totalSlides }) => {
  return (
    <Box
      key={badge.id}
      className={`${handleSliderSlideSize(badge.id, currentSlide, totalSlides)} opacity-[0.4] !flex items-center justify-center flex-col h-[224px]`}>
      <Box className="cursor-pointer bg-elevation-dark-three rounded-contentRounded w-[96px] h-[96px] flex items-center justify-center">
        <Image src={badge.image} alt={badge.title} height={48} width={48} />
      </Box>
      <Box className="bg-elevation-dark-three mt-1 py-1 px-2 rounded-contentRounded w-[96px]">
        <Flex gap="1" align="center">
          <Box className="bg-secondary-dark-text opacity-[0.6] h-[7px] w-4/12 rounded-cornerRounded"></Box>
          <Box className="bg-secondary-dark-text opacity-[0.6] h-[7px] w-4/12 rounded-cornerRounded"></Box>
          <Box className="bg-secondary-dark-text opacity-[0.6] h-[7px] w-4/12 rounded-cornerRounded"></Box>
        </Flex>
        <Box className="mt-1 bg-secondary-dark-text opacity-[0.6] h-[7px] w-full rounded-cornerRounded"></Box>
      </Box>
    </Box>
  );
};

export default BadgeSkeletonCard;
