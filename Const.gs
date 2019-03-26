// プロパティ取得
var PROPERTIES = PropertiesService.getScriptProperties();

//トークンを取得
var LINE_ACCESS_TOKEN = PROPERTIES.getProperty('LINE_ACCESS_TOKEN');//アクセストークンを記入

//ログ出力用にGoogle Docs連携する
var GOOGLE_DOCS_ID = PROPERTIES.getProperty('GOOGLE_DOCS_ID');
var doc = DocumentApp.openById(GOOGLE_DOCS_ID);

var QUIZSTART ='すたーと';
var ANSWER_MISS ='女性';
var ANSWER_OK ='男性';
var CONTINUE_YES='Yes';
var CONTINUE_NO='NO';
//var QUIZNUMBERS='1';macgittest
var ALLMARU ='全問正解!おめでとう!!';
var BATSU ='ブッブー！ 不正解で〜す';
var RETRY='すたーと';
var TAKUNO ='角野卓三！？';
var JYANEYO ='角野卓三じゃねーわ!!';
var TIGAU ='違います。';

var News = 'タイのホットなニュース教えて';
var NEWSMESSE ='こちらです↓\n';
var HARUNA_ANS='女性...';
var KOURAKU ='今日ラーメン屋さんお休みですか？';
