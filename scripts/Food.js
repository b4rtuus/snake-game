class Food
{

    constructor()
    {
        this.x = 100;
        this.y = 100;
    }

    draw()
    {
        ctx.fillStyle = 'rgba(255, 0, 0, 255)';
        ctx.fillRect(this.x, this.y, 50, 50);
    }

    pickup()
    {
        let randomX = [];
        let randomY = [];
        for(let i = 0; i < width; i += box)
        {
            randomX.push(i);
        }
        for(let i = 0; i < height; i += box)
        {
            randomY.push(i);
        }
        this.x = randomX[Math.floor(Math.random() * randomX.length )]
        this.y = randomY[Math.floor(Math.random() * randomY.length )]
        snake.increase();
        document.getElementById('score').textContent = parseInt(document.getElementById('score').textContent) + 1 
    }

}