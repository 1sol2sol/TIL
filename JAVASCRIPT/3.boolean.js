// Boolean

// new Boolean(true); 라고도 작성할 수 있으나 객체를 사용하게 되면 메모리를 더 많이 사용하여
// 객체를 사용하지 않을 수 있는 경우에는 굳이 사용할 필요가 없음
const isTrue = new Boolean(true);
console.log(isTrue.valueOf());

/**
 * Falshy
 * 0
 * -0
 * null
 * NaN
 * undefined
 * ''
 */

/**
 * Truthy
 * 1
 * -1
 * '0'
 * 'false'
 * []
 * {}
 */
