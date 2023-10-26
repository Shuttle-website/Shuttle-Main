import React from 'react'
import styles from './Admin.module.css'
import Sidebar from '../Sidebar'

const AdminOrders = ({children}) => {
  return (
    <div className={styles.compo}>
      <Sidebar/>
      <main className={styles.maincontent}>
        <h1>this is orders</h1>
      </main>
    </div>
  )
}

export default AdminOrders
