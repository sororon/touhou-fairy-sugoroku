/* プレイヤー１～４のid取得 playerImage */
let p_img = [];
p_img[0] = document.getElementById("p1-image");
for(let i = pBase+1; i < pNum; i++){
    let p = document.createElement("span");
    p.setAttribute("id", "p" + i + "-img");
    p_img[i-1].after(p);
    p_img.push(p);
}

/* キャラ画像のid取得 showImage */
let s_img = [];
for (let index = 1; index < 9; index++) {
    s_img[index] = document.getElementById("num" + index + "-img");
}

function resultImage(player) {
    if (player.name != winPlayer) {
        player.emo = "cry";
    }
    return;
}

function showImage() {
    /* キャラ画像表示 */
    if (scene == 0 || scene == 1) { /* キャラクター選択まで */
        s_img[1].innerHTML = '<img src="img/sunny-nomal.png" alt="img1" width=160 height=200>';
        s_img[2].innerHTML = '<img src="img/luna-nomal.png" alt="img2" width=150 height=200>';
        s_img[3].innerHTML = '<img src="img/star-nomal.png" alt="img3" width=160 height=200>';
        s_img[4].innerHTML = '<img src="img/clown-nomal.png" alt="img4" width=150 height=225>';
        s_img[5].innerHTML = '<img src="img/lily-nomal.png" alt="img5" width=150 height=200>';
        s_img[6].innerHTML = '<img src="img/larva-nomal.png" alt="img6" width=200 height=225>';
        s_img[7].innerHTML = '<img src="img/dai-nomal.png" alt="img7" width=150 height=225>';
        s_img[8].innerHTML = '<img src="img/chirno-nomal.png" alt="img8" width=150 height=225>';
    } else { /* キャラクター選択以降 */
        for (let i = 1; i < 9; i++) {
            s_img[i].innerHTML = "";
        }
    }

    /* プレイヤー画像表示 */
    if (scene == 0) { /* リザルト画面から初期画面への遷移でプレイヤーリセット */
        for (let i = 0; i < 4; i++) {
            p_img[i].innerHTML = "";
        }
    }

    for (let i = 0; i < 4; i++) {
        switch (orderList[i].num) {
            case 1: /* サニーミルク */
                switch (orderList[i].emo) {
                    case "nomal":
                        p_img[i].innerHTML = '<img src="img/sunny-nomal.png" alt="img1" width=160 height=200>';
                        break;
                    case "cry":
                        p_img[i].innerHTML = '<img src="img/sunny-cry.png" alt="img1" width=160 height=200>';
                        break;
                    case "smile":
                        p_img[i].innerHTML = '<img src="img/sunny-smile.png" alt="img1" width=160 height=200>';
                        break;
                    case "surprise":
                        p_img[i].innerHTML = '<img src="img/sunny-surprise.png" alt="img1" width=160 height=200>';
                        break;
                    default:
                        break;
                }
                break;
            case 2: /* ルナチャイルド */
                switch (orderList[i].emo) {
                    case "nomal":
                        p_img[i].innerHTML = '<img src="img/luna-nomal.png" alt="img2" width=150 height=200>';
                        break;
                    case "cry":
                        p_img[i].innerHTML = '<img src="img/luna-cry.png" alt="img2" width=150 height=200>';
                        break;
                    case "smile":
                        p_img[i].innerHTML = '<img src="img/luna-smile.png" alt="img2" width=150 height=200>';
                        break;
                    case "surprise":
                        p_img[i].innerHTML = '<img src="img/luna-surprise.png" alt="img2" width=150 height=200>';
                        break;
                    default:
                        break;
                }
                break;
            case 3: /* スターサファイア */
                switch (orderList[i].emo) {
                    case "nomal":
                        p_img[i].innerHTML = '<img src="img/star-nomal.png" alt="img3" width=160 height=200>';
                        break;
                    case "cry":
                        p_img[i].innerHTML = '<img src="img/star-cry.png" alt="img3" width=160 height=200>';
                        break;
                    case "smile":
                        p_img[i].innerHTML = '<img src="img/star-smile.png" alt="img3" width=160 height=200>';
                        break;
                    case "surprise":
                        p_img[i].innerHTML = '<img src="img/star-surprise.png" alt="img3" width=160 height=200>';
                        break;
                    default:
                        break;
                }
                break;
            case 4: /* クラウンピース */
                switch (orderList[i].emo) {
                    case "nomal":
                        p_img[i].innerHTML = '<img src="img/clown-nomal.png" alt="img4" width=150 height=225>';
                        break;
                    case "cry":
                        p_img[i].innerHTML = '<img src="img/clown-cry.png" alt="img4" width=150 height=225>';
                        break;
                    case "smile":
                        p_img[i].innerHTML = '<img src="img/clown-smile.png" alt="img4" width=150 height=225>';
                        break;
                    case "surprise":
                        p_img[i].innerHTML = '<img src="img/clown-surprise.png" alt="img4" width=150 height=225>';
                        break;
                    default:
                        break;
                }
                break;
            case 5: /* リリーホワイト */
                switch (orderList[i].emo) {
                    case "nomal":
                        p_img[i].innerHTML = '<img src="img/lily-nomal.png" alt="img5" width=150 height=200>';
                        break;
                    case "cry":
                        p_img[i].innerHTML = '<img src="img/lily-cry.png" alt="img5" width=150 height=200>';
                        break;
                    case "smile":
                        p_img[i].innerHTML = '<img src="img/lily-smile.png" alt="img5" width=150 height=200>';
                        break;
                    case "surprise":
                        p_img[i].innerHTML = '<img src="img/lily-surprise.png" alt="img5" width=150 height=200>';
                        break;
                    default:
                        break;
                }
                break;
            case 6: /* エタニティラルバ */
                switch (orderList[i].emo) {
                    case "nomal":
                        p_img[i].innerHTML = '<img src="img/larva-nomal.png" alt="img6" width=200 height=225>';
                        break;
                    case "cry":
                        p_img[i].innerHTML = '<img src="img/larva-cry.png" alt="img6" width=200 height=225>';
                        break;
                    case "smile":
                        p_img[i].innerHTML = '<img src="img/larva-smile.png" alt="img6" width=200 height=225>';
                        break;
                    case "surprise":
                        p_img[i].innerHTML = '<img src="img/larva-surprise.png" alt="img6" width=200 height=225>';
                        break;
                    default:
                        break;
                }
                break;
            case 7: /* 大妖精 */
                switch (orderList[i].emo) {
                    case "nomal":
                        p_img[i].innerHTML = '<img src="img/dai-nomal.png" alt="img7" width=150 height=225>';
                        break;
                    case "cry":
                        p_img[i].innerHTML = '<img src="img/dai-cry.png" alt="img7" width=150 height=225>';
                        break;
                    case "smile":
                        p_img[i].innerHTML = '<img src="img/dai-smile.png" alt="img7" width=150 height=225>';
                        break;
                    case "surprise":
                        p_img[i].innerHTML = '<img src="img/dai-surprise.png" alt="img7" width=150 height=225>';
                        break;
                    default:
                        break;
                }
                break
            case 8:  /* チルノ */
                switch (orderList[i].emo) {
                    case "nomal":
                        p_img[i].innerHTML = '<img src="img/chirno-nomal.png" alt="img8" width=150 height=225>';
                        break;
                    case "cry":
                        p_img[i].innerHTML = '<img src="img/chirno-cry.png" alt="img8" width=150 height=225>';
                        break;
                    case "smile":
                        p_img[i].innerHTML = '<img src="img/chirno-smile.png" alt="img8" width=150 height=225>';
                        break;
                    case "surprise":
                        p_img[i].innerHTML = '<img src="img/chirno-surprise.png" alt="img8" width=150 height=225>';
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }
}
