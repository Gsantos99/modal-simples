// Variáveis
const btnApagar = document.querySelector('#btn-apagar')
const modal = document.querySelector('dialog')
const modalBtnConfirm = document.querySelector('#confirm')
const modalBtnCancel = document.querySelector('#cancel')



// Capturo os cliques na página!
document.addEventListener('click', e => {
  const el = e.target

  if (el === btnApagar) {
    modal.showModal()
  }

  if (el === modalBtnCancel) {
    modal.close()
  }
})


function modal(tituloModal, callbackBtnConfirmar, callbackBtnCancelar) {

  if (escolhaUser) {
    callbackBtnConfirmar()
  }

  if (!escolhaUser) {
    callbackBtnCancelar()
  }
}

function confirmar() {
  alert('Arquivo excluido!')
}

function cancelar() {
  alert('Arquivo não excluido!')
}

modal('Deseja excluir o arquivo?', confirmar, cancelar)