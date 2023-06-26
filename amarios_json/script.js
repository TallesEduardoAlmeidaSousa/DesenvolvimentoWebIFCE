
function salvarInformacoesModificadas(armarios) {
  localStorage.setItem('armarios', JSON.stringify(armarios));
}

function carregarInformacoesIniciais() {
  var informacoesIniciais;

  if (localStorage.getItem('armarios')) {
    informacoesIniciais = JSON.parse(localStorage.getItem('armarios'));
    atualizarElementosHTML(informacoesIniciais);
  } else {
    fetch('armarios.json')
      .then(response => response.json())
      .then(data => {
        informacoesIniciais = data.armarios;
        atualizarElementosHTML(informacoesIniciais);
      })
      .catch(error => {
        console.error('Erro ao carregar o arquivo JSON:', error);
      });
  }
}

function atualizarElementosHTML(armarios) {
  armarios.forEach(function(armario) {
    var botao = document.getElementById(armario.id);
    var estadoInicial = armario.estados[0];

    botao.style.backgroundColor = estadoInicial.cor;
    botao.innerHTML = estadoInicial.estado;

    var numeroElement = document.getElementById("numero-" + armario.id);
    numeroElement.innerHTML = estadoInicial.numero;
  });
}


function mudarStatus(botao) {
  fetch('armarios.json')
    .then(response => response.json())
    .then(data => {
      var armarios = data.armarios;
      var armarioId = botao.id;
      var armario = armarios.find(function (obj) {
        return obj.id === armarioId;
      });

      if (armario) {
        var estados = armario.estados;
        var estadoAtual = botao.innerHTML;

        var estadoObj = estados.find(function (obj) {
          return obj.estado === estadoAtual;
        });

        if (estadoObj) {
          var proximoEstadoIndex = (estados.indexOf(estadoObj) + 1) % estados.length;
          var proximoEstado = estados[proximoEstadoIndex];

          botao.style.backgroundColor = proximoEstado.cor;
          botao.innerHTML = proximoEstado.estado;

          var numeroElement = document.getElementById("numero-" + botao.id);
          numeroElement.innerHTML = proximoEstado.numero;

          var informacoesModificadas = JSON.parse(localStorage.getItem('armarios'));
          var armarioModificado = informacoesModificadas.find(function (obj) {
            return obj.id === armarioId;
          });
          armarioModificado.estado = proximoEstado.estado;
          armarioModificado.cor = proximoEstado.cor;
          armarioModificado.numero = proximoEstado.numero;
          salvarInformacoesModificadas(informacoesModificadas);
        }
      }
    })
    .catch(error => {
      console.error('Erro ao carregar o arquivo JSON:', error);
    });
}

carregarInformacoesIniciais();
