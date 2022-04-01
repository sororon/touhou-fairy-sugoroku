function setStatus(player, user) {
    console.log(player, user);
    player.name = user.name;
    player.nick = user.nick;
    player.order = user.order;
    player.money = user.money;
    player.pos = user.pos;
    player.rank = user.rank;
    player.emo = user.emo;
    player.num = user.num;
    player.sel = user.sel;
    return;
}

/* main */

showText();
showImage();
