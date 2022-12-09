<template>
  <main>
    <section class="section">
      <div class="container">
        <div class="intro">
          <header class="header">
            <div class="header__language">
              <img src="../images/svg/language.svg" alt="language" />
              <a class="header__switch-link header__switch-link--RU" href="#"
                >RU</a
              >
              <a class="header__switch-link header__switch-link--UA" href="#"
                >UA</a
              >
            </div>
            <div class="logo">
              <svg
                width="85"
                height="46"
                viewBox="0 0 85 46"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- <defs>
                  <linear-gradient id="tttest" x1="0%">

                  </linear-gradient>
                <defs>  -->
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.1881 6.12368L37.1967 4.76944V32.3073L29.1881 30.9529V6.12368ZM25.7709 2.70864V34.3682L40.6138 37.0767V0L25.7709 2.70864ZM69.2349 18.1975V21.6108H73.8769V30.9366H65.4666V6.12038H72.6661V11.1968H76.0816V2.7072H62.0511V34.3498H77.2924V18.1975H69.2349ZM11.6071 28.088L11.6259 28.1724C13.5022 19.6456 15.3722 11.1529 17.2328 2.70721H22.3529V34.3496H18.9376V9.63353C18.8876 9.63353 13.2524 34.3656 13.2524 34.3656H9.96191C9.96191 34.3656 4.3267 9.63353 4.27684 9.63353V34.3496H0.861328V2.70721H5.98131C7.8421 11.1529 9.71227 19.6456 11.5885 28.1724C11.5948 28.1442 11.6007 28.1161 11.6071 28.088ZM54.9259 6.12045H44.4379V2.70727H58.6289V6.12045L48.1405 30.9365H58.6289V34.3498H44.4379V30.9365L54.9259 6.12045ZM84.1299 34.35H80.7142V2.7074H84.1299V34.35ZM30.9617 45.9999V45.4751H28.2521V43.8936H30.353V43.3689H28.2521V41.9542H30.8591V41.4293H27.6754V45.9999H30.9617ZM33.6423 41.4292H34.251L35.4999 45.4108H35.8204L37.0694 41.4292H37.6652L36.2045 45.9999H35.1027L33.6423 41.4292ZM43.9078 45.9999V45.4751H41.1982V43.8936H43.2995V43.3689H41.1982V41.9542H43.8055V41.4293H40.6218V45.9999H43.9078ZM50.7845 41.4292V45.9999H49.8749L47.7484 42.1782H47.6071V45.9999H47.0437V41.4292H47.9533L50.0798 45.251H50.2207V41.4292H50.7845ZM55.8168 41.9416H57.3159V41.4292H53.7286V41.9416H55.24V46H55.8168V41.9416Z"
                />
              </svg>
            </div>
            <div class="hamburger-menu">
              <a href="#">
                <img src="../images/svg/hamburger.svg" alt="hamburger" />
              </a>
            </div>
          </header>
          <div class="intro__front">
            <h1 class="intro__title">
              FULL-CYCLE <br />
              EVENT AGENCY
            </h1>
            <div class="intro__img">
              <img src="../images/img/EllipseClear.png" alt="Ellipse" />
              <div class="spiner">
                <svg viewBox="0 0 100 100" width="100" height="100">
                  <defs>
                    <path
                      id="circle"
                      d="
                        M 50, 50
                        m -37, 0
                        a 37,37 0 1,1 74,0
                        a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text>
                    <textPath xlink:href="#circle">
                      showreel showreel showreel
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div class="intro__running-text">
            <p class="intro__text intro__text--left">
              FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY
            </p>
            <p class="intro__text intro__text--right">
              FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY
            </p>
          </div>
          <a
            class="intro__horizontal-link intro__horizontal-link--left"
            href="#"
            >Where?</a
          >
          <a
            class="intro__horizontal-link intro__horizontal-link--right"
            href="#"
            >What?</a
          >
          <a class="intro__vertical-link" href="#">Who?</a>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
