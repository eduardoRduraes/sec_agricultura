import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

// import { Container } from './styles';


interface Professional {
  id: number;
  name: string;
  address: string;
  profession: string;
  status: boolean;
}

const List: React.FC = () => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);

  const professionalList = async () => {
    const response = await api.get("/pro");
    setProfessionals(response.data);
  }

  useEffect(() => {
    professionalList();
  }, []);

  async function handleProfessionalRemove(id: number) {
    api.delete(`/pro/${id}`);
    const list = professionals.filter((professional) => professional.id !== id);
    setProfessionals(list)
  }

  return (

    < div className="lista" >
      <table>
        <thead>
          <th scope="col">Nome</th>
          <th scope="col">Endereço</th>
          <th scope="col">Profissão</th>
          <th scope="col">STATUS</th>
          <th scope="col">OPÇÕES</th>
        </thead>
        <tbody>

          {professionals.map(professional => (
            <tr key={professional.id}>
              <td>{professional.name}</td>
              <td>{professional.address}</td>
              <td>{professional.profession}</td>
              <td>{professional.status}</td>
              <td>
                <button>DETALHAR</button>
                <button onClick={() => handleProfessionalRemove(professional.id)}>EXCLUIR</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div >
  )
}

export default List;
