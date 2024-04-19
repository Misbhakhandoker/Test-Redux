import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex justify-center p-10">
      <div className="flex gap-5">
        {pathname == "/" ? (
          <Link className="text-purple-500" to="/">
            Home
          </Link>
        ) : (
          <Link className="text-white" to="/">
            Home
          </Link>
        )}

        {pathname == "/user" ? (
          <Link className="text-purple-500" to="/user">
            User
          </Link>
        ) : (
          <Link className="text-white" to="/user">
            User
          </Link>
        )}
        {pathname == "/products" ? (
          <Link className="text-purple-500" to="/products">
            Products
          </Link>
        ) : (
          <Link className="text-white" to="/products">
            Products
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
