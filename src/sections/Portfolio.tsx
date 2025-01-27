import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section>
      <h1> Portfólio </h1>
      <div>
        <h2> Gastronoima </h2>
        <Link href="/portfolio/gastronomia"> Ver mais </Link>
        <Image src="/gastronomia.jpg" alt="Gastronomia" />
      </div>
      <div>
        <h2> Ensaios </h2>
        <Link href="/portfolio/ensaios"> Ver mais </Link>
        <Image src="/ensaios.jpg" alt="Ensaios" />
      </div>
      <div>
        <h2> Eventos </h2>
        <Link href="/portfolio/eventos"> Ver mais </Link>
        <Image src="/eventos.jpg" alt="Eventos" />
      </div>
      <div>
        <h2> Produtos </h2>
        <Link href="/portfolio/produtos"> Ver mais </Link>
        <Image src="/produtos.jpg" alt="Produtos" />
      </div>
    </section>
  );
}
