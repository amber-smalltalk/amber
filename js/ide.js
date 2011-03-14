smalltalk.addClass('TabManager', smalltalk.Widget, ['selectedTab', 'tabs', 'opened'], 'IDE');
smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function (){
var self=this;
self.klass.superclass.fn.prototype['_initialize'].apply(self, []);
self['@opened']=true;
(function($rec){$rec._append_(self);$rec._append_((function(html){return html._div()._id_("jtalk");}));return $rec._addClass_("jtalkBody");})("body"._asJQuery());
(function($rec){$rec._addTab_(smalltalk.Transcript._current());return $rec._addTab_(smalltalk.Workspace._new());})(self);
self._selectTab_(self._tabs()._last());
(function($rec){$rec._onResize_((function(){return self._updateBodyMargin();}));return $rec._updatePositionOnWindowResize();})(self);
return self;},
source: unescape('initialize%0A%20%20%20%20super%20initialize.%0A%20%20%20%20opened%20%3A%3D%20true.%0A%20%20%20%20%27body%27%20asJQuery%20%0A%09append%3A%20self%3B%0A%09append%3A%20%5B%3Ahtml%20%7C%20html%20div%20id%3A%20%27jtalk%27%5D%3B%0A%09addClass%3A%20%27jtalkBody%27.%0A%20%20%20%20self%20%0A%09addTab%3A%20Transcript%20current%3B%0A%09addTab%3A%20Workspace%20new.%0A%20%20%20%20self%20selectTab%3A%20self%20tabs%20last.%0A%20%20%20%20self%20%0A%09onResize%3A%20%5Bself%20updateBodyMargin%5D%3B%0A%09updatePositionOnWindowResize%0A')}),
smalltalk.TabManager);

smalltalk.addMethod(
'_tabs',
smalltalk.method({
selector: 'tabs',
category: 'accessing',
fn: function (){
var self=this;
return self['@tabs']._ifNil_((function(){return self['@tabs']=smalltalk.Array._new();}));
return self;},
source: unescape('tabs%0A%20%20%20%20%5Etabs%20ifNil%3A%20%5Btabs%20%3A%3D%20Array%20new%5D%0A')}),
smalltalk.TabManager);

smalltalk.addMethod(
'_addTab_',
smalltalk.method({
selector: 'addTab:',
category: 'adding/Removing',
fn: function (aWidget){
var self=this;
self._tabs()._add_(aWidget);
unescape("%23jtalk")._asJQuery()._append_(aWidget);
aWidget._root()._asJQuery()._hide();
return self;},
source: unescape('addTab%3A%20aWidget%0A%20%20%20%20self%20tabs%20add%3A%20aWidget.%0A%20%20%20%20%27%23jtalk%27%20asJQuery%20append%3A%20aWidget.%0A%20%20%20%20aWidget%20root%20asJQuery%20hide%0A')}),
smalltalk.TabManager);

smalltalk.addMethod(
'_removeTab_',
smalltalk.method({
selector: 'removeTab:',
category: 'adding/Removing',
fn: function (aWidget){
var self=this;
self._tabs()._remove_(aWidget);
self._update();
return self;},
source: unescape('removeTab%3A%20aWidget%0A%20%20%20%20self%20tabs%20remove%3A%20aWidget.%0A%20%20%20%20self%20update%0A')}),
smalltalk.TabManager);

smalltalk.addMethod(
'_updateBodyMargin',
smalltalk.method({
selector: 'updateBodyMargin',
category: 'actions',
fn: function (){
var self=this;
self._setBodyMargin_(unescape("%23jtalk")._asJQuery()._height().__plus((27)));
return self;},
source: unescape('updateBodyMargin%0A%20%20%20%20self%20setBodyMargin%3A%20%27%23jtalk%27%20asJQuery%20height%20+%2027%0A')}),
smalltalk.TabManager);

smalltalk.addMethod(
'_removeBodyMargin',
smalltalk.method({
selector: 'removeBodyMargin',
category: 'actions',
fn: function (){
var self=this;
self._setBodyMargin_((0));
return self;},
source: unescape('removeBodyMargin%0A%20%20%20%20self%20setBodyMargin%3A%200%0A')}),
smalltalk.TabManager);

smalltalk.addMethod(
'_setBodyMargin_',
smalltalk.method({
selector: 'setBodyMargin:',
category: 'actions',
fn: function (anInteger){
var self=this;
".jtalkBody"._asJQuery()._cssAt_put_(unescape("margin-bottom"),anInteger._asString().__comma("px"));
return self;},
source: unescape('setBodyMargin%3A%20anInteger%0A%20%20%20%20%27.jtalkBody%27%20asJQuery%20cssAt%3A%20%27margin-bottom%27%20put%3A%20anInteger%20asString%2C%20%27px%27%0A')}),
smalltalk.TabManager);

smalltalk.addMethod(
'_onResize_',
smalltalk.method({
selector: 'onResize:',
category: 'actions',
fn: function (aBlock){
var self=this;
(function(){jQuery('#jtalk').resizable({handles: 'n', stop: aBlock, minHeight: 230});})();
return self;},
source: unescape('onResize%3A%20aBlock%0A%20%20%20%20%7B%27jQuery%28%27%27%23jtalk%27%27%29.resizable%28%7Bhandles%3A%20%27%27n%27%27%2C%20stop%3A%20aBlock%2C%20minHeight%3A%20230%7D%29%3B%27%7D%0A')}),
smalltalk.TabManager);

smalltalk.addMethod(
'_updatePositionOnWindowResize',
smalltalk.method({
selector: 'updatePositionOnWindowResize',
category: 'actions',
fn: function (){
var self=this;
(function(){jQuery(window).resize(function(e){jQuery('#jtalk').css('top', '').css('bottom', '27px')});})();
return self;},
source: unescape('updatePositionOnWindowResize%0A%20%20%20%20%7B%27jQuery%28window%29.resize%28function%28e%29%7BjQuery%28%27%27%23jtalk%27%27%29.css%28%27%27top%27%27%2C%20%27%27%27%27%27%27%29.css%28%27%27bottom%27%27%2C%20%27%2727px%27%27%29%7D%29%3B%27%7D%0A')}),
smalltalk.TabManager);

smalltalk.addMethod(
'_open',
smalltalk.method({
selector: 'open',
category: 'actions',
fn: function (){
var self=this;
self['@opened']._ifFalse_((function(){self._root()._asJQuery()._show();"body"._asJQuery()._addClass_("jtalkBody");unescape("%23jtalk")._asJQuery()._show();self._updateBodyMargin();self['@selectedTab']._root()._asJQuery()._show();return self['@opened']=true;}));
return self;},
source: unescape('open%0A%20%20%20%20opened%20ifFalse%3A%20%5B%0A%09self%20root%20asJQuery%20show.%0A%09%27body%27%20asJQuery%20addClass%3A%20%27jtalkBody%27.%0A%09%27%23jtalk%27%20asJQuery%20show.%0A%09self%20updateBodyMargin.%0A%09selectedTab%20root%20asJQuery%20show.%0A%09opened%20%3A%3D%20true%5D%0A')}),
smalltalk.TabManager);

smalltalk.addMethod(
'_close',
smalltalk.method({
selector: 'close',
category: 'actions',
fn: function (){
var self=this;
self['@opened']._ifTrue_((function(){self._root()._asJQuery()._hide();unescape("%23jtalk")._asJQuery()._hide();self._removeBodyMargin();"body"._asJQuery()._removeClass_("jtalkBody");return self['@opened']=false;}));
return self;},
source: unescape('close%0A%20%20%20%20opened%20ifTrue%3A%20%5B%0A%09self%20root%20asJQuery%20hide.%0A%09%27%23jtalk%27%20asJQuery%20hide.%0A%09self%20removeBodyMargin.%0A%09%27body%27%20asJQuery%20removeClass%3A%20%27jtalkBody%27.%0A%09opened%20%3A%3D%20false%5D%0A')}),
smalltalk.TabManager);

smalltalk.addMethod(
'_newBrowserTab',
smalltalk.method({
selector: 'newBrowserTab',
category: 'actions',
fn: function (){
var self=this;
smalltalk.Browser._open();
return self;},
source: unescape('newBrowserTab%0A%20%20%20%20Browser%20open%0A')}),
smalltalk.TabManager);

smalltalk.addMethod(
'_selectTab_',
smalltalk.method({
selector: 'selectTab:',
category: 'actions',
fn: function (aWidget){
var self=this;
self._open();
self['@selectedTab']=aWidget;
self._tabs()._do_((function(each){return each._root()._asJQuery()._hide();}));
aWidget._root()._asJQuery()._show();
self._update();
return self;},
source: unescape('selectTab%3A%20aWidget%0A%20%20%20%20self%20open.%0A%20%20%20%20selectedTab%20%3A%3D%20aWidget.%0A%20%20%20%20self%20tabs%20do%3A%20%5B%3Aeach%20%7C%0A%09each%20root%20asJQuery%20hide%5D.%0A%20%20%20%20aWidget%20root%20asJQuery%20show.%0A%20%20%20%20self%20update%0A')}),
smalltalk.TabManager);

