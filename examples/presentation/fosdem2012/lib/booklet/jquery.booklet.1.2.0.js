/*
 * jQuery Booklet Plugin
 * Copyright (c) 2010 W. Grauvogel (http://builtbywill.com/)
 *
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version : 1.2.0
 *
 * Originally based on the work of:
 *	1) Charles Mangin (http://clickheredammit.com/pageflip/)
 */
;(function($) {
		   
$.fn.booklet = function(options){
	
	var o = $.extend({}, $.fn.booklet.defaults, options);
	
	return $(this).each(function()
	{
		var command, config, obj, id, i, target;
		
		//option type string - api call
		if(typeof options == 'string')
		{
			//check if booklet has been initialized
			 if($(this).data('booklet')){
				command = options.toLowerCase();
				obj = $.fn.booklet.interfaces[$(this).data('id')];
				
				if(command == 'next'){ obj.next() }
				else if(command == 'prev'){ obj.prev() }
				
			 }
		}
		//option type number - api call		
		else if(typeof options == 'number')
		{
			//check if booklet has been initialized
			 if($(this).data('booklet')){
				target = options;
				obj = $.fn.booklet.interfaces[$(this).data('id')];
				
				if(target % 2 != 0) {
					target-= 1;
				}
				
				obj.gotoPage(target);
			 }
			 
		}
		//else build new booklet
		else
		{
			config = $.extend(true, {}, o);
	
			// Determine ID (Reuse array slots if possible)
			id = $.fn.booklet.interfaces.length;
			for(i = 0; i < id; i++)
			{
			   if(typeof $.fn.booklet.interfaces[i] == 'undefined'){ id = i; break; }
			}
	
			// Instantiate the booklet
			obj = new booklet($(this), config, id);
	
			// Add API references
			$.fn.booklet.interfaces[id] = obj;
		}
	});
}


function booklet(target, options, id){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARS + STRUCTURE
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	var self, opts, b, src,
		hash, i, j, p, diff, busy, init, rhover, lhover, h, a, playing,
		titles = new Array(), chapters = new Array(),
		pN, p0, p1, p2, p3, p4, pNwrap, p0wrap, p1wrap, p2wrap, p3wrap, p4wrap, wraps, sF, sB,
		p3drag, p0drag, temp, relativeX,
		overlaysB, overlayN, overlayP, tabs, tabN, tabP, arrows, arrowN, arrowP, next, prev, ctrlsN, ctrlsP,
		menu, chapter, dd, ddUL, ddH, ddLI, ddA, ddT, ddC, ddCUL, ddCH, ddCLI, ddCA, ddCT,
		empty = '<div class="b-page-empty" title="" rel=""></div>', blank = '<div class="b-page-blank" title="" rel=""></div>'
	;
		
	busy         = false;
	playing      = false;
	init         = false;
	rhover = lhover = false;
	self         = this;
	self.options = options;
	self.id      = id;
	self.hash    = '';	
	opts         = self.options;
	b            = target.addClass('booklet');
	src          = b.children('.b-load');
	
	//save page titles and chapter names, add page numbers
	initPages();
	
	//store data for api calls
	b.data('booklet',true);
	b.data('id', id);
	b.data('total', src.children().length);
	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SETUP OPTIONS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	//set width + height
	if(!opts.width){
		opts.width = b.width();
	}else if(typeof opts.width == 'string' && opts.width.indexOf("%") != -1){
		opts.wPercent = true;
		opts.wOrig = opts.width;
		opts.width  = (opts.width.replace('%','')/100) * parseFloat(b.parent().css('width'));
	}
	if(!opts.height){
		opts.height = b.height();
	}else if(typeof opts.height == 'string' && opts.height.indexOf("%") != -1){
		opts.hPercent = true;
		opts.hOrig = opts.height;
		opts.height  = (opts.height.replace('%','')/100) * parseFloat(b.parent().css('height'));
	}
	b.width(opts.width);
	b.height(opts.height);
	
	//save page sizes and other vars
	opts.pWidth  = opts.width/2;
	opts.pWidthN = '-'+(opts.pWidth)+'px';
	opts.pWidthH = opts.pWidth/2;
	opts.pHeight = opts.height;

	opts.pTotal  = src.children().length;
	opts.speedH  = opts.speed/2;
	
	//set startingPage
	if(opts.direction == 'LTR'){
		opts.curr = 0;
	}else if(opts.direction == 'RTL'){
		opts.curr = opts.pTotal-2;
	}
	if(!isNaN(opts.startingPage) && opts.startingPage <= opts.pTotal && opts.startingPage > 0){
		if((opts.startingPage % 2) != 0){opts.startingPage--};
		opts.curr = opts.startingPage;
	}
	
	//set position
	if(opts.closed && opts.autoCenter){
		if(opts.curr == 0){
			b.width(opts.pWidth);
		}else if(opts.curr >= opts.pTotal-2){
			b.width(opts.pWidth);
		}
	}
	
	//set booklet opts.name
	if(opts.name){
		document.title = opts.name;
	}else{
		opts.name = document.title;
	}
	
	//save shadow widths for anim
	if(opts.shadows){
		opts.shadowTopFwdWidth  = '-'+opts.shadowTopFwdWidth+'px';
		opts.shadowTopBackWidth = '-'+opts.shadowTopBackWidth+'px';
	}
	
	//setup menu
	if(opts.menu){
		menu = $(opts.menu).addClass('b-menu');
		p = opts.curr;		
		//setup page selctor
		if(opts.pageSelector){
			//add selector
			dd = $('<div class="b-selector b-selector-page"><span class="b-current">'+ (p+1) +' - '+ (p+2) +'</span></div>').appendTo(menu);
			ddUL = $('<ul></ul>').appendTo(dd).empty().css('height','auto');

			//loop through all pages
			for(i=0; i < opts.pTotal; i+=2){
				j = i;
				//nums for normal view
				nums = (j+1) +'-'+ (j+2);
				if(opts.closed){
					//nums for closed book
					j--;
					if(i==0){nums='1'}
					else if(i==opts.pTotal-2){nums=opts.pTotal-2}
					else {nums = (j+1) +'-'+ (j+2);}
					//nums for closed book with covers
					if(opts.covers){
						j--;
						if(i==0){nums=''}
						else if(i==opts.pTotal-2){nums=''}
						else {nums = (j+1) +'-'+ (j+2);}
					}
				}
				//nums for RTL direction
				if(opts.direction == 'RTL'){
					nums = (Math.abs(j - opts.pTotal)-1) +' - '+ ((Math.abs(j - opts.pTotal)));
					if(opts.closed){
						if(i==opts.pTotal-2){nums='1'}
						else if(i==0){nums=opts.pTotal-2}
						else{nums = (Math.abs(j - opts.pTotal)-3) +' - '+ ((Math.abs(j - opts.pTotal)-2));}
						
						if(opts.covers){
							if(i==opts.pTotal-2){nums=''}
							else if(i==0){nums=''}
							else{nums = (Math.abs(j - opts.pTotal)-5) +' - '+ ((Math.abs(j - opts.pTotal)-4));}
						}
					}
					dd.find('.b-current').text(nums);
					ddLI = $('<li><a href="#/page/'+ (i+1) +'" id="selector-page-'+i+'"><span class="b-text">'+ titles[i+1] +'</span><span class="b-num">'+ nums +'</span></a></li>').prependTo(ddUL);
				}else{
					if(i==0){dd.find('.b-current').text(nums);}
					ddLI = $('<li><a href="#/page/'+ (i+1) +'" id="selector-page-'+i+'"><span class="b-text">'+ titles[i] +'</span><span class="b-num">'+ nums +'</span></a></li>').appendTo(ddUL);
				}
				
				ddA = ddLI.find('a');
				if(!opts.hash){
					ddA.click(function(){
						if(opts.direction == 'RTL'){dd.find('.b-current').text($(this).find('.b-num').text());}
						ddT = parseInt($(this).attr('id').replace('selector-page-',''));
						self.gotoPage(ddT);
						return false;
					});
				}
			}
			
			//set height
			ddH = ddUL.height();
			ddUL.css({'height':0, 'padding-bottom':0});
			
			//add hover effects
			dd.unbind('hover').hover(function(){
				ddUL.stop().animate({height:ddH, paddingBottom:10}, 500);
			},function(){
				ddUL.stop().animate({height:0, paddingBottom:0}, 500);
			});
		}
		
		//setup chapter selctor
		if(opts.chapterSelector){
			
			chapter = chapters[opts.curr];
			if(chapter == ""){ chapter = chapters[opts.curr+1]; }
			
			ddC = $('<div class="b-selector b-selector-chapter"><span class="b-current">'+chapter+'</span></div>').appendTo(menu);
			ddCUL = $('<ul></ul>').appendTo(ddC).empty().css('height','auto');

			for(i=0; i < opts.pTotal; i+=1){
				if(chapters[i] != "" && typeof chapters[i] != "undefined"){
					if(opts.direction == 'RTL'){
						j = i;
						if(j % 2 != 0){j--;}
						ddC.find('.b-current').text(chapters[i]);
						ddCLI = $('<li><a href="#/page/'+ (j+1) +'" id="selector-page-'+(j)+'"><span class="b-text">'+ chapters[i] +'</span></a></li>').prependTo(ddCUL);
					}else{
						ddCLI = $('<li><a href="#/page/'+ (i+1) +'" id="selector-page-'+i+'"><span class="b-text">'+ chapters[i] +'</span></a></li>').appendTo(ddCUL);
					}
					ddCA = ddCLI.find('a');
					if(!opts.hash){
						ddCA.click(function(){
							if(opts.direction == 'RTL'){ddC.find('.b-current').text($(this).find('.b-text').text());}
							ddCT = parseInt($(this).attr('id').replace('selector-page-',''));
							self.gotoPage(ddCT);
							return false;
						});
					}
				}
			}
			
			ddCH = ddCUL.height();
			ddCUL.css({'height':0, 'padding-bottom':0});
			
			ddC.unbind('hover').hover(function(){
				ddCUL.stop().animate({height:ddCH, paddingBottom:10}, 500);
			},function(){
				ddCUL.stop().animate({height:0, paddingBottom:0}, 500);
			});
		}
	}	

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// API METHODS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	$.extend(self,
	{
		next : function(){
			if(!busy){
				self.gotoPage(opts.curr+2);
			}
		},
		prev : function(){
			if(!busy){
				self.gotoPage(opts.curr-2);
			}
		},
		gotoPage : function(num){
			//moving forward (increasing number)
			if(num > opts.curr && num < opts.pTotal && num >= 0 && !busy){
				busy = true;
				diff = num - opts.curr;
				opts.curr = num;
				opts.before.call(self, opts);
				updatePager();
				updateCtrls();
				updateHash(opts.curr+1, opts);
				initAnim(diff, true, sF);
				
				//hide p2 as p3 moves across it
				if(opts.closed && opts.autoCenter && num-diff == 0){
					p2.stop().animate({width:0, left:opts.pWidth}, opts.speed, opts.easing);
					p4.stop().animate({left:opts.pWidth}, opts.speed, opts.easing);
				}else{
					p2.stop().animate({width:0}, opts.speedH, opts.easeIn);
				}
				
				//animate p3 from right to left (left: movement, width: reveal slide, paddingLeft: shadow underneath)
				//call setuppages at end of animation to reset pages
				
				//animation if dragging forward
				if(p3drag){
					p3.stop().animate({left:opts.pWidth/4, width:opts.pWidth*.75, paddingLeft: opts.shadowBtmWidth}, opts.speedH, opts.easeIn)
					         .animate({left:0, width:opts.pWidth, paddingLeft:0}, opts.speedH);
				}else{
					p3.stop().animate({left:opts.pWidthH, width:opts.pWidthH, paddingLeft: opts.shadowBtmWidth}, opts.speedH, opts.easeIn)
					         .animate({left:0, width:opts.pWidth, paddingLeft:0}, opts.speedH);			
				}
				p3wrap.animate({left:opts.shadowBtmWidth}, opts.speedH, opts.easeIn)
					  .animate({left:0}, opts.speedH, opts.easeOut, function(){updateAfter()});				
			
			//moving backward (decreasing number)
			}else if(num < opts.curr && num < opts.pTotal && num >= 0 && !busy){
				busy = true;
				diff = opts.curr - num;
				opts.curr = num;
				opts.before.call(self, opts);
				updatePager();
				updateCtrls();
				updateHash(opts.curr+1, opts);
				initAnim(diff, false, sB);
				
				//animation if dragging backwards
				if(p0drag){
					//hide p1 as p0 moves across it
					p1.animate({left:opts.pWidth, width:0}, opts.speed, opts.easing);
					p1wrap.animate({left:opts.pWidthN}, opts.speed, opts.easing);
					
					//animate p0 from left to right (right: movement, width: reveal slide, paddingLeft: shadow underneath)
					if(opts.closed && opts.autoCenter && opts.curr == 0){
						p0.animate({left:opts.pWidthH, width:opts.pWidthH}, opts.speedH, opts.easeIn)
						  .animate({left:0, width:opts.pWidth}, opts.speedH, opts.easeOut);
						p2.stop().animate({left:0}, opts.speed, opts.easing);
					}else{
						p0.animate({left:opts.pWidth, width:opts.pWidth}, opts.speed, opts.easing);
					}
					//animate .wrapper content with p0 to keep content right aligned throughout
					//call setuppages at end of animation to reset pages
					p0wrap.animate({right:0}, opts.speed, opts.easing, function(){updateAfter()});						
				}else{
					//hide p1 as p0 moves across it
					p1.animate({left:opts.pWidth, width:0}, opts.speed, opts.easing);
					p1wrap.animate({left:opts.pWidthN}, opts.speed, opts.easing);
					
					//animate p0 from left to right (right: movement, width: reveal slide, paddingLeft: shadow underneath)
					if(opts.closed && opts.autoCenter && opts.curr == 0){
						p0.animate({left:opts.pWidthH, width:opts.pWidthH}, opts.speedH, opts.easeIn)
						  .animate({left:0, width:opts.pWidth}, opts.speedH, opts.easeOut);
						p2.stop().animate({left:0}, opts.speed, opts.easing);
					}else{
						p0.animate({left:opts.pWidthH, width:opts.pWidthH}, opts.speedH, opts.easeIn)
						  .animate({left:opts.pWidth, width:opts.pWidth}, opts.speedH, opts.easeOut);
					}
					//animate .wrapper content with p0 to keep content right aligned throughout
					//call setuppages at end of animation to reset pages
					p0wrap.animate({right:opts.shadowBtmWidth}, opts.speedH,opts. easeIn)
						  .animate({right:0}, opts.speedH, opts.easeOut, function(){updateAfter()});					
				}
			}
		}
	});
	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
// SETUP CONTROLS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	if(opts.manual && $.ui){
		opts.overlays = false;
	}
	
	//add prev next user defined controls
	if(opts.next){
		next = $(opts.next);	
		next.click(function(e){e.preventDefault(); self.next();});
	}
	if(opts.prev){
		prev = $(opts.prev);	
		prev.click(function(e){e.preventDefault(); self.prev();});
	}
	
	//add overlays
	if(opts.overlays){
		overlayP = $('<div class="b-overlay b-overlay-prev b-prev" title="Previous Page"></div>').appendTo(b);
		overlayN = $('<div class="b-overlay b-overlay-next b-next" title="Next Page"></div>').appendTo(b);
		overlaysB = b.find('.b-overlay');
	
		if ($.browser.msie) {
			overlaysB.css({'background':'#fff','filter':'progid:DXImageTransform.Microsoft.Alpha(opacity=0) !important'});
		}
	}
	
	//add tabs
	if(opts.tabs){
		tabP = $('<div class="b-tab b-tab-prev b-prev" title="Previous Page">Previous</div>').appendTo(b);
		tabN = $('<div class="b-tab b-tab-next b-next" title="Next Page">Next</div>').appendTo(b);
		tabs = b.find('.b-tab');
		
		if(opts.tabWidth){
			tabs.width(opts.tabWidth);
		}
		if(opts.tabHeight){
			tabs.height(opts.tabHeight);
		}		
		
		tabs.css({'top': '-'+tabN.outerHeight()+'px'});
		b.css({'marginTop': tabN.outerHeight()});
		
		//update ctrls for RTL direction
		if(opts.direction == 'RTL'){
			tabN.html('Previous').attr('title','Previous Page');
			tabP.html('Next').attr('title','Next Page');
		}
	}else{
		b.css({'marginTop': 0});
	}
	
	//add arrows
	if(opts.arrows){
		arrowP = $('<div class="b-arrow b-arrow-prev b-prev" title="Previous Page"><div>Previous</div></div>').appendTo(b);
		arrowN = $('<div class="b-arrow b-arrow-next b-next" title="Next Page"><div>Next</div></div>').appendTo(b);
		arrows = b.find('.b-arrow');
		
		//update ctrls for RTL direction
		if(opts.direction == 'RTL'){
			arrowN.html('<div>Previous</div>').attr('title','Previous Page');
			arrowP.html('<div>Next</div>').attr('title','Next Page');
		}
	}
	
	//save all "b-prev" and "b-next" controls
	ctrlsN = b.find('.b-next');
	ctrlsP = b.find('.b-prev');
	
	//add click actions
	ctrlsN.click(function(e){e.preventDefault(); self.next();});
	ctrlsP.click(function(e){e.preventDefault(); self.prev();});
	
	//add page hover animations
	if(opts.overlays && opts.hovers){
		//hovers to start draggable forward
		ctrlsN.unbind("mouseover mouseout").bind("mouseover",function(){
			hoverAnimStart(true);
		})
		.bind("mouseout",function(){
			hoverAnimEnd(true);
		});
		
		//hovers to start draggable backwards
		ctrlsP.unbind("mouseover mouseout").bind("mouseover",function(){
			hoverAnimStart(false);
		})
		.bind("mouseout",function(){
			hoverAnimEnd(false);
		});
	}
			
	//arrow animations	
	if(opts.arrows){
		if(opts.arrowsHide){
			if($.support.opacity){
				ctrlsN.hover(
					function(){arrowN.find('div').stop().fadeTo('fast', 1);},
					function(){arrowN.find('div').stop().fadeTo('fast', 0);					
				});
				ctrlsP.hover(
					function(){arrowP.find('div').stop().fadeTo('fast', 1);},
					function(){arrowP.find('div').stop().fadeTo('fast', 0);					
				});
			}else{
				ctrlsN.hover(
					function(){arrowN.find('div').show();},
					function(){arrowN.find('div').hide();					
				});
				ctrlsP.hover(
					function(){arrowP.find('div').show();},
					function(){arrowP.find('div').hide();					
				});
			}
		}else{
			arrowN.find('div').show();
			arrowP.find('div').show();
		}
	}

	//keyboard ctrls
	if(opts.keyboard){
		//keyboard ctrls
		$(document).keyup(function(event){
			if(event.keyCode == 37){self.prev();}
			else if(event.keyCode == 39){self.next();}
		});
	}
		
	//hash ctrls
	if(opts.hash){
		setupHash();
		clearInterval(h);
		h = setInterval(function(){pollHash()}, 250);
	}
	
	//percentage resizing
	if(opts.wPercent || opts.hPercent){
		$(window).resize(function() {
			resetSize();
		});
	}
	
	//auto flip book controls
	if(opts.auto && opts.delay){
		clearTimeout(a);
		a = setTimeout(function(){self.next();},opts.delay);
		playing = true;
		
		if(opts.pause){
			pause = $(opts.pause);	
			pause.click(function(e){
				e.preventDefault(); 
				if(playing){
					clearTimeout(a);
					playing = false;
				}
			});
		}
		if(opts.play){
			play = $(opts.play);	
			play.click(function(e){
				e.preventDefault(); 
				if(!playing){
					clearTimeout(a);
					a = setTimeout(function(){self.next();},opts.delay);
					playing = true;
				}
			});
		}
	}
	
	//first time setup
	resetPages();
	updateCtrls();
	updatePager();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
//General Functions	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	function initPages(){		
		//fix for odd number of pages
		if((src.children().length % 2) != 0){
			//if book is closed and using covers, add page before back cover, else after last page
			if(opts.closed && opts.covers){
				src.children().last().before(blank);
			}else{
				src.children().last().after(blank);
			}
		}
		
		//if closed book, add empty pages to start and end
		if(opts.closed){
			$(empty).attr({'title':opts.closedFrontTitle || "Beginning", 'rel':opts.closedFrontChapter || "Beginning of Book"}).prependTo(src);
			src.children().last().attr({'title':opts.closedBackTitle || "End", 'rel':opts.closedBackChapter || "End of Book"});		
			src.append(empty);		
		}

		if(opts.direction == 'LTR'){
			j = 0;
		}else{
			j = src.children().length;
			if(opts.closed){j-=2;}
			if(opts.covers){j-=2;}
			$(src.children().get().reverse()).each(function(){			
				$(this).appendTo(src);
			});
		}
			
		//save titles and chapters
		src.children().each(function(i){
			//save chapter title
			if($(this).attr('rel')){
				chapters[i] = $(this).attr('rel');
			}else{
				chapters[i] = "";
			}
			//save page title
			titles[i] = $(this).attr('title');
			
			//give content the correct wrapper and page wrapper
			if($(this).hasClass('b-page-empty')){
				$(this).wrap('<div class="b-page"><div class="b-wrap"></div></div>');
			}else if(opts.closed && opts.covers && (i == 1 || i == src.children().length-2)){
				$(this).wrap('<div class="b-page"><div class="b-wrap b-page-cover"></div></div>');
			}else if(i % 2 != 0){
				$(this).wrap('<div class="b-page"><div class="b-wrap b-wrap-right"></div></div>');
			}else{

				$(this).wrap('<div class="b-page"><div class="b-wrap b-wrap-left"></div></div>');
			}
			
			$(this).parents('.b-page').addClass('b-page-'+i).data('page',i);
			
			//add page numbers
			if(opts.pageNumbers && !$(this).hasClass('b-page-empty') && (!opts.closed || (opts.closed && !opts.covers) || (opts.closed && opts.covers && i != 1 && i != src.children().length-2))){
				if(opts.direction == 'LTR'){j++;}
				$(this).parent().append('<div class="b-counter">'+(j)+'</div>');
				if(opts.direction == 'RTL'){j--;}
			}
		});
	}

	function resetSize(){
		//recalculate size for percentage values
		if(opts.wPercent){
			opts.width  = (opts.wOrig.replace('%','')/100) * parseFloat(b.parent().css('width'));
			b.width(opts.width);
			opts.pWidth  = opts.width/2;
			opts.pWidthN = '-'+(opts.pWidth)+'px';
			opts.pWidthH = opts.pWidth/2;
		}
		if(opts.hPercent){
			opts.height  = (opts.hOrig.replace('%','')/100) * parseFloat(b.parent().css('height'));
			b.height(opts.height);
			opts.pHeight = opts.height;
		}
		resetCSS();
	}
	
	function resetCSS(){
		//update css
		b.find('.b-shadow-f, .b-shadow-b, .b-p0, .b-p3').css({'filter':'','zoom':''});
		if(opts.manual && $.ui){
			b.find('.b-page').draggable('destroy').removeClass('b-grab b-grabbing');		
		}
		wraps.attr('style','');
		wraps.css({'left':0,'width':opts.pWidth-(opts.pagePadding*2), 'height':opts.pHeight-(opts.pagePadding*2), 'padding': opts.pagePadding});
		p0wrap.css({'right':0,'left':'auto'});
		p1.css({'left':0,'width':opts.pWidth, 'height':opts.pHeight});			
		p2.css({'left':opts.pWidth, 'width':opts.pWidth, 'opacity':1, 'height':opts.pHeight});
		pN.css({'left':0, 'width':opts.pWidth, 'height':opts.pHeight});
		p0.css({'left':0, 'width':0, 'height':opts.pHeight});
		p3.stop().css({'left':opts.pWidth*2, 'width':0, 'height':opts.pHeight, paddingLeft:0});
		p4.css({'left':opts.pWidth, 'width':opts.pWidth, 'height':opts.pHeight});
		
		if(opts.closed && opts.autoCenter && opts.curr == 0){
			pN.css({'left':0});
			p1.css({'left':opts.pWidthN});
			p2.css({'left':0});
			p3.css({'left':opts.pWidth});
			p4.css({'left':0});
		}
		
		if(opts.closed && opts.autoCenter && (opts.curr == 0 || opts.curr >= opts.pTotal-2)){
			if(opts.overlays){overlaysB.width('100%');}
			b.width(opts.pWidth);
		}else{
			if(opts.overlays){overlaysB.width('50%');}
			b.width(opts.width);
		}
		
	}
	
	function resetPages(){	
		//reset page order
		if(init){
			if(p1.data('page')-1 < 0){
				src.prepend(p2.detach());
				src.prepend(p1.detach());
			}else{
				b.find('.b-page-'+(p1.data('page')-1)).after(p1.detach());
				b.find('.b-page-'+(p2.data('page')-1)).after(p2.detach());
			}
			if(p3.data('page')-1 <= opts.pTotal){
				b.find('.b-page-'+(p3.data('page')-1)).after(p3.detach());
				b.find('.b-page-'+(p4.data('page')-1)).after(p4.detach());	
			}
			if(pN.data('page')-1 >= 0){
				b.find('.b-page-'+(pN.data('page')-1)).after(pN.detach());
				b.find('.b-page-'+(p0.data('page')-1)).after(p0.detach());
			}else{
				src.prepend(pN.detach());
				pN.after(p0.detach());
			}
		}
		//reset all content
		b.find('.b-page').removeClass('b-pN b-p0 b-p1 b-p2 b-p3 b-p4').hide();
		
		//add page classes
		if(opts.curr-2 >= 0){
			b.find('.b-page-'+(opts.curr-2)).addClass('b-pN').show();
			b.find('.b-page-'+(opts.curr-1)).addClass('b-p0').show();
		}
		b.find('.b-page-'+(opts.curr)).addClass('b-p1').show();
		b.find('.b-page-'+(opts.curr+1)).addClass('b-p2').show();
		if(opts.curr+3 <= opts.pTotal){
			b.find('.b-page-'+(opts.curr+2)).addClass('b-p3').show();
			b.find('.b-page-'+(opts.curr+3)).addClass('b-p4').show();
		}
	
		//save structure elems to vars
		pN     = b.find('.b-pN');
		p0     = b.find('.b-p0');
		p1     = b.find('.b-p1');
		p2     = b.find('.b-p2');
		p3     = b.find('.b-p3');
		p4     = b.find('.b-p4');
		pNwrap = b.find('.b-pN .b-wrap');
		p0wrap = b.find('.b-p0 .b-wrap');
		p1wrap = b.find('.b-p1 .b-wrap');
		p2wrap = b.find('.b-p2 .b-wrap');
		p3wrap = b.find('.b-p3 .b-wrap');
		p4wrap = b.find('.b-p4 .b-wrap');
		wraps  = b.find('.b-wrap');
		
		resetCSS();
				
		//update page order for animations
		if(opts.curr+3 <= opts.pTotal){
			p3.after(p0.detach());
			p1.after(p4.detach());
		}else{
			p0.detach().appendTo(src);
		}
		init = true;
		
		if(opts.shadows){
			b.find('.b-shadow-f, .b-shadow-b').remove();		
			sF = $('<div class="b-shadow-f"></div>').css({'right':0,'width':opts.pWidth, 'height':opts.pHeight}).appendTo(p3);
			sB = $('<div class="b-shadow-b"></div>').appendTo(p0).css({'left':0,'width':opts.pWidth, 'height':opts.pHeight});		
		}
		
		//reset vars
		rhover = lhover = p3drag = p0drag = false;
		
		//manual page turning, check if jQuery UI is loaded
		if(opts.manual && $.ui){
			
			//implement draggable forward
			p3.draggable({
				axis: "x",
				containment: [p2.offset().left-opts.pWidthH,0,p2.offset().left+opts.pWidth-50,opts.pHeight],
				drag: function(event, ui) {
					p3drag = true;
					temp = ui.originalPosition.left - ui.position.left;
					p3.removeClass('b-grab').addClass('b-grabbing');
					p3.width(40+(temp/2));
					p3wrap.css({'left':10+(temp/8)});
					p2.width(opts.pWidth-p3.width()+10);
					if(opts.shadows){
						sF.css({'right':'-'+(20+temp/4)+'px'});
						if($.support.opacity){
							sF.css({'opacity':0.5*(temp/opts.pWidthH)});
						}else{
							sF.css({'right':'auto','left':0.1*p3.width()});
						}
					}
				},
				stop: function(event, ui) {
					hoverAnimEnd(false);
					var temp = ui.originalPosition.left - ui.position.left;
					if(temp>opts.pWidthH/4){
						if(opts.shadows && !$.support.opacity){
							sF.css({'left':'auto'});
						}
						self.next();
						p3.removeClass('b-grab b-grabbing');
					}else{
						p3drag = false;
						p3.removeClass('b-grabbing').addClass('b-grab');
					}
				}
			});
			
			//implement draggable backwards
			p0.draggable({
				axis: "x",
				containment: [p1.offset().left+10,0,p1.offset().left+opts.pWidth*.75,opts.pHeight],				
				drag: function(event, ui) {
					p0drag = true;
					temp = ui.position.left - ui.originalPosition.left;
					p0.removeClass('b-grab').addClass('b-grabbing');
					p0.css({left:40+(temp)/1.5, width:40+(temp)});
					p0wrap.css({right:10+temp/4});	
					p1.css({left:ui.position.left+20, width:opts.pWidth-ui.position.left-10});			
					p1wrap.css({left:-1*(temp+30)});	
					if(opts.shadows){
						if($.support.opacity){
							sB.css({'opacity':0.5*(temp/opts.pWidthH)});
						}else{
							sB.css({'left':-0.38*opts.pWidth});
						}
					}
				},
				stop: function(event, ui) {
					hoverAnimEnd(true);
					temp = ui.position.left - ui.originalPosition.left;
					if(temp>opts.pWidthH/4){
						self.prev();
						p0.removeClass('b-grab b-grabbing');
					}else{
						p0drag = false;
						p0.removeClass('b-grabbing').addClass('b-grab');
					}
				}
			});
			
			//mousetracking for page movement
			$(b).unbind('mousemove mouseout').bind('mousemove',function(e){
				relativeX = e.pageX - b.offset().left;
				if(relativeX < 50){
					hoverAnimStart(false);
				}else if(relativeX > opts.pWidth-50 && opts.curr == 0 && opts.autoCenter && opts.closed){
					hoverAnimStart(true);
				}else if(relativeX > 50 && relativeX < opts.width-50){
					hoverAnimEnd(false);
					hoverAnimEnd(true);
				}else if(relativeX > opts.width-50){
					hoverAnimStart(true);
				}
			}).bind('mouseout',function(){
				hoverAnimEnd(false);
				hoverAnimEnd(true);
			});
			
		}
	}
	
	function hoverAnimStart(inc){
		if(inc){
			if(!busy && !rhover &&!lhover && !p3drag && opts.curr+2 <= opts.pTotal-2){
				//animate
				p2.stop().animate({'width':opts.pWidth-40}, 500, opts.easing);
				p3.addClass('b-grab');
				if(opts.closed && opts.autoCenter && opts.curr == 0){
					p3.stop().animate({'left':opts.pWidth-50, 'width':40}, 500, opts.easing);
				}else{
					p3.stop().animate({'left':opts.width-50, 'width':40}, 500, opts.easing);
				}
				p3wrap.stop().animate({'left':10}, 500, opts.easing);
				if(opts.shadows && !$.support.opacity){
					sF.css({'right':'auto','left':'-40%'});
				}
				rhover = true;
			}
		}else{
			if(!busy && !lhover && !rhover && !p0drag && opts.curr-2 >= 0){
				//animate
				p1.stop().animate({left:10, width:opts.pWidth-10}, 400, opts.easing);
				p0.addClass('b-grab');
				p1wrap.stop().animate({left:"-10px"}, 400, opts.easing);
				p0.stop().animate({left:10, width:40}, 400, opts.easing);
				p0wrap.stop().animate({right:10}, 400, opts.easing);
				if(opts.shadows && !$.support.opacity){
					sB.css({'left':-0.38*opts.pWidth});
				}
				lhover = true;
			}
		}
	}

	function hoverAnimEnd(inc){
		if(inc){
			if(!busy && rhover && !p3drag && opts.curr+2 <= opts.pTotal-2){
				p2.stop().animate({'width':opts.pWidth}, 500, opts.easing);
				if(opts.closed && opts.autoCenter && opts.curr == 0){
					p3.stop().animate({'left':opts.pWidth, 'width':0}, 500, opts.easing);				
				}else{
					p3.stop().animate({'left':opts.width, 'width':0}, 500, opts.easing);	
				}
				p3wrap.stop().animate({'left':0}, 500, opts.easing);
				if(opts.shadows && !$.support.opacity){
					sF.css({'left':'auto'});
				}
				rhover = false;
			}
		}else{
			if(!busy && lhover && !p0drag && opts.curr-2 >= 0){
				p1.stop().animate({left:0, width:opts.pWidth}, 400, opts.easing);
				p1wrap.stop().animate({left:0}, 400, opts.easing);
				p0.stop().animate({left:0, width:0}, 400, opts.easing);
				p0wrap.stop().animate({right:0}, 400, opts.easing);
				lhover = false;
			}
		}
	}

	function initAnim(diff, inc, shadow){			
		
		//setup content
		if(inc && diff > 2){
			b.find('.b-page-'+(p3.data('page')-1)).after(p3.detach());	
			b.find('.b-page-'+(p4.data('page')-1)).after(p4.detach());	
			
			b.find('.b-p3, .b-p4').removeClass('b-p3 b-p4').hide();
			b.find('.b-page-'+opts.curr).addClass('b-p3').show().stop().css({'left':opts.pWidth*2, 'width':0, 'height':opts.pHeight, paddingLeft:0});
			b.find('.b-page-'+(opts.curr+1)).addClass('b-p4').show().css({'left':opts.pWidth, 'width':opts.pWidth, 'height':opts.pHeight});
			b.find('.b-page-'+opts.curr+' .b-wrap').show().css({'width':opts.pWidth-(opts.pagePadding*2), 'height':opts.pHeight-(opts.pagePadding*2), 'padding': opts.pagePadding});
			b.find('.b-page-'+(opts.curr+1)+' .b-wrap').show().css({'width':opts.pWidth-(opts.pagePadding*2), 'height':opts.pHeight-(opts.pagePadding*2), 'padding': opts.pagePadding});
			
			p3     = b.find('.b-p3');
			p4     = b.find('.b-p4');
			p3wrap = b.find('.b-p3 .b-wrap');
			p4wrap = b.find('.b-p4 .b-wrap');
			
			if(rhover){
				p3.css({'left':opts.width-40, 'width':20, 'padding-left': 10});
			}
			
			p1.after(p4.detach());
			p2.after(p3.detach());
			
			if (opts.shadows) {
				b.find('.b-shadow-f').remove();
				sF = $('<div class="b-shadow-f"></div>').css({
					'right': 0,
					'width': opts.pWidth,
					'height': opts.pHeight
				}).appendTo(p3);
				shadow = sF;
			}	
			
		}else if(!inc && diff > 2){
			
			b.find('.b-page-'+(pN.data('page')-1)).after(pN.detach());
			b.find('.b-page-'+(p0.data('page')-1)).after(p0.detach());
			
			b.find('.b-pN, .b-p0').removeClass('b-pN b-p0').hide();
			b.find('.b-page-'+opts.curr).addClass('b-pN').show().css({'left':0, 'width':opts.pWidth, 'height':opts.pHeight});
			b.find('.b-page-'+(opts.curr+1)).addClass('b-p0').show().css({'left':0, 'width':0, 'height':opts.pHeight});
			b.find('.b-page-'+opts.curr+' .b-wrap').show().css({'width':opts.pWidth-(opts.pagePadding*2), 'height':opts.pHeight-(opts.pagePadding*2), 'padding': opts.pagePadding});
			b.find('.b-page-'+(opts.curr+1)+' .b-wrap').show().css({'width':opts.pWidth-(opts.pagePadding*2), 'height':opts.pHeight-(opts.pagePadding*2), 'padding': opts.pagePadding});
			
			pN     = b.find('.b-pN');
			p0     = b.find('.b-p0');
			pNwrap = b.find('.b-pN .b-wrap');
			p0wrap = b.find('.b-p0 .b-wrap');
						
			if(lhover){
				p0.css({left:10, width:40});
				p0wrap.css({right:10});
			}
			
			p0.detach().appendTo(src);
			
			if (opts.shadows) {
				b.find('.b-shadow-b, .b-shadow-f').remove();
				sB = $('<div class="b-shadow-b"></div>').appendTo(p0).css({
					'left': 0,
					'width': opts.pWidth,
					'height': opts.pHeight
				});
				shadow = sB;
			}
		}
		
		//update page visibility
		//if moving to start and end of book
		if(opts.closed){
			if(!inc && opts.curr == 0){
				pN.hide();
			}else if(!inc){
				pN.show();
			}
			if(inc && opts.curr >= opts.pTotal-2){
				p4.hide();
			}else if(inc){
				p4.show();
			}
		}
		
		//init shadows
		if(opts.shadows){
			//check for opacity support -> animate shadow overlay on moving slide
			if($.support.opacity){
				shadow.animate({opacity:1}, opts.speedH, opts.easeIn)
					  .animate({opacity:0}, opts.speedH, opts.easeOut);
			}else{
				if(inc){
					shadow.animate({right:opts.shadowTopFwdWidth}, opts.speed, opts.easeIn);
				}else{
					shadow.animate({left:opts.shadowTopBackWidth}, opts.speed, opts.easeIn);
				}
			}
		}
		
		//init position anim
		if(opts.closed && opts.autoCenter){
			if(opts.curr == 0){
				p3.hide();
				p4.hide();
				b.animate({width:opts.pWidth}, opts.speed, opts.easing);
			}else if(opts.curr >= opts.pTotal-2){
				p0.hide();
				pN.hide();
				b.animate({width:opts.pWidth}, opts.speed, opts.easing);
			}else{
				b.animate({width:opts.width}, opts.speed, opts.easing);
			}
		}
	}
	
	function updateAfter(){
		resetPages();
		updatePager();
		updateCtrls();
		opts.after.call(self, opts);
		busy = false;
		
		//update auto play timer
		if(opts.auto && opts.delay){
			if(playing && opts.curr < opts.pTotal-2){
				clearTimeout(a);
				a = setTimeout(function(){self.next();},opts.delay);
				console.log("continue...");
			}
			if(opts.curr >= opts.pTotal-2){
				playing = false;
			}
		}
	}
	
	function updateCtrls(){
		//update ctrls, cursors and visibility
		if(opts.overlays || opts.tabs || opts.arrows){
			if($.support.opacity){
				if(opts.curr < opts.pTotal-2){
					ctrlsN.fadeIn('fast').css('cursor',opts.cursor);
				}else{
					ctrlsN.fadeOut('fast').css('cursor','default'); 
				}
				if(opts.curr >= 2 && opts.curr != 0){           
					ctrlsP.fadeIn('fast').css('cursor',opts.cursor);
				}else{
					ctrlsP.fadeOut('fast').css('cursor','default'); 
				}
			}else{
				if(opts.curr < opts.pTotal-2){
					ctrlsN.show().css('cursor',opts.cursor);
				}else{
					ctrlsN.hide().css('cursor','default'); 
				}
				if(opts.curr >= 2 && opts.curr != 0){           
					ctrlsP.show().css('cursor',opts.cursor);
				}else{
					ctrlsP.hide().css('cursor','default'); 
				}
			}
		}
	}
	
	function updatePager(){
		if(opts.pageSelector){
			if(opts.direction == 'RTL'){
				nums = (Math.abs(opts.curr - opts.pTotal)-1) +' - '+ ((Math.abs(opts.curr - opts.pTotal)));
				if(opts.closed){
					if(opts.curr==opts.pTotal-2){nums='1'}
					else if(opts.curr==0){nums=opts.pTotal-2}
					else{nums = (Math.abs(opts.curr - opts.pTotal)-2) +' - '+ ((Math.abs(opts.curr - opts.pTotal)-1));}
					
					if(opts.covers){
						if(opts.curr==opts.pTotal-2){nums=''}
						else if(opts.curr==0){nums=''}
						else{nums = (Math.abs(opts.curr - opts.pTotal)-3) +' - '+ ((Math.abs(opts.curr - opts.pTotal)-2));}
					}
				}
				$(opts.menu+' .b-selector-page .b-current').text(nums);
			}else{
				nums = (opts.curr+1) +' - '+ (opts.curr+2);
				if(opts.closed){
					if(opts.curr==0){nums='1'}
					else if(opts.curr==opts.pTotal-2){nums=opts.pTotal-2}
					else {nums = (opts.curr) +'-'+ (opts.curr+1);}
					
					if(opts.covers){
						if(opts.curr==0){nums=''}
						else if(opts.curr==opts.pTotal-2){nums=''}
						else {nums = (opts.curr-1) +'-'+ (opts.curr);}
					}
				}
				$(opts.menu+' .b-selector-page .b-current').text(nums);
			}
		}
		if(opts.chapterSelector){
			if(chapters[opts.curr]!=""){
				$(opts.menu+' .b-selector-chapter .b-current').text(chapters[opts.curr]);
			}else if(chapters[opts.curr+1]!=""){
				$(opts.menu+' .b-selector-chapter .b-current').text(chapters[opts.curr+1]);
			}
			
			if(opts.direction == 'RTL' && chapters[opts.curr+1]!=""){
				$(opts.menu+' .b-selector-chapter .b-current').text(chapters[opts.curr+1]);
			}else if(chapters[opts.curr]!=""){
				$(opts.menu+' .b-selector-chapter .b-current').text(chapters[opts.curr]);
			}
		}
	}
		
	function setupHash(){
		hash = getHashNum();
		
		if(!isNaN(hash) && hash <= opts.pTotal-1 && hash >= 0 && hash != ''){
			if((hash % 2) != 0){
				hash--;
			}
			opts.curr = hash;
		}else{
			updateHash(opts.curr+1, opts);
		}
		
		self.hash = hash;
	}
	
	function pollHash(){
		hash = getHashNum();
		//check page num
		if(!isNaN(hash) && hash <= opts.pTotal-1 && hash >= 0){
			if(hash != opts.curr && hash.toString()!=self.hash){
				if((hash % 2) != 0){hash--};
				
				document.title = opts.name + " - Page "+ (hash+1);
				
				if(!busy){
					self.gotoPage(hash);
					self.hash = hash;
				}
			}
		}
	}
	
	//get page number from hash tag, last element
	function getHashNum(){
		var hash = window.location.hash.split('/');
		if(hash.length > 1){
			return parseInt(hash[2])-1;
		}else{
			return '';
		}
	}
	
	//set the hash
	function updateHash(hash, opts){
		if(opts.hash){
			window.location.hash = "/page/" + hash;
		}
	}
	
}

