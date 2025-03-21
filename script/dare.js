if (!localStorage.getItem("Dares")) {
    const predefinedDares = [
        { id: "1", question: "Do 10 push-ups right now!" },
        { id: "2", question: "Send a voice note of you singing your favorite song to your last chat." },
        { id: "3", question: "Let the person next to you post anything they want on your social media." },
        { id: "4", question: "Eat a spoonful of salt or sugar." },
        { id: "5", question: "Text your crush and say you love them." },
        { id: "6", question: "Speak in an accent for the next 10 minutes." },
        { id: "7", question: "Do a TikTok dance (even if you don’t know how)." },
        { id: "8", question: "Let someone draw something on your face with a marker." },
        { id: "9", question: "Wear socks on your hands for the next 5 minutes." },
        { id: "10", question: "Try to lick your elbow and don’t stop until you succeed." },
        { id: "11", question: "Post ‘I’m secretly a lizard’ on your social media." },
        { id: "12", question: "Let someone redo your hairstyle however they want." },
        { id: "13", question: "Call your mom and tell her you can’t find your phone." },
        { id: "14", question: "Do your best impression of a celebrity for 1 minute." },
        { id: "15", question: "Talk in a whisper for the next 5 minutes." },
        { id: "16", question: "Dance like a chicken until your next turn." },
        { id: "17", question: "Let the group make a funny Instagram story on your account." },
        { id: "18", question: "Balance a spoon on your nose for 10 seconds." },
        { id: "19", question: "Give someone in the group your phone and let them send one text to anyone." },
        { id: "20", question: "Eat a piece of food without using your hands." },
        { id: "21", question: "Make a weird face and keep it for 2 minutes." },
        { id: "22", question: "Let someone tickle you for 30 seconds." },
        { id: "23", question: "Speak only in rhymes for the next 5 minutes." },
        { id: "24", question: "Wear your shirt inside out for the rest of the game." },
        { id: "25", question: "Let someone else write a status update on your phone." }
    ];

    localStorage.setItem("Dares", JSON.stringify(predefinedDares));
}

function getRandomDare() {
    let dares = JSON.parse(localStorage.getItem("Dares"));
    let randomIndex = Math.floor(Math.random() * dares.length);
    return dares[randomIndex].question;
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".question").textContent = getRandomDare();
});