smalltalk.addMethod(
'_closeTab_',
smalltalk.method({
selector: 'closeTab:',
category: 'actions',
fn: function (aWidget){
var self=this;
self._removeTab_(aWidget);
self._selectTab_(self._tabs()._last());
aWidget._root()._asJQuery()._remove();
self._update();
return self;},
source: unescape('closeTab%3A%20aWidget%0A%20%20%20%20self%20removeTab%3A%20aWidget.%0A%20%20%20%20self%20selectTab%3A%20self%20tabs%20last.%0A%20%20%20%20aWidget%20root%20asJQuery%20remove.%0A%20%20%20%20self%20update%0A')}),
smalltalk.TabManager);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){$rec._id_("jtalkTabs");return $rec._with_((function(){(function($rec){$rec._class_("closeAll");$rec._with_("x");return $rec._onClick_((function(){return self._close();}));})(html._li());self._tabs()._do_((function(each){return self._renderTabFor_on_(each,html);}));return (function($rec){$rec._class_("newtab");$rec._with_(unescape("%20+%20"));return $rec._onClick_((function(){return self._newBrowserTab();}));})(html._li());}));})(html._ul());
return self;},
source: unescape('renderOn%3A%20html%0A%20%20%20%20html%20ul%0A%09id%3A%20%27jtalkTabs%27%3B%0A%09with%3A%20%5B%0A%09%20%20%20%20html%20li%20%0A%09%09class%3A%20%27closeAll%27%3B%0A%09%09with%3A%20%27x%27%3B%0A%09%09onClick%3A%20%5Bself%20close%5D.%0A%09%20%20%20%20self%20tabs%20do%3A%20%5B%3Aeach%20%7C%0A%09%09self%20renderTabFor%3A%20each%20on%3A%20html%5D.%0A%09%20%20%20%20html%20li%0A%09%09class%3A%20%27newtab%27%3B%0A%09%09with%3A%20%27%20+%20%27%3B%0A%09%09onClick%3A%20%5Bself%20newBrowserTab%5D%5D%0A')}),
smalltalk.TabManager);

smalltalk.addMethod(
'_renderTabFor_on_',
smalltalk.method({
selector: 'renderTabFor:on:',
category: 'rendering',
fn: function (aWidget, html){
var self=this;
var li=nil;
li=html._li();
self['@selectedTab'].__eq(aWidget)._ifTrue_((function(){return li._class_("selected");}));
li._with_((function(){(function($rec){$rec._with_(aWidget._label());return $rec._onClick_((function(){return self._selectTab_(aWidget);}));})(html._span());return aWidget._canBeClosed()._ifTrue_((function(){return (function($rec){$rec._class_("close");$rec._with_("x");return $rec._onClick_((function(){return self._closeTab_(aWidget);}));})(html._span());}));}));
return self;},
source: unescape('renderTabFor%3A%20aWidget%20on%3A%20html%0A%20%20%20%20%7C%20li%20%7C%0A%20%20%20%20li%20%3A%3D%20html%20li.%0A%20%20%20%20selectedTab%20%3D%20aWidget%20ifTrue%3A%20%5B%0A%09li%20class%3A%20%27selected%27%5D.%0A%20%20%20%20li%20with%3A%20%5B%0A%09html%20span%0A%09%20%20%20%20with%3A%20aWidget%20label%3B%0A%09%20%20%20%20onClick%3A%20%5Bself%20selectTab%3A%20aWidget%5D.%0A%09aWidget%20canBeClosed%20ifTrue%3A%20%5B%0A%09%20%20%20%20html%20span%20%0A%09%09class%3A%20%27close%27%3B%0A%09%09with%3A%20%27x%27%3B%0A%09%09onClick%3A%20%5Bself%20closeTab%3A%20aWidget%5D%5D%5D%0A')}),
smalltalk.TabManager);


smalltalk.TabManager.klass.iVarNames = ['current'];
smalltalk.addMethod(
'_current',
smalltalk.method({
selector: 'current',
category: 'instance creation',
fn: function (){
var self=this;
return self['@current']._ifNil_((function(){return self['@current']=self.klass.superclass.fn.prototype['_new'].apply(self, []);}));
return self;},
source: unescape('current%0A%20%20%20%20%5Ecurrent%20ifNil%3A%20%5Bcurrent%20%3A%3D%20super%20new%5D%0A')}),
smalltalk.TabManager.klass);

smalltalk.addMethod(
'_new',
smalltalk.method({
selector: 'new',
category: 'instance creation',
fn: function (){
var self=this;
self._shouldNotImplement();
return self;},
source: unescape('new%0A%20%20%20%20self%20shouldNotImplement%0A')}),
smalltalk.TabManager.klass);


smalltalk.addClass('TabWidget', smalltalk.Widget, [], 'IDE');
smalltalk.addMethod(
'_label',
smalltalk.method({
selector: 'label',
category: 'accessing',
fn: function (){
var self=this;
self._subclassResponsibility();
return self;},
source: unescape('label%0A%20%20%20%20self%20subclassResponsibility%0A')}),
smalltalk.TabWidget);

smalltalk.addMethod(
'_open',
smalltalk.method({
selector: 'open',
category: 'actions',
fn: function (){
var self=this;
(function($rec){$rec._addTab_(self);return $rec._selectTab_(self);})(smalltalk.TabManager._current());
return self;},
source: unescape('open%0A%20%20%20%20TabManager%20current%0A%09addTab%3A%20self%3B%0A%09selectTab%3A%20self%0A')}),
smalltalk.TabWidget);

smalltalk.addMethod(
'_canBeClosed',
smalltalk.method({
selector: 'canBeClosed',
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
source: unescape('canBeClosed%0A%20%20%20%20%5Efalse%0A')}),
smalltalk.TabWidget);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){$rec._class_("jtalkTool");return $rec._with_((function(){(function($rec){$rec._class_("jt_box");return $rec._with_((function(){return self._renderBoxOn_(html);}));})(html._div());return (function($rec){$rec._class_("jt_buttons");return $rec._with_((function(){return self._renderButtonsOn_(html);}));})(html._div());}));})(html._root());
return self;},
source: unescape('renderOn%3A%20html%0A%20%20%20%20html%20root%0A%09class%3A%20%27jtalkTool%27%3B%0A%09with%3A%20%5B%0A%09%20%20%20%20html%20div%0A%09%09class%3A%20%27jt_box%27%3B%0A%09%09with%3A%20%5Bself%20renderBoxOn%3A%20html%5D.%0A%09%20%20%20%20html%20div%0A%09%09class%3A%20%27jt_buttons%27%3B%0A%09%09with%3A%20%5Bself%20renderButtonsOn%3A%20html%5D%5D%0A')}),
smalltalk.TabWidget);

smalltalk.addMethod(
'_renderBoxOn_',
smalltalk.method({
selector: 'renderBoxOn:',
category: 'rendering',
fn: function (html){
var self=this;

return self;},
source: unescape('renderBoxOn%3A%20html%0A')}),
smalltalk.TabWidget);

smalltalk.addMethod(
'_renderButtonsOn_',
smalltalk.method({
selector: 'renderButtonsOn:',
category: 'rendering',
fn: function (html){
var self=this;

return self;},
source: unescape('renderButtonsOn%3A%20html%0A')}),
smalltalk.TabWidget);


smalltalk.addMethod(
'_open',
smalltalk.method({
selector: 'open',
category: 'instance creation',
fn: function (){
var self=this;
return self._new()._open();
return self;},
source: unescape('open%0A%20%20%20%20%5Eself%20new%20open%0A')}),
smalltalk.TabWidget.klass);


smalltalk.addClass('Workspace', smalltalk.TabWidget, ['textarea'], 'IDE');
smalltalk.addMethod(
'_label',
smalltalk.method({
selector: 'label',
category: 'accessing',
fn: function (){
var self=this;
return unescape("%5BWorkspace%5D");
return self;},
source: unescape('label%0A%20%20%20%20%5E%27%5BWorkspace%5D%27%0A')}),
smalltalk.Workspace);

smalltalk.addMethod(
'_selection',
smalltalk.method({
selector: 'selection',
category: 'accessing',
fn: function (){
var self=this;
return (function(){return document.selection})();
return self;},
source: unescape('selection%0A%20%20%20%20%5E%7B%27return%20document.selection%27%7D%0A')}),
smalltalk.Workspace);

smalltalk.addMethod(
'_selectionStart',
smalltalk.method({
selector: 'selectionStart',
category: 'accessing',
fn: function (){
var self=this;
return (function(){return jQuery('.jt_workspace')[0].selectionStart})();
return self;},
source: unescape('selectionStart%0A%20%20%20%20%5E%7B%27return%20jQuery%28%27%27.jt_workspace%27%27%29%5B0%5D.selectionStart%27%7D%0A')}),
smalltalk.Workspace);

smalltalk.addMethod(
'_selectionEnd',
smalltalk.method({
selector: 'selectionEnd',
category: 'accessing',
fn: function (){
var self=this;
return (function(){return jQuery('.jt_workspace')[0].selectionEnd})();
return self;},
source: unescape('selectionEnd%0A%20%20%20%20%5E%7B%27return%20jQuery%28%27%27.jt_workspace%27%27%29%5B0%5D.selectionEnd%27%7D%0A')}),
smalltalk.Workspace);

