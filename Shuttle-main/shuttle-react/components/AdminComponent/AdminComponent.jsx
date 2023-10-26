import React from 'react'
import styles from './Admin.module.css'
import Sidebar from '../Sidebar'

const AdminHome = ({children}) => {
  return (
    <div className={styles.compo}>
      <Sidebar/>
      <main className={styles.maincontent}>
        <h1>this is home</h1>
      </main>
    </div>
  )
}

export default AdminHome
