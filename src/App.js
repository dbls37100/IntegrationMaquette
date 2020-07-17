import React, { useState } from 'react';
import Fond from './fondDefi.png';
import AppStore from './appstore.png'
import GooGlePlay from './google.png'
import Banniere from './banniere.png'
import Photo from './photo.png'
import { slide as Menu } from 'react-burger-menu'
import './App.css';

const App = () => {
  const [openMenuProfil, setOpenenuProfil] = useState(false)
  const [openMenuTarif, setOpenenuTarif] = useState(false)
  const [openMenuAPropos, setOpenenuAPropos] = useState(false)

  return (
    <div className="App">
      <div className="banniere-menu">
        <h2 className="site_title">PayPay</h2>
        <div className="butonburger">
          <i class="fas fa-bars"></i>
          <Menu right className="burgerMenu" isOpen={ false }>
            <a id="Pribadi" className="menu-item link-style" href="#">
              A propos &nbsp; &nbsp;
              <i onClick={() => setOpenenuAPropos(!openMenuAPropos)} class="fas fa-caret-down"></i>
              <div className={openMenuAPropos ? "miniMenu3Open" : "miniMenu3Close"}>
                <a id="profil" className="menu-item--small link-style" href="#">Qui sommes nous</a>
                <a id="profil" className="menu-item--small link-style" href="#">Ethiques de la marque</a>
              </div>
            </a>
            <a id="Bisnis" className="menu-item link-style" href="#">
              Tarif &nbsp; &nbsp;
              <i onClick={() => setOpenenuTarif(!openMenuTarif)} class="fas fa-caret-down"></i>
              <div className={openMenuTarif ? "miniMenu3Open" : "miniMenu3Close"}>
                <a id="profil" className="menu-item--small link-style" href="#">Adhesions</a>
                <a id="profil" className="menu-item--small link-style" href="#">Frais de transaction</a>
              </div>
            </a>
            <a id="Mitra" className="menu-item link-style" href="#">Mitra</a>
            <a id="Bantuan" className="menu-item--small link-style" href="#">Bantuan & Tanya Jawab</a>
            <a id="profil" className="menu-item--small link-style" href="#">
              Sigit Nugroho &nbsp;
              <i onClick={() => setOpenenuProfil(!openMenuProfil)} class="fas fa-caret-down"></i>
              <div className={openMenuProfil ? "miniMenu3Open" : "miniMenu3Close"}>
                <a id="profil" className="menu-item--small link-style" href="#">etetet</a>
                <a id="profil" className="menu-item--small link-style" href="#">etzttete</a>
              </div>
            </a>
          </Menu>
        </div>
        <ul className="Menu-li">
          <li className="li-display profil-li">
            Pribadi &nbsp; &nbsp;
            <i class="fas fa-caret-down"></i>
          </li>
          <li className="li-display profil-li">Bisnis &nbsp; &nbsp;<i class="fas fa-caret-down"></i></li>
          <li className="li-display">Mitra</li>
          <li className="li-display">Bantuan & Tanya Jawab</li>
          <li className="li-display butonIcon">
          <div className="profil-li">
            <img className="img-profil" src={Photo} alt="profil photo" />
            Sigit Nugroho &nbsp;
            <i class="fas fa-caret-down"></i>
          </div>
          </li>
        </ul>
      </div>
      <div className="FondBackground">
        <div className="text-left">
          <hr className="hr-style"/>
          <h1 className="title-style">Bienvenus sur PayPay!</h1>
          <p>Ce site est une reproduction du wireframe de</p>
          <p>Sigit Setyo Nugroho présenté sur dribble.</p>
          <div className="logo-display">
            <img className="LogoDownload" src={AppStore} alt="App store" />
            <img className="LogoDownload" src={GooGlePlay} alt="Google Play" />
          </div>
        </div>
        <img className="img-principal" src={Fond} alt="fond" />
      </div>
    </div>
  );
}

export default App;
