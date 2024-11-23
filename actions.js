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

function finalizarPedido() {
    const itensSelecionados = document.querySelectorAll('.selecionado');
    const naoPossuiTodasOpcoesObrigatoriasSelecionadas = itensSelecionados.length !== 3;
    
    if(naoPossuiTodasOpcoesObrigatoriasSelecionadas) return;

    const pratoSelecionado = itensSelecionados[0].children[1].innerText;
    const valorDoPratoSelecionado = itensSelecionados[0].children[3].innerText;

    const bebidaSelecionada = itensSelecionados[1].children[1].innerText;
    const valorDaBebidaSelecionada = itensSelecionados[1].children[3].innerText;

    const sobremesaSelecionada = itensSelecionados[2].children[1].innerText;
    const valorDaSobremesaSelecionada = itensSelecionados[2].children[3].innerText;

    const valorTotal = Number(valorDoPratoSelecionado) + Number(valorDaBebidaSelecionada) + Number(valorDaSobremesaSelecionada);
    
    const cortina = document.querySelector('.escondido');
    cortina.classList.remove('escondido');

    const item1 = document.querySelector('.prato-selecionado');
    const item2 = document.querySelector('.bebida-selecionada');
    const item3 = document.querySelector('.sobremesa-selecionada');
    const precoAPagar = document.querySelector('.total');

    item1.innerText = pratoSelecionado + ": " + valorDoPratoSelecionado;
    item2.innerText = bebidaSelecionada + ": " + valorDaBebidaSelecionada;
    item3.innerText = sobremesaSelecionada + ": " + valorDaSobremesaSelecionada;
    precoAPagar.innerText = 'TOTAL' + ': ' + valorTotal.toFixed(2);

    prepararLinkComMensagemDoZap(pratoSelecionado, bebidaSelecionada, sobremesaSelecionada, valorTotal.toFixed(2))
}

function fecharCortina() {
    const cortina = document.querySelector('.cortina');
    cortina.classList.add('escondido');
}

function prepararLinkComMensagemDoZap(pratoSelecionado, bebidaSelecionada, sobremesaSelecionada, valorTotal) {
    const mensagem = encodeURIComponent('Olá, gostaria de fazer o pedido:\n- Prato: ' + pratoSelecionado + '\n- Bebida: ' + bebidaSelecionada + '\n- Sobremesa: ' + sobremesaSelecionada + '\nTotal: ' + valorTotal);
    const linkWhatsApp = `https://wa.me/5521989896484/?text=${mensagem}`;
    const ancora = document.querySelector('.ancora');
    const href = document.createAttribute('href');
    href.value = linkWhatsApp;
    ancora.attributes.setNamedItem(href);
}