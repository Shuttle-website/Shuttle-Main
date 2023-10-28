import React from 'react'
import Sidebar from '../Sidebar'
import styles from './Admin.module.css'
import ProductForm from '../ProductForm'

const AdminProduct = ({children}) => {
  return (
    <div className={styles.compo}>
      <Sidebar/>
      <main className={styles.maincontent}>
        <h1>this is Product</h1>
        
        <ProductForm/>

      </main>
    </div>
  )
}

export default AdminProduct
