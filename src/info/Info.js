import self from "../img/self.png"
import booki from "../img/booki_projet.png"
import kasa from "../img/kasa_projet.png"
import java from "../img/java_projets.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(191, 7, 228)", "rgb(225, 255, 0)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Yoann",
    lastName: "Silmon",
    initials: "ys", // the example uses first and last, but feel free to use three or more if you like.
    position: "développeur full stack junior",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
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
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Bonjour ! Je m'appelle Yoann. Fraîchement développeur web fullstack avec une appétance plus prononcée pour le back-end et l'applicatif. Je suis avide d'apprentissage et de progrès!",
    skills:
        {
            proficientWith: ['javascript','nodejs', 'react', 'git', 'github', 'html5', 'css3'],
            exposedTo: ['python', 'svelte' , 'AGIL', '...'],
            learning: ['test unitaires','figma', 'bootstrap', 'Angular', 'Typescript', 'java', 'JEE', 'SQL']
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
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
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