// ItemDetailContainer.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import ItemDetail from "./ItemDetail";
import './itemDetailContainer.css';

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "productos", id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setProducto({ id: docSnap.id, ...docSnap.data() })
      }
    };
    fetchProduct()
  }, [id])

  return (
    <div>
      {producto ? <ItemDetail producto={producto} /> : <p>Cargando...</p>}
    </div>
  )
}

export default ItemDetailContainer;