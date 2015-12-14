//Made by Ryan Vlaming
//distributed under the MIT license
//feel free to edit to your preferences and presets


window.addEventListener("load",function(){

	var canvas = document.querySelector("#Canvas");
	var context = canvas.getContext("2d");
    var valueArray = [];



    var dataArray = [100,200,300,400,500,60,70,80,90];



    var graph = new Graph(dataArray,9);

});
