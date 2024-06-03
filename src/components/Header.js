// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-blue-500 p-4">
    <nav>
      <Link to="/" className="text-white">
        Home
      </Link>
    </nav>
  </header>
);

export default Header;
