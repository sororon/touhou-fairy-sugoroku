/* 読み込み後最初に実行 */
allInitialize();
showText();
showImage();

function allInitialize() {
	scene = 0;
	stage = new StageClass(0, 0, 0);
	sqElement = [];
	orderList.forEach(element => {
		setStatus(element, player0);
	});
	characterList.forEach(element => {
		element.sel = false;
	});
	turnCount = 0;
	roundCount = 0;
	playerCount = 0;
	moveOn = 0;
	rankPos = 1;
	turnPlayer = "";
	winPlayer = "";
	console.log("Initial process done.");
	return;
}
