// 함수 본문을 콜백으로 바꾸기
function toUpperCase(array) {
  return map(array, toUpperCase2);
}

function map(array, fn) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result = [...result, fn(array[i])]
  }

  return result;
}

const toUpperCase2 = (array) => array.toUpperCase();
const toLowerCase = (array) => array.toLowerCase();

function toUpperAndRemoveXinWordsAndJoin() {
}

// ['abc', 'def', 'YXZ']
//   .map(toUpperCase)
//   .filter(notIncloudIn('X'))
//   .join();

test('toUpperCase', () => {
  expect(toUpperCase(['a', 'b', 'c'])).toEqual(['A', 'B', 'C']);

  expect(map(['a', 'b', 'c'], toUpperCase2)).toEqual(['A', 'B', 'C']);
  expect(map(['A', 'B', 'C'], toLowerCase)).toEqual(['a', 'b', 'c']);
  expect(map(['A', 'B', 'C'], (array) => array + 'X')).toEqual(['AX', 'BX', 'CX']);

  // 가독성 어쩔꺼임
  // 언제 결정하냐
});
