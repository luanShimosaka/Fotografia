import React from "react";
import perfil from "../assets/perfil.jpg";
import instagram from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";
import mail from "../assets/mail.png";
import localizacao from "../assets/localizacao.png";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer>
      <div>
        <Link href="./Orcamento"></Link>
      </div>
      <div>{/* <Image src={perfil.src} alt="Perfil" /> */}</div>
      <div>
        {/* <Link href="https://www.instagram.com/luan_shimosaka/">
          <Image src={instagram.src} alt="Instagram Icon" />
        </Link> */}
        {/* <Link href="https://api.whatsapp.com/send?phone=5535997383311">
          <Image src={whatsapp.src} alt="Whatsapp Icon" />
        </Link>
        <Link href="mailto:">
          <Image src={mail.src} alt="Mail Icon" />
        </Link>
        <Link href="https://www.google.com/maps/place/lavras/data=!4m2!3m1!1s0x9ffd8039b103f9:0x39e3fcfba35cb1f3?sa=X&ved=1t:242&ictx=111">
          <Image src={localizacao.src} alt="Localizacao Icon" />
        </Link> */}
      </div>
      <div></div>
      <div>
        <Link href="./Home">
          <Image src={logo.src} alt="Logo" />
        </Link>
      </div>
      <div>
        <Link href="./"> Início </Link>
        <Link href="./Sobre"> Sobre Mim </Link>
        <Link href="./Portfolio"> Portfólio </Link>
      </div>
      <div>
        <p> Copyright © 2025 </p>
      </div>
    </footer>
  );
}
