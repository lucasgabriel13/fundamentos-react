import React from "react";

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaDeProdutos from "./components/repeticao/TabelaDeProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Primeiro from "./components/basicos/Primeiro";
import Situacao from "./components/basicos/Situacao";
import ComParamentro from "./components/basicos/ComParamentro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

import "./App.css";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#13 - Mega" color="#B9006E">
        <Mega qtde={8}/>
      </Card>
      <Card titulo="#12 - Contador" color="#424242">
        <Contador numeroInicial={10} />
      </Card>
      <Card titulo="#11 - Componente Controlado" color="#E45F56">
        <Input></Input>
      </Card>
      <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
        <IndiretaPai></IndiretaPai>
      </Card>
      <Card titulo="#09 - Comunicação Direta" color="#59323C">
        <DiretaPai />
      </Card>
      <Card titulo="#08 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={20} />
        <UsuarioInfo usuario={{ nome: "Fernando" }} />
        <UsuarioInfo usuario={{}} />
      </Card>
      <Card titulo="#07 - Tabela de Produtos" color="#3A9AD9">
        <TabelaDeProdutos />
      </Card>

      <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAlunos />
      </Card>

      <Card titulo="#05 - Componentes com filhos" color="#00C8F8">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>
      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio min={2} max={25} />
      </Card>
      <Card titulo="#03 - Situação" color="#FC5AD0">
        <Situacao nome="Lucas" nota={9.2} />
      </Card>

      <Card titulo="#02 - Com Paramentro" color="#E94C6F">
        <ComParamentro titulo="Ola" subtitulo="Mundo!" />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#E8B71A">
        <Primeiro />
      </Card>
    </div>
  </div>
);
