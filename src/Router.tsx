import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { GamePage } from './pages/Game.page';
import { EarnPage } from './pages/Earn.page';
import { BoostsPage } from './pages/Boosts.page';
import { FriendsPage } from './pages/Friends.page';
import { GiftsPage } from './pages/Gifts.page';

const router = createMemoryRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/Earn',
    element: <EarnPage />,
  },
  {
    path: '/Boosts',
    element: <BoostsPage />,
  },
  {
    path: '/Game',
    element: <GamePage />,
  },
  {
    path: '/Friends',
    element: <FriendsPage />,
  },
  {
    path: '/Gifts',
    element: <GiftsPage />,
  },
]);

export function Router() {
  return (<RouterProvider router={router} />);
}