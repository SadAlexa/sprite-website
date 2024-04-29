<script lang="ts">
  import { _ } from "svelte-i18n";

  import img from "$lib/assets/photos/sspriters-photo.jpg";
</script>

<div class="body">
  <span class="text">
    <h1>{$_("home.title")}</h1>
    <h2>{$_("home.subtitle")} <span>S.P.R.I.Te.</span></h2>
    <p>
      {$_("home.text")}
    </p>
    <label for="about">About</label>
    <input
      type="button"
      value={$_("nav.about")}
      id="about"
      on:click={() => {
        window.location.href = "/about";
      }}
    />
  </span>
  <div class="img">
    <img src={img} alt="" />
  </div>
</div>

<style>
  .body {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1,
  h2 {
    font-size: 36px;
    margin: 0;
    padding: 0;
    font-weight: var(--font-bold);
  }

  h2 > span {
    color: var(--color-red);
  }

  p,
  input {
    font-size: 20px;
    font-weight: var(--font-medium);
    margin: 0 0 2rem 0;
    padding: 0;
  }

  input {
    border: none;
    background-color: var(--color-red);
    color: var(--color-black);
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
    cursor: pointer;
  }

  label {
    display: none;
  }

  .img {
    display: flex;
  }

  @media (min-width: 600px) {
    .body {
      flex-direction: row;
    }

    .img {
      margin-left: 4rem;
    }

    .img > img {
      width: 40rem;
      border-radius: 100%;
      object-fit: cover;
      aspect-ratio: 1 / 1;
    }

    span {
      display: flex;
      flex-direction: column;
      align-items: start;
    }

    span > p {
      text-align: left;
    }

    .img {
      align-items: end;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 600px) {
    .body {
      flex-direction: column-reverse;
    }

    .img > img {
      width: 100%;
      height: auto;
      margin: 0 0 2rem 0;
    }

    span {
      text-align: center;
      align-items: center;
    }

    .text {
      margin: 0 1rem;
    }

    h2 {
      margin-bottom: 1rem;
    }
  }
</style>
