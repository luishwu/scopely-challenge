import { Player } from "../entities/player.entity";

interface BattleResult {
    winnerId: string;
    loserId: string;
    log: string[];
}

class BattleEngine {

    constructor() {
        //Simulate some players
        const player1 = new Player('1', 'Player1', 'A brave warrior', 100, 50, 20, 10, 100);
        const player2 = new Player('2', 'Player2', 'A cunning rogue', 80, 60, 15, 12, 80);
        // Simulate a battle
        this.simulateBattle(player1, player2).then(result => {
            console.log('Battle Result:', result);
        }).catch(error => {
            console.error('Error during battle simulation:', error);
        });
    }

    public async simulateBattle(player1: Player, player2: Player): Promise<BattleResult> {
        const log: string[] = [];
        // Create mutable copies of players for battle simulation
        let combatant1 = { ...player1, currentHealth: player1.hitPoints, baseAttack: player1.attack };
        let combatant2 = { ...player2, currentHealth: player2.hitPoints, baseAttack: player2.attack };
        
        log.push(`Battle starts between ${combatant1.username} and ${combatant2.username}!`);
    
        let turn = 1;
        while (combatant1.currentHealth > 0 && combatant2.currentHealth > 0) {
            log.push(`--- Turn ${turn} ---`);

            // Attacker and Defender for the current turn
            let attacker = turn % 2 !== 0 ? combatant1 : combatant2;
            let defender = turn % 2 !== 0 ? combatant2 : combatant1;

            // Calculate current attack value based on remaining health
            const initialAttack = attacker.id === combatant1.id ? combatant1.baseAttack : combatant2.baseAttack;
            const attackerHealth = attacker.id === combatant1.id ? combatant1.hitPoints : combatant2.hitPoints;
            const healthPercentage = 1 - (attacker.currentHealth / attackerHealth);
            const currentAttack = Math.max(initialAttack * 0.5, initialAttack * healthPercentage);

            // Determine if the attack hits based on defender's defense
            const hitChance = Math.max(0.1, 1 - (defender.defense / (currentAttack + defender.defense))); // Example hit chance calculation
            const hit = Math.random() < hitChance;

            if (hit) {
                const damage = Math.round(currentAttack); // Use rounded current attack for damage
                defender.currentHealth -= damage;
                log.push(`${attacker.username} attacks ${defender.username} for ${damage} damage. ${defender.username} health: ${Math.max(0, defender.currentHealth)}`);
            } else {
                // Still decrease attacker's attack slightly on a miss, maybe a small penalty

                log.push(`${attacker.username} attacks ${defender.username} but misses!`);
            }

            // Check if the defender is defeated
            if (defender.currentHealth <= 0) {
                log.push(`${defender.username} has been defeated!`);
                break;
            }

            turn++;
        }

        let winnerId: string;
        let loserId: string;
        if (combatant1.currentHealth > 0) {
            winnerId = combatant1.id;
            loserId = combatant2.id; // Corrected to check the other combatant
            log.push(`${combatant1.username} wins!`);
        } else {
            winnerId = combatant2.id;
            loserId = combatant1.id; // Corrected to check the other combatant
            log.push(`${combatant2.username} wins!`);
        }

        //Update the user's resources
        return { winnerId, loserId, log };
    }
}

export { BattleEngine, BattleResult };