// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
var arr =[];
var obj = document.body;

  var findElements = function(htmlEl) { //helper func
    if (htmlEl.classList.contains(className)) {
      arr.push(htmlEl);
    } 
      
    for (var i = 0; i < htmlEl.children.length; i++) {
      findElements(htmlEl.children[i]);
    }
  
}

  findElements(obj);

  //console.log(obj);
  //console.log(arr);
  return arr;

};
