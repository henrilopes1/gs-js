import React from "react";
import Card from "./Card";
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";



function Vantagens() {
  const data = [
    {
      image: super1,
      series:"01",
      title: "Personalização Abundante",
      text:"O MindWell oferece uma experiência personalizada, adaptando-se às necessidades individuais dos usuários para promover uma jornada de bem-estar única.",
    
      
    
    },
    {
      image: super2,
      series:"02",
      title: "Acesso Facilitado a Recursos",
      text:"Com uma variedade de recursos acessíveis, o aplicativo fornece suporte abrangente, desde técnicas de relaxamento até informações educativas sobre saúde mental.",
     
    },
    {
      image: super3,
      series:"03",
      title: "Comunidade Engajada",
      text:"O MindWell cultiva uma comunidade vibrante, conectando os usuários em busca de apoio mútuo, compartilhamento de experiências e construção de redes de suporte social.",
      
    },
  ];
  return (
    <div className="vantagens">
      <div className="title-container">
        <h2 className="title">Vantagens</h2>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, text, }) => (
          <Card
            image={image}
            series={series}
            title={title}
            text={text}
          />
        ))}
      </div>
    </div>
  );
}


export default Vantagens;