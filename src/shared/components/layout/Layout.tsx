import { Route, Routes } from 'react-router-dom';

//Components
import { CoinPage } from 'pages';
import { NavBar } from './navbar';

export function Layout() {
  return (
    <>
    <CoinPage/>
    </>
  );
}
