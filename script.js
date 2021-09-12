// Desenvolvido por Cel.lep Tech
$(document).ready(function(){
  $('#loginAluno').submit(function(evento){
    var usuario = $('#inputUsuario').val()
    var senha = $('#inputSenha').val()
    if(usuario == 'root' && senha == '1234'){
      $('#mensagem').addClass("alert alert-success alert-dismissible fade show")
      $('#mensagem').removeClass('alert-warning')
      $('#mensagem').text("Usuário Logado!").show().fadeOut(3000)
    } else {
      $('#mensagem').addClass("alert alert-warning alert-dismissible fade show")
      $('#mensagem').removeClass('alert-success')
      $('#mensagem').text("Usuário ou senha inválida").show().fadeOut(3000)
      evento.preventdeFault() // bloqueia o evento do submit
    }
  })

})