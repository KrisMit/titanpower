try{
    WebFont.load({
      classes:false,timeout:9000,google:{families:["Work Sans:100,300,400,500,600,700,800","Raleway:700,700i,800,800i,900,900i","Lato:400,700"]},custom:{families:["Raleway:700","Work Sans:700,400"],urls:['https://cdn03.zipify.com/4a405d55e884bef532f680d7783c7de937698198/fonts/5e56a1cd8233c8b207642c545f10faac.css']}})}
      catch(e){
        console.error(e)}!function(){var r=!1,t=[],i=!1,e=!1;function n(n){this.integrations=n||[]}function o(){window.trekkie.url=function(){var n=f();
          if(n)return n;var i=this.canonical();if(i)return 0<i.indexOf("?")?i:i+window.location.search;var t=window.location.href,e=t.indexOf("#");return-1===e?t:t.slice(0,e)}}function a(){window.trekkie.pageDefaults=function(){var n=window.location.href,i=n.indexOf("?");return n="?"===(n=-1===(i=(n=-1===i?"":n.slice(i)).indexOf("#"))?n:n.slice(0,i))?"":n,{path:w(),referrer:document.referrer,search:d()||n,title:c(),url:this.url(),properties:{}}}}function s(){var i=window.trekkie.generatePageObject;window.trekkie.generatePageObject=function(){var e=i.apply(window.trekkie,arguments);e.path=w(),e.title=c();var t="function"==typeof l.searchIdentifierParam?l.searchIdentifierParam():null;return t&&(!!e.search&&-1<(""+e.search).indexOf(t)||(e.search?e.search="?"+t+"&"+(""+e.search).substring(1):e.search="?"+t)),e}}function w(){return"function"==typeof l.currentEntityPath&&l.currentEntityPath()?l.currentEntityPath():window.location.pathname}function c(){return"function"==typeof l.currentEntityTitle&&l.currentEntityTitle()?l.currentEntityTitle():document.title}function d(){return"function"==typeof l.currentEntitySearchParams?"?"+l.currentEntitySearchParams():null}function f(){var n="function"==typeof l.currentEntityUrl?l.currentEntityUrl():null;if(n){var i=d();return i?n+i:n}return null}function u(){var n,i,t;e||void 0===window.ga||(e=!0,n=f(),i=function(){var n=w();if(n){var i=d();return i?n+i:n}return null}(),t=c(),n&&window.ga("set","location",n),i&&window.ga("set","page",i),t&&window.ga("set","title",t))}n.prototype.init=function(){r||(r=!0,function(n){if(!r||n.indexOf("trackify")<0)return;var i=!!window.fbq,t=["init"],e=["track.PageView"],o=[],a=[];window.fbq=function(){var n=arguments[0],i=n+"."+arguments[1];-1<t.indexOf(n)&&-1<o.indexOf(n)||-1<e.indexOf(i)&&-1<a.indexOf(i)||(o.push(n),a.push(i),window.fbq.callMethod?window.fbq.callMethod.apply(window.fbq,arguments):window.fbq.queue.push(arguments))},window._fbq=window._fbq||window.fbq,window.fbq.push=window.fbq,window.fbq.loaded=!0,window.fbq.version="2.0",window.fbq.queue=[],i||function(){var n=document.createElement("script");n.async=!0,n.src="https://connect.facebook.net/en_US/fbevents.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)}()}(this.integrations),function(){for(var n=0,i=t.length;n<i;n++)t[n].call();t=[]}())},n.prototype.ready=function(n){"function"==typeof n&&(r?n.call():t.push(n))},n.prototype.page=function(){var n;i||(i=!0,n=arguments,void 0!==l&&"function"==typeof l.onEntityStateLoaded?(o(),s(),a(),l.onEntityStateLoaded(function(){window.trekkie.page.call(window.trekkie,n)})):window.trekkie.page.call(window.trekkie,n))},window.ZipifyPages=window.ZipifyPages||{},window.ZipifyPages.currency="USD",window.ZipifyPages.shopDomain="titan-power-plus.myshopify.com",window.ZipifyPages.moneyFormat="%3Cspan%20class=money%3E$%7B%7Bamount%7D%7D%20%3C/span%3E",window.ZipifyPages.shopifyOptionsSelector=true,window.ZipifyPages.unitPriceEnabled=false,window.ZipifyPages.alternativeAnalyticsLoading=true,window.ZipifyPages.integrations="oneclickupsell,bestcurrencyconverter".split(","),window.ZipifyPages.crmUrl="https://crms.zipify.com",window.ZipifyPages.translations={soldOut:"Sold Out",unavailable:"Unavailable"},window.ZipifyPages.routes={cart:{index:"/cart",add:"/cart/add",change:"/cart/change"}};try{window.ZipifyPages.analytics=window.ZipifyPages.analytics||{"disabled_events":{"facebook":[],"trackify":[]}}||{}}catch(i){window.ZipifyPages.analytics=window.ZipifyPages.analytics||{}}var l=window.ZipifyPages.SplitTest,p=new n(window.ZipifyPages.integrations);window.ZipifyPages.ShopifyAnalytics=p,window.ZipifyPages.eventsSubscriptions=[],window.ZipifyPages.on=function(n,i){window.ZipifyPages.eventsSubscriptions.push([n,i])},void 0!==l&&(window.GoogleAnalyticsObject="ga",window.ga=window.ga||function(){window.ga.q.push(arguments),"create"===arguments[0]&&void 0!==window._gaUTrackerOptions&&u()},window.ga.q=window.ga.q||[],window.ga.l=+new Date),window.ZipifyPages.alternativeAnalyticsLoading?(window.trekkie=window.trekkie||[],window.trekkie.push(["ready",function(){try{void 0!==l&&u();var n=window.ZipifyPages&&window.ZipifyPages.ShopifyAnalytics;void 0!==n&&"function"==typeof n.init?(n.init(),void 0!==l&&"function"==typeof(window.trekkie&&window.trekkie.page)&&(o(),s(),a(),i=window.trekkie.page,window.trekkie.page=function(){var n=arguments;l.onEntityStateLoaded(function(){i.call(window.trekkie,n)})})):console.error("window.ZipifyPages.ShopifyAnalytics.init is not defined")}
          catch(n){console.error(n)}var i}])):void 0!==l&&p.ready(u)}();

