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
        scene == 1 ? alert("既に選択済みです") : console.log("シーン１以外でのクリック");
        return;
    }
    
    lst = [player1, player2, player3, player4]
    lst.forEach((element,index) => { /* elementにlstの要素 */
        if (element.num == 0 && player.sel == 0) {/* num==0すなわちデフォルトキャラ（player0） */
            setStatus(element, player);
            player.sel = 1;
            selectedPlayer++;
            showImage();
            console.log(index); //index番目
            return;
        } 
    });
}
