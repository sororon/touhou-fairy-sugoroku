/* idの検出 */
let m_message = document.getElementById("main-message");
let s_message = document.getElementById("sub-message");
let e_button = document.getElementById("event-button");
let m_pos = document.getElementById("move-pos");

let s_button = [];
for (let index = 1; index < 11; index++) {
    s_button[index] = document.getElementById("select-btn" + index);
}

/* 情報の表示 */
function showText() {
    switch (scene) {
        case 0: /* デフォルト */
            m_message.textContent = String("東方すごろくへようこそ！");
            s_message.textContent = String("一番早くゴールすると勝利！");
            e_button.textContent = String("遊ぶ");
            for (let i = 1; i < 9; i++) {
                s_button[i].textContent = "";
            }
            break;
        case 1: /* キャラクター選択 */
            m_message.textContent = String("一緒に遊ぶキャラクターを選択します");
            s_message.textContent = String("キャラクターを４匹選ぶと次に進めます。");
            e_button.textContent = String("キャラクター選択完了");
            for (let index = 1; index < 9; index++) {
                s_button[index].textContent = String(characterList[index-1].name);
            }
            break;
        case 2: /* ステージ選択 */
            m_message.textContent = String("ステージを選択します");
            s_message.textContent = String("");
            e_button.textContent = String("ステージ選択完了");
            for (let i = 1; i < 9; i++) {
                s_button[i].textContent = "";
            }
            s_button[9].textContent = String("ステージ１");
            s_button[10].textContent = String("ステージ２");
            break;
        case 3: /* 順番決め */
            m_message.textContent = String("プレイヤーの順番を決めます");
            s_message.textContent = String("下にあるボタンをクリックすると順番が決定します");
            e_button.textContent = String("順番を決める");
            for (let i = 9; i < 11; i++) {
                s_button[i].textContent = "";
            }
            break;
        case 4: /* ゲーム */
            m_message.textContent = String("ターン" + turnCount);
            s_message.textContent = String("次は" + turnPlayer + "の番です。");
            e_button.textContent = String("サイコロを振る");
            m_pos.textContent = String("サイコロの目　" + moveOn);
            break;
        case 5: /* リザルト */
            m_message.textContent = String("結果発表");
            s_message.textContent = String("優勝は" + winPlayer + "さんです！おめでとう！");
            e_button.textContent = String("トップに戻る");
            m_pos.textContent = String("");
            s_event.textContent = String("");
            break;
        default:
            break;
    }
    return;
}
