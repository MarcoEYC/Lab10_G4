let grid;
let player;
let NX = 6
let NY = 1



function setup(){
    createCanvas(500,500)
    grid = new Grid(NX,NY)
    player = new Player()
}

function draw(){
    grid.draw()
    player.draw()
}

function mousePressed(){
    player.takeStep(1)
}

class Grid{
    constructor(nx,ny){
        this.nx = nx
        this.ny = ny
    }
    draw(){
        let boxWidth  = width/this.nx
        let boxHeight = height/this.ny
        let isOn = true
        for (let y = 0; y < this.ny; y++) {
            for (let x = 0; x < this.nx; x++) {
                if(isOn){
                    fill(255)
                    isOn = false;
                }else{
                    fill(150,150,0)
                    isOn = true
                }
                rect(x*boxWidth,y*boxHeight,boxWidth,boxHeight)
            }
        }

    }
}


class Player{
    constructor(){
        this.x = 0
        this.y = 0
        this.isOn = true
    }
    draw(){
        let boxWidth  = width/NX
        let boxHeight = height/NY
        fill(255,0,0)
        let drawx;
        let drawy;
        if(this.isOn){
            drawx = this.x
        }else{
            drawx = (NX-1)-this.x
        }
        drawy = (NY-1) - this.y

        ellipse(drawx*boxWidth+(boxWidth/2),drawy*boxHeight+(boxHeight/2),50,50)
        if(this.x==4 && this.y==5){
            this.x = 0
            this.y = 0
            this.isOn = true
        }
    }

    async takeStep(n){

        for (let index = 0; index < n; index++) {
            if(this.x<NX-1){
                this.x++
            }else{
                if(this.y<NY-1){
                    this.y++
                    this.x = 0
                    this.isOn = !this.isOn
                }
            }
            await new Promise(r => setTimeout(r, 100));
        }

        let drawx;
        let drawy;

        if(this.isOn){
            drawx = this.x
        }else{
            drawx = (NX-1)-this.x
        }
        drawy = (NY-1) - this.y


    }

}



class Point{
    constructor(x,y){
        this.x = x
        this.y = y
    }
}

class Line{
    constructor(p1,p2){
        this.p1 = p1
        this.p2 = p2
    }
    draw(){
        let boxWidth  = width/NX
        let boxHeight = height/NY

        line(this.p1.x*boxWidth+(boxWidth/2),this.p1.y*boxHeight+(boxHeight/2),this.p2.x*boxWidth+(boxWidth/2),this.p2.y*boxHeight+(boxHeight/2))


    }
}