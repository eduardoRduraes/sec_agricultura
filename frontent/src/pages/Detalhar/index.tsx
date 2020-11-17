import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

// import { Container } from './styles';

const Detalhar: React.FC = () => {
  return (
    <div>
      <label htmlFor="" id="nome">Nome </label>
      <input type="text" id="nome" name="nome" />
      <label htmlFor="" id="endereco">Endereco </label>
      <input type="text" id="endereco" name="endereco" />
      <label htmlFor="" id="bairro">Bairro </label>
      <input type="text" id="bairro" name="bairro" />
      <label htmlFor="" id="telefone">Telefone </label>
      <input type="text" id="telefone" name="telefone" />
      <label htmlFor="" id="profissao">Profissão </label>
      <input type="text" id="profissao" name="profissao" />
      <Link to="#">SALVAR</Link>
    </div>
  );
}

export default Detalhar;
