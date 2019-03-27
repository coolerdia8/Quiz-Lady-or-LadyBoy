function get_pic_urlTe(ss) {
  var url;
   var ss = SpreadsheetApp.openById('1tSrQFSYdVVBJ_JR_HYqxeYKc3lHNSpjfTsR4NVqzQcs');//スプレッドシート名（URL）
    
  var quizNum = ss.getRange('J1').getValue();

  url = ss.getRange('C'+quizNum).getValue();
  //'https://cdn-ak.f.st-hatena.com/images/fotolife/p/purasia8/20190325/20190325121317.jpg';

  Logger.log("%s",url)
    return url;
  }

function get_ValueTe() {
  var url;
   var ss = SpreadsheetApp.openById('1tSrQFSYdVVBJ_JR_HYqxeYKc3lHNSpjfTsR4NVqzQcs');//スプレッドシート名（URL）
  
  var count = ss.getRange('J1').getValue();
          //count++;
  ss.getRange(QUIZ_NUM_CEL).setValue(count+1);
  //var quizNum = ss.getRange('J1').getValue();

  //url = ss.getRange('C'+quizNum).getValue();
  //'https://cdn-ak.f.st-hatena.com/images/fotolife/p/purasia8/20190325/20190325121317.jpg';

  Logger.log("%s",url)
    return url;
  }