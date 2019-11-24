var a;
var b;
var x = 50;
var y = 50;
var value = 0;
var value2 = 0;
var myXs = [];
var myYs = [];
var myDiameters = [];
var fillColor1 = []; 
var fillColor2 = [];
var fillColor3 = [];
var value 
var r = 200;
var s = 200;



function setup()
    {
        createCanvas(800,600);
        for(var i = 0; i<5; i++)
        {
          myXs[i] = getRandomX(800);
          myYs[i] = getRandomY(600);
          myDiameters[i] = getRandomDiameter(100);
        }
    }

    function draw()
    {
        background(0);
        winText();
        defining();
        for(var i = 0; i<myXs.length; i++)
        {
          fill(fillColor1[i],fillColor2[i],fillColor3[i]);
          circle(myXs[i], myYs[i], myDiameters[i]);
        }
        move();
        createExit();
        youWin();
        myCharacter();
        Player();
        
    }
    function move()
    {
      for(var i = 0; i<myXs.length; i++)
        {
           if (myXs[i] < 800){
            myXs[i]++;
          }
          else {
            console.log("woot woot");
            myXs[i]= 0; 
            myYs[i] = getRandomY(600);
          }
        }
        
    }
    function myCharacter()
    {
      fill(250,25,25);
      circle(a,b,100);
    }

    function mouseClicked()
    {
      a = mouseX
      b = mouseY
    }

    function keyPressed()
    {
      if (key == 'd') 
      {
        r+=15;
      } 
      else if (key == 'a') 
      {
        r-=15;
      }
      else if (key == 's') 
      {
        s+=15;
      }
      else if (key == 'w') 
      {
        s-=15;
      }
    }
    
    function Player()
    {
      fill(236, 112, 99);
      rect(r,s,30,30);
    }

    function createExit()
    {
      fill(102,205,170)
      rect(755,400,50,200);
    }

    function winText()
    {
      fill(value);
      text('you win!', 400,300);
    }

    function youWin()
    {
      if(r > 750 && s > 400)
      {
        value = 255
      }
    }
    function defining()
    {
      fillColor1[0] = 26;
      fillColor2[0] = 188;
      fillColor3[0] = 156;
      fillColor1[1] = 240;
      fillColor2[1] = 178;
      fillColor3[1] = 122;
      fillColor1[2] = 245;
      fillColor2[2] = 183;
      fillColor3[2] = 177;
      fillColor1[3] = 125;
      fillColor2[3] = 60;
      fillColor3[3] = 152;
      fillColor1[4] = 33;
      fillColor2[4] = 97; 
      fillColor3[4] = 140;
    }
    function getRandomX(x)
    {
        return Math.floor(Math.random()*x)+10;
    }

    function getRandomY(y)
    {
        return Math.floor(Math.random()*y) + 10;
    }

    function getRandomDiameter(diameter)
    {
        return Math.floor(Math.random()*diameter)+10
    }
