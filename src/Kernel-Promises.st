Smalltalk createPackage: 'Kernel-Promises'!
Object subclass: #Thenable
	instanceVariableNames: ''
	package: 'Kernel-Promises'!
!Thenable commentStamp!
I am the abstract base class for Promises.

My subclasses should wrap existing JS implementations.

I contain methods that wrap Promises/A+ `.then` behaviour.!

!Thenable methodsFor: 'promises'!

all: nadicBlock
<return self.then(function (array) {
    return nadicBlock._valueWithPossibleArguments_(array);
})>
!

catch: aBlock
<return self.then(null, function (err) {
    return aBlock._value_(err);
})>
!

on: aClass do: aBlock
<return self.then(null, function (err) {
    if (err._isKindOf_(aClass)) return aBlock._value_(err);
    else throw err;
})>
!

on: aClass do: aBlock catch: anotherBlock
<return self.then(null, function (err) {
    try { if (err._isKindOf_(aClass)) return aBlock._value_(err); } catch (e) { err = e; }
    return anotherBlock._value_(err);
})>
!

then: aBlock
<return self.then(function (result) {
    return aBlock._value_(result);
})>
! !

Thenable subclass: #Promise
	instanceVariableNames: ''
	package: 'Kernel-Promises'!

!JSObjectProxy methodsFor: '*Kernel-Promises'!

all: nadicBlock
<var js = self["@jsObject"];
if (typeof js.then === "function")
    return $globals.Thenable.fn.prototype._all_.call(js, nadicBlock);
else
    return self._doesNotUnderstand_(
        $globals.Message._new()
            ._selector_("all:")
            ._arguments_([nadicBlock])
    )>
!

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

then: aBlock
<var js = self["@jsObject"];
if (typeof js.then === "function")
    return $globals.Thenable.fn.prototype._then_.call(js, aBlock);
else
    return self._doesNotUnderstand_(
        $globals.Message._new()
            ._selector_("then:")
            ._arguments_([aBlock])
    )>
! !

