import { writable } from "svelte/store";

const navs = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "ABOUT",
    link: "/about",
  },
  {
    name: "EVENTS",
    link: "/events",
  },
  {
    name: "CONTACTS",
    link: "/contacts",
  },
];

export { navs };
export const isMenuOpen = writable(false);
