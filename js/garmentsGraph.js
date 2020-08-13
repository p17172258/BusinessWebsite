canvas: HTMLCanvasElement;
    var context;
    var marginLeft =20;
   var marginRight = 20;
   var marginTop = 20;
    var marginBottom = 20;
  var  gridWidth = 0;
   var gridHeight = 0;
    var arr = [8, 15, 45, 9, 70]; 
       var maxY = 100;
    var minY = 0;
    var x=10;
function myfun()
{
  console.log("Hello world");
/*  var canvas = document.getElementById("test");
var ctx = canvas.getContext("2d");
ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("Hello World", canvas.width/2, canvas.height/2);
*/

this.canvas = document.getElementById('test');
    this.context = this.canvas.getContext("2d");
    this.context.fillStyle = "skyblue";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  /*  this.context.moveTo(80,80);       //dataArray[i].y   //
        this.context.lineTo(80,200);
        this.context.lineWidth = 5;
        this.context.strokeStyle = '#808000';
        this.context.stroke(); */
        this.gridHeight = this.canvas.height - (this.marginTop + this.marginBottom);
        this.gridWidth = this.canvas.width - (this.marginLeft + this.marginRight);    
    for (var i = 0; i < arr.length; i++)
    {
     this.context.moveTo(x,this.getGridY(arr[i]));       
      this.context.lineTo(x,this.canvas.height - this.marginBottom);
      this.context.lineWidth = 10;
      this.context.strokeStyle = '#808000';
      this.context.stroke();
     console.log(this.getGridY(this.arr[i]));
     context.fillText("Hello", 10, this.getGridY(arr[i]));
      x=x+30;
    }
    

  }
 function getGridY(inputYValue){
  return (this.gridHeight * (1 - (inputYValue - this.minY) / (this.maxY - this.minY))) + this.marginTop;
}



