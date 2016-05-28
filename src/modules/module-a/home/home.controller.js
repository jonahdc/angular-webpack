export default class HomeController {
  constructor(randomNames) {
    this.random = randomNames;
    this.name = 'world';
  }

  changeName(){
    this.name = 'angular-tips';
  }


  randomName() {
    this.name = this.random.getName();
  }
}

HomeController.$inject = ['randomNames'];
