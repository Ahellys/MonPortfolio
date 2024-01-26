import self from "../img/self.png"
import booki from "../img/booki_projet.png"
import kasa from "../img/kasa_projet.png"
import java from "../img/java_projets.png"


export let colors = ["rgb(191, 7, 228)", "rgb(225, 255, 0)"];



export const info = {
    firstName: "Yoann",
    lastName: "Silmon",
    initials: "ys", 
    position: "développeur full stack junior",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '👨🏿‍🎓',
            text: 'Titre professionnel de Développeur informatique'
        },
        {
            emoji: '🌎',
            text: 'Actuellement à Aix-en-provence'
        },
        {
            emoji: "💼",
            text: "En recherche de mon premier emploi de développeur fullstack"
        },
        {
            emoji: "📧",
            text: "y.silmon@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/Ahellys",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/yoann-silmon",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }

    ],
    bio: "Bonjour ! Je m'appelle Yoann. J'ai suivi la formation diplômante de développeur web et web mobile par Openclassrooms dans le but de devenir développeur web fullstack. J'ai une appétance plus prononcée pour le back-end et l'applicatif. Je suis avide d'apprentissage et de progrès!",
    skills:
        {
            proficientWith: ['javascript','nodejs', 'react', 'git', 'github', 'html5', 'css3'],
            exposedTo: ['python', 'svelte' , '...'],
            learning: ['test unitaires','figma', 'bootstrap', 'Angular', 'Typescript', 'java', 'JEE', 'SQL','AGIL']
        }
    ,
    hobbies: [
        {
            label: 'lecture',
            emoji: '📖'
        },
        {
            label: 'randonnée',
            emoji: '🏞'
        },
        {
            label: 'cinéma',
            emoji: '🎥'
        },
        {
            label: 'cuisine',
            emoji: '🌶'
        }

    ],
    portfolio: [ 
        {
            title: "Openclassrooms - Booki",
            live: "https://ahellys.github.io/Booki/",
            source: "https://github.com/Ahellys/Booki.git",
            image: booki,
            details: "Le tout premier projet de la formation à réaliser. J'ai réalisé la page d'accueil d'un site statique de réservation de logement Ce projet m'a appris les bases du HTML, du CSS ainsi que la logique responsive. Durant ce projet, j'ai rencontré des difficultés avec l'utilisation du CSS. L'utilisation de la documentation m'a permis de progresser et surmonter cela."
        },
        {
            title: "Openclassrooms - KASA",
            live: "https://ahellys.github.io/kasa_oc/",
            source: "https://github.com/Ahellys/kasa_oc.git",
            image: kasa,
            details: "Ce projet demandait de réaliser un site statique reprennant le principe des AirB&B en React. J'ai eu l'occasion de me familiariser avec React natif, React Router et SASS. L'utilisation des composants a été assez intuitive car plus proche de la programation orientée objet que JS natif. SCSS a effectivement facilité le styling du site et la partie responsive. Je n'étais pas encore trop familier avec les variables, leur uilisation aurait rendu le code encore plus clair pour une meilleure maintenabilité"
        },
        {
            title: "Codegym - Games",
            live: "https://codegym.cc/projects/apps?query=yoann&order=NEW",
            source: "https://github.com/Ahellys/Racer.git",
            image: java,
            details: "Ces jeux sont des excercices antérieures à la formation. Ma décision de me reconvertir en développeur pour faire de l'applicatif remonte à 2020. J'avais commencé des cours de JAVA qui m'ont donnés les bases de la POO. C'est également comme cela que j'ai appris à utiliser une documentation et chercher des ressources sur internet. Le lien GitHub vous amènera vers le Racer, qui était le plus complexe. Mais vous pouvez également accéder au Snake, Minesweeper(démineur), (space)Invaders et Moonlander depuis mes repositories."
        }
    ]
}