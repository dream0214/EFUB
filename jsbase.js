
//실습 1 객체생성
const order={
    orderNum : 1,
    orderId : 'efubFront',
    name : '이펍',
    address : '서울특별시 서대문구 이화여대길 52',
};

for (let key in order){
    console.log(`${key}: ${order[key]}`);
}

//실습 2 배열 내장 함수
const onetofive=[1,2,3,4,5];
const triple=onetofive.map(num=>3*num);
const even=triple.filter(num=>num%2===0);
for (let value of even){
    console.log(value);
}