var Shopify = Shopify || {};
Shopify.shop = "titan-power-plus.myshopify.com";
Shopify.locale = "en";
Shopify.currency = {"active":"USD","rate":"1.0"};
Shopify.country = "US";
Shopify.theme = {"name":"Titan Power Plus - Green Friday","id":127620513970,"theme_store_id":null,"role":"main"};
Shopify.theme.handle = "null";
Shopify.theme.style = {"id":null,"handle":null};
Shopify.cdnHost = "cdn.shopify.com";
Shopify.routes = Shopify.routes || {};
Shopify.routes.root = "/";

(function() {
    function asyncLoad() {
      var urls = ["https:\/\/loox.io\/widget\/4kZuqN9rKL\/loox.1554818423619.js?shop=titan-power-plus.myshopify.com","\/\/shopify.privy.com\/widget.js?shop=titan-power-plus.myshopify.com","https:\/\/static.klaviyo.com\/onsite\/js\/klaviyo.js?company_id=HXhrVm\u0026shop=titan-power-plus.myshopify.com","https:\/\/cdn.shopify.com\/s\/files\/1\/0071\/1727\/5191\/t\/21\/assets\/ginit.js?8227\u0026shop=titan-power-plus.myshopify.com","https:\/\/app.octaneai.com\/hjrybobegenj3ng6\/shopify.js?x=qCGpQ2s0lcZW0Wxz\u0026shop=titan-power-plus.myshopify.com","https:\/\/analytics.getshogun.com\/collector.js?shop=titan-power-plus.myshopify.com","https:\/\/intg.snapchat.com\/shopify\/shopify-scevent.js?id=baae87d1-027d-4220-9ec3-e5e2674a2c76\u0026shop=titan-power-plus.myshopify.com","https:\/\/storage.googleapis.com\/gsf-scripts\/global-remarketing\/titan-power-plus.js?1620328592\u0026shop=titan-power-plus.myshopify.com","https:\/\/ecommplugins-scripts.trustpilot.com\/v2.1\/js\/header.min.js?settings=eyJrZXkiOiJpbG13VTN0V3NYMDRTM3p1IiwicyI6Im5vbmUifQ==\u0026shop=titan-power-plus.myshopify.com","https:\/\/ecommplugins-trustboxsettings.trustpilot.com\/titan-power-plus.myshopify.com.js?settings=1631114708701\u0026shop=titan-power-plus.myshopify.com","https:\/\/zipify-ocu.s3.amazonaws.com\/oneclickupsell\/production\/deploy\/script_tags\/zipify-oneclickupsell-vendor.js?shop=titan-power-plus.myshopify.com","https:\/\/widget.trustpilot.com\/bootstrap\/v5\/tp.widget.sync.bootstrap.min.js?shop=titan-power-plus.myshopify.com","https:\/\/www.stilyoapps.com\/reconvert\/assets\/js\/store_reconvert.js?scid=dlY1RTZqN2M4dXNwRWtVVFo0Y1kwUT09\u0026shop=titan-power-plus.myshopify.com","https:\/\/www.dwin1.com\/19038.js?shop=titan-power-plus.myshopify.com","https:\/\/static.shareasale.com\/json\/shopify\/deduplication.js?shop=titan-power-plus.myshopify.com","https:\/\/cdn.shopify.com\/s\/files\/1\/0071\/1727\/5191\/t\/140\/assets\/doubly.js?v=1637376426\u0026shop=titan-power-plus.myshopify.com"];
      for (var i = 0; i <urls.length; i++) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = urls[i];
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      }
    };
    if(window.attachEvent) {
      window.attachEvent('onload', asyncLoad);
    } else {
      window.addEventListener('load', asyncLoad, false);
    }
    })();

    (window.gaDevIds=window.gaDevIds||[]).push('BwiEti');
      (function () {
        var customDocumentWrite = function(content) {
          var jquery = null;
      
          if (window.jQuery) {
            jquery = window.jQuery;
          } else if (window.Checkout && window.Checkout.$) {
            jquery = window.Checkout.$;
          }
      
          if (jquery) {
            jquery('body').append(content);
          }
        };
      
        var hasLoggedConversion = function(token) {
          if (token) {
            return document.cookie.indexOf('loggedConversion=' + token) !== -1;
          }
          return false;
        }
      
        var setCookieIfConversion = function(token) {
          if (token) {
            var twoMonthsFromNow = new Date(Date.now());
            twoMonthsFromNow.setMonth(twoMonthsFromNow.getMonth() + 2);
      
            document.cookie = 'loggedConversion=' + token + '; expires=' + twoMonthsFromNow;
          }
        }
      
        var trekkie = window.ShopifyAnalytics.lib = window.trekkie = window.trekkie || [];
        if (trekkie.integrations) {
          return;
        }
        trekkie.methods = [
          'identify',
          'page',
          'ready',
          'track',
          'trackForm',
          'trackLink'
        ];
        trekkie.factory = function(method) {
          return function() {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(method);
            trekkie.push(args);
            return trekkie;
          };
        };
        for (var i = 0; i < trekkie.methods.length; i++) {
          var key = trekkie.methods[i];
          trekkie[key] = trekkie.factory(key);
        }
        trekkie.load = function(config) {
          trekkie.config = config || {};
          trekkie.config.initialDocumentCookie = document.cookie;
          var first = document.getElementsByTagName('script')[0];
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.onerror = function(e) {
            var scriptFallback = document.createElement('script');
            scriptFallback.type = 'text/javascript';
            scriptFallback.onerror = function(error) {
                    var Monorail = {
            produce: function produce(monorailDomain, schemaId, payload) {
              var currentMs = new Date().getTime();
              var event = {
                schema_id: schemaId,
                payload: payload,
                metadata: {
                  event_created_at_ms: currentMs,
                  event_sent_at_ms: currentMs
                }
              };
              return Monorail.sendRequest("https://" + monorailDomain + "/v1/produce", JSON.stringify(event));
            },
            sendRequest: function sendRequest(endpointUrl, payload) {
              // Try the sendBeacon API
              if (window && window.navigator && typeof window.navigator.sendBeacon === 'function' && typeof window.Blob === 'function' && !Monorail.isIos12()) {
                var blobData = new window.Blob([payload], {
                  type: 'text/plain'
                });
          
                if (window.navigator.sendBeacon(endpointUrl, blobData)) {
                  return true;
                } // sendBeacon was not successful
          
              } // XHR beacon   
          
              var xhr = new XMLHttpRequest();
          
              try {
                xhr.open('POST', endpointUrl);
                xhr.setRequestHeader('Content-Type', 'text/plain');
                xhr.send(payload);
              } catch (e) {
                console.log(e);
              }
          
              return false;
            },
            isIos12: function isIos12() {
              return window.navigator.userAgent.lastIndexOf('iPhone; CPU iPhone OS 12_') !== -1 || window.navigator.userAgent.lastIndexOf('iPad; CPU OS 12_') !== -1;
            }
          };
          Monorail.produce('monorail-edge.shopifysvc.com',
            'trekkie_storefront_load_errors/1.1',
            {shop_id: 7117275191,
            theme_id: 127620513970,
            app_name: "storefront",
            context_url: window.location.href,
            source_url: "https://cdn.shopify.com/s/trekkie.storefront.75306309d086f5e1fa1611c602d3f899320a38b8.min.js"});
      
            };
            scriptFallback.async = true;
            scriptFallback.src = 'https://cdn.shopify.com/s/trekkie.storefront.75306309d086f5e1fa1611c602d3f899320a38b8.min.js';
            first.parentNode.insertBefore(scriptFallback, first);
          };
          script.async = true;
          script.src = 'https://cdn.shopify.com/s/trekkie.storefront.75306309d086f5e1fa1611c602d3f899320a38b8.min.js';
          first.parentNode.insertBefore(script, first);
        };
        trekkie.load(
          {"Trekkie":{"appName":"storefront","development":false,"defaultAttributes":{"shopId":7117275191,"isMerchantRequest":null,"themeId":127620513970,"themeCityHash":"12222428992740328303","contentLanguage":"en","currency":"USD"},"isServerSideCookieWritingEnabled":true,"expectS2SEventId":true,"expectS2SEventEmit":true,"bugsnagBetaEnabled":true},"Google Analytics":{"trackingId":"UA-125657863-2","domain":"auto","siteSpeedSampleRate":"10","enhancedEcommerce":true,"doubleClick":true,"includeSearch":true},"TikTok Pixel":{"pixelId":"C25D6P75KUMA5K47C4UG"},"Session Attribution":{},"S2S":{"facebookCapiEnabled":false,"source":"trekkie-storefront-renderer"}}
        );
      
        var loaded = false;
        trekkie.ready(function() {
          if (loaded) return;
          loaded = true;
      
          window.ShopifyAnalytics.lib = window.trekkie;
          
            ga('require', 'linker');
            function addListener(element, type, callback) {
              if (element.addEventListener) {
                element.addEventListener(type, callback);
              }
              else if (element.attachEvent) {
                element.attachEvent('on' + type, callback);
              }
            }
            function decorate(event) {
              event = event || window.event;
              var target = event.target || event.srcElement;
              if (target && (target.getAttribute('action') || target.getAttribute('href'))) {
                ga(function (tracker) {
                  var linkerParam = tracker.get('linkerParam');
                  document.cookie = '_shopify_ga=' + linkerParam + '; ' + 'path=/';
                });
              }
            }
            addListener(window, 'load', function(){
              for (var i=0; i < document.forms.length; i++) {
                var action = document.forms[i].getAttribute('action');
                if(action && action.indexOf('/cart') >= 0) {
                  addListener(document.forms[i], 'submit', decorate);
                }
              }
              for (var i=0; i < document.links.length; i++) {
                var href = document.links[i].getAttribute('href');
                if(href && href.indexOf('/checkout') >= 0) {
                  addListener(document.links[i], 'click', decorate);
                }
              }
            });
          
      
          var originalDocumentWrite = document.write;
          document.write = customDocumentWrite;
          try { window.ShopifyAnalytics.merchantGoogleAnalytics.call(this); } catch(error) {};
          document.write = originalDocumentWrite;
            (function () {
              if (window.BOOMR && (window.BOOMR.version || window.BOOMR.snippetExecuted)) {
                return;
              }
              window.BOOMR = window.BOOMR || {};
              window.BOOMR.snippetStart = new Date().getTime();
              window.BOOMR.snippetExecuted = true;
              window.BOOMR.snippetVersion = 12;
              window.BOOMR.application = "storefront-renderer";
              window.BOOMR.themeName = "Flex";
              window.BOOMR.themeVersion = "2.0.6";
              window.BOOMR.shopId = 7117275191;
              window.BOOMR.themeId = 127620513970;
              window.BOOMR.url =
                "https://cdn.shopify.com/shopifycloud/boomerang/shopify-boomerang-1.0.0.min.js";
              var where = document.currentScript || document.getElementsByTagName("script")[0];
              var parentNode = where.parentNode;
              var promoted = false;
              var LOADER_TIMEOUT = 3000;
              function promote() {
                if (promoted) {
                  return;
                }
                var script = document.createElement("script");
                script.id = "boomr-scr-as";
                script.src = window.BOOMR.url;
                script.async = true;
                parentNode.appendChild(script);
                promoted = true;
              }
              function iframeLoader(wasFallback) {
                promoted = true;
                var dom, bootstrap, iframe, iframeStyle;
                var doc = document;
                var win = window;
                window.BOOMR.snippetMethod = wasFallback ? "if" : "i";
                bootstrap = function(parent, scriptId) {
                  var script = doc.createElement("script");
                  script.id = scriptId || "boomr-if-as";
                  script.src = window.BOOMR.url;
                  BOOMR_lstart = new Date().getTime();
                  parent = parent || doc.body;
                  parent.appendChild(script);
                };
                if (!window.addEventListener && window.attachEvent && navigator.userAgent.match(/MSIE [67]./)) {
                  window.BOOMR.snippetMethod = "s";
                  bootstrap(parentNode, "boomr-async");
                  return;
                }
                iframe = document.createElement("IFRAME");
                iframe.src = "about:blank";
                iframe.title = "";
                iframe.role = "presentation";
                iframe.loading = "eager";
                iframeStyle = (iframe.frameElement || iframe).style;
                iframeStyle.width = 0;
                iframeStyle.height = 0;
                iframeStyle.border = 0;
                iframeStyle.display = "none";
                parentNode.appendChild(iframe);
                try {
                  win = iframe.contentWindow;
                  doc = win.document.open();
                } catch (e) {
                  dom = document.domain;
                  iframe.src = "javascript:var d=document.open();d.domain='" + dom + "';void(0);";
                  win = iframe.contentWindow;
                  doc = win.document.open();
                }
                if (dom) {
                  doc._boomrl = function() {
                    this.domain = dom;
                    bootstrap();
                  };
                  doc.write("<body onload='document._boomrl();'>");
                } else {
                  win._boomrl = function() {
                    bootstrap();
                  };
                  if (win.addEventListener) {
                    win.addEventListener("load", win._boomrl, false);
                  } else if (win.attachEvent) {
                    win.attachEvent("onload", win._boomrl);
                  }
                }
                doc.close();
              }
              var link = document.createElement("link");
              if (link.relList &&
                typeof link.relList.supports === "function" &&
                link.relList.supports("preload") &&
                ("as" in link)) {
                window.BOOMR.snippetMethod = "p";
                link.href = window.BOOMR.url;
                link.rel = "preload";
                link.as = "script";
                link.addEventListener("load", promote);
                link.addEventListener("error", function() {
                  iframeLoader(true);
                });
                setTimeout(function() {
                  if (!promoted) {
                    iframeLoader(true);
                  }
                }, LOADER_TIMEOUT);
                BOOMR_lstart = new Date().getTime();
                parentNode.appendChild(link);
              } else {
                iframeLoader(false);
              }
              function boomerangSaveLoadTime(e) {
                window.BOOMR_onload = (e && e.timeStamp) || new Date().getTime();
              }
              if (window.addEventListener) {
                window.addEventListener("load", boomerangSaveLoadTime, false);
              } else if (window.attachEvent) {
                window.attachEvent("onload", boomerangSaveLoadTime);
              }
              if (document.addEventListener) {
                document.addEventListener("onBoomerangLoaded", function(e) {
                  e.detail.BOOMR.init({
                    producer_url: "https://monorail-edge.shopifysvc.com/v1/produce",
                    ResourceTiming: {
                      enabled: true,
                      trackedResourceTypes: ["script", "img", "css"]
                    },
                  });
                  e.detail.BOOMR.t_end = new Date().getTime();
                });
              } else if (document.attachEvent) {
                document.attachEvent("onpropertychange", function(e) {
                  if (!e) e=event;
                  if (e.propertyName === "onBoomerangLoaded") {
                    e.detail.BOOMR.init({
                      producer_url: "https://monorail-edge.shopifysvc.com/v1/produce",
                      ResourceTiming: {
                        enabled: true,
                        trackedResourceTypes: ["script", "img", "css"]
                      },
                    });
                    e.detail.BOOMR.t_end = new Date().getTime();
                  }
                });
              }
            })();
          
      
          window.ShopifyAnalytics.lib.page(null,{"pageType":"page","resourceType":"page","resourceId":85938995378});
      
          var match = window.location.pathname.match(/checkouts\/(.+)\/(thank_you|post_purchase)/)
          var token = match? match[1]: undefined;
          if (!hasLoggedConversion(token)) {
            setCookieIfConversion(token);
            
          }
        });
      
        
            var eventsListenerScript = document.createElement('script');
            eventsListenerScript.async = true;
            eventsListenerScript.src = "//cdn.shopify.com/shopifycloud/shopify/assets/shop_events_listener-565deac0c7edc7850a7762c24c560f0a9670aa5c52a728e9dbb43d5a7887c1d4.js";
            document.getElementsByTagName('head')[0].appendChild(eventsListenerScript);
          
      })();


      setTimeout(function () {
        document.querySelector('[data-zp-add-to-cart]').addEventListener('click', function () {
            console.log('luke-test');
        });
    }, 5000);
    window.performance && window.performance.mark && window.performance.mark('shopify.content_for_header.start');