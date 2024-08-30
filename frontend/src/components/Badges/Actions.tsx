import { FC } from 'react';
import { Box, Heading, Text } from '@radix-ui/themes';

import { ACTIONS } from '@/constants/badges';
import { ActionType } from '@/constants/badges';

const Actions: FC = () => {
  let completedActions: ActionType[] = ACTIONS.filter((action: ActionType) => action.completed);
  return (
    <Box className="mt-4 md:mt-0 ">
      <Box className="flex item-center flex-col md:flex-row gap-2">
        <Heading as="h4" size="2" className="text-secondary-dark-text font-normal">
          <Box as="span" className="text-primary-dark-text font-semibold mr-1 inline-block">
            How to Earn:
          </Box>{' '}
          Complete the actions for the badge, no specific order needed.
        </Heading>
        <Box className="w-full md:w-auto ml-auto flex items-center gap-2">
          <Box
            as="span"
            className="w-1/2 md:w-fit text-center text-xs font-medium text-secondary-dark-text cursor-pointer rounded-cornerRounded bg-elevation-dark-three py-1 px-2">
            {completedActions?.length}/{ACTIONS?.length} completed
          </Box>
          <Box
            as="span"
            className="w-1/2 md:w-fit text-center text-xs font-medium bg-primary-dark-disabled  cursor-pointer rounded-cornerRounded text-primary-dark-hover py-1 px-2">
            Total Earnings: 3,000
          </Box>
        </Box>
      </Box>
      <Box className="mt-3 flex flex-col md:flex-row gap-3">
        {ACTIONS.map((action) => (
          <Box className="w-full md:w-4/12" key={action.id}>
            <Box
              className={`flex items-center justify-between bg-elevation-dark-three border border-elevation-dark-main rounded-tl-contentRounded rounded-tr-contentRounded px-6 ${action.completed ? 'py-[6px]' : 'py-2'}`}>
              <Text size="2" className="text-secondary-dark-text font-medium">
                Action
              </Text>
              {action?.completed ? (
                <Text
                  size="1"
                  className="text-success-main rounded-full font-medium py-1 px-2 bg-success-main-bg">
                  Completed
                </Text>
              ) : null}
            </Box>
            <Box className="mb-0 md:mb-5 bg-elevation-dark-two border border-elevation-dark-main rounded-bl-contentRounded rounded-br-contentRounded pt-2 pb-4 px-4">
              <Text size="2" className="text-secondary-dark-text">
                {action.label}
              </Text>
            </Box>
            <Box
              as="span"
              height={'4.35px'}
              width={'100%'}
              className={`hidden md:block ${action?.completed ? ' bg-primary-dark-main' : ' bg-elevation-dark-three'} rounded-full`}
            />
          </Box>
        ))}
      </Box>
      <Box className="mt-5 flex items-center gap-1">
        {ACTIONS.map((action) => (
          <Box
            key={action.id}
            as="span"
            height={'4.35px'}
            width={'100%'}
            className={`block md:hidden ${action?.completed ? ' bg-primary-dark-main' : ' bg-elevation-dark-three'} rounded-full`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Actions;
