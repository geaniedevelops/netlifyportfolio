let projects = [
    {
        name: "Mobile Resume",
        githubLink: "https://www.geanieblanco.com/#",
        demoLink: "",
        description: "A React Native version of my online resume. Cross platform available.",
        key: 4,
        slug: "mobile-resume",
        date: "June 2019",
        image: "https://github.com/geanieblanco/netlifyportfolio/blob/main/public/images/mobres.png"
    },
    {
        name: "For the Throne",
        githubLink: "https://github.com/geanieblanco/ForTheThrone",
        demoLink: "https://geanieblanco.github.io/ForTheThrone/",
        description: "Platform for making guesses on who survives GoT.",
        key: 3,
        slug: "for-the-throne",
        date: "April 2019",
        image: "/Users/geanie/Documents/Projects/netlifyportfolio/public/images/forthethrone.png"
    },
    {
        name: "Nitschke-Voijtek Wedding",
        githubLink: "https://github.com/geanieblanco/UmbrellaWedding",
        demoLink: "https://geanieblanco.github.io/UmbrellaWedding/",
        description: "A custom wedding website built with basic HTML and CSS animations.",
        key: 2,
        slug: "umbrella-wedding",
        date: "February 2019",
        image: "public/images/umbrellawedding.png"
    },
    {
        name: "Streetscape",
        githubLink: "https://github.com/geanieblanco/StreetscapeUIPublic",
        demoLink: "",
        description: "A React Native mobile app focused on pedestrian safety.",
        key: 1,
        slug: "streetscape",
        date: "February 2018",
        image: "public/images/streetscape.png"
    },
    {
        name: "You Win or You Die",
        githubLink: "https://github.com/geanieblanco/YouWin-OrYouDie",
        demoLink: "https://geanieblanco.github.io/YouWin-OrYouDie/",
        description: "A simple JavaScript trivia game based on Game of Thrones (TV). UI and graphics by me.",
        key: 0,
        slug: "you-win-or-die",
        date: "December 2017",
        image: "public/images/ywoyd.png"
    }
];

let work = [
    {
        companyName: "PuppySpot",
        description: "",
        examples: [],
        slug: "puppyspot",
        key: 0,
    }
]

let contactInfo = [
    {
        email: "hello@geanieblanco.com",
        phone: "(646) 470-2654"
    }
]

let resume = [
    {
        experience: [
            {
                companyName: "PuppySpot",
                position: "Frontend Developer",
                startDate: "March 2021",
                endDate: "July 2022",
                websiteLink: "https://www.puppyspot.com",
                slug: "puppyspot",
                key: 2,
            },
            {
                companyName: "PuppySpot",
                position: "Jr. Frontend Developer",
                startDate: "January 2020",
                endDate: "March 2021",
                websiteLink: "https://www.puppyspot.com",
                slug: "puppyspot",
                key: 1,
            },
            {
                companyName: "PuppySpot",
                position: "UI Contractor",
                startDate: "July 2019",
                endDate: "January 2020",
                websiteLink: "https://www.puppyspot.com",
                slug: "puppyspot",
                key: 0,
            }
        ]
    },
    {
        awards: [
            {
                awardName: "Best Overall Hack",
                event: "Hackchella",
                date: "April 20, 2018",
                project: "Soteria"
            },
            {
                awardName: "Best Use of Open Source Code",
                event: "Hackchella",
                date: "April 20, 2018",
                project: "Soteria"
            }

        ]
    },
    {
        education: [
            {
                schoolName: "Rutgers University",
                startDate: "August 2017",
                endDate: "Febrauary 2018",
                focus: "Fullstack Web Development",
                key: 0,
            },
            {
                schoolName: "General Assembly",
                startDate: "2019",
                endDate: "2019",
                focus: "UX Design",
                key: 1,
            },
            {
                schoolName: "SUNY Oneonta",
                startDate: "August 2011",
                endDate: "May 2015",
                focus: "Communication Studies",
                key: 2,
            }
        ]
    },
    {
        skills: ["HTML5", "CSS3", "JavaScript", "PHP Laravel", "SASS", "Agile"]
    }
]

export function getProjects() {
    return projects;
}

export function getProjectBySlug(slug) {
    return projects.find(
      (project) => project.slug === slug
    );
  }

export function getContactInfo() {
    return contactInfo;
}

export function getWork() {
    return work;
}

export function getWorkBySlug(slug) {
    return work.find(
      (work) => work.slug === slug
    );
  }

export function getResume() {
    return resume;
}