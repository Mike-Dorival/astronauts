const astronauts = [
  {
    id: "9470eca2-75fe-4d70-9c46-63cb476cb24f",
    firstname: "Thomas",
    lastname: "Pesquet",
    age: 44,
    country: "France",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Thomas_Pesquet%2C_official_portrait_in_EMU_%282020%29_cropped.jpg",
    text: `Thomas Pesquet, né le 27 février 1978 à Rouen (Seine-Maritime), est un spationaute français.
    Après une formation d'ingénieur aéronautique à l'Institut supérieur de l'aéronautique et de l'espace (ISAE-SUPAERO) à Toulouse, Thomas Pesquet occupe différents postes dans l'industrie aérospatiale et au Centre national d'études spatiales (CNES) avant de devenir, en 2005, pilote de ligne. En mai 2009, il fait partie des six candidats retenus pour former le troisième groupe de spationautes européens sélectionnés par l'Agence spatiale européenne.
    Il est le dixième Français à partir dans l'espace en décollant le 17 novembre 2016 depuis le cosmodrome de Baïkonour au Kazakhstan à bord de Soyouz MS-03, dont l’équipage occupe la Station spatiale internationale (ISS) de novembre 2016 à juin 2017 dans le cadre de la mission Proxima. Durant cette mission, Thomas Pesquet mène une centaine d'expériences dont la moitié développée par l'Agence spatiale européenne ou le CNES, l'autre moitié par la National Aeronautics and Space Administration (NASA). Il effectue deux sorties extravéhiculaires de six heures pour des missions de maintenance de la Station spatiale internationale.`,
  },
  {
    id: "5189e994-2880-43f4-b912-d87f6e2a4ac9",
    firstname: "Philippe",
    lastname: "Perrin",
    age: 60,
    country: "France",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Philippe_Perrin.jpg",
    text: `Avant d’obtenir son diplôme, Philippe Perrin effectue son service militaire dans la Marine française, où il a été formé à la navigation, et passe 6 mois en mer dans l’océan Indien. Après l'École polytechnique, il entre dans l’Armée de l’Air en 1985, et décroche son brevet de pilote de chasse en 1987 en étant major de sa promotion[réf. nécessaire]. De 1987 à 1991, il est affecté au 2/33e Escadron de reconnaissance sur la base aérienne de Strasbourg. Il vole sur Mirage F1 CR et opère plusieurs missions en Arabie saoudite et en Afrique.
    En 1992/93, il est affecté au Centre d'essais en vol de Brétigny-sur-Orge et effectue un stage à la Cité des étoiles à Moscou pendant deux mois. Il participe à 26 missions de combat pendant la Guerre du Golfe (1990-1991). Il commande les opérations de l'Escadron de chasse 1/2 Cigognes avant de devenir chef-pilote au centre d’essai en vol. Sa carrière militaire qui le mène au grade de Colonel en fait un expert en relations internationales : de ses nombreuses responsabilités, on retiendra la mise en place du premier échange avec les Mig 29 de l’Armée Polonaise et le survol de l’Irak pendant la « No Fly zone » en 1994.`,
  },
  {
    id: "47d99f9e-279d-4133-81f4-ee947cd9afec",
    firstname: "Léopold",
    lastname: "Eyharts",
    age: 65,
    country: "France",
    image:
      "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2006/03/esa_astronaut_leopold_eyharts/10062883-2-eng-GB/ESA_astronaut_Leopold_Eyharts_pillars.jpg",
    text: `Ancien élève du lycée Villa-Pia de Bayonne et du lycée Louis-Barthou de Pau, il intègre l'École de l'air à Salon-de-Provence en 1977 et reçoit un diplôme d'ingénieur aéronautique en 1979. En 1980, il est breveté pilote de chasse et affecté à la 7e escadre de chasse dotée de Jaguar, à la base aérienne d'Istres. En 1985, il devient commandant de l'escadrille SPA 77 du 1/7 Provence, basé à Saint-Dizier.
    En 1988, il obtient le diplôme de pilote d'essai de l'école française de pilote d'essai (EPNER) et est affecté au Centre d'essais en vol de Brétigny-sur-Orge, près de Paris. Il vole alors sur différents types d'avions civils et militaires, comprenant le Mirage 2000, l'Alpha Jet, le Mirage III, la Caravelle et le C-160 Transall, essayant principalement des radars ainsi que des équipements[style à revoir].
    Il totalise 3 800 heures de vol en tant que pilote de combat et d'essai avec une cinquantaine de types d'avions différents, ainsi que 21 sauts en parachute, dont une éjection (qui lui a sauvé la vie, in extremis en avion Jaguar à Istres).
    Il est aujourd'hui général de brigade aérienne.`,
  },
  {
    id: "f250cd44-3254-4f80-84f7-c8d12923dba1",
    firstname: "Claudie",
    lastname: "Haigneré",
    age: 65,
    country: "France",
    image: "http://www.kosmonavtika.com/cosmoperso/cosmonautes/etrangers/haignere-c/haignere-c.jpg",
    text: `Claudie André-Deshays, épouse Haigneré, née le 13 mai 1957 au Creusot. Après onze ans de sélection, Claudie Haigneré commence le 17 août 1996 un vol de seize jours à bord de la station orbitale russe Mir dans le cadre de la mission franco-russe Cassiopée pour effectuer de nombreuses expériences médico-physiologiques, techniques et biologiques.
    En mai 1998, elle rejoint la cité des étoiles comme spationaute suppléante pour la mission franco-russe Perseus qui débute, en février 1999, à bord de Mir. Elle suit un entraînement complet d'ingénieur de bord de la station et de cosmonaute sauveteur de vaisseau Soyouz.
    En novembre 1999, elle est intégrée à l'Agence spatiale européenne (ESA) et rejoint le Corps européen des astronautes à Cologne en Allemagne.
    En janvier 2001, elle rejoint à nouveau la cité des étoiles pour un entraînement de neuf mois pour la mission Andromède. Première spationaute française à voler à bord de la Station spatiale internationale (ISS), Claudie Haigneré, ingénieur de bord no 1, réalise un programme expérimental dans les domaines de l'observation de la Terre, de l'étude de l'ionosphère, des sciences de la vie ainsi que des sciences de la matière.`,
  },
  {
    id: "218c45d5-39b6-4117-bffa-a965f30509fe",
    firstname: "Jean-Jacques",
    lastname: "Favier",
    age: 73,
    country: "France",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jean-Jacques_Favier.jpg/1200px-Jean-Jacques_Favier.jpg",
    text: `Jean-Jacques Favier, né le 13 avril 1949 à Kehl, en Allemagne. Il étudie en classe préparatoire aux grandes écoles du lycée Kléber de Strasbourg avant d'intégrer l'École nationale supérieure d'électrochimie et d'électrométallurgie (ENSEEG) à Grenoble en 1971. Il obtient un doctorat en ingénierie de l'École des mines de Paris ainsi qu'un doctorat en physique et métallurgie de l'université Joseph-Fourier - Grenoble 1 en 1977.`,
  },
];

export default astronauts;
