(function(e){function t(){e(".bj-page-header__search .glyphicon").click(function(){e(this).closest(".bj-page-header__search").addClass("i-active").find("input").focus()});e(".bj-page-header__search__input").blur(function(){e(this).val("").closest(".bj-page-header__search").removeClass("i-active")})}function a(){e(".bj-page-header__menu-link").click(function(t){t.preventDefault();t.stopPropagation();e(".bj-page-header__dropdown article").slideDown()});e(".bj-page-header__dropdown article").click(function(e){e.stopPropagation()});e(".bj-page-header__dropdown .up").click(function(t){var a=e(this).closest("article").slideUp();t.preventDefault()});e(document).click(function(){e(".bj-page-header__dropdown article").slideUp()})}function r(){var t={html:true,trigger:"click",placement:"bottom"};e(".bj-page-header .bj-logo-space__icon.glyphicon-user").popover(t)}function i(){e(".bj-news-subscribe form").submit(t);function t(t){var a=e(this),r=a.attr("action"),i=a.attr("method"),c=a.serialize();t.preventDefault();if(!c)return;e.ajax({url:r,type:i,dataType:"json",data:c,success:function(e){if(!e||!e instanceof Object)return;if(e.success){a.before('<div class="alert alert-success" role="alert">'+e.success+"</div>").remove()}else if(e.error){a.before('<div class="alert alert-warning" role="alert">'+e.error+"</div>")}}})}}e(function(){e(".bj-logo-space [title]").tooltip();t();a();r();i()})})(jQuery);