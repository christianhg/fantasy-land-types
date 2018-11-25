type Predicate<A> = (a: A) => boolean

type Transformer<A, B> = (a: A) => B

type Filterable<A> = {
  filter(f: Predicate<A>): Filterable<A>
}

type Functor<A> = {
  map<B>(f: Transformer<A, B>): Functor<B>
}

type Semigroup<A> = {
  concat(a: Semigroup<A>): Semigroup<A>
}

type Monoid<A> = Semigroup<A> & {
  empty(): Monoid<A>
}

type Apply<A> = Functor<A> & {
  ap<B>(b: Apply<Transformer<A, B>>): Apply<B>
}

type Applicative<A> = Apply<A> & {
  of(a: A): Applicative<A>
}

type Foldable<A> = {
  reduce(f: (a: A) => A, a: A): A
}

type Chain<A> = Apply<A> & {
  chain<B>(f: (a: A) => Chain<B>): Chain<B>
}

type Monad<A> = Applicative<A> & Chain<A>
