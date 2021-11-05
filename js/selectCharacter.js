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
}

/* キャラクター選択 */
function selectCharacter(player) {
    if (scene != 1 || player.sel == 1) {
        console.log(scene, player);
        return;
    }
    if (player1.num == 0) { /* num==0すなわちデフォルト */
        setStatus(player1, player);
        player.sel = 1;
        selectedPlayer++;
        showImage();
        return;
    } else if (player2.num == 0) {
        setStatus(player2, player);
        player.sel = 1;
        selectedPlayer++;
        showImage();
        return;
    } else if (player3.num == 0) {
        setStatus(player3, player);
        player.sel = 1;
        selectedPlayer++;
        showImage();
        return;
    } else if (player4.num == 0) {
        setStatus(player4, player);
        player.sel = 1;
        selectedPlayer++;
        showImage();
        return;
    } else {
        alert("既に選択済みです");
        return;
    }
}
