// This is to disable Inspect Element using JavaScript easily.
// The first way should block right-clicking and selecting Inspect Element
$(document).bind("contextmenu",function(e)) {
  e.preventDefault();
});
// The other way which should work well combindeded is to disable the F12 function
$(document).keydown(function(e)){
  if(e.which === 123){
    return false;
  }
});
// That is all so far another thing that should work is blocking keypress by swapping
$(document).keydown(function(e)){
// With,
$(document).keypress(function(e)){
// Thanks for using this tutorial. If possible use the space below to include your response using the tag //

// Great Experience! - ckchoudek
