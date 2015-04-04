BubbleSet = function (inputString){
  this.raw = inputString
  this.bubbles=[]
  return this;
}

BubbleSet.prototype.addBubble = function(start,end) {
  this.bubbles.push({start:start, end:end})
};


BubbleSet.prototype.toString = function() {
  return this.raw
};

String.prototype.insertAt=function(index, string) {
  return this.substr(0, index) + string + this.substr(index);
}



BubbleSet.prototype.toHTML = function() {
  var output = this.raw, index= 0;
  addSequence = function(sequence) {
    return function(location){
      output = output.insertAt(location+index, sequence)
      index += sequence.length
    }
  }


  addStartSequence = addSequence("<bubble>", output, index)
  addEndSequence = addSequence("</bubble>", output, index)
  starts= []
  ends = []
  this.bubbles.forEach(function(e) {
    starts.push(e.start)
    ends.push(e.end)
  }
  )
  starts.sort(function(a,b) { return a - b; })
  ends.sort(function(a,b) { return  - a; })
  all= starts.concat(ends).sort(function(a,b) { return a - b; })

  all.forEach( function(e){
    if (starts.indexOf(e)>0) {
      addStartSequence(e)
    }
    else {addEndSequence(e)}
  }
         )
  return output;
};