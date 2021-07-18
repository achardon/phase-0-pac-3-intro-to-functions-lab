function shout(string) {
    return string.toUpperCase();
}

function whisper (string) {
    return string.toLowerCase ();
}

function logShout(string) {
    console.log(shout('hello'.toUpperCase()));
}

logShout('hello');

function logWhisper(string) {
    console.log(whisper('HELLO'.toLowerCase()));
}

logWhisper('HELLO');

function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) {
        return ("I can't hear you!");
    }
    if (string === string.toUpperCase()) {
        return ("YES INDEED!");
    }
    if (string === "I love you, Grandma.") {
        return ("I love you, too.");
    }
}


console.log(sayHiToGrandma('hello'));
console.log(sayHiToGrandma('HELLO'));
console.log(sayHiToGrandma('I love you, Grandma.'));