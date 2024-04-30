<script>
  import { _, locale } from "svelte-i18n";
</script>

<div class="lang">
  <p>{$_("nav.lang")}</p>
  <button on:click={() => ($locale = $locale === "it-IT" ? "en-EN" : "it-IT")}>
    {$locale === "it-IT" ? "IT" : "EN"}
  </button>
</div>

<style>
  button {
    background-color: transparent;
    border: var(--color-black) 0.2rem solid;
    border-radius: 5rem;
    padding: 1rem;
    font-size: 20px;
    font-weight: var(--font-medium);
    color: var(--color-black);
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  button:hover {
    background-color: var(--color-black);
    color: var(--color-white);
    transform: scale(1.1);
  }

  button:active {
    transform: scale(0.9);
  }

  .lang {
    display: flex;
  }

  p {
    font-weight: var(--font-bold);
  }

  @media (min-width: 600px) {
    p {
      display: none;
    }

    .lang {
      align-items: center;
      margin-right: 2rem;
    }
  }

  @media (max-width: 600px) {
    p {
      display: inline-block;
      margin: 0 2rem 0 0;
    }

    .lang {
      flex-direction: row;
      align-items: center;
    }
  }
</style>
