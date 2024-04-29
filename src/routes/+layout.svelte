<script>
  import { page } from "$app/stores";

  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Scroll from "./components/Scroll.svelte";
</script>

<div class="app">
  <Header />
  {#if $page.route.id === "/"}
    <Scroll />
  {/if}
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
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
