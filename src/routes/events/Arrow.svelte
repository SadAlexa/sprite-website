<!-- code borrowed from https://svelte.dev/repl/cb4d121decc54cc98e312d5b83c96df7?version=3.17.2 -->

<script>
  export let left = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<svg
  class:left
  on:click
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
>
  <path
    fill="#f87575"
    d="M0 256c0 141.2 114.8 256 256 256V0A256.3 256.3 0 000 256z"
  />
  <path
    fill="#f87575"
    d="M256 0v512c141.2 0 256-114.8 256-256S397.2 0 256 0z"
  />
  <path
    fill="#f1eff4"
    d="M226 115.4a23.3 23.3 0 00-33 33L300.7 256 193 363.7a23.3 23.3 0 1033 32.9l124-124.1a23.3 23.3 0 000-33l-124-124z"
  /></svg
>

<style>
  svg {
    width: 2rem;
    height: 2rem;
    padding: 12px;
    cursor: pointer;
  }

  .left {
    transform: rotateY(180deg);
  }
</style>
