
let DEBUG_game = 0;

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

 if (DEBUG_game == 1) {
    console.log(tmpList);
    console.log(orderList);
    console.log(ord);
 }

    fillOrder(player1);
    fillOrder(player2);
    fillOrder(player3);
    fillOrder(player4);

    console.log("list:" + orderList);

    turnCount = 1; // 最初のターン
    roundCount = 1;
    // 一番目のプレイヤーを代入
    whoOrder(1);
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

/* 出た目の分キャラを動かした後に、マス目の効果を反映させるために2ms止める（無名関数） */
const func_timer = (index, time) => {
    const wait_time = () => { // setTimeoutの引数の関数はVoidのため
        squareEffect(orderList[index]);
        showMap();
        showText();
        showImage();
    }
    setTimeout(wait_time, Number(time));
}

/* さいころを振る */
function throwDice() {
    moveOn = randomInteger(1, 6);
    console.log("さいころの目：" + moveOn);

    switch (roundCount) {
        case 1: // 一人目
            gotoPlayer(orderList[0]);
            func_timer(0, 2000);
            break;
        case 2:
            gotoPlayer(orderList[1]);
            func_timer(1, 2000);
            break;
        case 3:
            gotoPlayer(orderList[2]);
            func_timer(2, 2000);
            break;
        case 4:
            gotoPlayer(orderList[3]);
            func_timer(3, 2000);
            break;
        default:
            break;
    }

    if (roundCount >= 4) {
        roundCount = 0; // 4人周ったのでリセット
        turnCount++;
        console.log("ターン" + turnCount);
    }

    roundCount++;
    switch (roundCount) { // さいころを振るプレイヤーの判別 
        case 1:
            whoOrder(1);
            break;
        case 2:
            whoOrder(2);
            break;
        case 3:
            whoOrder(3);
            break;
        case 4:
            whoOrder(4);
            break;
        default:
            break;
    }
    showText();
    showMap();
    showImage();
    return;
}

/* 出た目に従ってプレイヤーが進む */
function gotoPlayer(player) {
 if (DEBUG_game == 1) {
    console.log("now:" + player.pos + "+" + moveOn);
 }
    player.pos += moveOn;
    if (player.pos >= stage.length) { //ゴール以上のマス目進出の防止
        player.pos = stage.goal;
        console.log("ゴール！");
    }
    showText();
    showMap();
    showImage();
}

/* マスごとのイベント呼び出し */
function squareEffect(player) {
    if (sqElement[player.pos].type == "goal") {
        goalPlayer(player);
        return;
    } else if (sqElement[player.pos].type == "lost-money") {
        lostMoney(player, sqElement[player.pos].value);
        return;
    } else if (sqElement[player.pos].type == "get-money") {
        getMoney(player, sqElement[player.pos].value);
        return;
    } else if (sqElement[player.pos].type == "goto-place") {
        gotoPlace(player, sqElement[player.pos].value);
        return;
    } else if (sqElement[player.pos].type == "back-place") {
        backPlace(player, sqElement[player.pos].value);
        return;
    } 
}
