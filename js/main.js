/* 実際に使用するキャラクター変数 */
let player1 = new CharacterClass("？？？", "　　　", 0, 1000, 0, 1, "nomal", 0, false);
let player2 = new CharacterClass("？？？", "　　　", 0, 1000, 0, 1, "nomal", 0, false);
let player3 = new CharacterClass("？？？", "　　　", 0, 1000, 0, 1, "nomal", 0, false);
let player4 = new CharacterClass("？？？", "　　　", 0, 1000, 0, 1, "nomal", 0, false);
let orderList = [player1, player2, player3, player4]; // 初期値として代入

/* グローバル変数の定義 */
let stage = new StageClass(0, 0, 0);
let sqElement = [];
let turnCount = 0;
let roundCount = 0;
let playerCount = 0;
let moveOn = 0;
let rankPos = 1;
let turnPlayer = "";
let winPlayer = "";

/* 0:デフォルト　1:キャラ選択　2:ステージ選択　3:順番決め　4:ゲーム　5:リザルト */
let scene = 0;

function mainButton() {
    switch (scene) {
        case 0: /* デフォルト */
            scene++;
            showText();
            break;
        case 1: /* キャラクター選択 */
            if (playerCount == 4) {
                scene++;
                showText();
                showImage();
            }
            break;
        case 2: /* ステージ選択 */
            if (stage.length > 0) {
                scene++;
                showText();
                showMap();
            }
            break;
        case 3: /* 順番を決める */
            decideOrder();
            scene++;
            showText();
            showMap();
            showImage();
            break;
        case 4: /* ゲームモード */
            throwDice();
            break;
        case 5: /* リザルト */
            allInitialize();
            showText();
            showMap();
            showImage();
            break;
        default:
            break;
    }
    console.log("mainButton　モード:" + scene);
    return;
}
