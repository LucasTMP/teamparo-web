import React , { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../services/history';


// Libs
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
// Styles
import { Section, Container, Input, Footer, Direitos } from './styles';

import Header from '../../components/Header'

// Assets
import Logo from '../../assets/logo.png';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Redux
import { createOngRequest } from '../../store/modules/ong/actions'
import { ongListRequest } from '../../store/modules/ong/actions'

const nameUser = window.localStorage.getItem('@teamparo:nameUser')

const Profile = () => {

  const ongs = useSelector(state => state.ong.ongs);
 
  useEffect(() => {
    if (!window.localStorage.getItem('@teamparo:token')) {
      history.push('/')
    }
    if (!ongs) {
      dispatch(ongListRequest(localStorage.getItem('@teamparo:token')))
    }
  }, []);

  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  let photoin64 = "";


  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

async function photoconvert() {
   const file = document.querySelector('#photo').files[0];
   photoin64 = await toBase64(file);
}

function msg() {
  toast.info('Função em desenvolvimento.');
};

  return (
    <>
      <Header />
      <Section>
      <Container>
        <h1>Seu Perfil:</h1>
        <div className="form">
          <div>
            <Input
              name="firstName"
              type="text"
              placeholder="Nome"
              ref={register({ required: true })}
              error={errors.name}
            />
            <Input
              name="lastName"
              type="text"
              placeholder="Sobrenome"
              ref={register({ required: true })}
              error={errors.lastName}
            />
          </div>
          <div>
            <Input
              name="birthDate"
              type="date"
              placeholder="Email"
              ref={register({ required: true })}
              error={errors.birthDate}
            />
            <select name="gender" error={errors.gender} ref={register({ required: true })} id="monselect">
              <option value="" selected="selected" disabled>Selecione</option>
              <option value="male">Masculino</option>
              <option value="other">Outro</option>
              <option value="female">Feminino</option>
            </select>
          </div>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            ref={register({ required: true })}
            error={errors.email}
          />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            ref={register({ required: true })}
            error={errors.password}
          />
          <Input
            name="password"
            type="password"
            placeholder="Confirmar Senha"
            ref={register({ required: true })}
            error={errors.password}
          />
          <Input
            name="phone"
            type="text"
            placeholder="Telefone"
            ref={register({ required: true })}
            error={errors.phone}
          />
          <button onClick={msg}> Atualizar os seus dados</button>
          </div>
      </Container>
    </Section>


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


    </>
  );
};

export default Profile;
