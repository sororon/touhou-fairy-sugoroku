/* idの検出 */
let map = document.getElementById("show-map");

const pBase = 0;
const pNum = 4;
let p_sel = [];
p_sel[0] = document.getElementById("show-p1");
for(let i = pBase+1; i < pNum; i++){
    let p = document.createElement("div");
    p.setAttribute("id", "show-p" + (i+1));
    p_sel[i-1].after(p);
    p_sel.push(p);
}

/* マップのプレイヤーを描画 */
function drawPlayer(player) {
    let result = player.nick;
    result += "【";
    for (let i = 0; i < stage.length; i++) {
        if (i == player.pos) {
            result += "◎";
        } else {
            result += "　";
        }
    }
    result += "】";
    result += player.money;
    return result;
}

/* マップのイベントごとに描画 */
function drawMap() {
    let result = "マップ【";
    for (let i = 0; i < stage.length; i++) {
        if (sqElement[i].type == "start") {
            result += "Ⓢ";
        } else if (sqElement[i].type == "goal") {
            result += "Ⓖ";
        } else if (sqElement[i].type == "get-money") {
            result += "＋";
        } else if (sqElement[i].type == "lost-money") {
            result += "－";
        } else if (sqElement[i].type == "goto-place") {
            result += "→";
        } else if (sqElement[i].type == "back-place") {
            result += "←";
        } else {
            result += "？";
        }
    }
    result += "】　　"
    return result;
}

function showPlayer(player) {
    switch (player.order) {
        case 1:
            p_sel[0].textContent = String(drawPlayer(player));
            break;
        case 2:
            p_sel[1].textContent = String(drawPlayer(player));
            break;
        case 3:
            p_sel[2].textContent = String(drawPlayer(player));
            break;
        case 4:
            p_sel[3].textContent = String(drawPlayer(player));
            break;
        default:
            break;
    }
    return;
}

/* マップ（盤面）の表示 */
function showMap() {
    switch (scene) {
        case 0:
            console.log(map); // mapが消えない
            map.textContent = "　";
            p_sel[0].textContent = String("");
            p_sel[1].textContent = String("");
            p_sel[2].textContent = String("");
            p_sel[3].textContent = String("");
        case 2:
            map.textContent = String(drawMap());
        case 4:
            showPlayer(player1);
            showPlayer(player2);
            showPlayer(player3);
            showPlayer(player4);
            break;
        case 5:
            console.log(map); // mapが消えない
            map.textContent = "　";
        default:
            break;
    }
    return;
}
