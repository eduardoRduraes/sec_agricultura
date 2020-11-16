import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

// import { Container } from './styles';

const List: React.FC = () => {
  const [professional, setProfessional] = useState('');

  const professionalList = async () => {
    const response = await api.get("professioal");
  }


  function handleDelete(id: number) {
    return "null";
  }
  return (

    < div className="lista" >
      <table>
        <thead>
          <th scope="col">Nome</th>
          <th scope="col">Endereço</th>
          <th scope="col">Bairro</th>
          <th scope="col">Telefone</th>
          <th scope="col">Profissão</th>
          <th scope="col">OPÇÕES</th>
        </thead>
        <tbody>


          <tr>
            <th scope="row">Eduardo R. Durães</th>
            <th scope="row">Rua Ceará</th>
            <th scope="row">Centro</th>
            <th scope="row">00-000000000</th>
            <th scope="row">Tratorista</th>
            <th>
              <Link to="">EXCLUIR</Link>
              <Link to="">DETALHAR</Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div >
  )
}

export default List;
