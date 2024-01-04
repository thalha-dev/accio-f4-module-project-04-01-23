import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <header className="bg-black text-white">
        <nav className="text-center p-[1em] sm:flex sm:items-center sm:justify-between">
          <h2>Shopping Cart</h2>
          <ol className="flex gap-[1em] pt-[1em] justify-center sm:pt-0 ">
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="/cart">Cart Page</NavLink>
          </ol>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default NavBar;
