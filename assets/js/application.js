---
---

const global = window;
const App = global.App || {
  config: {
    debug: true,
  }
};

{% include_relative _src/initializers.js %}
{% include_relative _src/controllers.js %}

window.addEventListener('DOMContentLoaded', () => {
  App.setup()

  try {
    App.Controllers.bootstrap();
  }
  catch (error) {
    console.error(error);
  }
});

window.App = App;
