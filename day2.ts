let x = 3;
const s : string = "abc";
const b : boolean = true;

const ar : number[] = [1,2,3,4,5];


//for hashmap style couting string frequency
type FreqCounter = Record<string, number>;

type NatureTree = {species: string, 
             age    : number};

type Tree<T> = null | {left: Tree<T>, val: T, right: Tree<T>};

// let t : Tree<number> = {left: null, val: 4, right: null};

const t : Tree<number> = {left: null, val: 4, right: null};
t.left = {left: null, val: 3, right: null};

//mutation has to do with state
    //if a value of a variable is different in two different states
    //then the variable is mutable

//fine no muation 
const str = "123";
const a = Number(str);
const str2 = a.toString();

//High order function

//a higher order function is a function 
//that takes a function as a parameter
//or returns a function as a result

let nums : number[] = [1,2,3,4,5,6,7,8,9,10];

function squared(x: number): number {
    return x*x;
}

let abc = nums.map(x => x*x);
let def = nums.map(squared);
console.log(abc, def);

// we need side effects here. Technically we could use recursion

//a higher order function
function ourMap<A,B>(f:(a:A)=>B, ar : A[]) : B[]{
    const res : B[] = [];
    for(const val of ar){
        res.push(f(val));
    }
    return res;
}


//filter takes in a predicate function p
//predicate functions are functions that return true or false
//and an array. and returns an array of the elements that satisfy the
//predicate bu satisfy we mean it returns true

function ourFilter<Z>(p : (z:Z)=> boolean, ar: Z[]) : Z[]{
    const filtered : Z[] = [];
    for(const val of ar){
        if(p(val)){
            filtered.push(val);
        }
    }
    return filtered;
}

// reduce takes in an array
// and a function that combines two elements together
function ourReduce<T,A>(f:(t:T, a:A)=>A, init : A, ar: T[]) : A{
    for(const val of ar){
        init = f(val, init);
    }
    return init;
}

ourReduce((a,b)=>a+b,0,[1,2,3])

