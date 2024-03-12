<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import { isMenuOpen } from "$lib";

  import "./style.css";
</script>

<div class="app">
  <Header />
  {#if !$isMenuOpen}
    <main>
      <slot />
    </main>
    <Footer />
  {/if}
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    background-color: var(--color-white);
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-left: 5rem;
    margin-right: 5rem;
    margin-top: 8rem;
    box-sizing: border-box;
  }

  @media only screen and (max-width: 600px) {
    main {
      margin: 0;
    }
  }
</style>
