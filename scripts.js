var AnimalTestUser = function(username) {
  var argLen = arguments.length;
  var otherArgs = [];
  
    if (argLen > 1) {
      for (var i = 1; i < argLen; i++) {
        otherArgs.push(arguments[i]);
      }
    }
    
    return {
      username: username,
      otherArgs: otherArgs
    };
};

var AnimalCreator = function(username, species, tagline, noises) {
  return {
    username: username,
    species: species,
    noises: noises,
    tagline: tagline,
    friends: []
  };  
};

var testSheep = AnimalTestUser('Cottonball', {'loves dancing' : true}, [1,2,3]);

var cow = AnimalCreator('MooBets', 'mammel', "I'm a cool cow", ['moo', 'cluck']);

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['bahh', 'argg', 'chewchew']);

var llama = AnimalCreator('FurBall', 'llama', 'You can lay on me!', ['ahh', 'thumpthump']);

var addFriend = function(animal, friend) {
  animal.friends.push(friend);
};
addFriend(sheep, cow);
addFriend(sheep, llama);

var myFarm = [cow, sheep, llama];
addFriend(myFarm[0], sheep);
addFriend(myFarm[2], cow);

var addMatchesArray = function(animalFarm) {
  for (var i = 0; i < animalFarm.length; i++) {
    animalFarm[i].matches = [];
  }
};

addMatchesArray(myFarm);

var giveMatches = function(animalFarm) {
  for (var i = 0; i < animalFarm.length; i++) {
    var animal = animalFarm[i];
    if (animal.friends.length > 0) {
      animal.matches.push(animal.friends[0]);
    }
  }
};

giveMatches(myFarm);
console.log(myFarm);
console.log(myFarm[0].matches[0]);
