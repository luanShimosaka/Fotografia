import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header>
      <img src={logo.src} alt="Logo" />
      <div>
        <Link href="./"> Início </Link>
        <Link href="./Sobre"> Sobre Mim </Link>
        <Link href="./Portfolio"> Portfólio </Link>
        <Link href="./Orcamento"> Orçamento </Link>
      </div>
    </header>
  );
}
