import { Box, Text } from '@radix-ui/themes';
import Image from 'next/image';
import { FC } from 'react';

import { BadgeType } from '@/constants/badges';

interface PropsType {
  badge: BadgeType;
  showDetails?: boolean;
}

const BadgeCard: FC<PropsType> = ({ badge, showDetails }) => {
  return (
    <Box className="flex flex-col items-center">
      <Box
        className={`!w-[178px] cursor-pointer !h-[176px] rounded-contentRounded overflow-hidden ${badge.isMine && !showDetails ? 'border border-success-main' : ''}`}>
        <Box className="bg-elevation-dark-two p-2 flex items-center justify-between">
          <Text size="1" className="text-primary-dark-text font-medium">
            {badge.title}
          </Text>
          {badge.action ? (
            <Text size="1" className="text-secondary-dark-text font-medium">
              {badge.action} Actions
            </Text>
          ) : null}
        </Box>
        <Box
          className={`bg-elevation-dark-three flex items-center justify-center h-[112px] ${badge.isMine ? '' : 'grayscale'}`}>
          <Image src={badge.image} alt={badge.title} height={64} width={64} />
        </Box>
        <Box className="py-1 text-center bg-success-main-bg">
          <Text size="1" className="text-success-main font-medium text-center">
            {badge.power ? `${badge.power}x` : `${badge.points} points`}
          </Text>
        </Box>
      </Box>
      {showDetails ? (
        <Box className="mt-2 !w-[178px] rounded-contentRounded bg-elevation-dark-two p-1 text-center">
          <Text className="text-xs font-medium text-primary-dark-text block">Reward Details</Text>
          <Text className="text-xs text-secondary-dark-text w-8/12 mx-auto block">
            {badge?.reward}
          </Text>
        </Box>
      ) : null}
    </Box>
  );
};

export default BadgeCard;
