//@return string (url)
function get_pic_url(ss) {
  var url;
  //var randamid;
  var quizNum = ss.getRange('J1').getValue();

  url = ss.getRange('C'+quizNum).getValue();
  //'https://cdn-ak.f.st-hatena.com/images/fotolife/p/purasia8/20190325/20190325121317.jpg';

  return url;
}

function nameget(ss){

  var name ="";
  quizNum = ss.getRange('J1').getValue();
  name = ss.getRange('A'+ quizNum).getValue();

  return name;
}