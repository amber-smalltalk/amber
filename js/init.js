smalltalk.classes().forEach(function(each) {
    smalltalk.init(each);
});
smalltalk.classes().forEach(function(each) {
	each._initialize()
});

/* Similar to jQuery(document).ready() */

if(this.smalltalkReady) {
    this.smalltalkReady();
}
