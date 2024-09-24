import Link from "./link.tsx";

const LinksGroup = ({title, links} : {title? : string, links : {label : string}[]}) => {
  return (
    <section className="links-group">
      {title ? (
        <h4 className="fourth-heading">{title}</h4>
      ) : (
        <h4 className="fourth-heading">&hearts;</h4>
      )}
      <ul className="link-list">
        {links.map((link, i) => (
          <Link key={i} label={link.label}/>
        ))}
      </ul>
    </section>
  );
};

export default LinksGroup;
