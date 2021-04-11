/*
  Q5) 숫자 n을 입력받아 역삼각형 모양의 문자를 "출력"하는 printInvertedTriangle 함수를 완성해주세요. (30점)
  제한사항: n은 2이상, 10 이하의 양수입니다.

  n = 2일 때 아래와 같이 출력
  * *
   *

  n = 10일 때 아래와 같이 출력
  * * * * * * * * * * 
   * * * * * * * * *
    * * * * * * * *
     * * * * * * *
      * * * * * *
       * * * * *
        * * * *
         * * *
          * *
           * 
*/

function printInvertedTriangle(n) {
    return (n > 0) ? '*'.repeat(n) + '\n' + printInvertedTriangle(n-1) : ''
}

console.log(printInvertedTriangle(2));
console.log(printInvertedTriangle(10));