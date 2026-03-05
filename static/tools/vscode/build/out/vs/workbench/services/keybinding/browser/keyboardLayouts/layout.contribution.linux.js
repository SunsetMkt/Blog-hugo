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

var e=class a{constructor(){this._layoutInfos=[]}static{this.INSTANCE=new a}get layoutInfos(){return this._layoutInfos}registerKeyboardLayout(t){this._layoutInfos.push(t)}};e.INSTANCE.registerKeyboardLayout({layout:{model:"pc105",group:0,layout:"us",variant:"",options:"",rules:"evdev",isUSStandard:!0},secondaryLayouts:[{model:"pc105",group:0,layout:"cn",variant:"",options:"",rules:"evdev"}],mapping:{Sleep:[],WakeUp:[],KeyA:["a","A","a","A",0],KeyB:["b","B","b","B",0],KeyC:["c","C","c","C",0],KeyD:["d","D","d","D",0],KeyE:["e","E","e","E",0],KeyF:["f","F","f","F",0],KeyG:["g","G","g","G",0],KeyH:["h","H","h","H",0],KeyI:["i","I","i","I",0],KeyJ:["j","J","j","J",0],KeyK:["k","K","k","K",0],KeyL:["l","L","l","L",0],KeyM:["m","M","m","M",0],KeyN:["n","N","n","N",0],KeyO:["o","O","o","O",0],KeyP:["p","P","p","P",0],KeyQ:["q","Q","q","Q",0],KeyR:["r","R","r","R",0],KeyS:["s","S","s","S",0],KeyT:["t","T","t","T",0],KeyU:["u","U","u","U",0],KeyV:["v","V","v","V",0],KeyW:["w","W","w","W",0],KeyX:["x","X","x","X",0],KeyY:["y","Y","y","Y",0],KeyZ:["z","Z","z","Z",0],Digit1:["1","!","1","!",0],Digit2:["2","@","2","@",0],Digit3:["3","#","3","#",0],Digit4:["4","$","4","$",0],Digit5:["5","%","5","%",0],Digit6:["6","^","6","^",0],Digit7:["7","&","7","&",0],Digit8:["8","*","8","*",0],Digit9:["9","(","9","(",0],Digit0:["0",")","0",")",0],Enter:["\r","\r","\r","\r",0],Escape:["\x1B","\x1B","\x1B","\x1B",0],Backspace:["\b","\b","\b","\b",0],Tab:["	","","	","",0],Space:[" "," "," "," ",0],Minus:["-","_","-","_",0],Equal:["=","+","=","+",0],BracketLeft:["[","{","[","{",0],BracketRight:["]","}","]","}",0],Backslash:["\\","|","\\","|",0],Semicolon:[";",":",";",":",0],Quote:["'",'"',"'",'"',0],Backquote:["`","~","`","~",0],Comma:[",","<",",","<",0],Period:[".",">",".",">",0],Slash:["/","?","/","?",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],PrintScreen:[],ScrollLock:[],Pause:[],Insert:[],Home:[],PageUp:[],Delete:["","","","",0],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:["/","/","/","/",0],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:["\r","\r","\r","\r",0],Numpad1:["","1","","1",0],Numpad2:["","2","","2",0],Numpad3:["","3","","3",0],Numpad4:["","4","","4",0],Numpad5:["","5","","5",0],Numpad6:["","6","","6",0],Numpad7:["","7","","7",0],Numpad8:["","8","","8",0],Numpad9:["","9","","9",0],Numpad0:["","0","","0",0],NumpadDecimal:["",".","",".",0],IntlBackslash:["<",">","|","\xA6",0],ContextMenu:[],Power:[],NumpadEqual:["=","=","=","=",0],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],F21:[],F22:[],F23:[],F24:[],Open:[],Help:[],Select:[],Again:[],Undo:[],Cut:[],Copy:[],Paste:[],Find:[],AudioVolumeMute:[],AudioVolumeUp:[],AudioVolumeDown:[],NumpadComma:[".",".",".",".",0],IntlRo:[],KanaMode:[],IntlYen:[],Convert:[],NonConvert:[],Lang1:[],Lang2:[],Lang3:[],Lang4:[],Lang5:[],NumpadParenLeft:["(","(","(","(",0],NumpadParenRight:[")",")",")",")",0],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:[],MetaRight:[],BrightnessUp:[],BrightnessDown:[],MediaPlay:[],MediaRecord:[],MediaFastForward:[],MediaRewind:[],MediaTrackNext:[],MediaTrackPrevious:[],MediaStop:[],Eject:[],MediaPlayPause:[],MediaSelect:[],LaunchMail:[],LaunchApp2:[],LaunchApp1:[],SelectTask:[],LaunchScreenSaver:[],BrowserSearch:[],BrowserHome:[],BrowserBack:[],BrowserForward:[],BrowserStop:[],BrowserRefresh:[],BrowserFavorites:[],MailReply:[],MailForward:[],MailSend:[]}});e.INSTANCE.registerKeyboardLayout({layout:{model:"pc105",group:0,layout:"es",variant:"",options:"",rules:"evdev"},secondaryLayouts:[],mapping:{Sleep:[],WakeUp:[],KeyA:["a","A","\xE6","\xC6",0],KeyB:["b","B","\u201D","\u2019",0],KeyC:["c","C","\xA2","\xA9",0],KeyD:["d","D","\xF0","\xD0",0],KeyE:["e","E","\u20AC","\xA2",0],KeyF:["f","F","\u0111","\xAA",0],KeyG:["g","G","\u014B","\u014A",0],KeyH:["h","H","\u0127","\u0126",0],KeyI:["i","I","\u2192","\u0131",0],KeyJ:["j","J","\u0309","\u031B",0],KeyK:["k","K","\u0138","&",0],KeyL:["l","L","\u0142","\u0141",0],KeyM:["m","M","\xB5","\xBA",0],KeyN:["n","N","n","N",0],KeyO:["o","O","\xF8","\xD8",0],KeyP:["p","P","\xFE","\xDE",0],KeyQ:["q","Q","@","\u03A9",0],KeyR:["r","R","\xB6","\xAE",0],KeyS:["s","S","\xDF","\xA7",0],KeyT:["t","T","\u0167","\u0166",0],KeyU:["u","U","\u2193","\u2191",0],KeyV:["v","V","\u201C","\u2018",0],KeyW:["w","W","\u0142","\u0141",0],KeyX:["x","X","\xBB",">",0],KeyY:["y","Y","\u2190","\xA5",0],KeyZ:["z","Z","\xAB","<",0],Digit1:["1","!","|","\xA1",0],Digit2:["2",'"',"@","\u215B",0],Digit3:["3","\xB7","#","\xA3",0],Digit4:["4","$","~","$",0],Digit5:["5","%","\xBD","\u215C",0],Digit6:["6","&","\xAC","\u215D",0],Digit7:["7","/","{","\u215E",0],Digit8:["8","(","[","\u2122",0],Digit9:["9",")","]","\xB1",0],Digit0:["0","=","}","\xB0",0],Enter:["\r","\r","\r","\r",0],Escape:["\x1B","\x1B","\x1B","\x1B",0],Backspace:["\b","\b","\b","\b",0],Tab:["	","","	","",0],Space:[" "," "," "," ",0],Minus:["'","?","\\","\xBF",0],Equal:["\xA1","\xBF","\u0303","~",0],BracketLeft:["\u0300","\u0302","[","\u030A",0],BracketRight:["+","*","]","\u0304",0],Backslash:["\xE7","\xC7","}","\u0306",0],Semicolon:["\xF1","\xD1","~","\u030B",0],Quote:["\u0301","\u0308","{","{",0],Backquote:["\xBA","\xAA","\\","\\",0],Comma:[",",";","\u2500","\xD7",0],Period:[".",":","\xB7","\xF7",0],Slash:["-","_","\u0323","\u0307",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],PrintScreen:[],ScrollLock:[],Pause:[],Insert:[],Home:[],PageUp:[],Delete:["","","","",0],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:["/","/","/","/",0],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:["\r","\r","\r","\r",0],Numpad1:["","1","","1",0],Numpad2:["","2","","2",0],Numpad3:["","3","","3",0],Numpad4:["","4","","4",0],Numpad5:["","5","","5",0],Numpad6:["","6","","6",0],Numpad7:["","7","","7",0],Numpad8:["","8","","8",0],Numpad9:["","9","","9",0],Numpad0:["","0","","0",0],NumpadDecimal:["",".","",".",0],IntlBackslash:["<",">","|","\xA6",0],ContextMenu:[],Power:[],NumpadEqual:["=","=","=","=",0],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],F21:[],F22:[],F23:[],F24:[],Open:[],Help:[],Select:[],Again:[],Undo:[],Cut:[],Copy:[],Paste:[],Find:[],AudioVolumeMute:[],AudioVolumeUp:[],AudioVolumeDown:[],NumpadComma:[".",".",".",".",0],IntlRo:[],KanaMode:[],IntlYen:[],Convert:[],NonConvert:[],Lang1:[],Lang2:[],Lang3:[],Lang4:[],Lang5:[],NumpadParenLeft:["(","(","(","(",0],NumpadParenRight:[")",")",")",")",0],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:[],MetaRight:[],BrightnessUp:[],BrightnessDown:[],MediaPlay:[],MediaRecord:[],MediaFastForward:[],MediaRewind:[],MediaTrackNext:[],MediaTrackPrevious:[],MediaStop:[],Eject:[],MediaPlayPause:[],MediaSelect:[],LaunchMail:[],LaunchApp2:[],LaunchApp1:[],SelectTask:[],LaunchScreenSaver:[],BrowserSearch:[],BrowserHome:[],BrowserBack:[],BrowserForward:[],BrowserStop:[],BrowserRefresh:[],BrowserFavorites:[],MailReply:[],MailForward:[],MailSend:[]}});e.INSTANCE.registerKeyboardLayout({layout:{model:"pc104",group:0,layout:"de",variant:"",options:"",rules:"base"},secondaryLayouts:[],mapping:{Sleep:[],WakeUp:[],KeyA:["a","A","\xE6","\xC6",0],KeyB:["b","B","\u201C","\u2018",0],KeyC:["c","C","\xA2","\xA9",0],KeyD:["d","D","\xF0","\xD0",0],KeyE:["e","E","\u20AC","\u20AC",0],KeyF:["f","F","\u0111","\xAA",0],KeyG:["g","G","\u014B","\u014A",0],KeyH:["h","H","\u0127","\u0126",0],KeyI:["i","I","\u2192","\u0131",0],KeyJ:["j","J","\u0323","\u0307",0],KeyK:["k","K","\u0138","&",0],KeyL:["l","L","\u0142","\u0141",0],KeyM:["m","M","\xB5","\xBA",0],KeyN:["n","N","\u201D","\u2019",0],KeyO:["o","O","\xF8","\xD8",0],KeyP:["p","P","\xFE","\xDE",0],KeyQ:["q","Q","@","\u03A9",0],KeyR:["r","R","\xB6","\xAE",0],KeyS:["s","S","\u017F","\u1E9E",0],KeyT:["t","T","\u0167","\u0166",0],KeyU:["u","U","\u2193","\u2191",0],KeyV:["v","V","\u201E","\u201A",0],KeyW:["w","W","\u0142","\u0141",0],KeyX:["x","X","\xAB","\u2039",0],KeyY:["z","Z","\u2190","\xA5",0],KeyZ:["y","Y","\xBB","\u203A",0],Digit1:["1","!","\xB9","\xA1",0],Digit2:["2",'"',"\xB2","\u215B",0],Digit3:["3","\xA7","\xB3","\xA3",0],Digit4:["4","$","\xBC","\xA4",0],Digit5:["5","%","\xBD","\u215C",0],Digit6:["6","&","\xAC","\u215D",0],Digit7:["7","/","{","\u215E",0],Digit8:["8","(","[","\u2122",0],Digit9:["9",")","]","\xB1",0],Digit0:["0","=","}","\xB0",0],Enter:["\r","\r","\r","\r",0],Escape:["\x1B","\x1B","\x1B","\x1B",0],Backspace:["\b","\b","\b","\b",0],Tab:["	","","	","",0],Space:[" "," "," "," ",0],Minus:["\xDF","?","\\","\xBF",0],Equal:["\u0301","\u0300","\u0327","\u0328",0],BracketLeft:["\xFC","\xDC","\u0308","\u030A",0],BracketRight:["+","*","~","\xAF",0],Backslash:["#","'","\u2019","\u0306",0],Semicolon:["\xF6","\xD6","\u030B","\u0323",0],Quote:["\xE4","\xC4","\u0302","\u030C",0],Backquote:["\u0302","\xB0","\u2032","\u2033",0],Comma:[",",";","\xB7","\xD7",0],Period:[".",":","\u2026","\xF7",0],Slash:["-","_","\u2013","\u2014",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],PrintScreen:["","","","",0],ScrollLock:[],Pause:[],Insert:[],Home:[],PageUp:["/","/","/","/",0],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:[],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["","1","","1",0],Numpad2:["","2","","2",0],Numpad3:["","3","","3",0],Numpad4:["","4","","4",0],Numpad5:["","5","","5",0],Numpad6:["","6","","6",0],Numpad7:["","7","","7",0],Numpad8:["","8","","8",0],Numpad9:["","9","","9",0],Numpad0:["","0","","0",0],NumpadDecimal:["",",","",",",0],IntlBackslash:["<",">","|","\u0331",0],ContextMenu:[],Power:[],NumpadEqual:[],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],F21:[],F22:[],F23:[],F24:[],Open:[],Help:[],Select:[],Again:[],Undo:[],Cut:[],Copy:[],Paste:[],Find:[],AudioVolumeMute:[],AudioVolumeUp:[],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],Convert:[],NonConvert:[],Lang1:[],Lang2:[],Lang3:[],Lang4:[],Lang5:[],NumpadParenLeft:[],NumpadParenRight:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:["\r","\r","\r","\r",0],MetaRight:[".",".",".",".",0],BrightnessUp:[],BrightnessDown:[],MediaPlay:[],MediaRecord:[],MediaFastForward:[],MediaRewind:[],MediaTrackNext:[],MediaTrackPrevious:[],MediaStop:[],Eject:[],MediaPlayPause:[],MediaSelect:[],LaunchMail:[],LaunchApp2:[],LaunchApp1:[],SelectTask:[],LaunchScreenSaver:[],BrowserSearch:[],BrowserHome:[],BrowserBack:[],BrowserForward:[],BrowserStop:[],BrowserRefresh:[],BrowserFavorites:[],MailReply:[],MailForward:[],MailSend:[]}});e.INSTANCE.registerKeyboardLayout({layout:{model:"pc104",group:0,layout:"fr",variant:"",options:"",rules:"base"},secondaryLayouts:[],mapping:{Sleep:[],WakeUp:[],KeyA:["q","Q","@","\u03A9",0],KeyB:["b","B","\u201D","\u2019",0],KeyC:["c","C","\xA2","\xA9",0],KeyD:["d","D","\xF0","\xD0",0],KeyE:["e","E","\u20AC","\xA2",0],KeyF:["f","F","\u0111","\xAA",0],KeyG:["g","G","\u014B","\u014A",0],KeyH:["h","H","\u0127","\u0126",0],KeyI:["i","I","\u2192","\u0131",0],KeyJ:["j","J","\u0309","\u031B",0],KeyK:["k","K","\u0138","&",0],KeyL:["l","L","\u0142","\u0141",0],KeyM:[",","?","\u0301","\u030B",0],KeyN:["n","N","n","N",0],KeyO:["o","O","\xF8","\xD8",0],KeyP:["p","P","\xFE","\xDE",0],KeyQ:["a","A","\xE6","\xC6",0],KeyR:["r","R","\xB6","\xAE",0],KeyS:["s","S","\xDF","\xA7",0],KeyT:["t","T","\u0167","\u0166",0],KeyU:["u","U","\u2193","\u2191",0],KeyV:["v","V","\u201C","\u2018",0],KeyW:["z","Z","\xAB","<",0],KeyX:["x","X","\xBB",">",0],KeyY:["y","Y","\u2190","\xA5",0],KeyZ:["w","W","\u0142","\u0141",0],Digit1:["&","1","\xB9","\xA1",0],Digit2:["\xE9","2","~","\u215B",0],Digit3:['"',"3","#","\xA3",0],Digit4:["'","4","{","$",0],Digit5:["(","5","[","\u215C",0],Digit6:["-","6","|","\u215D",0],Digit7:["\xE8","7","`","\u215E",0],Digit8:["_","8","\\","\u2122",0],Digit9:["\xE7","9","^","\xB1",0],Digit0:["\xE0","0","@","\xB0",0],Enter:["\r","\r","\r","\r",0],Escape:["\x1B","\x1B","\x1B","\x1B",0],Backspace:["\b","\b","\b","\b",0],Tab:["	","","	","",0],Space:[" "," "," "," ",0],Minus:[")","\xB0","]","\xBF",0],Equal:["=","+","}","\u0328",0],BracketLeft:["\u0302","\u0308","\u0308","\u030A",0],BracketRight:["$","\xA3","\xA4","\u0304",0],Backslash:["*","\xB5","\u0300","\u0306",0],Semicolon:["m","M","\xB5","\xBA",0],Quote:["\xF9","%","\u0302","\u030C",0],Backquote:["\xB2","~","\xAC","\xAC",0],Comma:[";",".","\u2500","\xD7",0],Period:[":","/","\xB7","\xF7",0],Slash:["!","\xA7","\u0323","\u0307",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],PrintScreen:["","","","",0],ScrollLock:[],Pause:[],Insert:[],Home:[],PageUp:["/","/","/","/",0],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:[],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["","1","","1",0],Numpad2:["","2","","2",0],Numpad3:["","3","","3",0],Numpad4:["","4","","4",0],Numpad5:["","5","","5",0],Numpad6:["","6","","6",0],Numpad7:["","7","","7",0],Numpad8:["","8","","8",0],Numpad9:["","9","","9",0],Numpad0:["","0","","0",0],NumpadDecimal:["",".","",".",0],IntlBackslash:["<",">","|","\xA6",0],ContextMenu:[],Power:[],NumpadEqual:[],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],F21:[],F22:[],F23:[],F24:[],Open:[],Help:[],Select:[],Again:[],Undo:[],Cut:[],Copy:[],Paste:[],Find:[],AudioVolumeMute:[],AudioVolumeUp:[],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],Convert:[],NonConvert:[],Lang1:[],Lang2:[],Lang3:[],Lang4:[],Lang5:[],NumpadParenLeft:[],NumpadParenRight:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:["\r","\r","\r","\r",0],MetaRight:[".",".",".",".",0],BrightnessUp:[],BrightnessDown:[],MediaPlay:[],MediaRecord:[],MediaFastForward:[],MediaRewind:[],MediaTrackNext:[],MediaTrackPrevious:[],MediaStop:[],Eject:[],MediaPlayPause:[],MediaSelect:[],LaunchMail:[],LaunchApp2:[],LaunchApp1:[],SelectTask:[],LaunchScreenSaver:[],BrowserSearch:[],BrowserHome:[],BrowserBack:[],BrowserForward:[],BrowserStop:[],BrowserRefresh:[],BrowserFavorites:[],MailReply:[],MailForward:[],MailSend:[]}});e.INSTANCE.registerKeyboardLayout({layout:{model:"pc104",group:0,layout:"ru",variant:",",options:"",rules:"base"},secondaryLayouts:[],mapping:{Sleep:[],WakeUp:[],KeyA:["\u0444","\u0424","\u0444","\u0424",0],KeyB:["\u0438","\u0418","\u0438","\u0418",0],KeyC:["\u0441","\u0421","\u0441","\u0421",0],KeyD:["\u0432","\u0412","\u0432","\u0412",0],KeyE:["\u0443","\u0423","\u0443","\u0423",0],KeyF:["\u0430","\u0410","\u0430","\u0410",0],KeyG:["\u043F","\u041F","\u043F","\u041F",0],KeyH:["\u0440","\u0420","\u0440","\u0420",0],KeyI:["\u0448","\u0428","\u0448","\u0428",0],KeyJ:["\u043E","\u041E","\u043E","\u041E",0],KeyK:["\u043B","\u041B","\u043B","\u041B",0],KeyL:["\u0434","\u0414","\u0434","\u0414",0],KeyM:["\u044C","\u042C","\u044C","\u042C",0],KeyN:["\u0442","\u0422","\u0442","\u0422",0],KeyO:["\u0449","\u0429","\u0449","\u0429",0],KeyP:["\u0437","\u0417","\u0437","\u0417",0],KeyQ:["\u0439","\u0419","\u0439","\u0419",0],KeyR:["\u043A","\u041A","\u043A","\u041A",0],KeyS:["\u044B","\u042B","\u044B","\u042B",0],KeyT:["\u0435","\u0415","\u0435","\u0415",0],KeyU:["\u0433","\u0413","\u0433","\u0413",0],KeyV:["\u043C","\u041C","\u043C","\u041C",0],KeyW:["\u0446","\u0426","\u0446","\u0426",0],KeyX:["\u0447","\u0427","\u0447","\u0427",0],KeyY:["\u043D","\u041D","\u043D","\u041D",0],KeyZ:["\u044F","\u042F","\u044F","\u042F",0],Digit1:["1","!","1","!",0],Digit2:["2",'"',"2",'"',0],Digit3:["3","\u2116","3","\u2116",0],Digit4:["4",";","4",";",0],Digit5:["5","%","5","%",0],Digit6:["6",":","6",":",0],Digit7:["7","?","7","?",0],Digit8:["8","*","\u20BD","",0],Digit9:["9","(","9","(",0],Digit0:["0",")","0",")",0],Enter:["\r","\r","\r","\r",0],Escape:["\x1B","\x1B","\x1B","\x1B",0],Backspace:["\b","\b","\b","\b",0],Tab:["	","","	","",0],Space:[" "," "," "," ",0],Minus:["-","_","-","_",0],Equal:["=","+","=","+",0],BracketLeft:["\u0445","\u0425","\u0445","\u0425",0],BracketRight:["\u044A","\u042A","\u044A","\u042A",0],Backslash:["\\","/","\\","/",0],Semicolon:["\u0436","\u0416","\u0436","\u0416",0],Quote:["\u044D","\u042D","\u044D","\u042D",0],Backquote:["\u0451","\u0401","\u0451","\u0401",0],Comma:["\u0431","\u0411","\u0431","\u0411",0],Period:["\u044E","\u042E","\u044E","\u042E",0],Slash:[".",",",".",",",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],PrintScreen:["","","","",0],ScrollLock:[],Pause:[],Insert:[],Home:[],PageUp:["/","/","/","/",0],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:[],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["","1","","1",0],Numpad2:["","2","","2",0],Numpad3:["","3","","3",0],Numpad4:["","4","","4",0],Numpad5:["","5","","5",0],Numpad6:["","6","","6",0],Numpad7:["","7","","7",0],Numpad8:["","8","","8",0],Numpad9:["","9","","9",0],Numpad0:["","0","","0",0],NumpadDecimal:["",",","",",",0],IntlBackslash:["/","|","|","\xA6",0],ContextMenu:[],Power:[],NumpadEqual:[],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],F21:[],F22:[],F23:[],F24:[],Open:[],Help:[],Select:[],Again:[],Undo:[],Cut:[],Copy:[],Paste:[],Find:[],AudioVolumeMute:[],AudioVolumeUp:[],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],Convert:[],NonConvert:[],Lang1:[],Lang2:[],Lang3:[],Lang4:[],Lang5:[],NumpadParenLeft:[],NumpadParenRight:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:["\r","\r","\r","\r",0],MetaRight:[".",".",".",".",0],BrightnessUp:[],BrightnessDown:[],MediaPlay:[],MediaRecord:[],MediaFastForward:[],MediaRewind:[],MediaTrackNext:[],MediaTrackPrevious:[],MediaStop:[],Eject:[],MediaPlayPause:[],MediaSelect:[],LaunchMail:[],LaunchApp2:[],LaunchApp1:[],SelectTask:[],LaunchScreenSaver:[],BrowserSearch:[],BrowserHome:[],BrowserBack:[],BrowserForward:[],BrowserStop:[],BrowserRefresh:[],BrowserFavorites:[],MailReply:[],MailForward:[],MailSend:[]}});export{e as KeyboardLayoutContribution};
//# sourceMappingURL=https://main.vscode-cdn.net/sourcemaps/0870c2a0c7c0564e7631bfed2675573a94ba4455/core/vs/workbench/services/keybinding/browser/keyboardLayouts/layout.contribution.linux.js.map
