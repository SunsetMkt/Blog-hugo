/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

export function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

export var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

export function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

export function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

export function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

export function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};

export function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};

export function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
};

export function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

export function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

export function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

export function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

export var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

export function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

export function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

export function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
export function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
export function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

export function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

export function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

export function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

export function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

export function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

export function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

export function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

export function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

export function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

export function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

export function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

export function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;

}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

export function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while (env.stack.length) {
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
            }
            catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}

export default {
    __extends: __extends,
    __assign: __assign,
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources,
};

var e=class a{constructor(){this._layoutInfos=[]}static{this.INSTANCE=new a}get layoutInfos(){return this._layoutInfos}registerKeyboardLayout(t){this._layoutInfos.push(t)}};e.INSTANCE.registerKeyboardLayout({layout:{id:"com.apple.keylayout.US",lang:"en",localizedName:"U.S.",isUSStandard:!0},secondaryLayouts:[{id:"com.apple.keylayout.ABC",lang:"en",localizedName:"ABC"},{id:"com.sogou.inputmethod.sogou.pinyin",lang:"zh-Hans",localizedName:"Pinyin - Simplified"},{id:"com.apple.inputmethod.Kotoeri.Roman",lang:"en",localizedName:"Romaji"},{id:"com.apple.inputmethod.Kotoeri.Japanese",lang:"ja",localizedName:"Hiragana"},{id:"com.apple.keylayout.Australian",lang:"en",localizedName:"Australian"},{id:"com.apple.keylayout.Canadian",lang:"en",localizedName:"Canadian English"},{id:"com.apple.keylayout.Brazilian",lang:"pt",localizedName:"Brazilian"}],mapping:{KeyA:["a","A","\xE5","\xC5",0],KeyB:["b","B","\u222B","\u0131",0],KeyC:["c","C","\xE7","\xC7",0],KeyD:["d","D","\u2202","\xCE",0],KeyE:["e","E","\xB4","\xB4",4],KeyF:["f","F","\u0192","\xCF",0],KeyG:["g","G","\xA9","\u02DD",0],KeyH:["h","H","\u02D9","\xD3",0],KeyI:["i","I","\u02C6","\u02C6",4],KeyJ:["j","J","\u2206","\xD4",0],KeyK:["k","K","\u02DA","\uF8FF",0],KeyL:["l","L","\xAC","\xD2",0],KeyM:["m","M","\xB5","\xC2",0],KeyN:["n","N","\u02DC","\u02DC",4],KeyO:["o","O","\xF8","\xD8",0],KeyP:["p","P","\u03C0","\u220F",0],KeyQ:["q","Q","\u0153","\u0152",0],KeyR:["r","R","\xAE","\u2030",0],KeyS:["s","S","\xDF","\xCD",0],KeyT:["t","T","\u2020","\u02C7",0],KeyU:["u","U","\xA8","\xA8",4],KeyV:["v","V","\u221A","\u25CA",0],KeyW:["w","W","\u2211","\u201E",0],KeyX:["x","X","\u2248","\u02DB",0],KeyY:["y","Y","\xA5","\xC1",0],KeyZ:["z","Z","\u03A9","\xB8",0],Digit1:["1","!","\xA1","\u2044",0],Digit2:["2","@","\u2122","\u20AC",0],Digit3:["3","#","\xA3","\u2039",0],Digit4:["4","$","\xA2","\u203A",0],Digit5:["5","%","\u221E","\uFB01",0],Digit6:["6","^","\xA7","\uFB02",0],Digit7:["7","&","\xB6","\u2021",0],Digit8:["8","*","\u2022","\xB0",0],Digit9:["9","(","\xAA","\xB7",0],Digit0:["0",")","\xBA","\u201A",0],Enter:[],Escape:[],Backspace:[],Tab:[],Space:[" "," "," "," ",0],Minus:["-","_","\u2013","\u2014",0],Equal:["=","+","\u2260","\xB1",0],BracketLeft:["[","{","\u201C","\u201D",0],BracketRight:["]","}","\u2018","\u2019",0],Backslash:["\\","|","\xAB","\xBB",0],Semicolon:[";",":","\u2026","\xDA",0],Quote:["'",'"',"\xE6","\xC6",0],Backquote:["`","~","`","`",4],Comma:[",","<","\u2264","\xAF",0],Period:[".",">","\u2265","\u02D8",0],Slash:["/","?","\xF7","\xBF",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],Insert:[],Home:[],PageUp:[],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:["/","/","/","/",0],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["1","1","1","1",0],Numpad2:["2","2","2","2",0],Numpad3:["3","3","3","3",0],Numpad4:["4","4","4","4",0],Numpad5:["5","5","5","5",0],Numpad6:["6","6","6","6",0],Numpad7:["7","7","7","7",0],Numpad8:["8","8","8","8",0],Numpad9:["9","9","9","9",0],Numpad0:["0","0","0","0",0],NumpadDecimal:[".",".",".",".",0],IntlBackslash:["\xA7","\xB1","\xA7","\xB1",0],ContextMenu:[],NumpadEqual:["=","=","=","=",0],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],AudioVolumeMute:[],AudioVolumeUp:["","=","","=",0],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:[],MetaRight:[]}});e.INSTANCE.registerKeyboardLayout({layout:{id:"com.apple.inputmethod.SCIM.ITABC",lang:"zh-Hans",localizedName:"\u641C\u72D7\u62FC\u97F3"},secondaryLayouts:[],mapping:{KeyA:["a","A","\xE5","\xC5",0],KeyB:["b","B","\u222B","\u0131",0],KeyC:["c","C","\xE7","\xC7",0],KeyD:["d","D","\u2202","\xCE",0],KeyE:["e","E","\xB4","\xB4",4],KeyF:["f","F","\u0192","\xCF",0],KeyG:["g","G","\xA9","\u02DD",0],KeyH:["h","H","\u02D9","\xD3",0],KeyI:["i","I","\u02C6","\u02C6",4],KeyJ:["j","J","\u2206","\xD4",0],KeyK:["k","K","\u02DA","\uF8FF",0],KeyL:["l","L","\xAC","\xD2",0],KeyM:["m","M","\xB5","\xC2",0],KeyN:["n","N","\u02DC","\u02DC",4],KeyO:["o","O","\xF8","\xD8",0],KeyP:["p","P","\u03C0","\u220F",0],KeyQ:["q","Q","\u0153","\u0152",0],KeyR:["r","R","\xAE","\u2030",0],KeyS:["s","S","\xDF","\xCD",0],KeyT:["t","T","\u2020","\u02C7",0],KeyU:["u","U","\xA8","\xA8",4],KeyV:["v","V","\u221A","\u25CA",0],KeyW:["w","W","\u2211","\u201E",0],KeyX:["x","X","\u2248","\u02DB",0],KeyY:["y","Y","\xA5","\xC1",0],KeyZ:["z","Z","\u03A9","\xB8",0],Digit1:["1","\uFF01","\xA1","\u2044",0],Digit2:["2","@","\u2122","\u20AC",0],Digit3:["3","#","\xA3","\u2039",0],Digit4:["4","\xA5","\xA2","\u203A",0],Digit5:["5","%","\u221E","\uFB01",0],Digit6:["6","","\xA7","\uFB02",0],Digit7:["7","&","\xB6","\u2021",0],Digit8:["8","*","\u2022","\xB0",0],Digit9:["9","\uFF08","\xAA","\xB7",0],Digit0:["0","\uFF09","\xBA","\u201A",0],Enter:[],Escape:[],Backspace:[],Tab:[],Space:[" "," "," "," ",0],Minus:["-","","\u2013","\u2014",0],Equal:["=","+","\u2260","\xB1",0],BracketLeft:["\u3010","\u300C","\u201C","\u201D",0],BracketRight:["\u3011","\u300D","\u2018","\u2019",0],Backslash:["\u3001","|","\xAB","\xBB",0],Semicolon:["\uFF1B","\uFF1A","\u2026","\xDA",0],Quote:["'",'"',"\xE6","\xC6",0],Backquote:["\xB7","\uFF5E","`","`",4],Comma:["\uFF0C","\u300A","\u2264","\xAF",0],Period:["\u3002","\u300B","\u2265","\u02D8",0],Slash:["/","\uFF1F","\xF7","\xBF",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],Insert:[],Home:[],PageUp:[],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:["/","/","/","/",0],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["1","1","1","1",0],Numpad2:["2","2","2","2",0],Numpad3:["3","3","3","3",0],Numpad4:["4","4","4","4",0],Numpad5:["5","5","5","5",0],Numpad6:["6","6","6","6",0],Numpad7:["7","7","7","7",0],Numpad8:["8","8","8","8",0],Numpad9:["9","9","9","9",0],Numpad0:["0","0","0","0",0],NumpadDecimal:[".",".",".",".",0],IntlBackslash:["\xA7","\xB1","\xA7","\xB1",0],ContextMenu:[],NumpadEqual:["=","=","=","=",0],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],AudioVolumeMute:[],AudioVolumeUp:["","=","","=",0],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:[],MetaRight:[]}});e.INSTANCE.registerKeyboardLayout({layout:{id:"com.apple.keylayout.British",lang:"en",localizedName:"British"},secondaryLayouts:[],mapping:{KeyA:["a","A","\xE5","\xC5",0],KeyB:["b","B","\u222B","\u0131",0],KeyC:["c","C","\xE7","\xC7",0],KeyD:["d","D","\u2202","\xCE",0],KeyE:["e","E","\xB4","\u2030",4],KeyF:["f","F","\u0192","\xCF",0],KeyG:["g","G","\xA9","\xCC",0],KeyH:["h","H","\u02D9","\xD3",0],KeyI:["i","I","^","\xC8",4],KeyJ:["j","J","\u2206","\xD4",0],KeyK:["k","K","\u02DA","\uF8FF",0],KeyL:["l","L","\xAC","\xD2",0],KeyM:["m","M","\xB5","\u02DC",0],KeyN:["n","N","~","\u02C6",4],KeyO:["o","O","\xF8","\xD8",0],KeyP:["p","P","\u03C0","\u220F",0],KeyQ:["q","Q","\u0153","\u0152",0],KeyR:["r","R","\xAE","\xC2",0],KeyS:["s","S","\xDF","\xCD",0],KeyT:["t","T","\u2020","\xCA",0],KeyU:["u","U","\xA8","\xCB",4],KeyV:["v","V","\u221A","\u25CA",0],KeyW:["w","W","\u2211","\u201E",0],KeyX:["x","X","\u2248","\xD9",0],KeyY:["y","Y","\xA5","\xC1",0],KeyZ:["z","Z","\u03A9","\xDB",0],Digit1:["1","!","\xA1","\u2044",0],Digit2:["2","@","\u20AC","\u2122",0],Digit3:["3","\xA3","#","\u2039",0],Digit4:["4","$","\xA2","\u203A",0],Digit5:["5","%","\u221E","\uFB01",0],Digit6:["6","^","\xA7","\uFB02",0],Digit7:["7","&","\xB6","\u2021",0],Digit8:["8","*","\u2022","\xB0",0],Digit9:["9","(","\xAA","\xB7",0],Digit0:["0",")","\xBA","\u201A",0],Enter:[],Escape:[],Backspace:[],Tab:[],Space:[" "," "," "," ",0],Minus:["-","_","\u2013","\u2014",0],Equal:["=","+","\u2260","\xB1",0],BracketLeft:["[","{","\u201C","\u201D",0],BracketRight:["]","}","\u2018","\u2019",0],Backslash:["\\","|","\xAB","\xBB",0],Semicolon:[";",":","\u2026","\xDA",0],Quote:["'",'"',"\xE6","\xC6",0],Backquote:["`","~","`","\u0178",4],Comma:[",","<","\u2264","\xAF",0],Period:[".",">","\u2265","\u02D8",0],Slash:["/","?","\xF7","\xBF",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],Insert:[],Home:[],PageUp:[],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:["/","/","/","/",0],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["1","1","1","1",0],Numpad2:["2","2","2","2",0],Numpad3:["3","3","3","3",0],Numpad4:["4","4","4","4",0],Numpad5:["5","5","5","5",0],Numpad6:["6","6","6","6",0],Numpad7:["7","7","7","7",0],Numpad8:["8","8","8","8",0],Numpad9:["9","9","9","9",0],Numpad0:["0","0","0","0",0],NumpadDecimal:[".",".",".",".",0],IntlBackslash:["\xA7","\xB1","","",0],ContextMenu:[],NumpadEqual:["=","=","=","=",0],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],AudioVolumeMute:[],AudioVolumeUp:["","=","","=",0],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:[],MetaRight:[]}});e.INSTANCE.registerKeyboardLayout({layout:{id:"com.apple.keylayout.Spanish-ISO",lang:"es",localizedName:"Spanish - ISO"},secondaryLayouts:[],mapping:{KeyA:["a","A","\xE5","\xC5",0],KeyB:["b","B","\xDF","",0],KeyC:["c","C","\xA9"," ",0],KeyD:["d","D","\u2202","\u2206",0],KeyE:["e","E","\u20AC","\u20AC",0],KeyF:["f","F","\u0192","\uFB01",0],KeyG:["g","G","\uF8FF","\uFB02",0],KeyH:["h","H","\u2122"," ",0],KeyI:["i","I"," "," ",0],KeyJ:["j","J","\xB6","\xAF",0],KeyK:["k","K","\xA7","\u02C7",0],KeyL:["l","L"," ","\u02D8",0],KeyM:["m","M","\xB5","\u02DA",0],KeyN:["n","N"," ","\u02D9",0],KeyO:["o","O","\xF8","\xD8",0],KeyP:["p","P","\u03C0","\u220F",0],KeyQ:["q","Q","\u0153","\u0152",0],KeyR:["r","R","\xAE"," ",0],KeyS:["s","S","\u222B"," ",0],KeyT:["t","T","\u2020","\u2021",0],KeyU:["u","U"," "," ",0],KeyV:["v","V","\u221A","\u25CA",0],KeyW:["w","W","\xE6","\xC6",0],KeyX:["x","X","\u2211","\u203A",0],KeyY:["y","Y","\xA5"," ",0],KeyZ:["z","Z","\u03A9","\u2039",0],Digit1:["1","!","|","\u0131",0],Digit2:["2",'"',"@","\u02DD",0],Digit3:["3","\xB7","#","\u2022",0],Digit4:["4","$","\xA2","\xA3",0],Digit5:["5","%","\u221E","\u2030",0],Digit6:["6","&","\xAC"," ",0],Digit7:["7","/","\xF7","\u2044",0],Digit8:["8","(","\u201C","\u2018",0],Digit9:["9",")","\u201D","\u2019",0],Digit0:["0","=","\u2260","\u2248",0],Enter:[],Escape:[],Backspace:[],Tab:[],Space:[" "," "," "," ",0],Minus:["'","?","\xB4","\xB8",0],Equal:["\xA1","\xBF","\u201A","\u02DB",0],BracketLeft:["`","^","[","\u02C6",3],BracketRight:["+","*","]","\xB1",0],Backslash:["\xE7","\xC7","}","\xBB",0],Semicolon:["\xF1","\xD1","~","\u02DC",4],Quote:["\xB4","\xA8","{","\xAB",3],Backquote:["<",">","\u2264","\u2265",0],Comma:[",",";","\u201E","",0],Period:[".",":","\u2026","\u2026",0],Slash:["-","_","\u2013","\u2014",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],Insert:[],Home:[],PageUp:[],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:["/","/","/","/",0],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["1","1","1","1",0],Numpad2:["2","2","2","2",0],Numpad3:["3","3","3","3",0],Numpad4:["4","4","4","4",0],Numpad5:["5","5","5","5",0],Numpad6:["6","6","6","6",0],Numpad7:["7","7","7","7",0],Numpad8:["8","8","8","8",0],Numpad9:["9","9","9","9",0],Numpad0:["0","0","0","0",0],NumpadDecimal:[",",",",",",",",0],IntlBackslash:["\xBA","\xAA","\\","\xB0",0],ContextMenu:[],NumpadEqual:["=","=","=","=",0],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],AudioVolumeMute:[],AudioVolumeUp:["","=","","=",0],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:[],MetaRight:[]}});e.INSTANCE.registerKeyboardLayout({layout:{id:"com.google.inputmethod.Japanese.Roman",lang:"en",localizedName:"Alphanumeric (Google)"},secondaryLayouts:[],mapping:{KeyA:["a","A","\xAF","\u0304",4],KeyB:["b","B","\u02D8","\u0306",4],KeyC:["c","C","\xB8","\u0327",4],KeyD:["d","D","\xF0","\xD0",0],KeyE:["e","E","\xB4","\u0301",4],KeyF:["f","F","\u0192","",0],KeyG:["g","G","\xA9","\u2038",8],KeyH:["h","H","\u02CD","\u0331",4],KeyI:["i","I","\u02BC","\u031B",4],KeyJ:["j","J","\u02DD","\u030B",4],KeyK:["k","K","\u02DA","\u030A",4],KeyL:["l","L","-","\u0335",4],KeyM:["m","M","\u02DB","\u0328",4],KeyN:["n","N","\u02DC","\u0303",4],KeyO:["o","O","\xF8","\xD8",0],KeyP:["p","P",",","\u0326",4],KeyQ:["q","Q","\u0153","\u0152",0],KeyR:["r","R","\xAE","\u2030",0],KeyS:["s","S","\xDF","",0],KeyT:["t","T","\xFE","\xDE",0],KeyU:["u","U","\xA8","\u0308",4],KeyV:["v","V","\u02C7","\u030C",4],KeyW:["w","W","\u02D9","\u0307",4],KeyX:["x","X",".","\u0323",4],KeyY:["y","Y","\xA5","",0],KeyZ:["z","Z","\u02C0","\u0309",4],Digit1:["1","!","\xA1","\u2044",0],Digit2:["2","@","\u2122","\u20AC",0],Digit3:["3","#","\xA3","\u2039",0],Digit4:["4","$","\xA2","\u203A",0],Digit5:["5","%","\xA7","\u2020",0],Digit6:["6","^","\u02C6","\u0302",4],Digit7:["7","&","\xB6","\u2021",0],Digit8:["8","*","\u2022","\xB0",0],Digit9:["9","(","\xAA","\xB7",0],Digit0:["0",")","\xBA","\u201A",0],Enter:[],Escape:[],Backspace:[],Tab:[],Space:[" "," "," "," ",0],Minus:["-","_","\u2013","\u2014",0],Equal:["=","+","\u2260","\xB1",0],BracketLeft:["[","{","\u201C","\u201D",0],BracketRight:["]","}","\u2018","\u2019",0],Backslash:["\\","|","\xAB","\xBB",0],Semicolon:[";",":","\u2026","\u2116",8],Quote:["'",'"',"\xE6","\xC6",0],Backquote:["`","~","`","\u0300",4],Comma:[",","<","\u2264","\u201E",0],Period:[".",">","\u2265","\u0294",8],Slash:["/","?","\xF7","\xBF",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],Insert:[],Home:[],PageUp:[],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:["/","/","/","/",0],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["1","1","1","1",0],Numpad2:["2","2","2","2",0],Numpad3:["3","3","3","3",0],Numpad4:["4","4","4","4",0],Numpad5:["5","5","5","5",0],Numpad6:["6","6","6","6",0],Numpad7:["7","7","7","7",0],Numpad8:["8","8","8","8",0],Numpad9:["9","9","9","9",0],Numpad0:["0","0","0","0",0],NumpadDecimal:[".",".",".",".",0],IntlBackslash:["\xA7","\xB1","\xA7","\xB1",0],ContextMenu:[],NumpadEqual:["=","=","=","=",0],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],AudioVolumeMute:[],AudioVolumeUp:["","=","","=",0],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:[],MetaRight:[]}});e.INSTANCE.registerKeyboardLayout({layout:{id:"com.apple.keylayout.German",lang:"de",localizedName:"German"},secondaryLayouts:[],mapping:{KeyA:["a","A","\xE5","\xC5",0],KeyB:["b","B","\u222B","\u2039",0],KeyC:["c","C","\xE7","\xC7",0],KeyD:["d","D","\u2202","\u2122",0],KeyE:["e","E","\u20AC","\u2030",0],KeyF:["f","F","\u0192","\xCF",0],KeyG:["g","G","\xA9","\xCC",0],KeyH:["h","H","\xAA","\xD3",0],KeyI:["i","I","\u2044","\xDB",0],KeyJ:["j","J","\xBA","\u0131",0],KeyK:["k","K","\u2206","\u02C6",0],KeyL:["l","L","@","\uFB02",0],KeyM:["m","M","\xB5","\u02D8",0],KeyN:["n","N","~","\u203A",4],KeyO:["o","O","\xF8","\xD8",0],KeyP:["p","P","\u03C0","\u220F",0],KeyQ:["q","Q","\xAB","\xBB",0],KeyR:["r","R","\xAE","\xB8",0],KeyS:["s","S","\u201A","\xCD",0],KeyT:["t","T","\u2020","\u02DD",0],KeyU:["u","U","\xA8","\xC1",4],KeyV:["v","V","\u221A","\u25CA",0],KeyW:["w","W","\u2211","\u201E",0],KeyX:["x","X","\u2248","\xD9",0],KeyY:["z","Z","\u03A9","\u02C7",0],KeyZ:["y","Y","\xA5","\u2021",0],Digit1:["1","!","\xA1","\xAC",0],Digit2:["2",'"',"\u201C","\u201D",0],Digit3:["3","\xA7","\xB6","#",0],Digit4:["4","$","\xA2","\xA3",0],Digit5:["5","%","[","\uFB01",0],Digit6:["6","&","]","^",8],Digit7:["7","/","|","\\",0],Digit8:["8","(","{","\u02DC",0],Digit9:["9",")","}","\xB7",0],Digit0:["0","=","\u2260","\xAF",0],Enter:[],Escape:[],Backspace:[],Tab:[],Space:[" "," "," "," ",0],Minus:["\xDF","?","\xBF","\u02D9",0],Equal:["\xB4","`","'","\u02DA",3],BracketLeft:["\xFC","\xDC","\u2022","\xB0",0],BracketRight:["+","*","\xB1","\uF8FF",0],Backslash:["#","'","\u2018","\u2019",0],Semicolon:["\xF6","\xD6","\u0153","\u0152",0],Quote:["\xE4","\xC4","\xE6","\xC6",0],Backquote:["<",">","\u2264","\u2265",0],Comma:[",",";","\u221E","\u02DB",0],Period:[".",":","\u2026","\xF7",0],Slash:["-","_","\u2013","\u2014",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],Insert:[],Home:[],PageUp:[],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:["/","/","/","/",0],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["1","1","1","1",0],Numpad2:["2","2","2","2",0],Numpad3:["3","3","3","3",0],Numpad4:["4","4","4","4",0],Numpad5:["5","5","5","5",0],Numpad6:["6","6","6","6",0],Numpad7:["7","7","7","7",0],Numpad8:["8","8","8","8",0],Numpad9:["9","9","9","9",0],Numpad0:["0","0","0","0",0],NumpadDecimal:[",",",",".",".",0],IntlBackslash:["^","\xB0","\u201E","\u201C",1],ContextMenu:[],NumpadEqual:["=","=","=","=",0],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],AudioVolumeMute:[],AudioVolumeUp:["","=","","=",0],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:[],MetaRight:[]}});e.INSTANCE.registerKeyboardLayout({layout:{id:"com.apple.keylayout.USInternational-PC",lang:"en",localizedName:"U.S. International - PC"},secondaryLayouts:[],mapping:{KeyA:["a","A","\xE5","\xC5",0],KeyB:["b","B","\u222B","\u0131",0],KeyC:["c","C","\xE7","\xC7",0],KeyD:["d","D","\u2202","\xCE",0],KeyE:["e","E","\xB4","\xB4",4],KeyF:["f","F","\u0192","\xCF",0],KeyG:["g","G","\xA9","\u02DD",0],KeyH:["h","H","\u02D9","\xD3",0],KeyI:["i","I","\u02C6","\u02C6",4],KeyJ:["j","J","\u2206","\xD4",0],KeyK:["k","K","\u02DA","\uF8FF",0],KeyL:["l","L","\xAC","\xD2",0],KeyM:["m","M","\xB5","\xC2",0],KeyN:["n","N","\u02DC","\u02DC",4],KeyO:["o","O","\xF8","\xD8",0],KeyP:["p","P","\u03C0","\u220F",0],KeyQ:["q","Q","\u0153","\u0152",0],KeyR:["r","R","\xAE","\u2030",0],KeyS:["s","S","\xDF","\xCD",0],KeyT:["t","T","\u2020","\u02C7",0],KeyU:["u","U","\xA8","\xA8",4],KeyV:["v","V","\u221A","\u25CA",0],KeyW:["w","W","\u2211","\u201E",0],KeyX:["x","X","\u2248","\u02DB",0],KeyY:["y","Y","\xA5","\xC1",0],KeyZ:["z","Z","\u03A9","\xB8",0],Digit1:["1","!","\xA1","\u2044",0],Digit2:["2","@","\u2122","\u20AC",0],Digit3:["3","#","\xA3","\u2039",0],Digit4:["4","$","\xA2","\u203A",0],Digit5:["5","%","\u221E","\uFB01",0],Digit6:["6","\u02C6","\xA7","\uFB02",2],Digit7:["7","&","\xB6","\u2021",0],Digit8:["8","*","\u2022","\xB0",0],Digit9:["9","(","\xAA","\xB7",0],Digit0:["0",")","\xBA","\u201A",0],Enter:[],Escape:[],Backspace:[],Tab:[],Space:[" "," "," "," ",0],Minus:["-","_","\u2013","\u2014",0],Equal:["=","+","\u2260","\xB1",0],BracketLeft:["[","{","\u201C","\u201D",0],BracketRight:["]","}","\u2018","\u2019",0],Backslash:["\\","|","\xAB","\xBB",0],Semicolon:[";",":","\u2026","\xDA",0],Quote:["'",'"',"\xE6","\xC6",3],Backquote:["`","\u02DC","`","`",7],Comma:[",","<","\u2264","\xAF",0],Period:[".",">","\u2265","\u02D8",0],Slash:["/","?","\xF7","\xBF",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],Insert:[],Home:[],PageUp:[],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:["/","/","/","/",0],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["1","1","1","1",0],Numpad2:["2","2","2","2",0],Numpad3:["3","3","3","3",0],Numpad4:["4","4","4","4",0],Numpad5:["5","5","5","5",0],Numpad6:["6","6","6","6",0],Numpad7:["7","7","7","7",0],Numpad8:["8","8","8","8",0],Numpad9:["9","9","9","9",0],Numpad0:["0","0","0","0",0],NumpadDecimal:[".",".",".",".",0],IntlBackslash:["\xA7","\xB1","\xA7","\xB1",0],ContextMenu:[],NumpadEqual:["=","=","=","=",0],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],AudioVolumeMute:[],AudioVolumeUp:["","=","","=",0],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:[],MetaRight:[]}});e.INSTANCE.registerKeyboardLayout({layout:{id:"com.apple.keylayout.USExtended",lang:"en",localizedName:"ABC - Extended"},secondaryLayouts:[],mapping:{KeyA:["a","A","\xAF","\u0304",4],KeyB:["b","B","\u02D8","\u0306",4],KeyC:["c","C","\xB8","\u0327",4],KeyD:["d","D","\xF0","\xD0",0],KeyE:["e","E","\xB4","\u0301",4],KeyF:["f","F","\u0192","",0],KeyG:["g","G","\xA9","\u2038",8],KeyH:["h","H","\u02CD","\u0331",4],KeyI:["i","I","\u02BC","\u031B",4],KeyJ:["j","J","\u02DD","\u030B",4],KeyK:["k","K","\u02DA","\u030A",4],KeyL:["l","L","-","\u0335",4],KeyM:["m","M","\u02DB","\u0328",4],KeyN:["n","N","\u02DC","\u0303",4],KeyO:["o","O","\xF8","\xD8",0],KeyP:["p","P",",","\u0326",4],KeyQ:["q","Q","\u0153","\u0152",0],KeyR:["r","R","\xAE","\u2030",0],KeyS:["s","S","\xDF","",0],KeyT:["t","T","\xFE","\xDE",0],KeyU:["u","U","\xA8","\u0308",4],KeyV:["v","V","\u02C7","\u030C",4],KeyW:["w","W","\u02D9","\u0307",4],KeyX:["x","X",".","\u0323",4],KeyY:["y","Y","\xA5","",0],KeyZ:["z","Z","\u02C0","\u0309",4],Digit1:["1","!","\xA1","\u2044",0],Digit2:["2","@","\u2122","\u20AC",0],Digit3:["3","#","\xA3","\u2039",0],Digit4:["4","$","\xA2","\u203A",0],Digit5:["5","%","\xA7","\u2020",0],Digit6:["6","^","\u02C6","\u0302",4],Digit7:["7","&","\xB6","\u2021",0],Digit8:["8","*","\u2022","\xB0",0],Digit9:["9","(","\xAA","\xB7",0],Digit0:["0",")","\xBA","\u201A",0],Enter:[],Escape:[],Backspace:[],Tab:[],Space:[" "," "," "," ",0],Minus:["-","_","\u2013","\u2014",0],Equal:["=","+","\u2260","\xB1",0],BracketLeft:["[","{","\u201C","\u201D",0],BracketRight:["]","}","\u2018","\u2019",0],Backslash:["\\","|","\xAB","\xBB",0],Semicolon:[";",":","\u2026","\u2116",8],Quote:["'",'"',"\xE6","\xC6",0],Backquote:["`","~","`","\u0300",4],Comma:[",","<","\u2264","\u201E",0],Period:[".",">","\u2265","\u0294",8],Slash:["/","?","\xF7","\xBF",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],Insert:[],Home:[],PageUp:[],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:["/","/","/","/",0],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["1","1","1","1",0],Numpad2:["2","2","2","2",0],Numpad3:["3","3","3","3",0],Numpad4:["4","4","4","4",0],Numpad5:["5","5","5","5",0],Numpad6:["6","6","6","6",0],Numpad7:["7","7","7","7",0],Numpad8:["8","8","8","8",0],Numpad9:["9","9","9","9",0],Numpad0:["0","0","0","0",0],NumpadDecimal:[".",".",".",".",0],IntlBackslash:["\xA7","\xB1","\xA7","\xB1",0],ContextMenu:[],NumpadEqual:["=","=","=","=",0],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],AudioVolumeMute:[],AudioVolumeUp:["","=","","=",0],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:[],MetaRight:[]}});e.INSTANCE.registerKeyboardLayout({layout:{id:"com.apple.keylayout.French",lang:"fr",localizedName:"French"},secondaryLayouts:[],mapping:{KeyA:["q","Q","\u2021","\u03A9",0],KeyB:["b","B","\xDF","\u222B",0],KeyC:["c","C","\xA9","\xA2",0],KeyD:["d","D","\u2202","\u2206",0],KeyE:["e","E","\xEA","\xCA",0],KeyF:["f","F","\u0192","\xB7",0],KeyG:["g","G","\uFB01","\uFB02",0],KeyH:["h","H","\xCC","\xCE",0],KeyI:["i","I","\xEE","\xEF",0],KeyJ:["j","J","\xCF","\xCD",0],KeyK:["k","K","\xC8","\xCB",0],KeyL:["l","L","\xAC","|",0],KeyM:[",","?","\u221E","\xBF",0],KeyN:["n","N","~","\u0131",4],KeyO:["o","O","\u0153","\u0152",0],KeyP:["p","P","\u03C0","\u220F",0],KeyQ:["a","A","\xE6","\xC6",0],KeyR:["r","R","\xAE","\u201A",0],KeyS:["s","S","\xD2","\u2211",0],KeyT:["t","T","\u2020","\u2122",0],KeyU:["u","U","\xBA","\xAA",0],KeyV:["v","V","\u25CA","\u221A",0],KeyW:["z","Z","\xC2","\xC5",0],KeyX:["x","X","\u2248","\u2044",0],KeyY:["y","Y","\xDA","\u0178",0],KeyZ:["w","W","\u2039","\u203A",0],Digit1:["&","1","\uF8FF","\xB4",8],Digit2:["\xE9","2","\xEB","\u201E",0],Digit3:['"',"3","\u201C","\u201D",0],Digit4:["'","4","\u2018","\u2019",0],Digit5:["(","5","{","[",0],Digit6:["\xA7","6","\xB6","\xE5",0],Digit7:["\xE8","7","\xAB","\xBB",0],Digit8:["!","8","\xA1","\xDB",0],Digit9:["\xE7","9","\xC7","\xC1",0],Digit0:["\xE0","0","\xF8","\xD8",0],Enter:[],Escape:[],Backspace:[],Tab:[],Space:[" "," "," "," ",0],Minus:[")","\xB0","}","]",0],Equal:["-","_","\u2014","\u2013",0],BracketLeft:["^","\xA8","\xF4","\xD4",3],BracketRight:["$","*","\u20AC","\xA5",0],Backslash:["`","\xA3","@","#",1],Semicolon:["m","M","\xB5","\xD3",0],Quote:["\xF9","%","\xD9","\u2030",0],Backquote:["<",">","\u2264","\u2265",0],Comma:[";",".","\u2026","\u2022",0],Period:[":","/","\xF7","\\",0],Slash:["=","+","\u2260","\xB1",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],Insert:[],Home:[],PageUp:[],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:["/","/","/","/",0],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["1","1","1","1",0],Numpad2:["2","2","2","2",0],Numpad3:["3","3","3","3",0],Numpad4:["4","4","4","4",0],Numpad5:["5","5","5","5",0],Numpad6:["6","6","6","6",0],Numpad7:["7","7","7","7",0],Numpad8:["8","8","8","8",0],Numpad9:["9","9","9","9",0],Numpad0:["0","0","0","0",0],NumpadDecimal:[",",".",",",".",0],IntlBackslash:["@","#","\u2022","\u0178",0],ContextMenu:[],NumpadEqual:["=","=","=","=",0],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],AudioVolumeMute:[],AudioVolumeUp:["","=","","=",0],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:[],MetaRight:[]}});e.INSTANCE.registerKeyboardLayout({layout:{id:"com.apple.inputmethod.Kotoeri.Japanese",lang:"ja",localizedName:"Hiragana"},secondaryLayouts:[],mapping:{KeyA:["a","A","\xE5","\xC5",0],KeyB:["b","B","\u222B","\u0131",0],KeyC:["c","C","\xE7","\xC7",0],KeyD:["d","D","\u2202","\xCE",0],KeyE:["e","E","\xB4","\xB4",4],KeyF:["f","F","\u0192","\xCF",0],KeyG:["g","G","\xA9","\u02DD",0],KeyH:["h","H","\u02D9","\xD3",0],KeyI:["i","I","\u02C6","\u02C6",4],KeyJ:["j","J","\u2206","\xD4",0],KeyK:["k","K","\u02DA","\uF8FF",0],KeyL:["l","L","\xAC","\xD2",0],KeyM:["m","M","\xB5","\xC2",0],KeyN:["n","N","\u02DC","\u02DC",4],KeyO:["o","O","\xF8","\xD8",0],KeyP:["p","P","\u03C0","\u220F",0],KeyQ:["q","Q","\u0153","\u0152",0],KeyR:["r","R","\xAE","\u2030",0],KeyS:["s","S","\xDF","\xCD",0],KeyT:["t","T","\u2020","\u02C7",0],KeyU:["u","U","\xA8","\xA8",4],KeyV:["v","V","\u221A","\u25CA",0],KeyW:["w","W","\u2211","\u201E",0],KeyX:["x","X","\u2248","\u02DB",0],KeyY:["y","Y","\xA5","\xC1",0],KeyZ:["z","Z","\u03A9","\xB8",0],Digit1:["1","!","\xA1","\u2044",0],Digit2:["2","@","\u2122","\u20AC",0],Digit3:["3","#","\xA3","\u2039",0],Digit4:["4","$","\xA2","\u203A",0],Digit5:["5","%","\u221E","\uFB01",0],Digit6:["6","^","\xA7","\uFB02",0],Digit7:["7","&","\xB6","\u2021",0],Digit8:["8","*","\u2022","\xB0",0],Digit9:["9","(","\xAA","\xB7",0],Digit0:["0",")","\xBA","\u201A",0],Enter:[],Escape:[],Backspace:[],Tab:[],Space:[" "," "," "," ",0],Minus:["-","_","\u2013","\u2014",0],Equal:["=","+","\u2260","\xB1",0],BracketLeft:["[","{","\u201C","\u201D",0],BracketRight:["]","}","\u2018","\u2019",0],Backslash:["\\","|","\xAB","\xBB",0],Semicolon:[";",":","\u2026","\xDA",0],Quote:["'",'"',"\xE6","\xC6",0],Backquote:["`","~","`","`",4],Comma:[",","<","\u2264","\xAF",0],Period:[".",">","\u2265","\u02D8",0],Slash:["/","?","\xF7","\xBF",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],Insert:[],Home:[],PageUp:[],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:["/","/","/","/",0],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["1","1","1","1",0],Numpad2:["2","2","2","2",0],Numpad3:["3","3","3","3",0],Numpad4:["4","4","4","4",0],Numpad5:["5","5","5","5",0],Numpad6:["6","6","6","6",0],Numpad7:["7","7","7","7",0],Numpad8:["8","8","8","8",0],Numpad9:["9","9","9","9",0],Numpad0:["0","0","0","0",0],NumpadDecimal:[".",".",".",".",0],IntlBackslash:["\xA7","\xB1","\xA7","\xB1",0],ContextMenu:[],NumpadEqual:["=","=","=","=",0],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],AudioVolumeMute:[],AudioVolumeUp:["","=","","=",0],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:[],MetaRight:[]}});e.INSTANCE.registerKeyboardLayout({layout:{id:"com.apple.keylayout.PolishPro",lang:"pl",localizedName:"Polish - Pro"},secondaryLayouts:[],mapping:{KeyA:["a","A","\u0105","\u0104",0],KeyB:["b","B","\u013C","\u0171",0],KeyC:["c","C","\u0107","\u0106",0],KeyD:["d","D","\u2202","\u017D",0],KeyE:["e","E","\u0119","\u0118",0],KeyF:["f","F","\u0144","\u017E",0],KeyG:["g","G","\xA9","\u016A",0],KeyH:["h","H","\u0137","\xD3",0],KeyI:["i","I","^","\u0165",4],KeyJ:["j","J","\u2206","\xD4",0],KeyK:["k","K","\u017B","\u016B",0],KeyL:["l","L","\u0142","\u0141",0],KeyM:["m","M","\u0136","\u0173",0],KeyN:["n","N","\u0144","\u0143",0],KeyO:["o","O","\xF3","\xD3",0],KeyP:["p","P","\u013B","\u0142",0],KeyQ:["q","Q","\u014C","\u0151",0],KeyR:["r","R","\xAE","\xA3",0],KeyS:["s","S","\u015B","\u015A",0],KeyT:["t","T","\u2020","\u015B",0],KeyU:["u","U","\xA8","\u0164",4],KeyV:["v","V","\u221A","\u25CA",0],KeyW:["w","W","\u2211","\u201E",0],KeyX:["x","X","\u017A","\u0179",0],KeyY:["y","Y","\u012B","\xC1",0],KeyZ:["z","Z","\u017C","\u017B",0],Digit1:["1","!","\u0143","\u0155",0],Digit2:["2","@","\u2122","\u0158",0],Digit3:["3","#","\u20AC","\u2039",0],Digit4:["4","$","\xDF","\u203A",0],Digit5:["5","%","\u012F","\u0159",0],Digit6:["6","^","\xA7","\u0156",0],Digit7:["7","&","\xB6","\u0157",0],Digit8:["8","*","\u2022","\xB0",0],Digit9:["9","(","\u013D","\u0160",0],Digit0:["0",")","\u013E","\u201A",0],Enter:[],Escape:[],Backspace:[],Tab:[],Space:[" "," "," "," ",0],Minus:["-","_","\u2013","\u2014",0],Equal:["=","+","\u2260","\u012A",0],BracketLeft:["[","{","\u201E","\u201D",0],BracketRight:["]","}","\u201A","\u2019",0],Backslash:["\\","|","\xAB","\xBB",0],Semicolon:[";",":","\u2026","\xDA",0],Quote:["'",'"',"\u013A","\u0123",0],Backquote:["`","~","`","\u0154",4],Comma:[",","<","\u2264","\xDD",0],Period:[".",">","\u2265","\xFD",0],Slash:["/","?","\xF7","\u0146",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],Insert:[],Home:[],PageUp:[],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:["/","/","/","/",0],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["1","1","1","1",0],Numpad2:["2","2","2","2",0],Numpad3:["3","3","3","3",0],Numpad4:["4","4","4","4",0],Numpad5:["5","5","5","5",0],Numpad6:["6","6","6","6",0],Numpad7:["7","7","7","7",0],Numpad8:["8","8","8","8",0],Numpad9:["9","9","9","9",0],Numpad0:["0","0","0","0",0],NumpadDecimal:[".",".",".",".",0],IntlBackslash:["\xA7","\xA3","\xAC","\xAC",0],ContextMenu:[],NumpadEqual:["=","=","=","=",0],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],AudioVolumeMute:[],AudioVolumeUp:["","=","","=",0],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:[],MetaRight:[]}});e.INSTANCE.registerKeyboardLayout({layout:{id:"com.apple.keylayout.Italian-Pro",lang:"it",localizedName:"Italian"},secondaryLayouts:[],mapping:{KeyA:["a","A","\xE5","\xC5",0],KeyB:["b","B","\u222B","\xCD",0],KeyC:["c","C","\xA9","\xC1",0],KeyD:["d","D","\u2202","\u02D8",0],KeyE:["e","E","\u20AC","\xC8",0],KeyF:["f","F","\u0192","\u02D9",0],KeyG:["g","G","\u221E","\u02DA",0],KeyH:["h","H","\u2206","\xB8",0],KeyI:["i","I","\u0153","\u0152",0],KeyJ:["j","J","\xAA","\u02DD",0],KeyK:["k","K","\xBA","\u02DB",0],KeyL:["l","L","\xAC","\u02C7",0],KeyM:["m","M","\xB5","\xDA",0],KeyN:["n","N","\u02DC","\xD3",4],KeyO:["o","O","\xF8","\xD8",0],KeyP:["p","P","\u03C0","\u220F",0],KeyQ:["q","Q","\u201E","\u201A",0],KeyR:["r","R","\xAE","\xCC",0],KeyS:["s","S","\xDF","\xAF",0],KeyT:["t","T","\u2122","\xD2",0],KeyU:["u","U","\xA8","\xD9",4],KeyV:["v","V","\u221A","\xC9",0],KeyW:["w","W","\u03A9","\xC0",0],KeyX:["x","X","\u2020","\u2021",0],KeyY:["y","Y","\xE6","\xC6",0],KeyZ:["z","Z","\u2211"," ",0],Digit1:["1","!","\xAB","\xBB",0],Digit2:["2",'"',"\u201C","\u201D",0],Digit3:["3","\xA3","\u2018","\u2019",0],Digit4:["4","$","\xA5","\xA2",0],Digit5:["5","%","~","\u2030",0],Digit6:["6","&","\u2039","\u203A",0],Digit7:["7","/","\xF7","\u2044",0],Digit8:["8","(","\xB4","\uF8FF",4],Digit9:["9",")","`"," ",4],Digit0:["0","=","\u2260","\u2248",0],Enter:[],Escape:[],Backspace:[],Tab:[],Space:[" "," "," "," ",0],Minus:["'","?","\xA1","\xBF",0],Equal:["\xEC","^","\u02C6","\xB1",4],BracketLeft:["\xE8","\xE9","[","{",0],BracketRight:["+","*","]","}",0],Backslash:["\xF9","\xA7","\xB6","\u25CA",0],Semicolon:["\xF2","\xE7","@","\xC7",0],Quote:["\xE0","\xB0","#","\u221E",0],Backquote:["<",">","\u2264","\u2265",0],Comma:[",",";","\u2026"," ",0],Period:[".",":","\u2022","\xB7",0],Slash:["-","_","\u2013","\u2014",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],Insert:[],Home:[],PageUp:[],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:["/","/","/","/",0],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["1","1","1","1",0],Numpad2:["2","2","2","2",0],Numpad3:["3","3","3","3",0],Numpad4:["4","4","4","4",0],Numpad5:["5","5","5","5",0],Numpad6:["6","6","6","6",0],Numpad7:["7","7","7","7",0],Numpad8:["8","8","8","8",0],Numpad9:["9","9","9","9",0],Numpad0:["0","0","0","0",0],NumpadDecimal:[",",".",",",".",0],IntlBackslash:["\\","|","`","\u0131",0],ContextMenu:[],NumpadEqual:["=","=","=","=",0],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],AudioVolumeMute:[],AudioVolumeUp:["","=","","=",0],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:[],MetaRight:[]}});e.INSTANCE.registerKeyboardLayout({layout:{id:"com.apple.keylayout.Russian",lang:"ru",localizedName:"Russian"},secondaryLayouts:[],mapping:{KeyA:["\u0444","\u0424","\u0192","\u0192",0],KeyB:["\u0438","\u0418","\u0438","\u0418",0],KeyC:["\u0441","\u0421","\u2260","\u2260",0],KeyD:["\u0432","\u0412","\u045B","\u040B",0],KeyE:["\u0443","\u0423","\u045C","\u040C",0],KeyF:["\u0430","\u0410","\xF7","\xF7",0],KeyG:["\u043F","\u041F","\xA9","\xA9",0],KeyH:["\u0440","\u0420","\u20BD","\u20BD",0],KeyI:["\u0448","\u0428","\u0455","\u0405",0],KeyJ:["\u043E","\u041E","\xB0","\u2022",0],KeyK:["\u043B","\u041B","\u0459","\u0409",0],KeyL:["\u0434","\u0414","\u2206","\u2206",0],KeyM:["\u044C","\u042C","~","~",0],KeyN:["\u0442","\u0422","\u2122","\u2122",0],KeyO:["\u0449","\u0429","\u045E","\u040E",0],KeyP:["\u0437","\u0417","\u2018","\u2019",0],KeyQ:["\u0439","\u0419","\u0458","\u0408",0],KeyR:["\u043A","\u041A","\xAE","\xAE",0],KeyS:["\u044B","\u042B","\u044B","\u042B",0],KeyT:["\u0435","\u0415","\u2020","\u2020",0],KeyU:["\u0433","\u0413","\u0453","\u0403",0],KeyV:["\u043C","\u041C","\xB5","\xB5",0],KeyW:["\u0446","\u0426","\u045F","\u040F",0],KeyX:["\u0447","\u0427","\u2248","\u2248",0],KeyY:["\u043D","\u041D","\u045A","\u040A",0],KeyZ:["\u044F","\u042F","\u0452","\u0402",0],Digit1:["1","!","!","|",0],Digit2:["2",'"',"@",'"',0],Digit3:["3","\u2116","#","\xA3",0],Digit4:["4","%","$","\u20AC",0],Digit5:["5",":","%","\u221E",0],Digit6:["6",",","^","\xAC",0],Digit7:["7",".","&","\xB6",0],Digit8:["8",";","*","\u221A",0],Digit9:["9","(","{","'",0],Digit0:["0",")","}","`",0],Enter:[],Escape:[],Backspace:[],Tab:[],Space:[" "," "," "," ",0],Minus:["-","_","\u2013","\u2014",0],Equal:["=","+","\xBB","\xAB",0],BracketLeft:["\u0445","\u0425","\u201C","\u201D",0],BracketRight:["\u044A","\u042A","\u044A","\u042A",0],Backslash:["\u0451","\u0401","\u0451","\u0401",0],Semicolon:["\u0436","\u0416","\u2026","\u2026",0],Quote:["\u044D","\u042D","\u044D","\u042D",0],Backquote:["]","[","]","[",0],Comma:["\u0431","\u0411","\u2264","<",0],Period:["\u044E","\u042E","\u2265",">",0],Slash:["/","?","\u201C","\u201E",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],Insert:[],Home:[],PageUp:[],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:["/","/","/","/",0],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["1","1","1","1",0],Numpad2:["2","2","2","2",0],Numpad3:["3","3","3","3",0],Numpad4:["4","4","4","4",0],Numpad5:["5","5","5","5",0],Numpad6:["6","6","6","6",0],Numpad7:["7","7","7","7",0],Numpad8:["8","8","8","8",0],Numpad9:["9","9","9","9",0],Numpad0:["0","0","0","0",0],NumpadDecimal:[",",".",",",",",0],IntlBackslash:[">","<","\xA7","\xB1",0],ContextMenu:[],NumpadEqual:["=","=","=","=",0],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],AudioVolumeMute:[],AudioVolumeUp:["","=","","",0],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:[],MetaRight:[]}});e.INSTANCE.registerKeyboardLayout({layout:{id:"com.apple.keylayout.Brazilian-Pro",lang:"pt"},secondaryLayouts:[],mapping:{KeyA:["a","A","\xE5","\xC5",0],KeyB:["b","B","\u222B","\u0131",0],KeyC:["c","C","\xE7","\xC7",0],KeyD:["d","D","\u2202","\xCE",0],KeyE:["e","E","\xB4","\xB4",4],KeyF:["f","F","\u0192","\xCF",0],KeyG:["g","G","\xA9","\u02DD",0],KeyH:["h","H","\u02D9","\xD3",0],KeyI:["i","I","\u02C6","\u02C6",4],KeyJ:["j","J","\u2206","\xD4",0],KeyK:["k","K","\u02DA","\uF8FF",0],KeyL:["l","L","\xAC","\xD2",0],KeyM:["m","M","\xB5","\xC2",0],KeyN:["n","N","\u02DC","\u02DC",4],KeyO:["o","O","\xF8","\xD8",0],KeyP:["p","P","\u03C0","\u220F",0],KeyQ:["q","Q","\u0153","\u0152",0],KeyR:["r","R","\xAE","\u2030",0],KeyS:["s","S","\xDF","\xCD",0],KeyT:["t","T","\u2020","\u02C7",0],KeyU:["u","U","\xA8","\xA8",4],KeyV:["v","V","\u221A","\u25CA",0],KeyW:["w","W","\u2211","\u201E",0],KeyX:["x","X","\u2248","\u02DB",0],KeyY:["y","Y","\xA5","\xC1",0],KeyZ:["z","Z","\u03A9","\xB8",0],Digit1:["1","!","\xA1","\u2044",0],Digit2:["2","@","\u2122","\u20AC",0],Digit3:["3","#","\xA3","\u2039",0],Digit4:["4","$","\xA2","\u203A",0],Digit5:["5","%","\u221E","\uFB01",0],Digit6:["6","\u02C6","\xA7","\uFB02",2],Digit7:["7","&","\xB6","\u2021",0],Digit8:["8","*","\u2022","\xB0",0],Digit9:["9","(","\xAA","\xB7",0],Digit0:["0",")","\xBA","\u201A",0],Enter:[],Escape:[],Backspace:[],Tab:[],Space:[" "," "," "," ",0],Minus:["-","_","\u2013","\u2014",0],Equal:["=","+","\u2260","\xB1",0],BracketLeft:["[","{","\u201C","\u201D",0],BracketRight:["]","}","\u2018","\u2019",0],Backslash:["\\","|","\xAB","\xBB",0],Semicolon:[";",":","\u2026","\xDA",0],Quote:["'",'"',"\xE6","\xC6",3],Backquote:["`","\u02DC","`","`",7],Comma:[",","<","\u2264","\xAF",0],Period:[".",">","\u2265","\u02D8",0],Slash:["/","?","\xF7","\xBF",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],Insert:[],Home:[],PageUp:[],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:["/","/","/","/",0],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["1","1","1","1",0],Numpad2:["2","2","2","2",0],Numpad3:["3","3","3","3",0],Numpad4:["4","4","4","4",0],Numpad5:["5","5","5","5",0],Numpad6:["6","6","6","6",0],Numpad7:["7","7","7","7",0],Numpad8:["8","8","8","8",0],Numpad9:["9","9","9","9",0],Numpad0:["0","0","0","0",0],NumpadDecimal:[".",".",".",".",0],IntlBackslash:["\xA7","\xB1","\xA7","\xB1",0],ContextMenu:[],NumpadEqual:["=","=","=","=",0],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],AudioVolumeMute:[],AudioVolumeUp:["","=","","=",0],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:[],MetaRight:[]}});e.INSTANCE.registerKeyboardLayout({layout:{id:"com.apple.inputmethod.Korean.2SetKorean",lang:"ko",localizedName:"2-Set Korean"},secondaryLayouts:[],mapping:{KeyA:["\u3141","\u3141","a","A",0],KeyB:["\u3160","\u3160","b","B",0],KeyC:["\u314A","\u314A","c","C",0],KeyD:["\u3147","\u3147","d","D",0],KeyE:["\u3137","\u3138","e","E",0],KeyF:["\u3139","\u3139","f","F",0],KeyG:["\u314E","\u314E","g","G",0],KeyH:["\u3157","\u3157","h","H",0],KeyI:["\u3151","\u3151","i","I",0],KeyJ:["\u3153","\u3153","j","J",0],KeyK:["\u314F","\u314F","k","K",0],KeyL:["\u3163","\u3163","l","L",0],KeyM:["\u3161","\u3161","m","M",0],KeyN:["\u315C","\u315C","n","N",0],KeyO:["\u3150","\u3152","o","O",0],KeyP:["\u3154","\u3156","p","P",0],KeyQ:["\u3142","\u3143","q","Q",0],KeyR:["\u3131","\u3132","r","R",0],KeyS:["\u3134","\u3134","s","S",0],KeyT:["\u3145","\u3146","t","T",0],KeyU:["\u3155","\u3155","u","U",0],KeyV:["\u314D","\u314D","v","V",0],KeyW:["\u3148","\u3149","w","W",0],KeyX:["\u314C","\u314C","x","X",0],KeyY:["\u315B","\u315B","y","Y",0],KeyZ:["\u314B","\u314B","z","Z",0],Digit1:["1","!","1","!",0],Digit2:["2","@","2","@",0],Digit3:["3","#","3","#",0],Digit4:["4","$","4","$",0],Digit5:["5","%","5","%",0],Digit6:["6","^","6","^",0],Digit7:["7","&","7","&",0],Digit8:["8","*","8","*",0],Digit9:["9","(","9","(",0],Digit0:["0",")","0",")",0],Enter:[],Escape:["","","","\u200C",0],Backspace:[],Tab:[],Space:[" "," "," "," ",0],Minus:["-","_","-","_",0],Equal:["=","+","=","+",0],BracketLeft:["[","{","[","{",0],BracketRight:["]","}","]","}",0],Backslash:["\\","|","\\","|",0],Semicolon:[";",":",";",":",0],Quote:["'",'"',"'",'"',0],Backquote:["\u20A9","~","`","~",0],Comma:[",","<",",","<",0],Period:[".",">",".",">",0],Slash:["/","?","/","?",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],Insert:[],Home:[],PageUp:[],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:["/","/","/","/",0],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["1","1","1","1",0],Numpad2:["2","2","2","2",0],Numpad3:["3","3","3","3",0],Numpad4:["4","4","4","4",0],Numpad5:["5","5","5","5",0],Numpad6:["6","6","6","6",0],Numpad7:["7","7","7","7",0],Numpad8:["8","8","8","8",0],Numpad9:["9","9","9","9",0],Numpad0:["0","0","0","0",0],NumpadDecimal:[".",".",".",".",0],IntlBackslash:["\xA7","\xB1","\xA7","\xB1",0],ContextMenu:[],NumpadEqual:["=","=","=","=",0],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],AudioVolumeMute:[],AudioVolumeUp:["","=","","=",0],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:[],MetaRight:[]}});e.INSTANCE.registerKeyboardLayout({layout:{id:"com.apple.keylayout.Dvorak",localizedName:"Dvorak",lang:"en"},secondaryLayouts:[],mapping:{KeyA:["a","A","\xE5","\xC5",0],KeyB:["x","X","\u2248","\u02DB",0],KeyC:["j","J","\u2206","\xD4",0],KeyD:["e","E","\xB4","\xB4",4],KeyE:[".",">","\u2265","\u02D8",0],KeyF:["u","U","\xA8","\xA8",4],KeyG:["i","I","\u02C6","\u02C6",4],KeyH:["d","D","\u2202","\xCE",0],KeyI:["c","C","\xE7","\xC7",0],KeyJ:["h","H","\u02D9","\xD3",0],KeyK:["t","T","\u2020","\u02C7",0],KeyL:["n","N","\u02DC","\u02DC",4],KeyM:["m","M","\xB5","\xC2",0],KeyN:["b","B","\u222B","\u0131",0],KeyO:["r","R","\xAE","\u2030",0],KeyP:["l","L","\xAC","\xD2",0],KeyQ:["'",'"',"\xE6","\xC6",0],KeyR:["p","P","\u03C0","\u220F",0],KeyS:["o","O","\xF8","\xD8",0],KeyT:["y","Y","\xA5","\xC1",0],KeyU:["g","G","\xA9","\u02DD",0],KeyV:["k","K","\u02DA","\uF8FF",0],KeyW:[",","<","\u2264","\xAF",0],KeyX:["q","Q","\u0153","\u0152",0],KeyY:["f","F","\u0192","\xCF",0],KeyZ:[";",":","\u2026","\xDA",0],Digit1:["1","!","\xA1","\u2044",0],Digit2:["2","@","\u2122","\u20AC",0],Digit3:["3","#","\xA3","\u2039",0],Digit4:["4","$","\xA2","\u203A",0],Digit5:["5","%","\u221E","\uFB01",0],Digit6:["6","^","\xA7","\uFB02",0],Digit7:["7","&","\xB6","\u2021",0],Digit8:["8","*","\u2022","\xB0",0],Digit9:["9","(","\xAA","\xB7",0],Digit0:["0",")","\xBA","\u201A",0],Enter:[],Escape:[],Backspace:[],Tab:[],Space:[" "," "," "," ",0],Minus:["[","{","\u201C","\u201D",0],Equal:["]","}","\u2018","\u2019",0],BracketLeft:["/","?","\xF7","\xBF",0],BracketRight:["=","+","\u2260","\xB1",0],Backslash:["\\","|","\xAB","\xBB",0],Semicolon:["s","S","\xDF","\xCD",0],Quote:["-","_","\u2013","\u2014",0],Backquote:["`","~","`","`",4],Comma:["w","W","\u2211","\u201E",0],Period:["v","V","\u221A","\u25CA",0],Slash:["z","Z","\u03A9","\xB8",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],Insert:[],Home:[],PageUp:[],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:["/","/","/","/",0],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["1","1","1","1",0],Numpad2:["2","2","2","2",0],Numpad3:["3","3","3","3",0],Numpad4:["4","4","4","4",0],Numpad5:["5","5","5","5",0],Numpad6:["6","6","6","6",0],Numpad7:["7","7","7","7",0],Numpad8:["8","8","8","8",0],Numpad9:["9","9","9","9",0],Numpad0:["0","0","0","0",0],NumpadDecimal:[".",".",".",".",0],IntlBackslash:["\xA7","\xB1","\xA7","\xB1",0],ContextMenu:[],NumpadEqual:["=","=","=","=",0],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],AudioVolumeMute:[],AudioVolumeUp:["","=","","=",0],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:[],MetaRight:[]}});export{e as KeyboardLayoutContribution};
//# sourceMappingURL=https://main.vscode-cdn.net/sourcemaps/0870c2a0c7c0564e7631bfed2675573a94ba4455/core/vs/workbench/services/keybinding/browser/keyboardLayouts/layout.contribution.darwin.js.map
