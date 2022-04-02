/* 名前、ニックネーム、順番、所持金、場所、順位、感情、キャラ判別番号、選択済み */
const sunny = new CharacterClass("サニーミルク", "サニー", 0, 1000, 0, 1, "nomal", 1, false);
const luna = new CharacterClass("ルナチャイルド", "ルナ　", 0, 1000, 0, 1, "nomal", 2, false);
const star = new CharacterClass("スターサファイア", "スター", 0, 1000, 0, 1, "nomal", 3, false);
const clown = new CharacterClass("クラウンピース", "クラピ", 0, 1000, 0, 1, "nomal", 4, false);
const lily = new CharacterClass("リリーホワイト", "リリー", 0, 1000, 0, 1, "nomal", 5, false);
const larva = new CharacterClass("エタニティラルバ", "ラルバ", 0, 1000, 0, 1, "nomal", 6, false);
const dai = new CharacterClass("大妖精", "大妖精", 0, 1000, 0, 1, "nomal", 7, false);
const chirno = new CharacterClass("チルノ", "チルノ", 0, 1000, 0, 1, "nomal", 8, false);
const character_lst = [sunny, luna, star, clown, lily, larva, dai, chirno];

/* デフォルトキャラクター */
const player0 = new CharacterClass("p0", "　　　", 0, 1000, 0, 1, "nomal", 0, false);

/* キャラクターステータスのセッター */
function setStatus(player, user) {
    player.name = user.name;
    player.nick = user.nick;
    player.order = user.order;
    player.money = user.money;
    player.pos = user.pos;
    player.rank = user.rank;
    player.emo = user.emo;
    player.num = user.num;
    player.sel = user.sel;
	console.log(player, "↑set", user, "success.");
    return;
}
