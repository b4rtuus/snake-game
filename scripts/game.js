var width = 500;
var height = 500;
let box = 50;
var game = true;

const canvas = document.getElementById('gameboard');
if(canvas.getContext)
{
    var ctx = canvas.getContext('2d');

    for(let x = 0; x < width; x = x + box)
    {
        for(let y = 0; y < height; y = y + box )
        {
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, box, box)
        }
    }

    var snake = new Snake();
    var food = new Food();

}

function drawBoard()
{
    for(let x = 0; x < width; x = x + box)
    {
        for(let y = 0; y < height; y = y + box )
        {
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, box, box)
        }
    }
}

let lastRender = 0

function drawGame(time)
{

    window.requestAnimationFrame(drawGame);

    const secondsSinceLastRender = (time - lastRender) / 1000
    if (secondsSinceLastRender < 1 / 6) return
  
    lastRender = time

    ctx.clearRect(0, 0, width, height)

    if(!game)
    {
        var text = "GameOVER!!!";
        ctx.font = "50px Helvetica";
        ctx.fillStyle = "#fff";
        ctx.fillText(text, ((width - ctx.measureText(text).width) / 2), 100);
    }
    else
    {

        drawBoard();
    
        snake.update();
        if(snake.body.slice(1).find(x => snake.getHead().x == x.x && snake.getHead().y == x.y ) ) game = false
        if(snake.getHead().x == food.x && snake.getHead().y == food.y) food.pickup();
        food.draw();
    }

}

window.requestAnimationFrame(drawGame);

// Controling Snake

function moveSnake(e)
{
    switch(e.code)
    {
        case "ArrowRight":
            if(snake.direction == 'left') return;
            snake.direction = 'right';
            break;
        case "ArrowLeft":
            if(snake.direction == 'right') return;
            snake.direction = 'left';
            break;
        case "ArrowUp":
            if(snake.direction == 'bottom') return;
            snake.direction = 'top';
            break;
        case "ArrowDown":
            if(snake.direction == 'top') return;
            snake.direction = 'bottom'
            break;
    }
}

document.addEventListener('keydown', moveSnake);