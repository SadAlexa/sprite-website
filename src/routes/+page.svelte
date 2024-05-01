<script lang="ts">
  import { _ } from "svelte-i18n";
  import Info from "./components/Info.svelte";
  import img from "$lib/assets/photos/sspriters-photo.jpg";
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
      <a
        href="https://www.instagram.com/associazionesprite"
        aria-label="Instagram"
        ><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g><g id="SVGRepo_iconCarrier">
            <path
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z"
              fill="#f87575"
            ></path>
          </g></svg
        ></a
      ><a href="https://t.me/spritenews" aria-label="Telegram"
        ><svg
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#f87575"
          style="--darkreader-inline-fill: #f87575;"
          data-darkreader-inline-fill=""
          ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g><g id="SVGRepo_iconCarrier">
            <title>telegram_fill</title>
            <g
              id="页面-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              style="--darkreader-inline-stroke: none;"
              data-darkreader-inline-stroke=""
            >
              <g id="Brand" transform="translate(-672.000000, -48.000000)">
                <g
                  id="telegram_fill"
                  transform="translate(672.000000, 48.000000)"
                >
                  <path
                    d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                    id="MingCute"
                    fill-rule="nonzero"
                  >
                  </path>
                  <path
                    d="M19.7773,4.42984 C20.8652,3.97177 22.0315,4.8917 21.8394,6.05639 L19.5705,19.8131 C19.3517,21.1395 17.8949,21.9006 16.678,21.2396 C15.6597,20.6865 14.1489,19.8352 12.7873,18.9455 C12.1074,18.5012 10.0255,17.0766 10.2814,16.0625 C10.5002,15.1954 14.0001,11.9375 16.0001,10 C16.7857,9.23893 16.4279,8.79926 15.5001,9.5 C13.1985,11.2383 9.50332,13.8812 8.28136,14.625 C7.20323,15.2812 6.64031,15.3932 5.96886,15.2812 C4.74273,15.0769 3.60596,14.7605 2.67788,14.3758 C1.42351,13.8558 1.48461,12.132 2.67703,11.63 L19.7773,4.42984 Z"
                    id="路径"
                    fill="#f87575"
                    style="--darkreader-inline-fill: #f87575;"
                    data-darkreader-inline-fill=""
                  >
                  </path>
                </g>
              </g>
            </g>
          </g></svg
        ></a
      >
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
