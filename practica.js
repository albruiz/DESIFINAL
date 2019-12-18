const dataYears = [ "  ", "0-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80-89", "90+"]

let yearSlider = d3.select('#year-slider');
yearSlider
  .on('input', () => {
    d3.select('#year-panel').text("Año " + yearSlider.node().value);
     redrawPlease();
  });

d3.select('#region-select')
  .on('input', () => {
    redrawPlease();

  });

const vectorZonas = Array(22)
vectorZonas[0] = 0
vectorZonas[1] = 1
vectorZonas[2] = 2
vectorZonas[3] = 3
vectorZonas[4] = 4
vectorZonas[5] = 5
vectorZonas[6] = 6
vectorZonas[7] = 7
vectorZonas[8] = 8
vectorZonas[9] = 9
vectorZonas[10] = 10
vectorZonas[11] = 'WORLD'
vectorZonas[12] = 'Africa'
vectorZonas[13] = 'Asia'
vectorZonas[14] = 'Europe'
vectorZonas[15] = 'LatinAmericaAndtheCaribbean'
vectorZonas[16] = 'NorthernAmerica'
vectorZonas[17] = 'Oceania'
vectorZonas[18] = 'EasternEurope'
vectorZonas[19] = 'NorthernEurope'
vectorZonas[20] = 'SouthernEurope'
vectorZonas[21] = 'WesternEurope'


const regionDivision = [{
  name : "TOTAL MUNDIAL",
  regions : [{
      name : "WORLD",
      code : 0
    }]
  },
  {
    name : "CONTINENTES",
    regions :[{
        name : "Africa",
        code : 1
      },
      {
        name : "Asia",
        code : 2
      },
      {
        name : "Europe",
        code : 3
      },
      {
        name : "Latin America And the Caribbean",
        code : 4
      },
      {
        name : "Northern America",
        code : 5
      },
      {
        name : "Oceania",
        code : 6
      }
    ]
  },
  {
    name : "EUROPE",
    regions :[{
        name : "Eastern Europe",
        code : 7
      },
      {
        name : "Northern Europe",
        code : 8
      },
      {
        name : "Southern Europe",
        code : 9
      },
      {
        name : "Western Europe",
        code : 10
      }
    ]
  }
  ];

function regionSelectReset() {
  let regionSelect = document.getElementById("region-select");

  regionDivision.forEach((group) => {
    let optGroup = document.createElement('optgroup');
    optGroup.setAttribute('label', group.name);
    regionSelect.appendChild(optGroup);

    group.regions.forEach((region) => {
      let option = document.createElement('option');
      option.textContent = region.name;
      option.setAttribute('value', region.code);
      optGroup.appendChild(option);
    });
  });
}


regionSelectReset();

//this fuction creates the axes, parameters: width and height to create the SVG element, maxVal to create the divisions on the Y Axe
//Returns an array with 2 values, the first is the number of division on Y Axe and the second one is the value that represents each division (these will be used later)
function drawAxes(width, height, maxVal){

  var vectorValores = Array (40)
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
        vectorValores[i] = vectorValores[i - 1] + 20000
      }
    }
    variante = 20000
  } else if (maxVal > 50000){
    for( i = 1; i < vectorValores.length; i++){
      if( maxVal > vectorValores[i-1]){
        vectorValores[i] = vectorValores[i - 1] + 5000
      }
    }
    variante = 5000
  } else if (maxVal > 30000){
    for( i = 1; i < vectorValores.length; i++){
      if( maxVal > vectorValores[i-1]){
        vectorValores[i] = vectorValores[i - 1] + 2000
      }
    }
    variante = 2000
  }else if (maxVal > 10000) {
    for( i = 1; i < vectorValores.length; i++){
      if( maxVal > vectorValores[i-1]){
        vectorValores[i] = vectorValores[i - 1] + 2000
      }
    }
    variante = 2000
  } else {
    for( i = 1; i < vectorValores.length; i++){
      if( maxVal > vectorValores[i-1]){
        vectorValores[i] = vectorValores[i - 1] + 500
      }
    }
    variante = 500
  }


  vectorValores = vectorValores.filter(Boolean)
  vectorValores.splice(0,0,0)
  var limit = vectorValores.length
  var svg = d3.select("body")
      .append("svg")
      .attr("id", "diagrama")
      .attr("class", "removable")
      .attr("width", width)
      .attr("height", height)
      .attr("style", "position: absolute; top: 80px; left: 300px");

  var xscale = d3.scalePoint()
        .domain(dataYears)
        .range([0, width/2])

  var yscale = d3.scalePoint()
          .domain(vectorValores)
          .range([height/2 + height/24, 0]);

  var x_axis = d3.axisBottom()
          .scale(xscale);

  var y_axis = d3.axisLeft()
          .scale(yscale);

      svg.append("g")
         .attr("transform", "translate(50, 10)")
         .call(y_axis);

  var xAxisTranslate = height/2 + height/24 + 10;

      svg.append("g")
              .attr("transform", "translate(50, " + xAxisTranslate  +")")
              .call(x_axis)



    var svg = d3.select("body")
    .append("svg")
    .attr("id", "fondo")
    .attr("width", 450)
    .attr("height", 110)
    .attr("style", "position: absolute; top: 250px; left: 1000px")
    .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 450)
      .attr("height", 110)
      .attr("fill", "#c6bcbc")
      .attr("stroke-width", 1)
      .attr("stroke", "black");

  var svg = d3.select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 100)
  .attr("style", "position: absolute; top: 0px; left: 500px")
  .append("text")
    .attr("x", 0)
    .attr("y", 50)
    .attr("font-family", "Verdana")
    .attr("font-size", 25)
    .text("WORLD POPULATION DENSITY");

  var svg = d3.select("body")
      .append("svg")
      .attr("width", 300)
      .attr("height", 300)
      .attr("style", "position: absolute; top: 180px; left: 90px")
      .attr("transform", "rotate(-90)")
      .append("text")
        .attr("x", 25)
        .attr("y", 200)
        .attr("font-family", "Verdana")
        .attr("font-size", 25)
        .text("Thousands of People");

  var svg = d3.select("body")
  .append("svg")
  .attr("width",400)
  .attr("height", 100)
  .attr("style", "position: absolute; top: 600px; left: 400px")
  .append("text")
    .attr("x", 100)
    .attr("y", 80)
    .attr("font-family", "Verdana")
    .attr("font-size", 25)
    .text("Age range");



  var listaSol = new Array(2)
  listaSol[0] = limit
  listaSol[1] = variante
  return listaSol ;
}

