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
var points = [{x:200,y:100,point:id('point1')},{x:110,y:200,point:id('point2')},{x:100,y:100,point:id('point3')}]
function move(value,point,axis){
  points[point][axis] = Number(value);
  points[point].point.style[(axis == 'x' ? 'left': 'top')] = value + 'px';
  console.log(value);
  transformimg()
}

function transformimg(){
  var x1 = (points[0].x-points[2].x);
  var x2 = (points[1].x-points[2].x);
  var y1 = (points[0].y-points[2].y);
  var y2 = (points[1].y-points[2].y);
  var det = (x1*y2-x2*y1)/100;
  var a = y2/det;
  var b = -y1/det;
  var c = -x2/det;
  var d = x1/det;
  /*var b = (y2-x2*y1/x1);
  var a = -y1/x1*b;
  var c = (y1-x1*y2/x2);
  var d = -y2/x2*c;*/
  id('imgResult').style.transform = 'matrix(' + a + ',' + b + ',' + c + ',' + d
    + ',' + points[2].x + ',' + points[2].y + ')';
  console.log(id('imgResult').style.transform);
}
transformimg()
