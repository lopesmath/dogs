import React, { useContext } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import DogsSvg from '../Assets/DogsSvg'
import { UserContext } from '../UserContext'

const Header = () => {
  const { data } = useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/dogs/">
          <DogsSvg />
        </Link>
        {data ? (
          <Link className={styles.login} to="/dogs/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/dogs/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
