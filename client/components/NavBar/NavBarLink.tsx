import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';

interface NavBarLink {
  to: string;
  currLocation: string;
  toggleSidebar: () => void;
  children: React.ReactNode;
}

const NavBarLink = ({ to, currLocation, toggleSidebar, children }: NavBarLink) => {
  const theme = useTheme();
  console.log('NavBarLink', currLocation, to);
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
          backgroundColor:
            theme.palette.mode === 'light' ? '#FFFFFF' : '#20232A',
        },
      }}
    >
      <Link
        onClick={toggleSidebar}
        className="navbar-link"
        to={to}
        style={{
          color:
            currLocation === to
              ? theme.palette.secondary.main
              : theme.palette.typography.main,
          fontSize: '1.5rem',
        }}
      >
        {children}
      </Link>
    </Container>
  );
}

export default NavBarLink;
