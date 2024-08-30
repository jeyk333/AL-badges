'use client';

import { FC, useState, useEffect } from 'react';
import { Box, Table, Text, Flex, Skeleton, Popover } from '@radix-ui/themes';
import Image from 'next/image';
import dayjs from 'dayjs';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { formattedHashValue } from '@/utils';
import { ActivitiesType } from '../Badges/LastActivities';

interface TableProps {
  isLoading: boolean;
  columns: string[];
  isError?: boolean;
  data: ActivitiesType[];
}

const CustomTable: FC<TableProps> = ({ isLoading, isError, columns, data }) => {
  const [selectedCopy, setSelectedCopy] = useState<string>('');

  useEffect(() => {
    let timeout: number | NodeJS.Timeout;
    if (selectedCopy) {
      timeout = setTimeout(() => {
        setSelectedCopy('');
      }, 2000);
    }
    () => {
      clearTimeout(timeout);
    };
  }, [selectedCopy]);

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setSelectedCopy(value);
  };

  if (isLoading) {
    return (
      <Flex direction={'column'} gap={'1'} className="animate-pulse mt-4">
        {Array.from({ length: 6 }).map((_, index: number) => (
          <Skeleton key={index} className="!bg-elevation-dark-three rounded" height={'44px'} />
        ))}
      </Flex>
    );
  }
  if (isError) {
    return (
      <Flex align={'center'} justify={'center'} className="my-4">
        <Text className="text-error text-xl opacity-50">
          Oops! Something went wrong. Please try again!
        </Text>
      </Flex>
    );
  }

  return (
    <Table.Root variant="surface" className="border-none bg-elevation-dark-main">
      <Table.Header className="bg-elevation-dark-three border-b border-elevation-dark-main h-11 border-b border-elevation-dark-main">
        <Table.Row className="text-secondary-dark-text font-medium text-xs">
          {columns?.map((column: string) => (
            <Table.ColumnHeaderCell className="px-6" key={column}>
              {column}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body className="bg-elevation-dark-main w-full">
        {data?.map((activity: ActivitiesType, index: number) => (
          <motion.tr
            key={activity?.transaction_hash}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`${index % 2 === 0 ? `bg-elevation-dark-main` : 'bg-elevation-dark-two'} h-16 border-b border-elevation-dark-main align-middle	`}>
            <Table.Cell className="px-6">
              <Box
                as="span"
                className="flex items-center gap-1 text-sm text-primary-dark-text font-medium">
                <Image
                  src={index % 2 === 0 ? '/transaction.png' : '/bridged.png'}
                  alt={'Transaction'}
                  width={16}
                  height={16}
                />{' '}
                {index % 2 === 0 ? 'Transaction' : 'Bridged'}
              </Box>
            </Table.Cell>
            <Table.Cell className="px-6">
              <Box
                as="span"
                className="bg-success-main-bg w-fit text-xs text-success-main font-medium rounded-cornerRounded py-1 px-2">
                +{activity?.decoded}
              </Box>
            </Table.Cell>
            <Table.Cell className="px-6 text-sm">
              <Box as="span" className="flex items-center gap-1">
                <Box as="span" className="text-sm text-secondary-dark-text">
                  {dayjs(activity?.block_timestamp).format('DD.MM.YYYY')}
                </Box>
                <Box
                  as="span"
                  className="text-xs font-medium text-secondary-dark-text rounded-cornerRounded bg-elevation-dark-three py-1 px-2">
                  {dayjs(activity?.block_timestamp).format('HH:mm:ss')}
                </Box>
              </Box>
            </Table.Cell>
            <Table.Cell className="text-sm px-6">
              <Box as="span" className="flex items-center gap-1 text-secondary-dark-text">
                <Box as="span" className="text-sm">
                  {formattedHashValue(activity?.transaction_hash)}
                </Box>

                <Popover.Root open={selectedCopy === activity?.transaction_hash}>
                  <Popover.Trigger onClick={() => handleCopy(activity?.transaction_hash)}>
                    <Box
                      as="span"
                      className="text-xs font-medium cursor-pointer rounded-cornerRounded bg-elevation-dark-three py-1 px-2">
                      Copy
                    </Box>
                  </Popover.Trigger>
                  <Popover.Content size="1" maxWidth="300px" className="bg-elevation-dark-three">
                    <Text as="p" trim="both" size="1" className="text-success-main">
                      Copied successfully!
                    </Text>
                  </Popover.Content>
                </Popover.Root>
                <Link
                  className="ml-auto h-4 w-4"
                  target="_blank"
                  href={`https://explorer-chain-url.com/${activity?.transaction_hash}`}>
                  <Image src={'/external-link.png'} alt="External Link" height={16} width={16} />
                </Link>
              </Box>
            </Table.Cell>
          </motion.tr>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default CustomTable;
