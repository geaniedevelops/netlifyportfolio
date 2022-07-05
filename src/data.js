let projects = [
    {
        name: "Mobile Resume",
        githubLink: "",
        demoLink: "",
        description: "",
        key: 4,
        slug: "mobile-resume",
        date: "June 2019",
        image: "../public/images/mobres.png"
    },
    {
        name: "For the Throne",
        githubLink: "",
        demoLink: "",
        description: "",
        key: 3,
        slug: "for-the-throne",
        date: "April 2019",
        image: "public/images/forthethrone.png"
    },
    {
        name: "Nitschke-Voijtek Wedding",
        githubLink: "",
        demoLink: "",
        description: "",
        key: 2,
        slug: "umbrella-wedding",
        date: "February 2019",
        image: "public/images/umbrellawedding.png"
    },
    {
        name: "Streetscape",
        githubLink: "",
        demoLink: "",
        description: "",
        key: 1,
        slug: "streetscape",
        date: "February 2018",
        image: "public/images/streetscape.png"
    },
    {
        name: "You Win or You Die",
        githubLink: "",
        demoLink: "",
        description: "",
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

export function getResume() {
    return resume;
}