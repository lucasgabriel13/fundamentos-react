import React from "react";

export default (props) => {
  const callback = props.quandoClicar
  const gerarIdade =()=> parseInt(Math.random()* (20)) + 50;
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={_=>callback('Joao',gerarIdade(),true)}
      >
        Fornecer Informações
      </button>
    </div>
  );
};
