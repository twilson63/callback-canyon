# Callback Canyon

```
##      #   #  #           #
#    ##  #   #  ###  ## ### # #  ##
#   # #  #   #  # # # # #   ##   #
#   ###  ##  ## ### ### ### # # ##
##
```

Callback Canyon is a great way for a beginning to intermediate javascript developer to get some practice writing functional callback routines and the tests that validate the result.

The purpose of this challenge is not to write your own functional library, but to get some repetitions solving small, tiny problems and working though some of the syntax of the javascript language.

## How does it work?

There are is a check list of small callback functions in this document for each function, create a javascript file, then create a test file in the test directory. In the test/index file you import the test file and in the test file you will import your project file. When you save the files, you should see the results of your test in the browser.

## Setup

```
yarn global add parcel-bundler
yarn
yarn start
```

## Example walk through

Lets take the first callback `equals`.

Steps

* create an `equals.js` file in the `src` directory.
* create a `test/equals.js` file in the `test` directory.
* add the test boilier plate to the `test/equals.js` file.

```js
import test from 'tape'
import equals from '../src/equals'

test('equals should compare two values and return true or false', assert => {
  // Add Tests here
  assert.end()
})
```

### Defining Assertions

When writing test you are making assertions, I assert that when I execute the equals function with the arguments 1 and 1 it will return true, and when I execute the equals function with arguments 1 and 2 it will return false.

So once we have our assertions defined, we need to write the code.

```js
assert.ok(equals(1, 1))
assert.notOk(equals(true, false))
assert.ok(equals('hello', 'hello'))
```

> There are three main assertion methods, ok, equals, same
> ok - expects a true value for the assertion to pass
> equals - expects two arguments an actual and expected, they should be the same for the assertion to pass
> same - expects two arrays or objects an actual and expected, the should be identical for the assertion to pass

> you can prepend not before each method to reverse the assertion.

* now proceed to the `equals.js` file and add the following implementation

```js
/**
 * equals function
 *
 * takes two values and returns true if the values are the same
 *
 * @param a any
 * @param b any
 *
 * @returns boolean
 */
function equals(a, b) {
  return a === b
}

export default equals
```

> Remember to write documentation about what the function does
> not how it does it.
> Remember to always create an explicit return
> Remember to always export your function

* save all your work and verify you have a green screen in the browser.

* congrats, now check off the first exercise and proceed to the next one.

Solve each problem and then move to the next numbered file.

## Callbacks

> you can find the definitions for these functions on the ramdajs documentation site
> https://ramdajs.com/docs/

* [ ] equals
* [ ] add
* [ ] subtract
* [ ] multiply
* [ ] divide
* [ ] prop
* [ ] path
* [ ] inc
* [ ] dec
* [ ] identity
* [ ] always
* [ ] gt
* [ ] lt
* [ ] gte
* [ ] lte
* [ ] split
* [ ] join
* [ ] head
* [ ] tail
* [ ] nth
* [ ] indexOf
* [ ] isNil
* [ ] last
* [ ] match
* [ ] memoize
* [ ] not
* [ ] pathOr
* [ ] propOr
* [ ] pathEq
* [ ] propEq
* [ ] pick
* [ ] pluck
* [ ] sort
* [ ] sortBy
* [ ] split
* [ ] join
* [ ] toUpper
* [ ] toLower
* [ ] capitalize
* [ ] take
* [ ] uniq
* [ ] fromPairs
* [ ] toPairs
* [ ] zip
* [ ] union
* [ ] intersection
* [ ] test
* [ ] replace
* [ ] range
* [ ] omit
* [ ] where
* [ ] T
* [ ] F
* [ ] comparator

--

> The goal of this exercise is not to do all of these in one pass, but to practice a few every day, to get used to the following concepts:

* Thinking in small solutions
* Testing your code
* Documenting your code
* Getting used to JavaScript syntax
* Seeing results quickly

## share your progress

* tweet it out!
* share on linked in!

> Let people know you are making your way through the canyon! Shout for joy when you reach the end of the canyon!!!

## The ones who completed this challenge

* [Your name here!]

## Thank you

Thank you for using this project, it was made with <3 by the instructors at JRS Coding School. We want to see every developer succeed and maybe this tool can help you in that part of the journey.
