var instrumentType = "Lyre";
const notes = [
    "do",
    "re",
    "mi",
    "fa",
    "sol",
    "la",
    "si",
    "doAlt",
    "reAlt",
    "miAlt",
    "faAlt",
    "solAlt",
    "laAlt",
    "siAlt",
    "doBass",
    "reBass",
    "miBass",
    "faBass",
    "solBass",
    "laBass",
    "siBass"
];
var buttons = [];
//Initialize key note index pair
var noteMap = {
    "q": 0,
    "w": 1,
    "e": 2,
    "r": 3,
    "t": 4,
    "y": 5,
    "u": 6,
    "a": 7,
    "s": 8,
    "d": 9,
    "f": 10,
    "g": 11,
    "h": 12,
    "j": 13,
    "z": 14,
    "x": 15,
    "c": 16,
    "v": 17,
    "b": 18,
    "n": 19,
    "m": 20
};
const noteAudio = new Map();
main();
function main() {
    loadAudio();
    initButtons();
    setupUserAction();
}
function loadAudio() {
    notes.forEach((val)=>{
        noteAudio.set(val, new Audio("../static/Assets/Audio/" + instrumentType + "/" + val + ".mp3"));
    });
}
//Initialize buttons
function initButtons() {
    notes.forEach((val, i)=>{
        buttons[i] = document.getElementById(val);
        buttons[i].addEventListener("click", async function() {
            const audio = noteAudio.get(val);
            audio.currentTime = 0;
            audio.play();
        });
    });
}
function setupUserAction() {
    //Keyboard events
    document.body.addEventListener("keydown", (e)=>{
        var key = e.key.toLowerCase();
        const currentButton = noteMap[key];
        if (!currentButton) return;
        buttons[currentButton].click(); //click the button
        buttons[currentButton].classList.add("activeButton");
    });
    document.body.addEventListener("keyup", (e)=>{
        var key = e.key.toLowerCase();
        const currentButton = noteMap[key];
        if (!currentButton) return;
        buttons[currentButton].classList.remove("activeButton");
    });
}

//# sourceMappingURL=index.ee9c73fc.js.map
