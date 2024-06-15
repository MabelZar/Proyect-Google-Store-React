import ImagesWatches from "../../images-watches";

const products=[
    {
        id:"P01",
        name:"Midnight Zen",
        price: 99.95,
        category:"SMARTWATCH",
        image:ImagesWatches.smartwatch_black
    },
    {
        id:"P02",
        name:"Lilac Bliss",
        price: 100.99,
        category:"SMARTWATCH",
        image:ImagesWatches.smartwatch_pink
        
    },
    {
        id:"P03",
        name:"Morning Glow",
        price: 94.95,
        category:"SMARTWATCH",
        image:ImagesWatches.smartwatch_yelow
    },
];

const getSmartwatch = () => {
    return products.filter(product => product.category === 'SMARTWATCH')
};

export {products, getSmartwatch};
