import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/icone-prefeitura.png';
import lupa from '../../assets/img/lupa.svg';


import './styles.css';


// import { Container } from './styles';

const Header: React.FC = () => {


  return (
    <div className="rodape">
      <div className="rodape_principal">
        <Link to="#">
          <img src={logo} alt="" />
        </Link>
        <div className="pesquisa">
          <input type="search" id="nome" name="nome" placeholder="Digite aqui" />
          <Link to="#" >
            <img src={lupa} alt="" />
          </Link >
        </div>

        <Link to="/pro/novo" className="btn">NOVO</Link>
      </div>
    </div >
  );
}



export default Header;