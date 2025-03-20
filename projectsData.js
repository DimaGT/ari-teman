const categories = [
    { name: `Residential`, image: `./img/category/making1.png`, active: true },
    { name: `Healthcare`, image: `./img/category/making2.png`, active: true },
    { name: `Sanctuary`, image: `./img/category/making3.png`, active: true },
    {
        name: `Transportation`,
        image: `./img/category/plant1b.png`,
        active: true,
    },
    { name: `Skyscraper`, image: `./img/category/plant2.png`, active: true },
    { name: `Community`, image: `./img/category/walls.png`, active: true },
];

const projectsData = {
    Residential: [
        {
            title: `Triangle House`,
            subtitle: `Concept | In Progress | <span style="color: #dd783f">Victoria, Australia</span>`,
            description: `Beautiful modern home.`,
            image: `./img/projects/Triangle/hero-slider.webp`,
            content: [
                {
                    type: `image`,
                    src: `./img/projects/jhon.jpg`,
                    layout: `full-width`,
                },
                {
                    type: `text`,
                    title: null,
                    value: `Triangle House is a love letter in brick, wood, glass, and plant life. It is a home dedicated to helping all who enter it feel loved. <br/> <br/> Rabbi Lord Jonathan Sacks taught, "In the 1960s the Danish architect Arne Jacobson designed a new college campus in Oxford. Not content with designing the building, he went on to design the cutlery and crockery to be used in the dining hall, and supervised the planting of every shrub in the college garden. When asked why, he replied in the words of another architect, Mies van der Rohe: 'God is in the details'." (Source) <br/> <br/> It is in this spirit that we focus meticulously on the details, each an act of care and love. Each to help the residents and guests feel special.`,
                },
                {
                    type: `split`,
                    title: `Plants & gardens`,
                    left: {
                        type: `image-group`,
                        images: [
                            `./img/projects/Triangle/plant1b.png`,
                            `./img/projects/Triangle/plant2.png`,
                            `./img/projects/Triangle/flower.png`,
                            `./img/projects/Triangle/walls.png`,
                        ],
                    },
                    right: {
                        type: `text-group`,
                        value: [
                            'Because the muse who inspired this house loves plants, and can never have too many, it is a place designed to hold them and be held by them.',
                            'As Frank Lloyd Wright taught, it serves to be seamlessly with nature without those inside feeling contained.',
                            'A glass entryway and staircase wraps around an outdoor garden and tree allowing guests to experience the garden from all heights and perspectives.',
                            'Glass walls open to and overlook gardens, mossy walls, and atrium.',
                            'Architectural woodwork contains built in planters throughout the home.',
                            'A room dedicated to the care of plants is adjacent to the garden entrance.',
                            'The front pathway takes family and visitors through a rainbow of flowers.',
                            'The backyard and side pool area contain plantings and curated moss walls.',
                        ],
                    },
                },
                
                {
                    type: `split`,
                    title: `Making Space`,
                    left: {
                        type: `text-group`,
                        value: [
                            `Because the couple loves “making space” for family and friends, the home has an expansive kitchen with plenty of seating, and an adjacent large dining table, with nearby sitting areas.`,
                            `A guest suite allows family and friends to stay longer without feeling intrusive.`,
                            `A hidden work kitchen hides messy prep (and the husband's cooking!)...`,
                            `Children's rooms contain bunk beds and trundles for friends.`,
                        ],
                    },
                    right: {
                        type: `image-group`,
                        images: [
                            `./img/projects/Triangle/making1.png`,
                            `./img/projects/Triangle/making2.png`,
                            `./img/projects/Triangle/making3.png`,
                            `./img/projects/Triangle/making4.png`,
                        ],
                    },
                },
                {
                    type: `split`,
                    title: `Play, Read, Explore, and Climb`,
                    left: {
                        type: `image-group`,
                        images: [
                            `./img/projects/Triangle/play2.png`,
                            `./img/projects/Triangle/play1.png`,
                        ],
                    },
                    right: {
                        type: `text-group`,
                        value: [
                            `A built in playroom has places for kids of all ages to climb, explore, experiment, and even to retreat and read quietly.`,
                            `Like the rest of the home, it is accessible so that a child or adult in a wheelchair can access any level.`,
                            `The front pathway takes family and visitors through a rainbow of flowers.`,
                            `The backyard and side pool area contain plantings and curated moss walls.`,
                        ],
                    },
                },
                {
                    type: `split`,
                    title: `Pray & Learn`,
                    left: {
                        type: `text-group`,
                        value: [
                            `A library whose architectural woodwork resembles a tree, is built around the line from Proverbs 3:1,18, “It is a tree of life for those who grasp it...” Here, the tree is a metaphor for the Torah (Hebrew Bible), but also continues to honor the mother's love of plants.`,
                        ],
                    },
                    right: {
                        type: `image`,
                        src: `./img/projects/Triangle/pray.png`,
                    },
                },
                {
                    type: `split`,
                    title: `Handsome cats and fluffy dogs`,
                    left: {
                        type: `image`,
                        src: `./img/projects/Triangle/cat_ledge.png`,
                    },
                    right: {
                        type: `text-group`,
                        value: [
                            `Triangle House is also the home of handsome cats and fluffy dogs, and includes built in automated feeders, grooming areas, and even a cat walk.`,
                        ],
                    },
                },
                {
                    type: `split`,
                    title: `Home offices`,
                    left: {
                        type: `text-group`,
                        value: [
                            `Home offices and a conference room overlooking the great room allow the couple to pursue their work and philanthropy while staying close to their children, while having their own quiet spaces to focus.`,
                        ],
                    },
                    right: {
                        type: `image-group`,
                        images: [
                            `./img/projects/Triangle/office.png`,
                            `./img/projects/Triangle/office-2.jpg`,
                        ],
                    },
                },
                {
                    type: `text`,
                    title: `Family floor`,
                    layout: `half-width`,
                    value: `The family bedrooms and living spaces are on the 3rd floor, so that guests do not accidentally or purposefully wander into them without permission, and so the family can maintain privacy even while entertaining guests.`
                },
                {
                    type: `text`,
                    title: `Grill and Chill`,
                    layout: `half-width`,
                    value: `Behind the kitchen is a grill area allowing easy pass-through of food and materials.`
                },
                {
                    type: `split`,
                    title: `Thank you, John Lautner`,
                    left: {
                        type: `text-group`,
                        value: [
                            `Triangle House began in part as an homage to the great John Lautner, whose work endlessly fascinates and inspires me, a student and apprentice of Frank Lloyd Wright.`,
                        ],
                    },
                    right: {
                        type: `image`,
                        src: `./img/projects/Triangle/jhon.jpg`,
                    },
                },
                {
                    type: `text`,
                    title: `Thank you, Team`,
                    layout: `half-width`,
                    value: `Thank you to Yohanes and Zenabator for your incredible work modeling Triangle House and Sunflower Center (SunflowerCenters.com).`
                },
                {
                    type: `split`,
                    title: `Early Sketches`,
                    left: {
                        type: `text-group`,
                        value: [
                            `This house is an ongoing project which began about four years ago during COVID lockdowns, through pencil and marker sketches -- an analog art form serving as a break from constant screen time video chatting with my girlfriend and family overseas. Sketching became A meditation and a way of seeing to the future through difficult times. I fell deeply in love with planning and designing buildings (see SunflowerCenters.com for one other example) and cars (we also designed the Jovari EV Hypercar during COVID).`,
                            `In dark times, designing the future and thinking of ways to delight and comfort others has brought me great hope and joy`,
                            `Here are some sketches over the past few years. You may spot elements the team pulled into the current models from my instagram or pinterest.`
                        ],
                    },
                    right: {
                        type: `image`,
                        src: `./img/projects/Triangle/sktech.jpg`,
                    },
                },
                {
                    type: "gallery",
                    title: null,
                    images: [
                        "/img/projects/Triangle/g1.jpg",
                        "/img/projects/Triangle/g2.png",
                        "/img/projects/Triangle/g3.png",
                        "/img/projects/Triangle/g4.png",
                        "/img/projects/Triangle/g5.png",
                        "/img/projects/Triangle/g6.png",
                        "/img/projects/Triangle/g7.png",
                        "/img/projects/Triangle/g8.png",
                        "/img/projects/Triangle/g9.png",
                        "/img/projects/Triangle/g10.png",
                        "/img/projects/Triangle/g11.png",
                        "/img/projects/Triangle/g12.png",
                        "/img/projects/Triangle/g13.png",
                        "/img/projects/Triangle/g14.png",
                        "/img/projects/Triangle/g15.png",
                        "/img/projects/Triangle/g16.png",
                        "/img/projects/Triangle/g16.png",
                        "/img/projects/Triangle/g17.png",
                        "/img/projects/Triangle/g18.png",
                        "/img/projects/Triangle/g19.png",
                        "/img/projects/Triangle/g20.png",
                        "/img/projects/Triangle/g21.png",
                        "/img/projects/Triangle/g22.png",
                        "/img/projects/Triangle/g23.png",
                        "/img/projects/Triangle/g24.png",
                        "/img/projects/Triangle/g25.png",
                        "/img/projects/Triangle/g26.png",
                        "/img/projects/Triangle/g27.png",
                        "/img/projects/Triangle/g28.png",
                        "/img/projects/Triangle/g29.png",
                        "/img/projects/Triangle/g30.png",
                        "/img/projects/Triangle/g31.png",
                        "/img/projects/Triangle/g32.png",
                        "/img/projects/Triangle/g33.png",
                        "/img/projects/Triangle/g34.png",
                        "/img/projects/Triangle/g35.png",
                        "/img/projects/Triangle/g36.png",
                        "/img/projects/Triangle/g37.png",
                        "/img/projects/Triangle/g38.png",
                        "/img/projects/Triangle/g39.png",
                        "/img/projects/Triangle/g40.png",
                        "/img/projects/Triangle/g41.png",
                        "/img/projects/Triangle/g42.png",
                        "/img/projects/Triangle/g43.png",
                        "/img/projects/Triangle/g44.png",
                        "/img/projects/Triangle/g45.png",
                        "/img/projects/Triangle/g46.png",
                        "/img/projects/Triangle/g47.png",
                        "/img/projects/Triangle/g48.png",
                        "/img/projects/Triangle/g49.png",
                        "/img/projects/Triangle/g50.png",
                        "/img/projects/Triangle/g51.png",
                        "/img/projects/Triangle/g52.png",
                        "/img/projects/Triangle/g53.png",
                        "/img/projects/Triangle/g54.png",
                        "/img/projects/Triangle/g55.png",
                        "/img/projects/Triangle/g56.png",
                        "/img/projects/Triangle/ari_teman_jcorps.png",
                        "/img/projects/Triangle/ari_painting_dave_portnoy_elana_zoppolato.png",
                        "/img/projects/Triangle/ari_teman_obama.png"
                      ]
                }
            ],
        },
    ],
    Healthcare: [
        {
            title: `Sunflower Centers`,
            description: `Sunflower Centers`,
            image: `./img/projects/Sunflower/main.jpg`,
            layout: `full-width`,
            content: [
                {
                    type: `split`,
                    title: null,
                    left: {
                        type: `image`,
                        src: `./img/projects/Sunflower/main.jpg`,
                        layout: `full-width`,
                    },
                    right: {
                        type: `image`,
                        src: `./img/projects/Sunflower/img_2.jpg`,
                        layout: `full-width`,
                    },
                },
                {
                    type: `text`,
                    title: `Healing trauma & advancing research`,
                    value: `Sunflower Centers are purpose-built centers that enable proper “set and setting” for people to benefit from psychedelic therapy and research in a safe and legal framework, surrounded by well-trained, caring providers and staff. <br/><br/> Our first location is located between Jerusalem and Tel Aviv, Israel, and welcomes top research scientists and practitioners from the finest research organizations and clinics.`,
                },
                {
                    type: `image`,
                    src: `./img/projects/mock.jpg`,
                    layout: `full-width`,
                },
                {
                    type: `split`,
                    title: `Purpose-built design & architecture`,
                    left: {
                        type: `text`,
                        value: `Set-and-setting is critical for proper administration of plant medicine, and Sunflower Centers connects each person being treated directly with nature, in a safe, dedicated, sound-proof environment adjacent to trained nursing and medical staff. <br/> Our facilities are accessible, organic, and imbued with plants and natural light.`,
                    },
                    right: {
                        type: `image`,
                        src: `./img/projects/Sunflower/img_3.jpg`,
                        layout: `full-width`,
                    },
                },
                {
                    type: `text`,
                    title: `Support for veterans and survivors`,
                    value: `Sunflower Centers provide free or low-cost treatment to veterans and other survivors of terror and trauma. We never turn down anyone due to financial lack. While we prioritize helping Israeli patients, our centers are open to everyone, and we are working to expand worldwide to help as many people as possible.`,
                },
                {
                    type: `text`,
                    title: `Architectural Design`,
                    value: `The design of Sunflower Centers, led by founder Ari Teman, gives each patient their own isolated, tranquil space overlooking a personal garden, the campus, and Israel's beautiful landscape.`,
                },
                {
                    type: `image`,
                    src: `./img/projects/mock.jpg`,
                    layout: `full-width`,
                },
                {
                    type: `text`,
                    title: `DIGNITY & PRIVACY`,
                    value: `Each room is separated with a gap, so that one patient having a loud experience does not impact others, while nursing stations are immediately behind the rooms in a central hall. <br/> <br/> The treatment rooms, offices, classrooms, and gathering spaces face the outside, over private garden patios, into the landscaped grounds, and further on into nature. The interior hall looks into a large, landscaped courtyard and up to the heavens. There are planters, water features, and inspiring artworks throughout the facility.`,
                },
                {
                    type: `image`,
                    src: `./img/projects/mock.jpg`,
                    layout: `full-width`,
                },
                {
                    type: `split`,
                    title: `COMMUNITY`,
                    left: {
                        type: `image`,
                        src: `./img/projects/Sunflower/img_4.jpg`,
                        layout: `full-width`,
                    },
                    right: {
                        type: `text`,
                        value: `To ensure the campus is a place for community, for education, advocacy, and because mental health and healing benefits from connection, we integrated classrooms, lecture halls, theaters, event and trade show spaces, prayer chapels and study rooms for various faiths, food halls, cafes, walking paths, gardens, atriums, meditation, and resting spaces.`,
                    },
                },

                {
                    type: `text`,
                    title: `ACCESSABILITY`,
                    value: `To maximize accessibility, we had the building follow the Fibonacci Sequence, also known as the Golden Ratio, and like Frank Lloyd Wright’s Guggenheim Museum in New York City, the interior path is an uninterrupted spiral from ground entrance to the top. <br/><br/> The spiral, continuous hall enables those in need of wheelchairs and those who are Sabbath-observant to travel the building without needing to use the elevators (we also include Sabbath-mode elevators), and also enables beds and automated carts to be moved throughout the building without being delayed waiting for an elevator. Most-importantly, it enables the entire space to feel connected and organic, rather than industrial and siloed.`,
                },
                {
                    type: `text`,
                    title: `ETERNITY`,
                    value: `The entrance of the building is a glass ‘waterfall’ which cascades from the top, bringing more natural light into the central spaces, while the vast, light-filled entry foyer fills incoming patients and loved ones with a sense of awe, connection to God, in whatever form that means to each person, and impresses upon them that this is a special place created to help them by people who care, and who see and value their divinity.`,
                },
                {
                    type: `image`,
                    src: `./img/projects/mock.jpg`,
                    layout: `full-width`,
                },
                {
                    type: `text`,
                    title: `TRANQUILITY`,
                    value: `All parking and entrance by vehicles, such as ambulances, is underground, from the outer perimeter of the campus, so no patient is distracted by flashing lights or noise, and so the campus remains pedestrian friendly and quiet. <br/><br/> Overall, the most important aspect of this space is for all those who enter to feel that they are loved, by themselves, by others, and by God. <br/><br/> Following October 7, may God please Bring Them Home Now, bringing effective healing to all is an even more pressing and important mission.`,
                },

                {
                    type: `text`,
                    title: `TRANQUILITY`,
                    value: `Sunflower Center was originally designed in pencil-and-pen/marker by Ari Teman. A sample of original sketches:`,
                },
                {
                    type: `split`,
                    title: null,
                    left: {
                        type: `text-image`,
                        text: `Original sketch by Ari Teman [Credit: Artist]`,
                        src: `./img/projects/Sunflower/photo1.jpg`,
                        position: `bottom`,
                    },
                    right: {
                        type: `text-image`,
                        text: `Original sketch by Ari Teman [Credit: Artist]`,
                        src: `./img/projects/Sunflower/photo2.jpg`,
                        position: `bottom`,
                    },
                },
                {
                    type: `split`,
                    title: null,
                    left: {
                        type: `text-image`,
                        text: `Original sketch by Ari Teman [Credit: Artist]`,
                        src: `./img/projects/Sunflower/photo3.jpg`,
                        position: `bottom`,
                    },
                    right: {
                        type: `text-image`,
                        text: `Original sketch by Ari Teman [Credit: Artist]`,
                        src: `./img/projects/Sunflower/photo4.jpg`,
                        position: `bottom`,
                    },
                },
                {
                    type: `split`,
                    title: null,
                    left: {
                        type: `text-image`,
                        text: `Original sketch by Ari Teman [Credit: Artist]`,
                        src: `./img/projects/Sunflower/photo5.jpg`,
                        position: `bottom`,
                    },
                    right: {
                        type: `text-image`,
                        text: `Ari volunteering at Surfside collapse with IDF [Credit: IDF]`,
                        src: `./img/projects/Sunflower/photo6.jpg`,
                        position: `bottom`,
                    },
                },
                {
                    type: `split`,
                    title: null,
                    left: {
                        type: `text-image`,
                        text: `Ari awarded Jewish Hero of the Year by Jewish Federations of North America [Credit: JTA]`,
                        src: `./img/projects/Sunflower/photo7.jpg`,
                        position: `bottom`,
                    },
                    right: {
                        type: `text-image`,
                        text: `Ari painting Dave Portnoy [Credit: Elena Zoppolato]`,
                        src: `./img/projects/Sunflower/photo8.png`,
                        position: `bottom`,
                    },
                },
                {
                    type: `split`,
                    title: null,
                    left: {
                        type: `text-image`,
                        text: `Ari leading a JCorps volunteering group [Credit: JCorps]`,
                        src: `./img/projects/Sunflower/photo10.png`,
                        position: `bottom`,
                    },
                    right: {
                        type: `text-image`,
                        text: `Ari painting Dave Portnoy [Credit: Elena Zoppolato]`,
                        src: `./img/projects/Sunflower/photo11.png`,
                        position: `bottom`,
                    },
                },
                {
                    type: `split`,
                    title: null,
                    left: {
                        type: `text-image`,
                        text: `Ari leading a JCorps volunteering group [Credit: JCorps]`,
                        src: `./img/projects/Sunflower/photo12.png`,
                        position: `bottom`,
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
            title: `Modern House`,
            description: `Beautiful modern home.`,
            image: `./img/projects/jhon.jpg`,
            layout: `full-width`,
            content: [
                {
                    type: `text`,
                    title: `Project Overview`,
                    value: `This is a beautiful modern home with cutting-edge architecture.`,
                },
                {
                    type: `image`,
                    title: `Main Facade`,
                    src: `./img/projects/jhon.jpg`,
                    layout: `full-width`,
                },
            ],
        },
        {
            title: `Modern House`,
            description: `Beautiful modern home.`,
            image: `./img/projects/office-2.jpg`,
            layout: `full-width`,
            content: [
                {
                    type: `text`,
                    title: `Project Overview`,
                    value: `This is a beautiful modern home with cutting-edge architecture.`,
                },
                {
                    type: `image`,
                    title: `Main Facade`,
                    src: `./img/projects/jhon.jpg`,
                    layout: `full-width`,
                },
            ],
        },
    ],
    Transportation: [
        {
            title: `Modern House`,
            description: `Beautiful modern home.`,
            image: `./img/projects/sktech.jpg`,
            layout: `full-width`,
            content: [
                {
                    type: `text`,
                    title: `Project Overview`,
                    value: `This is a beautiful modern home with cutting-edge architecture.`,
                },
                {
                    type: `image`,
                    title: `Main Facade`,
                    src: `./img/projects/jhon.jpg`,
                    layout: `full-width`,
                },
            ],
        },
    ],
    Skyscraper: [
        {
            title: `Modern House`,
            description: `Beautiful modern home.`,
            image: `./img/projects/office.png`,
            layout: `full-width`,
            content: [
                {
                    type: `text`,
                    title: `Project Overview`,
                    value: `This is a beautiful modern home with cutting-edge architecture.`,
                },
                {
                    type: `image`,
                    title: `Main Facade`,
                    src: `./img/projects/jhon.jpg`,
                    layout: `full-width`,
                },
            ],
        },
    ],
    Community: [
        {
            title: `Modern House`,
            description: `Beautiful modern home.`,
            image: `./img/projects/jhon.jpg`,
            layout: `full-width`,
            content: [
                {
                    type: `text`,
                    title: `Project Overview`,
                    value: `This is a beautiful modern home with cutting-edge architecture.`,
                },
                {
                    type: `image`,
                    title: `Main Facade`,
                    src: `./img/projects/jhon.jpg`,
                    layout: `full-width`,
                },
            ],
        },
    ],
};
