export type TTypeLink = "external" | "internal";

export type TouristSpot = {
  name: string;
  position: [number, number];
  description: string;
};

export type StarPlaceProps = {
  label: string;
  activities: string[];
  duration?: string;
  difficulty?: string;
  highlights?: string;
  bestTimeToVisit?: string;
  detailedInfo?: string;
  imageSrc?:string;
  isExpanded: boolean;
  onToggle: (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
