import { useState } from 'react';
import logo from '../../assets/logo.svg';
import './index.css';

import { Link } from 'react-router-dom';

function Cadastro() {
  const [formCadastro, setFormCadastro] = useState({
    nomeLoja: '',
    email: '',
    senha: ''
  })

  function handleChange(event) {
    setFormCadastro({ ...formCadastro, [event.target.name]: [event.target.value] })
  }

  function handleSubmit(event) {
    event.stopPropagtion()
    console.log('entrou')
  }


  return (
    <div className="container">
      <div className='container-cadastro'>
        <img src={logo} alt='logo da makert cub' />
        <h2>Market Cubos</h2>
        <strong>Cadastre-se</strong>
        <form className='form-cadastro' onSubmit={handleSubmit}>
          <label htmlFor='nomeLoja'>Nome da loja</label>
          <input
            type='text'
            onChange={handleChange}
            value={formCadastro.email}
          />
          <label htmlFor='email'>E-mail</label>
          <input
            type='text'
            onChange={handleChange}
            value={formCadastro.email}
          />
          <label htmlFor='senha'>Senha</label>
          <input
            type='password'
            onChange={handleChange}
            value={formCadastro.email}
          />
          <label htmlFor='confirmar'>Confirme sua senha</label>
          <input
            type='password'
            onChange={handleChange}
            value={formCadastro.email}
          />
          <span className='span-cadastro'>Ao criar uma conta, você concorda com a nossa <strong className='strong-cadastro'>Política de Privacidade </strong>  e  <strong className='strong-cadastro'> Termos de serviço</strong>s</span>

          <Link to={'/'}><button type='button' className='btn-Criar' >Criar Conta</button></Link>
        </form>

      </div>
    </div>
  );
}

export default Cadastro;
