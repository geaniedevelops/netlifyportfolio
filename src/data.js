import * as Images from './resources/images/images'

let projects = [
  {
    name: 'You Win or You Die',
    githubLink: 'https://github.com/geanieblanco/YouWin-OrYouDie',
    demoLink: 'https://youwinoryoudie.netlify.app/',
    description:
      'A simple JavaScript trivia game based on Game of Thrones (TV). UI and graphics by me. UPDATE: Refactored to Vue app July 2022.',
    slug: 'you-win-or-die',
    date: 'December 2017',
    image: Images.WinOrDie,
  },
  {
    name: 'Is Danny Stevens Dead Yet?',
    githubLink: 'https://github.com/geanieblanco/isdannystevensdeadyet',
    demoLink: 'https://isdannystevensdeadyet.netlify.app/',
    description:
      'Firebase & React. All my homies hate Danny Stevens [NSFW - expletives]',
    slug: 'is-danny-stevens-dead',
    date: 'July 2022',
    image: Images.WinOrDie,
  },
  {
    name: 'Mobile Resume',
    githubLink: 'https://www.geanieblanco.com/#',
    demoLink: '',
    description:
      'A React Native version of my online resume. Cross platform available.',
    slug: 'mobile-resume',
    date: 'June 2019',
    image: Images.mobileRes,
  },
  {
    name: 'For the Throne',
    githubLink: 'https://github.com/geanieblanco/ForTheThrone',
    demoLink: 'https://geanieblanco.github.io/ForTheThrone/',
    description: 'Platform for making guesses on who survives GoT.',
    slug: 'for-the-throne',
    date: 'April 2019',
    image: Images.ForTheThrone,
  },
  {
    name: 'Nitschke-Voijtek Wedding',
    githubLink: 'https://github.com/geanieblanco/UmbrellaWedding',
    demoLink: 'https://geanieblanco.github.io/UmbrellaWedding/',
    description:
      'A custom wedding website built with basic HTML and CSS animations.',
    slug: 'umbrella-wedding',
    date: 'February 2019',
    image: Images.UmbrellaWedding,
  },
  {
    name: 'Streetscape',
    githubLink: 'https://github.com/geanieblanco/StreetscapeUIPublic',
    demoLink: '',
    description: 'A React Native mobile app focused on pedestrian safety.',
    slug: 'streetscape',
    date: 'February 2018',
    image: Images.Streetscape,
  },
]

let work = [
  {
    companyName: 'PuppySpot',
    description: '',
    examples: [],
    slug: 'puppyspot',
    key: 0,
  },
]

let contactInfo = [
  {
    email: 'hello@geanieblanco.com',
    phone: '(646) 470-2654',
  },
]

let resume = [
  {
    experience: [
      {
        companyName: 'PuppySpot',
        position: 'Frontend Developer',
        startDate: 'March 2021',
        endDate: 'July 2022',
        websiteLink: 'https://www.puppyspot.com',
        slug: 'puppyspot',
      },
      {
        companyName: 'PuppySpot',
        position: 'Jr. Frontend Developer',
        startDate: 'January 2020',
        endDate: 'March 2021',
        websiteLink: 'https://www.puppyspot.com',
        slug: 'puppyspot',
      },
      {
        companyName: 'PuppySpot',
        position: 'UI Contractor',
        startDate: 'July 2019',
        endDate: 'January 2020',
        websiteLink: 'https://www.puppyspot.com',
        slug: 'puppyspot',
      },
      {
        companyName: 'ClassPass',
        position: 'Data Entry Associate',
        startDate: 'May 2019',
        endDate: 'July 2019',
        slug: 'classpass',
      },
      {
        companyName: 'NYC Based Recruitment',
        position: 'Office Manager',
        startDate: 'August 2018',
        endDate: 'May 2019',
        websiteLink: '',
        slug: 'recruitment',
      },
      {
        companyName: 'Vans',
        position: 'Visuals Associate',
        startDate: 'August 2017',
        endDate: 'September 2018',
        websiteLink: 'https://www.vans.com',
        slug: 'vans',
      },
      {
        companyName: 'A to Z Media',
        position: 'Jr. Production Manager',
        startDate: 'January 2016',
        endDate: 'November 2016',
        websiteLink: 'https://www.classpass.com',
        slug: 'classpass',
      },
    ],
  },
  {
    awards: [
      {
        awardName: 'Best Overall Hack',
        event: 'Hackchella',
        date: 'April 20, 2018',
        project: 'Soteria',
      },
      {
        awardName: 'Best Use of Open Source Code',
        event: 'Hackchella',
        date: 'April 20, 2018',
        project: 'Soteria',
      },
    ],
  },
  {
    education: [
      {
        schoolName: 'Rutgers University',
        startDate: 'August 2017',
        endDate: 'Febrauary 2018',
        focus: 'Fullstack Web Development',
        key: 0,
      },
      {
        schoolName: 'General Assembly',
        startDate: '2019',
        endDate: '2019',
        focus: 'UX Design',
        key: 1,
      },
      {
        schoolName: 'SUNY Oneonta',
        startDate: 'August 2011',
        endDate: 'May 2015',
        focus: 'Communication Studies',
        key: 2,
      },
    ],
  },
  {
    skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP Laravel', 'SASS', 'Agile'],
  },
]

export function getProjects() {
  return projects
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}

export function getContactInfo() {
  return contactInfo
}

export function getWork() {
  return work
}

export function getWorkBySlug(slug) {
  return work.find((work) => work.slug === slug)
}

export function getResume() {
  return resume
}
