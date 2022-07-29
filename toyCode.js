import readline from 'readline';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}

const arr1 = [];
const arr2 = [];
for(let i = 0 ; i < 10; i++){

  arr1.push(getRandomInt(1000000,2000000));
  arr2.push(getRandomInt(1000000,2000000));
}

arr2.pop();

console.log("다음 숫자 중에 하나를 맘속 깊이 생각하고 오른손 검지손가락으로 Enter 를 누르세요\n", arr1);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on("line", function(line) {
  for(let i = 0 ; i < 100000; i++){
    console.log("AI 가 독심술을 사용 중입니다.")
  }
  console.log("생각한 숫자를 제거하였습니다.\n", arr2);
  
  rl.close();
});




