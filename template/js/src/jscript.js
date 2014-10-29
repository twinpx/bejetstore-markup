(function($) {
	
	function textMore() {
		var $link = $( ".bj-text-more a" );
		if ( !$link.length ) return;
		
		$link.each( function() {
			var $this = $( this ), $row, $img, lineHeight, $wrapper;
			
			$row = $this.closest( ".row" );
			$img = $row.find( "img" );
			
			if ( !$img.length ) {
				$this.remove();
				return;
			}
			
			$wrapper = $row.find( ".bj-text-more-wrapper" );
			lineHeight = $row.css( "line-height" );
			containerHeight = $row.find( ".bj-text-more-container" ).height();
			
			if ( $img[0].complete ) {
				resize( $row, $img, lineHeight );
			} else {
				$img.load(function() {
					resize( $row, $img, lineHeight );
				});
			}
			
			$this.click( function(e) {
				e.preventDefault();
				$wrapper.height( containerHeight );
				$this.remove();
			});
			
			function resize( $row, $img, lineHeight ) {
				var height, $wrapper, wrapperHeight;
				
				lineHeight = parseInt( lineHeight, 10 );
				height = $img.height();
				$wrapper = $row.find( ".bj-text-more-wrapper" );
				
				if ( $wrapper.height() < height ) {
					$this.remove();
					return;
				}
				
				wrapperHeight = Math.floor( height / lineHeight ) * lineHeight;
				$wrapper.height( wrapperHeight );
			}
			
		});
	}
	
	function scrollToElemByUrl( elem, url ) {
		var search = window.location.search,
				$sorting = $( elem ),
				to;
		
		if ( String( search ).search( url + "=" ) === -1 || !$sorting.length ) {
			return;
		}
		
		setTimeout( function() {
			to = $sorting.offset().top - 20;
			$.scrollTo( to, 500 );
		}, 200 );
	}
	
	function headerSearch() {
		$( ".bj-page-header__search .glyphicon" ).click( function () {
			$( this )
				.closest( ".bj-page-header__search" )
				.addClass( "i-active" )
				.find( "input" )
				.focus();
		});
		$( ".bj-page-header__search__input" ).blur( function () {
			$( this ).val( "" ).closest( ".bj-page-header__search" ).removeClass( "i-active" );
		});
	}
	
	function catalogueDropDown() {
		$( ".bj-page-header__menu-link" ).click( function (e) {
			e.preventDefault();
			e.stopPropagation();
			$( ".bj-page-header__dropdown article" ).slideDown();
		});
		
		$( ".bj-page-header__dropdown article" ).click( function (e) {
			e.stopPropagation();
		});
	
		$( ".bj-page-header__dropdown .up" ).click( function (e) {
			var $dropDown = $( this ).closest( "article" ).slideUp();
			e.preventDefault();
		});
		
		$( document ).click( function () {
			$( ".bj-page-header__dropdown article" ).slideUp();
		});
	}
	
	function userHeaderIcon() {
		var options = {
			html: true,
			trigger: "click",
			placement: "bottom"
		};
		$( ".bj-page-header .bj-logo-space__icon.glyphicon-user" ).popover( options );
	};
	
	function newsForm() {
		$( ".bj-news-subscribe__s" ).each( subscribeForm );
		
		function subscribeForm() {
			var $subscribe = $( this ),
					$subscribeForm = $subscribe.find( ".bj-news-subscribe-form" ),
					$unsubscribeForm = $subscribe.find( ".bj-news-unsubscribe-form" ),
					$unsubscribeLink = $subscribe.find( ".bj-news-unsubscribe-link" ),
					$alertSuccess = $subscribe.find( ".alert-success" ),
					$alertWarning = $subscribe.find( ".alert-warning" );
			
			$subscribeForm.submit( submitForm );
			$unsubscribeForm.submit( submitUnsubscribeForm );
			$unsubscribeLink.click( clickUnsubscribe );
			
			function clickUnsubscribe(e) {
				e.preventDefault();
				$unsubscribeForm.submit();
				show( $subscribeForm );
				hide( $alertSuccess );
				hide( $alertWarning );
			}
			
			function submitUnsubscribeForm(e) {
				var $form = $( this ),
						url = $form.attr( "action" ),
						type = $form.attr( "method" ),
						data = $form.serialize();
				
				e.preventDefault();
				
				if ( !data ) return;
				
				$.ajax({
					url: url,
					type: type,
					dataType: "json",
					data: data
				});
			}
		
			function submitForm(e) {
				var $form = $( this ),
						url = $form.attr( "action" ),
						type = $form.attr( "method" ),
						data = $form.serialize();
				
				e.preventDefault();
				
				if ( !data ) return;
				
				$.ajax({
					url: url,
					type: type,
					dataType: "json",
					data: data,
					success: function ( data ) {
						if ( !data || !data instanceof Object ) return;
						
						if ( data.success ) {
							if ( $alertWarning.hasClass( "show" )) {
								hide( $alertWarning );
							}
							hide( $form );
							show( $alertSuccess );
							
						} else if ( data.error ) {
							if ( $alertWarning.is( ":visible" )) return;
							show( $alertWarning );
							
						}
					}
				});
				
			}
			
			function hide( $elem ) {
				$elem.removeClass( "show" ).addClass( "hide" );
			}
			
			function show( $elem ) {
				$elem.removeClass( "hide" ).addClass( "show" );
			}
		}
	}
	
	function linkToCommentsForm() {
		$( ".i-link-to-comments-form" ).click( function(e) {
			e.preventDefault();
			$.scrollTo( ".blog-comment-form", 500 );
			var block = document.getElementsByClassName( "blog-comment-form" )[0];
			var form = block.getElementsByTagName( "FORM" )[0];
			form.getElementsByTagName( "TEXTAREA" )[0].focus();
		});
	}
	
	function FloatPhone(elem) {
		var self = this;
		
		init();
		
		function init() {
			initVarsAndElems();
			handleEvents();
		}
		
		function initVarsAndElems() {
			self.$elem = $(elem);
			self.$elem.data("FloatPhone", self);
			self.scrollEvent;
			self.scrollIntervalEvent;
			self.scrollIntervalId;
			self.showTimeoutId;
			self.showTime = 3000;
		}
		
		function handleEvents() {
			startTimeout();
			$(window).bind("scroll", scrollWindow);
		}
		
		function startTimeout() {
			self.showTimeoutId = setTimeout( function() {
				showPhone();
			}, self.showTime );
		}
		
		function scrollWindow(e) {
			self.scrollEvent = e;
			if ( self.scrollIntervalEvent ) return;
			
			self.scrollIntervalEvent = e;
			clearTimeout( self.showTimeoutId );
			hidePhone();
			
			self.scrollIntervalId = setInterval( function() {
				if ( self.scrollIntervalEvent !== self.scrollEvent ) {
					self.scrollIntervalEvent = self.scrollEvent;
					return;
				}
				clearInterval( self.scrollIntervalId );
				self.scrollIntervalEvent = undefined;
				startTimeout();
			}, 100);
		}
		
		function showPhone() {
			self.$elem.addClass( "i-visible" );
		}
		
		function hidePhone() {
			self.$elem.removeClass( "i-visible" );
		}
	}
	
	/*function FloatFixedHeader( elem ) {
		var self = this;
		
		init();
		
		function init() {
			initVarsAndElems();
			handleEvents();
		}
		
		function initVarsAndElems() {
			self.$elem = $( elem + ":eq(0)" );
			self.$elem.data( "FloatFixedHeader", self );
			self.$submenu = self.$elem.find( ".bj-page-header__submenu" );
			self.$dropdown = self.$elem.find( ".bj-page-header__dropdown" );
			
			self.height = self.$submenu.outerHeight();
			self.hTopBorder = parseInt( self.$submenu.offset().top, 10 ) -
				parseInt( $( "body" ).offset().top, 10 );
			self.scrolled = 0;
		}
		
		function handleEvents() {
			$(document).bind( "scroll", scrollWindow ).scroll();
		}
		
		function fixSubmenu() {
			var scrolled = getScrolled();
			self.scrolled = scrolled;
		
			if ( scrolled > self.hTopBorder &&
						!self.$elem.hasClass( "i-fixed" )) {
		
				self.$elem.addClass( "i-fixed" );
				self.$submenu.after('<div class="bj-page-header-fixed" style="height: ' + self.height + 'px"></div>');
				
			} else if ( scrolled <= self.hTopBorder &&
					self.$elem.hasClass( "i-fixed" )) {
				
				self.$submenu
					.removeAttr( "style" )
					.next( ".b-header-fixed" )
					.remove();
				
				self.$elem.removeClass( "i-fixed" );
			}
		}
		
		function scrollWindow() {
			if ( matchMedia ) {
				var mq = window.matchMedia( "(min-width: 500px)" );
				mq.addListener( WidthChange );
				WidthChange(mq);
			} else if ( $(document).width() >= 500 ) {
				fixSubmenu();
			}
			
			function WidthChange(mq) {
				if ( mq.matches ) {
					fixSubmenu();
				} else {
					self.$submenu.next( ".b-header-fixed" ).remove();
					self.$submenu.removeClass( "i-fixed" ).removeAttr( "style" );
				}
			}
			
		}
		
		function getScrolled() {
			return window.pageYOffset || document.documentElement.scrollTop;
		}
	}*/
	
	$(function() {
		
		$( ".bj-logo-space [title]" ).tooltip();
		
		$( ".bj-sorting [title]" ).tooltip();
		
		headerSearch();
		
		catalogueDropDown();
		
		userHeaderIcon();
		
		newsForm();
		
		linkToCommentsForm();
		
		scrollToElemByUrl( ".bj-sorting", "sort" );
		scrollToElemByUrl( ".bj-catalogue-filter", "set_filter" );
		
		textMore();
		
		if ( matchMedia ) {
			if ( window.matchMedia( "(min-width: 500px)" ).matches ) {
				new FloatPhone( "#b-float-phone" );
			}
		} else if ( $(document).width() >= 500 ) {
			new FloatPhone( "#b-float-phone" );
		}
		
		
		//new FloatFixedHeader( ".bj-page-header" );
		
		/*var hammertime = new Hammer( myElement, myOptions );
		hammertime.on('pan', function(ev) {
				console.log(ev);
		});
		
		$('#news-carousel, #banner-carousel').hammer().on( 'swipeleft', function() {
			$( this ).carousel( 'next' );
		});
		
		$('#news-carousel, #banner-carousel').hammer().on( 'swiperight', function() {
			$( this ).carousel( 'prev' );
		});*/
		
	});
}( jQuery ));