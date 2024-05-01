<script>
  import { page } from "$app/stores";
  import { _ } from "svelte-i18n";

  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Scroll from "./components/Scroll.svelte";
</script>

<svelte:head>
    <title>Associazione S.P.R.I.Te.</title>
	<meta name="description" content="{$_('home.text')}" />
</svelte:head>

<div class="app">
  <Header />
  {#if $page.route.id === "/"}
    <Scroll
      text={$_("home.scroll")}
      --margin-desktop="8rem"
      --margin-mobile="5.5rem"
    />
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
    box-sizing: border-box;
  }

  @media only screen and (max-width: 600px) {
    main {
      margin: 0;
    }
  }
</style>
