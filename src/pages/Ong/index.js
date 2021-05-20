import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../../components/Header'
import { Link } from 'react-router-dom';
import { Container, OngsContainer, Tag, Footer, Direitos} from './styles'

import { ongListRequest, ongRequest } from '../../store/modules/ong/actions'

import { AiFillPhone } from "react-icons/ai";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Logo from '../../assets/logo.png';
import { toast } from 'react-toastify';




const Ong = ({ match }) => {
  const { id } = match.params
  const ong = useSelector(state => state.ong.ong)

  const dispatch = useDispatch()

  function msg() {
    toast.success('Aguarde o contato da ONG no seu e-mail cadastrado.');
  };

  useEffect(() => {
    dispatch(ongRequest(id, window.localStorage.getItem('@teamparo:token')))
  }, [match.params])

  function btneditong (urlongid){
    let displaybtnedit = "none";
    if (urlongid.id == window.localStorage.getItem('@teamparo:ongId')){
      displaybtnedit = "inline";
    }
    return displaybtnedit;
  }

  return (
    <Container>
      <Header />
      <OngsContainer>
        <section>
          <header  style={{ marginTop: '70px' }} >
            <img src={ong?.photo.url ? ong.photo.url : 'https://www.petlove.com.br/images/breeds/197837/profile/original/shiba-p.jpg?1532540015'} />
            <div>
              <h1 style={{ marginBottom: '16px'}}>{ong?.name}</h1>
              <p>
                <MdLocationOn style={{ marginRight: '6px'}} size={18} color="#FA5477" /> {`${ong?.city}, ${ong?.address} - ${ong?.cep}`}
              </p>

              <p>
                <AiFillPhone style={{ marginRight: '6px' }} size={18} color="#FA5477" /> {ong?.phone}
              </p>

              <p>
                <MdEmail style={{ marginRight: '6px' }} size={18} color="#FA5477" /> {ong?.email}
              </p>
              <button onClick={msg}>FAZER DOAÇÃO</button>
              <Link to="/editong" className="linkbtn" style={{display: btneditong(match.params)}}>EDITAR ONG</Link>
            </div>

          </header>
          <section>
            <h1 style={{marginBottom: '10px', marginTop: "60px"}} >Sobre</h1>
            <p style={{marginTop: '10px', textAlign: 'justify', maxWidth: '800px'}}>{ong?.description}</p>
          </section>
          <section>
            <h1 style={{marginBottom: '20px' , marginTop: "20px"}}>Redes Sociais</h1>
            <p style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', marginTop: '10px'}}>
            <a href={ong?.social.facebook} target="_blank">
              <FaFacebook size={24} color="#FA5477" style={{ marginRight: '8px' }} /> Facebook </a>
            </p>
            <p style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
            <a href={ong?.social.instagram} target="_blank">
              <FaInstagram size={24} color="#FA5477" style={{ marginRight: '8px' }} /> Instagram</a>
            </p>
            <p style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
            <a href={ong?.social.twitter} target="_blank">
              <FaTwitter size={24} color="#FA5477" style={{ marginRight: '8px' }} /> Twitter </a>
            </p>
          </section>
          <section>
            <h1 style={{marginBottom: '20px', marginTop: "20px"}} >Tags:</h1>
            <Tag>
              {ong?.tags.map(t => (
                <span>{t}</span>
              ))}
            </Tag>
          </section>
        </section>
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

export default Ong