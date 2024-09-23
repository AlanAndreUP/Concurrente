
import { FruitNinjaService } from '../services/fruitNinjaService.js';

export class FruitNinjaController {
    constructor() {
        this.canvas = document.getElementById('fruit-ninja-canvas');
        this.context = this.canvas.getContext('2d');
        this.fruits = [];
        this.score = 0;

        this.fruitNinjaService = new FruitNinjaService();

        this.init();
    }

    init() {
        this.fruitNinjaService.start((fruit) => {
            this.fruits.push(fruit);
            this.drawFruits();
        });

        this.canvas.addEventListener('click', (event) => {
            const xClick = event.offsetX;
            const yClick = event.offsetY;

            this.fruits = this.fruits.filter(fruit => {
                const distance = Math.sqrt(Math.pow(xClick - fruit.x, 2) + Math.pow(yClick - fruit.y, 2));
                if (distance < 30) {
                    this.score += 10; 
                    return false; 
                }
                return true;
            });

            this.drawFruits();
        });

        document.getElementById('exit-ninja-btn').addEventListener('click', () => {
            this.stopGame();
        });

        this.drawScore(); 
    }

    drawFruits() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.fruits.forEach(fruit => {
            this.context.beginPath();
            this.context.arc(fruit.x, fruit.y, 30, 0, 2 * Math.PI);
            this.context.fillStyle = 'red';
            this.context.fill();
            this.context.stroke();
        });
        this.drawScore();
    }

    drawScore() {
        this.context.fillStyle = 'black';
        this.context.font = '20px Arial';
        this.context.fillText(`Puntuación: ${this.score}`, 10, 20);
    }

    stopGame() {
        this.fruitNinjaService.stop();
        document.getElementById('fruit-ninja-game').style.display = 'none';
        document.getElementById('game').style.display = 'block';
    }
}
