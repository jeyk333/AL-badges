import { FC, ReactNode } from 'react';
import { Box, Heading } from '@radix-ui/themes';

interface LayoutType {
  title: string;
  children: ReactNode;
}

const SectionLayout: FC<LayoutType> = ({ title, children }) => {
  return (
    <Box className="w-11/12 md:w-10/12 mx-auto mb-6">
      <Heading as="h3" size={'3'} className="font-medium text-secondary-dark-text">
        {title}
      </Heading>
      <Box className="mt-4">{children}</Box>
    </Box>
  );
};

export default SectionLayout;