//returns Array with the data that needs to be represented
function doSometringwithdata(data, country, year){
  var vectorDatos = new Array(10);
  for (i = 0; i < data.length; i++){
    if((data[i].Country == country) && (data[i].Year == year)){
      vectorDatos[0] = parseInt(data[i].Part0, 10);
      vectorDatos[1] = parseInt(data[i].Part1, 10);
      vectorDatos[2] = parseInt(data[i].Part2, 10);
      vectorDatos[3] = parseInt(data[i].Part3, 10);
      vectorDatos[4] = parseInt(data[i].Part4, 10);
      vectorDatos[5] = parseInt(data[i].Part5, 10);
      vectorDatos[6] = parseInt(data[i].Part6, 10);
      vectorDatos[7] = parseInt(data[i].Part7, 10);
      vectorDatos[8] = parseInt(data[i].Part8, 10);
      vectorDatos[9] = parseInt(data[i].Part9, 10);
    }
  }
  return vectorDatos;
}

//Returns the maximun value of data
function limit(data){
  var maxValue = Math.max.apply(null, data);
  return maxValue;
}

//Returns the minimum value of data
function limitDown(data){
  var minValue = Math.min.apply(null, data);
  return minValue
}

//Function that creates rect elements
//Parameters : posX = this is the position the rect will be drawn, valorY : the number is needed to represent, numDiv : number of divisions in the Y Axe, variante : the value that divides the Y Axe
function drawRect(posX, valorY, numDiv, variante, i){

  var bodySelection = d3.select("body").select("#diagrama") ;
  var valY = (545.717 / numDiv) * (valorY / variante) ;
  if (valY < 5){
    valY = 5
  }
  var posY = 551.7 - valY
  var rectSection = bodySelection.append("rect")
                                  .attr("class", "grafo")
                                  .attr("x", posX)
                                  .attr("y", posY)
                                  .attr("width", 51.59)
                                  .attr("height", valY)
                                  .attr("fill", "#cee75d")
                                  .attr("stroke-width", 1)
                                  .attr("stroke", "red")
                                  .on("mouseover", function(){
                                    drawAnimation(valorY, i)
                                  })
                                  .on("mouseout", function(){
                                    var coso = d3.select('#tooltip')
                                    coso.style("opacity", 0)
                                    coso.remove();
                                  });
}


function drawAnimation(valorY, i){//coutry es una variable global
  var tooltip = d3.select('body').append('div')
            .attr("id", "tooltip")
            .style("background", "lightblue");
          tooltip.html("<strong>Country: " + country + "</strong><br><strong>Age: </strong>" + dataYears[i+1] + " years<br><strong>Total Population: </strong>" + valorY +"000")
            .raise()
            .style("opacity", .9)
            .style("position", "absolute")
            .style("text-align", "center")
            .style("left", `${d3.event.pageX}px`)
            .style("top", `${d3.event.pageY + 10}px`);
}


function redrawPlease(){
   d3.selectAll('.removable').remove();
  d3.csv(name, function(data){
    var numeroPais = parseInt(document.getElementById('region-select').value);
    var year = parseInt(document.getElementById('year-slider').value)
    country = vectorZonas[numeroPais + 11]
    //year = document.getElementById('year-slider').value;
    dataQuantity = doSometringwithdata(data, country, year);
    max = limit(dataQuantity);
    min = limitDown(dataQuantity);


    width = 1000;
    height = 1000;
    var limite = drawAxes(width, height, max)

    for ( i = 0; i < positionX.length; i++ ){
      drawRect(positionX[i], dataQuantity[i], limite[0] - 1, limite[1], i);
    }


  }) ;

}

//ESTOS VALORES DEPENDERAN DE LO SELECCIONADO POR EL USUARIO,PARA PROBAR ESTOS VALDRAN
var country = "WORLD";
var year = 1950;
const name = "DatosPoblacion.csv";
var positionX = new Array(10);
positionX [0] = 78.14;
positionX [1] = 129.73;
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
  min = limitDown(dataQuantity);


  width = 1000;
  height = 1000;
  var limite = drawAxes(width, height, max)

  for ( i = 0; i < positionX.length; i++ ){
    drawRect(positionX[i], dataQuantity[i], limite[0] - 1, limite[1],i);
  }
}) ;

var anyos = new Array(5)
anyos[0] = 1950
for (i = 1; i< anyos.length; i++){
  anyos[i] = anyos[i-1] + 5
}
