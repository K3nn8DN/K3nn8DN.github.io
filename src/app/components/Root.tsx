import { Outlet, useLocation } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';

function RootContent() {
  const theme = useTheme();
  const location = useLocation();
  
  // Don't show Navigation and Footer on GameZone, ProfilePage, and ComingSoon
  const hideNavAndFooter = location.pathname === '/games' || location.pathname === '/profile' || location.pathname === '/coming-soon';

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: theme.bgColor,
      }}
    >
      {!hideNavAndFooter && <Navigation />}
      <Outlet />
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

export function Root() {
  return (
    <ThemeProvider>
      <RootContent />
    </ThemeProvider>
  );
}