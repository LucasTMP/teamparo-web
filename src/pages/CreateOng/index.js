import React, {useEffect, Component, useState} from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';


// Libs
import { useForm } from 'react-hook-form';
import Select from 'react-select';

// Styles
import { Section, Container, Input, Footer, Direitos } from './styles';

import Header from '../../components/Header'

// Assets
import Logo from '../../assets/logo.png';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Redux
import { createOngRequest } from '../../store/modules/ong/actions'

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch()
  let photoin64 = "";

  const [needs, setNeeds] = useState([]);


  function scanvalue (select_tag){
      const tag = select_tag.value
    return tag
  }

  function criartags(data_tags){

    const newarray = needs.map(scanvalue);
    const arrayconcat = newarray.concat(data_tags);

    return arrayconcat;
  }



  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  const options = [
    { value: 'Dinheiro', label: 'Dinheiro' },
    { value: 'Roupa', label: 'Roupa' },
    { value: 'Cesta Básica', label: 'Cesta Básica' },
    { value: 'Voluntário', label: 'Voluntário' },
    { value: 'Remédio', label: 'Remédio' },
    { value: 'Produtos de Limpeza', label: 'Produtos de Limpeza' },
    { value: 'Ração', label: 'Ração' },
    { value: 'Sangue', label: 'Sangue' },
    { value: 'Alimentos', label: 'Alimentos' },
    { value: 'Equipamentos Médicos', label: 'Equipamentos Médicos' },
    { value: 'Produtos de Higiene Pessoal', label: 'Produtos de Higiene Pessoal' },
  ]

async function photoconvert() {
   const file = document.querySelector('#photo').files[0];
   photoin64 = await toBase64(file);
}

  const onSubmit = (data) => dispatch(createOngRequest({
    name: data.name,
    photo: {
      url: photoin64
    },
    
    phone: data.phone,
    description: data.description,
    payment: {
      bank: {
        number: data.number,
        agency: data.agency,
        account: data.account
      }
    },
    social: {
      facebook: data.facebook,
      instagram: data.instagram,
      twitter: data.twitter,
    }, 
    // [data.tags, needs.map(scanvalue)],
    tags: criartags(data.tags),
    cnpj: data.cnpj,
    city: data.city,
    address: data.address,
    cep: data.cep,
    email: data.email
  }, window.localStorage.getItem('@teamparo:token')));


  return (
    <>
      <Header />
      <Section>
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Criar um perfil de Ong</h1>

            <h2>Características:</h2>
            <hr></hr>
            <div>
              <Input
                name="name"
                type="text"
                // onClick={testar}
                placeholder="Nome"
                ref={register({ required: true })}
                error={errors.name}
              />
              <Input
                name="phone"
                id="phone"
                type="text"
                placeholder="Telefone"
                ref={register({ required: true })}
                error={errors.phone}
              />
            </div>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              ref={register({ required: true })}
              error={errors.email}
            />
            <textarea
              style={{ resize: 'vertical' }}
              name="description"
              placeholder="Descrição"
              maxLength="250"
              error={errors.description}
              ref={register({ required: true })}
            ></textarea>
            <div>
            <select name="tags" error={errors.tags} ref={register({ required: true })} id="monselect">
              <option value="" selected="selected" disabled>Selecione o foco:</option>

              <optgroup label="Animais">
              <option value="Pets">Pets</option>
              <option value="Dogs">Dogs</option>
              <option value="Gatos">Gatos</option>
              <option value="Animais em Geral">Diversos</option>
              </optgroup>

              <optgroup label="Pessoas">
              <option value="Pessoas">Todos</option>
              <option value="Idosos">Idosos</option>
              <option value="Jovens">Jovens</option>
              <option value="Crianças">Crianças</option>
              <option value="Deficientes">Deficientes</option>
              </optgroup>

              <optgroup label="Outros">
              <option value="Causas Sociais">Causas Sociais</option>
              <option value="Meio Ambiente">Meio Ambiente</option>
              <option value="Política">Política</option>
              </optgroup>

            </select>
            <Select 
            name="need"
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={setNeeds}
            placeholder="Selecione as suas necessidades:"
            isMulti
            id="nece"
            options={options} />
            </div>

            <h2>Dados Bancarios:</h2>
            <hr></hr>
            <div>
              <Input
                name="number"
                type="text"
                placeholder="Banco"
                ref={register({ required: true })}
                error={errors.number}
              />
              <Input
                name="agency"
                type="text"
                placeholder="Agência"
                ref={register({ required: true })}
                error={errors.agency}
              />
              <Input
                name="account"
                type="text"
                placeholder="Conta"
                ref={register({ required: true })}
                error={errors.account}
              />
            </div>
            <Input
              name="cnpj"
              type="text"
              placeholder="CNPJ/CPF"
              ref={register({ required: true })}
              error={errors.cnpj}
            />
            <div>
              <Input
                name="cep"
                type="text"
                placeholder="CEP"
                ref={register({ required: true })}
                error={errors.cep}
              />            <Input
                name="city"
                type="text"
                placeholder="Cidade"
                ref={register({ required: true })}
                error={errors.city}
              />
            </div>
            <Input
              name="address"
              type="text"
              placeholder="Endereço"
              ref={register({ required: true })}
              error={errors.address}
            />


            <h2>Redes Sociais:</h2>
            <hr></hr>
            <Input
              name="facebook"
              type="text"
              placeholder="Facebook"
              ref={register({ required: false })}
              error={errors.facebook}
            />
            <Input
              name="instagram"
              type="text"
              placeholder="Instagram"
              ref={register({ required: false })}
              error={errors.instagram}
            />
            <Input
              name="twitter"
              type="text"
              placeholder="Twitter"
              ref={register({ required: false })}
              error={errors.twitter}
            />


            <h2>Foto do Perfil:</h2>
            <hr></hr>
            <Input
              className="photo"
              id="photo"
              name="photo"
              type="file"
              accept="image/png, image/jpeg"
              onChange={photoconvert}
              ref={register({ required: true })}
              error={errors.photo}
            />
            <button>Criar ong</button>
          </form>
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

export default SignUp;
