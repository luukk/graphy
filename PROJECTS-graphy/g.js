function Graph(c1,c2,c3,c4,c5,c6,ctx){
    this.cord1 = 500 - c1;
    this.cord2 = 500 - c2;
    this.cord3 = 500 - c3;
    this.cord4 = 500 - c4;
    this.cord5 = 500 - c5;
    this.cord6 = 500 - c6;

    var xpointers = {
        x0 : 0,
        x1 : 100,
        x2 : 200,
        x3 : 300,
        x4 : 400,
        x5 : 500,
    }


    this.DrawGraph = function(){
        ctx.beginPath();
        ctx.moveTo(xpointers.x0, this.cord1);
        ctx.lineTo(xpointers.x1, this.cord2);

        ctx.moveTo(xpointers.x1, this.cord2);
        ctx.lineTo(xpointers.x2, this.cord3);

        ctx.moveTo(xpointers.x2, this.cord3);
        ctx.lineTo(xpointers.x3, this.cord4);

        ctx.moveTo(xpointers.x3, this.cord4);
        ctx.lineTo(xpointers.x4, this.cord5);

        ctx.moveTo(xpointers.x4, this.cord5);
        ctx.lineTo(xpointers.x5, this.cord6);

        ctx.stroke();
    }



}
