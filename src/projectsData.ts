// Lightweight project list — only heroImages loaded here.
// Used by Projects page and Home "Selected Works" section.
// Full gallery images stay in data.ts (loaded only when a project detail page opens).

import maisonElanHero from "../assets/projects/MaisonElanSliderimage.png";
import houSansargHero from "../assets/projects/hou-sansarg-1.avif";
import resVilla58Hero from "../assets/projects/Villa58heroimg.png";
import resVilla58HeroMobile from "../assets/projects/res-villa-58.jpg";
import resVilla201dHero from "../assets/projects/res-villa-201d-hd3.png";
import resKangsHero from "../assets/projects/TheKangs2.png";
import resVilla361Hero from "../assets/projects/villa361PDHero20.png";
import resVilla361HeroMobile from "../assets/projects/Villa361Mobileview.png";
import resSupreetHero from "../assets/projects/Lt.ColSupreetSinghHome.png";
import schOakwoodHero from "../assets/projects/OAKWODDSCHOOL1.png";
import panchkulaHero from "../assets/PanchkulaHousing.png";
import hou3PMDCHero from "../assets/projects/3PMDCPanchkula.png";
import houUnwalledHero from "../assets/projects/Unwalledimageproject.png";
import houUnwalledHeroMobile from "../assets/projects/Unwalledimagemobileview.png";
import comDevraArchHero from "../assets/projects/com-devra-arch-1.jpg";
import comFortofinoHero from "../assets/projects/com-fortofino-1.avif";
import fhGillsHero from "../assets/projects/fh-gills-1.avif";
import hosCgHero from "../assets/projects/hos-cg-1.avif";
import hplHero from "../assets/projects/HPL.png";
import res121122Hero from "../assets/projects/res-121-122.avif";
import resMidhasHero from "../assets/projects/MIDHAJiHome.png";
import resMinzsHero from "../assets/projects/res-minzs.jpg";
import resVilla303Hero from "../assets/projects/Villa303HeroSlider.png";
import fhNagraHero from "../assets/projects/fh-nagra-1.avif";
import schJpHero from "../assets/projects/sch-jp-3.avif";

export interface ProjectCard {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  heroImage: string;
  mobileHeroImage?: string;
  cardAspectRatio?: string;
  cardPosition?: string;
}

export const PROJECT_CARDS: ProjectCard[] = [
  {
    id: "maison-elan",
    title: "Maison Élan",
    category: "Residential",
    location: "Omaxe, New Chandigarh",
    year: "2025",
    heroImage: maisonElanHero,
  },
  {
    id: "sansarg",
    title: "Sansarg",
    category: "Housing",
    location: "Patiala, Punjab",
    year: "2022",
    heroImage: houSansargHero,
  },
  {
    id: "villa-58",
    title: "Villa 58",
    category: "Residential",
    location: "Sector 58, Mohali",
    year: "2023",
    heroImage: resVilla58Hero,
    mobileHeroImage: resVilla58HeroMobile,
  },
  {
    id: "villa-201d",
    title: "Villa 201D",
    category: "Residential",
    location: "Chandigarh",
    year: "2022",
    heroImage: resVilla201dHero,
  },
  {
    id: "the-kangs",
    title: "The Kangs",
    category: "Residential",
    location: "DLF, New Chandigarh",
    year: "2025",
    heroImage: resKangsHero,
  },
  {
    id: "villa-361",
    title: "Villa 361",
    category: "Residential",
    location: "New Chandigarh",
    year: "2024",
    heroImage: resVilla361Hero,
    mobileHeroImage: resVilla361HeroMobile,
  },
  {
    id: "col-supreet",
    title: "Col. Supreet Residence",
    category: "Residential",
    location: "Mohali, Punjab",
    year: "2023",
    heroImage: resSupreetHero,
  },
  {
    id: "oakwood-school",
    title: "The Oakwood School",
    category: "Schools",
    location: "Punjab",
    year: "2020",
    heroImage: schOakwoodHero,
  },
  {
    id: "panchkula-housing",
    title: "Panchkula Housing",
    category: "Housing",
    location: "Panchkula",
    year: "2021",
    heroImage: panchkulaHero,
  },
  {
    id: "3p-mdc-panchkula",
    title: "3P MDC Panchkula",
    category: "Housing",
    location: "3P MDC Panchkula",
    year: "2026",
    heroImage: hou3PMDCHero,
  },
  {
    id: "unwalled-housing",
    title: "UNWALLED",
    category: "Residential",
    location: "New Chandigarh",
    year: "2026",
    heroImage: houUnwalledHero,
    mobileHeroImage: houUnwalledHeroMobile,
  },
  {
    id: "devra-architects",
    title: "Devra Architects",
    category: "Commercial",
    location: "PH-1 Cassia, New Chandigarh",
    year: "2025",
    heroImage: comDevraArchHero,
  },
  {
    id: "fortofino",
    title: "FortoFino",
    category: "Commercial",
    location: "Srinagar",
    year: "2024",
    heroImage: comFortofinoHero,
  },
  {
    id: "gills-farmhouse",
    title: "Gill's Farmhouse",
    category: "Farm Houses",
    location: "Baddi Road",
    year: "2020",
    heroImage: fhGillsHero,
  },
  {
    id: "castle-grey",
    title: "Castle Grey",
    category: "Commercial",
    location: "Rohtak, Haryana",
    year: "2019",
    heroImage: hosCgHero,
  },
  {
    id: "hlp-project",
    title: "HLP Project",
    category: "Commercial",
    location: "Punjab",
    year: "2024",
    heroImage: hplHero,
  },
  {
    id: "121-122",
    title: "121 & 122",
    category: "Residential",
    location: "PH-1 OMAXE, New Chandigarh",
    year: "2024",
    heroImage: res121122Hero,
  },
  {
    id: "the-midhas",
    title: "The Midha's",
    category: "Residential",
    location: "PH-3 Cassia, New Chandigarh",
    year: "2025",
    heroImage: resMidhasHero,
  },
  {
    id: "the-minzs",
    title: "The Minz's",
    category: "Residential",
    location: "PH-3 Cassia, New Chandigarh",
    year: "2024",
    heroImage: resMinzsHero,
  },
  {
    id: "villa-303",
    title: "Villa 303",
    category: "Residential",
    location: "PH-1 Cassia, New Chandigarh",
    year: "2023",
    heroImage: resVilla303Hero,
  },
  {
    id: "nagra-farmhouse",
    title: "Nagra Farmhouse",
    category: "Farm Houses",
    location: "Punjab",
    year: "2023",
    heroImage: fhNagraHero,
  },
  {
    id: "jp-international",
    title: "J P International",
    category: "Schools",
    location: "Punjab",
    year: "2023",
    heroImage: schJpHero,
  },
];
