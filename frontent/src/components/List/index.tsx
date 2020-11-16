import React from 'react'
import './styles.css';

export default function List() {
  return (
    <div className="lista">
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
          <th scope="row">Eduardo R. Durães</th>
          <th scope="row">Rua Ceará</th>
          <th scope="row">Centro</th>
          <th scope="row">00-000000000</th>
          <th scope="row">Tratorista</th>
          <th>
            <a href="">EDITAR</a>
            <a href="">EXCLUIR</a>
            <a href="">DETALHAR</a>
          </th>
        </tbody>
      </table>
    </div >
  )
}
