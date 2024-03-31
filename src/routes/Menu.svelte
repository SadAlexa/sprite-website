<script lang="ts">
  import { _ } from "svelte-i18n";
  import { navs } from "$lib/index";
  import { isMenuOpen } from "$lib";
  import Lang from "./Lang.svelte";
</script>

<nav class="navbar-menu">
  <ul>
    {#each navs as nav}
      <li>
        <a
          id="menu_link"
          href={nav.link}
          on:click={() => ($isMenuOpen = false)}
        >
          {$_(nav.name)}
        </a>
      </li>
    {/each}
    <li>
      <Lang />
    </li>
  </ul>
</nav>

<style>
  .navbar-menu {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    font-size: 26px;
    color: var(--color-black);
    background-color: var(--color-white);
    width: 100%;
    height: 100vh;
  }

  a {
    text-decoration: none;
    color: var(--color-black);
    font-weight: var(--font-bold);
  }

  ul {
    list-style: none;
  }

  li {
    padding: 1rem;
  }
</style>
