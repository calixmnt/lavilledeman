import { ssLinks, vogueLinks } from "../lib/constant.ts";
import LinksGroup from "./linksgroup.tsx";
import Title from "./title.tsx";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { PiYoutubeLogoFill } from "react-icons/pi";

import montNimba from "/assets/mont-nimba.webp";

const Presentation = () => {
  return (
    <section id="presentation" className="presentation">
      <Title
        dotColor="#1e1a1d"
        title="Bienvenue #chezNou, La ville aux 18 montagnes"
        className="container title-container title-container--presentation"
      />
      <section className="container presentation__socials">
        <InstagramLogoIcon className="social-icon" />
        <FaXTwitter className="social-icon" />
        <FaFacebookF className="social-icon" />
        <PiYoutubeLogoFill className="social-icon" />
      </section>
      <section className="presentation__links">
        <LinksGroup title="En vogue" links={vogueLinks} />
        <LinksGroup links={ssLinks} />
      </section>
      <section className="presentation__img-wrapper">
        <img
          className="presentation__img"
          src={montNimba}
          alt="Le Mont Nimba à Man"
          loading="lazy"
        />
      </section>
      <section className="presentation__description">
        <h3 className="third-heading">Venez découvrir la richesse de notre culture ici à Man. Vous ne le regreterez pas !</h3>
      </section>
    </section>
  );
};

export default Presentation;