//define empty array to hold API references
$.fn.booklet.interfaces = [];

//define default options
$.fn.booklet.defaults = {
	name:               null,                            // name of the booklet to display in the document title bar
	width:              600,                             // container width
	height:             400,                             // container height
	speed:              1000,                            // speed of the transition between pages
	direction:          'LTR',                           // direction of the overall content organization, default LTR, left to right, can be RTL for languages which read right to left
	startingPage:       0,                               // index of the first page to be displayed
	easing:             'easeInOutQuad',                 // easing method for complete transition
	easeIn:             'easeInQuad',                    // easing method for first half of transition
	easeOut:            'easeOutQuad',                   // easing method for second half of transition
	
	closed:             false,                           // start with the book "closed", will add empty pages to beginning and end of book
	closedFrontTitle:   null,                            // used with "closed", "menu" and "pageSelector", determines title of blank starting page
	closedFrontChapter: null,                            // used with "closed", "menu" and "chapterSelector", determines chapter name of blank starting page
	closedBackTitle:    null,                            // used with "closed", "menu" and "pageSelector", determines chapter name of blank ending page
	closedBackChapter:  null,                            // used with "closed", "menu" and "chapterSelector", determines chapter name of blank ending page
	covers:             false,                           // used with "closed", makes first and last pages into covers, without page numbers (if enabled)
	autoCenter:         false,                           // used with "closed", makes book position in center of container when closed

	pagePadding:        10,                              // padding for each page wrapper
	pageNumbers:        true,                            // display page numbers on each page
	
	manual:             true,                            // enables manual page turning, requires jQuery UI to function
	
	hovers:             true,                            // enables preview pageturn hover animation, shows a small preview of previous or next page on hover
	overlays:           true,                            // enables navigation using a page sized overlay, when enabled links inside the content will not be clickable
	tabs:               false,                           // adds tabs along the top of the pages
	tabWidth:           60,                              // set the width of the tabs
	tabHeight:          20,                              // set the height of the tabs
	arrows:             false,                           // adds arrows overlayed over the book edges
	arrowsHide:         false,                           // auto hides arrows when controls are not hovered
	cursor:             'pointer',                       // cursor css setting for side bar areas
	
	hash:               false,                           // enables navigation using a hash string, ex: #/page/1 for page 1, will affect all booklets with 'hash' enabled
	keyboard:           true,                            // enables navigation with arrow keys (left: previous, right: next)
	next:               null,                            // selector for element to use as click trigger for next page
	prev:               null,                            // selector for element to use as click trigger for previous page
	auto:               false,                           // enables automatic navigation, requires "delay"
	delay:              5000,                            // amount of time between automatic page flipping
	pause:              null,                            // selector for element to use as click trigger for pausing auto page flipping
	play:               null,                            // selector for element to use as click trigger for restarting auto page flipping

	menu:               null,                            // selector for element to use as the menu area, required for 'pageSelector'
	pageSelector:       false,                           // enables navigation with a dropdown menu of pages, requires 'menu'
	chapterSelector:    false,                           // enables navigation with a dropdown menu of chapters, determined by the "rel" attribute, requires 'menu'

	shadows:            true,                            // display shadows on page animations
	shadowTopFwdWidth:  166,                             // shadow width for top forward anim
	shadowTopBackWidth: 166,                             // shadow width for top back anim
	shadowBtmWidth:     50,                              // shadow width for bottom shadow
	
	before:             function(){},                    // callback invoked before each page turn animation
	after:              function(){}                     // callback invoked after each page turn animation
}
	
})(jQuery);