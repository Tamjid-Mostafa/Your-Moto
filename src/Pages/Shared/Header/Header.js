import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import logoBlack from "../../../logoBlack.png";
import logoLight from "../../../logoLight.png";

const Header = () => {
  const { user, providerSignOut } = useContext(AuthContext);

  /* ------------Handle Logout------------ */

  const handleLogout = () => {
    providerSignOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");

        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");

        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  const HTML = document.querySelector("html").getAttribute("class");

  return (
    <>
      <Navbar
        className="relative"
        fluid={false}
        rounded={false}
        menuOpen={true}
      >
        <Navbar.Brand>
          <img
            src={`${HTML === "hydrated" ? logoBlack : logoLight}`}
            className="mr-3 h-6 sm:h-9"
            alt="Your Moto Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <Link to="/">Your Moto</Link>
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              user?.uid ? (
                <Avatar
                  alt="User settings"
                  status="online"
                  img={user?.photoURL}
                  rounded={true}
                />
              ) : (
                <Avatar rounded={true} />
              )
            }
          >
            <Dropdown.Header>
              {user?.displayName ? (
                <span className="block text-sm">{user?.displayName}</span>
              ) : (
                <span className="block text-sm">Anonymous</span>
              )}
              {user?.email ? (
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              ) : (
                <span className="block truncate text-sm font-medium">
                  anonymous@anonymous.com
                </span>
              )}
            </Dropdown.Header>
            <Dropdown.Item><Link to="/dashboard">Dashboard</Link></Dropdown.Item>
            <Dropdown.Item>My Sell Post</Dropdown.Item>
            <Dropdown.Item>My Orders</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
          </Dropdown>

          {options?.map((opt) => (
            <button
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
                theme === opt.text && "text-sky-600"
              }`}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))}

          <Navbar.Toggle className="absolute top-16 left-0 right-0 z-10 bg-primary" />
        </div>
        <Navbar.Collapse
        className=""
        >
          <Navbar.Link>
          <Link to="/">Home</Link>
          </Navbar.Link>
          
          <Navbar.Link>
            <Link to="/categories">Categories</Link>
          </Navbar.Link>

          {user?.uid ? (
            <>
              <Navbar.Link>
                <Link to="/dashboard">Dashboard</Link>
              </Navbar.Link>
              <Navbar.Link>
                <Link to="/blogs">Blogs</Link>
              </Navbar.Link>
              <Navbar.Link>
                <button onClick={handleLogout}>Log Out</button>
              </Navbar.Link>
            </>
          ) : (
            <>
              <Navbar.Link>
                <Link to="/login">Log In</Link>
              </Navbar.Link>
              <Navbar.Link>
                <Link to="/signup">Sign Up</Link>
              </Navbar.Link>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header;
