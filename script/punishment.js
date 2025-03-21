if (!localStorage.getItem("Punishments")) {
    const predefinedPunishments = [
        { id: "1", question: "Eat a raw onion like it's an apple." },
        { id: "2", question: "Drink a glass of water with salt and pepper mixed in." },
        { id: "3", question: "Let someone write 'LOSER' on your forehead with a marker." },
        { id: "4", question: "Do 50 push-ups in a row, no stopping!" },
        { id: "5", question: "Let the group decide a text you must send to your crush." },
        { id: "6", question: "Talk in baby talk for the next 10 minutes." },
        { id: "7", question: "Let someone post an embarrassing picture of you on your social media." },
        { id: "8", question: "Stand outside and yell 'I love Justin Bieber!' as loud as you can." },
        { id: "9", question: "Eat a spoonful of the spiciest sauce available." },
        { id: "10", question: "Let someone call a random contact on your phone and say 'I love you'." },
        { id: "11", question: "Hold an ice cube in your mouth until it melts completely." },
        { id: "12", question: "Spin around 20 times, then try to walk in a straight line." },
        { id: "13", question: "Do an impression of the person to your right until your next turn." },
        { id: "14", question: "Let the group choose a dare for you instead of a punishment." },
        { id: "15", question: "Do the worm dance across the room." },
        { id: "16", question: "Eat a spoonful of mustard or ketchup." },
        { id: "17", question: "Stand on one foot while singing the national anthem." },
        { id: "18", question: "Do a cartwheel (or attempt one if you can’t)." },
        { id: "19", question: "Hold a plank position for 2 minutes straight." },
        { id: "20", question: "Wear your socks on your hands for the next 10 minutes." },
        { id: "21", question: "Put an ice cube down your back and let it melt." },
        { id: "22", question: "Let someone mix five random things from the fridge and you must eat it." },
        { id: "23", question: "Do a TikTok dance and post it online." },
        { id: "24", question: "Call your crush and say 'I need to confess something... I dream about you.'" },
        { id: "25", question: "Eat a banana with ketchup on it." },
        { id: "26", question: "Talk in a robot voice for the next 10 minutes." },
        { id: "27", question: "Do 20 burpees in a row." },
        { id: "28", question: "Let the group draw something on your arm with a marker." },
        { id: "29", question: "Do your best dramatic crying scene for 1 minute." },
        { id: "30", question: "Call your mom and tell her you just got married." },
        { id: "31", question: "Let someone give you a new hairstyle for the rest of the game." },
        { id: "32", question: "Take a bite of a raw potato." },
        { id: "33", question: "Do the chicken dance in the middle of the room for a full minute." },
        { id: "34", question: "Drink a mystery drink created by the group." },
        { id: "35", question: "Wear a ridiculous outfit chosen by the group for the next hour." },
        { id: "36", question: "Let someone draw a mustache on your face with a pen." },
        { id: "37", question: "Speak in a made-up language for the next 5 minutes." },
        { id: "38", question: "Let someone go through your phone for one minute." },
        { id: "39", question: "Smell everyone’s shoes and rank them from best to worst." },
        { id: "40", question: "Let someone put makeup on you (no matter your gender)." },
        { id: "41", question: "Run outside and scream 'I love pineapple on pizza!' at the top of your lungs." },
        { id: "42", question: "Pretend to be a cat for the next 5 minutes." },
        { id: "43", question: "Let someone pour a cup of water on your head." },
        { id: "44", question: "Wear a sock on your hand like a puppet and have a conversation with it." },
        { id: "45", question: "Go live on Instagram and say something embarrassing." },
        { id: "46", question: "Let someone text your crush from your phone." },
        { id: "47", question: "Eat a clove of raw garlic." },
        { id: "48", question: "Take a picture making the ugliest face possible and set it as your profile picture." },
        { id: "49", question: "Do the moonwalk across the entire room." },
        { id: "50", question: "Send your sibling a message saying 'I know what you did...'" },
        { id: "51", question: "Wear your shoes on the wrong feet for the next round." },
        { id: "52", question: "Sing a love song to the person on your left." },
        { id: "53", question: "Lick your elbow (or at least try)." },
        { id: "54", question: "Let someone dump flour on your head." },
        { id: "55", question: "Do your best evil villain laugh for a full minute." },
        { id: "56", question: "Swap shirts with the person next to you." },
        { id: "57", question: "Talk only in questions for the next 5 minutes." },
        { id: "58", question: "Call a random number and sing 'Happy Birthday' to them." },
        { id: "59", question: "Let someone tickle you for 30 seconds." },
        { id: "60", question: "Try to sell something in the room like a TV commercial." },
        { id: "61", question: "Put a blindfold on and let the group feed you something random." },
        { id: "62", question: "Call your teacher and tell them you miss them." },
        { id: "63", question: "Do an embarrassing dance in slow motion." },
        { id: "64", question: "Try to drink a glass of water while doing a handstand." },
        { id: "65", question: "Let someone paint one of your toenails." }
    ];

    localStorage.setItem("Punishments", JSON.stringify(predefinedPunishments));
}

function getRandomPunishment() {
    let punishments = JSON.parse(localStorage.getItem("Punishments"));
    let randomIndex = Math.floor(Math.random() * punishments.length);
    return punishments[randomIndex].question;
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".question h1").textContent = getRandomPunishment();
});
