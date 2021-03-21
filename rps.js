const con = document.getElementById("Results");
const score = document.getElementById("Scoreboard");
let score_usr = 0;
let score_npc = 0;

const roster = {
  "Rock":     0b00110,
  "Paper":    0b10001,
  "Scissors": 0b01010,
  "Lizard":   0b01001,
  "Spock":    0b10100
};

document.querySelectorAll("button").forEach(b => {
  b.addEventListener("click", () => {
    RPSLS(b.textContent);
  });
});

//                R  P  C  L  S
const keycodes = [82,80,67,76,83];
window.addEventListener("keydown", k => {
  let n = keycodes.indexOf(k.keyCode);
  if(n>=0) RPSLS(n);
});


function RPSLS( usr ) {
  let npc = Math.floor(Math.random() * 5);

  if(Object.keys(roster).indexOf(usr) === npc) {
    con.textContent = `Draw! Both sides chose ${usr}!`;
    return;
  }

  if(roster[usr] & (16 >> npc)) {
    con.textContent = `You Win! ${usr} beats ${Object.keys(roster)[npc]}!`;
    score_usr++;
  } else {
    con.textContent = "You Lose! "
                    + `${usr} is beaten by ${Object.keys(roster)[npc]}!`;
    score_npc++;
  }

  score.innerHTML = `Score:<br />Player: ${score_usr.toString()}`
                  + ` NPC: ${score_npc.toString()}`;
}
