let con = document.getElementById("Results");
let user = document.getElementById("User");
let score = document.getElementById("Scoreboard");

const list_name = ["Rock","Paper","Scissors","Lizard","Spock"];
const list_wins = [0b00110, 0b10001, 0b01010, 0b01001, 0b10100];

let RPSLS = function() {
    let npc = Math.floor(Math.random() * 5);
    let usr = Number(user.value);

    if(usr === npc) {
        con.textContent = "Draw! Both sides chose " + list_name[usr] + "!";
        return;
    }

    if(list_wins[usr] & (1 << (4-npc))) {
        con.textContent = "You Win! "
                        + list_name[usr]
                        + " beats " + list_name[npc] + "!";
    } else {
        con.textContent = "You Lose! "
                        + list_name[usr]
                        + " is beaten by " + list_name[npc] + "!";

    }
}