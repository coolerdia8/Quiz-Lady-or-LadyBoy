// プロパティ取得
var PROPERTIES = PropertiesService.getScriptProperties();

//トークンを取得
var LINE_ACCESS_TOKEN = PROPERTIES.getProperty('LINE_ACCESS_TOKEN');//アクセストークンを記入

//ログ出力用にGoogle Docs連携する
var GOOGLE_DOCS_ID = PROPERTIES.getProperty('GOOGLE_DOCS_ID');
var doc = DocumentApp.openById(GOOGLE_DOCS_ID);

var QUIZSTART ='クイズ開始';
var News = 'タイのホットなニュース教えて';
var NEWSMESSE ='こちらです↓\n';