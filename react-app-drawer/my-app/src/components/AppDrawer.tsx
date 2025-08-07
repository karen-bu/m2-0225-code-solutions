import { Link, Outlet } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { FaStore } from 'react-icons/fa';
import { IoMdArrowDroprightCircle } from 'react-icons/io';
import { useState } from 'react';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};

export function AppDrawer({ menuItems }: Props) {
  const [menuClass, setMenuClass] = useState('menu-closed');

  function changeMenuClass() {
    if (menuClass === 'menu-closed') {
      setMenuClass('menu-open');
    } else if (menuClass === 'menu-open') {
      setMenuClass('menu-closed');
    }
    console.log(menuClass);
  }

  return (
    <div className="page-container">
      <nav className={menuClass}>
        <div className="hamburger-menu-container">
          <RxHamburgerMenu onClick={changeMenuClass} />
        </div>
        <ul>
          {menuItems.map((menu) => (
            <li key={menu.name} className="menu-list-element">
              <Link to={menu.path} className="menu-list-link">
                {menu.name === 'Catalog' ? (
                  <FaStore />
                ) : menu.name === 'About' ? (
                  <FaRegQuestionCircle />
                ) : (
                  <IoMdArrowDroprightCircle />
                )}
                {menuClass === 'menu-open' ? menu.name : ''}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
