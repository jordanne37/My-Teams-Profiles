const generateManager = mananger => {
    return `
<div class="employee-cards card">
    <div class="card-header bg-primary text-black">
    <h2 class="title">${manager.getName()}</h2>
        <h3 class="card-title">${manager.getTest()} </h3>
      </div>
      <div class= "card-body">
      <ul class= "list">
      <li class= "list-item"> ID: ${manager.getId()}</li>
      <li class= "list-item"> Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
      <li class="list-item"> Office number: ${manager.getOfficeNumber()}</li
      </ul>
    </div>
</div>`;

};

const generateIntern = intern => {
    return `
<div class="employee-cards card">
    <div class="card-header bg-primary text-black">
    <h2 class="title">${intern.getName()}</h2>
        <h3 class="card-title">${intern.getTest()} </h3>
      </div>
      <div class= "card-body">
      <ul class= "list">
      <li class= "list-item"> ID: ${intern.getId()}</li>
      <li class= "list-item"> Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-item"> Office number: ${manager.getSchool()}</li
      </ul>
    </div>
</div>`;

};

const generateEngineer = engineer => {
    return `
<div class="employee-cards card">
    <div class="card-header bg-primary text-black">
    <h2 class="title">${engineer.getName()}</h2>
        <h3 class="card-title">${engineer.getTest()} </h3>
      </div>
      <div class= "card-body">
      <ul class= "list">
      <li class= "list-item"> ID: ${engineer.getId()}</li>
      <li class= "list-item"> Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-item"> Office number: ${engineer.getGithub()}</li
      </ul>
    </div>
</div>`;

};

