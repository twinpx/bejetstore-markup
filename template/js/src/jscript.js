!function(a) {

  //load mobile banners
  /*(function () {
    var mobile, cookie;
    
    function checkMobile() {
      var hasTouchEvents = ("ontouchstart" in document.documentElement);
      return ( hasTouchEvents && $( document ).width() <= 600 ) ? 'mobile' : 'desktop';
    }
    
    function getCookie() {
      return $.cookie( 'mobile' );
    }
    
    function reload() {
      window.location.replace( window.location );
    }
    
    function setCookie( cookie ) {
      $.cookie( 'mobile', cookie, { expires: 30, path: '/', domain: window.location.hostname });
    }
    
    mobile = checkMobile();
    cookie = getCookie();
    
    if ( !cookie || mobile !== cookie ) {
      setCookie( mobile );
      reload();
    }
    
  }());*/

    function b() {
        var b = a(".col-sm-6 > h1");
        b.text().length >= 25 && b.addClass("i-small")
    }

    function c() {
        var b = a(".bj-text-more a");
        b.length && b.each(function() {
            function b(a, b, c) {
                var d, e, f;
                return c = parseInt(c, 10), d = b.height(), e = a.find(".bj-text-more-wrapper"), e.height() < d ? void g.remove() : (f = Math.floor(d / c) * c, void e.height(f))
            }
            var c, d, e, f, g = a(this);
            return c = g.closest(".row"), d = c.find("img"), d.length ? (f = c.find(".bj-text-more-wrapper"), e = c.css("line-height"), containerHeight = c.find(".bj-text-more-container").height(), d[0].complete ? b(c, d, e) : d.load(function() {
                b(c, d, e)
            }), void g.click(function(a) {
                a.preventDefault(), f.height(containerHeight), g.remove()
            })) : void g.remove()
        })
    }

    function d(b, c) {
        var d, e = window.location.search,
            f = a(b); - 1 !== String(e).search(c + "=") && f.length && setTimeout(function() {
            d = f.offset().top - 20, a.scrollTo(d, 500)
        }, 200)
    }

    function e() {
        a(".bj-page-header__search .glyphicon").click(function() {
            a(this).closest(".bj-page-header__search").addClass("i-active").find("input").focus()
        }), a(".bj-page-header__search__input").blur(function() {
            a(this).val("").closest(".bj-page-header__search").removeClass("i-active")
        })
    }

    function f() {
        a(".bj-page-header__menu-link").click(function(b) {
            b.preventDefault(), b.stopPropagation(), a(".bj-page-header__dropdown article").slideDown()
        }), a(".bj-page-header__dropdown article").click(function(a) {
            a.stopPropagation()
        }), a(".bj-page-header__dropdown .up").click(function(b) {
            a(this).closest("article").slideUp();
            b.preventDefault()
        }), a(document).click(function() {
            a(".bj-page-header__dropdown article").slideUp()
        })
    }

    function g() {
        var b = {
            html: !0,
            trigger: "click",
            placement: "bottom"
        };
        a(".bj-page-header .bj-logo-space__icon.glyphicon-user").popover(b)
    }

    function h() {
        function b() {
            function b(a) {
                a.preventDefault(), i.submit(), f(h), e(k), e(l)
            }

            function c(b) {
                var c = a(this),
                    d = c.attr("action"),
                    e = c.attr("method"),
                    f = c.serialize();
                b.preventDefault(), f && a.ajax({
                    url: d,
                    type: e,
                    dataType: "json",
                    data: f
                })
            }

            function d(b) {
                var c = a(this),
                    d = c.attr("action"),
                    g = c.attr("method"),
                    h = c.serialize();
                b.preventDefault(), h && a.ajax({
                    url: d,
                    type: g,
                    dataType: "json",
                    data: h,
                    success: function(a) {
                        if (a && !(!a instanceof Object))
                            if (a.success) l.hasClass("show") && e(l), e(c), f(k);
                            else if (a.error) {
                            if (l.is(":visible")) return;
                            f(l)
                        }
                    }
                })
            }

            function e(a) {
                a.removeClass("show").addClass("hide")
            }

            function f(a) {
                a.removeClass("hide").addClass("show")
            }
            var g = a(this),
                h = g.find(".bj-news-subscribe-form"),
                i = g.find(".bj-news-unsubscribe-form"),
                j = g.find(".bj-news-unsubscribe-link"),
                k = g.find(".alert-success"),
                l = g.find(".alert-warning");
            h.submit(d), i.submit(c), j.click(b)
        }
        a(".bj-news-subscribe__s").each(b)
    }

    function i() {
        a(".i-link-to-comments-form").click(function(b) {
            b.preventDefault(), a.scrollTo(".blog-comment-form", 500);
            var c = document.getElementsByClassName("blog-comment-form")[0],
                d = c.getElementsByTagName("FORM")[0];
            d.getElementsByTagName("TEXTAREA")[0].focus()
        })
    }

    function j(b) {
        function c() {
            d(), e()
        }

        function d() {
            j.$elem = a(b), j.$elem.data("FloatPhone", j), j.scrollEvent, j.scrollIntervalEvent, j.scrollIntervalId, j.showTimeoutId, j.showTime = 3e3
        }

        function e() {
            f(), a(window).bind("scroll", g)
        }

        function f() {
            j.showTimeoutId = setTimeout(function() {
                h()
            }, j.showTime)
        }

        function g(a) {
            j.scrollEvent = a, j.scrollIntervalEvent || (j.scrollIntervalEvent = a, clearTimeout(j.showTimeoutId), i(), j.scrollIntervalId = setInterval(function() {
                return j.scrollIntervalEvent !== j.scrollEvent ? void(j.scrollIntervalEvent = j.scrollEvent) : (clearInterval(j.scrollIntervalId), j.scrollIntervalEvent = void 0, void f())
            }, 100))
        }

        function h() {
            j.$elem.addClass("i-visible")
        }

        function i() {
            j.$elem.removeClass("i-visible")
        }
        var j = this;
        c()
    }
    
    function loadMobileBanners() {
      var mobile, cookie;
      
      function checkMobile() {
        var hasTouchEvents = ("ontouchstart" in document.documentElement);
        return ( hasTouchEvents && $( document ).width() <= 600 ) ? 'mobile' : 'desktop'
      }
      
      function getCookie() {
        return $.cookie( 'mobile' );
      }
      
      function reload( mobile ) {
        window.location.replace( window.location );
      }
      
      function setCookie( cookie ) {
        $.cookie( 'mobile', cookie, { expires: 30, path: '/', domain: window.location.hostname });
      }
      
      mobile = checkMobile();
      cookie = getCookie();
      
      if ( !cookie || mobile !== cookie ) {
        setCookie( mobile );
        reload( mobile );
      }
      
    }
    
    function catalogTabs() {
      $( '[role="tab"]' ).bind( 'click', function(e) {
        var $tab = $( this );
        var $catalogItem = $tab.closest( '.nav-tabs' ).parent().find( '.bx_catalog_item_container' );
        
        $catalogItem.each( function() {
          var JCCSObject = window[ 'ob' + $( this ).attr( 'id' )];
          if ( JCCSObject && JCCSObject instanceof JCCatalogSection && JCCSObject.lastElement ) {
            setTimeout( function() {
              JCCSObject.containerHeight = parseInt(JCCSObject.obProduct.parentNode.offsetHeight, 10);
            }, 100);
          }
        });
        
      });
    }
    
    a(function() {

      //materialize sideNav
      setTimeout( function() {
        $( '#sideNavPanel' ).css({ left: '-310px', visibility: 'visible' });
      }, 100);
      
      $('#nav-button').sideNav({
        menuWidth: 300
      });
    
      //load mobile banners
      loadMobileBanners();
      
      catalogTabs();
      
      if ( window.BX ) {
        BX.addCustomEvent( "onFrameDataReceived", function () {
          a(".bj-logo-space [data-toggle='tooltip']").tooltip();
          a(".bj-sorting [title]").tooltip();
          g();
        });
      }
          g();
      
      e(), f(), h(), i(), d(".bj-sorting", "sort"), d(".bj-catalogue-filter", "set_filter"), c(), b(), matchMedia ? window.matchMedia("(min-width: 500px)").matches && new j("#b-float-phone") : a(document).width() >= 500 && new j("#b-float-phone"), a(".bj-hidden-link").click(function(b) {
          b.preventDefault();
          var c = a(this);
          return c.hasClass("i-up") ? void c.removeClass("i-up").parent().find(".bj-hidden__hidden").slideUp() : void c.addClass("i-up").parent().find(".bj-hidden__hidden").slideDown()
      })
    })
}(jQuery);