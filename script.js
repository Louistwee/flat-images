function id(i){
  return document.getElementById(i);
}
function displayimage(){
  console.log('reading')
  var reader = new FileReader();
  reader.onload = imageIsLoaded;
  reader.readAsDataURL(id('input').files[0]);
}
function imageIsLoaded(e){
  console.log('loaded')
  id('img').src = e.target.result;
}
