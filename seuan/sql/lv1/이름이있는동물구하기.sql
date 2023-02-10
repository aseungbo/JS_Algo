/**
* WHERE col_name IS NULL을 통해 해당 column의 값이 null인지 판단할 수 있다.
*/

SELECT ANIMAL_ID
FROM ANIMAL_INS
WHERE NAME IS NOT NULL
ORDER BY ANIMAL_ID;