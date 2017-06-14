function $_global_init() {
    String.prototype.trim = function () {
        return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    };
    currentCtx = null;
    itemTable = null;
    if ("undefined" == typeof g_supportFiles) g_supportFiles = new Array(0);
    if (!Boolean(ULS)) ULS = new ULSObject;
    ULSObject.prototype = {
        bucket: undefined, request: undefined, Correlation: undefined, OnReceiveBucketParameters: undefined, WebServiceNS: undefined, file: undefined, line: undefined, callStack: undefined, clientInfo: undefined, enable: undefined
    };
    if (typeof window.onerror != "undefined" && window.onerror != ULSOnError) {
        ULS.OriginalOnError = window.onerror;
        window.onerror = ULSOnError
    }
    if (!Boolean(ULSCat)) ULSCat = {};
    ULSCat.msoulscat_WSS_General = "WSS";
    ULSCat.msoulscat_WSS_DeltaManager = "DeltaManager";
    ULSCat.msoulscat_WSS_Inplview = "Inplview";
    ULSCat.msoulscat_WSS_JsGrid = "JsGrid";
    ULSCat.msoulscat_WSS_MediaPlayer = "MediaPlayer";
    ULSCat.msoulscat_WSS_SPGantt = "SPGantt";
    ULS.AssertJS = function (c, b, d) {
        if (b == false) {
            var a = "[Category: " + c + "] [Assert: " + d + "]";
            ULSSendExceptionImpl(a, window.location.href, 0, ULS.AssertJS.caller)
        }

    };
    ULS.SendErrorMessageJS = function (b, c) {
        var a = "[Category: " + b + "] [Error: " + c + "]";
        ULSSendExceptionImpl(a, window.location.href, 0, ULS.SendErrorMessageJS.caller)
    };
    ULS.SendExceptionJS = function (c, b) {
        var a;
        if (b != null) {
            var d = b.message, e = b.name;
            if (typeof d != "undefined" && typeof e != "undefined") a = "[Category: " + c + "] [Exception Name: " + e + ", Exception Message: " + d + "]";
            else a = "[Category: " + c + "] [Exception: " + b.toString() + "]"
        }
        else a = "[Category: " + c + "] [Exception: Null Exception]";
        ULSSendExceptionImpl(a, window.location.href, 0, ULS.SendExceptionJS.caller)
    };
    Browseris.prototype = {
        firefox: undefined, firefox36up: undefined, firefox3up: undefined, firefox4up: undefined, ie: undefined, ie55up: undefined, ie5up: undefined, ie7down: undefined, ie8down: undefined, ie8standard: undefined, ie8standardUp: undefined, ie9standardUp: undefined, ipad: undefined, windowsphone7: undefined, chrome: undefined, chrome7up: undefined, chrome8up: undefined, chrome9up: undefined, iever: undefined, mac: undefined, major: undefined, msTouch: undefined, isTouch: undefined, nav: undefined, nav6: undefined, nav6up: undefined, nav7up: undefined, osver: undefined, safari: undefined, safari125up: undefined, safari3up: undefined, safariMobile: undefined, verIEFull: undefined, w3c: undefined, webKit: undefined, win: undefined, win8AppHost: undefined, win32: undefined, win64bit: undefined, winnt: undefined, armProcessor: undefined
    };
    browseris = new Browseris;
    bis = browseris;
    typeof Sys != "undefined" && Boolean(Sys) && typeof Sys.Application != "undefined" && Boolean(Sys.Application) && typeof Sys.Application.notifyScriptLoaded == "function" && Sys.Application.notifyScriptLoaded();
    typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function" && NotifyScriptLoadedAndExecuteWaitingJobs("owsbrows.js");
    g_cde = {};
    UTF8_1ST_OF_2 = 192;
    UTF8_1ST_OF_3 = 224;
    UTF8_1ST_OF_4 = 240;
    UTF8_TRAIL = 128;
    HIGH_SURROGATE_BITS = 55296;
    LOW_SURROGATE_BITS = 56320;
    SURROGATE_6_BIT = 64512;
    SURROGATE_ID_BITS = 63488;
    SURROGATE_OFFSET = 65536;
    if (typeof String.prototype.endsWith == "undefined") String.prototype.endsWith = function (a) {
        return this.substr(this.length - a.length) === a
    };
    if (typeof String.prototype.startsWith == "undefined") String.prototype.startsWith = function (a) {
        return this.substr(0, a.length) === a
    };
    XUIHtml = {};
    XUIHtml.SetOpacity = function (a, b) {
        if (typeof a.style == "undefined") return;
        if (document.body.style.opacity != null) if (b == 1) XUIHtml.RemoveCSSProperty(a, "opacity");
        else a.style.opacity = b;
        else if (b == 1) XUIHtml.RemoveCSSProperty(a, "filter");
        else a.style.filter = "alpha(opacity=" + String(b * 100) + ")"
    };
    XUIHtml.RemoveCSSProperty = function (a, b) {
        if (typeof a.style.removeProperty != "undefined") a.style.removeProperty(b);
        else a.style.removeAttribute(b)
    };
    XUIHtml.GetOpacity = function (a) {
        if (typeof a.style == "undefined") return -1;
        if (document.body.style.opacity != null) {
            var c = a.style.opacity;
            return c != null && c != "" ? parseFloat(c) : 1
        }
        else {
            var b = a.style.filter;
            return b != null && b != "" ? parseInt(b.replace("alpha(opacity=", "").replace(")", "")) / 100 : 1
        }

    };
    LegalUrlChars = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, true, false, false, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    typeof Sys != "undefined" && Boolean(Sys) && Boolean(Sys.Application) && Sys.Application.notifyScriptLoaded();
    typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function" && NotifyScriptLoadedAndExecuteWaitingJobs("commonvalidation.js");
    recycleBinEnabled = 0;
    cascadeDeleteWarningMessage = "";
    bIsFileDialogView = false;
    g_ViewIdToViewCounterMap = [];
    g_ctxDict = [];
    bIsFileDialogView = false;
    g_ViewIdToViewCounterMap = [];
    g_ctxDict = [];
    g_rgdwchMinEncoded = [0, 128, 2048, 65536, 2097152, 67108864, 2147483648];
    g_updateFormDigestPageLoaded = new Date;
    g_objProjectTaskLaunch = null;
    g_ssImporterObj = null;
    g_fSSImporter = false;
    BasePermissions.prototype = {
        ManageLists: undefined, OpenItems: undefined
    };
    ContextInfo.prototype = {
        AllowGridMode: undefined, BasePermissions: undefined, BaseViewID: undefined, CascadeDeleteWarningMessage: undefined, ContentTypesEnabled: undefined, CurrentSelectedItems: undefined, CurrentUserId: undefined, EnableMinorVersions: undefined, ExternalDataList: undefined, HasRelatedCascadeLists: undefined, HttpPath: undefined, HttpRoot: undefined, LastSelectableRowIdx: undefined, LastSelectedItemIID: undefined, LastRowIndexSelected: undefined, RowFocusTimerID: undefined, ListData: undefined, ListSchema: undefined, ModerationStatus: undefined, PortalUrl: undefined, RecycleBinEnabled: undefined, SelectAllCbx: undefined, SendToLocationName: undefined, SendToLocationUrl: undefined, StateInitDone: undefined, TableCbxFocusHandler: undefined, TableMouseoverHandler: undefined, TotalListItems: undefined, WorkflowsAssociated: undefined, clvp: undefined, ctxId: undefined, ctxType: undefined, dictSel: undefined, displayFormUrl: undefined, editFormUrl: undefined, imagesPath: undefined, inGridMode: undefined, inGridFullRender: undefined, isForceCheckout: undefined, isModerated: undefined, isPortalTemplate: undefined, isVersions: undefined, isWebEditorPreview: undefined, leavingGridMode: false, loadingAsyncData: false, listBaseType: undefined, listName: undefined, listTemplate: undefined, listUrlDir: undefined, newFormUrl: undefined, onRefreshFailed: undefined, overrideDeleteConfirmation: undefined, overrideFilterQstring: undefined, recursiveView: undefined, rootFolderForDisplay: undefined, serverUrl: undefined, verEnabled: undefined, view: undefined, queryString: undefined, IsClientRendering: undefined, wpq: undefined, rootFolder: undefined, IsAppWeb: undefined, NewWOPIDocumentEnabled: undefined, NewWOPIDocumentUrl: undefined, AllowCreateFolder: undefined, CanShareLinkForNewDocument: undefined, noGroupCollapse: undefined
    };
    CTXTYPE_EDITMENU = 0;
    CTXTYPE_VIEWSELECTOR = 1;
    if (typeof Date.now === "undefined" || Date.now === null) Date.now = function () {
        return Number(new Date)
    };
    JSRequest = {
        QueryString: null, FileName: null, PathName: null, EnsureSetup: function () {
            if (JSRequest.QueryString != null) return;
            JSRequest.QueryString = [];
            for (var f = ajaxNavigate.get_search().substring(1), e = f.split("&"), a, d = 0;
            d < e.length;
            d++) {
                var b = e[d];
                a = b.indexOf("=");
                if (a > -1) {
                    var h = b.substring(0, a), g = b.substring(a + 1);
                    JSRequest.QueryString[h] = g
                }

            }
            var c = JSRequest.PathName = window.location.pathname;
            a = c.lastIndexOf("/");
            if (a > -1) JSRequest.FileName = c.substring(a + 1);
            else JSRequest.PageName = c
        }

    };
    ExpGroupWPListName = "WSS_ExpGroupWPList";
    ExpGroupCookiePrefix = "WSS_ExpGroup_";
    ExpGroupCookieDelimiter = "&";
    ExpGroupMaxWP = 11;
    ExpGroupMaxCookieLength = 3960;
    g_ExpGroupCAMLQueue = new Array(0);
    g_ExpGroupXSLTQueue = new Array(0);
    g_ExpGroupInProgress = false;
    g_ExpInitializing = false;
    g_ExpGroupTable = [];
    g_ExpGroupNeedsState = false;
    g_ExpGroupParseStage = false;
    locked = false;
    CSSUtil = {
        AddClass: function (b, a) {
            b.className += " " + a
        }
        , RemoveClass: function (d, c) {
            var a = d.className, b = " " + c;
            d.className = a.indexOf(b) == -1 ? a.replace(c, "") : a.replace(b, "")
        }

    };
    if ("undefined" == typeof _v_dictSod) _v_dictSod = [];
    Sods = {
        missing: 1, loading: 2, pending: 3, loaded: 4
    };
    _v_qsod = [];
    _v_sodctx = {
        document: document, window: window
    };
    Sod.prototype = {
        url: undefined, key: undefined, loaded: undefined, depkeys: undefined, state: undefined, qfn: undefined, reset: undefined
    };
    g_PendingLoadSodQueue = null;
    g_viewportHeight = null;
    g_viewportWidth = null;
    g_wpadderHeight = 0;
    g_setWidthInited = false;
    g_workspaceResizedHandlers = [];
    g_setScrollPos = false;
    g_frl = false;
    g_spribbon = {};
    g_spribbon.isMinimized = true;
    g_spribbon.isInited = false;
    g_spribbon.minimizedHeight = "35px";
    g_spribbon.maximizedHeight = "126px";
    v_stsOpenDoc2 = null;
    v_strStsOpenDoc2 = null;
    deleteInstance = 0;
    firstCalled = true;
    _callbackinitdelayed = false;
    fRightToLeft = document.documentElement.dir == "rtl";
    g_spDragDropUpload = {};
    SPDragUploadInfo.prototype = {
        webPartId: undefined, serverUrl: undefined, siteRelativeUrl: undefined, listName: undefined, rootFolder: undefined, overwriteAll: undefined, hideProgressBar: undefined, refreshFunc: undefined, preUploadFunc: undefined, postUploadFunc: undefined, checkPermissionFunc: undefined
    };
    g_QuickLaunchControlIds = [];
    IMNControlObj = null;
    bIMNControlInited = false;
    IMNDictionaryObj = null;
    bIMNSorted = false;
    bIMNOnloadAttached = false;
    IMNOrigScrollFunc = null;
    bIMNInScrollFunc = false;
    IMNSortableObj = null;
    IMNHeaderObj = null;
    IMNNameDictionaryObj = null;
    IMNShowOfflineObj = null;
    IMNImageInfo_InitializePrototype();
    imnCount = 0;
    imnElemsCount = 0;
    imnMarkerBatchSize = 4;
    imnMarkerBatchDelay = 40;
    _spBodyOnLoadCalled = false;
    if (typeof _spBodyOnLoadFunctions === "undefined" || _spBodyOnLoadFunctions === null) _spBodyOnLoadFunctions = [];
    _spFormOnSubmitCalled = false;
    _spBodyOnPageShowRegistered = false;
    _spBodyOnLoadCalled = false;
    if ("undefined" != typeof _spBodyOnLoad) _spBodyOnLoad = undefined;
    if ("undefined" != typeof _spRestoreScrollForDiv_rscr) _spRestoreScrollForDiv_rscr = undefined;
    if (_spBodyOnLoadFunctionNames == null) {
        _spBodyOnLoadFunctionNames = [];
        _spBodyOnLoadFunctionNames.push("_spBodyOnLoad");
        _spBodyOnLoadFunctionNames.push("_spRestoreScrollForDiv_rscr")
    }
    _spFormOnSubmitCalled = false;
    _spBodyOnPageShowRegistered = false;
    _spPageLoadedRegistered = false;
    _inlineEditString = null;
    _spOriginalFormAction = null;
    g_numberOfYields = 10;
    g_spPreFetchKeys = [];
    _spSuppressFormOnSubmitWrapper = false;
    _inlineEditString = null;
    _spPageLoadedRegistered = false;
    g_fAnimateListCSR = true;
    if (document.body == null || document.body.firstChild == null) {
        typeof document.addEventListener != "undefined" && typeof window.msWriteProfilerMark != "undefined" && document.addEventListener("DOMContentLoaded", function () {
            window.msWriteProfilerMark("DOMContentLoaded")
        }
        , false);
        AttachEvent("DOMContentLoaded", _spBodyOnLoadWrapper, document);
        window.onload = _spBodyOnLoadWrapper;
        AttachEvent("hashchange", _bodyOnHashChangeHandler, window)
    }
    DeveloperDashboard = {
        wnd: null, msgQueue: [], cookie: "WSS_DeveloperDashboard", PostMsg: function (c, a, b) {
            DeveloperDashboard.msgQueue.push({
                to: c, subject: a, msg: b
            })
        }

    };
    (function () {
        window.setTimeout(function () {
            ddInit();
            ddToggleCScope()
        }
        , 0)
    })();
    flyoutsAllowed = false;
    g_ExecuteOrWaitJobs = {};
    cuiKeyHash = {};
    cuiKeyHash[219] = 91;
    cuiKeyHash[221] = 93;
    cuiKeyHash[51] = 35;
    cuiKeyHash[186] = 59;
    cuiKeyHash[187] = 61;
    cuiKeyHash[188] = 44;
    cuiKeyHash[189] = 45;
    cuiKeyHash[190] = 46;
    cuiKeyHash[191] = 47;
    cuiKeyHash[222] = 39;
    g_ribbonHeaderScaleClass = ["ms-cui-tts", "ms-cui-tts-scale-1", "ms-cui-tts-scale-2"];
    SPRibbonInfo.prototype.buildMinimized = undefined;
    SPRibbonInfo.prototype.initialTabId = undefined;
    StatusIdWithTopPriority = null;
    StatusColorWithTopPriority = null;
    StatusPriority = {
        red: 4, yellow: 3, green: 2, blue: 1
    };
    StatusBarClassNames = {
        "4": "ms-status-red", "3": "ms-status-yellow", "2": "ms-status-green", "1": "ms-status-blue"
    };
    g_uniqueIndex = 0;
    g_dlgWndTop = null;
    g_spDlgLauncher = true;
    g_ModalDialogCount = 0;
    g_overlayPopup = undefined;
    g_childDialog = undefined;
    CommonGlobalDialogReturnValue_InitializePrototype();
    commonModalDialogReturnValue = new CommonGlobalDialogReturnValue;
    AjaxNavigate.prototype = {
        update: AjaxNavigate$update, add_navigate: AjaxNavigate$add_navigate, remove_navigate: AjaxNavigate$remove_navigate, _raiseNavigate: AjaxNavigate$_raiseNavigate, _buildHashBag: AjaxNavigate$_buildHashBag, _fixLayoutsUrl: AjaxNavigate$_fixLayoutsUrl, _clear: AjaxNavigate$_clear, submit: AjaxNavigate$submit, getParam: AjaxNavigate$_getParam, get_href: AjaxNavigate$get_href, get_hash: AjaxNavigate$get_hash, get_search: AjaxNavigate$get_search, getSavedFormAction: AjaxNavigate$_getSavedFormAction, convertMDSURLtoRegularURL: AjaxNavigate$convertMDSURLtoRegularURL, _list: undefined
    };
    if ("undefined" == typeof ajaxNavigate) ajaxNavigate = new AjaxNavigate;
    if (!window.location.pathname.toLowerCase().endsWith("/_layouts/15/start.aspx")) {
        var b = function () {
            "unknown" != typeof Sys && "undefined" != typeof Sys && null != Sys && null != Sys.Application && Sys.Application.add_load(function () {
                window.setTimeout(function () {
                    ajaxNavigate._raiseNavigate(ajaxNavigate)
                }
                , 0)
            })
        }
        , a = function () {
            document.removeEventListener("DOMContentLoaded", a, false);
            b()
        };
        if (Boolean(document.addEventListener)) document.addEventListener("DOMContentLoaded", a, false);
        else _spBodyOnLoadFunctions.push(b)
    }
    URI = function (M, d) {
        var f = this, v = "#", p = ":", i = "/", x = "//", q = "?", o = ";", E = "&", H = "@", u = "=", L = ";/?:@&=$,", J = "/?", n = false;
        if (typeof d !== "undefined" && typeof d.queryCaseInsensitive === "boolean") n = d.queryCaseInsensitive;
        var m = false;
        if (typeof d !== "undefined" && typeof d.disableEncodingDecodingForLegacyCode === "boolean") m = d.disableEncodingDecodingForLegacyCode;
        var z = false;
        if (typeof d !== "undefined" && typeof d.pathCaseInsensitive === "boolean") z = d.pathCaseInsensitive;
        var g = "", e = "", a = "", k = "", l = "", r = "", s = "", h = {}, j = "";
        this.getScheme = function () {
            return g
        };
        this.setScheme = function (a) {
            g = b(a)
        };
        this.getAuthority = function () {
            return F(false)
        };
        this.setAuthority = function (a) {
            B(a)
        };
        this.getUser = function () {
            return e
        };
        this.getHost = function () {
            return a
        };
        this.getPort = function () {
            return k
        };
        this.getPath = function (b) {
            var a = l;
            if (typeof b === "boolean" && b) if (a !== null && a.lastIndexOf(i) === a.length - 1) a = a.slice(0, -1);
            return a
        };
        this.setPath = function (a) {
            if (a.indexOf(i) !== 0) a = i + a;
            t(a)
        };
        this.getPathSegments = function () {
            if (l === null) return [];
            var a = l.split(i);
            if (a.length > 0) if (a[0] === "") a.shift();
            else a[a.length - 1] === "" && a.pop();
            return a
        };
        this.getLastPathSegment = function (c) {
            var b = f.getPathSegments();
            if (b.length === 0) return "";
            else {
                var a = b[b.length - 1];
                if (typeof c !== "boolean" || !c) {
                    var d = a.indexOf(o);
                    if (d >= 0) a = a.substring(0, d)
                }
                return a
            }

        };
        this.getParameters = function () {
            return s
        };
        this.getQuery = function () {
            return C(h)
        };
        this.setQuery = function (b) {
            var a = K(b);
            f.setQueryFromObject(a)
        };
        this.getQueryAsObject = function () {
            return h
        };
        this.setQueryFromObject = function (b) {
            h = {};
            for (var a in b) b.hasOwnProperty(a) && f.setQueryParameter(a, b[a])
        };
        this.getQueryParameter = function (d) {
            var a = null, b = f.getQueryAsObject();
            if (n) {
                for (var c in b) if (h.hasOwnProperty(c) && c.toLowerCase() === d.toLowerCase()) a = b[c]
            }
            else a = b[d];
            return typeof a !== "undefined" ? a : null
        };
        this.setQueryParameter = function (e, d) {
            var c = b(e), a = b(d);
            h[c] = a
        };
        this.removeQueryParameter = function (c) {
            var a = b(c);
            delete h[a]
        };
        this.getFragment = function () {
            return j
        };
        this.setFragment = function (a) {
            if (a.indexOf(v) === 0) a = a.substring(1);
            j = b(a)
        };
        var y = function (a, b) {
            return a != null && b != null ? a.toLowerCase() === b.toLowerCase() : a === b
        }
        , D = function (a, b) {
            return a === b
        };
        this.equals = function (b) {
            return g.toLowerCase() === b.getScheme().toLowerCase() && e === b.getUser() && a.toLowerCase() === b.getHost().toLowerCase() && k === b.getPort() && (z ? y : D)(f.getPath(true), b.getPath(true)) && s === b.getParameters() && (n ? y : D)(f.getQuery(), b.getQuery()) && j === b.getFragment()
        };
        this.getString = function () {
            return A(true)
        };
        this.getDecodedStringForDisplay = function () {
            return A(false)
        };
        this.getStringWithoutQueryAndFragment = function () {
            return w(true)
        };
        var A = function (a) {
            var b = w(a), d = C(h, a);
            if (d !== "") b += q + d;
            if (j !== "") b += v + (a ? c(j) : j);
            return b
        }
        , w = function (b) {
            var a = "";
            if (g !== "") a += (b ? c(g) : g) + p;
            var d = F(b);
            if (d !== "") a += x + d;
            if (r !== "") a += b ? r : l;
            return a
        }
        , O = function (b) {
            var a = b;
            if (n) a = a.toLowerCase();
            return a
        }
        , K = function (b) {
            var g = {};
            if (b.indexOf(q) === 0) b = b.substring(1);
            for (var d = b.split(/[;&]+/), c = 0;
            c < d.length;
            c++) {
                var h = d[c], a = h.split(u);
                if (a.length > 0) {
                    var f = a[0];
                    if (f.length > 0) {
                        var e = "";
                        if (a.length == 2) e = a[1];
                        g[f] = e
                    }

                }

            }
            return g
        }
        , C = function (g, d) {
            d = typeof d === "undefined" ? false : d;
            var a = "";
            for (var f in g) if (g.hasOwnProperty(f)) {
                var e = f, b = g[f];
                if (d) {
                    e = c(e);
                    b = c(b)
                }
                if (b === null || b === "") a += e + u + E;
                else a += e + u + b + E
            }
            if (a !== "") a = a.slice(0, -1);
            return a
        }
        , N = function () {
            var a = M, c = a.indexOf(v);
            if (c >= 0) {
                var l = a.substring(c + 1);
                f.setFragment(l);
                a = a.substring(0, c)
            }
            var b = G(a, L);
            if (b >= 0) {
                var k = a.indexOf(p);
                if (k >= 0 && k === b) {
                    g = a.substring(0, b);
                    a = a.substring(b + 1)
                }

            }
            else {
                t(a);
                return
            }
            var i = "", j = a.indexOf(x);
            if (j >= 0 && j === 0) {
                a = a.substring(2);
                var e, d = G(a, J);
                if (d >= 0) {
                    i = a.substring(0, d);
                    a = a.substring(d);
                    e = false
                }
                else {
                    i = a;
                    e = true
                }
                B(i);
                if (e) return
            }
            var h = a.indexOf(q);
            if (h >= 0) {
                f.setQuery(a.substring(h + 1));
                a = a.substring(0, h)
            }
            t(a)
        }
        , B = function (g) {
            a = g;
            var c = g.lastIndexOf(H);
            if (c >= 0) a = a.substring(c + 1);
            var d = a.indexOf(p);
            if (c < 0 && d < 0) return;
            var f = g;
            if (c < 0) a = f;
            else {
                e = f.substring(0, c);
                a = f.substring(c + 1)
            }
            if (d >= 0) {
                k = a.substring(d + 1);
                a = a.substring(0, d)
            }
            e = b(e);
            a = b(a)
        }
        , t = function (e) {
            var h = e.indexOf(o);
            if (h >= 0) s = b(e.substring(h + 1));
            l = b(e);
            for (var a = e.split(i), d = 0;
            d < a.length;
            ++d) {
                var m = a[d], f = m.split(o), k = b(f[0]);
                a[d] = c(k);
                for (var g = 1;
                g < f.length;
                ++g) {
                    var j = b(f[g]);
                    a[d] += o + c(j)
                }

            }
            r = a.join(i)
        }
        , G = function (d, c) {
            for (var a = 0;
            a < d.length;
            a++) for (var e = d[a], b = 0;
            b < c.length;
            b++) if (e === c[b]) return a;
            return -1
        }
        , I = function () {
            var a;
            if (m) a = e;
            else {
                a = c(e);
                a = a.replace("%3A", ":")
            }
            return a
        }
        , F = function (h) {
            var b = "", d, f, g;
            if (h) {
                d = I();
                f = c(a);
                g = c(k)
            }
            else {
                d = e;
                f = a;
                g = k
            }
            if (d !== "") b = d + H;
            if (a !== "") b += f;
            if (k !== "") b += p + g;
            return b
        }
        , c = function (a) {
            return m ? a : encodeURIComponent(a)
        }
        , b = function (a) {
            return m ? a : unescapeProperly(a)
        };
        N()
    };
    _EnsureJSNamespace("SP");
    if (typeof SP.SOD == "undefined") SP.SOD = {};
    SP.SOD.execute = EnsureScriptParams;
    SP.SOD.executeFunc = EnsureScriptFunc;
    SP.SOD.registerSod = RegisterSod;
    SP.SOD.registerSodDep = RegisterSodDep;
    SP.SOD.executeOrDelayUntilScriptLoaded = ExecuteOrDelayUntilScriptLoaded;
    SP.SOD.executeOrDelayUntilEventNotified = ExecuteOrDelayUntilEventNotified;
    SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs = NotifyScriptLoadedAndExecuteWaitingJobs;
    SP.SOD.notifyEventAndExecuteWaitingJobs = NotifyEventAndExecuteWaitingJobs;
    SP.SOD.loadMultiple = LoadMultipleSods;
    SP.SOD.delayUntilEventNotified = DelayUntilEventNotified;
    g_prefetch = 1;
    SP.SOD.get_prefetch = function () {
        return g_prefetch
    };
    SP.SOD.set_prefetch = function (a) {
        g_prefetch = a
    };
    SP.SOD.prefetch = _spPreFetch;
    g_ribbonImagePrefetch = true;
    SP.SOD.get_ribbonImagePrefetchEnabled = function () {
        return g_ribbonImagePrefetch
    };
    SP.SOD.set_ribbonImagePrefetchEnabled = function (a) {
        g_ribbonImagePrefetch = a
    };
    _EnsureJSNamespace("SP.UI");
    if (typeof SP.UI.Workspace == "undefined") SP.UI.Workspace = {};
    SP.UI.Workspace.add_resized = function (a) {
        g_workspaceResizedHandlers.push(a)
    };
    SP.UI.Workspace.remove_resized = function (c) {
        for (var b = -1, a = 0, d = g_workspaceResizedHandlers.length;
        a < d;
        a++) if (c == g_workspaceResizedHandlers[a]) {
            b = a;
            break
        }
        b != -1 && g_workspaceResizedHandlers.splice(b, 1)
    };
    _spBodyOnLoadFunctionNames.push("AllowCSSFiltersOnIE8");
    initJsLoaded = true;
    notifyScriptsLoadedAndExecuteWaitingJobs("init.js")
}
var currentCtx, ctx, itemTable, g_supportFiles, g_MDNav, ULS;
function ULSObject() { } function ULSTrim(a) {
    a = a.replace(/^\s*/, "");
    a = a.replace(/\s*$/, "");
    return a
}
function ULSEncodeXML(a) {
    a = String(a);
    a = a.replace(/&/g, "&amp;");
    a = a.replace(/</g, "&lt;");
    a = a.replace(/>/g, "&gt;");
    a = a.replace(/'/g, "&apos;");
    a = a.replace(/"/g, "&quot;");
    return a
}
function ULSStripPII(a) {
    if (a.indexOf("?") != -1) a = a.substring(0, a.indexOf("?"));
    if (Boolean(window.location)) a = a.replace(window.location.hostname, "[server]");
    return a
}
function ULSGetFunction(e, c) {
    var d = e.toString(), a = ULSTrim(d.substring(0, d.indexOf("{")));
    if (a.indexOf("function") == 0) a = ULSTrim(a.substring(8));
    var b = "<function ";
    if (c >= 0) b += 'depth="' + c.toString() + '" ';
    b += 'signature="' + a + '">';
    if (c == 0 || a.indexOf("anonymous") == 0 || a.indexOf("(") == 0) b += "\n<![CDATA[" + d + "]\]>\n";
    b += "</function>";
    return b
}
function ULSGetMetadataFromFrame(oCS) {
    var sFunctionText = oCS.toString(), iOpeningBrace = sFunctionText.indexOf("{");
    if (iOpeningBrace == -1) return false;
    sFunctionText = sFunctionText.substr(iOpeningBrace + 1);
    var iFirstStatement = sFunctionText.search(/[^\s]/);
    if (iFirstStatement == -1) return false;
    var reMatch = sFunctionText.match(/ULS[^\s;]*:/);
    if (reMatch == null || typeof reMatch.index != "undefined" && reMatch.index != iFirstStatement) return false;
    var sLabelName = reMatch[0];
    sLabelName = sLabelName.substr(0, sLabelName.length - 1);
    try {
        var o = eval(sLabelName + "()");
        if (typeof o == "undefined" || typeof o.ULSTeamName == "undefined" || typeof o.ULSFileName == "undefined") return false;
        ULS.teamName = o.ULSTeamName;
        ULS.originalFile = o.ULSFileName;
        return true
    }
    catch (e) {
        return false
    }

}
function ULSGetCallstack(b) {
    var e = "";
    try {
        if (Boolean(b)) {
            var d = false, a = b, c = 0;
            while (Boolean(a) && c < 20) {
                if (!d) d = ULSGetMetadataFromFrame(a);
                e += ULSGetFunction(a, c, b) + "\n";
                a = a.caller;
                c++
            }

        }

    }
    catch (f) { } return e
}
function ULSGetClientInfo() {
    var a = "";
    try {
        var b = navigator.browserLanguage;
        if (!Boolean(b)) b = navigator.language;
        if (!Boolean(b)) b = navigator.systemLanguage;
        var c = navigator.userAgent.toLowerCase(), e = navigator.appName, d = parseFloat(navigator.appVersion);
        if (c.indexOf("msie ") != -1) d = parseFloat(c.substring(c.indexOf("msie ") + 5));
        if (c.indexOf("firefox/") != -1) {
            e = "Firefox";
            d = parseFloat(c.substring(c.indexOf("firefox/") + 8))
        }
        a += '<browser name="' + ULSEncodeXML(e) + '" version="' + ULSEncodeXML(d.toString()) + '" />\n';
        a += "<useragent>" + ULSEncodeXML(navigator.userAgent) + "</useragent>\n";
        if (Boolean(b)) a += "<language>" + ULSEncodeXML(b) + "</language>\n";
        if (Boolean(document.referrer)) {
            var g = ULSStripPII(document.referrer);
            a += "<referrer>" + ULSEncodeXML(g) + "</referrer>\n"
        }
        if (Boolean(window.location)) {
            var f = ULSStripPII(window.location.toString());
            a += "<location>" + ULSEncodeXML(f) + "</location>\n"
        }
        if (Boolean(ULS.Correlation)) a += "<correlation>" + ULSEncodeXML(ULS.Correlation) + "</correlation>\n"
    }
    catch (h) { } return a
}
function ULSHandleWebServiceResponse() {
    var a = ULS.request;
    a.readyState == 4 && a.status == 200 && ULSFinishErrorHandling();
    (a.readyState == 0 || a.readyState == 4) && a.status > 200 && ULSFinishErrorHandling()
}
function ULSFinishErrorHandling() {
    ULS.message = null
}
function ULSGetWebServiceUrl() {
    var a = "", b = document.URL.indexOf("://");
    if (b > 0) {
        var c = document.URL.indexOf("/", b + 3);
        if (c > 0) a = document.URL.substring(0, c);
        else a = document.URL
    }
    if (a.charAt(a.length - 1) != "/") a += "/";
    a += "_vti_bin/diagnostics.asmx";
    return a
}
function ULSUploadReport(c, b, a) {
    if (Boolean(ULS) && ULS.enable) {
        ULS.message = c;
        if (a.indexOf("?") != -1) a = a.substr(0, a.indexOf("?"));
        ULS.file = a.substr(a.lastIndexOf("/") + 1);
        ULS.line = 0;
        ULS.WebServiceNS = "http://schemas.microsoft.com/sharepoint/diagnostics/";
        ULS.Correlation = b;
        ULS.teamName = "";
        ULS.originalFile = "";
        ULS.callStack = "";
        ULS.clientInfo = "<client>\n" + ULSGetClientInfo() + "</client>";
        ULSSendReport(false)
    }

}
function ULSSendReport(a) {
    ULS.request = new XMLHttpRequest;
    ULS.request.onreadystatechange = ULSHandleWebServiceResponse;
    ULS.request.open("POST", ULSGetWebServiceUrl(), a);
    ULS.request.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
    ULS.request.setRequestHeader("SOAPAction", ULS.WebServiceNS + "SendClientScriptErrorReport");
    ULS.request.send('<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><SendClientScriptErrorReport xmlns="' + ULS.WebServiceNS + '"><message>' + ULSEncodeXML(ULS.message) + "</message><file>" + ULSEncodeXML(ULS.file) + "</file><line>" + String(ULS.line) + "</line><stack>" + ULSEncodeXML(ULS.callStack) + "</stack><client>" + ULSEncodeXML(ULS.clientInfo) + "</client><team>" + ULSEncodeXML(ULS.teamName) + "</team><originalFile>" + ULSEncodeXML(ULS.originalFile) + "</originalFile></SendClientScriptErrorReport></soap:Body></soap:Envelope>")
}
function ULSSendExceptionImpl(c, a, b, d) {
    if (Boolean(ULS) && ULS.enable) {
        ULS.enable = false;
        window.onerror = ULS.OriginalOnError;
        ULS.WebServiceNS = "http://schemas.microsoft.com/sharepoint/diagnostics/";
        try {
            ULS.message = c;
            if (a.indexOf("?") != -1) a = a.substr(0, a.indexOf("?"));
            ULS.file = a.substr(a.lastIndexOf("/") + 1);
            ULS.line = b;
            ULS.teamName = "";
            ULS.originalFile = "";
            ULS.callStack = "<stack>\n" + ULSGetCallstack(d) + "</stack>";
            ULS.clientInfo = "<client>\n" + ULSGetClientInfo() + "</client>";
            ULSSendReport(true)
        }
        catch (e) { }
    }
    return Boolean(ULS) && Boolean(ULS.OriginalOnError) ? ULS.OriginalOnError(c, a, String(b)) : false
}
function ULSOnError(b, c, a) {
    return ULSSendExceptionImpl(b, c, a, ULSOnError.caller)
}
function ULSSendException(b) {
    var a = b.message;
    if (typeof a == "undefined") a = b.toString();
    ULSSendExceptionImpl(a, location.href, 0, ULSSendException.caller)
}
var ULSCat;
function GetXMLHttpRequestObject() {
    return new XMLHttpRequest
}
function insertAdjacentElement(a, c, b) {
    if (typeof a.insertAdjacentElement != "undefined" && Boolean(a.insertAdjacentElement)) return a.insertAdjacentElement(c, b);
    switch (c) {
        case "beforeBegin": return a.parentNode.insertBefore(b, a);
        case "afterBegin": return a.insertBefore(b, a.firstChild);
        case "beforeEnd": return a.appendChild(b);
        case "afterEnd": return Boolean(a.nextSibling) ? a.parentNode.insertBefore(b, a.nextSibling) : a.parentNode.appendChild(b)
    }
    return null
}
function insertAdjacentHTML(a, d, c) {
    if (typeof a.insertAdjacentHTML != "undefined" && Boolean(a.insertAdjacentHTML)) return a.insertAdjacentHTML(d, c);
    if (typeof a.ownerDocument.createRange != "undefined") {
        var b = a.ownerDocument.createRange();
        if (typeof b.setStartBefore != "undefined" && typeof b.createContextualFragment != "undefined") {
            b.setStartBefore(a);
            var e = b.createContextualFragment(c);
            return insertAdjacentElement(a, d, e)
        }

    }
    return null
}
function insertAdjacentText(a, c, b) {
    if (typeof a.insertAdjacentText != "undefined" && Boolean(a.insertAdjacentText)) return a.insertAdjacentText(c, b);
    var d = document.createTextNode(b);
    return insertAdjacentElement(a, c, d)
}
function contains(c, a) {
    var b = false;
    do {
        b = c == a;
        if (b) break;
        a = a.parentNode
    }
    while (a != null);
    return b
}
function getFirstElementByName(b, a) {
    return getFirstElementByProperty(b, "name", a)
}
function getFirstElementByProperty(d, c, b) {
    if (c == null || b == null || c == "" || b == "") return null;
    if (d[c] == b) return d;
    var a = d.firstChild;
    while (Boolean(a) && typeof a != "undefined") {
        var e = getFirstElementByProperty(a, c, b);
        if (Boolean(e)) return e;
        a = a.nextSibling
    }
    return null
}
function documentGetElementsByName(b) {
    if (!browseris.ie && Boolean(document.getElementsByName)) return document.getElementsByName(b);
    for (var d = [], e = document.getElementsByTagName("*"), f = e.length, c = 0;
    c < f;
    c++) {
        var a = e[c];
        (a.name == b || typeof a.getAttribute != "unknown" && Boolean(a.getAttribute) && a.getAttribute("name") == b) && d.push(a)
    }
    return d
}
function getFirstChild(b) {
    var a = b.firstChild;
    while (Boolean(a) && a.nodeType == 3) a = a.nextSibling;
    return a
}
function Browseris() {
    var a = navigator.userAgent.toLowerCase(), b;
    this.osver = 1;
    if (Boolean(a)) {
        var j = a.substring(a.indexOf("windows ") + 11);
        this.osver = parseFloat(j)
    }
    this.major = parseInt(navigator.appVersion);
    this.nav = a.indexOf("mozilla") != -1 && a.indexOf("spoofer") == -1 && a.indexOf("compatible") == -1;
    this.nav6 = this.nav && this.major == 5;
    this.nav6up = this.nav && this.major >= 5;
    this.nav7up = false;
    if (this.nav6up) {
        b = a.indexOf("netscape/");
        if (b >= 0) this.nav7up = parseInt(a.substring(b + 9)) >= 7
    }
    this.ie = a.indexOf("msie") != -1;
    this.ipad = a.indexOf("ipad") != -1;
    this.windowsphone7 = a.indexOf("windows phone os 7.5") != -1;
    this.aol = this.ie && a.indexOf(" aol ") != -1;
    if (this.ie) {
        var g = a.substring(a.indexOf("msie ") + 5);
        this.iever = parseInt(g);
        this.verIEFull = parseFloat(g)
    }
    else this.iever = 0;
    this.ie4up = this.ie && this.major >= 4;
    this.ie5up = this.ie && this.iever >= 5;
    this.ie55up = this.ie && this.verIEFull >= 5.5;
    this.ie6up = this.ie && this.iever >= 6;
    this.ie7down = this.ie && this.iever <= 7;
    this.ie8down = this.ie && this.iever <= 8;
    this.ie7up = this.ie && this.iever >= 7;
    this.ie8standard = this.ie && Boolean(document.documentMode) && document.documentMode == 8;
    this.ie8standardUp = this.ie && Boolean(document.documentMode) && document.documentMode >= 8;
    this.ie9standardUp = this.ie && Boolean(document.documentMode) && document.documentMode >= 9;
    this.ie10standardUp = this.ie && Boolean(document.documentMode) && document.documentMode >= 10;
    this.winnt = a.indexOf("winnt") != -1 || a.indexOf("windows nt") != -1;
    this.win32 = this.major >= 4 && navigator.platform == "Win32" || a.indexOf("win32") != -1 || a.indexOf("32bit") != -1;
    this.win64bit = a.indexOf("win64") != -1;
    this.win = this.winnt || this.win32 || this.win64bit;
    this.mac = a.indexOf("mac") != -1;
    this.w3c = this.nav6up;
    this.webKit = a.indexOf("webkit") != -1;
    this.safari = a.indexOf("webkit") != -1;
    this.safari125up = false;
    this.safari3up = false;
    this.safariMobile = false;
    if (this.safari && this.major >= 5) {
        b = a.indexOf("webkit/");
        if (b >= 0) this.safari125up = parseInt(a.substring(b + 7)) >= 125;
        var h = a.indexOf("version/");
        if (h >= 0) this.safari3up = parseInt(a.substring(h + 8)) >= 3;
        this.safariMobile = a.indexOf("mobile") > b && (this.ipad || a.indexOf("iphone") != -1 || a.indexOf("ipod") != -1)
    }
    this.firefox = this.nav && a.indexOf("firefox") != -1;
    this.firefox3up = false;
    this.firefox36up = false;
    this.firefox4up = false;
    if (this.firefox && this.major >= 5) {
        var f = a.indexOf("firefox/");
        if (f >= 0) {
            var c = a.substring(f + 8);
            this.firefox3up = parseInt(c) >= 3;
            this.firefox36up = parseFloat(c) >= 3.6;
            this.firefox4up = parseInt(c) >= 4
        }

    }
    this.win8AppHost = a.indexOf("msapphost") != -1;
    this.chrome = this.nav && a.indexOf("chrome") != -1;
    this.chrome7up = false;
    this.chrome8up = false;
    this.chrome9up = false;
    if (this.chrome && this.major >= 5) {
        var e = a.indexOf("chrome/");
        if (e >= 0) {
            var i = a.substring(e + 7), d = parseInt(i);
            this.chrome7up = d >= 7;
            this.chrome8up = d >= 8;
            this.chrome9up = d >= 9
        }

    }
    this.msTouch = typeof navigator.msMaxTouchPoints != "undefined" && navigator.msMaxTouchPoints > 0;
    this.isTouch = this.msTouch || "ontouchstart" in document.documentElement;
    this.armProcessor = a.indexOf("arm") != -1
}
var browseris, bis;
function byid(a) {
    return document.getElementById(a)
}
function newE(a) {
    return document.createElement(a)
}
function wpf() {
    return typeof window.MSOWebPartPageFormName != "undefined" ? document.forms[window.MSOWebPartPageFormName] : null
}
function startReplacement() { } function SetEvent(c, a, b) {
    if (!b) b = window;
    if (typeof a == "string") a = new Function(a);
    b["on" + c] = a
}
function AttachEvent(a, c, b) {
    if (!b) b = window;
    if (a == "domLoad") a = typeof b.addEventListener != "undefined" && b.addEventListener && browseris.nav ? "DOMContentLoaded" : "load";
    else if (a != "undefined" && a != null && a.indexOf("touch") == 0 && bis.msTouch) switch (a) {
        case "touchstart": a = "MSPointerDown";
            break;
        case "touchmove": a = "MSPointerMove";
            break;
        case "touchend": a = "MSPointerUp"
    }
    if (typeof c == "string") c = new Function(c);
    if (typeof b.addEventListener != "undefined" && b.addEventListener) b.addEventListener(a, c, false);
    else typeof b.attachEvent != "undefined" && b.attachEvent("on" + a, c)
}
function DetachEvent(c, b, a) {
    if (!a) a = window;
    if (c == "domLoad") c = typeof a.removeEventListener != "undefined" && a.removeEventListener && browseris.nav ? "DOMContentLoaded" : "load";
    if (typeof b == "string") b = new Function(b);
    if (typeof a.removeEventListener != "undefined" && a.removeEventListener) a.removeEventListener(c, b, false);
    else typeof a.detachEvent != "undefined" && a.detachEvent("on" + c, b)
}
function CancelEvent(a) {
    a.cancelBubble = true;
    Boolean(a.preventDefault) && a.preventDefault();
    a.returnValue = false;
    return false
}
function GetEventSrcElement(a) {
    return a.target != null ? a.target : a.srcElement
}
function GetEventKeyCode(a) {
    return browseris.nav ? a.which : a.keyCode
}
function GetInnerText(a) {
    return browseris.safari && browseris.major < 5 ? a.innerHTML : browseris.nav || browseris.safari ? a.textContent : a.innerText
}
var g_cde;
function GetCachedElement(b) {
    var a = null;
    if (!Boolean(a = g_cde[b])) {
        a = document.getElementById(b);
        g_cde[b] = a
    }
    return a
}
function $dg(a) {
    if (!(a in window)) window[a] = undefined
}
var UTF8_1ST_OF_2, UTF8_1ST_OF_3, UTF8_1ST_OF_4, UTF8_TRAIL, HIGH_SURROGATE_BITS, LOW_SURROGATE_BITS, SURROGATE_6_BIT, SURROGATE_ID_BITS, SURROGATE_OFFSET;
function escapeProperlyCoreCore(f, g, h, i) {
    var c = "", b, d = 0, k = " \"%<>'&";
    if (typeof f == "undefined") return "";
    for (d = 0;
    d < f.length;
    d++) {
        var a = f.charCodeAt(d), e = f.charAt(d);
        if (g && (e == "#" || e == "?")) {
            c += f.substr(d);
            break
        }
        if (h && e == "&") {
            c += e;
            continue
        }
        if (a <= 127) {
            if (i) c += e;
            else if (a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || g && a >= 32 && a <= 95 && k.indexOf(e) < 0) c += e;
            else if (a <= 15) c += "%0" + a.toString(16).toUpperCase();
            else if (a <= 127) c += "%" + a.toString(16).toUpperCase()
        }
        else if (a <= 2047) {
            b = UTF8_1ST_OF_2 | a >> 6;
            c += "%" + b.toString(16).toUpperCase();
            b = UTF8_TRAIL | a & 63;
            c += "%" + b.toString(16).toUpperCase()
        }
        else if ((a & SURROGATE_6_BIT) != HIGH_SURROGATE_BITS) {
            b = UTF8_1ST_OF_3 | a >> 12;
            c += "%" + b.toString(16).toUpperCase();
            b = UTF8_TRAIL | (a & 4032) >> 6;
            c += "%" + b.toString(16).toUpperCase();
            b = UTF8_TRAIL | a & 63;
            c += "%" + b.toString(16).toUpperCase()
        }
        else if (d < f.length - 1) {
            a = (a & 1023) << 10;
            d++;
            var j = f.charCodeAt(d);
            a |= j & 1023;
            a += SURROGATE_OFFSET;
            b = UTF8_1ST_OF_4 | a >> 18;
            c += "%" + b.toString(16).toUpperCase();
            b = UTF8_TRAIL | (a & 258048) >> 12;
            c += "%" + b.toString(16).toUpperCase();
            b = UTF8_TRAIL | (a & 4032) >> 6;
            c += "%" + b.toString(16).toUpperCase();
            b = UTF8_TRAIL | a & 63;
            c += "%" + b.toString(16).toUpperCase()
        }

    }
    return c
}
function escapeProperly(a) {
    return escapeProperlyCoreCore(a, false, false, false)
}
function escapeProperlyCore(b, a) {
    return escapeProperlyCoreCore(b, a, false, false)
}
function escapeUrlForCallback(a) {
    var c = a.indexOf("#"), b = a.indexOf("?");
    if (c > 0 && (b == -1 || c < b)) {
        var d = a.substr(0, c);
        if (b > 0) d += a.substr(b);
        a = d
    }
    return escapeProperlyCoreCore(a, true, false, true)
}
function IsSTSPageUrlValid(a) {
    return a.substr(0, 4) == "http" || a.substr(0, 1) == "/" || a.indexOf(":") == -1
}
function PageUrlValidation(a) {
    if (IsSTSPageUrlValid(a)) return a;
    else {
        alert(Strings.STS.L_InvalidPageUrl_Text);
        return ""
    }

}
function SelectRibbonTab(b, c) {
    var a;
    try {
        a = SP.Ribbon.PageManager.get_instance().get_ribbon()
    }
    catch (d) { } if (!Boolean(a)) typeof _ribbonStartInit != "undefined" && _ribbonStartInit(b, false, null);
    else (c || a.get_selectedTabId() == "Ribbon.Read") && a.selectTabById(b)
}
function FV4UI() {
    return typeof _fV4UI != "undefined" && _fV4UI
}
function GoToHistoryLink(c, d) {
    if (c.href == null) return;
    var b = c.href, f = c.href.indexOf("?") >= 0 ? "&" : "?", e = f + "VersionNo=" + d, a = GetSource();
    if (a != null && a != "") a = "&Source=" + a;
    b = c.href + e + a;
    if (isPortalTemplatePage(b)) window.top.location.href = STSPageUrlValidation(b);
    else window.location.href = STSPageUrlValidation(b)
}
function GetGotoLinkUrl(b) {
    if (b.href == null) return null;
    var d = b.href.indexOf("?") >= 0 ? "&" : "?", a = GetSource();
    if (a != null && a != "") a = d + "Source=" + a;
    var c = b.href + a;
    return c
}
function GoToLink(c) {
    var a = GetGotoLinkUrl(c);
    if (a == null) return;
    var b = true;
    if (typeof window.top.SPUpdatePage !== "undefined") b = window.top.SPUpdatePage(a);
    if (b) if (c.target === "_blank") window.open(a, "_blank");
    else if (isPortalTemplatePage(a)) window.top.location.href = STSPageUrlValidation(a);
    else window.location.href = STSPageUrlValidation(a)
}
function GoToLinkOrDialogNewWindow(a) {
    if (a.href == null) return;
    if (Boolean(ajaxNavigate.get_search().match(RegExp("[?&]IsDlg=1")))) window.open(a.href);
    else GoToLink(a)
}
function GoToDiscussion(b) {
    var c = b.indexOf("?") >= 0 ? "&" : "?", a = GetSource();
    if (a != null && a != "") b += c + "TopicsView=" + a;
    STSNavigate(b)
}
function GetCurrentEltStyle(b, c) {
    if (Boolean(b.currentStyle)) return b.currentStyle[c];
    else if (Boolean(window) && Boolean(window.getComputedStyle)) {
        var a = window.getComputedStyle(b, null);
        if (Boolean(a) && Boolean(a.getPropertyValue)) return a.getPropertyValue(c)
    }
    return null
}
function InsertNodeAfter(a, b) {
    if (a == null || a.parentNode == null || b == null) return;
    var d = a.parentNode, c = a.nextSibling;
    if (c == null) d.appendChild(b);
    else d.insertBefore(b, c)
}
function EEDecodeSpecialChars(b) {
    var a = b.replace(/&quot;/g, '"');
    a = a.replace(/&gt;/g, ">");
    a = a.replace(/&lt;/g, "<");
    a = a.replace(/&#39;/g, "'");
    a = a.replace(/&amp;/g, "&");
    return a
}
function ShowAttachmentRows() {
    var b = document.getElementById("idAttachmentsTable"), a = document.getElementById("idAttachmentsRow");
    if (a != null) if (b == null || b.rows.length == 0) a.style.display = "none";
    else a.style.display = "table-row"
}
function PreventDefaultNavigation() {
    var a = window.event;
    if (a != null) if (a.preventDefault == null) a.returnValue = false;
    else a.preventDefault()
}
function cancelDefault(a) {
    if (typeof a == "undefined" || a == null) a = window.event;
    if (!(typeof a == "undefined" || a == null)) {
        if (typeof a.stopPropagation == "function") a.stopPropagation();
        else a.cancelBubble = true;
        if (typeof a.preventDefault == "function") a.preventDefault();
        else a.returnValue = false
    }
    return false
}
function IsArray(a) {
    return typeof a == "object" && a instanceof Array
}
function IsNullOrUndefined(a) {
    return a == null || a == undefined
}
function SetOpacity(a, b) {
    XUIHtml.SetOpacity(a, b)
}
function GetOpacity(a) {
    return XUIHtml.GetOpacity(a)
}
var XUIHtml;
function SP_JSONParse(b) {
    return JSON.parse(b, a);
    function a(e, a) {
        if (typeof a == "string") {
            var c = new RegExp("^/Date\\((-?[0-9]+)\\)/$", "g"), b = c.exec(a);
            if (b != null) {
                var d = parseInt(b[1]);
                return new Date(d)
            }

        }
        return a
    }

}
function DeferCall() {
    if (arguments.length == 0) return null;
    var args = arguments, fn = null;
    if (browseris.ie5up || browseris.nav6up) eval("if (typeof(" + args[0] + ") == 'function') { fn = " + args[0] + "; }");
    if (fn == null) return null;
    if (args.length == 1) return fn();
    else if (args.length == 2) return fn(args[1]);
    else if (args.length == 3) return fn(args[1], args[2]);
    else if (args.length == 4) return fn(args[1], args[2], args[3]);
    else if (args.length == 5) return fn(args[1], args[2], args[3], args[4]);
    else if (args.length == 6) return fn(args[1], args[2], args[3], args[4], args[5]);
    else if (args.length == 7) return fn(args[1], args[2], args[3], args[4], args[5], args[6]);
    else if (args.length == 8) return fn(args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
    else if (args.length == 9) return fn(args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
    else if (args.length == 10) return fn(args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]);
    else alert(Strings.STS.L_TooManyDefers_Text);
    return null
}
var LegalUrlChars;
function AdmBuildParam(b) {
    for (var c, a = 1;
    a < arguments.length;
    a++) {
        c = new RegExp("\\^" + String(a));
        b = b.replace(c, arguments[a])
    }
    return b
}
function IndexOfIllegalCharInUrlLeafName(b) {
    for (var a = 0;
    a < b.length;
    a++) {
        var c = b.charCodeAt(a);
        if (b.charAt(a) == "." && (a == 0 || a == b.length - 1)) return a;
        if (c < 160 && (b.charAt(a) == "/" || !LegalUrlChars[c])) return a
    }
    return -1
}
function IndexOfIllegalCharInUrlPath(b) {
    for (var a = 0;
    a < b.length;
    a++) {
        var c = b.charCodeAt(a);
        if (c < 160 && !LegalUrlChars[c]) return a
    }
    return -1
}
function UrlContainsIllegalStrings(a) {
    return a.indexOf("..") >= 0 || a.indexOf("//") >= 0 || a.indexOf("./") >= 0 || a.indexOf("/.") >= 0 || a.indexOf(".") == 0 || a.lastIndexOf(".") == a.length - 1 ? true : false
}
function UrlLeafNameValidate(a, b) {
    var c = "";
    if (typeof a.MessagePrefix == "string") c = a.MessagePrefix;
    else c = a.id;
    var d = IndexOfIllegalCharInUrlLeafName(b.Value);
    if (d >= 0) {
        if (typeof a.errormessage == "string") a.errormessage = AdmBuildParam(Strings.STS.L_ContainIllegalChar_Text, c, b.Value.charAt(d));
        b.IsValid = false
    }
    else if (UrlContainsIllegalStrings(b.Value)) {
        if (typeof a.errormessage == "string") a.errormessage = AdmBuildParam(Strings.STS.L_ContainIllegalString_Text, c);
        b.IsValid = false
    }
    else b.IsValid = true
}
function UrlPathValidate(a, b) {
    var c = "";
    if (typeof a.MessagePrefix == "string") c = a.MessagePrefix;
    else c = a.id;
    var d = IndexOfIllegalCharInUrlPath(b.Value);
    if (d >= 0) {
        if (typeof a.errormessage == "string") a.errormessage = AdmBuildParam(Strings.STS.L_ContainIllegalChar_Text, c, b.Value.charAt(d));
        b.IsValid = false
    }
    else if (UrlContainsIllegalStrings(b.Value)) {
        if (typeof a.errormessage == "string") a.errormessage = AdmBuildParam(Strings.STS.L_ContainIllegalString_Text, c);
        b.IsValid = false
    }
    else b.IsValid = true
}
function IsCheckBoxListSelected(a) {
    if (a == null) return false;
    var c = a.length;
    if (c == null) return a.checked;
    else for (var b = 0;
    b < c;
    b++) {
        var d = a[b];
        if (d.checked) return true
    }
    return false
}
function STSValidatorEnable(d, b, c) {
    var a = document.getElementById(d);
    if (a == null) return;
    if (c || Boolean(a.getAttribute("AlwaysEnableSilent"))) a.enabled = b == true;
    else typeof ValidatorEnable == "function" && ValidatorEnable(a, b)
}
function encodeScriptQuote(f) {
    for (var c = new String(f), b = [], a = 0, e = c.length, a = 0;
    a < e;
    a++) {
        var d = c.charAt(a);
        b.push(d == "'" ? "%27" : d)
    }
    return b.join("")
}
function STSHtmlEncode(d) {
    if (null == d) return "";
    for (var c = new String(d), a = [], b = 0, f = c.length, b = 0;
    b < f;
    b++) {
        var e = c.charAt(b);
        switch (e) {
            case "<": a.push("&lt;");
                break;
            case ">": a.push("&gt;");
                break;
            case "&": a.push("&amp;");
                break;
            case '"': a.push("&quot;");
                break;
            case "'": a.push("&#39;");
                break;
            default: a.push(e)
        }

    }
    return a.join("")
}
function STSHtmlDecode(a) {
    if (null == a) return "";
    for (var e = [/\&lt;/g, /\&gt;/g, /\&quot;/g, /\&#39;/g, /\&#58;/g, /\&#123;/g, /\&#125;/g, /\&amp;/g], f = ["<", ">", '"', "'", ":", "{", "}", "&"], d = [], c = 0, g = e.length, c = 0;
    c < g;
    c++) {
        var b = a.indexOf("&");
        if (-1 != b) {
            if (0 < b) {
                d.push(a.substr(0, b));
                a = a.substr(b)
            }
            a = a.replace(e[c], f[c])
        }
        else break
    }
    d.push(a);
    return d.join("")
}
function StAttrQuote(a) {
    a = a.toString();
    a = a.replace(/&/g, "&amp;");
    a = a.replace(/\"/g, "&quot;");
    a = a.replace(/\r/g, "&#13;");
    return '"' + a + '"'
}
function STSScriptEncode(e) {
    if (null == e || typeof e == "undefined") return "";
    for (var d = new String(e), a = [], c = 0, g = d.length, c = 0;
    c < g;
    c++) {
        var b = d.charCodeAt(c);
        if (b > 4095) a.push("\\u" + b.toString(16).toUpperCase());
        else if (b > 255) a.push("\\u0" + b.toString(16).toUpperCase());
        else if (b > 127) a.push("\\u00" + b.toString(16).toUpperCase());
        else {
            var f = d.charAt(c);
            switch (f) {
                case "\n": a.push("\\n");
                    break;
                case "\r": a.push("\\r");
                    break;
                case '"': a.push("\\u0022");
                    break;
                case "%": a.push("\\u0025");
                    break;
                case "&": a.push("\\u0026");
                    break;
                case "'": a.push("\\u0027");
                    break;
                case "(": a.push("\\u0028");
                    break;
                case ")": a.push("\\u0029");
                    break;
                case "+": a.push("\\u002b");
                    break;
                case "/": a.push("\\u002f");
                    break;
                case "<": a.push("\\u003c");
                    break;
                case ">": a.push("\\u003e");
                    break;
                case "\\": a.push("\\\\");
                    break;
                default: a.push(f)
            }

        }

    }
    return a.join("")
}
function STSScriptEncodeWithQuote(a) {
    return '"' + STSScriptEncode(a) + '"'
}
var recycleBinEnabled, cascadeDeleteWarningMessage, bIsFileDialogView, g_ViewIdToViewCounterMap, g_ctxDict;
function NotifyBrowserOfAsyncUpdate() {
    var b = "__spAjaxIframe", a = document.getElementById(b);
    if (a == null) {
        a = document.createElement("IFRAME");
        a.name = a.id = b;
        a.width = a.height = "0";
        a.src = "about:blank";
        a.style.display = "none";
        document.body.appendChild(a)
    }
    a.contentWindow.location.replace("/_layouts/15/images/blank.gif")
}
function IsSafeHrefAlert(a, b) {
    if (a.match(new RegExp("^[^?]{257}")) != null) {
        alert(Strings.STS.L_UrlTooLongError_Text);
        return false
    }
    else if (IsSafeHref(a)) return true;
    else if (a.match(new RegExp("^[a-zA-Z]*:")) != null) {
        alert(Strings.STS.L_UnknownProtocolUrlError_Text);
        return false
    }
    else if (true == b) return true;
    else {
        alert(Strings.STS.L_UnknownProtocolUrlError_Text);
        return false
    }

}
function UpdateAccessibilityUI() {
    var a = document.getElementById("TurnOnAccessibility"), b = document.getElementById("TurnOffAccessibility");
    if (IsAccessibilityFeatureEnabled()) {
        if (a != null) a.style.display = "none";
        if (b != null) b.style.display = ""
    }
    else {
        if (a != null) a.style.display = "";
        if (b != null) b.style.display = "none"
    }

}
function SetIsAccessibilityFeatureEnabled(c) {
    if (c) document.cookie = "WSS_AccessibilityFeature=true;path=/;";
    else document.cookie = "WSS_AccessibilityFeature=false;path=/;";
    var a = document.getElementById("HiddenAnchor"), b;
    if (browseris.ie) b = {
        srcElement: a, fakeEvent: 1, enableStatus: c
    };
    else b = {
        target: a, fakeEvent: 1, enableStatus: c
    };
    if (a == null || typeof a.onclick == "undefined" || a.onclick == null) return;
    a.onclick(b)
}
function DeleteCookie(a) {
    document.cookie = a + "=; expires=Thu, 01-Jan-70 00:00:01 GMT"
}
function GetCookie(a) {
    return GetCookieEx(a, window)
}
function GetCookieEx(e, f) {
    for (var c = f.document.cookie.split("; "), b = 0;
    b < c.length;
    b++) {
        var d = c[b], a = d.split("=");
        if (e == a[0]) return a.length > 1 ? unescapeProperly(a[1]) : null
    }
    return null
}
function SetCookie(a, b) {
    SetCookieEx(a, b, false, window)
}
function SetCookieEx(b, c, a, d) {
    var e = b + (c ? "=true" : "=false"), f = a ? ";path=/" : "";
    d.document.cookie = e + f
}
function IsAccessibilityFeatureEnabled() {
    return GetCookie("WSS_AccessibilityFeature") == "true"
}
function escapeForSync(e) {
    for (var b = "", d = 0, c = false, g = "\\&|[]", d = 0;
    d < e.length;
    d++) {
        var a = e.charCodeAt(d), f = e.charAt(d);
        if (c && a <= 127) {
            b += "]";
            c = false
        }
        if (!c && a > 127) {
            b += "[";
            c = true
        }
        if (g.indexOf(f) >= 0) b += "|";
        if (a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57) b += f;
        else if (a <= 15) b += "%0" + a.toString(16).toUpperCase();
        else if (a <= 127) b += "%" + a.toString(16).toUpperCase();
        else if (a <= 255) b += "00" + a.toString(16).toUpperCase();
        else if (a <= 4095) b += "0" + a.toString(16).toUpperCase();
        else b += a.toString(16).toUpperCase()
    }
    if (c) b += "]";
    return b
}
var g_rgdwchMinEncoded;
function Vutf8ToUnicode(e) {
    var f = 0, a = "", b, h, c, d, g;
    while (f < e.length) if (e[f] <= 127) a += String.fromCharCode(e[f++]);
    else {
        c = e[f++];
        d = Boolean(c & 32) ? Boolean(c & 16) ? 3 : 2 : 1;
        g = d;
        b = c & 255 >>> 2 + d;
        while (Boolean(d) && f < e.length) {
            --d;
            c = e[f++];
            if (c == 0) return a;
            if ((c & 192) != 128) {
                a += "?";
                break
            }
            b = b << 6 | c & 63
        }
        if (Boolean(d)) {
            a += "?";
            break
        }
        if (b < g_rgdwchMinEncoded[g]) {
            a += "?";
            break
        }
        else if (b <= 65535) a += String.fromCharCode(b);
        else if (b <= 1114111) {
            b -= SURROGATE_OFFSET;
            a += String.fromCharCode(HIGH_SURROGATE_BITS | b >>> 10);
            a += String.fromCharCode(LOW_SURROGATE_BITS | b & 1023)
        }
        else a += "?"
    }
    return a
}
function unescapeProperlyInternal(c) {
    if (c == null) return "null";
    var e = 0, g = 0, d = "", f = [], a = 0, b, h;
    while (e < c.length) if (c.charAt(e) == "%") if (c.charAt(++e) == "u") {
        b = "";
        for (g = 0;
        g < 4 && e < c.length;
        ++g) b += c.charAt(++e);
        while (b.length < 4) b += "0";
        h = parseInt(b, 16);
        if (isNaN(h)) d += "?";
        else d += String.fromCharCode(h)
    }
    else {
        b = "";
        for (g = 0;
        g < 2 && e < c.length;
        ++g) b += c.charAt(e++);
        while (b.length < 2) b += "0";
        h = parseInt(b, 16);
        if (isNaN(h)) {
            if (Boolean(a)) {
                d += Vutf8ToUnicode(f);
                a = 0;
                f.length = a
            }
            d += "?"
        }
        else f[a++] = h
    }
    else {
        if (Boolean(a)) {
            d += Vutf8ToUnicode(f);
            a = 0;
            f.length = a
        }
        d += c.charAt(e++)
    }
    if (Boolean(a)) {
        d += Vutf8ToUnicode(f);
        a = 0;
        f.length = a
    }
    return d
}
function unescapeProperly(b) {
    var a = null;
    try {
        a = decodeURIComponent(b)
    }
    catch (c) {
        a = unescapeProperlyInternal(b)
    }
    return a
}
function navigateMailToLink(a) {
    window.location.href = "mailto:?body=" + escapeProperly(a)
}
function navigateMailToLinkWithMessage(b, a) {
    window.location.href = "mailto:" + escapeProperly(b) + "?body=" + escapeProperly(escapeProperlyCoreCore(a, false, false, true))
}
function newBlogPostOnClient(b, d, c) {
    var a, e;
    a = StsOpenEnsureEx2("SharePoint.OpenDocuments.3");
    if (a == null) {
        alert(Strings.STS.L_NewBlogPost_Text);
        return
    }
    try {
        if (typeof a.NewBlogPost != "undefined") e = a.NewBlogPost(b, d, c)
    }
    catch (f) {
        alert(Strings.STS.L_NewBlogPostFailed_Text)
    }

}
function GetUrlFromWebUrlAndWebRelativeUrl(b, c) {
    var a = b == null || b.length <= 0 ? "/" : b;
    if (a.charAt(a.length - 1) != "/") a += "/";
    a += c;
    return a
}
var g_updateFormDigestPageLoaded;
function UpdateFormDigest(f, i) {
    try {
        if (g_updateFormDigestPageLoaded == null || typeof g_updateFormDigestPageLoaded != "object") return;
        var k = new Date;
        if (k.getTime() - g_updateFormDigestPageLoaded.getTime() < i) return;
        if (f == null || f.length <= 0) return;
        var a = document.getElementsByName("__REQUESTDIGEST")[0];
        if (a == null || a.tagName.toLowerCase() != "input" || a.type.toLowerCase() != "hidden" || a.value == null || a.value.length <= 0) return;
        var b = new XMLHttpRequest;
        if (b == null) return;
        b.open("POST", GetUrlFromWebUrlAndWebRelativeUrl(f, "_vti_bin/sites.asmx"), false);
        b.setRequestHeader("Content-Type", "text/xml");
        b.setRequestHeader("SOAPAction", "http://schemas.microsoft.com/sharepoint/soap/GetUpdatedFormDigest");
        b.send('<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">  <soap:Body>    <GetUpdatedFormDigest xmlns="http://schemas.microsoft.com/sharepoint/soap/" />  </soap:Body></soap:Envelope>');
        var c = b.responseText;
        if (c == null || c.length <= 0) return;
        var g = "<GetUpdatedFormDigestResult>", j = "</GetUpdatedFormDigestResult>", e = c.indexOf(g), h = c.indexOf(j, e + g.length), d = null;
        if (e >= 0 && h > e) d = c.substring(e + g.length, h);
        if (d == null || d.length <= 0) return;
        var l = a.value;
        a.value = d;
        g_updateFormDigestPageLoaded = new Date
    }
    catch (m) { }
}
function IsSupportedFirefoxOnWin() {
    return browseris.win && browseris.firefox3up
}
function IsSupportedChromeOnWin() {
    return browseris.win && browseris.chrome
}
function IsSupportedNPApiBrowserOnWin() {
    return IsSupportedChromeOnWin() || IsSupportedFirefoxOnWin()
}
function IsNPAPIOnWinPluginInstalled(a) {
    return Boolean(navigator.mimeTypes) && navigator.mimeTypes[a] && navigator.mimeTypes[a].enabledPlugin
}
function CreateNPApiOnWindowsPlugin(b) {
    var c = null;
    if (IsSupportedNPApiBrowserOnWin()) try {
        c = document.getElementById(b);
        if (!Boolean(c) && IsNPAPIOnWinPluginInstalled(b)) {
            var a = document.createElement("object");
            a.id = b;
            a.type = b;
            a.width = "0";
            a.height = "0";
            a.style.setProperty("visibility", "hidden", "");
            document.body.appendChild(a);
            c = document.getElementById(b)
        }

    }
        catch (d) {
            c = null
        }
    return c
}
function IsSupportedMacBrowser() {
    return browseris.mac && (browseris.firefox3up || browseris.safari3up || browseris.chrome)
}
function IsBrowserPluginInstalled(a) {
    var b = Boolean(navigator.mimeTypes) && navigator.mimeTypes[a];
    if (b) {
        var c = navigator.mimeTypes[a];
        return !!c.enabledPlugin
    }
    return false
}
function IsMacPluginInstalled() {
    var a = IsBrowserPluginInstalled("application/x-sharepoint-webkit"), b = IsBrowserPluginInstalled("application/x-sharepoint");
    return browseris.safari3up && a ? true : b
}
function CreateMacPlugin() {
    var b = null;
    if (IsSupportedMacBrowser()) {
        b = document.getElementById("macSharePointPlugin");
        if (b == null && IsMacPluginInstalled()) {
            var c = null;
            if (browseris.safari3up && IsBrowserPluginInstalled("application/x-sharepoint-webkit")) c = "application/x-sharepoint-webkit";
            else c = "application/x-sharepoint";
            var a = document.createElement("object");
            a.id = "macSharePointPlugin";
            a.type = c;
            a.width = "0";
            a.height = "0";
            a.style.visibility = "hidden";
            document.body.appendChild(a);
            b = document.getElementById("macSharePointPlugin")
        }

    }
    return b
}
var g_objStssync;
function GetStssyncHandler(a) {
    if (!IsSupportedMacBrowser()) try {
        g_objStssync = new ActiveXObject("SharePoint.StssyncHandler" + a)
    }
        catch (b) {
            g_objStssync = null
        }
    else g_objStssync = CreateMacPlugin()
}
function GetStssyncData(d, g, e, h) {
    var a = null;
    if (document.cookie.indexOf("stsSyncAppName") == -1 && document.cookie.indexOf("stsSyncIconPath") == -1) {
        if (IsSupportedMacBrowser()) {
            var f = GetStssyncHandler("");
            if (f == null || typeof f.StssyncEnabled == "undefined" || !f.StssyncEnabled) {
                document.cookie = "stsSyncAppName=0;";
                document.cookie = "stsSyncIconPath=0;";
                return a
            }

        }
        if (browseris.ie5up && browseris.win32 || IsSupportedMacBrowser()) {
            var b, c;
            d != "" && GetStssyncHandler(".3");
            if (!g_objStssync) {
                if (d != "" && d != "calendar" && d != "contacts") {
                    document.cookie = "stsSyncAppName=0;";
                    document.cookie = "stsSyncIconPath=0;";
                    return a
                }
                GetStssyncHandler(".2");
                if (!g_objStssync || typeof g_objStssync.GetStssyncAppName == "undefined" || !Boolean(b = g_objStssync.GetStssyncAppName())) {
                    document.cookie = "stsSyncAppName=0;";
                    document.cookie = "stsSyncIconPath=0;";
                    return a
                }

            }
            else if (typeof g_objStssync.GetStssyncAppNameForType == "undefined" || !Boolean(b = g_objStssync.GetStssyncAppNameForType(d))) {
                document.cookie = "stsSyncAppName=0;";
                document.cookie = "stsSyncIconPath=0;";
                return a
            }
            document.cookie = "stsSyncAppName=" + escapeProperly(b) + ";";
            try {
                if (typeof g_objStssync.GetStssyncIconName == "undefined") throw 0;
                c = g_objStssync.GetStssyncIconName();
                c = h + c;
                document.cookie = "stsSyncIconPath=" + escapeProperly(c) + ";"
            }
            catch (i) {
                document.cookie = "stsSyncIconPath=0;";
                c = e
            }

        }
        else {
            b = g;
            c = e;
            document.cookie = "stsSyncAppName=" + escapeProperly(g);
            document.cookie = "stsSyncIconPath=" + escapeProperly(e)
        }

    }
    else {
        b = GetCookie("stsSyncAppName");
        c = GetCookie("stsSyncIconPath");
        if (b == "0") return a
    }
    b = Strings.STS.L_LinkToBefore_Text + b;
    a = {};
    a.BtnText = b;
    a.BtnImagePath = c;
    return a
}
function GetStssyncAppName(b) {
    var a = GetStssyncData("", b, "", "");
    return a.BtnText
}
function makeAbsUrl(a) {
    if (a.length > 0 && "/" == a.substr(0, 1)) a = window.location.protocol + "//" + window.location.host + a;
    return a
}
function ExportHailStorm(o, k, n, c, b, m, q, l, i, j) {
    var h = GetCookie("stsSyncAppName"), p = GetCookie("stsSyncIconPath");
    if (h != null && h != "0") {
        var g = 500, a = 20, d = "stssync://sts/?ver=1.1&type=" + escapeProperly(o) + "&cmd=add-folder&base-url=" + escapeForSync(k) + "&list-url=" + escapeForSync("/" + makeAbsUrl(m).substr(k.length + 1) + "/") + "&guid=" + escapeProperly(n);
        if (typeof offlineBtnUser != "undefined") d += "&user-id=" + offlineBtnUser;
        var f = "&site-name=" + escapeForSync(c) + "&list-name=" + escapeForSync(b), e = "";
        if (Boolean(i)) e += "&folder-url=" + escapeForSync("/" + i.substr(l.length + 1));
        if (Boolean(j)) e += "&folder-id=" + j;
        if (d.length + f.length + e.length > g && (c.length > a || b.length > a)) {
            if (c.length > a) c = c.substring(0, a - 1) + "...";
            if (b.length > a) b = b.substring(0, a - 1) + "...";
            f = "&site-name=" + escapeForSync(c) + "&list-name=" + escapeForSync(b)
        }
        d = d + f + e;
        if (d.length > g) alert(Strings.STS.L_StssyncTooLong_Text);
        else try {
            window.location.href = d
        }
            catch (r) { }
    }

}
var g_objDiagramLaunch;
function GetDiagramLaunchInstalled() {
    var a = "";
    if (document.cookie.indexOf("digInstalled") == -1) try {
        g_objDiagramLaunch = new ActiveXObject("DiagramLaunch.DiagramLauncher");
        if (typeof g_objDiagramLaunch.EnsureDiagramApplication != "undefined") a = g_objDiagramLaunch.EnsureDiagramApplication();
        document.cookie = "digInstalled=" + escapeProperly(a) + ";"
    }
        catch (b) {
            g_objDiagramLaunch = null;
            document.cookie = "digInstalled=0;"
        }
    else {
        a = GetCookie("digInstalled");
        if (a == "0") a = ""
    }
    return a
}
var g_objProjectTaskLaunch;
function GetProjectTaskLaunchInstalled() {
    if (document.cookie.indexOf("projInstalled") == -1) {
        var a = "";
        try {
            g_objProjectTaskLaunch = new ActiveXObject("WinProj.Activator");
            if (typeof g_objProjectTaskLaunch.EnsureTaskApplication != "undefined") a = g_objProjectTaskLaunch.EnsureTaskApplication();
            document.cookie = "projInstalled=" + escapeProperly(a) + ";"
        }
        catch (b) {
            document.cookie = "projInstalled=0;";
            g_objProjectTaskLaunch = null
        }

    }
    else {
        a = GetCookie("projInstalled");
        if (a == "0") a = ""
    }
    return a
}
var g_expDatabase;
function GetDataBaseInstalled() {
    var a = "", c = "";
    if (document.cookie.indexOf("databaseBtnText") == -1 || document.cookie.indexOf("databaseBtnDesc") == -1) try {
        g_expDatabase = new ActiveXObject("SharePoint.ExportDatabase");
        if (Boolean(g_expDatabase) && typeof g_expDatabase.IsDBProgramInstalled != "undefined" && g_expDatabase.IsDBProgramInstalled()) {
            if (typeof g_expDatabase.MenuTitle != "undefined") document.cookie = "databaseBtnText=" + escapeProperly(g_expDatabase.MenuTitle) + ";";
            if (typeof g_expDatabase.MenuDescription != "undefined") document.cookie = "databaseBtnDesc=" + escapeProperly(g_expDatabase.MenuDescription) + ";"
        }
        else {
            document.cookie = "databaseBtnText=0;";
            document.cookie = "databaseBtnDesc=0;";
            g_expDatabase = null
        }

    }
        catch (d) {
            document.cookie = "databaseBtnText=0;";
            document.cookie = "databaseBtnDesc=0;";
            g_expDatabase = null
        }
    else {
        a = GetCookie("databaseBtnText");
        c = GetCookie("databaseBtnDesc");
        if (a != "0" && a != "0") {
            var b = {};
            b.MenuTitle = a;
            b.MenuDescription = c;
            return b
        }
        else g_expDatabase = null
    }
    return g_expDatabase
}
var g_ssImporterObj, g_fSSImporter;
function EnsureSSImportInner() {
    if (browseris.ie5up && browseris.win32) try {
        g_ssImporterObj = new ActiveXObject("SharePoint.SpreadsheetLauncher.2");
        if (g_ssImporterObj) g_fSSImporter = true
    }
        catch (a) {
            try {
                g_ssImporterObj = new ActiveXObject("SharePoint.SpreadsheetLauncher.1");
                if (g_ssImporterObj) g_fSSImporter = true
            }
            catch (a) {
                g_fSSImporter = false
            }

        }
    else if (IsSupportedMacBrowser()) {
        g_ssImporterObj = CreateMacPlugin();
        if (g_ssImporterObj) g_fSSImporter = true;
        else g_fSSImporter = false
    }

}
function EnsureSSImporter(a) {
    a = typeof a == undefined ? false : a;
    if (document.cookie.indexOf("EnsureSSImporter") == -1 || a) {
        EnsureSSImportInner();
        document.cookie = "EnsureSSImporter=" + String(g_fSSImporter) + ";"
    }
    else g_fSSImporter = GetCookie("EnsureSSImporter") == "true" ? true : false;
    return g_fSSImporter
}
function GetThemedImageUrl(a) {
    return GetThemedImageUrl_Core(a, "/_layouts/15/images/")
}
function GetThemedLocalizedImageUrl(b) {
    var a = "/_layouts/15/" + Strings.STS.L_Language_Text + "/images/";
    return GetThemedImageUrl_Core(b, a)
}
function GetThemedImageUrl_Core(e, g) {
    var f = g + e, c = window._spPageContextInfo;
    if (c != null) {
        var b = c.themedCssFolderUrl, d = c.themedImageFileNames, a = null;
        if (d != null) a = d[e];
        if (b != null && b.length > 0 && a != null) f = b + "/" + a
    }
    return GetImageUrlWithRevision(f)
}
function GetImageUrlWithRevision(a) {
    return a.search(/[?]/) > -1 ? a : a + "?rev=23"
}
function ShowHideSection(c, d) {
    var a = document.getElementById(c), b = document.getElementById(d);
    if (a == null) return;
    if (a.style.display != "none") {
        a.style.display = "none";
        b.src = GetThemedImageUrl("commentexpand12.png")
    }
    else {
        a.style.display = "";
        b.src = GetThemedImageUrl("commentcollapse12.png")
    }

}
function ShowSection(b, c) {
    var a = document.getElementById(b), d = document.getElementById(c);
    if (a == null) return;
    if (a.style.display == "none") {
        a.style.display = "";
        d.src = GetThemedImageUrl("commentcollapse12.png")
    }

}
function ShowHideInputFormSection(c, d) {
    var a = document.getElementById(c);
    if (a != null) a.style.display = d ? "" : "none";
    for (var b = 1;
    b < 3;
    b++) {
        a = document.getElementById(c + "_tablerow" + String(b));
        if (a != null) a.style.display = d ? "" : "none"
    }

}
function ShowHideInputFormControl(id, bHide, bDisableValidators, bSilent) {
    var displaySetting = "";
    if (bHide == true) displaySetting = "none";
    var validators = eval(id + "_validators"), i = 0;
    if (validators != null) for (i = 0;
    i < validators.length;
    i++) STSValidatorEnable(validators[i], !bDisableValidators, bSilent);
    for (i = 1;
    i <= 5;
    i++) {
        var rowId = id + "_tablerow" + String(i), row = document.getElementById(rowId);
        if (row != null && !browseris.mac) row.style.display = displaySetting
    }

}
function HideMenuControl(menuControlId) {
    if (typeof menuControlId == "undefined" || menuControlId == null) return;
    var menu = document.getElementById(menuControlId);
    if (typeof menu == "undefined" || menu == null) return;
    var menuItems = menu.getElementsByTagName("ie:menuitem");
    if (typeof menuItems == "undefined" || menuItems == null) return;
    for (var i = 0;
    i < menuItems.length;
    i++) {
        var menuItem = menuItems[i], hiddenScript = menuItem.getAttribute("hidden");
        if (typeof hiddenScript == "undefined" || hiddenScript == null || !eval(hiddenScript)) return
    }
    menu.style.display = "none"
}
function SetControlDisabledStatus(a, b) {
    try {
        Boolean(a.setAttribute) && a.setAttribute("disabled", String(b));
        !b && Boolean(a.removeAttribute) && a.removeAttribute("disabled")
    }
    catch (c) { }
}
function SetControlDisabledStatusRecursively(a, c) {
    if (a == null) return;
    SetControlDisabledStatus(a, c);
    for (var d = a.childNodes, b = 0;
    d.length > b;
    b++) SetControlDisabledStatusRecursively(d[b], c)
}
function SetChildControlsDisabledStatus(d, c) {
    for (var b = d.childNodes, a = 0;
    a < b.length;
    a++) SetControlDisabledStatusRecursively(b[a], c)
}
var g_PNGImageIds, g_PNGImageSources;
function displayPNGImage(e, d, b, a, f) {
    if (g_PNGImageIds == null) g_PNGImageIds = [];
    if (g_PNGImageSources == null) g_PNGImageSources = [];
    var c = null;
    document.write("<IMG id='" + e + "' ");
    Boolean(b) && b > 0 && document.write("width='" + String(b) + "' ");
    Boolean(a) && a > 0 && document.write("height='" + String(a) + "' ");
    document.write("alt='" + f + "' ");
    Boolean(c) && document.write("style='" + c + "' ");
    document.write(" src='" + d + "' />");
    g_PNGImageIds.push(e);
    g_PNGImageSources.push(d)
}
function ProcessPNGImages() {
    var c = browseris.ie && browseris.ie55up && browseris.verIEFull < 7;
    if (g_PNGImageIds != null && c) for (var a = 0;
    a < g_PNGImageIds.length;
    a++) {
        var b = document.getElementById(g_PNGImageIds[a]);
        if (b != null && g_PNGImageSources[a] != null) {
            b.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + g_PNGImageSources[a] + "),sizingMethod=scale);";
            b.src = "/_layouts/15/images/blank.gif?rev=23"
        }

    }

}
function CtxSetIsWebEditorPreview(a) {
    ctx.isWebEditorPreview = a
}
function CtxSetCurrentUserId(a) {
    ctx.CurrentUserId = a
}
function CtxSetIsForceCheckout(a) {
    ctx.isForceCheckout = a
}
function BasePermissions() { } var CTXTYPE_EDITMENU, CTXTYPE_VIEWSELECTOR;
function ContextInfo() {
    this.listBaseType = null;
    this.listTemplate = null;
    this.listName = null;
    this.view = null;
    this.listUrlDir = null;
    this.HttpPath = null;
    this.HttpRoot = null;
    this.serverUrl = null;
    this.imagesPath = null;
    this.PortalUrl = null;
    this.RecycleBinEnabled = null;
    this.enteringGridMode = false;
    this.inGridMode = false;
    this.isWebEditorPreview = null;
    this.rootFolderForDisplay = null;
    this.isPortalTemplate = null;
    this.isModerated = false;
    this.recursiveView = false;
    this.displayFormUrl = null;
    this.editFormUrl = null;
    this.newFormUrl = null;
    this.ctxId = null;
    this.CurrentUserId = null;
    this.isForceCheckout = false;
    this.EnableMinorVersions = false;
    this.ModerationStatus = 0;
    this.verEnabled = 0;
    this.isVersions = 0;
    this.WorkflowsAssociated = false;
    this.ExternalDataList = false;
    this.HasRelatedCascadeLists = 0;
    this.CascadeDeleteWarningMessage = null;
    this.ContentTypesEnabled = false;
    this.SendToLocationName = "";
    this.SendToLocationUrl = "";
    this.StateInitDone = false;
    this.TotalListItems = null;
    this.CurrentSelectedItems = null;
    this.LastSelectableRowIdx = null;
    this.SelectAllCbx = null;
    this.TableCbxFocusHandler = null;
    this.TableMouseoverHandler = null
}
function ctxInitItemState(a) {
    a.TotalListItems = 0;
    a.CurrentSelectedItems = 0;
    a.LastSelectableRowIdx = 0;
    a.StateInitDone = true
}
function STSPageUrlValidation(a) {
    return PageUrlValidation(a)
}
function GetSource(a) {
    var c = DeferCall("GetSource2", a, null);
    if (c == null) {
        var b = GetUrlKeyValue("Source");
        if (b == "") if (a != null && a != "") b = a;
        else b = ajaxNavigate.get_href();
        c = b
    }
    return escapeProperly(STSPageUrlValidation(c))
}
function GetUrlKeyValue(c, h, a, g) {
    var e = "";
    if (a == null) a = ajaxNavigate.get_href() + "";
    var b;
    b = a.indexOf("#");
    if (b >= 0) a = a.substr(0, b);
    var d;
    if (g) {
        c = c.toLowerCase();
        d = a.toLowerCase()
    }
    else d = a;
    b = d.indexOf("&" + c + "=");
    if (b == -1) b = d.indexOf("?" + c + "=");
    if (b != -1) {
        var f = a.indexOf("&", b + 1);
        if (f == -1) f = a.length;
        e = a.substring(b + c.length + 2, f)
    }
    return h ? e : unescapeProperlyInternal(e)
}
function LoginAsAnother(a, b) {
    document.cookie = "loginAsDifferentAttemptCount=0";
    if (b == "1") GoToPage(a);
    else {
        var c = a.indexOf("?") >= 0 ? "&" : "?";
        a += c + "Source=" + escapeProperly(window.location.href);
        STSNavigate(a)
    }

}
function isPortalTemplatePage(a) {
    return GetUrlKeyValue("PortalTemplate") == "1" || GetUrlKeyValue("PortalTemplate", Boolean(a)) == "1" || currentCtx != null && currentCtx.isPortalTemplate ? true : false
}
function CLVPFromEvent(a) {
    return DeferCall("CLVPFromEventReal", a)
}
function STSNavigateToView(b, a) {
    STSNavigate(a)
}
function STSNavigate2(b, a) {
    STSNavigate(a)
}
function STSNavigateTop(a) {
    var b = true;
    if (typeof window.top.SPUpdatePage !== "undefined") b = window.top.SPUpdatePage(a);
    if (b) window.top.location.href = STSPageUrlValidation(a)
}
function STSNavigate(a) {
    a = GetAbsoluteUrl(a);
    if (ajaxNavigate.get_search().indexOf("IsDlg=1") != -1) if (a.indexOf("?") != -1) if (String(a.match(RegExp("&$"))) != "&") a = a + "&IsDlg=1";
    else a = a + "IsDlg=1";
    else a = a + "?IsDlg=1";
    if (window.frameElement != null || typeof SPUpdatePage === "undefined" || typeof SPUpdatePage !== "undefined" && SPUpdatePage(a)) if (isPortalTemplatePage(a)) window.top.location.href = STSPageUrlValidation(a);
    else window.location.href = STSPageUrlValidation(a)
}
function GoToPage(b, c) {
    var d = b.indexOf("?") >= 0 ? "&" : "?";
    if (GetUrlKeyValue("Source", true, b).length == 0) {
        var a = c ? GetUrlKeyValue("Source") : GetSource();
        if (a != null && a != "") {
            if (c) a = escapeProperly(STSPageUrlValidation(a));
            if (b.length + a.length <= 1950) b += d + "Source=" + a
        }

    }
    STSNavigate(b)
}
function TrimSpaces(c) {
    var a, b;
    c = c.toString();
    var d = c.length;
    for (a = 0;
    a < d;
    a++) if (c.charAt(a) != " ") break;
    if (a == d) return "";
    for (b = d - 1;
    b > a;
    b--) if (c.charAt(b) != " ") break;
    b++;
    return c.substring(a, b)
}
function TrimWhiteSpaces(d) {
    var b, c;
    d = d.toString();
    var e = d.length, a;
    for (b = 0;
    b < e;
    b++) {
        a = d.charAt(b);
        if (a != " " && a != "\t" && a != "\n" && a != "\r" && a != "\f") break
    }
    if (b == e) return "";
    for (c = e - 1;
    c > b;
    c--) {
        a = d.charAt(c);
        if (a != " " && a != "\t" && a != "\n" && a != "\r" && a != "\f") break
    }
    c++;
    return d.substring(b, c)
}
function GetAttributeFromItemTable(a, d, c) {
    var b = a != null ? a.getAttribute(d) : null;
    if (b == null && a != null && c != null) b = a.getAttribute(c);
    return b
}
function ShowMtgNavigatorPane() {
    document.getElementById("MeetingNavigatorPane").style.display = "block"
}
function HideMtgNavigatorPane() {
    document.getElementById("MeetingNavigatorPane").style.display = "none"
}
function HideMtgDesc() {
    document.getElementById("MeetingDescription").style.display = "none"
}
function GetMultipleUploadEnabled() {
    try {
        if (browseris.ie5up && !browseris.mac && new ActiveXObject("STSUpld.UploadCtl")) return true
    }
    catch (a) { } return false
}
function SetUploadPageTitle() {
    if (Number(GetUrlKeyValue("Type")) == 1) {
        document.title = Strings.STS.L_NewFormClickOnce1_Text;
        if (browseris.ie || browseris.nav6up) {
            var a = document.getElementById("onetidTextTitle");
            if (a != null) a.innerHTML = Strings.STS.L_NewFormClickOnce1_Text
        }

    }

}
function GetSelectedValue(a) {
    if (Boolean(a) && a.selectedIndex > -1) {
        var b = a.options[a.selectedIndex];
        return b.value
    }
    else return ""
}
function GetSelectedText(a) {
    if (Boolean(a) && a.selectedIndex > -1) {
        var b = a.options[a.selectedIndex];
        return b.text
    }
    else return ""
}
function MtgShowTimeZone() {
    GetCookie("MtgTimeZone") == "1" && EnsureScriptParams("core.js", "MtgToggleTimeZone")
}
function FormatDate(a, b, d, e) {
    var c = Strings.STS.L_DateSeparator_Text;
    if (browseris.win32 && a == d) c = Strings.STS.L_DateSeparatorEx_Text;
    if (a == d) {
        document.write(Strings.STS.L_Date_Text + " " + a);
        if (b != e) document.write(" " + Strings.STS.L_TimeLong_Text + " " + b + c + e);
        else document.write(" " + Strings.STS.L_TimeLong_Text + " " + b)
    }
    else document.write(Strings.STS.L_TimeLong_Text + " " + a + " (" + b + ")" + c + d + " (" + e + ")")
}
function GetAlertText(c) {
    var a = c & 16 - 1, b = c - a;
    if (Boolean(a)) switch (a) {
        case 1: return typeof g_meetingCount != "undefined" && g_meetingCount == 1 ? Strings.STS.L_DETACHEDSINGLEEXCEPT_Text : Strings.STS.L_DETACHEDCANCELLEDEXCEPT_Text;
        case 2: return Strings.STS.L_DETACHEDCANCELLEDSERIES_Text;
        case 3: return Strings.STS.L_DETACHEDCANCELLEDEXCEPT_Text;
        case 4: return typeof g_meetingCount != "undefined" && g_meetingCount == 1 ? Strings.STS.L_DETACHEDSINGLEEXCEPT_Text : Strings.STS.L_DETACHEDUNLINKEDSINGLE_Text;
        case 5: return Strings.STS.L_DETACHEDUNLINKEDSERIES_Text;
        case 6: return Strings.STS.L_DETACHEDSERIESNOWSINGLE_Text;
        case 7: return Strings.STS.L_DETACHEDSINGLENOWSERIES_Text;
        case 8: return Strings.STS.L_DETACHEDPASTEXCPMODIFIED_Text
    }
    else if (Boolean(b)) switch (b) {
        case 16: return Strings.STS.L_DETACHEDNONGREGORIANCAL_Text
    }
    return null
}
function retrieveCurrentThemeLink() {
    for (var a, d = document.getElementsByTagName("link"), c = 0;
    c < d.length;
    c++) {
        var b = d[c];
        if (b.type == "text/css" && b.id == "onetidThemeCSS") a = b
    }
    if (Boolean(a)) {
        var g = /(\.\.\/)+/, e = a.href, f = e.replace(g, "/");
        return f
    }
    return null
}
function StBuildParam(b) {
    for (var c, a = 1;
    a < StBuildParam.arguments.length;
    a++) {
        c = new RegExp("\\^" + String(a));
        b = b.replace(c, StBuildParam.arguments[a])
    }
    return b
}
var JSRequest, ExpGroupWPListName, ExpGroupCookiePrefix, ExpGroupCookieDelimiter, ExpGroupMaxWP, ExpGroupMaxCookieLength, g_ExpGroupCAMLQueue, g_ExpGroupXSLTQueue, g_ExpGroupInProgress, g_ExpInitializing, g_ExpGroupTable, g_ExpGroupNeedsState, g_ExpGroupParseStage;
function ExpCollGroup(c, F, y, w) {
    if (y != null) g_ExpGroupNeedsState = true;
    if (document.getElementById("titl" + c) == null) return;
    var m = document.getElementById("titl" + c).parentNode;
    if (m == null) return;
    var I = c.substr(0, c.indexOf("-")), b = window["ctx" + I];
    if (!Boolean(b)) return;
    !b.StateInitDone && ctxInitItemState(b);
    if (b.SelectAllCbx == null) b.SelectAllCbx = getSelectAllCbxFromTable(m);
    var u = m.getElementsByTagName("TBODY"), G = u.length, r = c.length, d = document.getElementById(F);
    if (d == null) return;
    var H = d.src, o = d.getAttribute("src"), j = H.lastIndexOf("/"), k = GetThemedImageUrl("spcommon.png"), B = fRightToLeft ? "ms-commentcollapsertl-icon" : "ms-commentcollapse-icon", A = fRightToLeft ? "ms-commentcollapsertl-iconouter" : "ms-commentcollapse-iconouter", q = fRightToLeft ? "ms-commentexpandrtl-icon" : "ms-commentexpand-icon", t = fRightToLeft ? "ms-commentexpandrtl-iconouter" : "ms-commentexpand-iconouter", p = "/_layouts/15/images/plus.gif", z = "/_layouts/15/images/minus.gif", e = false, h;
    if (o == p || o == k && d.className == q || g_ExpInitializing) {
        e = true;
        h = "";
        if (o == k) {
            d.className = B;
            d.parentNode.className = A
        }
        else d.src = z
    }
    else {
        e = false;
        h = "none";
        if (o == k) {
            d.className = q;
            d.parentNode.className = t
        }
        else d.src = p
    }
    for (var f = 0, s = 0;
    s < G;
    s++) {
        var a = u[s];
        if (a.id != null && a.id.length > r + 4 && c == a.id.slice(4).substr(0, r)) {
            if (e) {
                j = a.id.indexOf("_", r + 4);
                if (j != -1) {
                    j = a.id.indexOf("_", j + 1);
                    if (j != -1) continue
                }

            }
            var C = a.style.display;
            a.style.display = h;
            var l = 0;
            if (Boolean(a.getAttribute("selectableRows"))) l = Number(a.getAttribute("selectableRows"));
            if (typeof FV4UI != "undefined" && FV4UI() && Boolean(l)) if (!e) {
                if (C != "none") b.TotalListItems -= l;
                EnsureScriptParams("core.js", "DeselectCollapsedGroup", b, a);
                EnsureScriptParams("core.js", "UpdateSelectAllCbx", b, true)
            }
            else {
                b.TotalListItems += l;
                EnsureScriptParams("core.js", "UpdateSelectAllCbx", b, false)
            }
            if (e && a.id.substr(0, 4) == "titl") {
                var n = document.getElementById("img_" + a.id.slice(4)), D = n.getAttribute("src");
                if (D == k) {
                    n.className = q;
                    n.parentNode.className = t
                }
                else n.src = p
            }
            var v = "tbod" + c, i;
            if (a.id.substr(0, v.length) == v) {
                if (w) for (f = 0;
                f < a.childNodes.length;
                f++) {
                    i = a.childNodes[f];
                    i.style.display = h
                }
                if (a.childNodes.length == 0) {
                    var g = a.nextSibling;
                    while (g != null) if (g.tagName == "TBODY" && g.id == "") {
                        for (f = 0;
                        f < g.childNodes.length;
                        f++) {
                            i = g.childNodes[f];
                            i.style.display = h;
                            if (typeof FV4UI != "undefined" && FV4UI()) {
                                HandleSingleGroupByRow(b, i, e);
                                UpdateSelectAllCbx(b, true)
                            }

                        }
                        break
                    }
                    else g = g.nextSibling
                }

            }

        }

    }
    FV4UI() && EnsureScriptParams("core.js", "UpdateCtxLastSelectableRow", b, m);
    if (!w && !g_ExpGroupParseStage) {
        if (g_ExpGroupNeedsState && ExpGroupFetchWebPartID(c) != null && !Boolean(b.noGroupCollapse)) if (e) AddGroupToCookie(c);
        else RemoveGroupFromCookie(c);
        if (e) {
            var x = document.getElementById("tbod" + c + "_");
            if (x != null) {
                var E = x.getAttribute("isLoaded");
                E == "false" && ExpGroupFetchData(c, y)
            }

        }

    }

}
function ExpGroupFetchData(b, a) {
    var c = '<tr><td colspan="100" class="ms-gbload">' + Strings.STS.L_Loading_Text + "</td></tr>";
    ExpGroupRenderData(c, b, "false");
    if (!g_ExpGroupInProgress) {
        var d = ExpGroupFetchGroupString(b);
        if (d == null) {
            c = '<tr><td></td><td class="ms-gbload">' + Strings.STS.L_Loading_Error_Text + "</td></tr>";
            ExpGroupRenderData(c, b, "false");
            if (Boolean(a) && g_ExpGroupXSLTQueue.length > 0) ExpGroupFetchData(g_ExpGroupXSLTQueue.shift(), a);
            else !Boolean(a) && g_ExpGroupCAMLQueue.length > 0 && ExpGroupFetchData(g_ExpGroupCAMLQueue.shift(), a);
            return
        }
        if (typeof InitAllClvps == "undefined" && a != null) g_ExpInitializing = true;
        else {
            g_ExpInitializing = false;
            g_ExpGroupInProgress = true
        }
        ExpGroupCallServer(d, b, a);
        g_ExpGroupCAMLQueue.length > 0 && a == null && ExpGroupFetchData(g_ExpGroupCAMLQueue.shift())
    }
    else if (Boolean(a)) g_ExpGroupXSLTQueue.push(b);
    else g_ExpGroupCAMLQueue.push(b)
}
function ExpGroupCallServer(groupString, groupName, evt) {
    if (evt != null) {
        var obj = evt;
        if (evt == "PageLoad") {
            obj = {};
            obj.fakeEvent = true
        }
        var defd;
        try {
            defd = typeof inplview.ExpGroup
        }
        catch (e) {
            defd = "undefined"
        }
        var str = "inplview.ExpGroup", rg = str.split(".");
        if (rg.length > 1) {
            var fnd = function () {
                inplview.ExpGroup(obj, groupName)
            };
            EnsureScript(rg[0], defd, fnd)
        }

    }
    else {
        var viewCounter = groupName.substring(0, groupName.indexOf("-")), myCtx = window["ctx" + viewCounter], webPartID = ExpGroupFetchWebPartID(groupName);
        if (webPartID != null) {
            var functionName = "ExpGroupCallServer" + webPartID;
            if (myCtx != null && myCtx.clvp != null) {
                var myClvp = myCtx.clvp, strFilter = myClvp.FilterString();
                if (strFilter != null) groupString += "|" + strFilter
            }
            var functionCall = functionName + "('" + groupString + "','" + groupName + "')";
            eval(functionCall)
        }

    }

}
function DoPagingCallback(webPartID, pagingParam) {
    if (webPartID != null) {
        var functionName = "DoPagingCallback" + webPartID, functionCall = functionName + "('" + pagingParam + "')";
        eval(functionCall)
    }

}
function ExpGroupReceiveData(a, c) {
    var d = "ctx" + c.substring(0, c.indexOf("-")), e = a.indexOf('CTXName="');
    if (e != -1) if (d != "ctx1") a = a.replace(/ CTXName=\"ctx1\" /g, ' CTXName="' + d + '" ');
    var b = false;
    if (a.length < 4) b = true;
    else if (a.substring(0, 3) != "<tr") b = true;
    if (b) a = "<TR><TD>" + a + "</TD></TR>";
    ExpGroupRenderData(a, c, "true");
    ProcessImn();
    g_ExpGroupInProgress = false;
    g_ExpGroupCAMLQueue.length > 0 && ExpGroupFetchData(g_ExpGroupCAMLQueue.shift())
}
function ExpGroupRenderData(d, a, e) {
    var c = document.getElementById("tbod" + a + "_"), b = document.createElement("DIV"), f = a.split("-");
    b.innerHTML = '<TABLE><TBODY id="tbod' + a + '_" isLoaded="' + e + '">' + d + "</TBODY></TABLE>";
    c.parentNode.replaceChild(b.firstChild.firstChild, c)
}
var titlTbody;
function ExpGroupFetchGroupString(b) {
    titlTbody = document.getElementById("titl" + b);
    return titlTbody == null ? null : titlTbody.getAttribute("groupString")
}
function ExpGroupFetchWebPartID(b) {
    var c = b.substring(0, b.indexOf("-")), a = document.getElementById("GroupByWebPartID" + c);
    return a == null ? null : a.getAttribute("webPartID")
}
function RenderActiveX(a) {
    document.write(a)
}
function RenderActiveX2(f, d) {
    if (d == null) return;
    var a = document.getElementById(d);
    if (a != null) {
        var e = a.parentNode, c = document.createElement("div");
        c.innerHTML = f;
        var b = c.childNodes[0];
        b != null && e.replaceChild(b, a)
    }

}
function OnItem(a) {
    DeferCall("OnItemDeferCall", a)
}
function OnChildItem(c) {
    for (var b = 0;
    b < c.childNodes.length;
    b++) {
        var a = c.childNodes[b];
        if (a.nodeType == 1 && a.tagName == "TABLE" && Boolean(a.getAttribute("NameOrTitle"))) break;
        if (a.nodeType == 1 && a.tagName == "DIV" && a.style.display != "none" && a.style.visibility != "hidden") {
            OnItem(a);
            break
        }

    }

}
function OnLink(a) {
    DeferCall("OnLinkDeferCall", a)
}
function MMU_PopMenuIfShowing(a) {
    DeferCall("MMU_PopMenuIfShowingDeferCall", a)
}
function OnMouseOverFilter(a) {
    DeferCall("OnMouseOverFilterDeferCall", a)
}
function OnChildColumn(c) {
    for (var b = 0;
    b < c.childNodes.length;
    b++) {
        var a = c.childNodes[b];
        if (a.nodeType == 1 && a.tagName == "DIV" && a.getAttribute("CtxNum") != null) {
            OnMouseOverFilter(a);
            break
        }

    }

}
function MMU_EcbTableMouseOverOut(b, a) {
    DeferCall("MMU_EcbTableMouseOverOutDeferCall", b, a)
}
function OnMouseOverAdHocFilter(b, a) {
    DeferCall("OnMouseOverAdHocFilterDeferCall", b, a)
}
function MMU_EcbLinkOnFocusBlur(c, b, a) {
    DeferCall("MMU_EcbLinkOnFocusBlurDeferCall", c, b, a)
}
function GetElementByClassName(a, d) {
    if (Boolean(a.className)) if (a.className.indexOf(d) > -1) return a;
    for (var b, c = 0;
    c < a.childNodes.length;
    c++) {
        b = GetElementByClassName(a.childNodes[c], d);
        if (b != null) return b
    }
    return null
}
function AddWhiteBG() {
    if (searcharea.className.indexOf(" " + whitebgclass) == -1) {
        var a = searcharea.className.trim() + " " + whitebgclass;
        a = a.trim();
        searcharea.className = a
    }

}
function RemoveWhiteBG() {
    if (locked) return;
    searcharea.className = searcharea.className.replace(RegExp(" " + whitebgclass), "")
}
var locked;
function LockBG() {
    locked = !locked;
    if (locked) AddWhiteBG();
    else RemoveWhiteBG()
}
var CSSUtil, searcharea, searchbox, searchimage, whitebgclass;
function InitSearchBoxStyleEvents(c, d, a, b) {
    searcharea = document.getElementById(c);
    searchbox = document.getElementById(d);
    searchimage = GetElementByClassName(searcharea, a);
    whitebgclass = b;
    if (searchbox == null || searchimage == null) return;
    searchbox.onfocus = LockBG;
    searchbox.onmouseover = AddWhiteBG;
    searchbox.onblur = LockBG;
    searchbox.onmouseout = RemoveWhiteBG;
    searchimage.onmouseover = AddWhiteBG;
    searchimage.onmouseout = RemoveWhiteBG
}
function IsFullNameDefined(c) {
    if (!Boolean(c)) return false;
    for (var d = c.split("."), e = d.length, a = window, b = 0;
    b < e;
    b++) {
        a = a[d[b]];
        if (typeof a == "undefined") return false
    }
    return true
}
function TypeofFullName(c) {
    if (!Boolean(c)) return "undefined";
    for (var d = c.split("."), e = d.length, a = window, b = 0;
    b < e;
    b++) {
        a = a[d[b]];
        if (typeof a == "undefined") return "undefined"
    }
    return typeof a
}
var _v_dictSod, Sods, _v_qsod, _v_sodctx;
function Sod(b, a) {
    this.url = b;
    this.key = a;
    this.loaded = false;
    this.depkeys = null;
    this.state = 1;
    this.qfn = null
}
function UrlToSod(b) {
    for (var c in _v_dictSod) {
        var a = _v_dictSod[c];
        if (a.url == b) return a
    }
    return null
}
function ResetSodState() {
    for (var b in _v_dictSod) {
        var a = _v_dictSod[b];
        if (a.state == Sods.loaded && a.url != null) a.reset = true;
        a.qfn = null
    }

}
function RegisterSod(b, c) {
    b = NormalizeSodKey(b);
    var a = _v_dictSod[b];
    if (a != null) {
        if ("undefined" != typeof a.url && a.url == null && c != null) {
            a.url = c;
            if (AjaxNavigate$isMDSURL(window.location.href)) a.reset = true
        }
        return
    }
    a = new Sod(c, b);
    _v_dictSod[b] = a
}
function RegisterSodDep(c, b) {
    c = NormalizeSodKey(c);
    b = NormalizeSodKey(b);
    var a = _v_dictSod[c];
    if (a == null) return;
    if (a.depkeys == null) a.depkeys = [];
    -1 == ArrayIndexOf(a.depkeys, b) && a.depkeys.push(b)
}
function LoadSodByKey(b, c, d) {
    b = NormalizeSodKey(b);
    var a = _v_dictSod[b];
    if (c != null && a != null) {
        if (a.qfn == null) a.qfn = [];
        a.qfn.push(c)
    }
    return LoadSod(a, d)
}
function LoadSodByKeySync(a) {
    return LoadSodByKey(a, null, true)
}
function LoadMultipleSods(a, k, j) {
    for (var d = a.length, c = {}, e = 0;
    e < d;
    e++) c[a[e]] = false;
    for (var g = 0, f = function () {
        g++;
        g == d && k()
    }
    , b = 0;
    b < d;
    b++) {
        var h = function (a) {
            return function () {
                if (!Boolean(c[a])) {
                    c[a] = true;
                    f()
                }

            }

        }
        (a[b]), i = LoadSodByKey(a[b], h, j);
        if (i == Sods.loaded && !Boolean(c[a[b]])) {
            c[a[b]] = true;
            f()
        }

    }

}
var g_PendingLoadSodQueue;
function IsSodLoaded(a) {
    return a.state == Sods.loaded && !Boolean(a.reset)
}
function LoadSod(b, a) {
    if (!a && typeof g_mdsReady != "undefined" && Boolean(g_mdsReady) && typeof g_MDSPageLoaded != "undefined" && !Boolean(g_MDSPageLoaded)) {
        if (g_PendingLoadSodQueue == null) g_PendingLoadSodQueue = [];
        var c = {
            sod: b
        };
        g_PendingLoadSodQueue.push(c);
        return Sods.pending
    }
    else return LoadSodInternal(b, a)
}
function LoadPendingSods() {
    if (g_PendingLoadSodQueue != null) {
        for (var c = g_PendingLoadSodQueue.length, a = 0;
        a < c;
        a++) {
            var b = g_PendingLoadSodQueue[a];
            LoadSodInternal(b.sod, false)
        }
        g_PendingLoadSodQueue = null
    }

}
function LoadSodInternal(a, e) {
    if (a == null) return Sods.missing;
    if (IsSodLoaded(a) || !e && a.state == Sods.loading) return a.state;
    a.state = Sods.pending;
    var k = [], i = a.depkeys;
    if (i != null) {
        for (var q = true, m = i.length, b, c = 0;
        c < m;
        c++) {
            b = _v_dictSod[i[c]];
            if (b == null) continue;
            if (!IsSodLoaded(b)) {
                q = false;
                k.push(b)
            }

        }
        if (!q) {
            _v_qsod.push(a);
            m = k.length;
            for (c = 0;
            c < m;
            c++) {
                b = k[c];
                !IsSodLoaded(b) && (e || b.state != Sods.loading) && LoadSodInternal(b, e)
            }
            if (!e) return a.state
        }

    }
    if (a.reset) Boolean(a.url) && window.location.pathname.toLowerCase().endsWith("/_layouts/15/start.aspx") && "undefined" != typeof DeltaManager$_ScriptLoader$_loadTargetInternal && DeltaManager$_ScriptLoader$_loadTargetInternal(a.url, a, a.url != null);
    if (IsSodLoaded(a) || !e && a.state == Sods.loading) return a.state;
    if (e) {
        var l = new XMLHttpRequest;
        l.open("GET", a.url, false);
        l.send(null);
        var n = document.createElement("script");
        document.getElementsByTagName("head")[0].appendChild(n);
        var r = a.state == Sods.loading;
        n.text = l.responseText;
        if (!browseris.ie || browseris.ie9standardUp) n.src = a.url;
        if (r && typeof a.s != "undefined") {
            var f = a.s;
            a.s = undefined;
            f.parentNode.removeChild(f);
            f.onreadystatechange = null;
            f.onload = null
        }
        a.state = Sods.loaded;
        r && NotifyOnLoad(a);
        return a.state
    }
    else {
        var p = false, v = document.getElementsByTagName("head")[0], o = v.getElementsByTagName("script"), t = o.length, g = document.createElement("script");
        g.src = a.url;
        var u = g.src;
        g = null;
        for (var h = 0;
        h < t;
        h++) {
            var j = o[h].src;
            if (null != j && j.length > 0) if (u == j) {
                p = true;
                break
            }

        }
        if (p) if (a.reset) Boolean(a.url) && window.location.pathname.toLowerCase().endsWith("/_layouts/15/start.aspx") && "undefined" != typeof DeltaManager$_ScriptLoader$_loadTargetInternal && DeltaManager$_ScriptLoader$_loadTargetInternal(a.url, a, a.url != null);
        else {
            a.state = Sods.loaded;
            NotifyOnLoad(a)
        }
        else {
            a.state = Sods.loading;
            var d = document.createElement("SCRIPT");
            d.type = "text/javascript";
            d.src = a.url;
            var s = GetOnLoad(a, d);
            if (browseris.ie8down) d.onreadystatechange = s;
            else d.onload = s;
            document.getElementsByTagName("HEAD")[0].appendChild(d);
            a.s = d
        }
        return a.state
    }

}
function GetOnLoad(b, a) {
    return function () {
        var c = false;
        if (browseris.ie8down && typeof a.readyState != "undefined") c = a.readyState == "complete" || a.readyState == "loaded";
        else c = true;
        if (c) {
            a.onreadystatechange = null;
            a.onload = null;
            NotifyOnLoad(b)
        }

    }

}
function NotifyOnLoad(a) {
    var b = function () {
        a.state = Sods.loaded;
        a.reset = false;
        while (_v_qsod.length > 0) {
            var b = _v_qsod.pop();
            if (b.state == Sods.pending) {
                LoadSod(b);
                break
            }

        }
        if (a.qfn != null) while (a.qfn.length > 0) {
            var c = a.qfn.shift();
            c()
        }

    };
    if (browseris.ie8down) setTimeout(b, 0);
    else b()
}
function EnsureScript(c, g, b, e) {
    var a = true, f = NormalizeSodKey(c), d = _v_dictSod[f];
    if (d != null && d.reset) a = false;
    if (g != "undefined" && a) {
        b != null && b();
        return true
    }
    LoadSodByKey(c, b, e);
    return a ? true : false
}
function EnsureScriptFunc(a, b, c) {
    EnsureScript(a, TypeofFullName(b), c)
}
function EnsureScriptParams() {
    if (arguments.length < 2) return;
    var a = arguments, c = Array.prototype.shift.call(a), b = Array.prototype.shift.call(a), d = function () {
        for (var e = b.split("."), c = window, d = 0, g = e.length;
        d < g;
        d++) c = c[e[d]];
        var f = c;
        f.apply(null, a)
    };
    EnsureScriptFunc(c, b, d)
}
function NormalizeSodKey(a) {
    var b = a.toLowerCase(), d = b.length;
    if (d >= 3 && ".js" == b.substr(d - 3)) a = b;
    else if (b.indexOf(".resx") > 0) {
        var c = b.indexOf(".resx");
        a = a.substr(0, c + 5).toLowerCase() + a.substr(c + 5)
    }
    return a
}
function ArrayIndexOf(c, e, a) {
    if (typeof e === "undefined") return -1;
    var d = c.length;
    if (d !== 0) {
        a = a - 0;
        if (isNaN(a)) a = 0;
        else {
            if (isFinite(a)) a = a - a % 1;
            if (a < 0) a = Math.max(0, d + a)
        }
        for (var b = a;
        b < d;
        b++) if (typeof c[b] !== "undefined" && c[b] === e) return b
    }
    return -1
}
function SodCloneEvent(b) {
    var a;
    if (browseris.ie) a = document.createEventObject(b);
    else {
        a = document.createEvent("MouseEvents");
        a.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    }
    return a
}
function SodDispatchEvent(d, e, a) {
    var c = SodCloneEvent(a), b;
    if (browseris.ie) b = function () {
        c.srcElement.fireEvent("onclick", c)
    };
    else {
        var f = a.target;
        b = function () {
            f.dispatchEvent(c)
        }

    }
    if (!EnsureScript(d, e, b)) if (browseris.ie) a.cancelBubble = true;
    else a.stopPropagation()
}
function AddTabHeadHandler(b, c) {
    var a = document.getElementById(b);
    if (a != null) {
        var d = a.getElementsByTagName("A")[0];
        AddEvtHandler(d, "onclick", c)
    }

}
function LoadWPAdderOnDemand() {
    typeof loadWPAdderCallback == "function" && EnsureScriptParams("WPAdderClass", "WPAdderClassLoad", loadWPAdderCallback)
}
function showSaveConflictDialog(e, d, f, c, h, g) {
    var a;
    try {
        a = typeof ribbon.showSaveConflictDialog
    }
    catch (k) {
        a = "undefined"
    }
    var j = "ribbon.showSaveConflictDialog", b = j.split(".");
    if (b.length > 1) {
        var i = function () {
            ribbon.showSaveConflictDialog(e, d, f, c, h, g)
        };
        EnsureScript(b[0], a, i)
    }

}
function ClkElmt(a) {
    if (browseris.ie) a.click();
    else FFClick(a)
}
function EnsureSelectionHandlerOnFocus(c, b, a) {
    DeferCall("EnsureSelectionHandlerOnFocusDeferred", c, b, a)
}
function EnsureSelectionHandler(b, c, a) {
    DeferCall("EnsureSelectionHandlerDeferred", b, c, a)
}
function StopEvt(a) {
    !browseris.ie && a.stopPropagation()
}
function FFGetElementsById(e, c) {
    var b = [], a = e.getElementById(c);
    while (a != null) {
        b.push(a);
        a.id = "";
        a = e.getElementById(c)
    }
    for (var d = 0;
    d < b.length;
    d++) b[d].id = c;
    return b
}
function GetElementsByName(b) {
    var a = document.getElementsByName(b);
    if (a.length == 0 && Boolean(window.XMLHttpRequest)) a = FFGetElementsById(document, b);
    return a
}
function AddEvtHandler(c, a, b) {
    if (browseris.ie) c.attachEvent(a, b);
    else c.addEventListener(a.substr(2), b, false)
}
function RemoveEvtHandler(c, a, b) {
    if (browseris.ie) c.detachEvent(a, b);
    else c.removeEventListener(a.substr(2), b, false)
}
function HideListViewRows(a) {
    var c = document.getElementById(a);
    if (c == null) return;
    resetSelectAllCbx(c);
    var e = ajaxNavigate.getParam("InplviewHash");
    if (null == e) return;
    var d = e.substr(0, 42);
    d = d.replace(/--/g, "-");
    if (a.length == 77) a = a.substr(39);
    else {
        var f, b;
        if (a.indexOf("onetidDoclibViewTbl") != 0) return;
        a = a.substr(19);
        if (a == "0") {
            if (c.className.indexOf("ms-emptyView") >= 0) return;
            for (f in g_ctxDict) {
                b = g_ctxDict[f];
                a = b.view;
                break
            }

        }
        else {
            b = g_ctxDict["ctx" + a];
            a = b.view
        }

    }
    if (d != a) return;
    EnsureScriptParams("core.js", "AddCssClassToElement", c, "s4-hide-tr")
}
function resetSelectAllCbx(b) {
    var a = getSelectAllCbxFromTable(b);
    if (a != null) a.checked = false
}
function getSelectAllCbxFromTable(e) {
    if (e == null) return null;
    var c = e.rows;
    if (Boolean(c) && c.length > 0) {
        var d = c[0];
        if (!Boolean(d.className.indexOf("ms-viewheadertr"))) {
            var b = d.cells;
            if (b.length > 0) {
                var a = b[0].getElementsByTagName("INPUT")[0];
                if (a != null) return a;
                a = b[0].querySelector(".ms-selectall-span");
                if (a != null) return a
            }

        }

    }
    return null
}
function WpClick(b) {
    var c = GetEventSrcElement(b), a = c;
    while (a != null && a.tagName != "BODY" && (a.className == null || a.className.indexOf == null || a.className.indexOf("s4-wpcell") < 0)) {
        if (a.tagName == "A" && a.getAttribute("data-sp-continueWPSelect") == null) return;
        if (a.getAttribute("data-sp-cancelWPSelect") != null) return;
        if (a.tagName == "DIV" && a.className != null && a.className.indexOf("s4-ctx") != -1) return;
        if (a.tagName == "TH" && a.className != null && a.className.indexOf("ms-vh2") != -1) return;
        a = a.parentNode
    }
    a != null && a.tagName != "BODY" && EnsureScriptParams("sp.ribbon.js", "SelectWp", a)
}
function WpKeyUp(b) {
    var a = GetEventSrcElement(b);
    b.keyCode == 32 && Boolean(a) && a.tagName == "INPUT" && (HasCssClass(a, "s4-selectAllCbx") || HasCssClass(a, "s4-itm-cbx")) && WpClick(b)
}
function WzClick(c, b) {
    var d = GetEventSrcElement(c), a = d;
    while (a != null) {
        var e = a.getAttribute("ZoneID");
        if (e == b) break;
        if (a.tagName == "A") return;
        a = a.parentNode
    }
    a != null && EnsureScriptParams("sp.ribbon.js", "SelectWz", a, b)
}
function WpCbxSelect(a) {
    var b = GetEventSrcElement(a), c = b.checked;
    if (!c) WpClick(a);
    else EnsureScriptParams("sp.ribbon.js", "DeselectWpWz");
    TrapMenuClick(a);
    if (a.type != "keyup") b.className = "ms-webpart-checkboxHide"
}
function WpCbxKeyHandler(b) {
    var a;
    if (browseris.ie) a = b.keyCode;
    else a = b.which;
    a == 13 && WpCbxSelect(b)
}
function PopoutMenuMaybeSwapImage(b, c, d) {
    var a = document.getElementById(b);
    if (Boolean(a) && typeof a != "undefined") {
        if (a.rel == "_spPopoutMenuIsOpen") return;
        SwapImage(c, d)
    }

}
function PopoutMenuMaybeSwapImageClustered(d, f, h, i, j, e, g) {
    var a = document.getElementById(d);
    if (Boolean(a) && typeof a != "undefined") {
        if (a.rel == "_spPopoutMenuIsOpen") return;
        var b = document.getElementById(f), c = b.firstChild;
        SwapImageInternal(c, h);
        b.style.height = e + "px";
        b.style.width = g + "px";
        c.style.top = "-" + j + "px";
        c.style.left = "-" + i + "px"
    }

}
function SwapImage(c, b) {
    var a = document.getElementById(c);
    SwapImageInternal(a, b)
}
function SwapImageInternal(a, b) {
    if (Boolean(a) && typeof a != "undefined") a.src = b
}
function GetViewportHeight() {
    return document.documentElement.clientHeight
}
function GetViewportWidth() {
    return document.documentElement.clientWidth
}
var g_viewportHeight, g_viewportWidth, g_wpadderHeight, g_setWidth, g_setWidthInited, g_workspaceResizedHandlers, g_setScrollPos, g_frl;
function FixRibbonAndWorkspaceDimensionsForResize() {
    if (g_frl) return;
    var a = GetViewportHeight(), b = GetViewportWidth();
    if (g_viewportHeight == a && g_viewportWidth == b) return;
    g_viewportHeight = a;
    g_viewportWidth = b;
    window.setTimeout(FixRibbonAndWorkspaceDimensions, 0)
}
function FixRibbonAndWorkspaceDimensions() {
    g_frl = true;
    var o = GetCachedElement("s4-ribbonrow"), a = GetCachedElement("s4-workspace"), b = GetCachedElement("s4-titlerow"), l = GetCachedElement("s4-bodyContainer"), v = GetCachedElement("footer"), s = GetCachedElement("ms-core-overlay"), q = GetCachedElement("globalNavBox"), c;
    if (!Boolean(o) || !Boolean(a) || !Boolean(l)) {
        CallWorkspaceResizedEventHandlers();
        return
    }
    if (!g_setWidthInited) {
        c = true;
        if (a.className.indexOf("s4-nosetwidth") > -1) c = false;
        g_setWidth = c;
        g_setWidthInited = true
    }
    else c = g_setWidth;
    var g = 0, p = Boolean(ajaxNavigate.get_search().match(RegExp("[?&]IsDlg=1")));
    if (Boolean(q) && !p) g = RibbonIsMinimized() ? q.offsetHeight : 126;
    else g = RibbonIsMinimized() ? 35 : 126;
    var m = g + g_wpadderHeight;
    if (GetCurrentEltStyle(o, "visibility") == "hidden") m = 0;
    if (Boolean(b)) if (RibbonIsMinimized()) {
        b.className = b.className.replace(RegExp("s4-titlerowhidetitle"), "");
        b.style.display = "block"
    }
    else {
        var t = b.className;
        if (t.indexOf("s4-titlerowhidetitle") < 0) b.className = t.concat("s4-titlerowhidetitle");
        b.style.display = "none"
    }
    o.style.height = String(m) + "px";
    var r = GetCachedElement("s4-ribbonrow"), e = r.querySelector(".ms-core-webpartadder");
    if (Boolean(e) && GetCurrentEltStyle(e, "position") == "absolute") {
        var h = m, d = document.getElementById("Ribbon");
        if (Boolean(d)) {
            var j = d.querySelector(".ms-cui-tabContainer");
            if (RibbonIsMinimized() || !Boolean(j)) h = AbsTop(d) + d.offsetHeight;
            else h = AbsTop(j) + j.offsetHeight;
            h -= AbsTop(r);
            e.style.top = h.toString() + "px"
        }
        else e.style.top = g.toString() + "px"
    }
    var i = g_viewportHeight;
    if (null === i) {
        i = GetViewportHeight();
        g_viewportHeight = i
    }
    var f = i - AbsTop(a);
    if (f < 0) f = 0;
    if (!browseris.ipad || !p) a.style.height = String(f) + "px";
    if (Boolean(s) && !p) {
        var k = f;
        if (k < 0) k = 0;
        s.style.height = String(k) + "px"
    }
    if (c) {
        a.style.width = String(document.documentElement.clientWidth) + "px";
        if (l.offsetWidth < a.clientWidth) l.style.width = String(a.clientWidth) + "px"
    }
    var u = browseris.ie && browseris.iever == 7 && !browseris.ie8standard;
    if (!g_setScrollPos) {
        browseris.firefox && browseris.firefox36up && window.scrollTo(0, 0);
        if (Boolean(ajaxNavigate.get_search().match(RegExp("[?&]IsDlg=1")))) if (!u || a.scrollHeight < a.clientHeight) a.style.overflowY = "auto";
        var n = document.getElementById("_maintainWorkspaceScrollPosition");
        if (n != null && n.value != null) a.scrollTop = Number(n.value);
        g_setScrollPos = true
    }
    CallWorkspaceResizedEventHandlers();
    g_frl = false
}
function CallWorkspaceResizedEventHandlers() {
    for (var b = [].concat(g_workspaceResizedHandlers), a = 0, c = b.length;
    a < c;
    a++) b[a]()
}
function RibbonIsMinimized() {
    return g_spribbon.isInited ? g_spribbon.isMinimized : typeof _ribbon == "undefined" || null === _ribbon ? true : typeof _ribbon.buildMinimized == "undefined" ? undefined : _ribbon.buildMinimized
}
var g_spribbon;
function OnRibbonMinimizedChanged(a) {
    if (ajaxNavigate.get_search().indexOf("IsDlg=1") != -1) return;
    ExecuteOrDelayUntilScriptLoaded(function () {
        AnimateRibbonMinimizedChanged(a)
    }
    , "core.js")
}
function PreRibbonTabSwitched(a) {
    ExecuteOrDelayUntilScriptLoaded(function () {
        g_fSkipAnimation = false;
        PrepareRibbonForAnimation(a, true)
    }
    , "core.js")
}
function CatchCreateError() {
    return true
}
function ExpandBody(d, c) {
    if (typeof MSOWebPartPageFormName == "undefined") return false;
    var a = document.forms[MSOWebPartPageFormName], b = a.elements.CAML_Expand;
    b.value = b.value.concat(d);
    a.action = a.action.concat("#" + c);
    a.submit();
    return false
}
function CollapseBody(b, f) {
    if (typeof MSOWebPartPageFormName == "undefined") return false;
    var c = document.forms[MSOWebPartPageFormName], a = new RegExp("{", "g");
    b = b.replace(a, "\\{");
    a = new RegExp("}", "g");
    b = b.replace(a, "\\}");
    a = new RegExp(b, "g");
    var e = c.elements.CAML_Expand;
    e.value = e.value.replace(a, "");
    var d = c.elements.CAML_ShowOriginalEmailBody;
    d.value = d.value.replace(a, "");
    c.action = c.action.concat("#" + f);
    c.submit();
    return false
}
function ShowQuotedText(d, c) {
    if (typeof MSOWebPartPageFormName == "undefined") return false;
    var a = document.forms[MSOWebPartPageFormName], b = a.elements.CAML_ShowOriginalEmailBody;
    b.value = b.value.concat(d);
    if (a.action.indexOf("#") > 0) a.action = a.action.substr(0, a.action.indexOf("#"));
    a.action = a.action.concat("#" + c);
    a.submit();
    return false
}
function HideQuotedText(b, e) {
    if (typeof MSOWebPartPageFormName == "undefined") return false;
    var a = document.forms[MSOWebPartPageFormName], c = new RegExp("{", "g");
    b = b.replace(c, "\\{");
    c = new RegExp("}", "g");
    b = b.replace(c, "\\}");
    c = new RegExp(b, "g");
    var d = a.elements.CAML_ShowOriginalEmailBody;
    d.value = d.value.replace(c, "");
    if (a.action.indexOf("#") > 0) a.action = a.action.substr(0, a.action.indexOf("#"));
    a.action = a.action.concat("#" + e);
    a.submit();
    return false
}
function GetSelectedItemsDict(a) {
    return a != null && a.dictSel != null ? a.dictSel : null
}
function ClearSelectedItemsDict(a) {
    if (a != null) a.dictSel = []
}
function RemoveOnlyPagingArgs(a) {
    var e = /&*Paged=TRUE/gi;
    a = a.replace(e, "");
    var b = /&*PagedPrev=TRUE/gi;
    a = a.replace(b, "");
    var d = /&p_[^&]*/gi;
    a = a.replace(d, "");
    var f = /&PageFirstRow=[^&]*/gi;
    a = a.replace(f, "");
    var c = /&PageLastRow=[^&]*/gi;
    a = a.replace(c, "");
    return a
}
function RemovePagingArgs(a) {
    a = RemoveOnlyPagingArgs(a);
    var c = /\?Filter=1&*/gi;
    a = a.replace(c, "?");
    var d = /&Filter=1/gi;
    a = a.replace(d, "");
    var b = /\?$/;
    a = a.replace(b, "");
    return a
}
var v_stsOpenDoc2, v_strStsOpenDoc2;
function StsOpenEnsureEx2(b) {
    if (v_stsOpenDoc2 == null || v_strStsOpenDoc2 != b) {
        v_stsOpenDoc2 = null;
        v_strStsOpenDoc2 = null;
        var a;
        if (Boolean(window.ActiveXObject)) try {
            v_stsOpenDoc2 = new ActiveXObject(b);
            v_strStsOpenDoc2 = b
        }
            catch (c) {
                v_stsOpenDoc2 = null;
                v_strStsOpenDoc2 = null
            }
        else if (IsSupportedMacBrowser() && b.indexOf("SharePoint.OpenDocuments") >= 0) {
            a = CreateMacPlugin();
            if (a != null) {
                v_stsOpenDoc2 = a;
                v_strStsOpenDoc2 = "SharePoint.MacPlugin"
            }

        }
        else if (IsSupportedNPApiBrowserOnWin() && b.indexOf("SharePoint.OpenDocuments") >= 0) {
            a = CreateNPApiOnWindowsPlugin("application/x-sharepoint");
            if (a != null) {
                v_stsOpenDoc2 = a;
                v_strStsOpenDoc2 = "SharePoint.FFWinPlugin"
            }

        }

    }
    return v_stsOpenDoc2
}
function StURLSetVar2(a, d, g) {
    var b = d + "=" + g, f = a.indexOf("?"), c = a.indexOf("#");
    if (f != -1) {
        var e = a.indexOf("?" + d + "=", f);
        if (e == -1) {
            e = a.indexOf("&" + d + "=", f);
            if (e != -1) b = "&" + b
        }
        else b = "?" + b;
        if (e != -1) {
            var h = new RegExp("[&?]" + d + "=[^&#]*", "");
            a = a.replace(h, b)
        }
        else if (c == -1) a = a + "&" + b;
        else a = a.substr(0, c) + "&" + b + a.substr(c)
    }
    else if (c == -1) a = a + "?" + b;
    else a = a.substr(0, c) + "?" + b + a.substr(c);
    return a
}
function RemoveQueryParameterFromUrl(a, c) {
    var d = new RegExp("[&?]" + c + "=[^&]*", "");
    a = a.replace(d, "");
    if (a.indexOf("?") == -1) {
        var b = a.indexOf("&");
        if (b != -1) a = a.substring(0, b) + "?" + a.substring(b + 1)
    }
    return a
}
function HasValidUrlPrefix(b) {
    var a = b.toLowerCase();
    return -1 == a.search(RegExp("^http://")) && -1 == a.search(RegExp("^https://")) ? false : true
}
function AbsLeft(c) {
    var b = c.offsetLeft, a = c.offsetParent;
    while (a != null && a.tagName != "BODY") {
        b += a.offsetLeft;
        a = a.offsetParent
    }
    if (a != null) b += a.offsetLeft;
    return b
}
function AbsTop(c) {
    var b = c.offsetTop, a = c.offsetParent;
    while (a != null && a.tagName != "BODY") {
        b += a.offsetTop;
        a = a.offsetParent
    }
    if (a != null) b += a.offsetTop;
    return b
}
function GetEventCoords(a) {
    var b, c;
    if ("undefined" !== typeof a.pageX && "undefined" !== typeof a.pageY) {
        b = a.pageX;
        c = a.pageY
    }
    else {
        b = a.clientX;
        c = a.clientY;
        if ("undefined" !== typeof document.body && null !== document.body) {
            b += document.body.scrollLeft;
            c += document.body.scrollTop
        }
        if ("undefined" !== typeof document.documentElement && null !== document.documentElement) {
            b += document.documentElement.scrollLeft;
            c += document.documentElement.scrollTop
        }

    }
    return {
        x: b, y: c
    }

}
function IsLeavingObject(b, c) {
    var a;
    if (!Boolean(b)) b = window.event;
    a = Boolean(b.toElement) ? b.toElement : b.relatedTarget;
    if (null == a) return false;
    while (a != c && a != null) a = a.parentNode;
    return a != c
}
var deleteInstance;
function DeleteItemConfirmation() {
    var a = "";
    if (typeof ItemIsCopy != "undefined") if (ItemIsCopy) a = Strings.STS.L_NotifyThisIsCopy_Text;
    if (cascadeDeleteWarningMessage != "") a += cascadeDeleteWarningMessage;
    if (recycleBinEnabled == 1 && deleteInstance != 1) a += Strings.STS.L_STSRecycleConfirm_Text;
    else a += Strings.STS.L_STSDelConfirm_Text;
    return confirm(a)
}
function DeleteInstanceConfirmation() {
    deleteInstance = 1;
    return DeleteItemConfirmation()
}
function CancelMultiPageConfirmation(b) {
    var a = "";
    if (recycleBinEnabled == 1) a = Strings.STS.L_DeletePartialResponse1_text;
    else a = Strings.STS.L_DeletePartialResponse2_text;
    if (confirm(a) == true) return true;
    else STSNavigate(b);
    return false
}
function RestoreItemVersionConfirmation() {
    var a = Strings.STS.L_Version_Restore_Confirm_Text;
    return confirm(a)
}
function DeleteItemVersionConfirmation(a) {
    return a ? confirm(Strings.STS.L_Version_Recycle_Confirm_Text) : confirm(Strings.STS.L_Version_Delete_Confirm_Text)
}
function DeleteUserInfoItemConfirmation() {
    var a = Strings.STS.L_User_Delete_Confirm_Text;
    return confirm(a)
}
function UnlinkCopyConfirmation() {
    return confirm(Strings.STS.L_ConfirmUnlinkCopy_Text)
}
function SupportsNavigateHttpFolder() {
    return browseris.ie5up && browseris.win32
}
function MtgDeletePageConfirm() {
    var a;
    if (document.getElementById("MtgTlPart_PageType").value == "MtgTlPart_LocalPage") a = Strings.STS.L_DeleteConfirm_Text;
    else a = Strings.STS.L_DeleteGlobalConfirm_Text + Strings.STS.L_DeleteConfirm_Text;
    return confirm(a)
}
function IsImgLibJssLoaded() {
    return typeof fImglibJssLoaded != "undefined" ? fImglibJssLoaded : false
}
function GetFirstChildElement(b) {
    for (var a = 0;
    a < b.childNodes.length;
    a++) if (b.childNodes[a].nodeType == 1) return b.childNodes[a];
    return null
}
function TestGCObject(a) {
    return browseris.ie55up && typeof a == "undefined" || a == null || typeof a.object == "undefined" || a.object == null ? false : true
}
function MMU_GetMenuFromClientId(a) {
    return document.getElementById(a)
}
function MMU_EcbLinkOnKeyDown(g, b, a) {
    if (a == null) {
        a = window.event;
        if (a == null) return false
    }
    var e = GetEventKeyCode(a), f = b.href != null && b.href.length > 0;
    if ((a.shiftKey || !f) && e == 13 || e == 32 || a.altKey && e == 40) {
        var c = byid(b.id + "_ti");
        if (c == null) {
            var d = b.getAttribute("serverclientid");
            if (d != null && d.length > 0) c = byid(d + "_ti")
        }
        if (c != null) ClkElmt(c);
        else ClkElmt(b);
        return false
    }
    else return true
}
var firstCalled, _callbackinitdelayed;
function DeferWebFormInitCallback() {
    if (typeof WebForm_InitCallback == "function" && typeof window._WebForm_InitCallback == "undefined") window._WebForm_InitCallback = window.WebForm_InitCallback;
    window.WebForm_InitCallback = function () {
        if (firstCalled) {
            firstCalled = false;
            _callbackinitdelayed = true;
            _spBodyOnLoadFunctionNames.push("WebForm_InitCallback")
        }
        else {
            _callbackinitdelayed = false;
            typeof window._WebForm_InitCallback == "function" && window._WebForm_InitCallback()
        }

    };
    if (typeof WebForm_DoCallback == "function" && typeof window._WebForm_DoCallback == "undefined") window._WebForm_DoCallback = window.WebForm_DoCallback;
    window.WebForm_DoCallback = function (e, c, d, g, b, f) {
        if (_callbackinitdelayed) {
            _callbackinitdelayed = false;
            if (_spBodyOnLoadFunctionNames != null) for (var h = _spBodyOnLoadFunctionNames.length, a = 0;
            a < h;
            a++) if (_spBodyOnLoadFunctionNames[a] == "WebForm_InitCallback") {
                _spBodyOnLoadFunctionNames.splice(a, 1);
                break
            }
            typeof window._WebForm_InitCallback == "function" && window._WebForm_InitCallback()
        }
        window._WebForm_DoCallback(e, c, d, g, b, f)
    }

}
var fRightToLeft;
function _ribbonShouldFixRtlHeaders(a) {
    return browseris.ie && browseris.iever == 7 && !browseris.ie8standard && a
}
var g_spDragDropUpload;
function WPQRegisterDragDropUpload() {
    var a = function () {
        for (var c in g_spDragDropUpload) {
            var a = g_spDragDropUpload[c], b = document.getElementById(c);
            b != null && typeof b != "undefined" && registerDragUpload(b, a.serverUrl, a.siteRelativeUrl, a.listName, a.rootFolder, a.overwriteAll, a.hideProgressBar, a.refreshFunc, a.preUploadFunc, a.postUploadFunc, a.checkPermissionFunc)
        }

    };
    EnsureScriptFunc("DragDrop.js", "registerDragUpload", a)
}
function SPDragUploadInfo(j, i, c, k, h, f, b, g, e, d, a) {
    this.webPartId = j;
    this.serverUrl = i;
    this.siteRelativeUrl = c;
    this.listName = k;
    this.rootFolder = h;
    this.overwriteAll = f;
    this.hideProgressBar = b;
    this.refreshFunc = g;
    this.preUploadFunc = e;
    this.postUploadFunc = d;
    this.checkPermissionFunc = a
}
var g_QuickLaunchControlIds;
function _registerCommonComponents() {
    SP.Ribbon.HelpPageComponent.registerWithPageManager();
    SP.Ribbon.UserInterfacePageComponent.registerWithPageManager()
}
function ExecuteAndRegisterBeginEndFunctions(d, a, c, b) {
    RegisterBeginEndFunctions(d, d, a, c, b);
    null != a && a();
    null != c && c();
    null != b && b()
}
function RegisterBeginEndFunctions(e, a, b, d, c) {
    if ("string" != typeof a) throw "Unexpected";
    if (!(null == b || "function" == typeof b)) throw "Unexpected";
    if (!(null == d || "function" == typeof d)) throw "Unexpected";
    if (!(null == c || "function" == typeof c)) throw "Unexpected";
    if (!g_supportFiles[a]) g_supportFiles[a] = {
        tag: a, scriptURI: new URI(e), beginFunc: b, endFunc: d, loadFunc: c, executed: false
    }

}
function RegisterModuleInit(a, b) {
    RegisterBeginEndFunctions(a, a, b, null, null)
}
function SetElementStyle(c, b) {
    var a = document.getElementById(c);
    if (typeof a != "undefined" && a != null && a.className != b) a.className = b
}
function RemoveCachingParamsFromUrl(a) {
    return RemoveQueryParameterFromUrl(RemoveQueryParameterFromUrl(a, "rev"), "ctag")
}
function registerCssLink(b, a) {
    _registerCssLink(b, null, function (b) {
        "undefined" != typeof g_MinimalDownload && g_MinimalDownload && "undefined" != typeof asyncDeltaManager && "undefined" != typeof AsyncDeltaManager$_registerLinkCallback && AsyncDeltaManager$_registerLinkCallback(b);
        "function" == typeof a && a(b)
    })
}
function GetAbsoluteUrl(c) {
    var a = document.createElement("a");
    a.href = c;
    var b = a.href;
    a = null;
    return b
}
function _registerCssLink(j, f, i, b) {
    var l = false, k = 0;
    if (null == f) f = document.getElementsByTagName("head")[0];
    for (var d = f.getElementsByTagName("link"), p = d.length, h = GetAbsoluteUrl(j), c = 0;
    c < p;
    c++) if (d[c].rel == "stylesheet" && d[c].type == "text/css") {
        var e = d[c].href;
        if (null != e && e.length > 0) {
            if (h == e) {
                var n = d[c].getAttribute("toDelete");
                Boolean(n) && d[c].removeAttribute("toDelete");
                l = true;
                break
            }
            if (RemoveCachingParamsFromUrl(h) == RemoveCachingParamsFromUrl(e)) return -1
        }

    }
    if (!l) {
        var a = document.createElement("link");
        a.rel = "stylesheet";
        a.type = "text/css";
        a.href = j;
        f.appendChild(a);
        if (browseris.chrome || browseris.safari) {
            var g = 10, q = Number(new Date), o = 500;
            setTimeout(bindArguments(function m(c, a) {
                if (typeof a.sheet == "undefined" || a.sheet == null || typeof a.sheet.cssRules == "undefined" || a.sheet.cssRules == null) if (Number(new Date) - c < o) setTimeout(bindArguments(m, c, a), g);
                else typeof b == "function" && b();
                else a.sheet.cssRules && typeof b == "function" && b()
            }
            , q, a), g)
        }
        else if (typeof b == "function") {
            $addHandler(a, "load", b);
            Boolean(a.addEventListener) && a.addEventListener("error", b, false)
        }
        null != i && i(a);
        k = 1
    }
    return k
}
function replacePlaceholderElement(g, f) {
    var b = document.getElementById(g), a = document.createElement("span"), c = b.parentNode;
    a.innerHTML = f;
    var d = a.childNodes.length;
    switch (d) {
        case 0: break;
        case 1: c.replaceChild(a.childNodes[0], b);
            break;
        default: for (var e = 0;
        e < d;
        e++) c.insertBefore(a.childNodes[0], b);
            c.removeChild(b)
    }

}
function pxToNum(a) {
    return a === "" || a === "none" ? 0 : parseInt(a)
}
function fIsNullOrUndefined(a) {
    return typeof a == "undefined" || a == null
}
function IsStrNullOrEmpty(a) {
    return a == null || a.length == 0
}
function bindArguments() {
    var a = arguments, b = Array.prototype.shift.call(a);
    return function () {
        return b.apply(this, a)
    }

}
function OpenSuiteLinksJson() {
    var a = null;
    if (!IsNullOrUndefined(window.localStorage) && typeof window.localStorage.SPSuiteLinksJson == "string") a = window.localStorage.SPSuiteLinksJson;
    else if (typeof SPSuiteNavBar != "undefined" && typeof SPSuiteNavBar.cachedJson == "string") a = SPSuiteNavBar.cachedJson;
    return a
}
var IMNControlObj, bIMNControlInited, IMNDictionaryObj, bIMNSorted, bIMNOnloadAttached, IMNOrigScrollFunc, bIMNInScrollFunc, IMNSortableObj, IMNHeaderObj, IMNNameDictionaryObj, IMNShowOfflineObj;
function GetCurrentEvent(a) {
    return browseris.ie5up ? window.event : Boolean(a) ? a : window.event
}
function GetEventTarget(a) {
    return Boolean(a.srcElement) ? a.srcElement : a.target
}
function EnsureIMNControl() {
    if (!bIMNControlInited || IMNControlObj == null) {
        var b = typeof g_presenceEnabled != "undefined" && g_presenceEnabled;
        try {
            if (IsSupportedMacBrowser()) IMNControlObj = CreateMacPlugin();
            else if (IsSupportedNPApiBrowserOnWin()) {
                IMNControlObj = CreateNPApiOnWindowsPlugin("application/x-sharepoint-uc");
                if (IMNControlObj != null && b) IMNControlObj.OnStatusChange = IMNOnStatusChange
            }
            else if (browseris.ie5up) if (Boolean(window.ActiveXObject)) {
                IMNControlObj = new ActiveXObject("Name.NameCtrl.1");
                if (IMNControlObj && b) {
                    var a;
                    if (IsSupportedMacBrowser()) a = "IMNOnStatusChange";
                    else a = IMNOnStatusChange;
                    IMNControlObj.OnStatusChange = a
                }

            }
            bIMNControlInited = true
        }
        catch (c) {
            IMNControlObj = null
        }
        AddEvtHandler(window, "onbeforeunload", DiscardIMNControl)
    }
    return IMNControlObj
}
function DiscardIMNControl() {
    IMNControlObj = null;
    bIMNControlInited = false
}
function IMNImageInfo_InitializePrototype() {
    IMNImageInfo.prototype.img = null;
    IMNImageInfo.prototype.classPrefix = null;
    IMNImageInfo.prototype.alt = ""
}
function IMNImageInfo() { } function IMNGetStatusImage(e, d) {
    var f = "spimn.png", a = "ms-spimn-presence-disconnected", b = "";
    switch (e) {
        case 0: a = "ms-spimn-presence-online";
            b = Strings.STS.L_IMNOnline_Text;
            break;
        case 11: a = "ms-spimn-presence-online-oof";
            b = Strings.STS.L_IMNOnline_OOF_Text;
            break;
        case 1: if (d) {
            a = "ms-spimn-presence-offline";
            b = Strings.STS.L_IMNOffline_Text
        }
        else {
            a = "";
            b = ""
        }
            break;
        case 12: if (d) {
            a = "ms-spimn-presence-offline-oof";
            b = Strings.STS.L_IMNOffline_OOF_Text
        }
        else {
            a = "";
            b = ""
        }
            break;
        case 2: a = "ms-spimn-presence-away";
            b = Strings.STS.L_IMNAway_Text;
            break;
        case 13: a = "ms-spimn-presence-away-oof";
            b = Strings.STS.L_IMNAway_OOF_Text;
            break;
        case 3: a = "ms-spimn-presence-busy";
            b = Strings.STS.L_IMNBusy_Text;
            break;
        case 14: a = "ms-spimn-presence-busy-oof";
            b = Strings.STS.L_IMNBusy_OOF_Text;
            break;
        case 4: a = "ms-spimn-presence-away";
            b = Strings.STS.L_IMNAway_Text;
            break;
        case 5: a = "ms-spimn-presence-busy";
            b = Strings.STS.L_IMNBusy_Text;
            break;
        case 6: a = "ms-spimn-presence-away";
            b = Strings.STS.L_IMNAway_Text;
            break;
        case 7: a = "ms-spimn-presence-busy";
            b = Strings.STS.L_IMNBusy_Text;
            break;
        case 8: a = "ms-spimn-presence-away";
            b = Strings.STS.L_IMNAway_Text;
            break;
        case 9: a = "ms-spimn-presence-donotdisturb";
            b = Strings.STS.L_IMNDoNotDisturb_Text;
            break;
        case 15: a = "ms-spimn-presence-donotdisturb-oof";
            b = Strings.STS.L_IMNDoNotDisturb_OOF_Text;
            break;
        case 21: a = "ms-spimn-presence-donotdisturb";
            b = Strings.STS.L_IMNInPresentation_Text;
            break;
        case 10: a = "ms-spimn-presence-busy";
            b = Strings.STS.L_IMNBusy_Text;
            break;
        case 16: a = "ms-spimn-presence-away";
            b = Strings.STS.L_IMNIdle_Text;
            break;
        case 17: a = "ms-spimn-presence-away-oof";
            b = Strings.STS.L_IMNIdle_OOF_Text;
            break;
        case 18: a = "ms-spimn-presence-blocked";
            b = Strings.STS.L_IMNBlocked_Text;
            break;
        case 19: a = "ms-spimn-presence-busy";
            b = Strings.STS.L_IMNBusy_Text;
            break;
        case 20: a = "ms-spimn-presence-busy-oof";
            b = Strings.STS.L_IMNBusy_OOF_Text
    }
    var c = new IMNImageInfo;
    c.img = f;
    c.classPrefix = a;
    c.alt = b;
    return c
}
function IMNGetHeaderImage() {
    var a = new IMNImageInfo;
    a.img = "imnhdr.gif";
    a.alt = "";
    return a
}
function IMNIsOnlineState(a) {
    return a == 1 ? false : true
}
function IMNSortList(g, e, f) {
    var d = null, b = null;
    if (Boolean(IMNSortableObj) && IMNSortableObj[g]) {
        b = document.getElementById(g);
        while (Boolean(b) && !(b.tagName == "TR" && typeof b.Sortable != "undefined")) b = b.parentNode;
        d = b;
        while (Boolean(d) && d.tagName != "TABLE") d = d.parentNode;
        var a = d.rows;
        if (d != null && b != null) {
            if (a[1].style.display == "none") for (var c = 1;
            c < 4;
            c++) a[c].style.display = "block";
            if (!IMNIsOnlineState(e) && IMNIsOnlineState(f)) {
                a[2].style.display = "none";
                c = 3;
                while (a[c].id != "Offline" && Number(a[c].innerText) < Number(b.innerText)) c++;
                typeof d.moveRow == "function" && d.moveRow(b.rowIndex, c);
                if (a[a.length - 3].id == "Offline") a[a.length - 2].style.display = "block"
            }
            else if (IMNIsOnlineState(e) && !IMNIsOnlineState(f)) {
                if (b.rowIndex == 3 && a[b.rowIndex + 1].id == "Offline") a[2].style.display = "block";
                if (a[a.length - 3].id == "Offline") a[a.length - 2].style.display = "none";
                c = a.length - 2;
                while (a[c - 1].id != "Offline" && Number(a[c].innerText) > Number(b.innerText)) c--;
                d.moveRow(b.rowIndex, c)
            }

        }

    }

}
function IMNOnStatusChange(d, b, a) {
    if (Boolean(IMNDictionaryObj)) {
        var c = IMNGetStatusImage(b, IMNSortableObj[a] || IMNShowOfflineObj[a]);
        if (IMNDictionaryObj[a] != b) {
            bIMNSorted && IMNSortList(a, IMNDictionaryObj[a], b);
            IMNUpdateImage(a, c);
            IMNDictionaryObj[a] = b
        }

    }

}
function IMNUpdateImageClassPrefix(b, c) {
    var d = /ms-spimn-presence-[a-zA-Z]*-([0-9])/i, a = b.getAttribute("class");
    a != null && b.setAttribute("class", a.replace(d, c + "-$1"))
}
function IMNUpdateImage(l, e) {
    var a = document.images[l];
    if (Boolean(a)) {
        var d = a.parentNode;
        d.firstChild != a && d.insertBefore(a, d.firstChild);
        var f = e.img, g = e.classPrefix, k = e.alt, c = a.src;
        if (typeof a.src == "undefined") c = a.item(0).src;
        var i = c.lastIndexOf("/"), b = c.slice(0, i + 1);
        b += f;
        IMNUpdateImageClassPrefix(a, g);
        if (c == b && f != "blank.gif") return;
        if (typeof a.altbase != "undefined" && Boolean(a.altbase)) a.alt = a.altbase;
        else a.alt = k;
        var h = browseris.ie && browseris.ie55up && browseris.verIEFull < 7, j = b.toLowerCase().indexOf(".png") > 0;
        if (h) if (j) {
            a.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + b + "),sizingMethod=scale,enabled=true);";
            a.src = "/_layouts/15/images/blank.gif?rev=23"
        }
        else {
            a.style.filter = "";
            a.src = b
        }
        else a.src = b
    }

}
function IMNHandleAccelerator(b) {
    if (IMNControlObj) {
        var a = GetCurrentEvent(b);
        if (a.altKey && a.shiftKey && a.keyCode == 121) typeof IMNControlObj.DoAccelerator != "undefined" && IMNControlObj.DoAccelerator()
    }

}
function IMNImageOnClick(a) {
    if (IMNControlObj) {
        IMNShowOOUIKyb(a);
        typeof IMNControlObj.DoAccelerator != "undefined" && IMNControlObj.DoAccelerator()
    }

}
function IMNGetOOUILocation(m) {
    var g = {}, a = m, c = m, o = m, h = 0, i = 0, t = 0, u = document.dir == "rtl", k = a.className;
    while (Boolean(a) && (k == null || k.indexOf("ms-imnSpan") == -1) && a.tagName != "TABLE") {
        if (a.tagName == "TD" && k.indexOf("ms-vb") >= 0) break;
        a = a.parentNode;
        if (!Boolean(a)) return null;
        k = a.className
    }
    if (Boolean(a)) {
        var b;
        if (a.tagName == "TABLE") {
            var s = a.rows(0), r = s.cells(0);
            b = r.firstChild
        }
        else b = a.firstChild;
        while (b != null) {
            if (b.tagName == "A") {
                var d = b.firstChild;
                while (d != null) {
                    if (d.tagName == "IMG" && Boolean(d.id)) {
                        b = d;
                        break
                    }
                    d = d.firstChild
                }

            }
            if (b.tagName == "IMG" && Boolean(b.id)) {
                c = b;
                break
            }
            b = b.nextSibling
        }
        o = c;
        c = a
    }
    m = c;
    var j = 1;
    if (Boolean(browseris.ie9standardUp)) j = window.screen.deviceXDPI / window.screen.logicalXDPI;
    i = c.getBoundingClientRect().top * j - 5;
    h = c.getBoundingClientRect().left * j - 5;
    var f = c.parentNode;
    while ((h < 0 || i < 0) && f != null && Boolean(f.getBoundingClientRect)) {
        i = f.getBoundingClientRect().top * j - 5;
        h = f.getBoundingClientRect().left * j - 5;
        f = f.parentNode
    }
    try {
        var e = window;
        while (Boolean(e) && e != e.parent) {
            var n = e.frameElement, l = Boolean(n) ? n.getBoundingClientRect() : null, q = Boolean(l) ? l.top : 0, p = Boolean(l) ? l.left : 0;
            i += q;
            h += p;
            e = e.parent
        }

    }
    catch (v) { } g.objSpan = a;
    g.objOOUI = c != a ? c : o;
    g.oouiX = h;
    g.oouiY = i;
    return g
}
function IMNShowOOUIMouse(a) {
    IMNShowOOUI(a, 0)
}
function IMNShowOOUIKyb(a) {
    IMNShowOOUI(a, 1)
}
function IMNShowOOUI(j, i) {
    if (browseris.ie5up || IsSupportedMacBrowser() || IsSupportedNPApiBrowserOnWin()) {
        var b = GetCurrentEvent(j), f = GetEventTarget(b), d = f, g = f, e = 0, h = 0;
        if (EnsureIMNControl() && Boolean(IMNNameDictionaryObj)) {
            var a = IMNGetOOUILocation(f);
            if (Boolean(a)) {
                d = a.objSpan;
                g = a.objOOUI;
                e = a.oouiX;
                h = a.oouiY;
                if (Boolean(b.clientX)) e = b.clientX;
                var c = IMNNameDictionaryObj[g.id];
                if (c == null || c.length < 1) return;
                if (Boolean(d)) d.onkeydown = IMNHandleAccelerator;
                typeof IMNControlObj.ShowOOUI != "undefined" && IMNControlObj.ShowOOUI(c, i, Math.round(e), Math.round(h))
            }

        }

    }

}
function IMNHideOOUI() {
    if (Boolean(IMNControlObj)) {
        typeof IMNControlObj.HideOOUI != "undefined" && IMNControlObj.HideOOUI();
        return false
    }
    return true
}
function IMNScroll() {
    if (!bIMNInScrollFunc) {
        bIMNInScrollFunc = true;
        IMNHideOOUI()
    }
    bIMNInScrollFunc = false;
    return IMNOrigScrollFunc == IMNScroll ? true : Boolean(IMNOrigScrollFunc) ? IMNOrigScrollFunc() : true
}
var imnCount, imnElems, imnElemsCount, imnMarkerBatchSize, imnMarkerBatchDelay;
function ProcessImn() {
    imnCount = 0;
    imnElems = document.getElementsByName("imnmark");
    imnElemsCount = imnElems.length;
    if (EnsureIMNControl()) ProcessImnMarkers();
    else RemoveImnAnchors()
}
function ClientCanHandleImn() {
    return EnsureIMNControl() && typeof IMNControlObj.PresenceEnabled != "undefined" && IMNControlObj.PresenceEnabled
}
function RemoveImnAnchors() {
    for (var b = 0;
    b < imnElemsCount;
    b++) {
        var c = imnElems[b], a = c.parentNode;
        while (a != null && !IsImnAnchor(a)) {
            c = a;
            a = a.parentNode
        }
        if (IsImnAnchor(a) && a.childNodes.length == 1) {
            a.setAttribute("tabIndex", "-1");
            a.onclick = null
        }

    }
    var d = document.getElementsByName("imnempty");
    for (b = 0;
    b < d.length;
    b++) {
        c = d[b];
        a = c.parentNode;
        a != null && a.tagName == "SPAN" && !Boolean(a.getAttribute("title")) && a.appendChild(c)
    }

}
function ProcessImnMarkers() {
    for (var b = 0;
    b < imnMarkerBatchSize;
    ++b) {
        if (imnCount == imnElemsCount) return;
        var a = imnElems[imnCount];
        a != null && typeof a != "undefined" && IMNRC(a.getAttribute("sip"), a);
        imnCount++
    }
    setTimeout("ProcessImnMarkers()", imnMarkerBatchDelay)
}
function IMNRC(d, h) {
    if (d == null || d == "") return;
    var g = typeof g_presenceEnabled != "undefined" && g_presenceEnabled && EnsureIMNControl() && IMNControlObj.PresenceEnabled;
    if (browseris.ie5up || IsSupportedMacBrowser() || IsSupportedNPApiBrowserOnWin()) {
        var b = Boolean(h) ? h : window.event.srcElement, c = b, a = b.id;
        if (!Boolean(IMNDictionaryObj)) {
            IMNDictionaryObj = {};
            IMNNameDictionaryObj = {};
            IMNSortableObj = {};
            IMNShowOfflineObj = {};
            if (!Boolean(IMNOrigScrollFunc)) {
                if (typeof window.onscroll != "undefined") IMNOrigScrollFunc = window.onscroll;
                window.onscroll = IMNScroll
            }

        }
        if (Boolean(IMNDictionaryObj)) {
            if (!IMNNameDictionaryObj[a]) IMNNameDictionaryObj[a] = d;
            if (typeof IMNDictionaryObj[a] == "undefined") IMNDictionaryObj[a] = 1;
            if (!IMNSortableObj[a] && typeof b.Sortable != "undefined") {
                IMNSortableObj[a] = b.Sortable;
                if (!bIMNOnloadAttached && g) {
                    AttachEvent("load", IMNSortTable, window);
                    bIMNOnloadAttached = true
                }

            }
            if (!IMNShowOfflineObj[a] && b.getAttribute("ShowOfflinePawn") != null) IMNShowOfflineObj[a] = b.getAttribute("ShowOfflinePawn");
            if (g) {
                var e = 1, i;
                if (typeof IMNControlObj.GetStatus != "undefined") e = IMNControlObj.GetStatus(d, a);
                if (IMNIsOnlineState(e) || IMNSortableObj[a] || IMNShowOfflineObj[a]) {
                    i = IMNGetStatusImage(e, IMNSortableObj[a] || IMNShowOfflineObj[a]);
                    IMNUpdateImage(a, i);
                    IMNDictionaryObj[a] = e
                }

            }

        }
        var f = IMNGetOOUILocation(b);
        if (Boolean(f)) {
            SetImnOnClickHandler(f.objOOUI);
            c = f.objSpan;
            if (Boolean(c)) {
                c.onmouseover = IMNShowOOUIMouse;
                c.onfocusin = IMNShowOOUIKyb;
                c.onmouseout = IMNHideOOUI;
                c.onfocusout = IMNHideOOUI
            }

        }

    }

}
function IsImnAnchor(b) {
    if (!Boolean(b)) return false;
    var a = b.className;
    return a != null && a.indexOf("ms-imnlink") != -1
}
function SetImnOnClickHandler(d) {
    var b = d.parentNode, a = b, e = a.className;
    while (Boolean(a) && !IsImnAnchor(a)) a = a.parentNode;
    if (Boolean(a)) b = a;
    if (IsImnAnchor(b)) {
        if (typeof b.onclick == "undefined") b.onclick = IMNImageOnClickHandler
    }
    else {
        var c = document.createElement("a");
        c.onclick = IMNImageOnClickHandler;
        c.className = "ms-imnlink";
        c.href = "javascript:;";
        b.insertBefore(c, d);
        c.appendChild(d)
    }

}
function IMNImageOnClickHandler(a) {
    IMNImageOnClick(a);
    return false
}
function IMNSortTable() {
    var a;
    for (a in IMNDictionaryObj) IMNSortList(a, 1, IMNDictionaryObj[a]);
    bIMNSorted = true
}
function IMNRegisterHeader(d) {
    if (browseris.ie5up || IsSupportedMacBrowser() || IsSupportedNPApiBrowserOnWin()) {
        var b = GetCurrentEvent(d);
        if (b == null) return;
        var e = GetEventTarget(b);
        if (!Boolean(IMNHeaderObj)) IMNHeaderObj = {};
        if (Boolean(IMNHeaderObj)) {
            var a = e.id;
            IMNHeaderObj[a] = a;
            var c;
            c = IMNGetHeaderImage();
            IMNUpdateImage(a, c)
        }

    }

}
var _spBodyOnLoadFunctionNames, _spBodyOnLoadFunctions, _spBodyOnLoadCalled, _spOriginalFormAction, _spEscapedFormAction, _spFormOnSubmitCalled, _spBodyOnPageShowRegistered;
function _spBodyOnPageShow() {
    _spFormOnSubmitCalled = false
}
function _spResetFormOnSubmitCalledFlag() {
    _spFormOnSubmitCalled = false
}
function _ribbonReadyForInit() {
    return _spBodyOnLoadCalled
}
function _spBodyOnLoadWrapperInit() {
    ajaxNavigate.get_search().match(new RegExp("[?&]IsDlg=1")) == null && FixRibbonAndWorkspaceDimensions()
}
function _spBodyOnLoadWrapper() {
    if (_spBodyOnLoadCalled) return;
    _spBodyOnLoadCalled = true;
    _spBodyOnLoadWrapperInit();
    if (!_spBodyOnPageShowRegistered && typeof browseris != "undefined" && !browseris.ie && typeof window.addEventListener == "function") {
        window.addEventListener("pageshow", _spBodyOnPageShow, false);
        _spBodyOnPageShowRegistered = true
    }
    if (typeof Sys != "undefined" && typeof Sys.WebForms != "undefined" && typeof Sys.WebForms.PageRequestManager != "undefined") {
        var a = Sys.WebForms.PageRequestManager.getInstance();
        if (!_spPageLoadedRegistered && a != null) {
            a.add_pageLoaded(_spPageLoaded);
            _spPageLoadedRegistered = true
        }

    }
    !_spPageLoadedRegistered && _spPageLoaded();
    _spFormOnSubmitCalled = false;
    typeof Sys != "undefined" && typeof Sys.Net != "undefined" && typeof Sys.Net.WebRequestManager != "undefined" && Sys.Net.WebRequestManager.add_invokingRequest(_spResetFormOnSubmitCalledFlag);
    typeof NotifyBodyLoadedAndExecuteWaitingJobs != "undefined" && NotifyBodyLoadedAndExecuteWaitingJobs();
    ExecuteOrDelayUntilScriptLoaded(ProcessDefaultOnLoad, "core.js");
    if (typeof g_prefetch == "undefined" || g_prefetch == 1) {
        var c = new URI(window.location.href, {
            queryCaseInsensitive: true
        }), b = c.getQueryParameter("prefetch");
        b != String(0) && _spPreFetch()
    }

}
var g_numberOfYields;
function _spDelayAfterAllScripts(a) {
    _spYield(a, g_numberOfYields)
}
function _spYield(b, a) {
    if (a > 0) window.setTimeout(function () {
        _spYield(b, a - 1)
    }
    , 0);
    else b()
}
function _spTrace() { } var g_spPreFetchKeys;
function _spPreFetch() {
    _spDelayAfterAllScripts(function () {
        var b;
        if (Boolean(_v_dictSod)) {
            _spTrace("-----Starting prefetch-----");
            g_spPreFetchKeys.push("strings.js");
            g_spPreFetchKeys.push("core.js");
            typeof ribbon == "undefined" && typeof _ribbon != "undefined" && g_spPreFetchKeys.push("ribbon");
            for (var a = 0;
            a < g_spPreFetchKeys.length;
            a++) {
                var c = g_spPreFetchKeys[a];
                b = _v_dictSod[c];
                Boolean(b) && LoadSod(b)
            }

        }

    });
    typeof _ribbon != "undefined" && Boolean(_ribbon) && SP.SOD.get_ribbonImagePrefetchEnabled() && window.setTimeout(function () {
        if (Boolean(document.images) && typeof _spPageContextInfo != "undefined" && typeof _spPageContextInfo.currentLanguage != "undefined") {
            window.imgRibbon32x32 = new Image;
            var a = "/_layouts/15/" + String(_spPageContextInfo.currentLanguage) + "/images/formatmap32x32.png";
            window.imgRibbon32x32.src = GetImageUrlWithRevision(a);
            window.imgRibbon16x16 = new Image;
            a = "/_layouts/15/" + String(_spPageContextInfo.currentLanguage) + "/images/formatmap16x16.png";
            window.imgRibbon16x16.src = GetImageUrlWithRevision(a)
        }

    }
    , 0)
}
var _spSuppressFormOnSubmitWrapper;
function _spFormOnSubmitWrapper() {
    if (_spSuppressFormOnSubmitWrapper) return true;
    if (_spFormOnSubmitCalled) return false;
    if (typeof _spFormOnSubmit == "function") {
        var b = _spFormOnSubmit(), a = false;
        if (typeof b == typeof a && b == a) return false
    }
    if (typeof _startOnSubmitStatement == "function") return _startOnSubmitStatement();
    _spFormOnSubmitCalled = true;
    return true
}
var _inlineEditString, _spPageLoadedRegistered;
function _spPageLoaded() {
    _spOriginalFormAction = null;
    EscapeFormAction();
    RefreshInplViewState();
    RefreshHeroButtonState();
    InlineEditSetDefaultFocus()
}
function InlineEditSetDefaultFocus() {
    if (_inlineEditString != null) {
        var c = _inlineEditString.indexOf("#");
        if (c <= 0) return;
        for (var i = _inlineEditString.substring(0, c), d = document.getElementsByTagName("TR"), b = 0;
        b < d.length;
        b++) if (d[b].getAttribute("automode") == i) {
            for (var h = _inlineEditString.substring(c + 1), f = h.split(","), a = d[b], e = 0;
            e < f.length;
            e++) {
                if (a == null) break;
                a = a.firstChild;
                for (var g = 0;
                g < f[e];
                g++) {
                    if (a == null) break;
                    a = a.nextSibling
                }

            }
            a != null && focusControl(a);
            break
        }
        _inlineEditString = null
    }

}
function focusControl(b) {
    if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
        var c, a = b;
        if (Boolean(a) && typeof a.contentEditable !== "undefined") {
            c = a.contentEditable;
            a.contentEditable = false
        }
        else a = null;
        try {
            b.focus()
        }
        catch (d) { } if (Boolean(a)) a.contentEditable = c
    }
    else b.focus()
}
function EscapeFormAction() {
    if (document.forms.length > 0 && !Boolean(_spOriginalFormAction)) {
        _spOriginalFormAction = document.forms[0].action;
        var a = ajaxNavigate.get_href(), b = a.indexOf("://");
        if (b >= 0) {
            var c = a.substring(b + 3);
            b = c.indexOf("/");
            if (b >= 0) a = c.substring(b);
            if (a.length > 2 && a.charAt(0) == "/" && a.charAt(1) == "/") a = a.substring(1)
        }
        _spEscapedFormAction = escapeUrlForCallback(a);
        document.forms[0].action = _spEscapedFormAction;
        document.forms[0]._initialAction = document.forms[0].action
    }

}
function RefreshHeroButtonState() {
    if (typeof _spWebPartComponents != "undefined") for (var d in _spWebPartComponents) if (d.length > 7) {
        var b = d.substr(7), a = window["heroButtonWebPart" + b];
        if (typeof a != "undefined" && a != null && a == true) {
            var c = document.getElementById("Hero-" + b);
            if (c != null) c.style.display = ""
        }

    }

}
function RefreshInplViewState() {
    if (typeof window.ctx == "undefined") return;
    var a = window.ctx;
    if (a.clvp == null) {
        EnsureScript("inplview", typeof InitAllClvps, function () {
            a.clvp == null && InitAllClvps()
        });
        return
    }
    var c = a.clvp, b = c.tab;
    if (b == null || b != null && (b.parentNode == null || b.parentNode.innerHTML == null)) {
        FixDroppedOrPastedClvps();
        if (a.dictSel != null) {
            a.dictSel = [];
            a.CurrentSelectedItems = 0
        }

    }

}
function RestoreToOriginalFormAction() {
    if (_spOriginalFormAction != null) {
        if (_spEscapedFormAction == document.forms[0].action) {
            document.forms[0].action = _spOriginalFormAction;
            document.forms[0]._initialAction = document.forms[0].action
        }
        _spOriginalFormAction = null;
        _spEscapedFormAction = null
    }

}
function DefaultFocus() {
    if (typeof _spUseDefaultFocus != "undefined") {
        var a = document.getElementsByName("_spFocusHere"), c = null;
        if (a == null || a.length <= 0) c = document.getElementById("_spFocusHere");
        else if (a != null && a.length > 0) c = a[0];
        if (c != null) {
            var b = c.getElementsByTagName("a");
            if (b != null && b.length > 0) for (var d = 0;
            d < b.length;
            d++) if (b[d].style.visibility != "hidden") {
                try {
                    b[d].focus()
                }
                catch (e) { } break
            }

        }

    }

}
var g_fAnimateListCSR;
function ProcessDefaultOnLoad() {
    ProcessPNGImages();
    UpdateAccessibilityUI();
    UpdateAnimationUserControl(false);
    window.setTimeout("ProcessImn()", 10);
    ProcessOnLoadFunctionNames(_spBodyOnLoadFunctionNames);
    ProcessOnLoadFunctions(_spBodyOnLoadFunctions);
    typeof _spUseDefaultFocus != "undefined" && DefaultFocus();
    if (ajaxNavigate.get_hash().indexOf("InplviewHash") != -1) {
        var a;
        try {
            a = typeof inplview.RestoreAllClvpsNavigation
        }
        catch (e) {
            a = "undefined"
        }
        var d = "inplview.RestoreAllClvpsNavigation", b = d.split(".");
        if (b.length > 1) {
            var c = function () {
                inplview.RestoreAllClvpsNavigation()
            };
            EnsureScript(b[0], a, c)
        }

    }

}
function ProcessOnLoadFunctionNames(onLoadFunctionNames) {
    for (var i = 0;
    i < onLoadFunctionNames.length;
    i++) {
        var expr = "if(typeof(" + onLoadFunctionNames[i] + ")=='function'){" + onLoadFunctionNames[i] + "();}";
        eval(expr)
    }
    onLoadFunctionNames = []
}
function ProcessOnLoadFunctions(a) {
    for (var b = 0;
    b < a.length;
    b++) a[b]();
    a = []
}
function CoreInvoke(a) {
    var c = Array.prototype.slice.call(arguments, 1), b = function () {
        var b = window[a];
        b.apply(null, c)
    };
    EnsureScript("core.js", TypeofFullName(a), b);
    return false
}
function _bodyOnHashChangeHandler() {
    typeof _spBodyOnHashChange != "undefined" && _spBodyOnHashChange()
}
var DeveloperDashboard;
function ToggleDeveloperDashboard(b) {
    var a;
    if (!Boolean(b)) b = "";
    if (GetCookie("WSS_DeveloperDashboard") == "true") ddCloseWindow(DeveloperDashboard.wnd);
    else try {
        a = ddGetWindow();
        if (ddIsWndValid(a)) ddAttachToWindow(a);
        else ddOpenWindow(a, b)
    }
        catch (c) {
            ddFail(a)
        }

}
function ddFail(a) {
    Boolean(a) && a.close()
}
function ddIsWndValid(a) {
    if ("unknown" == typeof a.location.href) throw null;
    return "about:blank" !== a.location.href
}
function ddResetState() {
    DeveloperDashboard.wnd = null;
    SetCookieEx(DeveloperDashboard.cookie, false, true, window)
}
function ddCloseWindow(a) {
    null != a && a.close();
    ddResetState()
}
function ddOpenWindow(a, b) {
    SetCookieEx(DeveloperDashboard.cookie, true, true, window);
    DeveloperDashboard.wnd = a;
    ddAdoptWindow(a, b)
}
function ddAdoptWindow(a, b) {
    a.location.href = b + "/_layouts/15/devdash.aspx";
    if (browseris.chrome) window.setTimeout(function () {
        a.moveTo(screen.width / 2, 0)
    }
    , 100);
    else a.moveTo(screen.width / 2, 0)
}
function ddGetWindow() {
    var a, c, b;
    a = DeveloperDashboard.wnd;
    if (Boolean(a)) return a;
    c = screen.width;
    b = screen.height;
    a = window.open("", "devdash", "height=600,width=800,resizable=1,scrollbars=1,top=" + String(b) + ",left=" + String(c));
    return a
}
function ddAttachToWindow(a) {
    if (null != a) {
        ddHandshake(a);
        ddCScopeSet()
    }
    else {
        ddResetHandshake();
        ddCScopeReset()
    }

}
function ddHandshake(a) {
    var b, c = 0;
    b = setInterval(d, 20);
    function d() {
        var f, d;
        f = "DeveloperDashboard" in a && "Messaging" in a.DeveloperDashboard && "PostMsg" in a.DeveloperDashboard.Messaging;
        if (f) {
            DeveloperDashboard.PostMsg = function (d, b, c) {
                try {
                    a.DeveloperDashboard.Messaging.PostMsg(d, b, c)
                }
                catch (e) { }
            };
            clearInterval(b);
            if (null !== DeveloperDashboard.msgQueue) for (var e = 0, g = DeveloperDashboard.msgQueue.length;
            e < g;
            e++) {
                d = DeveloperDashboard.msgQueue[e];
                DeveloperDashboard.PostMsg(d.to, d.subject, d.msg)
            }

        }
        else if (100 == ++c) {
            clearInterval(b);
            ddAttachToWindow(null)
        }

    }

}
function ddResetHandshake() {
    DeveloperDashboard.msgQueue = null;
    DeveloperDashboard.PostMsg = function () { }
}
function ddInit() {
    var a, b = false;
    if (GetCookie("WSS_DeveloperDashboard") == "true") try {
        a = ddGetWindow();
        if (ddIsWndValid(a)) {
            DeveloperDashboard.wnd = a;
            ddHandshake(a);
            b = true
        }
        else a.close()
    }
        catch (c) {
            ddFail(a)
        }
    !b && ddResetHandshake()
}
var CScope;
function ddCScopeSet() {
    var d, b;
    d = typeof window.msWriteProfilerMark != "undefined";
    b = null;
    function c(a) {
        var b = +new Date;
        d && window.msWriteProfilerMark(a);
        return b
    }
    function a(b, a) {
        this.Name = b;
        this.Prefix = Boolean(a) ? a : "Script";
        this.Children = []
    }
    a.prototype = {
        Start: function () {
            a.Start(this);
            this.StartTimeUtc = c(this.Name)
        }
        , Stop: function () {
            this.EndTimeUtc = c(this.Name);
            a.Stop(this)
        }
        , Parent: null
    };
    a.Current = b;
    a.Start = function (b) {
        b.Parent = a.Current;
        Boolean(a.Current) && a.Current.Children.push(b);
        a.Current = b
    };
    a.Stop = function (b) {
        a.Current = b.Parent;
        if (null == a.Current) {
            b.Name = b.Prefix + " (" + b.Name + ")";
            "undefined" != typeof DeveloperDashboard.PostMsg && DeveloperDashboard.PostMsg("MS.Scenarios", "AddScenario", b)
        }

    };
    CScope = a
}
function ddCScopeReset() {
    var b = function () { };
    function a() { } a.prototype = {
        Start: b, Stop: b
    };
    CScope = a
}
function ddToggleCScope() {
    if (null != DeveloperDashboard.wnd) ddCScopeSet();
    else ddCScopeReset()
}
var flyoutsAllowed;
function enableFlyoutsAfterDelay() {
    setTimeout("flyoutsAllowed = true;", 25)
}
function overrideMenu_HoverStatic(b) {
    if (!flyoutsAllowed) setTimeout(delayMenu_HoverStatic(b), 50);
    else {
        var c = Menu_HoverRoot(b), a = Menu_GetData(b);
        if (!Boolean(a)) return;
        window.__disappearAfter = a.disappearAfter;
        Menu_Expand(c, a.horizontalOffset, a.verticalOffset)
    }

}
function delayMenu_HoverStatic(a) {
    return function () {
        overrideMenu_HoverStatic(a)
    }

}
var g_ExecuteOrWaitJobs;
function ExecuteOrDelayUntilEventNotified(b, c) {
    var d = false, a = g_ExecuteOrWaitJobs[c];
    if (a != null && a.notified) {
        if (a.args != null) b.apply(null, a.args);
        else b();
        return true
    }
    else {
        DelayUntilEventNotified(b, c);
        return false
    }

}
function DelayUntilEventNotified(c, b) {
    var a = g_ExecuteOrWaitJobs[b];
    if (a == null) {
        a = {};
        a.notified = false;
        a.jobs = [];
        a.args = null;
        g_ExecuteOrWaitJobs[b] = a
    }
    a.jobs.push(c)
}
function NotifyEventAndExecuteWaitingJobs(d, b) {
    if (!Boolean(g_ExecuteOrWaitJobs)) return;
    var a = g_ExecuteOrWaitJobs[d];
    if (a == null || typeof a == "undefined") {
        a = {};
        a.notified = true;
        a.jobs = [];
        a.args = b;
        g_ExecuteOrWaitJobs[d] = a
    }
    else {
        if (a.jobs != null) for (var c = 0;
        c < a.jobs.length;
        c++) {
            var e = a.jobs[c];
            if (b != null) e.apply(null, b);
            else e()
        }
        a.notified = true;
        a.jobs = [];
        a.args = b
    }

}
function ExecuteOrDelayUntilScriptLoaded(c, a) {
    a = a.toLowerCase();
    var b = "sp.scriptloaded-" + a;
    return ExecuteOrDelayUntilEventNotified(c, b)
}
function NotifyScriptLoadedAndExecuteWaitingJobs(scriptFileName) {
    scriptFileName = scriptFileName.toLowerCase();
    if (typeof _v_dictSod != "undefined") {
        if (typeof _v_dictSod[scriptFileName] == "undefined") switch (scriptFileName) {
            case "ie55up.js": typeof _v_dictSod.browserScript == "undefined" && RegisterSod("browserScript", null);
                _v_dictSod["ie55up.js"] = _v_dictSod.browserScript;
                break;
            case "sp.ribbon.js": typeof _v_dictSod.ribbon == "undefined" && RegisterSod("ribbon", null);
                _v_dictSod["sp.ribbon.js"] = _v_dictSod.ribbon;
                break;
            case "inplview.js": typeof _v_dictSod.inplview == "undefined" && RegisterSod("inplview", null);
                _v_dictSod["inplview.js"] = _v_dictSod.inplview;
                break;
            default: RegisterSod(scriptFileName, null)
        }
        _v_dictSod[scriptFileName].state = 4
    }
    var eventName = "sp.scriptloaded-" + scriptFileName;
    NotifyEventAndExecuteWaitingJobs(eventName);
    if (typeof g_MinimalDownload != "undefined" && Boolean(g_MinimalDownload) && typeof RegisterModuleInit != "undefined") {
        var lastSlashPos = scriptFileName.lastIndexOf("/");
        if (-1 != lastSlashPos) scriptFileName = scriptFileName.substring(lastSlashPos + 1);
        var lastdotPos = scriptFileName.lastIndexOf("."), funcName = null;
        if (-1 == lastdotPos) funcName = scriptFileName;
        else funcName = scriptFileName.substring(0, lastdotPos);
        funcName = funcName.replace(/\./g, "_");
        var funcPattern = new RegExp("^[A-Za-z0-9_\\-$]+$");
        if (Boolean(funcPattern.exec(funcName))) {
            funcName = "$_global_" + funcName;
            var initFuncName = eval("'undefined' != typeof (" + funcName + ") ? " + funcName + " : null");
            null != initFuncName && RegisterModuleInit(scriptFileName, initFuncName)
        }

    }

}
function ExecuteOrDelayUntilBodyLoaded(b) {
    var a = "sp.bodyloaded";
    return ExecuteOrDelayUntilEventNotified(b, a)
}
function NotifyBodyLoadedAndExecuteWaitingJobs() {
    var a = "sp.bodyloaded";
    NotifyEventAndExecuteWaitingJobs(a)
}
function FFClick(b) {
    var a = document.createEvent("MouseEvents");
    a.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    b.dispatchEvent(a)
}
function _spOnSilverlightError(a, c, b) {
    b.errorType == "InitializeError" && _spSetSLErrorMessage(a, Strings.STS.L_ErrorMessage_InitializeError)
}
function _spSetSLPluginNotLoadedErrorMessage(a) {
    _spSetSLErrorMessage(a, Strings.STS.L_ErrorMessage_PluginNotLoadedError)
}
function _spSetSLErrorMessage(a, e) {
    var b = "SilverlightRuntimeErrorMessage_" + a, c = "WebPartDefaultConfigurationMessage_" + a, d = "SilverlightObjectDiv_" + a;
    document.getElementById(d).style.display = "none";
    document.getElementById(b).style.display = "block";
    document.getElementById(b).innerHTML = e;
    document.getElementById(c).style.display = "block"
}
var cuiKeyHash;
function _processKeyCodes(a) {
    return cuiKeyHash[a] ? cuiKeyHash[a] : a
}
var g_fhs;
function _ribbonScaleHeader(i, d) {
    var c = i.childNodes[1], g = 0;
    if (Boolean(c)) g = c.childNodes.length;
    var a = null, b = null;
    if (typeof d == "undefined") d = false;
    if (typeof g_fhs == "undefined") if (typeof _ribbonShouldFixRtlHeaders == "function") g_fhs = _ribbonShouldFixRtlHeaders(d);
    else g_fhs = false;
    for (var f = 0;
    f < g;
    f++) {
        var e = c.childNodes[f];
        if (e.className.indexOf("ms-cui-tts") != -1) a = e;
        else if (e.className.indexOf("ms-cui-TabRowRight") != -1) b = e
    }
    Boolean(a) && "undefined" == typeof a._widthAdded && g_fhs && _ribbonFixHeaderWidth(a);
    if (!Boolean(a) || !Boolean(b)) return;
    b.style.display = "block";
    var h = _ribbonNeedsHeaderScaling(c, a, b, d);
    if (h) {
        _ribbonHeaderScaleDown(a);
        _ribbonNeedsHeaderScaling(c, a, b, d) && _ribbonHeaderScaleDown(a)
    }
    else {
        if (_ribbonGetScaleStep(a) == 0) return;
        _ribbonHeaderScaleUp(a);
        if (_ribbonNeedsHeaderScaling(c, a, b, d)) {
            _ribbonHeaderScaleDown(a);
            return
        }
        if (_ribbonGetScaleStep(a) == 0) return;
        _ribbonHeaderScaleUp(a);
        _ribbonNeedsHeaderScaling(c, a, b, d) && _ribbonHeaderScaleDown(a)
    }
    if (_ribbonNeedsHeaderScaling(c, a, b, d)) b.style.display = "none"
}
function _ribbonNeedsHeaderScaling(d, c, b, a) {
    return c.offsetWidth > 0 && b.offsetWidth > 0 && _ribbonElementsWrap(c, b, a) ? true : !g_fhs && _ribbonChildNodesWrapped(b, a) ? true : _ribbonChildNodesWrapped(d, a) ? true : _ribbonChildNodesWrapped(c, a)
}
function _ribbonChildNodesWrapped(e, g) {
    if (e.offsetWidth == 0) return false;
    for (var c = [], f = e.childNodes.length, a, b = 0;
    b < f;
    b++) {
        a = e.childNodes[b];
        Boolean(a) && a.nodeName != "#text" && a.offsetWidth > 0 && a.offsetHeight > 0 && c.push(a)
    }
    f = c.length;
    for (b = 0;
    b < f;
    b++) {
        a = c[b];
        var d = c[b + 1];
        if (typeof d != "undefined" && Boolean(d) && _ribbonElementsWrap(a, d, g)) return true
    }
    return false
}
function _ribbonElementsWrap(b, a, c) {
    return !c && b.offsetLeft + b.offsetWidth > a.offsetLeft + 1 ? true : c && a.offsetLeft + a.offsetWidth > b.offsetLeft + 1 ? true : false
}
function _ribbonGetScaleStep(a) {
    if ("undefined" == typeof a._scaleStep) {
        a._scaleStep = 0;
        if (a.className.indexOf("ms-cui-tts-scale1") != -1) a._scaleStep = 1;
        else if (a.className.indexOf("ms-cui-tts-scale2") != -1) a._scaleStep = 2
    }
    return a._scaleStep
}
function _ribbonSetScaleStep(b, a) {
    b._scaleStep = a
}
function _ribbonHeaderScaleDown(a) {
    var b = _ribbonGetScaleStep(a);
    if (b == 0) _ribbonHeaderScaleIndex(a, 1);
    else (b == 1 || b == 2) && _ribbonHeaderScaleIndex(a, 2)
}
function _ribbonHeaderScaleUp(a) {
    var b = _ribbonGetScaleStep(a);
    if (b == 1) _ribbonHeaderScaleIndex(a, 0);
    else b == 2 && _ribbonHeaderScaleIndex(a, 1)
}
var g_ribbonHeaderScaleClass;
function _ribbonHeaderScaleIndex(a, b) {
    a.className = g_ribbonHeaderScaleClass[b];
    _ribbonSetScaleStep(a, b);
    _ribbonFixHeaderWidth(a)
}
function _ribbonFixHeaderWidth(a) {
    if (!g_fhs) return;
    var b = _ribbonCalculateWidth(a);
    a.style.width = String(b) + "px";
    a._widthAdded = true
}
function _ribbonCalculateWidth(g) {
    for (var a = 0, f = g.childNodes, h = f.length, d = 0;
    d < h;
    d++) {
        var b = f[d];
        if (Boolean(b) && b.nodeName == "LI" && b.offsetWidth > 0) {
            var c = b.childNodes[1];
            if (Boolean(c) && c.nodeName == "UL") {
                var e = _ribbonCalculateWidth(c);
                c.style.width = String(e) + "px";
                a = a + e + 4
            }
            else a = a + b.offsetWidth + 2
        }

    }
    return a
}
function SPRibbonInfo() { } function _ribbonOnStartInit(b) {
    OnRibbonMinimizedChanged(b.initialTabId == "Ribbon.Read");
    var c = document.getElementById("Ribbon");
    if (!Boolean(c) || Boolean(b) && b.buildMinimized) return;
    var a = c.childNodes[2], d = Boolean(a) && a.className.indexOf("ms-cui-tabContainer") != -1;
    !d && b.initialTabId != "Ribbon.Read" && ExecuteOrDelayUntilScriptLoaded(function () {
        PrepareRibbonForAnimation(false, false);
        a = document.createElement("div");
        a.className = "ms-cui-tabContainer";
        var b = document.createElement("ul");
        b.id = "Ribbon.BlankTab";
        b.className = "ms-cui-tabBody";
        b.innerHTML = '<span class="ms-ribbontabswitchloading"><img src="/_layouts/15/images/loadingcirclests16.gif?rev=23" alt=""/><span>' + Strings.STS.L_Loading_Text + "</span></span>";
        a.appendChild(b);
        c.appendChild(a);
        AnimateRibbonMinimizedChanged(false)
    }
    , "core.js")
}
var StatusIdWithTopPriority, StatusColorWithTopPriority, StatusPriority, StatusBarClassNames;
function getStatusTitle(a) {
    switch (a) {
        case 4: return Strings.STS.L_StatusBarRed_Text;
        case 3: return Strings.STS.L_StatusBarYellow_Text;
        case 2: return Strings.STS.L_StatusBarGreen_Text;
        case 1: return Strings.STS.L_StatusBarBlue_Text;
        default: return ""
    }

}
var g_uniqueIndex;
function getUniqueIndex() {
    g_uniqueIndex++;
    return g_uniqueIndex
}
function addStatus(i, j, g, h, e, f) {
    var a = document.getElementById("pageStatusBar");
    if (a != null) {
        a.setAttribute("aria-live", "polite");
        a.setAttribute("aria-relevant", "all");
        var b = _createStatusMarkup(i, j, true, h, e, f);
        if (!g) a.appendChild(b);
        else {
            var c = a.getElementsByTagName("SPAN"), d = c.length > 0 ? c[0] : null;
            if (d != null) a.insertBefore(b, d);
            else a.appendChild(b)
        }
        if (a.childNodes.length == 1) {
            StatusIdWithTopPriority = b.id;
            StatusColorWithTopPriority = 1
        }
        a.style.display = "block";
        return b.id
    }
    return null
}
function appendStatus(f, d, e) {
    var c = document.getElementById("pageStatusBar"), a = document.getElementById(f);
    if (c != null && a != null) {
        var b = null;
        if (Boolean(a.lastChild) && a.lastChild.tagName == "BR") {
            a.removeChild(a.lastChild);
            b = _createStatusMarkup(d, e, true)
        }
        else b = _createStatusMarkup(d, e, false);
        if (a.nextSibling != null) c.insertBefore(b, a.nextSibling);
        else c.appendChild(b);
        return b.id
    }
    return null
}
function _createStatusMarkup(d, h, g, c, e, f) {
    var b = document.createElement("SPAN");
    b.id = "status_" + String(getUniqueIndex());
    b.className = "ms-status-status";
    var a = [];
    a.push("<span id='");
    a.push(b.id);
    a.push("_hiddenPriMsg' class='ms-accessible'>");
    a.push(getStatusTitle(1) + Strings.STS.L_Status_Text);
    a.push("</span>");
    !c && a.push('<span class="ms-status-iconSpan"><img class="ms-status-iconImg" src="/_layouts/15/images/spcommon.png" /></span>');
    if (d.length != 0) {
        a.push('<span class="ms-bold ms-status-title">');
        a.push(d);
        a.push("</span>")
    }
    a.push('<span class="ms-status-body" id=\'');
    a.push(b.id);
    a.push("_body");
    a.push("'>");
    a.push(h);
    a.push("</span>");
    if (e) {
        a.push('<a href="#" class="ms-status-iconSpan"><img class="ms-status-dismissIconImg" alt="');
        a.push(f);
        a.push('" src="/_layouts/15/images/spcommon.png" onclick="javascript:removeStatus(\'');
        a.push(b.id);
        a.push("');__doPostBack('DismissOffice365Notification');\"/></a>")
    }
    g && !c && a.push("<br/>");
    b.innerHTML = a.join("");
    b.setAttribute("role", "alert");
    b.priorityColor = 1;
    b.tabIndex = 0;
    return b
}
function removeAllStatus(b) {
    var a = document.getElementById("pageStatusBar");
    if (a != null) {
        a.innerHTML = "";
        a.className = StatusBarClassNames[1];
        StatusColorWithTopPriority = null;
        StatusIdWithTopPriority = null;
        if (b) a.style.display = "none"
    }

}
function setStatusPriColor(b, d) {
    var a = document.getElementById(b);
    if (a != null && typeof d == "string") {
        if (d in StatusPriority) a.priorityColor = StatusPriority[d];
        else a.priorityColor = 1;
        var c = a.firstChild;
        if (c != null && c.id == b + "_hiddenPriMsg") c.innerHTML = getStatusTitle(a.priorityColor) + Strings.STS.L_Status_Text;
        if (b == StatusIdWithTopPriority) if (a.priorityColor >= StatusColorWithTopPriority) StatusColorWithTopPriority = a.priorityColor;
        else _selectStatusWithTopPriority();
        else if (a.priorityColor > StatusColorWithTopPriority) {
            StatusIdWithTopPriority = b;
            StatusColorWithTopPriority = a.priorityColor
        }
        var e = document.getElementById("pageStatusBar");
        if (Boolean(e)) e.className = StatusBarClassNames[StatusColorWithTopPriority]
    }

}
function _selectStatusWithTopPriority() {
    var f = document.getElementById("pageStatusBar");
    if (f != null) {
        for (var e = null, b = 1, d = f.childNodes, g = d.length, a = null, c = 0;
        c < g;
        c++) {
            a = d[c];
            if (typeof a.priorityColor != "undefined" && a.priorityColor > b) {
                b = a.priorityColor;
                e = a.id
            }

        }
        StatusIdWithTopPriority = e;
        StatusColorWithTopPriority = b
    }

}
function updateStatus(d, b) {
    var c = d + "_body", a = document.getElementById(c);
    if (Boolean(a)) a.innerHTML = b
}
function removeStatus(d) {
    var a = document.getElementById(d);
    if (a != null) {
        if (Boolean(a.lastChild) && a.lastChild.tagName == "BR") {
            var c = a.previousSibling;
            if (Boolean(c) && Boolean(c.lastChild) && c.lastChild.tagName != "BR") {
                var e = document.createElement("BR");
                c.appendChild(e)
            }

        }
        a.parentNode.removeChild(a);
        var b = document.getElementById("pageStatusBar");
        if (Boolean(b)) if (b.getElementsByTagName("SPAN").length == 0) {
            b.className = StatusBarClassNames[1];
            StatusColorWithTopPriority = null;
            StatusIdWithTopPriority = null;
            b.style.display = "none"
        }
        else if (d == StatusIdWithTopPriority) {
            _selectStatusWithTopPriority();
            b.className = StatusBarClassNames[StatusColorWithTopPriority]
        }

    }

}
var g_dlgWndTop, g_spDlgLauncher, g_ModalDialogCount, g_overlayPopup, g_childDialog;
function _dlgWndTop() {
    if (Boolean(g_dlgWndTop)) return g_dlgWndTop;
    try {
        var a = window;
        while (a != null && a != a.parent) {
            a = a.parent;
            if (a != null && a.g_spDlgLauncher) g_dlgWndTop = a
        }

    }
    catch (b) { } finally {
        if (!Boolean(g_dlgWndTop)) g_dlgWndTop = window
    }
    return g_dlgWndTop
}
function commonShowModalDialog(n, b, c, m) {
    function r() {
        return []
    }
    function d(a, b, c) {
        a.push(b);
        a[b] = c
    }
    function q(b) {
        for (var c = [], a = 0;
        a < b.length;
        a++) c.push(b[a]);
        return c
    }
    if (document.getElementById("__spPickerHasReturnValue") != null) document.getElementById("__spPickerHasReturnValue").value = "";
    if (document.getElementById("__spPickerReturnValueHolder") != null) document.getElementById("__spPickerReturnValueHolder").value = "";
    commonModalDialogReturnValue.clear();
    var h;
    if (Boolean(window.showModalDialog)) {
        h = window.showModalDialog(n, m, b);
        Boolean(c) && invokeModalDialogCallback(c, h)
    }
    else {
        var l = 500, k = 550, p = "yes";
        if (!Boolean(b)) b = "width=" + String(l) + ",height=" + String(k);
        else {
            var a = r(), j, f;
            if (b.search(/^(\s*\w+\s*:\s*.+?\s*)(;\s*\s*\w+\s*:\s*.+?\s*)*(;\s*)?$/) != -1) {
                j = /^\s*(\w+)\s*:\s*(.+?)\s*$/;
                f = b.split(/\s*;\s*/)
            }
            else {
                j = /^\s*(\w+)\s*=\s*(.+?)\s*$/;
                f = b.split(/\s*,\s*/)
            }
            for (var s in f) {
                var g = j.exec(f[s]);
                Boolean(g) && g.length == 3 && d(a, g[1].toLowerCase(), g[2])
            }
            !Boolean(a.width) && d(a, "width", a.dialogwidth || Boolean(l));
            !Boolean(a.height) && d(a, "height", a.dialogheight || Boolean(k));
            !Boolean(a.scrollbars) && d(a, "scrollbars", a.scroll || Boolean(p));
            b = "";
            var i = q(a);
            for (var o in i) {
                if (Boolean(b)) b += ",";
                b += i[o] + "=" + a[i[o]]
            }

        }
        var e = window.open(n, "_blank", b + ",modal=yes,dialog=yes");
        e.dialogArguments = m;
        window.onfocus = function () {
            var a = document.getElementById("__spPickerHasReturnValue") != null && document.getElementById("__spPickerHasReturnValue").value == "1" || commonModalDialogReturnValue.isSet();
            if (Boolean(e) && !e.closed && !a) e.focus();
            else {
                window.onfocus = null;
                Boolean(c) && invokeModalDialogCallback(c, h)
            }

        };
        if (!browseris.ie) if (window.frameElement != null) window.fndlgClose = c
    }
    return h
}
function invokeModalDialogCallback(b, a) {
    if (typeof a != "undefined" && a != null) b(a);
    else if (commonModalDialogReturnValue.isSet()) {
        a = commonModalDialogReturnValue.get();
        b(a);
        commonModalDialogReturnValue.clear()
    }
    else if (document.getElementById("__spPickerHasReturnValue") != null && document.getElementById("__spPickerHasReturnValue").value == "1" && document.getElementById("__spPickerReturnValueHolder") != null) {
        a = document.getElementById("__spPickerReturnValueHolder").value;
        b(a)
    }
    return a
}
function setModalDialogReturnValue(a, b) {
    if (a.opener != null && typeof b == "string" && a.opener.document.getElementById("__spPickerHasReturnValue") != null && a.opener.document.getElementById("__spPickerReturnValueHolder") != null) {
        a.opener.document.getElementById("__spPickerHasReturnValue").value = "1";
        a.opener.document.getElementById("__spPickerReturnValueHolder").value = b
    }
    else setModalDialogObjectReturnValue(a, b);
    if (browseris.safari125up) a.opener != null && a.opener.fndlgClose != null && a.opener.fndlgClose(b)
}
function setModalDialogObjectReturnValue(a, b) {
    if (Boolean(a.showModalDialog)) a.returnValue = b;
    if (a.opener != null) if (typeof a.opener.commonModalDialogReturnValue != "undefined") {
        var c = a.opener.commonModalDialogReturnValue;
        c.set(b)
    }

}
function CommonGlobalDialogReturnValue_InitializePrototype() {
    CommonGlobalDialogReturnValue.prototype.hasRetVal = undefined;
    CommonGlobalDialogReturnValue.prototype.retVal = undefined;
    CommonGlobalDialogReturnValue.prototype.set = function (a) {
        if (typeof a != "undefined") {
            this.retVal = a;
            this.hasRetval = true
        }

    };
    CommonGlobalDialogReturnValue.prototype.isSet = function () {
        return this.hasRetval
    };
    CommonGlobalDialogReturnValue.prototype.get = function () {
        return this.hasRetval ? this.retVal : undefined
    };
    CommonGlobalDialogReturnValue.prototype.clear = function () {
        this.hasRetval = false;
        this.retVal = null
    }

}
function CommonGlobalDialogReturnValue() { } var commonModalDialogReturnValue;
function commonModalDialogOpen(d, a, b, c) {
    a.url = d;
    a.dialogReturnValueCallback = b;
    a.args = c;
    EnsureScriptParams("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", a)
}
function commonModalDialogClose(c, d) {
    var a, b = _dlgWndTop();
    if (typeof b.g_childDialog != "undefined") a = b.g_childDialog;
    if (Boolean(a)) {
        a.set_returnValue(d);
        a.close(c)
    }

}
function commonModalDialogGetArguments() {
    var a, b = _dlgWndTop();
    if (typeof b.g_childDialog != "undefined") a = b.g_childDialog;
    return Boolean(a) && typeof a.get_args != "undefined" ? a.get_args() : null
}
function ShowPopupDialog(a) {
    ShowPopupDialogWithCallback(a, PopupDialogCallback)
}
function ShowPopupDialogWithCallback(a, b) {
    if (FV4UI()) {
        var c = {
            url: a, dialogReturnValueCallback: b
        };
        EnsureScriptParams("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", c)
    }
    else STSNavigate(a)
}
function PopupDialogCallback(a) {
    a == 1 && STSNavigate(_dlgWndTop().location.href)
}
function SelectField(b, a) {
    CoreInvoke("_SelectField", b, a)
}
function FilterField(d, b, a, c) {
    CoreInvoke("_FilterField", d, b, a, c)
}
function SetControlValue(a, b) {
    CoreInvoke("_SetControlValue", a, b)
}
function SubmitFormPost(c, b, a) {
    CoreInvoke("_SubmitFormPost", c, b, a)
}
function GoToPageRelative(a) {
    CoreInvoke("_GoToPageRelative", a)
}
function EnterFolder(a) {
    CoreInvoke("_EnterFolder", a)
}
function HandleFolder(o, n, p, e, a, d, i, g, m, k, b, h, j, f, c, l) {
    PreventDefaultNavigation();
    CoreInvoke("_HandleFolder", o, n, p, e, a, d, i, g, m, k, b, h, j, f, c, l)
}
function VerifyFolderHref(g, f, h, c, b, e, d, a) {
    CoreInvoke("_VerifyFolderHref", g, f, h, c, b, e, d, a)
}
function VerifyHref(e, d, b, c, a) {
    CoreInvoke("_VerifyHref", e, d, b, c, a)
}
function DispEx(o, n, e, a, d, i, g, m, k, b, h, j, f, c, l) {
    g_MDNav = function (a) {
        return a
    }
    ();
    CoreInvoke("_DispEx", o, n, e, a, d, i, g, m, k, b, h, j, f, c, l);
    return g_MDNav
}
function EditItemWithCheckoutAlert(g, h, f, a, d, e, c, b) {
    CoreInvoke("_EditItemWithCheckoutAlert", g, h, f, a, d, e, c, b)
}
function STSNavigateWithCheckoutAlert(g, f, a, d, e, c, b) {
    CoreInvoke("_STSNavigateWithCheckoutAlert", g, f, a, d, e, c, b)
}
function NewItem2(a, b) {
    CoreInvoke("_NewItem2", a, b)
}
function NewItem(a) {
    CoreInvoke("_NewItem", a)
}
function EditItem2(a, b) {
    CoreInvoke("_EditItem2", a, b)
}
function EditItem(a) {
    CoreInvoke("_EditItem", a)
}
function RefreshPageTo(b, c, a) {
    CoreInvoke("_RefreshPageTo", b, c, a)
}
function AddGroupToCookie(a) {
    CoreInvoke("_AddGroupToCookie", a)
}
function RemoveGroupFromCookie(a) {
    CoreInvoke("_RemoveGroupFromCookie", a)
}
function ExpGroupBy(a) {
    CoreInvoke("_ExpGroupBy", a)
}
function DispDocItem(b, a) {
    CoreInvoke("_DispDocItem", b, a)
}
function DispDocItemExWithServerRedirect(h, g, d, a, c, f, e, b) {
    CoreInvoke("_DispDocItemExWithServerRedirect", h, g, d, a, c, f, e, b)
}
function DispDocItemEx(e, c, a, b, d) {
    CoreInvoke("_DispDocItemEx", e, c, a, b, d)
}
function PortalPinToMyPage(h, f, d, e, a, c, g, b) {
    CoreInvoke("_PortalPinToMyPage", h, f, d, e, a, c, g, b)
}
function MoveToViewDate(b, a, c) {
    CoreInvoke("_MoveToViewDate", b, a, c)
}
function MoveToDate(a, b) {
    CoreInvoke("_MoveToDate", a, b)
}
function ClickDay(a) {
    CoreInvoke("_ClickDay", a)
}
function GetMonthView(a) {
    CoreInvoke("_GetMonthView", a)
}
function OptLoseFocus(a) {
    CoreInvoke("_OptLoseFocus", a)
}
function SetCtrlFromOpt(a, b) {
    CoreInvoke("_SetCtrlFromOpt", a, b)
}
function ChangeLayoutMode(a, b) {
    CoreInvoke("_ChangeLayoutMode", a, b)
}
function MSOLayout_ChangeLayoutMode(a, b) {
    ChangeLayoutMode(a, b)
}
function WebPartMenuKeyboardClick(c, a, b, d) {
    CoreInvoke("_WebPartMenuKeyboardClick", c, a, b, d)
}
function ShowToolPane2Wrapper(a, b, c) {
    CoreInvoke("_ShowToolPane2Wrapper", a, b, c)
}
function EditInSPD(a, b) {
    CoreInvoke("_EditInSPD", a, b)
}
function SetupFixedWidthWebParts() {
    CoreInvoke("_SetupFixedWidthWebParts")
}
function ToggleAllItems(c, b, a) {
    CoreInvoke("_ToggleAllItems", c, b, a)
}
function CommandUIExecuteCommand(a) {
    CoreInvoke("_CommandUIExecuteCommand", a)
}
function PopMenuFromChevron(a) {
    CoreInvoke("_PopMenuFromChevron", a)
}
function ListHeaderMenu_OnMouseDown(a) {
    CoreInvoke("_ListHeaderMenu_OnMouseDown", a)
}
function NavigateToSubNewAspx(a, b) {
    CoreInvoke("_NavigateToSubNewAspx", a, b)
}
function NavigateToManagePermsPage(a, c, b) {
    CoreInvoke("_NavigateToManagePermsPage", a, c, b)
}
function DoNavigateToTemplateGallery(a, b) {
    CoreInvoke("_DoNavigateToTemplateGallery", a, b)
}
function RefreshPage(a) {
    CoreInvoke("_RefreshPage", a)
}
function OpenPopUpPage(d, a, c, b) {
    CoreInvoke("_OpenPopUpPage", d, a, c, b)
}
function OpenCreateWebPageDialog(a) {
    CoreInvoke("_OpenCreateWebPageDialog", a)
}
function EditLink2(b, a) {
    CoreInvoke("_EditLink2", b, a)
}
function GoBack(a) {
    CoreInvoke("_GoBack", a)
}
function ReplyItem(d, a, c, b) {
    CoreInvoke("_ReplyItem", d, a, c, b)
}
function ExportToDatabase(b, c, d, a) {
    CoreInvoke("_ExportToDatabase", b, c, d, a)
}
function ExportList(a) {
    CoreInvoke("_ExportList", a)
}
function ClearSearchTerm(a) {
    CoreInvoke("_ClearSearchTerm", a)
}
function SubmitSearchForView(a) {
    CoreInvoke("_SubmitSearchForView", a)
}
function SubmitSearchRedirect(a) {
    CoreInvoke("_SubmitSearchRedirect", a)
}
function AlertAndSetFocus(b, a) {
    CoreInvoke("_AlertAndSetFocus", b, a)
}
function AlertAndSetFocusForDropdown(b, a) {
    CoreInvoke("_AlertAndSetFocusForDropdown", b, a)
}
function AddSilverlightWebPart(c, b, a) {
    CoreInvoke("_AddSilverlightWebPart", c, b, a)
}
function UserSelectionOnClick(b, a) {
    CoreInvoke("_UserSelectionOnClick", b, a)
}
function OnIframeLoad() {
    CoreInvoke("_OnIframeLoad")
}
function OnFocusFilter(a) {
    CoreInvoke("_OnFocusFilter", a)
}
function TopHelpButtonClick(a, b) {
    cancelDefault(b);
    CoreInvoke("_TopHelpButtonClick", a)
}
function HelpWindowKey(a) {
    CoreInvoke("_HelpWindowKey", a)
}
function HelpWindowUrl(a) {
    CoreInvoke("_HelpWindowUrl", a)
}
function HelpWindow() {
    CoreInvoke("_HelpWindow")
}
function ToggleFullScreenMode() {
    CoreInvoke("_ToggleFullScreenMode")
}
function OnClickFilter(a, b) {
    return CoreInvoke("_OnClickFilter", a, b)
}
function GCActivateAndFocus(a) {
    CoreInvoke("_GCActivateAndFocus", a)
}
function GCNavigateToNonGridPage() {
    CoreInvoke("_GCNavigateToNonGridPage")
}
function AjaxNavigate$WantsNewTab(a) {
    return "undefined" != typeof a.ctrlKey && Boolean(a.ctrlKey) ? true : "undefined" != typeof a.button && 1 == a.button ? true : false
}
function AjaxNavigate$OnClickHook(b, e) {
    if (!(b.returnValue === false || b.defaultPrevented) && !AjaxNavigate$WantsNewTab(b)) {
        var d = GetEventSrcElement(b), a = d, c = false;
        while (null != a) {
            if (null != a.tagName && "A" == a.tagName.toUpperCase()) {
                c = true;
                break
            }
            if (a == e) break;
            a = a.parentNode
        }
        if (c && a.href != null && a.href.length > 0 && a.href != "#" && IsSTSPageUrlValid(a.href)) {
            cancelDefault(b);
            STSNavigate(a.href);
            return false
        }

    }
    return function (a) {
        return a
    }
    ()
}
function AjaxNavigate$add_navigate(a) {
    if ("function" != typeof a) throw "unexpected";
    var b = Array.indexOf(this._list, a, 0);
    -1 == b && this._list.push(a)
}
function AjaxNavigate$remove_navigate(a) {
    if ("function" != typeof a) throw "unexpected";
    var b = Array.indexOf(this._list, a, 0);
    -1 != b && this._list.splice(b, 1)
}
function AjaxNavigate$_parseParams(g, j, i, h) {
    for (var e = false, f = h;
    f < i;
    f++) {
        var a = j[f];
        if (null == a || 0 == a.length) continue;
        var b = a.indexOf("="), d, c;
        if (b >= 1) {
            d = a.substr(0, b);
            c = a.substr(b + 1);
            g[d] = unescapeProperly(c)
        }
        else if (b == -1 && !e) {
            if (e) throw "Unexpected";
            d = "anchorTag";
            c = a;
            g[d] = unescapeProperly(c);
            e = true
        }
        else throw "Unexpected";
    }

}
function AjaxNavigate$_GetWindowLocationHash(b) {
    var a = b.indexOf("#");
    a = a > 0 ? a : b.length;
    return b.substr(a)
}
function AjaxNavigate$_GetWindowLocationNoHash(b) {
    var a = b.indexOf("#");
    a = a > 0 ? a : b.length;
    return b.substr(0, a)
}
function RemoveMDSQueryParametersFromUrl(a) {
    return RemoveQueryParameterFromUrl(RemoveQueryParameterFromUrl(RemoveQueryParameterFromUrl(a, "AjaxDelta"), "OrigMaster"), "isStartPlt1")
}
function GetUrlFromMDSLocation(a, b, h) {
    var c = function (a) {
        return a
    }
    ();
    if (a == null) return c;
    if (b == null || b.length < 1 || b[0] != "/") return c;
    var d = a.indexOf("/_layouts/15/start.aspx");
    if (-1 == d) return c;
    var e;
    if (h && "/" != a[0]) {
        var f = a.indexOf("://");
        if (-1 == f) return c;
        var g = a.indexOf("/", f + 3);
        e = a.substr(g, d - g)
    }
    else e = a.substr(0, d);
    return e + b
}
function AjaxNavigate$_UrlFromHashBag(b) {
    var a = b.url, d = b.anchorTag;
    for (var c in b) if (c != "anchorTag" && c != "url") a += "#" + c + "=" + encodeURIComponent(b[c]);
    if (Boolean(d)) a += "#" + d;
    if (null != a && a.length > 1 && "/" == a[0] && "/" == a[1]) return a.substr(1);
    else {
        var e = AjaxNavigate$_GetWindowLocationNoHash(window.location.href);
        return GetUrlFromMDSLocation(e, a, true)
    }

}
function AjaxNavigate$_buildHashBag(b) {
    var c = {};
    try {
        if (b == "" || b == "#") c.url = "/";
        else if (b != null && b.length != 0) {
            var a = b.substr(1).split("#"), e = a.length, d = 0;
            if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload && e > 0 && a[0].length > 0 && a[0][0] == "/") {
                c.url = a[0];
                d = 1
            }
            AjaxNavigate$_parseParams(c, a, e, d)
        }

    }
    catch (f) { } return c
}
function AjaxNavigate$parseHash(a) {
    var b = {};
    try {
        if (a != null && a.length != 0) {
            var c = a.split("#");
            AjaxNavigate$_parseParams(b, c, c.length, 0)
        }

    }
    catch (d) { } return b
}
function AjaxNavigate$_raiseNavigate(d) {
    for (var b = this._buildHashBag(AjaxNavigate$_GetWindowLocationHash(window.location.href)), c = this._list.length, a = 0, e = c;
    a < e;
    a++) this._list[a](d, b)
}
function AjaxNavigate$_getParam(b) {
    var a = this._buildHashBag(AjaxNavigate$_GetWindowLocationHash(window.location.href));
    return a[b]
}
function AjaxNavigate$_normalizeFormAction(b) {
    var a = document.createElement("form");
    a.action = b;
    return a.action
}
function AjaxNavigate$_getSavedFormAction() {
    var a = null;
    if ("undefined" != typeof asyncDeltaManager && Boolean(asyncDeltaManager) && "undefined" != typeof asyncDeltaManager._savedFormAction) {
        a = asyncDeltaManager._savedFormAction;
        if (Boolean(a)) a = AjaxNavigate$_normalizeFormAction(a)
    }
    return a
}
function AjaxNavigate$submit(a) {
    if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload && window.location.pathname.toLowerCase().endsWith("/_layouts/15/start.aspx") && "undefined" != typeof asyncDeltaManager && "undefined" != typeof asyncDeltaManager._onFormSubmitCore) asyncDeltaManager._onFormSubmitCore(a);
    else a.submit()
}
function AjaxNavigate$_getAjaxLocationWindow() {
    var c = null, a = window.location.href, e = a.toLowerCase().indexOf("/_layouts/15/start.aspx"), f = a.indexOf("://"), d = a.indexOf("/", f + 3);
    if (-1 == d) d = a.length;
    var b = a.indexOf("#");
    if (-1 != b && b + 1 <= a.length && "/" == a[b + 1]) if (b + 2 <= a.length && "/" == a[b + 2]) c = a.substr(0, d) + a.substr(b + 2);
    else c = a.substr(0, e) + a.substr(b + 1);
    else c = a.substr(0, e);
    return c
}
function AjaxNavigate$combineURL(b, a) {
    if (b.endsWith("/")) {
        if (a.startsWith("/")) a = a.substring(1);
        return b + a
    }
    else return a.startsWith("/") ? b + a : b + "/" + a
}
function AjaxNavigate$isMDSURL(a) {
    var b = a.indexOf("?");
    if (-1 == b) b = a.length;
    var c = a.indexOf("#");
    if (-1 == c) c = a.length;
    var d = Math.min(b, c);
    a = a.substr(0, d);
    return a.toLowerCase().endsWith("/_layouts/15/start.aspx")
}
function AjaxNavigate$convertRegularURLtoMDSURL(d, a) {
    if (AjaxNavigate$isMDSURL(a)) return a;
    var f = null;
    if (d != null && a.toLowerCase().startsWith(d.toLowerCase() + "/")) {
        var c = a.substring(d.length + 1);
        if (c == null || c == "") c = "/";
        else if ("/" != c[0]) c = "/" + c;
        f = AjaxNavigate$combineURL(d, "/_layouts/15/start.aspx#" + c)
    }
    else {
        var g = a.indexOf("://");
        if (g != -1) {
            var e = a.indexOf("/", g + 3);
            if (e != -1) {
                var h = a.substring(0, e), b = a.substring(e);
                if (b == null || b == "") b = "/";
                else if ("/" != b[0]) b = "/" + b;
                f = AjaxNavigate$combineURL(h, "/_layouts/15/start.aspx#/" + b)
            }

        }

    }
    return f
}
function AjaxNavigate$convertMDSURLtoRegularURL(a) {
    var c = a;
    if (a != null || a != "") {
        var f = "/_layouts/15/start.aspx", b = a.toLowerCase().indexOf(f);
        if (b != -1) {
            var d = a.substring(0, b);
            b += f.length;
            if (a.length == b) c = d;
            else if (a[b] == "#") {
                b += 1;
                if (a.length == b) c = d;
                else if (a.length >= b + 2 && a[b] == "/" && a[b + 1] == "/") {
                    var g = a.indexOf("://");
                    if (g != -1) {
                        var e = a.indexOf("/", g + 3);
                        if (e != -1) {
                            var j = a.substring(0, e), h = a.substring(b + 1);
                            c = AjaxNavigate$combineURL(j, h)
                        }

                    }

                }
                else if (a.length >= b + 1 && a[b] == "/") {
                    var i = a.substring(b);
                    c = AjaxNavigate$combineURL(d, i)
                }

            }

        }

    }
    return c
}
function AjaxNavigate$get_href() {
    var a = null;
    if (window.location.pathname.toLowerCase().endsWith("/_layouts/15/start.aspx")) {
        if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload) a = this.getSavedFormAction();
        if (!Boolean(a)) a = AjaxNavigate$_getAjaxLocationWindow()
    }
    else a = window.location.href;
    return a
}
function AjaxNavigate$get_hash() {
    var a = window.location.hash;
    if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload && window.location.pathname.toLowerCase().endsWith("/_layouts/15/start.aspx")) {
        var b = a.indexOf("#", 1);
        a = b > 0 ? a.substr(b) : ""
    }
    return a
}
function AjaxNavigate$get_search() {
    var a = "";
    if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload && window.location.pathname.toLowerCase().endsWith("/_layouts/15/start.aspx")) {
        var b = this.getSavedFormAction();
        if (Boolean(b)) {
            var c = b.indexOf("?");
            if (-1 != c) a = b.substr(c)
        }

    }
    else a = window.location.search;
    return a
}
function AjaxNavigate$update(h, f, k, b) {
    var j = AjaxNavigate$_GetWindowLocationHash(window.location.href), d = {}, a = "";
    if (null == h) {
        if (j != null && j.length != 0) {
            var e = j.substr(1).split("#"), m = e.length, l = 0;
            if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload && m > 0 && e[0].length > 0 && e[0][0] == "/") {
                a = e[0];
                l = 1
            }
            AjaxNavigate$_parseParams(d, e, m, l)
        }

    }
    else a = this._fixLayoutsUrl(h);
    if ("undefined" != typeof f) for (var c in f) {
        var g = f[c];
        if (null != g && "string" != typeof g && "number" != typeof g) throw "Unexpected";
        if (null == g) {
            if (d[c] != null) delete d[c]
        }
        else d[c] = f[c]
    }
    if ("undefined" != typeof b && b != null && b != "") a += "#" + encodeURIComponent(b);
    for (c in d) if (c != "anchorTag") a += "#" + c + "=" + encodeURIComponent(d[c]);
    if (null != h) {
        var p = _dlgWndTop();
        while (p.g_childDialog != null) commonModalDialogClose(0, null)
    }
    var i = "undefined" != typeof asyncDeltaManager && Boolean(asyncDeltaManager) && "undefined" != typeof asyncDeltaManager._handleLocalAnchor && "undefined" != typeof asyncDeltaManager.SetCurrentUrl && "undefined" != typeof asyncDeltaManager._navigate;
    if ("undefined" != typeof k && k || !i) if (a.startsWith("#")) window.location.hash = a;
    else try {
        window.location.href = a
    }
        catch (q) { } else if (null == h) {
            if (i) {
                "undefined" != typeof b && b != null && b != "" && asyncDeltaManager._handleLocalAnchor(b);
                var o = AjaxNavigate$_GetWindowLocationNoHash(window.location.href), n = GetUrlFromMDSLocation(o, RemoveMDSQueryParametersFromUrl(a), true);
                if (Boolean(n)) asyncDeltaManager._savedFormAction = n
            }
            window.location.hash = a
        }
        else if (i) {
            asyncDeltaManager.SetCurrentUrl(null);
            asyncDeltaManager._navigate(a, b, true)
        }

}
function AjaxNavigate$_fixLayoutsUrl(a) {
    var c = a.indexOf("_layouts/");
    if (c != -1) {
        var d = a.substr(c), b = d.split("/")[1];
        if (b != null) if (isNaN(Number(b))) a = a.replace("_layouts/", "_layouts/15/")
    }
    return a
}
function AjaxNavigate$_clear() {
    this._list = new Array(0)
}
function AjaxNavigate() {
    this._list = new Array(0)
}
var ajaxNavigate;
function _spBodyOnHashChange() {
    ajaxNavigate._raiseNavigate(ajaxNavigate)
}
var URI;
function setInnerText(a, b) {
    var c = a.ownerDocument;
    if (Boolean(c.createTextNode)) {
        var d = c.createTextNode(b);
        a.innerHTML = "";
        a.appendChild(d)
    }
    else a.innerText = b
}
function _EnsureJSClassOrNamespace(f, e) {
    for (var d = f.split("."), a, c = 0, g = d.length;
    c < g;
    c++) {
        var b = d[c];
        if (typeof a == "undefined") a = window;
        if (typeof a[b] == "undefined") a[b] = {};
        a = a[b];
        if (e) a.__namespace = true
    }

}
function _EnsureJSNamespace(a) {
    _EnsureJSClassOrNamespace(a, true)
}
function _EnsureJSClass(a) {
    _EnsureJSClassOrNamespace(a, false)
}
var g_prefetch, g_ribbonImagePrefetch;
function AllowCSSFiltersOnIE8() {
    if (browseris.ie8down) {
        CSSUtil.AddClass(document.body, "ms-core-needIEFilter");
        var a = document.getElementById("ms-hcTest");
        if (Boolean(a) && Boolean(a.currentStyle)) if (a.currentStyle.borderColor != "#f00") {
            var b = document.getElementById("s4-workspace");
            if (Boolean(b)) b.style.filter = ""
        }

    }
    else CSSUtil.AddClass(document.body, "ms-backgroundImage")
}
function notifyScriptsLoadedAndExecuteWaitingJobs(a) {
    typeof Sys != "undefined" && Boolean(Sys) && Boolean(Sys.Application) && Sys.Application.notifyScriptLoaded();
    NotifyScriptLoadedAndExecuteWaitingJobs(a)
}
var initJsLoaded;
$_global_init();