smalltalk.addMethod(
'_selectionStart_',
smalltalk.method({
selector: 'selectionStart:',
category: 'accessing',
fn: function (anInteger){
var self=this;
(function(){jQuery('.jt_workspace')[0].selectionStart = anInteger})();
return self;},
source: unescape('selectionStart%3A%20anInteger%0A%20%20%20%20%7B%27jQuery%28%27%27.jt_workspace%27%27%29%5B0%5D.selectionStart%20%3D%20anInteger%27%7D%0A')}),
smalltalk.Workspace);

smalltalk.addMethod(
'_selectionEnd_',
smalltalk.method({
selector: 'selectionEnd:',
category: 'accessing',
fn: function (anInteger){
var self=this;
(function(){jQuery('.jt_workspace')[0].selectionEnd = anInteger})();
return self;},
source: unescape('selectionEnd%3A%20anInteger%0A%20%20%20%20%7B%27jQuery%28%27%27.jt_workspace%27%27%29%5B0%5D.selectionEnd%20%3D%20anInteger%27%7D%0A')}),
smalltalk.Workspace);

smalltalk.addMethod(
'_currentLine',
smalltalk.method({
selector: 'currentLine',
category: 'accessing',
fn: function (){
var self=this;
try{var lines=nil;
var startLine=nil;
var endLine=nil;
lines=self['@textarea']._asJQuery()._val()._tokenize_(smalltalk.String._cr());
startLine=endLine=(0);
lines._do_((function(each){endLine=startLine.__plus(each._size());startLine=endLine.__plus((1));return endLine.__gt_eq(self._selectionStart())._ifTrue_((function(){self._selectionEnd_(endLine);return (function(){throw({name: 'stReturn', selector: '_currentLine', fn: function(){return each}})})();}));}));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_currentLine'){return e.fn()} throw(e)}},
source: unescape('currentLine%0A%20%20%20%20%7C%20lines%20startLine%20endLine%7C%0A%20%20%20%20lines%20%3A%3D%20textarea%20asJQuery%20val%20tokenize%3A%20String%20cr.%0A%20%20%20%20startLine%20%3A%3D%20endLine%20%3A%3D%200.%0A%20%20%20%20lines%20do%3A%20%5B%3Aeach%20%7C%0A%09endLine%20%3A%3D%20startLine%20+%20each%20size.%0A%09startLine%20%3A%3D%20endLine%20+%201.%0A%09endLine%20%3E%3D%20self%20selectionStart%20ifTrue%3A%20%5B%0A%09%20%20%20%20self%20selectionEnd%3A%20endLine.%0A%09%20%20%20%20%5Eeach%5D%5D%0A')}),
smalltalk.Workspace);

smalltalk.addMethod(
'_handleKeyDown_',
smalltalk.method({
selector: 'handleKeyDown:',
category: 'actions',
fn: function (anEvent){
var self=this;
return (function(){if(anEvent.ctrlKey) {
		if(anEvent.keyCode === 68) { //ctrl+p
			self._printIt();
			return false;
		}
		if(anEvent.keyCode === 80) { //ctrl+d
			self._doIt();
			return false;
		}
	}})();
return self;},
source: unescape('handleKeyDown%3A%20anEvent%0A%20%20%20%20%5E%7B%27if%28anEvent.ctrlKey%29%20%7B%0A%09%09if%28anEvent.keyCode%20%3D%3D%3D%2068%29%20%7B%20//ctrl+p%0A%09%09%09self._printIt%28%29%3B%0A%09%09%09return%20false%3B%0A%09%09%7D%0A%09%09if%28anEvent.keyCode%20%3D%3D%3D%2080%29%20%7B%20//ctrl+d%0A%09%09%09self._doIt%28%29%3B%0A%09%09%09return%20false%3B%0A%09%09%7D%0A%09%7D%27%7D%0A')}),
smalltalk.Workspace);

smalltalk.addMethod(
'_clearWorkspace',
smalltalk.method({
selector: 'clearWorkspace',
category: 'actions',
fn: function (){
var self=this;
self['@textarea']._asJQuery()._val_("");
return self;},
source: unescape('clearWorkspace%0A%20%20%20%20textarea%20asJQuery%20val%3A%20%27%27%0A')}),
smalltalk.Workspace);

smalltalk.addMethod(
'_doIt',
smalltalk.method({
selector: 'doIt',
category: 'actions',
fn: function (){
var self=this;
self._printIt();
return self;},
source: unescape('doIt%0A%20%20%20%20self%20printIt%0A')}),
smalltalk.Workspace);

smalltalk.addMethod(
'_printIt',
smalltalk.method({
selector: 'printIt',
category: 'actions',
fn: function (){
var self=this;
var selection=nil;
self['@textarea']._asJQuery()._focus();
self._selectionStart().__eq(self._selectionEnd())._ifTrue_ifFalse_((function(){return selection=self._currentLine();}),(function(){return selection=self['@textarea']._asJQuery()._val()._copyFrom_to_(self._selectionStart().__plus((1)),self._selectionEnd().__plus((1)));}));
self._print_(self._eval_(selection)._printString());
return self;},
source: unescape('printIt%0A%20%20%20%20%7C%20selection%20%7C%0A%20%20%20%20textarea%20asJQuery%20focus.%0A%20%20%20%20self%20selectionStart%20%3D%20self%20selectionEnd%0A%09ifTrue%3A%20%5Bselection%20%3A%3D%20self%20currentLine%5D%0A%09ifFalse%3A%20%5B%0A%09%20%20%20%20selection%20%3A%3D%20textarea%20asJQuery%20val%20copyFrom%3A%20self%20selectionStart%20+%201%20to%3A%20self%20selectionEnd%20+%201%5D.%0A%20%20%20%20self%20print%3A%20%28self%20eval%3A%20selection%29%20printString%0A')}),
smalltalk.Workspace);

smalltalk.addMethod(
'_print_',
smalltalk.method({
selector: 'print:',
category: 'actions',
fn: function (aString){
var self=this;
var start=nil;
start=self._selectionEnd();
self['@textarea']._asJQuery()._val_(self['@textarea']._asJQuery()._val()._copyFrom_to_((1),start).__comma(" ").__comma(aString).__comma(" ").__comma(self['@textarea']._asJQuery()._val()._copyFrom_to_(start.__plus((1)),self['@textarea']._asJQuery()._val()._size())));
self._selectionStart_(start);
self._selectionEnd_(start.__plus(aString._size()).__plus((2)));
return self;},
source: unescape('print%3A%20aString%0A%20%20%20%20%7C%20start%20%7C%0A%20%20%20%20start%20%3A%3D%20self%20selectionEnd.%0A%20%20%20%20textarea%20asJQuery%20val%3A%20%28%0A%09%28textarea%20asJQuery%20val%20copyFrom%3A%201%20to%3A%20start%29%2C%0A%09%27%20%27%2C%20aString%2C%20%27%20%27%2C%0A%09%28textarea%20asJQuery%20val%20copyFrom%3A%20start%20+%201%20to%3A%20textarea%20asJQuery%20val%20size%29%29.%0A%20%20%20%20self%20selectionStart%3A%20start.%0A%20%20%20%20self%20selectionEnd%3A%20start%20+%20aString%20size%20+%202%0A')}),
smalltalk.Workspace);

smalltalk.addMethod(
'_eval_',
smalltalk.method({
selector: 'eval:',
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.Compiler._new()._loadExpression_(aString);
return self;},
source: unescape('eval%3A%20aString%0A%20%20%20%20%5ECompiler%20new%20loadExpression%3A%20aString%0A')}),
smalltalk.Workspace);

smalltalk.addMethod(
'_renderBoxOn_',
smalltalk.method({
selector: 'renderBoxOn:',
category: 'rendering',
fn: function (html){
var self=this;
self['@textarea']=html._textarea();
self['@textarea']._asJQuery()._call_("tabby");
self['@textarea']._onKeyDown_((function(e){return self._handleKeyDown_(e);}));
(function($rec){$rec._class_("jt_workspace");return $rec._at_put_("spellcheck","false");})(self['@textarea']);
return self;},
source: unescape('renderBoxOn%3A%20html%0A%20%20%20%20textarea%20%3A%3D%20html%20textarea.%0A%20%20%20%20textarea%20asJQuery%20call%3A%20%27tabby%27.%0A%20%20%20%20textarea%20onKeyDown%3A%20%5B%3Ae%20%7C%20self%20handleKeyDown%3A%20e%5D.%0A%20%20%20%20textarea%20%0A%09class%3A%20%27jt_workspace%27%3B%0A%09at%3A%20%27spellcheck%27%20put%3A%20%27false%27%0A')}),
smalltalk.Workspace);

smalltalk.addMethod(
'_renderButtonsOn_',
smalltalk.method({
selector: 'renderButtonsOn:',
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){$rec._with_("DoIt");$rec._title_(unescape("ctrl+d"));return $rec._onClick_((function(){return self._doIt();}));})(html._button());
(function($rec){$rec._with_("PrintIt");$rec._title_(unescape("ctrl+p"));return $rec._onClick_((function(){return self._printIt();}));})(html._button());
(function($rec){$rec._with_("Clear workspace");return $rec._onClick_((function(){return self._clearWorkspace();}));})(html._button());
return self;},
source: unescape('renderButtonsOn%3A%20html%0A%20%20%20%20html%20button%0A%09with%3A%20%27DoIt%27%3B%0A%09title%3A%20%27ctrl+d%27%3B%0A%09onClick%3A%20%5Bself%20doIt%5D.%0A%20%20%20%20html%20button%0A%09with%3A%20%27PrintIt%27%3B%0A%09title%3A%20%27ctrl+p%27%3B%0A%09onClick%3A%20%5Bself%20printIt%5D.%0A%20%20%20%20html%20button%0A%09with%3A%20%27Clear%20workspace%27%3B%0A%09onClick%3A%20%5Bself%20clearWorkspace%5D%0A')}),
smalltalk.Workspace);



