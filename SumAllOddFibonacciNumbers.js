
function sumFibs(num) {
    var myArr = [1];
    var sumNum = 0;
    for(var i=0; i<=num; i++){
        var fibNum = myArr[i] + myArr[i - 1];
            if (i === 0) {
                myArr.push(myArr[i]);
            }else if(i === 1) {
                myArr.push(myArr[i] + 1);
            }else if (fibNum > num) {
                break;
            } else {
                myArr.push(fibNum);
            }
        } 
       myArr = myArr.filter((elem) => elem %2!==0);
       console.log(myArr);
       sumNum = myArr.reduce((x,y) => x+y);
    return sumNum;
  }
  
  console.log(sumFibs(75025));