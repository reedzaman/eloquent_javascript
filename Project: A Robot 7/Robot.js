const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];


/*
.. TAKES roads
.. RETURNS an object with each place as property name
   and an array of things that can be reached from that place
*/
function make_road_graph(data){
  let road_graph = Object.create(null);
  function add(from, to){
    if(road_graph[from] == null){
      road_graph[from] = [to];
    }
    else {
      road_graph[from].push(to);
    }
  }
  for(let [from, to] of data.map( x => x.split("-"))){
    add(from, to);
    add(to, from);
  }
  return road_graph;
}


let road_graph = make_road_graph(roads);















console.log("end of viewport..");