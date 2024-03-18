<script lang="ts">
  import logoimg from "$lib/assets/logo-background.png";

  import telegram from "$lib/assets/telegram.svg";
  import email from "$lib/assets/email.svg";
  import insta from "$lib/assets/insta.svg";

  import "../style.css";
</script>

<div class="body">
  <div class="roundcard">
    <img class="circle" src={logoimg} alt="" />
  </div>
  <br />
  <span class="find">
    <h1>YOU CAN FIND US HERE!!</h1>
    <p>
      Nella tua sede universitaria preferita in:<br />
      <span><strong>Via dell'Università 50 - Cesena</strong></span><br />
      Nell'aula <span><strong>2010</strong></span>!
    </p>
  </span>
  <br />
  <div class="chat">
    <h1>CHAT WITH US:</h1>
    <ul class="socials">
      <li>
        <a href="https://t.me/spritenews"
          ><img src={telegram} alt="telegram" /></a
        >
      </li>
      <li>
        <a href="mailto:associazionesprite@gmail.com"
          ><img src={email} alt="email" /></a
        >
      </li>
      <li>
        <a href="https://www.instagram.com/associazionesprite"
          ><img src={insta} alt="instagram" /></a
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

  a {
    text-decoration: none;
  }

  ul {
    padding: 0;
    list-style: none;
    display: flex;
  }

  .socials > li > a > img {
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
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
      margin-top: -33rem;
    }

    .find > h1 {
      margin-top: 20rem;
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
