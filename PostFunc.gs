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
                'packageId': 1,
                'stickerId': 14
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
                "altText": "this is a confirm template",
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

function postPicQ2Line(url,reply_token){
    /*
    * LINEに画像と質問を返します
    * @param{String}: 
    */
     try{

       var messages = [
         {
            "type": "template",
            "altText": "this is a buttons template",
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

function postPicAndText2Line(url,reply_token){
    /*
    * LINEに画像とテキストを返します
    * @param{String}: 
    */
     try{    
       var messages = [
         {
           "type": "image",
           "originalContentUrl": url,
           "previewImageUrl": url
         },
         {
          "type": "text",
          "text": 'test'
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