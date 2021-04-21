function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}


Animal.prototype.say = function () {
  console.log(this.sound);
}


Animal.prototype.sharedValue = 1;

const cat = new Animal('고양이', '소다', '야옹');
const dog = new Animal('강아지', '바둑이', '멍멍');


cat.sharedValue
dog.sharedValue


cat.say = say;
dog.say = say;

cat.say();
dog.say();