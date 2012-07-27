smalltalk.init(smalltalk.Object); //metaclasses are in through Class
smalltalk.classes()._do_(function(each) {
	each._initialize()});

/* Similar to jQuery(document).ready() */

if(this.smalltalkReady) {
    this.smalltalkReady();
}
