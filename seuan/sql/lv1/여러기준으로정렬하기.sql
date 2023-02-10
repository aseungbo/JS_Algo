/**
* ORDER BY에 왼쪽부터 오른쪽 순서로 다중 정렬이 이루어지고, 해당 정렬 시 ASC, DESC 옵션을 부여할 수 있다.
*/

SELECT ANIMAL_ID, NAME, DATETIME
FROM ANIMAL_INS
ORDER BY NAME, DATETIME DESC;