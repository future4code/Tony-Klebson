import React from "react";


function Etapa1() {
  return (
    <div className="App">
              <h1>ETAPA 1 - DADOS GERAIS</h1>
              <p> 1. Qual o seu nome? </p>
      <br/>
      <input type="text"/>

      <p> 2. Qual a sua idade? </p>
      <br/>
      <input type="text"/>

      <p> 3. Qual o seu email? </p>
      <br/>
      <input type="text"/>
      <br/>
      <br/>
      
      <label for="escolaridade">4.Qual a sua escolaridade?:</label><br/>
      <select id="escolaridade" name="escolaridade">
          <option value="Médioo incompleto">Ensino Médio Incompleto</option>
          <option value="Médio Completo">Ensino Médio completo</option>
          <option value="Superior Incompleto">Ensino Superior Incompleto</option>
          <option value="Superior Completo">Ensino Superior completo</option>
    </select>
      <br/><br/><br/>
    </div>
  );
}

export default Etapa1;
