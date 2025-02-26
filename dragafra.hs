import Control.Monad (when)


main = interact g



--f :: String -> String

-- :: means has the type
g :: String -> String
g s = show (x - y)
    where w = words s :: [String]
          [x, y] = map read w :: [Int]





