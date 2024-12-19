import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import ItemList from "./ItemList";
import './itemListContainer.css';

const ItemListContainer = ({ mensaje }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true) 
  const { categoryId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        let productosRef = collection(db, "productos")

        // Si existe categoryId, filtrar los productos
        const q = categoryId
          ? query(productosRef, where("category", "==", categoryId))
          : productosRef

        const querySnapshot = await getDocs(q)
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

        setProductos(items)
      } catch (error) {
        console.error("Error al cargar productos:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [categoryId])

  return (
    <div className="container mt-5">
      <h2>{mensaje}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  )
}

export default ItemListContainer;
