import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/15720772?s=460&u=fa8ce67ba13dba106879ba7dbb2479c80aa53fcf&v=4"
          alt="Kayk Mascarenhas"
        />
        <div>
          <strong>Kayk Mascarenhas</strong>
          <span>Matematica</span>
        </div>
      </header>

      <p>
        Entusiasta matematico
        <br />
        Contas de 1+1 = 3
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
