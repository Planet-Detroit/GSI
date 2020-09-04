var config = {
    style: 'mapbox://styles/evewashington/ckcy86wq51l8w1it59pna7o6k',
    accessToken: 'pk.eyJ1IjoiZXZld2FzaGluZ3RvbiIsImEiOiJja2N5ODJudmEwMHg5Mnlsb3EyM2ppd2pjIn0.BHla7v37Y_xZ7MQScXjDLg',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    //title: "An Interactive tour of Detroit's Stormwater Insustructure.",
    // subtitle: 'Infrastructure, ranging from roads to bridges to buildings to sewer systems, are the basic equipment essential for functional, healthy, and vibrant communities. A big part of managing infrastructure is providing regular maintenance, repair and occasional replacement. We saw a little insight into the immense importance of one type of infrastructure earlier this summer when 2 dams in midland failed and caused massive floodings, damage to people and properties, and evacuations. Traditional infrastructure has been designed to move urban stormwater away from built structures—things like curbs, gutters, and drains, that rather than capture water, they discard water untreated into local water sources. But that stormwater runoff is one of the leading causes of water pollution in urban places like Detroit. That’s where  "green" stormwater infrastructure (GIS) comes in. It is designed to mimic nature’s ability to capture rainwater where it falls, to reduce runoff and allow for the ability to treat stormwater.  It has also been linked to several benefits including: reducing localized flooding, providing green jobs, and improving the look of neighborhoods',
    // byline: 'Eve Washington',
    // footer: 'Source: Detroit StormWater Hub ',
    chapters: [
        {
            id: 'all',
            title: "Detroit's GSI Projects",
            image: 'https://detroitstormwater.org/themes/custom/compro_theme/logo.png',
            description: "According to the Detroit Stormwater Hub, there are 202 GSI projects in Detroit, categorized under 15 different types. Here are all the GSI sites in Detroit, but let's break this down a little.",
            location: {
                center: [-83.18441, 42.39703],
                zoom: 10.53,
                pitch: 45.00,
                bearing: -0.00
            },
            onChapterEnter: [
                 {
                    layer: 'all',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'all',
                    opacity: 0
                }
            ]
        },
        {
            id: 'dis_imp',
            title: 'Disconnected Impervious',
            description: 'The most common type of GSI in Detroit is “disconnected impervious” These sites manage stormwater by directing runoff from impervious surfaces onto properly sized, sloped, and vegetated surfaces, that stop stormwater from traveling in the future and polluting other services. 88 of the GSI projects in Detroit are of this type. ',
            location: {
                center: [-83.18441, 42.39703],
                zoom: 10.53,
                pitch: 45.00,
                bearing: -0.00
            },
            onChapterEnter: [
                {
                    layer: "disconnected_impervious",
                    opacity: 1
                }
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'dis_imp_max',
            title: 'Belle Isle',
            image: 'https://dwsd.box.com/shared/static/vjna6xosv8w42y7cci6m93lxbf15jb0j.jpg',
            description: 'The largest disconnected impervious site is a drainage credit project built on Belle Isle, which reports managing 16.65 million gallons of water annually. This project which was designed and implemented by Parjana Distribution, a Detroit-based Water Management engineering company in 2014, and for some parts of the island showed an 80 percent reduction in the total amount of runoff. ',
            location: {
                center: [-82.98690, 42.34310],
                zoom: 14.15,
                pitch: 45.00,
                bearing: -0.00
            },
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: "disconnected_impervious",
                    opacity: 0
                }
            ]
        },
        {
            id: 'downspout',
            title: 'Downspout Disconnection',
            image: 'https://dwsd.box.com/shared/static/vbqn7i8cguclnlwfk47h14avfahl8ing.jpg',
            description: 'The next most common type of GSI is “Downspout Disconnection” where rather than having roof downspouts lead to a sewer system they are redirected to something that can absorb the excess water, like a lawn. These handle less water than disconnected impervious sites, the largest one reported managing 120,000 gallons of water annually in Delray, its located at the site of All Saints Soup Kitchen. There are 35 of this type of site across Detroit. ',
            location: {
                center: [-83.18441, 42.39703],
                zoom: 10.53,
                pitch: 45.00,
                bearing: -0.00
            },
            onChapterEnter: [
                {
                    layer: "downspout",
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: "downspout",
                    opacity: 0
                }
            ]
        },
        {
            id: 'wh',
            title: 'Water Harvesting',
            image: 'https://dwsd.box.com/shared/static/kacj15h0kfqgg1wzqbucxxsmnh8k5xk9.jpg',
            description: 'The single largest GSI site is one dedicated to water harvesting, a practice where runoff is captured and reused as greywater for things. It is handled like 204.598 million gallons annually and is located by GM’s Detroit-Hamtramck assembly plant. It was created in 2016 and was slated to save the company nearly $2 million every year. It works by collecting the rain that flows in through storm drains in a pond, from there the water is taken and treated to be used in cooling towers, breaking down paint sludge, and in the future generating electricity for the plant and local businesses.',
            location: {
                center: [-83.05901, 42.38206],
                zoom: 13.33,
                pitch: 45.00,
                bearing: -1.23
            },
            onChapterEnter: [
                {
                    layer: "Water harvesting",
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: "Water harvesting",
                    opacity: 0
                }
            ]
        },
        {
            id: 'wright',
            title: 'Sankofa Permeable Pavers installation',
            image: 'https://detroitstormwater.org/sites/storm.water/files/images/projects/708/wy27kw1kah6la1zxlsnlsxnypj65hckk.jpg',
            description: 'But stormwater does not need to only be functional. The Charles H. Wright Museum Sankofa Permeable Pavers installation project was designed to reflect African American history and values. The project was completed in October 2019. Leslie Tom, the chief sustainability officer at the Wright Museum, calls it “Infrastructure as Message” — the message being recognizing the deep historical, cultural and political connection Black people have towards the water.  “Let’s not design any rain garden, bioswale, detention based system, or any other green stormwater practice.  Let’s find the story, a memory, learning to exemplify our actions and respect for history and place” Tom shared in a presentation on the project. The completed project pictures Sankofa symbol, a west African motif picturing a bird, chosen because the animal can turn its head to “look backward before it moves forward” as a reminder to look back at history while progressing towards the future. ',
            location: {
                center: [-83.06269, 42.35918],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -1.23
            },
            onChapterEnter: [
                {
                    layer: "bioretention",
                    opacity: 1
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'bioretention',
            title: 'Bioretention',
       
            description: "The project was a bioretention project, meaning stormwater gets captured in non-linear, landscaped, shallow depressions and then naturally filtered through the soil. The installation at the Wright museum manages about 20,000 gallons of water annually. There are 22 bioretention sites in detroit.",
            location: {
                center: [-83.18441, 42.39703],
                zoom: 10.53,
                pitch: 45.00,
                bearing: -0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'sacred_heart',
            title: 'Bioretention',
            image:
'https://detroitstormwater.org/sites/storm.water/files/images/projects/780/gqoi2k2sjec4fpiui6ge2v1xvz3d8wgc.png',
            description: 'The largest bioretention site is located at Sacred Heart Church parking lot, and was created as part of a partnership between the church and The Nature Conservatory. The Site Manages 2.03 million gallons of water annually, by reducing runoff into small garden plots rather than the sewers.',
            location: {
                center: [-83.04726, 42.35080],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -1.23
            },
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: "bioretention",
                    opacity: 0
                }
            ]
        },
        {
            id: 'all',
            title: "202 and Counting",
           // image: './path/to/image/source.png',
            description: "While this was not a comprehensive tour of all 202 of Detroit GSI sites in Detroit, it's a starting point for understanding the growing type of infrastructure in the city. These are the first of many more projects -- In 2014 the Detroit Water and Sewer Department pledged to invest 50 million dollars by 2029  in building GSI around the city.  ",
            location: {
                center: [-83.18441, 42.39703],
                zoom: 10.53,
                pitch: 45.00,
                bearing: -0.00
            },
            onChapterEnter: [
                 {
                    layer: 'all',
                    opacity: 1
                }
            ],
            onChapterExit: [

            ]
        },
 
    ]
};
