/*
  SAZARO / STS ENTERPRISES
  Main Website JavaScript
*/


// =========================================================
// BASIC HELPERS
// =========================================================

function escapeHTML(value) {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function escapeAttribute(value) {
  return escapeHTML(value);
}


// =========================================================
// CURRENT YEAR
// =========================================================

function initCurrentYear() {
  var yearElements = document.querySelectorAll("[data-current-year]");

  yearElements.forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });
}


// =========================================================
// MOBILE MENU
// =========================================================

function initMobileMenu() {
  var menuButton = document.querySelector("[data-menu-toggle]");
  var menu = document.querySelector("[data-mobile-menu]");

  if (!menuButton || !menu) {
    return;
  }

  menuButton.addEventListener("click", function () {
    var isOpen = menu.classList.toggle("is-open");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );
  });


  var menuLinks = menu.querySelectorAll("a");

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("is-open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );
    });
  });
}


// =========================================================
// PRODUCT CARD
// =========================================================

function createProductCard(product) {
  if (!product) {
    return "";
  }

  var firstImage =
    product.images && product.images.length
      ? product.images[0]
      : "";


  var priceHTML = "";

  if (product.price) {
    priceHTML =
      '<div class="product-card__price">' +
      escapeHTML(product.price) +
      "</div>";
  }


  var imageHTML = "";

  if (firstImage) {
    imageHTML =
      '<img class="product-card__image" src="' +
      escapeAttribute(firstImage) +
      '" alt="' +
      escapeAttribute(product.name) +
      '" loading="lazy" onerror="this.style.display=\'none\'; this.parentElement.classList.add(\'image-placeholder\');">';
  } else {
    imageHTML =
      '<div class="image-placeholder">Product image coming soon</div>';
  }


  return (
    '<article class="product-card">' +

      '<a class="product-card__image-wrap" href="product.html?id=' +
      encodeURIComponent(product.id) +
      '">' +

        imageHTML +

      "</a>" +

      '<div class="product-card__body">' +

        '<div class="product-card__category">' +
        escapeHTML(product.categoryLabel) +
        "</div>" +

        '<h3 class="product-card__title">' +
        escapeHTML(product.name) +
        "</h3>" +

        '<p class="product-card__description">' +
        escapeHTML(product.shortDescription) +
        "</p>" +

        priceHTML +

        '<a class="text-link" href="product.html?id=' +
        encodeURIComponent(product.id) +
        '">' +
        "View product →" +
        "</a>" +

      "</div>" +

    "</article>"
  );
}


// =========================================================
// RENDER PRODUCT LIST
// =========================================================

function renderProducts(container, products) {
  if (!container) {
    return;
  }

  if (!products || products.length === 0) {
    container.innerHTML =
      '<div class="empty-state">' +
      "<p>No products are available here yet.</p>" +
      "</div>";

    return;
  }


  container.innerHTML = products
    .map(function (product) {
      return createProductCard(product);
    })
    .join("");
}


// =========================================================
// HOMEPAGE FEATURED PRODUCTS
// =========================================================

function initFeaturedProducts() {
  var container = document.querySelector("#featured-products");

  if (!container) {
    return;
  }

  var products = getFeaturedProducts(6);

  renderProducts(container, products);
}


// =========================================================
// CATEGORY / PRODUCTS PAGES
// =========================================================

function initCategoryPages() {
  var container = document.querySelector("#category-products");

  if (!container) {
    return;
  }


  var category = container.getAttribute("data-category") || "all";

  var products = getProductsByCategory(category);

  renderProducts(container, products);
}


// =========================================================
// PRODUCT DETAIL PAGE
// =========================================================

