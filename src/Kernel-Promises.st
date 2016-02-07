Smalltalk createPackage: 'Kernel-Promises'!
Object subclass: #Thenable
	instanceVariableNames: ''
	package: 'Kernel-Promises'!
!Thenable commentStamp!
I am the abstract base class for Promises.

My subclasses should wrap existing JS implementations.

I contain methods that wrap Promises/A+ `.then` behaviour.!

!Thenable methodsFor: 'promises'!

catch: aBlock
<return self.then(null, function (err) {return $core.seamless(function () {
    return aBlock._value_(err);
})})>
!

on: aClass do: aBlock
<return self.then(null, function (err) {return $core.seamless(function () {
    if (err._isKindOf_(aClass)) return aBlock._value_(err);
    else throw err;
})})>
!

on: aClass do: aBlock catch: anotherBlock
<return self.then(null, function (err) {return $core.seamless(function () {
    try { if (err._isKindOf_(aClass)) return aBlock._value_(err); } catch (e) { err = e; }
    return anotherBlock._value_(err);
})})>
!

then: aBlockOrArray
"Accepts a block or array of blocks.
Each of blocks in the array or the singleton one is
used in .then call to a promise, to accept a result
and transform it to the result for the next one.
In case a block has more than one argument
and result is an array, first n-1 elements of the array
are put into additional arguments beyond the first.
The first argument always contains the result as-is."
<
var array = Array.isArray(aBlockOrArray) ? aBlockOrArray : [aBlockOrArray];
return array.reduce(function (soFar, aBlock) {
    return soFar.then(typeof aBlock === "function" && aBlock.length >> 1 ?
        function (result) {return $core.seamless(function () {
            if (Array.isArray(result)) {
                return aBlock._valueWithPossibleArguments_([result].concat(result.slice(0, aBlock.length-1)));
            } else {
                return aBlock._value_(result);
            }
        })} :
        function (result) {return $core.seamless(function () {
            return aBlock._value_(result);
        })}
    );
}, self)>
!

then: aBlockOrArray catch: anotherBlock
	^ (self then: aBlockOrArray) catch: anotherBlock
!

then: aBlockOrArray on: aClass do: aBlock
	^ (self then: aBlockOrArray) on: aClass do: aBlock
!

then: aBlockOrArray on: aClass do: aBlock catch: anotherBlock
	^ ((self then: aBlockOrArray) on: aClass do: aBlock) catch: anotherBlock
! !

Thenable subclass: #Promise
	instanceVariableNames: ''
	package: 'Kernel-Promises'!

!Promise class methodsFor: 'composites'!

all: aCollection
"Returns a Promise resolved with results of sub-promises."
<return Promise.all($recv(aCollection)._asArray())>
!

any: aCollection
"Returns a Promise resolved with first result of sub-promises."
<return Promise.race($recv(aCollection)._asArray())>
! !

!Promise class methodsFor: 'instance creation'!

forBlock: aBlock
"Returns a Promise that is resolved with the value of aBlock,
and rejected if error happens while evaluating aBlock."
	^ self new then: aBlock
!

new
"Returns a dumb Promise resolved with nil."
<return Promise.resolve()>
!

new: aBlock
"Returns a Promise that is eventually resolved or rejected.
Pass a block that is called with one argument, model.
You should call model value: ... to resolve the promise
and model signal: ... to reject the promise.
If error happens during run of the block,
promise is rejected with that error as well."
<return new Promise(function (resolve, reject) {
    var model = {value: resolve, signal: reject}; // TODO make faster
    aBlock._value_(model);
})>
!

signal: anObject
"Returns a Promise rejected with anObject."
<return $recv(anObject)._in_(function (x) {return Promise.reject(x)})>
!

value: anObject
"Returns a Promise resolved with anObject."
<return $recv(anObject)._in_(function (x) {return Promise.resolve(x)})>
! !

!JSObjectProxy methodsFor: '*Kernel-Promises'!

catch: aBlock
<var js = self["@jsObject"];
if (typeof js.then === "function")
    return $globals.Thenable.fn.prototype._catch_.call(js, aBlock);
else
    return self._doesNotUnderstand_(
        $globals.Message._new()
            ._selector_("catch:")
            ._arguments_([aBlock])
    )>
!

on: aClass do: aBlock
<var js = self["@jsObject"];
if (typeof js.then === "function")
    return $globals.Thenable.fn.prototype._on_do_.call(js, aClass, aBlock);
else
    return self._doesNotUnderstand_(
        $globals.Message._new()
            ._selector_("on:do:")
            ._arguments_([aClass, aBlock])
    )>
!

on: aClass do: aBlock catch: anotherBlock
<var js = self["@jsObject"];
if (typeof js.then === "function")
    return $globals.Thenable.fn.prototype._on_do_catch_.call(js, aClass, aBlock, anotherBlock);
else
    return self._doesNotUnderstand_(
        $globals.Message._new()
            ._selector_("on:do:catch:")
            ._arguments_([aClass, aBlock, anotherBlock])
    )>
!

then: aBlockOrArray
<var js = self["@jsObject"];
if (typeof js.then === "function")
    return $globals.Thenable.fn.prototype._then_.call(js, aBlockOrArray);
else
    return self._doesNotUnderstand_(
        $globals.Message._new()
            ._selector_("then:")
            ._arguments_([aBlockOrArray])
    )>
!

then: aBlockOrArray catch: anotherBlock
<var js = self["@jsObject"];
if (typeof js.then === "function")
    return $globals.Thenable.fn.prototype._then_catch_.call(js, aBlockOrArray, anotherBlock);
else
    return self._doesNotUnderstand_(
        $globals.Message._new()
            ._selector_("then:catch:")
            ._arguments_([aBlockOrArray, anotherBlock])
    )>
!

then: aBlockOrArray on: aClass do: aBlock
<var js = self["@jsObject"];
if (typeof js.then === "function")
    return $globals.Thenable.fn.prototype._then_on_do_.call(js, aBlockOrArray, aClass, aBlock);
else
    return self._doesNotUnderstand_(
        $globals.Message._new()
            ._selector_("then:on:do:")
            ._arguments_([aBlockOrArray, aClass, aBlock])
    )>
!

then: aBlockOrArray on: aClass do: aBlock catch: anotherBlock
<var js = self["@jsObject"];
if (typeof js.then === "function")
    return $globals.Thenable.fn.prototype._then_on_do_catch_.call(js, aBlockOrArray, aClass, aBlock, anotherBlock);
else
    return self._doesNotUnderstand_(
        $globals.Message._new()
            ._selector_("then:on:do:catch:")
            ._arguments_([aBlockOrArray, aClass, aBlock, anotherBlock])
    )>
! !

