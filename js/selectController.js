/* ステージ選択 */
function selectStage(stage_num) {
    if (scene != 2) {
        console.log(scene, "シーン2以外でのクリック");
        return;
    }
    switch (stage_num) {
        case 1:
            setStage(1);
            break;
        case 2:
            setStage(2);
            break;
        case 3:
            setStage(3);
            break;
        default:
            break;
    }
    showMap();
    return;
}

/* キャラクター選択 */
function selectCharacter(player) {
    if (scene != 1 || player.sel == true) {
        scene == 1 ? alert("既に選択済みです") : console.log("シーン１以外でのクリック");
        console.log(player, "select failed.");
        return;
    } 
    if (scene == 1 && playerCount == 4) {
        alert("これ以上選べません");
        console.log(player, "select failed.");
        return;
    }

    orderList.forEach(element => { /* elementにorderListの要素 */
        if (element.num == 0 && player.sel == false) {/* num==0すなわちデフォルトキャラ（player0） */
            setStatus(element, player);
            player.sel = true;
            playerCount++;
            showImage();
            return;
        } 
    });
}
