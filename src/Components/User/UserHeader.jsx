import React, { useEffect, useState } from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

const UserHeader = () => {
  const [title, setTitle] = useState('')
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/dogs/conta') setTitle('Minhas Fotos')
    else if (location.pathname === '/dogs/conta/estatisticas')
      setTitle('Estatísticas')
    else if (location.pathname === '/dogs/conta/postar')
      setTitle('Crie um post')
    else setTitle('null')
  }, [location])

  if (title === 'null') return null
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader
