function shout(string) {
    return string.toUpperCase();
  }
  // Define whisper function
function whisper(string) {
    return string.toLowerCase();
  }
  
  // Define logShout function
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // Define logWhisper function
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // Define sayHiToHeadphonedRoommate function
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  
  // Example calls (remove these when running tests)
  console.log(whisper("HELLO")); // "hello"
  logShout("hello"); // logs "HELLO"
  logWhisper("HELLO"); // logs "hello"
  console.log(sayHiToHeadphonedRoommate("hello")); // "I can't hear you!"
  console.log(sayHiToHeadphonedRoommate("HELLO")); // "YES INDEED!"
  console.log(sayHiToHeadphonedRoommate("Let's have dinner together!")); // "I would love to!"
  