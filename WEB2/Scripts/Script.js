window.addEventListener('load', function() {
    produto1();
  });
  function produto1(element) {
    var tabelaProdutosCrtn = document.querySelector(".flex-prdt-crtn");
  
    if (tabelaProdutosCrtn.style.display === "block") {
      tabelaProdutosCrtn.style.display = "none";
    } else {
      tabelaProdutosCrtn.style.display = "block";
    }
    $(document).mouseup(function (e) {
      var container = $(".flex-prdt-crtn");
  
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
    });
  }
  function produto2(element) {
    var tabelaProdutosWhey = document.querySelector(".flex-prdt-whey");
  
    // Verifica se a tabela de produtos está visível e a esconde se estiver
    if (tabelaProdutosWhey.style.display === "block") {
      tabelaProdutosWhey.style.display = "none";
    } else {
      // Caso contrário, exibe a tabela de produtos
      tabelaProdutosWhey.style.display = "block";
    }
    $(document).mouseup(function (e) {
      var container = $(".flex-prdt-whey");
  
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
    });
  }
  function produto3(element) {
    var tabelaProdutosPrtn = document.querySelector(".flex-prdt-prtn");
  
    // Verifica se a tabela de produtos está visível e a esconde se estiver
    if (tabelaProdutosPrtn.style.display === "block") {
      tabelaProdutosPrtn.style.display = "none";
    } else {
      // Caso contrário, exibe a tabela de produtos
      tabelaProdutosPrtn.style.display = "block";
    }
    $(document).mouseup(function (e) {
      var container = $(".flex-prdt-prtn");
  
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
    });
  }

  