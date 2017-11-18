import Fact from './fact';

const Zero = f => x => x;
const Succ = n => f => x => f(n(f)(x));

const five = Succ(Succ(Succ(Succ(Succ(Zero)))));

console.log(Fact(five)(x => x + 1)(0));