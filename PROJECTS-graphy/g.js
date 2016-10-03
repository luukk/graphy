function Graph(dataSet, nodesPerScreen){
    var canvas = document.querySelector("#Canvas");
    var ctx    = canvas.getContext("2d");
    var graphSpaceWidth = canvas.width;
    var graphSpaceHeight = canvas.height;


    this.nodeDataArray = [];

    for(var i = 0; i < dataSet.length; i++){
        this.nodeData = {

            value : dataSet[i],

            x : graphSpaceWidth / nodesPerScreen * i,

            y : graphSpaceHeight - dataSet[i]
        }

        this.nodeDataArray.push(this.nodeData);

    }

        console.log(this.nodeDataArray);
        console.log(this.nodeDataArray.length);

        ctx.beginPath();

        for(var i = 0; i < this.nodeDataArray.length; i++){


            ctx.moveTo(this.nodeDataArray[i].x, this.nodeDataArray[i].y);

            //console.log("movedTo : x : " + this.nodeDataArray[i].x + " : y : "+ this.nodeDataArray[i].y);

            ctx.lineTo(this.nodeDataArray[i+1].x, this.nodeDataArray[i+1].y);

           // console.log("drewTo : y : " + this.nodeDataArray[i+1].x + " : y : "  + this.nodeDataArray[i+1].y);

            ctx.stroke();
        }






}
