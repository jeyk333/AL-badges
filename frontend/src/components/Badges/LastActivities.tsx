'use client';

import { FC } from 'react';
import { Box } from '@radix-ui/themes';
import { useSubscription } from '@apollo/client';

import { GET_LAST_ACTIVITIES } from '@/constants/subscriptionsQuery';
import CustomTable from '../CustomTable';
import SectionLayout from '../Layout/SectionLayout';

export interface ActivitiesType {
  block_timestamp: string;
  decoded: string;
  transaction_hash: string;
}

const COLUMNS: string[] = ['Last Activities', 'Points', 'Date', 'TXID'];

const LastActivities: FC = () => {
  const { loading, error, data } = useSubscription(GET_LAST_ACTIVITIES);

  return (
    <Box className="mt-10">
      <SectionLayout title="Last Activities">
        <CustomTable isLoading={loading} columns={COLUMNS} data={data?.logs} isError={!!error} />
      </SectionLayout>
    </Box>
  );
};

export default LastActivities;
