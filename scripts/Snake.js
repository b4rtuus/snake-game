class Snake
{

    direction;
    tail;
    body;

    constructor()
    {
        this.direction = 'right';
        this.tail = [];
        this.body = [ { x: 0, y: 0 }];

    }

    drawSnake()
    {
        for(let i = 0; i < this.body.length; i++ )
        {
            if(i == 0) 
            ctx.fillStyle = 'rgba(0, 255, 0, 255)';
            ctx.fillRect(this.body[i].x, this.body[i].y, 50, 50); 
        }
    }

    increase()
    {
        this.body.push({... this.body[this.body.length - 1]});
    }

    getHead()
    {
        return this.body[0];
    }

    update()
    {
        for (let i = this.body.length - 2; i >= 0; i--) {
            this.body[i + 1] = { ...this.body[i] }
          }
        if(this.direction == 'right')
        {
            this.body[0].x += 50;
            if(this.body[0].x > width) return game = false;
        }
        if(this.direction == 'left')
        {
            this.body[0].x -= 50;
            if(this.body[0].x < 0) return game = false;
        }
        if(this.direction == 'top')
        {
            this.body[0].y -= 50;
            if(this.body[0].y < 0) return game = false;
        }
        if(this.direction == 'bottom')
        {
            this.body[0].y += 50;
            if(this.body[0].y > height) return game = false;
        }
        
        this.drawSnake();

    }

}