let DEBUG_game = 0;

/* 出た目の分キャラを動かした後に、マス目の効果を反映させるために2ms止める（無名関数） */
const func_timer = (index, time = 500) => {
    const wait_time = () => { // setTimeoutの引数の関数はVoidのため
        squareEffect(orderList[index]);
        showMap();
        showText();
        showImage();
        check_money(orderList[index]);
    }
    /* 注意：高速でサイコロを振り続けてゴールすると、すごろく進行中にゲーム終了してしまう（要修正） */
    setTimeout(wait_time, Number(time));
}

/* さいころを振る */
function throwDice() {
    moveOn = randomInteger(1, 6);
    console.log("さいころの目：" + moveOn);
    gotoPlayer(orderList[roundCount-1]); // orderList[]はゼロオリジン、roundCountはn人目の判別
    func_timer(roundCount-1);
    if (roundCount >= 4) {
        roundCount = 0; // 4人周ったのでリセット
        turnCount++;
        console.log("ターン" + turnCount);
    }
    roundCount++;
    // さいころを振るプレイヤーの判別 
    whoOrder(roundCount);
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
    return;
}

/* マスごとのイベント呼び出し */
function squareEffect(player) {
    switch (sqElement[player.pos].type) {
        case "goal":
            goalPlayer(player);
            break;
        case "lost-money":
            lostMoney(player, sqElement[player.pos].value);
            break;
        case "get-money":
            getMoney(player, sqElement[player.pos].value);
            break;
        case "goto-place":
            gotoPlace(player, sqElement[player.pos].value);
            break;
        case "back-place":
            backPlace(player, sqElement[player.pos].value);
            break;
        default:
            break;
    }
    return;
}

/* 所持金のチェック */
let check_money = (player) => {
    if (player.money <= 0) {
        alert(player.name + "の所持金がなくなりました\nスタートに戻る")
        player.money = 999;
        player.pos = 0;
        player.emo = "cry";
        // 所持金喪失後の画面更新処理
        showText();
        showImage();
        showMap();
        return;
    } 
}
