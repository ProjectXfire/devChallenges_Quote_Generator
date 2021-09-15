import React from "react";
// Providers
import { MdCached } from "react-icons/md";
// Styles
import { Button } from "../styles/button";
import { Menu } from "../styles/menu";

export const Header = ({ getRandomQuote }) => {
  return (
    <Menu>
      <Button type="button" onClick={() => getRandomQuote()}>
        random <MdCached />
      </Button>
    </Menu>
  );
};
