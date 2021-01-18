const box = {
  locked: true,
  unlock() {this.locked = false},
  lock() {this.locked = true},
  _content: [1,2,3],
  get content() {
    if(this.locked)  throw new Error("Locked!");
    return this._content;
  }
};


function with_box_unlocked(func) {
  let result;
  try {
    box.unlock();
    result = func();
  } finally {
    box.lock();
    return result;
  }
}




console.log(with_box_unlocked(() => box.content));
//-> [ 1, 2, 3 ]






console.log("end of viewport..");