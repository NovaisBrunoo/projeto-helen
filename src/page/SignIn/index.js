import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './index.css';

function SignIn() {
  const [form, setForm] = useState({
    email: '',
    senha: ''
  })

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: [event.target.value] })
  }

  function handleSubmit(event) {
    event.stopPropagtion()
    console.log('entrou')
  }



  return (

    <div className="container">
      <div className='container-login'>
        <img src={logo} alt='logo da makert cub' />
        <h2>Market Cubos</h2>
        <strong>Boas-Vindas</strong>
        <span>Use seu e-mail e senha para acessar a conta</span>
        <form className='form-login' onSubmit={handleSubmit}>
          <label htmlFor='email'>E-mail</label>
          <input
            type='text'
            placeholder='exemplo@email.com'
            onChange={handleChange}
            value={form.email}
          />
          <label htmlFor='senha'>Senha</label>
          <input
            type='password'
            placeholder='Insira sua senha'
            onChange={handleChange}
            value={form.senha}
          />

          <button className='btn-login' >Fazer Login</button>
        </form>

        <span>Não possui conta?<Link to={'/cadastro'}>Cadastrar</Link></span>
      </div>
    </div>

  );
}

export default SignIn;
