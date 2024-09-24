import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const Link = ({ label }: { label: string }) => {
  return (
    <li className="link-item">
      <a className="link" href="#">
        {label}
        <ArrowTopRightIcon width={15} height={15} />
      </a>
    </li>
  );
};

export default Link;
