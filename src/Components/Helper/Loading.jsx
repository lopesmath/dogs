import React from 'react'
import styles from './Loading.module.css'
import CarregandoSvg from '../../Assets/CarregandoSvg'

const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.inner}></div>
      <div className={styles.outer}></div>
    </div>
  )
}

export default Loading
