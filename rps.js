/*
 * Rock Paper Scissors (Lizard Spock)
 * Project by J C Gollnick (github.com/cptchuckles/rps-odin)
 */

const round_results_dom = document.getElementById("Results");
const score_player_dom = document.getElementById("player-score");
const score_npc_dom = document.getElementById("npc-score");
let score_player = 0;
let score_npc = 0;

const heroes = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

const beaten_by = {
	"Rock":     ["Scissors", "Lizard"],
	"Paper":    ["Rock", "Spock"],
	"Scissors": ["Paper", "Lizard"],
	"Lizard":   ["Paper", "Spock"],
	"Spock":    ["Rock", "Scissors"]
};

const verbs = {
	"Rock beats Scissors":   {"winner": "smashes",     "loser": "smashed"},
	"Scissors beats Lizard": {"winner": "decapitates", "loser": "decapitated"},
	"Lizard beats Spock":    {"winner": "poisons",     "loser": "poisoned"},
	"Spock beats Rock":      {"winner": "vaporizes",   "loser": "vaporized"},
	"Rock beats Lizard":     {"winner": "crushes",     "loser": "crushed"},
	"Lizard beats Paper":    {"winner": "eats",        "loser": "eaten"},
	"Paper beats Spock":     {"winner": "disproves",   "loser": "disproven"},
	"Spock beats Scissors":  {"winner": "breaks",      "loser": "broken"},
	"Scissors beats Paper":  {"winner": "cuts",        "loser": "cut"},
	"Paper beats Rock":      {"winner": "covers",      "loser": "covered"}
};


/*
 * Hook up buttons to game
 */

document.querySelectorAll("button.Hero").forEach( hero => {
	hero.addEventListener("click", () => PlayRound(hero.getAttribute("data-hero")));
});


/*
 * Enable keyboard shortcuts
 */

const keysToHeroes = {
	82: "Rock",      // R
	80: "Paper",     // P
	67: "Scissors",  // C
	76: "Lizard",    // L
	83: "Spock"      // S
};

window.addEventListener("keydown", key => {
	if(key.keyCode in keysToHeroes) {
		PlayRound(keysToHeroes[key.keyCode]);
	}
});


/*
 * Game logic
 * (there is no set amount of rounds; the player just keeps going until bored)
 */

function PlayRound( player ) {
	const rng = Math.floor(Math.random() * 5)
	const npc = heroes[rng];

	if( player === npc ) {
		round_results_dom.textContent = `Draw! Both sides chose ${player}!`;
		return;
	}

	if( beaten_by[player].includes(npc) ) {
		score_player++;
		score_player_dom.textContent = String(score_player);

		const verb = verbs[`${player} beats ${npc}`];
		round_results_dom.textContent = `You Win! ${player} ${verb.winner} ${npc}!`;
	}
	else {
		score_npc++;
		score_npc_dom.textContent = String(score_npc);

		const verb = verbs[`${npc} beats ${player}`];
		round_results_dom.textContent = `You Lose! ${player} is ${verb.loser} by ${npc}!`;
	}
}
