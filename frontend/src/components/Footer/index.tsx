import { FC } from 'react';
import { Box, Flex } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';

const FOOTER_MENU = [
  { id: 0, label: 'Docs', path: '/' },
  { id: 1, label: 'Blog', path: '/' },
  { id: 2, label: 'Support', path: '/' },
  { id: 3, label: 'Terms & Conditions', path: '/' }
];

const Footer: FC = () => {
  return (
    <Box className="bg-elevation-dark-two">
      <Box className="hidden md:flex items-center justify-between w-10/12 mx-auto py-2">
        <Flex gap="2" align={'center'}>
          <Image src={'/discord.png'} alt="Discord" width={32} height={32} />
          <Image src={'/x.png'} alt="X" width={32} height={32} />
          <Image src={'/github.png'} alt="Github" width={32} height={32} />
        </Flex>
        <Image src="/powered-by.png" alt="Absinthe" width={211} height={35} />

        <Box className="w-[112px]"></Box>
      </Box>
      <Box className="w-11/12 mx-auto py-4 block md:hidden">
        <Box className="flex items-center justify-between">
          <Box className="text-center py-1 text-base font-medium text-primary-dark-text rounded-curved bg-white bg-opacity-[0.05] w-[122px] border border-transparent shadow-gradient-border bg-gradient-button bg-origin-border bg-clip-border">
            Logo
          </Box>
          <Flex gap="2" align={'center'}>
            <Image src={'/discord.png'} alt="Discord" width={32} height={32} />
            <Image src={'/x.png'} alt="X" width={32} height={32} />
            <Image src={'/github.png'} alt="Github" width={32} height={32} />
          </Flex>
        </Box>
        <Flex gap="5" align={'center'} justify={'center'} className="mt-8">
          {FOOTER_MENU?.map((menu) => (
            <Link
              href={menu.path}
              key={menu.id}
              className="text-primary-dark-text text-sm text-medium">
              {menu.label}
            </Link>
          ))}
        </Flex>
        <Image
          src="/powered-by.png"
          alt="Absinthe"
          width={211}
          height={35}
          className="mx-auto mt-6"
        />
      </Box>
    </Box>
  );
};

export default Footer;
