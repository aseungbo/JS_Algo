/**
* DATE_FORMAT을 사용하여 DATETIME을 원하는 format으로 변경할 수 있다.
* WHERE OR
*/

SELECT DR_NAME, DR_ID, MCDP_CD, DATE_FORMAT(HIRE_YMD, '%Y-%m-%d') AS HIRE_YMD
FROM DOCTOR
WHERE MCDP_CD = "CS" OR MCDP_CD = "GS"
ORDER BY HIRE_YMD DESC, DR_NAME;