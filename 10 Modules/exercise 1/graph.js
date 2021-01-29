/*
.. RETURNS an object. each place as keys.
   key values: every node possible going to from key(place)
*/
module.exports.build_graph = function(roads){
  let road_graph = Object.create(null);
  function add_edge(from, to){
    if(road_graph[from] == null){
      road_graph[from] = [to];
    }
    else {
      road_graph[from].push(to);
    }
  }
  for(let [from, to] of roads){
  	add_edge(from, to);
  	add_edge(to, from);
  }
  return road_graph;
}
