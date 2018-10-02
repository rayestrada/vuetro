// Array of tasks
var tasksdata = [
  {
    title: 'Load the washer',
    time: 0.25
  },
  {
    title: 'Move clothes to the dryer',
    time: 0.5
  },
  {
    title: 'Empty dryer and fold clothes',
    time: 1
  }
];

// Initalizes a vue component and properties
Vue.component('heading', {
  template: `<div>
    <h1>{{ hello }}</h1>
    <input class="form-control" type="text" v-model="hello"/>
  </div>`,

  data: function () {
    return {
      hello: 'Hello World!'
    }
  }
});

// Initalizes the vue instance and properties
var app = new Vue({
  el: '#app',

  data: {
    tasks: tasksdata
  },

  methods: {
    // Calculates total time from tasks object property
    totalTime: function (tasks) {
      var total = 0;
      var i;

      for (i = 0; i < tasks.length; i++) {
        total = total + tasks[i].time;
      }
      return total;
    }
  }
});
