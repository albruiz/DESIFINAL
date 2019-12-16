// d3.csv("datosPrueba.csv", function(data) {
//   for  (i=0;i<data.length;i++){
//     console.log(data[i].Index +" "+data[i].Country +" "+data[i].CountryCode +" "+data[i].Year +" "+data[i].Part1 +" "+data[i].Part2 +" "+data[i].Part3 +" "+data[i].Part4 );
//   }
// })  ;

//this fuction creates the axes
function drawAxes(width, height, maxVal, minVal, dataQuantity){
  var minVal = 0;
  var dataYears = [ "  ", "0-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80-89", "90+"]
  //condiciones para dibujar los ejes: si el maximo es mayor que 1.000.000, entonces se dividira el eje Y en rangos de 100.000 hasta el millon, se añadiran a mayores x todos los 100.000 que falten en el histograma
  var vectorValores = Array (20) //20 es el tamano que tendra x defecto pero seguramente NO SEA EL final
  variante = 0
  vectorValores[0] = 0
  if( maxVal > 700000){
    for( i = 1; i < vectorValores.length; i++){
      if( maxVal > vectorValores[i-1]){
        vectorValores[i] = vectorValores[i - 1] + 100000
      }
    }
    variante = 100000
  } else if (maxVal > 500000){
    for( i = 1; i < vectorValores.length; i++){
      if( maxVal > vectorValores[i-1]){
        vectorValores[i] = vectorValores[i - 1] + 75000
      }
    }
    variante = 75000
  } else if (maxVal > 300000){
    for( i = 1; i < vectorValores.length; i++){
      if( maxVal > vectorValores[i-1]){
        vectorValores[i] = vectorValores[i - 1] + 50000
      }
    }
    variante = 50000
  } else if (maxVal > 100000){
    for( i = 1; i < vectorValores.length; i++){
      if( maxVal > vectorValores[i-1]){
        vectorValores[i] = vectorValores[i - 1] + 25000
      }
    }
    variante = 25000
  } else {
    for( i = 1; i < vectorValores.length; i++){
      if( maxVal > vectorValores[i-1]){
        vectorValores[i] = vectorValores[i - 1] + 10000
      }
    }
    variante = 10000
  }
  vectorValores = vectorValores.filter(Boolean)
  vectorValores.splice(0,0,0)

  var limit = vectorValores.length

// dataQuantity is set just for trying, but later, the data is needed to be taken from 'datos.csv'
  var svg = d3.select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    var xscale = d3.scalePoint()
        .domain(dataYears)
        .range([0, width/2])

  var yscale = d3.scalePoint()
          .domain(vectorValores)
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

  var listaSol = new Array(2)
  listaSol[0] = limit
  listaSol[1] = variante
  return listaSol ;
}

//returns Array with the data that needs to be represented
function doSometringwithdata(coso, country, year){
  var vectorDatos = new Array(10);
  for (i = 0; i < coso.length; i++){
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

// <svg width="120" height="120"
//      viewBox="0 0 120 120"
//      xmlns="http://www.w3.org/2000/svg">
//
//   <rect x="10" y="10" width="100" height="100"/>
// </svg>

//lo dibuja ahora toca darle el tamano esperado y hacer que cree todos los que tiene que crear la mierda esta
//Function that creates the rect, paarameters posX, posY, rectHei, rectWid are the parameters you have to declare for an SVG rect.
//posX, posY, rectHei, rectWid
function letsee(posX, valorY, numDiv, variante){

  var bodySelection = d3.select("body").select("svg") ;
  var valY = (500.5 / numDiv) * (valorY / variante) ;
  console.log(valY, "    ", numDiv, "   ", valorY);
  var posY = 510.033 - valY //la referencia la hemos tomado tomando el valor de 20, por lo que las medidas seran sobre esa medida inicial
  var rectSection = bodySelection.append("rect")
                                  .attr("x", posX)
                                  .attr("y", posY) //perfecto <3 400 es la altura perfecta con 110 de longitud del rect, en caso de que aumente hay que reducir la y proporcionalmente.407,3934 NO CAMBIA ES LA ALTURA DE LAS BARRAS
                                  .attr("width", 51.59) //este no cambia es el ancho
                                  .attr("height", valY) //210  513.033/numero de divisiones 0-100 = 10 divisiones de 10 en 10, SI el valor es 20, pues (20/10) * valo obtenido.
                                  .attr("fill", "grey")
                                  .attr("stroke-width", 1)
                                  .attr("stroke", "red");
}




//ESTOS VALORES DEPENDERAN DE LO SELECCIONADO POR EL USUARIO,PARA PROBAR ESTOS VALDRAN
var country = "Inventado2";
var year = 2015;
var name = "datosPrueba.csv";
var positionX = new Array(10);
positionX [0] = 78.14; //+46.9 la mitad es 23.45
positionX [1] = 129.73; //51.59     25.795
positionX [2] = 181.32;
positionX [3] = 232.91;
positionX [4] = 284.5;
positionX [5] = 336.09;
positionX [6] = 387.68;
positionX [7] = 439.27;
positionX [8] = 490.86;
positionX [9] = 542.45;


d3.csv(name, function(data){
  dataQuantity = doSometringwithdata(data, country, year);
  max = limit(dataQuantity);
  min = 15555555550
  for ( i = 0; i< dataQuantity.length; i++){
    if (dataQuantity[i] < min){
      min = dataQuantity[i]
    }
  }
  console.log(max, min);

  width = 1000;
  height = 1000;
  var limite = drawAxes(width, height, max, min, dataQuantity)

  console.log(limite)
  for ( i = 0; i < positionX.length; i++ ){
    letsee(positionX[i], dataQuantity[i], limite[0] - 1, limite[1]);
  }


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
