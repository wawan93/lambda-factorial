import Fact from './fact';

const Zero = f => x => x;
const Succ = n => f => x => f(n(f)(x));

const five = Succ(Succ(Succ(Succ(Succ(Zero)))));
const fact = Fact(five);

console.log(fact(x => x + 1)(0));