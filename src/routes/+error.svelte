<script>
  import { _ } from "svelte-i18n";
  import { page } from "$app/stores";
</script>

<div>
  <h1>😾 {$page.status}: {$page.error?.message} 😾</h1>
  <h2>{$_("error.title")}</h2>
  <a href="/">{$_("error.back")}</a>
</div>

<style>
  div {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    text-align: center;
  }

  a {
    text-decoration: none;
    color: var(--color-black);
    background-color: var(--color-red);
    padding: 1rem;
    border-radius: 5rem;
    font-weight: var(--font-bold);
    transition: transform 0.3s ease;
  }

  a:hover {
    transform: scale(1.1);
  }

  a:active {
    transform: scale(0.9);
  }
</style>
