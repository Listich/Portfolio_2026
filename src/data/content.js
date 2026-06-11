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
      'Tests de l\'API REST Iris sur plateforme médicale en production : scénarios fonctionnels, cas limites et validation des réponses',
      'Rédaction de documentation technique (specs API, guides développeur) et d\'un guide utilisateur complet pour l\'application',
      'Travail en environnement Agile avec revues de code et intégration continue',
    ],
    tags: ['PHP', 'Laravel', 'REST API', 'MySQL', 'Git', 'Agile'],
  },
  {
    date: 'Sept. 2023 – Mars 2026 · 2 ans 7 mois',
    title: 'Référente',
    company: 'E-mma · Toulouse',
    bullets: [
      'Coordination d\'une équipe de 10 étudiants Epitech — plus de 10 ateliers de programmation animés par an pour des publics de tous âges',
      'Organisation d\'actions solidaires : collecte pour la Journée de la Femme et la sensibilisation au cancer du sein, dons reversés à un hôpital partenaire',
      'Pilotage des initiatives diversité & inclusion dans la tech : lutte contre les stéréotypes de genre, sensibilisation au numérique',
      'Représentation d\'E-mma lors de conférences et tables rondes pour encourager les jeunes vers les métiers du numérique',
    ],
    tags: ['Leadership', 'Inclusion', 'Tech for Good', 'Coordination', 'Solidarité'],
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
    { name: 'C++',  level: 'avancé' },
    { name: 'C',    level: 'intermédiaire' },
    { name: 'Rust', level: 'notions' },
  ],
  frontend: [
    { name: 'React / React Native', level: 'intermédiaire' },
    { name: 'Expo / Vite',          level: 'intermédiaire' },
    { name: 'Tailwind CSS',         level: 'intermédiaire' },
    { name: 'Framer Motion',        level: 'intermédiaire' },
    { name: 'SFML / SDL2',          level: 'avancé' },
  ],
  backend: [
    { name: 'Node.js / Laravel',  level: 'intermédiaire' },
    { name: 'Supabase',           level: 'intermédiaire' },
    { name: 'PostgreSQL / Redis', level: 'intermédiaire' },
    { name: 'REST API',           level: 'avancé' },
    { name: 'XML / XSD',          level: 'avancé' },
  ],
  outils: [
    { name: 'CMake / Git / GitLab',          level: 'avancé' },
    { name: 'VS Code / Qt6',                 level: 'intermédiaire' },
    { name: 'Linux (Ubuntu, Fedora, Rocky)', level: 'avancé' },
    { name: 'Boost',                         level: 'notions' },
  ],
}
