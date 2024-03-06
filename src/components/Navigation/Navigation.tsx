import React from "react";
import { useAppPath } from "../../providers/pathProvider";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../routes";

// This is a reference for implementing a compatible navigation system for a remote component
const Navigation = () => {
  const { appPath } = useAppPath();
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <Link
            to={`${appPath}${ROUTES.HOME}`}
            style={{
              color: location.pathname.includes(ROUTES.HOME) ? "red" : "black",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={`${appPath}${ROUTES.ABOUT}`}
            style={{
              color: location.pathname.includes(ROUTES.ABOUT) ? "red" : "black",
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to={`${appPath}${ROUTES.CONTACTS}`}
            style={{
              color: location.pathname.includes(ROUTES.CONTACTS)
                ? "red"
                : "black",
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
