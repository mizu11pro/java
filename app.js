// var hello = 'Hello World';
// alert(hello);

// var int1 = 1; 整数代入
// alert(int1);
// var int2 = -10; 負数代入
// alert(int2);
// var float = 3.14; 少数代入
// alert(float);

// 四則演算
// alert(4 + 3);
// alert(5 - 3);
// alert(7 * 3);
// alert(8 / 2);

// alert('Hello' + 'World');

var str1 = 'java';
var str2 = 'script';
alert(str1 + str2);

// 条件分岐
// if(条件1){
//   処理1
// }
// 条件を満たすときは,処理1を実行

// if(条件1){
//   処理1
// } else{
//   処理2
// }
// 条件1を満たすときは処理1,満たさないときは処理2を実行

// if(条件１){
//   処理1
// } else if(条件2){
//   処理2
// } else{
//   処理3
// }
// 条件1を満たすときは処理1,条件2を満たすときは処理2,どちらも満たさないときは処理３を実行

var orange = 100;
var apple = 120;

if (orange < apple) {
  alert('みかんの値段はりんごより安い');
} else if (orange == apple) {
  alert(' みかんとりんごが同じ値段');
} else {
  alert('みかんの値段がりんごより高い')
}

// 繰り返し処理
// While文

// While(条件){
//   処理
// }
// 引数の条件がtrueの間,波括弧内の処理が繰り返される

var max = 100;
var num = 1;
var count = 0;

while (num < max) {
  num = num * 2;
  count = count + 1;
}
alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// do   While文
// 条件式のtrue/falseに関わらず,最初の1回だけは必ず処理が行われます
// その後,条件式を評価して,繰り返し処理を続けるか/抜けるかを決めます
// do{
//   最低1回は行われる処理
// }while(条件式);

// for文
// for文は, 決められた回数の処理を繰り返す時に使います
// [繰り返す回数]を初期値で設定する
// [条件を満たす場合の処理]を記述する
// for (初期値; 条件式; 増減値) {
//   繰り返し処理
// }

var i;
var num = 0;

for (i = 1; i < 11; i++) {
  num = num + i;
}
alert('1から10まで足し算した結果は' + num + 'です');

// 関数
// function 関数名(){
//   処理内容
// }

// 引数と戻り値
// function 関数名(引数){  出力する値
//   処理
//   return 戻り値;  出力される値
// }

// メイン部分
var alertString;
alertString = addString('Webcamp');
// 作成した関数を呼び出す
alert(alertString);
// 作成した関数
function addString(strA) {
  var addStr = "Hello " + strA;
  return addStr;
}

// 入力ダイアログ(prompt)
// var promptStr = prompt('何か好きな文字を入力してください');
// alert(promptStr);

// 複数の関数定義
// じゃんけんの手を入力してもらうプロンプトランを作成
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// グー,チョキ,パー,キャンセル以外だったらalertを表示 その後またpromptに飛ぶ記述
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)) {
  alert('グー・チョキ・パーから選んでください。');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');
}
// じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();
// ユーザの手をjavascriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = winLose(user_hand, js_hand);
// 結果を表示させる
// キャンセルじゃなかったらじゃんけん結果を出力し、キャンセルならelse処理
if (user_hand != null) {
  alert('あなたが選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}

// ランダムでじゃんけんの手を作成する関数
function getJShand() {
  var js_hand_num = Math.floor(Math.random() * 3);
  var hand_name;
  if (js_hand_num == 0) {
    hand_name = "グー";
  } else if (js_hand_num == 1) {
    hand_name = "チョキ";
  } else if (js_hand_num == 2) {
    hand_name = "パー";
  }
  return hand_name;
}
// ユーザの手とjavascriptのじゃんけんの手を比べる関数
function winLose(user, js) {
  var winLoseStr;

  if (user == "グー") {
    if (js == "グー") {
      winLoseStr = "あいこ";
    } else if (js == "チョキ") {
      winLoseStr = "勝ち";
    } else if (js == "パー") {
      winLoseStr = "負け";
    }
  } else if (user == "チョキ") {
    if (js == "グー") {
      winLoseStr = "負け";
    } else if (js == "チョキ") {
      winLoseStr = "あいこ";
    } else if (js == "パー") {
      winLoseStr = "勝ち";
    }
  } else if (user == "パー") {
    if (js == "グー") {
      winLoseStr = "勝ち";
    } else if (js == "チョキ") {
      winLoseStr = "負け";
    } else if (js == "パー") {
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}

// ネストしたクラス

// 	│
// 	├　インナークラス （ = 内部クラス )
// 	│
// 	│	│
// 	│	│
// 	│	├　ローカルクラス ( = ローカル内部クラス )
// 	│	│
// 	│	│
// 	│	├　非 static メンバクラス
// 	│	│
// 	│	│
// 	│	└　匿名クラス ( = 無名クラス )
// 	│
// 	│
// 	│
// 	│
// 	└　static なメンバクラス
