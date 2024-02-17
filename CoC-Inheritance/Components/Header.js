// Importing necessary modules and components from Next.js and React
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

// Functional component representing the website header
const Header = () => {
  // State to track whether the user has scrolled down the page
  const [top, setTop] = useState(true);

  // Hook to retrieve the user session information from next-auth
  const { data: session } = useSession();
  console.log(session);

  // Function to register a user by sending their information to the server
  const registerUser = async () => {
    // Extracting user information from the session
    const userInfo = session.user;

    try {
      // Sending a POST request to the server for user registration
      const res = await fetch("http://localhost:4000/api/user/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      // Parsing the server response
      const data = await res.json();
      console.log(data);
    } catch (err) {
      // Handling any errors that occur during the registration process
      console.error(err.message);
    }
  };

  // Effect hook to detect whether the user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      // Updating the state based on the scroll position
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };

    // Adding and removing scroll event listener when the component mounts/unmounts
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top, session]);

  // Effect hook to register the user when the session is available
  useEffect(() => {
    if (session?.user) {
      registerUser();
    }
  }, [session]);

  // Rendering the header component
  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4 flex gap-3 items-center">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <img src="Mail_Icon.jpg" className="w-12 h-12 rounded" />
            </Link>
            {/* Displaying user information if the user is signed in */}
            {session && (
              <>
                Signed in as {session.user.email} <br />
              </>
            )}
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              {/* Navigation link to the admin page */}
              <Link href="/admin">
                <span className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                  Home
                </span>
              </Link>

              {/* Button for signing in or signing out */}
              <li
                href="/signup"
                onClick={!session ? signIn : signOut}
                className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
              >
                {/* Displaying appropriate text based on the session */}
                <span>{!session ? "Sign In" : "Sign Out"}</span>
                {/* Icon for the sign-in/sign-out button */}
                <svg
                  className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                    fillRule="nonzero"
                  />
                </svg>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Exporting the Header component as the default export
export default Header;