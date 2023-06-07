(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seminar-list-seminar-list-module"], {
    /***/
    "KvaC":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seminar-list/seminar-list.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function KvaC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n   <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button icon-only (click)=\"printReport()\">\n       <ion-icon name=\"print-outline\"></ion-icon>\n    </ion-button>\n      <ion-back-button>\n      </ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-row>\n      <ion-col size=\"8\" align-self-center no-padding text-right>\n        <div class=\"title\" (click)=\"openCalenderModal()\">{{dateSelected | date: 'mediumDate'}}</div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n  <div class=\"seminars\" id=\"printSection\">\n\n    <ion-list lines=\"none\" *ngIf=\"seminarList\">\n      <ion-list-header>\n        {{'seminar_list.title' | translate}}\n      </ion-list-header>\n      <ion-row class=\"row\">\n        <ion-col size=\"4\" >\n         {{'seminar_list.name' | translate}}\n        </ion-col>\n        <ion-col size=\"3\">\n          {{'seminar_list.present' | translate}}\n        </ion-col>\n        <ion-col size=\"2\">\n          {{'seminar_list.absent' | translate}}\n        </ion-col>\n        <ion-col size=\"3\" class=\"first\">\n          {{'seminar_list.total' | translate}}\n        </ion-col>\n      </ion-row>\n      <div *ngFor=\"let group of seminarList.records\">\n        <ion-row class=\"row\" *ngFor=\"let class of group.classess\" >\n          <ion-col size=\"4\" >\n            {{class.class_name}}\n          </ion-col>\n          <ion-col size=\"3\">\n            {{class.present}}\n          </ion-col>\n          <ion-col size=\"2\">\n            {{class.absent}}\n          </ion-col>\n          <ion-col size=\"3\" class=\"first\">\n            {{class.total_student}}\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"total\" >\n          <ion-col size=\"4\" >\n            {{'seminar_list.total' | translate}}\n          </ion-col>\n          <ion-col size=\"3\">\n            {{group.group_total_pre}}\n          </ion-col>\n          <ion-col size=\"2\">\n            {{group.group_total_abs}}\n          </ion-col>\n          <ion-col size=\"3\" class=\"first\">\n            {{group.group_total_stu}}\n          </ion-col>\n        </ion-row>\n      </div>\n        <ion-row class=\"row\" >\n          <ion-col size=\"4\" >\n            {{'seminar_list.grand_total' | translate}}\n          </ion-col>\n          <ion-col size=\"3\">\n            {{seminarList.all_present_total}}\n          </ion-col>\n          <ion-col size=\"2\">\n            {{seminarList.all_absent_total}}\n          </ion-col>\n          <ion-col size=\"3\" class=\"first\">\n            {{seminarList.all_student_total}}\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"total last\">\n          <ion-col size=\"4\" >\n            {{'seminar_list.total_percent' | translate}} %\n          </ion-col>\n          <ion-col size=\"3\">\n            {{seminarList.total_per_sent}}\n          </ion-col>\n          <ion-col size=\"5\" class=\"first\">\n          </ion-col>\n        </ion-row>\n\n    </ion-list>\n\n  </div>\n\n  <div class=\"custom-calender-modal-main\" *ngIf=\"showCalenderModal\">\n    <div class=\"calender-container\">\n      <div class=\"calender-body\" class=\"right-direction\">\n        <ion-calendar #calendar [options]=\"options\" canBackwardsSelected=\"true\"  (change)=\"onDaySelect($event)\"></ion-calendar>\n        <!-- [events]=\"currentEvents\" -->\n      </div>\n    </div>\n    <div class=\"clickd-div\" (click)=\"hideCalenderModal()\"></div>\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "cLAn":
    /*!*******************************************************!*\
      !*** ./node_modules/dom-to-image/src/dom-to-image.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function cLAn(module, exports, __webpack_require__) {
      (function (global) {
        'use strict';

        var util = newUtil();
        var inliner = newInliner();
        var fontFaces = newFontFaces();
        var images = newImages(); // Default impl options

        var defaultOptions = {
          // Default is to fail on error, no placeholder
          imagePlaceholder: undefined,
          // Default cache bust is false, it will use the cache
          cacheBust: false
        };
        var domtoimage = {
          toSvg: toSvg,
          toPng: toPng,
          toJpeg: toJpeg,
          toBlob: toBlob,
          toPixelData: toPixelData,
          impl: {
            fontFaces: fontFaces,
            images: images,
            util: util,
            inliner: inliner,
            options: {}
          }
        };
        if (true) module.exports = domtoimage;else {}
        /**
         * @param {Node} node - The DOM Node object to render
         * @param {Object} options - Rendering options
         * @param {Function} options.filter - Should return true if passed node should be included in the output
         *          (excluding node means excluding it's children as well). Not called on the root node.
         * @param {String} options.bgcolor - color for the background, any valid CSS color value.
         * @param {Number} options.width - width to be applied to node before rendering.
         * @param {Number} options.height - height to be applied to node before rendering.
         * @param {Object} options.style - an object whose properties to be copied to node's style before rendering.
         * @param {Number} options.quality - a Number between 0 and 1 indicating image quality (applicable to JPEG only),
                    defaults to 1.0.
         * @param {String} options.imagePlaceholder - dataURL to use as a placeholder for failed images, default behaviour is to fail fast on images we can't fetch
         * @param {Boolean} options.cacheBust - set to true to cache bust by appending the time to the request url
         * @return {Promise} - A promise that is fulfilled with a SVG image data URL
         * */

        function toSvg(node, options) {
          options = options || {};
          copyOptions(options);
          return Promise.resolve(node).then(function (node) {
            return cloneNode(node, options.filter, true);
          }).then(embedFonts).then(inlineImages).then(applyOptions).then(function (clone) {
            return makeSvgDataUri(clone, options.width || util.width(node), options.height || util.height(node));
          });

          function applyOptions(clone) {
            if (options.bgcolor) clone.style.backgroundColor = options.bgcolor;
            if (options.width) clone.style.width = options.width + 'px';
            if (options.height) clone.style.height = options.height + 'px';
            if (options.style) Object.keys(options.style).forEach(function (property) {
              clone.style[property] = options.style[property];
            });
            return clone;
          }
        }
        /**
         * @param {Node} node - The DOM Node object to render
         * @param {Object} options - Rendering options, @see {@link toSvg}
         * @return {Promise} - A promise that is fulfilled with a Uint8Array containing RGBA pixel data.
         * */


        function toPixelData(node, options) {
          return draw(node, options || {}).then(function (canvas) {
            return canvas.getContext('2d').getImageData(0, 0, util.width(node), util.height(node)).data;
          });
        }
        /**
         * @param {Node} node - The DOM Node object to render
         * @param {Object} options - Rendering options, @see {@link toSvg}
         * @return {Promise} - A promise that is fulfilled with a PNG image data URL
         * */


        function toPng(node, options) {
          return draw(node, options || {}).then(function (canvas) {
            return canvas.toDataURL();
          });
        }
        /**
         * @param {Node} node - The DOM Node object to render
         * @param {Object} options - Rendering options, @see {@link toSvg}
         * @return {Promise} - A promise that is fulfilled with a JPEG image data URL
         * */


        function toJpeg(node, options) {
          options = options || {};
          return draw(node, options).then(function (canvas) {
            return canvas.toDataURL('image/jpeg', options.quality || 1.0);
          });
        }
        /**
         * @param {Node} node - The DOM Node object to render
         * @param {Object} options - Rendering options, @see {@link toSvg}
         * @return {Promise} - A promise that is fulfilled with a PNG image blob
         * */


        function toBlob(node, options) {
          return draw(node, options || {}).then(util.canvasToBlob);
        }

        function copyOptions(options) {
          // Copy options to impl options for use in impl
          if (typeof options.imagePlaceholder === 'undefined') {
            domtoimage.impl.options.imagePlaceholder = defaultOptions.imagePlaceholder;
          } else {
            domtoimage.impl.options.imagePlaceholder = options.imagePlaceholder;
          }

          if (typeof options.cacheBust === 'undefined') {
            domtoimage.impl.options.cacheBust = defaultOptions.cacheBust;
          } else {
            domtoimage.impl.options.cacheBust = options.cacheBust;
          }
        }

        function draw(domNode, options) {
          return toSvg(domNode, options).then(util.makeImage).then(util.delay(100)).then(function (image) {
            var canvas = newCanvas(domNode);
            canvas.getContext('2d').drawImage(image, 0, 0);
            return canvas;
          });

          function newCanvas(domNode) {
            var canvas = document.createElement('canvas');
            canvas.width = options.width || util.width(domNode);
            canvas.height = options.height || util.height(domNode);

            if (options.bgcolor) {
              var ctx = canvas.getContext('2d');
              ctx.fillStyle = options.bgcolor;
              ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            return canvas;
          }
        }

        function cloneNode(node, filter, root) {
          if (!root && filter && !filter(node)) return Promise.resolve();
          return Promise.resolve(node).then(makeNodeCopy).then(function (clone) {
            return cloneChildren(node, clone, filter);
          }).then(function (clone) {
            return processClone(node, clone);
          });

          function makeNodeCopy(node) {
            if (node instanceof HTMLCanvasElement) return util.makeImage(node.toDataURL());
            return node.cloneNode(false);
          }

          function cloneChildren(original, clone, filter) {
            var children = original.childNodes;
            if (children.length === 0) return Promise.resolve(clone);
            return cloneChildrenInOrder(clone, util.asArray(children), filter).then(function () {
              return clone;
            });

            function cloneChildrenInOrder(parent, children, filter) {
              var done = Promise.resolve();
              children.forEach(function (child) {
                done = done.then(function () {
                  return cloneNode(child, filter);
                }).then(function (childClone) {
                  if (childClone) parent.appendChild(childClone);
                });
              });
              return done;
            }
          }

          function processClone(original, clone) {
            if (!(clone instanceof Element)) return clone;
            return Promise.resolve().then(cloneStyle).then(clonePseudoElements).then(copyUserInput).then(fixSvg).then(function () {
              return clone;
            });

            function cloneStyle() {
              copyStyle(window.getComputedStyle(original), clone.style);

              function copyStyle(source, target) {
                if (source.cssText) target.cssText = source.cssText;else copyProperties(source, target);

                function copyProperties(source, target) {
                  util.asArray(source).forEach(function (name) {
                    target.setProperty(name, source.getPropertyValue(name), source.getPropertyPriority(name));
                  });
                }
              }
            }

            function clonePseudoElements() {
              [':before', ':after'].forEach(function (element) {
                clonePseudoElement(element);
              });

              function clonePseudoElement(element) {
                var style = window.getComputedStyle(original, element);
                var content = style.getPropertyValue('content');
                if (content === '' || content === 'none') return;
                var className = util.uid();
                clone.className = clone.className + ' ' + className;
                var styleElement = document.createElement('style');
                styleElement.appendChild(formatPseudoElementStyle(className, element, style));
                clone.appendChild(styleElement);

                function formatPseudoElementStyle(className, element, style) {
                  var selector = '.' + className + ':' + element;
                  var cssText = style.cssText ? formatCssText(style) : formatCssProperties(style);
                  return document.createTextNode(selector + '{' + cssText + '}');

                  function formatCssText(style) {
                    var content = style.getPropertyValue('content');
                    return style.cssText + ' content: ' + content + ';';
                  }

                  function formatCssProperties(style) {
                    return util.asArray(style).map(formatProperty).join('; ') + ';';

                    function formatProperty(name) {
                      return name + ': ' + style.getPropertyValue(name) + (style.getPropertyPriority(name) ? ' !important' : '');
                    }
                  }
                }
              }
            }

            function copyUserInput() {
              if (original instanceof HTMLTextAreaElement) clone.innerHTML = original.value;
              if (original instanceof HTMLInputElement) clone.setAttribute("value", original.value);
            }

            function fixSvg() {
              if (!(clone instanceof SVGElement)) return;
              clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
              if (!(clone instanceof SVGRectElement)) return;
              ['width', 'height'].forEach(function (attribute) {
                var value = clone.getAttribute(attribute);
                if (!value) return;
                clone.style.setProperty(attribute, value);
              });
            }
          }
        }

        function embedFonts(node) {
          return fontFaces.resolveAll().then(function (cssText) {
            var styleNode = document.createElement('style');
            node.appendChild(styleNode);
            styleNode.appendChild(document.createTextNode(cssText));
            return node;
          });
        }

        function inlineImages(node) {
          return images.inlineAll(node).then(function () {
            return node;
          });
        }

        function makeSvgDataUri(node, width, height) {
          return Promise.resolve(node).then(function (node) {
            node.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
            return new XMLSerializer().serializeToString(node);
          }).then(util.escapeXhtml).then(function (xhtml) {
            return '<foreignObject x="0" y="0" width="100%" height="100%">' + xhtml + '</foreignObject>';
          }).then(function (foreignObject) {
            return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' + foreignObject + '</svg>';
          }).then(function (svg) {
            return 'data:image/svg+xml;charset=utf-8,' + svg;
          });
        }

        function newUtil() {
          return {
            escape: escape,
            parseExtension: parseExtension,
            mimeType: mimeType,
            dataAsUrl: dataAsUrl,
            isDataUrl: isDataUrl,
            canvasToBlob: canvasToBlob,
            resolveUrl: resolveUrl,
            getAndEncode: getAndEncode,
            uid: uid(),
            delay: delay,
            asArray: asArray,
            escapeXhtml: escapeXhtml,
            makeImage: makeImage,
            width: width,
            height: height
          };

          function mimes() {
            /*
             * Only WOFF and EOT mime types for fonts are 'real'
             * see http://www.iana.org/assignments/media-types/media-types.xhtml
             */
            var WOFF = 'application/font-woff';
            var JPEG = 'image/jpeg';
            return {
              'woff': WOFF,
              'woff2': WOFF,
              'ttf': 'application/font-truetype',
              'eot': 'application/vnd.ms-fontobject',
              'png': 'image/png',
              'jpg': JPEG,
              'jpeg': JPEG,
              'gif': 'image/gif',
              'tiff': 'image/tiff',
              'svg': 'image/svg+xml'
            };
          }

          function parseExtension(url) {
            var match = /\.([^\.\/]*?)$/g.exec(url);
            if (match) return match[1];else return '';
          }

          function mimeType(url) {
            var extension = parseExtension(url).toLowerCase();
            return mimes()[extension] || '';
          }

          function isDataUrl(url) {
            return url.search(/^(data:)/) !== -1;
          }

          function toBlob(canvas) {
            return new Promise(function (resolve) {
              var binaryString = window.atob(canvas.toDataURL().split(',')[1]);
              var length = binaryString.length;
              var binaryArray = new Uint8Array(length);

              for (var i = 0; i < length; i++) {
                binaryArray[i] = binaryString.charCodeAt(i);
              }

              resolve(new Blob([binaryArray], {
                type: 'image/png'
              }));
            });
          }

          function canvasToBlob(canvas) {
            if (canvas.toBlob) return new Promise(function (resolve) {
              canvas.toBlob(resolve);
            });
            return toBlob(canvas);
          }

          function resolveUrl(url, baseUrl) {
            var doc = document.implementation.createHTMLDocument();
            var base = doc.createElement('base');
            doc.head.appendChild(base);
            var a = doc.createElement('a');
            doc.body.appendChild(a);
            base.href = baseUrl;
            a.href = url;
            return a.href;
          }

          function uid() {
            var index = 0;
            return function () {
              return 'u' + fourRandomChars() + index++;

              function fourRandomChars() {
                /* see http://stackoverflow.com/a/6248722/2519373 */
                return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
              }
            };
          }

          function makeImage(uri) {
            return new Promise(function (resolve, reject) {
              var image = new Image();

              image.onload = function () {
                resolve(image);
              };

              image.onerror = reject;
              image.src = uri;
            });
          }

          function getAndEncode(url) {
            var TIMEOUT = 30000;

            if (domtoimage.impl.options.cacheBust) {
              // Cache bypass so we dont have CORS issues with cached images
              // Source: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
              url += (/\?/.test(url) ? "&" : "?") + new Date().getTime();
            }

            return new Promise(function (resolve) {
              var request = new XMLHttpRequest();
              request.onreadystatechange = done;
              request.ontimeout = timeout;
              request.responseType = 'blob';
              request.timeout = TIMEOUT;
              request.open('GET', url, true);
              request.send();
              var placeholder;

              if (domtoimage.impl.options.imagePlaceholder) {
                var split = domtoimage.impl.options.imagePlaceholder.split(/,/);

                if (split && split[1]) {
                  placeholder = split[1];
                }
              }

              function done() {
                if (request.readyState !== 4) return;

                if (request.status !== 200) {
                  if (placeholder) {
                    resolve(placeholder);
                  } else {
                    fail('cannot fetch resource: ' + url + ', status: ' + request.status);
                  }

                  return;
                }

                var encoder = new FileReader();

                encoder.onloadend = function () {
                  var content = encoder.result.split(/,/)[1];
                  resolve(content);
                };

                encoder.readAsDataURL(request.response);
              }

              function timeout() {
                if (placeholder) {
                  resolve(placeholder);
                } else {
                  fail('timeout of ' + TIMEOUT + 'ms occured while fetching resource: ' + url);
                }
              }

              function fail(message) {
                console.error(message);
                resolve('');
              }
            });
          }

          function dataAsUrl(content, type) {
            return 'data:' + type + ';base64,' + content;
          }

          function escape(string) {
            return string.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
          }

          function delay(ms) {
            return function (arg) {
              return new Promise(function (resolve) {
                setTimeout(function () {
                  resolve(arg);
                }, ms);
              });
            };
          }

          function asArray(arrayLike) {
            var array = [];
            var length = arrayLike.length;

            for (var i = 0; i < length; i++) {
              array.push(arrayLike[i]);
            }

            return array;
          }

          function escapeXhtml(string) {
            return string.replace(/#/g, '%23').replace(/\n/g, '%0A');
          }

          function width(node) {
            var leftBorder = px(node, 'border-left-width');
            var rightBorder = px(node, 'border-right-width');
            return node.scrollWidth + leftBorder + rightBorder;
          }

          function height(node) {
            var topBorder = px(node, 'border-top-width');
            var bottomBorder = px(node, 'border-bottom-width');
            return node.scrollHeight + topBorder + bottomBorder;
          }

          function px(node, styleProperty) {
            var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
            return parseFloat(value.replace('px', ''));
          }
        }

        function newInliner() {
          var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;
          return {
            inlineAll: inlineAll,
            shouldProcess: shouldProcess,
            impl: {
              readUrls: readUrls,
              inline: inline
            }
          };

          function shouldProcess(string) {
            return string.search(URL_REGEX) !== -1;
          }

          function readUrls(string) {
            var result = [];
            var match;

            while ((match = URL_REGEX.exec(string)) !== null) {
              result.push(match[1]);
            }

            return result.filter(function (url) {
              return !util.isDataUrl(url);
            });
          }

          function inline(string, url, baseUrl, get) {
            return Promise.resolve(url).then(function (url) {
              return baseUrl ? util.resolveUrl(url, baseUrl) : url;
            }).then(get || util.getAndEncode).then(function (data) {
              return util.dataAsUrl(data, util.mimeType(url));
            }).then(function (dataUrl) {
              return string.replace(urlAsRegex(url), '$1' + dataUrl + '$3');
            });

            function urlAsRegex(url) {
              return new RegExp('(url\\([\'"]?)(' + util.escape(url) + ')([\'"]?\\))', 'g');
            }
          }

          function inlineAll(string, baseUrl, get) {
            if (nothingToInline()) return Promise.resolve(string);
            return Promise.resolve(string).then(readUrls).then(function (urls) {
              var done = Promise.resolve(string);
              urls.forEach(function (url) {
                done = done.then(function (string) {
                  return inline(string, url, baseUrl, get);
                });
              });
              return done;
            });

            function nothingToInline() {
              return !shouldProcess(string);
            }
          }
        }

        function newFontFaces() {
          return {
            resolveAll: resolveAll,
            impl: {
              readAll: readAll
            }
          };

          function resolveAll() {
            return readAll(document).then(function (webFonts) {
              return Promise.all(webFonts.map(function (webFont) {
                return webFont.resolve();
              }));
            }).then(function (cssStrings) {
              return cssStrings.join('\n');
            });
          }

          function readAll() {
            return Promise.resolve(util.asArray(document.styleSheets)).then(getCssRules).then(selectWebFontRules).then(function (rules) {
              return rules.map(newWebFont);
            });

            function selectWebFontRules(cssRules) {
              return cssRules.filter(function (rule) {
                return rule.type === CSSRule.FONT_FACE_RULE;
              }).filter(function (rule) {
                return inliner.shouldProcess(rule.style.getPropertyValue('src'));
              });
            }

            function getCssRules(styleSheets) {
              var cssRules = [];
              styleSheets.forEach(function (sheet) {
                try {
                  util.asArray(sheet.cssRules || []).forEach(cssRules.push.bind(cssRules));
                } catch (e) {
                  console.log('Error while reading CSS rules from ' + sheet.href, e.toString());
                }
              });
              return cssRules;
            }

            function newWebFont(webFontRule) {
              return {
                resolve: function resolve() {
                  var baseUrl = (webFontRule.parentStyleSheet || {}).href;
                  return inliner.inlineAll(webFontRule.cssText, baseUrl);
                },
                src: function src() {
                  return webFontRule.style.getPropertyValue('src');
                }
              };
            }
          }
        }

        function newImages() {
          return {
            inlineAll: inlineAll,
            impl: {
              newImage: newImage
            }
          };

          function newImage(element) {
            return {
              inline: inline
            };

            function inline(get) {
              if (util.isDataUrl(element.src)) return Promise.resolve();
              return Promise.resolve(element.src).then(get || util.getAndEncode).then(function (data) {
                return util.dataAsUrl(data, util.mimeType(element.src));
              }).then(function (dataUrl) {
                return new Promise(function (resolve, reject) {
                  element.onload = resolve;
                  element.onerror = reject;
                  element.src = dataUrl;
                });
              });
            }
          }

          function inlineAll(node) {
            if (!(node instanceof Element)) return Promise.resolve(node);
            return inlineBackground(node).then(function () {
              if (node instanceof HTMLImageElement) return newImage(node).inline();else return Promise.all(util.asArray(node.childNodes).map(function (child) {
                return inlineAll(child);
              }));
            });

            function inlineBackground(node) {
              var background = node.style.getPropertyValue('background');
              if (!background) return Promise.resolve(node);
              return inliner.inlineAll(background).then(function (inlined) {
                node.style.setProperty('background', inlined, node.style.getPropertyPriority('background'));
              }).then(function () {
                return node;
              });
            }
          }
        }
      })(this);
      /***/

    },

    /***/
    "dAQR":
    /*!***************************************************!*\
      !*** ./src/app/seminar-list/seminar-list.page.ts ***!
      \***************************************************/

    /*! exports provided: SeminarListPage */

    /***/
    function dAQR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeminarListPage", function () {
        return SeminarListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_seminar_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./seminar-list.page.html */
      "KvaC");
      /* harmony import */


      var _seminar_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./seminar-list.page.scss */
      "ke7y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/auth/auth.service */
      "/AaM");
      /* harmony import */


      var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../service/data/data.service */
      "v2nD");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "kwrG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/printer/ngx */
      "METt");
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! dom-to-image */
      "cLAn");
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_12__); //import { TabsPage } from '../tabs/tabs';


      var SeminarListPage = /*#__PURE__*/function () {
        function SeminarListPage(navCtrl, dataProvider, authProvider, translate, alertCtrl, camera, network, printer, route, router, zone, platform) {
          var _this = this;

          _classCallCheck(this, SeminarListPage);

          this.navCtrl = navCtrl;
          this.dataProvider = dataProvider;
          this.authProvider = authProvider;
          this.translate = translate;
          this.alertCtrl = alertCtrl;
          this.camera = camera;
          this.network = network;
          this.printer = printer;
          this.route = route;
          this.router = router;
          this.zone = zone;
          this.platform = platform;
          this.holidayString = '';
          this.currentEvents = [];
          this.isHoliday = false;
          this.showCalenderModal = false;
          this.options = {
            canBackwardsSelected: true,
            from: 1,
            to: 0,
            disableWeeks: [0],
            daysConfig: []
          };
          this.seminarList = [];
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.navData = _this.router.getCurrentNavigation().extras.state.seminar;
              console.log(_this.navData);
            }
          });
          this.dateSelected = new Date();
          this.translate.get("alertmessages").subscribe(function (response) {
            _this.lang = response;
          });
        }

        _createClass(SeminarListPage, [{
          key: "printReport",
          value: function printReport() {
            var _this2 = this;

            dom_to_image__WEBPACK_IMPORTED_MODULE_12___default.a.toPng(document.getElementById('printSection')).then(function (dataUrl) {
              dataUrl = dataUrl.replace("data:image/png;base64,", "base64://");
              var options = {
                orientation: 'portrait'
              };

              _this2.printer.print(dataUrl, options).then(function (onSuccess) {
                console.log('printer.print', onSuccess);
              }, function (e) {
                console.log('printer.print', e);
              });
            })["catch"](function (error) {
              console.error('oops, something went wrong!', error);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {//console.log('html2canvas',html2canvas);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this3 = this;

            if (localStorage.getItem("userloggedin")) {
              this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
              this.userType = this.userDetails.details.user_type;
              var data = {
                "user_no": this.userDetails.details.user_no,
                "school_id": this.userDetails.details.school_id,
                "session_id": this.userDetails.session_id
              };
              this.dataProvider.getHolidays(data).then(function (response) {
                if (response) {
                  if (!_this3.holidayString || _this3.holidayString == null) _this3.holidayString = '';

                  if (response.holidays.length > 0) {
                    _this3.holidayString = response.holiday_string;
                    response.holidays.forEach(function (holiday) {
                      var date = new Date(holiday.date);
                      var p = {
                        date: holiday.date,
                        disable: true
                      };

                      _this3.options.daysConfig.push(p);

                      _this3.currentEvents.push({
                        year: date.getFullYear(),
                        month: date.getMonth(),
                        date: date.getDate()
                      });
                    }); // console.log(this.options.daysConfig)
                  }

                  var day = _this3.dateSelected.getDate();

                  day = day < 10 ? '0' + day : day;

                  var month = _this3.dateSelected.getMonth();

                  month = month + 1;
                  month = month < 10 ? '0' + month : month;
                  var strint_date = _this3.dateSelected.getFullYear() + '-' + month + '-' + day;

                  if (_this3.holidayString.indexOf(strint_date) > -1) {
                    _this3.isHoliday = true;
                  } else {
                    _this3.isHoliday = false;
                  }
                }
              })["catch"](function (error) {
                _this3.dataProvider.hideLoading();

                console.error(error);

                _this3.dataProvider.errorALertMessage(error);
              });
              this.getClasses();
            } else {
              this.dataProvider.hideLoading();
              this.authProvider.flushLocalStorage();
              this.router.navigate(['login'], {
                replaceUrl: true
              }); //  this.app.getRootNav().setRoot("LoginPage");
            }
          }
          /**
          * get the list of classes from provider
          */

        }, {
          key: "getClasses",
          value: function getClasses() {
            var _this4 = this;

            var loader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            if (loader) this.dataProvider.showLoading();
            var course = this.navData;
            var studentData = {
              "date": this.dataProvider.getFormatedDate(this.dateSelected),
              "user_no": this.userDetails.details.user_no,
              "session_id": this.userDetails.session_id,
              "seminar_no": this.navData,
              "school_id": this.userDetails.details.school_id
            };
            this.dataProvider.getSeminarClassList(studentData).then(function (res) {
              if (loader) _this4.dataProvider.hideLoading();

              if (res.session) {
                console.log('seminar class', res.data);
                _this4.seminarList = res.data;
              } else {
                if (loader) _this4.dataProvider.hideLoading(); // this.authProvider.flushLocalStorage();
                // this.dataProvider.errorALertMessage(res.message);
                // this.router.navigate(['login'],{replaceUrl:true});
                // this.app.getRootNav().setRoot("LoginPage");
              }
            });
          }
        }, {
          key: "openCalenderModal",
          value: function openCalenderModal() {
            if (this.platform.is('cordova')) {
              if (this.network.type != this.network.Connection.NONE && this.network.type != this.network.Connection.UNKNOWN) {
                this.showCalenderModal = true;
                var query = document.getElementsByName('ios-arrow-forward');
                var query1 = document.getElementsByName('ios-arrow-back');
                var query2 = document.getElementsByName('md-arrow-dropdown');
                setTimeout(function () {
                  query[0]['name'] = "chevron-forward-outline";
                  query1[0]['name'] = "chevron-back-outline";
                  query2[0]['name'] = "chevron-down-outline";
                }, 500);
              } else {
                this.dataProvider.showToast(this.lang.no_internet);
              }
            } else {
              this.showCalenderModal = true;

              var _query = document.getElementsByName('ios-arrow-forward');

              var _query2 = document.getElementsByName('ios-arrow-back');

              var _query3 = document.getElementsByName('md-arrow-dropdown');

              setTimeout(function () {
                _query[0]['name'] = "chevron-forward-outline";
                _query2[0]['name'] = "chevron-back-outline";
                _query3[0]['name'] = "chevron-down-outline";
              }, 500);
            }
          }
          /**
           * Use to hide the calender
           */

        }, {
          key: "hideCalenderModal",
          value: function hideCalenderModal() {
            this.showCalenderModal = false;
          }
        }, {
          key: "onDaySelect",
          value: function onDaySelect(event) {
            if (event != undefined && event != null) {
              var date = new Date(event); // date.setDate(event.date);
              // date.setMonth(event.month);
              // date.setFullYear(event.year);

              var day = event.date;
              day = day < 10 ? '0' + day : day;
              var month = event.month;
              month = month + 1;
              month = month < 10 ? '0' + month : month;
              var strint_date = event.year + '-' + month + '-' + day;

              if (this.holidayString.indexOf(event) == -1) {
                this.dateSelected = date;
                var currentDate = new Date();

                if (this.dateSelected.getTime() <= currentDate.getTime()) {
                  this.isHoliday = false;
                  this.hideCalenderModal();
                  this.getClasses();
                } else {
                  this.dataProvider.showToast(this.lang.future_date);
                }
              } else {
                this.dataProvider.showToast(this.lang.holiday);
              }
            }
          }
          /**
          * function to match the dates
          * @param date date with which compare the selected date
          */

        }, {
          key: "checkDateSelected",
          value: function checkDateSelected(date) {
            if (date.getDate() == this.dateSelected.getDate() && date.getMonth() == this.dateSelected.getMonth() && date.getFullYear() == this.dateSelected.getFullYear()) {
              return true;
            } else {
              return false;
            }
          }
          /**
           * function to caheck the current date
           * @param date date with which compare the current date
           */

        }, {
          key: "checkCurrentDate",
          value: function checkCurrentDate(date) {
            var currentDate = new Date();

            if (date.getDate() == currentDate.getDate() && date.getMonth() == currentDate.getMonth() && date.getFullYear() == currentDate.getFullYear()) {
              return true;
            } else {
              return false;
            }
          }
        }]);

        return SeminarListPage;
      }();

      SeminarListPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]
        }, {
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"]
        }, {
          type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_11__["Printer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      SeminarListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-seminar-list',
        template: _raw_loader_seminar_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seminar_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"], _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_11__["Printer"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], SeminarListPage);
      /***/
    },

    /***/
    "ke7y":
    /*!*****************************************************!*\
      !*** ./src/app/seminar-list/seminar-list.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function ke7y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".seminars {\n  background: #f1f1f1;\n  padding: 14px 5px;\n  height: 100%;\n}\n.seminars ion-list {\n  padding: 5px;\n}\n.seminars ion-list ion-row {\n  text-align: center;\n}\n.seminars ion-list ion-row ion-col {\n  padding: 7px 0px 7px 0px;\n  border-top: 0.1px solid #00000026;\n  font-size: 11px;\n  color: #5d5c5bc9;\n  border-right: 0.1px solid #00000026;\n}\n.seminars ion-list .first {\n  border-left: 0.1px solid #00000026;\n}\n.seminars ion-list .last {\n  border-bottom: 0.1px solid #00000026;\n}\n.seminars ion-list .total {\n  background: #e2e2e2;\n  color: #5d5c5b !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlbWluYXItbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBQTtFQUNHLGlCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQUk7RUFDQyxZQUFBO0FBRUw7QUFBRTtFQUNDLGtCQUFBO0FBRUg7QUFERztFQUNDLHdCQUFBO0VBQ0EsaUNBQUE7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQUdQO0FBQUU7RUFDQyxrQ0FBQTtBQUVIO0FBQUU7RUFDQyxvQ0FBQTtBQUVIO0FBQUU7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FBRU4iLCJmaWxlIjoic2VtaW5hci1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZW1pbmFyc3tcclxuXHRiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgcGFkZGluZzogMTRweCA1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBpb24tbGlzdHtcclxuICAgIFx0cGFkZGluZzo1cHg7XHJcblxyXG5cdFx0aW9uLXJvd3tcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRpb24tY29se1xyXG5cdFx0XHRcdHBhZGRpbmc6IDdweCAwcHggN3B4IDBweDtcclxuXHRcdFx0XHRib3JkZXItdG9wOiAwLjFweCBzb2xpZCAjMDAwMDAwMjY7XHJcblx0XHRcdCAgICBmb250LXNpemU6IDExcHg7XHJcblx0XHRcdCAgICBjb2xvcjogIzVkNWM1YmM5O1xyXG5cdFx0XHQgICAgYm9yZGVyLXJpZ2h0OiAwLjFweCBzb2xpZCAjMDAwMDAwMjY7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5maXJzdHtcclxuXHRcdFx0Ym9yZGVyLWxlZnQ6IDAuMXB4IHNvbGlkICMwMDAwMDAyNjtcclxuXHRcdH1cclxuXHRcdC5sYXN0e1xyXG5cdFx0XHRib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCAjMDAwMDAwMjY7XHJcblx0XHR9XHJcblx0XHQudG90YWwge1xyXG5cdFx0ICAgIGJhY2tncm91bmQ6ICNlMmUyZTI7XHJcblx0XHQgICAgY29sb3I6ICM1ZDVjNWIgIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHR9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "paRI":
    /*!*************************************************************!*\
      !*** ./src/app/seminar-list/seminar-list-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: SeminarListPageRoutingModule */

    /***/
    function paRI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeminarListPageRoutingModule", function () {
        return SeminarListPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _seminar_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./seminar-list.page */
      "dAQR");

      var routes = [{
        path: '',
        component: _seminar_list_page__WEBPACK_IMPORTED_MODULE_3__["SeminarListPage"]
      }];

      var SeminarListPageRoutingModule = function SeminarListPageRoutingModule() {
        _classCallCheck(this, SeminarListPageRoutingModule);
      };

      SeminarListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SeminarListPageRoutingModule);
      /***/
    },

    /***/
    "zk2D":
    /*!*****************************************************!*\
      !*** ./src/app/seminar-list/seminar-list.module.ts ***!
      \*****************************************************/

    /*! exports provided: SeminarListPageModule */

    /***/
    function zk2D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeminarListPageModule", function () {
        return SeminarListPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _seminar_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./seminar-list-routing.module */
      "paRI");
      /* harmony import */


      var _seminar_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./seminar-list.page */
      "dAQR");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var SeminarListPageModule = function SeminarListPageModule() {
        _classCallCheck(this, SeminarListPageModule);
      };

      SeminarListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _seminar_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeminarListPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_seminar_list_page__WEBPACK_IMPORTED_MODULE_6__["SeminarListPage"]]
      })], SeminarListPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=seminar-list-seminar-list-module-es5.js.map