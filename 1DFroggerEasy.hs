import Data.Set (empty, insert, member)
import Data.Array (listArray, (!))
import Debug.Trace (traceShow)
--import qualified Data.Set as S
sample = "6 4 42\n-9 1 42 -2 -3 -3"

main = interact g
g = parse . map read. words

parse (n:s:m:xs) = simulate n m s 0 empty ar
    where ar = listArray (1, n) xs
        


simulate n magic here hops set ar
 | here <= 0            = "left\n"  ++ show hops
 | here > n             = "right\n" ++ show hops
 | ar ! here == magic   = "magic\n" ++ show hops
 | member here set      = "cycle\n" ++ show hops
 | otherwise            = simulate n magic here' (hops + 1) set' ar
 where set'  = insert here set
       here' = here + ar ! here






