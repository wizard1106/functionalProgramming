main :: IO ()
main = do
  _ <- getLine
  
  numberLine <- getLine
  
  let numbers = map read $ words numberLine :: [Int]
  
  print $ sum numbers










