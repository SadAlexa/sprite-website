import { writable } from "svelte/store";

let navs = [
  {
    name: "nav.home",
    link: "/",
  },
  {
    name: "nav.about",
    link: "/about",
  },
  /* 
JUST FOR NOW THIS IS DISABLED
  {
    name: "nav.events",
    link: "/events",
  }, */
  {
    name: "nav.contacts",
    link: "/contacts",
  },
];

export { navs };
export const isMenuOpen = writable(false);

export const title = writable("Associazione S.P.R.I.Te.");

export function setTitle(t: string) {
  t === ""
    ? title.set("Associazione S.P.R.I.Te.")
    : title.set(`Associazione S.P.R.I.Te. - ${t}`);
}
