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
    duration: "3-4 heures",
    difficulty: "Modéré",
    bestTimeToVisit: "Novembre à Février",
    activities: ["Escalade", "Randonnée"],
    detailedInfo: "Les Dents de Man sont une chaîne de montagnes emblématiques, offrant des sentiers de randonnée pittoresques et des vues à couper le souffle. Idéal pour les amoureux de la nature.",
    imageSrc:"/assets/montagne.jpg"
  },
  {
    label: "Mont Tonkoui",
    difficulty: "Modéré",
    activities: ["Escalade", "Récoltes"],
    detailedInfo: "Le Mont Tonkoui est le point culminant de la Côte d'Ivoire, avec des possibilités d'escalade et des paysages magnifiques. Parfait pour les amateurs d'aventure.",
  },
  {
    label: "Pont de Lianes",
    highlights: "Vue panoramique, traversée des lianes",
    activities: ["Promenade", "Tyrolienne"],
    detailedInfo: "Le Pont de Lianes offre une vue panoramique sur la vallée environnante. La traversée à la tyrolienne est une expérience palpitante à ne pas manquer.",
  },
  {
    label: "Mont Nimba",
    bestTimeToVisit: "Novembre à Février",
    activities: ["Escalade", "Promenade", "Randonnée", "Activités Ludiques"],
    detailedInfo: "Mont Nimba est un site classé au patrimoine mondial de l'UNESCO, célèbre pour sa biodiversité unique. Les randonnées offrent des panoramas spectaculaires.",
  },
  {
    label: "Mt Peko",
    difficulty: "Difficile",
    activities: ["Tyrolienne", "Promenande à Vélo", "Escalade"],
    detailedInfo: "Le Mont Peko est une destination pour les aventuriers avec ses tyroliennes excitantes et ses sentiers d'escalade. Parfait pour ceux qui recherchent des sensations fortes.",
  },
  {
    label: "La Cascade",
    bestTimeToVisit: "Juin à Septembre",
    activities: ["Nage", "Visite de la forêt"],
    detailedInfo: "La Cascade est un lieu de détente idéal, avec des eaux cristallines parfaites pour la baignade. Explorez les forêts environnantes et découvrez la faune locale.",
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
    title: 'Festival des Masques',
    image: '/assets/masque.jpg',
    description: 'Découvrez la célèbre fête des masques de la région de Man, un événement culturel majeur.',
  },
  {
    number: '02',
    title: 'Randonnée au Mont Tonkoui',
    image: '/assets/montagne.jpg',
    description: 'Profitez d\'une vue imprenable lors de la randonnée au sommet du Mont Tonkoui.',
  },
  {
    number: '03',
    title: 'Innovation agricole à Man',
    image: '/assets/agriculture.jpg',
    description: 'La ville se démarque par des projets innovants dans le domaine agricole.',
  },
  {
    number: '04',
    title: 'Jardin botanique de Man',
    image: '/assets/jardin.jpg',
    description: 'Visitez le jardin botanique pour découvrir la diversité de la flore ivoirienne.',
  },
  // {
  //   number: '05',
  //   title: 'Urbanisme en pleine expansion',
  //   image: '/src/assets/urbanisme-man.webp',
  //   description: 'La ville de Man connaît un développement urbain rapide avec plusieurs projets en cours.',
  // },
  // {
  //   number: '06',
  //   title: 'Concert traditionnel',
  //   image: '/src/assets/concert-traditionnel.webp',
  //   description: 'Plongez dans la musique traditionnelle avec un concert en plein air au cœur de Man.',
  // },
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

