import React from "react";
import icon from "../assets/icon.png";


function MindWell() {
  return (
    <div className="mindwell">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title-mindwell">MindWell</h2>
        </div>
        <div className="text">
        <div className="sobre-mindwell">
        <h2>
          A nossa solução inovadora oferece uma abordagem única para promover o bem-estar mental, proporcionando suporte personalizado e recursos acessíveis para uma vida mais equilibrada.
          </h2>

          <button className="button-mindwell" >Mais informaçoes</button>
        </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default MindWell;