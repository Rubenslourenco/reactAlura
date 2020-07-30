import React from 'react';
import {Link} from 'react-router-dom'
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
    return (
        <PageDefault>
            <h1>página de Cadastro de Video</h1>

            <Link to="/cadastro/categoria">
                Cadastro categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;