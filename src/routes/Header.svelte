<script lang="ts">
  import { navs } from "$lib/index";
  import { Hamburger } from "svelte-hamburgers";
  import { isMenuOpen } from "$lib";

  import logoimg from "$lib/assets/logo-background.png";
  import burger from "$lib/assets/burgher.svg";
  import Menu from "./Menu.svelte";
</script>

<header>
  <div class="burger">
    <Hamburger bind:open={$isMenuOpen} --color="var(--color-black)" />
  </div>
  <div class="logo">
    <!-- <img class="menu" src={burger} alt="menu" /> -->
    <img src={logoimg} alt="logo S.P.R.I.Te." />
    <h1>S.P.R.I.Te.</h1>
  </div>
  {#if $isMenuOpen}
    <Menu />
  {/if}
  <nav class="navbar">
    <ul>
      {#each navs as nav}
        <li>
          <a href={nav.link}>
            {nav.name}
          </a>
        </li>
      {/each}
    </ul>
    <div class="lang">
      <label for="lang">LANGUAGE</label>
      <select id="lang" name="lang">
        <option value="it">IT</option>
        <option value="en">EN</option>
      </select>
    </div>
  </nav>
</header>

<style>
  header {
    background-color: var(--color-white);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  }

  .navbar {
    display: flex;
    font-size: 26px;
    color: var(--color-black);
  }

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
  }

  .logo > img {
    max-width: 3rem;
    max-height: 3rem;
    margin: 1rem;
    width: auto;
    height: auto;
  }

  .logo > h1 {
    font-weight: var(--font-bold);
  }

  .navbar > ul > li > a {
    text-decoration: none;
    color: var(--color-black);
    font-weight: var(--font-medium);
  }

  .burger {
    margin: 1rem;
  }

  @media only screen and (min-width: 600px) {
    header {
      display: flex;
      justify-content: space-between;
    }

    .menu,
    .burger {
      display: none;
    }

    .navbar {
      width: 100%;
      height: 8rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .navbar > ul {
      display: flex;
      flex-direction: row;
      list-style: none;
      justify-content: center;
      align-items: center;
    }

    .navbar > ul > li {
      padding: 1rem;
    }

    .navbar > .lang {
      display: flex;
      flex-direction: row;
      list-style: none;
      justify-content: end;
      align-items: center;
      margin-right: 1rem;
    }

    .navbar > .lang > label {
      display: none;
    }

    .navbar > .lang > select {
      border: none;
      background-color: var(--color-white);
      color: var(--color-black);
      font-size: 26px;
    }
  }

  @media only screen and (max-width: 600px) {
    .burger {
      display: inline-block;
    }

    .navbar {
      display: none;
    }

    .logo {
      margin-right: 3rem;
      float: right;
    }

    .row {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  }
</style>
