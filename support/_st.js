
/* 

_st points to a function used all over the compiled amber code that
takes any value (JavaScript or Smalltalk) and returns a proper Amber Smalltalk receiver.

null or undefined -> nil,
plain JS object -> wrapped JS object,
otherwise unchanged

*/

define("amber_vm/_st", ["./boot"], function (boot) {
    return boot._st;
});