smalltalk.addClass('Transcript', smalltalk.TabWidget, ['textarea'], 'IDE');
smalltalk.addMethod(
'_label',
smalltalk.method({
selector: 'label',
category: 'accessing',
fn: function (){
var self=this;
return unescape("%5BTranscript%5D");
return self;},
source: unescape('label%0A%20%20%20%20%5E%27%5BTranscript%5D%27%0A')}),
smalltalk.Transcript);

smalltalk.addMethod(
'_show_',
smalltalk.method({
selector: 'show:',
category: 'actions',
fn: function (anObject){
var self=this;
self['@textarea']._asJQuery()._val_(self['@textarea']._asJQuery()._val().__comma(anObject._asString()));
return self;},
source: unescape('show%3A%20anObject%0A%20%20%20%20textarea%20asJQuery%20val%3A%20textarea%20asJQuery%20val%2C%20anObject%20asString.%0A%0A')}),
smalltalk.Transcript);

smalltalk.addMethod(
'_cr',
smalltalk.method({
selector: 'cr',
category: 'actions',
fn: function (){
var self=this;
self['@textarea']._asJQuery()._val_(self['@textarea']._asJQuery()._val().__comma(smalltalk.String._cr()));
return self;},
source: unescape('cr%0A%20%20%20%20textarea%20asJQuery%20val%3A%20textarea%20asJQuery%20val%2C%20String%20cr.%0A')}),
smalltalk.Transcript);

smalltalk.addMethod(
'_clear',
smalltalk.method({
selector: 'clear',
category: 'actions',
fn: function (){
var self=this;
self['@textarea']._asJQuery()._val_("");
return self;},
source: unescape('clear%0A%20%20%20%20textarea%20asJQuery%20val%3A%20%27%27%0A')}),
smalltalk.Transcript);

smalltalk.addMethod(
'_renderBoxOn_',
smalltalk.method({
selector: 'renderBoxOn:',
category: 'rendering',
fn: function (html){
var self=this;
self['@textarea']=html._textarea();
self['@textarea']._asJQuery()._call_("tabby");
(function($rec){$rec._class_("jt_transcript");return $rec._at_put_("spellcheck","false");})(self['@textarea']);
return self;},
source: unescape('renderBoxOn%3A%20html%0A%20%20%20%20textarea%20%3A%3D%20html%20textarea.%0A%20%20%20%20textarea%20asJQuery%20call%3A%20%27tabby%27.%0A%20%20%20%20textarea%20%0A%09class%3A%20%27jt_transcript%27%3B%0A%09at%3A%20%27spellcheck%27%20put%3A%20%27false%27%0A')}),
smalltalk.Transcript);

smalltalk.addMethod(
'_renderButtonsOn_',
smalltalk.method({
selector: 'renderButtonsOn:',
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){$rec._with_("Clear transcript");return $rec._onClick_((function(){return self._clear();}));})(html._button());
return self;},
source: unescape('renderButtonsOn%3A%20html%0A%20%20%20%20html%20button%0A%09with%3A%20%27Clear%20transcript%27%3B%0A%09onClick%3A%20%5Bself%20clear%5D%0A')}),
smalltalk.Transcript);


