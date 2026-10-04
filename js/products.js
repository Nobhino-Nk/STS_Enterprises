/*
  SAZARO / STS ENTERPRISES
  Product Data

  Edit your products here.
  Each product can have 1 to 4 images.

  Image example:
  assets/products/acrylic/product-01-1.jpg
*/

const PRODUCTS = [
  // =========================================================
  // LED ACRYLIC PRODUCTS
  // =========================================================

  {
    id: "product-01",
    name: "LED Acrylic Product 01",
    category: "acrylic",
    categoryLabel: "LED Acrylic",
    price: "",
    shortDescription: "Premium acrylic design with LED illumination.",
    description:
      "A clean and modern acrylic product designed for decorative and gifting purposes. Product details, dimensions and pricing can be added here later.",
    features: [
      "Acrylic construction",
      "LED illumination",
      "Modern decorative design",
      "Carefully packed for delivery"
    ],
    customisable: false,
    images: [
      "assets/products/acrylic/product-01-1.jpg",
      "assets/products/acrylic/product-01-2.jpg"
    ]
  },

  {
    id: "product-02",
    name: "LED Acrylic Product 02",
    category: "acrylic",
    categoryLabel: "LED Acrylic",
    price: "",
    shortDescription: "Modern illuminated acrylic design.",
    description:
      "A stylish LED acrylic product suitable for home decoration, gifting and personal spaces.",
    features: [
      "Acrylic construction",
      "LED illumination",
      "Suitable for gifting",
      "Modern finish"
    ],
    customisable: false,
    images: [
      "assets/products/acrylic/product-02-1.jpg",
      "assets/products/acrylic/product-02-2.jpg"
    ]
  },

  {
    id: "product-03",
    name: "LED Acrylic Product 03",
    category: "acrylic",
    categoryLabel: "LED Acrylic",
    price: "",
    shortDescription: "Decorative LED acrylic piece.",
    description:
      "A versatile acrylic product created for decorative use and gifting.",
    features: [
      "Acrylic design",
      "LED lighting",
      "Decorative use",
      "Gift-friendly"
    ],
    customisable: false,
    images: [
      "assets/products/acrylic/product-03-1.jpg"
    ]
  },

  {
    id: "product-04",
    name: "LED Acrylic Product 04",
    category: "acrylic",
    categoryLabel: "LED Acrylic",
    price: "",
    shortDescription: "Elegant illuminated acrylic product.",
    description:
      "A contemporary acrylic design with illumination for a clean decorative look.",
    features: [
      "Acrylic construction",
      "LED lighting",
      "Contemporary design",
      "Carefully packed"
    ],
    customisable: false,
    images: [
      "assets/products/acrylic/product-04-1.jpg",
      "assets/products/acrylic/product-04-2.jpg"
    ]
  },

  {
    id: "product-05",
    name: "LED Acrylic Product 05",
    category: "acrylic",
    categoryLabel: "LED Acrylic",
    price: "",
    shortDescription: "Minimal LED acrylic decorative piece.",
    description:
      "A minimal and modern acrylic product suitable for decorative spaces and gifting.",
    features: [
      "Minimal design",
      "Acrylic construction",
      "LED illumination",
      "Gift-friendly"
    ],
    customisable: false,
    images: [
      "assets/products/acrylic/product-05-1.jpg"
    ]
  },

  // =========================================================
  // MDF PRODUCTS
  // =========================================================

  {
    id: "product-06",
    name: "MDF Product 01",
    category: "mdf",
    categoryLabel: "MDF",
    price: "",
    shortDescription: "Clean MDF decorative design.",
    description:
      "A carefully finished MDF product designed for decorative use, gifting and personal spaces.",
    features: [
      "MDF construction",
      "Decorative design",
      "Suitable for gifting",
      "Carefully packed"
    ],
    customisable: false,
    images: [
      "assets/products/mdf/product-06-1.jpg",
      "assets/products/mdf/product-06-2.jpg"
    ]
  },

  {
    id: "product-07",
    name: "MDF Product 02",
    category: "mdf",
    categoryLabel: "MDF",
    price: "",
    shortDescription: "Modern MDF decorative piece.",
    description:
      "A simple and versatile MDF product suitable for decoration and gifting.",
    features: [
      "MDF construction",
      "Modern design",
      "Decorative use",
      "Gift-friendly"
    ],
    customisable: false,
    images: [
      "assets/products/mdf/product-07-1.jpg"
    ]
  },

  {
    id: "product-08",
    name: "MDF Product 03",
    category: "mdf",
    categoryLabel: "MDF",
    price: "",
    shortDescription: "MDF design with a clean finish.",
    description:
      "A practical decorative MDF product designed with a clean and modern appearance.",
    features: [
      "MDF construction",
      "Clean finish",
      "Decorative use",
      "Carefully packed"
    ],
    customisable: false,
    images: [
      "assets/products/mdf/product-08-1.jpg",
      "assets/products/mdf/product-08-2.jpg"
    ]
  },

  {
    id: "product-09",
    name: "MDF Product 04",
    category: "mdf",
    categoryLabel: "MDF",
    price: "",
    shortDescription: "Decorative MDF product.",
    description:
      "A versatile MDF piece suitable for home decoration, gifting and personal use.",
    features: [
      "MDF construction",
      "Decorative design",
      "Suitable for gifting",
      "Modern appearance"
    ],
    customisable: false,
    images: [
      "assets/products/mdf/product-09-1.jpg"
    ]
  },

  {
    id: "product-10",
    name: "MDF Product 05",
    category: "mdf",
    categoryLabel: "MDF",
    price: "",
    shortDescription: "Minimal MDF decorative product.",
    description:
      "A minimal MDF design intended for decorative and gifting purposes.",
    features: [
      "MDF construction",
      "Minimal design",
      "Decorative use",
      "Gift-friendly"
    ],
    customisable: false,
    images: [
      "assets/products/mdf/product-10-1.jpg",
      "assets/products/mdf/product-10-2.jpg"
    ]
  },

  // =========================================================
  // CUSTOMISABLE PRODUCTS
  // =========================================================

  {
    id: "product-11",
    name: "Customisable Product 01",
    category: "custom",
    categoryLabel: "Customisable",
    price: "",
    shortDescription: "Personalised product made for your requirements.",
    description:
      "A customisable product that can be adapted according to the customer's requirements. Add the exact customisation options here once finalised.",
    features: [
      "Customisable design",
      "Personalised details",
      "Suitable for gifting",
      "Made according to requirements"
    ],
    customisable: true,
    images: [
      "assets/products/custom/product-11-1.jpg",
      "assets/products/custom/product-11-2.jpg"
    ]
  },

  {
    id: "product-12",
    name: "Customisable Product 02",
    category: "custom",
    categoryLabel: "Customisable",
    price: "",
    shortDescription: "Personalised decorative product.",
    description:
      "A customisable decorative product that can be personalised for individual requirements and occasions.",
    features: [
      "Personalised design",
      "Custom text or details",
      "Suitable for gifting",
      "Made to requirements"
    ],
    customisable: true,
    images: [
      "assets/products/custom/product-12-1.jpg"
    ]
  },

  {
    id: "product-13",
    name: "Customisable Product 03",
    category: "custom",
    categoryLabel: "Customisable",
    price: "",
    shortDescription: "Custom-designed product for special occasions.",
    description:
      "A personalised product designed for customers who want something specific rather than a standard design.",
    features: [
      "Customisable",
      "Personalised details",
      "Occasion-friendly",
      "Gift-friendly"
    ],
    customisable: true,
    images: [
      "assets/products/custom/product-13-1.jpg",
      "assets/products/custom/product-13-2.jpg"
    ]
  },

  {
    id: "product-14",
    name: "Customisable Product 04",
    category: "custom",
    categoryLabel: "Customisable",
    price: "",
    shortDescription: "Personalised custom product.",
    description:
      "A flexible customisable product that can be adapted to match your preferred details and requirements.",
    features: [
      "Custom design",
      "Personalised details",
      "Flexible requirements",
      "Suitable for gifting"
    ],
    customisable: true,
    images: [
      "assets/products/custom/product-14-1.jpg"
    ]
  },

  {
    id: "product-15",
    name: "Customisable Product 05",
    category: "custom",
    categoryLabel: "Customisable",
    price: "",
    shortDescription: "Customisable product with personalised details.",
    description:
      "A personalised product intended for customers looking for a more individual design.",
    features: [
      "Customisable design",
      "Personalised details",
      "Decorative use",
      "Gift-friendly"
    ],
    customisable: true,
    images: [
      "assets/products/custom/product-15-1.jpg",
      "assets/products/custom/product-15-2.jpg"
    ]
  }
];


// =========================================================
// PRODUCT HELPERS
// =========================================================

function getProductById(id) {
  return PRODUCTS.find(function (product) {
    return product.id === id;
  });
}


function getProductsByCategory(category) {
  if (category === "all") {
    return PRODUCTS;
  }

  return PRODUCTS.filter(function (product) {
    return product.category === category;
  });
}


function getFeaturedProducts(limit) {
  var number = limit || 6;

  return PRODUCTS.slice(0, number);
}
