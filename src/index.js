
exports.min = function min (array){
  if(Array.isArray(array) && array.length>0){
    return array.reduce((min, item)=>Math.min(min,item));
  }else return 0 
}

exports.max = function max (array){
  if(Array.isArray(array) && array.length>0){
    return array.reduce((max,item)=>Math.max(max,item));
  }else return 0
}

exports.avg = function avg (array){
  if(Array.isArray(array)&&array.length>0){
    return array.reduce((sum,item)=>sum+item)/array.length;
  }else return 0
}
