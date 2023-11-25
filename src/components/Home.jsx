import React from "react";
import home from "../assets/home.png";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <h1 className="title">Um aplicativo de saúde mental único em sua categoria</h1>
          <p className="description">
  O nosso novo aplicativo de saúde mental já está no ar! Inscreva-se abaixo para receber atualizações e aproveitar todos os recursos disponíveis.
</p>

        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;