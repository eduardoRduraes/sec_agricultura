import React from 'react';
import api from '../../services/api';
import Header from '../../components/header';
import './styles.css';

// import { Container } from './styles';

const Novo: React.FC = () => {
  async function handleAddProfessional() {
    api.put();
  }

  return (
    <div>
      <Header />
      <div className="container form">
        <label htmlFor="nome" id="nome">Nome </label>
        <input type="text" id="nome" name="nome" />
        <label htmlFor="endereco" id="endereco">Endereco </label>
        <input type="text" id="endereco" name="endereco" />
        <label htmlFor="telefone" id="telefone">Telefone </label>
        <input type="text" id="telefone" name="telefone" />
        <label htmlFor="profissao" id="profissao">Profissão </label>
        <input type="text" id="profissao" name="profissao" />
        <label htmlFor="status" id="sexo">SEXO</label>
        <div className="sexo">
          <input type="radio" id="masculino" name="profissional" value="masculino" checked />
          <label htmlFor="masculino">MASCULINO</label>

          <input type="radio" id="feminino" name="profissional" value="feminino" />
          <label htmlFor="feminino">FEMININO</label>
        </div>
        <div className="situacao">
          <input type="checkbox" id="status" name="status" />
          <label htmlFor="status" id="status">EMPREGADO</label>
        </div>


        <button type="button">SALVAR</button>
      </div>
    </div>
  );
}

export default Novo;