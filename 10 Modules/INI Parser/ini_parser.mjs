function parse_INI(INI) {
  let result = {};
  let section = result;
  INI.split('\n').forEach(line => {
    let match;
    if(match = line.match(/^(\w+)=(.*)$/)) {
      section[match[1]] = match[2];
    } else if(match = line.match(/^\[(\w+)\]$/)) {
      section = result[match[1]] = {};
    } else if(!(/^\s*(;.*)?$/.test(line))) {
      throw new Error("Invalid line found!");
    }
  });
  return result;
}

module.exports = {parse_INI}
