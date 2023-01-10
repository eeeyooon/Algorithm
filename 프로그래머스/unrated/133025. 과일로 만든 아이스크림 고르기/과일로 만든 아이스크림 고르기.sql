-- 코드를 입력하세요
SELECT FH.FLAVOR
FROM ICECREAM_INFO II
JOIN FIRST_HALF FH ON FH.FLAVOR = II.FLAVOR
WHERE FH.TOTAL_ORDER > 3000
AND II.INGREDIENT_TYPE = 'fruit_based'
ORDER BY FH.TOTAL_ORDER DESC
