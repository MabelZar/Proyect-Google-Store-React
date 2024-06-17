import mainAllImages from "../../utils/images-main.js";

const products=[
    {
        id:"P01",
        name:"Google Pixel Buds Pro",
        price: 229,
        category:"EARBUDS",
        image:mainAllImages.earbuds_01_celeste
    },
    {
        id:"P02",
        name:"Google Pixel Buds Pro ",
        price: 229,
        category:"EARBUDS",
        image:mainAllImages.earbuds_02_porcelana
    },
    {
        id:"P03",
        name:"Google Pixel Buds Pro",
        price: 229,
        category:"EARBUDS",
        image:mainAllImages.earbuds_03_carbon
    },
    {
        id:"P04",
        name:"Google Pixel Buds Pro ",
        price: 229,
        category:"EARBUDS",
        image:mainAllImages.earbuds_04_gris
    },
    {
        id:"P05",
        name:"Google Pixel Buds Pro ",
        price: 229,
        category:"EARBUDS",
        image:mainAllImages.earbuds_05_verde
    },
    {
        id:"P06",
        name:"Google Pixel Buds Pro ",
        price: 229,
        category:"EARBUDS",
        image:mainAllImages.earbuds_06_coral
    },
];

const getEarbuds = () => {
    return products.filter(product => product.category === 'EARBUDS')
};

export {products, getEarbuds};
