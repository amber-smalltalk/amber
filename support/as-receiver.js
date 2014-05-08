
/**
 * _st is a function used all over the compiled amber code that
 * takes any value (JavaScript or Smalltalk)
 * and returns a proper Amber Smalltalk receiver.
 *
 * null or undefined -> nil,
 * plain JS object -> wrapped JS object,
 * otherwise unchanged
 */

define("amber_vm/_st", ["./globals", "./nil"], function (globals, nil) {
    return function (o) {
        if (o == null) { return nil; }
        if (o.klass) { return o; }
        return globals.JSObjectProxy._on_(o);
    };
});
