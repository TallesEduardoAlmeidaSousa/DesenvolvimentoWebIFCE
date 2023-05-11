function mudarStatus(botao) {
  
    if (botao.innerHTML === "OCUPADO") {
        botao.style.backgroundColor = "rgb(228, 228, 0)";
        botao.innerHTML = "EM MANUTENÇÃO";
      } else if (botao.innerHTML === "EM MANUTENÇÃO") {
        botao.style.backgroundColor = "rgb(0, 255, 64)";
        botao.innerHTML = "DESOCUPADO";
      } else {
        botao.style.backgroundColor = "rgb(221, 0, 0)";
        botao.innerHTML = "OCUPADO";
      }
    }
    
    
    if (botao.innerHTML === "EM MANUTENÇÃO") {
        botao.style.backgroundColor = "yellow";
        botao.innerHTML = "EM MANUTENÇÃO";
      } else if (botao.innerHTML === "EM MANUTENÇÃO") {
     
        botao.style.backgroundColor = "green";
        botao.innerHTML = "DESOCUPADO";
      } else {
        botao.style.backgroundColor = "red";
        botao.innerHTML = "OCUPADO";
      }
     

    if (botao.innerHTML === "DESOCUPADO") {
        botao.style.backgroundColor = "yellow";
        botao.innerHTML = "EM MANUTENÇÃO";
      } else if (botao.innerHTML === "EM MANUTENÇÃO") {
        botao.style.backgroundColor = "green";
        botao.innerHTML = "DESOCUPADO";
      } else {
        botao.style.backgroundColor = "red";
        botao.innerHTML = "OCUPADO";
      }
    
     