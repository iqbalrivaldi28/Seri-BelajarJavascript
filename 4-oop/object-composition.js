class Developer {
  constructor(name) {
    this.name = name;
  }

  commitGithub() {
    console.log(`${this.name} melakukan commit pada Github!`);
  }
}

function canBuildUI(developer) {
  return {
    buildUI: () => {
      console.log(`${developer.name} dapat membuat UI Apps as Frond-end`);
    },
  };
}

function canBuilAPI(developer) {
  return {
    buildAPI: () => {
      console.log(`${developer.name} dapat membuat API Apps as Back-end`);
    },
  };
}

function canDeploy(developer) {
  return {
    deploy: () => {
      console.log(`${developer.name} dapat mendeploy Apps as DevsOps`);
    },
  };
}

function frontEndDev(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer));
}

function backEndDev(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuilAPI(developer));
}

function devOps(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canDeploy(developer));
}

function fullStackDev(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer), canBuilAPI(developer), canDeploy(developer));
}

// console.log('====================================================');
//? Inisiasi objecnya

const frontEnd = new frontEndDev('Iqbal');
frontEnd.commitGithub();
frontEnd.buildUI();

const backEnd = new backEndDev('rivaldi');
backEnd.commitGithub();
backEnd.buildAPI();

const devops = devOps('Muhammad');
devops.commitGithub();
devops.deploy();

const fullStack = new fullStackDev('Ibang');
fullStack.commitGithub;
fullStack.buildUI();
fullStack.buildAPI();
fullStack.deploy();
