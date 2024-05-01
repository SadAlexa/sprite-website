<script lang="ts">
  import { _ } from "svelte-i18n";

  import "../style.css";

  const cards = [
    "social",
    "photo",
    "graphics",
    "writer",
    "events",
    "volunteer",
    "web",
    "study",
    "notes",
  ];

  const images: { [key: string]: string } = import.meta.glob(
    "$lib/assets/about/*.jpg",
    { eager: true, import: "default" }
  );
</script>

<div class="body">
  <div class="roundcard">
    <div class="circle" />
    <div class="about">
      <h1>{$_("about.title")}</h1>
      <p>
        {$_("about.text")}
      </p>
      <p class="strong"><strong>{$_("about.youll")}</strong></p>
    </div>
  </div>
  <br />
  <div class="cards">
    {#each cards as card}
      <div class="card" id="cardid">
        <img src={images[`/src/lib/assets/about/${card}.jpg`]} alt="" />
        <div class="cardtext">
          <h2>{$_(`about.${card}.title`)}</h2>
          <p>{$_(`about.${card}.text`)}</p>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem;
  }

  .card > img {
    object-fit: cover;
    aspect-ratio: 1 / 1;
  }

  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cards .card:last-child {
    margin-bottom: 3rem;
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
    z-index: 3;
  }

  .circle {
    position: absolute;
    border-radius: 50%;
    box-shadow: var(--color-purple) 0px 5px 15px;
    background-color: var(--color-white);
    z-index: 2;
  }

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--color-purple) 0px 5px 15px;
    background-color: var(--color-white);
    margin-top: 4rem;
  }

  .cardtext {
    display: flex;
    flex-direction: column;
    margin: 2rem;
  }

  .cardtext > h2 {
    font-weight: var(--font-bold);
    color: var(--color-red);
    margin: 0;
  }

  .cardtext > p {
    font-weight: var(--font-regular);
    margin: 0;
  }

  @media (min-width: 600px) {
    .circle {
      margin-top: -40%;
      width: 50rem;
      height: 50rem;
    }

    h1 {
      margin: 0;
      padding: 0;
    }

    .card {
      flex-direction: row;
      width: 35rem;
      height: 10rem;
      border-radius: 10rem;
    }

    .card > img {
      border-radius: 10rem;
      width: 10rem;
      height: 10rem;
    }

    .cards .card:nth-child(odd) {
      flex-direction: row-reverse;
      text-align: right;
    }

    .cardtext {
      justify-content: start;
    }

    .cardtext > h2 {
      font-size: 26px;
      margin-bottom: 1rem;
    }

    .card:first-child {
      margin-top: 20%;
    }

    .about {
      margin-top: 25%;
    }
  }

  @media (max-width: 600px) {
    .circle {
      margin-top: -40%;
      width: 50rem;
      height: 50rem;
    }

    h1 {
      margin-top: 4rem;
    }

    .card {
      width: 80%;
      height: auto;
      padding: 0 0 2rem 0;
      flex-direction: column;
      border-radius: 13rem;
    }

    .card > img {
      border-radius: 13rem;
      width: 100%;
    }

    .cardtext {
      justify-content: center;
      text-align: center;
    }

    .cardtext > h2 {
      font-size: 24px;
      margin-bottom: 1rem;
    }

    .cardtext > p {
      font-size: 18px;
    }

    .about {
      margin-top: 8%;
    }

    .card:first-child {
      margin-top: 25%;
    }
  }
</style>
