import React from "react";

function Etapa3() {
  return (
    <div className="App">
      <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

      <p> 5. Por que você não terminou o curso de graduação? </p>
      <br/>
      <input type="text"/>

      <label for="curso-complementar">6.Você fez algum curso complementar??:</label><br/>
      <select id="curso-complementar" name="curso-complementar">
          <option value="nenhum">Nenhum</option>
          <option value="curso-ingles">Curso de Inglês</option>
          <option value="curso-tecnico">Curso Técnico</option>
          
    </select>
      <br/><br/><br/>

     
      <br/><br/><br/>
    </div>
  );
}

export default Etapa3;