/* * {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Grtsk Giga";
  font-weight: 600;
  overflow: hidden;
}

.container {
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1440px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 24px;
  }
}

.intro {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100vh;
  padding: 16px 0;
}

@media (min-width: 1024px) {
  .intro {
    padding: 24px 0;
  }
}

.intro__front {
  position: relative;
}

.intro__img {
  position: relative;
  z-index: 1;

  margin: 0 auto;
  width: fit-content;
}

.intro__img img {
  filter: blur(38px);
  height: 294px;
}

@media (min-width: 768px) {
  .intro__img img {
    height: 482px;
  }
}

@media (min-width: 1440px) {
  .intro__img img {
    height: auto;
  }
}

.intro__title {
  position: absolute;
  top: 35%;
  z-index: 2;

  width: 100%;
  margin: 0;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.1;

  text-align: center;
  text-transform: uppercase;

  color: #373737;

  transition: transform 0.3s;
}

@media (min-width: 768px) {
  .intro__title {
    font-size: calc(17px + 4vw);
  }
}

@media (min-width: 1024px) {
  .intro__title {
    font-size: calc(28px + 3vw);
  }
}

@media (min-width: 1440px) {
  .intro__title {
    font-size: 82px;
  }
}

.intro__horizontal-link {
  display: none;
}

@media (min-width: 768px) {
  .intro__horizontal-link {
    position: absolute;
    z-index: 3;
    top: 50%;

    display: block;

    font-size: 14px;
    line-height: 1.4;

    text-decoration: none;

    color: #373737;

    transition: color 0.3s;
  }
}

@media (min-width: 1440px) {
  .intro__horizontal-link {
    font-size: 16px;
  }
}

.intro__horizontal-link::after {
  content: "";
  display: block;
  width: 0px;
  height: 1px;

  background-color: white;

  transition: width 0.3s;
}

.intro__horizontal-link:hover::after {
  content: "";
  width: 100%;
  height: 1px;

  background-color: white;
}

.intro__horizontal-link:hover {
  color: white;
}

.intro__horizontal-link--left {
  left: -24px;

  transform: rotate(-90deg) translateX(50%);
}

.intro__horizontal-link--right {
  right: -24px;

  transform: rotate(90deg) translateX(-50%);
}

.intro__vertical-link {
  position: absolute;
  bottom: 24px;

  display: none;
  margin-left: 50%;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  color: #373737;

  transform: translateX(-50%);

  text-decoration: none;
}

@media (min-width: 768px) {
  .intro__vertical-link {
    display: block;
  }
}

@media (min-width: 1440px) {
  .intro__vertical-link {
    font-size: 16px;
  }
}

.intro__vertical-link::after {
  content: "";

  display: block;
  width: 0px;
  height: 1px;

  background-color: white;

  transition: width 0.3s;
}

.intro__vertical-link:hover::after {
  content: "";

  width: 100%;
  height: 1px;
}

.intro__vertical-link:hover {
  color: white;
}

.intro__running-text {
  position: relative;

  top: -117vw;
  transform: rotate(-69deg);

  white-space: nowrap;
}

@media (min-width: 768px) {
  .intro__running-text {
    top: -50vw;
    transform: rotate(-52deg);
  }
}

@media (min-width: 1024px) {
  .intro__running-text {
    top: -37vw;
    transform: rotate(-42deg);
  }
}

@media (min-width: 1440px) {
  .intro__running-text {
    top: -26vw;
    transform: rotate(-33deg);
  }
}

.intro__text {
  margin: 0;

  font-style: italic;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.1;

  text-align: center;
  text-transform: uppercase;

  opacity: 0.1;

  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #373737;
  color: transparent;

  white-space: nowrap;
}

@media (min-width: 768px) {
  .intro__text {
    font-size: 42px;
  }
}

@media (min-width: 1440px) {
  .intro__text {
    font-size: 52px;
  }
}

.intro__text--right {
  animation: runningTextUp 4s infinite linear;
}

.intro__text--left {
  transform: rotate(180deg) translateX(-30%);
  animation: runningTextDown 4s infinite linear;
}

@media (min-width: 768px) {
  .intro__text--left {
    margin-bottom: 24px;
  }
}

@media (min-width: 1024px) {
  .intro__text--left {
    margin-bottom: 36px;
  }
}

@keyframes runningTextDown {
  from {
    transform: translate(200%, 0) rotate(180deg);
  }

  to {
    transform: translate(-200%, 0) rotate(180deg);
  }
}

@keyframes runningTextUp {
  from {
    transform: translate(-200%, 0);
  }

  to {
    transform: translate(200%, 0);
  }
} */
</style>
