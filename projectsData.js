const categories = [
    { name: 'Residential', image: './img/category/making1.png', active: true },
    { name: 'Healthcare', image: './img/category/making2.png', active: true },
    { name: 'Sanctuary', image: './img/category/making3.png', active: true },
    {
        name: 'Transportation',
        image: './img/category/plant1b.png',
        active: true,
    },
    { name: 'Skyscraper', image: './img/category/plant2.png', active: true },
    { name: 'Community', image: './img/category/walls.png', active: true },
];

const projectsData = {
    Residential: [
        {
            title: 'Modern House',
            description: 'Beautiful modern home.',
            image: './img/projects/jhon.jpg',
            layout: 'full-width',
            content: [
                {
                    type: 'text',
                    title: 'Project Overview',
                    value: 'This is a beautiful modern home with cutting-edge architecture.',
                },
                {
                    type: 'image',
                    title: 'Main Facade',
                    src: './img/projects/jhon.jpg',
                    layout: 'full-width',
                },
            ],
        },
        {
            title: 'Luxury Villa',
            description: 'Exclusive villa.',
            image: './img/projects/office-2.jpg',
            layout: 'half-text-right',
            content: [
                {
                    type: 'text',
                    title: 'Project Overview',
                    value: 'This is a beautiful modern home with cutting-edge architecture.',
                },
                {
                    type: 'image',
                    title: 'Main Facade',
                    src: './img/projects/jhon.jpg',
                    layout: 'full-width',
                },
            ]
        },
       
    ],
    Healthcare: [
        {
            title: 'Sunflower Centers',
            description: 'Sunflower Centers',
            image: './img/projects/Sunflower/main.jpg',
            layout: 'full-width',
            content: [
                {
                    type: 'split',
                    title: null,
                    left: {
                        type: 'image',
                        src: './img/projects/Sunflower/main.jpg',
                        layout: 'full-width',
                    },
                    right: {
                        type: 'image',
                        src: './img/projects/Sunflower/img_2.jpg',
                        layout: 'full-width',
                    },
                },
                {
                    type: 'text',
                    title: 'Healing trauma & advancing research',
                    value: 'Sunflower Centers are purpose-built centers that enable proper “set and setting” for people to benefit from psychedelic therapy and research in a safe and legal framework, surrounded by well-trained, caring providers and staff. <br/><br/> Our first location is located between Jerusalem and Tel Aviv, Israel, and welcomes top research scientists and practitioners from the finest research organizations and clinics.',
                },
                {
                    type: 'image',
                    src: './img/projects/mock.jpg',
                    layout: 'full-width',
                },
                {
                    type: 'split',
                    title: 'Purpose-built design & architecture',
                    left: {
                        type: 'text',
                        value: 'Set-and-setting is critical for proper administration of plant medicine, and Sunflower Centers connects each person being treated directly with nature, in a safe, dedicated, sound-proof environment adjacent to trained nursing and medical staff. <br/> Our facilities are accessible, organic, and imbued with plants and natural light.',
                    },
                    right: {
                        type: 'image',
                        src: './img/projects/Sunflower/img_3.jpg',
                        layout: 'full-width',
                    },
                },
                {
                    type: 'text',
                    title: 'Support for veterans and survivors',
                    value: 'Sunflower Centers provide free or low-cost treatment to veterans and other survivors of terror and trauma. We never turn down anyone due to financial lack. While we prioritize helping Israeli patients, our centers are open to everyone, and we are working to expand worldwide to help as many people as possible.',
                },
                {
                    type: 'text',
                    title: 'Architectural Design',
                    value: `The design of Sunflower Centers, led by founder Ari Teman, gives each patient their own isolated, tranquil space overlooking a personal garden, the campus, and Israel's beautiful landscape.`,
                },
                {
                    type: 'image',
                    src: './img/projects/mock.jpg',
                    layout: 'full-width',
                },
                {
                    type: 'text',
                    title: 'DIGNITY & PRIVACY',
                    value: `Each room is separated with a gap, so that one patient having a loud experience does not impact others, while nursing stations are immediately behind the rooms in a central hall. <br/> <br/> The treatment rooms, offices, classrooms, and gathering spaces face the outside, over private garden patios, into the landscaped grounds, and further on into nature. The interior hall looks into a large, landscaped courtyard and up to the heavens. There are planters, water features, and inspiring artworks throughout the facility.`,
                },
                {
                    type: 'image',
                    src: './img/projects/mock.jpg',
                    layout: 'full-width',
                },
                {
                    type: 'split',
                    title: 'COMMUNITY',
                    left: {
                        type: 'image',
                        src: './img/projects/Sunflower/img_4.jpg',
                        layout: 'full-width',
                    },
                    right: {
                        type: 'text',
                        value: 'To ensure the campus is a place for community, for education, advocacy, and because mental health and healing benefits from connection, we integrated classrooms, lecture halls, theaters, event and trade show spaces, prayer chapels and study rooms for various faiths, food halls, cafes, walking paths, gardens, atriums, meditation, and resting spaces.',
                    },
                },

                {
                    type: 'text',
                    title: 'ACCESSABILITY',
                    value: `To maximize accessibility, we had the building follow the Fibonacci Sequence, also known as the Golden Ratio, and like Frank Lloyd Wright’s Guggenheim Museum in New York City, the interior path is an uninterrupted spiral from ground entrance to the top. <br/><br/> The spiral, continuous hall enables those in need of wheelchairs and those who are Sabbath-observant to travel the building without needing to use the elevators (we also include Sabbath-mode elevators), and also enables beds and automated carts to be moved throughout the building without being delayed waiting for an elevator. Most-importantly, it enables the entire space to feel connected and organic, rather than industrial and siloed.`,
                },
                {
                    type: 'text',
                    title: 'ETERNITY',
                    value: `The entrance of the building is a glass ‘waterfall’ which cascades from the top, bringing more natural light into the central spaces, while the vast, light-filled entry foyer fills incoming patients and loved ones with a sense of awe, connection to God, in whatever form that means to each person, and impresses upon them that this is a special place created to help them by people who care, and who see and value their divinity.`,
                },
                {
                    type: 'image',
                    src: './img/projects/mock.jpg',
                    layout: 'full-width',
                },
                {
                    type: 'text',
                    title: 'TRANQUILITY',
                    value: `All parking and entrance by vehicles, such as ambulances, is underground, from the outer perimeter of the campus, so no patient is distracted by flashing lights or noise, and so the campus remains pedestrian friendly and quiet. <br/><br/> Overall, the most important aspect of this space is for all those who enter to feel that they are loved, by themselves, by others, and by God. <br/><br/> Following October 7, may God please Bring Them Home Now, bringing effective healing to all is an even more pressing and important mission.`,
                },

                {
                    type: 'text',
                    title: 'TRANQUILITY',
                    value: `Sunflower Center was originally designed in pencil-and-pen/marker by Ari Teman. A sample of original sketches:`,
                },
                {
                    type: 'split',
                    title: null,
                    left: {
                        type: 'text-image',
                        text: 'Original sketch by Ari Teman [Credit: Artist]',
                        src: './img/projects/Sunflower/photo1.jpg',
                        position: 'bottom',
                    },
                    right: {
                        type: 'text-image',
                        text: 'Original sketch by Ari Teman [Credit: Artist]',
                        src: './img/projects/Sunflower/photo2.jpg',
                        position: 'bottom',
                    },
                },
                {
                    type: 'split',
                    title: null,
                    left: {
                        type: 'text-image',
                        text: 'Original sketch by Ari Teman [Credit: Artist]',
                        src: './img/projects/Sunflower/photo3.jpg',
                        position: 'bottom',
                    },
                    right: {
                        type: 'text-image',
                        text: 'Original sketch by Ari Teman [Credit: Artist]',
                        src: './img/projects/Sunflower/photo4.jpg',
                        position: 'bottom',
                    },
                },
                {
                    type: 'split',
                    title: null,
                    left: {
                        type: 'text-image',
                        text: 'Original sketch by Ari Teman [Credit: Artist]',
                        src: './img/projects/Sunflower/photo5.jpg',
                        position: 'bottom',
                    },
                    right: {
                        type: 'text-image',
                        text: 'Ari volunteering at Surfside collapse with IDF [Credit: IDF]',
                        src: './img/projects/Sunflower/photo6.jpg',
                        position: 'bottom',
                    },
                },
                {
                    type: 'split',
                    title: null,
                    left: {
                        type: 'text-image',
                        text: 'Ari awarded Jewish Hero of the Year by Jewish Federations of North America [Credit: JTA]',
                        src: './img/projects/Sunflower/photo7.jpg',
                        position: 'bottom',
                    },
                    right: {
                        type: 'text-image',
                        text: 'Ari painting Dave Portnoy [Credit: Elena Zoppolato]',
                        src: './img/projects/Sunflower/photo8.png',
                        position: 'bottom',
                    },
                },
                {
                    type: 'split',
                    title: null,
                    left: {
                        type: 'text-image',
                        text: 'Ari leading a JCorps volunteering group [Credit: JCorps]',
                        src: './img/projects/Sunflower/photo10.png',
                        position: 'bottom',
                    },
                    right: {
                        type: 'text-image',
                        text: 'Ari painting Dave Portnoy [Credit: Elena Zoppolato]',
                        src: './img/projects/Sunflower/photo11.png',
                        position: 'bottom',
                    },
                },
                {
                    type: 'split',
                    title: null,
                    left: {
                        type: 'text-image',
                        text: 'Ari leading a JCorps volunteering group [Credit: JCorps]',
                        src: './img/projects/Sunflower/photo12.png',
                        position: 'bottom',
                    },
                },
                // {
                //     type: "gallery",
                //     title: null,
                //     images: [
                //         "/img/projects/Sunflower/photo12.png", "/img/projects/Sunflower/photo12.png", "/img/projects/Sunflower/photo12.png",
                //         "/img/projects/Sunflower/photo12.png", "/img/projects/Sunflower/photo12.png", "/img/projects/Sunflower/photo12.png",
                //         "/img/projects/Sunflower/photo12.png"
                //     ]
                // }
            ],
        },
    ],
    Sanctuary: [
        {
            title: 'Modern House',
            description: 'Beautiful modern home.',
            image: './img/projects/jhon.jpg',
            layout: 'full-width',
            content: [
                {
                    type: 'text',
                    title: 'Project Overview',
                    value: 'This is a beautiful modern home with cutting-edge architecture.',
                },
                {
                    type: 'image',
                    title: 'Main Facade',
                    src: './img/projects/jhon.jpg',
                    layout: 'full-width',
                },
            ],
        },
        {
            title: 'Modern House',
            description: 'Beautiful modern home.',
            image: './img/projects/office-2.jpg',
            layout: 'full-width',
            content: [
                {
                    type: 'text',
                    title: 'Project Overview',
                    value: 'This is a beautiful modern home with cutting-edge architecture.',
                },
                {
                    type: 'image',
                    title: 'Main Facade',
                    src: './img/projects/jhon.jpg',
                    layout: 'full-width',
                },
            ],
        },
    ],
    Transportation: [
        {
            title: 'Modern House',
            description: 'Beautiful modern home.',
            image: './img/projects/sktech.jpg',
            layout: 'full-width',
            content: [
                {
                    type: 'text',
                    title: 'Project Overview',
                    value: 'This is a beautiful modern home with cutting-edge architecture.',
                },
                {
                    type: 'image',
                    title: 'Main Facade',
                    src: './img/projects/jhon.jpg',
                    layout: 'full-width',
                },
            ],
        },
    ],
    Skyscraper: [
        {
            title: 'Modern House',
            description: 'Beautiful modern home.',
            image: './img/projects/office.png',
            layout: 'full-width',
            content: [
                {
                    type: 'text',
                    title: 'Project Overview',
                    value: 'This is a beautiful modern home with cutting-edge architecture.',
                },
                {
                    type: 'image',
                    title: 'Main Facade',
                    src: './img/projects/jhon.jpg',
                    layout: 'full-width',
                },
            ],
        },
    ], 
    Community: [
        {
            title: 'Modern House',
            description: 'Beautiful modern home.',
            image: './img/projects/jhon.jpg',
            layout: 'full-width',
            content: [
                {
                    type: 'text',
                    title: 'Project Overview',
                    value: 'This is a beautiful modern home with cutting-edge architecture.',
                },
                {
                    type: 'image',
                    title: 'Main Facade',
                    src: './img/projects/jhon.jpg',
                    layout: 'full-width',
                },
            ],
        },
    ],
};
