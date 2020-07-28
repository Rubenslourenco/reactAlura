import React from 'react';
import logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button'
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img class="logo" src={logo} alt="AluraFlix logo"></img>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>

        </nav>
    );
}

export default Menu;