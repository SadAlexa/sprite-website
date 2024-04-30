<script lang="ts">
  import "../style.css";

  export let text;
</script>

<div class="scrolling-div" id="scrolling-divid">
  <p>{text}</p>
</div>

<style>
  .scrolling-div {
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
    -moz-animation: scrolling-div 8s linear infinite;
    -webkit-animation: scrolling-div 8s linear infinite;
    animation: scrolling-div 8s linear infinite;
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

  @media (min-width: 600px) {
    .scrolling-div {
      margin-top: var(--margin-desktop);
    }
  }

  @media (max-width: 600px) {
    .scrolling-div {
      margin-top: var(--margin-mobile);
    }
  }
</style>
