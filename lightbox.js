( () => {
    "use strict";
    var t, e, modules = {
        619: (t, e, n) => {
            n.d(e, {
                A: () => s
            });
            var r = n(354)
              , i = n.n(r)
              , o = n(314)
              , a = n.n(o)()(i());
            const s = a
        }
        ,
        314: t => {
            t.exports = function(t) {
                var e = [];
                return e.toString = function() {
                    return this.map((function(e) {
                        var n = ""
                          , r = void 0 !== e[5];
                        return e[4] && (n += "@supports (".concat(e[4], ") {")),
                        e[2] && (n += "@media ".concat(e[2], " {")),
                        r && (n += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")),
                        n += t(e),
                        r && (n += "}"),
                        e[2] && (n += "}"),
                        e[4] && (n += "}"),
                        n
                    }
                    )).join("")
                }
                ,
                e.i = function(t, n, r, i, o) {
                    "string" == typeof t && (t = [[null, t, void 0]]);
                    var a = {};
                    if (r)
                        for (var s = 0; s < this.length; s++) {
                            var l = this[s][0];
                            null != l && (a[l] = !0)
                        }
                    for (var c = 0; c < t.length; c++) {
                        var u = [].concat(t[c]);
                        r && a[u[0]] || (void 0 !== o && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")),
                        u[5] = o),
                        n && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"),
                        u[2] = n) : u[2] = n),
                        i && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"),
                        u[4] = i) : u[4] = "".concat(i)),
                        e.push(u))
                    }
                }
                ,
                e
            }
        }
        ,
        354: t => {
            t.exports = function(t) {
                var e = t[1]
                  , n = t[3];
                if (!n)
                    return e;
                if ("function" == typeof btoa) {
                    var r = btoa(unescape(encodeURIComponent(JSON.stringify(n))))
                      , i = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r)
                      , o = "/*# ".concat(i, " */");
                    return [e].concat([o]).join("\n")
                }
                return [e].join("\n")
            }
        }
        ,
        72: t => {
            var e = [];
            function n(t) {
                for (var n = -1, r = 0; r < e.length; r++)
                    if (e[r].identifier === t) {
                        n = r;
                        break
                    }
                return n
            }
            function r(t, r) {
                for (var o = {}, a = [], s = 0; s < t.length; s++) {
                    var l = t[s]
                      , c = r.base ? l[0] + r.base : l[0]
                      , u = o[c] || 0
                      , p = "".concat(c, " ").concat(u);
                    o[c] = u + 1;
                    var d = n(p)
                      , h = {
                        css: l[1],
                        media: l[2],
                        sourceMap: l[3],
                        supports: l[4],
                        layer: l[5]
                    };
                    if (-1 !== d)
                        e[d].references++,
                        e[d].updater(h);
                    else {
                        var f = i(h, r);
                        r.byIndex = s,
                        e.splice(s, 0, {
                            identifier: p,
                            updater: f,
                            references: 1
                        })
                    }
                    a.push(p)
                }
                return a
            }
            function i(t, e) {
                var n = e.domAPI(e);
                n.update(t);
                return function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer)
                            return;
                        n.update(t = e)
                    } else
                        n.remove()
                }
            }
            t.exports = function(t, i) {
                var o = r(t = t || [], i = i || {});
                return function(t) {
                    t = t || [];
                    for (var a = 0; a < o.length; a++) {
                        var s = n(o[a]);
                        e[s].references--
                    }
                    for (var l = r(t, i), c = 0; c < o.length; c++) {
                        var u = n(o[c]);
                        0 === e[u].references && (e[u].updater(),
                        e.splice(u, 1))
                    }
                    o = l
                }
            }
        }
        ,
        659: t => {
            var e = {};
            t.exports = function(t, n) {
                var r = function(t) {
                    if (void 0 === e[t]) {
                        var n = document.querySelector(t);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head
                            } catch (t) {
                                n = null
                            }
                        e[t] = n
                    }
                    return e[t]
                }(t);
                if (!r)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                r.appendChild(n)
            }
        }
        ,
        540: t => {
            t.exports = function(t) {
                var e = document.createElement("style");
                return t.setAttributes(e, t.attributes),
                t.insert(e, t.options),
                e
            }
        }
        ,
        56: (t, e, n) => {
            t.exports = function(t) {
                var e = n.nc;
                e && t.setAttribute("nonce", e)
            }
        }
        ,
        825: t => {
            t.exports = function(t) {
                if ("undefined" == typeof document)
                    return {
                        update: function() {},
                        remove: function() {}
                    };
                var e = t.insertStyleElement(t);
                return {
                    update: function(n) {
                        !function(t, e, n) {
                            var r = "";
                            n.supports && (r += "@supports (".concat(n.supports, ") {")),
                            n.media && (r += "@media ".concat(n.media, " {"));
                            var i = void 0 !== n.layer;
                            i && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")),
                            r += n.css,
                            i && (r += "}"),
                            n.media && (r += "}"),
                            n.supports && (r += "}");
                            var o = n.sourceMap;
                            o && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")),
                            e.styleTagTransform(r, t, e.options)
                        }(e, t, n)
                    },
                    remove: function() {
                        !function(t) {
                            if (null === t.parentNode)
                                return false;
                            t.parentNode.removeChild(t)
                        }(e)
                    }
                }
            }
        }
        ,
        113: t => {
            t.exports = function(t, e) {
                if (e.styleSheet)
                    e.styleSheet.cssText = t;
                else {
                    for (; e.firstChild; )
                        e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(t))
                }
            }
        }
    }, 
    moduleCache = {};

    function requireModule(moduleId) {
        var module = moduleCache[moduleId];
        if (void 0 !== module)
            return module.exports;
        var o = moduleCache[moduleId] = {
            id: moduleId,
            exports: {}
        };
        return modules[moduleId](o, o.exports, requireModule),
        o.exports
    }

    requireModule.modules = modules,
    requireModule.n = module => {
        var e = module && module.__esModule ? () => module.default : () => module;
        return requireModule.d(e, {
            a: e
        }),
        e
    }
    ,
    requireModule.d = (target, exports) => {
        for (var n in exports)
            requireModule.o(exports, n) && !requireModule.o(target, n) && Object.defineProperty(target, n, {
                enumerable: !0,
                get: exports[n]
            })
    }
    ,
    requireModule.f = {},
    requireModule.e = module => Promise.all(Object.keys(requireModule.f).reduce(( (e, n) => (requireModule.f[n](module, e),
    e)), [])),

    requireModule.u = function (module) {
        return module + ".lightbox.js";
    };


    requireModule.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }(),
    requireModule.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
    t = {},
    e = "meow-lightbox:",
    requireModule.l = (n, r, o, a) => {
        if (t[n])
            t[n].push(r);
        else {
            var s, l;
            if (void 0 !== o)
                for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                    var p = c[u];
                    if (p.getAttribute("src") == n || p.getAttribute("data-webpack") == e + o) {
                        s = p;
                        break
                    }
                }
            s || (l = !0,
            (s = document.createElement("script")).charset = "utf-8",
            s.timeout = 120,
            requireModule.nc && s.setAttribute("nonce", requireModule.nc),
            s.setAttribute("data-webpack", e + o),
            s.src = n),
            t[n] = [r];
            var d = (e, r) => {
                s.onerror = s.onload = null,
                clearTimeout(h);
                var i = t[n];
                if (delete t[n],
                s.parentNode && s.parentNode.removeChild(s),
                i && i.forEach((t => t(r))),
                e)
                    return e(r)
            }
              , h = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: s
            }), 12e4);
            s.onerror = d.bind(null, s.onerror),
            s.onload = d.bind(null, s.onload),
            l && document.head.appendChild(s)
        }
    }
    ,
    requireModule.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    ( () => {
        var t;
        requireModule.g.importScripts && (t = requireModule.g.location + "");
        var e = requireModule.g.document;
        if (!t && e && (e.currentScript && (t = e.currentScript.src),
        !t)) {
            var n = e.getElementsByTagName("script");
            if (n.length)
                for (var r = n.length - 1; r > -1 && (!t || !/^http(s?):/.test(t)); )
                    t = n[r--].src
        }
        if (!t)
            throw new Error("Automatic publicPath is not supported in this browser");
        t = t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        requireModule.p = t
    }
    )(),
    ( () => {
        var t = {
            792: 0
        };
        requireModule.f.j = (e, n) => {
            var r = requireModule.o(t, e) ? t[e] : void 0;
            if (0 !== r)
                if (r)
                    n.push(r[2]);
                else {
                    var o = new Promise(( (n, i) => r = t[e] = [n, i]));
                    n.push(r[2] = o);
                    var a = requireModule.p + requireModule.u(e)
                      , s = new Error;
                    requireModule.l(a, (n => {
                        if (requireModule.o(t, e) && (0 !== (r = t[e]) && (t[e] = void 0),
                        r)) {
                            var o = n && ("load" === n.type ? "missing" : n.type)
                              , a = n && n.target && n.target.src;
                            s.message = "Loading chunk " + e + " failed.\n(" + o + ": " + a + ")",
                            s.name = "ChunkLoadError",
                            s.type = o,
                            s.request = a,
                            r[1](s)
                        }
                    }
                    ), "chunk-" + e, e)
                }
        }
        ;
        var e = (e, n) => {
            var r, o, [a,s,l] = n, c = 0;
            if (a.some((e => 0 !== t[e]))) {
                for (r in s)
                    requireModule.o(s, r) && (requireModule.modules[r] = s[r]);
                if (l)
                    l(requireModule)
            }
            for (e && e(n); c < a.length; c++)
                o = a[c],
                requireModule.o(t, o) && t[o] && t[o][0](),
                t[o] = 0
        }
          , n = self.wpJsonLightbox = self.wpJsonLightbox || [];
        n.forEach(e.bind(null, 0)),
        n.push = e.bind(null, n.push.bind(n))
    }
    )(),
    requireModule.nc = void 0,
    ( () => {
        var t;
        var globalHooks;
        var globalId;
        var updateQueue;
        var debounceRendering;
        var defaultRenderingMethod;
        var compareUpdates;
        var l;
        var c;
        var u;
        var p;

        function mergeProperties(target, source) {
            for (var key in source)
                target[key] = source[key];
            return target
        }

        function removeElement(element) {
            const parent = element.parentNode;
            parent && parent.removeChild(element)
        }

        function createElement(componentType, props, args) {
            var key, ref, propName, finalProps = {};
            for (propName in props)
                "key" == propName ? key = props[propName] : "ref" == propName ? ref = props[propName] : finalProps[propName] = props[propName];
            if (arguments.length > 2 && (finalProps.children = arguments.length > 3 ? t.call(arguments, 2) : args),
            "function" == typeof componentType && null != componentType.defaultProps)
                for (propName in componentType.defaultProps)
                    void 0 === finalProps[propName] && (finalProps[propName] = componentType.defaultProps[propName]);
            return constructVNode(componentType, finalProps, key, ref, null)
        }
        function constructVNode(type, props, key, ref, customId) {
            var s = {
                type: type,
                props: props,
                key: key,
                ref: ref,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                constructor: void 0,
                __v: null == customId ? ++globalId : customId,
                __i: -1,
                __u: 0
            };
            return null == customId && null != globalHooks.vnode && globalHooks.vnode(s),
            s
        }
        function getChildren(node) {
            return node.children
        }

        class Component {
            constructor(props, context) {
                this.props = props;
                this.context = context;
            }
        
            setState(partialState, callback) {
                var nextState;
                nextState = this.__s != null && this.__s !== this.state 
                    ? this.__s 
                    : (this.__s = mergeProperties({}, this.state));
        
                if (typeof partialState === "function") {
                    partialState = partialState(mergeProperties({}, nextState), this.props);
                }
        
                if (partialState) {
                    mergeProperties(nextState, partialState);
                }
        
                if (partialState != null && this.__v) {
                    if (callback) this._sb.push(callback);
                    scheduleUpdate(this);
                }
            }
        
            forceUpdate(callback) {
                if (this.__v) {
                    this.__e = true;
                    if (callback) this.__h.push(callback);
                    scheduleUpdate(this);
                }
            }
        }

        /**
         * Traverses the virtual DOM tree to find the next sibling DOM element.
         *
         * If a sibling at the given index does not exist or is not a valid DOM element,
         * the function recursively checks the parent's next sibling.
         *
         * @param {Object} vnode - The current virtual node.
         * @param {number|null} childIndex - The index to start checking from in the vnode's children.
         * @returns {HTMLElement|null} - The next valid DOM element, or null if none is found.
         */
        function findNextDomSibling(vnode, childIndex) {
            if (childIndex == null) {
                return vnode.__ ? findNextDomSibling(vnode.__, vnode.__i + 1) : null;
            }
        
            for (var sibling; childIndex < vnode.__k.length; childIndex++) {
                sibling = vnode.__k[childIndex];
                if (sibling != null && sibling.__e != null) {
                    return sibling.__e;
                }
            }
            return typeof vnode.type === "function" ? findNextDomSibling(vnode) : null;
        }

        /**
         * Traverses through the virtual node's children to find the first valid DOM element.
         * 
         * @param {Object} vnode - The current virtual node.
         * @returns {HTMLElement|null} - The found DOM element or null if not found.
         */
        function findFirstDomElement(vNode) {
            var child, element;
            if (null != (vNode = vNode.__) && null != vNode.__c) {
                for (vNode.__e = vNode.__c.base = null,
                child = 0; child < vNode.__k.length; child++)
                    if (null != (element = vNode.__k[child]) && null != element.__e) {
                        vNode.__e = vNode.__c.base = element.__e;
                        break
                    }
                return findFirstDomElement(vNode)
            }
        }

        /**
         * Marks the component for update and schedules rendering.
         * 
         * @param {Object} component - The component to be updated.
         */
        function scheduleUpdate(component) {
            (!component.__d && (component.__d = !0) && updateQueue.push(component) && !processUpdates.__r++ || debounceRendering !== globalHooks.debounceRendering) && ((debounceRendering = globalHooks.debounceRendering) || defaultRenderingMethod)(processUpdates)
        }

        /**
         * Processes the update queue and applies updates to the virtual DOM and the real DOM.
         */
        function processUpdates() {
            var component, remainingQueueLength, update, element, virtualNode, domElement, children, newChildren;

            updateQueue.sort(compareUpdates);

            while (component = updateQueue.shift()) {
                if (component.__d) {                
                    remainingQueueLength = updateQueue.length;
                    element = undefined;
                    domElement = (virtualNode = (update = component).__v).__e;
                    children = [];
                    newChildren = [],
                    update.__P && ((element = mergeProperties({}, virtualNode)).__v = virtualNode.__v + 1,
                    globalHooks.vnode && globalHooks.vnode(element),
                    renderNode(update.__P, element, virtualNode, update.__n, update.__P.namespaceURI, 32 & virtualNode.__u ? [domElement] : null, children, null == domElement ? findNextDomSibling(virtualNode) : domElement, !!(32 & virtualNode.__u), newChildren),
                    element.__v = virtualNode.__v,
                    element.__.__k[element.__i] = element,
                    applyUpdates(children, element, newChildren),
                    element.__e != domElement && findFirstDomElement(element)),
                    updateQueue.length > remainingQueueLength && updateQueue.sort(compareUpdates);
                }
            }
            processUpdates.__r = 0
        }

        /**
     * Updates the virtual DOM and applies changes to the real DOM, handling component children and refs.
     * 
     * @param {Object} parentElement - The parent DOM node.
     * @param {Array} elements - The new elements for the virtual DOM.
     * @param {Object} component - The component to update.
     * @param {Object} context - The context for rendering.
     * @param {Object} options - Options for rendering.
     * @param {Array} updateQueue - The queue to store updates.
     * @param {HTMLElement} referenceNode - The reference node for placement.
     * @param {HTMLElement} lastElement - The last element rendered.
     * @param {Array} hooks - The hooks to call during rendering.
     * @param {Array} cleanup - The list of cleanup functions.
     */
        function renderVirtualNodes(parentElement, elements, n, r, i, o, a, s, l, c, cleanup) {
            var d, h, f, m;
            var previousChildren = r && r.__k || [];
            var childCount = elements.length;
            n.__d = l;
            K(n, elements, previousChildren);
            l = n.__d
            for (var p = 0; p < childCount; p++)
                null != (h = n.__k[p]) && "boolean" != typeof h && "function" != typeof h && (d = -1 === h.__i ? {} : previousChildren[h.__i] || {},
                h.__i = p,
                renderNode(parentElement, h, d, i, o, a, s, l, c, cleanup),
                f = h.__e,
                h.ref && d.ref != h.ref && (d.ref && applyRef(d.ref, null, h),
                cleanup.push(h.ref, h.__c || f, h)),
                null == m && null != f && (m = f),
                65536 & h.__u || d.__k === h.__k ? (l && !l.isConnected && (l = findNextDomSibling(d)),
                l = renderVitualNode(h, l, parentElement)) : "function" == typeof h.type && void 0 !== h.__d ? l = h.__d : f && (l = f.nextSibling),
                h.__d = void 0,
                h.__u &= -196609);
            n.__d = l,
            n.__e = m
        }

        function K(t, e, n) {
            var r, i, o, a, s, l = e.length, c = n.length, u = c, p = 0;
            for (t.__k = [],
            r = 0; r < l; r++)
                a = r + p,
                null != (i = t.__k[r] = null == (i = e[r]) || "boolean" == typeof i || "function" == typeof i ? null : "string" == typeof i || "number" == typeof i || "bigint" == typeof i || i.constructor == String ? constructVNode(null, i, null, null, null) : Array.isArray(i) ? constructVNode(getChildren, {
                    children: i
                }, null, null, null) : void 0 === i.constructor && i.__b > 0 ? constructVNode(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) ? (i.__ = t,
                i.__b = t.__b + 1,
                s = findMatchingVNodeIndex(i, n, a, u),
                i.__i = s,
                o = null,
                -1 !== s && (u--,
                (o = n[s]) && (o.__u |= 131072)),
                null == o || null === o.__v ? (-1 == s && p--,
                "function" != typeof i.type && (i.__u |= 65536)) : s !== a && (s === a + 1 ? p++ : s > a ? u > l - a ? p += s - a : p-- : s < a ? s == a - 1 && (p = s - a) : p = 0,
                s !== r + p && (i.__u |= 65536))) : (o = n[a]) && null == o.key && o.__e && !(131072 & o.__u) && (o.__e == t.__d && (t.__d = findNextDomSibling(o)),
                unmountComponent(o, o, !1),
                n[a] = null,
                u--);
            if (u)
                for (r = 0; r < c; r++)
                    null != (o = n[r]) && !(131072 & o.__u) && (o.__e == t.__d && (t.__d = findNextDomSibling(o)),
                    unmountComponent(o, o))
        }

        function renderVitualNode(virtualNode, referenceNode, parentDom) {
            var children;
            if ("function" == typeof virtualNode.type) {
                children = virtualNode.__k;
                for (var i = 0; children && i < children.length; i++) {
                    if (children[i]) {
                        children[i].__ = virtualNode;
                        referenceNode = renderVitualNode(children[i], referenceNode, parentDom);
                    }
                }
                return referenceNode
            }
            virtualNode.__e != referenceNode && (parentDom.insertBefore(virtualNode.__e, referenceNode || null),
            referenceNode = virtualNode.__e);
            do {
                referenceNode = referenceNode && referenceNode.nextSibling
            } while (null != referenceNode && 8 === referenceNode.nodeType);
            return referenceNode
        }

        /**
         * Finds the index of a matching virtual DOM node in a list of existing children.
         *
         * The function attempts to find a vnode with the same `key` and `type` as the provided `newVNode`
         * within the `existingChildren` array, starting at the given `currentIndex`. It checks the direct
         * index first and, if that fails, looks around neighboring indices up to the given search radius.
         *
         * @param {Object} newVNode - The virtual node to match (contains `key` and `type`).
         * @param {Array} existingChildren - Array of existing virtual nodes.
         * @param {number} currentIndex - The index in `existingChildren` where matching is attempted first.
         * @param {number} searchRadius - How far around `currentIndex` to search for a match.
         * @returns {number} - The index of the matched vnode, or -1 if not found.
         */
        function findMatchingVNodeIndex(newNode, existingChildren, currentIndex, searchRadius) {
            var newKey = newNode.key;
            var newType = newNode.type;
            var leftIndex = currentIndex - 1;
            var rightIndex = currentIndex + 1
            var candidate = existingChildren[currentIndex];
            if (null === candidate || candidate && newKey == candidate.key && newType === candidate.type && !(131072 & candidate.__u))
                return currentIndex;
            if (searchRadius > (null == candidate || 131072 & candidate.__u ? 0 : 1))
                for (; leftIndex >= 0 || rightIndex < existingChildren.length; ) {
                    if (leftIndex >= 0) {
                        if ((candidate = existingChildren[leftIndex]) && !(131072 & candidate.__u) && newKey == candidate.key && newType === candidate.type)
                            return leftIndex;
                        leftIndex--
                    }
                    if (rightIndex < existingChildren.length) {
                        if ((candidate = existingChildren[rightIndex]) && !(131072 & candidate.__u) && newKey == candidate.key && newType === candidate.type)
                            return rightIndex;
                        rightIndex++
                    }
                }
            return -1
        }

        /**
         * Sets a style property on a DOM element, handling special cases for CSS properties.
         *
         * If the property name starts with a hyphen (`-`), it is treated as a custom CSS property
         * and is set using `setProperty`. Otherwise, it is assigned directly to the style object.
         * Numeric values are automatically converted to pixel strings unless the property
         * is known to accept unitless values (e.g., `opacity`, `zIndex`, `lineHeight`).
         *
         * @param {CSSStyleDeclaration} styleObj - The style object of a DOM element (e.g., element.style).
         * @param {string} propertyName - The name of the CSS property to set.
         * @param {*} value - The value to set for the property. `null` or `undefined` will clear the property.
         */
        function setStyleProperty(styleObj, propertyName, value) {
            if (propertyName[0] === "-") {
                // Custom CSS property (e.g., --my-var)
                styleObj.setProperty(propertyName, value == null ? "" : value);
            } else {
                // Automatically add 'px' to numeric values unless the property is unitless
                styleObj[propertyName] = value == null
                    ? ""
                    : (typeof value !== "number" ||
                       /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i.test(propertyName))
                        ? value
                        : value + "px";
            }
        }

        /**
         * Applies an attribute, event, or style change to a DOM element.
         *
         * This function handles several types of updates:
         * - CSS styles: as a string or object, using `setStyleProperty`.
         * - DOM events: adds or removes event listeners with support for capture modifiers.
         * - Regular attributes: set directly, or via `setAttribute` for SVG or special cases.
         *
         * @param {HTMLElement | SVGElement} domElement - The target DOM element.
         * @param {string} propName - The property or attribute name to update.
         * @param {*} newValue - The new value for the property or attribute.
         * @param {*} oldValue - The previous value for diffing.
         * @param {string} namespace - Optional XML namespace (used for SVG elements).
         */
        function updateDomProperty(domElement, propName, newvalue, oldValue, namespace) {
            var isCapture;
            t: if ("style" === propName)
                if ("string" == typeof newvalue)
                    domElement.style.cssText = newvalue;
                else {
                    if ("string" == typeof oldValue && (domElement.style.cssText = oldValue = ""),
                    oldValue)
                        for (propName in oldValue)
                            newvalue && propName in newvalue || setStyleProperty(domElement.style, propName, "");
                    if (newvalue)
                        for (propName in newvalue)
                            oldValue && newvalue[propName] === oldValue[propName] || setStyleProperty(domElement.style, propName, newvalue[propName])
                }
            else if ("o" === propName[0] && "n" === propName[1])
                isCapture = propName !== (propName = propName.replace(/(PointerCapture)$|Capture$/i, "$1")),
                propName = propName.toLowerCase()in domElement || "onFocusOut" === propName || "onFocusIn" === propName ? propName.toLowerCase().slice(2) : propName.slice(2),
                domElement.l || (domElement.l = {}),
                domElement.l[propName + isCapture] = newvalue,
                newvalue ? oldValue ? newvalue.u = oldValue.u : (newvalue.u = l,
                domElement.addEventListener(propName, isCapture ? u : c, isCapture)) : domElement.removeEventListener(propName, isCapture ? u : c, isCapture);
            else {
                if ("http://www.w3.org/2000/svg" == namespace)
                    propName = propName.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                else if ("width" != propName && "height" != propName && "href" != propName && "list" != propName && "form" != propName && "tabIndex" != propName && "download" != propName && "rowSpan" != propName && "colSpan" != propName && "role" != propName && propName in domElement)
                    try {
                        domElement[propName] = null == newvalue ? "" : newvalue;
                        break t
                    } catch (t) {}
                "function" == typeof newvalue || (null == newvalue || !1 === newvalue && "-" !== propName[4] ? domElement.removeAttribute(propName) : domElement.setAttribute(propName, newvalue))
            }
        }

        /**
         * Creates a DOM event handler wrapper with support for delegation and deduplication.
         *
         * This function returns an event handler that:
         * - Looks up the corresponding listener in the element's `_listeners` map using the event type and a suffix (`eventPhaseKey`).
         * - Skips execution if the event was already handled earlier (`eventId < handlerVersion`).
         * - Supports a global event hook (`globalHooks.event`) for preprocessing.
         *
         * @param {string} eventPhaseKey - A string used to distinguish between capture and bubble phases (e.g., "" or "true").
         * @returns {Function} - The actual event handler function to be used in addEventListener.
         */
        function createDelegatedEventHandler(eventPhaseKey) {
            return function handleEvent(domEvent) {
                if (this.l) {
                    var r = this.l[domEvent.type + eventPhaseKey];
                    if (null == domEvent.t)
                        domEvent.t = l++;
                    else if (domEvent.t < r.u)
                        return;
                    return r(globalHooks.event ? globalHooks.event(domEvent) : domEvent)
                }
            }
        }

        function renderNode(t, n, r, i, o, a, s, l, c, u) {
            var p, d, h, f, m, _, v, g, w, y, A, b, C, x, E, S = n.type;
            if (void 0 !== n.constructor)
                return null;
            128 & r.__u && (c = !!(32 & r.__u),
            a = [l = n.__e = r.__e]),
            (p = globalHooks.__b) && p(n);
            t: if ("function" == typeof S)
                try {
                    if (g = n.props,
                    w = (p = S.contextType) && i[p.__c],
                    y = p ? w ? w.props.value : p.__ : i,
                    r.__c ? v = (d = n.__c = r.__c).__ = d.__E : ("prototype"in S && S.prototype.render ? n.__c = d = new S(g,y) : (n.__c = d = new Component(g,y),
                    d.constructor = S,
                    d.render = createInstance),
                    w && w.sub(d),
                    d.props = g,
                    d.state || (d.state = {}),
                    d.context = y,
                    d.__n = i,
                    h = d.__d = !0,
                    d.__h = [],
                    d._sb = []),
                    null == d.__s && (d.__s = d.state),
                    null != S.getDerivedStateFromProps && (d.__s == d.state && (d.__s = mergeProperties({}, d.__s)),
                    mergeProperties(d.__s, S.getDerivedStateFromProps(g, d.__s))),
                    f = d.props,
                    m = d.state,
                    d.__v = n,
                    h)
                        null == S.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(),
                        null != d.componentDidMount && d.__h.push(d.componentDidMount);
                    else {
                        if (null == S.getDerivedStateFromProps && g !== f && null != d.componentWillReceiveProps && d.componentWillReceiveProps(g, y),
                        !d.__e && (null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(g, d.__s, y) || n.__v === r.__v)) {
                            for (n.__v !== r.__v && (d.props = g,
                            d.state = d.__s,
                            d.__d = !1),
                            n.__e = r.__e,
                            n.__k = r.__k,
                            n.__k.forEach((function(t) {
                                t && (t.__ = n)
                            }
                            )),
                            A = 0; A < d._sb.length; A++)
                                d.__h.push(d._sb[A]);
                            d._sb = [],
                            d.__h.length && s.push(d);
                            break t
                        }
                        null != d.componentWillUpdate && d.componentWillUpdate(g, d.__s, y),
                        null != d.componentDidUpdate && d.__h.push((function() {
                            d.componentDidUpdate(f, m, _)
                        }
                        ))
                    }
                    if (d.context = y,
                    d.props = g,
                    d.__P = t,
                    d.__e = !1,
                    b = globalHooks.__r,
                    C = 0,
                    "prototype"in S && S.prototype.render) {
                        for (d.state = d.__s,
                        d.__d = !1,
                        b && b(n),
                        p = d.render(d.props, d.state, d.context),
                        x = 0; x < d._sb.length; x++)
                            d.__h.push(d._sb[x]);
                        d._sb = []
                    } else
                        do {
                            d.__d = !1,
                            b && b(n),
                            p = d.render(d.props, d.state, d.context),
                            d.state = d.__s
                        } while (d.__d && ++C < 25);
                    d.state = d.__s,
                    null != d.getChildContext && (i = mergeProperties(mergeProperties({}, i), d.getChildContext())),
                    h || null == d.getSnapshotBeforeUpdate || (_ = d.getSnapshotBeforeUpdate(f, m)),
                    renderVirtualNodes(t, Array.isArray(E = null != p && p.type === getChildren && null == p.key ? p.props.children : p) ? E : [E], n, r, i, o, a, s, l, c, u),
                    d.base = n.__e,
                    n.__u &= -161,
                    d.__h.length && s.push(d),
                    v && (d.__E = d.__ = null)
                } catch (t) {
                    n.__v = null,
                    c || null != a ? (n.__e = l,
                    n.__u |= c ? 160 : 32,
                    a[a.indexOf(l)] = null) : (n.__e = r.__e,
                    n.__k = r.__k),
                    globalHooks.__e(t, n, r)
                }
            else
                null == a && n.__v === r.__v ? (n.__k = r.__k,
                n.__e = r.__e) : n.__e = renderOrUpdateElement(r.__e, n, r, i, o, a, s, c, u);
            (p = globalHooks.diffed) && p(n)
        }

        /**
         * Flushes lifecycle effects and applies queued updates for components.
         *
         * This function:
         * - Clears the dirty flag from a component.
         * - Applies a sequence of update operations using `applyTransaction`.
         * - Invokes a global commit hook, if available.
         * - Executes queued effect callbacks for each component in the list.
         *
         * @param {Array} componentsWithEffects - Array of components to process.
         * @param {Object} currentComponent - The component being updated (has __d, etc.).
         * @param {Array} updateQueue - A flat list of update transactions to apply.
         */
        function applyUpdates(componentsWithEffects, currentComponents, updateQueue) {
            currentComponents.__d = void 0;
            for (var i = 0; i < updateQueue.length; i++)
                applyRef(updateQueue[i], updateQueue[++i], updateQueue[++i]);
            globalHooks.__c && globalHooks.__c(currentComponents, componentsWithEffects),
            componentsWithEffects.some((function(component) {
                try {
                    componentsWithEffects = component.__h,
                    component.__h = [],
                    componentsWithEffects.some((function(t) {
                        t.call(component)
                    }
                    ))
                } catch (error) {
                    globalHooks.__e(error, component.__v)
                }
            }
            ))
        }

        function renderOrUpdateElement(element, newVNode, oldVNode, parent, namespace, children, s, l, c) {
            var ref, attr, prevProps, nextProps, f, m, _, nextProps = oldVNode.props, g = newVNode.props, type = newVNode.type;
            if ("svg" === type ? namespace = "http://www.w3.org/2000/svg" : "math" === type ? namespace = "http://www.w3.org/1998/Math/MathML" : namespace || (namespace = "http://www.w3.org/1999/xhtml"),
            null != children)
                for (ref = 0; ref < children.length; ref++)
                    if ((f = children[ref]) && "setAttribute"in f == !!type && (type ? f.localName === type : 3 === f.nodeType)) {
                        element = f,
                        children[ref] = null;
                        break
                    }
            if (null == element) {
                if (null === type)
                    return document.createTextNode(g);
                element = document.createElementNS(namespace, type, g.is && g),
                children = null,
                l = !1
            }
            if (null === type)
                nextProps === g || l && element.data === g || (element.data = g);
            else {
                if (children = children && t.call(element.childNodes),
                nextProps = oldVNode.props || {},
                !l && null != children)
                    for (nextProps = {},
                    ref = 0; ref < element.attributes.length; ref++)
                        nextProps[(f = element.attributes[ref]).name] = f.value;
                for (ref in nextProps)
                    if (f = nextProps[ref],
                    "children" == ref)
                        ;
                    else if ("dangerouslySetInnerHTML" == ref)
                        prevProps = f;
                    else if ("key" !== ref && !(ref in g)) {
                        if ("value" == ref && "defaultValue"in g || "checked" == ref && "defaultChecked"in g)
                            continue;
                        updateDomProperty(element, ref, null, f, namespace)
                    }
                for (ref in g)
                    f = g[ref],
                    "children" == ref ? nextProps = f : "dangerouslySetInnerHTML" == ref ? attr = f : "value" == ref ? m = f : "checked" == ref ? _ = f : "key" === ref || l && "function" != typeof f || nextProps[ref] === f || updateDomProperty(element, ref, f, nextProps[ref], namespace);
                if (attr)
                    l || prevProps && (attr.__html === prevProps.__html || attr.__html === element.innerHTML) || (element.innerHTML = attr.__html),
                    newVNode.__k = [];
                else if (prevProps && (element.innerHTML = ""),
                renderVirtualNodes(element, Array.isArray(nextProps) ? nextProps : [nextProps], newVNode, oldVNode, parent, "foreignObject" === type ? "http://www.w3.org/1999/xhtml" : namespace, children, s, children ? children[0] : oldVNode.__k && findNextDomSibling(oldVNode, 0), l, c),
                null != children)
                    for (ref = children.length; ref--; )
                        null != children[ref] && removeElement(children[ref]);
                l || (ref = "value",
                void 0 !== m && (m !== element[ref] || "progress" === type && !m || "option" === type && m !== nextProps[ref]) && updateDomProperty(element, ref, m, nextProps[ref], namespace),
                ref = "checked",
                void 0 !== _ && _ !== element[ref] && updateDomProperty(element, ref, _, nextProps[ref], namespace))
            }
            return element
        }

        /**
         * Applies a ref value to a callback ref or ref object.
         *
         * @param {Function|Object} refTarget - A function ref or ref object to update.
         * @param {*} value - The value to assign to the ref.
         * @param {*} context - Optional component or vnode context for error tracking.
         */
        function applyRef(targetRef, value, context) {
            try {
                "function" == typeof targetRef ? targetRef(value) : targetRef.current = value
            } catch (error) {
                globalHooks.__e(error, context)
            }
        }

        /**
         * Unmounts a component and cleans up any references, lifecycle hooks, or child components.
         * 
         * This function is responsible for unmounting a component, calling the `componentWillUnmount` 
         * lifecycle method (if present), cleaning up references (such as `ref`), and recursively 
         * unmounting any child components. It also ensures the component's elements are removed 
         * from the DOM if necessary.
         * 
         * @param {Object} component - The component to unmount.
         * @param {Object} context - The context or parent element of the component.
         * @param {boolean} parent - Flag indicating if this is the parent unmount operation.
         */
        function unmountComponent(componemt, context, parent) {
            var i, o;
            if (globalHooks.unmount && globalHooks.unmount(componemt),
            (i = componemt.ref) && (i.current && i.current !== componemt.__e || applyRef(i, null, context)),
            null != (i = componemt.__c)) {
                if (i.componentWillUnmount)
                    try {
                        i.componentWillUnmount()
                    } catch (t) {
                        globalHooks.__e(t, context)
                    }
                i.base = i.__P = null
            }
            if (i = componemt.__k)
                for (o = 0; o < i.length; o++)
                    i[o] && unmountComponent(i[o], context, parent || "function" != typeof componemt.type);
            parent || null == componemt.__e || removeElement(componemt.__e),
            componemt.__c = componemt.__ = componemt.__e = componemt.__d = void 0
        }

        function createInstance(param1, param2, param3) {
            return this.constructor(param1, param3)
        }
        
        function ct(n, r, i) {
            var o, a, s, l;
            globalHooks.__ && globalHooks.__(n, r),
            a = (o = "function" == typeof i) ? null : i && i.__k || r.__k,
            s = [],
            l = [],
            renderNode(r, n = (!o && i || r).__k = createElement(getChildren, null, [n]), a || {}, {}, r.namespaceURI, !o && i ? [i] : a ? null : r.firstChild ? t.call(r.childNodes) : null, s, !o && i ? i : a ? a.__e : r.firstChild, o, l),
            applyUpdates(s, n, l)
        }

        t = [].slice,
        globalHooks = {
            __e: function(t, e, n, r) {
                for (var i, o, a; e = e.__; )
                    if ((i = e.__c) && !i.__)
                        try {
                            if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(t)),
                            a = i.__d),
                            null != i.componentDidCatch && (i.componentDidCatch(t, r || {}),
                            a = i.__d),
                            a)
                                return i.__E = i
                        } catch (e) {
                            t = e
                        }
                throw t
            }
        },
        globalId = 0,
        Component.prototype.render = getChildren,
        updateQueue = [],
        defaultRenderingMethod = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
        compareUpdates = function(t, e) {
            return t.__v.__b - e.__v.__b
        }
        ,
        processUpdates.__r = 0,
        l = 0,
        c = createDelegatedEventHandler(!1),
        u = createDelegatedEventHandler(!0),
        p = 0;
        var ut, pt, dt, ht, ft = 0, mt = [], _t = [], vt = globalHooks, gt = vt.__b, wt = vt.__r, yt = vt.diffed, At = vt.__c, bt = vt.unmount, Ct = vt.__;
        
        
        /**
         * This function generates a unique state identifier and manages state initialization.
         * 
         * @param {number} stateIndex - The index for identifying the state.
         * @param {number} size - The size parameter used in state management.
         * @returns {Object} The state object with its current value.
         */
        function generateStateId(stateIndex, size) {
            vt.__h && vt.__h(pt, stateIndex, ft || size),
            ft = 0;
            var stateContainer = pt.__H || (pt.__H = {
                __: [],
                __h: []
            });
            return stateIndex >= stateContainer.__.length && stateContainer.__.push({
                __V: _t
            }),
            stateContainer.__[stateIndex]
        }

        function Et(t) {
            return ft = 1,
            St(Dt, t)
        }
        function St(t, e, n) {
            var r = generateStateId(ut++, 2);
            if (r.t = t,
            !r.__c && (r.__ = [n ? n(e) : Dt(void 0, e), function(t) {
                var e = r.__N ? r.__N[0] : r.__[0]
                  , n = r.t(e, t);
                e !== n && (r.__N = [n, r.__[1]],
                r.__c.setState({}))
            }
            ],
            r.__c = pt,
            !pt.u)) {
                var i = function(t, e, n) {
                    if (!r.__c.__H)
                        return !0;
                    var i = r.__c.__H.__.filter((function(t) {
                        return !!t.__c
                    }
                    ));
                    if (i.every((function(t) {
                        return !t.__N
                    }
                    )))
                        return !o || o.call(this, t, e, n);
                    var a = !1;
                    return i.forEach((function(t) {
                        if (t.__N) {
                            var e = t.__[0];
                            t.__ = t.__N,
                            t.__N = void 0,
                            e !== t.__[0] && (a = !0)
                        }
                    }
                    )),
                    !(!a && r.__c.props === t) && (!o || o.call(this, t, e, n))
                };
                pt.u = !0;
                var o = pt.shouldComponentUpdate
                  , a = pt.componentWillUpdate;
                pt.componentWillUpdate = function(t, e, n) {
                    if (this.__e) {
                        var r = o;
                        o = void 0,
                        i(t, e, n),
                        o = r
                    }
                    a && a.call(this, t, e, n)
                }
                ,
                pt.shouldComponentUpdate = i
            }
            return r.__N || r.__
        }
        function updateStateIfChanged(t, e) {
            var n = generateStateId(ut++, 3);
            !vt.__s && hasStateChanged(n.__H, e) && (n.__ = t,
            n.i = e,
            pt.__H.__h.push(n))
        }

        function Lt(t) {
            return ft = 5,
            setState((function() {
                return {
                    current: t
                }
            }
            ), [])
        }

        function setState(stateFn, dependencies) {
            const stateId = generateStateId(ut++, 7);

            if (hasStateChanged(stateId.__H, dependencies)){
                stateId.__V = stateFn();
                stateId.i = dependencies;
                stateId.__h = stateFn;
                return stateId.__V;
            } 
            return stateId.__
        }

        function zt(t, e) {
            return ft = 8,
            setState((function() {
                return t
            }
            ), e)
        }

        function Ot() {
            for (var t; t = mt.shift(); )
                if (t.__P && t.__H)
                    try {
                        t.__H.__h.forEach(It),
                        t.__H.__h.forEach(Mt),
                        t.__H.__h = []
                    } catch (e) {
                        t.__H.__h = [],
                        vt.__e(e, t.__v)
                    }
        }
        vt.__b = function(t) {
            pt = null,
            gt && gt(t)
        }
        ,
        vt.__ = function(t, e) {
            t && e.__k && e.__k.__m && (t.__m = e.__k.__m),
            Ct && Ct(t, e)
        }
        ,
        vt.__r = function(t) {
            wt && wt(t),
            ut = 0;
            var e = (pt = t.__c).__H;
            e && (dt === pt ? (e.__h = [],
            pt.__h = [],
            e.__.forEach((function(t) {
                t.__N && (t.__ = t.__N),
                t.__V = _t,
                t.__N = t.i = void 0
            }
            ))) : (e.__h.forEach(It),
            e.__h.forEach(Mt),
            e.__h = [],
            ut = 0)),
            dt = pt
        }
        ,
        vt.diffed = function(t) {
            yt && yt(t);
            var e = t.__c;
            e && e.__H && (e.__H.__h.length && (1 !== mt.push(e) && ht === vt.requestAnimationFrame || ((ht = vt.requestAnimationFrame) || Nt)(Ot)),
            e.__H.__.forEach((function(t) {
                t.i && (t.__H = t.i),
                t.__V !== _t && (t.__ = t.__V),
                t.i = void 0,
                t.__V = _t
            }
            ))),
            dt = pt = null
        }
        ,
        vt.__c = function(t, e) {
            e.some((function(t) {
                try {
                    t.__h.forEach(It),
                    t.__h = t.__h.filter((function(t) {
                        return !t.__ || Mt(t)
                    }
                    ))
                } catch (n) {
                    e.some((function(t) {
                        t.__h && (t.__h = [])
                    }
                    )),
                    e = [],
                    vt.__e(n, t.__v)
                }
            }
            )),
            At && At(t, e)
        }
        ,
        vt.unmount = function(t) {
            bt && bt(t);
            var e, n = t.__c;
            n && n.__H && (n.__H.__.forEach((function(t) {
                try {
                    It(t)
                } catch (t) {
                    e = t
                }
            }
            )),
            n.__H = void 0,
            e && vt.__e(e, n.__v))
        }
        ;
        var Pt = "function" == typeof requestAnimationFrame;
        function Nt(t) {
            var e, n = function() {
                clearTimeout(r),
                Pt && cancelAnimationFrame(e),
                setTimeout(t)
            }, r = setTimeout(n, 100);
            Pt && (e = requestAnimationFrame(n))
        }
        function It(t) {
            var e = pt
              , n = t.__c;
            "function" == typeof n && (t.__c = void 0,
            n()),
            pt = e
        }
        function Mt(t) {
            var e = pt;
            t.__c = t.__(),
            pt = e
        }

        /**
         * This function compares the current state with the given dependencies to determine if there was any change.
         * 
         * @param {Array} previousState - The previously stored state.
         * @param {Array} currentDependencies - The new dependencies to check for changes.
         * @returns {boolean} Returns `true` if the state has changed, `false` otherwise.
         */
        function hasStateChanged(previousState, currentDependencies) {
            return !previousState || previousState.length !== currentDependencies.length ||
                currentDependencies.some((dep, index) => dep !== previousState[index]);
        }
        
        function Dt(t, e) {
            return "function" == typeof e ? e(t) : e
        }

        const Tt = function(t) {
            return {
                id: t.id,
                title: t.title,
                index: t.index,
                caption: t.caption,
                low_res_src: t.img_low_res_src,
                src: t.img_src,
                gps: t.img_gps,
                srcset: t.img_srcset,
                sizes: t.img_sizes,
                dimensions: t.dimensions,
                orientation: t.img_orientation,
                exifs: t.img_exifs,
                download_link: t.download_link
            }
        };
        
        function Ut(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != n) {
                    var r, i, o, a, s = [], l = !0, c = !1;
                    try {
                        if (o = (n = n.call(t)).next,
                        0 === e) {
                            if (Object(n) !== n)
                                return;
                            l = !1
                        } else
                            for (; !(l = (r = o.call(n)).done) && (s.push(r.value),
                            s.length !== e); l = !0)
                                ;
                    } catch (t) {
                        c = !0,
                        i = t
                    } finally {
                        try {
                            if (!l && null != n.return && (a = n.return(),
                            Object(a) !== a))
                                return
                        } finally {
                            if (c)
                                throw i
                        }
                    }
                    return s
                }
            }(t, e) || function(t, e) {
                if (t) {
                    if ("string" == typeof t)
                        return copyElements(t, e);
                    var n = {}.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? copyElements(t, e) : void 0
                }
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        var Wt = function() {
            document.querySelectorAll("img.mwl-img, video.mwl-video").forEach((function(t) {
                t.classList.remove("mwl-img", "mwl-video")
            }
            ));
            var t = null != mwl_settings.settings.separate_galleries && mwl_settings.settings.separate_galleries
              , e = ".leaflet-tile, .leaflet-google-mutant"
              , n = mwl_settings.settings.anti_selector ? [(mwl_settings.settings.anti_selector), e].join(", ") : e
              , r = ["maps.googleapis.com", "api.mapbox.com", "api.maptiler.com", "openstreetmap.org"]
              , i = 0
              , o = 0;
            return document.querySelectorAll(mwl_settings.settings.selector).forEach((function(t) {
                t.querySelectorAll("img:not(.mwl-img)").forEach((function(t) {
                    t.closest(n) || r.some((function(e) {
                        return t.src.includes(e)
                    }
                    )) || (t.classList.add("mwl-img"),
                    t.setAttribute("mwl-index", i),
                    i++)
                }
                )),
                t.querySelectorAll("video:not(.mwl-video)").forEach((function(t) {
                    t.closest(n) || r.some((function(e) {
                        return t.src && t.src.includes(e)
                    }
                    )) || (t.classList.add("mwl-video"),
                    t.setAttribute("mwl-index", o),
                    o++)
                }
                ))
            }
            )),
            t && document.querySelectorAll(mwl_settings.settings.selector).forEach((function(t) {
                var e = 0;
                t.querySelectorAll("img.mwl-img").forEach((function(t) {
                    t.setAttribute("mwl-index-relative", e),
                    e++
                }
                ));
                var n = 0;
                t.querySelectorAll("video.mwl-video").forEach((function(t) {
                    t.setAttribute("mwl-index-relative", n),
                    n++
                }
                ))
            }
            )),
            i + o
        }
          , Yt = function() {
            var t = function(t) {
                return function() {
                    var e = this
                      , n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);
                        function a(t) {
                            ee(o, r, i, a, s, "next", t)
                        }
                        function s(t) {
                            ee(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    }
                    ))
                }
            }(regeneratorRuntime().mark((function t() {
                var e, n, r;
                return regeneratorRuntime().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (e = ".mgl-root",
                            !document.querySelector(e)) {
                                t.next = 11;
                                break
                            }
                            n = document.querySelectorAll(e),
                            r = !1;
                        case 4:
                            if (r) {
                                t.next = 11;
                                break
                            }
                            if (r = Array.from(n).every((function(t) {
                                return t.querySelector("img")
                            }
                            ))) {
                                t.next = 9;
                                break
                            }
                            return t.next = 9,
                            new Promise((function(t) {
                                return setTimeout(t, 500)
                            }
                            ));
                        case 9:
                            t.next = 4;
                            break;
                        case 11:
                            return t.abrupt("return", Wt());
                        case 12:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )));
            return function() {
                return t.apply(this, arguments)
            }
        }()
          , Zt = function() {
            var t = document.querySelectorAll(".mwl-img")
              , e = [];
            return t.forEach((function(t) {
                var n, r = t.currentSrc;
                t.classList.contains("mgl-lazy") && !t.classList.contains("lazyloaded") && (r = !1);
                var i = function(t) {
                    if (t.getAttribute("data-mwl-img-id"))
                        return t.getAttribute("data-mwl-img-id");
                    var e = Array.from(t.classList);
                    return e.length > 0 && e.some((function(t) {
                        return t.includes("wp-image-")
                    }
                    )) ? e.find((function(t) {
                        return t.includes("wp-image-")
                    }
                    )).replace("wp-image-", "") : null
                }(t);
                if (null != i && window.mwl_data && null !== (n = window.mwl_data[i]) && void 0 !== n && n.success) {
                    var o, a = window.mwl_data[i];
                    a.data.gps.split(",").length > 1 ? a.gps = {
                        lat: parseFloat(a.data.gps.split(",")[0]),
                        lng: parseFloat(a.data.gps.split(",")[1])
                    } : a.gps = {
                        lat: "N/A",
                        lng: "N/A"
                    },
                    "description" == mwl_settings.settings.caption_source && a.data.description && (o = a.data.description),
                    "caption" == mwl_settings.settings.caption_source && a.data.caption && (o = a.data.caption);
                    var s = {
                        id: a.data.id,
                        title: a.data.title,
                        index: parseInt(t.getAttribute("mwl-index")),
                        caption: o,
                        img_low_res_src: r,
                        img_src: encodeURI(a.file),
                        img_srcset: a.file_srcset,
                        img_sizes: a.file_sizes,
                        dimensions: a.dimension,
                        img_orientation: a.dimension.width > a.dimension.height ? "landscape" : "portrait",
                        img_exifs: a.data,
                        img_gps: a.gps,
                        download_link: a.download_link
                    };
                    e.push(Tt(s))
                } else {
                    var l = t.getAttribute("mgl-lazy") ? t.getAttribute("mgl-src") : t.getAttribute("data-lazy-src") || t.getAttribute("src")
                      , c = t.getAttribute("data-lazy-srcset") || t.getAttribute("srcset")
                      , u = t.getAttribute("data-lazy-sizes") || t.getAttribute("sizes")
                      , p = {
                        index: parseInt(t.getAttribute("mwl-index")),
                        title: "",
                        img_low_res_src: r,
                        img_src: l,
                        img_srcset: c,
                        img_sizes: u,
                        caption: !1,
                        dimensions: !1,
                        img_orientation: "landscape",
                        img_exifs: {
                            title: "",
                            caption: "",
                            camera: "N/A",
                            lens: "N/A",
                            aperture: "N/A",
                            shutter_speed: "N/A",
                            iso: "N/A",
                            focal_length: "N/A",
                            date: "N/A",
                            keywords: "N/A"
                        }
                    };
                    e.push(Tt(p))
                }
            }
            )),
            e
        }
          , Gt = function() {
            var t = document.querySelectorAll(".mwl-video")
              , e = [];
            return t.forEach((function(t) {
                console.log(t);
                var n = t.currentSrc;
                if (!n) {
                    var r = t.querySelector("source");
                    r && (n = r.src)
                }
                t.classList.contains("mgl-lazy") && !t.classList.contains("lazyloaded") && (n = !1);
                !function(t) {
                    if (t.getAttribute("data-mwl-video-id"))
                        return t.getAttribute("data-mwl-video-id");
                    var e = Array.from(t.classList);
                    e.length > 0 && e.some((function(t) {
                        return t.includes("wp-video-")
                    }
                    )) && e.find((function(t) {
                        return t.includes("wp-video-")
                    }
                    )).replace("wp-video-", "")
                }(t);
                var i = {
                    index: parseInt(t.getAttribute("mwl-index")),
                    title: t.getAttribute("title") || "",
                    img_low_res_src: n,
                    img_src: n,
                    img_srcset: "",
                    img_sizes: "",
                    caption: t.getAttribute("data-caption") || !1,
                    dimensions: {
                        width: t.videoWidth || 0,
                        height: t.videoHeight || 0
                    },
                    img_orientation: (t.videoWidth || 0) > (t.videoHeight || 0) ? "landscape" : "portrait",
                    download_link: t.getAttribute("data-download") || "",
                    img_exifs: {
                        title: "",
                        caption: "",
                        camera: "N/A",
                        lens: "N/A",
                        aperture: "N/A",
                        shutter_speed: "N/A",
                        iso: "N/A",
                        focal_length: "N/A",
                        date: "N/A",
                        keywords: "N/A"
                    }
                };
                e.push(Tt(i))
            }
            )),
            console.log(e),
            e
        }
          , Rt = function(t) {
            var e = t.isOpening
              , n = t._img
              , r = t._img_dest
              , i = t.lightbox
              , o = t.rectCreated;
            return new Promise((function(t) {
                if (o)
                    t();
                else {
                    for (var a = {
                        very_fast: 150,
                        fast: 300,
                        normal: 500,
                        slow: 700,
                        very_slow: 1e3
                    }[mwl_settings.settings.animation_speed], s = n.getBoundingClientRect(), l = r.getBoundingClientRect(), c = e ? n : r, u = document.createElement("div"), p = n.cloneNode(!0), d = document.querySelector(".mwl__navigations"), h = 0, f = ["carousel", "horizontal", "map"]; h < f.length; h++) {
                        var m, _ = f[h], v = null === (m = c.closest(".mgl-".concat(_, '-container[layout="').concat(_, '"]'))) || void 0 === m ? void 0 : m.getBoundingClientRect();
                        if (v) {
                            switch (_) {
                            case "carousel":
                                var g = e ? v.width > s.width : v.width > l.width
                                  , w = e ? s : l;
                                g || (w = {
                                    width: v.width,
                                    height: e ? s.height : l.height,
                                    top: v.top,
                                    left: v.left
                                }),
                                e ? s = w : l = w;
                                break;
                            case "horizontal":
                                var y = {
                                    width: e ? Math.min(v.right, s.right) - Math.max(v.left, s.left) : Math.min(v.right, l.right) - Math.max(v.left, l.left),
                                    height: e ? s.height : l.height,
                                    top: v.top,
                                    left: e ? Math.max(v.left, s.left) : Math.max(v.left, l.left)
                                };
                                e ? s = y : l = y;
                                break;
                            case "map":
                                p.style.borderRadius = e ? "1000px" : "0px",
                                p.style.transition = "border-radius ".concat(a, "ms ease-in-out"),
                                setTimeout((function() {
                                    p.style.borderRadius = e ? "0px" : "1000px"
                                }
                                ), 10)
                            }
                            break
                        }
                    }
                    Object.assign(u.style, {
                        position: "fixed",
                        top: "".concat(s.top, "px"),
                        left: "".concat(s.left, "px"),
                        width: "".concat(s.width, "px"),
                        height: "".concat(s.height, "px")
                    });
                    var A = "transform ".concat(a, "ms ease-in-out, width ").concat(a, "ms ease-in-out, height ").concat(a, "ms ease-in-out, opacity ").concat(a / 2, "ms ease-in-out");
                    u.style.transition = A,
                    u.classList.add("mwl-img-clone-container"),
                    p.classList.add("mwl-img-clone"),
                    u.appendChild(p),
                    document.body.appendChild(u);
                    var b = "opacity ".concat(a / 2, "ms ease-in-out");
                    i.style.transition = b,
                    d && (d.style.transition = b),
                    e ? (r.style.opacity = 0,
                    i.style.opacity = 0,
                    d && (d.style.opacity = 0)) : (n.style.opacity = 0,
                    i.style.opacity = 1);
                    var C = l.left - s.left
                      , x = l.top - s.top;
                    setTimeout((function() {
                        i.style.opacity = e ? 1 : 0,
                        u.style.transform = "translate(".concat(C, "px, ").concat(x, "px)"),
                        u.style.width = "".concat(l.width, "px"),
                        u.style.height = "".concat(l.height, "px")
                    }
                    ), 10),
                    setTimeout((function() {
                        u.style.opacity = e ? 0 : 1,
                        e ? (r.style.opacity = 1,
                        null != d && (d.style.opacity = 1)) : n.style.opacity = 1
                    }
                    ), a),
                    setTimeout((function() {
                        u.remove(),
                        t()
                    }
                    ), a + .25 * a)
                }
            }
            ))
        }
          , getAction = function() {
            var C = Ut(Et(void 0), 2)
              , L = null != mwl_settings.settings.separate_galleries && mwl_settings.settings.separate_galleries
              ,
               resetZoom = function() {
                document.querySelectorAll(".mwl img.zoomed").forEach((function(t) {
                    t.classList.remove("zoomed"),
                    t.style.transform = "translate3d(0,0,0) scale(1)"
                }
                ))
            }
              , z = function() {
                var t = document.querySelector("#image-map-".concat((getSlideData()).currentIndex));
                null != t && t.classList.contains("visible") && P();
                var e = null == t ? void 0 : t.parentNode;
                if (e) {
                    e.removeChild(t);
                    var n = document.createElement("div");
                    n.setAttribute("id", "image-map-".concat((getSlideData()).currentIndex)),
                    n.setAttribute("class", "image-map"),
                    e.appendChild(n)
                }
            }
              , resetAutoplay = function() {
                var t = document.querySelector(".mwl__topbar__controls__control--play")
                  , e = document.querySelector(".mwl__topbar__controls__control--pause");
                t && e && (e.classList.add("hidden"),
                t.classList.remove("hidden"),
                clearInterval((getSlideData()).autoplayInterval))
            }
              , P = function() {
                resetZoom();
                var t = document.querySelector("#image-map-".concat((getSlideData()).currentIndex));
                t && (t.onclick = dt);
                var e = t.getAttribute("id")
                  , r = document.querySelector('.mwl__slider__image[data-index="'.concat((getSlideData()).currentIndex, '"]')).querySelector("img.mwl__slider__image__thumbnail__high-res")
                  , i = (getSlideData()).images[(getSlideData()).currentIndex];
                if (t.classList.contains("visible"))
                    getSlideData().updateIsMapOpen(!1),
                    t.classList.remove("visible"),
                    z(),
                    t.style.width = 0,
                    t.style.height = 0;
                else {
                    if (getSlideData().updateIsMapOpen(!0),
                    t.classList.add("visible"),
                    t.style.width = "".concat(r.offsetWidth, "px"),
                    t.style.height = "".concat(r.offsetHeight, "px"),
                    void 0 === window.mwlInitMap)
                        return void console.error("window.mwlInitMap is not defined. Please check that you have included the map script in your page.");
                    window.mwlInitMap(e, i)
                }
            }
              , N = function(t) {
                resetZoom(),
                z(),
                getSlideData().updateCurrentIndex(t)
            }
              , M = function() {
                var t = (getSlideData()).currentIndex - 1;
                L ? 0 == (getSlideData()).currentIndex - (getSlideData()).currentSeparatedIndexDifference && (t = (getSlideData()).imagesNumber + (getSlideData()).currentSeparatedIndexDifference - 1) : 0 == (getSlideData()).currentIndex && (t = (getSlideData()).images.length - 1);
                N(t)
            }
              , j = function(t) {
                var e = null == t ? (getSlideData()).currentIndex : t
                  , a = e + 1;
                L ? e - (getSlideData()).currentSeparatedIndexDifference + 1 >= (getSlideData()).imagesNumber && (a = (getSlideData()).currentSeparatedIndexDifference) : e >= (getSlideData()).images.length - 1 && (a = 0);
                return N(a),
                a
            }
              , D = Ut(Et(!1), 2)
              , T = D[0]
              , H = D[1]
              , U = Ut(Et({
                x: 0,
                y: 0
            }), 2)
              , F = U[0]
              , q = U[1]
              , V = Ut(Et({
                x: 0,
                y: 0
            }), 2)
              , W = V[0]
              , Y = V[1]
              , Z = Ut(Et({
                x: 0,
                y: 0
            }), 2)
              , G = Z[0]
              , R = Z[1]
              , X = ""
              , $ = function(t) {
                var e = t.target ? t.target : t;
                e.classList.contains("zoomed") && (e.classList.remove("zoomed"),
                e.style.transform = "translate3d(0,0,0) scale(1)",
                e.style.cursor = "zoom-in")
            }
              , K = Ut(Et(0), 2)
              , J = K[0]
              , Q = K[1]
              , tt = Ut(Et({
                x: 0,
                y: 0
            }), 2)
              , et = tt[0]
              , nt = tt[1]
              , rt = Ut(Et({
                x: 0,
                y: 0
            }), 2)
              , it = rt[0]
              , ot = rt[1]
              , at = function t(e) {
                return e.classList.contains("mwl__slider") ? e : t(e.parentNode)
            }
              , st = 0
              , lt = function(t) {
                return getSlideData().updateCurrentUrl(t)
            }
              , ct = function() {
                return function() {
                    var t = function() {
                        document.querySelector("body").classList.remove("no-scroll");
                        var t = !1;
                        resetZoom(),
                        z(),
                        resetAutoplay(),
                        getSlideData().updateIsPlaying(!1),
                        getSlideData().updateIsMapOpen(!1),
                        getSlideData().updateCurrentIndex(t),
                        (getSlideData()).mwlElement.classList.remove("visible"),
                        lt(t)
                    };
                    if ("zoom_in_out" === mwl_settings.settings.animation_toggle) {
                        var n = document.querySelector('.mwl__slider__image[data-index="'.concat((getSlideData()).currentIndex, '"] > .mwl__slider__image__thumbnail > img.landscape'));
                        n = null == n ? document.querySelector('.mwl__slider__image[data-index="'.concat((getSlideData()).currentIndex, '"] > .mwl__slider__image__thumbnail > img')) : n,
                        $(n),
                        requestAnimationFrame((function() {
                            Rt({
                                isOpening: false,
                                _img: n,
                                _img_dest: document.querySelector('.mwl-img[mwl-index="'.concat((getSlideData()).currentIndex, '"]')),
                                lightbox: (getSlideData()).mwlElement,
                                rectCreated: false
                            }).then((function() {
                                t()
                            }
                            ))
                        }
                        ))
                    } else
                        t()
                }()
            }
              , ut = function() {
                return M()
            }
              , pt = function() {
                return j()
            }
              , dt = function(t) {
                !function(t) {
                    t.stopPropagation()
                }(t)
            };
            return {
                onCloseClick: ct,
                onFullscreenClick: function() {
                    return (getSlideData()).mwlElement.classList.add("extended"),
                    document.querySelector(".visible > .mwl__slider__image__thumbnail").classList.add("mwl__full__screen"),
                    getSlideData().updateIsExtended(!0),
                    document.querySelector(".mwl__topbar__controls__control--fullscreen").classList.add("hidden"),
                    void document.querySelector(".mwl__topbar__controls__control--shrink").classList.remove("hidden")
                },
                onShrinkClick: function() {
                    return (getSlideData()).mwlElement.classList.remove("extended"),
                    document.querySelector(".visible > .mwl__slider__image__thumbnail").classList.remove("mwl__full__screen"),
                    getSlideData().updateIsExtended(!1),
                    document.querySelector(".mwl__topbar__controls__control--fullscreen").classList.remove("hidden"),
                    void document.querySelector(".mwl__topbar__controls__control--shrink").classList.add("hidden")
                },
                onPlayClick: function() {
                    !function() {
                        var t = document.querySelector(".mwl__topbar__controls__control--play")
                          , e = document.querySelector(".mwl__topbar__controls__control--pause");
                        if (t && e) {
                            t.classList.add("hidden"),
                            e.classList.remove("hidden");
                            var n = (getSlideData()).currentIndex
                              , r = setInterval((function() {
                                n = j(n)
                            }
                            ), ({
                                      enabled: mwl_settings.settings.slideshow.enabled,
                                      slide_duration: mwl_settings.settings.slideshow.timer
                                  }).slide_duration);
                            getSlideData().updateAutoplayInterval(r)
                        }
                    }(),
                    getSlideData().updateIsPlaying(!0)
                },
                onPauseClick: function() {
                    resetAutoplay(),
                    getSlideData().updateIsPlaying(!1)
                },
                onMapClick: function() {
                    return P()
                },
                onDownloadClick: function() {
                    return t = (getSlideData()).images[(getSlideData()).currentIndex].download_link,
                    (e = document.createElement("a")).href = t,
                    e.download = t.split(/[\\/]/).pop(),
                    document.body.appendChild(e),
                    void e.click();
                    var t, e
                },
                onPrevClick: ut,
                onNextClick: pt,
                onImageClick: function(t) {
                    t.stopPropagation(),
                    function(t) {
                        var e = t.target;
                        if ((mwl_settings.settings.preloading,
                            mwl_settings.settings.magnification) && e && !e.classList.contains("swiping"))
                            if (e.classList.contains("zoomed"))
                                t.clientX === W.x && t.clientY === W.y && $(t);
                            else {
                                e.classList.add("zoomed");
                                var n = e.getBoundingClientRect()
                                  , r = n.left
                                  , i = n.top
                                  , o = t.clientX - (r + n.width / 2)
                                  , a = t.clientY - (i + n.height / 2)
                                  , s = o - 2 * o
                                  , l = a - 2 * a;
                                e.style.transform = "translate3d(".concat(s, "px, ").concat(l, "px, 0)"),
                                e.style.cursor = "grab",
                                ot({
                                    x: s,
                                    y: l
                                }),
                                R({
                                    x: s,
                                    y: l
                                })
                            }
                    }(t)
                },
                onImageMouseDown: function(t) {
                    t.preventDefault();
                    var e = t.target;
                    e.classList.contains("zoomed") && (Y({
                        x: t.clientX,
                        y: t.clientY
                    }),
                    q({
                        x: t.clientX - G.x,
                        y: t.clientY - G.y
                    }),
                    H(!0),
                    X = e.style.transition,
                    e.style.transition = "none",
                    e.style.cursor = "grabbing")
                },
                onImageMouseMove: function(t) {
                    t.preventDefault();
                    var e = t.target;
                    if (e.classList.contains("zoomed") && T) {
                        var n = F.x
                          , r = F.y
                          , i = t.clientX - n
                          , o = t.clientY - r;
                        e.style.transform = "translate3d(".concat(i, "px, ").concat(o, "px, 0)"),
                        R({
                            x: i,
                            y: o
                        })
                    }
                },
                onImageMouseUp: function(t) {
                    t.preventDefault();
                    var e = t.target;
                    e.classList.contains("zoomed") && (H(!1),
                    e.style.transition = X,
                    e.style.cursor = "grab")
                },
                onTouchStart: function(t) {
                    !function(t) {
                        var e;
                        if (Q(0),
                        !((getSlideData()).images.length < 2)) {
                            t.target,
                            nt({
                                x: t.touches[0].clientX - it.x,
                                y: t.touches[0].clientY - it.y
                            });
                            var r = t.touches[0].clientX;
                            (Ut(Et(0), 2))[1](r),
                            (Ut(Et(0), 2))[1](r),
                            C[1](null !== (e = at(t.target).style.transform.match(/(\-?[0-9]*%)/)[0]) && void 0 !== e ? e : 0)
                        }
                    }(t)
                },
                onTouchMove: function(t) {
                    !function(t) {
                        t.preventDefault();
                        var e = t.target;
                        if (e.classList.contains("zoomed") && (st = 400,
                        X = e.style.transition,
                        e.style.transition = "none"),
                        2 != t.touches.length) {
                            if (e.classList.contains("zoomed")) {
                                var r = et.x
                                  , i = et.y
                                  , o = t.touches[0].clientX - r
                                  , a = t.touches[0].clientY - i;
                                return e.style.transform = "translate3d(".concat(o, "px, ").concat(a, "px, 0) scale(").concat(st / 200, ")"),
                                void ot({
                                    x: o,
                                    y: a
                                })
                            }
                            var s = t.touches[0].clientX
                              , l = s - (Ut(Et(0), 2))[0];
                            if ((Ut(Et(0), 2))[1](s),
                            Q(J + 1),
                            !((getSlideData()).images.length < 2) && Math.abs(l) > 2) {
                                var c = at(t.target);
                                c.classList.remove("mwl-animate"),
                                c.style.transition = "none",
                                c.style.transform = "translate3d(calc(".concat(C[0], " + ").concat(l, "px), 0px, 0px)")
                            }
                        } else {
                            var u = t.touches[0]
                              , p = t.touches[1];
                            (st = Math.sqrt(Math.pow(u.clientX - p.clientX, 2) + Math.pow(u.clientY - p.clientY, 2))) < 200 ? (e.style.transform = "scale(1)",
                            e.style.transition = X,
                            e.classList.remove("zoomed")) : (e.style.transform = "scale(".concat(st / 200, ")"),
                            e.classList.add("zoomed"))
                        }
                    }(t)
                },
                onTouchEnd: function(t) {
                    !function(t) {
                        if (!((getSlideData()).images.length < 2)) {
                            var e = (Ut(Et(0), 2))[0] - (Ut(Et(0), 2))[0]
                              , r = at(t.target);
                            r.classList.add("mwl-animate");
                            var i = J > 2 && J < 20;
                            Math.abs(e) < 200 && !i ? (r.style.transition = "transform 0.3s ease",
                            r.style.transform = "translate3d(".concat(C[0], ", 0px, 0px)")) : e > 0 ? M() : j()
                        }
                    }(t)
                },
                onContextMenu: function(t) {
                    !function(t) {
                        mwl_settings.settings.right_click_protection && t.preventDefault()
                    }(t)
                },
                onKeyDown: function(t) {
                    if ((getSlideData()).image)
                        switch (t.key) {
                        case "Escape":
                            ct();
                            break;
                        case "ArrowLeft":
                            ut();
                            break;
                        case "ArrowRight":
                            pt();
                            break;
                        default:
                            return
                        }
                },
                onClickOnMap: dt
            }
        };
        var $t = 0;
        Array.isArray;
        function createNode(componentType, inputProps, key, __, source, self) {
            inputProps || (inputProps = {});
            var ref, propName, finalProps = inputProps;
            if ("ref"in finalProps)
                for (propName in finalProps = {},
                inputProps)
                    "ref" == propName ? ref = inputProps[propName] : finalProps[propName] = inputProps[propName];
            var vNode = {
                type: componentType,
                props: finalProps,
                key: key,
                ref: ref,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                constructor: void 0,
                __v: --$t,
                __i: -1,
                __u: 0,
                __source: source,
                __self: self
            };
            if ("function" == typeof componentType && (ref = componentType.defaultProps))
                for (propName in ref)
                    void 0 === finalProps[propName] && (finalProps[propName] = ref[propName]);
            return globalHooks.vnode && globalHooks.vnode(vNode),
            vNode
        }

        function getType(value) {
            return getType = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(value) {
                return typeof value
            }
            : function(value) {
                return value && "function" == typeof Symbol && value.constructor === Symbol && value !== Symbol.prototype ? "symbol" : typeof value
            }
            ,
            getType(value)
        }

        function te(t) {
            return function(t) {
                if (Array.isArray(t))
                    return copyElements(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                    return Array.from(t)
            }(t) || re(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function ee(t, e, n, r, i, o, a) {
            try {
                var s = t[o](a)
                  , l = s.value
            } catch (t) {
                return void n(t)
            }
            s.done ? e(l) : Promise.resolve(l).then(r, i)
        }

        function ne(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                var iteratorSybol = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != iteratorSybol) {
                    var r, i, o, a, s = [], l = !0, c = !1;
                    try {
                        if (o = (iteratorSybol = iteratorSybol.call(t)).next,
                        0 === e) {
                            if (Object(iteratorSybol) !== iteratorSybol)
                                return;
                            l = !1
                        } else
                            for (; !(l = (r = o.call(iteratorSybol)).done) && (s.push(r.value),
                            s.length !== e); l = !0)
                                ;
                    } catch (t) {
                        c = !0,
                        i = t
                    } finally {
                        try {
                            if (!l && null != iteratorSybol.return && (a = iteratorSybol.return(),
                            Object(a) !== a))
                                return
                        } finally {
                            if (c)
                                throw i
                        }
                    }
                    return s
                }
            }(t, e) || re(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function re(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return copyElements(t, e);
                var n = {}.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? copyElements(t, e) : void 0
            }
        }
        function getPropertyKeys(targetObject, includeSymbols) {
            var keys = Object.keys(targetObject);
            if (Object.getOwnPropertySymbols) {
                var symbolKeys = Object.getOwnPropertySymbols(targetObject);
                includeSymbols && (symbolKeys = symbolKeys.filter((function(symbol) {
                    return Object.getOwnPropertyDescriptor(targetObject, symbol).enumerable
                }
                ))),
                keys.push.apply(keys, symbolKeys)
            }
            return keys
        }
        function mergeObjects(targetObject) {
            for (var i = 1; i < arguments.length; i++) {
                var n = null != arguments[i] ? arguments[i] : {};
                i % 2 ? getPropertyKeys(Object(n), !0).forEach((function(e) {
                    setProperty(targetObject, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(targetObject, Object.getOwnPropertyDescriptors(n)) : getPropertyKeys(Object(n)).forEach((function(e) {
                    Object.defineProperty(targetObject, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return targetObject
        }
        function setProperty(targetObject, propertyKey, value) {
            return (propertyKey = function(key) {
                var e = function(t, e) {
                    if ("object" != getType(t) || !t)
                        return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != getType(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(key, "string");
                return "symbol" == getType(e) ? e : e + ""
            }(propertyKey))in targetObject ? Object.defineProperty(targetObject, propertyKey, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : targetObject[propertyKey] = value,
            targetObject
        }
        var mapThingy = ".leaflet-tile, .leaflet-google-mutant";
        var ce = function(t) {
            if (!isNaN(parseFloat(t)) && isFinite(t))
                return window.location.hash = "mwl-" + t,
                window.location.href
        };
        var ue = function() {
            history.pushState("", document.title, window.location.pathname + window.location.search)
        }
        var pe = {
            image: void 0,
            images: [],
            imagesNumber: 0,
            currentIndex: void 0,
            currentSeparatedIndexDifference: 0,
            autoplayInterval: void 0,
            currentUrl: !1,
            mwlElement: void 0,
            isExtended: !1,
            isPlaying: !1,
            isMapOpen: !1,
            postLoaded: !1,
            animatedSlide: !1,
            initialized: !1
        };
        var xe = function(t, e) {
            switch (e.type) {
            case "SET_IMAGES":
                var n = e.images;
                return mergeObjects(mergeObjects({}, t), {}, {
                    images: n
                });
            case "SET_IMAGES_NUMBER":
                var r = e.imagesNumber;
                return mergeObjects(mergeObjects({}, t), {}, {
                    imagesNumber: r
                });
            case "SET_MWL_ELEMENT":
                var i = e.mwlElement;
                return mergeObjects(mergeObjects({}, t), {}, {
                    mwlElement: i
                });
            case "CURRENT_SEPARATED_INDEX_DIFFERENCE_UPDATED":
                var o = e.currentSeparatedIndexDifference;
                return mergeObjects(mergeObjects({}, t), {}, {
                    currentSeparatedIndexDifference: o
                });
            case "CURRENT_INDEX_UPDATED":
                var a = e.currentIndex
                  , s = e.animatedSlide
                  , l = void 0 !== s && s
                  , c = isNaN(a) ? void 0 : t.images[a]
                  , u = t.currentUrl;
                return t.images.length > 0 && (mwl_settings.settings.wordpress_big_image,
                    mwl_settings.settings.deep_linking) && (!1 === a ? ue() : u = ce(t.images[a].id)),
                mergeObjects(mergeObjects({}, t), {}, {
                    currentIndex: a,
                    image: c,
                    currentUrl: u,
                    animatedSlide: l
                });
            case "AUTOPLAY_INTERVAL_UPDATED":
                var p = e.autoplayInterval;
                return mergeObjects(mergeObjects({}, t), {}, {
                    autoplayInterval: p
                });
            case "CURRENT_URL_UPDATED":
                var d = e.currentUrl;
                return mergeObjects(mergeObjects({}, t), {}, {
                    currentUrl: d
                });
            case "IS_EXTENDED_UPDATED":
                var h = e.isExtended;
                return mergeObjects(mergeObjects({}, t), {}, {
                    isExtended: h
                });
            case "IS_PLAYING_UPDATED":
                var f = e.isPlaying;
                return mergeObjects(mergeObjects({}, t), {}, {
                    isPlaying: f
                });
            case "IS_MAP_OPEN_UPDATED":
                var m = e.isMapOpen;
                return mergeObjects(mergeObjects({}, t), {}, {
                    isMapOpen: m
                });
            case "POST_LOADED_UPDATED":
                var _ = e.postLoaded;
                return mergeObjects(mergeObjects({}, t), {}, {
                    postLoaded: _
                });
            case "SET_INITIALIZED":
                var v = e.initialized;
                return mergeObjects(mergeObjects({}, t), {}, {
                    initialized: v
                });
            default:
                return t
            }
        }
          , Ee = function(t, e) {
            var n = {
                __c: e = "__cC" + p++,
                __: t,
                Consumer: function(t, e) {
                    return t.children(e)
                },
                Provider: function(t) {
                    var n, r;
                    return this.getChildContext || (n = [],
                    (r = {})[e] = this,
                    this.getChildContext = function() {
                        return r
                    }
                    ,
                    this.shouldComponentUpdate = function(t) {
                        this.props.value !== t.value && n.some((function(t) {
                            t.__e = !0,
                            scheduleUpdate(t)
                        }
                        ))
                    }
                    ,
                    this.sub = function(t) {
                        n.push(t);
                        var e = t.componentWillUnmount;
                        t.componentWillUnmount = function() {
                            n.splice(n.indexOf(t), 1),
                            e && e.call(t)
                        }
                    }
                    ),
                    t.children
                }
            };
            return n.Provider.__ = n.Consumer.contextType = n
        }()
          , Se = function(t) {
            var e = t.children
              , n = t.infiniteScrollableGalleries
              , r = ne(St(xe, mergeObjects({}, pe)), 2)
              , i = r[0]
              , o = r[1]
              , a = i.currentIndex
              , s = i.images
              , l = i.mwlElement
              , c = i.postLoaded
              , u = i.initialized
              , p = null != mwl_settings.settings.separate_galleries && mwl_settings.settings.separate_galleries
              , d = "zoom_in_out" === mwl_settings.settings.animation_toggle
              , h = zt((function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = document.querySelector(".mwl")
                  , n = e.classList.contains("visible");
                if (n || e.classList.add("visible"),
                e.setAttribute("data-index", t),
                d && !n) {
                    var r = document.querySelector('.mwl-img[mwl-index="'.concat(t, '"]'))
                      , i = document.querySelector('.mwl__slider__image[data-index="'.concat(t, '"] > .mwl__slider__image__thumbnail > img.landscape'));
                    i = null == i ? document.querySelector('.mwl__slider__image[data-index="'.concat(t, '"] > .mwl__slider__image__thumbnail > img')) : i,
                    requestAnimationFrame((function() {
                        i.complete ? Rt({
                            isOpening: !0,
                            _img: r,
                            _img_dest: i,
                            lightbox: e
                        }) : i.onload = function() {
                            Rt({
                                isOpening: !0,
                                _img: r,
                                _img_dest: i,
                                lightbox: e
                            })
                        }
                    }
                    ))
                }
                var o = document.querySelector("body");
                o.classList.contains("no-scroll") || (o.classList.add("no-scroll"),
                e.addEventListener("wheel", (function(t) {
                    t.target.closest(".caption-wrapper") || (t.preventDefault(),
                    t.stopPropagation())
                }
                ), {
                    passive: !1
                }))
            }
            ), [])
              , f = zt((function() {
                var t = document.querySelectorAll(".mwl-img");
                t.forEach((function(e) {
                    e.onclick = function(n) {
                        if (!e.classList.contains("mwl-img-disabled")) {
                            n.preventDefault();
                            var r = e.closest(mwl_settings.settings.selector);
                            if (p && null != r) {
                                var i = r.querySelectorAll(".mwl-img");
                                o({
                                    type: "SET_IMAGES_NUMBER",
                                    imagesNumber: i.length
                                });
                                var a = parseInt(e.getAttribute("mwl-index"))
                                  , s = a - parseInt(e.getAttribute("mwl-index-relative"));
                                o({
                                    type: "CURRENT_SEPARATED_INDEX_DIFFERENCE_UPDATED",
                                    currentSeparatedIndexDifference: s
                                }),
                                o({
                                    type: "CURRENT_INDEX_UPDATED",
                                    currentIndex: a,
                                    animatedSlide: !1
                                })
                            } else {
                                var l = parseInt(e.getAttribute("mwl-index"));
                                p && (o({
                                    type: "SET_IMAGES_NUMBER",
                                    imagesNumber: t.length
                                }),
                                o({
                                    type: "CURRENT_SEPARATED_INDEX_DIFFERENCE_UPDATED",
                                    currentSeparatedIndexDifference: 0
                                })),
                                o({
                                    type: "CURRENT_INDEX_UPDATED",
                                    currentIndex: l,
                                    animatedSlide: !1
                                })
                            }
                        }
                    }
                }
                )),
                l || o({
                    type: "SET_MWL_ELEMENT",
                    mwlElement: document.querySelector(".mwl")
                }),
                document.querySelector(".mwl").classList.contains("visible") && h(a)
            }
            ), []);
            return updateStateIfChanged((function() {
                var t = function() {
                    var t = function(t) {
                        return function() {
                            var e = this
                              , n = arguments;
                            return new Promise((function(r, i) {
                                var o = t.apply(e, n);
                                function a(t) {
                                    ee(o, r, i, a, s, "next", t)
                                }
                                function s(t) {
                                    ee(o, r, i, a, s, "throw", t)
                                }
                                a(void 0)
                            }
                            ))
                        }
                    }(regeneratorRuntime().mark((function t() {
                        var e, n, r, i, a, s, l;
                        return regeneratorRuntime().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Yt();
                                case 2:
                                    e = t.sent,
                                    n = [].concat(te(Zt()), te(Gt())),
                                    o({
                                        type: "SET_IMAGES_NUMBER",
                                        imagesNumber: e
                                    }),
                                    o({
                                        type: "SET_IMAGES",
                                        images: n
                                    }),
                                    -1 != (r = navigator.userAgent.toLowerCase()).indexOf("safari") && (r.indexOf("chrome") > -1 || document.querySelector(".mwl").classList.add("safari-browser")),
                                    window.location.href.indexOf("#mwl-") > 0 && (i = window.location.href.match(/(#mwl-)([0-9])+/gm),
                                    a = parseInt(i[0].match(/([0-9])+/gm)[0]),
                                    s = Zt(),
                                    l = s.findIndex((function(t) {
                                        return t.id === a
                                    }
                                    )),
                                    -1 !== l && o({
                                        type: "CURRENT_INDEX_UPDATED",
                                        currentIndex: l,
                                        animatedSlide: !1
                                    })),
                                    f(),
                                    o({
                                        type: "SET_INITIALIZED",
                                        initialized: !0
                                    });
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();
                t()
            }
            ), []),
            updateStateIfChanged((function() {
                var t = function() {
                    return o({
                        type: "POST_LOADED_UPDATED",
                        postLoaded: !0
                    })
                };
                return document.body.addEventListener("post-load", t, !1),
                function() {
                    return document.body.removeEventListener("post-load", t, !1)
                }
            }
            ), []),
            updateStateIfChanged((function() {
                if (n.length > 0) {
                    var t, e = {
                        childList: !0
                    }, r = new MutationObserver((function() {
                        o({
                            type: "SET_IMAGES_NUMBER",
                            imagesNumber: Wt()
                        }),
                        o({
                            type: "SET_IMAGES",
                            images: Zt()
                        }),
                        f()
                    }
                    )), i = function(t, e) {
                        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (!n) {
                            if (Array.isArray(t) || (n = re(t)) || e && t && "number" == typeof t.length) {
                                n && (t = n);
                                var r = 0
                                  , i = function() {};
                                return {
                                    s: i,
                                    n: function() {
                                        return r >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[r++]
                                        }
                                    },
                                    e: function(t) {
                                        throw t
                                    },
                                    f: i
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, a = !0, s = !1;
                        return {
                            s: function() {
                                n = n.call(t)
                            },
                            n: function() {
                                var t = n.next();
                                return a = t.done,
                                t
                            },
                            e: function(t) {
                                s = !0,
                                o = t
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (s)
                                        throw o
                                }
                            }
                        }
                    }(n);
                    try {
                        for (i.s(); !(t = i.n()).done; ) {
                            var a = t.value;
                            r.observe(a, e)
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                    return function() {
                        return r.disconnect()
                    }
                }
            }
            ), []),
            updateStateIfChanged((function() {
                Number.isInteger(a) && h(a)
            }
            ), [a, h]),
            updateStateIfChanged((function() {
                if (u && (c || !s.length)) {
                    var t = Zt();
                    (function(t, e) {
                        if (e.length !== t.length)
                            return !0;
                        var n = t.map((function(t) {
                            return t.id
                        }
                        ));
                        return e.some((function(t) {
                            return !n.includes(t.id)
                        }
                        ))
                    }
                    )(s, t) && (f(),
                    o({
                        type: "SET_IMAGES_NUMBER",
                        imagesNumber: Yt()
                    }),
                    o({
                        type: "SET_IMAGES",
                        images: t
                    })),
                    c && o({
                        type: "POST_LOADED_UPDATED",
                        postLoaded: !1
                    })
                }
            }
            ), [s, c, u]),
            createNode(Ee.Provider, {
                value: [i, o],
                children: e
            })
        };
        
        function getSlideData() {
            // Store data
            let slideData = {};
        
            /**
             * Generates a state object based on a context.
             * @param {Object} context The context to generate state for.
             * @returns {Object} The generated state object.
             */
            const generateSlideState = function(context) {
                let contextObj = pt.context[context.__c];
                let stateId = generateStateId(ut++, 9);
        
                stateId.c = context;
        
                if (contextObj) {
                    // Subscribe to context if not already done
                    if (stateId.__ === undefined) {
                        stateId.__ = true;
                        contextObj.sub(pt);
                    }
                    return contextObj.props.value;
                } else {
                    return context.__;
                }
            };
        
            // Generate slide state from context
            const [slideDataObj, slideStateUpdater] = ne(generateSlideState(Ee), 2);
            const { images } = slideDataObj;
        
            // Update current index of the slide
            slideData.updateCurrentIndex = function(index) {
                slideStateUpdater({
                    type: "CURRENT_INDEX_UPDATED",
                    currentIndex: index,
                    animatedSlide: true
                });
            };
        
            // Update autoplay interval
            slideData.updateAutoplayInterval = function(interval) {
                slideStateUpdater({
                    type: "AUTOPLAY_INTERVAL_UPDATED",
                    autoplayInterval: interval
                });
            };
        
            // Update the current URL of the slide
            slideData.updateCurrentUrl = function(slideIndex) {
                if (images.length > 0 && mwl_settings.settings.wordpress_big_image &&
                    mwl_settings.settings.deep_linking) {
        
                    if (slideIndex === false) {
                        ue();
                    } else {
                        let currentUrl = ce(images[slideIndex].id);
                        slideStateUpdater({
                            type: "CURRENT_URL_UPDATED",
                            currentUrl: currentUrl
                        });
                    }
                }
            };
        
            // Update whether the slide is extended
            slideData.updateIsExtended = function(isExtended) {
                slideStateUpdater({
                    type: "IS_EXTENDED_UPDATED",
                    isExtended: isExtended
                });
            };
        
            // Update whether the slide is playing
            slideData.updateIsPlaying = function(isPlaying) {
                slideStateUpdater({
                    type: "IS_PLAYING_UPDATED",
                    isPlaying: isPlaying
                });
            };
        
            // Update whether the map is open
            slideData.updateIsMapOpen = function(isMapOpen) {
                slideStateUpdater({
                    type: "IS_MAP_OPEN_UPDATED",
                    isMapOpen: isMapOpen
                });
            };
        
            // Merge updated slide data and the existing state
            return mergeObjects(mergeObjects({}, slideDataObj), slideData);
        };

        
        var getSvgIconMap = function(t) {
            var icon = t.icon;
            return {
                close: createNode("svg", {
                    style: "width:24px;height:24px",
                    viewBox: "0 0 24 24",
                    children: createNode("path", {
                        fill: "#000000",
                        d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                    })
                }),
                fullscreen: createNode("svg", {
                    style: "width:24px;height:24px",
                    viewBox: "0 0 24 24",
                    children: createNode("path", {
                        fill: "#000000",
                        d: "M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"
                    })
                }),
                shrink: createNode("svg", {
                    style: "width:24px;height:24px",
                    viewBox: "0 0 24 24",
                    children: createNode("path", {
                        fill: "#000000",
                        d: "M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z"
                    })
                }),
                play: createNode("svg", {
                    style: "width:24px;height:24px",
                    viewBox: "0 0 24 24",
                    children: createNode("path", {
                        fill: "#000000",
                        d: "M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,8V16L15,12L10,8Z"
                    })
                }),
                pause: createNode("svg", {
                    style: "width:24px;height:24px",
                    viewBox: "0 0 24 24",
                    children: createNode("path", {
                        fill: "#000000",
                        d: "M14,19H18V5H14M6,19H10V5H6V19Z"
                    })
                }),
                map: createNode("svg", {
                    style: "width:24px;height:24px",
                    viewBox: "0 0 24 24",
                    children: createNode("path", {
                        fill: "#000000",
                        d: "M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z"
                    })
                }),
                image: createNode("svg", {
                    style: "width:24px;height:24px",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    children: createNode("path", {
                        fill: "#000000",
                        d: "M20 5H4v14l9.292-9.294a1 1 0 0 1 1.415 0L20 15.01zM2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM8 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4"
                    })
                }),
                download: createNode("svg", {
                    style: "width:24px;height:24px;",
                    viewBox: "0 0 24 24",
                    children: createNode("path", {
                        d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"
                    })
                }),
                sharing: createNode("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    style: "width:24px;height:24px",
                    viewBox: "0 0 24 24",
                    children: createNode("path", {
                        d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
                    })
                }),
                arrow_left: createNode("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    children: createNode("path", {
                        d: "M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"
                    })
                }),
                arrow_right: createNode("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    children: createNode("path", {
                        d: "M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"
                    })
                }),
                location: createNode("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    children: createNode("path", {
                        d: "M6 2v2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H8V2H6zm14 6H4v12h16V8zm-6 5h4v4h-4v-4z"
                    })
                }),
                registration: createNode("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    children: createNode("path", {
                        d: "M6 2v2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H8V2H6zm14 6H4v12h16V8zm-6 5h4v4h-4v-4z"
                    })
                }),
                aircraft: createNode("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    children: createNode("path", {
                        d: "M6 2v2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H8V2H6zm14 6H4v12h16V8zm-6 5h4v4h-4v-4z"
                    })
                }),
                source: createNode("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    children: createNode("path", {
                        d: "M6 2v2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H8V2H6zm14 6H4v12h16V8zm-6 5h4v4h-4v-4z"
                    })
                }),
                date_taken: createNode("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    children: createNode("path", {
                        d: "M6 2v2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H8V2H6zm14 6H4v12h16V8zm-6 5h4v4h-4v-4z"
                    })
                }),
                persons: createNode("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    children: createNode("path", {
                        d: "M6 2v2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H8V2H6zm14 6H4v12h16V8zm-6 5h4v4h-4v-4z"
                    })
                }),
                unit: createNode("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    children: createNode("path", {
                        d: "M6 2v2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H8V2H6zm14 6H4v12h16V8zm-6 5h4v4h-4v-4z"
                    })
                })


            }[icon]
        };
        function Be(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != n) {
                    var r, i, o, a, s = [], l = !0, c = !1;
                    try {
                        if (o = (n = n.call(t)).next,
                        0 === e) {
                            if (Object(n) !== n)
                                return;
                            l = !1
                        } else
                            for (; !(l = (r = o.call(n)).done) && (s.push(r.value),
                            s.length !== e); l = !0)
                                ;
                    } catch (t) {
                        c = !0,
                        i = t
                    } finally {
                        try {
                            if (!l && null != n.return && (a = n.return(),
                            Object(a) !== a))
                                return
                        } finally {
                            if (c)
                                throw i
                        }
                    }
                    return s
                }
            }(t, e) || function(t, e) {
                if (t) {
                    if ("string" == typeof t)
                        return copyElements(t, e);
                    var n = {}.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? copyElements(t, e) : void 0
                }
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        /**
         * Returns a shallow copy of the first `count` elements from the input array.
         * If `count` is null or greater than the array's length, it copies the entire array.
         *
         * @param {Array} inputArray - The array to copy elements from.
         * @param {number} count - The number of elements to copy.
         * @returns {Array} A new array containing the copied elements.
         */
        function copyElements(inputArray, count) {
            (null == count || count > inputArray.length) && (count = inputArray.length);
            for (var i = 0, r = Array(count); i < count; i++)
                r[i] = inputArray[i];
            return r
        }

        /**
         * creates the image caption element
         * @param {Object} props - The component props.
         * @param {Object} props.image - The image object containing metadata and caption info.
         * @returns {JSX.Element|null} A JSX element containing the caption, or null if not applicable.
         */
        var getDescription = function(props) {
            var description = props.image.caption || (props.image.meta && props.image.meta.caption);

            if (!(mwl_settings.settings.exif.caption && description)) return null;

            return createNode(getChildren, {
                children: createNode("div", {
                    className: "description visible",
                    children: createNode("div", {
                        className: "caption-wrapper",
                        children: createNode("span", {
                            className: "caption",
                            dangerouslySetInnerHTML: { __html: description }
                        })
                    })
                })
            });
        };

        /**
         * Creates an Advanced Custom Fields element
         * 
         * @param {Object} afcData - An object containing image data.
         * @returns {JSX.Element|null} A heading element with the acd data, or null if not available or disabled.
         */
        function createAFCElement(afcData) {
            return createNode("div", {
                className: "afc",
                children: [createNode(getSvgIconMap, {
                    icon: afcData.icon
                }), createNode("span", {
                    children: ["  ", (afcData.name, afcData.value)]
                })]
            })
        }

        /**
         * Creates a title element (`<h2>`) from the image's EXIF or meta title,
         * if the title exists and is enabled in the settings.
         * 
         * @param {Object} props - An object containing image data.
         * @returns {JSX.Element|null} A heading element with the title, or null if not available or disabled.
         */
        function createTitle(props) {
            // Try to get the title from EXIF data or metadata
            var titleText = props.image.exifs?.title || props.image.meta?.title;

            // Return an <h2> element with the title, or null if not visible
            if (titleText && mwl_settings.settings.exif.title) {
                createNode("h2", {dangerouslySetInnerHTML: { __html: titleText }})
            }
            return null
        }

        /**
         * Assigns a property to an object using a given key and value.
         * If the key already exists, defines it with standard attributes.
         * Converts the key to a string unless it's a symbol.
         *
         * @param {Object} obj - The target object.
         * @param {any} key - The property key (converted to string unless a symbol).
         * @param {any} value - The value to assign.
         * @returns {Object} - The updated object.
         */
        function setProperty(obj, key, value) {
            const stringKey = typeof key === 'symbol' ? key : String(key);
            if (stringKey in obj) {
                Object.defineProperty(obj, stringKey, {
                    value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[stringKey] = value;
            }
            return obj;
        }


        var createMetadata = function(props) {
            var imageData = getSlideData().image
            if (!imageData) {
                return null
            }
            var acfItems = [
                {
                    name: "Aircraft",
                    icon: "aircraft",
                    value: imageData?.exifs?.camera,
                    visible: imageData?.exifs?.camera !== "N/A" && mwl_settings.settings.exif.camera
                },
                {
                    name: "Date Taken",
                    icon: "date",
                    value: imageData?.exifs?.lens,
                    visible: imageData?.exifs?.lens !== "N/A" && mwl_settings.settings.exif.lens
                },
                {
                    name: "Location",
                    icon: "location",
                    value: imageData?.exifs?.focal_length,
                    visible: imageData?.exifs?.focal_length !== "N/A" && mwl_settings.settings.exif.focal_length
                },
                {
                    name: "Unit",
                    icon: "unit",
                    value: imageData?.exifs?.shutter_speed,
                    visible: imageData?.exifs?.shutter_speed !== "N/A" && mwl_settings.settings.exif.shutter_speed
                },
                {
                    name: "Registration",
                    icon: "registration",
                    value: imageData?.exifs?.aperture,
                    visible: imageData?.exifs?.aperture !== "N/A" && mwl_settings.settings.exif.aperture
                },
                {
                    name: "Persons",
                    icon: "persons",
                    value: imageData?.exifs?.iso,
                    visible: imageData?.exifs?.iso !== "N/A" && mwl_settings.settings.exif.iso
                },
                {
                    name: "Source",
                    icon: "source",
                    value: imageData?.exifs?.date,
                    visible: imageData?.exifs?.date !== "N/A" && imageData?.exifs?.date !== 0 && mwl_settings.settings.exif.date
                }
            ];
            
            return createNode("div", {
                className: props.className,
                children: [
                    createNode(createTitle, {
                    image: imageData
                    }), 
                    createNode(getDescription, {
                        image: imageData
                    }), 
                    createNode("div", {
                        className: "acfs",
                        onClick: getAction().onCloseClick,
                        children: acfItems.filter(afcItem => afcItem.visible)
                        .map(t => {
                            return createNode(createAFCElement, function(t) {
                                for (var i = 1; i < arguments.length; i++) {
                                    var n = null != arguments[i] ? arguments[i] : {};
                                    i % 2 ? getPropertyKeys(Object(n), !0).forEach((function(e) {
                                        assignProperty(t, e, n[e])
                                    }
                                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : getPropertyKeys(Object(n)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                    }
                                    ))
                                }
                                return t
                            }({}, t))
                        }
                        )
                    })
                ]
            })
        };

        function Ue(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? getPropertyKeys(Object(n), !0).forEach((function(e) {
                    Fe(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : getPropertyKeys(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function Fe(t, e, n) {
            return (e = function(t) {
                var e = function(t, e) {
                    if ("object" != getType(t) || !t)
                        return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != getType(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == getType(e) ? e : e + ""
            }(e))in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        var qe = function(t) {
            var e = t.image
              , n = t.isPreparing
              , r = t.onLoad
              , i = Lt()
              , o = getAction()
              , a = o.onImageClick
              , s = o.onImageMouseDown
              , l = o.onImageMouseMove
              , c = o.onImageMouseUp
              , u = o.onContextMenu;
            updateStateIfChanged((function() {
                if (n && i.current) {
                    var t = i.current;
                    return t.onload = function() {
                        r && r()
                    }
                    ,
                    t.setAttribute("src", t.dataset.src),
                    t.dataset.srcset && t.setAttribute("srcset", t.dataset.srcset),
                    t.dataset.sizes && t.setAttribute("sizes", t.dataset.sizes),
                    function() {
                        t.onload = null
                    }
                }
            }
            ), [n, r]);
            var p = {
                ref: i,
                className: "mwl__slider__image__thumbnail__high-res ".concat(e.orientation),
                "data-src": e.src,
                onClick: a,
                onMouseDown: s,
                onMouseMove: l,
                onMouseUp: c,
                onContextMenu: u,
                alt: e.title
            };
            return e.srcset && e.sizes ? createNode("img", Ue(Ue({}, p), {}, {
                "data-srcset": e.srcset,
                "data-sizes": e.sizes
            })) : createNode("img", Ue({}, p))
        };
    
        var createThumnailLowResContainer = function(t) {
            var e, image = t.image, r = t.index, i = t.isPreparing, o = Lt(), a = getAction().onContextMenu, s = Be(Et(!1), 2), l = s[0], c = s[1], u = setState((function() {
                return mwl_settings.settings.low_res_placeholder && image.dimensions.width && image.dimensions.height && i
            }
            ), [image, i]);
            return updateStateIfChanged((function() {
                var t, e;
                if ((null === (t = o.current) || void 0 === t || !t.src) && o.current && u) {
                    var i = null !== (e = image.low_res_src) && void 0 !== e ? e : document.querySelector('.mwl-img[mwl-index="'.concat(r, '"]')).currentSrc;
                    o.current.setAttribute("src", i)
                }
            }
            ), [image, r, u]),
            updateStateIfChanged((function() {
                if (o.current && !l)
                    if (u) {
                        var dimensions = image.dimensions
                          , height = dimensions.height
                          , width = dimensions.width
                          , i = o.current.parentNode
                          , a = width / height < i.offsetWidth / i.offsetHeight ? {
                            maxHeight: "".concat(height, "px"),
                            maxWidth: "".concat(width, "px"),
                            width: "auto",
                            height: "100%"
                        } : {
                            maxHeight: "".concat(height, "px"),
                            maxWidth: "".concat(width, "px"),
                            width: "100%",
                            height: "auto"
                        };
                        Object.assign(o.current.style, a),
                        c(!0)
                    } else
                        Object.assign(o.current.style, {
                            maxHeight: "none",
                            maxWidth: "none",
                            height: "auto",
                            width: "auto"
                        })
            }
            ), [l, image, u]),
            createNode("img", {
                ref: o,
                className: "mwl__slider__image__thumbnail__low-res",
                "data-src": null !== (e = image.low_res_src) && void 0 !== e ? e : "",
                onContextMenu: a,
                alt: image.title
            })
        }

        /**
         * Creates a slider component with images and various interactive actions.
         * 
         * @param {Object} props - The props object containing configuration and event handlers.
         * @returns {JSX.Element} - A div element containing the slider component.
         */
        function createSlideGallery(props) {
            var className = props.className
              , sliderRef = Lt()
              , slideData = getSlideData()
              , images = slideData.images
              , imageCount = slideData.imagesNumber
              , currentIndex = slideData.currentIndex
              , isSlideAnimated = slideData.animatedSlide
              , d = getAction().onTouchEnd
              , h = getAction().onKeyDown
              , f = getAction().onClickOnMap;
            
            var imageClass = ["mwl__slider__image__thumbnail", (mwl_settings.settings.preloading,
                      mwl_settings.settings.magnification) ? "" : "magnification_disabled"].filter((function(t) {
                return !!t
            }
            )).join(" ")
              , _ = zt((function(t) {
                return t === currentIndex || Math.abs(t - currentIndex) < 2 || 0 === currentIndex && t === imageCount - 1 || currentIndex === imageCount - 1 && 0 === t
            }
            ), [imageCount, currentIndex])
              , v = zt((function() {
                var t, e = null === (t = sliderRef.current) || void 0 === t ? void 0 : t.childNodes;
                0 !== e.length && e.forEach((function(t, e) {
                    e === currentIndex && t.classList.add("visible")
                }
                ))
            }
            ));
            return updateStateIfChanged((function() {
                return window.document.addEventListener("keydown", h, !1),
                function() {
                    return window.document.removeEventListener("keydown", h, !1)
                }
            }
            ), [h]),
            updateStateIfChanged((function() {
                var t, e = null === (t = sliderRef.current) || void 0 === t ? void 0 : t.childNodes;
                0 !== e.length && e.forEach((function(t, e) {
                    if (e === currentIndex) {
                        var n = t.querySelector(".mwl__slider__image__thumbnail__high-res");
                        mwl_settings.settings.low_res_placeholder && !n.complete || t.classList.add("visible")
                    } else
                        t.classList.remove("visible")
                }
                ))
            }
            ), [currentIndex]),
            updateStateIfChanged((function() {
                if (sliderRef.current) {
                    var t = 100 * currentIndex * (mwl_settings.settings.rtf_slider_fix ? 1 : -1);
                    sliderRef.current.style.transition = isSlideAnimated ? "transform 1s ease" : "none",
                    sliderRef.current.style.transform = "translate3d(".concat(t, "%, 0, 0)")
                }
            }
            ), [currentIndex, isSlideAnimated]),
            createNode("div", {
                ref: sliderRef,
                className: "".concat(className, " ").concat(null !== currentIndex && isSlideAnimated ? "mwl-animate" : ""),
                onTouchStart: (getAction()).onTouchStart,
                onTouchMove: (getAction()).onTouchMove,
                onTouchEnd: d,
                children: images.map((function(t, e) {
                    var n = _(e);
                    return createNode("div", {
                        className: "mwl__slider__image",
                        "data-index": e,
                        children: createNode("div", {
                            className: imageClass,
                            onClick: (getAction()).onCloseClick,
                            children: [createNode("div", {
                                className: "mwl__slider__image__thumbnail__low-res-container",
                                onClick: null,
                                children: createNode(createThumnailLowResContainer, {
                                    image: t,
                                    index: e,
                                    isPreparing: n
                                })
                            }), createNode(qe, {
                                image: t,
                                isPreparing: n,
                                onLoad: mwl_settings.settings.low_res_placeholder ? v : null
                            }), createNode("div", {
                                id: "image-map-".concat(e),
                                className: "image-map",
                                onClick: f
                            })]
                        })
                    }, t.id)
                }
                ))
            })
        }

        function getTopBarControls() {
            const slideData = getSlideData();
            const actions = getAction();
            const settings = mwl_settings.settings;
        
            const controls = [
                // Social Sharing
                {
                    visible: Boolean(settings.social_sharing),
                    icon: "sharing",
                    className: "mwl__topbar__controls__control--sharing",
                    children: slideData.currentUrl && createNode("div", {
                        className: "mwl__topbar__controls__control--sharing__options",
                        children: [
                            {
                                label: "Facebook",
                                path: "https://www.facebook.com/sharer/sharer.php?u=",
                                enabled: settings.social_sharing_facebook
                            },
                            {
                                label: "Twitter/X",
                                path: "https://twitter.com/intent/tweet?text=",
                                enabled: settings.social_sharing_twitter
                            },
                            {
                                label: "Pinterest",
                                path: "https://pinterest.com/pin/create/button/?url=",
                                enabled: settings.social_sharing_pinterest
                            }
                        ]
                        .filter(social => social.enabled)
                        .map(social =>
                            createNode("li", {
                                children: createNode("a", {
                                    href: `${social.path}${slideData.currentUrl}`,
                                    target: "_blank",
                                    children: `Share on ${social.label}`
                                })
                            })
                        )
                    })
                },
        
                // Download Button
                {
                    visible: settings.download_link && slideData.image.download_link,
                    label: "Download Image",
                    icon: "download",
                    onClick: actions.onDownloadClick,
                    className: "mwl__topbar__controls__control--download"
                },
        
                // Start Slideshow
                {
                    visible: settings.slideshow.enabled,
                    label: "Start slideshow",
                    icon: "play",
                    onClick: actions.onPlayClick,
                    className: `mwl__topbar__controls__control--play ${slideData.isPlaying ? "hidden" : ""}`
                },
        
                // Stop Slideshow
                {
                    visible: settings.slideshow.enabled,
                    label: "Stop slideshow",
                    icon: "pause",
                    onClick: actions.onPauseClick,
                    className: `mwl__topbar__controls__control--pause ${slideData.isPlaying ? "" : "hidden"}`
                },
        
                // Map View
                {
                    visible: settings.map.enabled && slideData.image.gps && slideData.image.gps.lat !== "N/A" && slideData.image.gps.lng !== "N/A",
                    label: slideData.isMapOpen ? "Show image" : "Show on map",
                    icon: slideData.isMapOpen ? "image" : "map",
                    onClick: actions.onMapClick,
                    className: "mwl__topbar__controls__control--map"
                },
        
                // Fullscreen
                {
                    visible: true,
                    label: "Full screen",
                    icon: "fullscreen",
                    onClick: actions.onFullscreenClick,
                    className: `mwl__topbar__controls__control--fullscreen ${slideData.isExtended ? "hidden" : ""}`
                },
        
                // Shrink
                {
                    visible: true,
                    label: "Shrink",
                    icon: "shrink",
                    onClick: actions.onShrinkClick,
                    className: `mwl__topbar__controls__control--shrink ${slideData.isExtended ? "" : "hidden"}`
                },
        
                // Close
                {
                    visible: true,
                    label: "Close",
                    icon: "close",
                    onClick: actions.onCloseClick,
                    className: "mwl__topbar__controls__control--close"
                }
            ];
        
            return controls
                .filter(control => control.visible)
                .map(({ label, icon, onClick, className, children }) =>
                    createNode("div", {
                        className: `mwl__topbar__controls__control ${className}`,
                        onClick: e => {
                            e.stopPropagation();
                            if (onClick) onClick();
                        },
                        children: [
                            createNode(getSvgIconMap, { icon }),
                            label && createNode("div", {
                                className: "mwl__topbar__controls__control__label",
                                children: label
                            }),
                            children
                        ]
                    })
                );
        }

        /**
         * Generates the slide counter with the current slide number and total slides.
         * @returns {Node} A div element containing the slide counter.
         */
        function createSlideCounter() {
            var slideData = getSlideData();
            return createNode(getChildren, {
                children: [createNode("span", {
                    className: "current-slide",
                    children: slideData.currentIndex - slideData.currentSeparatedIndexDifference + 1
                }), "/", createNode("span", {
                    className: "number-of-slides",
                    children: slideData.imagesNumber
                })]
            })
        }

        /**
         * Generates the top bar section with a slide counter and controls.
         * @param {Object} props - Properties passed to the component.
         * @param {string} props.className - The CSS class name for the top bar.
         * @returns {Node|null} A div element containing the top bar or null if there is no image.
         */
        function createTopBar (props) {
            if (getSlideData().image) {
                return createNode("div", {
                    className: props.className,
                    onClick: getAction().onCloseClick,
                    children: [createNode("div", {
                        className: "mwl__topbar__slide-counter",
                        children: createNode(createSlideCounter, {})
                    }), createNode("div", {
                        className: "mwl__topbar__controls",
                        children: createNode(getTopBarControls, {})
                    })]
                })
            }
            return null
        }

        /**
         * Generates the navigation arrows for previous and next slides.
         * @param {Object} props - Properties passed to the component.
         * @param {string} props.className - The CSS class name for the navigation container.
         * @returns {Node|null} A div element containing the navigation arrows or null if there are fewer than two images.
         */
        function createNavigationArrows(t) {
            if (getSlideData().images.length > 1) {
                return createNode("div", {
                    className: t.className,
                    children: [createNode("div", {
                        className: "mwl__navigation__previous",
                        onClick: (getAction()).onPrevClick,
                        children: createNode(getSvgIconMap, {
                            icon: "arrow_left"
                        })
                    }), createNode("div", {
                        className: "mwl__navigation__next",
                        onClick: (getAction()).onNextClick,
                        children: createNode(getSvgIconMap, {
                            icon: "arrow_right"
                        })
                    })]
                })
            }
            return null
        }

        function createTheme() {
            var rgbRange = {
                light: 255,
                dark: 0
            }
    
            var backGroundColour = "rgba(".concat(rgbRange[mwl_settings.settings.theme], ", ").concat(rgbRange[mwl_settings.settings.theme], ", ").concat(rgbRange[mwl_settings.settings.theme], ", ").concat(mwl_settings.settings.backdrop_opacity / 100, ")")
            
            return createNode("div", {
                className: "mwl ".concat(mwl_settings.settings.theme),
                style: {
                    background: backGroundColour
                },
                children: [
                    createNode(createTopBar, {
                        className: "mwl__topbar"
                    }), 
                    createNode(createNavigationArrows, {
                        className: "mwl__navigations"
                    }), 
                    createNode(createSlideGallery, {
                        className: "mwl__slider"
                    }), 
                    createNode(createMetadata, {
                        className: "mwl__metadata"
                    })
                ]
            })
        };

        var styleManager = {};
        styleManager.styleTagTransform = requireModule.n(requireModule(113))(),
        styleManager.setAttributes = requireModule.n(requireModule(56))(),
        styleManager.insert = requireModule.n(requireModule(659))().bind(null, "head"),
        styleManager.domAPI = requireModule.n(requireModule(825))(),
        styleManager.insertStyleElement = requireModule.n(requireModule(540))();
        requireModule.n(requireModule(72))()((requireModule(619)).A, styleManager);
        (requireModule(619)).A && (requireModule(619)).A.locals && (requireModule(619)).A.locals;

        function regeneratorRuntime() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            regeneratorRuntime = function() {
                return exports
            }
            ;
            var t;
            var exports = {};
            var Op = Object.prototype;
            var hasOwn = Op.hasOwnProperty;
            var defineProperty = Object.defineProperty || function(obj, key, desk) {
                obj[key] = desk.value
            };
            var $Symbol = "function" == typeof Symbol ? Symbol : {};
            var iteratorSymbol = $Symbol.iterator || "@@iterator";
            var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
            var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
            function define(obj, key, value) {
                return Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                obj[key]
            }
            try {
                define({}, "")
            } catch (t) {
                define = function(t, e, n) {
                    return t[e] = n
                }
            }

            function wrap(innerFn, outerFn, self, tryLocsList) {
                var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
                var generator = Object.create(protoGenerator.prototype)
                var context = new Context(tryLocsList || []);
                return defineProperty(generator, "_invoke", {
                    value: makeInvokeMethod(innerFn, self, context)
                }),
                generator
            }
            function tryCatch(fn, obj, arg) {
                try {
                    return {
                        type: "normal",
                        arg: fn.call(obj, arg)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            exports.wrap = wrap;
            var GenStateSuspendedStart = "suspendedStart";
            var GenStateSuspendedYield  = "suspendedYield";
            var GenStateExecuting  = "executing";
            var GenStateCompleted  = "completed";
            var ContinueSentinel = {};
            function Generator() {}
            function GeneratorFunction() {}
            function GeneratorFunctionPrototype() {}
            var IteratorPrototype  = {};
            define(IteratorPrototype , iteratorSymbol, (function() {
                return this
            }
            ));
            var getProto  = Object.getPrototypeOf;
            var NativeIteratorPrototype  = getProto  && getProto (getProto (values([])));
            NativeIteratorPrototype  && NativeIteratorPrototype  !== Op && hasOwn.call(NativeIteratorPrototype , iteratorSymbol) && (IteratorPrototype  = NativeIteratorPrototype );
            var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype );

            function defineIteratorMethods(prototype) {
                ["next", "throw", "return"].forEach((function(method) {
                    define(prototype, method, (function(arg) {
                        return this._invoke(method, arg)
                    }
                    ))
                }
                ))
            }

            function AsyncIterator(generator, PromiseImpl) {
                function invoke(method, args, resolve, reject) {
                    var record = tryCatch(generator[method], generator, args);
                    if ("throw" !== record.type) {
                        var result = record.arg
                          , value = result.value;
                        return value && "object" == getType(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then((function(t) {
                            invoke("next", t, resolve, reject)
                        }
                        ), (function(t) {
                            invoke("throw", t, resolve, reject)
                        }
                        )) : PromiseImpl.resolve(value).then((function(t) {
                            result.value = t,
                            resolve(result)
                        }
                        ), (function(err) {
                            return invoke("throw", err, resolve, reject)
                        }
                        ))
                    }
                    reject(record.arg)
                }
                var o;
                defineProperty(this, "_invoke", {
                    value: function(t, r) {
                        function i() {
                            return new PromiseImpl((function(e, i) {
                                invoke(t, r, e, i)
                            }
                            ))
                        }
                        return o = o ? o.then(i, i) : i()
                    }
                })
            }

            function makeInvokeMethod(innerFn, self, context) {
                var state = GenStateSuspendedStart ;
                return function(o, a) {
                    if (state === GenStateExecuting )
                        throw Error("Generator is already running");
                    if (state === GenStateCompleted ) {
                        if ("throw" === o)
                            throw a;
                        return {
                            value: t,
                            done: !0
                        }
                    }
                    for (context.method = o,
                    context.arg = a; ; ) {
                        var s = context.delegate;
                        if (s) {
                            var l = maybeInvokeDelegate(s, context);
                            if (l) {
                                if (l === ContinueSentinel )
                                    continue;
                                return l
                            }
                        }
                        if ("next" === context.method)
                            context.sent = context._sent = context.arg;
                        else if ("throw" === context.method) {
                            if (state === GenStateSuspendedStart )
                                throw state = GenStateCompleted ,
                                context.arg;
                            context.dispatchException(context.arg)
                        } else
                            "return" === context.method && context.abrupt("return", context.arg);
                        state = GenStateExecuting ;
                        var c = tryCatch(innerFn, self, context);
                        if ("normal" === c.type) {
                            if (state = context.done ? GenStateCompleted  : GenStateSuspendedYield ,
                            c.arg === ContinueSentinel )
                                continue;
                            return {
                                value: c.arg,
                                done: context.done
                            }
                        }
                        "throw" === c.type && (state = GenStateCompleted ,
                        context.method = "throw",
                        context.arg = c.arg)
                    }
                }
            }
            function maybeInvokeDelegate(delegate, context) {
                var r = context.method
                  , i = delegate.iterator[r];
                if (i === t)
                    return context.delegate = null,
                    "throw" === r && delegate.iterator.return && (context.method = "return",
                    context.arg = t,
                    maybeInvokeDelegate(delegate, context),
                    "throw" === context.method) || "return" !== r && (context.method = "throw",
                    context.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                    ContinueSentinel ;
                var o = tryCatch(i, delegate.iterator, context.arg);
                if ("throw" === o.type)
                    return context.method = "throw",
                    context.arg = o.arg,
                    context.delegate = null,
                    ContinueSentinel ;
                var a = o.arg;
                return a ? a.done ? (context[delegate.resultName] = a.value,
                context.next = delegate.nextLoc,
                "return" !== context.method && (context.method = "next",
                context.arg = t),
                context.delegate = null,
                ContinueSentinel ) : a : (context.method = "throw",
                context.arg = new TypeError("iterator result is not an object"),
                context.delegate = null,
                ContinueSentinel )
            }
            function pushTryEntry(locs) {
                var e = {
                    tryLoc: locs[0]
                };
                1 in locs && (e.catchLoc = locs[1]),
                2 in locs && (e.finallyLoc = locs[2],
                e.afterLoc = locs[3]),
                this.tryEntries.push(e)
            }
            function resetTryEntry(entry) {
                var record = entry.completion || {};
                record.type = "normal",
                delete record.arg,
                entry.completion = record
            }
            class Context {
                constructor(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                        t.forEach(pushTryEntry, this),
                        this.reset(!0);
                }
                reset(skipTempReset) {
                    if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = t,
                        this.done = false,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = t,
                        this.tryEntries.forEach(resetTryEntry),
                        !skipTempReset)
                        for (var n in this)
                            "t" === n.charAt(0) && hasOwn.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                }
                stop() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval;
                }
                dispatchException(e) {
                    if (this.done)
                        throw e;
                    var n = this;
                    function i(r, i) {
                        return s.type = "throw",
                            s.arg = e,
                            n.next = r,
                            i && (n.method = "next",
                                n.arg = t),
                            !!i;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var a = this.tryEntries[o], s = a.completion;
                        if ("root" === a.tryLoc)
                            return i("end");
                        if (a.tryLoc <= this.prev) {
                            var l = hasOwn.call(a, "catchLoc"), c = hasOwn.call(a, "finallyLoc");
                            if (l && c) {
                                if (this.prev < a.catchLoc)
                                    return i(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return i(a.finallyLoc);
                            } else if (l) {
                                if (this.prev < a.catchLoc)
                                    return i(a.catchLoc, !0);
                            } else {
                                if (!c)
                                    throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return i(a.finallyLoc);
                            }
                        }
                    }
                }
                abrupt(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var i = this.tryEntries[n];
                        if (i.tryLoc <= this.prev && hasOwn.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var o = i;
                            break;
                        }
                    }
                    o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                    var a = o ? o.completion : {};
                    return a.type = t,
                        a.arg = e,
                        o ? (this.method = "next",
                            this.next = o.finallyLoc,
                            ContinueSentinel ) : this.complete(a);
                }
                complete(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === t.type && e && (this.next = e),
                        ContinueSentinel ;
                }
                finish(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t)
                            return this.complete(n.completion, n.afterLoc),
                                resetTryEntry(n),
                                ContinueSentinel ;
                    }
                }
                catch(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                resetTryEntry(n);
                            }
                            return i;
                        }
                    }
                    throw Error("illegal catch attempt");
                }
                delegateYield(e, n, r) {
                    return this.delegate = {
                        iterator: values(e),
                        resultName: n,
                        nextLoc: r
                    },
                        "next" === this.method && (this.arg = t),
                        ContinueSentinel ;
                }
            }
            function values(iterable) {
                if (iterable || "" === iterable) {
                    var iteratorMethod = iterable[iteratorSymbol];
                    if (iteratorMethod)
                        return iteratorMethod.call(iterable);
                    if ("function" == typeof iterable.next)
                        return iterable;
                    if (!isNaN(iterable.length)) {
                        var i = -1;
                        class next {
                            constructor() {
                                for (; ++i < iterable.length;)
                                    if (hasOwn.call(iterable, i))
                                        return iteratorMethod.value = iterable[i],
                                            iteratorMethod.done = false,
                                            iteratorMethod;
                                return iteratorMethod.value = t,
                                    iteratorMethod.done = !0,
                                    iteratorMethod;
                            }
                        }
                        return next.next = next
                    }
                }
                throw new TypeError(getType(iterable) + " is not iterable")
            }
            return GeneratorFunction.prototype = GeneratorFunctionPrototype,
            defineProperty(Gp, "constructor", {
                value: GeneratorFunctionPrototype,
                configurable: !0
            }),
            defineProperty(GeneratorFunctionPrototype, "constructor", {
                value: GeneratorFunction,
                configurable: !0
            }),
            GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"),
            exports.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            exports.mark = function(genFun) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype,
                define(genFun, toStringTagSymbol, "GeneratorFunction")),
                genFun.prototype = Object.create(Gp),
                genFun
            }
            ,
            exports.awrap = function(arg) {
                return {
                    __await: arg
                }
            }
            ,
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, asyncIteratorSymbol, (function() {
                return this
            }
            )),
            exports.AsyncIterator = AsyncIterator,
            exports.async = function(t, n, r, i, o) {
                void 0 === o && (o = Promise);
                var a = new AsyncIterator(wrap(t, n, r, i),o);
                return exports.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }
                ))
            }
            ,
            defineIteratorMethods(Gp),
            define(Gp, toStringTagSymbol, "Generator"),
            define(Gp, iteratorSymbol, (function() {
                return this
            }
            )),
            define(Gp, "toString", (function() {
                return "[object Generator]"
            }
            )),
            exports.keys = function(t) {
                var e = Object(t)
                  , n = [];
                for (var r in e)
                    n.push(r);
                return n.reverse(),
                function t() {
                    for (; n.length; ) {
                        var r = n.pop();
                        if (r in e)
                            return t.value = r,
                            t.done = false,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            exports.values = values,
            exports
        }

        /**
         * Queue for storing image elements to be processed by the Meow Lightbox
         */
        var meowLightboxQueue = [];

        /**
         * Sends a request to the server to regenerate Meow Lightbox data for the given images.
         * 
         * @param {Array} images - An array of image objects containing image URLs.
         * @returns {Promise<Object|null>} - Returns regenerated data if successful, or null on error.
         */
        async function getMeowLightboxData(imageList) {
            try {
                const response = await fetch(`${mwl_settings.api_url}regenerate_mwl_data`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-WP-Nonce": mwl_settings.rest_nonce
                    },
                    body: JSON.stringify({
                        images: imageList
                    })
                });
        
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
        
                const json = await response.json();
        
                if (json.success) {
                    return json.data;
                } else {
                    console.error("Server responded with an error:", json);
                    return null;
                }
            } catch (error) {
                if (error.message) {
                    alert(error.message);
                }
                return null;
            }
        }

        async function renderMeowLightBox() {
            let imageRequestPayload, newImageData;
            let mwlRoot, galleryContainers, scrollableElements;
        
            console.log("🎞️ Rendering Meow Lightbox");
            console.log("🚚 Sending request to get the new mwl_data for", meowLightboxQueue);
        
            imageRequestPayload = meowLightboxQueue.map(item => ({
                url: item.url
            }));
        
            getMeowLightboxData(imageRequestPayload);
        
            if (meowLightboxQueue.length > 0) {
                newImageData = {};
                meowLightboxQueue.forEach(image => {
                    if (image.data && image.data.success !== false) {
                        newImageData[image.id] = image.data;
        
                        const matched = meowLightboxQueue.find(e => e.url === image.url);
                        if (matched && matched.element) {
                            matched.element.setAttribute("data-mwl-img-id", image.id);
                        }
                    } else {
                        console.error("❌ Error fetching image data:", image.id, image.data);
                    }
                });
        
                // Merge new data into global mwl_data
                window.mwl_data = {
                    ...window.mwl_data, ...newImageData
                };
        
                // Clear the queue
                meowLightboxQueue = [];
            }
        
            if (meowLightboxQueue.length <= 0) {
                // Remove existing root if exists
                mwlRoot = document.getElementById("mwl-root");
                if (mwlRoot && mwlRoot.parentNode) {
                    mwlRoot.parentNode.removeChild(mwlRoot);
                }
        
                // Append new root container
                document.body.appendChild(
                    document.createRange().createContextualFragment('<div id="mwl-root"></div>')
                );
        
                // Locate scrollable elements
                galleryContainers = document.querySelectorAll(".mgl-infinite-scroll");
                scrollableElements = Array.from(galleryContainers).map(container => container.previousSibling);
        
                // Render the lightbox component
                ct(
                    createNode(Se, {
                        infiniteScrollableGalleries: scrollableElements,
                        children: createNode(createTheme, {})
                    }),
                    document.getElementById("mwl-root")
                );
            }
        }

        // Automatically render lightbox after DOM is loaded and a delay
        document.addEventListener("DOMContentLoaded", function () {
            setTimeout(function () {
                renderMeowLightBox();
            }, 300);
        });

        // Expose rendering function globally
        window.renderMeowLightbox = renderMeowLightBox;
        
        /**
         * Adds a valid <img> HTML element to the Meow Lightbox queue.
         * 
         * @param {HTMLElement} imageElement - The image element to add to the lightbox queue.
         *                                     Must be a valid <img> HTML element with a 'src' attribute.
         */
        window.addToMeowLightboxQueue = function(imageElement) {
            if (!(imageElement instanceof HTMLElement) || "img" !== imageElement.tagName.toLowerCase()) {
                console.error("🚫 Invalid image element:", imageElement);
                void console.warn("ℹ️ The parameter should be an img HTML element");
                return
            }
            if (imageElement.src) {
                meowLightboxQueue.push({
                    element: imageElement,
                    url: imageElement.src
                })
            } else {
                console.error("🚫 Image element does not have a src attribute:", imageElement)
            }
        }
    }
    )()
}
)();
//# sourceMappingURL=lightbox.js.map
