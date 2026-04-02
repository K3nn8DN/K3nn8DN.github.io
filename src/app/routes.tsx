import { createBrowserRouter } from 'react-router';
import { Root } from './components/Root';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import {GameZone} from './pages/GameZone';
import {ProfilePage} from './pages/ProfilePage';
import {ComingSoon} from './pages/ComingSoon';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: AboutPage },
      { path: 'games', Component: GameZone },
      { path: 'profile', Component: ProfilePage },
      { path: 'coming-soon', Component: ComingSoon },
    ],
  },
]);