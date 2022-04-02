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
