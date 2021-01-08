const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  'Marketplace-Farm',
  'Marketplace-Post Office',
  'Marketplace-Shop',
  'Marketplace-Town Hall',
  'Shop-Town Hall',
];



let mail_route = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

/*
.. RETURNS an object. each place as keys.
   key values: every node possible going to from key(place)
*/
function make_road_graph(roads){
  let road_graph = Object.create(null);
  function add_edge(from, to){
    if(road_graph[from] == null){
      road_graph[from] = [to];
    }
    else {
      road_graph[from].push(to);
    }
  }
  roads.map(x => {
    let [from, to] = x.split("-");
    add_edge(from, to);
    add_edge(to, from);
  });
  
  return road_graph;
}



// creating the road connections dataset
let road_graph = make_road_graph(roads);



/*
.. current state of the robot
.. consists of: current location
                parcels to be delivered
*/
class village_state {
  constructor(curr_location, parcels){
    this.curr_location = curr_location;
    this.parcels = parcels;
  }
  move(destination) {
    if(this.place === destination) return this;
    
    let parcels = this.parcels.map(x => {
      if(x.place == this.curr_location){
        return {place: destination, address: x.address};
      }
      else {
        return {place: x.place, address: x.address}
      }
    }).filter(x => x.place != x.address);
    
    return new village_state(destination, parcels);
  }
}




/*
.. returns an array with a destination and a memory
*/
function robot(state, memory) {
  return {direction: pick_random(road_graph[state.curr_location]), memory: memory};
}



/*
.. turns on the robot to finish delivering parcels
*/
function run_robot(state, robot, memory) {
  for(let turn = 0; ; turn++) {
    if(state.parcels.length == 0) {
      console.log(`Done in ${turn} turn(s)`);
      break;
    }
    let next_move = route_robot(state, memory);
    state = state.move(next_move.direction);
    memory = next_move.memory;
    console.log(`Moved to ${next_move.direction}`);
  }
}



/*
.. chooses a random item from an array
*/
function pick_random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}



/*
.. RETURNS a randomly generated parcel {place: random, address: random}
*/
function random_parcel() {
  let pickup_place = pick_random(Object.keys(road_graph));
  let dropping_place;
  do{
    dropping_place = pick_random(road_graph[pickup_place]);
  } while(pickup_place == dropping_place);
  return {place: pickup_place, address: dropping_place};
}



/*
.. RETURNS a random village state starting from Post Office
*/
village_state.random = function(n = 10){
  let parcels = [];
  for(let i = 0; i < n; i++) {
    parcels.push(random_parcel());
  }
  return new village_state("Post Office", parcels)
}



/*
.. Updated version of robot()
   that doesn't just randomly gives next move destination
   follows the mail_route
*/
function route_robot(state, memory) {
  if(memory.length == 0){
    memory = mail_route;
  }
  return {
    direction: memory[0],
    memory: memory.slice(1)
  }
}




/*
.. TAKES a graph, two locations from and to
.. RETURNS an array of nodes in a specific order representing the route
	    from 'from' to 'to'
	    null if no route is available
.. It takes the starting node and checks if it's primary neighbor is the destination
  or not. If not, it takes all of it neighbors and checks if one of 'their' neighbors
  is the destination.
.. It uses a 'visited' array to trace the already checked nodes, so that they won't have to be
  checked more than once.
.. It uses a "to be visited (tbv)" queue to keep track of what else to check next.
*/
function find_route(graph, from, to){
  if(from == to) return [to];
  let visited = [];
  let tbv = [];
  tbv.push({name:from, route:[]});
  
  while(tbv.length != 0){
    let item = tbv.shift();
    visited.push(item.name);
    for(let nei of graph[item.name]) {
      if(nei == to) {
        let route = item.route;
        route.push(nei);
        return route;
      }
      if( !tbv.some(x => x.name == nei) && !visited.includes(nei)) {
        tbv.push({name:nei, route: item.route.concat(nei)});
      }
    }
  }
  return null;
}







/*
.. TAKES a graph
.. RETURNS a data_set in the form of an object with every nodes and
	    the route of every other nodes from it
.. FORMAT:
	{
	  Alice's : [
		      {place: Townhall, route: [shop, PostOffice, Townhall]},
		      {place: Shop, route: [Shop]}
		  ],
	  Bob's : .....
	}
*/
function find_all_routes(graph) {
  let routes = {};
  let places = Object.keys(graph);
  for(let base_location of places) {
    let other_places = places.filter(x => x != base_location);
    for(let place of other_places) {
      if(routes[base_location] == null) {
        routes[base_location] = [{name: place, route: find_route(graph, base_location, place)}];
      }
      else {
        routes[base_location].push({name: place, route: find_route(graph, base_location, place)});
      }
    }
  }
  return routes;
}



// creating all routes that are possible going from a given location
let all_routes = find_all_routes(road_graph);





















console.log("end of viewport..");
