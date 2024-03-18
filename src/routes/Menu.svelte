<script lang="ts">
  import { navs } from "$lib/index";
  import { isMenuOpen } from "$lib";
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
          {nav.name}
        </a>
      </li>
    {/each}
    <li>
      <div class="lang">
        <!-- da cambiare -->
        <label for="lang">LANGUAGE</label>
        <select id="lang" name="lang">
          <option value="it">IT</option>
          <option value="en">EN</option>
        </select>
      </div>
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

  a,
  label,
  select {
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
