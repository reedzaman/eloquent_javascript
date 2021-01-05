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



let memory = undefined;



/*
.. returns an array with a destination and a memory
*/
function robot(state, memory) {
  return {destination: pick_random(road_graph[state.curr_location]), memory: memory};
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
    let best_move = robot(state, memory);
    let new_state = state.move(best_move.direction);
    console.log(`Moved to ${best_move.direction}`);
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





















console.log("end of viewport..");
