import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container } from './styles'

import jwt from 'jwt-decode'

import history from '../../services/history'

import Logo from '../../assets/logo.png';

import { logoutRequest } from '../../store/modules/auth/actions'


const Header = () => {
  const dispatch = useDispatch()

  const [user, setUser] = useState()
  const token = window.localStorage.getItem('@teamparo:token')
  const ongId = window.localStorage.getItem('@teamparo:ongId')
  const nameUser = window.localStorage.getItem('@teamparo:nameUser')

  useEffect(() => {
    if (token) {
      const decoded = jwt(token)
      setUser(decoded)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('@teamparo:token');
    localStorage.removeItem('@teamparo:ongId');
    localStorage.removeItem('@teamparo:nameUser');
    dispatch(logoutRequest())
    history.push('/')
  }



  return (
    <Container>
      <header>
        <Link to="/dashboard"><img src={Logo} /></Link>
        <nav>
          <ul>
            <li><p className="username">Bem-Vindo:&nbsp;&nbsp;<strong>{nameUser}</strong></p></li>
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to ="/profile">Meu perfil</Link></li>
            <li>
              <button type="button" onClick={() => ongId ? history.push(`/ong/${ongId}`) : history.push('/createong')}>{
                ongId ? 'MINHA ONG' : 'CRIAR ONG'
              }</button>
            </li>
            <li>
              <button className="btnlogout" onClick={logout}>SAIR</button>
            </li>
          </ul>
        </nav>
      </header>
    </Container>
  )
}

export default Header