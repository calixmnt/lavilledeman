import { TouristSpot } from "./types.ts";

export const vogueLinks = [
  { label: "Dents de Man" },
  { label: "Ponts de Lianes" },
  { label: "Mont Tonkoui" },
];

export const ssLinks = [
  { label: "Cascade du mont Tonkoui" },
  { label: "Mont Peko" },
];

export const starPlacesData = [
  {
    label: "Dents De Man",
    data: "2021",
    activities: ["Escalade", "Randonnée"],
  },
  { label: "Mt Tonkoui", data: "2022", activities: ["Escalade", "Récoltes"] },
  {
    label: "Pont de Lianes",
    data: "2022",
    activities: ["Promenade", "Tyrolienne"],
  },
  {
    label: "Mt Nimba",
    data: "2021",
    activities: [
      "Escalade",
      "Promenade",
      "Randonnée",
      "Activités Ludiques",
    ],
  },
  {
    label: "Mt Peko",
    data: "2022",
    activities: ["Tyrolienne", "Promenande à Vélo", "Escalade"],
  },
  {
    label: "La Cascade",
    data: "2022",
    activities: ["Nage", "Visite de la forêt"],
  },
];

export const starEvents = [
  {
    date: new Date("2024-01-15T20:00:00Z"),
    description: "Lancement de la mission spatiale vers la planète X-9.",
  },
  {
    date: new Date("2024-05-22T18:30:00Z"),
    description:
      "Éclipse solaire totale visible depuis plusieurs régions de la Terre.",
  },
  {
    date: new Date("2024-08-10T22:00:00Z"),
    description:
      "Météo exceptionnelle pour l'observation des étoiles filantes de la pluie d'août.",
  },
  {
    date: new Date("2024-12-12T15:45:00Z"),
    description:
      "Découverte d'une nouvelle exoplanète dans la constellation d'Orion.",
  },
  {
    date: new Date("2025-03-03T07:00:00Z"),
    description:
      "Conférence mondiale sur l'astrobiologie avec des experts du domaine.",
  },
];

export const newsCardData = [
  {
    number: '01',
    title: 'Architecture',
    image: 'src/assets/cascade.webp',
    description: 'A description for Architecture',
  },
  {
    number: '02',
    title: 'Interiors, Graphics & Lighting Design',
    description: 'A description for Architecture',
  },
  {
    number: '03',
    title: 'Digital & Innovation',
    description: 'A description for Architecture',
  },
  {
    number: '04',
    title: 'Landscape',
    description: 'A description for Architecture',
  },
  {
    number: '05',
    image: 'src/assets/cascade.webp',

    title: 'Urbanism',
  },
  {
    number: '06',
    image: 'src/assets/cascade.webp',

    title: 'Turn up the music',
  },
];

export const footerLinks = [
  {}
];

export const cities = [
  "Abidjan", "Oslo", "COPENHAGEN", "PARIS", "HONG KONG", 
]

export const touristSpots: TouristSpot[] = [
  {
    name: "Les Dents de Man",
    position: [7.4731, -7.5483],
    description: "Un massif montagneux qui offre une vue imprenable sur la ville de Man.",
  },
  {
    name: "Mont Nimba",
    position: [7.6167, -8.4],
    description: "Le Mont Nimba est une réserve naturelle classée au patrimoine mondial de l'UNESCO.",
  },
  {
    name: "Cascade de Man",
    position: [7.4132, -7.5391],
    description: "Une belle cascade située dans la région de Man, idéale pour les randonnées.",
  },
  {
    name: "La Forêt Sacrée de Gbépleu",
    position: [7.4014, -7.5525],
    description: "Un lieu sacré où vivent des singes en liberté, symbole de la région.",
  },
  {
    name: "Pont de Lianes",
    position: [7.387, -7.556],
    description: "Un pont traditionnel en lianes construit par les autochtones, un site unique à visiter.",
  },
  {
    name: "Le Mont Tonkoui",
    position: [7.4261, -7.6117],
    description: "Le deuxième plus haut sommet de Côte d'Ivoire offrant une vue panoramique.",
  },
  {
    name: "La Dent de Man",
    position: [7.4815, -7.5411],
    description: "Le plus grand pic du massif des Dents de Man, prisé pour l'escalade.",
  },
  {
    name: "Café Touristique de Man",
    position: [7.4125, -7.5395],
    description: "Un café accueillant avec une vue sur la ville et les montagnes environnantes.",
  },
  {
    name: "Parc National de Taï",
    position: [5.8500, -7.3500],
    description: "Une forêt tropicale dense et sauvage, site classé patrimoine mondial de l'UNESCO.",
  },
  {
    name: "Les Vignobles de la Région de Man",
    position: [7.4000, -7.5300],
    description: "Découverte des vignobles locaux et de la production de vin artisanale.",
  },
  {
    name: "Le Lac aux Caïmans",
    position: [7.3700, -7.5500],
    description: "Un lac naturel abritant des caïmans, à observer avec prudence.",
  },
];

