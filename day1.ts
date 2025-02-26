//type alias
type Identity = <T> (t: T) => T;

function identity<A>(x: A): A {
    return x;
}


const f : Identity = identity;


// f o g
    // g : (x: X) => Y
    // f : (y: Y) => Z
function compose<X, Y, Z>(f:(y:Y)=>Z,g:(x:X)=>Y): (x:X) => Z{
    return x => f(g(x))
}

function successor(n: number): number {
    return n + 1;
}

//     let isPrime = [... Array(Math.floor(Math.sqrt(n)+ 1))]
//         .map((_,i) => i+2)
//         .every(v => n%v != 0)
//     return !isPrime;
// }

//intersection of two lists
function intersection<T>(bob : T[], alice : T[]): T[]{
    //functional
    const set = new Set(alice);
    return bob.filter(v => !set.has(v));
}

// a pure function has no side effects
// a pure function, given the same input, will always return the same output




