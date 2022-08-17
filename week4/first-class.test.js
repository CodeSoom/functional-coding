// 함수 본문을 콜백으로 바꾸기
function toUpperCase(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result = [...result, array[i].toUpperCase()]
  }

  return result;
}

test('toUpperCase', () => {
  expect(toUpperCase(['a', 'b', 'c'])).toEqual(['A', 'B', 'C']);
});
