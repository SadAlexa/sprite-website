<script lang="ts">
  import { _ } from "svelte-i18n";
  import img from "$lib/assets/photos/sprite-door.jpg";
</script>

<div class="body">
  <div class="roundcard">
    <img class="circle" src={img} alt="" />
  </div>
  <br />
  <div class="find">
    <h1>{$_("contacts.title")}:</h1>
    <p>
      {$_("contacts.text")}<br />
      <span><strong>Via dell'Università 50 - Cesena</strong></span><br />
      {$_("contacts.room")} <span><strong>2010</strong></span>!
    </p>
  </div>
  <br />
  <div class="chat">
    <h1>{$_("contacts.chat")}:</h1>
    <ul class="socials">
      <li>
        <a href="mailto:associazionesprite@gmail.com" aria-label="E-mail"
          ><svg
            width="718"
            height="618"
            viewBox="0 0 718 618"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M192.333 0.666504C138.501 0.666504 89.8215 14.1208 54.4885 46.9298C18.8205 80.0505 0.666504 129.235 0.666504 192.333V425.666C0.666504 488.766 18.8205 537.95 54.4885 571.07C89.8215 603.88 138.501 617.333 192.333 617.333H525.666C579.5 617.333 628.18 603.88 663.51 571.07C699.18 537.95 717.333 488.766 717.333 425.666V192.333C717.333 129.235 699.18 80.0505 663.51 46.9298C628.18 14.1208 579.5 0.666504 525.666 0.666504H192.333ZM599.95 187.743C610.873 179.301 612.886 163.6 604.443 152.675C596.003 141.749 580.303 139.737 569.376 148.179L384.473 291.053C369.47 302.65 348.527 302.65 333.52 291.053L148.62 148.179C137.694 139.737 121.994 141.749 113.551 152.675C105.109 163.6 107.122 179.301 118.048 187.743L302.95 330.62C335.963 356.126 382.033 356.126 415.046 330.62L599.95 187.743Z"
              fill="#F1EFF4"
            />
          </svg></a
        >
      </li>
      <li>
        <a
          href="https://www.instagram.com/associazionesprite"
          aria-label="Instagram"
          ><svg
            width="667"
            height="668"
            viewBox="0 0 667 668"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M473.667 0.666504H194.333C72.9998 0.666504 0.666504 72.9998 0.666504 194.333V473.333C0.666504 595 72.9998 667.333 194.333 667.333H473.333C594.666 667.333 667 595 667 473.667V194.333C667.333 72.9998 595 0.666504 473.667 0.666504ZM334 463.333C262.666 463.333 204.666 405.333 204.666 334C204.666 262.666 262.666 204.666 334 204.666C405.333 204.666 463.333 262.666 463.333 334C463.333 405.333 405.333 463.333 334 463.333ZM531.333 163.333C529.666 167.333 527.333 171 524.333 174.333C521 177.333 517.333 179.666 513.333 181.333C509.333 183 505 184 500.666 184C491.666 184 483.333 180.666 477 174.333C474 171 471.666 167.333 470 163.333C468.333 159.333 467.333 155 467.333 150.666C467.333 146.333 468.333 142 470 138C471.666 133.666 474 130.333 477 127C484.667 119.333 496.333 115.666 507 118C509.333 118.333 511.333 119 513.333 120C515.333 120.666 517.333 121.667 519.333 123C521 124 522.666 125.666 524.333 127C527.333 130.333 529.666 133.666 531.333 138C533 142 534 146.333 534 150.666C534 155 533 159.333 531.333 163.333Z"
              fill="#F1EFF4"
            />
          </svg></a
        >
      </li>
    </ul>
  </div>
</div>

<style>
  .body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  a,
  a > svg,
  .socials > li {
    transition: transform 0.3s ease;
  }

  a {
    text-decoration: none;
  }

  a:hover,
  a > svg:hover,
  .socials > li:hover {
    transform: scale(1.1);
  }

  a:active,
  a > svg:active,
  .socials > li:active {
    transform: scale(0.9);
  }

  .socials {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 0;
  }

  .chat > h1,
  .find > h1 {
    margin-bottom: 0;
  }

  .chat > h1 {
    margin-top: 0;
  }

  ul {
    padding: 0;
    list-style: none;
    display: flex;
  }

  .socials > li > a > svg {
    width: 2rem;
  }

  h1 {
    font-size: 36px;
    font-weight: var(--font-bold);
    color: var(--color-red);
  }

  p {
    font-size: 20px;
    font-weight: var(--font-regular);
  }

  .socials > li {
    background-color: var(--color-black);
    margin: 1rem;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 2rem;
    height: 2rem;
  }

  .find,
  .chat {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
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

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 600px) {
    .circle {
      margin-top: -25rem;
    }

    .find > h1 {
      margin-top: 27rem;
    }
  }

  @media (max-width: 600px) {
    .circle {
      margin-top: -28rem;
    }

    .find > h1 {
      margin-top: 25rem;
    }
  }
</style>
