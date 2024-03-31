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
  {
    name: "nav.events",
    link: "/events",
  },
  {
    name: "nav.contacts",
    link: "/contacts",
  },
];

export { navs };
export const isMenuOpen = writable(false);

/* export function t(key: any) {
  console.log(it[key as keyof typeof it]);
  switch (lang as any) {
    case "IT":
      return it[key as keyof typeof it];
    case "EN":
      return en[key as keyof typeof en];
  }
}
 */
