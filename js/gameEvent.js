let DEBUG_game = 0;

/* 出た目の分キャラを動かした後に、マス目の効果を反映させるために2ms止める（無名関数） */
const func_timer = (index, time = 500) => {
    const wait_time = () => { // setTimeoutの引数の関数はVoidのため
        squareEffect(orderList[index]);
        showMap();
        showText();
        showImage();
    }
    /* 注意：高速でサイコロを振り続けてゴールすると、すごろく進行中にゲーム終了してしまう（要修正） */
    setTimeout(wait_time, Number(time));
}

/* さいころを振る */
function throwDice() {
    moveOn = randomInteger(1, 6);
    console.log("さいころの目：" + moveOn);

    switch (roundCount) {
        case 1: // 一人目
            gotoPlayer(orderList[0]);
            func_timer(0, );
            break;
        case 2:
            gotoPlayer(orderList[1]);
            func_timer(1, );
            break;
        case 3:
            gotoPlayer(orderList[2]);
            func_timer(2, );
            break;
        case 4:
            gotoPlayer(orderList[3]);
            func_timer(3, );
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
    showMap();
    return;
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
