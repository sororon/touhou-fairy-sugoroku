/* idの検出 */
let t_count = document.getElementById("turn-count");
let t_name = document.getElementById("who-turn");
let e_button = document.getElementById("event-button");
let m_pos = document.getElementById("move-pos");

let s_button = [];
s_button[1] = document.getElementById("select-btn1");
s_button[2] = document.getElementById("select-btn2");
s_button[3] = document.getElementById("select-btn3");
s_button[4] = document.getElementById("select-btn4");
s_button[5] = document.getElementById("select-btn5");
s_button[6] = document.getElementById("select-btn6");
s_button[7] = document.getElementById("select-btn7");
s_button[8] = document.getElementById("select-btn8");
s_button[9] = document.getElementById("select-btn9");
s_button[10] = document.getElementById("select-btn10");

/* 情報の表示 */
function showText() {
    switch (scene) {
        case 0: /* デフォルト */
            t_count.textContent = String("東方すごろくへようこそ！");
            t_name.textContent = String("一番早くゴールすると勝利！");
            e_button.textContent = String("遊ぶ");
            for (let i = 1; i < 9; i++) {
                s_button[i].textContent = "";
            }
            break;
        case 1: /* キャラクター選択 */
            t_count.textContent = String("一緒に遊ぶキャラクターを選択します");
            t_name.textContent = String("キャラクターを４匹選ぶと次に進めます。");
            e_button.textContent = String("キャラクター選択完了");
            s_button[1].textContent = String("サニーミルク");
            s_button[2].textContent = String("ルナチャイルド");
            s_button[3].textContent = String("スターサファイア");
            s_button[4].textContent = String("クラウンピース");
            s_button[5].textContent = String("リリーホワイト");
            s_button[6].textContent = String("エタニティラルバ");
            s_button[7].textContent = String("大妖精");
            s_button[8].textContent = String("チルノ");
            break;
        case 2: /* ステージ選択 */
            t_count.textContent = String("ステージを選択します");
            t_name.textContent = String("");
            e_button.textContent = String("ステージ選択完了");
            for (let i = 1; i < 9; i++) {
                s_button[i].textContent = "";
            }
            s_button[9].textContent = String("ステージ１");
            s_button[10].textContent = String("ステージ２");
            break;
        case 3: /* 順番決め */
            t_count.textContent = String("プレイヤーの順番を決めます");
            t_name.textContent = String("下にあるボタンをクリックすると順番が決定します");
            e_button.textContent = String("順番を決める");
            for (let i = 9; i < 11; i++) {
                s_button[i].textContent = "";
            }
            break;
        case 4: /* ゲーム */
            t_count.textContent = String("ターン" + turnCount);
            t_name.textContent = String("次は" + turnPlayer + "の番です。");
            e_button.textContent = String("サイコロを振る");
            m_pos.textContent = String(moveOn);
            break;
        case 5: /* リザルト */
            t_count.textContent = String("結果発表");
            t_name.textContent = String("優勝は" + winPlayer + "さんです！おめでとう！");
            e_button.textContent = String("トップに戻る");
            m_pos.textContent = String("");
            s_event.textContent = String("");
            break;
        default:
            break;
    }
    return;
}
