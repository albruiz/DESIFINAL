// d3.csv("datosPrueba.csv", function(data) {
//   for  (i=0;i<data.length;i++){
//     console.log(data[i].Index +" "+data[i].Country +" "+data[i].CountryCode +" "+data[i].Year +" "+data[i].Part1 +" "+data[i].Part2 +" "+data[i].Part3 +" "+data[i].Part4 );
//   }
// })  ;



var country = "Inventado1";
var year = 2010;
var dataQuantity = [];
d3.csv("datosPrueba.csv", function(data){
  for (i = 0; i < data.length; i++){
    if (data[i].Country == country && data[i].Year == year){
      
      dataQuantity.push(parseInt(data[i].Part1, 10));
      dataQuantity.push(parseInt(data[i].Part2, 10));
      dataQuantity.push(parseInt(data[i].Part3, 10));
      dataQuantity.push(parseInt(data[i].Part4, 10));
      dataQuantity.push(parseInt(data[i].Part5, 10));
      dataQuantity.push(parseInt(data[i].Part6, 10));
      dataQuantity.push(parseInt(data[i].Part7, 10));
      dataQuantity.push(parseInt(data[i].Part8, 10));
      dataQuantity.push(parseInt(data[i].Part9, 10));
      dataQuantity.push(parseInt(data[i].Part10, 10));
      dataQuantity.push(parseInt(data[i].Part11, 10));
    }
  }
}) ;
var aux = 0;
var length = dataQuantity.length;
console.log(dataQuantity );

for (i = 0; i < dataQuantity.length; i++){
  console.log("aki entro");
  if (dataQuantity[i] > aux){
    console.log("Es mayor" + aux + dataQuantity[i]);
    aux = dataQuantity[i]
  }
}
console.log(aux +" KKLK MI GENTE FUERTE");
drawAxes();

  function drawGraphs(){

  }

  //this fuction creates the axes
  function drawAxes(width, height){
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
