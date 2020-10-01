---
---

const global = window;
const App = global.App || {
  config: {
    debug: true,
    resource: '{{ site.resources.api }}',
  }
};

{% include_relative _src/initializers.js %}
{% include_relative _src/controllers.js %}

document.addEventListener('turbolinks:load', () => {
  App.setup()

  try {
    App.Controllers.bootstrap();
  }
  catch (error) {
    console.error(error);
  }
});

window.App = App;
