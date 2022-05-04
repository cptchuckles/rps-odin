/*
 * Rock Paper Scissors (Lizard Spock)
 * Project by J C Gollnick (github.com/cptchuckles/rps-odin)
 */

const round_results_dom = document.getElementById("Results");
const score_player_dom = document.getElementById("player-score");
const score_npc_dom = document.getElementById("npc-score");
let score_player = 0;
let score_npc = 0;

const beaten_by = {
	"Rock":     ["Scissors", "Lizard"],
	"Paper":    ["Rock", "Spock"],
	"Scissors": ["Paper", "Lizard"],
	"Lizard":   ["Paper", "Spock"],
	"Spock":    ["Rock", "Scissors"]
};

const verbs = {
	"Rock beats Scissors":   {"winner": "smashes",     "loser": "is smashed by"},
	"Scissors beats Lizard": {"winner": "decapitates", "loser": "is decapitated by"},
	"Lizard beats Spock":    {"winner": "poisons",     "loser": "is poisoned by"},
	"Spock beats Rock":      {"winner": "vaporizes",   "loser": "is vaporized by"},
	"Rock beats Lizard":     {"winner": "crushes",     "loser": "is crushed by"},
	"Lizard beats Paper":    {"winner": "eats",        "loser": "is eaten by"},
	"Paper beats Spock":     {"winner": "disproves",   "loser": "is disproven by"},
	"Spock beats Scissors":  {"winner": "breaks",      "loser": "is broken by"},
	"Scissors beats Paper":  {"winner": "cuts",        "loser": "is cut by"},
	"Paper beats Rock":      {"winner": "covers",      "loser": "is covered by"}
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

// Keycodes for:  R  P  C  L  S
const keycodes = [82,80,67,76,83];
window.addEventListener("keydown", k => {
	const n = keycodes.indexOf(k.keyCode);
	if(n>=0) {
		const hero = Object.keys(beaten_by)[n];
		PlayRound(hero);
	}
});


/*
 * Game logic
 * (there is no set amount of rounds; the player just keeps going until bored)
 */

function PlayRound( player ) {
	const rng = Math.floor(Math.random() * 5)
	const npc = Object.keys(beaten_by)[rng]; //This is the only line that doesn't look like pidgin english and i'm mad.

	if( player === npc ) {
		round_results_dom.textContent = `Draw! Both sides chose ${player}!`;
		return;
	}

	if( beaten_by[player].includes(npc) ) {
		score_player++;

		const verb = verbs[`${player} beats ${npc}`];
		round_results_dom.textContent = `You Win! ${player} ${verb["winner"]} ${npc}!`;
		score_player_dom.textContent = String(score_player);
	}
	else {
		score_npc++;

		const verb = verbs[`${npc} beats ${player}`];
		round_results_dom.textContent = `You Lose! ${player} ${verb["loser"]} ${npc}!`;
		score_npc_dom.textContent = String(score_npc);
	}
}
