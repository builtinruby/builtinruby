class JobPublishController extends BaseController {
  start(){
    this.onMount();

    this.form = document.getElementById('job-publish-form');
    this.form.addEventListener('ajax:success', function(event) {
      alert('Obrigado! Sua vaga foi enviada e estará publicada em alguns instantes!');
      console.log(event);
    });

    this.form.addEventListener('ajax:error', function(event) {
      alert('Não conseguimos publicar a sua vaga... desculpe!');
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

App.Controllers.register('jobs#publish', JobPublishController);
