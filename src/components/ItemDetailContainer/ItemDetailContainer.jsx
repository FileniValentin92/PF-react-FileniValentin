import './ItemDetailContainer.css'
import { useState, useEffect} from 'react';
import ItemDetail  from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";
import { getProduct } from '../../firebase/firebase.js';
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/firebase'


export const ItemDetailContainer = () => {

    const [product, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getProduct(id).then(prod => setItem(prod))

    }, [])

    /* const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = {id: response.id, ...data}
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
      





    }, [itemId]) 

    return (
        <div>
            <ItemDetail {...product}/>
        </div>
    ); */

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail {...product} />

        </div>
    )
}

export default ItemDetailContainer;