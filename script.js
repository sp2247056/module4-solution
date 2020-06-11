(function () {
   var names = ["Utkarsh", "Jatin", "Jnelia", "Jassu", "Prince", "raj", "raushan", "simran", "sunaina", "kanika"];
   for (var name in names) {
      var firstLetter = names[name].charAt(0).toLowerCase();
       if (firstLetter === 'j') {
          byeSpeaker.speak(names[name]);
  } else {
    helloSpeaker.speak(names[name]);
  }
}

})();
