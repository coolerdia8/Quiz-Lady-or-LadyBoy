//@return string (url)
function get_pic_url(ss) {
  var url;
  //var randamid;
  var quizNum = ss.getRange(QUIZ_NUM_CEL).getValue();

  url = ss.getRange('C'+quizNum).getValue();
  //'https://cdn-ak.f.st-hatena.com/images/fotolife/p/purasia8/20190325/20190325121317.jpg';

  return url;
}

function nameget(ss){

  var name ="";
  quizNum = ss.getRange(QUIZ_NUM_CEL).getValue();
  name = ss.getRange('A'+ quizNum).getValue();

  return name;
}

function MakeHarunaQuiz(url){
    try{
        var messages = [
            {
                "type": "template",
                "altText": "クイズ出題中･･･",
                "template": {
                    "type": "buttons",
                    "actions": [
                        {
                            "type": "message",
                            "label": HARUNA_ANS,
                            "text": HARUNA_ANS
                        },
                        {
                            "type": "message",
                            "label": KOURAKU,
                            "text": KOURAKU
                        },
                        {
                            "type": "message",
                            "label": TAKUNO,
                            "text": TAKUNO
                        },
                    ],
                "thumbnailImageUrl": url,
                "title": "女性か男性どっち？",
                "text": "下のボタンから選んでタップしてね",
                "imageSize":"contain"
                }
            }
        ]
        } catch (e){
            Logger.log("Error at function makePicQ2Line(url): %s",e)
            doc.getBody().appendParagraph(Logger.getLog())
    }

    return messages;
}

function postHarunaRetry(url,reply_token){
    try{
        //ハルナの間違い画像を送る
        var messages = [
            {
                "type": "image",
                "originalContentUrl": url,
                "previewImageUrl": url
            },
            {
                "type": "template",
                "altText": "もう一度始めからトライしますか？",
                "template": {
                    "type": "confirm",
                    "actions": [
                        {
                            "type": "message",
                            "label": CONTINUE_YES,
                            "text": RETRY
                        },
                        {
                            "type": "message",
                            "label": CONTINUE_NO,
                            "text": CONTINUE_NO
                        }
                    ],
                    "text": "もう一度トライしますか？"
                }
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
             Logger.log("Error at function postHarunaRetry: %s",e)
             doc.getBody().appendParagraph(Logger.getLog())
         }
}