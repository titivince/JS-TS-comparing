class user {
  id: number;
  name: string;
  constructor ( id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  hello() {
    return console.log("hello " + this.name + ". You are the " + this.id + " user");
  }
}
var intro = new user(1,"Jhon");
intro.hello();