import React from "react";

import produtos from "../../data/produtos";
import "./TabelaProduto.css";

export default (props) => {
  const produtosBody = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {produto.preco}</td>
      </tr>
    );
  });

  return (
    <div className="content-table">
      <table
        style={{
          marginTop: 0,
          marginRight: "auto",
          marginBottom: 0,
          marginLeft: "auto",
        }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{produtosBody}</tbody>
      </table>
    </div>
  );
};
