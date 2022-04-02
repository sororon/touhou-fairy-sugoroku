let s_event = document.getElementById("show-event");

/* ゴール */
function goalPlayer(player) {
    alert("ゴール！");
    s_event.textContent = String(player.name + "がゴールしました！おめでとう！");
    s_event.textContent += String("順位：" + rankPos + "位");
    rankPos++; // 一位がゴールして続けるなら必要
    winPlayer = player.name;
    orderList.forEach(element => {
        resultEmotion(element);
    });
    player.emo = "smile";
    scene++; // リザルト画面へ
    showImage();
    showMap();
    return;
}

/* お金を獲得 */
function getMoney(player, value){
    player.money += value;
    s_event.textContent = String(player.nick + "は" + value + "円のお金を獲得した！\n所持金：" + player.money);
    player.emo = "smile";
    return;
}

/* お金を失う */
function lostMoney(player, value){
    player.money -= value;
    s_event.textContent = String(player.nick + "は" + value + "円のお金を失ってしまった...\n所持金：" + player.money);
    player.emo = "surprise";
    return;
}

/* 進むマス */
function gotoPlace(player, value) {
    player.pos += value;
    s_event.textContent = String(player.nick + "は進むマスに止まった！\n" + value + "マス進む");
    player.emo = "smile";
    return;
}

/* 戻るマス */
function backPlace(player, value) {
    player.pos -= value;
    s_event.textContent = String(player.nick + "は戻るマスに止まってしまった……\n" + value + "マス戻る");
    player.emo = "surprise";
    return;
}
