// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
var arr =[];
var obj = document.body;

  var findElements = function(htmlEl) { //helper function

    if(htmlEl.classList !== undefined) {

      if (htmlEl.classList.contains(className)) {
        arr.push(htmlEl);
      } 
    }
      
    for (var i = 0; i < htmlEl.childNodes.length; i++) {
      findElements(htmlEl.childNodes[i]);
    }
  
  }

  findElements(obj);
  return arr;
};
