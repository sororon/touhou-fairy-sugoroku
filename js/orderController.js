let DEBUG_order = 0;

/* min~maxからランダムな整数を生成 */
function randomInteger(min, max) {
    let result = 0;
    result = Math.floor(Math.random() * (max + 1 - min)) + min;
    return result;
}

/* プレイヤーの順番を決定 */
function decideOrder() {
    let tmpList = [];
    for (let i = 0; i < 4; i++) {
        tmpList[i] = randomInteger(10, 100);
    }

    orderList = tmpList.slice().sort();

    let ord = [];
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            if (tmpList[i] == orderList[j]){
                ord.push(j+1);
            }
        }
    }

    player1.order = ord[0];
    player2.order = ord[1];
    player3.order = ord[2];
    player4.order = ord[3];

 if (DEBUG_order == 1) {
    console.log(tmpList);
    console.log(orderList);
    console.log(ord);
 }

    /* 配列ordで決まった順に実際に使用するorderListの配列を埋める */
    fillOrder(player1);
    fillOrder(player2);
    fillOrder(player3);
    fillOrder(player4);

    console.log("list:" + orderList);

    turnCount = 1; // 最初のターン
    roundCount = 1;
    // 一番目のプレイヤーを代入
    whoOrder(1);
    return;
}

/* 実際に使用する順番のリストを順番通りに埋める */
function fillOrder(player) {
    console.log("fill" + player);
    for (let i = 0; i < 4; i++) {
        if (player.order == 1) {
            orderList[0] = player;
        } else if (player.order == 2) {
            orderList[1] = player;
        } else if (player.order == 3) {
            orderList[2] = player;
        } else if (player.order == 4) {
            orderList[3] = player;
        } 
    }
    return;
}

/* 誰のターンかを判別 */
function whoOrder(num) {
    if (player1.order == num) {
        turnPlayer = player1.name;
    } else if (player2.order == num) {
        turnPlayer = player2.name;
    } else if (player3.order == num) {
        turnPlayer = player3.name;
    } else if (player4.order == num) {
        turnPlayer = player4.name;
    } 
    return;
}
