<script lang="ts">
  import { _ } from "svelte-i18n";

  import "../style.css";
</script>

<div class="scrolling-div" id="scrolling-divid">
  <p>{$_("home.scroll")}</p>
</div>

<style>
  .scrolling-div {
    margin-top: 5.5rem;
    width: 100%;
    height: 3rem;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    background-color: var(--color-black);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .scrolling-div > p {
    font-size: 20px;
    font-weight: var(--font-medium);
    color: var(--color-white);
    position: absolute;
    text-align: center;
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    -moz-animation: scrolling-div 7s linear infinite;
    -webkit-animation: scrolling-div 7s linear infinite;
    animation: scrolling-div 7s linear infinite;
  }

  @-moz-keyframes scrolling-div {
    0% {
      -moz-transform: translateX(100%);
    }
    100% {
      -moz-transform: translateX(-100%);
    }
  }
  @-webkit-keyframes scrolling-div {
    0% {
      -webkit-transform: translateX(100%);
    }
    100% {
      -webkit-transform: translateX(-100%);
    }
  }
  @keyframes scrolling-div {
    0% {
      -moz-transform: translateX(100%);
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
    100% {
      -moz-transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }
</style>
