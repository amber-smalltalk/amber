smalltalk.init(smalltalk.Object);
smalltalk.classes()._do_(function(each) {
  console.log(each.className);
  each._initialize()});

/* Similar to jQuery(document).ready() */

if(this.smalltalkReady) {
    this.smalltalkReady();
}
