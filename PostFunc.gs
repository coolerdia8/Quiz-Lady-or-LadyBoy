function postAllLine(ome,name,reply_token){
    try{
        var messages = [
            {   
                "type": "text",
                "text": name
            },
            {   
                "type": "text",
                "text": ome
            },
            {   
                "type": 'sticker',
                'packageId': 2,
                'stickerId': 144
            },
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
             Logger.log("Error at function postAllLine: %s",e)  
             doc.getBody().appendParagraph(Logger.getLog())
        }
}

function postALine(seikai,name,reply_token){
    try{

        var messages = [
            {   
                "type": "text",
                "text": seikai
            },
            {   
                "type": "text",
                "text": name
            },
            {
                "type": "template",
                "altText": "クイズを続けますか？",
                "template": {
                    "type": "confirm",
                    "actions": [
                        {
                            "type": "message",
                            "label": CONTINUE_YES,
                            "text": CONTINUE_YES
                        },
                        {
                            "type": "message",
                            "label": CONTINUE_NO,
                            "text": CONTINUE_NO
                        }
                    ],
                    "text": "次の問題へいきますか？"
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
             Logger.log("Error at function postALine: %s",e)  
             doc.getBody().appendParagraph(Logger.getLog())
         }
 }

function postPicQ2Line(reply_token,messages){
    /*
    * LINEに画像と質問を返します
    * @param{String}: 
    */
     try{       
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
            Logger.log("Error at function postPicQ2Line: %s",e)  
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

function makePicQ2Line(url){
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
                            "label": ANSWER_MISS,
                            "text": ANSWER_MISS
                        },
                        {
                            "type": "message",
                            "label": ANSWER_OK,
                            "text": ANSWER_OK 
                        }
                    ],
                "thumbnailImageUrl": url,
                "title": "女性かオネエどっち？",
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