import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { Button } from '../ui/button';

import NavDesktop from './Header_NavDesktop';
import NavMobile from './Header_NavMobile';
import NavConnected from './Header_NavConnected';

import ModeToggle from '../_ThemeProvider/ToggleTheme';

function Header() {
  const isLogged = useAppSelector((state) => state.userReducer.isLogged);
  const { pathname } = useLocation();

  if (pathname === '/connexion' || pathname === '/inscription') {
    return (
      <header className="flex items-center flex-wrap justify-between py-3 md:py-0 lg:py-0 xl:py-0 mb-4 px-6 w-full bg-floral-white ">
        <div>
          <NavLink to="/">
            <img
              className="w-14 md:w-28 lg:w-30"
              src="/logo_final.png"
              alt="Logo de CoHabit"
            />
          </NavLink>
        </div>

        {!isLogged ? (
          <div className="flex gap-4">
            <ModeToggle />
            <NavLink to="/connexion">
              <Button variant="outline" className="dark:text-jet-50">
                Se connecter
              </Button>
            </NavLink>
          </div>
        ) : (
          <NavConnected />
        )}
      </header>
    );
  }

  return (
    <header
      className={
        pathname === '/'
          ? 'flex items-center flex-wrap justify-between py-3 md:py-0 lg:py-0 xl:py-0 mb-4 px-6 w-full fixed top-0 start-0 bg-floral-white z-50 shadow-md'
          : 'flex items-center flex-wrap justify-between py-3 md:py-0 lg:py-0 xl:py-0 mb-4 px-6 w-full bg-floral-white shadow-md'
      }
    >
      <div>
        <NavLink to="/">
          <img
            className="w-14 md:w-28 lg:w-30"
            src="/logo_final.png"
            alt="Logo de CoHabit"
          />
        </NavLink>
      </div>

      {!isLogged ? (
        <>
          <div className="hidden lg:block">
            <NavDesktop />
          </div>

          <div className="flex gap-4">
            <ModeToggle />
            <NavLink to="/connexion">
              <Button variant="outline" className="dark:text-jet-50">
                Se connecter
              </Button>
            </NavLink>

            <NavMobile />
          </div>
        </>
      ) : (
        <NavConnected />
      )}
    </header>
  );
}

export default Header;
