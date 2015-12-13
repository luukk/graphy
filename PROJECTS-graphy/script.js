//Made by Ryan Vlaming
//distributed under the MIT license
//feel free to edit to your preferences and presets


window.addEventListener("load",function(){

	var canvas = document.querySelector("#Canvas");
	var context = canvas.getContext("2d");

    var graph = new Graph(450,420,350,260,177,0,context);

    graph.DrawGraph();
});
