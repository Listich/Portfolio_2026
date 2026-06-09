export const identity = {
  name: 'Serena Listich',
  github: 'Listich',
  city: 'Toulouse, France',
  site: 'listich.fr',
  jp: 'セレナ・リスティッチ',
  role: 'Étudiante en Informatique ／ Développeuse',
  desc: "Étudiante en Master Informatique à Epitech Toulouse. Je construis des applications mobiles, des outils système en C++, et des expériences web — à l'intersection du logiciel, du design et de la performance.",
  pills: ['C++', 'React Native', 'Swift SC 2026 ☆', 'ML / IA', 'Open Source'],
}

export const education = [
  { date: '2018–2020',               degree: 'Bac ST2S',                                  school: 'Lycée Stéphane Hessel',  badge: null        },
  { date: 'Févr. 2021 – Juin 2022',  degree: 'BTS SIO',                                   school: 'CNED',                   badge: null        },
  { date: 'Sept. 2023 – 2028',       degree: 'Master Informatique — RNCP Niv. 7',          school: 'Epitech Toulouse',       badge: 'PRINCIPAL' },
  { date: 'Oct.–Déc. 2026',          degree: 'Cours ALI',                                  school: 'CSULB Long Beach',       badge: 'À VENIR'   },
  { date: 'Janv. 2027 – ?',          degree: 'SA@B',                                       school: 'CSULB Long Beach',       badge: 'PLANIFIÉ'  },
  { date: 'Sept. 2027',              degree: 'Mastère Spécialisé Business / Entrepreneuriat', school: 'Post-Epitech',        badge: 'AMBITION'  },
]

export const experiences = [
  {
    date: 'Avr. – Août 2026',
    title: 'Stagiaire C++ — Framework XsdGenerator',
    company: 'Telespazio France · Toulouse, DOP/CC',
    bullets: [
      'Développement solo du framework PADA1 / XsdGenerator',
      'Génération automatique de schémas XSD depuis classes C++ annotées',
      'Intégration API REST Confluence pour publication automatisée de documentation',
    ],
    tags: ['C++17', 'CMake', 'XML/XSD', 'REST', 'Confluence'],
  },
  {
    date: 'Sept. – Déc. 2024',
    title: 'Stagiaire Développeuse Back-End',
    company: 'France Surgery — Iris Prevention · Toulouse',
    bullets: [
      'Développement et test de nouvelles fonctionnalités back-end sur une plateforme médicale en production',
      'Conception et implémentation de routes API REST (Laravel), validation des données entrantes et gestion des erreurs',
      'Participation active à la rédaction de documentation technique (specs, guides développeur)',
      'Optimisation du code existant : refactoring, respect des bonnes pratiques PSR et des standards Laravel',
      'Travail en environnement Agile avec revues de code et intégration continue',
    ],
    tags: ['PHP', 'Laravel', 'REST API', 'MySQL', 'Git', 'Agile'],
  },
  {
    date: 'Sept. 2023 – Mars 2026 · 2 ans 7 mois',
    title: 'Référente',
    company: 'E-mma · Toulouse',
    bullets: [
      'Coordination et supervision d\'une équipe de 10 étudiants Epitech animant des ateliers de programmation pour des participants de tous âges',
      'Pilotage des initiatives de diversité et d\'inclusion dans la tech : égalité des genres, lutte contre les stéréotypes, sensibilisation au numérique',
      'Organisation d\'événements de sensibilisation, conférences et tables rondes visant à encourager les jeunes vers les métiers du numérique',
      'Création d\'un environnement d\'apprentissage inclusif, valorisant chaque parcours individuel au sein de l\'association',
      'Représentation d\'E-mma comme vecteur de changement positif dans la communauté technologique toulousaine',
    ],
    tags: ['Leadership', 'Inclusion', 'Tech for Good', 'Coordination', 'Pédagogie'],
  },
]

