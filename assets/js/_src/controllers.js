
class BaseController {
  constructor(){}

  start(){
    this.onMount();
  }

  onMount(){
  }
}

App.Controllers = {
  register(name, controller) {
    this.controllers = { ...this.controllers, [name]: controller };
    return [name, controller];
  },

  bootstrap() {
    const key = document.body.getAttribute('data-controller') || null;
    const Controller = this.controllers[key] || null;

    if (!Controller.prototype instanceof BaseController) throw new Error('Empty Controller');

    return new Controller().start();
  }
};

{% include_relative _src/controllers/job_publish.js %}
{% include_relative _src/controllers/company_publish.js %}
