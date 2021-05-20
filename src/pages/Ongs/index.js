import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from '../../assets/logo.png'


import { Container, OngsContainer, TitleContainer, OngList, Ong, Direitos, Footer } from './styles'

import Header from '../../components/Header'
import history from '../../services/history'

import { ongListRequest } from '../../store/modules/ong/actions'


const Ongs = () => {
  const ongs = useSelector(state => state.ong.ongs)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!window.localStorage.getItem('@teamparo:token')) {
      history.push('/')
    }
    if (!ongs) {
      dispatch(ongListRequest(localStorage.getItem('@teamparo:token')))
    }
  }, [])

  return (
    <Container>
      <Header />
      <OngsContainer>
        <TitleContainer>
          <h1>Ongs</h1>
        </TitleContainer>
        <OngList>
          {ongs && ongs.map(ong => (
            <Ong>
              <img src={ong.photo.url ? ong.photo.url : 'https://api.adorable.io/avatars/285/abott@adorable.png'} />
              <h1>{ong.name}</h1>
              <p>
                {ong.description.substring(0, 150)}
              </p>
              <button onClick={() => history.push(`/ong/${ong._id}`)}>
                VER ONG
              </button>
            </Ong>
          ))}
        </OngList>
      </OngsContainer>
      <Footer>
        <section>
          <div>
            <ul>
              <li><Link to="/dashboard"><img src={Logo} /></Link></li>
              <li align='justify'> Uma ferramenta web 100% gratuita, feita para o uso das ONGs, instituições e voluntários,
                com o objetivo de melhorar a interação entre eles.</li>
            </ul>
          </div>
          <div className="linha-vertical"></div>
          <div>
            <h1>Redes sociais</h1>
            <ul>
              <li className="liface" ><a href="https://www.facebook.com/Te-Amparo-101202018188098" target="_blank"> <FaFacebook className="face" size={26} color="#FFF" ></FaFacebook> Facebook</a></li>
              <li className="liinsta"><a href="https://www.instagram.com/teamparobr/" target="_blank"><FaInstagram className="insta" size={26} color="#FFF" ></FaInstagram> Instagram</a></li>
            </ul>
          </div>
          <div className="linha-vertical"></div>
          <div>
            <h1>Contato</h1>
            <ul>
              <li className="liemail"><MdEmail className="email" size={24} color="#FFF" ></MdEmail>  teamparobr@gmail.com</li>
              <li className="liwhats"><a href="https://wa.me/55DD000000000?text=Olá,%20Teamparo!" target="_blank"><FaWhatsapp className="whats" size={26} color="#FFF" ></FaWhatsapp>  WhatsApp</a></li>
            </ul>
          </div>
          <div className="linha-vertical2"></div>
          <div>
            <h1>Links</h1>
            <ul>
              <li><Link to="/dashboard" className="lidash" >Home</Link></li>
              <li ><Link to="/ongs" className="liongs" >Ongs</Link></li>
              <li><Link to="/profile" className="liprofile">Meu Perfil</Link></li>
            </ul>
          </div>
        </section>
      </Footer>
      <Direitos>
        <div>
          <div className="divdireitos"></div>
          <p>Copyright © 2020 | Todo o conteúdo deste site é de uso exclusivo da empresa TechCactus.</p>
        </div>
      </Direitos>
    </Container>
  )
}

export default Ongs