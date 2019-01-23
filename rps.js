let con = document.getElementById("Results");
let user = document.getElementById("User");
let score = document.getElementById("Scoreboard");

const list_name = ["Rock","Paper","Scissors","Lizard","Spock"];
const list = [0b00110, 0b10001, 0b01010, 0b01001, 0b10100];

let Roll = function() {
    let npc = Math.floor(Math.random() * list.length);

    if(list[Number(user.value)] & (1 << (4-npc))) {
        con.textContent = "You Win! "
                        + list_name[Number(user.value)]
                        + " beats " + list_name[npc] + "!";
    } else {
        con.textContent = "You Lose! "
                        + list_name[Number(user.value)]
                        + " is beaten by " + list_name[npc] + "!";

    }
}