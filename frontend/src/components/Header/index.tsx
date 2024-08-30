'use client';

import { FC } from 'react';
import { Box, Flex, Button, DropdownMenu } from '@radix-ui/themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { MENUS } from '@/constants/menus';

const Header: FC = () => {
  const path = usePathname();

  return (
    <header className="py-4 border-b border-elevation-dark-two">
      <Box className="w-11/12 md:w-10/12 mx-auto flex items-center gap-12">
        <Box className="text-center py-1 text-base font-medium text-primary-dark-text rounded-curved bg-white bg-opacity-[0.05] w-[122px] border border-transparent shadow-gradient-border bg-gradient-button bg-origin-border bg-clip-border">
          Logo
        </Box>
        <Flex className="gap-8 hidden md:flex">
          {MENUS.map((menu) => (
            <Link
              key={menu.id}
              href={menu.path}
              className={`${path === menu.path ? 'text-primary-dark-hover' : 'text-primary-dark-text'} text-sm font-semibold`}>
              {menu.label}
            </Link>
          ))}
        </Flex>
        <Flex className="ml-auto gap-2" align={'center'}>
          <Button
            radius="full"
            variant="outline"
            style={{ border: '1px solid var(--primary-dark-hover)' }}
            className="hidden md:block bg-elevation-dark-two text-secondary-dark-text text-sm min-h-10 font-semibold p-[10px]">
            How It Works
          </Button>
          <Button className="cursor-pointer flex min-h-10 gap-2 items-center p-3 bg-elevation-dark-three rounded-curved">
            <Image
              src={'/avatar.png'}
              height={18}
              width={18}
              quality={100}
              priority
              alt="User Avatar"
            />
            <Box as="span" className="text-sm font-semibold text-primary-dark-text">
              bongo.eth
            </Box>
          </Button>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Image
                src="/menu.png"
                width={24}
                height={24}
                alt="mobile-menu"
                className="block md:hidden ml-auto"
              />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-elevation-dark-three p-2">
              <Flex direction={'column'} className="gap-4">
                {MENUS.map((menu) => (
                  <Link
                    key={menu.id}
                    href={menu.path}
                    className={`${path === menu.path ? 'text-primary-dark-hover' : 'text-primary-dark-text'} text-base font-semibold`}>
                    {menu.label}
                  </Link>
                ))}
              </Flex>
              <Button
                radius="full"
                variant="outline"
                style={{ border: '1px solid var(--primary-dark-hover)' }}
                className="mt-4 bg-elevation-dark-two text-secondary-dark-text text-sm min-h-10 font-semibold p-[10px]">
                How It Works
              </Button>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>
      </Box>
    </header>
  );
};

export default Header;
