function selecionarComida(opcao) {
    const opcaoAnterior = document.querySelector('.prato.selecionado')
    
    if(!!opcaoAnterior) {
        opcaoAnterior.classList.remove('selecionado');
    }
    
    opcao.classList.add("selecionado");

    habilitaBotaoDeFinalizarCompraSePermitido();
}

function selecionarBebida(opcao) {
    const opcaoAnterior = document.querySelector('.bebida.selecionado')
    
    if(!!opcaoAnterior) {
        opcaoAnterior.classList.remove('selecionado');
    }

    opcao.classList.add("selecionado");

    habilitaBotaoDeFinalizarCompraSePermitido();

}

function selecionarSobremesa(opcao) {
    const opcaoAnterior = document.querySelector('.sobremesa.selecionado')
    
    if(!!opcaoAnterior) {
        opcaoAnterior.classList.remove('selecionado');
    }

    opcao.classList.add("selecionado");

    habilitaBotaoDeFinalizarCompraSePermitido();
}

function habilitaBotaoDeFinalizarCompraSePermitido() {
    const possuiTodasOpcoesObrigatoriasSelecionadas = document.querySelectorAll('.selecionado').length == 3;

    if(possuiTodasOpcoesObrigatoriasSelecionadas) {
        ativarBotaoDeFinalizarCompra();
    }
}

function ativarBotaoDeFinalizarCompra() {
    const botao = document.querySelector('button');
    botao.classList.add('fundo-verde')
    botao.innerText = 'Fechar pedido'
}