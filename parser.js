Parser = function (){
  return this;
}

Parser.prototype.parse = function(inputString) {
  acornAST = acorn.parse(inputString);
  bubbleSet = new BubbleSet(inputString)
  acorn.walk.simple(acornAST, {
    Function: function(node, scope) {
      bubbleSet.addBubble(node.start, node.end)
    }
  })
  return bubbleSet
};