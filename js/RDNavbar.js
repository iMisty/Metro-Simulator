(function () {
    var t;
    t = "ontouchstart" in window,
  function (o, e, n) {
      var s;
      return s = function () {
          function s(t, s) {
        this.options = o.extend(!1, {},
        this.Defaults, s),
        this.$element = o(t),
        this.$clone = null,
        this.$win = o(n),
        this.$doc = o(e),
        this.currentLayout = this.options.layout,
        this.loaded = !1,
        this.focusOnHover = this.options.focusOnHover,
        this.focusTimer = !1,
        this.cloneTimer = !1,
        this.isStuck = !1,
        this.initialize()
          }
          return s.prototype.Defaults = {
              layout: "navbar-static",
              deviceLayout: "navbar-fixed",
              focusOnHover: !0,
              focusOnHoverTimeout: 800,
              linkedElements: ["html"],
              domAppend: !0,
              stickUp: !0,
              stickUpClone: !0,
              stickUpOffset: "100%",
              anchorNavSpeed: 400,
              anchorNavOffset: 0,
              anchorNavEasing: "swing",
              autoHeight: !0,
              responsive: {
                  0: {
                      layout: "navbar-fixed",
                      deviceLayout: "navbar-fixed",
                      focusOnHover: !1,
                      stickUp: !1
                  },
                  992: {
                      layout: "navbar-static",
                      deviceLayout: "navbar-static",
                      focusOnHover: !0,
                      stickUp: !0
                  }
              },
              callbacks: {
                  onToggleSwitch: !1,
                  onToggleClose: !1,
                  onDomAppend: !1,
                  onDropdownOver: !1,
                  onDropdownOut: !1,
                  onDropdownToggle: !1,
                  onDropdownClose: !1,
                  onStuck: !1,
                  onUnstuck: !1,
                  onAnchorChange: !1
              }
          },
      s.prototype.initialize = function () {
          var o;
          return o = this,
        o.$element.addClass("navbar").addClass(o.options.layout),
        t && o.$element.addClass("navbar--is-touch"),
        o.setDataAPI(o),
        o.options.domAppend && o.createNav(o),
        o.options.stickUpClone && o.createClone(o),
        o.$element.addClass("navbar-original"),
        o.addAdditionalClassToToggles(".navbar-original", "toggle-original", "toggle-original-elements"),
        o.applyHandlers(o),
        o.offset = o.$element.offset().top,
        o.height = o.$element.outerHeight(),
        o.loaded = !0,
        o
      },
      s.prototype.resize = function (e, n) {
          var s, a;
          return a = t ? e.getOption("deviceLayout") : e.getOption("layout"),
        s = e.$element.add(e.$clone),
        a === e.currentLayout && e.loaded || (e.switchClass(s, e.currentLayout, a), null != e.options.linkedElements && o.grep(e.options.linkedElements,
        function (t, o) {
            return e.switchClass(t, e.currentLayout + "-linked", a + "-linked")
        }), e.currentLayout = a),
        e.focusOnHover = e.getOption("focusOnHover"),
        e
      },
      s.prototype.stickUp = function (t, e) {
          var n, s, a, r, i;
          return s = t.getOption("stickUp"),
        n = t.$doc.scrollTop(),
        r = null != t.$clone ? t.$clone : t.$element,
        a = t.getOption("stickUpOffset"),
        i = "string" == typeof a ? a.indexOf("%") > 0 ? parseFloat(a) * t.height / 100 : parseFloat(a) : a,
        s ? (n >= i && !t.isStuck || i > n && t.isStuck) && (t.$element.add(t.$clone).find("[data-navbar-toggle]").each(function () {
            o.proxy(t.closeToggle, this)(t, !1)
        }).end().find(".navbar-submenu").removeClass("opened").removeClass("focus"), n >= i && !t.isStuck && !t.$element.hasClass("navbar-fixed") ? ("resize" === e.type ? t.switchClass(r, "", "navbar--is-stuck") : r.addClass("navbar--is-stuck"), t.isStuck = !0, t.options.callbacks.onStuck && t.options.callbacks.onStuck.call(t)) : ("resize" === e.type ? t.switchClass(r, "navbar--is-stuck", "") : r.removeClass("navbar--is-stuck").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", o.proxy(t.resizeWrap, t, e)), t.isStuck = !1, t.options.callbacks.onUnstuck && t.options.callbacks.onUnstuck.call(t))) : t.isStuck && (t.switchClass(r, "navbar--is-stuck", ""), t.isStuck = !1, t.resizeWrap(e)),
        t
      },
      s.prototype.resizeWrap = function (t) {
          var o, e;
          return e = this,
        null != e.$clone || e.isStuck ? void 0 : (o = e.$element.parent(), e.getOption("autoHeight") ? (e.height = e.$element.outerHeight(), "resize" === t.type ? (o.addClass("navbar--no-transition").css("height", e.height), o[0].offsetHeight, o.removeClass("navbar--no-transition")) : o.css("height", e.height)) : void o.css("height", "auto"))
      },
      s.prototype.createNav = function (t) {
          return t.$element.find(".navbar-dropdown, .navbar-megamenu").each(function () {
              var t, e;
              return t = o(this),
          e = this.getBoundingClientRect(),
          e.left + t.outerWidth() >= n.innerWidth - 10 ? this.className += " navbar-open-left" : e.left - t.outerWidth() <= 10 && (this.className += " navbar-open-right"),
          t.hasClass("navbar-megamenu") ? t.parent().addClass("navbar--has-megamenu") : t.parent().addClass("navbar--has-dropdown")
          }).parents("li").addClass("navbar-submenu").append(o("<span/>", {
              "class": "navbar-submenu-toggle"
          })),
        t.options.callbacks.onDomAppend && t.options.callbacks.onDomAppend.call(this),
        t
      },
      s.prototype.createClone = function (t) {
          return t.$clone = t.$element.clone().insertAfter(t.$element).addClass("navbar--is-clone"),
        t.addAdditionalClassToToggles(".navbar--is-clone", "toggle-cloned", "toggle-cloned-elements"),
        t
      },
      s.prototype.closeToggle = function (t, e) {
          var n, s, a, r, i, l, c;
          return s = o(e.target),
        i = !1,
        l = this.getAttribute("data-navbar-toggle"),
        t.options.stickUpClone && t.isStuck ? (r = ".toggle-cloned", a = ".toggle-cloned-elements", c = !s.hasClass("toggle-cloned")) : (r = ".toggle-original", a = ".toggle-original-elements", c = !s.hasClass("toggle-original")),
        e.target !== this && !s.parents(r + "[data-navbar-toggle]").length && !s.parents(a).length && l && c && (n = o(this).parents("body").find(l).add(o(this).parents(".navbar")[0]), n.each(function () {
            return i ? void 0 : i = (e.target === this || o.contains(this, e.target)) === !0
        }), i || (n.add(this).removeClass("active"), t.options.callbacks.onToggleClose && t.options.callbacks.onToggleClose.call(this, t))),
        this
      },
      s.prototype.switchToggle = function (t, e) {
          var n, s, a;
          return e.preventDefault(),
        o(this).hasClass("toggle-cloned") ? (a = ".navbar--is-clone", n = ".toggle-cloned-elements") : (a = ".navbar-original", n = ".toggle-original-elements"),
        (s = this.getAttribute("data-navbar-toggle")) && (o(a + " [data-navbar-toggle]").not(this).each(function () {
            var t;
            return (t = this.getAttribute("data-navbar-toggle")) ? o(this).parents("body").find(a + " " + t + n).add(this).add(o.inArray(".navbar", t.split(/\s*,\s*/i)) > -1 ? o(this).parents("body")[0] : !1).removeClass("active") : void 0
        }), o(this).parents("body").find(a + " " + s + n).add(this).add(o.inArray(".navbar", s.split(/\s*,\s*/i)) > -1 ? o(this).parents(".navbar")[0] : !1).toggleClass("active")),
        t.options.callbacks.onToggleSwitch && t.options.callbacks.onToggleSwitch.call(this, t),
        this
      },
      s.prototype.dropdownOver = function (t, e) {
          var n;
          return t.focusOnHover && (n = o(this), clearTimeout(e), n.addClass("focus").siblings().removeClass("opened").each(t.dropdownUnfocus), t.options.callbacks.onDropdownOver && t.options.callbacks.onDropdownOver.call(this, t)),
        this
      },
      s.prototype.dropdownTouch = function (t, e) {
          var n, s;
          if (n = o(this), clearTimeout(e), t.focusOnHover) {
              if (s = !1, n.hasClass("focus") && (s = !0), !s) return n.addClass("focus").siblings().removeClass("opened").each(t.dropdownUnfocus),
          !1;
              t.options.callbacks.onDropdownOver && t.options.callbacks.onDropdownOver.call(this, t)
          }
          return this
      },
      s.prototype.dropdownOut = function (t, e) {
          var n;
          return t.focusOnHover && (n = o(this), n.one("mouseenter.navbar",
        function () {
            return clearTimeout(e)
        }), clearTimeout(e), e = setTimeout(o.proxy(t.dropdownUnfocus, this, t), t.options.focusOnHoverTimeout), t.options.callbacks.onDropdownOut && t.options.callbacks.onDropdownOut.call(this, t)),
        this
      },
      s.prototype.dropdownUnfocus = function (t) {
          var e;
          return e = o(this),
        e.find("li.focus").add(this).removeClass("focus"),
        this
      },
      s.prototype.dropdownClose = function (t, e) {
          var n;
          return e.target === this || o(e.target).parents(".navbar-submenu").length || (n = o(this), n.find("li.focus").add(this).removeClass("focus").removeClass("opened"), t.options.callbacks.onDropdownClose && t.options.callbacks.onDropdownClose.call(this, t)),
        this
      },
      s.prototype.dropdownToggle = function (t) {
          return o(this).toggleClass("opened").siblings().removeClass("opened"),
        t.options.callbacks.onDropdownToggle && t.options.callbacks.onDropdownToggle.call(this, t),
        this
      },
      s.prototype.goToAnchor = function (t, e) {
          var n, s;
          return s = this.hash,
        n = o(s),
        n.length && (e.preventDefault(), o("html, body").stop().animate({
            scrollTop: n.offset().top + t.getOption("anchorNavOffset") + 1
        },
        t.getOption("anchorNavSpeed"), t.getOption("anchorNavEasing"),
        function () {
            return t.changeAnchor(s)
        })),
        this
      },
      s.prototype.activateAnchor = function (t) {
          var e, n, s, a, r, i, l, c, d, p, h, u;
          if (a = this, h = a.$doc.scrollTop(), u = a.$win.height(), r = a.$doc.height(), p = a.getOption("anchorNavOffset"), h + u > r - 50) return e = o('[data-type="anchor"]').last(),
        e.length && e.offset().top >= h && (i = "#" + e.attr("id"), n = o('.navbar-nav a[href^="' + i + '"]').parent(), n.hasClass("active") || (n.addClass("active").siblings().removeClass("active"), a.options.callbacks.onAnchorChange && a.options.callbacks.onAnchorChange.call(e[0], a))),
        e;
          d = o('.navbar-nav a[href^="#"]').get();
          for (l in d) c = d[l],
        s = o(c),
        i = s.attr("href"),
        e = o(i),
        e.length && e.offset().top + p <= h && e.offset().top + e.outerHeight() > h && (s.parent().addClass("active").siblings().removeClass("active"), a.options.callbacks.onAnchorChange && a.options.callbacks.onAnchorChange.call(e[0], a));
          return null
      },
      s.prototype.getAnchor = function () {
          return history && history.state ? history.state.id : null
      },
      s.prototype.changeAnchor = function (t) {
          return history && (history.state && history.state.id !== t ? history.replaceState({
              anchorId: t
          },
        null, t) : history.pushState({
            anchorId: t
        },
        null, t)),
        this
      },
      s.prototype.applyHandlers = function (t) {
          return null != t.options.responsive && t.$win.on("resize.navbar", o.proxy(t.resize, t.$win[0], t)).on("resize.navbar", o.proxy(t.resizeWrap, t)).on("resize.navbar", o.proxy(t.stickUp, null != t.$clone ? t.$clone : t.$element, t)).on("orientationchange.navbar", o.proxy(t.resize, t.$win[0], t)).trigger("resize.navbar"),
        t.$doc.on("scroll.navbar", o.proxy(t.stickUp, null != t.$clone ? t.$clone : t.$element, t)).on("scroll.navbar", o.proxy(t.activateAnchor, t)),
        t.$element.add(t.$clone).find("[data-navbar-toggle]").each(function () {
            var e;
            return e = o(this),
          e.on("click", o.proxy(t.switchToggle, this, t)),
          e.parents("body").on("click", o.proxy(t.closeToggle, this, t))
        }),
        t.$element.add(t.$clone).find(".navbar-submenu").each(function () {
            var e, n;
            return e = o(this),
          n = e.parents(".navbar--is-clone").length ? t.cloneTimer : t.focusTimer,
          e.on("mouseleave.navbar", o.proxy(t.dropdownOut, this, t, n)),
          e.find("> a").on("mouseenter.navbar", o.proxy(t.dropdownOver, this, t, n)),
          e.find("> a").on("touchstart.navbar", o.proxy(t.dropdownTouch, this, t, n)),
          e.find("> .navbar-submenu-toggle").on("click", o.proxy(t.dropdownToggle, this, t)),
          e.parents("body").on("click", o.proxy(t.dropdownClose, this, t))
        }),
        t.$element.add(t.$clone).find('.navbar-nav a[href^="#"]').each(function () {
            return o(this).on("click", o.proxy(t.goToAnchor, this, t))
        }),
        t
      },
      s.prototype.switchClass = function (t, e, n) {
          var s;
          return s = t instanceof jQuery ? t : o(t),
        s.addClass("navbar--no-transition").removeClass(e).addClass(n),
        s[0].offsetHeight,
        s.removeClass("navbar--no-transition")
      },
      s.prototype.setDataAPI = function (t) {
          var o, e, n, s, a, r;
          for (o = ["-", "-xs-", "-sm-", "-md-", "-lg-", "-xl-"], r = [0, 480, 768, 992, 1200, 1800], e = n = 0, s = r.length; s > n; e = ++n) a = r[e],
        this.$element.attr("data" + o[e] + "layout") && (this.options.responsive[r[e]] || (this.options.responsive[r[e]] = {}), this.options.responsive[r[e]].layout = this.$element.attr("data" + o[e] + "layout")),
        this.$element.attr("data" + o[e] + "device-layout") && (this.options.responsive[r[e]] || (this.options.responsive[r[e]] = {}), this.options.responsive[r[e]].deviceLayout = this.$element.attr("data" + o[e] + "device-layout")),
        this.$element.attr("data" + o[e] + "hover-on") && (this.options.responsive[r[e]] || (this.options.responsive[r[e]] = {}), this.options.responsive[r[e]].focusOnHover = "true" === this.$element.attr("data" + o[e] + "hover-on")),
        this.$element.attr("data" + o[e] + "stick-up") && (this.options.responsive[r[e]] || (this.options.responsive[r[e]] = {}), this.options.responsive[r[e]].stickUp = "true" === this.$element.attr("data" + o[e] + "stick-up")),
        this.$element.attr("data" + o[e] + "auto-height") && (this.options.responsive[r[e]] || (this.options.responsive[r[e]] = {}), this.options.responsive[r[e]].autoHeight = "true" === this.$element.attr("data" + o[e] + "auto-height")),
        this.$element.attr("data" + o[e] + "stick-up-offset") && (this.options.responsive[r[e]] || (this.options.responsive[r[e]] = {}), this.options.responsive[r[e]].stickUpOffset = this.$element.attr("data" + o[e] + "stick-up-offset"))
      },
      s.prototype.getOption = function (t) {
          var o, e;
          for (o in this.options.responsive) o <= n.innerWidth && (e = o);
          var isIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1]) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false;
          console.log(isIE);

          if (isIE < 10 &&userAgent.indexOf("msie")!=-1) {
              return this.options[t];

          }else{
			  return null != this.options.responsive && null != this.options.responsive[e][t] ? this.options.responsive[e][t] : this.options[t];
		  }
          
          



      },
      s.prototype.addAdditionalClassToToggles = function (t, e, n) {
          return o(t).find("[data-navbar-toggle]").each(function () {
              var s;
              return o(this).addClass(e),
          s = this.getAttribute("data-navbar-toggle"),
          o(this).parents("body").find(t).find(s).addClass(n)
          })
      },
      s
      } (),
    o.fn.extend({
        RDNavbar: function (t) {
            var e;
            return e = o(this),
        e.data("RDNavbar") ? void 0 : e.data("RDNavbar", new s(this, t))
        }
    }),
    n.RDNavbar = s
  } (window.jQuery, document, window),
  "undefined" != typeof module && null !== module ? module.exports = window.RDNavbar : "function" == typeof define && define.amd && define(["jquery"],
  function () {
      "use strict";
      return window.RDNavbar
  })
}).call(this);