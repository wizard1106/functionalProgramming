-- Problem 1

collatzLength :: Integer -> Integer
collatzLength 1 = 1
collatzLength n
    | even n = 1 + collatzLength (div n 2)
    | odd n  = 1 + collatzLength (3*n + 1)

maxCollatz :: Integer -> (Integer, Integer)
maxCollatz limit = maxCollatz' 1 (1,1)
  where
    maxCollatz' :: Integer -> (Integer, Integer) -> (Integer, Integer)
    maxCollatz' n currentMax@(maxLen, maxNum)
        | n > limit = currentMax
        | currentLen > maxLen = maxCollatz' (n+1) (currentLen, n)
        | otherwise = maxCollatz' (n+1) currentMax
        where
          currentLen = collatzLength n

-- Find the number with the longest Collatz sequence within the range of 1 to 1000
main :: IO ()
main = print $ maxCollatz 1000
-- ==============================================================================================
-- Problem 2

productOfOddCubed :: [Integer] -> Integer
productOfOddCubed xs = product $ map (^3) $ filter odd xs

-- ==============================================================================================



