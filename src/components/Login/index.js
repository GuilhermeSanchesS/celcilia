import React from "react";
import "./style.css";
import { accessUrl } from "../../spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://i.imgur.com/oQ8wguN.png"
        alt=""
      />
      <p className="text"> E fácil encontrar a melhor música que faça parte de você pois música é <br/>quando alguém dá som aos sentimentos da gente. A música é o vínculo<br/> que une a vida do espírito à vida dos sentidos. </p>
      <a href={accessUrl}>LOGIN EM CELCILIA APP</a>
    </div>
  );
}

export default Login;