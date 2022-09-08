const sentence = `계절이 지나가는 하늘에는
가을로 가득 차 있습니다.

나는 아무 걱정도 없이
가을 속의 별들을 다 헤일 듯합니다.

가슴 속에 하나 둘 새겨지는 별을
이제 다 못 헤는 것은
쉬이 아침이 오는 까닭이요,
내일 밤이 남은 까닭이요,
아직 나의 청춘이 다하지 않은 까닭입니다.

별 하나에 추억과
별 하나에 사랑과
별 하나에 쓸쓸함과
별 하나에 동경과
별 하나에 시와
별 하나에 어머니, 어머니,

어머님, 나는 별 하나에 아름다운 말 한마디씩 불러 봅니다. 소학교 때 책상을 같이 했던 아이들의 이름과, 패, 경, 옥, 이런 이국 소녀들의 이름과, 벌써 아기 어머니 된 계집애들의 이름과, 가난한 이웃 사람들의 이름과, 비둘기, 강아지, 토끼, 노새, 노루, 프랑시스 잠 라이너 마리아 릴케 이런 시인의 이름을 불러 봅니다.

이네들은 너무나 멀리 있습니다.
별이 아스라이 멀듯이.

어머님,
그리고 당신은 멀리 북간도에 계십니다.

나는 무엇인지 그리워
이 많은 별빛이 내린 언덕 위에
내 이름자를 써 보고
흙으로 덮어 버리었습니다.

따는 밤을 새워 우는 벌레는
부끄러운 이름을 슬퍼하는 까닭입니다.

그러나 겨울이 지나고 나의 별에도 봄이 오면
무덤 위에 파란 잔디가 피어나듯이
내 이름자 묻힌 언덕 위에도
자랑처럼 풀이 무성할 거외다.
`;


  // const wordMap = {};

  // words.forEach((word) => {
  //   if (wordMap[word]) {
  //     wordMap[word] = wordMap[word] + 1;
  //   } else {
  //     wordMap[word] = 1;
  //   }
  // });

const run = (s) => {
  const words = s.replace(/\.|,/g, '').replace(/\n+/g, ' ').split(' ');

  const wordMap = words.reduce((acc, cur) => ({
    ...acc,
    [cur]: (acc[cur] ?? 0) + 1,
  }), {});

  Object.entries(wordMap).sort(([aKey, aValue], [bKey, bValue]) => {
    if (aValue === bValue) {
      return aKey > bKey ? 1 : -1;
    } else {
      return bValue - aValue;
    }
  })
    .slice(0, 10)
    .map(([key, value]) => `${key} ${value}`)
    .forEach((it) => console.log(it));
}

// test('run', () => {
run(sentence);
// });