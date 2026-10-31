/**
 * Basil Café & Restaurant - Centralized Business Data
 * Source of Truth: Verified from Basil_site_kit (Google, Zomato, magicpin & printed dine-in menu)
 */

const BUSINESS_DATA = {
  identity: {
    name: "Basil Café & Restaurant",
    shortName: "Basil Café",
    tagline: "Experience dining that feels like home at Basil Cafe",
    subTagline: "Good food, quiet corners, and conversations that linger",
    editorialStatement: "An artisanal haven celebrating botanical infusions, slow-fermented bakehouse creations, and unhurried dining in the heritage quarter.",
    voiceQuotes: [
      "Experience dining that feels like home at Basil Cafe",
      "Good food, quiet corners, and conversations that linger",
      "Come for your caffeine fix, stay for the atmosphere",
      "Every craving has a seat at the table"
    ],
    yearEstablished: "Est. 2021",
    edition: "Seasonal Edition • No. 04",
    disclaimer: "Concept design & presentation preview. Authentic photography & verified menu provisions."
  },

  contact: {
    address: {
      shop: "Shop No. 1 & 2, Ground Floor",
      street: "48 New Road",
      landmark: "Opp. MKP College Entrance, near MKP Chowk",
      area: "Race Course",
      district: "Artisan & College Quarter",
      city: "Dehradun",
      state: "Uttarakhand",
      postalCode: "248001",
      full: "Shop No. 1 & 2, Ground Floor, 48 New Road, Opp. MKP College Entrance, Race Course, Dehradun, Uttarakhand 248001",
      short: "48 New Road, Opp. MKP College, Dehradun",
      coordinates: "30.3187° N, 78.0441° E",
      plusCode: "829V+FJ Dehradun"
    },
    phone: {
      display: "+91 73007 76850",
      tel: "+917300776850",
      secondaryDisplay: "[Optional Alt: 9673322159]"
    },
    whatsapp: {
      display: "+91 73007 76850",
      number: "917300776850",
      link: "https://wa.me/917300776850",
      messagePrompt: "Hello Basil Café concierge, I would like to enquire about table availability / catering."
    },
    email: {
      general: "basilcafeddn@gmail.com",
      events: "basilcafeddn@gmail.com"
    },
    googleMapsUrl: "https://www.google.com/maps?cid=2483721361039784768",
    transitNotes: {
      landmark: "Opposite MKP College entrance, H&M Towers landmark",
      parking: "Dedicated on-site parking area available for café patrons",
      accessibility: "Wheelchair-accessible entrance, seating and facilities"
    }
  },

  hours: {
    display: {
      weekdays: "10:00 AM – 10:30 PM",
      saturdays: "10:00 AM – 10:30 PM",
      sundays: "10:00 AM – 10:30 PM",
      wednesdays: "10:30 AM – 10:30 PM",
      holidays: "10:00 AM – 10:30 PM"
    },
    serviceSummary: "Service Daily: 10:00 AM – 10:30 PM",
    kitchenSchedule: "All-Day Dining • Kitchen active until 10:00 PM",
    bakerySchedule: "Morning bakehouse fresh out of ovens by 10:00 AM daily"
  },

  social: {
    instagram: {
      handle: "@basil_cafe_ddn",
      url: "https://instagram.com/basil_cafe_ddn"
    },
    facebook: {
      handle: "basilcafeddn",
      url: "https://facebook.com/basilcafeddn"
    },
    pinterest: "[PLACEHOLDER]",
    substack: "[PLACEHOLDER]"
  },

  ratings: {
    google: { rating: "4.7", reviewCount: "697+" },
    zomato: { rating: "4.4", reviewCount: "1,535+" },
    swiggy: { rating: "4.7", reviewCount: "684+" },
    costForTwo: "₹1,000 – ₹1,200",
    cuisines: ["North Indian", "South Indian", "Continental", "Italian", "Chinese", "Specialty Coffee", "Desserts"]
  },

  reviews: [
    {
      guestName: "Jitu",
      source: "Google Reviews",
      rating: 5,
      role: "Verified Local Patron",
      quote: "Beautiful ambience, cleanliness and hygiene is top notch… well crafted menu and food tastes good. They serve normal water as soon as you take a seat, which is rare these days."
    },
    {
      guestName: "Aanchel",
      source: "Google Reviews",
      rating: 5,
      role: "Celebration Host",
      quote: "It was my son's first birthday party, and we had a wonderful experience. The food, service and overall arrangements were excellent."
    },
    {
      guestName: "Akkee",
      source: "Google Reviews",
      rating: 4,
      role: "Local Guide",
      quote: "The ambience is pleasant, with ample seating space and a dedicated parking area. The staff was polite, and the service was quick. Budget-friendly and warm."
    },
    {
      guestName: "Rajnandani",
      source: "Zomato Dining",
      rating: 5,
      role: "Food Enthusiast",
      quote: "Great food, beautiful ambience, and well-behaved courteous staff. One of the coziest sanctuaries in town."
    }
  ],

  artisanTeam: {
    creedTitle: "The Basil Culinary Creed",
    leadStatement: "Rooted in warmth, elevated by artisanal craft.",
    founders: "[Founding Team & Culinary Curators]",
    hearthLead: "[Master of Hearth & Grain]",
    roasterLead: "[Barista & Sourcing Lead]"
  },

  reservation: {
    isLive: false,
    noticeTitle: "Demonstration Preview Notice",
    statusMessage: "Thank you for your enquiry! Online table bookings are currently in demonstration preview mode. Automated backend reservations are not yet connected. For live table reservations and same-day seating today, please connect with our host directly via WhatsApp at +91 73007 76850 or call us at +91 73007 76850."
  },

  // 26 Authentic Dine-In Menu Categories from printed card
  menuCategories: [
  {
    "category": "All Day Breakfast",
    "items": [
      {
        "name": "Boiled Egg",
        "price_inr": "125",
        "description": "With bread toast, hash brown & filter coffee"
      },
      {
        "name": "Choice of Omelette (Masala / Cheese)",
        "price_inr": "145",
        "description": "With bread toast, hash brown & filter coffee"
      },
      {
        "name": "Scrambled Egg",
        "price_inr": "165"
      },
      {
        "name": "Chicken Omelette",
        "price_inr": "165"
      },
      {
        "name": "American Breakfast",
        "price_inr": "230",
        "description": "Choice of eggs, hash brown, chicken sausage, chicken salami, baked beans, bread toast, tea/filter coffee, butter/jam/honey"
      },
      {
        "name": "English Breakfast",
        "price_inr": "230",
        "description": "Choice of eggs, chicken sausage & salami, hash brown, grilled tomato, saut\u00e9ed mushroom, bread toast, tea/filter coffee"
      },
      {
        "name": "Indian Breakfast",
        "price_inr": "110",
        "description": "Pav bhaji / chole bhature / puri bhaji / chole puri"
      },
      {
        "name": "Choice of Paratha (Aloo / Onion / Mix / Paneer)",
        "price_inr": "60 / 75"
      },
      {
        "name": "Egg Bhurji with Pav",
        "price_inr": "125"
      }
    ]
  },
  {
    "category": "Soup",
    "items": [
      {
        "name": "Hot & Sour / Lung Fung / Thai Tom Yum Soup (Veg / Chicken)",
        "price_inr": "205 / 240"
      },
      {
        "name": "Manchow / Sweet Corn Soup (Veg / Chicken)",
        "price_inr": "205 / 240",
        "description": "Card says 'choice of vegetarian'"
      },
      {
        "name": "Cream of Tomato Soup",
        "price_inr": "205"
      },
      {
        "name": "Cream of Mushroom Soup (Veg / Chicken)",
        "price_inr": "215 / 255"
      }
    ]
  },
  {
    "category": "Salad",
    "items": [
      {
        "name": "Garden Green Salad",
        "price_inr": "165"
      },
      {
        "name": "Caesar's Salad (Veg / Non-Veg)",
        "price_inr": "205 / 295",
        "description": "Iceberg lettuce, sour cream dressing, parmesan, croutons"
      },
      {
        "name": "Greek Salad (Veg / Non-Veg)",
        "price_inr": "175 / 235",
        "description": "Iceberg lettuce, peppers, cucumber, onion & tomato in house dressing, topped with feta & oregano"
      },
      {
        "name": "All Basil Salad",
        "price_inr": "360",
        "description": "Quinoa, cucumber, red bell pepper, chickpeas, parsley, apple, garlic, olive & lemon dressing"
      }
    ]
  },
  {
    "category": "Sandwich",
    "items": [
      {
        "name": "Grilled Sandwich (Veg / Non-Veg)",
        "price_inr": "190 / 205"
      },
      {
        "name": "Club Sandwich (Veg / Non-Veg)",
        "price_inr": "205 / 295",
        "description": "Coleslaw, cucumber, lettuce, paneer/cheese slice/chicken, fried egg"
      }
    ]
  },
  {
    "category": "All Time Favourites",
    "items": [
      {
        "name": "French Fries (Salted / Peri-peri / Cheese)",
        "price_inr": "190 / 215 / 230"
      },
      {
        "name": "Loaded Nachos",
        "price_inr": "230"
      },
      {
        "name": "Potato Wedges",
        "price_inr": "195"
      },
      {
        "name": "Mushroom Duplex",
        "price_inr": "295"
      },
      {
        "name": "Roasted / Fried / Masala Papad",
        "price_inr": "75 / 75 / 110"
      },
      {
        "name": "Masala Peanut",
        "price_inr": "195"
      },
      {
        "name": "Onion Rings",
        "price_inr": "165"
      },
      {
        "name": "Palak Patta Chaat",
        "price_inr": "165"
      },
      {
        "name": "Nuggets (Veg / Chicken)",
        "price_inr": "205 / 240"
      },
      {
        "name": "BBQ Chicken Wings",
        "price_inr": "325"
      },
      {
        "name": "Quesadilla (Veg / Non-Veg)",
        "price_inr": "240 / 295",
        "description": "Tender vegetable bite served with salsa & sour cream"
      },
      {
        "name": "Paneer Tortilla Wrap",
        "price_inr": "255",
        "description": "Grilled paneer, hummus & aioli, with side salad"
      },
      {
        "name": "Chicken Tortilla Wrap",
        "price_inr": "295",
        "description": "Grilled chicken, hummus & aioli, with side salad"
      },
      {
        "name": "Fish & Chips",
        "price_inr": "630",
        "description": "Fried fish with French fries & tartar sauce"
      },
      {
        "name": "Fish Fingers",
        "price_inr": "515",
        "description": "Mustard-flavoured, crumb fried"
      },
      {
        "name": "Hummus with Pita Bread",
        "price_inr": "125"
      },
      {
        "name": "Garlic Bread",
        "price_inr": "140"
      },
      {
        "name": "Cheese Garlic Bread",
        "price_inr": "195"
      }
    ]
  },
  {
    "category": "Dimsums",
    "items": [
      {
        "name": "Steamed Dimsums (Veg / Cheese & Corn / Chicken)",
        "price_inr": "195 / 230 / 295"
      },
      {
        "name": "Kothe \u2013 pan-seared dimsums (Veg / Cheese / Chicken)",
        "price_inr": "215 / 240 / 305"
      }
    ]
  },
  {
    "category": "Paninis & Burgers",
    "items": [
      {
        "name": "Basil Special Veg Burger",
        "price_inr": "190"
      },
      {
        "name": "Paneer Burger",
        "price_inr": "230"
      },
      {
        "name": "Spicy Grilled Chicken Burger",
        "price_inr": "255"
      },
      {
        "name": "Paneer Tikka & Cheese Panini",
        "price_inr": "255"
      },
      {
        "name": "Chicken Tikka & Cheese Panini",
        "price_inr": "295"
      }
    ]
  },
  {
    "category": "Thin Crust Pizza",
    "items": [
      {
        "name": "Pizza Margherita",
        "price_inr": "230",
        "description": "Mozzarella and basil"
      },
      {
        "name": "Paneer Tikka Pizza",
        "price_inr": "320",
        "description": "Paneer tikka & mozzarella"
      },
      {
        "name": "Farm Fresh Pizza",
        "price_inr": "345",
        "description": "Mushroom, capsicum, onion, paprika, jalape\u00f1o, fresh tomatoes"
      },
      {
        "name": "Chilly Paneer Pizza",
        "price_inr": "345",
        "description": "Chilly paneer cubes with vegetables & mozzarella"
      },
      {
        "name": "Butter Chicken Pizza",
        "price_inr": "425",
        "description": "Butter chicken & mozzarella"
      },
      {
        "name": "Chilly Chicken Pizza",
        "price_inr": "425",
        "description": "Chilly chicken cubes with vegetable & mozzarella"
      },
      {
        "name": "Pepperoni Pizza",
        "price_inr": "455",
        "description": "Pepperoni and mozzarella"
      },
      {
        "name": "Special Basil Pizza",
        "price_inr": "520",
        "description": "Mozzarella, chicken sausage, chicken salami, grilled chicken with marinara sauce"
      }
    ]
  },
  {
    "category": "Pasta Italiano",
    "items": [
      {
        "name": "Pasta \u2013 Aglio Olio / Creamy Wild Mushrooms / Arrabbiata (Veg / Chicken)",
        "price_inr": "270 / 360",
        "description": "Choose penne, spaghetti or fusilli. Aglio olio: extra virgin olive oil, garlic, chilli flakes, parsley. Creamy wild mushroom: assorted mushrooms in white sauce. Arrabbiata: spicy tomato sauce. (Card lists the 270/360 price beside Arrabbiata; likely applies to all three sauces \u2014 confirm)"
      }
    ]
  },
  {
    "category": "Continental",
    "items": [
      {
        "name": "Cottage Cheese Steak",
        "price_inr": "515",
        "description": "Cottage cheese steak with mash potatoes, herb rice & grilled vegetables, served with marinara sauce"
      },
      {
        "name": "Grilled Chicken Steak",
        "price_inr": "645",
        "description": "Grilled chicken steak with mash potatoes, herb rice & grilled vegetables, served with mushroom sauce"
      },
      {
        "name": "Grilled Fish",
        "price_inr": "775",
        "description": "Grilled fish served with grilled vegetables & lemon butter sauce"
      }
    ]
  },
  {
    "category": "Oriental Veg",
    "items": [
      {
        "name": "Chilly Paneer (Dry / Gravy)",
        "price_inr": "360 / 385"
      },
      {
        "name": "Basil Veg Spring Roll",
        "price_inr": "230"
      },
      {
        "name": "Honey Chilly Potato",
        "price_inr": "215"
      },
      {
        "name": "Veg Manchurian (Dry / Gravy)",
        "price_inr": "230 / 255"
      },
      {
        "name": "Mushroom 65",
        "price_inr": "335"
      },
      {
        "name": "Crispy Corn Salt & Pepper / Crispy Veg Salt & Pepper",
        "price_inr": "190 / 215"
      }
    ]
  },
  {
    "category": "Oriental Non-Veg",
    "items": [
      {
        "name": "Chilly Chicken (Dry / Gravy)",
        "price_inr": "450 / 475"
      },
      {
        "name": "Chilly Fish (Dry / Gravy)",
        "price_inr": "465 / 490"
      },
      {
        "name": "Chicken Lollypop",
        "price_inr": "425"
      },
      {
        "name": "Kung Pao Chicken",
        "price_inr": "475"
      },
      {
        "name": "Chicken 65",
        "price_inr": "475"
      },
      {
        "name": "Exotic Vegetables",
        "price_inr": "370",
        "description": "Choice of sauce: Schezwan / Hot Garlic / Basil Special"
      },
      {
        "name": "Thai Curry Green (Veg / Non-Veg)",
        "price_inr": "385 / 450",
        "description": "Served with steamed rice"
      },
      {
        "name": "Thai Curry Red (Veg / Non-Veg)",
        "price_inr": "385 / 450",
        "description": "Served with steamed rice"
      }
    ]
  },
  {
    "category": "Rice & Noodles",
    "items": [
      {
        "name": "Veg Noodles / Chicken Noodles",
        "price_inr": "215 / 255",
        "description": "Hakka / Schezwan / Chilli Garlic"
      },
      {
        "name": "Veg Fried Rice / Chicken Fried Rice",
        "price_inr": "205 / 230",
        "description": "Chilli Garlic / Schezwan"
      }
    ]
  },
  {
    "category": "House of Platter",
    "items": [
      {
        "name": "Assorted Veg Platter",
        "price_inr": "725",
        "description": "Paneer tikka, dahi kebab, veg seekh, soya chaap, with mint chutney & masala onion"
      },
      {
        "name": "Assorted Non-Veg Platter",
        "price_inr": "910",
        "description": "Mutton seekh, chicken malai tikka, chicken tikka, fish tikka, with mint chutney & masala onion"
      }
    ]
  },
  {
    "category": "Tandoori Starters \u2013 Veg",
    "items": [
      {
        "name": "Veg Seekh Kebab",
        "price_inr": "295"
      },
      {
        "name": "Hari Mirch Paneer Tikka",
        "price_inr": "385"
      },
      {
        "name": "Tandoori Paneer Tikka",
        "price_inr": "370"
      },
      {
        "name": "Dahi Ke Kebab",
        "price_inr": "360"
      },
      {
        "name": "Soya Malai Chaap",
        "price_inr": "305"
      },
      {
        "name": "Tandoori Soya Chaap",
        "price_inr": "280"
      },
      {
        "name": "Multani Mushroom Tikka",
        "price_inr": "325"
      }
    ]
  },
  {
    "category": "Tandoori Starters \u2013 Non-Veg",
    "items": [
      {
        "name": "Tandoori Chicken (Half / Full)",
        "price_inr": "385 / 630"
      },
      {
        "name": "Kasundi Fish Tikka",
        "price_inr": "685"
      },
      {
        "name": "Chicken Tikka",
        "price_inr": "500"
      },
      {
        "name": "Chicken Malai Tikka",
        "price_inr": "515"
      },
      {
        "name": "Chicken Lahsuni Tikka",
        "price_inr": "515"
      },
      {
        "name": "Chicken Seekh Kebab",
        "price_inr": "555"
      },
      {
        "name": "Mutton Seekh Kebab",
        "price_inr": "630"
      }
    ]
  },
  {
    "category": "Main Course \u2013 Veg",
    "items": [
      {
        "name": "Dal Makhani",
        "price_inr": "370"
      },
      {
        "name": "Dal Tadka",
        "price_inr": "255"
      },
      {
        "name": "Mix Vegetable",
        "price_inr": "275"
      },
      {
        "name": "Pindi Chana",
        "price_inr": "290"
      },
      {
        "name": "Mushroom Chettinad",
        "price_inr": "360"
      },
      {
        "name": "Palak Corn",
        "price_inr": "320"
      },
      {
        "name": "Palak Paneer",
        "price_inr": "425"
      },
      {
        "name": "Paneer Lababdar",
        "price_inr": "450"
      },
      {
        "name": "Kadhai Paneer",
        "price_inr": "450"
      },
      {
        "name": "Paneer Butter Masala",
        "price_inr": "450"
      },
      {
        "name": "Malai Kofta",
        "price_inr": "450"
      }
    ]
  },
  {
    "category": "Main Course \u2013 Non-Veg",
    "items": [
      {
        "name": "Kadhai Chicken",
        "price_inr": "555"
      },
      {
        "name": "Chicken Tikka Masala",
        "price_inr": "555"
      },
      {
        "name": "Chicken Curry",
        "price_inr": "555"
      },
      {
        "name": "Butter Chicken",
        "price_inr": "565"
      },
      {
        "name": "Chicken Chettinad",
        "price_inr": "565"
      },
      {
        "name": "Mutton Rogan Josh",
        "price_inr": "685"
      },
      {
        "name": "Bhuna Gosht",
        "price_inr": "710"
      },
      {
        "name": "Mutton Rara",
        "price_inr": "750"
      },
      {
        "name": "Fish Curry",
        "price_inr": "630"
      }
    ]
  },
  {
    "category": "Biryani & Rice",
    "items": [
      {
        "name": "Steamed Rice",
        "price_inr": "165"
      },
      {
        "name": "Jeera Rice",
        "price_inr": "190"
      },
      {
        "name": "Veg Pulao",
        "price_inr": "230"
      },
      {
        "name": "Veg Dum Biryani",
        "price_inr": "295"
      },
      {
        "name": "Chicken Dum Biryani",
        "price_inr": "515"
      },
      {
        "name": "Mutton Dum Biryani",
        "price_inr": "580"
      }
    ]
  },
  {
    "category": "Indian Breads",
    "items": [
      {
        "name": "Tandoori Roti",
        "price_inr": "40"
      },
      {
        "name": "Butter Roti",
        "price_inr": "55"
      },
      {
        "name": "Tawa Roti",
        "price_inr": "40"
      },
      {
        "name": "Butter Tawa Roti",
        "price_inr": "55"
      },
      {
        "name": "Rumali Roti",
        "price_inr": "60"
      },
      {
        "name": "Laccha Paratha",
        "price_inr": "60"
      },
      {
        "name": "Hari Mirch / Laal Mirch / Ajwain Paratha",
        "price_inr": "65"
      },
      {
        "name": "Pudina Paratha",
        "price_inr": "75"
      },
      {
        "name": "Plain Naan",
        "price_inr": "75"
      },
      {
        "name": "Butter Naan",
        "price_inr": "80"
      },
      {
        "name": "Garlic Naan",
        "price_inr": "85"
      },
      {
        "name": "Kulcha (Aloo / Onion / Mix)",
        "price_inr": "85"
      },
      {
        "name": "Paneer Kulcha",
        "price_inr": "100"
      },
      {
        "name": "Mutton Keema Kulcha",
        "price_inr": "230"
      }
    ]
  },
  {
    "category": "Extras",
    "items": [
      {
        "name": "Curd",
        "price_inr": "100"
      },
      {
        "name": "Mix Raita",
        "price_inr": "110"
      },
      {
        "name": "Boondi Raita",
        "price_inr": "110"
      },
      {
        "name": "Pineapple Raita",
        "price_inr": "140"
      }
    ]
  },
  {
    "category": "Indian Thali",
    "items": [
      {
        "name": "Budget Thali",
        "price_inr": "145",
        "description": "Dal tadka, mix veg, rice, tandoori roti, pickle"
      },
      {
        "name": "Premium Thali",
        "price_inr": "190",
        "description": "Dal tadka, mix veg, rice, butter roti, salad, papad, pickle, sweet"
      },
      {
        "name": "Deluxe Thali",
        "price_inr": "260",
        "description": "Paneer butter masala, dal makhani, mix veg, jeera rice, laccha paratha, roti, salad, papad, raita, sweet"
      }
    ]
  },
  {
    "category": "South Indian",
    "items": [
      {
        "name": "Idli Sambhar (2 pcs)",
        "price_inr": "115"
      },
      {
        "name": "Vada Sambhar (2 pcs)",
        "price_inr": "130"
      },
      {
        "name": "Idli Vada Sambhar (1 idli, 1 vada)",
        "price_inr": "130"
      },
      {
        "name": "Upma",
        "price_inr": "155"
      },
      {
        "name": "Upma Vada",
        "price_inr": "180"
      },
      {
        "name": "Masala Idli (2 pcs)",
        "price_inr": "195"
      }
    ]
  },
  {
    "category": "Dosa",
    "items": [
      {
        "name": "Plain Dosa",
        "price_inr": "155"
      },
      {
        "name": "Masala Dosa",
        "price_inr": "170"
      },
      {
        "name": "Onion Plain Dosa",
        "price_inr": "180"
      },
      {
        "name": "Onion Masala Dosa",
        "price_inr": "219"
      },
      {
        "name": "Mysore Plain Dosa",
        "price_inr": "185"
      },
      {
        "name": "Butter Plain Dosa",
        "price_inr": "180"
      },
      {
        "name": "Butter Masala Dosa",
        "price_inr": "205"
      },
      {
        "name": "Butter Paper Plain",
        "price_inr": "205"
      },
      {
        "name": "Butter Paper Masala",
        "price_inr": "235"
      },
      {
        "name": "Butter Onion Masala Dosa",
        "price_inr": "245"
      },
      {
        "name": "Butter Mysore Plain Dosa",
        "price_inr": "220"
      },
      {
        "name": "Butter Mysore Masala Dosa",
        "price_inr": "245"
      },
      {
        "name": "Madrasi Dosa",
        "price_inr": "289"
      },
      {
        "name": "Mix Veg Uttapam",
        "price_inr": "275"
      },
      {
        "name": "Onion Uttapam",
        "price_inr": "245"
      },
      {
        "name": "Onion Tomato Uttapam",
        "price_inr": "260"
      }
    ]
  },
  {
    "category": "Desserts",
    "items": [
      {
        "name": "Gulab Jamun",
        "price_inr": "150"
      },
      {
        "name": "Kesari Phirni",
        "price_inr": "165"
      },
      {
        "name": "Vanilla / Butterscotch Ice Cream",
        "price_inr": "125"
      },
      {
        "name": "Homemade Ice Cream / Zesty Orange Gulkand",
        "price_inr": "195"
      }
    ]
  },
  {
    "category": "Beverages",
    "items": [
      {
        "name": "Choice of Tea (Black / Elachi / Masala)",
        "price_inr": "65"
      },
      {
        "name": "Cappuccino",
        "price_inr": "165"
      },
      {
        "name": "Espresso",
        "price_inr": "140"
      },
      {
        "name": "Cafe Latte",
        "price_inr": "165"
      },
      {
        "name": "Hot Chocolate",
        "price_inr": "125"
      },
      {
        "name": "Green Tea / Lemon Tea",
        "price_inr": "100"
      },
      {
        "name": "Choice of Milkshake",
        "price_inr": "190"
      },
      {
        "name": "Canned Juice (glass)",
        "price_inr": "80"
      },
      {
        "name": "Lassi",
        "price_inr": "140"
      },
      {
        "name": "Fresh Lime Soda",
        "price_inr": "95"
      },
      {
        "name": "Mineral Water",
        "price_inr": "20"
      },
      {
        "name": "Coke / Sprite (glass)",
        "price_inr": "45"
      },
      {
        "name": "Diet Beverage (glass)",
        "price_inr": "85"
      },
      {
        "name": "Red Bull",
        "price_inr": "",
        "description": "price not printed on card"
      }
    ]
  }
]
};

// Freeze for integrity
if (typeof Object.freeze === 'function') {
  Object.freeze(BUSINESS_DATA);
}

// Global exposure for vanilla JS scripts
if (typeof window !== 'undefined') {
  window.BUSINESS_DATA = BUSINESS_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BUSINESS_DATA;
}
