if (!localStorage.getItem("Truths")) {
    const predefinedTruths = [
        { id: "1", question: "What’s the most embarrassing thing you’ve ever Googled?" },
        { id: "2", question: "Have you ever had a crush on someone in this room?" },
        { id: "3", question: "What’s the most awkward text you’ve ever sent?" },
        { id: "4", question: "If you had to delete one app forever, which one would it be?" },
        { id: "5", question: "Have you ever faked being sick to skip school?" },
        { id: "6", question: "What’s the worst lie you’ve ever told?" },
        { id: "7", question: "Who’s your secret celebrity crush?" },
        { id: "8", question: "What’s the weirdest thing you’ve done when you were alone?" },
        { id: "9", question: "Have you ever had a near-death experience?" },
        { id: "10", question: "What’s your most cringe childhood memory?" },
        { id: "11", question: "What’s something you’ve done that you would NEVER tell your parents?" },
        { id: "12", question: "If your search history was leaked, what’s the weirdest thing people would see?" },
        { id: "13", question: "Have you ever stalked someone on social media?" },
        { id: "14", question: "What’s the dumbest thing you’ve ever believed as a kid?" },
        { id: "15", question: "If you had to swap lives with someone here for a day, who would it be and why?" },
        { id: "16", question: "Have you ever been caught doing something you shouldn’t have?" },
        { id: "17", question: "What’s the most embarrassing nickname someone has given you?" },
        { id: "18", question: "What’s your guilty pleasure song? (You HAVE to sing it!)" },
        { id: "19", question: "Have you ever been rejected? Spill the story!" },
        { id: "20", question: "What’s something childish you still do but won’t admit?" },
        { id: "21", question: "Who in this room do you think would survive a zombie apocalypse last?" },
        { id: "22", question: "If you could erase one memory from your past, what would it be?" },
        { id: "23", question: "What’s the worst thing you’ve ever done for money?" },
        { id: "24", question: "Have you ever lied about liking something just to fit in?" },
        { id: "25", question: "What’s a secret you’ve been keeping from your best friend?" }
    ];

    localStorage.setItem("Truths", JSON.stringify(predefinedTruths));
}

function getRandomTruth() {
    let truths = JSON.parse(localStorage.getItem("Truths"));
    let randomIndex = Math.floor(Math.random() * truths.length);
    return truths[randomIndex].question;
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".question").textContent = getRandomTruth();
});
