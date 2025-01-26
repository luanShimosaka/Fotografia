import React from "react";
import Header from "../components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Header />
      <div>
        <h1> Início </h1>
        <h2> Seja bem-vindo ao meu site! </h2>
        <p>
          Meu nome é Luan Shimosaka, tenho 20 anos e sou estudante de Análise e
          Desenvolvimento de Sistemas. Atualmente, estou cursando o 4º período
          na Universidade Federal de Lavras. Sou apaixonado por tecnologia e
          programação, e estou sempre em busca de novos conhecimentos. No meu
          tempo livre, gosto de jogar e assistir animes.
        </p>
      </div>
      <Image src="/perfil.jpg" alt="Perfil" />
    </section>
  );
}
