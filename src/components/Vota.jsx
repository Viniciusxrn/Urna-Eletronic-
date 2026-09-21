import { useState } from 'react'
import './Vota.css'
import { useNavigate } from 'react-router-dom'


function Vota()
{



    class Candidato{
        nome;
        sobrenome;


        constructor(nome,sobrenome)
        {
            this.nome = nome;
            this.sobrenome = sobrenome;
        }
    }

    
   

    const mensagem = 'ESCREVA O NÚMERO  PARA A PRESIDÊNCIA ';

    const [voto, setVoto] = useState();
    const [imagem, setImagem]= useState('./urnaEletronic.png');

    const [erro,setErro]= useState('');

    

    
    const handleChange = (event) =>
    {
        setVoto(event.target.value)
    }


    const handleClick = () =>
    {
        if(voto == 22)
        {
            setImagem('./Bolsonaro.png');
            const Candidato1 = new Candidato('Flávio', 'Bolsonaro');
            setErro(`CANDIDATO : ${Candidato1.nome} ${Candidato1.sobrenome} !`);
            
        }
        else if( voto == 13)
        {
            setImagem('./Lula.png');

            const Candidato2 = new Candidato('Lula','Da Silva');
            setErro(`CANDIDATO : ${Candidato2.nome} ${Candidato2.sobrenome} !`);

            
        }
        else if(voto == 30)
        {
            setImagem('./RomeuZema.png');

            const Candidato3 = new Candidato('Romeu', 'Zema');

            setErro(`CANDIDATO : ${Candidato3.nome} ${Candidato3.sobrenome} !`);
            
        }
        else
        {
            setErro('NÃO TEM NENHUM CANDIDATO COM ESTÁ NUMERAÇÃO !');
            setImagem('./urnaEletronic.png');
        }
    }

    const navigate2 = useNavigate()
   
    const handleSubmit = () =>
    {
        if(voto == 22)
        {
            navigate2('/Fim');
        }
        else if(voto == 13)
        {
            navigate2('/Fim');
        }
        else if(voto == 30)
        {
            navigate2('/Fim');
        }
        else if( voto == 0)
        {
            navigate2('/Fim');
        }
    }


    return(
        <div className='container2'>
            <br /><br />
            <header className='p11'>
                VOTAÇÃO 
            </header>
            <br /><br />
            <input onChange={ handleChange } className='i11' placeholder={ mensagem } type='number' />
            <br /><br />
            <p className='p12'>{erro }</p>
            <br /><br />
            <button className='b11' type='button' onClick={ handleClick } >SELECIONAR</button>
            <br /><br /><br />
            <img className='Imagem' src={ imagem }/> 
            <br /><br />
            <button className='bSub' type='submit' onClick={ handleSubmit }  >CONFIRMAR </button>

        </div>
    )
}

export default Vota;