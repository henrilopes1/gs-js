import React from "react";
import logo from "../assets/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  const links = [
    {
      title: "Sobre",
      data: ["Sobre nós", "Termos", "Legal"],
    },
    {
      title: "Contato",
      data: ["Localizaçao", "Suporte"],
    },
    {
      title: "Social",
      data: ["Twitter", "Instagram","Facebook", "Tiktok"], 
    },
  ];
  const socialLink = [
    <BsFacebook />,
    <BsTwitter />,
    <BsInstagram />,
    <FaTiktok />,
  ];

  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <p>Empowering Minds, Enhancing Well-being</p>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright {new Date().getFullYear()} MindWell</span>
      </div>
    </footer>
  );
}

export default Footer;