function initProductDetail() {
  var container = document.querySelector("#product-detail");

  if (!container) {
    return;
  }


  var params = new URLSearchParams(window.location.search);

  var productId = params.get("id");

  var product = getProductById(productId);


  if (!product) {
    container.innerHTML =
      '<div class="empty-state">' +
        "<h2>Product not found</h2>" +
        "<p>The product you're looking for could not be found.</p>" +
        '<a class="button" href="products.html">Back to products</a>' +
      "</div>";

    return;
  }


  var images =
    product.images && product.images.length
      ? product.images
      : [];


  var mainImage = images.length
    ? images[0]
    : "";


  var imageGalleryHTML = "";


  if (mainImage) {
    imageGalleryHTML =
      '<div class="product-gallery">' +

        '<div class="product-gallery__main">' +

          '<img id="product-main-image" src="' +
          escapeAttribute(mainImage) +
          '" alt="' +
          escapeAttribute(product.name) +
          '" onerror="this.style.display=\'none\'; this.parentElement.classList.add(\'image-placeholder\');">' +

        "</div>" +

        '<div class="product-gallery__thumbs">';


    images.forEach(function (image, index) {
      imageGalleryHTML +=
        '<button class="product-gallery__thumb ' +
        (index === 0 ? "is-active" : "") +
        '" type="button" data-product-image="' +
        escapeAttribute(image) +
        '">' +

          '<img src="' +
          escapeAttribute(image) +
          '" alt="' +
          escapeAttribute(product.name) +
          ' image ' +
          (index + 1) +
          '" loading="lazy" onerror="this.style.display=\'none\';">' +

        "</button>";
    });


    imageGalleryHTML +=
        "</div>" +
      "</div>";

  } else {

    imageGalleryHTML =
      '<div class="product-gallery">' +

        '<div class="product-gallery__main image-placeholder">' +
          "Product image coming soon" +
        "</div>" +

      "</div>";
  }


  var featuresHTML = "";


  if (product.features && product.features.length) {
    featuresHTML =
      '<div class="product-detail__features">' +

        "<h3>Product details</h3>" +

        "<ul>" +

          product.features
            .map(function (feature) {
              return "<li>" + escapeHTML(feature) + "</li>";
            })
            .join("") +

        "</ul>" +

      "</div>";
  }


  var priceHTML = "";

  if (product.price) {
    priceHTML =
      '<div class="product-detail__price">' +
      escapeHTML(product.price) +
      "</div>";
  }


  var customHTML = "";

  if (product.customisable) {
    customHTML =
      '<div class="product-detail__custom">' +
      "This product can be customised according to the available options." +
      "</div>";
  }


  container.innerHTML =
    '<div class="product-detail">' +

      imageGalleryHTML +

      '<div class="product-detail__content">' +

        '<div class="product-card__category">' +
        escapeHTML(product.categoryLabel) +
        "</div>" +

        '<h1>' +
        escapeHTML(product.name) +
        "</h1>" +

        priceHTML +

        '<p class="product-detail__description">' +
        escapeHTML(product.description) +
        "</p>" +

        featuresHTML +

        customHTML +

        '<a class="button" href="contact.html">' +
        "Enquire about this product" +
        "</a>" +

      "</div>" +

    "</div>";


  initProductGallery();
}


// =========================================================
// PRODUCT GALLERY
// =========================================================

function initProductGallery() {
  var mainImage = document.querySelector("#product-main-image");

  var thumbnails = document.querySelectorAll(
    "[data-product-image]"
  );


  if (!mainImage || !thumbnails.length) {
    return;
  }


  thumbnails.forEach(function (thumbnail) {

    thumbnail.addEventListener("click", function () {

      var image = thumbnail.getAttribute(
        "data-product-image"
      );


      if (!image) {
        return;
      }


      mainImage.src = image;


      thumbnails.forEach(function (item) {
        item.classList.remove("is-active");
      });


      thumbnail.classList.add("is-active");
    });

  });
}


// =========================================================
// RELATED PRODUCTS
// =========================================================

function initRelatedProducts() {
  var container = document.querySelector("#related-products");

  if (!container) {
    return;
  }


  var params = new URLSearchParams(
    window.location.search
  );

  var productId = params.get("id");

  var currentProduct = getProductById(productId);


  if (!currentProduct) {
    return;
  }


  var relatedProducts = getProductsByCategory(
    currentProduct.category
  )
    .filter(function (product) {
      return product.id !== currentProduct.id;
    })
    .slice(0, 3);


  renderProducts(
    container,
    relatedProducts
  );
}


// =========================================================
// IMAGE FALLBACK
// =========================================================

function initImageFallbacks() {
  var images = document.querySelectorAll(
    "img"
  );


  images.forEach(function (image) {

    image.addEventListener(
      "error",
      function () {

        image.style.display = "none";


        var parent =
          image.parentElement;


        if (parent) {
          parent.classList.add(
            "image-placeholder"
          );
        }

      }
    );

  });
}


// =========================================================
// INITIALISE WEBSITE
// =========================================================

document.addEventListener(
  "DOMContentLoaded",
  function () {

    initCurrentYear();

    initMobileMenu();

    initFeaturedProducts();

    initCategoryPages();

    initProductDetail();

    initRelatedProducts();

    initImageFallbacks();

  }
);
