<script lang="ts">
  import { onMount } from "svelte";

  import Calendar from "./Calendar.svelte";
  import logoimg from "$lib/assets/logo-background.png";
  import "../style.css";

  let today = new Date();

  onMount(() => {
    const container = document.getElementById("container");
    container?.addEventListener("scroll", () => {
      console.log("Scroll event detected!");
    });
  });
</script>

<div class="body">
  <div class="roundcard">
    <img class="circle" src={logoimg} alt="" />
  </div>
  <br />
  <div class="events">
    <div class="calendar">
      <Calendar {today} year={today.getFullYear()} month={today.getMonth()} />
    </div>
    <div class="container" id="container">
      <div class="card">
        <img src={logoimg} alt="" />
        <span class="cardtext">
          <h2>TITOLO</h2>
          <h3>18-06-2024 · 16:30</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </span>
      </div>
      <!-- da cancellare -->
      <div class="card">
        <img src={logoimg} alt="" />
        <span class="cardtext">
          <h2>TITOLO</h2>
          <h3>18-06-2024 · 16:30</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </span>
      </div>
      <div class="card">
        <img src={logoimg} alt="" />
        <span class="cardtext">
          <h2>TITOLO</h2>
          <h3>18-06-2024 · 16:30</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </span>
      </div>
      <div class="card">
        <img src={logoimg} alt="" />
        <span class="cardtext">
          <h2>TITOLO</h2>
          <h3>18-06-2024 · 16:30</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </span>
      </div>
    </div>
  </div>
</div>

<style>
  .body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .roundcard {
    display: flex;
    justify-content: center;
    position: relative;
    top: 0;
    z-index: 1;
  }

  .circle {
    position: absolute;
    border-radius: 50%;
    box-shadow: var(--color-purple) 0px 5px 15px;
    width: 50rem;
    height: 50rem;
  }

  .card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10rem;
    background-color: var(--color-white);
    margin: 0 2rem 2rem 2rem;
  }

  .cardtext {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 1rem;
  }

  .cardtext > h2 {
    font-weight: var(--font-bold);
    color: var(--color-red);
    display: flex;
    justify-content: start;
    margin: 0;
  }

  .cardtext > h3 {
    font-weight: var(--font-bold);
    color: var(--color-black);
    margin: 0;
  }

  .cardtext > p {
    font-weight: var(--font-regular);
    margin: 0;
  }

  .events {
    display: flex;
    align-items: center;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-purple);
    flex-direction: column;
  }

  .card > img {
    width: 10rem;
  }

  @media (min-width: 600px) {
    .circle {
      margin-top: -33rem;
    }

    .events {
      margin: 18rem 0 3rem 0;
      flex-direction: row;
    }

    .container {
      overflow: auto;
      border-radius: 0 5rem 5rem 0;
      margin: 2rem 0 0 1rem;
      max-height: 27rem;
    }

    .card {
      width: 30rem;
      height: 10rem;
    }
  }

  @media (max-width: 600px) {
    .circle {
      margin-top: -28rem;
    }

    .events {
      margin: 22rem 3rem 0 3rem;
      flex-direction: column;
    }

    .container {
      border-radius: 0 0 5rem 5rem;
      margin-top: 1rem;
      width: 25rem;
      height: auto;
    }

    .card {
      width: 22rem;
      height: 15rem;
    }

    .card:first-child {
      margin-top: 2rem;
    }
  }
</style>
