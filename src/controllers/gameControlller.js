import { HungerService } from '../services/hungerService.js';
import { EnergyService } from '../services/energyService.js';
import { HappinessService } from '../services/happinessService.js';
import { FruitNinjaController } from './fruitNinjaController.js';

export class GameController {
    constructor() {
        this.hungerService = new HungerService();
        this.energyService = new EnergyService();
        this.happinessService = new HappinessService();

        this.hungerDisplay = document.getElementById('hunger');
        this.energyDisplay = document.getElementById('energy');
        this.happinessDisplay = document.getElementById('happiness');

        this.init();
    }

    init() {
        this.hungerService.start((hunger) => {
            this.hungerDisplay.textContent = hunger;
            this.checkGameOver();
        });

        this.energyService.start((energy) => {
            this.energyDisplay.textContent = energy;
            this.checkGameOver();
        });

        this.happinessService.start((happiness) => {
            this.happinessDisplay.textContent = happiness;
            this.checkGameOver();
        });
   
        document.getElementById('feed-btn').addEventListener('click', () => {
            this.hungerService.feed();
        });

        document.getElementById('sleep-btn').addEventListener('click', () => {
            this.energyService.sleep();
        });

        document.getElementById('play-btn').addEventListener('click', () => {
            this.startFruitNinja();
        });
    }

    checkGameOver() {
        if (this.hungerDisplay.textContent === '0' || this.energyDisplay.textContent === '0' || this.happinessDisplay.textContent === '0') {
            alert('Tu mascota ha colapsado. Juego terminado.');
        }
    }

    startFruitNinja() {
       
        document.getElementById('game').style.display = 'none';
        document.getElementById('fruit-ninja-game').style.display = 'block';
        const fruitNinjaController = new FruitNinjaController();
    }
}
