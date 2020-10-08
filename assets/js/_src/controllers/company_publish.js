class CompanyPublishController extends BaseController {
  start(){
    this.onMount();

    this.form = document.getElementById('conpany-publish-form');
    this.form.addEventListener('ajax:success', function(event) {
      alert('Obrigado! Sua empresa foi cadastrada e deverá estar publicada em alguns instantes!');
      console.log(event);
    });

    this.form.addEventListener('ajax:error', function(event) {
      alert('Não salvar o cadastro da empresa... desculpe!');
      console.error(event);
    });
  }

  onMount() {
    tail.writer('textarea', {
      debug: false,
      disabled: false,
      doubleLineBreak: false,
      fullscreenParent: document.body,
      indentTab: false,
      indentSize: 2,
      locale: "pt_BR",
      preventBindings: false,
      previewConverter: null,
      readonly: false,
      resize: true,
      statusbar: true,
      toolbar: 'minimal',
      toolbarMultiLine: false,
      toolbarScrollable: true,
      tooltip: "top",
      width: "100%"
    });
  }
}

App.Controllers.register('companies#publish', CompanyPublishController);
