


main = interact f
f :: String -> String
f = g . lines

g :: [String] -> String
g ("1" : [s]) = s
g ("2" :_) = "blandad best"






