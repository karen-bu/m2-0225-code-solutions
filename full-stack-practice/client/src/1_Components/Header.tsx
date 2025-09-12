import { Outlet, Link } from 'react-router';

export function Header() {
  return (
    <div>
      <div className="header-container">
        <div className="header-link">
          <Link to="/about">
            <p>About</p>
          </Link>
        </div>
        <div className="header-link">
          <Link to="/">
            <p>Dashboard</p>
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