smalltalk.Transcript.klass.iVarNames = ['current'];
smalltalk.addMethod(
'_open',
smalltalk.method({
selector: 'open',
category: 'instance creation',
fn: function (){
var self=this;
self._current()._open();
return self;},
source: unescape('open%0A%20%20%20%20self%20current%20open%0A')}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
'_new',
smalltalk.method({
selector: 'new',
category: 'instance creation',
fn: function (){
var self=this;
self._shouldNotImplement();
return self;},
source: unescape('new%0A%20%20%20%20self%20shouldNotImplement%0A')}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
'_current',
smalltalk.method({
selector: 'current',
category: 'instance creation',
fn: function (){
var self=this;
return self['@current']._ifNil_((function(){return self['@current']=self.klass.superclass.fn.prototype['_new'].apply(self, []);}));
return self;},
source: unescape('current%0A%20%20%20%20%5Ecurrent%20ifNil%3A%20%5Bcurrent%20%3A%3D%20super%20new%5D%0A')}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
'_show_',
smalltalk.method({
selector: 'show:',
category: 'printing',
fn: function (anObject){
var self=this;
self._current()._show_(anObject);
return self;},
source: unescape('show%3A%20anObject%0A%20%20%20%20self%20current%20show%3A%20anObject%0A')}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
'_cr',
smalltalk.method({
selector: 'cr',
category: 'printing',
fn: function (){
var self=this;
self._current()._show_(smalltalk.String._cr());
return self;},
source: unescape('cr%0A%20%20%20%20self%20current%20show%3A%20String%20cr%0A')}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
'_clear',
smalltalk.method({
selector: 'clear',
category: 'printing',
fn: function (){
var self=this;
self._current()._clear();
return self;},
source: unescape('clear%0A%20%20%20%20self%20current%20clear%0A')}),
smalltalk.Transcript.klass);


smalltalk.addClass('Browser', smalltalk.TabWidget, ['selectedCategory', 'selectedClass', 'selectedProtocol', 'selectedMethod', 'categoriesList', 'classesList', 'protocolsList', 'methodsList', 'sourceTextarea', 'tabsList', 'selectedTab', 'saveButton', 'classButtons', 'methodButtons'], 'IDE');
smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function (){
var self=this;
self.klass.superclass.fn.prototype['_initialize'].apply(self, []);
self['@selectedTab']="instance";
return self;},
source: unescape('initialize%0A%20%20%20%20super%20initialize.%0A%20%20%20%20selectedTab%20%3A%3D%20%23instance%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_label',
smalltalk.method({
selector: 'label',
category: 'accessing',
fn: function (){
var self=this;
return self['@selectedClass']._ifNil_ifNotNil_((function(){return unescape("Browser%20%28nil%29");}),(function(){return self['@selectedClass']._name();}));
return self;},
source: unescape('label%0A%20%20%20%20%5EselectedClass%20%0A%09ifNil%3A%20%5B%27Browser%20%28nil%29%27%5D%0A%09ifNotNil%3A%20%5BselectedClass%20name%5D%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_categories',
smalltalk.method({
selector: 'categories',
category: 'accessing',
fn: function (){
var self=this;
var categories=nil;
categories=smalltalk.Array._new();
smalltalk.Smalltalk._current()._classes()._do_((function(each){return categories._includes_(each._category())._ifFalse_((function(){return categories._add_(each._category());}));}));
return categories._sort();
return self;},
source: unescape('categories%0A%20%20%20%20%7C%20categories%20%7C%0A%20%20%20%20categories%20%3A%3D%20Array%20new.%0A%20%20%20%20Smalltalk%20current%20classes%20do%3A%20%5B%3Aeach%20%7C%0A%09%28categories%20includes%3A%20each%20category%29%20ifFalse%3A%20%5B%0A%09%20%20%20%20categories%20add%3A%20each%20category%5D%5D.%0A%20%20%20%20%5Ecategories%20sort%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_classes',
smalltalk.method({
selector: 'classes',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.Smalltalk._current()._classes()._select_((function(each){return each._category().__eq(self['@selectedCategory']);}))._sort_((function(a, b){return a._name().__gt(b._name());}));
return self;},
source: unescape('classes%0A%20%20%20%20%5E%28Smalltalk%20current%20classes%20%0A%09select%3A%20%5B%3Aeach%20%7C%20each%20category%20%3D%20selectedCategory%5D%29%0A%09sort%3A%20%5B%3Aa%20%3Ab%20%7C%20a%20name%20%3E%20b%20name%5D%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_protocols',
smalltalk.method({
selector: 'protocols',
category: 'accessing',
fn: function (){
var self=this;
try{var klass=nil;
var protocols=nil;
protocols=smalltalk.Array._new();
self['@selectedClass']._ifNotNil_((function(){self['@selectedTab'].__eq("comment")._ifTrue_((function(){return (function(){throw({name: 'stReturn', selector: '_protocols', fn: function(){return []}})})();}));klass=self['@selectedTab'].__eq("instance")._ifTrue_ifFalse_((function(){return self['@selectedClass'];}),(function(){return self['@selectedClass']._class();}));klass._methodDictionary()._isEmpty()._ifTrue_((function(){return protocols._add_("not yet classified");}));return klass._methodDictionary()._do_((function(each){return protocols._includes_(each._category())._ifFalse_((function(){return protocols._add_(each._category());}));}));}));
(function(){throw({name: 'stReturn', selector: '_protocols', fn: function(){return protocols._sort()}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_protocols'){return e.fn()} throw(e)}},
source: unescape('protocols%0A%20%20%20%20%7C%20klass%20protocols%20%7C%0A%20%20%20%20protocols%20%3A%3D%20Array%20new.%0A%20%20%20%20selectedClass%20ifNotNil%3A%20%5B%0A%09selectedTab%20%3D%20%23comment%20ifTrue%3A%20%5B%5E%23%28%29%5D.%0A%09klass%20%3A%3D%20selectedTab%20%3D%20%23instance%0A%09%20%20%20%20ifTrue%3A%20%5BselectedClass%5D%0A%09%20%20%20%20ifFalse%3A%20%5BselectedClass%20class%5D.%0A%09klass%20methodDictionary%20isEmpty%20ifTrue%3A%20%5B%0A%09%20%20%20%20protocols%20add%3A%20%27not%20yet%20classified%27%5D.%0A%09klass%20methodDictionary%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20%28protocols%20includes%3A%20each%20category%29%20ifFalse%3A%20%5B%0A%09%09protocols%20add%3A%20each%20category%5D%5D%5D.%0A%20%20%20%20%5Eprotocols%20sort%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_methods',
smalltalk.method({
selector: 'methods',
category: 'accessing',
fn: function (){
var self=this;
try{var klass=nil;
self['@selectedTab'].__eq("comment")._ifTrue_((function(){return (function(){throw({name: 'stReturn', selector: '_methods', fn: function(){return []}})})();}));
self['@selectedClass']._ifNotNil_((function(){return klass=self['@selectedTab'].__eq("instance")._ifTrue_ifFalse_((function(){return self['@selectedClass'];}),(function(){return self['@selectedClass']._class();}));}));
(function(){throw({name: 'stReturn', selector: '_methods', fn: function(){return self['@selectedProtocol']._ifNil_ifNotNil_((function(){return klass._ifNil_ifNotNil_((function(){return [];}),(function(){return klass._methodDictionary()._values();}));}),(function(){return klass._methodDictionary()._values()._select_((function(each){return each._category().__eq(self['@selectedProtocol']);}));}))._sort_((function(a, b){return a._selector().__gt(b._selector());}))}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_methods'){return e.fn()} throw(e)}},
source: unescape('methods%0A%20%20%20%20%7C%20klass%20%7C%0A%20%20%20%20selectedTab%20%3D%20%23comment%20ifTrue%3A%20%5B%5E%23%28%29%5D.%0A%20%20%20%20selectedClass%20ifNotNil%3A%20%5B%0A%09klass%20%3A%3D%20selectedTab%20%3D%20%23instance%0A%09%20%20%20%20ifTrue%3A%20%5BselectedClass%5D%0A%09%20%20%20%20ifFalse%3A%20%5BselectedClass%20class%5D%5D.%0A%20%20%20%20%5E%28selectedProtocol%20%0A%09ifNil%3A%20%5B%0A%09%20%20%20%20klass%20%0A%09%09ifNil%3A%20%5B%23%28%29%5D%20%0A%09%09ifNotNil%3A%20%5Bklass%20methodDictionary%20values%5D%5D%0A%09ifNotNil%3A%20%5B%0A%09%20%20%20%20klass%20methodDictionary%20values%20select%3A%20%5B%3Aeach%20%7C%0A%09%09each%20category%20%3D%20selectedProtocol%5D%5D%29%20sort%3A%20%5B%3Aa%20%3Ab%20%7C%20a%20selector%20%3E%20b%20selector%5D%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_source',
smalltalk.method({
selector: 'source',
category: 'accessing',
fn: function (){
var self=this;
try{self['@selectedTab'].__eq("comment")._ifFalse_((function(){return (function(){throw({name: 'stReturn', selector: '_source', fn: function(){return self['@selectedProtocol']._notNil()._or_((function(){return self['@selectedMethod']._notNil();}))._ifFalse_ifTrue_((function(){return self._declarationSource();}),(function(){return self._methodSource();}))}})})();}));
(function(){throw({name: 'stReturn', selector: '_source', fn: function(){return self['@selectedClass']._ifNil_ifNotNil_((function(){return "";}),(function(){return self._classCommentSource();}))}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_source'){return e.fn()} throw(e)}},
source: unescape('source%0A%20%20%20%20selectedTab%20%3D%20%23comment%20ifFalse%3A%20%5B%0A%09%5E%28selectedProtocol%20notNil%20or%3A%20%5BselectedMethod%20notNil%5D%29%0A%09%20%20%20%20ifFalse%3A%20%5Bself%20declarationSource%5D%0A%09%20%20%20%20ifTrue%3A%20%5Bself%20methodSource%5D%5D.%0A%20%20%20%20%5EselectedClass%0A%09ifNil%3A%20%5B%27%27%5D%0A%09ifNotNil%3A%20%5Bself%20classCommentSource%5D%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_methodSource',
smalltalk.method({
selector: 'methodSource',
category: 'accessing',
fn: function (){
var self=this;
return self['@selectedMethod']._ifNil_ifNotNil_((function(){return self._dummyMethodSource();}),(function(){return self['@selectedMethod']._source();}));
return self;},
source: unescape('methodSource%0A%20%20%20%20%5EselectedMethod%0A%09ifNil%3A%20%5Bself%20dummyMethodSource%5D%0A%09ifNotNil%3A%20%5BselectedMethod%20source%5D%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_dummyMethodSource',
smalltalk.method({
selector: 'dummyMethodSource',
category: 'accessing',
fn: function (){
var self=this;
return unescape("messageSelectorAndArgumentNames%0A%09%22comment%20stating%20purpose%20of%20message%22%0A%0A%09%7C%20temporary%20variable%20names%20%7C%0A%09statements");
return self;},
source: unescape('dummyMethodSource%0A%20%20%20%20%5E%27messageSelectorAndArgumentNames%0A%09%22comment%20stating%20purpose%20of%20message%22%0A%0A%09%7C%20temporary%20variable%20names%20%7C%0A%09statements%27%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_declarationSource',
smalltalk.method({
selector: 'declarationSource',
category: 'accessing',
fn: function (){
var self=this;
return self['@selectedTab'].__eq("instance")._ifTrue_ifFalse_((function(){return self._classDeclarationSource();}),(function(){return self._metaclassDeclarationSource();}));
return self;},
source: unescape('declarationSource%0A%20%20%20%20%5EselectedTab%20%3D%20%23instance%0A%09ifTrue%3A%20%5Bself%20classDeclarationSource%5D%0A%09ifFalse%3A%20%5Bself%20metaclassDeclarationSource%5D%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_classDeclarationSource',
smalltalk.method({
selector: 'classDeclarationSource',
category: 'accessing',
fn: function (){
var self=this;
var stream=nil;
stream=""._writeStream();
self['@selectedClass']._ifNotNil_((function(){(function($rec){$rec._nextPutAll_(self['@selectedClass']._superclass()._asString());$rec._nextPutAll_(unescape("%20subclass%3A%20%23"));$rec._nextPutAll_(self['@selectedClass']._name());$rec._nextPutAll_(smalltalk.String._cr().__comma(smalltalk.String._tab()));return $rec._nextPutAll_(unescape("instanceVariableNames%3A%20%27"));})(stream);self['@selectedClass']._instanceVariableNames()._do_separatedBy_((function(each){return stream._nextPutAll_(each);}),(function(){return stream._nextPutAll_(" ");}));return (function($rec){$rec._nextPutAll_(unescape("%27").__comma(smalltalk.String._cr()).__comma(smalltalk.String._tab()));$rec._nextPutAll_(unescape("category%3A%20%27"));$rec._nextPutAll_(self['@selectedClass']._category());return $rec._nextPutAll_(unescape("%27"));})(stream);}));
return stream._contents();
return self;},
source: unescape('classDeclarationSource%0A%20%20%20%20%7C%20stream%20%7C%0A%20%20%20%20stream%20%3A%3D%20%27%27%20writeStream.%0A%20%20%20%20selectedClass%20ifNotNil%3A%20%5B%0A%09stream%20%0A%09%20%20%20%20nextPutAll%3A%20selectedClass%20superclass%20asString%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%20subclass%3A%20%23%27%3B%0A%09%20%20%20%20nextPutAll%3A%20selectedClass%20name%3B%0A%09%20%20%20%20nextPutAll%3A%20String%20cr%2C%20String%20tab%3B%0A%09%20%20%20%20nextPutAll%3A%20%27instanceVariableNames%3A%20%27%27%27.%0A%09selectedClass%20instanceVariableNames%20%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20stream%20nextPutAll%3A%20each%5D%20%0A%09%20%20%20%20separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%20%27%5D.%0A%09stream%0A%09%20%20%20%20nextPutAll%3A%20%27%27%27%27%2C%20String%20cr%2C%20String%20tab%3B%0A%09%20%20%20%20nextPutAll%3A%20%27category%3A%20%27%27%27%3B%0A%09%20%20%20%20nextPutAll%3A%20selectedClass%20category%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%27%27%27%5D.%0A%20%20%20%20%5Estream%20contents%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_metaclassDeclarationSource',
smalltalk.method({
selector: 'metaclassDeclarationSource',
category: 'accessing',
fn: function (){
var self=this;
var stream=nil;
stream=""._writeStream();
self['@selectedClass']._ifNotNil_((function(){(function($rec){$rec._nextPutAll_(self['@selectedClass']._asString());$rec._nextPutAll_(" class ");return $rec._nextPutAll_(unescape("instanceVariableNames%3A%20%27"));})(stream);self['@selectedClass']._class()._instanceVariableNames()._do_separatedBy_((function(each){return stream._nextPutAll_(each);}),(function(){return stream._nextPutAll_(" ");}));return stream._nextPutAll_(unescape("%27"));}));
return stream._contents();
return self;},
source: unescape('metaclassDeclarationSource%0A%20%20%20%20%7C%20stream%20%7C%0A%20%20%20%20stream%20%3A%3D%20%27%27%20writeStream.%0A%20%20%20%20selectedClass%20ifNotNil%3A%20%5B%0A%09stream%20%0A%09%20%20%20%20nextPutAll%3A%20selectedClass%20asString%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%20class%20%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27instanceVariableNames%3A%20%27%27%27.%0A%09selectedClass%20class%20instanceVariableNames%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20stream%20nextPutAll%3A%20each%5D%0A%09%20%20%20%20separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%20%27%5D.%0A%09stream%20nextPutAll%3A%20%27%27%27%27%5D.%0A%20%20%20%20%5Estream%20contents%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_classCommentSource',
smalltalk.method({
selector: 'classCommentSource',
category: 'accessing',
fn: function (){
var self=this;
return self['@selectedClass']._comment();
return self;},
source: unescape('classCommentSource%0A%20%20%20%20%5EselectedClass%20comment%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_enableSaveButton',
smalltalk.method({
selector: 'enableSaveButton',
category: 'actions',
fn: function (){
var self=this;
self['@saveButton']._removeAt_("disabled");
return self;},
source: unescape('enableSaveButton%0A%20%20%20%20saveButton%20removeAt%3A%20%27disabled%27%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_disableSaveButton',
smalltalk.method({
selector: 'disableSaveButton',
category: 'actions',
fn: function (){
var self=this;
self['@saveButton']._ifNotNil_((function(){return self['@saveButton']._at_put_("disabled",true);}));
return self;},
source: unescape('disableSaveButton%0A%20%20%20%20saveButton%20ifNotNil%3A%20%5B%0A%09saveButton%20at%3A%20%27disabled%27%20put%3A%20true%5D%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_hideClassButtons',
smalltalk.method({
selector: 'hideClassButtons',
category: 'actions',
fn: function (){
var self=this;
self['@classButtons']._asJQuery()._hide();
return self;},
source: unescape('hideClassButtons%0A%20%20%20%20classButtons%20asJQuery%20hide%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_showClassButtons',
smalltalk.method({
selector: 'showClassButtons',
category: 'actions',
fn: function (){
var self=this;
self['@classButtons']._asJQuery()._show();
return self;},
source: unescape('showClassButtons%0A%20%20%20%20classButtons%20asJQuery%20show%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_hideMethodButtons',
smalltalk.method({
selector: 'hideMethodButtons',
category: 'actions',
fn: function (){
var self=this;
self['@methodButtons']._asJQuery()._hide();
return self;},
source: unescape('hideMethodButtons%0A%20%20%20%20methodButtons%20asJQuery%20hide%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_showMethodButtons',
smalltalk.method({
selector: 'showMethodButtons',
category: 'actions',
fn: function (){
var self=this;
self['@methodButtons']._asJQuery()._show();
return self;},
source: unescape('showMethodButtons%0A%20%20%20%20methodButtons%20asJQuery%20show%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_compile',
smalltalk.method({
selector: 'compile',
category: 'actions',
fn: function (){
var self=this;
self['@selectedTab'].__eq("comment")._ifTrue_((function(){return self['@selectedClass']._ifNotNil_((function(){return self._compileClassComment();}));}));
self['@selectedProtocol']._notNil()._or_((function(){return self['@selectedMethod']._notNil();}))._ifFalse_ifTrue_((function(){return self._compileDefinition();}),(function(){return self._compileMethodDefinition();}));
self._disableSaveButton();
return self;},
source: unescape('compile%0A%20%20%20%20selectedTab%20%3D%20%23comment%20ifTrue%3A%20%5B%0A%09selectedClass%20ifNotNil%3A%20%5B%0A%09%20%20%20%20self%20compileClassComment%5D%5D.%0A%20%20%20%20%28selectedProtocol%20notNil%20or%3A%20%5BselectedMethod%20notNil%5D%29%0A%09ifFalse%3A%20%5Bself%20compileDefinition%5D%0A%09ifTrue%3A%20%5Bself%20compileMethodDefinition%5D.%0A%20%20%20%20self%20disableSaveButton%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_compileClassComment',
smalltalk.method({
selector: 'compileClassComment',
category: 'actions',
fn: function (){
var self=this;
self['@selectedClass']._comment_(self['@sourceTextarea']._asJQuery()._val());
return self;},
source: unescape('compileClassComment%0A%20%20%20%20selectedClass%20comment%3A%20sourceTextarea%20asJQuery%20val%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_compileMethodDefinition',
smalltalk.method({
selector: 'compileMethodDefinition',
category: 'actions',
fn: function (){
var self=this;
self['@selectedTab'].__eq("instance")._ifTrue_ifFalse_((function(){return self._compileMethodDefinitionFor_(self['@selectedClass']);}),(function(){return self._compileMethodDefinitionFor_(self['@selectedClass']._class());}));
return self;},
source: unescape('compileMethodDefinition%0A%20%20%20%20selectedTab%20%3D%20%23instance%0A%09ifTrue%3A%20%5Bself%20compileMethodDefinitionFor%3A%20selectedClass%5D%0A%09ifFalse%3A%20%5Bself%20compileMethodDefinitionFor%3A%20selectedClass%20class%5D%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_compileMethodDefinitionFor_',
smalltalk.method({
selector: 'compileMethodDefinitionFor:',
category: 'actions',
fn: function (aClass){
var self=this;
var method=nil;
method=smalltalk.Compiler._new()._load_forClass_(self['@sourceTextarea']._asJQuery()._val(),self['@selectedClass']);
method._category_(self['@selectedProtocol']);
aClass._addCompiledMethod_(method);
self._updateMethodsList();
self._selectMethod_(method);
return self;},
source: unescape('compileMethodDefinitionFor%3A%20aClass%0A%20%20%20%20%7C%20method%20%7C%0A%20%20%20%20method%20%3A%3D%20Compiler%20new%20load%3A%20sourceTextarea%20asJQuery%20val%20forClass%3A%20selectedClass.%0A%20%20%20%20method%20category%3A%20selectedProtocol.%0A%20%20%20%20aClass%20addCompiledMethod%3A%20method.%0A%20%20%20%20self%20updateMethodsList.%0A%20%20%20%20self%20selectMethod%3A%20method%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_compileDefinition',
smalltalk.method({
selector: 'compileDefinition',
category: 'actions',
fn: function (){
var self=this;
var newClass=nil;
newClass=smalltalk.Compiler._new()._loadExpression_(self['@sourceTextarea']._asJQuery()._val());
(function($rec){$rec._updateCategoriesList();return $rec._updateClassesList();})(self);
return self;},
source: unescape('compileDefinition%0A%20%20%20%20%7C%20newClass%20%7C%0A%20%20%20%20newClass%20%3A%3D%20Compiler%20new%20loadExpression%3A%20sourceTextarea%20asJQuery%20val.%0A%20%20%20%20self%20%0A%09updateCategoriesList%3B%0A%09updateClassesList%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_removeClass',
smalltalk.method({
selector: 'removeClass',
category: 'actions',
fn: function (){
var self=this;
self._confirm_("Do you really want to remove ".__comma(self['@selectedClass']._name()).__comma(unescape("%3F")))._ifTrue_((function(){smalltalk.Smalltalk._current()._basicDelete_(self['@selectedClass']._name());return self._selectClass_(nil);}));
return self;},
source: unescape('removeClass%0A%20%20%20%20%28self%20confirm%3A%20%27Do%20you%20really%20want%20to%20remove%20%27%2C%20selectedClass%20name%2C%20%27%3F%27%29%0A%09ifTrue%3A%20%5B%0A%09%20%20%20%20Smalltalk%20current%20basicDelete%3A%20selectedClass%20name.%0A%09%20%20%20%20self%20selectClass%3A%20nil%5D%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_removeMethod',
smalltalk.method({
selector: 'removeMethod',
category: 'actions',
fn: function (){
var self=this;
self._confirm_(unescape("Do%20you%20really%20want%20to%20remove%20%23").__comma(self['@selectedMethod']._selector()).__comma(unescape("%3F")))._ifTrue_((function(){self['@selectedClass']._removeCompiledMethod_(self['@selectedMethod']);return self._selectMethod_(nil);}));
return self;},
source: unescape('removeMethod%0A%20%20%20%20%28self%20confirm%3A%20%27Do%20you%20really%20want%20to%20remove%20%23%27%2C%20selectedMethod%20selector%2C%20%27%3F%27%29%0A%09ifTrue%3A%20%5B%0A%09%20%20%20%20selectedClass%20removeCompiledMethod%3A%20selectedMethod.%0A%09%20%20%20%20self%20selectMethod%3A%20nil%5D%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_selectCategory_',
smalltalk.method({
selector: 'selectCategory:',
category: 'actions',
fn: function (aCategory){
var self=this;
self['@selectedCategory']=aCategory;
self['@selectedClass']=self['@selectedProtocol']=self['@selectedMethod']=nil;
(function($rec){$rec._updateCategoriesList();$rec._updateClassesList();$rec._updateProtocolsList();$rec._updateMethodsList();return $rec._updateSourceAndButtons();})(self);
return self;},
source: unescape('selectCategory%3A%20aCategory%0A%20%20%20%20selectedCategory%20%3A%3D%20aCategory.%0A%20%20%20%20selectedClass%20%3A%3D%20selectedProtocol%20%3A%3D%20selectedMethod%20%3A%3D%20%20nil.%0A%20%20%20%20self%20%0A%09updateCategoriesList%3B%0A%09updateClassesList%3B%0A%09updateProtocolsList%3B%0A%09updateMethodsList%3B%0A%09updateSourceAndButtons%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_selectClass_',
smalltalk.method({
selector: 'selectClass:',
category: 'actions',
fn: function (aClass){
var self=this;
self['@selectedClass']=aClass;
self['@selectedProtocol']=self['@selectedMethod']=nil;
(function($rec){$rec._updateClassesList();$rec._updateProtocolsList();$rec._updateMethodsList();return $rec._updateSourceAndButtons();})(self);
return self;},
source: unescape('selectClass%3A%20aClass%0A%20%20%20%20selectedClass%20%3A%3D%20aClass.%0A%20%20%20%20selectedProtocol%20%3A%3D%20selectedMethod%20%3A%3D%20nil.%0A%20%20%20%20self%20%0A%09updateClassesList%3B%0A%09updateProtocolsList%3B%0A%09updateMethodsList%3B%0A%09updateSourceAndButtons%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_selectProtocol_',
smalltalk.method({
selector: 'selectProtocol:',
category: 'actions',
fn: function (aString){
var self=this;
self['@selectedProtocol']=aString;
self['@selectedMethod']=nil;
(function($rec){$rec._updateProtocolsList();$rec._updateMethodsList();return $rec._updateSourceAndButtons();})(self);
return self;},
source: unescape('selectProtocol%3A%20aString%0A%20%20%20%20selectedProtocol%20%3A%3D%20aString.%0A%20%20%20%20selectedMethod%20%3A%3D%20nil.%0A%20%20%20%20self%20%0A%09updateProtocolsList%3B%0A%09updateMethodsList%3B%0A%09updateSourceAndButtons%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_selectMethod_',
smalltalk.method({
selector: 'selectMethod:',
category: 'actions',
fn: function (aMethod){
var self=this;
self['@selectedMethod']=aMethod;
(function($rec){$rec._updateProtocolsList();$rec._updateMethodsList();return $rec._updateSourceAndButtons();})(self);
return self;},
source: unescape('selectMethod%3A%20aMethod%0A%20%20%20%20selectedMethod%20%3A%3D%20aMethod.%0A%20%20%20%20self%20%0A%09updateProtocolsList%3B%0A%09updateMethodsList%3B%0A%09updateSourceAndButtons%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_selectTab_',
smalltalk.method({
selector: 'selectTab:',
category: 'actions',
fn: function (aString){
var self=this;
self['@selectedTab']=aString;
self._selectProtocol_(nil);
self._updateTabsList();
return self;},
source: unescape('selectTab%3A%20aString%0A%20%20%20%20selectedTab%20%3A%3D%20aString.%0A%20%20%20%20self%20selectProtocol%3A%20nil.%0A%20%20%20%20self%20updateTabsList.%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_renderBoxOn_',
smalltalk.method({
selector: 'renderBoxOn:',
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){$rec._renderTopPanelOn_(html);$rec._renderTabsOn_(html);return $rec._renderBottomPanelOn_(html);})(self);
return self;},
source: unescape('renderBoxOn%3A%20html%0A%20%20%20%20self%20%0A%09renderTopPanelOn%3A%20html%3B%0A%09renderTabsOn%3A%20html%3B%0A%09renderBottomPanelOn%3A%20html%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_renderTopPanelOn_',
smalltalk.method({
selector: 'renderTopPanelOn:',
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){$rec._class_("top");return $rec._with_((function(){self['@categoriesList']=html._ul()._class_("jt_column categories");self['@classesList']=html._ul()._class_("jt_column classes");self['@protocolsList']=html._ul()._class_("jt_column protocols");self['@methodsList']=html._ul()._class_("jt_column methods");(function($rec){$rec._updateCategoriesList();$rec._updateClassesList();$rec._updateProtocolsList();return $rec._updateMethodsList();})(self);return html._div()._class_("jt_clear");}));})(html._div());
return self;},
source: unescape('renderTopPanelOn%3A%20html%0A%20%20%20%20html%20div%20%0A%09class%3A%20%27top%27%3B%20%0A%09with%3A%20%5B%0A%09%20%20%20%20categoriesList%20%3A%3D%20html%20ul%20class%3A%20%27jt_column%20categories%27.%0A%09%20%20%20%20classesList%20%3A%3D%20html%20ul%20class%3A%20%27jt_column%20classes%27.%0A%09%20%20%20%20protocolsList%20%3A%3D%20html%20ul%20class%3A%20%27jt_column%20protocols%27.%0A%09%20%20%20%20methodsList%20%3A%3D%20html%20ul%20class%3A%20%27jt_column%20methods%27.%0A%09%20%20%20%20self%0A%09%09updateCategoriesList%3B%0A%09%09updateClassesList%3B%0A%09%09updateProtocolsList%3B%0A%09%09updateMethodsList.%0A%09%20%20%20%20html%20div%20class%3A%20%27jt_clear%27%5D%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_renderTabsOn_',
smalltalk.method({
selector: 'renderTabsOn:',
category: 'rendering',
fn: function (html){
var self=this;
self['@tabsList']=html._ul()._class_("jt_tabs");
self._updateTabsList();
return self;},
source: unescape('renderTabsOn%3A%20html%0A%20%20%20%20tabsList%20%3A%3D%20html%20ul%20class%3A%20%27jt_tabs%27.%0A%20%20%20%20self%20updateTabsList.%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_renderBottomPanelOn_',
smalltalk.method({
selector: 'renderBottomPanelOn:',
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){$rec._class_("jt_sourceCode");return $rec._with_((function(){self['@sourceTextarea']=(function($rec){$rec._onKeyPress_((function(){return self._enableSaveButton();}));$rec._class_("source");return $rec._at_put_("spellcheck","false");})(html._textarea());return self['@sourceTextarea']._asJQuery()._call_("tabby");}));})(html._div());
return self;},
source: unescape('renderBottomPanelOn%3A%20html%0A%20%20%20%20html%20div%0A%09class%3A%20%27jt_sourceCode%27%3B%0A%09with%3A%20%5B%0A%09%20%20%20%20sourceTextarea%20%3A%3D%20html%20textarea%20%0A%09%09onKeyPress%3A%20%5Bself%20enableSaveButton%5D%3B%0A%09%09class%3A%20%27source%27%3B%0A%09%09at%3A%20%27spellcheck%27%20put%3A%20%27false%27.%0A%09%20%20%20%20sourceTextarea%20asJQuery%20call%3A%20%27tabby%27%5D%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_renderButtonsOn_',
smalltalk.method({
selector: 'renderButtonsOn:',
category: 'rendering',
fn: function (html){
var self=this;
self['@saveButton']=html._button();
(function($rec){$rec._with_("Save");return $rec._onClick_((function(){return self._compile();}));})(self['@saveButton']);
self['@methodButtons']=html._span()._with_((function(){return (function($rec){$rec._with_("Remove method");return $rec._onClick_((function(){return self._removeMethod();}));})(html._button());}));
self['@classButtons']=html._span()._with_((function(){return (function($rec){$rec._with_("Remove class");return $rec._onClick_((function(){return self._removeClass();}));})(html._button());}));
self._updateSourceAndButtons();
return self;},
source: unescape('renderButtonsOn%3A%20html%0A%20%20%20%20saveButton%20%3A%3D%20html%20button.%0A%20%20%20%20saveButton%20%0A%09with%3A%20%27Save%27%3B%0A%09onClick%3A%20%5Bself%20compile%5D.%0A%20%20%20%20methodButtons%20%3A%3D%20html%20span%20with%3A%20%5B%0A%09html%20button%0A%09%20%20%20%20with%3A%20%27Remove%20method%27%3B%0A%09%20%20%20%20onClick%3A%20%5Bself%20removeMethod%5D%5D.%0A%20%20%20%20classButtons%20%3A%3D%20html%20span%20with%3A%20%5B%0A%09html%20button%0A%09%20%20%20%20with%3A%20%27Remove%20class%27%3B%0A%09%20%20%20%20onClick%3A%20%5Bself%20removeClass%5D%5D.%0A%20%20%20%20self%20updateSourceAndButtons%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_updateCategoriesList',
smalltalk.method({
selector: 'updateCategoriesList',
category: 'updating',
fn: function (){
var self=this;
self['@categoriesList']._contents_((function(html){return self._categories()._do_((function(each){var li=nil;
li=html._li();self['@selectedCategory'].__eq(each)._ifTrue_((function(){return li._class_("selected");}));return (function($rec){$rec._with_(each);return $rec._onClick_((function(){return self._selectCategory_(each);}));})(li);}));}));
return self;},
source: unescape('updateCategoriesList%0A%20%20%20%20categoriesList%20contents%3A%20%5B%3Ahtml%20%7C%0A%09self%20categories%20do%3A%20%5B%3Aeach%20%7C%7C%20li%20%7C%0A%09%20%20%20%20li%20%3A%3D%20html%20li.%0A%09%20%20%20%20selectedCategory%20%3D%20each%20ifTrue%3A%20%5B%0A%09%09li%20class%3A%20%27selected%27%5D.%0A%09%20%20%20%20li%0A%09%09with%3A%20each%3B%0A%09%09onClick%3A%20%5Bself%20selectCategory%3A%20each%5D%5D%5D%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_updateClassesList',
smalltalk.method({
selector: 'updateClassesList',
category: 'updating',
fn: function (){
var self=this;
smalltalk.TabManager._current()._update();
self['@classesList']._contents_((function(html){return self._classes()._do_((function(each){var li=nil;
li=html._li();self['@selectedClass'].__eq(each)._ifTrue_((function(){return li._class_("selected");}));return (function($rec){$rec._with_(each._name());return $rec._onClick_((function(){return self._selectClass_(each);}));})(li);}));}));
return self;},
source: unescape('updateClassesList%0A%20%20%20%20TabManager%20current%20update.%0A%20%20%20%20classesList%20contents%3A%20%5B%3Ahtml%20%7C%0A%09self%20classes%20do%3A%20%5B%3Aeach%20%7C%7C%20li%20%7C%0A%09%20%20%20%20li%20%3A%3D%20html%20li.%0A%09%20%20%20%20selectedClass%20%3D%20each%20ifTrue%3A%20%5B%0A%09%09li%20class%3A%20%27selected%27%5D.%0A%09%20%20%20%20li%0A%09%09with%3A%20each%20name%3B%0A%09%09onClick%3A%20%5Bself%20selectClass%3A%20each%5D%5D%5D%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_updateProtocolsList',
smalltalk.method({
selector: 'updateProtocolsList',
category: 'updating',
fn: function (){
var self=this;
self['@protocolsList']._contents_((function(html){return self._protocols()._do_((function(each){var li=nil;
li=html._li();self['@selectedProtocol'].__eq(each)._ifTrue_((function(){return li._class_("selected");}));return (function($rec){$rec._with_(each);return $rec._onClick_((function(){return self._selectProtocol_(each);}));})(li);}));}));
return self;},
source: unescape('updateProtocolsList%0A%20%20%20%20protocolsList%20contents%3A%20%5B%3Ahtml%20%7C%0A%09self%20protocols%20do%3A%20%5B%3Aeach%20%7C%7C%20li%20%7C%0A%09%20%20%20%20li%20%3A%3D%20html%20li.%0A%09%20%20%20%20selectedProtocol%20%3D%20each%20ifTrue%3A%20%5B%0A%09%09li%20class%3A%20%27selected%27%5D.%0A%09%20%20%20%20li%20%0A%09%09with%3A%20each%3B%0A%09%09onClick%3A%20%5Bself%20selectProtocol%3A%20each%5D%5D%5D%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_updateMethodsList',
smalltalk.method({
selector: 'updateMethodsList',
category: 'updating',
fn: function (){
var self=this;
self['@methodsList']._contents_((function(html){return self._methods()._do_((function(each){var li=nil;
li=html._li();self['@selectedMethod'].__eq(each)._ifTrue_((function(){return li._class_("selected");}));return (function($rec){$rec._with_(each._selector());return $rec._onClick_((function(){return self._selectMethod_(each);}));})(li);}));}));
return self;},
source: unescape('updateMethodsList%0A%20%20%20%20methodsList%20contents%3A%20%5B%3Ahtml%20%7C%0A%09self%20methods%20do%3A%20%5B%3Aeach%20%7C%7C%20li%20%7C%0A%09%20%20%20%20li%20%3A%3D%20html%20li.%0A%09%20%20%20%20selectedMethod%20%3D%20each%20ifTrue%3A%20%5B%0A%09%09li%20class%3A%20%27selected%27%5D.%0A%09%20%20%20%20li%0A%09%09with%3A%20each%20selector%3B%0A%09%09onClick%3A%20%5Bself%20selectMethod%3A%20each%5D%5D%5D%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_updateTabsList',
smalltalk.method({
selector: 'updateTabsList',
category: 'updating',
fn: function (){
var self=this;
self['@tabsList']._contents_((function(html){var li=nil;
li=html._li();self['@selectedTab'].__eq("instance")._ifTrue_((function(){return li._class_("selected");}));(function($rec){$rec._with_("Instance");return $rec._onClick_((function(){return self._selectTab_("instance");}));})(li);li=html._li();self['@selectedTab'].__eq("class")._ifTrue_((function(){return li._class_("selected");}));(function($rec){$rec._with_("Class");return $rec._onClick_((function(){return self._selectTab_("class");}));})(li);li=html._li();self['@selectedTab'].__eq("comment")._ifTrue_((function(){return li._class_("selected");}));return (function($rec){$rec._with_("Comment");return $rec._onClick_((function(){return self._selectTab_("comment");}));})(li);}));
return self;},
source: unescape('updateTabsList%0A%20%20%20%20tabsList%20contents%3A%20%5B%3Ahtml%20%7C%7C%20li%20%7C%0A%09li%20%3A%3D%20html%20li.%0A%09selectedTab%20%3D%20%23instance%20ifTrue%3A%20%5Bli%20class%3A%20%27selected%27%5D.%0A%09li%0A%09%20%20%20%20with%3A%20%27Instance%27%3B%0A%09%20%20%20%20onClick%3A%20%5Bself%20selectTab%3A%20%23instance%5D.%0A%09li%20%3A%3D%20html%20li.%0A%09selectedTab%20%3D%20%23class%20ifTrue%3A%20%5Bli%20class%3A%20%27selected%27%5D.%0A%09li%0A%09%20%20%20%20with%3A%20%27Class%27%3B%0A%09%20%20%20%20onClick%3A%20%5Bself%20selectTab%3A%20%23class%5D.%0A%09li%20%3A%3D%20html%20li.%0A%09selectedTab%20%3D%20%23comment%20ifTrue%3A%20%5Bli%20class%3A%20%27selected%27%5D.%0A%09li%0A%09%20%20%20%20with%3A%20%27Comment%27%3B%0A%09%20%20%20%20onClick%3A%20%5Bself%20selectTab%3A%20%23comment%5D%5D%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_updateSourceAndButtons',
smalltalk.method({
selector: 'updateSourceAndButtons',
category: 'updating',
fn: function (){
var self=this;
self._disableSaveButton();
self['@selectedMethod']._ifNil_ifNotNil_((function(){self._hideMethodButtons();return self['@selectedClass']._ifNil_ifNotNil_((function(){return self._hideClassButtons();}),(function(){return self._showClassButtons();}));}),(function(){self._hideClassButtons();return self._showMethodButtons();}));
self['@sourceTextarea']._asJQuery()._val_(self._source());
return self;},
source: unescape('updateSourceAndButtons%0A%20%20%20%20self%20disableSaveButton.%0A%20%20%20%20selectedMethod%20%0A%09ifNil%3A%20%5B%0A%09%20%20%20%20self%20hideMethodButtons.%0A%09%20%20%20%20selectedClass%20%0A%09%09ifNil%3A%20%5Bself%20hideClassButtons%5D%0A%09%20%20%20%20ifNotNil%3A%20%5Bself%20showClassButtons%5D%5D%0A%09ifNotNil%3A%20%5B%0A%09%20%20%20%20self%20hideClassButtons.%0A%09%20%20%20%20self%20showMethodButtons%5D.%0A%20%20%20%20sourceTextarea%20asJQuery%20val%3A%20self%20source%0A')}),
smalltalk.Browser);

smalltalk.addMethod(
'_canBeClosed',
smalltalk.method({
selector: 'canBeClosed',
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
source: unescape('canBeClosed%0A%20%20%20%20%5Etrue%0A')}),
smalltalk.Browser);


smalltalk.addMethod(
'_openOn_',
smalltalk.method({
selector: 'openOn:',
category: 'convenience',
fn: function (aClass){
var self=this;
(function($rec){$rec._open();$rec._selectCategory_(aClass._category());return $rec._selectClass_(aClass);})(self._new());
return self;},
source: unescape('openOn%3A%20aClass%0A%20%20%20%20self%20new%0A%09open%3B%0A%09selectCategory%3A%20aClass%20category%3B%0A%09selectClass%3A%20aClass%0A')}),
smalltalk.Browser.klass);

smalltalk.addMethod(
'_open',
smalltalk.method({
selector: 'open',
category: 'convenience',
fn: function (){
var self=this;
self._new()._open();
return self;},
source: unescape('open%0A%20%20%20%20self%20new%20open%0A')}),
smalltalk.Browser.klass);



