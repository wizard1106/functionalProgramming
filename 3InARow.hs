countTripleNumbers :: Integer -> Integer
countTripleNumbers n = countTripleNumbersHelper 1 where
    countTripleNumbersHelper a
        | tripleProduct a >= n = 0
        | otherwise = 1 + countTripleNumbersHelper (a + 1)
    tripleProduct a = a * (a + 1) * (a + 2)

main :: IO ()
main = do
    n <- readLn :: IO Integer
    print $ countTripleNumbers n





