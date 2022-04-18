let DEBUG_stage = 0;

function setStage(stage_num) {
    switch (stage_num) {
        case 1: /* stage1 */
                            /* 長さ、スタート、ゴール */
            const stage1 = new StageClass(21, 0, 20);
            stage = stage1;
            /* マスごとにイベントの設置 */
            sqElement[stage1.start] = new SquaresClass(0, "start", 0);
            sqElement[stage1.goal] = new SquaresClass(20, "goal", 0);
            for (let i = 1; i < 20; i++) {
                if (i % 3 == 0) {
                    sqElement[i] = new SquaresClass(i, "lost-money", 200);
                } else {
                    sqElement[i] = new SquaresClass(i, "get-money", 50);
                }
                sqElement[10] = new SquaresClass(10, "get-money", 1000);
            }
            break;
        case 2: /* stage2 */
            const stage2 = new StageClass(51, 0, 50);
            stage = stage2;
            /* マスごとにイベントの設置 */
            sqElement[stage2.start] = new SquaresClass(0, "start", 0);
            sqElement[stage2.goal] = new SquaresClass(50, "goal", 0);
            for (let i = 1; i < 50; i++) {
                if (i % 3 == 0) {
                    sqElement[i] = new SquaresClass(i, "lost-money", 200);
                } else {
                    sqElement[i] = new SquaresClass(i, "get-money", 50);
                }
            }
            for (let i = 1; i < 40; i++) {
                if (i % 4 == 0) {
                    sqElement[i] = new SquaresClass(i, "goto-place", 2);
                } else if (i % 5 == 0) {
                    sqElement[i] = new SquaresClass(i, "back-place", 5);
                }
            }
            break;
        case 3:
            const stage3 = new StageClass(31, 0, 30);
            stage = stage3;
            /* マスごとにイベントの設置 */
            sqElement[stage3.start] = new SquaresClass(0, "start", 0);
            sqElement[stage3.goal] = new SquaresClass(30, "goal", 0);
            for (let i = 1; i < 30; i++) {
                if (i % 2 == 0 || i % 3 == 0) {
                    sqElement[i] = new SquaresClass(i, "lost-money", 300);
                } else {
                    sqElement[i] = new SquaresClass(i, "get-money", 50);
                }
            }
            break;
        default:
            break;
    }

 if (DEBUG_stage == 1) {
    for (let i = 0; i < 21; i++) {
        console.log(sqElement[i]);
    }
 }
}

/* 
<attirube>
startPoint
goalPoint
getMoney
lostMoney
onpos
backpos
*/
