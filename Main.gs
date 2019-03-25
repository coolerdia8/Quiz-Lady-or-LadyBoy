//-------------------------------
//トーク開始
// * @param string com リクエスト本文
// * @param obj    ss  スプレッドシートのオブジェクト
//-------------------------------
function doPost(e) {
  try{
    var reply_token= JSON.parse(e.postData.contents).events[0].replyToken;
    if (typeof reply_token === 'undefined') {
        Logger.log("doPost error");
        return;
    }
  
    //メッセージ取得
    var com = JSON.parse(e.postData.contents).events[0].message.text;
    
    //スプレッドシートの設定
    var ss = SpreadsheetApp.openById('1tSrQFSYdVVBJ_JR_HYqxeYKc3lHNSpjfTsR4NVqzQcs');//スプレッドシート名（URL）
    
    //変数設定
    var reply_messages='';
    var pic_url;
    var name;
    
    //フラグで状態を判断
    switch(String(com)){
      case QUIZSTART: //「リッチメニューより  
        　
          ss.getRange('H2').setValue(1);
          pic_url = get_pic_url(ss);

          postPicQ2Line(pic_url,reply_token)
          break;
      case ANSWER_OK:
          reply_messages ='正解!';
          name = nameget(ss);
          postLine(reply_messages, reply_token);
          break;

      case ANSWER_MISS:
          ss.getRange('H2').setValue(0);
          
          postLine(reply_messages, reply_token);
          break;

      //case CONTINUE_YES:

      default://それ以外    
          //reply_messages[0] =  "error!"; 
          postLine("error!", reply_token);
    }

    return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
 
  } catch (e){
   Logger.log("Failed: %s", e)   
   doc.getBody().appendParagraph(Logger.getLog()) 
 }
 doc.getBody().appendParagraph(Logger.getLog())  
}