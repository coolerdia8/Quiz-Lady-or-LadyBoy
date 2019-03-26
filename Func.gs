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
