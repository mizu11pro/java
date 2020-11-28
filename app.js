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
