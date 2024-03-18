<script lang="ts">
  import logoimg from "$lib/assets/logo-background.png";

  import "../style.css";
</script>

<div class="body">
  <div class="roundcard">
    <div class="circle" />
    <span class="about">
      <h1>WHO ARE WE?</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur.
      </p>
      <p class="strong"><strong>You will do things like:</strong></p>
    </span>
  </div>
  <br />
  <div class="card">
    <img src={logoimg} alt="" />
    <span class="cardtext">
      <h2>TITOLO</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </span>
  </div>
  <!-- generare le card in codice -->
</div>

<style>
  .body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  h1 {
    font-size: 36px;
    font-weight: var(--font-bold);
    color: var(--color-red);
  }

  p {
    font-size: 20px;
    font-weight: var(--font-regular);
    margin: 1rem 0;
    padding: 0;
  }

  .roundcard {
    display: flex;
    justify-content: center;
    position: relative;
    top: 0;
    z-index: 1;
  }

  .about {
    text-align: center;
    max-width: 35rem;
  }

  .circle {
    position: absolute;
    border-radius: 50%;
    box-shadow: var(--color-purple) 0px 5px 15px;
  }

  .card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10rem;
    box-shadow: var(--color-purple) 0px 5px 15px;
    margin-top: 4rem;
  }

  .cardtext {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 2rem;
  }

  .cardtext > h2 {
    font-weight: var(--font-bold);
    color: var(--color-red);
    display: flex;
    justify-content: start;
    margin: 0;
  }

  .cardtext > p {
    font-weight: var(--font-regular);
    margin: 0;
  }

  @media (min-width: 600px) {
    .circle {
      margin-top: -35rem;
      width: 50rem;
      height: 50rem;
    }

    h1 {
      margin: 0;
      padding: 0;
    }

    .card {
      width: 40rem;
      height: 10rem;
    }

    .cardtext > h2 {
      font-size: 26px;
    }

    .card > img {
      width: 10rem;
    }
  }

  @media (max-width: 600px) {
    .circle {
      margin-top: -28rem;
      width: 50rem;
      height: 50rem;
    }

    h1 {
      margin-top: 4rem;
    }

    .card {
      width: 26rem;
      height: 15rem;
    }

    .cardtext > h2 {
      font-size: 24px;
    }

    .cardtext > p {
      font-size: 18px;
    }

    .card > img {
      width: 12rem;
    }
  }
</style>
