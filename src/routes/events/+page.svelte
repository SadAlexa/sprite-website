<script lang="ts">
  import logoimg from "$lib/assets/logo-background.png";
  import "../style.css";
</script>

<div class="body">
  <div class="roundcard">
    <img class="circle" src={logoimg} alt="" />
  </div>
  <br />
  <div class="events">
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
    align-items: center;
    justify-content: center;
    border-radius: 10rem;
    background-color: var(--color-white);
    box-shadow: var(--color-purple) 0px 5px 15px;
    margin: 0 2rem 2rem 2rem;
  }

  .cardtext {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 1rem;
  }

  .cardtext > h2 {
    margin: 0;
    display: flex;
    color: var(--color-red);
    font-weight: var(--font-bold);
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
    margin: 20rem 0 3rem 0;
    flex-direction: column;
  }

  .card > img {
    width: 20rem;
  }

  @media (min-width: 600px) {
    .card {
      flex-direction: row;
    }

    .events .card:nth-child(odd) {
      flex-direction: row-reverse;
      text-align: right;
    }

    .events .card:nth-child(odd) > .cardtext > h2 {
      justify-content: end;
    }

    .circle {
      margin-top: -33rem;
    }

    .card {
      width: 40rem;
      height: 20rem;
      margin-top: 2rem;
    }
  }

  @media (max-width: 600px) {
    .card > img {
      margin-bottom: 1rem;
    }

    .card {
      flex-direction: column;
      justify-content: start;
      text-align: center;
      width: 20rem;
      height: 40rem;
    }
    .circle {
      margin-top: -28rem;
    }

    .events {
      margin: 22rem 3rem 0 3rem;
      flex-direction: column;
    }

    .card:first-child {
      margin-top: 2rem;
    }
  }
</style>
