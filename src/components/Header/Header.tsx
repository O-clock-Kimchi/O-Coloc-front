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
      <header className="flex items-center flex-wrap justify-between py-4 mb-4 px-6 w-full ">
        <div>
          <NavLink to="/">
            <img
              className="w-14 md:w-28 lg:w-40"
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
    <header className="flex items-center flex-wrap justify-between py-4 mb-4 px-6 w-full">
      <div>
        <NavLink to="/">
          <img
            className="w-14 md:w-28 lg:w-40"
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
