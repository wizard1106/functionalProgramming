inf = [1..]

-- check for 2,000,001

ans :: Bool
ans = elem 20000000000000000000001 inf


-- Int, Integer, Char, String 
    -- String is a list of characters
    -- Char is a single character
val :: Integer
val = 7

s :: String
s = "hello"

-- :: has type of

vals :: [Integer]
vals = [1,2,3,4,5]

square :: Num a => a -> a
square x = x^2

squared  = square val

add :: Integer -> (Integer -> Integer)
add x y = x + y

add2 = add 2

-- write a function that takes in a list of numbers 
-- and returns the list of them sqaured
--pattern matching(x:xs)
-- x is the head of a list, and xs is the rest
squareList [] = []
squareList (x:xs) = x^2 : squareList xs

squareList' = map (^2)

squares = squareList' [1,2,3,4,5]


-- code a function that takes in a list of integer and returns the sum of
    -- the evens squared
-- function composition

rock :: [Integer] -> Integer
rock = sum . map (^2) . filter even

filter' _ [] = []
filter' p (x:xs) 
 | p x       = x : filter' p xs
 | otherwise = filter' p xs

-- lambda expression starts with \
evens = filter (\x->mod x 2 == 0)


map' _ [] = []
map' f (x:xs) = f x : map' f xs

foldr' :: (a -> b -> b) -> b -> [a] -> b
foldr' f e [] = e
foldr' f e (x:xs) = f x (foldr' f e xs)

exampleFold :: Integer
exampleFold = foldr' (\v ac -> v + ac) 0 [1,2,3,4,5]


longer :: String -> String -> String
longer x y 
    | length x > length y = x
    | otherwise           = y

strings = ["alice", "bob", "charlie", "david", "edward", "darrell sibley"]

longestString :: String
longestString = foldr' longer "" strings




--collatz conjecture of 5
-- 5 -> 16 -> 8 -> 4 -> 2 -> 1
--count how many it takes

-- counts how long a collatz chain is
collatz 1 = 1
collatz n 
    | even n = 1 + collatz (div n 2)
    | odd n  = 1 + collatz (3*n + 1)

-- returns the collatz chain
collatzList 1 = [1]
collatzList n 
    | even n = n : collatzList (div n 2)
    | odd n  = n : collatzList (3*n + 1)










