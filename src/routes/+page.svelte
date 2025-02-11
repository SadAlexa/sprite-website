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
    <!-- <h3>{$_("home.survey")}</h3> -->
    <!-- <div class="survey">
      <p class="surveytext">
        {$_("home.surveytext")}
      </p>
      <a
        href=""
        aria-label="Survey"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g><g id="SVGRepo_iconCarrier">
            <path
              d="M21.1938 2.80624C22.2687 3.88124 22.2687 5.62415 21.1938 6.69914L20.6982 7.19469C20.5539 7.16345 20.3722 7.11589 20.1651 7.04404C19.6108 6.85172 18.8823 6.48827 18.197 5.803C17.5117 5.11774 17.1483 4.38923 16.956 3.8349C16.8841 3.62781 16.8366 3.44609 16.8053 3.30179L17.3009 2.80624C18.3759 1.73125 20.1188 1.73125 21.1938 2.80624Z"
              fill="#ed5252"
            ></path>
            <path
              d="M14.5801 13.3128C14.1761 13.7168 13.9741 13.9188 13.7513 14.0926C13.4886 14.2975 13.2043 14.4732 12.9035 14.6166C12.6485 14.7381 12.3775 14.8284 11.8354 15.0091L8.97709 15.9619C8.71035 16.0508 8.41626 15.9814 8.21744 15.7826C8.01862 15.5837 7.9492 15.2897 8.03811 15.0229L8.99089 12.1646C9.17157 11.6225 9.26191 11.3515 9.38344 11.0965C9.52679 10.7957 9.70249 10.5114 9.90743 10.2487C10.0812 10.0259 10.2832 9.82394 10.6872 9.41993L15.6033 4.50385C15.867 5.19804 16.3293 6.05663 17.1363 6.86366C17.9434 7.67069 18.802 8.13296 19.4962 8.39674L14.5801 13.3128Z"
              fill="#ed5252"
            ></path>
            <path
              d="M20.5355 20.5355C22 19.0711 22 16.714 22 12C22 10.4517 22 9.15774 21.9481 8.0661L15.586 14.4283C15.2347 14.7797 14.9708 15.0437 14.6738 15.2753C14.3252 15.5473 13.948 15.7804 13.5488 15.9706C13.2088 16.1327 12.8546 16.2506 12.3833 16.4076L9.45143 17.3849C8.64568 17.6535 7.75734 17.4438 7.15678 16.8432C6.55621 16.2427 6.34651 15.3543 6.61509 14.5486L7.59235 11.6167C7.74936 11.1454 7.86732 10.7912 8.02935 10.4512C8.21958 10.052 8.45272 9.6748 8.72466 9.32615C8.9563 9.02918 9.22032 8.76528 9.57173 8.41404L15.9339 2.05188C14.8423 2 13.5483 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355Z"
              fill="#ed5252"
            ></path>
          </g></svg
        >
      </a>
    </div> -->
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
