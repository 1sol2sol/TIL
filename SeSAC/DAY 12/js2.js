/*자바스크립트에서 거짓이라고 취급하는 값 */
/*0, -0, null, undefined, NaNm '' 
제어문에 위와같은 값들이 들어가게되면 거짓으로 취급된다.*/

/*Object 객체 : 여러값들을 묶어놓음*/
let user = {
    name:'kim',
    age: 50,
    address: 'seoul',
    tel: '01012345678'
}

console.log(user);
console.log(user.name);