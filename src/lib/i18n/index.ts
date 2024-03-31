import { browser } from "$app/environment";
import { register, init } from "svelte-i18n";

const defaultLocale = "en";

register("en", () => import("$lib/languages/en.json"));
register("it", () => import("$lib/languages/it.json"));

init({
  fallbackLocale: defaultLocale,
  initialLocale: browser ? window.navigator.language : defaultLocale,
});
