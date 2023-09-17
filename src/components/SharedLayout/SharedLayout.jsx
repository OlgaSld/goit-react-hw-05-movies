import { Outlet } from 'react-router-dom';
import { Container, Link, NavItem } from './SharedLayout_styled';

const SharedLayout = () => {
  return (
    <Container>
      <header>
        <NavItem>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </NavItem>
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default SharedLayout;
