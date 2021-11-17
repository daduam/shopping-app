let products = [
  {
    id: 1,
    name: "Malm",
    desc: "High bed frame/2 storage boxes, gray stained/Luröy",
    price: {
      sym: "$",
      real: "274",
      dec: ".00",
    },
    imgSrc:
      "https://www.ikea.com/us/en/images/products/malm-high-bed-frame-2-storage-boxes-gray-stained-luroey__0775069_pe756809_s5.jpg?f=xl",
  },
  {
    id: 2,
    name: "Vedbo",
    desc: "Armchair, Gunnared dark gray",
    price: {
      sym: "$",
      real: "249",
      dec: ".00",
    },
    imgSrc:
      "https://www.ikea.com/us/en/images/products/vedbo-armchair-gunnared-dark-gray__0512767_pe638683_s5.jpg?f=xl",
  },
  {
    id: 3,
    name: "Nolmyra",
    desc: "Chair, black/black",
    price: {
      sym: "$",
      real: "39",
      dec: ".99",
    },
    imgSrc:
      "https://www.ikea.com/us/en/images/products/nolmyra-chair-black-black__0169629_pe323574_s5.jpg?f=xl",
  },
  {
    id: 4,
    name: "Klippan",
    desc: "Loveseat, Bomstad black",
    price: {
      sym: "$",
      real: "379",
      dec: ".00",
    },
    imgSrc:
      "https://www.ikea.com/us/en/images/products/klippan-loveseat-bomstad-black__0562963_pe663653_s5.jpg?f=xl",
  },
  {
    id: 5,
    name: "LAGKAPTEN / ALEX",
    desc: 'Desk, black-brown55 1/8x23 5/8"',
    price: {
      sym: "$",
      real: "187",
      dec: ".99",
    },
    imgSrc:
      "https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-black-brown__1022394_pe832705_s5.jpg?f=xl",
  },
  {
    id: 6,
    name: "FRÖSET",
    desc: "Chair, black stained oak veneer",
    price: {
      sym: "$",
      real: "99",
      dec: ".00",
    },
    imgSrc:
      "https://www.ikea.com/us/en/images/products/froeset-chair-black-stained-oak-veneer__0824150_pe776003_s5.jpg?f=xl",
  },
];

export const getProducts = () => {
  return products;
};

export const getProductById = (productId) => {
  return products.find((p) => p.id === productId);
};
