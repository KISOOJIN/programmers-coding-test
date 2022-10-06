// 중앙값 구하기

// Description
// 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다.
// 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다.
// 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
  let answer = 0;
  //array 안의 값을 오름차순으로 정렬한다.
  //array의 중앙값을 리턴한다.
  array.sort(function (a, b) {
    return a - b;
  });
  answer = array[parseInt(array.length / 2)];

  return answer;
}

//오름차순 sort함수를 이용한다.
array.sort((a, b) => a - b);
//내림차순 sort함수를 이용한다.
array.sort((a, b) => b - a);
