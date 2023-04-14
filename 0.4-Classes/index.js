//class

class Task {
  constructor(title){
    this.title = title;
    this.completed = false;
  }
}

const tarea = new Task('Esta es una tarea');
console.log(tarea);

const ListTasks = class {
  constructor(){
    this.tasks = [
      {
        title: 'tareas 1',
        completed: false
      },
      {
        title: 'tareas 2',
        completed: true
      },
      {
        title: 'tareas 3',
        completed: false
      }
    ];
  }

  //getters
  get completed(){
    return [...this.tasks].filter(t => t.completed);
  }
  get uncompleted(){
    return [...this.tasks].filter(t => !t.completed);
  }

  set addTask(task){
    this.tasks.push(task);
  }

  // metodos
  searchTask(task){
    return this.tasks.find(t =>  t.title.includes(task))
  }

  // metodos estaticos
  static titleCapitalize(title){
    title = title.trim();
    return title.charAt(0).toUpperCase() + title.substring(1);
  }
}

const tarea2 = new ListTasks();
console.log(tarea2.completed);

const tarea3 = new Task("Tarea 4");
tarea2.addTask = {...tarea3};
console.log(tarea2);

console.log(tarea2.searchTask('1'))
console.log(ListTasks.titleCapitalize('  tarea 6 '));


class Recuerdo extends Task {
  constructor(title, date){
    super(title);
    this.date = date;
  }

  tasksEnd() {
    return `${this.title} termina ${this.date}`;
  }
}

const recuerdo = new Recuerdo('Tarea 7', '2 DE MAYO');

console.log(recuerdo.tasksEnd());