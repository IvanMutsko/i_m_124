import gooseImg from '../img/works/goose.jpg';
import phonebookImg from '../img/works/phonebook.jpg';
import filmotekaImg from '../img/works/filmoteka.jpg';
import miminoImg from '../img/works/mimino.jpg';
import webstudioImg from '../img/works/webstudio.jpg';

export const worksForPortfolio = [
  {
    image: gooseImg,
    title: 'Task Manager GooseTrack (Team project)',
    technologies:
      'The project uses: React, Redux, JavaScript, Node.js and other',
    description:
      'GooseTrack offers a comprehensive overview of your schedule, presenting all your tasks, events, and meetings in a visually appealing and intuitive format.',
    github: 'https://github.com/WerewolfDevLearn/project-mern-schedule-01',
    liveLink: 'https://werewolfdevlearn.github.io/project-mern-schedule-01/',
  },
  {
    image: phonebookImg,
    title: 'PhoneBook (Individual project)',
    technologies:
      'The project uses: React, Redux, JavaScript, Chakra UI, Axios',
    description:
      'Contact list application. Realized registration for private work with contacts.',
    github: 'https://github.com/IvanMutsko/goit-react-hw-08-phonebook',
    liveLink: 'https://ivanmutsko.github.io/goit-react-hw-08-phonebook/',
  },
  {
    image: filmotekaImg,
    title: 'Filmoteka (Team project)',
    technologies: 'The project uses: HTML, SASS, JS, REST API, Axios, Parcel',
    description:
      'An application for finding movies, viewing ratings and trailers.The possibility of creating a personal cabinet and the functionality of adding movies to the library have been implemented. Gets data from TMDB API.',
    github: 'https://github.com/WerewolfDevLearn/goit-filmoteka-team',
    liveLink: 'https://werewolfdevlearn.github.io/goit-filmoteka-team/',
  },
  {
    image: miminoImg,
    title: 'Mimino (Team project)',
    technologies: 'The project uses: Parcel, HTML, SASS, JS',
    description:
      'A website for a hotel and restaurant complex. Has a description of rooms, restaurant menu. The site has an adaptive layout.',
    github: 'https://github.com/DimaShabatyn/parcel-team-project-mimino',
    liveLink: 'https://dimashabatyn.github.io/parcel-team-project-mimino/',
  },
  {
    image: webstudioImg,
    title: 'WebStudio (Individual project)',
    technologies: 'The project uses: HTML, SASS, BEM',
    description: 'A website with a responsive layout and semantic markup',
    github: 'https://github.com/IvanMutsko/goit-markup-hw-08',
    liveLink: 'https://ivanmutsko.github.io/goit-markup-hw-08/',
  },
];
