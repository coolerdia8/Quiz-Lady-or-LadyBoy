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
    var isquizNum =ss.getRange('J1').getValue();
    var Quiznumbers =ss.getRange('J2').getValue();
    var messages;

    //Quizの初期化
    if(isquizNum > Quiznumbers ){
      ss.getRange('J1').setValue(1);
    }

    //クイズの処理
    switch(String(com)){
      case QUIZSTART: //「リッチメニューより
        　
          ss.getRange('J1').setValue(1);
          pic_url = get_pic_url(ss);

          messages = makePicQ2Line(pic_url);
          postPicQ2Line(reply_token,messages);
          break;
      case HARUNA_ANS:
      case ANSWER_OK:
          reply_messages ='正解!';
          name = nameget(ss);
          name = '写真の子は '+ name;

          //全問正解なら
          if(isquizNum == Quiznumbers){
            reply_messages=ALLMARU;
            ss.getRange('J1').setValue(0);
            postAllLine(reply_messages, name,reply_token);
          }else{
            postALine(reply_messages, name,reply_token);
          }
          break;
      case ANSWER_MISS://最初からを促す
          ss.getRange('J1').setValue(0);
          reply_messages =BATSU;
          //postLine(reply_messages, reply_token);
          //リトライのテキストを送る
          postRetry(reply_messages, reply_token);
          break;

      case CONTINUE_YES://つぎの問題の処理
          count = ss.getRange('J1').getValue();
          count++;
          //ss.getRange('J1').setValue(count);
          ss.getRange('J1').setValue(5);
          pic_url = get_pic_url(ss);
          if(ss.getRange('A'+count).getValue()=='ハリセン近藤春菜'){
              messages = MakeHarunaQuiz(pic_url);
              postPicQ2Line(reply_token,messages);
              break;
          }
          messages = makePicQ2Line(pic_url);
          postPicQ2Line(reply_token,messages);
          break;

      case CONTINUE_NO://クイズの途中で終わる
          ss.getRange('J1').setValue(0);
          postENDLine('またチャレンジしてね!!', reply_token);
          break;
      case TAKUNO:
        ss.getRange('J1').setValue(0);
          reply_messages =TIGAU;
          postRetry(reply_messages, reply_token);
          break;
      case KOURAKU:
        ss.getRange('J1').setValue(0);
          reply_messages =JYANEYO;
          postRetry(reply_messages, reply_token);
          break;
      default://それ以外
        postRetry("error!最初からリトライ", reply_token);
    }

    return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);

  } catch (e){
   Logger.log("Failed: %s", e)
   doc.getBody().appendParagraph(Logger.getLog())
 }
 doc.getBody().appendParagraph(Logger.getLog())
}
