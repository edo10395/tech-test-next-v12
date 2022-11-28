import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import logo from '../public/assets/logo.png';
import {
  CollapsIcon, HomeIcon, ArticleIcon,
} from './icons';

export default function SideNavbar() {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const menuItems = [
    {
      id: 1, label: 'Dashboard', icon: HomeIcon, link: '/',
    },
    {
      id: 2, label: 'Partner 1', icon: ArticleIcon, link: '/products',
    },
  ];

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname],
  );

  const warapperClas = classNames(
    'h-screen px-4 pt-8 pb-4 bg-white flex justify-between flex-col border-1',
    {
      'w-1/6': !toggleCollapse,
      'w-20': toggleCollapse,
    },
  );

  const collapseIconClasses = classNames(
    'p-4 rounded bg-white absolute right-0',
    {
      'rotate-180': toggleCollapse,
    },
  );
  const getNavItemClasses = (menu) => classNames(
    'flex items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap',
    {
      'bg-skin-default text-skin-light': activeMenu?.id === menu.id,
    },
  );

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };
  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={warapperClas}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: 'width 300ms cubic-bezier(0.2, 0, 0, 1) 0s' }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          {/* LOGO */}
          <div className="flex items-center pl-1 gap-4">
            <span
              className={classNames('mt-2 text-lg font-medium text-text', {
                hidden: toggleCollapse,
              })}
            >
              <Image src={logo} alt="logo" />
            </span>
          </div>
          {/* TUTUP LOGO */}

          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>

        {/* MENU */}
        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes} key={menu.id}>
                <Link href={menu.link}>
                  <a className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: '2.5rem' }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                    <span
                      className={classNames(
                        'text-md font-medium text-text-light',
                      )}
                    >
                      {menu.label}
                    </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
