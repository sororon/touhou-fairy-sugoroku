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
        default:
            break;
    }
    showMap();
    return;
}

/* キャラクター選択 */
function selectCharacter(player) {
    if (scene != 1 || player.sel == true) {
        console.log(player, "select failed");
        scene == 1 ? alert("既に選択済みです") : console.log("シーン１以外でのクリック");
        return;
    } 

    orderList.forEach(element => { /* elementにorderListの要素 */
        if (element.num == 0 && player.sel == false) {/* num==0すなわちデフォルトキャラ（player0） */
            setStatus(element, player);
            player.sel = true;
            selectedPlayer++;
            showImage();
            return;
        } 
    });
}
