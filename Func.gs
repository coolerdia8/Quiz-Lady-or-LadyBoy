//@return string (url)
function get_pic_url(ss,num) {
  var url;
  var quizNum = ss.getRange('H2').getValue();

  url = ss.getRange('B'+quizNum).getValue();
  return url;
}

function answer_miss(ss){

  var name ="";

  //name = 


  return name;
}