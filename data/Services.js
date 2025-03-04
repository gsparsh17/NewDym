const updatedServices = [
  // Engineering Services
  {
    id: 1,
    title: "Industrial Design & Development",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Innovative and efficient industrial design solutions."
  },
  {
    id: 2,
    title: "Product Design & Development",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Complete product development from concept to market."
  },
  {
    id: 3,
    title: "Medical Equipment Design & Development",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Cutting-edge design for medical and healthcare devices."
  },
  {
    id: 4,
    title: "Furniture Design & Production",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Custom and ergonomic furniture design."
  },
  {
    id: 5,
    title: "Transportation Design & Development",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Smart and sustainable transportation design."
  },
  {
    id: 6,
    title: "Wearable Design & Development",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Innovative wearables with advanced technology integration."
  },
  {
    id: 7,
    title: "Custom Part Design & Development",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Precision-engineered custom components."
  },
  {
    id: 8,
    title: "Agriculture Equipment Design & Development",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Modern solutions for efficient farming technology."
  },
  {
    id: 9,
    title: "Automation Gadgets Design & Development",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Next-gen automation solutions for various industries."
  },
  {
    id: 10,
    title: "Smart Home Appliances Design",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Custom smart home appliances with IoT integration."
  },
  {
    id: 11,
    title: "Fully - Automatic Machine Design",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Advanced automation machine design for various industries."
  },
  {
    id: 12,
    title: "User Specific Custom Product Design",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Personalized product design tailored to user needs."
  },
  {
    id: 13,
    title: "Design Strategies",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Innovative strategies to optimize engineering designs."
  },
  {
    id: 14,
    title: "Design Requirement Review",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Comprehensive review of engineering requirements."
  },
  {
    id: 15,
    title: "Risk Assessment",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Identify and mitigate engineering project risks."
  },
  {
    id: 16,
    title: "Brand Strategy & Marketing",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Effective branding and marketing strategies for products."
  },
  {
    id: 17,
    title: "Product Market Fit Research",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Analysis to ensure product-market alignment."
  },
  {
    id: 18,
    title: "NPI & Product",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "New product introduction and commercialization."
  },
  {
    id: 19,
    title: "Rapid Prototyping",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Fast and cost-effective prototype development."
  },
  {
    id: 20,
    title: "Embedded Software Design",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Software development for embedded systems."
  },
  {
    id: 21,
    title: "Sensor Integration",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Smart sensor integration into various applications."
  },
  {
    id: 22,
    title: "Smart Device Integration",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "IoT-based smart device integration solutions."
  },
  {
    id: 23,
    title: "Innovation Strategy",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Driving innovation through strategic planning."
  },
  {
    id: 24,
    title: "Design Strategy",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Optimized strategies for efficient design workflows."
  },
  {
    id: 25,
    title: "Product Research",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Market and user research for product development."
  },
  {
    id: 26,
    title: "Product Evaluation & Testing",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Quality assurance through rigorous testing."
  },
  {
    id: 27,
    title: "CAD CAM & CAE",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Computer-aided design, manufacturing, and engineering."
  },
  {
    id: 28,
    title: "Product Simulation & Analysis",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Virtual testing and analysis of product performance."
  },
  {
    id: 29,
    title: "Part Supplier Sourcing",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Finding reliable suppliers for components."
  },
  {
    id: 30,
    title: "Supply Strategy Plan",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Strategic planning for supply chain management."
  },
  {
    id: 31,
    title: "Qualify Suppliers",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Supplier vetting and qualification process."
  },
  {
    id: 32,
    title: "Part Supplier Selection",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Choosing the best suppliers for manufacturing."
  },
  {
    id: 33,
    title: "Transfer to Manufacturing",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Smooth transition from design to production."
  },
  {
    id: 34,
    title: "Document Review",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Detailed analysis of engineering documents."
  },
  {
    id: 35,
    title: "Technical Drawing Preparation",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Precise technical drawings for manufacturing."
  },
  {
    id: 36,
    title: "BOM & Part Costing",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "Bill of materials and cost estimation."
  },
  {
    id: 37,
    title: "Free Product Rendering Services",
    category: "Engineering",
    imageUrl: require("../app/assets/images/engineering.png"),
    description: "High-quality 3D rendering for products."
  },

  // Design Services
  {
    id: 38,
    title: "Responsive Web Design & Development",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Modern, lightweight, and responsive web design solutions."
  },
  {
    id: 39,
    title: "Front-end & Back-end Design",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Optimized front-end and back-end design for seamless performance."
  },
  {
    id: 40,
    title: "Brand Identity Design",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Creating a unique and strong brand presence."
  },
  {
    id: 41,
    title: "iOS App Design",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Intuitive and visually appealing iOS app interfaces."
  },
  {
    id: 42,
    title: "Android App Design",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Engaging and user-friendly Android UI/UX design."
  },
  {
    id: 43,
    title: "User Interface Design",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Crafting visually appealing and user-centric interfaces."
  },
  {
    id: 44,
    title: "User Experience Design",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Optimizing user journeys for the best experience."
  },
  {
    id: 45,
    title: "2D & 3D Modeling",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Creating detailed 2D & 3D models for various applications."
  },
  {
    id: 46,
    title: "Character Animation",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Bringing characters to life with smooth animations."
  },
  {
    id: 47,
    title: "2D & 3D Animation",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "High-quality 2D & 3D animation services."
  },
  {
    id: 48,
    title: "3D Scene Design & Production",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Designing immersive 3D scenes and environments."
  },
  {
    id: 49,
    title: "Digital Ads Design",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Creating eye-catching digital ads for brands."
  },
  {
    id: 50,
    title: "Social Media Ads Campaign Design",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Designing engaging social media ad campaigns."
  },
  {
    id: 51,
    title: "Logo Design",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Crafting memorable logos for businesses and brands."
  },
  {
    id: 52,
    title: "Packaging Design",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Attractive and functional product packaging design."
  },
  {
    id: 53,
    title: "Mock-ups Design",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Professional mock-ups for showcasing products."
  },
  {
    id: 54,
    title: "CGI & VFX",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Advanced CGI and visual effects for media production."
  },
  {
    id: 55,
    title: "Custom Fonts Design",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Creating unique and stylish custom fonts."
  },
  {
    id: 56,
    title: "Apparel Design",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Trendy and stylish apparel design services."
  },
  {
    id: 57,
    title: "Graphics Design",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "High-quality graphic design services."
  },
  {
    id: 58,
    title: "Vector Art Design",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Sharp and scalable vector artwork."
  },
  {
    id: 59,
    title: "Wallpaper Design",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Custom wallpaper designs for digital and print."
  },
  {
    id: 60,
    title: "Textile Design",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Creative textile patterns and designs."
  },
  {
    id: 61,
    title: "Product Ad Film Design",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Designing visually compelling product ad films."
  },
  {
    id: 62,
    title: "Short Animation Film Design",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Creating high-quality animated short films."
  },
  {
    id: 63,
    title: "Promo Video Design",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Professional promo video production."
  },
  {
    id: 64,
    title: "Hi-End Video Editing",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "High-end video editing services."
  },
  {
    id: 65,
    title: "After Effects Projects",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Custom After Effects projects and animations."
  },
  {
    id: 66,
    title: "E-commerce Platform Development",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Building modern e-commerce platforms."
  },
  {
    id: 67,
    title: "Print On Demand - Merchandise",
    category: "Design",
    imageUrl: require("../app/assets/images/design.png"),
    description: "Designing custom print-on-demand products."
  },

  // Architecture Services
  {
    id: 68,
    title: "Building Information Modeling (BIM)",
    category: "Architecture",
    imageUrl: require("../app/assets/images/architecture.png"),
    description: "Comprehensive 3D modeling and data-rich designs for buildings."
  },
  {
    id: 69,
    title: "House Planning",
    category: "Architecture",
    imageUrl: require("../app/assets/images/architecture.png"),
    description: "Efficient and functional house layout planning."
  },
  {
    id: 70,
    title: "House Architecture Design",
    category: "Architecture",
    imageUrl: require("../app/assets/images/architecture.png"),
    description: "Innovative and aesthetic house architecture designs."
  },
  {
    id: 71,
    title: "Workspace Interior Design",
    category: "Architecture",
    imageUrl: require("../app/assets/images/architecture.png"),
    description: "Optimized workspace interior designs for productivity."
  },
  {
    id: 72,
    title: "Building Interior Design",
    category: "Architecture",
    imageUrl: require("../app/assets/images/architecture.png"),
    description: "Stylish and functional building interiors."
  },
  {
    id: 73,
    title: "Landscape Design",
    category: "Architecture",
    imageUrl: require("../app/assets/images/architecture.png"),
    description: "Creative landscape design for outdoor spaces."
  },
  {
    id: 74,
    title: "House 3D Rendering",
    category: "Architecture",
    imageUrl: require("../app/assets/images/architecture.png"),
    description: "High-quality 3D rendering for house designs."
  },
  {
    id: 75,
    title: "Building 3D Rendering",
    category: "Architecture",
    imageUrl: require("../app/assets/images/architecture.png"),
    description: "Photorealistic 3D rendering for buildings."
  },
  {
    id: 76,
    title: "Architectural Rendering",
    category: "Architecture",
    imageUrl: require("../app/assets/images/architecture.png"),
    description: "Professional architectural visualization and rendering."
  },
  {
    id: 77,
    title: "Ready to Move House Construction",
    category: "Architecture",
    imageUrl: require("../app/assets/images/architecture.png"),
    description: "Pre-designed, ready-to-move-in house construction services."
  },
  {
    id: 78,
    title: "Ready to Move Smart Homes by Newdym",
    category: "Architecture",
    imageUrl: require("../app/assets/images/architecture.png"),
    description: "Smart homes designed and built by Newdym."
  },
  {
    id: 79,
    title: "Home Automation Design",
    category: "Architecture",
    imageUrl: require("../app/assets/images/architecture.png"),
    description: "Integration of smart technology in home automation."
  },
  {
    id: 80,
    title: "Automated Home Security Design",
    category: "Architecture",
    imageUrl: require("../app/assets/images/architecture.png"),
    description: "Advanced automated security systems for homes."
  },
  {
    id: 81,
    title: "Custom Home Appliances Design",
    category: "Architecture",
    imageUrl: require("../app/assets/images/architecture.png"),
    description: "Design and development of custom home appliances."
  },
  {
    id: 82,
    title: "Custom Home Furniture Design",
    category: "Architecture",
    imageUrl: require("../app/assets/images/architecture.png"),
    description: "Tailored furniture design for unique home aesthetics."
  }
];

export default updatedServices;