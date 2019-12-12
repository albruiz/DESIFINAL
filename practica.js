// d3.csv("datosPrueba.csv", function(data) {
//   for  (i=0;i<data.length;i++){
//     console.log(data[i].Index +" "+data[i].Country +" "+data[i].CountryCode +" "+data[i].Year +" "+data[i].Part1 +" "+data[i].Part2 +" "+data[i].Part3 +" "+data[i].Part4 );
//   }
// })  ;

//this fuction creates the axes
function drawAxes(width, height, maxVal, dataQuantity){
  var minVal = 0;
  var width = 1000, height = 1000;
  var dataYears = [ "  ", "0-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80-89", "90-99", "100+"];
  var dataQuantity = [ 0, 5, 7, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
// dataQuantity is set just for trying, but later, the data is needed to be taken from 'datos.csv'
  var svg = d3.select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    var xscale = d3.scalePoint()
        .domain(dataYears)
        .range([0, width - 100])

  var yscale = d3.scalePoint()
          .domain(dataQuantity)
          .range([height/2, 0]);

  var x_axis = d3.axisBottom()
          .scale(xscale);

  var y_axis = d3.axisLeft()
          .scale(yscale);

      svg.append("g")
         .attr("transform", "translate(50, 10)")
         .call(y_axis);

  var xAxisTranslate = height/2 + 10;

      svg.append("g")
              .attr("transform", "translate(50, " + xAxisTranslate  +")")
              .call(x_axis)

}

//returns Array with the data that needs to be represented
function doSometringwithdata(coso, country, year){
  var vectorDatos = new Array(11);
  for (i = 0; i< coso.length; i++){
    if((coso[i].Country == country) && (coso[i].Year == year)){
      vectorDatos[0] = parseInt(coso[i].Part0, 10);
      vectorDatos[1] = parseInt(coso[i].Part1, 10);
      vectorDatos[2] = parseInt(coso[i].Part2, 10);
      vectorDatos[3] = parseInt(coso[i].Part3, 10);
      vectorDatos[4] = parseInt(coso[i].Part4, 10);
      vectorDatos[5] = parseInt(coso[i].Part5, 10);
      vectorDatos[6] = parseInt(coso[i].Part6, 10);
      vectorDatos[7] = parseInt(coso[i].Part7, 10);
      vectorDatos[8] = parseInt(coso[i].Part8, 10);
      vectorDatos[9] = parseInt(coso[i].Part9, 10);
      vectorDatos[10] = parseInt(coso[i].Part10, 10);
    }
  }
  return vectorDatos;
}

//Returns the maximun value of data (to make easier to represent the values it makes a number 10 splitter)
function limit(data){
  var maxValue = Math.max.apply(null, data);
  if(maxValue % 10 != 0){
    maxValue = maxValue + (10 - (maxValue % 10));
  }
  return maxValue;
}


// function readCSV(name, country, year){
//   d3.csv(name, function(data){
//     dataQuantity = doSometringwithdata(data);
//     limit = limit(dataQuantity)
//   }) ;
// }
//



//ESTOS VALORES DEPENDERAN DE LO SELECCIONADO POR EL USUARIO,PARA PROBAR ESTOS VALDRAN
var country = "Inventado1";
var year = 2010;
var name = "datosPrueba.csv";

d3.csv(name, function(data){
  dataQuantity = doSometringwithdata(data, country, year);
  max = limit(dataQuantity);
  width = 1000;
  height = 1000;
  drawAxes(width, height, max, dataQuantity)

  console.log('lokokokokokok', dataQuantity);
}) ;
// console.log(coso, 'loke');
// var dataQuantity = readCSV(name, country, year);
//
//
// console.log(coso, "kllklkl", dataQuantity);
//
//
// var aux = 0;
// console.log(dataQuantity + "   " + typeof(aux)+ "   " + typeof(dataQuantity[0]));
// for (i = 0; i < dataQuantity.length; i++){
//   console.log("aki entro  "+ dataQuantity[i]);
//   if (dataQuantity[i] > aux){
//     console.log("Es mayor" + aux + dataQuantity[i]);
//     aux = dataQuantity[i]
//   }
// }
// console.log(aux +" KKLK MI GENTE FUERTE");
// drawAxes();
// console.log(dataQuantity + "   " +'viva la mierda esta');


  function drawGraphs(){

  }
