import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'



const firebaseConfig = {
  
  authDomain: "react-coder-bd72d.firebaseapp.com",
  projectId: "react-coder-bd72d",
  storageBucket: "react-coder-bd72d.appspot.com",
  messagingSenderId: "394174218166",
  appId: "1:394174218166:web:1d9b40b36050113bb0cb17"
};


const app = initializeApp(firebaseConfig);



export const db = getFirestore()


export const createProducts = async () => {
    const promise = await fetch('./json/productos.json');
    const productos = await promise.json();
    
    productos.forEach(async (prod) => {
      try {
        await addDoc(collection(db, "productos"), {
          name: prod.name,
          price: prod.price,
          category: prod.category,
          img: prod.img,
          stock: prod.stock,
          description: prod.description
        });
        console.log('Producto agregado:', prod.name);
      } catch (error) {
        console.error('Error al agregar el producto:', error);
      }
    });
  };


 export const getProducts = async() => {
    const prods = await getDocs(collection(db, "productos"))
    
    const items = prods.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })

    return items

  }

  export const getProduct = async(id) => {
    const prod = await getDoc(doc(db, "productos", id))
    const item = {...prod.data(), id: prod.id}
    return item

  } 

  export const updateProduct = async(id, info) => {
    const estado = await updateDoc(doc(db, "produtos", id), info)
  }

  export const deleteProduct = async (id) => {
    const estado = await deleteDoc(doc(db, "productos", id))
    
  }

  export const crearOrdenCompra = async(buyer, totalPrice, cart, date) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        buyer: buyer,
        items: cart,
        totalPrice: totalPrice,
        fecha: date


    })

    return ordenCompra
  }

  export const getOrdenCompra = async(id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id}
    return item
  }
  


 

