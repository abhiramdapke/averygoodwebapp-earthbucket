import { AuthorNavbar } from "molecules";
import React from "react";
import { action } from "@storybook/addon-actions";
import data from "components/molecules/author-navbar/data";

export default {
  title: "Molecules/Author Navbar",
  component: AuthorNavbar
};

const { navbarItems } = data;

export const Navbar = () => (
  <AuthorNavbar currentView={navbarItems[0].targetView} items={navbarItems} />
);

const story = {
  parameters: {
    jest: ["components/molecules/author-navbar/author-navbar.test.jsx"]
  }
};
Navbar.story = story;
