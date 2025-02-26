countVowels :: String -> Int
countVowels s = length $ filter (`elem` "AEIOUaeiou") s

main :: IO ()
main = do
  s <- getLine
  print $ countVowels s






