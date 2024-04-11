
const tasks = [
  { category: 'work', subCategory: 'meeting', duration: '1 hour', task: 'Discuss project progress' },
    { category: 'work', subCategory: 'project', duration: '2 hours', task: 'Develop new feature' },
    { category: 'work', subCategory: 'meeting', duration: '1.5 hours', task: 'Team meeting' },
    { category: 'work', subCategory: 'project', duration: '3 hours', task: 'Testing phase' },
    { category: 'work', subCategory: 'meeting', duration: '1 hour', task: 'Client meeting' },
    { category: 'personal', subCategory: 'project', duration: '2 hours', task: 'Project completion' },
    { category: 'personal', subCategory: 'project', duration: '1.5 hours', task: 'Meeting' },
    { category: 'personal', subCategory: 'meeting', duration: '1 hour', task: 'Mentoring' },
    { category: 'personal', subCategory: 'project', duration: '3 hours', task: 'Reading' },
    { category: 'personal', subCategory: 'meeting', duration: '1.5 hours', task:'project 2' }
  ];

  function filterTasks() {
    const filterValue = document.getElementById('filterSelect').value;
    const filteredTasks = filterValue === 'all' ? tasks : tasks.filter(task => task.category === filterValue);
    renderTasks(filteredTasks);
  }

  function renderTasks(tasksArray) {
  const tbody = document.getElementById('taskTableBody');
  tbody.innerHTML = '';
  tasksArray.forEach(task => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${task.category}</td>
      <td>${task.subCategory}</td>
      <td>${task.duration}</td>
      <td>${task.task}</td>
    `;
    tbody.appendChild(row);
  });
}


renderTasks(tasks);


function addTask(event) {
  event.preventDefault(); 

  
  const category = document.getElementById('category').value;
  const subCategory = document.getElementById('subCategory').value;
  const duration = document.getElementById('duration').value;
  const task = document.getElementById('task').value;

 
  const newTask = {
    category: category,
    subCategory: subCategory,
    duration: duration,
    task: task
  };


  tasks.push(newTask);


  renderTasks(tasks);

  document.getElementById('category').value = 'work';
  document.getElementById('subCategory').value = 'subWork';
  document.getElementById('duration').value = '00:00:00';
  document.getElementById('task').value = '';
}

document.getElementById('taskForm').addEventListener('submit', addTask);

