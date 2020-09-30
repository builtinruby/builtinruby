class JobPublishController extends BaseController {
  start(){
    this.onMount();

    this.form = document.getElementById('job-publish-form');
    this.form.addEventListener('submit', this.onSubmit.bind(this));
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

  getJobParams() {
    const form = this.form;
    // const tagList = form.tags.value.split(';');

    return {
      role: form.role.value || '',
      company: form.company.value || '',
      level: form.level.value || '',
      location: form.location.value || '',
      employment_term: form.employment_term.value || '',
      pay_rate: form.pay_rate.value || '',
      website: form.website.value || '',
      tags: form.tags.value.split(/\s*;\s*/),
      description: form.description.value || '',
      requirements: form.requirements.value || '',
      benefits: form.benefits.value || '',
      how_to_apply: form.how_to_apply.value || '',
    };
  }

  onSubmit(event) {
    event.preventDefault();

    const params = this.getJobParams();
    const title = `${params.role} na ${params.company}`;

    axios({
      method: 'post',
      url: `${App.config.resource}/jobs`,
      data: { ...params, title },
      withCredentials: true,
    })
      .then((response) => {
        alert('Sua vaga foi registrada com sucesso... muito obrigado!');
      })
      .catch((error) => {
        alert('Não foi possível cadastrar sua vaga! =(');
      });
  }
}

App.Controllers.register('jobs#publish', JobPublishController);
