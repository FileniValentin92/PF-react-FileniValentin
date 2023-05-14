import React from "react";
import { useRef } from "react";
import { CartProvider, useCartContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom";
import { crearOrdenCompra, getOrdenCompra, getProduct, updateProduct } from "../../firebase/firebase";
import { toast } from "react-toastify";


export const Checkout = () => {
    const dataForm = useRef()
    const { cart, totalPrice, emptyCart } = useCartContext()

    let navigate = useNavigate()

    const consultarForm = (e) => {
        e.preventDefault()

        const datosFormulario = new FormData(dataForm.current)
        const buyer = Object.fromEntries(datosFormulario)

        const aux = [...cart]
        aux.forEach(prodCart => {
            getProduct(prodCart.id).then(prodDB => {
                if(prodDB.stock >= prodCart.quantity){
                    prodDB.stock -= prodCart.quantity
                    updateProduct(prodCart.id, prodDB)
                } 
            })

        })


        crearOrdenCompra(buyer, aux.map(prod => (prod.id, prod.quantity, prod.price)), totalPrice(), new Date().toISOString())
            .then(ordenCompra => {
                console.log()
                toast(`Muchas gracias por tu compra, su nro de compra es ${ordenCompra.id} por un monto total de ${totalPrice()}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });

                emptyCart()
                e.target.reset()
                navigate("/")

        })


        e.target.reset()

    }

    return (
        <>
            {
                cart.length === 0 ?

                <>

                    <h2>Para finalizar la compra debes tener algun producto en el carrito</h2>
                    <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar Compra</button></Link>

                </>  
                :

                <div className="container divForm">
            <form onSubmit={consultarForm} ref={dataForm}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Repetir Email</label>
                    <input type="email" className="form-control" name="emailRepetir" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="DNI" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero de telefono fijo o celular</label>
                    <input type="number" className="form-control" name="celular" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Direccion</label>
                    <input type="text" className="form-control" name="direccion" required />
                </div>
                <button type="submit" className="btn btn-primary">Finalizar compra</button>
            </form>
        </div>
             }
        
        
        
        </>

    ) 

}