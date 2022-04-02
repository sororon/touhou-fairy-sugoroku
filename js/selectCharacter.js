/* ステージ選択 */
function selectStage(stage_num) {
    if (scene != 2) {
        console.log(scene);
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
        console.log(scene, player);
        scene == 1 ? alert("既に選択済みです") : console.log("シーン１以外でのクリック");
        return;
    }
    
    // let playerList = [player1, player2, player3, player4];
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
