
/* プレイヤーが持つ属性 */
class CharacterClass
{
    constructor(name, nick, order, money, pos, rank, emo, num, sel)
    { /* 名前、ニックネーム、順番、所持金、場所、順位、感情、キャラ判別番号、選択済み */
        this.name = name;
        this.nick = nick;
        this.order = order;
        this.money = money;
        this.pos = pos;
        this.rank = rank;
        this.emo = emo;
        this.num = num;
        this.sel = sel;
    }
}

/* ステージが持つ属性 */
class StageClass
{
    constructor(length, start, goal, direction)
    { /* 長さ、スタート、ゴール、進行方向 */
        this.length = length;
        this.start = start;
        this.goal = goal;
        this.direction = direction;
    }
}

/* 盤面が持つ属性 */
class SquaresClass
{
    constructor(num, type, value)
    { /* ナンバー、マスの属性、変化値 */
        this.num = num;
        this.type = type;
        this.value = value;
    }
}

/* 0:start, 1:goal, 10:getmoney, 11:lostmoney */

/* 名前、ニックネーム、順番、所持金、場所、順位、感情、キャラ判別番号、選択済み */
const sunny = new CharacterClass("サニーミルク", "サニー", 0, 1000, 0, 1, "nomal", 1, 0);
const luna = new CharacterClass("ルナチャイルド", "ルナ　", 0, 1000, 0, 1, "nomal", 2, 0);
const star = new CharacterClass("スターサファイア", "スター", 0, 1000, 0, 1, "nomal", 3, 0);
const clown = new CharacterClass("クラウンピース", "クラピ", 0, 1000, 0, 1, "nomal", 4, 0);
const lily = new CharacterClass("リリーホワイト", "リリー", 0, 1000, 0, 1, "nomal", 5, 0);
const larva = new CharacterClass("エタニティラルバ", "ラルバ", 0, 1000, 0, 1, "nomal", 6, 0);
const rumia = new CharacterClass("ルーミア", "るみゃ", 0, 1000, 0, 1, "nomal", 7, 0); // 未使用
const dai = new CharacterClass("大妖精", "大妖精", 0, 1000, 0, 1, "nomal", 8, 0);
const chirno = new CharacterClass("チルノ", "チルノ", 0, 1000, 0, 1, "nomal", 9, 0);

const player0 = new CharacterClass("p0", "　　　", 0, 1000, 0, 1, "nomal", 0, 0);

/* 実際に使用する変数 */
let player1 = new CharacterClass("p1", "　　　", 0, 1000, 0, 1, "nomal", 0);
let player2 = new CharacterClass("p2", "　　　", 0, 1000, 0, 1, "nomal", 0);
let player3 = new CharacterClass("p3", "　　　", 0, 1000, 0, 1, "nomal", 0);
let player4 = new CharacterClass("p4", "　　　", 0, 1000, 0, 1, "nomal", 0);

/* グローバル変数の定義 */
let stage = new StageClass(0,0,0);
let sqElement = [];
let turnCount;
let roundCount = 0;
let turnPlayer;
let orderList = [player1,player2,player3,player4]; // 初期値として代入
let moveOn = 0;
let rankPos = 1;
let winPlayer;
let selectedPlayer = 0;

/* 0:デフォルト　1:キャラ選択　2:ステージ選択　3:順番決め　4:ゲーム　5:リザルト */
let scene = 0;

function mainButton() {
    switch (scene) {
        case 0: /* デフォルト */
            scene++;
            showText();
            showMap();
            showImage();
            break;
        case 1: /* キャラクター選択 */
            console.log("mode:" + scene, "sel_cnt:" + selectedPlayer);
            if (selectedPlayer == 4) {
                scene++;
                showText();
                showMap();
                showImage();
            }
            break;
        case 2: /* ステージ選択 */
            if (stage.length > 0) {
                scene++;
                showText();
                showMap();
                showImage();
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
            showText();
            showMap();
            showImage();
            break;
        case 5: /* リザルト */
            scene = 0;
            setStatus(player1, player0);
            setStatus(player2, player0);
            setStatus(player3, player0);
            setStatus(player4, player0);
            selectedPlayer = 0;
            /* 全キャラクターの選択済みを解除 */
            sunny.sel = 0;
            luna.sel = 0;
            star.sel = 0;
            clown.sel = 0;
            lily.sel = 0;
            larva.sel = 0;
            dai.sel = 0;
            chirno.sel = 0;
            showText();
            showMap();
            showImage();
            break;
        default:
            break;
    }
    console.log("モード:" + scene);
}
