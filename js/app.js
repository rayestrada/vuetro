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
    <!--<input class="form-control" type="text" v-model="hello"/>-->
  </div>`,

  data: function () {
    return {
      hello: 'Your Task List'
    }
  }
});

// Initalizes a vue component and properties
Vue.component('create', {
  template: `<div class="form-inline">
    <h3>Create a new Task</h3>
    <label for="">Task Name</label>
    <input class="form-control" type="text" v-model="newtaskname" />
    <label for="">Duration</label>
    <input class="form-control" type="number" v-model="newtaskdur" step="0.25" min="0" max="6"/> hr
    <button type="submit" class="btn btn-default" v-on:click="createTheTask">Add Task</button>
  </div>`,

  data: function () {
    return {
      tasks: tasksdata,
      newtaskname: '',
      newtaskdur: ''
    }
  },

  methods: {
    createTheTask: function () {
      //validate todo
      if (!this.newtaskname || !this.newtaskdur){
        alert("Please enter a complete task!");
        return
      }

      var data = {
        title: this.newtaskname,
        time: this.newtaskdur
      };

      this.tasks.push(data);
      this.newtaskname = '';
      this.newtaskdur = '';
    }
  }
});

Vue.component('laundry', {
  template: '#laundry',

  data: function () {
    return {
      tasks: tasksdata,
      searchName: ''
    }
  },

  // provides a computed value back
  computed: {
    filterNames() {
      var self = this;
      return self.tasks.filter(function (task) {
        return task.title.toLowerCase().indexOf(self.searchName.toLowerCase()) !== -1;
      });
    }
  },

  methods: {
    // Calculates total time from tasks object property
    totalTime: function (tasks) {
      var total = 0;
      var i;

      for (i = 0; i < tasks.length; i++) {
        total = total + Number(tasks[i].time);
      }
      return total;
    }
  }
});

// Initalizes the vue instance and properties
var app = new Vue({
  el: '#app'
});
