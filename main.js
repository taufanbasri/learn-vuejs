Vue.component('task-list', {
  template: '<div><task v-for="task in tasks">{{ task.task }}</task></div>',

  data() {
    return {
      tasks: [
        { task: 'Reciting Quran', completed: true },
        { task: 'Read Quran', completed: false },
        { task: 'Memorize Quran', completed: true },
        { task: 'Go to Market', completed: false },
        { task: 'Play Footbal', completed: false }
      ]
    }
  }
});

Vue.component('task', {
  template: '<li><slot></slot></li>'
});

new Vue({
  el: '#root'
});