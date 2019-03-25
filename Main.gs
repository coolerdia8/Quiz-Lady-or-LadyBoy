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
      var ss = SpreadsheetApp.openById('197pANRW1izagSakPgVj0TRaVMOX1CADz6zwev64v4bU');//スプレッドシート名（URL）
      
      //変数設定
      var reply_messages;
      var pic_url;
      
      //フラグで状態を判断
      switch(String(com)){
        case QUIZSTART: //「リッチメニューより    
          　reply_messages ='準備中';
           pic_url = 'https://cdn-ak.f.st-hatena.com/images/fotolife/p/purasia8/20190325/20190325121317.jpg';
            postPicLine(pic_url, reply_token);
            break;
        case News:
            reply_messages= getNews();
            //postLine(NEWSMESSE, reply_token);
            postLine(reply_messages, reply_token);
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
  
  function postPicLine(url,reply_token){
      /*
      * LINEに画像を返します
      * @param{String}: 文字起こししたテキスト
      */
       try{    
         var messages = [
           {
             "type": "image",
             "originalContentUrl": url,
             "previewImageUrl": url
           }
         ]
         //返信設定
          var Rurl = 'https://api.line.me/v2/bot/message/reply';
  
         var res = UrlFetchApp.fetch(Rurl, {
           'headers': {
             'Content-Type': 'application/json; charset=UTF-8',
             'Authorization': 'Bearer ' + LINE_ACCESS_TOKEN,
           },
           'method': 'post',
           'payload': JSON.stringify({
             'replyToken': reply_token,
             'messages': messages,
           }),
          });
          } catch (e){
              Logger.log("Error at function postPicLine: %s",e)  
              doc.getBody().appendParagraph(Logger.getLog())
          }
  }
  
  function postLine(text,reply_token){
      /*
      * LINEにテキストを返します
      * @param{String}: 文字起こししたテキスト
      */
       try{    
         var messages = [
           {
             "type": "text",
             "text": text
           }
         ]
         //返信設定
          var Rurl = 'https://api.line.me/v2/bot/message/reply';
  
         var res = UrlFetchApp.fetch(Rurl, {
           'headers': {
             'Content-Type': 'application/json; charset=UTF-8',
             'Authorization': 'Bearer ' + LINE_ACCESS_TOKEN,
           },
           'method': 'post',
           'payload': JSON.stringify({
             'replyToken': reply_token,
             'messages': messages,
           }),
          });
          } catch (e){
              Logger.log("Error at function postLine(text,reply_token): %s",e)  
              doc.getBody().appendParagraph(Logger.getLog())
          }
  }