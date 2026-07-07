import { Project, Service, ProcessStep, BlogPost } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "sansarg",
    title: "Sansarg",
    category: "Residential",
    location: "Patiala, Punjab",
    year: "2022",
    size: "6,500 sq. ft.",
    scope: "Architecture, Interiors & Landscaping",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    description: "Featured on Buildofy, Sansarg is a celebration of interconnected spaces, deep courtyards, and honest material usage. Designed as a sanctuary for a multi-generational family, the residence plays with double-height volumes and the gentle movement of natural light throughout the day.",
    narrative: {
      site: "The site is located in a quiet residential pocket of Patiala, experiencing hot summers and cold winters. Privacy from neighboring plots was a primary constraint, which led to an introverted, courtyard-centric design.",
      planning: "Planned as a split-level home, Sansarg is organized around a central double-height courtyard. This courtyard acts as the lungs of the house, drawing in cool air and dispersing soft daylight into the deep living spaces. Ground floor spaces merge seamlessly with the outdoor lawns, while private bedrooms are placed on the upper floor with direct access to terrace gardens.",
      materials: "The material palette is limited and tactile: exposed board-marked concrete, natural local sandstone, teak wood, and black slate. There are no applied finishes like paint on the structural surfaces, allowing the organic textures to breathe and age beautifully.",
      lightVentilation: "Passive solar principles guide the openings. Deep cantilevers protect the south-facing glazing from the harsh summer sun, while high ventilators at the top of the courtyard create a stack effect, continuously flushing out hot air to maintain a comfortable indoor temperature naturally.",
      execution: "Special care was given to the concrete casting. The shuttering patterns were carefully coordinated with local artisans, resulting in a textured, rhythmic surface that changes character as the sun shifts."
    },
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "villa-58",
    title: "Villa 58",
    category: "Residential",
    location: "Sector 58, Mohali",
    year: "2023",
    size: "5,200 sq. ft.",
    scope: "Architecture & Interior Design",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    description: "A contemporary urban home defined by clean linear lines, dramatic concrete cantilevers, and a design that prioritizes cross-ventilation and spatial fluidity.",
    narrative: {
      site: "Situated on a standard urban plot in Mohali, the layout maximizes the available footprint while respecting strict local building bylaws and maintaining green margins.",
      planning: "The layout breaks away from the conventional closed room-by-room format. Instead, the kitchen, dining, and living rooms form an open visual pavilion on the ground floor, separated only by light wooden louvers. This open-concept design promotes family interaction and visual openness.",
      materials: "Polished Kota stone floors, sand-faced cement plaster, and warm white oak establish a calm, grounding interior palette. Accent walls feature a subtle, textured grey plaster that complements the exterior exposed concrete details.",
      lightVentilation: "Large sliding glass doors on both northern and southern walls create a direct line for cross-ventilation. This layout takes advantage of Chandigarh’s prevailing wind directions to reduce dependence on mechanical air conditioning during transition seasons.",
      execution: "Every junction between the glass frames and concrete slabs was detailed to be entirely flush. Recessed profile lighting and integrated storage solutions were designed in-house to maintain a clean, uncluttered architectural horizon."
    },
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-fc1b2d812ca5?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "villa-201d",
    title: "Villa 201D",
    category: "Interiors",
    location: "Chandigarh",
    year: "2022",
    size: "4,800 sq. ft.",
    scope: "Luxury Interior Styling & Spatial Planning",
    heroImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    description: "A warm minimalist interior styling project that brings together rich Italian marble, custom bespoke brass detailing, and custom furniture tailored to the family's daily routines.",
    narrative: {
      site: "An existing premium residence in Chandigarh required a complete internal transformation to reflect the occupant’s minimalist lifestyle and hosting habits.",
      planning: "We reorganized the internal partitions to expand the main living lounge. A custom bar area and a double-height dining room were created as focal social spaces, while bedrooms were treated as intimate, quiet sanctuaries.",
      materials: "Bianco Lasa marble, wire-brushed teak paneling, and brushed brass fixtures form a refined, high-end sensory experience. Handcrafted fabrics in warm beige and charcoal tones add soft layers of comfort.",
      lightVentilation: "Lighting was planned with a circadian-first approach. Diffused warm white light sources are concealed in plaster coves, while highlight spots are reserved for custom art pieces, ensuring a cozy atmosphere in the evening.",
      execution: "Bespoke furniture was constructed off-site under strict quality control, then assembled at the site to ensure seamless grain alignments and razor-sharp brass joinery."
    },
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "the-kangs",
    title: "The Kangs",
    category: "Farm Houses",
    location: "Punjab Border",
    year: "2023",
    size: "8,000 sq. ft.",
    scope: "Architecture, Interiors & Landscape Design",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    description: "A sprawling luxury farmhouse designed as a series of connected low-slung pavilions that frame views of the surrounding organic farms and lush landscapes.",
    narrative: {
      site: "The site is a multi-acre organic agricultural estate near the Punjab-Haryana border, offering endless panoramic views and absolute quietude.",
      planning: "Taking inspiration from traditional Punjabi 'havelis' but simplified with modern forms, the rooms are laid out around three distinct green courtyards—one formal, one family-centric, and one service-oriented. This flat, pavilion layout ensures every room has dual-aspect views of nature.",
      materials: "Locally baked wire-cut bricks left exposed, local hand-chiselled stone, rustic slate roof shingles, and reclaimed aged timber beams.",
      lightVentilation: "Thick brick cavity walls provide outstanding thermal mass, keeping the interiors cool during scorching Punjab summers. Deep, sweeping verandahs shade the glass walls, creating comfortable outdoor transition spaces.",
      execution: "We worked closely with local kiln operators to procure brick batches with specific organic color variations. The landscape planning uses native, low-water plants to blend the estate seamlessly into the wider agricultural canvas."
    },
    images: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "villa-361",
    title: "Villa 361",
    category: "Residential",
    location: "New Chandigarh",
    year: "2024",
    size: "7,200 sq. ft.",
    scope: "Architecture, Interiors & Site Supervision",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    description: "A luxury multi-level villa featuring a dramatic floating cantilever stair, double-height glazing, and integrated high-end home automation designed for modern comfort.",
    narrative: {
      site: "Located in a newly developed premium sector of New Chandigarh, the site commands distant views of the Shivalik hills on clear days.",
      planning: "To capture the hillside views, the primary living spaces and a major viewing terrace were placed on the first floor. The ground floor accommodates the family lounge, guest suites, and a central water court that aids in passive cooling.",
      materials: "Imported travertine cladding, dark oak panels, double-glazed slimline aluminum profiles, and micro-concrete flooring accents.",
      lightVentilation: "Equipped with automated louvers that shift position based on the sun's angle, the home manages internal heat gains while maintaining high daylight penetration in key living zones.",
      execution: "The key challenge was the cantilevered metal and wood staircase which hangs seamlessly without central support. Detailed engineering drawings and on-site testing were performed to ensure structural rigidity and perfect safety."
    },
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "col-supreet",
    title: "Col. Supreet Residence",
    category: "Residential",
    location: "Mohali, Punjab",
    year: "2023",
    size: "4,500 sq. ft.",
    scope: "Architecture & Direct Site Execution",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    description: "Designed for a retired army officer, this home blends classic order and military-grade discipline with modern materials, high thermal insulation, and accessible layout planning.",
    narrative: {
      site: "A north-facing corner plot in Mohali. The corner location allowed for twin facades, both treated with equal weight and sculptural attention.",
      planning: "The layout is clean, symmetrical, and extremely logical. Ground-level spaces are entirely step-free to ensure future accessibility, while a wide central staircase leads to a well-lit library and study on the upper floor.",
      materials: "Traditional red brickwork paired with a clean white steel frame structure, high-performance double glass, and durable Indian granite flooring.",
      lightVentilation: "Symmetrical light wells on both sides of the central corridor ensure that even the core of the house receives deep natural light. Wind scoop systems assist in venting hot air through high ceiling windows.",
      execution: "Constructed using highly engineered insulated brick cavities. Regular on-site supervision by our team ensured that the thermal barriers remained unbroken, leading to a 30% reduction in heating and cooling energy usage."
    },
    images: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "oakwood-school",
    title: "The Oakwood School",
    category: "Schools",
    location: "Punjab",
    year: "2020",
    size: "24,000 sq. ft.",
    scope: "Architecture & Campus Masterplanning",
    heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80",
    description: "An institutional environment that redefines classroom layouts by surrounding them with interactive courtyard corridors, passive light scoops, and robust, maintenance-free finishes.",
    narrative: {
      site: "A flat 2-acre campus in rural Punjab. The masterplan was oriented to shield the main playing grounds from strong dust-carrying winds.",
      planning: "The school is designed around a single, massive central courtyard that acts as an amphitheater and assembly ground. Classrooms open on one side to this courtyard and on the other to pocket gardens, ensuring continuous air flow and dual-aspect daylighting.",
      materials: "Locally crafted exposed brick walling, rough Kota stone floors that are highly slip-resistant, and structural steel colonnades left unclad.",
      lightVentilation: "Classrooms feature north-facing light monitors that eliminate direct sun glare on boards while flooding the desks with soft, shadow-free overhead light. This minimizes the need for artificial lighting during school hours.",
      execution: "Built under strict cost-efficiency guidelines. We used modular construction grids to minimize steel and brick wastage, ensuring high-quality architectural results within a modest public trust budget."
    },
    images: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "pine-view-housing",
    title: "Pine View Housing",
    category: "Housing",
    location: "New Chandigarh",
    year: "2021",
    size: "1,20,000 sq. ft.",
    scope: "Architecture, Facade Design & Masterplanning",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    description: "A premium group housing project composed of elegant multi-family units designed to offer high visual privacy, individual terrace decks, and active shared central greens.",
    narrative: {
      site: "A linear site with two open boundaries, allowing us to align the blocks along a north-south axis for optimum thermal performance.",
      planning: "By placing all vehicle movement and parking underground, the entire central ground plane was reclaimed as a quiet pedestrian park. Apartments are staggered diagonally to prevent views from neighboring windows while maintaining garden views.",
      materials: "Durable textured stucco finish, steel-framed balconies, native stone pathways, and low-E high-comfort performance glazing.",
      lightVentilation: "Each apartment has at least three open sides, ensuring outstanding cross-ventilation. Wind corridors between the blocks are structured to naturally accelerate cool evening breezes through the master park.",
      execution: "Special coordination was required to design the extensive subterranean post-tensioned concrete slab supporting the heavy soils and trees of the central park above."
    },
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: "residential-architecture",
    title: "Residential Architecture",
    tagline: "Luxury homes, modern family villas, and plotted residences designed around people.",
    description: "We create tailor-made luxury homes that balance artistic modern expression with extreme practical functionality. Our residential work is focused on creating long-term structural value, high comfort, and a design that suits the unique habits of Indian families.",
    details: [
      "Bespoke layout planning and structural design",
      "3D elevation design & massing studies",
      "Double-height and courtyard integration",
      "Climate-responsive design strategies",
      "Comprehensive structural and plumbing drawing packages",
      "Renovation and adaptive reuse planning"
    ],
    clientType: "Individuals, multi-generational families, and estate developers looking to construct landmark custom residences.",
    projects: ["Sansarg", "Villa 58", "Villa 361", "Col. Supreet Residence"]
  },
  {
    id: "interior-design",
    title: "Luxury Interior Design",
    tagline: "Intimate material detailing, custom furniture, and bespoke lighting visions.",
    description: "Our interior design services bring harmony to your indoor spaces. We believe that interiors are a direct continuation of the architectural volume. We detail everything from custom wardrobes, automated lighting panels, bespoke material choices, and custom-manufactured furniture.",
    details: [
      "Bespoke furniture design and sourcing coordination",
      "Premium material curation (marbles, timber, metals, textured plasters)",
      "Detailed washroom, kitchen, and wardrobe layouts",
      "Architectural lighting and automation design",
      "Acoustic and thermal lining integration",
      "Complete 3D visual render sets"
    ],
    clientType: "Homeowners looking to design warm, sophisticated, clean-lined, and deeply comfortable luxury living environments.",
    projects: ["Villa 201D", "Sansarg", "Villa 361"]
  },
  {
    id: "design-to-build",
    title: "Design-to-Build & Site Coordination",
    tagline: "Bridging the critical gap between early drawings and actual site execution.",
    description: "A beautiful drawing has no value unless it is executed with precision. We offer complete design-to-build coordination. We supervise construction directly, coordinate with specialized contractors, choose materials on-site, and ensure that deadlines, structural safety, and fine detailing are maintained.",
    details: [
      "Direct site supervision & quality control visits",
      "Contractor vetting and selection coordination",
      "On-site material checking (checking marble lots, timber seasoning)",
      "Detailed millwork drawings and execution supervision",
      "As-built drawing updates and coordination",
      "Budget and material quantity verifications"
    ],
    clientType: "Clients who want a stress-free construction journey with unified responsibility from design to final handover.",
    projects: ["Sansarg", "Villa 361", "The Kangs"]
  },
  {
    id: "housing",
    title: "Premium Housing Developments",
    tagline: "Modern apartment blocks, plotted communities, and multi-family designs.",
    description: "We design high-density residential developments that don't compromise on personal privacy, natural daylighting, or community greenery. We plan layouts that maximize efficiency and visual appeal while creating healthy pedestrian environments.",
    details: [
      "Masterplanning and plotted community layout design",
      "Multi-family block architecture & structural grid layout",
      "Diagonal block orientation for high visual privacy",
      "Underground parking and service corridor design",
      "Façade modernization for large-scale properties",
      "Clubhouse and community garden planning"
    ],
    clientType: "Real estate developers, corporate trusts, and private landowners seeking highly salable, premium, and durable developments.",
    projects: ["Pine View Housing"]
  },
  {
    id: "commercial-hospitality",
    title: "Commercial & Hospitality Design",
    tagline: "Offices, modern retail flagships, public spaces, and boutique resorts.",
    description: "Our commercial and retail environments focus on building a strong sensory brand identity, maximizing layout utility, and creating memorable consumer journeys. We blend modern structural forms with long-term commercial durability.",
    details: [
      "Corporate office layout planning and workstation design",
      "Retail store architecture & product display detailing",
      "Boutique hotel / resort masterplanning and cabin design",
      "HVAC, fire safety, and electrical systems coordination",
      "High-traffic material selections and durable finishes",
      "Acoustic lining and sound control integration"
    ],
    clientType: "Business owners, hospitality brands, and corporate institutions looking to build high-performance offices or retail spaces.",
    projects: ["The Oakwood School", "Villa 201D"]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Detailed Briefing",
    description: "We sit down to talk. We discuss your site, your daily routines, your family's future, storage needs, budget expectations, and aesthetic references. We establish a clear program of requirements."
  },
  {
    step: 2,
    title: "Comprehensive Site Study",
    description: "We analyze the physical plot: sun paths, seasonal wind directions, neighboring views, surrounding trees, soil conditions, and municipal bylaws. This data forms the environmental bedrock of our design."
  },
  {
    step: 3,
    title: "Concept Presentation",
    description: "We develop the initial design directions. We present sketch layouts, volumetric massing models, and spatial flow diagrams that show how the building will sit and breathe on your plot."
  },
  {
    step: 4,
    title: "Detailed Planning & Elevation",
    description: "Once the concept is approved, we freeze the layout. We generate refined 3D elevations, physical scale studies, and realistic visual renders to explore material combinations and facade depth."
  },
  {
    step: 5,
    title: "Interior Design & Material Curation",
    description: "We design the interior volumes simultaneously. We plan washrooms, kitchens, electrical locations, custom woodwork, and choose the actual marble, timber, and plasters to form a unified vision."
  },
  {
    step: 6,
    title: "Working Drawings & Coordination",
    description: "We prepare the exhaustive construction blueprint package. This includes precise structural, electrical, plumbing, detailing, and joinery drawings to ensure contractors have zero room for guesswork."
  },
  {
    step: 7,
    title: "Direct Site Supervision",
    description: "We visit the site regularly during critical milestones (shuttering, concrete pouring, wall layout, masonry, plumbing, plastering, marble selection). We inspect workmanship and correct any errors on the spot."
  },
  {
    step: 8,
    title: "Handover & Snagging",
    description: "We conduct a meticulous final audit of all installations, paint finishes, plumbing pressure, and custom joinery. We resolve any minor snags before handing you the keys to your custom-crafted space."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "planning-indian-homes",
    title: "Designing for the Indian Family: Why Standard Western Floorplans Often Fail",
    category: "Home Planning",
    date: "June 18, 2026",
    summary: "Indian homes have specific cultural requirements—from ritual-first puja rooms, heavy spice-oriented wet kitchens, and high numbers of family guests. Here's how we plan for real life.",
    author: "Ar. Rajkumar Devra",
    readTime: "6 min read",
    content: "When designing homes in Chandigarh, Punjab, and broader India, we often see clients requesting open-concept plans seen in Western design magazines. While visually stunning, a purely open plan often collides with the daily realities of Indian cooking, joint-family dynamics, and hosting habits.\n\n### 1. The Necessity of the Double Kitchen\nIndian cooking is robust, involving spices, frying, and intense heat. An open kitchen directly facing a formal living room often leads to oil residues settling on expensive upholstery and food aromas dispersing across the house. We solve this by planning a 'Dual Kitchen' system: a clean, aesthetic outer kitchen for light prep, brewing tea, and family breakfasts, paired with a fully ventilated, closed 'Wet Kitchen' or pantry where heavy cooking and cleaning occur.\n\n### 2. Privacy vs. Family Interconnection\nJoint families or families with visiting parents require a fine balance between communal gathering and personal privacy. We design homes with 'split zoning.' Public spaces like formal drawing rooms are kept near the main entrance to shelter the inner family circle. The family lounge, dining space, and central courtyard are grouped at the core, while bedrooms are treated as distinct, private pods.\n\n### 3. Adapting to Festivals & Social Gatherings\nOur homes must adapt dynamically. A quiet house of four must comfortably expand to host forty guests during festivals, dinners, or rituals. This requires flexible spaces—sliding partition doors, wide verandahs that open to double the living room's footprint, and modular courtyard layouts that serve as active social gathering zones."
  },
  {
    id: "passive-cooling-punjab",
    title: "Passive Cooling in Punjab: Sustainable Luxury Without Excessive AC Costs",
    category: "Home Planning",
    date: "May 10, 2026",
    summary: "How carefully calculated sun angles, brick cavity walls, double-height central courtyards, and deep cantilevers keep homes cool during blazing 45°C Chandigarh summers.",
    author: "Ar. Rajkumar Devra",
    readTime: "8 min read",
    content: "With global temperatures rising, relying entirely on heavy air conditioning is neither environmentally responsible nor financially smart. True luxury lies in designing homes that remain naturally cool and well-insulated, utilizing passive climate-responsive strategies.\n\n### 1. The Double Wall (Thermal Mass)\nHeat enters a building primarily through its walls and roof. By building double-layered brick masonry with a 2-inch hollow air cavity in between, we create a powerful thermal barrier. The outer brick layer absorbs the direct solar heat, while the air cavity prevents the heat from transferring to the inner wall, keeping the indoor surfaces cool even when the outdoor temperature hits 45°C.\n\n### 2. Double-Height Courtyards as Vent Scoops\nNatural air circulation is driven by physics. Hot air rises. By planning a double-height space or central courtyard with high, operable louvers (ventilators) near the roof, we create a continuous chimney effect. Warm air naturally exits through the top, pulling cooler air in from shaded ground-level garden margins and water bodies, creating a gentle, organic air draft.\n\n### 3. The Power of Deep Cantilevers\nWe design deep concrete projections and shaded balcony decks specifically on the south and west facades. During the summer, when the sun is high in the sky, these cantilevers completely shade the glass windows. In the winter, when the sun is lower, the sunlight penetrates deep into the rooms, providing natural, comforting warmth."
  },
  {
    id: "material-durability-guide",
    title: "Natural Materials: Choosing Sandstones, Marbles, and Woods That Age Gracefully",
    category: "Materials",
    date: "April 02, 2026",
    summary: "A practical guide to choosing local materials that suit Chandigarh’s extreme weather, require low maintenance, and look better with each passing decade.",
    author: "Ar. Rajkumar Devra",
    readTime: "5 min read",
    content: "In our projects, we avoid artificial finishes, plastic composite claddings, and excessive paint. We prefer materials that are genuine, natural, and express their real weight and texture. Here is how we evaluate materials for residential architecture:\n\n### 1. Stone: Kota and Sandstone vs. Polished Marble\nWhile polished Italian marble is exceptional for interior living rooms, it can be highly slippery and prone to weathering if used on exterior porches or courtyard decks. For transition spaces, we prefer Kota stone (available in blue and green hues) with a leathered or river-washed finish. It is highly durable, non-slip, feels cool under bare feet, and develops a rich natural patina over time. For facades, we use regional Dholpur or Agra sandstones, which resist monsoon stains and sun bleaching.\n\n### 2. Shuttering Concrete as a Finish\nExposed concrete is often misunderstood as cold or industrial. However, when cast against planned wooden timber planks (board-marked concrete), the concrete permanently registers the organic grain and knots of the wood. The result is a highly tactile, stone-like wall that requires zero paint, zero scrubbing, and acts as a beautiful, neutral background for indoor art and plants.\n\n### 3. Seasoned Teak vs. Veneers\nFor doors and window frames exposed to weather, we always prioritize seasoned CP Teak or Burma Teak. It has a high natural oil content that prevents warping, swelling, and termite damage during the humid monsoons, far outlasting manufactured MDF or thin veneers."
  },
  {
    id: "lighting-architecture-interiors",
    title: "Circadian Lighting: How to Detail Interior Light to Create an Editorial Mood",
    category: "Lighting",
    date: "March 15, 2026",
    summary: "Lighting is an invisible material. Why high-contrast downlights ruin cozy evenings, and how we plan soft, hidden light sources for luxury residential interiors.",
    author: "Ar. Rajkumar Devra",
    readTime: "5 min read",
    content: "When people enter a luxury space that feels calm and relaxing, they often credit the furniture or the marble. In reality, the quiet hero is almost always the lighting. Poorly planned lighting—like placing a grid of powerful white LED downlights directly overhead—creates harsh shadows, eye fatigue, and ruins the natural texture of materials.\n\n### 1. Indirect Lighting First\nWe believe in concealing light sources. By placing high-quality warm LED strips inside plaster coves or behind wall wood panels, the light bounces off the ceilings and walls before reaching your eyes. This diffused, indirect light mimics the soft, ambient glow of dusk, immediately signaling the nervous system to relax.\n\n### 2. Layering: Ambient, Task, and Accent\nAn editorial room has depth. We achieve this by layering lights at different heights. Low floor lamps and table lamps establish a cozy ambient level. Recessed task lighting is focused precisely where needed, such as over kitchen counters or reading chairs. Accent lighting—like micro-spots with specialized honeycombed grids—is used to highlight artwork or stone textures without spilling light onto the surrounding walls.\n\n### 3. The 2700K Warmth Standard\nIn residential design, we strictly use light sources between 2700K and 3000K (warm white). Warm light brings out the natural red, orange, and yellow undertones of wood, copper, and stone, making a house feel secure, intimate, and deeply welcoming in the evening."
  }
];
