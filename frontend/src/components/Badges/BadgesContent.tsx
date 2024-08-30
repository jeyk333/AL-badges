import { FC, useRef, useState, RefObject, useEffect } from 'react';
import { Box, Heading } from '@radix-ui/themes';
import Slider from 'react-slick';

import SectionLayout from '../Layout/SectionLayout';
import Actions from './Actions';
import BadgeCard from './BadgeCard';
import {
  BADGES,
  BADGES_SLIDER_SETTINGS,
  COMMUNITY_SLIDER_SETTINGS,
  BadgeType
} from '@/constants/badges';
import { PrevArrow, NextArrow } from './CustomArrows';
import BadgeSkeletonCard from './BadgeSkeletonCard';

const BadgesContent: FC = () => {
  const sliderRef: RefObject<Slider> = useRef(null);
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [initialized, setInitialized] = useState<boolean>(false);

  let settings = {
    ...BADGES_SLIDER_SETTINGS,
    afterChange: (current: number) => setCurrentSlide(current),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialized(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SectionLayout title="Badges">
      <Box>
        <Box className="bg-elevation-dark-one p-4 rounded-cornerRounded">
          <Box className="mb-3 badges">
            <Slider {...settings} ref={sliderRef}>
              {BADGES?.map((badge: BadgeType) => {
                if (badge.id === currentSlide) {
                  return <BadgeCard badge={badge} key={badge.id} showDetails={true} />;
                } else {
                  return (
                    <Box onClick={() => sliderRef?.current?.slickGoTo(badge.id)} key={badge.id}>
                      <BadgeSkeletonCard
                        badge={badge}
                        currentSlide={currentSlide}
                        totalSlides={BADGES.length}
                      />
                    </Box>
                  );
                }
              })}
            </Slider>
          </Box>
          <Actions />
        </Box>
        <Box className="mt-4 rounded-cornerRounded">
          <Box className="border border-elevation-dark-main bg-elevation-dark-two py-[10px] px-4 rounded-tl-cornerRounded rounded-tr-cornerRounded">
            <Heading as="h3" className="text-primary-dark-text font-medium" size="2">
              Community Badges
            </Heading>
          </Box>
          <Box className="bg-elevation-dark-one mt-4 ml-4 rounded-bl-cornerRounded rounded-br-cornerRounded pb-[18px] community-badges">
            {initialized ? (
              <Slider {...COMMUNITY_SLIDER_SETTINGS}>
                {BADGES?.map((badge: BadgeType) => (
                  <Box
                    onClick={() => sliderRef?.current?.slickGoTo(badge.id)}
                    key={badge.id}
                    className="mr-2">
                    <BadgeCard badge={badge} />
                  </Box>
                ))}
              </Slider>
            ) : null}
            <Box
              as="span"
              height={'4px'}
              width={'96%'}
              className={`rounded-full mt-[26px] bg-elevation-dark-two mx-auto`}
            />
          </Box>
        </Box>
      </Box>
    </SectionLayout>
  );
};
export default BadgesContent;
