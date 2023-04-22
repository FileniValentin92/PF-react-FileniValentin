const products = [
    {
        id:'1',
        name: 'Iphone 12',
        price: 350000,
        category: 'celulares',
        img: '../images/iphone12.jpeg',
        stock: 25,
        description: 'Iphone 12 de 256gb',
    },
    {
        id:'2',
        name: 'Iphone 13',
        price: 450000,
        category: 'celulares',
        img: '../images/iphone13.jpeg',
        stock: 25,
        description: 'Iphone 13 de 256gb',
    },
    {
        id:'3',
        name: 'Ipad Air',
        price: 200000,
        category: 'tablets',
        img: '../images/ipadair.jpeg',
        stock: 25,
        description: 'Ipad Air de 256gb',
    },
    {
        id:'4',
        name: 'Ipad Pro',
        price: 340000,
        category: 'tablets',
        img: '../images/ipadpro.jpeg',
        stock: 25,
        description: 'Ipad Pro de 256gb Black',
    },
    {
        id:'5',
        name: 'Macbook Pro de 16 pulgadas',
        price: 650000,
        category: 'notebooks',
        img: '../images/macbookpro.jpeg',
        stock: 25,
        description: 'Macbook Pro de 16 pulgadas color silver',
    },
    {
        id:'6',
        name: 'Macbook Air de 13 pulgadas',
        price: 590000,
        category: 'notebooks',
        img: '../images/macbookair.jpeg',
        stock: 25,
        description: 'Macbook Air de 13 pulgadas color gold',
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.category === category);
            resolve(filteredProducts);
        }, 500)
    });
};
