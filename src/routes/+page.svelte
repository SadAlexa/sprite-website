<script lang="ts">
  import logoimg from "$lib/assets/logo-background.png";

  import "./style.css";
</script>

<div class="body">
  <span>
    <h1>HI THERE!</h1>
    <h2>WE ARE <span>S.P.R.I.Te.</span></h2>
    <p>
      We are a non-profit association that do lorem ipsum dolor sit amet
      consectetur adipisicing elit.
    </p>
    <label for="about">About</label>
    <input
      type="button"
      value="About"
      id="about"
      on:click={() => {
        window.location.href = "/about";
      }}
    />
  </span>
  <div class="img">
    <img src={logoimg} alt="logo S.P.R.I.Te." />
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
    margin: 1rem 0;
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

    .img > img {
      width: 40rem;
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
    }
  }

  @media (max-width: 600px) {
    .body {
      flex-direction: column-reverse;
    }

    .img > img {
      width: 30rem;
    }

    span {
      text-align: center;
      align-items: center;
    }
  }
</style>
