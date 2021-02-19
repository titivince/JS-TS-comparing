var user = /** @class */ (function () {
    function user(id, name) {
        this.id = id;
        this.name = name;
    }
    user.prototype.hello = function () {
        return console.log("hello " + this.name + ". You are the " + this.id + " user");
    };
    return user;
}());
var intro = new user(1, "Jhon");
intro.hello();
