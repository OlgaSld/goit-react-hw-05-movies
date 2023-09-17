import { Outlet } from 'react-router-dom';
import { Container, Header, Link, NavItem } from './SharedLayout_styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <NavItem>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </NavItem>
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default SharedLayout;
