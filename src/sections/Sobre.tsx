import React from "react";
import Image from "next/image";
import montagemSobreMim from "../assets/montagemSobreMim.png";

export default function Sobre() {
  return (
    <section>
      <div>
        <h1> Sobre Mim </h1>
        <h2> Muito prazer, me chamo Luan Shimosaka </h2>
        <p>
          Meu nome é Luan Shimosaka, tenho 20 anos e sou estudante de Análise e
          Desenvolvimento de Sistemas. Atualmente, estou cursando o 4º período
          na Universidade Federal de Lavras. Sou apaixonado por tecnologia e
          programação, e estou sempre em busca de novos conhecimentos. No meu
          tempo livre, gosto de jogar e assistir animes.
        </p>
      </div>
      <Image src={montagemSobreMim.src} alt="Fotos Sobre Mim" />
    </section>
  );
}
