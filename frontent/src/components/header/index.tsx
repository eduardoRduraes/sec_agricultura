import React from 'react';
import logo from '../../assets/img/icone-prefeitura.png';
import lupa from '../../assets/img/lupa.svg';

import './styles.css';


// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <div className="rodape">
      <div className="rodape_principal">
        <a href="#">
          <img src={logo} alt="" />
        </a>
        <div className="pesquisa">
          <input type="text" id="nome" name="nome" placeholder="Digite aqui" />
          <a href="">
            <img src={lupa} alt="" />
          </a>
        </div>

        <a href="#" className="btn">NOVO</a>
      </div>
    </div>
  );
}



export default Header;