export const projects = {
  professionnel: [
    {
      id: 'PJ.01',
      title: 'XsdGenerator / PADA1',
      context: 'Telespazio France · Stage C++ · Avr.–Août 2026',
      desc: "Développement solo du framework PADA1. Génération automatique de schémas XSD depuis classes C++ annotées. Intégration API REST Confluence pour doc automatisée.",
      tags: ['C++17', 'CMake', 'XML/XSD', 'REST', 'Confluence'],
      badge: 'STAGE',
    },
    {
      id: 'PJ.02',
      title: 'GH Constructions',
      context: 'Site client · Freelance',
      desc: 'Site vitrine avec formulaire de contact Formspree.',
      tags: ['Web', 'HTML/CSS', 'Formspree'],
      badge: 'FREELANCE',
    },
  ],
  ecole: [
    {
      id: 'PJ.03',
      title: 'Leip Filgood',
      context: 'Epitech Toulouse · Projet groupe · 2 ans',
      desc: "Application mobile scannant les étiquettes de soin vêtements (symboles ISO 3758) et générant un score de durabilité. Seule membre technique ML/dev de l'équipe.",
      tags: ['React Native', 'Node.js', 'Python/ML', 'PostgreSQL', 'Redis'],
      badge: 'GROUPE',
    },
    {
      id: 'PJ.04',
      title: 'Arcade',
      context: 'Epitech Toulouse · Projet école · C++',
      desc: "Moteur de jeu modulaire capable de charger dynamiquement différentes bibliothèques graphiques (SFML, SDL2, Ncurses). Architecture modulaire et extensible avec pattern Factory pour la gestion des interfaces graphiques.",
      tags: ['C++', 'SFML', 'SDL2', 'Ncurses', 'Factory Pattern'],
      badge: 'ÉCOLE',
    },
    {
      id: 'PJ.05',
      title: 'Zappy',
      context: 'Epitech Toulouse · Projet école · C / C++ / Python',
      desc: "Jeu réseau multijoueur : serveur C avec gestion des connexions via poll(), interface graphique 2D en C++ (SFML), et IA autonome en Python pour contrôler les joueurs. Protocole personnalisé entre serveur et clients.",
      tags: ['C', 'C++', 'Python', 'SFML', 'Réseau', 'IA', 'poll()'],
      badge: 'ÉCOLE',
    },
  ],
  personnel: [
    {
      id: 'PJ.06',
      title: 'Falcis',
      context: 'Swift Student Challenge 2026 · Solo · iOS',
      desc: "Application SwiftUI éducative sur la drépanocytose. Sélectionnée lauréate Apple WWDC26.",
      tags: ['Swift', 'SwiftUI', 'iOS', 'Santé'],
      badge: 'AWARD',
      award: true,
    },
    {
      id: 'PJ.07',
      title: 'NutriApp',
      context: 'Application mobile · Solo',
      desc: 'Scan codes-barres, scoring nutritionnel en temps réel, gestion de budget, alternatives saines. Testée avec de vrais utilisateurs.',
      tags: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
      badge: 'SOLO',
    },
    {
      id: 'PJ.08',
      title: 'ChatTCP',
      context: 'Projet perso · C++',
      desc: "Serveur de chat TCP en C++17 utilisant POSIX sockets et select() pour le multiplexage.",
      tags: ['C++17', 'POSIX', 'Sockets', 'select()'],
      badge: 'PERSO',
    },
    {
      id: 'PJ.09',
      title: 'Sims 4 File Manager',
      context: 'Outil perso · Python',
      desc: 'Évolution Batch → HTA → PyQt6 compilé via PyInstaller. UAC elevation, fenêtre de log colorée, gestion fichiers EA.',
      tags: ['Python', 'PyQt6', 'PyInstaller', 'Windows'],
      badge: 'PERSO',
    },
  ],
}

export const skills = {
  langages: [
    { name: 'C++',  stars: 4, pct: 85 },
    { name: 'C',    stars: 3, pct: 65 },
    { name: 'Rust', stars: 1, pct: 20, label: 'en cours' },
  ],
  frontend: [
    { name: 'React / React Native', stars: 4, pct: 85 },
    { name: 'Expo / Vite',          stars: 3, pct: 75 },
    { name: 'Tailwind CSS',         stars: 4, pct: 80 },
    { name: 'Framer Motion',        stars: 3, pct: 65 },
    { name: 'SFML / SDL2',          stars: 3, pct: 65 },
  ],
  backend: [
    { name: 'Node.js / Laravel',  stars: 3, pct: 70 },
    { name: 'Supabase',           stars: 3, pct: 68 },
    { name: 'PostgreSQL / Redis', stars: 3, pct: 65 },
    { name: 'REST API',           stars: 4, pct: 80 },
    { name: 'XML / XSD',          stars: 4, pct: 82 },
  ],
  outils: [
    { name: 'CMake / Git / GitLab',          stars: 4, pct: 82 },
    { name: 'VS Code / Qt6',                 stars: 3, pct: 72 },
    { name: 'Linux (Ubuntu, Fedora, Rocky)', stars: 4, pct: 80 },
    { name: 'VirtualBox',                    stars: 2, pct: 50 },
    { name: 'POSIX Sockets',                 stars: 3, pct: 68 },
    { name: 'Boost',                         stars: 2, pct: 55 },
    { name: 'PyInstaller / PyQt6',           stars: 3, pct: 65 },
  ],
}
