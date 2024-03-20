<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";

  import "./style.css";
</script>

<div class="app">
  <Header />
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
