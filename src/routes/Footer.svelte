<script>
  import telegram from "$lib/assets/telegram.svg";
  import email from "$lib/assets/email.svg";
  import insta from "$lib/assets/insta.svg";

  import "./style.css";
</script>

<footer>
  <div>
    <h1 class="logo">S.P.R.I.Te.</h1>
    <ul class="questions">
      <li><a href="#"><h1>Who we are?</h1></a></li>
      <li><a href="#"><h1>what are the next events?</h1></a></li>
      <li>
        <a href="#"><h1>Do you want to contact us?</h1></a>
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
      </li>
    </ul>
  </div>
  <p>
    ©Copyright 2024 - Associazione S.P.R.I.Te. - Università di Bologna - Via
    dell’Università, 50 - 47521 Cesena
  </p>
</footer>

<style>
  footer {
    background-color: var(--color-black);
    color: var(--color-white);
    padding-left: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p {
    color: var(--color-purple);
    margin: 1rem;
  }

  h1 {
    font-weight: bolder;
    font-size: 26px;
    color: var(--color-white);
  }

  a > h1 {
    font-size: medium;
    font-weight: bold;
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 25px;
    margin-right: 10px;
  }

  ul {
    padding: 0;
    list-style: none;
    display: flex;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  .socials {
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 650px) {
    div {
      flex-direction: row;
    }

    p {
      text-align: center;
    }

    h1 {
      justify-content: start;
    }

    .questions {
      flex-direction: row;
      justify-content: end;
    }

    .questions > li {
      margin-right: 3rem;
    }
  }

  @media (max-width: 650px) {
    footer {
      text-align: center;
      margin: 0;
      padding: 0;
    }

    div {
      flex-direction: column;
    }

    .questions {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
