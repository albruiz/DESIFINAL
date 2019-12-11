var margin = {top: 60, right: 20, bottom: 30, left: 40},
w = 1300 - margin.left - margin.right,
h = 600 - margin.top - margin.bottom;

var width = w + margin.left + margin.right
var height = h + margin.top + margin.bottom

var radius=150;
var cx =650;
var cy =200;

//Start colours
var color = d3.scaleOrdinal()
    .range(["blue","lightblue"]);

//Transformations
var x = d3.scaleBand().rangeRound([0,w]).padding(.1)
var y = d3.scaleLinear().range([h, 0]);

//Axis
var xAxis = d3.axisBottom(x)
var yAxis = d3.axisLeft(y).ticks(6)
var yGrid = d3.axisLeft(y)
.ticks(5)
.tickSize(-w, 0, 0)
.tickFormat("");
//Map domain
x.domain(data.map(function(d) { return d.abrv; }));
y.domain([0,600])

//Axis settings
svg.append("g")
.attr("class", "x axis")
.attr("transform", "translate(0, " + h + ")")
.call(xAxis);

svg.append("g")
.attr("class", "y axis")
.call(yAxis);

svg.append("g")
.attr("class", "grid")
.call(yGrid);

var labels = svg.append("g")
.attr("class", "labels");

labels.append("text")
.attr("id","yaxisname")
//.attr("dy", ".20em")
.attr("dx", ".30em")
.text("Salarial");

labels.append("text")
.attr("id","yaxisname2")
.attr("dy", "-.8em")
.attr("dx", ".30em")
.text("Límite");
