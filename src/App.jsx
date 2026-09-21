import './App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


// A FUNÇÃO USENAVIGATE É USADA PARA FAZER A NAVEGAÇÃO ENTRE PÁGINAS NO SISTEMA 

// ESTOU IMPORTANDO UMA MUITO IMPORTANTE, CHAMADA DE USESTATE. COM ESTÁ FUNÇÃO EU VOU 
// CONSEGUIR USAR ESTADOS EM REACT 


function App() {
  const mensagem = 'BEM-VINDO AO SISTEMA ELEITORAL ';

  const navigate = useNavigate();


  const [resultado, setResultado] = useState();
   
  

  const [nome,setNome] = useState('');
  const [cpf, setCpf] = useState();

  const handleChange1 = (event) =>
  {
    setNome(event.target.value);
  }

  const handleChange2 = (event)=>
  {
    setCpf(event.target.value);
  }

  const handleClick = () =>
  {
    if(cpf.length > 11)
    {
      setResultado('O CPF NÃO PODE TER MAIS DE 11 DÍGITOS !');
    }
    else if(cpf.length < 11)
    {
      setResultado('O CPF NÃO PODE TER MENOS DE 11 DÍGITOS !')
    }
    else
    {
      
      navigate('Votar');
    }
  }

  return (
    <div className="container">
      <br />
      <header className='y1'>
        { mensagem }
      </header>
      <br /><br />
      <div className="caixa">
        <input onChange={ handleChange1 } className='z1' placeholder='ESCREVA SEU NOME AQUI'/>
      <br /><br />
      <input onChange={ handleChange2 } className='z1' placeholder='ESCREVA SEU CPF, SEM PONTUAÇÃO'  />
      <br /><br />
      <button onClick={ handleClick }  className='start1'>SELECIONAR</button>
      </div>
      <br /><br />
      <p className='p1'>MENSAGEM : { resultado }</p>
    </div>
  )
}

export default App
