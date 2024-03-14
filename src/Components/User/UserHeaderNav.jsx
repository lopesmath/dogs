import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import minhasFotos from '../../Assets/feed.svg'
import estatisticas from '../../Assets/estatisticas.svg'
import adicionarFoto from '../../Assets/adicionar.svg'
import sair from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext)
  const navigate = useNavigate()
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = useState(false)

  const { pathname } = useLocation()
  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  const handleLogout = () => {
    userLogout()
    navigate('/login')
  }

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <img src={minhasFotos} />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <img src={estatisticas} />
          {mobile && 'Estatística'}
        </NavLink>
        <NavLink to="/conta/postar">
          <img src={adicionarFoto} />
          {mobile && 'Adicionar foto'}
        </NavLink>
        <button onClick={handleLogout}>
          <img src={sair} alt="" />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav
