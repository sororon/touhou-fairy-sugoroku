/* プレイヤー１～４のid取得 */
let playerImage = [];
playerImage[0] = document.getElementById("p1-image");
for(let i = pBase+1; i < pNum; i++){
    let p = document.createElement("span");
    p.setAttribute("id", "p" + i + "-img");
    playerImage[i-1].after(p);
    playerImage.push(p);
}

/* キャラ画像のid取得 */
let displayImage = [];
for (let index = 0; index < characterList.length; index++) {
    displayImage[index] = document.getElementById("num" + String(index+1) + "-img");
}

function resultEmotion(player) {
    if (player.name != winPlayer) {
        player.emo = "cry";
    }
    return;
}

function showImage() {
    /* キャラ画像表示 */
    if (scene == 0) { /* デフォルト画面 */
        displayImage[0].innerHTML = '<img src="img/sunny-nomal.png" alt="img1" width=160 height=200>';
        displayImage[1].innerHTML = '<img src="img/luna-nomal.png" alt="img2" width=150 height=200>';
        displayImage[2].innerHTML = '<img src="img/star-nomal.png" alt="img3" width=160 height=200>';
        displayImage[3].innerHTML = '<img src="img/clown-nomal.png" alt="img4" width=150 height=225>';
        displayImage[4].innerHTML = '<img src="img/lily-nomal.png" alt="img5" width=150 height=200>';
        displayImage[5].innerHTML = '<img src="img/larva-nomal.png" alt="img6" width=200 height=225>';
        displayImage[6].innerHTML = '<img src="img/dai-nomal.png" alt="img7" width=150 height=225>';
        displayImage[7].innerHTML = '<img src="img/chirno-nomal.png" alt="img8" width=150 height=225>';
    } else if (scene != 1) { /* キャラクター選択以降はshow-imageは不要 */
        for (let i = 0; i < characterList.length; i++) {
            displayImage[i].innerHTML = "";
        }
    }

    /* プレイヤー画像表示 */
    if (scene == 0) { /* リザルト画面から初期画面への遷移でプレイヤーリセット */
        for (let i = 0; i < 4; i++) {
            playerImage[i].innerHTML = "";
        }
        return;
    }

    for (let i = 0; i < 4; i++) {
        switch (orderList[i].num) {
            case 1: /* サニーミルク */
                switch (orderList[i].emo) {
                    case "nomal":
                        playerImage[i].innerHTML = '<img src="img/sunny-nomal.png" alt="img1" width=160 height=200>';
                        break;
                    case "cry":
                        playerImage[i].innerHTML = '<img src="img/sunny-cry.png" alt="img1" width=160 height=200>';
                        break;
                    case "smile":
                        playerImage[i].innerHTML = '<img src="img/sunny-smile.png" alt="img1" width=160 height=200>';
                        break;
                    case "surprise":
                        playerImage[i].innerHTML = '<img src="img/sunny-surprise.png" alt="img1" width=160 height=200>';
                        break;
                    default:
                        break;
                }
                break;
            case 2: /* ルナチャイルド */
                switch (orderList[i].emo) {
                    case "nomal":
                        playerImage[i].innerHTML = '<img src="img/luna-nomal.png" alt="img2" width=150 height=200>';
                        break;
                    case "cry":
                        playerImage[i].innerHTML = '<img src="img/luna-cry.png" alt="img2" width=150 height=200>';
                        break;
                    case "smile":
                        playerImage[i].innerHTML = '<img src="img/luna-smile.png" alt="img2" width=150 height=200>';
                        break;
                    case "surprise":
                        playerImage[i].innerHTML = '<img src="img/luna-surprise.png" alt="img2" width=150 height=200>';
                        break;
                    default:
                        break;
                }
                break;
            case 3: /* スターサファイア */
                switch (orderList[i].emo) {
                    case "nomal":
                        playerImage[i].innerHTML = '<img src="img/star-nomal.png" alt="img3" width=160 height=200>';
                        break;
                    case "cry":
                        playerImage[i].innerHTML = '<img src="img/star-cry.png" alt="img3" width=160 height=200>';
                        break;
                    case "smile":
                        playerImage[i].innerHTML = '<img src="img/star-smile.png" alt="img3" width=160 height=200>';
                        break;
                    case "surprise":
                        playerImage[i].innerHTML = '<img src="img/star-surprise.png" alt="img3" width=160 height=200>';
                        break;
                    default:
                        break;
                }
                break;
            case 4: /* クラウンピース */
                switch (orderList[i].emo) {
                    case "nomal":
                        playerImage[i].innerHTML = '<img src="img/clown-nomal.png" alt="img4" width=150 height=225>';
                        break;
                    case "cry":
                        playerImage[i].innerHTML = '<img src="img/clown-cry.png" alt="img4" width=150 height=225>';
                        break;
                    case "smile":
                        playerImage[i].innerHTML = '<img src="img/clown-smile.png" alt="img4" width=150 height=225>';
                        break;
                    case "surprise":
                        playerImage[i].innerHTML = '<img src="img/clown-surprise.png" alt="img4" width=150 height=225>';
                        break;
                    default:
                        break;
                }
                break;
            case 5: /* リリーホワイト */
                switch (orderList[i].emo) {
                    case "nomal":
                        playerImage[i].innerHTML = '<img src="img/lily-nomal.png" alt="img5" width=150 height=200>';
                        break;
                    case "cry":
                        playerImage[i].innerHTML = '<img src="img/lily-cry.png" alt="img5" width=150 height=200>';
                        break;
                    case "smile":
                        playerImage[i].innerHTML = '<img src="img/lily-smile.png" alt="img5" width=150 height=200>';
                        break;
                    case "surprise":
                        playerImage[i].innerHTML = '<img src="img/lily-surprise.png" alt="img5" width=150 height=200>';
                        break;
                    default:
                        break;
                }
                break;
            case 6: /* エタニティラルバ */
                switch (orderList[i].emo) {
                    case "nomal":
                        playerImage[i].innerHTML = '<img src="img/larva-nomal.png" alt="img6" width=200 height=225>';
                        break;
                    case "cry":
                        playerImage[i].innerHTML = '<img src="img/larva-cry.png" alt="img6" width=200 height=225>';
                        break;
                    case "smile":
                        playerImage[i].innerHTML = '<img src="img/larva-smile.png" alt="img6" width=200 height=225>';
                        break;
                    case "surprise":
                        playerImage[i].innerHTML = '<img src="img/larva-surprise.png" alt="img6" width=200 height=225>';
                        break;
                    default:
                        break;
                }
                break;
            case 7: /* 大妖精 */
                switch (orderList[i].emo) {
                    case "nomal":
                        playerImage[i].innerHTML = '<img src="img/dai-nomal.png" alt="img7" width=150 height=225>';
                        break;
                    case "cry":
                        playerImage[i].innerHTML = '<img src="img/dai-cry.png" alt="img7" width=150 height=225>';
                        break;
                    case "smile":
                        playerImage[i].innerHTML = '<img src="img/dai-smile.png" alt="img7" width=150 height=225>';
                        break;
                    case "surprise":
                        playerImage[i].innerHTML = '<img src="img/dai-surprise.png" alt="img7" width=150 height=225>';
                        break;
                    default:
                        break;
                }
                break
            case 8:  /* チルノ */
                switch (orderList[i].emo) {
                    case "nomal":
                        playerImage[i].innerHTML = '<img src="img/chirno-nomal.png" alt="img8" width=150 height=225>';
                        break;
                    case "cry":
                        playerImage[i].innerHTML = '<img src="img/chirno-cry.png" alt="img8" width=150 height=225>';
                        break;
                    case "smile":
                        playerImage[i].innerHTML = '<img src="img/chirno-smile.png" alt="img8" width=150 height=225>';
                        break;
                    case "surprise":
                        playerImage[i].innerHTML = '<img src="img/chirno-surprise.png" alt="img8" width=150 height=225>';
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }
    return;
}
