import { Outlet } from 'react-router-dom';
import { Container, Header, Link, NavItem } from './SharedLayout_styled';
import { Suspense } from 'react';

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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default SharedLayout;
