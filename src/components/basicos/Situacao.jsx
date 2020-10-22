import React from 'react';

export default props =>{

    const status = props.nota >= 6 ? 'aprovado' : 'Reprovado';

    return(
        <div>
            <p>O aluno {props.nome} foi <strong>{status}</strong></p>
        </div>
    );
}