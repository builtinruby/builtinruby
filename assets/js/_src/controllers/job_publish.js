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

  githubNewIssuePath(params = {}) {
    const { title, body } = {
      title: encodeURI(params.title),
      body: encodeURI(params.body).replace(/#/g, '%23')
    };

    return `https://github.com/builtinruby/builtinruby/issues/new?title=${title}&labels=job-publish&assignees=ThePublisherBot&body=${body}`;
  }

  renderJobTemplate(params = {}) {
    return `
\`\`\`
---
_id: ${params._id}
layout: jobs
posted_at: ${params.postedAt}
title: ${params.title}
company: ${params.company}
role: ${params.role}
level: ${params.level}
location: ${params.location}
employment_term: ${params.employment_term}
pay_rate: ${params.pay_rate}
website: ${params.website}
status: searching
tags:
  - ${params.tags.join('\n  - ')}
---

## Descrição da Vaga

${params.description}

## Requisitos

${params.requirements}

## Benefícios

${params.benefits}

## Como se candidatar?

${params.how_to_apply}
\`\`\`
    `;
  }

  onSubmit(event) {
    event.preventDefault();
    const { DateTime } = luxon;

    const params = this.getJobParams();
    console.log(params);

    const title = `${params.role} na ${params.company}`;
    const body = this.renderJobTemplate({
      _id: uuidv4(),
      postedAt: DateTime.local().toISODate(),
      title,
      ...params
    });

    document.location.href = this.githubNewIssuePath({ title, body });
  }
}

App.Controllers.register('jobs#publish', JobPublishController);
