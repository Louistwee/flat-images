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
var points = [{x:627,y:434,point:id('point1')},{x:665,y:560,point:id('point2')},{x:787,y:413,point:id('point3')},{x:875,y:516,point:id('point4')},{x:1059,y:582,point:id('point5')}]
function move(value,point,axis){
  points[point][axis] = Number(value);
  points[point].point.style[(axis == 'x' ? 'left': 'top')] = value + 'px';
  getFlowerPosition();
}
var i=0;
while(i<5){
  move(points[i].x,i,'x');
  move(points[i].y,i,'y');
  i++;
}
function getFlowerPosition(){
  var A = [points[1].x-points[0].x,points[1].y-points[0].y];
  var B = [points[2].x-points[0].x,points[2].y-points[0].y];
  var C = [points[0].x+points[3].x-points[1].x-points[2].x,points[0].y+points[3].y-points[1].y-points[2].y];
  var D = [points[4].x-points[0].x,points[4].y-points[0].y];
  var a = C[0]*B[1]-C[1]*B[0]; 
  var b = A[0]*B[1]-A[1]*B[0]-C[0]*D[1]+C[1]*D[0];
  var c = D[0]*A[1]-D[1]*A[0];
  var Disc = Math.pow(b,2)-4*a*c;
  var l = (b+Math.sqrt(Disc))/(-2*a);
  var k = (-l*B[0]+D[0])/(A[0]+l*C[0]);
  displayFlowerPosition(l-Math.floor(l),k-Math.floor(k));
}
function displayFlowerPosition(l,k){
  id('x').innerText = l;
  id('z').innerText = k;
}

