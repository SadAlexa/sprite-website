<script lang="ts">
  import { _ } from "svelte-i18n";
  import Info from "./components/Info.svelte";
  import img from "$lib/assets/photos/spriters-photo.webp";
  import { setTitle } from "$lib";

  setTitle("");
</script>

<div class="body">
  <div class="text">
    <h1>{$_("home.title")}</h1>
    <h2>{$_("home.subtitle")} <span>S.P.R.I.Te.</span></h2>
    <p>
      {$_("home.text")}
    </p>
    <br />
    <h3>{$_("home.question")}</h3>
    <div class="events">
      <p class="follow">
        {$_("home.follow")}
      </p>
      <a href="https://linktr.ee/AssociazioneS.P.R.I.Te" aria-label="LinkTree">
        <svg
          version="1.0"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 64 64"
          enable-background="new 0 0 64 64"
          xml:space="preserve"
          fill="#ed5252"
          stroke="#ed5252"
          ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g><g id="SVGRepo_iconCarrier">
            <g>
              <path
                fill="#ed5252"
                d="M47.231,20.893C47.727,19.35,48,17.707,48,16c0-8.836-7.163-16-16-16S16,7.164,16,16 c0,1.707,0.273,3.35,0.769,4.893C10.505,23.062,6,28.998,6,36c0,8.836,7.163,16,16,16c3.465,0,6.661-1.117,9.28-2.99L23.27,41H19 c-0.553,0-1-0.447-1-1s0.447-1,1-1h4v-4c0-0.553,0.447-1,1-1s1,0.447,1,1v4.901l6,5.997V33.416l-3.7-3.7 c-0.391-0.391-0.348-0.98,0.044-1.372c0.391-0.391,0.934-0.48,1.324-0.09L32,31.586l3.29-3.29c0.391-0.391,1.038-0.405,1.429-0.015 s0.39,1.024-0.001,1.415L33,33.414v12.485l6-6.001V35c0-0.553,0.447-1,1-1s1,0.447,1,1v4h4c0.553,0,1,0.447,1,1s-0.447,1-1,1h-4.27 l-8.01,8.01C35.34,50.883,38.535,52,42,52c8.837,0,16-7.164,16-16C58,28.998,53.495,23.062,47.231,20.893z"
              ></path>
              <path
                fill="#ed5252"
                d="M28,52.961V63c0,0.553,0.447,1,1,1h6c0.553,0,1-0.447,1-1V52.961c-1.422-0.504-2.768-1.17-4-1.996 C30.768,51.791,29.422,52.457,28,52.961z"
              ></path>
            </g>
          </g></svg
        >
      </a>
    </div>
    <a class="button" href="/about">{$_("nav.about")}</a>
  </div>
  <div class="img">
    <img src={img} alt="" />
  </div>
</div>
<Info />

<style>
  .body {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .events {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 2rem;
  }

  a {
    text-decoration: none;
    color: var(--color-red);
    display: flex;
    align-items: center;
    font-weight: var(--font-medium);
    font-size: 20px;
  }

  .follow {
    margin-bottom: 0;
  }

  h3 {
    font-weight: var(--font-bold);
    font-size: 26px;
    margin-top: 0;
  }

  svg:hover,
  .button:hover {
    transform: scale(1.1);
  }

  svg:active,
  .button:active {
    transform: scale(0.9);
  }

  svg {
    width: 2rem;
    margin-left: 1rem;
    transition: transform 0.3s ease;
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

  p {
    font-weight: var(--font-medium);
  }

  p,
  .button {
    font-size: 20px;
    margin: 0 0 2rem 0;
    padding: 0;
  }

  .button {
    border: none;
    background-color: var(--color-red);
    color: var(--color-white);
    font-weight: var(--font-bold);
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  .img {
    display: flex;
  }

  @media (min-width: 600px) {
    .body {
      flex-direction: row;
      margin: 3rem 5rem;
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

    a {
      justify-content: start;
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: start;
    }

    .text > p {
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

    .text {
      text-align: center;
      align-items: center;
      margin: 0 1rem;
    }

    h2 {
      margin-bottom: 1rem;
    }

    a {
      justify-content: center;
    }
  }
</style>
