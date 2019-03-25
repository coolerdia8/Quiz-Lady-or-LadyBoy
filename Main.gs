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
    var count=1;
    var isquizNum =ss.getRange('H2').getValue();
    
    //Quizの初期化
    if(isquizNum > QUIZNUMBERS ){
      ss.getRange('H2').setValue(0);
    }

    //クイズの処理
    switch(String(com)){
      case QUIZSTART: //「リッチメニューより  
        　
          ss.getRange('H2').setValue(1);
          pic_url = get_pic_url(ss);

          postPicQ2Line(pic_url,reply_token)
          break;
      case ANSWER_OK:
          reply_messages ='正解!';
          name = nameget(ss);
          name = '写真の子は '+ name;
          
          //全問正解なら
          if(isquizNum == QUIZNUMBERS){
            reply_messages=ALLMARU;
            ss.getRange('H2').setValue(0);
            postAllLine(reply_messages, name,reply_token);
          }else{
            postALine(reply_messages, name,reply_token);          
          }
          break;
      case ANSWER_MISS://最初からを促す
          ss.getRange('H2').setValue(0);
          reply_messages ='Nooooo!';
          
          postLine(reply_messages, reply_token);
          break;

      case CONTINUE_YES://つぎの問題へ
          count = ss.getRange('H2').getValue();
          count++;
          ss.getRange('H2').setValue(count);

          pic_url = get_pic_url(ss);

          postPicQ2Line(pic_url,reply_token)
      break;

      case CONTINUE_NO:
          ss.getRange('H2').setValue(0);
          //postENDLine(reply_messages, name,reply_token);
          postLine("Fin!", reply_token);    
      break;

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