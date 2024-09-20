import { ssLinks, vogueLinks } from "../lib/constant.ts";
import LinksGroup from "./linksgroup.tsx";
import Title from "./title.tsx";

import montNimba from '../assets/mont-nimba.webp';
// import cascade from '../assets/cascade.webp';

const Presentation = () => {
  return (
    <section className="presentation">
      <Title dotColor="#1e1a1d" title="Bienvenue dans La ville aux 18 montagnes" />
      <section className=" container presentation__links">
        <LinksGroup title="En vogue" links={vogueLinks} />
        <LinksGroup links={ssLinks} />
      </section>
      <section className="presentation__img-wrapper">
        <img className="presentation__img" src={montNimba} alt="Le Mont Nimba à Man" />
        {/* <img className="presentation__img" src={cascade} alt="Une Cascade à Man" /> */}
      </section>
    </section>
  );
};

export default Presentation;
