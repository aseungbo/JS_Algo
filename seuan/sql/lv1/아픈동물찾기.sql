/**
* 쿼리의 실행순서를 고려하여 작성할것.
* 쿼리 실행 순서 : from ▶ where ▶ group by ▶having ▶ select ▶ order by
*/

SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKE_CONDITION = "Sick"
ORDER BY ANIMAL_ID;
