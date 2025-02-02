/*! For license information please see layout-builder.js.LICENSE.txt */
System.register(["jimu-core","jimu-for-builder","jimu-ui","jimu-layouts/layout-runtime","jimu-theme","jimu-core/dnd","jimu-ui/advanced/setting-components","jimu-for-builder/templates","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker"],(function(t,e){var o={},i={},n={},a={},s={},l={},r={},d={},u={},c={};return{setters:[function(t){o.APP_FRAME_NAME_IN_BUILDER=t.APP_FRAME_NAME_IN_BUILDER,o.AnimationComponent=t.AnimationComponent,o.AnimationContext=t.AnimationContext,o.AnimationPlayMode=t.AnimationPlayMode,o.AnimationStartMode=t.AnimationStartMode,o.AnimationTriggerType=t.AnimationTriggerType,o.AnimationType=t.AnimationType,o.AppDialog=t.AppDialog,o.AppMode=t.AppMode,o.AppType=t.AppType,o.BrowserSizeMode=t.BrowserSizeMode,o.ContainerType=t.ContainerType,o.DEFAULT_ANIMATION_PROPS=t.DEFAULT_ANIMATION_PROPS,o.ErrorBoundary=t.ErrorBoundary,o.ExtensionManager=t.ExtensionManager,o.FixedPosition=t.FixedPosition,o.GridItemType=t.GridItemType,o.HoverType=t.HoverType,o.Immutable=t.Immutable,o.IntersectionContext=t.IntersectionContext,o.Keyboard=t.Keyboard,o.LayoutItemType=t.LayoutItemType,o.LayoutParentType=t.LayoutParentType,o.LayoutType=t.LayoutType,o.OneByOneAnimation=t.OneByOneAnimation,o.PageMode=t.PageMode,o.PagePart=t.PagePart,o.PageType=t.PageType,o.ParentAnimationMode=t.ParentAnimationMode,o.React=t.React,o.ReactRedux=t.ReactRedux,o.ReactResizeDetector=t.ReactResizeDetector,o.ScreenTransitionType=t.ScreenTransitionType,o.ScreenTriggerType=t.ScreenTriggerType,o.TransitionContainer=t.TransitionContainer,o.TransitionType=t.TransitionType,o.WidgetManager=t.WidgetManager,o.WidgetState=t.WidgetState,o.WidgetType=t.WidgetType,o.appActions=t.appActions,o.appConfigUtils=t.appConfigUtils,o.classNames=t.classNames,o.createSelector=t.createSelector,o.css=t.css,o.extensionSpec=t.extensionSpec,o.getAnimationEffect=t.getAnimationEffect,o.getAppStore=t.getAppStore,o.getHoverStyle=t.getHoverStyle,o.getIndexFromProgress=t.getIndexFromProgress,o.getNextAnimationId=t.getNextAnimationId,o.hooks=t.hooks,o.i18n=t.i18n,o.injectIntl=t.injectIntl,o.jimuHistory=t.jimuHistory,o.jsx=t.jsx,o.lodash=t.lodash,o.moduleLoader=t.moduleLoader,o.polished=t.polished,o.spring=t.spring,o.utils=t.utils},function(t){i.BaseLayoutService=t.BaseLayoutService,i.ContentServiceWrapper=t.ContentServiceWrapper,i.LayoutServiceProvider=t.LayoutServiceProvider,i.appBuilderSync=t.appBuilderSync,i.builderActions=t.builderActions,i.builderAppSync=t.builderAppSync,i.getAppConfigAction=t.getAppConfigAction,i.placeholderService=t.placeholderService,i.screenGroupService=t.screenGroupService,i.widgetService=t.widgetService},function(t){n.AdvancedButtonGroup=t.AdvancedButtonGroup,n.Button=t.Button,n.Checkbox=t.Checkbox,n.DistanceUnits=t.DistanceUnits,n.Dropdown=t.Dropdown,n.DropdownButton=t.DropdownButton,n.DropdownMenu=t.DropdownMenu,n.FOCUSABLE_CONTAINER_CLASS=t.FOCUSABLE_CONTAINER_CLASS,n.FillType=t.FillType,n.Icon=t.Icon,n.Label=t.Label,n.Loading=t.Loading,n.LoadingType=t.LoadingType,n.NumericInput=t.NumericInput,n.Popper=t.Popper,n.Select=t.Select,n.Switch=t.Switch,n.Tab=t.Tab,n.Tabs=t.Tabs,n.TextInput=t.TextInput,n.Tooltip=t.Tooltip,n._Popper=t._Popper,n.defaultMessages=t.defaultMessages,n.getFallbackPlacementsModifier=t.getFallbackPlacementsModifier,n.styleUtils=t.styleUtils,n.useTrapFocusLoop=t.useTrapFocusLoop,n.utils=t.utils},function(t){a.CLICK_TOLRERANCE=t.CLICK_TOLRERANCE,a.CONTEXT_MENU_ICON_SIZE=t.CONTEXT_MENU_ICON_SIZE,a.CONTEXT_MENU_ITEM_SIZE=t.CONTEXT_MENU_ITEM_SIZE,a.LayoutContext=t.LayoutContext,a.LayoutItemSizeModes=t.LayoutItemSizeModes,a.LayoutZIndex=t.LayoutZIndex,a.MIN_LAYOUT_ITEM_SIZE=t.MIN_LAYOUT_ITEM_SIZE,a.PageContext=t.PageContext,a.PageVisibilityContext=t.PageVisibilityContext,a.ViewVisibilityContext=t.ViewVisibilityContext,a.ViewportVisibilityContext=t.ViewportVisibilityContext,a.WidgetRenderer=t.WidgetRenderer,a.findLayoutBuilder=t.findLayoutBuilder,a.registerLayoutBuilder=t.registerLayoutBuilder,a.searchUtils=t.searchUtils,a.utils=t.utils},function(t){s.Theme2GlobalStyleClassName=t.Theme2GlobalStyleClassName,s.getBuilderThemeVariables=t.getBuilderThemeVariables,s.getTheme=t.getTheme,s.getTheme2=t.getTheme2,s.useTheme=t.useTheme,s.withBuilderTheme=t.withBuilderTheme,s.withTheme=t.withTheme},function(t){l.interact=t.interact},function(t){r.SettingRow=t.SettingRow,r.SettingSection=t.SettingSection,r.SidePopper=t.SidePopper,r.TemplateSelector=t.TemplateSelector,r.WidgetListPopper=t.WidgetListPopper},function(t){d.getBlockTemplates=t.getBlockTemplates,d.getFooterTemplates=t.getFooterTemplates,d.getFullScreenGridPageTemplates=t.getFullScreenGridPageTemplates,d.getFullScreenPageTemplates=t.getFullScreenPageTemplates,d.getGridTemplates=t.getGridTemplates,d.getHeaderTemplates=t.getHeaderTemplates,d.getScreenGroupTemplates=t.getScreenGroupTemplates,d.getScreenTemplates=t.getScreenTemplates,d.getScrollingPageTemplates=t.getScrollingPageTemplates,d.getWindowTemplates=t.getWindowTemplates},function(t){u.AnimationSettingComponent=t.AnimationSettingComponent,u.InputRatio=t.InputRatio,u.InputUnit=t.InputUnit,u.Padding=t.Padding,u.SizeEditor=t.SizeEditor,u.ThemeBackgroundSection=t.ThemeBackgroundSection,u.ThemeBorderSection=t.ThemeBorderSection,u.ThemeBoxShadowSection=t.ThemeBoxShadowSection,u.TransitionSetting=t.TransitionSetting},function(t){c.ThemeColorPicker=t.ThemeColorPicker}],execute:function(){t((()=>{var t={4146:(t,e,o)=>{"use strict";var i=o(4363),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function r(t){return i.isMemo(t)?s:l[t.$$typeof]||n}l[i.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[i.Memo]=s;var d=Object.defineProperty,u=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,g=Object.prototype;t.exports=function t(e,o,i){if("string"!=typeof o){if(g){var n=h(o);n&&n!==g&&t(e,n,i)}var s=u(o);c&&(s=s.concat(c(o)));for(var l=r(e),m=r(o),y=0;y<s.length;++y){var f=s[y];if(!(a[f]||i&&i[f]||m&&m[f]||l&&l[f])){var v=p(o,f);try{d(e,f,v)}catch(t){}}}}return e}},7927:t=>{"use strict";t.exports=function(t,e,o,i,n,a,s,l){if(!t){var r;if(void 0===e)r=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[o,i,n,a,s,l],u=0;(r=new Error(e.replace(/%s/g,(function(){return d[u++]})))).name="Invariant Violation"}throw r.framesToPop=1,r}}},2799:(t,e)=>{"use strict";var o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,n=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,r=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,u=o?Symbol.for("react.async_mode"):60111,c=o?Symbol.for("react.concurrent_mode"):60111,p=o?Symbol.for("react.forward_ref"):60112,h=o?Symbol.for("react.suspense"):60113,g=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,f=o?Symbol.for("react.block"):60121,v=o?Symbol.for("react.fundamental"):60117,I=o?Symbol.for("react.responder"):60118,x=o?Symbol.for("react.scope"):60119;function b(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case i:switch(t=t.type){case u:case c:case a:case l:case s:case h:return t;default:switch(t=t&&t.$$typeof){case d:case p:case y:case m:case r:return t;default:return e}}case n:return e}}}function w(t){return b(t)===c}e.AsyncMode=u,e.ConcurrentMode=c,e.ContextConsumer=d,e.ContextProvider=r,e.Element=i,e.ForwardRef=p,e.Fragment=a,e.Lazy=y,e.Memo=m,e.Portal=n,e.Profiler=l,e.StrictMode=s,e.Suspense=h,e.isAsyncMode=function(t){return w(t)||b(t)===u},e.isConcurrentMode=w,e.isContextConsumer=function(t){return b(t)===d},e.isContextProvider=function(t){return b(t)===r},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===i},e.isForwardRef=function(t){return b(t)===p},e.isFragment=function(t){return b(t)===a},e.isLazy=function(t){return b(t)===y},e.isMemo=function(t){return b(t)===m},e.isPortal=function(t){return b(t)===n},e.isProfiler=function(t){return b(t)===l},e.isStrictMode=function(t){return b(t)===s},e.isSuspense=function(t){return b(t)===h},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===a||t===c||t===l||t===s||t===h||t===g||"object"==typeof t&&null!==t&&(t.$$typeof===y||t.$$typeof===m||t.$$typeof===r||t.$$typeof===d||t.$$typeof===p||t.$$typeof===v||t.$$typeof===I||t.$$typeof===x||t.$$typeof===f)},e.typeOf=b},4363:(t,e,o)=>{"use strict";t.exports=o(2799)},2756:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path fill="#000" fill-rule="evenodd" d="M1.5 1.5h5v5h-5zM.25 7.75V.25h7.5v7.5zM1.5 11.5h5v5h-5zM.25 17.75v-7.5h7.5v7.5zM16.5 1.5h-5v5h5zM10.25.25v7.5h7.5V.25zm3.125 17.5v-3.125H10.25v-1.25h3.125V10.25h1.25v3.125h3.125v1.25h-3.125v3.125z" clip-rule="evenodd"></path></svg>'},6490:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M3.154 3.154a.527.527 0 0 1 .746 0l1.317 1.317A8.6 8.6 0 0 1 8 4c2.667 0 5.667 1.333 7 4-.696 1.393-1.847 2.422-3.168 3.087l1.014 1.013a.527.527 0 1 1-.746.746l-1.317-1.317A8.6 8.6 0 0 1 8 12c-2.667 0-5.667-1.333-7-4 .696-1.393 1.847-2.422 3.168-3.087L3.154 3.9a.527.527 0 0 1 0-.746m1.698 2.443C3.726 6.087 2.782 6.882 2 8c1.422 2.033 3.382 3 6 3a8.7 8.7 0 0 0 2.03-.225l-.675-.674A2.5 2.5 0 0 1 5.9 6.644zm6.296 4.805C12.275 9.913 13.218 9.119 14 8c-1.422-2.033-3.382-3-6-3q-1.088 0-2.03.225l.675.674a2.5 2.5 0 0 1 3.457 3.456zM6.5 8c0-.221.048-.431.134-.62l1.987 1.986A1.5 1.5 0 0 1 6.5 8m.88-1.366 1.986 1.987a1.5 1.5 0 0 0-1.987-1.987" clip-rule="evenodd"></path></svg>'},462:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><path fill="#fff" fill-rule="evenodd" d="M12 0H7v1h4v4h1V0M0 12h5v-1H1V7H0v5" clip-rule="evenodd"></path></svg>'},4651:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0" clip-rule="evenodd"></path></svg>'},3303:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M9.438.994c.213 0 .397.146.44.35q.227 1.084.316 1.852.562.242 1.048.599l1.728-.676a.455.455 0 0 1 .556.188l1.42 2.394a.43.43 0 0 1-.091.547 22 22 0 0 1-1.49 1.194q.03.27.03.552 0 .32-.038.63l1.465 1.12a.43.43 0 0 1 .111.563l-1.42 2.394a.454.454 0 0 1-.53.197 23 23 0 0 1-1.807-.66q-.49.35-1.055.586l-.263 1.794a.446.446 0 0 1-.445.376H6.574a.446.446 0 0 1-.44-.35 21 21 0 0 1-.317-1.853 5.3 5.3 0 0 1-1.047-.598l-1.728.675a.455.455 0 0 1-.556-.187l-1.42-2.395a.43.43 0 0 1 .091-.546q.85-.735 1.49-1.194a5.167 5.167 0 0 1 .008-1.183L1.19 6.243a.43.43 0 0 1-.112-.562l1.42-2.395a.455.455 0 0 1 .531-.196q1.078.35 1.807.66c.324-.233.679-.43 1.056-.587l.262-1.794A.446.446 0 0 1 6.6.994zm-.365 1H6.985l-.28 1.866-.467.19q-.353.144-.672.34l-.207.136-.42.293-.476-.197q-.492-.205-1.169-.433l-.221-.074-1.045 1.719L3.59 6.999l-.06.479a4 4 0 0 0-.021.816l.014.144.058.492-.419.294q-.433.304-.979.746l-.177.145 1.043 1.72 1.845-.703.406.29q.307.219.645.384l.228.103.474.199.059.49q.06.507.19 1.177l.043.219h2.088l.282-1.867.466-.19q.354-.144.672-.34l.207-.136.419-.293.476.198q.495.204 1.17.433l.22.072 1.044-1.718-1.56-1.165.06-.479a4 4 0 0 0 .02-.815l-.013-.144-.06-.492.42-.295a18 18 0 0 0 .98-.746l.176-.146-1.043-1.72-1.844.705-.406-.29a4.5 4.5 0 0 0-.646-.385l-.228-.103-.474-.199-.058-.49q-.049-.405-.14-.916zm-1.067 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clip-rule="evenodd"></path></svg>'},63:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 2H2v2h12zM2 1H1v4h14V1H2m2 7H2v6h2zM2 7H1v8h4V7H2m6 1h6v6H8zM7 7h8v8H7V7" clip-rule="evenodd"></path></svg>'},3529:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 12c-2.667 0-5.667-1.333-7-4 1.333-2.667 4.333-4 7-4s5.667 1.333 7 4c-1.333 2.667-4.333 4-7 4m0-7c-2.618 0-4.578.967-6 3 1.422 2.033 3.382 3 6 3s4.578-.967 6-3c-1.422-2.033-3.382-3-6-3m0 5.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},5549:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M6 5H2v6h4zM1 4v8h6V4zM14 5h-4v6h4zM9 4v8h6V4z" clip-rule="evenodd"></path></svg>'},7528:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 2h12v4H2zM1 7V1h14v6zm1 3h12v4H2zm-1 5V9h14v6z" clip-rule="evenodd"></path></svg>'},4221:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 2v12h3V2zm4 0v12h4V2zm8 12h-3V2h3zM1 14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" clip-rule="evenodd"></path></svg>'},5108:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1 1.5a.5.5 0 0 1 1 0v13a.5.5 0 0 1-1 0zM14 9H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M4 12v-2h10v2zm0-9h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m0 1v2h6V4z" clip-rule="evenodd"></path></svg>'},4005:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="m1 7.5 3-2V7h2v1H4v1.5zm14 0-3 2V8h-2V7h2V5.5zM7 7h2v1H7z" clip-rule="evenodd"></path></svg>'},1291:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14.5 15a.5.5 0 0 0 0-1H7.46l2.348-2.138a.508.508 0 1 0-.684-.752L8 12.133V2h6.5a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1H7v10.207l-1.124-1.024a.508.508 0 1 0-.684.752L7.46 14H.5a.5.5 0 0 0 0 1zM14 6.5a.5.5 0 0 1-.5.5H10V6h3.5a.5.5 0 0 1 .5.5m-13 0a.5.5 0 0 0 .5.5H5V6H1.5a.5.5 0 0 0-.5.5" clip-rule="evenodd"></path></svg>'},1855:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M.5 1a.5.5 0 0 0 0 1h7.04L5.192 4.138a.508.508 0 1 0 .684.752L7 3.867V14H.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1H8V3.793l1.124 1.024a.508.508 0 0 0 .684-.752L7.54 2h6.96a.5.5 0 0 0 0-1zM1 9.5a.5.5 0 0 1 .5-.5H5v1H1.5a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 0-.5-.5H10v1h3.5a.5.5 0 0 0 .5-.5" clip-rule="evenodd"></path></svg>'},7568:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.54.54 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.54.54 0 0 1 .738 0" clip-rule="evenodd"></path></svg>'},5477:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 2.707v1.45a.5.5 0 0 1-1 0V1h3.05a.5.5 0 1 1 0 1H2.707L8 7.29 13.293 2H11.95a.5.5 0 1 1 0-1H15v3.156a.5.5 0 0 1-1 0v-1.45L8.707 7.999l5.29 5.289v-1.55a.5.5 0 1 1 1 0V15H11.84a.5.5 0 1 1 0-1h1.456L8 8.705 2.704 14h1.453a.5.5 0 1 1 0 1H1v-3.263a.5.5 0 0 1 1 0v1.553l5.293-5.292z" clip-rule="evenodd"></path></svg>'},2717:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.54 1H14v13H7.46l2.348-2.138a.508.508 0 1 0-.684-.752L8 12.134V9H7v3.206l-1.124-1.022a.508.508 0 1 0-.685.751L7.46 14H1V1zm0 0L5.192 3.138a.508.508 0 1 0 .684.752L7 2.867V6h1V2.794l1.124 1.023a.508.508 0 0 0 .684-.752zM0 1a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1z" clip-rule="evenodd"></path></svg>'},4072:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 1v13H1V7.46l2.138 2.348a.508.508 0 0 0 .752-.684L2.867 8H6V7H2.794l1.023-1.124a.508.508 0 0 0-.752-.685L1 7.46V1zm0-1a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm-1.867 7L11.11 5.876a.508.508 0 1 1 .752-.684L14 7.54l-2.065 2.268a.508.508 0 0 1-.751-.684L12.206 8H9V7z" clip-rule="evenodd"></path></svg>'},2943:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.54.54 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.54.54 0 0 1-.738 0" clip-rule="evenodd"></path></svg>'},3377:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M9.124 12.11 8 13.133V2h6.5a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1H7v11.207l-1.124-1.024a.508.508 0 1 0-.684.752L7.46 15l2.348-2.138a.508.508 0 1 0-.684-.752M13.5 7a.5.5 0 0 0 0-1H10v1zm-12 0a.5.5 0 0 1 0-1H5v1z" clip-rule="evenodd"></path></svg>'},1769:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M5.876 3.89 7 2.867V14H.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1H8V2.794l1.124 1.023a.508.508 0 0 0 .684-.752L7.54 1 5.192 3.138a.508.508 0 0 0 .684.752M1.5 9a.5.5 0 0 0 0 1H5V9zm12 0a.5.5 0 0 1 0 1H10V9z" clip-rule="evenodd"></path></svg>'},8081:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.5 14a.5.5 0 0 0 0-1h-6l3.953-3.459a.5.5 0 0 0-.658-.752L8 11.234V1.5a.5.5 0 0 0-1 0v9.734L4.206 8.789a.5.5 0 0 0-.659.752L7.5 13h-6a.5.5 0 0 0 0 1z" clip-rule="evenodd"></path></svg>'},8710:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 0a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 1 0V.5a.5.5 0 0 0-.5-.5M0 7.5c0 .291.231.527.516.527h3.508L2.527 9.6a.535.535 0 0 0 0 .746.51.51 0 0 0 .73 0L6 7.5 3.257 4.654a.51.51 0 0 0-.73 0 .535.535 0 0 0 0 .746l1.497 1.573H.516A.52.52 0 0 0 0 7.5m15 0a.52.52 0 0 1-.516.527h-3.508L12.473 9.6a.535.535 0 0 1 0 .746.51.51 0 0 1-.73 0L9 7.5l2.743-2.846a.51.51 0 0 1 .73 0 .535.535 0 0 1 0 .746l-1.497 1.573h3.508c.285 0 .516.236.516.527" clip-rule="evenodd"></path></svg>'},2491:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1 13.5a.5.5 0 0 0 1 0v-6l3.459 3.953a.5.5 0 0 0 .752-.658L3.766 8H13.5a.5.5 0 0 0 0-1H3.766l2.445-2.794a.5.5 0 1 0-.752-.659L2 7.5v-6a.5.5 0 0 0-1 0z" clip-rule="evenodd"></path></svg>'},9566:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 1.5a.5.5 0 0 0-1 0v6L9.541 3.547a.5.5 0 1 0-.752.658L11.234 7H1.5a.5.5 0 0 0 0 1h9.734l-2.445 2.794a.5.5 0 1 0 .752.659L13 7.5v6a.5.5 0 0 0 1 0z" clip-rule="evenodd"></path></svg>'},3593:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1.5 1a.5.5 0 0 0 0 1h6L3.547 5.459a.5.5 0 1 0 .658.752L7 3.766V13.5a.5.5 0 0 0 1 0V3.766l2.794 2.445a.5.5 0 1 0 .659-.752L7.5 2h6a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path></svg>'},8056:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M15 7.5a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 .5-.5M7.5 0a.52.52 0 0 0-.527.516v3.508L5.4 2.527a.535.535 0 0 0-.746 0 .51.51 0 0 0 0 .73L7.5 6l2.846-2.743a.51.51 0 0 0 0-.73.535.535 0 0 0-.746 0L8.027 4.024V.516A.52.52 0 0 0 7.5 0m0 15a.52.52 0 0 1-.527-.516v-3.508L5.4 12.473a.535.535 0 0 1-.746 0 .51.51 0 0 1 0-.73L7.5 9l2.846 2.743a.51.51 0 0 1 0 .73.535.535 0 0 1-.746 0l-1.573-1.497v3.508A.52.52 0 0 1 7.5 15" clip-rule="evenodd"></path></svg>'},9238:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.146 13.847a.486.486 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 8.26zm0-5a.485.485 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 3.26z" clip-rule="evenodd"></path></svg>'},4064:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .54.54 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.54.54 0 0 1 0 .738" clip-rule="evenodd"></path></svg>'},2838:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},5447:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14.994 2.243A1.375 1.375 0 0 0 13.625 1h-7.25l-.132.006A1.375 1.375 0 0 0 5 2.375v1.75h.917v-1.75l.007-.082a.46.46 0 0 1 .451-.376h7.25l.082.007a.46.46 0 0 1 .376.451v7.25l-.007.082a.46.46 0 0 1-.451.376h-1.738V11h1.738l.132-.006A1.375 1.375 0 0 0 15 9.625v-7.25zM9.625 5h-7.25C1.615 5 1 5.616 1 6.375v7.25C1 14.385 1.616 15 2.375 15h7.25c.76 0 1.375-.616 1.375-1.375v-7.25C11 5.615 10.384 5 9.625 5M2.4 6h7.2c.22 0 .4.201.4.45v7.1c0 .248-.18.45-.4.45H2.4c-.22 0-.4-.201-.4-.45v-7.1c0-.249.18-.45.4-.45M4 8h4v1H4zm4 3H4v1h4z" clip-rule="evenodd"></path></svg>'},9869:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1.5 11a.5.5 0 0 0 .5-.5V2h8.5a.5.5 0 0 0 0-1H2a1 1 0 0 0-1 1v8.5a.5.5 0 0 0 .5.5M5 4h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m0 1v9h9V5z" clip-rule="evenodd"></path></svg>'},2046:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.227 1.312c-.404-.404-1.045-.417-1.432-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431zm-8.114 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402z" clip-rule="evenodd"></path><path fill="#000" d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z"></path></svg>'},4548:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 0a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm0 1H4a3 3 0 0 0-2.995 2.824L1 4v8a3 3 0 0 0 2.824 2.995L4 15h8a3 3 0 0 0 2.995-2.824L15 12V4a3 3 0 0 0-2.824-2.995zM8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clip-rule="evenodd"></path></svg>'},8547:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 0A3.5 3.5 0 0 1 11 3.5V6h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V3.5A3.5 3.5 0 0 1 7.5 0M5 6h5V3.5a2.5 2.5 0 0 0-2.336-2.495L7.5 1a2.5 2.5 0 0 0-2.495 2.336L5 3.5zm6 1H3v8h9V7zm-3.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},1993:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 1.914 6.475 2.94a.5.5 0 1 1-.707-.707L8 0l2.157 2.157a.5.5 0 0 1-.707.707l-.95-.95V7.5h5.586l-1.1-1.1a.5.5 0 1 1 .706-.708L16 8l-2.232 2.232a.5.5 0 1 1-.707-.707L14.086 8.5H8.5v5.586l1.025-1.025a.5.5 0 1 1 .707.707L8 16l-2.308-2.308a.5.5 0 1 1 .707-.707l1.101 1.1V8.5H1.914l.95.95a.5.5 0 0 1-.707.707L0 8l2.232-2.232a.5.5 0 1 1 .707.707L1.914 7.5H7.5z" clip-rule="evenodd"></path></svg>'},3387:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 8.002a.5.5 0 0 1-1 0V1H1v12.003h3.5a.5.5 0 1 1 0 1H1a1 1 0 0 1-1-1V1A1 1 0 0 1 .044.706.498.498 0 0 1 .5 0H11a1 1 0 0 1 1 1zm2.218 1.486a.5.5 0 0 0-.708 0l-5.657 5.658a.5.5 0 0 0 .708.707l5.657-5.658a.5.5 0 0 0 0-.707M11 9.928c.376 0 .794.041 1.23.141l-.871.871a5 5 0 0 0-.359-.012c-1 0-2.731.297-3.83 2 .313.486.677.857 1.062 1.14l-.676.676A6.1 6.1 0 0 1 6 12.928c1.333-2.334 3.5-3 5-3m0 5c-.219 0-.472-.014-.746-.054l-.824.825a5.6 5.6 0 0 0 1.57.23c1.5 0 3.667-.667 5-3a6 6 0 0 0-1.804-1.998l-.684.684c.478.299.936.721 1.319 1.313-1.1 1.704-2.831 2-3.831 2M2.5 3.502A.5.5 0 0 1 3 3h6a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path></svg>'},3662:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5"></path></svg>'},711:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 16"><path fill="#000" d="M7 15V0h1v15zM0 2h4v1H1v9h3v1H0zM11 13h4V2h-4v1h3v9h-3z"></path></svg>'},2597:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 16"><path fill="#000" fill-rule="evenodd" d="M3 1v3H2V0h11v4h-1V1zM2 11h1v3h9v-3h1v4H2zM15 8H0V7h15z" clip-rule="evenodd"></path></svg>'},9044:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M6 6.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0zM9.5 6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M11 0H5a1 1 0 0 0-1 1v2H.5a.5.5 0 0 0 0 1h1.6l.81 11.1a1 1 0 0 0 .995.9h8.19a1 1 0 0 0 .995-.9L13.9 4h1.6a.5.5 0 0 0 0-1H12V1a1 1 0 0 0-1-1m0 3V1H5v2zm1.895 1h-9.79l.8 11h8.19z" clip-rule="evenodd"></path></svg>'},119:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 0a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm0 1H4a3 3 0 0 0-2.995 2.824L1 4v8a3 3 0 0 0 2.824 2.995L4 15h8a3 3 0 0 0 2.995-2.824L15 12V4a3 3 0 0 0-2.824-2.995zM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8" clip-rule="evenodd"></path></svg>'},1334:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M16 3.5a3.5 3.5 0 1 0-7 0V6H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2V3.5l.005-.164A2.5 2.5 0 0 1 12.5 1l.164.005A2.5 2.5 0 0 1 15 3.5a.5.5 0 0 0 1 0M9 7H3v8h9V7H9m-1.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},914:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="m8 0 8 6-8 6-8-6zM1.887 6 8 10.82 14.113 6 8 1.18zM0 9.81.563 9 8 14.775 15.437 9l.563.81L8 16z" clip-rule="evenodd"></path></svg>'},5508:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></path></svg>'},9572:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl9pbl9ub25lPC90aXRsZT4NCiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0MS4wMDAwMDAsIC0xOTIuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDE0MC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iOTIiIGhlaWdodD0iNzIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzZBNkE2QSIgcG9pbnRzPSI0NiA0OCAzMS44OTMxNTM5IDU1LjQxNjQwNzkgMzQuNTg3MzIxOCAzOS43MDgyMDM5IDIzLjE3NDY0MzYgMjguNTgzNTkyMSAzOC45NDY1NzcgMjYuMjkxNzk2MSA0NiAxMiA1My4wNTM0MjMgMjYuMjkxNzk2MSA2OC44MjUzNTY0IDI4LjU4MzU5MjEgNTcuNDEyNjc4MiAzOS43MDgyMDM5IDYwLjEwNjg0NjEgNTUuNDE2NDA3OSI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},6663:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2ZhZGU8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2MS4wMDAwMDAsIC0xNTAuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDQuMDAwMDAwLCA5OC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3Qgb3BhY2l0eT0iMC4xMDAwMDAwMDEiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiM1MjUyNTIiIHg9IjI4IiB5PSIyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjQ4Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsPSIjMzYzNjM2IiB4PSIwIiB5PSIwIiB3aWR0aD0iNjQiIGhlaWdodD0iNDgiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY0LDAgTDY0LDQ4IEwwLDQ4IEwwLDAgTDY0LDAgWiBNNjMsMSBMMSwxIEwxLDQ3IEw2Myw0NyBMNjMsMSBaIiBmaWxsPSIjNkE2QTZBIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},8686:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX3B1c2g8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTI3MC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAyMTguMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5MiIgaGVpZ2h0PSI3MiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTIsMCBMOTIsNzIgTDAsNzIgTDAsMCBMOTIsMCBaIE05MSwzNyBMMSwzNyBMMSw3MSBMOTEsNzEgTDkxLDM3IFogTTQ2LDQ0IEw1Niw1NCBMNTAuMTY2NjY2Nyw1NCBMNTAuMTY2NjY2Nyw2NCBMNDEuODMzMzMzMyw2NCBMNDEuODMzMzMzMyw1NCBMMzYsNTQgTDQ2LDQ0IFoiIGZpbGw9IiM2QTZBNkEiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},9244:t=>{"use strict";t.exports=o},6245:t=>{"use strict";t.exports=l},4108:t=>{"use strict";t.exports=i},6884:t=>{"use strict";t.exports=d},1496:t=>{"use strict";t.exports=a},1888:t=>{"use strict";t.exports=s},4321:t=>{"use strict";t.exports=n},9298:t=>{"use strict";t.exports=r},5562:t=>{"use strict";t.exports=u},4337:t=>{"use strict";t.exports=c}},e={};function p(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,p),n.exports}p.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return p.d(e,{a:e}),e},p.d=(t,e)=>{for(var o in e)p.o(e,o)&&!p.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},p.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),p.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var h={};return(()=>{"use strict";p.r(h),p.d(h,{CanvasPane:()=>Ji,ColumnLayoutBuilder:()=>cn,ColumnLayoutItemSetting:()=>Cs,ColumnLayoutService:()=>Xr,CommonLayoutItemSetting:()=>Wa,CommonTransformSetting:()=>_a,DEFAULT_ROW_LAYOUT_SETTING:()=>pn,DropArea:()=>Ve,FixedLayoutItemSetting:()=>es,FixedLayoutService:()=>Gr,FlowLayoutItemSetting:()=>fs,FlowLayoutService:()=>Ur,FlowLayoutSetting:()=>Bs,GLOBAL_DRAGGING_CLASS_NAME:()=>vt,GLOBAL_H5_DRAGGING_CLASS_NAME:()=>It,GLOBAL_RESIZING_CLASS_NAME:()=>Mt,GridLayoutBuilder:()=>Da,GridLayoutItemSetting:()=>ks,GridLayoutService:()=>Dr,GridLayoutSetting:()=>Gs,LIMITED_BOUNDARY_CLASS_NAME:()=>xt,LayoutBuilder:()=>on,LayoutEntry:()=>no,LayoutItemInBuilder:()=>Po,PageRenderer:()=>Qr,RowLayoutBuilder:()=>jn,RowLayoutItemSetting:()=>Ps,RowLayoutService:()=>Er,SectionRendererInBuilder:()=>Io,ShapeL:()=>Wt,ShapeRect:()=>Zt,Toolbar:()=>kt,WidgetRendererInBuilder:()=>to,addItemToLayout:()=>V,bindDragHandler:()=>St,bindResizeHandler:()=>Pt,getLabelOfGridTab:()=>kn,getRootLayoutId:()=>B,sectionMenuItems:()=>be,withRnd:()=>id});var t=p(9244),e=p(4108),o=p(4321);const i=t.lodash.assign({},{gridSize:1}),n=t.lodash.assign({},{order:0},{lockParent:!1,lockLayout:!1,autoProps:{}});var a=p(1496),s=p(4651),l=p.n(s),r=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const d=e=>{const o=window.SVG,{className:i}=e,n=r(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:a,src:l()},n)):t.React.createElement("svg",Object.assign({className:a},n))};var u=p(1888);const c=t.React.createContext({}),g=(0,u.withBuilderTheme)(o.Tooltip),m=window.jimuConfig.isInBuilder?g:o.Tooltip,y=[{name:"flip",options:{fallbackPlacements:["top","right"]}}];class f extends t.React.PureComponent{constructor(){super(...arguments),this.select=t=>{if(t.stopPropagation(),this.props.onClick){const{parentRef:e}=this.contextProps;this.props.onClick({layoutId:this.contextProps.layoutId,layoutItem:this.contextProps.layoutItem,clientRect:e&&e.getBoundingClientRect()},t),this.contextProps.onItemClick(this.props.uid)}},this.handleDoubleClick=t=>{t.stopPropagation()},this.handleMouseEnter=t=>{t.stopPropagation(),this.props.onMouseEnter&&this.props.onMouseEnter({layoutId:this.contextProps.layoutId,layoutItem:this.contextProps.layoutItem,clientRect:null},t)},this.handleMouseLeave=t=>{t.stopPropagation(),this.props.onMouseLeave&&this.props.onMouseLeave({layoutId:this.contextProps.layoutId,layoutItem:this.contextProps.layoutItem,clientRect:null},t)}}componentDidUpdate(){const t=this.getValue(this.props.visible,this.contextProps),e=this.getValue(this.props.disabled,this.contextProps);t&&!e||this.contextProps.onItemUnSelected(this.props.uid)}componentWillUnmount(){this.contextProps.onItemUnSelected(this.props.uid)}getValue(t,e){return"function"==typeof t?t(e):t}getStyle(){const{theme:e}=this.contextProps;return t.css`
      cursor: pointer;
      width: 32px;
      min-height: 32px;
      display: flex;
      justify-content: flex-start;
      user-select: none;
      background: ${e.ref.palette.neutral[400]};

      &:hover {
        background: ${e.ref.palette.neutral[500]};
      }
      &.selected {
        background: ${e.sys.color.primary.main};
      }

      &.disabled,
      &.no-action {
        cursor: default;
        &:hover {
          background: ${e.ref.palette.neutral[400]};
        }
      }
      &.disabled {
        .jimu-btn {
          cursor: default;
        }
        .jimu-btn svg, .toolbar-label {
          color: ${e.ref.palette.neutral[800]} !important;
        }
      }

      &.msg {
        width: auto;
        font-size: 12px;
        color: ${e.ref.palette.black};
        letter-spacing: 0.33px;
        text-align: center;
        padding: 0 8px;
      }

      .toolbar-group & {
        justify-content: flex-start;
      }

      .popper {
        border: 1px solid ${e.ref.palette.neutral[900]};
      }

      .toolbar-label {
        color: ${e.ref.palette.black};
      }
    `}separatorStyle(){const{theme:e}=this.contextProps;return this.props.isInGroup?t.css`
        width: 100%;
        height: 1px;
        background-color: ${e.ref.palette.neutral[600]};
        align-self: center;
      `:t.css`
      div.toolbar-item + &,
      div.toolbar-group + & {
        display: block;
      }
      display: none;
      width: 1px;
      height: 30px;
      border-left: 1px solid ${e.ref.palette.neutral[600]};
      align-self: center;
    `}tooltipStyle(){const{theme:e}=this.contextProps;return t.css`
      border: none;

      .tooltip {
        color: ${e.ref.palette.black};
        background-color: ${e.ref.palette.neutral[600]};
        border-color: ${e.ref.palette.neutral[400]};
      }
    `}createButton({textContent:e,iconContent:i,tooltip:n,isDisabled:a,noAction:s,isChecked:l,rotate:r,iconSize:d,autoFlipIcon:u,ref:c}){const p=e?"":n,h=a?{title:p}:{},g=(0,t.jsx)(o.Button,Object.assign({"aria-label":e||n,ref:c,className:"px-0 w-100 text-left",type:"tertiary",size:"sm",icon:i&&!e,role:"menuitem",onClick:a||s?null:this.select,disabled:a,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onDoubleClick:this.handleDoubleClick,"data-extname":this.props.extName},h),i&&(0,t.jsx)(o.Icon,{className:(0,t.classNames)("tool-item-icon",{checked:l}),icon:i,rotate:r,size:d,color:this.contextProps.theme.ref.palette.black,autoFlip:u}),e&&(0,t.jsx)("span",{className:"toolbar-label text-nowrap"},e));return a?g:(0,t.jsx)(m,{placement:"bottom",title:p,modifiers:y,css:this.tooltipStyle()},g)}render(){const{icon:e,autoFlipIcon:i,label:n,size:a,checked:s,disabled:l,visible:r,rotate:d,settingPanel:u,title:p,uid:h,widgetId:g,className:m,seperator:y}=this.props;if(y)return(0,t.jsx)(c.Consumer,null,(e=>(this.contextProps=e,(0,t.jsx)("div",{"data-testid":"toolbarSeparator",css:this.separatorStyle()}))));const f=null==this.props.onClick,v=a||16,I=u;return(0,t.jsx)(c.Consumer,null,(a=>{if(this.contextProps=a,g&&a.layoutItem.widgetId!==g)return null;let c="";"function"==typeof p?c=p(a):"string"==typeof p&&(c=p);const y=u&&a.activeItem===h&&a.toggleOn,x=y||this.getValue(s,a),b=this.getValue(l,a),w=this.getValue(r,a),S=this.getValue(n,a),C=this.getValue(e,a);return null==r||w?(0,t.jsx)("div",{className:(0,t.classNames)("toolbar-item",m,{selected:x,disabled:b,msg:S,"no-action":f}),css:this.getStyle()},!I&&this.createButton({textContent:S,iconContent:C,tooltip:c,isDisabled:b,noAction:f,isChecked:x,rotate:d,iconSize:v,autoFlipIcon:i,ref:null}),I&&(0,t.jsx)(t.React.Fragment,null,this.createButton({textContent:S,iconContent:C,tooltip:c,isDisabled:b,noAction:f,isChecked:x,rotate:d,iconSize:v,autoFlipIcon:i,ref:t=>{this.reference=t}}),(0,t.jsx)(o.Popper,{placement:"bottom-start",reference:this.reference,open:y,disablePortal:!0},(0,t.jsx)("div",{css:t.css`
                          display: flex;
                          pointer-events: all;
                          background-color: ${a.theme.ref.palette.white};
                          border-radius: 2px;
                          box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.2);
                        `,className:"d-flex"},y&&(0,t.jsx)(I,Object.assign({},a)))))):null}))}}const v=()=>{},I=window.jimuConfig.isInBuilder?g:o.Tooltip;class x extends t.React.PureComponent{constructor(e){super(e),this.togglePopToolItems=t=>{t&&t.stopPropagation(),this.contextProps.onItemClick(this.props.uid)},this.onItemClick=(e,o)=>{const{parentRef:i}=this.contextProps;e.onClick(Object.assign(Object.assign({},o),{clientRect:i.getBoundingClientRect()})),t.lodash.defer((()=>{this.dropdownBtnRef.current.focus()}))},this.handleDoubleClick=t=>{t.stopPropagation()},this.dropdownBtnRef=t.React.createRef()}getBaseStyle(){const{theme:e}=this.contextProps;return t.css`
      cursor: pointer;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: ${e.ref.palette.neutral[400]};

      &:hover {
        background-color: ${e.ref.palette.neutral[500]} !important;
      }
    `}getValue(t,e){return"function"==typeof t?t(e):t}createToolItem(e,o,i){return e.onClick||e.seperator?(0,t.jsx)(f,Object.assign({key:i,uid:`${this.props.uid}_${i+1}`,isInGroup:!0},e,{onClick:()=>{this.onItemClick(e,o)}})):null}getGroupMenu(e,i){const{theme:n}=this.contextProps;return e?(0,t.jsx)(o.Icon,{rotate:e.rotate,icon:e.icon,size:e.size||16,color:n.ref.palette.black}):i[0].icon?(0,t.jsx)(o.Icon,{icon:i[0].icon,size:i[0].size||16,color:n.ref.palette.black}):(0,t.jsx)(f,Object.assign({uid:`${this.props.uid}_0`,onClick:v},i[0]))}tooltipStyle(){const{theme:e}=this.contextProps;return t.css`
      border: none;

      .tooltip {
        color: ${e.ref.palette.black};
        background-color: ${e.ref.palette.neutral[600]};
        border-color: ${e.ref.palette.neutral[400]};
      }
    `}render(){const{tools:e,uid:i}=this.props;return e&&0!==e.length?(0,t.jsx)(c.Consumer,null,(n=>{this.contextProps=n;const{visible:a,caret:s=!0,title:l}=e[0],r=this.getValue(a,n);if(void 0!==a&&!r)return null;const d=e.filter((t=>{const{visible:e}=t,o=this.getValue(e,n);return void 0===e||o}));if(0===d.length)return null;if(1===d.length)return(0,t.jsx)(f,Object.assign({uid:`${i}_0`},d[0]));let c;d.some((t=>{const{checked:e}=t;if(this.getValue(e,n))return c=t,!0}));let p="";return"function"==typeof l?p=l(n):"string"==typeof l&&(p=l),(0,t.jsx)("div",{className:"toolbar-group",css:this.getBaseStyle()},(0,t.jsx)(o.Dropdown,{direction:"down",size:"sm",className:s?"px-1":"",isOpen:n.toggleOn&&n.activeItem===i,toggle:this.togglePopToolItems},(0,t.jsx)(I,{placement:"bottom",title:p,css:this.tooltipStyle()},(0,t.jsx)(o.DropdownButton,{icon:!0,arrow:s,type:"tertiary",size:"sm",ref:this.dropdownBtnRef,css:t.css`
                      .caret-icon {
                        color: ${n.theme.ref.palette.neutral[1e3]};
                        margin-left: 0.25rem;
                      }
                    `,onDoubleClick:this.handleDoubleClick},this.getGroupMenu(c,d))),(0,t.jsx)(o.DropdownMenu,{className:`p-0 ${window.jimuConfig.isInBuilder?u.Theme2GlobalStyleClassName:""}`,css:t.css`min-width: 5rem;`},d.map(((t,e)=>this.createToolItem(t,n,e))))))})):null}}var b;!function(t){t[t.BringForward=0]="BringForward",t[t.SendBackward=1]="SendBackward",t[t.BringToFront=2]="BringToFront",t[t.SendToBack=3]="SendToBack"}(b||(b={}));const w=3;var S,C;function R(t,e){var o,i,n;if(!e)return null;const{layoutId:a,layoutItemId:s}=e;return null===(n=null===(i=null===(o=t.layouts)||void 0===o?void 0:o[a])||void 0===i?void 0:i.content)||void 0===n?void 0:n[s]}function T(e,o,i){var n,a,s,l,r,d,u,c,p,h;const{layoutId:g}=e,m=o.layouts[g];switch(null===(n=null==m?void 0:m.parent)||void 0===n?void 0:n.type){case t.LayoutParentType.View:{const t=o.views[m.parent.id],e=o.sections[t.parent];return 1===(null===(s=null===(a=null==e?void 0:e.parent)||void 0===a?void 0:a[i])||void 0===s?void 0:s.length)?e.parent[i][0]:(null===(r=null===(l=null==e?void 0:e.parent)||void 0===l?void 0:l[i])||void 0===r?void 0:r.length)>1?T(e.parent[i][0],o,i):null}case t.LayoutParentType.Widget:{const t=o.widgets[m.parent.id];return 1===(null===(u=null===(d=null==t?void 0:t.parent)||void 0===d?void 0:d[i])||void 0===u?void 0:u.length)?t.parent[i][0]:(null===(p=null===(c=null==t?void 0:t.parent)||void 0===c?void 0:c[i])||void 0===p?void 0:p.length)>1?T(t.parent[i][0],o,i):null}case t.LayoutParentType.Screen:{const t=o.screens[m.parent.id];return null===(h=o.screenGroups[t.parent].parent)||void 0===h?void 0:h[i]}default:return null}}function M(t,e,o,i,n=!1){let a=L(t,e,o,i,n),s=i;if(a||(a=L(t,e,o,t.mainSizeMode,n),s=t.mainSizeMode),a)return A(t,a.layoutId,s)}function A(e,o,i){var n;let a=e.layouts[o];for(;(null==a?void 0:a.parent)&&[t.LayoutParentType.Screen,t.LayoutParentType.View,t.LayoutParentType.Widget].includes(a.parent.type);){const t=T({layoutId:o},e,i);o=null==t?void 0:t.layoutId,a=e.layouts[o]}switch(null===(n=null==a?void 0:a.parent)||void 0===n?void 0:n.type){case t.LayoutParentType.Dialog:return{type:t.ContainerType.Dialog,id:a.parent.id};case t.LayoutParentType.Page:return{type:t.ContainerType.Page,id:a.parent.id};case t.LayoutParentType.Header:return{type:t.ContainerType.Header,id:"header"};case t.LayoutParentType.Footer:return{type:t.ContainerType.Footer,id:"footer"}}}function P(t,e,o){return t?t[e]||t[o]:null}function L(e,o,i,n,a=!0){var s,l,r,d,u;switch(i){case t.LayoutItemType.ScreenGroup:{const t=null===(s=e.screenGroups[o].parent)||void 0===s?void 0:s[n],i=R(e,t);return a||!(null==i?void 0:i.isPending)?t:null}case t.LayoutItemType.Section:case t.LayoutItemType.Widget:{let s;if(i===t.LayoutItemType.Widget&&(s=e.widgets[o]),i===t.LayoutItemType.Section&&(s=e.sections[o]),1===(null===(r=null===(l=null==s?void 0:s.parent)||void 0===l?void 0:l[n])||void 0===r?void 0:r.length)){const t=s.parent[n][0],o=R(e,t);return a||!(null==o?void 0:o.isPending)?t:null}if((null===(u=null===(d=null==s?void 0:s.parent)||void 0===d?void 0:d[n])||void 0===u?void 0:u.length)>1){const o=s.parent[n][0],i=e.layouts[o.layoutId];if(null==i?void 0:i.parent)return L(e,i.parent.id,t.LayoutItemType.Widget,n,a)}}}return null}!function(t){t.Auto="auto",t[t.Normal=0]="Normal",t[t.BoundaryDropArea=10]="BoundaryDropArea",t[t.DragMoveTip=20]="DragMoveTip",t[t.HandlerTools=30]="HandlerTools",t[t.DraggingItem=40]="DraggingItem"}(S||(S={})),function(t){t.Auto="AUTO",t.Stretch="STRETCH",t.Custom="CUSTOM"}(C||(C={}));function j(t){return/^-?\d*(\.\d+)?%$/.test(t)}function z(t,e){return null==(null==t?void 0:t[e])?null:"string"==typeof t[e]?t[e]:function(t){const e=parseFloat(t);return!isNaN(e)&&isFinite(e)}(t[e])?`${Math.round(parseFloat(t[e]))}px`:null}function N(t,e){return parseFloat(`${t}`)*e/100}(0,t.createSelector)([t=>t.appConfig.mainSizeMode,t=>t.browserSizeMode,(e,o)=>{var i,n,a,s,l;let r;if(e.browserSizeMode===e.appConfig.mainSizeMode)r=!0;else{let s;(null===(i=o.layouts)||void 0===i?void 0:i[e.browserSizeMode])?s=e.browserSizeMode:(null===(n=o.layouts)||void 0===n?void 0:n[e.appConfig.mainSizeMode])&&(s=e.appConfig.mainSizeMode);const l=null===(a=o.layouts)||void 0===a?void 0:a[s],d=A(e.appConfig,l,s);if((null==d?void 0:d.type)===t.ContainerType.Header)r=null!=e.appConfig.header.layout[e.browserSizeMode];else if((null==d?void 0:d.type)===t.ContainerType.Footer)r=null!=e.appConfig.footer.layout[e.browserSizeMode];else if((null==d?void 0:d.type)===t.ContainerType.Dialog){r=null!=e.appConfig.dialogs[d.id].layout[e.browserSizeMode]}else if((null==d?void 0:d.type)===t.ContainerType.Page){r=null!=e.appConfig.pages[d.id].layout[e.browserSizeMode]}}if(r&&(null===(s=o.layouts)||void 0===s?void 0:s[e.browserSizeMode])){const t=o.layouts[e.browserSizeMode];return e.appConfig.layouts[t]}const d=null===(l=o.layouts)||void 0===l?void 0:l[e.appConfig.mainSizeMode];return e.appConfig.layouts[d]}],((t,e,o)=>({mainSizeMode:t,browserSizeMode:e,layout:o}))),(0,t.createSelector)([(t,e)=>{var o,i,n;const{layoutId:a,layoutItemId:s}=e;return null===(n=null===(i=null===(o=t.appConfig.layouts)||void 0===o?void 0:o[a])||void 0===i?void 0:i.content)||void 0===n?void 0:n[s]},(e,o)=>{var i,n,a,s,l,r;const{layoutId:d,layoutItemId:u}=o,c=null===(a=null===(n=null===(i=e.appConfig.layouts)||void 0===i?void 0:i[d])||void 0===n?void 0:n.content)||void 0===a?void 0:a[u];if((null==c?void 0:c.type)===t.LayoutItemType.Widget&&c.widgetId){const t=e.appConfig.widgets[c.widgetId];return null!==(r=null===(l=null===(s=null==t?void 0:t.manifest)||void 0===s?void 0:s.properties)||void 0===l?void 0:l.watchViewportVisibility)&&void 0!==r&&r}return!1},t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.selection},t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.animationPreview},t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.hoverPreview},(t,e)=>e.layoutId],((t,e,o,i,n,a)=>{var s;if(!t)return{layoutItem:null,selected:!1};let l=!1;const r=null!==(s=t.isPending)&&void 0!==s&&s;o&&(l=o.layoutId===a&&o.layoutItemId===t.id);const d={selected:l,watchViewportVisibility:e,layoutItem:r?null:t,autoScroll:l?o.autoScroll:void 0};if(l&&(null==i?void 0:i.layoutInfo)){const{layoutId:e,layoutItemId:o}=i.layoutInfo;d.animationPreview=e===a&&o===t.id,d.playMode=d.animationPreview?i.playMode:null,d.previewId=d.animationPreview?i.id:null}else if(l&&(null==n?void 0:n.layoutInfo)){const{layoutId:e,layoutItemId:o}=n.layoutInfo;d.hoverPreview=e===a&&o===t.id,d.previewId=d.hoverPreview?n.id:null}return d})),(0,t.createSelector)([(e,o)=>{var i,n,a;const{layoutId:s,layoutItemId:l}=o,r=null===(a=null===(n=null===(i=e.appConfig.layouts)||void 0===i?void 0:i[s])||void 0===n?void 0:n.content)||void 0===a?void 0:a[l];if((null==r?void 0:r.type)===t.LayoutItemType.Widget&&r.widgetId)return e.appConfig.widgets[r.widgetId]},(e,o)=>{var i,n,a,s;const{layoutId:l,layoutItemId:r}=o,d=null===(a=null===(n=null===(i=e.appConfig.layouts)||void 0===i?void 0:i[l])||void 0===n?void 0:n.content)||void 0===a?void 0:a[r];if((null==d?void 0:d.type)===t.LayoutItemType.Widget&&!d.widgetId)return null===(s=d.setting)||void 0===s?void 0:s.placeholderStyle},(e,o)=>{var i,n,a;const{layoutId:s,layoutItemId:l}=o,r=null===(a=null===(n=null===(i=e.appConfig.layouts)||void 0===i?void 0:i[s])||void 0===n?void 0:n.content)||void 0===a?void 0:a[l];if((null==r?void 0:r.type)===t.LayoutItemType.Widget&&r.widgetId)return e.widgetsRuntimeInfo[r.widgetId]},(e,o)=>{var i,n,a;const{layoutId:s,layoutItemId:l}=o,r=null===(a=null===(n=null===(i=e.appConfig.layouts)||void 0===i?void 0:i[s])||void 0===n?void 0:n.content)||void 0===a?void 0:a[l];if((null==r?void 0:r.type)===t.LayoutItemType.Widget&&!r.widgetId)return e.widgetsState[r.widgetId]},(e,o)=>{var i,n;const{layoutId:a}=o,s=null===(i=e.appConfig.layouts)||void 0===i?void 0:i[a];if((null===(n=s.parent)||void 0===n?void 0:n.type)===t.LayoutParentType.Widget){const t=s.parent.id,o=e.appConfig.widgets[t];return/widgets\/common\/controller\/?/.test(o.uri)}return!1}],((e,o,i,n,a)=>{var s,l,r,d,u,c,p,h,g,m,y,f,v,I,x,b;const w=null===(l=null===(s=null==e?void 0:e.manifest)||void 0===s?void 0:s.properties)||void 0===l?void 0:l.supportInlineEditing;return{hasEmbeddedLayout:(null===(d=null===(r=null==e?void 0:e.manifest)||void 0===r?void 0:r.properties)||void 0===d?void 0:d.hasEmbeddedLayout)&&Object.keys(null!==(u=e.layouts)&&void 0!==u?u:{}).length>0,supportInlineEditing:w,supportRepeat:null===(p=null===(c=null==e?void 0:e.manifest)||void 0===c?void 0:c.properties)||void 0===p?void 0:p.supportRepeat,isClassLoaded:null!==(h=null==i?void 0:i.isClassLoaded)&&void 0!==h&&h,isInlineEditing:w&&(null==i?void 0:i.isInlineEditing),isInController:a,useDragHandler:null!==(y=null===(m=null===(g=null==e?void 0:e.manifest)||void 0===g?void 0:g.properties)||void 0===m?void 0:m.useDragHandler)&&void 0!==y&&y,widgetStyle:null!=e?e.style:o,canCrossLayoutBoundary:null===(v=null===(f=null==e?void 0:e.manifest)||void 0===f?void 0:f.properties)||void 0===v?void 0:v.canCrossLayoutBoundary,hasExtension:(null===(x=null===(I=null==e?void 0:e.manifest)||void 0===I?void 0:I.extensions)||void 0===x?void 0:x.length)>0,widgetJson:e,widgetId:null==e?void 0:e.id,isFunctionalWidget:(null===(b=null==e?void 0:e.manifest)||void 0===b?void 0:b.widgetType)!==t.WidgetType.Layout,widgetState:n}}));function k(){var e,o;return null!==(o=null===(e=(0,t.getAppStore)().getState().appContext)||void 0===e?void 0:e.isRTL)&&void 0!==o&&o}function $(){var e,o;return(null===(e=null===window||void 0===window?void 0:window.jimuConfig)||void 0===e?void 0:e.isBuilder)?null===(o=(0,t.getAppStore)().getState().appStateInBuilder)||void 0===o?void 0:o.browserSizeMode:(0,t.getAppStore)().getState().browserSizeMode}function O(t,e,o){const i=null==o?void 0:o[t],n="width"===t?"left":"top",a="width"===t?"right":"bottom";if(!i)return null!=e[t]?C.Custom:null!=e[n]&&null!=e[a]?C.Stretch:C.Auto;if(!0===i)return null!=e[n]&&null!=e[a]?C.Stretch:C.Auto;switch(i){case C.Auto:return C.Auto;case C.Stretch:return C.Stretch;default:return C.Custom}}var E=function(t,e,o,i){return new(o||(o=Promise))((function(n,a){function s(t){try{r(i.next(t))}catch(t){a(t)}}function l(t){try{r(i.throw(t))}catch(t){a(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,l)}r((i=i.apply(t,e||[])).next())}))};function B(){if(a.utils.getCurrentDialogId())return a.utils.getCurrentDialogRootLayoutId();switch(a.utils.getActivePagePart()){case t.PagePart.Header:return a.utils.getHeaderRootLayoutId();case t.PagePart.Footer:return a.utils.getFooterRootLayoutId();default:return a.utils.getCurrentPageRootLayoutId()}}function D(o,i){if(window.jimuConfig.isBuilder){(0,e.getAppConfigAction)(o).exec(),e.builderAppSync.publishChangeSelectionToApp(i)}else(0,t.getAppStore)().dispatch(t.appActions.layoutChanged(o,i))}function F(o,i){var n,s;const l=(0,e.getAppConfigAction)(),{layoutId:r,layoutItemId:d}=o;if(!(null===(s=null===(n=l.appConfig.layouts[r])||void 0===n?void 0:n.content)||void 0===s?void 0:s[d]))return;const u=l.appConfig.layouts[i].type;if(u===t.LayoutType.FlowLayout)!function(o,i){E(this,void 0,void 0,(function*(){var n,a,s;const l=(0,e.getAppConfigAction)(),{layoutId:r,layoutItemId:d,width:u,height:c}=o,p=l.duplicateLayoutItemToOtherLayout({layoutId:r,layoutItemId:d},i),h={layoutId:i,layoutItemId:p},g=null!==(a=null===(n=(0,t.getAppStore)().getState().appRuntimeInfo)||void 0===n?void 0:n.zoomScale)&&void 0!==a?a:1;l.adjustOrderOfItem(h,-1);const m=function(t,e,o){const i=window.parent.document.querySelector('iframe[name="_appWindow"]'),n=document.querySelectorAll(`div.flow-layout[data-layoutid="${t}"] > div.trail-container > div.builder-layout-item`);let a=-1,s=2;if(i&&n){const t=i.getBoundingClientRect();n.forEach(((e,o)=>{if(-1===a){const i=e.getBoundingClientRect();(i.top+t.top>=0||i.top+i.height+t.top>=0)&&(a=o+1)}})),s=Math.round(12*e*o/t.width)}return{colSpan:s,insertIndex:a}}(i,u,g);-1===m.insertIndex&&(m.insertIndex=(null===(s=l.appConfig.layouts[i].order)||void 0===s?void 0:s.length)||0);l.appConfig.layouts[r].type===t.LayoutType.FlowLayout?D(l.appConfig,h):G({layoutInfo:h},i,{left:0,top:0,width:u,height:c},{left:0,top:0,width:u,height:c},m.colSpan,m.insertIndex,l.appConfig).catch((t=>{console.error(t)}))}))}(o,i);else if(u===t.LayoutType.FixedLayout)!function(o,i,n=null){var s,l,r,d;const u=(0,e.getAppConfigAction)(),{layoutId:c,layoutItemId:p,width:h,height:g}=o,m=null===(l=null===(s=u.appConfig.layouts[c])||void 0===s?void 0:s.content)||void 0===l?void 0:l[p],y=m.bbox,f=u.duplicateLayoutItemToOtherLayout({layoutId:c,layoutItemId:p},i),v={layoutId:i,layoutItemId:f},I=null!==(d=null===(r=(0,t.getAppStore)().getState().appRuntimeInfo)||void 0===r?void 0:r.zoomScale)&&void 0!==d?d:1;n||(n=function(t){const e=window.parent.document.querySelector('div[data-layoutid="right-sidebar-left-layout"]'),o=window.parent.document.querySelector('iframe[name="_appWindow"]');let i,n,a,s,l;if(e&&o){const r=e.getBoundingClientRect(),d=o.getBoundingClientRect();if(n=d.left,a=d.top,s=d.width,l=d.height,t){if(i=(o.contentDocument||o.contentWindow.document).querySelector(`div.layout[data-layoutid="${t}"]`),i){const t=i.getBoundingClientRect();n+=t.left,a+=t.top,s=t.width,l=t.height}}return{left:n>=r.left?0:r.left-n,top:a>=r.top?0:r.top-a,width:s,height:l}}return null}(i));if(n){const t=n.width/I,e=n.height/I;u.editLayoutItemProperty(v,"bbox",a.utils.replaceBoundingBox(y,{left:0,top:0,right:0,bottom:0,width:Math.round(h),height:Math.round(g)},{width:t,height:e}))}u.editLayoutItemProperty(v,"setting.vCenter",!0).editLayoutItemProperty(v,"setting.hCenter",!0);const x=u.appConfig.layouts[v.layoutId].content[v.layoutItemId].bbox;u.editLayoutItemProperty(v,"bbox",x.set("left","50%").set("top","50%")),u.adjustOrderOfItem(v,-1),(0,t.getAppStore)().dispatch(t.appActions.layoutChanged(u.appConfig,v))}(o,i);else if(u===t.LayoutType.GridLayout){const[n,s]=function(o,i,n){var s,l;let r=(0,e.getAppConfigAction)(o);const{layoutId:d,layoutItemId:u}=i,c=o.layouts[n],p=(null===(s=c.content)||void 0===s?void 0:s[null===(l=c.setting)||void 0===l?void 0:l.rootItem])?c.setting.rootItem:null,h=r.duplicateLayoutItemToOtherLayout({layoutId:d,layoutItemId:u},n),g={layoutId:n,layoutItemId:h};if(!p)return r.editLayoutItemProperty(g,"gridType",t.GridItemType.Plain).editLayoutItemProperty(g,"bbox.width",100).editLayoutProperty(n,"setting.rootItem",h),[r.appConfig,g];const m={layoutId:n,layoutItemId:p},y=a.searchUtils.findLayoutItem(r.appConfig,m),f=y.gridType,v=e.LayoutServiceProvider.getService(r.appConfig,n),I=v.createBlankItem(r.appConfig,n);o=I[0];const x=I[1],b={layoutId:n,layoutItemId:x};return r=(0,e.getAppConfigAction)(o),r.editLayoutItemProperty(b,"gridType",f!==t.GridItemType.Row?t.GridItemType.Row:t.GridItemType.Column).editLayoutItemProperty(b,"children",[p,h]).editLayoutItemProperty(b,"bbox.width",100).editLayoutItemProperty(m,"bbox.width",50).editLayoutItemProperty(m,"parent",x).editLayoutItemProperty(g,"bbox.width",50).editLayoutItemProperty(g,"parent",x).editLayoutItemProperty(g,"gridType",t.GridItemType.Plain).editLayoutProperty(n,"setting.rootItem",x),[r.appConfig,g]}(l.appConfig,o,i);(0,t.getAppStore)().dispatch(t.appActions.layoutChanged(n,s))}else console.error(`unknown layout type: ${u}`)}function V(o,i,n){return E(this,void 0,void 0,(function*(){const s=i.layoutInfo;return i.id?yield function(t,o,i){return E(this,void 0,void 0,(function*(){var n;const s=(0,e.getAppConfigAction)(t);let l;const r=a.utils.getCurrentSizeMode();l=o.isFromCurrentSizeMode?r:a.searchUtils.getBrowserSizeModeByLayoutId(t,o.layoutInfo.layoutId);const d=a.searchUtils.findLayoutItem(s.appConfig,o.layoutInfo),u=s.moveLayoutItem(o.layoutInfo,i,l,r);return(null===(n=d.setting)||void 0===n?void 0:n.lockParent)&&s.editLayoutItemProperty(u,"setting.lockParent",!0),yield Promise.resolve({layoutInfo:u,updatedAppConfig:s.appConfig})}))}(o,i,n):s&&s.layoutId&&s.layoutItemId?yield function(t,o,i){return E(this,void 0,void 0,(function*(){const n=(0,e.getAppConfigAction)(t),s=a.utils.getCurrentSizeMode(),l=n.moveLayoutItem(o.layoutInfo,i,s,s),r=a.searchUtils.getWidgetIdThatUseTheLayoutId(t,i);return r&&H(t.widgets[r])&&n.editLayoutItemProperty(l,"setting.lockParent",!0),{layoutInfo:l,updatedAppConfig:n.appConfig}}))}(o,i,n):i.itemType===t.LayoutItemType.Section?yield function(t,o){return E(this,void 0,void 0,(function*(){const i=(0,e.getAppConfigAction)(t),n=i.addNewSectionToLayout(o);return{layoutInfo:{layoutId:o,layoutItemId:n},updatedAppConfig:i.appConfig}}))}(o,n):i.uri||i.itemId?yield function(t,o,i){return E(this,void 0,void 0,(function*(){e.appBuilderSync.publishIsBusyToBuilder(!0);const n=(0,e.getAppConfigAction)(t),s=yield n.addNewWidgetToLayout(i,{uri:o.uri,itemId:o.itemId}),l={layoutId:i,layoutItemId:s},r=a.searchUtils.getWidgetIdThatUseTheLayoutId(t,i);return r&&H(t.widgets[r])&&n.editLayoutItemProperty(l,"setting.lockParent",!0),e.appBuilderSync.publishIsBusyToBuilder(!1),{layoutInfo:l,updatedAppConfig:n.appConfig}}))}(o,i,n):yield function(t,o){return E(this,void 0,void 0,(function*(){const i=(0,e.getAppConfigAction)(t),n=i.addPlaceholderToLayout(o),s={layoutId:o,layoutItemId:n},l=a.searchUtils.getWidgetIdThatUseTheLayoutId(t,o);return l&&H(t.widgets[l])&&i.editLayoutItemProperty(s,"setting.lockParent",!0),{layoutInfo:s,updatedAppConfig:i.appConfig}}))}(o,n)}))}function H(e){var o,i,n,a,s,l,r;const d=null===(o=null==e?void 0:e.manifest)||void 0===o?void 0:o.widgetType,u=null!==(a=null===(n=null===(i=null==e?void 0:e.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.hasEmbeddedLayout)&&void 0!==a&&a,c=null!==(r=null===(l=null===(s=null==e?void 0:e.manifest)||void 0===s?void 0:s.properties)||void 0===l?void 0:l.lockChildren)&&void 0!==r&&r;return d!==t.WidgetType.Layout&&u&&c}function G(o,i,n,s,l,r,d){return E(this,void 0,void 0,(function*(){let u=(0,e.getAppConfigAction)(d);const c={name:"row",label:"row",uri:"widgets/layout/row/",icon:null,itemType:t.LayoutItemType.Widget,manifest:{widgetType:t.WidgetType.Layout,properties:{}}},p=yield V(u.appConfig,c,i),{updatedAppConfig:h,layoutInfo:g}=p,m=a.utils.replaceBoundingBox(null,s,n);u=(0,e.getAppConfigAction)(h),u.editLayoutItemProperty(g,"bbox",m).adjustOrderOfItem(g,r);const y=a.searchUtils.findLayoutItem(h,p.layoutInfo),f=h.widgets[y.widgetId],v=Object.keys(f.layouts)[0],I=f.layouts[v],x=a.searchUtils.findLayoutId(I,(0,t.getAppStore)().getState().browserSizeMode,h.mainSizeMode),b=t.i18n.getIntl().formatMessage({id:"block"}),w=t.appConfigUtils.getUniqueLabel(h,"widget",b);u.editWidgetProperty(f.id,"label",w).editLayoutItemProperty(g,"setting.heightMode","fixed").editLayoutItemProperty(g,"bbox.height",s.height+20).editLayoutProperty(x,"parent",{id:f.id,type:t.LayoutParentType.Widget});const S=yield V(u.appConfig,o,x),{layoutInfo:C,updatedAppConfig:R}=S;u=(0,e.getAppConfigAction)(R),u.editLayoutItemProperty(C,"setting.heightMode","fit").editLayoutItemProperty(C,"bbox.left",0).editLayoutItemProperty(C,"bbox.width",l).editLayoutItemProperty(C,"bbox.height",Math.round(Math.min(s.height,n.height))).adjustOrderOfItem(C,0),window.jimuConfig.isBuilder?((0,e.getAppConfigAction)(u.appConfig).exec(),e.builderAppSync.publishChangeSelectionToApp(C)):(0,t.getAppStore)().dispatch(t.appActions.layoutChanged(u.appConfig,C))}))}class W extends t.React.PureComponent{constructor(t){super(t),this.topLeft=this.updateFloatingArea.bind(this,1),this.topCenter=this.updateFloatingArea.bind(this,2),this.topRight=this.updateFloatingArea.bind(this,3),this.middleLeft=this.updateFloatingArea.bind(this,4),this.middleCenter=this.updateFloatingArea.bind(this,5),this.middleRight=this.updateFloatingArea.bind(this,6),this.bottomLeft=this.updateFloatingArea.bind(this,7),this.bottomCenter=this.updateFloatingArea.bind(this,8),this.bottomRight=this.updateFloatingArea.bind(this,9)}updateFloatingArea(o){const{layoutId:i,layoutItem:n}=this.props;!function(o,i,n){E(this,void 0,void 0,(function*(){const s=a.utils.getCurrentPageRootLayoutId();let l=(0,e.getAppConfigAction)();const r=yield V(l.appConfig,{layoutInfo:o},s);l=(0,e.getAppConfigAction)(r.updatedAppConfig),l.editLayoutItemProperty(r.layoutInfo,"bbox",{top:0,left:0,right:0,width:`${i.width}px`,height:`${i.height}px`}).editLayoutItemProperty(r.layoutInfo,"setting.isFloating",!0).editLayoutItemProperty(r.layoutInfo,"setting.lockParent",!0).editLayoutItemProperty(r.layoutInfo,"setting.floatingArea",n).adjustOrderOfItem(r.layoutInfo,null),window.jimuConfig.isBuilder?((0,e.getAppConfigAction)(l.appConfig).exec(),e.builderAppSync.publishChangeSelectionToApp(r.layoutInfo)):(0,t.getAppStore)().dispatch(t.appActions.layoutChanged(l.appConfig,r.layoutInfo))}))}({layoutId:i,layoutItemId:n.id},this.getSizeOfItem(),o)}getSizeOfItem(){const{layoutId:e,layoutItem:o}=this.props;let i;if(window.jimuConfig.isBuilder){const e=document.querySelector(`iframe[name="${t.APP_FRAME_NAME_IN_BUILDER}"]`);i=(null==e?void 0:e.contentDocument)||(null==e?void 0:e.contentWindow.document)}else i=document;const n=i.querySelector(`div.exb-rnd[data-layoutid="${e}"][data-layoutitemid="${o.id}"]`);return n?n.getBoundingClientRect():null}getStyle(){let e;e=window.jimuConfig.isBuilder?(0,u.getTheme)():(0,u.getTheme2)();const o=e.ref.palette.neutral[500];return t.css`
      background-color: ${e.ref.palette.neutral[400]};
      position: relative;
      padding: 4px;

      .content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 0;
        grid-column-gap: 0;
        border: 1px solid ${o};

        & > button {
          cursor: pointer;
          height: 50px;
          width: 50px;
          position: relative;
          border: none;
          background-color: transparent;
          border-radius: 0;

          &:after {
            content: '';
            position: absolute;
            left: 1px;
            top: 1px;
            right: 1px;
            bottom: 1px;
          }

          &:hover {
            &:after {
              outline: 1px solid ${e.sys.color.primary.dark};
              background: ${e.sys.color.primary.light};
            }
          }
        }

        & > button:nth-of-type(3n+1) {
          border-right: 1px solid ${o};
        }
        & > button:nth-of-type(3n) {
          border-left: 1px solid ${o};
        }
        & > button:nth-of-type(1), & > button:nth-of-type(2), & > button:nth-of-type(3) {
          border-bottom: 1px solid ${o};
        }
        & > button:nth-of-type(7), & > button:nth-of-type(8), & > button:nth-of-type(9) {
          border-top: 1px solid ${o};
        }

        .selected:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: ${e.sys.color.primary.light};
          border: 1px solid ${e.sys.color.primary.main};
        }
      }
    `}render(){const{area:e}=this.props;return(0,t.jsx)("div",{className:"floating-area-chooser d-flex",css:this.getStyle()},(0,t.jsx)("div",{className:"content w-100"},(0,t.jsx)(o.Button,{className:(0,t.classNames)("top-left",{selected:1===e}),onClick:this.topLeft}),(0,t.jsx)(o.Button,{className:(0,t.classNames)("top-center",{selected:2===e}),onClick:this.topCenter}),(0,t.jsx)(o.Button,{className:(0,t.classNames)("top-right",{selected:3===e}),onClick:this.topRight}),(0,t.jsx)(o.Button,{className:(0,t.classNames)("middle-left",{selected:4===e}),onClick:this.middleLeft}),(0,t.jsx)(o.Button,{className:(0,t.classNames)("middle-center",{selected:5===e}),onClick:this.middleCenter}),(0,t.jsx)(o.Button,{className:(0,t.classNames)("middle-right",{selected:6===e}),onClick:this.middleRight}),(0,t.jsx)(o.Button,{className:(0,t.classNames)("bottom-left",{selected:7===e}),onClick:this.bottomLeft}),(0,t.jsx)(o.Button,{className:(0,t.classNames)("bottom-center",{selected:8===e}),onClick:this.bottomCenter}),(0,t.jsx)(o.Button,{className:(0,t.classNames)("bottom-right",{selected:9===e}),onClick:this.bottomRight})))}}W.defaultProps={area:0};var _=p(9044),U=p.n(_),Y=p(3387),Z=p.n(Y),X=p(1993),q=p.n(X),J=p(9869),Q=p.n(J),K=p(4548),tt=p.n(K),et=p(119),ot=p.n(et),it=p(3303),nt=p.n(it);function at(){var e;let o=(0,t.getAppStore)().getState();return window.jimuConfig.isBuilder&&(o=o.appStateInBuilder),null===(e=o.appRuntimeInfo)||void 0===e?void 0:e.appMode}function st(){var e,o,i;let n=(0,t.getAppStore)().getState();return window.jimuConfig.isBuilder&&(n=n.appStateInBuilder),null!==(i=null===(o=null===(e=n.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i}function lt(e){var o,i,n;const a=(0,t.getAppStore)().getState().appConfig;if(e.type===t.LayoutItemType.Widget){const t=a.widgets[e.widgetId];return null!==(o=null==t?void 0:t.label)&&void 0!==o?o:""}if(e.type===t.LayoutItemType.Section){const t=a.sections[e.sectionId];return null!==(i=null==t?void 0:t.label)&&void 0!==i?i:""}if(e.type===t.LayoutItemType.ScreenGroup){const t=a.screenGroups[e.screenGroupId];return null!==(n=null==t?void 0:t.label)&&void 0!==n?n:""}return""}function rt(){return at()===t.AppMode.Design}function dt(){return at()===t.AppMode.Express}function ut(e){var o;let i=(0,t.getAppStore)().getState();if(window.jimuConfig.isBuilder&&(i=i.appStateInBuilder),e.type===t.LayoutItemType.Widget&&e.widgetId){const n=i.appConfig.widgets[e.widgetId];if(n)return(null===(o=n.manifest)||void 0===o?void 0:o.widgetType)!==t.WidgetType.Layout}return!1}const ct={icon:U(),title:t=>t.formatMessage("delete"),visible:e=>{const o=at();return(o===t.AppMode.Design||o===t.AppMode.Express)&&(!st()||ut(e.layoutItem))},onClick:t=>{const{layoutItem:o,layoutId:i}=t,n={layoutId:i,layoutItemId:o.id};e.appBuilderSync.publishConfirmDeleteToApp(n)}},pt={icon:Z(),title:t=>t.formatMessage("pendingTip"),visible:e=>at()===t.AppMode.Design&&!st()&&function(t){const{layoutItem:e}=t;return null!=e.widgetId||null!=e.sectionId||null!=e.screenGroupId}(e),onClick:t=>{const{layoutId:o,layoutItem:i}=t;!function(t){const o=(0,e.getAppConfigAction)();o.setLayoutItemToPending(t,!0),D(o.appConfig,null)}({layoutId:o,layoutItemId:i.id})}},ht={icon:nt(),title:t=>t.formatMessage("setting"),onClick:e=>{const{layoutId:o,layoutItem:i}=e;(0,t.getAppStore)().dispatch(t.appActions.selectionChanged({layoutId:o,layoutItemId:i.id}))}},gt={icon:q(),title:t=>{const{layoutItem:e}=t;return t.formatMessage("dragToMove",{label:lt(e)})},visible:()=>at()===t.AppMode.Design&&!st()},mt={icon:Q(),title:t=>t.formatMessage("duplicate"),visible:e=>{var o,i,n;if(st()||!rt())return!1;const{layoutId:a}=e,s=null===(o=(0,t.getAppStore)().getState().appConfig)||void 0===o?void 0:o.layouts[a];return"ROW"!==(null==s?void 0:s.type)||(null!==(n=null===(i=s.order)||void 0===i?void 0:i.length)&&void 0!==n?n:0)<12},onClick:t=>{const{layoutId:o,layoutItem:i}=t;!function(t){const{layoutId:o}=t,i=(0,e.getAppConfigAction)(),n={layoutId:o,layoutItemId:i.duplicateLayoutItemInSameLayout(t)};D(i.appConfig,n)}({layoutId:o,layoutItemId:i.id})}},yt={icon:tt(),title:t=>t.formatMessage("floating"),visible:o=>{if(st()||!rt())return!1;const{layoutItem:i,layoutId:n}=o;return function(o){var i,n,s,l,r;const{layoutId:d,layoutItemId:u}=o,c=(0,e.getAppConfigAction)().appConfig,p=null===(s=null===(n=null===(i=null==c?void 0:c.layouts)||void 0===i?void 0:i[d])||void 0===n?void 0:n.content)||void 0===s?void 0:s[u];if(!p||(null===(l=p.setting)||void 0===l?void 0:l.isFloating))return!1;const h=a.utils.getActivePagePart();if(h!==t.PagePart.Header&&h!==t.PagePart.Footer){const e=a.utils.getCurrentPageRootLayoutId();return(null===(r=c.layouts[e])||void 0===r?void 0:r.type)===t.LayoutType.FlowLayout&&d!==e}return!1}({layoutId:n,layoutItemId:i.id})},settingPanel:W,onClick:()=>{}},ft={icon:ot(),title:t=>t.formatMessage("sinking"),visible:t=>{var e,o;if(st()||!rt())return!1;const{layoutItem:i}=t;return null!==(o=null===(e=i.setting)||void 0===e?void 0:e.isFloating)&&void 0!==o&&o},onClick:o=>{const{layoutId:i,layoutItem:n,clientRect:s}=o;!function(o,i){E(this,void 0,void 0,(function*(){var n;const{layoutId:s,layoutItemId:l}=o,r=(0,e.getAppConfigAction)();let d,u,c=-1,p=2;if(window.jimuConfig.isBuilder){const e=document.querySelector(`iframe[name="${t.APP_FRAME_NAME_IN_BUILDER}"]`);u=(null==e?void 0:e.contentDocument)||(null==e?void 0:e.contentWindow.document)}else u=document;if(null==i){const t=u.querySelector(`div.exb-rnd[data-layoutid="${s}"][data-layoutitemid="${l}"]`);i=t?t.getBoundingClientRect():{width:100,height:100}}const h=u.querySelectorAll(`div.flow-layout[data-layoutid="${s}"] > div.trail-container > div.builder-layout-item:not(.floating)`);if((null==h?void 0:h.length)>1)for(let t=0;t<h.length;t++){const e=h[t];if(-1===c&&e.getAttribute("data-layoutitemid")!==l){const o=e.getBoundingClientRect();if(p=Math.round(12*i.width/o.width),a.utils.contains(o,i)){c=t,d=o;break}if(a.utils.intersects(o,i)){c=t+1,d=o;break}}}else{const e=t.utils.findViewportSize(a.utils.getAppConfig(),a.utils.getCurrentSizeMode());d={left:0,top:0,width:e.width,height:e.height},p=Math.round(12*i.width/e.width)}-1===c&&(c=(null===(n=r.appConfig.layouts[s].order)||void 0===n?void 0:n.length)||0),G({layoutInfo:o},s,d||i,i,p,c)}))}({layoutId:i,layoutItemId:n.id},s)}},vt="interactjs-dragging",It="exb-h5-dragging",xt="limited-drag-boundary";let bt=!1;function wt(e){const o=(0,u.getTheme2)(),i=document.createElement("div");return i.setAttribute("id","interact_dragging_placeholder"),i.style.position="fixed",i.style.left=`${e.left}px`,i.style.top=`${e.top}px`,i.style.width=`${e.width}px`,i.style.height=`${e.height}px`,i.style.backgroundColor=t.polished.rgba(o.sys.color.primary.dark,.2),i.style.zIndex="1100",i}function St(t,e){if(!t)return null;let o,i,n,s,l,r;const{layoutItemId:d,useDragHandler:u,onDragStart:c,onDragging:p,onDragEnd:h,draggableAtRuntime:g=!1}=e;return t.styleCursor(!1).draggable({inertia:!1,autoScroll:!1,allowFrom:u?".tool-drag-handler":void 0,ignoreFrom:".no-drag-action",listeners:{start:t=>{if(st()||!g&&!rt())return void t.interaction.stop();const e=t.target;if(e.classList.contains("no-drag-action"))return void(t.target._canDrag=!1);t.target._canDrag=!0,t.stopPropagation(),e.classList.add("is-dragging"),l=e.style.transform,n=t.rect;const r=t.target.parentNode;s=r.getBoundingClientRect(),document.body.classList.add(vt);const u=getComputedStyle(e,null).getPropertyValue("transform"),[p,h]=function(t=""){let e="0",o="0";if(t.includes("matrix(")){const i=t.substring(t.indexOf("(")+1,t.indexOf(")")).split(",");return e=`${parseInt(i[4],10)}px`,o=`${parseInt(i[5],10)}px`,[e,o]}if(t.includes("translate(")){const i=t.match(/translate\((.*)\s*,\s*(.*)\)/);return 3===i.length&&(e=i[1],o=i[2]),[e,o]}if(t.includes("translateX(")){const o=t.match(/translateX\((.*)\)/);2===o.length&&(e=o[1])}if(t.includes("translateY(")){const e=t.match(/translateY\((.*)\)/);2===e.length&&(o=e[1])}return[e,o]}(u);o=a.utils.isPercentage(p)?a.utils.fromRatio(p,n.width):parseFloat(p),i=a.utils.isPercentage(h)?a.utils.fromRatio(h,n.height):parseFloat(h),e.setAttribute("data-translatex",o),e.setAttribute("data-translatey",i),c&&c(d)},move:t=>{t.stopPropagation(),o+=t.dx,i+=t.dy;const e=t.target;if(!e.parentElement.classList.contains("d-none")){const a=t.client.x,d=t.client.y;if(!(a>=0&&a<=s.width&&d>=0&&d<=s.height)&&!r)return r=wt(n),r=document.body.appendChild(r),e.style.transform=l,void(e.style.visibility="hidden");const u=r||e;u.style.webkitTransform=u.style.transform=`translate(${Math.round(o)}px, ${Math.round(i)}px) translateZ(0)`,u.setAttribute("data-translatex",Math.round(o)),u.setAttribute("data-translatey",Math.round(i))}p&&p(d,o,i)},end:t=>{t.stopPropagation();const e=t.target;e.classList.remove("is-dragging"),document.body.classList.remove(vt),r&&(document.body.removeChild(r),r=null),e.style.visibility=null,e.style.transform=l,h&&h(d,o,i)}}})}function Ct(t){bt=t}function Rt(){return bt}var Tt=p(6245);const Mt="interactjs-resizing";let At=!1;function Pt(t,e){if(!t)return null;let o,i,n,s,l=null;const{layoutItemId:r,onResizeStart:d,onResizing:u,onResizeEnd:c,restrictEdges:p=!0}=e;return t.resizable({inertia:!1,edges:{top:".rnd-resize-top",left:a.utils.isRTL()?".rnd-resize-right":".rnd-resize-left",bottom:".rnd-resize-bottom",right:a.utils.isRTL()?".rnd-resize-left":".rnd-resize-right"},modifiers:[Tt.interact.modifiers.restrictEdges({outer:p?"parent":null}),Tt.interact.modifiers.restrictSize({min:{width:16,height:16}})],listeners:{start:t=>{t.stopPropagation(),o=0,i=0,n=0,s=0;const e=t.target.getBoundingClientRect();d&&d(r,e.width,e.height),document.body.classList.add(Mt)},move:t=>{t.stopPropagation();const e=t.deltaRect;o+=e.left,i+=e.top,n+=e.width,s+=e.height,l&&(cancelAnimationFrame(l),l=null),l=requestAnimationFrame((()=>{u&&u(r,o,i,n,s,t.shiftKey,t.speed),l=null}))},end:t=>{if(t.stopPropagation(),l&&(cancelAnimationFrame(l),l=null),c){const e=t.deltaRect;o+=e.left,i+=e.top,n+=e.width,s+=e.height,c(r,o,i,n,s,t.shiftKey)}document.body.classList.remove(Mt)}}})}function Lt(t){At=t}function jt(){return At}class zt extends t.React.PureComponent{constructor(){super(...arguments),this.state={activeItem:null},this.onItemClick=t=>{let e=this.state.toggleOn;e=t!==this.state.activeItem||!e,this.setState({activeItem:t,toggleOn:e})},this.onItemUnSelected=t=>{t===this.state.activeItem&&this.setState({activeItem:null,toggleOn:!1})}}getStyle(){const{theme:e}=this.props;return t.css`
      display: flex;
      pointer-events: all;
      border-radius: 2px;
      box-shadow: 0 2px 8px 1px rgba(0,0,0,0.20);
      height: 100%;
      margin: 5px 0;
      background: ${e.ref.palette.neutral[400]};

      .toolbar-item, .toolbar-item {
        .jimu-btn:focus, .jimu-btn:focus-visible {
          z-index: 1;
        }
      }

      .${vt} &,
      .${Mt} &,
      .${It} & {
        display: none;
      }
    `}reOrganizeTools(){const{tools:e}=this.props;if(a.utils.getCurrentSizeMode()===t.BrowserSizeMode.Small){const t=e.filter((t=>{let e;e=Array.isArray(t)?t[0]:t;const{visible:o,seperator:i=!1}=e,n="function"==typeof o?o(this.props):o;return!i&&(void 0===o||n)}));if(t.length>8){const t=e.slice(0,8),o=e.slice(8).map((t=>Object.assign(Object.assign({},t),{label:t.title}))),i=[{icon:l(),caret:!1},...o];return t.push(i),t}}return e}render(){const{tools:e,isLockLayout:o}=this.props;if(!e||0===e.length)return null;const i=this.reOrganizeTools(),{activeItem:n,toggleOn:a}=this.state;return(0,t.jsx)(c.Provider,{value:Object.assign(Object.assign({},this.props),{activeItem:n,toggleOn:a,onItemClick:this.onItemClick,onItemUnSelected:this.onItemUnSelected,isLockLayout:o})},(0,t.jsx)("div",{css:this.getStyle(),className:`layout-item-toolbar ${window.jimuConfig.isInBuilder?u.Theme2GlobalStyleClassName:""}`},i.map(((e,o)=>Array.isArray(e)?(0,t.jsx)(x,{uid:`${o}`,key:o,tools:e}):(0,t.jsx)(f,Object.assign({uid:`${o}`,key:o},e))))))}}const Nt=(0,t.createSelector)((t=>{var e,o,i;return null!==(i=null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i}),(t=>({isLockLayout:t}))),kt=t.ReactRedux.connect(Nt)(zt),$t={previousView:"Previous view",nextView:"Next view",originTL:"Top left as origin",originTR:"Top right as origin",originBL:"Bottom left as origin",originBR:"Bottom right as origin",alignLeft:"Align left",alignRight:"Align right",alignTop:"Align top",alignCenter:"Align center",alignHCenter:"Horizontal center",alignVCenter:"Vertical center",alignBottom:"Align bottom",alignStretch:"Align stretch",sendBackward:"Send backward",bringForward:"Bring forward",sendToBack:"Send to back",bringToFront:"Bring to front",zoomoutFixed:"Zoom out fixed",order:"Order",moveToLeft:"Move to left",moveToRight:"Move to right",moveToTop:"Move to top",moveToBottom:"Move to bottom",addView:"New view",duplicateScreen:"Duplicate screen",deleteScreen:"Delete screen",applyToFirstPanel:"Apply to the first panel",deleteView:"Delete view",duplicateView:"Duplicate view",insertABlock:"Insert block",insertAScreenGroup:"Insert screen group",moveup:"Move up",movedown:"Move down",chooseTemplate:"Choose a {type} template",chooseHeaderTemplate:"Choose a header template",chooseFooterTemplate:"Choose a footer template",dropWidgetToAdd:"Or drag a widget here",snapToLeft:"Snap to left",snapToTop:"Snap to top",snapToBottom:"Snap to bottom",snapToRight:"Snap to right",fullWidth:"Full width",fullHeight:"Full height",fullSize:"Full size",restoreSize:"Restore size",pendingTip:"Move to the pending list",setting:"Settings",dragToMove:"Drag to move {label}",lockLayout:"Lock position and size",unlockLayout:"Unlock position and size",editHeader:"Edit header",editFooter:"Edit footer",transform:"Transform",rotation:"Rotation",angle:"Angle",floating:"Pin",sinking:"Unpin",floatingArea:"Floating area",changeToAuto:"Change to auto",changeToCustom:"Change to custom",positionType:"Position type",sticky:"Sticky",fixed:"Fixed",flow:"Flow",stack:"Stack",fixedAtTop:"Floating at the top when scrolling",actNormal:"Act as normal widget",hideInDesignView:"Hide in design view",showInDesignView:"Show in design view",unlockGridItem:"Unlock this widget to reorganize its internal widgets.",lockGridItem:"Lock this widget.",splitHorizontally:"Split horizontally",splitVertically:"Split vertically"};class Ot extends t.React.PureComponent{constructor(){super(...arguments),this.formatMessage=(t,e)=>this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:$t[t]},e):$t[t]}getPositionStyle(){const{positionType:e}=this.props;return"left"===e?t.css`
        position: absolute;
        top: 0;
        left: 0;
      `:"center"===e?t.css`
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      `:t.css`
      position: absolute;
      top: 0;
      right: 0;
    `}getStyle(){const{size:e,builderTheme:o,rotate:i}=this.props;return t.css`
      body:not(.design-mode) & {
        display: none !important;
      }

      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      pointer-events: none;
      transform: ${i>0||i<0?`rotateZ(${i}deg)`:""} ;

      .content {
        ${this.getPositionStyle()};
        pointer-events: all;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 100ms;
        z-index: ${a.LayoutZIndex.HandlerTools};

        .menu-hint {
          background-color: ${o.ref.palette.neutral[400]};
          width: ${e}px;
          height: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          line-height: 10px;
        }

        .menu-content {
          display: none;
          height: ${e}px;
          transform: ${i>0||i<0?`rotateZ(${-i}deg)`:""} ;

          .tool-drag-handler {
            cursor: move;
          }

          .layout-item-toolbar {
            margin: 0;
          }
        }

        &:hover {
          /* height: ${e}px; */
          /* width: auto; */

          .menu-hint {
            display: none;
          }

          .menu-content {
            display: flex;
          }
        }
      }

    `}render(){const{builderTheme:e,menuItems:o,layoutId:i,layoutItem:n,className:a,onMouseEnter:s,onMouseLeave:l}=this.props;return(0,t.jsx)("div",{className:`widget-context-menu ${a}`,css:this.getStyle()},(0,t.jsx)("div",{ref:t=>this.ref=t,className:"content"},(0,t.jsx)("div",{className:"menu-hint"},(0,t.jsx)(d,{color:e.ref.palette.black,size:"m"})),(0,t.jsx)("div",{className:"menu-content",onMouseLeave:l,onMouseEnter:s},(0,t.jsx)(kt,{layoutId:i,layoutItem:n,theme:e,parentRef:this.ref,tools:o,formatMessage:this.formatMessage})),this.props.children))}}const Et=(0,t.injectIntl)(Ot),Bt=(t.React.createContext({viewOnly:!0}),t.React.createContext(!0),t.React.createContext(!0)),Dt=(t.React.createContext({isInView:!1,isInCurrentView:!1}),t.React.createContext("")),Ft=22.5;function Vt(t,e){const o=function(t){if(isNaN(t))return 0;const e=t%360;return e<0?e+360:e}(t+e);return o>=337.5||o<Ft||o>=157.5&&o<202.5?"ns-resize":o>=Ft&&o<67.5||o>=202.5&&o<247.5?"nesw-resize":o>=67.5&&o<112.5||o>=247.5&&o<292.5?"ew-resize":o>=112.5&&o<157.5||o>=292.5&&o<337.5?"nwse-resize":void 0}const Ht=9,Gt=t.css`
  width: ${Ht}px;
  height: ${Ht}px;
  background: transparent;
  position: absolute;
`;function Wt(e){const{pos:o}=e,i=t.React.useRef();return t.hooks.useEffectOnce((()=>{var t;const e=null!==(t=window.devicePixelRatio)&&void 0!==t?t:1;i.current.width=Ht*e,i.current.height=Ht*e;const n=i.current.getContext("2d");n&&(n.scale(e,e),n.strokeStyle="#444",n.fillStyle="#fff",n.lineWidth=2,a.utils.isRTL()?("tl"===o&&(n.translate(Ht,0),n.rotate(Math.PI/2)),"br"===o&&(n.translate(0,Ht),n.rotate(-Math.PI/2)),"bl"===o&&(n.translate(Ht,Ht),n.rotate(Math.PI))):("tr"===o&&(n.translate(Ht,0),n.rotate(Math.PI/2)),"br"===o&&(n.translate(Ht,Ht),n.rotate(Math.PI)),"bl"===o&&(n.translate(0,Ht),n.rotate(-Math.PI/2))),n.beginPath(),n.moveTo(1,1),n.lineTo(Ht-1,1),n.lineTo(Ht-1,Ht/3),n.lineTo(Ht/3,Ht/3),n.lineTo(Ht/3,Ht-1),n.lineTo(1,Ht-1),n.closePath(),n.stroke(),n.fill())})),(0,t.jsx)("canvas",{css:Gt,ref:i})}const _t=16,Ut=4,Yt=t.css`
  background: transparent;
  position: absolute;
`;function Zt(e){const{direction:o}=e,i=t.React.useRef();return t.hooks.useEffectOnce((()=>{var t;const e=null!==(t=window.devicePixelRatio)&&void 0!==t?t:1;"h"===o?(i.current.width=_t*e,i.current.height=Ut*e):(i.current.width=Ut*e,i.current.height=_t*e);const n=i.current.getContext("2d");n&&(n.scale(e,e),n.strokeStyle="#444",n.fillStyle="#fff",n.lineWidth=2,"h"===o?n.rect(1,1,_t-2,Ut-2):n.rect(1,1,Ut-2,_t-2),n.stroke(),n.fill())})),(0,t.jsx)("canvas",{css:Yt,ref:i})}const Xt=11,qt=16,Jt=10,Qt=e=>t.css`
  top: 0;
  left: 0;
  position: absolute;
  /* cursor: nwse-resize; */
  cursor: ${Vt(e,135)};
  .jimu-rtl & {
    /* cursor: nesw-resize; */
    cursor: ${Vt(e,225)};
  }
  > svg {
    position: absolute;
    top: 0;
    left: 0;
  }
`,Kt=e=>t.css`
  top: 0;
  right: 0;
  position: absolute;
  /* cursor: nesw-resize; */
  cursor: ${Vt(e,225)};
  .jimu-rtl & {
    /* cursor: nwse-resize; */
    cursor: ${Vt(e,315)};
  }
`,te=e=>t.css`
  bottom: 0;
  left: 0;
  position: absolute;
  /* cursor: nesw-resize; */
  cursor: ${Vt(e,45)};
  .jimu-rtl & {
    /* cursor: nwse-resize; */
    cursor: ${Vt(e,135)};
  }
`,ee=e=>t.css`
  bottom: 0;
  right: 0;
  position: absolute;
  /* cursor: nwse-resize; */
  cursor: ${Vt(e,315)};
  .jimu-rtl & {
    /* cursor: nesw-resize; */
    cursor: ${Vt(e,405)};
  }
`,oe=e=>t.css`
  height: ${10}px;
  left: ${Jt}px;
  right: ${Jt}px;
  top: 0px;
  position: absolute;
  /* cursor: ns-resize; */
  cursor: ${Vt(e,180)};

  canvas {
    left: 50%;
    top: 0;
    width: ${qt}px;
    height: ${4}px;
    margin-left: ${-8}px;
    margin-top: 1px;
  }
`,ie=e=>t.css`
  width: ${10}px;
  top: ${Jt}px;
  bottom: ${Jt}px;
  right: 0;
  position: absolute;
  /* cursor: ew-resize; */
  cursor: ${Vt(e,270)};

  canvas {
    top: 50%;
    right: 0;
    width: ${4}px;
    height: ${qt}px;
    margin-top: ${-8}px;
    margin-right: 1px;
  }
`,ne=e=>t.css`
  height: ${10}px;
  left: ${Jt}px;
  right: ${Jt}px;
  bottom: 0;
  position: absolute;
  /* cursor: ns-resize; */
  cursor: ${Vt(e,0)};

  canvas {
    left: 50%;
    bottom: 0;
    width: ${qt}px;
    height: ${4}px;
    margin-left: ${-8}px;
    margin-bottom: 1px;
  }
`,ae=e=>t.css`
  width: ${10}px;
  top: ${Jt}px;
  bottom: ${Jt}px;
  left: 0;
  position: absolute;
  /* cursor: ew-resize; */
  cursor: ${Vt(e,90)};

  canvas {
    top: 50%;
    left: 0;
    width: ${4}px;
    height: ${qt}px;
    margin-top: ${-8}px;
    margin-left: 1px;
  }
`;function se(e){const{rotation:o=0}=e,{top:i,right:n,bottom:s,left:l,topLeft:r,topRight:d,bottomRight:u,bottomLeft:c}=function(t){const{left:e=!0,top:o=!0,right:i=!0,bottom:n=!0}=t;return{top:o,right:i,bottom:n,left:e,topRight:o&&i,bottomRight:n&&i,bottomLeft:n&&e,topLeft:o&&e}}(e),p=t.css`
    width: ${Xt}px;
    height: ${Xt}px;
    padding: 1px;
    z-index: ${a.LayoutZIndex.HandlerTools};
  `;return(0,t.jsx)("div",{className:"w-100 h-100 action-area"},i&&(0,t.jsx)("span",{key:"2","data-testid":"top",className:"rnd-resize-top handle no-drag-action",css:oe(o)},(0,t.jsx)(Zt,{direction:"h"})),n&&(0,t.jsx)("span",{key:"4","data-testid":"right",className:"rnd-resize-right handle no-drag-action",css:ie(o)},(0,t.jsx)(Zt,{direction:"v"})),s&&(0,t.jsx)("span",{key:"6","data-testid":"bottom",className:"rnd-resize-bottom handle no-drag-action",css:ne(o)},(0,t.jsx)(Zt,{direction:"h"})),l&&(0,t.jsx)("span",{key:"8","data-testid":"left",className:"rnd-resize-left handle no-drag-action",css:ae(o)},(0,t.jsx)(Zt,{direction:"v"})),r&&(0,t.jsx)("span",{key:"1","data-testid":"topLeft",className:"rnd-resize-top rnd-resize-left handle no-drag-action",css:[p,Qt(o)]},(0,t.jsx)(Wt,{pos:"tl"})),d&&(0,t.jsx)("span",{key:"3","data-testid":"topRight",className:"rnd-resize-top rnd-resize-right handle no-drag-action",css:[p,Kt(o)]},(0,t.jsx)(Wt,{pos:"tr"})),u&&(0,t.jsx)("span",{key:"5","data-testid":"bottomRight",className:"rnd-resize-bottom rnd-resize-right handle no-drag-action",css:[p,ee(o)]},(0,t.jsx)(Wt,{pos:"br"})),c&&(0,t.jsx)("span",{key:"7","data-testid":"bottomLeft",className:"rnd-resize-bottom rnd-resize-left handle no-drag-action",css:[p,te(o)]},(0,t.jsx)(Wt,{pos:"bl"})))}var le=p(7568),re=p.n(le),de=p(2943),ue=p.n(de),ce=p(3662),pe=p.n(ce),he=p(5447),ge=p.n(he),me=p(2838),ye=p.n(me);function fe(e){let o=(0,t.getAppStore)().getState();return window.jimuConfig.isBuilder&&(o=o.appStateInBuilder),a.searchUtils.getSectionInfo(o,e.sectionId)}function ve(e){var o;const{navInfo:i,views:n,activeView:a}=null!=e?e:{};if(!i)return null==a?void 0:a.id;if(!i.useProgress)return i.currentViewId;const s=(null===(o=i.visibleViews)||void 0===o?void 0:o.length)>0?i.visibleViews:n,{currentIndex:l}=(0,t.getIndexFromProgress)(i.progress,s.length);return s[l]}const Ie={icon:ge(),title:t=>t.formatMessage("duplicateView"),visible:()=>at()===t.AppMode.Design&&!st(),onClick:o=>{const{layoutItem:i}=o;let n=ve(fe(i));if(!n){n=fe(i).views[0]}const a=(0,e.getAppConfigAction)(),s=a.duplicateView(n,i.sectionId,!0);a.exec(),t.jimuHistory.changeView(i.sectionId,s.id)}},xe={icon:ye(),title:t=>t.formatMessage("deleteView"),visible:e=>{if(at()!==t.AppMode.Design||st())return!1;const{layoutItem:o}=e,i=fe(o);if(!i)return!1;const{views:n}=i;return n&&n.length>1},onClick:o=>{const{layoutItem:i}=o,n=fe(i),{views:a}=n,s=ve(n);if(a.length>1){const n=a.indexOf(s);let l;l=n>0?a[n-1]:a[1],(0,e.getAppConfigAction)().removeView(s,i.sectionId).exec(),t.jimuHistory.changeView(o.layoutItem.sectionId,l)}}},be=[{icon:re(),autoFlipIcon:!0,size:10,title:t=>t.formatMessage("previousView"),onClick:e=>{const{layoutItem:o}=e,i=fe(o),{views:n}=i,a=ve(i),s=n.indexOf(a);s>0&&t.jimuHistory.changeView(o.sectionId,n[s-1])},disabled:t=>{const{layoutItem:e}=t,o=fe(e);if(!o)return!0;const{views:i}=o,n=ve(o);return i.indexOf(n)<=0}},{label:t=>{const{layoutItem:e}=t,o=fe(e);if(!o)return"";const{views:i}=o,n=ve(o);return`${Math.max(0,i.indexOf(n))+1} / ${i.length}`}},{icon:ue(),autoFlipIcon:!0,size:10,title:t=>t.formatMessage("nextView"),onClick:e=>{const{layoutItem:o}=e,i=fe(o),{views:n}=i,a=ve(i),s=n.indexOf(a);s>=0&&s<n.length-1&&t.jimuHistory.changeView(o.sectionId,n[s+1])},disabled:t=>{const{layoutItem:e}=t,o=fe(e);if(!o)return!0;const{views:i}=o,n=ve(o),a=i.indexOf(n);return a<0||a>=i.length-1}},{icon:pe(),title:t=>t.formatMessage("addView"),visible:()=>at()===t.AppMode.Design&&!st(),onClick:o=>{const{layoutItem:i}=o,n=(0,e.getAppConfigAction)(),a=n.addView(i.sectionId);n.exec(),t.jimuHistory.changeView(i.sectionId,a)}},Ie,xe,{seperator:!0}],we=[Ie,xe],Se=[mt,yt,ft,pt,ct],Ce=[].concat(be,Se);let Re=0;function Te(i){t.ReactRedux.useSelector((e=>e.extensionsInfo[t.extensionSpec.ExtensionPoints.ContextTool]));const{layoutId:n,layoutItem:a,placement:s="top-start",refElement:l,modifiers:r,formatMessage:d,builderTheme:u,toolItems:c=[],showDefaultTools:p=!0}=i;if(!l)return null;const h=a.type===t.LayoutItemType.Section;let g=function({layoutId:e,layoutItem:o,refElement:i}){const{widgetId:n}=o;if(!n)return[];const a=t.ExtensionManager.getInstance().getExtensions(t.extensionSpec.ExtensionPoints.ContextTool),s=i.getBoundingClientRect();return a.filter((t=>t.widgetId===n)).map((t=>({widgetId:n,icon:t.getIcon(),title:t.getTitle.bind(t),onClick:t.onClick.bind(t),checked:t.checked&&t.checked.bind(t),disabled:t.disabled?"function"==typeof t.disabled?t.disabled.bind(t):t.disabled:null,visible:t.visible?"function"==typeof t.visible?t.visible.bind(t):t.visible:null,settingPanel:t.getSettingPanel({layoutId:e,layoutItem:o,clientRect:s}),index:t.index,extName:t.name}))).sort(((t,e)=>t.index-e.index))}(i);const m=h?Ce:Se;let y=p?[...c,...m]:c;if(dt()){e.placeholderService.getPlaceholderInfo((0,t.getAppStore)().getState().appConfig,{layoutId:n,layoutItemId:a.id})&&(y=[ct])}return g.length>0?y.length>0&&(g=[].concat(y,{seperator:!0},g)):g=y,0===g.length?null:(0,t.jsx)(o._Popper,{placement:s,reference:l,open:!0,modifiers:r,version:Re++,trapFocus:!1,autoFocus:!1,css:t.css`
        background: transparent;
        box-shadow: none;
      `},(0,t.jsx)("div",null,(0,t.jsx)(kt,{layoutId:n,layoutItem:a,theme:u,parentRef:l,tools:g,formatMessage:d})))}var Me=p(8547),Ae=p.n(Me),Pe=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Le=e=>{const o=window.SVG,{className:i}=e,n=Pe(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:a,src:Ae()},n)):t.React.createElement("svg",Object.assign({className:a},n))};class je extends t.React.PureComponent{constructor(o){super(o),this.formatMessage=(t,e)=>null!=this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:$t[t]},e):$t[t],this.isMac=()=>{var t,e;return"macOS"===(null===(e=null===(t=window.jimuUA)||void 0===t?void 0:t.os)||void 0===e?void 0:e.name)},this.copyItem=()=>{const{layoutId:e,layoutItem:o,lockLayout:i}=this.props;if(!i){const i=this.ref.getBoundingClientRect(),n=i.width,a=i.height;(0,t.getAppStore)().dispatch(t.appActions.clipboardChanged({layoutId:e,width:n,height:a,layoutItemId:o.id}))}},this.deleteSelectedItem=()=>{const{selected:t,layoutId:o,layoutItem:i,lockLayout:n,isFunctionalWidget:a,isDesignMode:s}=this.props;if(t&&s&&(!n||a)){const t={layoutId:o,layoutItemId:i.id};e.appBuilderSync.publishConfirmDeleteToApp(t)}},this.state={selected:!1,updateIndex:0},this.screenGroupInfo="",this.isMac()?this.keyBindings={delete:this.deleteSelectedItem,backspace:this.deleteSelectedItem,"command+keyc":this.copyItem}:this.keyBindings={delete:this.deleteSelectedItem,backspace:this.deleteSelectedItem,"ctrl+keyc":this.copyItem}}componentDidMount(){let t;const e=this.screenGroupInfo.split(":");if(e.length>1){const o=e[0],i=e[1];t=document.querySelector(`div.builder-layout-item[data-layoutid="${o}"][data-layoutitemid="${i}"]`)}this.modifiers=[{name:"preventOverflow",enabled:!0,options:{boundary:null!=t?t:"viewport",altAxis:!0}},{name:"flip",enabled:!0,options:{boundary:null!=t?t:"viewport",fallbackPlacements:(0,o.getFallbackPlacementsModifier)(["top-start","bottom-start"],!0).options.fallbackPlacements}}],this.props.selected&&this.setState({selected:!0})}componentDidUpdate(t){this.scrollIntoView(),this.props.selected&&!t.isDesignMode&&this.props.isDesignMode&&this.setState({updateIndex:this.state.updateIndex+1})}doScroll(){const{layoutId:t,layoutItem:e}=this.props,o=document.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);null!=o&&o.scrollIntoView({behavior:"auto",block:"center"})}scrollIntoView(){var o,i;const{selected:n,autoScroll:a}=this.props;if(!n||!a)return;const{layoutId:s}=this.props;let l=!1,r=!1;const d=(0,e.getAppConfigAction)().appConfig,u=d.layouts[s];if((null===(o=u.parent)||void 0===o?void 0:o.type)===t.LayoutParentType.View){const e=d.views[u.parent.id];null!=(null==e?void 0:e.parent)&&(t.jimuHistory.changeView(e.parent,e.id),l=!0)}if((null===(i=u.parent)||void 0===i?void 0:i.type)===t.LayoutParentType.Screen){const e=d.screens[u.parent.id];if(null!=(null==e?void 0:e.parent)){const o=d.screenGroups[e.parent].screens.indexOf(e.id);(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(e.parent,o,!0)),r=!0}}l||r?t.lodash.defer((()=>{this.doScroll()})):this.doScroll()}getStyle(){const{isFunctionalWidget:e,isSection:o,selected:i,isBlock:n,rotate:s=0}=this.props,l=t.polished.rgba(this.pageContext.builderTheme.ref.palette.neutral[900],.6),r=this.pageContext.builderTheme.sys.color.primary.main,d=!e||o?"dashed":"solid";return t.css`
      .${It} &,
      .${vt} & {
        > .action-area {
          display: none !important;
        }
        > div.selected-tip {
          .tip-content {
            outline-color: ${l};
          }
        }
      }

      transform: ${s>0||s<0?`rotateZ(${s}deg)`:""};
      padding: inherit;
      position: absolute;
      left: 0;
      bottom: 0;
      top: 0;
      right: 0;
      z-index: ${i?a.LayoutZIndex.HandlerTools:"auto"};
      pointer-events: none;

      & > div.selected-tip {
        display: block;
        padding: inherit;
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
        pointer-events: none;
        .tip-content {
          height: 100%;
          padding: 1px;
          &:after {
            content: '';
            width: 100%;
            height: 100%;
            outline: ${n&&!i?"none":`1px ${d} ${l}`};
            display: block;
            outline-color: ${!e||o?l:"transparent"};
          }
        }
      }

      .exb-rnd.selected > & > div.selected-tip {
        display: block;
        .tip-content {
          &:after {
            outline-color: ${r};
          }
        }
      }

      & > .action-area {
        position: relative;
        .handle {
          position: absolute;
          pointer-events: all;
        }
      }

      .lock-layout-tip {
        background: ${this.pageContext.builderTheme.ref.palette.neutral[800]};
        border: 1px solid ${this.pageContext.builderTheme.ref.palette.neutral[600]};
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        width: 20px;
        height: 20px;
        position: absolute;
        left: -10px;
        top: -10px;

        svg {
          margin-bottom: 6px;
          margin-left: 4px;
        }
      }
    `}getKeyboardComponent(){return(0,t.jsx)(t.Keyboard,{bindings:this.keyBindings})}isResizable(){const{resizable:t=!0,selected:e,isExpressMode:o}=this.props;return e&&!this.pageContext.viewOnly&&!this.props.lockLayout&&!o&&t}showToolbar(){const{forbidToolbar:t,selected:e}=this.props;return!t&&!this.pageContext.viewOnly&&e}render(){return(0,t.jsx)(Dt.Consumer,null,(e=>(this.screenGroupInfo=e,(0,t.jsx)(a.PageContext.Consumer,null,(e=>{if(this.pageContext=e,!this.props.isDesignMode&&!this.props.isExpressMode)return null;const{layoutId:o,layoutItem:i,resizable:n=!0,draggable:a=!0,selected:s,toolItems:l,showDefaultTools:r,left:d,top:u,right:c,bottom:p,rotate:h,isDesignMode:g}=this.props,m=!a&&!n;return(0,t.jsx)("div",{"data-testid":"select-wrapper",ref:t=>this.ref=t,css:this.getStyle(),className:(0,t.classNames)("select-wrapper",{selected:s,"no-embed-layout":!this.props.hasEmbeddedLayout})},!e.viewOnly&&(0,t.jsx)("div",{className:"selected-tip"},(0,t.jsx)("div",{className:"tip-content"})),this.showToolbar()&&(0,t.jsx)(Te,{layoutId:o,layoutItem:i,refElement:this.ref,modifiers:this.modifiers,builderTheme:this.pageContext.builderTheme,formatMessage:this.formatMessage,toolItems:g?l:void 0,showDefaultTools:!!g&&r}),this.isResizable()&&(0,t.jsx)(se,{left:d,right:c,top:u,bottom:p,rotation:h,builderTheme:e.builderTheme}),m&&s&&(0,t.jsx)("div",{className:"lock-layout-tip rounded-circle"},(0,t.jsx)(Le,{size:"s",color:e.builderTheme.ref.palette.black})),s&&this.getKeyboardComponent())})))))}}const ze=(0,t.createSelector)([t=>{var e,o,i;return null!==(i=null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i},e=>e.appRuntimeInfo.appMode===t.AppMode.Design,e=>e.appRuntimeInfo.appMode===t.AppMode.Express,(t,e)=>{var o,i;return e.isSection?null===(i=null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.sectionNavInfos)||void 0===i?void 0:i[e.layoutItem.sectionId]:null}],((t,e,o,i)=>({lockLayout:t,isDesignMode:e,isExpressMode:o,sectionNavInfo:i}))),Ne=t.ReactRedux.connect(ze)((0,t.injectIntl)(je));function ke(i){const{layoutId:n,layoutItemId:s,sizemode:l,onSyncChange:r,className:d}=i,u=t.hooks.useTranslation(o.defaultMessages),c=t.React.useMemo((()=>u("syncPlaceholderTip",{sizeMode:u("largeScreenDevice")})),[u]),p=t.React.useMemo((()=>{const e=(0,t.getAppStore)().getState().appConfig;return a.searchUtils.getRootContainerInfoOfLayout(e,n,l)}),[n,l]),h=t.ReactRedux.useSelector((t=>{const o=e.placeholderService.getPlaceholderInfo(t.appConfig,{layoutId:n,layoutItemId:s});return o&&o.layoutInfo.layoutId!==n?o.id:null})),g=t.ReactRedux.useSelector((t=>{const e=t.browserSizeMode,o=t.appConfig.placeholderInfos,i=Object.keys(null!=o?o:{}).filter((t=>{var i;const n=o[t];return n.rootContainer.type===p.type&&n.rootContainer.id===p.id&&null==(null===(i=n.syncs)||void 0===i?void 0:i[e])})).map((t=>+t));return i.sort(),i.join(",")})),m=t.ReactRedux.useSelector((e=>{var o;return(null===(o=e.appInfo)||void 0===o?void 0:o.type)===t.AppType.Template})),y=t.ReactRedux.useSelector((e=>{var o;return(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design})),f=t.ReactRedux.useSelector((t=>t.appConfig.mainSizeMode)),v=t.React.useCallback((t=>{r(t.target.value)}),[r]);return m&&y&&l!==f?0===g.length&&null==h?null:(0,t.jsx)(o.Select,{size:"sm",value:h,placeholder:c,onChange:v,"aria-label":c,title:c,className:d,disabled:0===g.length},h>0&&(0,t.jsx)("option",{selected:!0,value:h},h),g.split(",").map((e=>(0,t.jsx)("option",{value:+e,key:e},e)))):null}var $e=p(9298);function Oe(e){if(e&&"function"==typeof e.getAttribute){const o=e.getAttribute("data-layoutid"),i=e.getAttribute("data-layoutitemid");if(o&&i)return function(e,o){var i,n,a,s,l,r;const d=(0,t.getAppStore)().getState(),{layouts:u,widgets:c}=d.appConfig,p=u[e],h=null===(i=null==p?void 0:p.content)||void 0===i?void 0:i[o];if(h){const i={layoutId:e,layoutItemId:o},u=function(e,o){var i,n,a;if(o.type===t.LayoutItemType.Widget){const t=o.widgetId;if(t)return null===(a=null===(n=null===(i=e.appConfig)||void 0===i?void 0:i.widgets)||void 0===n?void 0:n[t])||void 0===a?void 0:a.manifest}return null}(d,h);let p=null;return h.type===t.LayoutItemType.Widget&&h.widgetId&&(p=null===(n=c[h.widgetId])||void 0===n?void 0:n.uri),{itemType:h.type,layoutInfo:i,uri:p,manifest:u,rotation:null!==(r=null===(l=null===(s=null===(a=h.setting)||void 0===a?void 0:a.style)||void 0===s?void 0:s.transform)||void 0===l?void 0:l.rotate)&&void 0!==r?r:0}}}(o,i)}return null}function Ee(t,e){const o={};return o.width=Math.min(t.width,e.width),o.height=Math.min(t.height,e.height),o.left=Math.max(0,t.left),o.top=Math.max(0,t.top),o.left+o.width>e.width&&(o.left=e.width-o.width),o.top+o.height>e.height&&(o.top=e.height-o.height),o}function Be(e,o,i,n){var s,l;if((null==e?void 0:e.itemType)===t.LayoutItemType.ScreenGroup){const e=a.utils.getCurrentPageId(),o=a.utils.getAppConfig(),i=o.pages[e];return Object.keys(null!==(s=null==i?void 0:i.layout)&&void 0!==s?s:{}).some((e=>{const a=o.layouts[i.layout[e]];return a.type===t.LayoutType.FlowLayout&&a.id===n}))}let r=function(e,o){var i,n,a,s;if(!o)return!1;if(null!==(i=o.isFromCurrentSizeMode)&&void 0!==i&&!i)return!0;const l=o.layoutInfo;if(l){const o=(0,t.getAppStore)().getState(),{layouts:i}=o.appConfig,r=i[l.layoutId],d=null===(n=null==r?void 0:r.content)||void 0===n?void 0:n[l.layoutItemId];if(d){const o=null!==(s=null===(a=d.setting)||void 0===a?void 0:a.lockParent)&&void 0!==s&&s;if(r.type===t.LayoutType.FlowLayout||o)return l.layoutId===e}}return!0}(n,e);return r&&"function"==typeof o.isItemAccepted&&(r=o.isItemAccepted(e,null!==(l=i.isPlaceholder)&&void 0!==l&&l)),r}function De(t,e,o){let i,n,a,s;return(0,Tt.interact)(t).dropzone({accept:null!=o?o:".exb-rnd",checker:(t,o,n,a,s,l,r)=>{const{props:d,layoutId:u,pageContext:c,layoutContext:p}=e.current;return"none"!==getComputedStyle(s).pointerEvents&&(i=Oe(r),!c.viewOnly&&n&&!r.contains(s)&&Be(i,p,d,u))},ondragenter:t=>{const{props:o,layoutId:s,pageContext:l}=e.current;t.stopPropagation(),t.target.classList.add("drop-target"),s!==l.rootLayoutId&&t.target.classList.add("drop-active"),n=document.getElementById("interact_dragging_placeholder")||t.relatedTarget,a=t.dropzone.getRect(t.target),o.onDragEnter&&o.onDragEnter(i),o.onToggleDragoverEffect&&o.onToggleDragoverEffect(!0,i)},ondragleave:t=>{const{props:o}=e.current;t.stopPropagation(),t.target.classList.remove("drop-target"),t.target.classList.remove("drop-active"),n=null,a=null,s&&cancelAnimationFrame(s),o.onDragLeave&&o.onDragLeave(i),o.onToggleDragoverEffect&&o.onToggleDragoverEffect(!1,i)},ondropmove:t=>{const{props:o}=e.current;t.stopPropagation(),s&&cancelAnimationFrame(s),s=requestAnimationFrame((()=>{const e=t.dragEvent.rect,l=t.dragEvent._interaction.coords.cur.client,r=l.x-(null==a?void 0:a.left),d=l.y-(null==a?void 0:a.top);o.onDragOver&&o.onDragOver(i,n,a,{left:e.left-(null==a?void 0:a.left),top:e.top-(null==a?void 0:a.top),width:e.width,height:e.height,right:e.left-(null==a?void 0:a.left)+e.width,bottom:e.top-(null==a?void 0:a.top)+e.height},r,d,t.dragEvent.speed),s=null}))},ondrop:t=>{const{props:o}=e.current;if(t.stopPropagation(),t.target.classList.remove("drop-target"),t.target.classList.remove("drop-active"),o.onToggleDragoverEffect&&o.onToggleDragoverEffect(!1,i),s&&cancelAnimationFrame(s),o.onDrop){const e=t.dragEvent.rect;let n={left:e.left-a.left,top:e.top-a.top,width:e.width,height:e.height};n=Ee(n,{left:0,top:0,width:a.width,height:a.height}),n.right=n.left+n.width,n.bottom=n.top+n.height;const s=t.dragEvent._interaction.coords.cur.client,l=s.x-a.left,r=s.y-a.top;o.onDrop(i,a,n,l,r)}}})}function Fe(e,o){let i,n;const a=t.lodash.throttle((function(t,e,i){if(!t||isNaN(e)||isNaN(i))return;let a=200,s=100;const{props:l}=o.current;t.manifest.defaultSize&&(a=isNaN(t.manifest.defaultSize.width)?a:t.manifest.defaultSize.width,s=isNaN(t.manifest.defaultSize.height)?s:t.manifest.defaultSize.height);l.onDragOver&&l.onDragOver(t,null,n,{left:e-a/2-n.left,top:i-s/2-n.top,width:a,height:s,right:e-a/2-n.left+a,bottom:i-s/2-n.top+s},e-n.left,i-n.top)}),100);function s(){const{props:t,layoutId:n,layoutContext:a,pageContext:s}=o.current;if(s.viewOnly)return;const l=window.parent&&window.parent._dragging_widget_item?window.parent._dragging_widget_item:null;i&&i===l||(i=l,Be(i,a,t,n)&&(e.classList.add("drop-target"),t.onToggleDragoverEffect&&t.onToggleDragoverEffect(!0,i)))}function l(){if(!i)return!1;const{props:t,layoutId:e,pageContext:n,layoutContext:a}=o.current;return!n.viewOnly&&Be(i,a,t,e)}e.addEventListener("dragenter",(function(t){const{props:a}=o.current;if(t.stopPropagation(),t.preventDefault(),s(),!l())return;n=e.getBoundingClientRect(),i&&a.onDragEnter&&a.onDragEnter(i)})),e.addEventListener("dragleave",(function(t){const{props:n}=o.current;if(t.stopPropagation(),t.preventDefault(),e.classList.remove("drop-target"),e.classList.remove("drop-active"),!l())return;n.onDragLeave&&n.onDragLeave(i);n.onToggleDragoverEffect&&n.onToggleDragoverEffect(!1,i);i=null})),e.addEventListener("dragover",(function(t){const{layoutId:n,pageContext:r}=o.current;if(t.stopPropagation(),t.preventDefault(),s(),!l())return void(t.dataTransfer&&(t.dataTransfer.dropEffect="none"));t.dataTransfer&&(t.dataTransfer.dropEffect="copy");if(e.classList.contains("drop-target")){const{clientX:o,clientY:s}=t;e.classList.contains("drop-active")||n===r.rootLayoutId||e.classList.add("drop-active"),a(i,o,s)}})),e.addEventListener("drop",(function(t){if(t.stopPropagation(),e.classList.remove("drop-target"),e.classList.remove("drop-active"),document.documentElement.classList.remove(It),!l())return void(i=null);const{props:n}=o.current,{clientX:a,clientY:s}=t,r=e.getBoundingClientRect();let d=200,u=100;i.manifest.defaultSize&&(d=isNaN(i.manifest.defaultSize.width)?d:i.manifest.defaultSize.width,u=isNaN(i.manifest.defaultSize.height)?u:i.manifest.defaultSize.height);let c={width:d,height:u,left:a-d/2-r.left,top:s-u/2-r.top};c=Ee(c,{left:0,top:0,width:r.width,height:r.height}),c.right=c.left+c.width,c.bottom=c.top+c.height,n.onToggleDragoverEffect&&n.onToggleDragoverEffect(!1,i);n.onDrop&&n.onDrop(i,r,c,a-r.left,s-r.top);i=null}))}function Ve(e){const o=t.React.useRef(),i=t.ReactRedux.useSelector((t=>e.layouts[t.browserSizeMode])),n=t.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode===t.AppMode.Design)),s=t.React.useContext(a.PageContext),l=t.React.useContext(a.LayoutContext),r=t.React.useRef();r.current={props:e,layoutId:i,pageContext:s,layoutContext:l},t.React.useEffect((()=>{let t;return o.current&&(t=De(o.current,r)),()=>{t&&t.unset()}}),[]),t.React.useEffect((()=>{o.current&&Fe(o.current,r)}),[]);const{className:d,style:u,highlightDragover:c}=e,p=(0,t.classNames)("exb-drop-area d-flex",d);return(0,t.jsx)("div",{className:p,css:t.css`
      background: transparent;
      padding: inherit;
      pointer-events: ${n?"auto":"none !important"};

      & > .highlight-content {
        display: none;
        pointer-events: none;
        position: relative;
      }

      &.drop-target > .highlight-content {
        display: flex;
      }

      &.drop-active {
        background: ${t.polished.rgba(s.builderTheme.sys.color.primary.dark,.2)};
      }
    `,style:u,ref:t=>{o.current=t}},c&&(0,t.jsx)("div",{className:"w-100 highlight-content"},e.children))}var He=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Ge=e=>{const o=window.SVG,{className:i}=e,n=He(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:a,src:pe()},n)):t.React.createElement("svg",Object.assign({className:a},n))};var We=function(t,e,o,i){return new(o||(o=Promise))((function(n,a){function s(t){try{r(i.next(t))}catch(t){a(t)}}function l(t){try{r(i.throw(t))}catch(t){a(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,l)}r((i=i.apply(t,e||[])).next())}))};function _e(o){const i=(0,e.getAppConfigAction)();if(o.layoutInfo){const{layoutId:e,layoutItemId:n}=o.layoutInfo,a=i.appConfig.layouts[e].content[n];return!(a.type===t.LayoutItemType.Widget&&!a.widgetId)}return!(o.itemType===t.LayoutItemType.Widget&&o.manifest&&!o.uri)}function Ue(o,i){const n=(0,e.getAppConfigAction)();if(i.layoutInfo){const{layoutId:e,layoutItemId:a}=i.layoutInfo,s=n.appConfig.layouts[e].content[a];n.removeLayoutItem(i.layoutInfo,!1,!1),n.addContentToPlaceholder(o,s.type,s.type===t.LayoutItemType.Widget?s.widgetId:s.sectionId),t.lodash.defer((()=>{(0,t.getAppStore)().dispatch(t.appActions.layoutChanged(n.appConfig,o))}))}else i.itemType===t.LayoutItemType.Widget&&i.uri?Ze(o,i):i.itemType===t.LayoutItemType.Section&&Ye(o)}function Ye(o){const{layoutId:i,layoutItemId:n}=o,a=(0,e.getAppConfigAction)(),s=a.createSection();a.addContentToPlaceholder(o,t.LayoutItemType.Section,s.id),t.lodash.defer((()=>{(0,t.getAppStore)().dispatch(t.appActions.layoutChanged(a.appConfig,{layoutId:i,layoutItemId:n}))}))}function Ze(o,i){return We(this,void 0,void 0,(function*(){const{layoutId:n,layoutItemId:a}=o,s=(0,e.getAppConfigAction)(),l=yield s.createWidget({uri:i.uri,itemId:i.itemId});s.addContentToPlaceholder(o,t.LayoutItemType.Widget,l.id),t.lodash.defer((()=>{(0,t.getAppStore)().dispatch(t.appActions.layoutChanged(s.appConfig,{layoutId:n,layoutItemId:a}))}))}))}const Xe=t.css`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  right: 0;
  display: flex;
  z-index: 0;
`;class qe extends t.React.PureComponent{constructor(o){super(o),this.toggleModal=o=>{o.stopPropagation(),(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small?this.setState((t=>({showModal:!t.showModal}))):e.appBuilderSync.publishSidePanelToApp({type:"widget",isPlaceholder:!0,isItemAccepted:this.isItemAccepted,onSelect:this.setContent})},this.closeModal=()=>{this.state.showModal&&this.setState({showModal:!1})},this.toggleDragoverEffect=(t,e)=>{this.ref&&t&&_e(e)?this.ref.classList.add("dragover"):this.ref.classList.remove("dragover")},this.onDrop=t=>{if(!_e(t))return;const{layoutId:e,layoutItemId:o}=this.props;Ue({layoutId:e,layoutItemId:o},t)},this.setContent=e=>{const{layoutId:o,layoutItemId:i}=this.props;e.itemType===t.LayoutItemType.Widget?Ze({layoutId:o,layoutItemId:i},e).then((()=>{this.setState({isBusy:!1})})):e.itemType===t.LayoutItemType.Section&&Ye({layoutId:o,layoutItemId:i}),this.setState({showModal:!1,isBusy:!0})},this.handleSyncChange=t=>{const{browserSizeMode:o,layoutId:i,layoutItemId:n}=this.props;(0,e.getAppConfigAction)().syncPlaceholder({layoutId:i,layoutItemId:n},`${t}`,o).exec()},this.isItemAccepted=t=>this.layoutContext.isItemAccepted(t,!0),this.fakeLayouts=(0,t.Immutable)({[t.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[t.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[t.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.state={showModal:!1,isBusy:!1}}componentDidUpdate(t){t.currentDialogId!==this.props.currentDialogId&&this.setState({showModal:!1})}getStyle(e){return t.css`
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;

      &.is-template {
        border: 1px dashed ${e.sys.color.primary.dark};
      }

      &.dragover .drop-tip {
        background: ${t.polished.rgba(e.sys.color.primary.dark,.5)} !important;
      }

      .add-btn {
        z-index: 1;
      }

      .mask {
        position: absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        z-index:2;
        background: transparent;
      }

      .placeholder-id {
        background: transparent;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .sync-select {
        position: absolute;
        right: 0;
        top: 0;
        padding: 0.5rem;
      }

      &.aspect-ratio-wrapper {
        padding-top: ${100*(this.props.aspectRatio||0)}%;
      }

      &.aspect-ratio-wrapper > .exb-drop-area {
        position: absolute;
        padding: 0;
      }

      &.aspect-ratio-wrapper > .add-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `}getPopupStyle(){const{builderTheme:e}=this.pageContext;return t.css`
      background-color: ${e.ref.palette.neutral[400]};
      max-height: 400px;
      overflow: auto;
    `}getModalStyle(){const{builderTheme:e}=this.pageContext;return t.css`
      .modal-content {
        background-color: ${e.ref.palette.neutral[400]};
      }

      .modal-header {
        color: ${e.ref.palette.black};
        .close {
          color: ${e.ref.palette.neutral[1100]};
          &:hover {
            color: ${e.ref.palette.black};
          }
        }
      }
    `}render(){const{isTemplate:e}=this.props;return(0,t.jsx)(a.PageContext.Consumer,null,(i=>(this.pageContext=i,(0,t.jsx)(a.LayoutContext.Consumer,null,(n=>{var a;return this.layoutContext=n,(0,t.jsx)("div",{className:(0,t.classNames)("layout-widget layout-item-content no-widget h-100 w-100 d-flex justify-content-center align-items-center",{"is-template":e}),ref:t=>{this.ref=t},css:this.getStyle(i.builderTheme)},!e&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(Ve,{css:Xe,className:"drop-tip",layouts:this.fakeLayouts,isPlaceholder:!0,highlightDragover:!1,onToggleDragoverEffect:this.toggleDragoverEffect,onDrop:this.onDrop}),this.state.isBusy&&(0,t.jsx)(o.Loading,{type:o.LoadingType.Primary}),!this.state.isBusy&&(0,t.jsx)("div",{ref:t=>{this.btnRef=t},className:(0,t.classNames)("add-btn",{"d-none":this.pageContext.viewOnly})},(0,t.jsx)(g,{title:null===(a=this.props.intl)||void 0===a?void 0:a.formatMessage({id:"addWidget"})},(0,t.jsx)(o.Button,{icon:!0,css:t.css`width: 36px; height: 36px; padding: 0.5rem;`,onClick:this.toggleModal,"aria-haspopup":!0},(0,t.jsx)(Ge,null)))),!this.state.isBusy&&this.state.showModal&&(0,t.jsx)($e.WidgetListPopper,{referenceElement:this.btnRef,isAccepted:this.isItemAccepted,onSelect:this.setContent,onClose:this.closeModal}),this.pageContext.viewOnly&&(0,t.jsx)("div",{className:"mask"})),e&&(0,t.jsx)(t.React.Fragment,null,this.props.placeholderId>0&&(0,t.jsx)("div",{className:"placeholder-id"},this.props.placeholderId),!this.pageContext.viewOnly&&(0,t.jsx)(ke,{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId,sizemode:this.props.browserSizeMode,onSyncChange:this.handleSyncChange,className:"sync-select"})))})))))}}const Je=(0,t.createSelector)((t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.currentDialogId}),(t=>t.browserSizeMode),((t,o)=>{const{layoutId:i,layoutItemId:n}=o,a=e.placeholderService.getPlaceholderInfo(t.appConfig,{layoutId:i,layoutItemId:n});return a&&a.layoutInfo.layoutId===i?a.id:-1}),((t,e,o)=>({currentDialogId:t,browserSizeMode:e,isTemplate:!1,placeholderId:o}))),Qe=t.ReactRedux.connect(Je)(qe),Ke=(0,t.injectIntl)(Qe);class to extends t.React.PureComponent{mask(){return(0,t.jsx)("div",{className:"widget-mask"})}getStyle(){return t.css`
      .${vt} & {
        overflow: visible !important;
      }
      z-index: ${this.props.isInlineEditing?a.LayoutZIndex.HandlerTools:0};

      .widget-mask {
        position: absolute;
        background: transparent;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
      }

      body:not(.design-mode) & .widget-mask {
        display: none !important;
      }
    `}getPlaceholderStyle(){return t.css`
      body:not(.design-mode) & {
        display: none !important;
      }
    `}render(){const{widgetId:e,isInlineEditing:o,isFunctionalWidget:i,hasEmbeddedLayout:n}=this.props,s=!o&&i&&!n;return(0,t.jsx)(a.WidgetRenderer,Object.assign({className:"w-100",css:this.getStyle()},this.props),!e&&(0,t.jsx)(Ke,Object.assign({css:this.getPlaceholderStyle()},this.props)),s&&e&&this.mask())}}var eo,oo=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};!function(t){t[t.ChooseLayoutType=0]="ChooseLayoutType",t[t.RenderLayout=1]="RenderLayout"}(eo||(eo={}));class io extends t.React.Component{constructor(){super(...arguments),this.state={mode:eo.RenderLayout},this.onLayoutTypeSelected=()=>{this.setState({mode:eo.RenderLayout})},this.switchToChoosingMobe=()=>{this.setState({mode:eo.ChooseLayoutType})}}shouldComponentUpdate(t){return!(t.isPageItem&&!t.visible)&&Object.keys(t).some((e=>t[e]!==this.props[e]))}render(){const{layout:e}=this.props;if(!e)return null;const o=(0,a.findLayoutBuilder)(e.type||t.LayoutType.FlowLayout);if(!o)return null;const i=this.props,{isItemAccepted:n}=i,s=oo(i,["isItemAccepted"]);return(0,t.jsx)(a.LayoutContext.Provider,{value:{isItemAccepted:n||ao}},(0,t.jsx)(o,Object.assign({},s)))}}const no=t.ReactRedux.connect(a.utils.mapStateToLayoutProps)(io);function ao(t){return null!=t}function so(t,e){if(!t)return null;let i={};t.backgroundIMage&&(i="string"==typeof t.backgroundIMage?{}:t.backgroundIMage);const n=t.backgroundPosition?o.FillType[t.backgroundPosition.toUpperCase()]:o.FillType.FILL;let a;a=null==t.backgroundColor?e:""===t.backgroundColor?"transparent":t.backgroundColor?t.backgroundColor:"";const s={color:a,fillType:n,image:i};return o.styleUtils.toBackgroundStyle(s)}function lo(e){var i,n;const{viewId:a,isActive:s,layoutEntryComponent:l,viewVisibilityContext:r}=e,d=t.ReactRedux.useSelector((t=>{var e,o;return null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.views)||void 0===o?void 0:o[a]})),c=null===(n=null===(i=(0,u.useTheme)())||void 0===i?void 0:i.body)||void 0===n?void 0:n.bg,p=l,h=r,[g,m]=t.React.useState(!1),y=t.React.useMemo((()=>({isInView:!0,isInCurrentView:s})),[s]);return t.React.useEffect((()=>{s&&d.lazyLoad&&!g&&m(!0)}),[s,d.lazyLoad,g]),(0,t.jsx)("div",{className:(0,t.classNames)("w-100 h-100 d-flex section-view",{[o.FOCUSABLE_CONTAINER_CLASS]:s}),style:so(d,c),css:t.css`&, .exb-drop-area { pointer-events: ${s?"auto":"none"}; }`,key:a,id:`${d.parent}_${d.id}`},(g||!d.lazyLoad)&&(0,t.jsx)(t.ErrorBoundary,null,(0,t.jsx)(h.Provider,{value:y},(0,t.jsx)(p,{layouts:null==d?void 0:d.layout,isInSection:!0,className:"w-100"}))))}function ro(e){var o,i;const{views:n,navInfo:a,animationPreview:s,playMode:l,currentIndex:r,previousIndex:d,progress:u,loop:c,viewTransition:p}=e,h=s&&l===t.AnimationPlayMode.OneByOne,{setting:g,playId:m}=t.React.useContext(t.AnimationContext),y=t.ReactRedux.useSelector((e=>{var o;return!g||g.type===t.AnimationType.None||(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design})),f=!y||h||(null==a?void 0:a.playId)&&(null==a?void 0:a.withOneByOne)?g:null,v=t.React.useMemo((()=>({setting:f,playId:h?m:null})),[f,h,m]);return(0,t.jsx)(t.AnimationContext.Provider,{value:v},(0,t.jsx)("div",{className:"section-content"},(0,t.jsx)(t.TransitionContainer,{useProgress:null!==(o=null==a?void 0:a.useProgress)&&void 0!==o&&o,useStep:null!==(i=null==a?void 0:a.useStep)&&void 0!==i&&i,previousIndex:d,currentIndex:r,progress:u,transitionType:null==p?void 0:p.type,direction:null==p?void 0:p.direction,playId:null==a?void 0:a.playId,withOneByOne:null==a?void 0:a.withOneByOne,loop:c},n.map((o=>{const i=o===n[r];return(0,t.jsx)(lo,{key:o,viewId:o,isActive:i,layoutEntryComponent:e.layoutEntryComponent,viewVisibilityContext:e.viewVisibilityContext})})))))}var uo=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const co=e=>{const o=window.SVG,{className:i}=e,n=uo(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:a,src:re()},n)):t.React.createElement("svg",Object.assign({className:a},n))};var po=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const ho=e=>{const o=window.SVG,{className:i}=e,n=po(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:a,src:ue()},n)):t.React.createElement("svg",Object.assign({className:a},n))};function go(e){var i,n,a;const{sectionId:s,currentIndex:l,numOfViews:r,onCurrentViewChange:d}=e,u=t.hooks.useTranslation(o.defaultMessages),c=t.ReactRedux.useSelector((t=>{var e;return null===(e=t.appConfig.sections[s])||void 0===e?void 0:e.arrowsNav})),p=t.ReactRedux.useSelector((t=>{var e;return null===(e=t.appConfig.sections[s])||void 0===e?void 0:e.dotsNav})),h=null!==(i=null==p?void 0:p.position)&&void 0!==i?i:"b",g=t.React.useMemo((()=>{const t=[];for(let e=0;e<r;e++)t.push(e);return t}),[r]),m=()=>{var e,o,i,n;return t.css`
      position: absolute;
      cursor: pointer;
      pointer-events: auto;

      &.disabled {
        cursor: default;
        svg {
          color: var(--ref-palette-neutral-500);
        }
      }

      &.first {
        left: ${null!==(e=c.offset)&&void 0!==e?e:0}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          top: ${null!==(o=c.offset)&&void 0!==o?o:0}px;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        }
      }
      &.second {
        right: ${null!==(i=c.offset)&&void 0!==i?i:0}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          bottom: ${null!==(n=c.offset)&&void 0!==n?n:0}px;
          left: 50%;
          top: auto;
          right: auto;
          transform: translateX(-50%) rotate(90deg);
        }
      }
    `},y=t.React.useCallback(((e,o)=>(0,t.jsx)("div",{key:e,className:(0,t.classNames)("dot rounded-circle",{active:o,disabled:r<=1}),onClick:o?void 0:()=>{d(e)}})),[d,r]),f=t.React.useCallback((()=>{d(l>0?l-1:r-1)}),[l,r,d]),v=t.React.useCallback((()=>{d(l<r-1?l+1:0)}),[l,r,d]),I=r>1&&0!==l,x=r>1&&l!==r-1;return(0,t.jsx)(t.React.Fragment,null,(null==c?void 0:c.visible)&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(o.Button,{type:"tertiary",disabled:!I,className:(0,t.classNames)("arrows-nav first p-0",{vertical:"v"===c.direction}),css:m(),onClick:I?f:null,"aria-label":u("previous")},(0,t.jsx)(co,{className:"m-0",autoFlip:"v"!==c.direction,size:null!==(n=c.size)&&void 0!==n?n:24})),(0,t.jsx)(o.Button,{type:"tertiary",disabled:!x,className:(0,t.classNames)("arrows-nav second p-0",{vertical:"v"===c.direction}),css:m(),onClick:x?v:null,"aria-label":u("next")},(0,t.jsx)(ho,{className:"m-0",autoFlip:"v"!==c.direction,size:null!==(a=c.size)&&void 0!==a?a:24}))),(null==p?void 0:p.visible)&&(0,t.jsx)("div",{className:(0,t.classNames)("dots-nav",{"snap-left":"l"===h,"snap-top":"t"===h,"snap-right":"r"===h,"snap-bottom":"b"===h}),css:(()=>{var e,o,i,n,a,s,l,r,d,u,c,g,m,y;return t.css`
      position: absolute;
      display: flex;
      flex-direction: ${"l"===h||"r"===h?"column":"row"};
      justify-content: center;
      align-items: center;
      overflow: visible;
      pointer-events: none;
      background: transparent;

      .dot {
        pointer-events: all;
        cursor: pointer;
        border: 1px solid var(--ref-palette-neutral-500);
        background: var(--ref-palette-neutral-200);
        width: ${null!==(e=p.size)&&void 0!==e?e:8}px;
        height: ${null!==(o=p.size)&&void 0!==o?o:8}px;

        &.active {
          border-color: var(--ref-palette-white);
          background: var(--sys-color-primary-main);
          width: ${p.size>0?1.5*p.size:12}px;
          height: ${p.size>0?1.5*p.size:12}px;
        }

        &.disabled {
          cursor: default;
        }
      }

      &.snap-left {
        height: 100%;
        top: 0;
        left: ${null!==(i=p.offset)&&void 0!==i?i:50}px;
        width: ${null!==(n=p.size)&&void 0!==n?n:8}px;

        > div:not(:first-of-type) {
          margin-top: ${null!==(a=p.spacing)&&void 0!==a?a:10}px;
        }
      }
      &.snap-right {
        height: 100%;
        top: 0;
        right: ${null!==(s=p.offset)&&void 0!==s?s:50}px;
        width: ${null!==(l=p.size)&&void 0!==l?l:8}px;

        > div:not(:first-of-type) {
          margin-top: ${null!==(r=p.spacing)&&void 0!==r?r:10}px;
        }
      }
      &.snap-top {
        width: 100%;
        top: ${null!==(d=p.offset)&&void 0!==d?d:50}px;
        height: ${null!==(u=p.size)&&void 0!==u?u:8}px;

        > div:not(:first-of-type) {
          margin-left: ${null!==(c=p.spacing)&&void 0!==c?c:10}px;
        }
      }
      &.snap-bottom {
        width: 100%;
        bottom: ${null!==(g=p.offset)&&void 0!==g?g:50}px;
        height: ${null!==(m=p.size)&&void 0!==m?m:8}px;

        > div:not(:first-of-type) {
          margin-left: ${null!==(y=p.spacing)&&void 0!==y?y:10}px;
        }
      }
    `})()},g.map((t=>y(t,t===l)))))}function mo(e){const{sectionId:o,autoPlay:i,interval:n=w,loop:a=!1}=e,s=t.React.useRef(),l=t.ReactRedux.useSelector((e=>{var o,n;return i?(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design||(null===(n=e.appRuntimeInfo)||void 0===n?void 0:n.isPrintPreview):null})),r=t.React.useRef(l),d=t.React.useCallback((()=>{s.current&&(clearInterval(s.current),s.current=null)}),[]),u=t.React.useCallback((()=>{d(),s.current=setInterval((()=>{const e=function(e,o){var i,n;const a=(0,t.getAppStore)().getState(),s=a.appConfig.sections[e].views;let l=null===(n=null===(i=a.appRuntimeInfo)||void 0===i?void 0:i.sectionNavInfos)||void 0===n?void 0:n[e];const r=(null==l?void 0:l.currentViewId)?s.indexOf(l.currentViewId):0,d=r<s.length-1?r+1:0;return!(!o&&0===d||(l=l?l.set("previousViewId",s[r]).set("currentViewId",s[d]):{previousViewId:s[r],currentViewId:s[d]},(0,t.getAppStore)().dispatch(t.appActions.sectionNavInfoChanged(e,l)),0))}(o,a);e||d()}),1e3*n)}),[o,a,n,d]);t.React.useEffect((()=>{if(!r.current){if(!i)return void d();u()}return()=>{d()}}),[i,n,a,d,u]),t.React.useEffect((()=>{if(r.current!==l&&null!==l){if(r.current=l,l)return void d();i&&u()}}),[l,u,d,i])}var yo=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};function fo(e,o){return t.css`
    overflow: visible;
    position: relative;
    aspect-ratio: ${e&&o>0?o:null};

    .section-content {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .section-view {
      position: absolute;
    }

    .hidden {
      display: none !important;
    }
  `}function vo(e){var i;const{views:n,navInfo:a,activeView:s,animationPreview:l,playMode:r,transition:d,sectionId:u,autoPlay:c,focusable:p=!0,interval:h=w,loop:g=!0,className:m,sectionStyle:y,rotate:f,forceAspectRatio:v,aspectRatio:I,layoutEntryComponent:x,viewVisibilityContext:b}=e,S=t.React.useRef(),C=t.React.useRef(),R=t.React.useRef(!1),T=t.React.useRef(!1),M=t.React.useRef(null),[A,P]=t.React.useState(!1),L=null==s?void 0:s.id,j=t.React.useMemo((()=>{var e;let o,i,s,l=n;if(a)if(l=null!==(e=a.visibleViews)&&void 0!==e?e:n,a.useProgress){s=a.progress;o=(0,t.getIndexFromProgress)(s,l.length).currentIndex}else o=Math.max(0,l.indexOf(a.currentViewId)),i=a.previousViewId?Math.max(0,l.indexOf(a.previousViewId)):Math.max(0,o-1);else o=Math.max(0,l.indexOf(L)),i=o;return S.current=o,{currentIndex:o,previousIndex:i,progress:s}}),[L,a,n]),z=t.React.useMemo((()=>o.styleUtils.toCSSStyle(y)),[y]),{transform:N}=z,k=yo(z,["transform"]),$=f>0||f<0?`rotateZ(${f}deg)`:"";let O=$;N&&(O=`${N} ${$}`);const E=t.React.useCallback((()=>{P(!0)}),[]),B=t.React.useCallback((()=>{P(!1)}),[]),D=t.React.useCallback((t=>{R.current=!0,T.current=t.target===C.current,null!=M.current&&(clearTimeout(M.current),M.current=null),c&&P(!0)}),[c]),F=t.React.useCallback((t=>{R.current=!1,null!=M.current&&(clearTimeout(M.current),M.current=null),c&&(M.current=setTimeout((()=>{P(!1)}),500))}),[c]),V=c&&!A;mo({sectionId:u,interval:h,loop:g,autoPlay:V});const H=t.React.useCallback((e=>{t.jimuHistory.changeView(u,n[e])}),[u,n]);return(0,t.jsx)("div",{className:(0,t.classNames)(`section-layout layout-item-content w-100 ${null===(i=null==y?void 0:y.boxShadow)||void 0===i?void 0:i.presetStyle}`,m),css:fo(v,I),"data-sectionid":u,style:Object.assign(Object.assign({},k),{transform:O}),onMouseEnter:c?E:null,onMouseLeave:c?B:null,onTouchStart:c?E:null,onTouchEnd:c?B:null,onFocus:D,onBlur:F,tabIndex:p?0:void 0,ref:C},(0,t.jsx)(ro,{views:n,navInfo:a,animationPreview:l,playMode:r,currentIndex:j.currentIndex,previousIndex:j.previousIndex,progress:j.progress,loop:V&&g,viewTransition:d,layoutEntryComponent:x,viewVisibilityContext:b}),(0,t.jsx)(go,{sectionId:u,numOfViews:n.length,currentIndex:j.currentIndex,onCurrentViewChange:H}))}class Io extends t.React.PureComponent{render(){return t.React.createElement(vo,Object.assign({},this.props,{layoutEntryComponent:no,viewVisibilityContext:a.ViewVisibilityContext}))}}function xo(t){const{isPreview:e,previewId:o}=t;return e?o:null}function bo(e,o){const[i,n]=t.React.useState(null),s=t.ReactRedux.useSelector((e=>{var o;return(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design})),l=t.ReactRedux.useSelector((t=>t.browserSizeMode)),r=t.React.useContext(a.PageVisibilityContext),d=t.React.useRef(r),u=t.React.useRef(l);t.React.useEffect((()=>{null==e||o||s&&d.current||n((0,t.getNextAnimationId)())}),[s,o,e]),t.React.useEffect((()=>{null==e||o||s||u.current===l||(u.current=l,n((0,t.getNextAnimationId)()))}),[l,s,o,e]),t.React.useEffect((()=>{null==e||o||s||d.current===r||(d.current=r,n((0,t.getNextAnimationId)()))}),[r,s,o,e]);const c=t.React.useCallback((()=>{n(null)}),[]);return{playId:i,revert:!s&&!r,onAnimationEnd:c}}function wo(){const t=[0];for(let e=1;e<=10;e++)t.push(e/10);return t}function So(e,o){const i=t.React.useRef(),[n,a]=t.React.useState(!0);return t.React.useEffect((()=>{if(i.current&&(i.current.unobserve(e),i.current=null),!o)return;if(e&&"function"==typeof IntersectionObserver){const t=new IntersectionObserver((t=>{var e;(e=t[0]).target.classList.contains("playing-animation")||e.boundingClientRect.width>0&&e.boundingClientRect.height>0&&a(e.isIntersecting)}),{threshold:wo(),root:document,rootMargin:"20%"});return t.observe(e),i.current=t,()=>{i.current.unobserve(e),i.current=null}}}),[e,o]),n}const Co=Tt.interact.modifiers.restrictRect({restriction:"parent"}),Ro=Tt.interact.modifiers.restrictRect({restriction:`div.${xt}`});var To=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Mo=[ht,gt,pt,ct],Ao=[gt];function Po(e){var o,i,n,s,l,r,d,u,c,p;const h=t.ReactRedux.useSelector((t=>Lo(t,e)),t.ReactRedux.shallowEqual),g=Object.assign(Object.assign({},h),e),m=t.React.useContext(a.PageContext),y=t.React.useRef();let f,v;const{effect:I,oneByOneEffect:x,hoverEffect:b}=null!==(i=null===(o=g.layoutItem)||void 0===o?void 0:o.setting)&&void 0!==i?i:{},{animationPreview:w,hoverPreview:S,previewId:C,playMode:R,layoutType:T}=g,M=t.React.useCallback((()=>m.rootLayoutId),[m.rootLayoutId]),A=So(y.current,g.watchViewportVisibility);let P=null===(n=null==I?void 0:I[t.AnimationTriggerType.ScrollIntoView])||void 0===n?void 0:n.type;P=P&&P!==t.AnimationType.None?P:null;let L=null===(s=null==x?void 0:x[t.AnimationTriggerType.ScrollIntoView])||void 0===s?void 0:s.type;L=L&&L!==t.AnimationType.None?L:null;const[j,z]=t.React.useState({setting:null==x?void 0:x[t.AnimationTriggerType.ScrollIntoView],playId:null,oid:h.innerLayoutId,revert:null,playMode:null}),{setting:N}=t.React.useContext(t.AnimationContext),[k,$,O]=function(t){const{type:e,isPreview:o,previewId:i,hasParentAnimation:n}=t,a=xo({isPreview:o,previewId:i}),{playId:s,revert:l,onAnimationEnd:r}=bo(e,n);return e?o?[a,!1,null]:[s,l,r]:[null,!1,null]}({type:P,isPreview:w,previewId:R!==t.AnimationPlayMode.OneByOne?C:null,hasParentAnimation:null!=(null==N?void 0:N.type)&&N.type!==t.AnimationType.None}),[E,B,D]=function(t){const{type:e,isPreview:o,previewId:i,hasParentAnimation:n}=t,a=xo({isPreview:o,previewId:i}),{playId:s,revert:l,onAnimationEnd:r}=bo(e,n);return e?o?[a,!1,null]:[s,l,r]:[null,!1,null]}({type:L,isPreview:w,previewId:R!==t.AnimationPlayMode.AsOne?C:null,hasParentAnimation:null!=(null==N?void 0:N.type)&&N.type!==t.AnimationType.None}),{registerWidgetInitDragHandler:F,registerWidgetInitResizeHandler:V,setRefElement:H}=function(e){const{layoutId:o,layoutItemId:i,layoutType:n,layoutItemType:a,useDragHandler:s,restrict:l,getCurrentRootLayoutId:r}=e,d=t.React.useRef(),u=t.React.useRef(),c=t.React.useRef(),p=t.React.useRef(),h=t.React.useRef(),g=t.React.useRef(),m=t.React.useRef(),y=t.React.useRef();function f(t){Ct(!0),Lt(!1),e.onDragStart&&e.onDragStart(t),h.current&&h.current()}function v(t,o,i){e.onDragging&&e.onDragging(t,o,i),g.current&&g.current(o,i)}function I(o,i,n){t.lodash.defer((()=>{Ct(!1)})),e.onDragEnd&&e.onDragEnd(o,i,n),m.current&&m.current(i,n)}function x(t,o,i){Ct(!1),Lt(!0),e.onResizeStart&&e.onResizeStart(t,o,i),u.current&&u.current(o,i)}function b(t,o,i,n,a,s,l){e.onResizing&&e.onResizing(t,o,i,n,a,s,l),c.current&&c.current(o,i,n,a)}function w(o,i,n,a,s,l){t.lodash.defer((()=>{Lt(!1)})),e.onResizeEnd&&e.onResizeEnd(o,i,n,a,s,l),p.current&&p.current(i,n,a,s)}const S=t.React.useCallback(((t,e,o)=>{u.current=t,c.current=e,p.current=o}),[]),C=t.React.useCallback(((t,e,o)=>{h.current=t,g.current=e,m.current=o}),[]),R=t.React.useCallback((u=>{y.current=u,d.current||(d.current=(0,Tt.interact)(u).origin("parent"),d.current=St(d.current,{layoutId:o,layoutItemId:i,useDragHandler:s,onDragging:v,onDragStart:f,onDragEnd:I,itemType:a,rootLayoutId:r,restrict:()=>l}),d.current=Pt(d.current,{layoutItemId:i,onResizing:b,restrictEdges:n===t.LayoutType.FixedLayout,onResizeStart:x,onResizeEnd:w})),d.current&&(l?d.current.draggable({modifiers:[Co]}):d.current.draggable({modifiers:[Ro]})),e.resizeObserver&&u&&e.resizeObserver.observe(u)}),[l]);return t.React.useEffect((()=>()=>{d.current&&(d.current.unset(),d.current=null),e.resizeObserver&&y.current&&e.resizeObserver.unobserve(y.current)}),[]),{registerWidgetInitDragHandler:C,registerWidgetInitResizeHandler:S,setRefElement:R}}({restrict:e.restrict,layoutId:e.layoutId,layoutItemId:e.layoutItemId,layoutType:T,layoutItemType:null===(l=h.layoutItem)||void 0===l?void 0:l.type,useDragHandler:e.useDragHandler,resizeObserver:e.resizeObserver,getCurrentRootLayoutId:M,onDragStart:e.onDragStart,onDragging:e.onDragging,onDragEnd:e.onDragEnd,onResizeStart:e.onResizeStart,onResizing:e.onResizing,onResizeEnd:e.onResizeEnd});t.React.useEffect((()=>{H(y.current)}),[]),t.React.useEffect((()=>{null==k&&E&&z({setting:null==x?void 0:x[t.AnimationTriggerType.ScrollIntoView],playId:E,oid:h.innerLayoutId,revert:B,playMode:R,onContextAnimationEnd:B?null:()=>{null==D||D(),w&&(0,t.getAppStore)().dispatch(t.appActions.clearAnimationPreview()),z({setting:null==x?void 0:x[t.AnimationTriggerType.ScrollIntoView],oid:h.innerLayoutId,playId:-1})}})}),[k,E]);const G=t.React.useCallback((()=>{var e;if(w)return R!==t.AnimationPlayMode.AsOne;const o=null===(e=(0,t.getAppStore)().getState().appRuntimeInfo)||void 0===e?void 0:e.animationPreview;return null==o||o.playMode!==t.AnimationPlayMode.OneByOne}),[w]),W=t.React.useCallback((()=>{var e;if(G()){const o=null==x?void 0:x[t.AnimationTriggerType.ScrollIntoView],i=(null===(e=null==o?void 0:o.option)||void 0===e?void 0:e.start)===t.AnimationStartMode.AfterPrevious;z({setting:o,playId:(0,t.getNextAnimationId)(),oid:h.innerLayoutId,revert:i,playMode:R,onContextAnimationEnd:i?null:()=>{z({setting:o,oid:h.innerLayoutId,playId:-1})}})}}),[L,w,R,G]),_=t.React.useCallback((()=>{var e;if(G()){const o=null==x?void 0:x[t.AnimationTriggerType.ScrollIntoView];(null===(e=null==o?void 0:o.option)||void 0===e?void 0:e.start)===t.AnimationStartMode.AfterPrevious&&z({setting:o,playId:(0,t.getNextAnimationId)(),oid:h.innerLayoutId,revert:!1,playMode:R,onContextAnimationEnd:()=>{z({setting:o,oid:h.innerLayoutId,playId:-1})}})}null==O||O(),w&&(0,t.getAppStore)().dispatch(t.appActions.clearAnimationPreview())}),[L,w,R,G]);function U(){var e;const{selected:o,draggable:i=!0}=g,n=null!==(e=h.isInlineEditing)&&void 0!==e&&e,a=t.utils.isTouchDevice();return i&&!m.viewOnly&&!n&&(!a||o)}const{layoutId:Y,layoutItemId:Z,top:X,left:q,right:J,bottom:Q,resizable:K,draggable:tt,isBlock:et,autoScroll:ot,layoutItem:it,isFunctionalWidget:nt,selected:at,isInlineEditing:lt,hasEmbeddedLayout:dt,hasExtension:ut}=g;if(!it)return null;const{className:ct,forbidContextMenu:pt,onClick:ht,onDoubleClick:gt,children:mt,id:yt,isLastChild:ft}=g,xt=To(g,["className","forbidContextMenu","onClick","onDoubleClick","children","id","isLastChild"]),bt=it.type===t.LayoutItemType.Widget,wt=it.type===t.LayoutItemType.Section,Mt=!pt&&!m.viewOnly&&(it.widgetId||it.sectionId)&&(!nt||wt),At=null===(r=null==I?void 0:I[t.AnimationTriggerType.ScrollIntoView])||void 0===r?void 0:r.option,zt=null!==(p=null===(c=null===(u=null===(d=it.setting)||void 0===d?void 0:d.style)||void 0===u?void 0:u.transform)||void 0===c?void 0:c.rotate)&&void 0!==p?p:0;return(0,t.jsx)(a.ViewportVisibilityContext.Provider,{value:!!rt()||A},(0,t.jsx)(t.AnimationComponent,{id:yt,parentId:Y,type:P,configType:null==At?void 0:At.configType,direction:null==At?void 0:At.direction,revert:$,delay:e.delay,isLastChild:ft,playId:k,hoverEffect:b,hoverPlayId:C,onAnimationStart:W,onAnimationEnd:_,css:function(e){var o;const i=U(),n=null!==(o=h.isInlineEditing)&&void 0!==o&&o,s=t.polished.rgba(m.builderTheme.ref.palette.neutral[900],.6),l=m.builderTheme.sys.color.primary.main,r=nt&&!wt||at?"solid":"dashed";let d=null;return rt()||(d=(0,t.getHoverStyle)(null==b?void 0:b.type,null==b?void 0:b.setting)),t.css`
      ${d};
      position: relative;
      overflow: visible;
      cursor: ${i?"move":"default"};
      touch-action: ${n||!at?"auto":"none"};
      user-select: ${n?"auto":"none"};
      min-width: ${a.MIN_LAYOUT_ITEM_SIZE}px;
      min-height: ${a.MIN_LAYOUT_ITEM_SIZE}px;

      & > div.widget-context-menu {
        display: none;
      }

      &:hover > div.widget-context-menu {
        display: flex;
      }

      .${It} &.functional-widget {
        pointer-events: none;
      }
      .${It} &.functional-widget .exb-drop-area {
        pointer-events: all;
      }

      .${It} &,
      .${vt} & {
        > div.highlight-tip {
          .tip-content {
            outline-color: ${s};
          }
        }
      }

      body:not(.design-mode) &,
      body.lock-layout & {
        cursor: default;
      }

      body:not(.design-mode) & > div.highlight-tip {
        display: none !important;
      }

      & > div.highlight-tip {
        display: block;
        padding: inherit;
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
        pointer-events: none;
        transform: ${e>0||e<0?`rotateZ(${e}deg)`:""};
        .tip-content {
          height: 100%;
          padding: 1px;
          &:after {
            content: '';
            width: 100%;
            height: 100%;
            outline: ${et&&!at?"none":`1px ${r} ${s}`};
            display: block;
            outline-color: ${!nt||wt?s:"transparent"};
          }
        }
      }

      &:hover > div.highlight-tip,
      &.hovered > div.highlight-tip {
        display: block;
        .tip-content {
          &:after {
            outline-color: ${l};
          }
        }
      }

      &.functional-widget:not(.selected):hover > div.highlight-tip,
      &.functional-widget:not(.selected).hovered > div.highlight-tip {
        .tip-content {
          &:after {
            outline-width: 2px;
          }
        }
      }
    `}(zt),style:e.style,ref:y,className:(0,t.classNames)("builder-layout-item exb-rnd",ct,{selected:at,"is-widget":bt,"is-section":wt,"functional-widget":bt&&nt,"no-drag-action":!U()}),onDoubleClick:function(o){const{layoutId:i,layoutItemId:n}=e,{supportInlineEditing:a,widgetId:s}=h;e.onDoubleClick&&e.onDoubleClick(o,{layoutId:i,layoutItemId:n}),m.viewOnly||(o.stopPropagation(),a&&(0,t.getAppStore)().dispatch(t.appActions.setWidgetIsInlineEditingState(s,!0)))},onClick:function(o){if(Math.abs(o.screenX-f)>a.CLICK_TOLRERANCE||Math.abs(o.screenY-v)>a.CLICK_TOLRERANCE)return void o.stopPropagation();const{viewOnly:i}=m,{isFunctionalWidget:n,layoutItem:s}=h;if(!i&&(!st()&&rt()||n||s.type===t.LayoutItemType.Section)&&(o.stopPropagation(),!jt()&&!Rt())){if(e.onClick){const{layoutId:t,layoutItemId:i}=g;e.onClick(o,{layoutId:t,layoutItemId:i})}!function(){const{layoutId:o,layoutItemId:i}=e;h.selected||(0,t.getAppStore)().dispatch(t.appActions.selectionChanged({layoutId:o,layoutItemId:i}))}()}},onMouseDown:function(t){f=t.screenX,v=t.screenY},"data-layoutitemid":Z,"data-layoutid":Y},(0,t.jsx)(t.AnimationContext.Provider,{value:j},bt&&(0,t.jsx)(to,Object.assign({rotate:zt,onInitDragHandler:F,onInitResizeHandler:V},xt)),wt&&(0,t.jsx)(Io,Object.assign({rotate:zt},xt))),(Mt||h.useDragHandler)&&!m.viewOnly&&!h.isInController&&function(o){const{builderTheme:i}=m;return(0,t.jsx)(Et,{builderTheme:i,layoutId:e.layoutId,layoutItem:h.layoutItem,positionType:"center",size:a.CONTEXT_MENU_ITEM_SIZE,rotate:o,iconSize:a.CONTEXT_MENU_ICON_SIZE,className:"widget-context-menu",menuItems:e.contextMenuItems||(h.useDragHandler?Ao:Mo)})}(zt),!m.viewOnly&&at&&(0,t.jsx)(Ne,{layoutId:Y,layoutItem:it,top:X,left:q,right:J,bottom:Q,resizable:K,draggable:tt,selected:at,autoScroll:ot,forbidToolbar:e.forbidToolbar,toolItems:e.toolItems,showDefaultTools:e.showDefaultTools,isInlineEditing:lt,isFunctionalWidget:nt,hasEmbeddedLayout:dt,isSection:wt,isBlock:et,hasExtension:bt&&ut,widgetJson:h.widgetJson,widgetState:h.widgetState,rotate:zt}),!m.viewOnly&&(0,t.jsx)("div",{className:"highlight-tip"},(0,t.jsx)("div",{className:"tip-content"})),e.children))}const Lo=(0,t.createSelector)([(t,e)=>a.utils.mapStateToLayoutItemProps(t,e),(t,e)=>{var o;return null===(o=t.appConfig.layouts[e.layoutId])||void 0===o?void 0:o.type},(e,o)=>{const i=a.searchUtils.findLayoutItem(e.appConfig,{layoutId:o.layoutId,layoutItemId:o.layoutItemId});if((null==i?void 0:i.type)===t.LayoutItemType.Widget){const i=function(e,o,i){const n=e.appConfig.layouts[o].content[i];if(n.type===t.LayoutItemType.Widget){const t=e.appConfig.widgets[n.widgetId];if(null!=(null==t?void 0:t.layouts)){const o=Object.keys(t.layouts);if(1!==o.length){const i=[];return o.forEach((o=>{const n=t.layouts[o];i.push(n[e.browserSizeMode])})),i}{const i=null==t?void 0:t.layouts[o[0]];if(i)return i[e.browserSizeMode]}}}return null}(e,o.layoutId,o.layoutItemId);return i}return null},(e,o)=>{const i=a.searchUtils.findLayoutItem(e.appConfig,{layoutId:o.layoutId,layoutItemId:o.layoutItemId});return(null==i?void 0:i.type)===t.LayoutItemType.Widget?a.utils.mapStateToWidgetProps(e,o):null},(e,o)=>{const i=a.searchUtils.findLayoutItem(e.appConfig,{layoutId:o.layoutId,layoutItemId:o.layoutItemId});return(null==i?void 0:i.type)===t.LayoutItemType.Section?a.searchUtils.getSectionInfo(e,i.sectionId):null},(e,o)=>{const i=a.searchUtils.findLayoutItem(e.appConfig,{layoutId:o.layoutId,layoutItemId:o.layoutItemId});if((null==i?void 0:i.type)===t.LayoutItemType.Section){const t=ve(a.searchUtils.getSectionInfo(e,i.sectionId));return e.appConfig.views[t]}return null}],((t,e,o,i,n,a)=>Object.assign(Object.assign(Object.assign({layoutType:e,innerLayoutId:o,activeView:a},t),null!=i?i:{}),null!=n?n:{})));var jo=p(914),zo=p.n(jo),No=p(2717),ko=p.n(No),$o=p(4072),Oo=p.n($o),Eo=p(5477),Bo=p.n(Eo),Do=p(5108),Fo=p.n(Do),Vo=p(2491),Ho=p.n(Vo),Go=p(9566),Wo=p.n(Go),_o=p(3593),Uo=p.n(_o),Yo=p(8081),Zo=p.n(Yo),Xo=p(8710),qo=p.n(Xo),Jo=p(8056),Qo=p.n(Jo),Ko=p(3377),ti=p.n(Ko),ei=p(1769),oi=p.n(ei),ii=p(1291),ni=p.n(ii),ai=p(1855),si=p.n(ai),li=p(1334),ri=p.n(li),di=p(7927);const ui=5;function ci(t,e){var o,i,n,a;if(e.rect.top>t.rect.bottom||e.rect.bottom<t.rect.top)return!1;if(e.rect.right+ui<t.rect.left&&null!=(null===(o=e.right)||void 0===o?void 0:o.value)&&null!=(null===(i=t.left)||void 0===i?void 0:i.value)){const o=e.right.usePercentage;if(o===t.left.usePercentage)return o||e.right.origin===t.left.origin}if(t.rect.right+ui<e.rect.left&&null!=(null===(n=t.right)||void 0===n?void 0:n.value)&&null!=(null===(a=e.left)||void 0===a?void 0:a.value)){const o=e.left.usePercentage;if(o===t.right.usePercentage)return o||e.left.origin===t.right.origin}return!1}function pi(t,e){var o,i,n,a;if(e.rect.left>t.rect.right||e.rect.right<t.rect.left)return!1;if(e.rect.bottom+ui<t.rect.top&&null!=(null===(o=e.bottom)||void 0===o?void 0:o.value)&&null!=(null===(i=t.top)||void 0===i?void 0:i.value)){const o=e.bottom.usePercentage;if(o===t.top.usePercentage)return o||e.bottom.origin===t.top.origin}if(t.rect.bottom+ui<e.rect.top&&null!=(null===(n=t.bottom)||void 0===n?void 0:n.value)&&null!=(null===(a=e.top)||void 0===a?void 0:a.value)){const o=e.top.usePercentage;if(o===t.bottom.usePercentage)return o||e.top.origin===t.bottom.origin}return!1}function hi(t,e){let o;return e.filter((e=>{var o,i;return(null===(o=e.right)||void 0===o?void 0:o.pixelValue)<(null===(i=t.left)||void 0===i?void 0:i.pixelValue)})).sort(((t,e)=>e.right.pixelValue-t.right.pixelValue)).some((e=>{if(ci(t,e))return o={value:e},!0})),null!=o&&(o.next=hi(o.value,e)),o}function gi(t,e){let o;return e.filter((e=>{var o,i;return(null===(o=e.left)||void 0===o?void 0:o.pixelValue)>(null===(i=t.right)||void 0===i?void 0:i.pixelValue)})).sort(((t,e)=>t.left.pixelValue-e.left.pixelValue)).some((e=>{if(ci(t,e))return o={value:e},!0})),null!=o&&(o.next=gi(o.value,e)),o}function mi(t,e){let o;return e.filter((e=>{var o,i;return(null===(o=e.bottom)||void 0===o?void 0:o.pixelValue)<(null===(i=t.top)||void 0===i?void 0:i.pixelValue)})).sort(((t,e)=>e.bottom.pixelValue-t.bottom.pixelValue)).some((e=>{if(pi(t,e))return o={value:e},!0})),null!=o&&(o.next=mi(o.value,e)),o}function yi(t,e){let o;return e.filter((e=>{var o,i;return(null===(o=e.top)||void 0===o?void 0:o.pixelValue)>(null===(i=t.bottom)||void 0===i?void 0:i.pixelValue)})).sort(((t,e)=>t.top.pixelValue-e.top.pixelValue)).some((e=>{if(pi(t,e))return o={value:e},!0})),null!=o&&(o.next=yi(o.value,e)),o}function fi(e,o,i,n,s,l,r,d){if(null!=l&&null!=d){const u=Math.max(e.rect.top,o.rect.top),c=Math.min(e.rect.bottom,o.rect.bottom);l.setColor(t.polished.rgba(d.sys.color.error.light,.35));const p={left:s?o.rect.left-i:e.rect.right,top:u,width:i,height:c-u};if(l.drawRect(p),n){const n=(u+c)/2,p=e.right.usePercentage?t.utils.formatPercentageNumber(a.utils.toRatio(i,r)):t.utils.formatPixelNumber(`${i}px`);l.setColor(d.sys.color.primary.main),l.drawLine(s?o.rect.left-i:e.rect.right,n,s?o.rect.left:e.rect.right+i,n,!1,p)}}}function vi(e,o,i,n,s,l,r,d){if(null!=l&&null!=d){const u=Math.max(e.rect.left,o.rect.left),c=Math.min(e.rect.right,o.rect.right);l.setColor(t.polished.rgba(d.sys.color.error.light,.35));const p={left:u,top:s?o.rect.top-i:e.rect.bottom,width:c-u,height:i};if(l.drawRect(p),n){const n=(u+c)/2,p=e.bottom.usePercentage?t.utils.formatPercentageNumber(a.utils.toRatio(i,r)):t.utils.formatPixelNumber(`${i}px`);l.setColor(d.sys.color.primary.main),l.drawLine(n,s?o.rect.top-i:e.rect.bottom,n,s?o.rect.top:e.rect.bottom+i,!1,p)}}}function Ii(e,o,i,n,s,l,r){var d,u,c,p,h;let g=0,m=0;const y=0!==i.w||0!==i.h;if(!y||0!==i.w){let s=hi(e,o);s=function(t,e){const o={id:"",right:{value:e?"0%":"0px",pixelValue:0,usePercentage:e,origin:0,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{left:-100,width:100,right:0,top:Number.NEGATIVE_INFINITY,bottom:Number.POSITIVE_INFINITY}};if(null==t)return{value:o};let i=t;for(;null!=i.next;)i=i.next;return i.next={value:o},t}(s,null==(null===(d=e.left)||void 0===d?void 0:d.value)||(null===(u=e.left)||void 0===u?void 0:u.usePercentage));let p=gi(e,o);p=function(t,e,o){const i={id:"",left:{value:e?"0%":"0px",pixelValue:o,usePercentage:e,origin:1,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{left:o,width:100,right:o+100,top:Number.NEGATIVE_INFINITY,bottom:Number.POSITIVE_INFINITY}};if(null==t)return{value:i};let n=t;for(;null!=n.next;)n=n.next;return n.next={value:i},t}(p,null==(null===(c=e.right)||void 0===c?void 0:c.value)||e.right.usePercentage,n),g=function(t,e,o,i,n,a){if(e.gridline.rect.top===Number.NEGATIVE_INFINITY&&o.gridline.rect.top===Number.NEGATIVE_INFINITY||null==t.left||null==t.right)return 0;const s=t.left.pixelValue-e.gridline.right.pixelValue,l=o.gridline.left.pixelValue-t.right.pixelValue,r=e.fixed||o.fixed?ui:2*ui;if(Math.abs(l-s)<r){let r,d;return r=e.fixed||o.fixed?l-s:(l-s)/2,d=e.fixed?s:o.fixed?l:s+r,fi(e.gridline,t,d,!1,!1,i,n,a),fi(t,o.gridline,d,!1,!0,i,n,a),r}return 0}(e,{gridline:s.value,fixed:0!==i.w&&0===i.x},{gridline:p.value,fixed:0!==i.w&&0!==i.x},l,n,r),0!==g||0!==i.w&&0===i.x||(g=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const a=t.rect.left-e.value.rect.right;let s=e,l=-1;for(;null!=s.next;){const t=s.next,e=s.value.rect.left-t.value.rect.right;-1===l?Math.abs(e-a)<=ui&&(l=e,fi(t.value,s.value,l,!0,!1,o,i,n)):e===l&&fi(t.value,s.value,l,!0,!1,o,i,n),s=t}if(l>0){const s=l-a;return fi(e.value,t,l,!1,!1,o,i,n),s}return 0}(e,s,l,n,r)),0!==g||0!==i.w&&0!==i.x||(g=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const a=e.value.rect.left-t.rect.right;let s=e,l=-1;for(;null!=s.next;){const t=s.next,e=t.value.rect.left-s.value.rect.right;-1===l?Math.abs(e-a)<=ui&&(l=e,fi(s.value,t.value,l,!0,!0,o,i,n)):e===l&&fi(s.value,t.value,l,!0,!0,o,i,n),s=t}if(l>0){const s=a-l;return fi(t,e.value,l,!1,!0,o,i,n),s}return 0}(e,p,l,n,r)),function(e,o,i,n,s,l,r,d){var u;if(null!=l&&null!=d){l.setColor(d.sys.color.primary.main);let c=(null===(u=o.gridline)||void 0===u?void 0:u.rect.top)===Number.NEGATIVE_INFINITY;const p=o.gridline.rect;if(null!=p&&null!=e.left&&(!c||n&&!o.fixed)){const i=(Math.max(e.rect.top,p.top)+Math.min(e.rect.bottom,p.bottom))/2,n=e.left.usePercentage;let d=e.rect.left-p.right;o.fixed||(d+=s);const u=n?t.utils.formatPercentageNumber(a.utils.toRatio(d,r)):t.utils.formatPixelNumber(`${d}px`);l.drawLine(p.right,i,p.right+d,i,!1,u)}c=i.gridline.rect.top===Number.NEGATIVE_INFINITY;const h=i.gridline.rect;if(null!=h&&null!=e.right&&(!c||n&&!i.fixed)){const o=(Math.max(e.rect.top,h.top)+Math.min(e.rect.bottom,h.bottom))/2,n=e.right.usePercentage;let d=h.left-e.rect.right;i.fixed||(d-=s);const u=n?t.utils.formatPercentageNumber(a.utils.toRatio(d,r)):t.utils.formatPixelNumber(`${d}px`);l.drawLine(h.left,o,h.left-d,o,!1,u)}}}(e,{gridline:s.value,fixed:0!==i.w&&0===i.x},{gridline:p.value,fixed:0!==i.w&&0!==i.x},0!==i.w,g,l,n,r)}if(!y||0!==i.h){let n=mi(e,o);n=function(t,e){const o={id:"",bottom:{value:e?"0%":"0px",pixelValue:0,usePercentage:e,origin:0,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{top:-100,height:100,bottom:0,left:Number.NEGATIVE_INFINITY,right:Number.POSITIVE_INFINITY}};if(null==t)return{value:o};let i=t;for(;null!=i.next;)i=i.next;return i.next={value:o},t}(n,null==(null===(p=e.top)||void 0===p?void 0:p.value)||e.top.usePercentage);let d=yi(e,o);d=function(t,e,o){const i={id:"",top:{value:e?"0%":"0px",pixelValue:o,usePercentage:e,origin:1,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{top:o,height:100,bottom:o+100,left:Number.NEGATIVE_INFINITY,right:Number.POSITIVE_INFINITY}};if(null==t)return{value:i};let n=t;for(;null!=n.next;)n=n.next;return n.next={value:i},t}(d,null==(null===(h=e.bottom)||void 0===h?void 0:h.value)||e.bottom.usePercentage,s),m=function(t,e,o,i,n,a){if(e.gridline.rect.left===Number.NEGATIVE_INFINITY&&o.gridline.rect.left===Number.NEGATIVE_INFINITY||null==t.top||null==t.bottom)return 0;const s=t.top.pixelValue-e.gridline.bottom.pixelValue,l=o.gridline.top.pixelValue-t.bottom.pixelValue,r=e.fixed||o.fixed?ui:2*ui;if(Math.abs(l-s)<r){let r,d;return r=e.fixed||o.fixed?l-s:(l-s)/2,d=e.fixed?s:o.fixed?l:s+r,vi(e.gridline,t,d,!1,!1,i,n,a),vi(t,o.gridline,d,!1,!0,i,n,a),r}return 0}(e,{gridline:n.value,fixed:0!==i.h&&0===i.y},{gridline:d.value,fixed:0!==i.h&&0!==i.y},l,s,r),0!==m||0!==i.h&&0===i.y||(m=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const a=t.rect.top-e.value.rect.bottom;let s=e,l=-1;for(;null!=s.next;){const t=s.next,e=s.value.rect.top-t.value.rect.bottom;-1===l?Math.abs(e-a)<=ui&&(l=e,vi(t.value,s.value,l,!0,!1,o,i,n)):e===l&&vi(t.value,s.value,l,!0,!1,o,i,n),s=t}if(l>0){const s=l-a;return vi(e.value,t,l,!1,!1,o,i,n),s}return 0}(e,n,l,s,r)),0!==m||0!==i.h&&0!==i.y||(m=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const a=e.value.rect.top-t.rect.bottom;let s=e,l=-1;for(;null!=s.next;){const t=s.next,e=t.value.rect.top-s.value.rect.bottom;-1===l?Math.abs(e-a)<=ui&&(l=e,vi(s.value,t.value,l,!0,!0,o,i,n)):e===l&&vi(s.value,t.value,l,!0,!0,o,i,n),s=t}if(l>0){const s=a-l;return vi(t,e.value,l,!1,!0,o,i,n),s}return 0}(e,d,l,s,r)),function(e,o,i,n,s,l,r,d){if(null!=l&&null!=d){l.setColor(d.sys.color.primary.main);let u=o.gridline.rect.left===Number.NEGATIVE_INFINITY;const c=o.gridline.rect;if(null!=c&&null!=e.top&&(!u||n&&!o.fixed)){const i=(Math.max(e.rect.left,c.left)+Math.min(e.rect.right,c.right))/2,n=e.top.usePercentage;let d=e.rect.top-c.bottom;o.fixed||(d+=s);const u=n?t.utils.formatPercentageNumber(a.utils.toRatio(d,r)):t.utils.formatPixelNumber(`${d}px`);l.drawLine(i,c.bottom,i,c.bottom+d,!1,u)}u=i.gridline.rect.left===Number.NEGATIVE_INFINITY;const p=i.gridline.rect;if(null!=p&&null!=e.bottom&&(!u||n&&!i.fixed)){const o=(Math.max(e.rect.left,p.left)+Math.min(e.rect.right,p.right))/2,n=e.bottom.usePercentage;let d=p.top-e.rect.bottom;i.fixed||(d-=s);const u=n?t.utils.formatPercentageNumber(a.utils.toRatio(d,r)):t.utils.formatPixelNumber(`${d}px`);l.drawLine(o,p.top,o,p.top-d,!1,u)}}}(e,{gridline:null==n?void 0:n.value,fixed:0!==i.h&&0===i.y},{gridline:null==d?void 0:d.value,fixed:0!==i.y&&0!==i.y},0!==i.h,m,l,s,r)}return{dx:g,dy:m}}function xi(t,e){return Math.abs(e.pixelValue-t.pixelValue)}function bi(t,e,o){if(t.pixelValue+e===o.pixelValue){const e=o.usePercentage;if(e===t.usePercentage)return e||o.origin===t.origin}return!1}function wi(t,e){return e.filter((e=>function(t,e){if(xi(e,t)<4*ui){const o=e.usePercentage;if(o===t.usePercentage)return o||e.origin===t.origin}return!1}(t,e))).sort(((e,o)=>xi(e,t)-xi(o,t)))}function Si(t,e,o,i,n,a,s){let l=0,r=0;if(!i&&!n)return{dx:l,dy:r};let d=[],u=[];if(e.forEach((e=>{if(i){const i=[e.left,e.xm,e.right].filter((i=>{var n,a,s;if(null!=i)return i.from=null!==(n=e.rect.top)&&void 0!==n?n:e.rect.bottom,i.to=e.rect.top>=0&&e.rect.bottom>=0?e.rect.bottom:t.rect.top,0!==o.w?0===o.x?i.pixelValue>=(null===(a=t.right)||void 0===a?void 0:a.pixelValue):i.pixelValue<=(null===(s=t.left)||void 0===s?void 0:s.pixelValue):0===o.h}));d=d.concat(i)}if(n){const i=[e.top,e.ym,e.bottom].filter((i=>{var n,a,s;if(null!=i)return i.from=null!==(n=e.rect.left)&&void 0!==n?n:e.rect.right,i.to=e.rect.left>=0&&e.rect.right>=0?e.rect.right:t.rect.left,0!==o.h?0===o.y?i.pixelValue>=(null===(a=t.bottom)||void 0===a?void 0:a.pixelValue):i.pixelValue<=(null===(s=t.top)||void 0===s?void 0:s.pixelValue):0===o.w}));u=u.concat(i)}})),i){const e=[t.left,t.xm,t.right];e.some((t=>{if(null!=t){const o=wi(t,d);if((null==o?void 0:o.length)>0){null!=a&&null!=s&&o.forEach((t=>{!function(t,e,o){null!=e&&null!=o&&(e.setColor(o.sys.color.error.main),e.drawLine(t.pixelValue,t.from,t.pixelValue,t.to,!0))}(t,a,s)}));const i=o[0];if(xi(i,t)<=ui)return l=i.pixelValue-t.pixelValue,function(t,e,o,i,n){null!=i&&null!=n&&(i.setColor(n.sys.color.error.main),t.forEach((t=>{if(null!=t){let n=t.from,a=t.to,s=!1;if(e.forEach((e=>{bi(t,o,e)&&(n=Math.min(n,e.from),a=Math.max(a,e.to),s=!0)})),s){const e=t.pixelValue+o;i.drawLine(e,n,e,a)}}})))}(e,d,l,a,s),!0}}}))}if(n){const e=[t.top,t.ym,t.bottom];e.some((t=>{if(null!=t){const o=wi(t,u);if((null==o?void 0:o.length)>0){null!=a&&null!=s&&o.forEach((t=>{!function(t,e,o){null!=e&&null!=o&&(e.setColor(o.sys.color.error.main),e.drawLine(t.from,t.pixelValue,t.to,t.pixelValue,!0))}(t,a,s)}));const i=o[0];if(xi(i,t)<=ui)return r=i.pixelValue-t.pixelValue,function(t,e,o,i,n){null!=i&&null!=n&&(i.setColor(n.sys.color.error.main),t.forEach((t=>{if(null!=t){let n=t.from,a=t.to,s=!1;if(e.forEach((e=>{bi(t,o,e)&&(n=Math.min(n,e.from),a=Math.max(a,e.to),s=!0)})),s){const e=t.pixelValue+o;i.drawLine(n,e,a,e)}}})))}(e,u,r,a,s),!0}}}))}return{dx:l,dy:r}}const Ci=16;var Ri;function Ti(t,e=!1){const o={};if(["left","right","width","top","bottom","height"].forEach((e=>{null!=(null==t?void 0:t[e])?o[e]=a.utils.isPercentage(t[e])?"%":"px":o[e]="%"})),e){const t=o.left;o.left=o.right,o.right=t}return o}function Mi(t,e){const o=t.top,i=e.height-(t.top+t.height),n=t.left;return[e.width-(t.left+t.width)<n?1:0,i<o?1:0]}function Ai(t,e){return a.utils.isPercentage(t)?Math.round(a.utils.fromRatio(t,e)):Math.round(parseFloat(t))}function Pi(t,e,o){var i,n,s,l,r,d,u,c,p;const h=t.bbox,g=Ti(h,k()),m=null!==(i=t.setting)&&void 0!==i?i:{},y=function(t,e,o){var i,n,s;const l={},r=null!==(i=t.bbox)&&void 0!==i?i:{},d=null!==(s=null===(n=t.setting)||void 0===n?void 0:n.autoProps)&&void 0!==s?s:{};return d.width===a.LayoutItemSizeModes.Stretch?(l.left=Ai(r.left,e),l.right=e-Ai(r.right,e),l.width=l.right-l.left):d.width===a.LayoutItemSizeModes.Auto?d.left?l.right=e-Ai(r.right,e):l.left=Ai(r.left,e):(l.width=Ai(r.width,e),d.left?(l.right=e-Ai(r.right,e),l.left=l.right-l.width):(l.left=Ai(r.left,e),l.right=l.left+l.width)),d.height===a.LayoutItemSizeModes.Stretch?(l.top=Ai(r.top,o),l.bottom=o-Ai(r.bottom,o),l.height=l.bottom-l.top):d.height===a.LayoutItemSizeModes.Auto?d.top?l.bottom=o-Ai(r.bottom,o):l.top=Ai(r.top,o):(l.height=Ai(r.height,o),d.top?(l.bottom=o-Ai(r.bottom,o),l.top=l.bottom-l.height):(l.top=Ai(r.top,o),l.bottom=l.top+l.height)),l}(t,e,o),f={id:t.id,rect:y},v=t=>a.utils.isPercentage(t)?100-parseFloat(t)+"%":t,I=t=>a.utils.isPercentage(t)?100-parseFloat(t)+"%":e-parseFloat(t)+"px",x={value:h.left,pixelValue:y.left,usePercentage:"%"===g.left,origin:0},b={value:h.top,pixelValue:y.top,usePercentage:"%"===g.top,origin:0},w={value:v(h.right),pixelValue:y.right,usePercentage:"%"===g.right,origin:1},S={value:v(h.bottom),pixelValue:y.bottom,usePercentage:"%"===g.bottom,origin:1};if((null===(n=m.autoProps)||void 0===n?void 0:n.width)===a.LayoutItemSizeModes.Stretch)f.left=x,f.right=w,g.left===g.right&&"%"===g.left&&(f.xm={value:(parseFloat(f.left.value)+parseFloat(f.right.value))/2+"%",pixelValue:(y.left+y.right)/2,usePercentage:"%"===g.left});else if((null===(s=m.autoProps)||void 0===s?void 0:s.width)===a.LayoutItemSizeModes.Auto)(null===(l=m.autoProps)||void 0===l?void 0:l.left)?f.right=w:f.left=x;else if(null===(r=m.autoProps)||void 0===r?void 0:r.left){if(f.right=w,g.right===g.width){const t=parseFloat(h.right),e=parseFloat(h.width),o="px"===g.right?t+e:100-(t+e),i="px"===g.right?t+e/2:100-(t+e/2);f.left={value:`${o}${g.right}`,pixelValue:y.left,usePercentage:"%"===g.right,origin:1},f.xm={value:`${i}${g.right}`,pixelValue:y.left+y.width/2,usePercentage:"%"===g.right,origin:1}}}else if(f.left=x,g.left===g.width){const t=parseFloat(h.left),e=parseFloat(h.width),o=t+e;f.right={value:`${o}${g.left}`,pixelValue:y.right,usePercentage:"%"===g.left,origin:0},f.xm={value:`${t+e/2}${g.left}`,pixelValue:y.left+y.width/2,usePercentage:"%"===g.left,origin:0}}if(k()){let t,o,i;f.rect.left=e-f.rect.right,f.rect.right=f.rect.left+f.rect.width,null!=f.left&&(o={value:I(f.left.value),pixelValue:f.rect.right,usePercentage:"%"===g.left,origin:0===f.left.origin?1:0}),null!=f.right&&(t={value:I(f.right.value),pixelValue:f.rect.left,usePercentage:"%"===g.right,origin:0===f.right.origin?1:0}),null!=f.xm&&(i={value:I(f.xm.value),pixelValue:f.rect.left+f.rect.width/2,usePercentage:f.xm.usePercentage,origin:0===f.xm.origin?1:0}),f.right=o,f.left=t,f.xm=i}if((null===(d=m.autoProps)||void 0===d?void 0:d.height)===a.LayoutItemSizeModes.Stretch)f.top=b,f.bottom=S,g.top===g.bottom&&"%"===g.top&&(f.ym={value:(parseFloat(f.top.value)+parseFloat(f.bottom.value))/2+"%",pixelValue:(y.top+y.bottom)/2,usePercentage:"%"===g.top});else if((null===(u=m.autoProps)||void 0===u?void 0:u.height)===a.LayoutItemSizeModes.Auto)(null===(c=m.autoProps)||void 0===c?void 0:c.top)?f.bottom=S:f.top=b;else if(null===(p=m.autoProps)||void 0===p?void 0:p.top){if(f.bottom=S,g.bottom===g.height){const t=parseFloat(h.bottom),e=parseFloat(h.height),o="px"===g.bottom?t+e:100-(t+e),i="px"===g.bottom?t+e/2:100-(t+e/2);f.top={value:`${o}${g.bottom}`,pixelValue:y.top,usePercentage:"%"===g.bottom,origin:1},f.ym={value:`${i}${g.bottom}`,pixelValue:y.top+y.height/2,usePercentage:"%"===g.bottom,origin:1}}}else if(f.top=b,g.top===g.height){const t=parseFloat(h.top),e=parseFloat(h.height),o=t+e;f.bottom={value:`${o}${g.top}`,pixelValue:y.bottom,usePercentage:"%"===g.top,origin:0},f.ym={value:`${t+e/2}${g.top}`,pixelValue:y.top+y.height/2,usePercentage:"%"===g.top,origin:0}}return f}function Li(t,e,o,i){var n;const a=[];Object.keys(null!==(n=t.content)&&void 0!==n?n:{}).forEach((n=>{if(n!==i){const i=t.content[n];if(!i.isPending){const t=Pi(i,e,o);a.push(t)}}}));const s={left:0,right:e,width:e,top:0,bottom:o,height:o};return a.push({id:"",left:{value:"0px",pixelValue:0,usePercentage:!1,origin:0,from:0,to:o},right:{value:"0px",pixelValue:e,usePercentage:!1,origin:1,from:0,to:o},top:{value:"0px",pixelValue:0,origin:0,usePercentage:!1,from:0,to:e},bottom:{value:"0px",pixelValue:o,usePercentage:!1,origin:1,from:0,to:e},rect:s}),a.push({id:"",left:{value:"0%",pixelValue:0,usePercentage:!0,origin:0,from:0,to:o},xm:{value:"50%",pixelValue:Math.round(e/2),usePercentage:!0,origin:0,from:0,to:o},right:{value:"0%",pixelValue:e,usePercentage:!0,origin:1,from:0,to:o},top:{value:"0%",pixelValue:0,usePercentage:!0,origin:0,from:0,to:e},ym:{value:"50%",pixelValue:Math.round(o/2),usePercentage:!0,origin:0,from:0,to:e},bottom:{value:"0%",pixelValue:o,usePercentage:!0,origin:1,from:0,to:e},rect:s}),a}function ji(t,e,o,i,n,s,l,r){var d,u;const c=null!==(d=null==t?void 0:t.setting)&&void 0!==d?d:{},p=null!==(u=null==t?void 0:t.bbox)&&void 0!==u?u:{},h=0!==i.w||0!==i.h;if(h&&(c.hCenter&&"50%"===p.left||c.vCenter&&"50%"===p.top))return i;let g=function(t,e){if(0!==e.w||0!==e.h){const o={x:e.x,y:e.y,w:e.w,h:e.h};return t.width+e.w<Ci&&(o.w=Ci-t.width,0!==e.x&&(o.x=-o.w)),t.height+e.h<Ci&&(o.h=Ci-t.height,0!==e.y&&(o.y=-o.h)),o}return e}(o,i);n&&(g=function(t,e){if(0===e.w&&0===e.h)return e;const o=t.height/t.width;let i=e.w,n=e.h,a=e.x,s=e.y;Math.abs(i)*o>Math.abs(n)?n=Math.round(i*o):i=Math.round(n/o);0!==a&&(a=-i);0!==s&&(s=-n);return{x:a,y:s,w:i,h:n}}(o,g));const m=function(t,e,o,i,n){var s,l,r,d,u,c,p;const{x:h,y:g,w:m,h:y}=null!=n?n:{x:0,y:0,w:0,h:0},f=null!==(s=null==t?void 0:t.setting)&&void 0!==s?s:{},v={left:Math.round(e.left+h),width:Math.round(e.width+m),right:0,top:Math.round(e.top+g),height:Math.round(e.height+y),bottom:0};v.right=v.left+v.width,v.bottom=v.top+v.height;const I={id:null==t?void 0:t.id,rect:v},x=Mi(v,{width:o,height:i}),b=Ti(null==t?void 0:t.bbox,k());if(k()){const t=b.left;b.left=b.right,b.right=t}return(null===(l=f.autoProps)||void 0===l?void 0:l.width)===a.LayoutItemSizeModes.Stretch?(I.left={value:`1${b.left}`,pixelValue:v.left,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom},I.right={value:`1${b.right}`,pixelValue:v.left+v.width,usePercentage:"%"===b.right,origin:x[1],from:v.top,to:v.bottom}):0===x[0]?(I.left={value:`1${b.left}`,pixelValue:v.left,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom},b.width===b.left&&(null===(r=f.autoProps)||void 0===r?void 0:r.width)!==a.LayoutItemSizeModes.Auto&&(I.xm={value:`1${b.left}`,pixelValue:v.left+v.width/2,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom},I.right={value:`1${b.left}`,pixelValue:v.left+v.width,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom})):(I.right={value:`1${b.right}`,pixelValue:v.left+v.width,usePercentage:"%"===b.right,origin:x[0],from:v.top,to:v.bottom},b.width===b.right&&(null===(d=f.autoProps)||void 0===d?void 0:d.width)!==a.LayoutItemSizeModes.Auto&&(I.xm={value:`1${b.right}`,pixelValue:v.left+v.width/2,usePercentage:"%"===b.right,origin:x[0],from:v.top,to:v.bottom},I.left={value:`1${b.right}`,pixelValue:v.left,usePercentage:"%"===b.right,origin:x[0],from:v.top,to:v.bottom})),(null===(u=f.autoProps)||void 0===u?void 0:u.height)===a.LayoutItemSizeModes.Stretch?(I.top={value:`1${b.top}`,pixelValue:v.top,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right},I.bottom={value:`1${b.bottom}`,pixelValue:v.top+v.height,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right}):0===x[1]?(I.top={value:`1${b.top}`,pixelValue:v.top,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right},b.height===b.top&&(null===(c=f.autoProps)||void 0===c?void 0:c.height)!==a.LayoutItemSizeModes.Auto&&(I.ym={value:`1${b.top}`,pixelValue:v.top+v.height/2,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right},I.bottom={value:`1${b.top}`,pixelValue:v.top+v.height,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right})):(I.bottom={value:`1${b.bottom}`,pixelValue:v.top+v.height,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right},b.height===b.bottom&&(null===(p=f.autoProps)||void 0===p?void 0:p.height)!==a.LayoutItemSizeModes.Auto&&(I.ym={value:`1${b.bottom}`,pixelValue:v.top+v.height/2,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right},I.top={value:`1${b.bottom}`,pixelValue:v.top,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right})),I}(t,o,e.width,e.height,g);let{dx:y,dy:f}=Ii(m,s,g,e.width,e.height,l,r);const v=Si(m,s,g,0===y&&(!h||0!==i.w),0===f&&(!h||0!==i.h),l,r);y=0!==y?y:v.dx,f=0!==f?f:v.dy;let I=g;return 0===y&&0===f||(I=function(t,e,o){let i,n,{x:a,y:s,w:l,h:r}=t;i=0===l?Ri.None:0===a?Ri.Start:Ri.End;n=0===r?Ri.None:0===s?Ri.Start:Ri.End;0!==e&&(i===Ri.None?a+=e:i===Ri.End?(a+=e,l+=-e):l+=e);0!==o&&(n===Ri.None?s+=o:n===Ri.End?(s+=o,r+=-o):r+=o);return{x:a,y:s,w:l,h:r}}(g,y,f)),I}function zi(e,o,i){var n;const a={};let s=o,l=i;if(!s||!l){let o;if(window.jimuConfig.isBuilder){const i=document.querySelector(`iframe[name="${t.APP_FRAME_NAME_IN_BUILDER}"]`);if(i){o=(i.contentDocument||i.contentWindow.document).querySelector(`div.fixed-layout[data-layoutid=${e.id}]`)}}else o=document.querySelector(`div.fixed-layout[data-layoutid=${e.id}]`);o?(s=o.clientWidth,l=o.clientHeight):(s=100,l=100)}Object.keys(null!==(n=e.content)&&void 0!==n?n:{}).forEach((t=>{const o=Pi(e.content[t],s,l);a[t]=o}));const r=[...e.order];return r.sort(((t,e)=>{const o=a[t].rect,i=a[e].rect;if(o.top>i.top)return 1;if(o.top<i.top)return-1;const n=k()?o.right:o.left,s=k()?i.right:i.left;return n>s?1:n<s?-1:o.width>i.width||o.height>i.height?1:o.width<i.width||o.height<i.height?-1:0})),e.set("order",r)}function Ni(o,i){const n=(0,e.getAppConfigAction)(),s=n.appConfig,l=a.searchUtils.findLayoutItem(s,o),r=l.bbox;let d=l.setting||(0,t.Immutable)({});let u;switch(0!==parseInt(r[i],10)&&n.editLayoutItemProperty(o,"bbox",r.set(i,a.utils.isPercentage(r[i])?"0%":"0px")),d=d.setIn(["autoProps",i],!1),i){case"top":u="bottom";break;case"bottom":u="top";break;case"left":u="right";break;case"right":u="left"}if(d=d.setIn(["autoProps",u],!0),"left"===i||"right"===i?d=d.set("hCenter",!1):"top"!==i&&"bottom"!==i||(d=d.set("vCenter",!1)),n.editLayoutItemProperty(o,"setting",d),n.appConfig.useAutoSortInFixedLayout){const t=zi(n.appConfig.layouts[o.layoutId]);n.editLayoutProperty(o.layoutId,"order",t.order)}n.exec()}function ki(o,i){var n,s;const l=(0,e.getAppConfigAction)(),r=l.appConfig,d=a.searchUtils.findLayoutItem(r,o);let u=d.setting||(0,t.Immutable)({}),c=d.bbox;if("h"===i)if((null===(n=u.autoProps)||void 0===n?void 0:n.width)===a.LayoutItemSizeModes.Stretch){if(a.utils.isPercentage(c.left)!==a.utils.isPercentage(c.right))return;{const t=a.utils.isPercentage(c.left)?"%":"px",e=parseFloat(c.left)+parseFloat(c.right);c=c.set("left",`${e/2}${t}`).set("right",`${e/2}${t}`)}}else c=c.set("left","50%"),u=u.set("hCenter",!0).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0);else if((null===(s=u.autoProps)||void 0===s?void 0:s.height)===a.LayoutItemSizeModes.Stretch){if(a.utils.isPercentage(c.top)!==a.utils.isPercentage(c.bottom))return;{const t=a.utils.isPercentage(c.top)?"%":"px",e=parseFloat(c.top)+parseFloat(c.bottom);c=c.set("top",`${e/2}${t}`).set("bottom",`${e/2}${t}`)}}else c=c.set("top","50%"),u=u.set("vCenter",!0).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!0);if(l.editLayoutItemProperty(o,"bbox",c).editLayoutItemProperty(o,"setting",u),l.appConfig.useAutoSortInFixedLayout){const t=zi(l.appConfig.layouts[o.layoutId]);l.editLayoutProperty(o.layoutId,"order",t.order)}l.exec()}!function(t){t[t.Start=0]="Start",t[t.End=1]="End",t[t.None=2]="None"}(Ri||(Ri={}));const $i=[[{icon:Fo(),visible:()=>at()===t.AppMode.Design&&!st(),title:t=>t.formatMessage("align")},{icon:Ho(),label:t=>t.formatMessage(a.utils.isRTL()?"snapToRight":"snapToLeft"),title:t=>t.formatMessage(a.utils.isRTL()?"snapToRight":"snapToLeft"),autoFlipIcon:!0,onClick:t=>{const{layoutItem:e,layoutId:o}=t;Ni({layoutId:o,layoutItemId:e.id},"left")}},{icon:qo(),label:t=>t.formatMessage("alignHCenter"),title:t=>t.formatMessage("alignHCenter"),disabled:t=>{var e,o;const{layoutItem:i}=t;return(null===(o=null===(e=i.setting)||void 0===e?void 0:e.autoProps)||void 0===o?void 0:o.width)===a.LayoutItemSizeModes.Stretch&&a.utils.isPercentage(i.bbox.left)!==a.utils.isPercentage(i.bbox.right)},onClick:t=>{const{layoutItem:e,layoutId:o}=t;ki({layoutId:o,layoutItemId:e.id},"h")}},{icon:Wo(),label:t=>t.formatMessage(a.utils.isRTL()?"snapToLeft":"snapToRight"),title:t=>t.formatMessage(a.utils.isRTL()?"snapToLeft":"snapToRight"),autoFlipIcon:!0,onClick:t=>{const{layoutItem:e,layoutId:o}=t;Ni({layoutId:o,layoutItemId:e.id},"right")}},{icon:Uo(),label:t=>t.formatMessage("snapToTop"),title:t=>t.formatMessage("snapToTop"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;Ni({layoutId:o,layoutItemId:e.id},"top")}},{icon:Qo(),label:t=>t.formatMessage("alignVCenter"),title:t=>t.formatMessage("alignVCenter"),disabled:t=>{var e,o;const{layoutItem:i}=t;return(null===(o=null===(e=i.setting)||void 0===e?void 0:e.autoProps)||void 0===o?void 0:o.height)===a.LayoutItemSizeModes.Stretch&&a.utils.isPercentage(i.bbox.top)!==a.utils.isPercentage(i.bbox.bottom)},onClick:t=>{const{layoutItem:e,layoutId:o}=t;ki({layoutId:o,layoutItemId:e.id},"v")}},{icon:Zo(),label:t=>t.formatMessage("snapToBottom"),title:t=>t.formatMessage("snapToBottom"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;Ni({layoutId:o,layoutItemId:e.id},"bottom")}},{icon:Oo(),label:t=>t.formatMessage("fullWidth"),title:t=>t.formatMessage("fullWidth"),onClick:o=>{const{layoutItem:i,layoutId:n}=o;!function(o){const i=(0,e.getAppConfigAction)(),n=i.appConfig,s=a.searchUtils.findLayoutItem(n,o),l=s.bbox;let r=s.setting||(0,t.Immutable)({});if(r=r.set("hCenter",!1).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!1).setIn(["autoProps","width"],a.LayoutItemSizeModes.Stretch),i.editLayoutItemProperty(o,"bbox",l.set("left",a.utils.isPercentage(l.left)?"0%":"0px").set("right",a.utils.isPercentage(l.right)?"0%":"0px").set("width","100%")).editLayoutItemProperty(o,"setting",r),i.appConfig.useAutoSortInFixedLayout){const t=zi(i.appConfig.layouts[o.layoutId]);i.editLayoutProperty(o.layoutId,"order",t.order)}i.exec()}({layoutId:n,layoutItemId:i.id})}},{icon:ko(),label:t=>t.formatMessage("fullHeight"),title:t=>t.formatMessage("fullHeight"),onClick:o=>{const{layoutItem:i,layoutId:n}=o;!function(o){const i=(0,e.getAppConfigAction)(),n=i.appConfig,s=a.searchUtils.findLayoutItem(n,o),l=s.bbox;let r=s.setting||(0,t.Immutable)({});if(r=r.set("vCenter",!1).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!1).setIn(["autoProps","height"],a.LayoutItemSizeModes.Stretch),i.editLayoutItemProperty(o,"bbox",l.set("top",a.utils.isPercentage(l.top)?"0%":"0px").set("bottom",a.utils.isPercentage(l.bottom)?"0%":"0px").set("height","100%")).editLayoutItemProperty(o,"setting",r),i.appConfig.useAutoSortInFixedLayout){const t=zi(i.appConfig.layouts[o.layoutId]);i.editLayoutProperty(o.layoutId,"order",t.order)}i.exec()}({layoutId:n,layoutItemId:i.id})}},{icon:Bo(),label:t=>t.formatMessage("fullSize"),title:t=>t.formatMessage("fullSize"),onClick:o=>{const{layoutItem:i,layoutId:n}=o;!function(o){const i=(0,e.getAppConfigAction)(),n=i.appConfig,s=a.searchUtils.findLayoutItem(n,o),l=s.bbox;let r=s.setting||(0,t.Immutable)({});if(r=r.set("vCenter",!1).set("hCenter",!1).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!1).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!1).setIn(["autoProps","height"],a.LayoutItemSizeModes.Stretch).setIn(["autoProps","width"],a.LayoutItemSizeModes.Stretch),i.editLayoutItemProperty(o,"bbox",l.set("top",a.utils.isPercentage(l.top)?"0%":"0px").set("bottom",a.utils.isPercentage(l.bottom)?"0%":"0px").set("left",a.utils.isPercentage(l.left)?"0%":"0px").set("right",a.utils.isPercentage(l.right)?"0%":"0px").set("width","100%").set("height","100%")).editLayoutItemProperty(o,"setting",r),i.appConfig.useAutoSortInFixedLayout){const t=zi(i.appConfig.layouts[o.layoutId]);i.editLayoutProperty(o.layoutId,"order",t.order)}i.exec()}({layoutId:n,layoutItemId:i.id})}}],[{icon:zo(),visible:()=>at()===t.AppMode.Design&&!st(),title:t=>t.formatMessage("arrange")},{icon:ti(),label:t=>t.formatMessage("sendBackward"),title:t=>t.formatMessage("sendBackward"),onClick:t=>{const{layoutItem:o,layoutId:i}=t;!function(t){const o=(0,e.getAppConfigAction)(),i=o.appConfig,{layoutId:n,layoutItemId:a}=t,s=i.layouts[n];di(s.order,"parent order must not be empty to alter order");const l=[].concat(s.order),r=l.indexOf(a);r<=0||(l[r]=l[r-1],l[r-1]=t.layoutItemId,o.editLayoutProperty(n,"order",l).exec())}({layoutId:i,layoutItemId:o.id})}},{icon:oi(),label:t=>t.formatMessage("bringForward"),title:t=>t.formatMessage("bringForward"),onClick:t=>{const{layoutItem:o,layoutId:i}=t;!function(t){const o=(0,e.getAppConfigAction)(),i=o.appConfig,{layoutId:n,layoutItemId:a}=t,s=i.layouts[n];di(s.order,"parent order must not be empty to alter order");const l=[].concat(s.order),r=l.indexOf(a);r===l.length-1||r<0||(l[r]=l[r+1],l[r+1]=t.layoutItemId,o.editLayoutProperty(n,"order",l).exec())}({layoutId:i,layoutItemId:o.id})}},{icon:ni(),label:t=>t.formatMessage("sendToBack"),title:t=>t.formatMessage("sendToBack"),onClick:t=>{const{layoutItem:o,layoutId:i}=t;!function(t){const o=(0,e.getAppConfigAction)(),i=o.appConfig,{layoutId:n,layoutItemId:a}=t,s=i.layouts[n];di(s.order,"parent order must not be empty to alter order");const l=[].concat(s.order),r=l.indexOf(a);r<=0||(l.splice(r,1),l.splice(0,0,t.layoutItemId),o.editLayoutProperty(n,"order",l).exec())}({layoutId:i,layoutItemId:o.id})}},{icon:si(),label:t=>t.formatMessage("bringToFront"),title:t=>t.formatMessage("bringToFront"),onClick:t=>{const{layoutItem:o,layoutId:i}=t;!function(t){const o=(0,e.getAppConfigAction)(),i=o.appConfig,{layoutId:n,layoutItemId:a}=t,s=i.layouts[n];di(s.order,"parent order must not be empty to alter order");const l=[].concat(s.order),r=l.indexOf(a);r===l.length-1||r<0||(l.splice(r,1),l.push(t.layoutItemId),o.editLayoutProperty(n,"order",l).exec())}({layoutId:i,layoutItemId:o.id})}}],{icon:t=>{var e,o;const{layoutItem:i}=t;return null!==(o=null===(e=i.setting)||void 0===e?void 0:e.lockLayout)&&void 0!==o&&o?Ae():ri()},visible:()=>at()===t.AppMode.Design&&!st(),title:t=>{var e,o;const{layoutItem:i}=t,n=null!==(o=null===(e=i.setting)||void 0===e?void 0:e.lockLayout)&&void 0!==o&&o;return t.formatMessage(n?"unlockLayout":"lockLayout")},onClick:o=>{const{layoutItem:i,layoutId:n}=o;!function(o){const i=(0,e.getAppConfigAction)(),n=i.appConfig,s=a.searchUtils.findLayoutItem(n,o).setting||(0,t.Immutable)({});i.editLayoutItemProperty(o,"setting.lockLayout",!s.lockLayout).exec()}({layoutId:n,layoutItemId:i.id})}},{seperator:!0}];function Oi(t,e,o,i=!1){const n={};n.left=t.left+o.dx,n.width=t.width+o.dw;const a=e.right-t.right;0===o.dw?n.right=a-o.dx:0===o.dx?(o.dw>0&&(o.dw=Math.min(a,o.dw)),n.right=a-o.dw,n.width=t.width+o.dw):(n.right=a,o.dx<0&&(o.dx=Math.max(-t.left,o.dx),o.dw=-o.dx,n.left=t.left+o.dx,n.width=t.width+o.dw)),n.top=t.top+o.dy,n.height=t.height+o.dh;const s=e.bottom-t.bottom;return 0===o.dh?n.bottom=s-o.dy:0===o.dy?(o.dh>0&&(o.dh=Math.min(s,o.dh)),n.bottom=s-o.dh,n.height=t.height+o.dh):(n.bottom=s,o.dy<0&&(o.dy=Math.max(-t.top,o.dy),o.dh=-o.dy,n.top=t.top+o.dy,n.height=t.height+o.dh)),i&&k()?Bi(n):n}function Ei(t,e){var o,i,n,a,s;const l={};let r=null!==(o=null==e?void 0:e.autoProps)&&void 0!==o?o:{},d=t;const u=O("height",t,r),c=O("width",t,r);if(u===C.Stretch)l.top=d.top,l.bottom=d.bottom;else{const o=null!==(i=r.top)&&void 0!==i&&i,a=null!==(n=r.bottom)&&void 0!==n&&n;u===C.Custom&&(l.height=d.height),o!==a&&!a||null==t.top?l.bottom=d.bottom:l.top=d.top,e.vCenter&&"50%"===d.top&&(l.top="50%")}if(c===C.Stretch)l.left=d.left,l.right=d.right;else{const t=null!==(a=r.left)&&void 0!==a&&a,o=null!==(s=r.right)&&void 0!==s&&s;c===C.Custom&&(l.width=d.width),t===o?null!=d.left?l.left=d.left:l.right=d.right:t&&null!=d.right?l.right=d.right:l.left=d.left,e.hCenter&&"50%"===d.left&&(l.left="50%")}return l}function Bi(e){const o=(0,t.Immutable)(e),i=e.left;return o.set("left",e.right).set("right",i)}function Di(e,o,i,n){var a,s;let l=e,r=(0,t.Immutable)(null!=o?o:{});return(null===(a=null==o?void 0:o.autoProps)||void 0===a?void 0:a.width)!==C.Stretch&&(r=n.left<n.right?k()?r.setIn(["autoProps","right"],!1).setIn(["autoProps","left"],!0):r.setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0):k()?r.setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0):r.setIn(["autoProps","right"],!1).setIn(["autoProps","left"],!0)),(null===(s=null==o?void 0:o.autoProps)||void 0===s?void 0:s.height)!==C.Stretch&&(r=n.top<n.bottom?r.setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!0):r.setIn(["autoProps","top"],!0).setIn(["autoProps","bottom"],!1)),["left","right","top","bottom","width","height"].forEach((t=>{const o="left"===t||"right"===t||"width"===t?i.width:i.height;let a=j(e[t]);k()&&("left"===t?a=j(e.right):"right"===t&&(a=j(e.left))),l=null==e[t]||a?l.set(t,`${(100*n[t]/o).toFixed(1)}%`):l.set(t,`${Math.round(n[t])}px`)})),{bbox:l,setting:r}}class Fi extends t.React.PureComponent{constructor(){super(...arguments),this.state={},this.handleResizeEnd=(t,e,o,i,n,a)=>{const{layoutItem:s}=this.props;this.props.onResizeEnd(t,e,o,i,n,a,s,this.itemSetting)},this.handleResizing=(t,e,o,i,n,a,s)=>{this.props.onResizing(t,e,o,i,n,a,s)},this.moveUp=()=>{this.props.onMoveByKey(this.props.layoutItemId,0,-1)},this.moveDown=()=>{this.props.onMoveByKey(this.props.layoutItemId,0,1)},this.moveLeft=()=>{this.props.onMoveByKey(this.props.layoutItemId,-1,0)},this.moveRight=()=>{this.props.onMoveByKey(this.props.layoutItemId,1,0)}}getKeyboardComponent(){return this.props.isDesignMode?(0,t.jsx)(t.Keyboard,{bindings:{up:this.moveUp,down:this.moveDown,left:this.moveLeft,right:this.moveRight}}):null}getPositionStyle(){var e,o;const{layoutItem:i,offsetX:n,offsetY:s,dw:l,dh:r,initRect:d,containerRect:u}=this.props;let c=Ei(i.bbox,this.itemSetting);const p=i.setting;null!=d&&(c=Oi(d,u,{dw:l,dh:"ratio"===this.itemSetting.heightMode?l/a.utils.parseAspectRatio(this.itemSetting.aspectRatio):r,dx:n,dy:s},!0),(null==p?void 0:p.hCenter)&&"50%"===(null===(e=i.bbox)||void 0===e?void 0:e.left)&&(c.left="50%"),(null==p?void 0:p.vCenter)&&"50%"===(null===(o=i.bbox)||void 0===o?void 0:o.top)&&(c.top="50%"));const h=Object.assign(Object.assign({},c),function(t,e,o=!1){const i={},n=e.hCenter&&"50%"===t.left,a=e.vCenter&&"50%"===t.top,s=k()?-1:1;return n&&a?(i.right="auto",i.bottom="auto",i.transform=`translate(${-50*s}%, -50%)`):n?(i.right="auto",i.transform=`translateX(${-50*s}%)`):a&&(i.bottom="auto",i.transform="translateY(-50%)"),!o&&function(t){return"ratio"===t.heightMode&&null!=t.aspectRatio}(e)&&(i.height="auto"),i}(i.bbox,this.itemSetting,Boolean(d)));return 0===l&&0===r||(h.right="auto"),function(e){return[t.css`
      position: absolute;
      left: ${z(e,"left")};
      right: ${z(e,"right")};
      top: ${z(e,"top")};
      bottom: ${z(e,"bottom")};
      width: ${z(e,"width")};
      height: ${z(e,"height")};
    `,e.transform]}(h)}render(){const{layoutId:e,layoutItem:o,isLayoutLockChildren:i,draggable:s=!0,resizable:l=!0,showDefaultTools:r=!0}=this.props;if(null==o||o.isPending)return null;this.itemSetting=t.lodash.assign({},n,o.setting);const d=this.itemSetting.lockLayout,u=a.utils.parseAspectRatio(this.itemSetting.aspectRatio),c=a.utils.shouldUseAspectRatio(this.itemSetting),p=a.utils.getLayoutItemSizeMode("width",o.bbox,this.itemSetting.autoProps),h=a.utils.getLayoutItemSizeMode("height",o.bbox,this.itemSetting.autoProps),g=a.utils.handleOnebyOneAnimation(this.props),[m,y]=this.getPositionStyle();return(0,t.jsx)(Po,Object.assign({className:"d-flex",css:m,style:{transform:y},layoutId:e,layoutItemId:o.id,restrict:this.itemSetting.lockParent||i,draggable:s&&!d,resizable:l&&!d,showDefaultTools:r,toolItems:r?$i:[],onResizeStart:this.props.onResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,onClick:this.props.onClick,top:h!==a.LayoutItemSizeModes.Auto&&!c,bottom:h!==a.LayoutItemSizeModes.Auto&&!c,left:p!==a.LayoutItemSizeModes.Auto,right:p!==a.LayoutItemSizeModes.Auto,forceAspectRatio:c,aspectRatio:u,isInSection:this.props.isInSection,autoWidth:p===a.LayoutItemSizeModes.Auto,autoHeight:h===a.LayoutItemSizeModes.Auto},g),this.props.selected&&this.getKeyboardComponent())}}const Vi=(0,t.createSelector)([(t,e)=>{var o;const i=null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.selection;return null!=i&&(i.layoutId===e.layoutId&&i.layoutItemId===e.layoutItemId)},e=>{var o;return(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design}],((t,e)=>({selected:t,isDesignMode:e}))),Hi=t.ReactRedux.connect(Vi)(Fi);var Gi=p(6884),Wi=p(63),_i=p.n(Wi),Ui=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Yi=e=>{const o=window.SVG,{className:i}=e,n=Ui(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:a,src:_i()},n)):t.React.createElement("svg",Object.assign({className:a},n))},Zi=t.css`
  pointer-events: all;
`;function Xi(e){return t.css`
    position: relative;
    height: 200px;
    padding: 1rem;
    pointer-events: none;
    z-index: 1;
    .btn-text {
      line-height: 32px;
    }
    .btn {
      background: ${e.ref.palette.neutral[600]};
      &:hover {
        background: ${e.ref.palette.neutral[700]};
      }
    }
    .action-item {
      width: 32px;
    }
    .action-seprator {
      width: 300px;
      height: 1px;
      background-color: ${e.ref.palette.neutral[1100]};
    }
  `}function qi(i){const{pageContext:n,onPageTemplateSelected:a}=i,{builderTheme:s,formatMessage:l,isHeader:r,isFooter:d}=n,[u,c]=t.React.useState(!1),p=t.React.useRef(null),h=t.ReactRedux.useSelector((e=>{var o,i,n;const a=null!==(n=null===(i=null===(o=e.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return e.appRuntimeInfo.appMode===t.AppMode.Design&&!a})),m=()=>{c(!1)};let y;return y=n.isHeader?l("chooseHeaderTemplate"):n.isFooter?l("chooseFooterTemplate"):l("chooseTemplate",{type:n.isDialog?l("dialog").toLocaleLowerCase():l("page").toLocaleLowerCase()}),h?(0,t.jsx)("div",{className:"d-flex w-100 flex-column justify-content-center align-items-center",css:Xi(s)},(0,t.jsx)("div",{className:"d-flex flex-column justify-content-center align-items-center"},(0,t.jsx)(g,{placement:"bottom",title:y},(0,t.jsx)("div",{className:"action-item",ref:p},(0,t.jsx)(o.Button,{icon:!0,onClick:o=>{if(o.stopPropagation(),(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small)c(!u);else if(n.isDialog)e.appBuilderSync.publishSidePanelToApp({type:"templateBlock",templateMethod:"getWindowTemplates",onSelect:a});else{const t=r?"getHeaderTemplates":d?"getFooterTemplates":"getFullScreenPageTemplates",o="getFullScreenPageTemplates"===t?"template":"templateBlock";e.appBuilderSync.publishSidePanelToApp({type:o,templateMethod:t,onSelect:a})}},css:Zi,className:"rounded-circle"},(0,t.jsx)(Yi,{autoFlip:!0,size:"m",color:s.ref.palette.neutral[1100]})))),(0,t.jsx)("div",{className:"action-seprator mt-4"}),(0,t.jsx)("h5",{className:"btn-text mt-2"},l("dropWidgetToAdd"))),u&&!n.isDialog&&(0,t.jsx)($e.TemplateSelector,{templates:r?(0,Gi.getHeaderTemplates)():d?(0,Gi.getFooterTemplates)():(0,Gi.getFullScreenPageTemplates)(!1),referenceElement:p.current,onItemSelect:a,onClose:m}),u&&n.isDialog&&(0,t.jsx)($e.TemplateSelector,{templates:(0,Gi.getWindowTemplates)(!1),referenceElement:p.current,onItemSelect:a,onClose:m})):null}class Ji{constructor(t,e){this.canvas=t,this.ctx=t.getContext("2d"),this.ctx.font="1rem",this.theme=e}setSize(t,e,o=1){const i=Math.round(e*o),n=Math.round(t*o);o<1?(this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`,this.canvas.width=t,this.canvas.height=e,this.ctx.scale(1,1)):this.canvas.width===n&&this.canvas.height===i||(this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`,this.canvas.width=n,this.canvas.height=i,this.ctx.scale(o,o))}setColor(t){this.ctx.fillStyle=t,this.ctx.strokeStyle=t}drawRect(t){this.ctx.fillRect(t.left,t.top,t.width,t.height)}drawLine(t,e,o,i,n=!1,a){if(n?this.ctx.setLineDash([5,3]):this.ctx.setLineDash([]),this.ctx.beginPath(),t===o){let n=t<this.canvas.width/2?.5:-.5;n=Number.isInteger(t)?n:0,this.ctx.moveTo(t+n,e),this.ctx.lineTo(o+n,i)}if(e===i){let n=e<this.canvas.height/2?.5:-.5;n=Number.isInteger(e)?n:0,this.ctx.moveTo(t,e+n),this.ctx.lineTo(o,i+n)}if(this.ctx.stroke(),null!=a){const n=(t+o)/2,s=(e+i)/2;this.drawLabel(n,s,a,e===i)}}drawTailedLine(t,e,o,i,n=!1,a){if(n?this.ctx.setLineDash([5,3]):this.ctx.setLineDash([]),this.ctx.beginPath(),t===o){let n=t<this.canvas.width/2?.5:-.5;n=Number.isInteger(t)?n:0;const a=Math.min(e,i);let s=a<this.canvas.height/2?.5:-.5;s=Number.isInteger(a)?s:0;const l=Math.max(e,i);let r=l<this.canvas.height/2?.5:-.5;r=Number.isInteger(l)?r:0,this.ctx.moveTo(t+n,e),this.ctx.lineTo(o+n,i),this.ctx.moveTo(t-5,a+s),this.ctx.lineTo(t+5,a+s),this.ctx.moveTo(o-5,l+r),this.ctx.lineTo(o+5,l+r)}if(e===i){let n=e<this.canvas.height/2?.5:-.5;n=Number.isInteger(e)?n:0;const a=Math.min(t,o);let s=a<this.canvas.width/2?.5:-.5;s=Number.isInteger(a)?s:0;const l=Math.max(t,o);let r=l<this.canvas.width/2?.5:-.5;r=Number.isInteger(l)?r:0,this.ctx.moveTo(t,e+n),this.ctx.lineTo(o,i+n),this.ctx.moveTo(a+s,e-5),this.ctx.lineTo(a+s,e+5),this.ctx.moveTo(l+r,i-5),this.ctx.lineTo(l+r,i+5)}if(this.ctx.stroke(),null!=a){const n=(t+o)/2,s=(e+i)/2;this.drawLabel(n,s,a,e===i)}}drawLabel(t,e,o,i=!0){const n=this.ctx.measureText(o),s=n.width,l=n.actualBoundingBoxAscent+n.actualBoundingBoxDescent,r=s+8,d=l+8,u=a.utils.isRTL()?-1:1;this.ctx.save(),this.theme?this.ctx.fillStyle=this.theme.sys.color.primary.main:this.ctx.fillStyle="var(--primary-500)",i?(this.drawRoundRect(t-r/2,e-d-8,r,d),this.ctx.fillStyle="#FFFFFF",this.ctx.fillText(o,t-s*u/2,e-12)):(this.drawRoundRect(t+8,e-d/2,r,d),this.ctx.fillStyle="#FFFFFF",-1===u?this.ctx.fillText(o,t+s+12,e+l/2):this.ctx.fillText(o,t+12,e+l/2)),this.ctx.restore()}drawRoundRect(t,e,o,i,n=2){const a=n,s=n,l=n,r=n;this.ctx.beginPath(),this.ctx.moveTo(t+a,e),this.ctx.lineTo(t+o-s,e),this.ctx.quadraticCurveTo(t+o,e,t+o,e+s),this.ctx.lineTo(t+o,e+i-r),this.ctx.quadraticCurveTo(t+o,e+i,t+o-r,e+i),this.ctx.lineTo(t+l,e+i),this.ctx.quadraticCurveTo(t,e+i,t,e+i-l),this.ctx.lineTo(t,e+a),this.ctx.quadraticCurveTo(t,e,t+a,e),this.ctx.closePath(),this.ctx.fill()}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}}var Qi=function(t,e,o,i){return new(o||(o=Promise))((function(n,a){function s(t){try{r(i.next(t))}catch(t){a(t)}}function l(t){try{r(i.throw(t))}catch(t){a(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,l)}r((i=i.apply(t,e||[])).next())}))};const Ki=t.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,tn=t.css`
  ${Ki};
  pointer-events: none;
`;class en extends t.React.PureComponent{constructor(o){if(super(o),this.handleActivate=e=>{if(!rt()&&!dt())return;if(Math.abs(e.screenX-this.mousedownX)>a.CLICK_TOLRERANCE||Math.abs(e.screenY-this.mousedownY)>a.CLICK_TOLRERANCE)return void e.stopPropagation();const{isInSection:o,isInWidget:i}=this.props;this.pageContext.viewOnly||o||i||jt()||Rt()||(e.stopPropagation(),(0,t.getAppStore)().dispatch(t.appActions.selectionChanged(null)))},this.handleMouseDown=t=>{this.mousedownX=t.screenX,this.mousedownY=t.screenY},this.updateDeviceRatio=()=>{this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight,window.devicePixelRatio)},this.handleResizeStart=t=>{const{layout:e}=this.props;this.rndingLayoutId=t;const o=this.ref.querySelector(`div.exb-rnd[data-layoutid="${e.id}"][data-layoutitemid="${t}"]`);this.domRect=this.ref.getBoundingClientRect(),this.bboxGridlines=Li(this.props.layout,this.domRect.width,this.domRect.height,t);const i=o.getBoundingClientRect(),n=this.getPositionUnit(t);this.resizingRect=Object.assign({units:n},a.utils.relativeClientRect(i,this.domRect))},this.handleResizing=(t,e,o,i,n,a,s)=>{if(this.canvasPane.clear(),s>500)return void this.setState({offsetX:e,offsetY:o,dw:i,dh:n});const l=this.getResizingDelta(t,e,o,i,n,a);this.setState({offsetX:l.x,offsetY:l.y,dw:l.w,dh:l.h})},this.handleResizeEnd=(o,i,n,a,s,l,r,d)=>{var u,c;this.rndingLayoutId=null;const{layout:p}=this.props,h=this.getResizingDelta(o,i,n,a,s,l);this.canvasPane.clear();const g=Oi(this.resizingRect,this.domRect,{dx:h.x,dy:h.y,dw:h.w,dh:h.h}),m=(0,e.getAppConfigAction)(),y={layoutId:p.id,layoutItemId:o},{bbox:f,setting:v}=Di((0,t.Immutable)(r.bbox),r.setting,this.domRect,g);let I=f;if((null==d?void 0:d.hCenter)&&"50%"===(null===(u=r.bbox)||void 0===u?void 0:u.left)&&(I=I.set("left","50%")),(null==d?void 0:d.vCenter)&&"50%"===(null===(c=r.bbox)||void 0===c?void 0:c.top)&&(I=I.set("top","50%")),m.editLayoutItemProperty(y,"bbox",this.flipLeftRight?Bi(I):I).editLayoutItemProperty(y,"setting",v),m.appConfig.useAutoSortInFixedLayout){const t=zi(m.appConfig.layouts[y.layoutId],this.domRect.width,this.domRect.height);m.editLayoutProperty(y.layoutId,"order",t.order)}m.exec(),this.bboxGridlines=null,this.setState({offsetX:0,offsetY:0,dw:0,dh:0})},this.handleMoveItemByKey=(o,i,n)=>{var s,l,r;const{layout:d}=this.props;let u,c,p=d.content[o].bbox,h=null!==(s=d.content[o].setting)&&void 0!==s?s:(0,t.Immutable)({});const g=null!==(l=null==h?void 0:h.hCenter)&&void 0!==l&&l||null!==(r=null==h?void 0:h.vCenter)&&void 0!==r&&r;if(g){const t=this.ref.querySelector(`div[data-layoutitemid="${o}"]`);u=t.clientWidth,c=t.clientHeight}if(0!==i){if(a.utils.isPercentage(p.left)){const t=parseFloat(p.left);p=(null==h?void 0:h.hCenter)?p.set("left",`${(50-100*u/2/this.ref.clientWidth+.1*i).toFixed(1)}%`):p.set("left",`${(t+.1*i).toFixed(1)}%`)}else{const t=parseFloat(p.left);p=(null==h?void 0:h.hCenter)?p.set("left",`${(this.ref.clientWidth-u)/2+i}px`):p.set("left",`${t+i}px`)}if(a.utils.isPercentage(p.right)){const t=parseFloat(p.right);p=(null==h?void 0:h.hCenter)?p.set("right",`${(50+100*u/2/this.ref.clientWidth-.1*i).toFixed(1)}%`):p.set("right",`${(t-.1*i).toFixed(1)}%`)}else{const t=parseFloat(p.right);p=(null==h?void 0:h.hCenter)?p.set("right",(this.ref.clientWidth+u)/2-i+"px"):p.set("right",t-i+"px")}(null==h?void 0:h.hCenter)&&(h=h.set("hCenter",!1))}if(0!==n){if(a.utils.isPercentage(p.top)){const t=parseFloat(p.top);p=(null==h?void 0:h.vCenter)?p.set("top",`${(50-100*c/2/this.ref.clientHeight+.1*n).toFixed(1)}%`):p.set("top",`${(t+.1*n).toFixed(1)}%`)}else{const t=parseFloat(p.top);p=(null==h?void 0:h.vCenter)?p.set("top",`${(this.ref.clientHeight-c)/2+n}px`):p.set("top",`${t+n}px`)}if(a.utils.isPercentage(p.bottom)){const t=parseFloat(p.bottom);p=(null==h?void 0:h.vCenter)?p.set("bottom",`${(50+100*c/2/this.ref.clientHeight-.1*n).toFixed(1)}%`):p.set("bottom",`${(t-.1*n).toFixed(1)}%`)}else{const t=parseFloat(p.bottom);p=(null==h?void 0:h.hCenter)?p.set("bottom",(this.ref.clientHeight+c)/2-n+"px"):p.set("bottom",t-n+"px")}(null==h?void 0:h.vCenter)&&(h=h.set("vCenter",!1))}const m=(0,e.getAppConfigAction)();if(g&&m.editLayoutItemProperty({layoutId:d.id,layoutItemId:o},"setting",h),m.editLayoutItemProperty({layoutId:d.id,layoutItemId:o},"bbox",p),m.appConfig.useAutoSortInFixedLayout){const t=zi(m.appConfig.layouts[d.id],this.ref.clientWidth,this.ref.clientHeight);m.editLayoutProperty(d.id,"order",t.order)}m.exec()},this.handleDragOver=(e,o,i,n,s,l,r)=>{var d,u,c;if(this.canvasPane.clear(),!this.state.isDragover||r>500)return;let p,h,g,m=0,y=0;(null===(d=e.layoutInfo)||void 0===d?void 0:d.layoutId)===this.props.layout.id?(p=e.layoutInfo.layoutItemId,g=this.getPositionUnit(p),h=this.props.layout.content[p]):g=Ti({},this.flipLeftRight);const f=e.rotation>0||e.rotation<0,v=ji(h,this.domRect,n,{x:0,y:0,w:0,h:0},!1,this.bboxGridlines,f?null:this.canvasPane,f?null:this.pageContext.builderTheme);if(null!=o&&(0!==v.x||0!==v.y)){const t=null!==(u=parseFloat(o.getAttribute("data-translatex")))&&void 0!==u?u:0,e=null!==(c=parseFloat(o.getAttribute("data-translatey")))&&void 0!==c?c:0;o.style.transform=`translate(${t+v.x}px, ${e+v.y}px)`}m=v.x,y=v.y,this.canvasPane.setColor(this.pageContext.builderTheme.sys.color.primary.main);if(function(e,o,i){const n=o.width-(e.left+e.width),s=o.height-(e.top+e.height),l="px"===e.units.left?t.utils.formatPixelNumber(`${Math.round(e.left)}px`):t.utils.formatPercentageNumber(a.utils.toRatio(e.left,o.width)),r="px"===e.units.right?t.utils.formatPixelNumber(`${Math.round(n)}px`):t.utils.formatPercentageNumber(a.utils.toRatio(n,o.width)),d="px"===e.units.top?t.utils.formatPixelNumber(`${Math.round(e.top)}px`):t.utils.formatPercentageNumber(a.utils.toRatio(e.top,o.height)),u="px"===e.units.bottom?t.utils.formatPixelNumber(`${Math.round(s)}px`):t.utils.formatPercentageNumber(a.utils.toRatio(s,o.height));e.left<=n?e.top<=s?(i.drawLine(0,e.top,e.left,e.top,!1,l),i.drawLine(e.left,0,e.left,e.top,!1,d)):(i.drawLine(0,e.top+e.height,e.left,e.top+e.height,!1,l),i.drawLine(e.left,e.top+e.height,e.left,o.height,!1,u)):e.top<=s?(i.drawLine(e.left+e.width,e.top,o.width,e.top,!1,r),i.drawLine(e.left+e.width,0,e.left+e.width,e.top,!1,d)):(i.drawLine(e.left+e.width,e.top+e.height,o.width,e.top+e.height,!1,r),i.drawLine(e.left+e.width,e.top+e.height,e.left+e.width,o.height,!1,u))}({width:n.width,height:n.height,left:n.left+m,top:n.top+y,units:g},this.domRect,this.canvasPane),null==e.layoutInfo||e.isPending){this.canvasPane.setColor(t.polished.rgba(this.pageContext.builderTheme.sys.color.primary.light,.2));const e={left:n.left+m,top:n.top+y,width:n.width,height:n.height};this.canvasPane.drawRect(e)}},this.handleToggleDragoverEffect=(t,e)=>{var o;if(this.canvasPane.clear(),t){let t;this.domRect=this.ref.getBoundingClientRect(),(null===(o=e.layoutInfo)||void 0===o?void 0:o.layoutId)===this.props.layout.id&&(t=e.layoutInfo.layoutItemId),this.bboxGridlines=Li(this.props.layout,this.domRect.width,this.domRect.height,t)}this.setState({isDragover:t})},this.handleDragEnter=t=>{},this.handleDragLeave=()=>{},this.handleDrop=(t,e,o)=>{let i;i=null==t.layoutInfo||t.layoutInfo.layoutId!==this.props.layout.id?Ti({},this.flipLeftRight):this.getPositionUnit(t.layoutInfo.layoutItemId);const{snappedRect:n,delta:a}=this.calSnappedRect(t,e,Object.assign({units:i},o),t.layoutInfo);this.canvasPane.clear();const s={left:o.left+a.x,top:o.top+a.y,width:o.width,height:o.height,right:e.width-(o.left+a.x+o.width),bottom:e.height-(o.top+a.y+o.height)};this.addWidgetToLayout(t,e,s,n).catch((t=>{console.error(t)})),this.bboxGridlines=null},this.toggleShowWidgetList=t=>{t.stopPropagation(),this.setState({showWidgetList:!this.state.showWidgetList})},this.closeWidgetList=()=>{this.state.showWidgetList&&this.setState({showWidgetList:!1})},this.handlePageTemplateSelected=o=>{const i=(0,e.getAppConfigAction)();this.setState({isLoadingTemplate:!0}),this.pageContext.isHeader?i.applyHeaderTemplate(o).then((()=>{i.exec(),t.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).catch((t=>{console.error(t)})):this.pageContext.isFooter?i.applyFooterTemplate(o).then((()=>{i.exec(),t.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).catch((t=>{console.error(t)})):this.pageContext.isDialog?i.applyDialogTemplate(this.pageContext.dialogId,o).then((()=>{i.exec(),t.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).catch((t=>{console.error(t)})):i.applyPageBodyTemplate(this.pageContext.pageId,o).then((()=>{i.exec(),t.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).catch((t=>{console.error(t)}))},null==this.props.layout)return;const i=t.ExtensionManager.getInstance().getExtensions(`${t.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==i?void 0:i.length)>0){const t=i.find((t=>t.layoutType===this.props.layout.type));this.layoutTransform=null==t?void 0:t.transformLayout}this.flipLeftRight=a.utils.isRTL(),this.state={offsetX:0,offsetY:0,dw:0,dh:0,isDragover:!1,showWidgetList:!1,isLoadingTemplate:!1}}componentDidMount(){var t,e,o;this.canvasPane=new Ji(this.canvasRef,this.pageContext.builderTheme),this.updateDeviceRatio();const i=`(resolution: ${window.devicePixelRatio}dppx)`;this.mediaQueryList=null===(t=window.matchMedia)||void 0===t?void 0:t.call(window,i);const{name:n,version:a}=window.jimuUA.browser;"safari"===n.toLowerCase()&&parseInt(a)<14?null===(e=this.mediaQueryList)||void 0===e||e.addListener(this.updateDeviceRatio):null===(o=this.mediaQueryList)||void 0===o||o.addEventListener("change",this.updateDeviceRatio)}componentWillUnmount(){var t,e;const{name:o,version:i}=window.jimuUA.browser;"safari"===o.toLowerCase()&&parseInt(i)<14?null===(t=this.mediaQueryList)||void 0===t||t.removeListener(this.updateDeviceRatio):null===(e=this.mediaQueryList)||void 0===e||e.removeEventListener("change",this.updateDeviceRatio)}componentDidUpdate(){this.updateDeviceRatio()}isResizingItem(){return 0!==this.state.dh||0!==this.state.dw}getResizingDelta(t,e,o,i,n,a){return ji(this.props.layout.content[t],this.domRect,this.resizingRect,{x:e,w:i,y:o,h:n},a,this.bboxGridlines,this.canvasPane,this.pageContext.builderTheme)}calSnappedRect(t,e,o,i){let n;(null==i?void 0:i.layoutId)===this.props.layout.id&&(n=this.props.layout.content[i.layoutItemId]);const s=ji(n,this.domRect,o,{x:0,y:0,w:0,h:0},!1,this.bboxGridlines),l={left:o.left+s.x,top:o.top+s.y,width:o.width,height:o.height};return l.right=e.width-(+l.left+ +l.width),l.bottom=e.height-(+l.top+ +l.height),o.width>e.width&&(l.width=e.width,l.left=0),o.height>e.height&&(l.height=e.height,l.top=0),l.left=a.utils.toRatio(l.left,e.width),l.top=a.utils.toRatio(l.top,e.height),l.width=a.utils.toRatio(l.width,e.width),l.height=a.utils.toRatio(l.height,e.height),l.right=a.utils.toRatio(l.right,e.width),l.bottom=a.utils.toRatio(l.bottom,e.height),{snappedRect:l,delta:s}}addWidgetToLayout(o,i,n,a,s){return Qi(this,void 0,void 0,(function*(){const{layout:l,browserSizeMode:r}=this.props,d=(0,e.getAppConfigAction)(s),u=yield V(d.appConfig,o,l.id),{layoutInfo:c,updatedAppConfig:p}=u,h=e.LayoutServiceProvider.getInstance().getServiceByType(t.LayoutType.FixedLayout).processAfterItemAdded(p,o,c,r,i,n,null,{snapResult:a});(0,t.getAppStore)().dispatch(t.appActions.layoutChanged(h,c))}))}getPositionUnit(t){return Ti(this.props.layout.content[t].bbox,this.flipLeftRight)}createItem(e,o,i){const{itemResizable:n,itemDraggable:a,itemSelectable:s,showDefaultTools:l}=this.props,{offsetX:r,offsetY:d,dw:u,dh:c}=this.state,p=o===this.rndingLayoutId?r:0,h=o===this.rndingLayoutId?d:0,g=o===this.rndingLayoutId?u:0,m=o===this.rndingLayoutId?c:0,y=o===this.rndingLayoutId?this.resizingRect:void 0,f=o===this.rndingLayoutId?this.domRect:void 0,v=e.content[o];return(0,t.jsx)(Hi,{key:`${e.id}_${o}`,index:i,layoutItem:v,offsetX:p,offsetY:h,dw:g,dh:m,initRect:y,containerRect:f,layoutId:e.id,layoutItemId:o,draggable:a,resizable:n,selectable:s,showDefaultTools:l,isLayoutLockChildren:this.layoutSetting.lockChildren,onResizeStart:this.handleResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,onMoveByKey:this.handleMoveItemByKey,isInSection:this.props.isInSection})}render(){const{layout:e,className:n,style:s,layouts:l,isPageItem:r,mainSizeMode:d,browserSizeMode:u}=this.props;return null==e?null:(0,t.jsx)(a.PageContext.Consumer,null,(c=>{var p,h;this.pageContext=c;let g=e;const m=l[u]!==e.id;m&&null!=this.layoutTransform&&(g=this.layoutTransform(e,d,u)),this.layoutSetting=t.lodash.assign({},i,m?{}:e.setting);const y=null!==(p=g.order)&&void 0!==p?p:[],f=(0,t.classNames)("layout fixed-layout",n,{[xt]:null===(h=e.setting)||void 0===h?void 0:h.lockDescendants}),v=0!==this.state.dh||0!==this.state.dw,I=Object.assign(Object.assign(Object.assign({height:"auto",position:"relative"},s),o.styleUtils.toCSSStyle(this.layoutSetting.style)),{width:"100%",overflow:"hidden"}),x={display:this.state.isDragover||v?"block":"none",zIndex:y.length+1},b=!this.state.isLoadingTemplate&&a.utils.isEmptyLayout(g)&&!c.viewOnly&&e.id===c.rootLayoutId;return(0,t.jsx)("div",{className:f,ref:t=>this.ref=t,onClick:this.handleActivate,onMouseDown:this.handleMouseDown,style:I,"data-layoutid":g.id},(0,t.jsx)(t.IntersectionContext.Provider,{value:{monitor:!1}},(0,t.jsx)(t.OneByOneAnimation,{oid:g.id,"data-layoutid":g.id,className:"trail-container",css:t.css`
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                  `},(0,t.jsx)(Ve,{css:Ki,layouts:this.props.layouts,highlightDragover:!r,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect,isRepeat:this.props.isRepeat}),y.map(((t,e)=>this.createItem(g,t,e))))),b&&(0,t.jsx)(qi,{pageContext:this.pageContext,onPageTemplateSelected:this.handlePageTemplateSelected}),this.state.isLoadingTemplate&&(0,t.jsx)(o.Loading,{type:o.LoadingType.Primary}),(0,t.jsx)("canvas",{css:tn,style:x,ref:t=>this.canvasRef=t}))}))}}en.displayName="FixedLayout";const on=t.ReactRedux.connect(a.utils.mapStateToLayoutProps)(en);const nn={min:16,space:10};class an extends t.React.PureComponent{constructor(){super(...arguments),this.state={isResizing:!1,dw:0,dh:0},this.onResizeStart=(t,e,o)=>{this.initWidth=e,this.initHeight=o,this.props.onResizeStart(t),this.setState({isResizing:!0})},this.onResizing=(t,e,o,i,n)=>{this.props.onResizing(t,e,o,i,n),this.setState({dw:i,dh:n,isResizing:!0})},this.onResizeEnd=(t,e,o,i,n,a)=>{const{layoutItem:s}=this.props;this.props.onResizeEnd(t,e,o,i,n,s),this.setState({isResizing:!1,dw:0,dh:0})}}isStretchInCrossAxis(){const{layoutItem:t}=this.props;return function(t){var e,o;return(null===(o=null===(e=t.setting)||void 0===e?void 0:e.autoProps)||void 0===o?void 0:o.width)!==C.Custom}(t)}calHeight(t,e){return function(t,e){var o,i;return(null===(o=t.autoProps)||void 0===o?void 0:o.height)===C.Auto||"ratio"===t.heightMode?"ratio"===t.heightMode?{height:"auto",flex:"0 0 auto"}:{height:"auto"}:(null===(i=t.autoProps)||void 0===i?void 0:i.height)===C.Stretch||"fit"===t.heightMode?{flex:"1 1 auto"}:{height:e.height,flexShrink:0}}(t,e)}getStyle(e,o){const{layoutItem:i}=this.props,{dw:n,dh:a,isResizing:s}=this.state,l=i.bbox||{},r=this.calHeight(e,l);return r.width=o?"auto":l.width,s&&(n||a)&&(r.height=this.initHeight+a,r.width=this.initWidth+n),this.autoHeight="auto"===r.height,function(e,o,i){var n,a,s;const l=(null===(n=o.autoProps)||void 0===n?void 0:n.height)===C.Auto;return t.css`
    align-self: ${i?"stretch":null!==(s=null===(a=o.style)||void 0===a?void 0:a.alignSelf)&&void 0!==s?s:"auto"};
    width: ${z(e,"width")};
    height: ${z(e,"height")};
    flex: ${e.flex};
    flex-shrink: ${e.flexShrink};
    min-height: ${l?"unset":null};
  `}(r,e,o)}render(){var e,o;const{layoutId:i,layoutItem:n,draggable:s,resizable:l,selectable:r,showDefaultTools:d}=this.props;if(!n||n.isPending)return null;const u=n.setting||{},c=null!==(o=null===(e=u.autoProps)||void 0===e?void 0:e.height)&&void 0!==o?o:C.Custom,p=(0,t.classNames)("flexbox-layout-item",{"d-flex":c!==C.Auto}),h=this.isStretchInCrossAxis(),g=a.utils.shouldUseAspectRatio(u),m=a.utils.parseAspectRatio(u.aspectRatio),y=a.utils.handleOnebyOneAnimation(this.props);return(0,t.jsx)(Po,Object.assign({css:this.getStyle(u,h),layoutId:i,layoutItemId:n.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,left:!h,right:!h,top:!1,bottom:c===C.Custom&&!g,draggable:s,resizable:l,selectable:r,showDefaultTools:d,onClick:this.props.onClick,className:p,forceAspectRatio:g,aspectRatio:m,autoHeight:this.autoHeight},y))}}const sn=e=>t.css`
  height: 100%;
  overflow-x: hidden;
  justify-content: ${e.justifyContent};
  overflow-y: auto !important;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
  &:hover {
    -ms-overflow-style: auto;  /* Internet Explorer 10+ */
    scrollbar-width: thin;  /* Firefox */
    &::-webkit-scrollbar {
      display: block;  /* Safari and Chrome */
    }
  }
  & > div.flexbox-layout-item ~ div.flexbox-layout-item {
    margin-top: ${e.space}px;
  }
`,ln=t.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,rn=t.css`
  ${ln};
  z-index: 20;
  pointer-events: none;
`,dn=10;class un extends t.React.PureComponent{constructor(){super(...arguments),this.state={isDragover:!1},this.handleItemResizeStart=t=>{const{layout:e}=this.props;this.domRect=this.ref.getBoundingClientRect();const o=this.ref.querySelector(`div.exb-rnd[data-layoutid="${e.id}"][data-layoutitemid="${t}"]`).getBoundingClientRect();this.resizingRect=a.utils.relativeClientRect(o,this.domRect)},this.handleItemResizing=()=>{},this.handleItemResizeEnd=(t,o,i,n,s,l)=>{const{layout:r}=this.props,d=r.content[t].bbox;let u;u=a.utils.isPercentage(d.width)?`${(100*(this.resizingRect.width+n)/this.domRect.width).toFixed(4)}%`:`${Math.round(this.resizingRect.width+n)}px`;const c={width:u,height:Math.round(this.resizingRect.height+s)};this.childRects=[],this.domRect=null;(0,e.getAppConfigAction)().editLayoutItemProperty({layoutId:this.props.layout.id,layoutItemId:t},"bbox",c).exec()},this.handleDragOver=(t,e,o,i)=>{var n;let a=i;if(this.canvasPane.clear(),(null===(n=this.childRects)||void 0===n?void 0:n.length)>0){const{insertY:t,refId:e}=function(t,e,o){const i=e.top+e.height/2;let n,a,s=!1;if(o.some(((t,e)=>{if(t.top+t.height/2>i){if(0===e)n=t.top/2;else{const i=o[e-1];n=(t.top+i.top+i.height)/2}s=!0,a=t.id}return s})),!s){const e=o[o.length-1];n=(e.top+e.height+t.height)/2}return{refId:a,insertY:n}}(o,a,this.childRects);this.referenceId=e,a={top:t-5+this.ref.scrollTop,width:o.width-dn,left:5,height:dn}}else a={top:o.height/2-5,width:o.width-dn,left:5,height:dn};this.canvasPane.setColor(this.builderTheme.sys.color.primary.light),this.canvasPane.drawRect(a)},this.handleToggleDragoverEffect=t=>{t&&(this.referenceId=null,this.collectBounds(null)),this.setState({isDragover:t})},this.handleDragEnter=()=>{},this.handleDragLeave=()=>{},this.handleDrop=(o,i,n)=>{this.canvasPane.clear();const{layout:a}=this.props;let s=0;null!=this.referenceId?s=a.order.indexOf(this.referenceId):null!=a.order&&(s=a.order.length);V((0,e.getAppConfigAction)().appConfig,o,a.id).then((a=>{const{layoutInfo:l,updatedAppConfig:r}=a,d=e.LayoutServiceProvider.getInstance().getServiceByType(t.LayoutType.ColumnLayout).processAfterItemAdded(r,o,l,null,i,n,s);(0,t.getAppStore)().dispatch(t.appActions.layoutChanged(d,l))})).finally(null),this.referenceId=null,this.childRects=[]}}componentDidMount(){this.canvasPane=new Ji(this.canvasRef),this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}componentDidUpdate(){this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}collectBounds(t){const{layout:e}=this.props;this.childRects=[],this.domRect=this.ref.getBoundingClientRect();const o=this.ref.parentNode.querySelectorAll(`div[data-layoutid="${e.id}"] > .trail-container > div.exb-rnd`);return(null==o?void 0:o.length)>0&&o.forEach((o=>{const i=o.getAttribute("data-layoutitemid");if(t!==i&&e.order.includes(i)){const t=a.utils.relativeClientRect(o.getBoundingClientRect(),this.domRect);t.id=i,this.childRects.push(t)}})),this.childRects.sort(((t,e)=>t.top-e.top))}createItem(e,o,i){const{layout:n,itemDraggable:a,itemResizable:s,itemSelectable:l,showDefaultTools:r}=this.props;return(0,t.jsx)(an,{key:e,index:o,space:i.space,layoutId:n.id,layoutItemId:e,layoutItem:n.content[e],draggable:a,resizable:s,selectable:l,showDefaultTools:r,onResizeStart:this.handleItemResizeStart,onResizing:this.handleItemResizing,onResizeEnd:this.handleItemResizeEnd})}isEmpty(){var t;const{layout:e}=this.props,o=null!==(t=e.order)&&void 0!==t?t:[];return!(o.length>0&&o.some((t=>!e.content[t].isPending)))}render(){var e;const{layout:i,className:n}=this.props,s=null!==(e=i.order)&&void 0!==e?e:[],l=Object.assign({},nn,i.setting),r=this.isEmpty();return(0,t.jsx)(a.PageContext.Consumer,null,(e=>{this.builderTheme=e.builderTheme,this.theme=e.theme;const a={position:"relative",minWidth:l.min,padding:o.styleUtils.toCSSPadding(l.padding)},d=(0,t.classNames)("layout column-layout",n),u={display:this.state.isDragover?"block":"none"};return(0,t.jsx)("div",{className:d,ref:t=>this.ref=t,style:a,"data-layoutid":i.id},(0,t.jsx)(t.IntersectionContext.Provider,{value:{monitor:!0,layoutId:i.id}},(0,t.jsx)(t.OneByOneAnimation,{oid:i.id,className:"trail-container d-flex flex-column w-100",css:t.css`
                    position: ${r?"absolute":null};
                    ${sn(l)};
                  `},(0,t.jsx)(Ve,{css:ln,layouts:this.props.layouts,highlightDragover:!0,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect}),s.map(((t,e)=>this.createItem(t,e,l))))),r&&this.props.children,(0,t.jsx)("canvas",{css:rn,style:u,ref:t=>this.canvasRef=t}))}))}}const cn=t.ReactRedux.connect(a.utils.mapStateToLayoutProps)(un),pn={space:10,style:{padding:{number:[10,10,10,10],unit:o.DistanceUnits.PIXEL}}},hn={heightMode:"fixed",aspectRatio:1,offsetX:0,offsetY:0,style:{alignSelf:"flex-start"}},gn=2,mn=12,yn=t.css`
  width: 100%;
  display: flex;
  justify-content: center;

  .offset-1 {
    margin-left: 8.33333%;
    margin-right: 0;
  }
  .offset-2 {
    margin-left: 16.66667%;
    margin-right: 0;
  }
  .offset-3 {
    margin-left: 25%;
    margin-right: 0;
  }
  .offset-4 {
    margin-left: 33.33333%;
    margin-right: 0;
  }
  .offset-5 {
    margin-left: 41.66667%;
    margin-right: 0;
  }
  .offset-6 {
    margin-left: 50%;
    margin-right: 0;
  }
  .offset-7 {
    margin-left: 58.33333%;
    margin-right: 0;
  }
  .offset-8 {
    margin-left: 66.66667%;
    margin-right: 0;
  }
  .offset-9 {
    margin-left: 75%;
    margin-right: 0;
  }
  .offset-10 {
    margin-left: 83.33333%;
    margin-right: 0;
  }
  .offset-11 {
    margin-left: 91.66667%;
    margin-right: 0;
  }
`;function fn(e){return(0,t.Immutable)(e).set("left",mn-parseInt(e.left,10)-parseInt(e.width,10))}const vn=t.css`
  position: absolute;
  left: 0;
  max-height: 40px;
  height: 20%;
  right: 0;
  z-index: ${a.LayoutZIndex.BoundaryDropArea};
  display: flex;
  pointer-events: all;
  display: flex;

  &.drop-active {
    background: transparent !important;
  }

  body:not(.design-mode) & {
    display: none !important;
  }
`,In=t.css`
  ${vn};
  top: 0;
`,xn=t.css`
  ${vn};
  bottom: 0;
`;class bn extends t.React.PureComponent{constructor(o){super(o),this.state={isResizing:!1,dh:0},this.handleResizeStart=(t,e,o)=>{this.initWidth=e,this.initHeight=o,this.props.onResizeStart(t),this.setState({isResizing:!0})},this.handleResizing=(t,e,o,i,n)=>{this.props.onResizing(t,e,o,i,n),this.setState({dh:n,isResizing:!0})},this.handleResizeEnd=(t,e,o,i,n,a)=>{const{layoutItem:s}=this.props;this.props.onResizeEnd(t,e,o,i,n,s),this.setState({isResizing:!1,dh:0})},this.handleDropAtTop=(t,e,o)=>{this.dropAtBoundary(t,e,o,"top")},this.handleDropAtBottom=(t,e,o)=>{this.dropAtBoundary(t,e,o,"bottom")},this.dropAtBoundary=(o,i,n,s)=>{let l=(0,e.getAppConfigAction)();(function(o,i,n,s,l,r){return E(this,void 0,void 0,(function*(){var d;let u=(0,e.getAppConfigAction)(o);const c=o.layouts[l.layoutId].content[l.layoutItemId],p=$(),h=c.without("id").without("type").without("widgetId").without("sectionId").without("screenGroupId");e.appBuilderSync.publishIsBusyToBuilder(!0);const g=yield u.createWidget({uri:"widgets/layout/column/"}),m=e.LayoutServiceProvider.getInstance().getServiceByType(t.LayoutType.RowLayout).createBlankItem(u.appConfig,l.layoutId);let y=m[0];const f=m[1],v=y.layouts[l.layoutId].order;u=(0,e.getAppConfigAction)(y),u.editLayoutProperty(l.layoutId,"order",[].concat(v,f));const I=Object.keys(g.layouts)[0],x=g.layouts[I],b=a.searchUtils.findLayoutId(x,p,u.appConfig.mainSizeMode),w=e.LayoutServiceProvider.getInstance().getServiceByType(t.LayoutType.ColumnLayout),S=u.moveLayoutItem(l,b,p,p);y=w.processAfterItemAdded(u.appConfig,i,S,null,n,s,0);const C=yield V(y,i,b);y=w.processAfterItemAdded(C.updatedAppConfig,i,C.layoutInfo,null,n,s,"top"===r?0:1),u=(0,e.getAppConfigAction)(y),u.editLayoutProperty(l.layoutId,`content.${l.layoutItemId}`,h).editLayoutItemProperty(l,"id",l.layoutItemId).editLayoutItemProperty(l,"type",t.LayoutItemType.Widget).editLayoutItemProperty(l,"widgetId",g.id).editLayoutItemProperty(S,"bbox.height",h.bbox.height).editWidgetProperty(g.id,`parent.${p}`,[l]);let R=h.bbox;const T=Math.round(parseFloat(R.height)+s.height+20);return R=R.set("height",`${T}px`),u.editLayoutItemProperty(l,"bbox",R),u.editLayoutProperty(l.layoutId,"content",u.appConfig.layouts[l.layoutId].content.without(f)),(null===(d=i.layoutInfo)||void 0===d?void 0:d.layoutId)===l.layoutId?u.editLayoutProperty(l.layoutId,"order",v.filter((t=>t!==i.layoutInfo.layoutItemId))):u.editLayoutProperty(l.layoutId,"order",v),e.appBuilderSync.publishIsBusyToBuilder(!1),{updatedAppConfig:u.appConfig,layoutInfo:l}}))})(l.appConfig,o,i,n,{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},s).then((({updatedAppConfig:t})=>{l=(0,e.getAppConfigAction)(t),l.exec()})).finally(null)},this.fakeTopLayouts=(0,t.Immutable)({[t.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[t.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[t.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.fakeBottomLayouts=(0,t.Immutable)({[t.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_blarge`,[t.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_bmedium`,[t.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_bsmall`})}isFunctionalWidget(){var e,o,i;const{layoutItem:n}=this.props;if(n.type===t.LayoutItemType.Widget){let a=!1;const s=null===(o=null===(e=(0,t.getAppStore)().getState().appConfig)||void 0===e?void 0:e.widgets)||void 0===o?void 0:o[n.widgetId];return null!=(null===(i=null==s?void 0:s.manifest)||void 0===i?void 0:i.properties)&&(a=s.manifest.widgetType===t.WidgetType.Layout||s.manifest.properties.hasEmbeddedLayout),!a}return!1}getStyle(e){const{gutter:o,layoutItem:i,isMultiRow:n}=this.props,{dh:s,isResizing:l}=this.state,r=i.bbox,d=a.utils.isRTL()?-1:1,u=function(t,e,o){var i,n,a,s,l,r,d,u,c,p,h,g,m,y;return o?{height:(null===(i=t.autoProps)||void 0===i?void 0:i.height)===C.Auto?"auto":e.height,alignSelf:null!==(a=null===(n=t.style)||void 0===n?void 0:n.alignSelf)&&void 0!==a?a:"flex-start"}:"ratio"===t.heightMode?{alignSelf:null!==(l=null===(s=t.style)||void 0===s?void 0:s.alignSelf)&&void 0!==l?l:"flex-start"}:(null===(r=t.autoProps)||void 0===r?void 0:r.height)===C.Auto?{height:"auto",alignSelf:null!==(u=null===(d=t.style)||void 0===d?void 0:d.alignSelf)&&void 0!==u?u:"flex-start"}:(null===(c=t.autoProps)||void 0===c?void 0:c.height)===C.Custom?{height:e.height,alignSelf:null!==(h=null===(p=t.style)||void 0===p?void 0:p.alignSelf)&&void 0!==h?h:"flex-start"}:(null===(g=t.autoProps)||void 0===g?void 0:g.height)===C.Stretch||"fit"===t.heightMode?{alignSelf:"stretch"}:parseFloat(e.height)>0?{height:e.height,alignSelf:null!==(y=null===(m=t.style)||void 0===m?void 0:m.alignSelf)&&void 0!==y?y:"flex-start"}:{alignSelf:"stretch"}}(e,r,n);return l&&0!==s&&(u.height=this.initHeight+s),function(e,o,i,n,a){var s,l,r,d;return e?[t.css`
        padding: ${i/2}px 0;
        height: ${z(n,"height")};
        align-self: ${n.alignSelf};
      `,0!==a.offsetX||0!==a.offsetY?`translate(${(null!==(s=a.offsetX)&&void 0!==s?s:0)*o}px, ${null!==(l=a.offsetY)&&void 0!==l?l:0}px)`:null]:[t.css`
      padding: 0 ${i/2}px;
      height: ${z(n,"height")};
      align-self: ${n.alignSelf};
    `,0!==a.offsetX||0!==a.offsetY?`translate(${(null!==(r=a.offsetX)&&void 0!==r?r:0)*o}px, ${null!==(d=a.offsetY)&&void 0!==d?d:0}px)`:null]}(n,d,o,u,e)}render(){var e;const{order:o,span:i,offset:n,layoutId:s,layoutItem:l,draggable:r,resizable:d,selectable:u}=this.props;if(null==l||l.isPending)return null;const c=t.lodash.assign({},hn,l.setting),p=a.utils.shouldUseAspectRatio(c),h=null===(e=c.autoProps)||void 0===e?void 0:e.height,g=(0,t.classNames)("row-layout-item d-flex",`col-${i}`,`offset-${n}`,`order-${o}`,{"fix-height":h===a.LayoutItemSizeModes.Custom}),m=this.isFunctionalWidget(),y=t.css`
      width: 100%;
      height: 10px;
      background: ${this.props.builderTheme.sys.color.primary.dark};
    `,f=a.utils.parseAspectRatio(c.aspectRatio),v=a.utils.handleOnebyOneAnimation(this.props),[I,x]=this.getStyle(c);return(0,t.jsx)(Po,Object.assign({css:I,style:{transform:x},layoutId:s,layoutItemId:l.id,onResizeStart:this.handleResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,left:!0,right:!0,top:!1,bottom:h===a.LayoutItemSizeModes.Custom&&!p,draggable:r,resizable:d,selectable:u,onClick:this.props.onClick,className:g,forceAspectRatio:p,aspectRatio:f,autoHeight:h===a.LayoutItemSizeModes.Auto},v),(0,t.jsx)(t.React.Fragment,null,m&&(0,t.jsx)(Ve,{css:t.css`
                ${In};
              `,layouts:this.fakeTopLayouts,highlightDragover:!0,onDrop:this.handleDropAtTop},(0,t.jsx)("div",{css:y})),m&&(0,t.jsx)(Ve,{css:t.css`
                ${xn};
              `,layouts:this.fakeBottomLayouts,highlightDragover:!0,onDrop:this.handleDropAtBottom},(0,t.jsx)("div",{css:t.css`${y};position: absolute; bottom:0;`}))))}}function wn(t,e){let o=-1;return e.some(((e,i)=>{if(e.id===t)return o=i,!0})),o}function Sn(e,o,i,n){const s=n.map((e=>(0,t.Immutable)(e))),l=wn(e,s);if(a.utils.isRTL()&&(o=0!==o?0:-i),o>0){const t=s[l],e=Math.min(o,t.width-1);return s[l]=t.set("left",t.left+e).set("width",t.width-e),s}if(o<0){let t=0;for(let e=0;e<l;e+=1)t+=Math.min(s[e].width,gn);const e=s[l].left-t,i=Math.abs(o);if(e>0){let t=0;for(let e=l;e>=0;e-=1){const o=s[e];let n=0;if(e>0){const t=s[e-1];n=o.left-(t.left+t.width)}else n=o.left;if(0===n)continue;const a=t+n>=i?i-t:n;s[l]=s[l].set("width",s[l].width+a);for(let t=e;t<=l;t+=1)s[t]=s[t].set("left",s[t].left-a);if(t+n>=i)return s;t+=n}if(l>0)for(let e=l-1;e>=0;e-=1){const o=s[e],n=o.width-gn;if(n<=0)continue;const a=t+n>=i?i-t:n;s[l]=s[l].set("width",s[l].width+a),s[e]=o.set("width",o.width-a);for(let t=e+1;t<=l;t+=1)s[t]=s[t].set("left",s[t].left-a);if(t+n>=i)return s;t+=n}}return s}if(i<0){const t=Math.min(Math.abs(i),s[l].width-1);return s[l]=s[l].set("width",s[l].width-t),s}if(i>0){let t=0;for(let e=l+1;e<s.length;e+=1)t+=Math.min(s[e].width,gn);const e=i;if(mn-(s[l].left+s[l].width)-t>0){let t=0;for(let o=l;o<s.length;o+=1){const i=s[o];let n=0;if(o!==s.length-1){n=s[o+1].left-(i.left+i.width)}else n=mn-(i.left+i.width);if(0===n)continue;const a=t+n>=e?e-t:n;s[l]=s[l].set("width",s[l].width+a);for(let t=l+1;t<=o;t+=1)s[t]=s[t].set("left",s[t].left+a);if(t+n>=e)return s;t+=n}if(l!==s.length-1)for(let o=l+1;o<s.length;o+=1){const i=s[o],n=i.width-gn;if(n<=0)continue;const a=t+n>=e?e-t:n;s[l]=s[l].set("width",s[l].width+a),s[o]=i.set("width",i.width-a);for(let t=l+1;t<=o;t+=1)s[t]=s[t].set("left",s[t].left+a);if(t+n>=e)return s;t+=n}}return s}return s}function Cn(e,o,i){const n=i.map((e=>(0,t.Immutable)(e))),a=wn(e,n),s=n[a];return n.splice(a,1),Rn(s,o,n)}function Rn(e,o,i){const n=i.map((e=>(0,t.Immutable)(e)));let a=(0,t.Immutable)(e);const s=Math.max(o,0);if(a=a.set("left",s),null==n||0===n.length)return a=a.set("width",Math.min(a.width,mn-a.left)),[a];let l,r=n.length;const d=()=>{if(0===r)u=n[r].left,l=u;else{const t=n[r-1];u=r<n.length?n[r].left-(t.left+t.width):mn-(t.left+t.width),l=t.left+t.width+u}};n.some(((t,e)=>{if(s<=t.left)return r=e,!0}));let u=r<n.length?n[r].left-s:mn-s;if(u>=a.width)return n.splice(r,0,a),n;const c=u;if(d(),u>=a.width)return a=a.set("left",l-a.width),n.splice(r,0,a),n;u=c;for(let t=r;t<n.length;t+=1){const e=n[t];let o=0;if(t!==n.length-1){o=n[t+1].left-(e.left+e.width)}else o=mn-(e.left+e.width);if(0===o)continue;const i=u+o>=a.width?a.width-u:o;for(let e=r;e<=t;e+=1)n[e]=n[e].set("left",n[e].left+i);if(u+o>=a.width)return n.splice(r,0,a),n;u+=o}if(d(),u>=a.width)return a=a.set("left",l-a.width),n.splice(r,0,a),n;for(let t=r-1;t>=0;t-=1){const e=n[t];let o=0;if(t>0){const i=n[t-1];o=e.left-(i.left+i.width)}else o=e.left;if(0===o)continue;const i=u+o>=a.width?a.width-u:o;for(let e=t;e<=r-1;e+=1)n[e]=n[e].set("left",n[e].left-i);if(u+o>=a.width)return a=a.set("left",l-a.width),n.splice(r,0,a),n;u+=o}if(d(),u>=gn)return a=a.set("left",l-u).set("width",u),n.splice(r,0,a),n;if(r!==n.length)for(let t=r;t<n.length;t+=1){const e=n[t],o=e.width-gn;if(o<=0)continue;const i=u+o>=gn?gn-u:o;n[t]=e.set("width",e.width-i);for(let e=r;e<=t;e+=1)n[e]=n[e].set("left",n[e].left+i);if(u+o>=gn)return a=a.set("left",n[r].left-gn).set("width",gn),n.splice(r,0,a),n;u+=o}if(d(),u>=gn)return a=a.set("left",l-u).set("width",u),n.splice(r,0,a),n;for(let t=r-1;t>=0;t-=1){const e=n[t],o=e.width-gn;if(o<=0)continue;const i=u+o>=gn?gn-u:o;n[t]=e.set("width",e.width-i);for(let e=t+1;e<=r-1;e+=1)n[e]=n[e].set("left",n[e].left-i);if(u+o>=gn)return a=a.set("left",l-gn).set("width",gn),n.splice(r,0,a),n;u+=o}return n}function Tn(e){const{builderTheme:o,visible:i,gutter:n=0}=e;return(0,t.jsx)("div",{css:t.css`
        pointer-events: none;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0px;
        position: absolute;
        z-index: 1;
        display: ${i?"flex":"none"};
      `},[0,1,2,3,4,5,6,7,8,9,10,11].map((e=>(0,t.jsx)("div",{key:e,css:t.css`
              width: 8.333333%;
            `},(0,t.jsx)("div",{css:t.css`
                padding-left: ${n/2}px;
                padding-right: ${n/2}px;
                height: 100%;
                width: 100%;
                overflow: hidden;
              `},(0,t.jsx)("div",{css:t.css`
                  transform: translateY(-5%);
                  border: 1px dashed ${t.polished.rgba(o.ref.palette.neutral[900],.6)};
                  height: 110%;
                  width: 100%;
                `}))))))}const Mn=t.css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`,An=t.css`
  ${Mn};
  bottom: 0;
  top: 0;
  z-index: ${a.LayoutZIndex.DragMoveTip};
  pointer-events: none;
`;class Pn extends t.React.PureComponent{constructor(o){super(o),this.state={isResizing:!1,updatingRects:null,isDragoverCenter:!1},this.handleItemResizeStart=t=>{this.domRect=this.ref.getBoundingClientRect(),this.setState({isResizing:!0})},this.handleItemResizing=(t,e,o,i,n)=>{const a=this.domRect.width/mn,s=Sn(t,Math.round(e/a),Math.round(i/a),this.childRects);this.setState({updatingRects:s})},this.handleItemResizeEnd=(t,o,i,n,s,l)=>{const{layout:r}=this.props,d=this.domRect.width/mn,u=Math.round(o/d),c=Math.round(n/d),p=(0,e.getAppConfigAction)();Sn(t,u,c,this.childRects).forEach((e=>{const o=r.content[e.id].bbox;let i=o.height;e.id===t&&(i=a.utils.isPercentage(o.height)?`${(parseFloat(e.height)+100*s/this.domRect.height).toFixed(4)}%`:`${Math.round(parseFloat(e.height)+s)}px`);const n={left:e.left,width:e.width,height:i};p.editLayoutItemProperty({layoutId:r.id,layoutItemId:e.id},"bbox",n)})),p.exec(),this.setState({isResizing:!1,updatingRects:null})},this.handleToggleDragoverCenterEffect=t=>{this.referenceId=null,t&&this.collectBounds(),this.setState({isDragoverCenter:t})},this.handleDragOver=(t,e,o,i,n,a)=>{var s;const l=null!==(s=t.layoutInfo)&&void 0!==s?s:{layoutId:null},r=this.reCalculateRects(t,o,i,n);let d;r.some((t=>{if(null==t.id||t.layoutId===l.layoutId&&t.id===l.layoutItemId)return d=t,!0}));let u=!0,c=d.left;if(this.flippedChildRects.some((t=>{if((t.layoutId!==d.layoutId||t.id!==d.id)&&(t.left<=d.left&&t.left+t.width>d.left&&(u=!1),!u)){const e=r.find((e=>e.layoutId===t.layoutId&&e.id===t.id));return c=e.left+e.width<=d.left?t.left+t.width:t.left,!0}})),this.dragInsertPos=c,this.canvasPane.clear(),u)this.canvasPane.drawRect({left:c*this.colWidth+this.space/2,top:0,width:d.width*this.colWidth-this.space,height:i.height});else{const t=Math.min(o.width-this.space/2,Math.max(0,c*this.colWidth-this.space/2));this.canvasPane.drawRect({left:t,top:0,width:10,height:o.height})}},this.handleDragEnter=()=>{this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight),this.canvasPane.setColor(t.polished.rgba(this.builderTheme.sys.color.primary.light,.5))},this.handleDragLeave=()=>{this.canvasPane.clear()},this.handleDrop=(o,i,n)=>{const{layout:a}=this.props,s=(0,e.getAppConfigAction)(),{addedItemRect:l,insertIndex:r,appConfig:d}=this.calDropPosition(s.appConfig,o,i,n,!1);null!=l?V(d,o,a.id).then((n=>{const{layoutInfo:a,updatedAppConfig:s}=n,d=e.LayoutServiceProvider.getInstance().getServiceByType(t.LayoutType.RowLayout).processAfterItemAdded(s,o,a,null,i,l,r);(0,t.getAppStore)().dispatch(t.appActions.layoutChanged(d,a))})).finally(null):(0,t.getAppStore)().dispatch(t.appActions.layoutChanged(d,o.layoutInfo)),this.canvasPane.clear()},this.flipLeftRight=a.utils.isRTL()}componentDidMount(){this.canvasPane=new Ji(this.guideDragOverRef)}getConfig(){var t;const{layout:e}=this.props;return null!==(t=e.setting)&&void 0!==t?t:pn}reCalculateRects(t,e,o,i){var n,a;const s=null!==(n=t.layoutInfo)&&void 0!==n?n:{layoutId:null},{layout:l}=this.props,r=this.getConfig();this.space=null!==(a=r.space)&&void 0!==a?a:0;const d=this.maxPageWidth>0?Math.min(this.maxPageWidth,e.width):e.width,u=i-(e.width-d)/2,c=o.left-(e.width-d)/2;this.colWidth=d/mn;const p=Math.round(u/this.colWidth),h=Math.round(c/this.colWidth),g=Math.max(1,Math.ceil(o.width/this.colWidth)),m=function(t,e,o,i,n,a){var s;let l;const r=null!==(s=e.layoutInfo)&&void 0!==s?s:{layoutId:null},d=r.layoutId===t;return a.some((t=>(!d||t.id!==r.layoutItemId)&&(t.left>=o&&t.left<o+i||o>=t.left&&o<t.left+t.width)))?(a.some(((t,e)=>{if(d&&t.id===r.layoutItemId)return!1;if(n>=t.left&&n<=t.left+t.width)return n>=t.left&&n<t.left+t.width/2?(l=t.left,!0):(l=t.left+t.width,!0);if(o<t.left&&o+i>t.left){let o=0;if(0===e)o=t.left;else{let i;for(let t=e-1;t>=0&&(i=a[t],d&&i.id===r.layoutItemId);t-=1);o=null!=i?t.left-(i.left+i.width):t.left}return l=o>=i?t.left-i:t.left-o,!0}return o>t.left&&o<t.left+t.width?(l=t.left+t.width,!0):void 0})),l):o}(l.id,t,h,g,p,this.flippedChildRects);return null==t.id&&this.isInRow(s)?Cn(s.layoutItemId,m,this.flippedChildRects):Rn({width:g,height:o.height,layoutId:s.layoutId,id:s.layoutItemId},m,this.flippedChildRects)}calDropPosition(t,o,i,n,a){var s;const l=this.maxPageWidth>0?Math.min(this.maxPageWidth,i.width):i.width,r=null!==(s=o.layoutInfo)&&void 0!==s?s:{layoutId:null},{layout:d}=this.props,u=l/mn,c=this.dragInsertPos,p=Math.max(1,Math.ceil(n.width/u)),h=(0,e.getAppConfigAction)(t);let g,m,y;return g=!a&&null==o.id&&this.isInRow(r)?Cn(r.layoutItemId,c,this.flippedChildRects):Rn({width:p,height:n.height,layoutId:r.layoutId,id:r.layoutItemId},c,this.flippedChildRects),g.forEach(((t,e)=>{var i;let n={left:t.left,width:t.width,height:t.height};if(this.flipLeftRight&&(n=fn(n)),t.layoutId===d.id)h.editLayoutItemProperty({layoutId:t.layoutId,layoutItemId:t.id},"bbox",n),t.id===(null===(i=o.layoutInfo)||void 0===i?void 0:i.layoutItemId)&&null!=o.id&&h.setLayoutItemToPending({layoutId:t.layoutId,layoutItemId:t.id},!1);else{m=n,y=0+e}})),{addedItemRect:m,insertIndex:y,appConfig:h.appConfig}}isInRow(t){const{layout:e}=this.props;return(null==t?void 0:t.layoutId)===e.id}collectBounds(){var t;const{transformedLayout:e}=this.props,o=null!==(t=e.order)&&void 0!==t?t:[];return this.childRects=[],o.forEach((t=>{var o,i;if(e.content[t].isPending)return;const n=null===(i=null===(o=e.content)||void 0===o?void 0:o[t])||void 0===i?void 0:i.bbox;null!=n&&this.childRects.push({layoutId:e.id,id:t,left:parseInt(n.left,10),width:parseInt(n.width,10),height:n.height})})),this.childRects.sort(((t,e)=>t.left-e.left)),this.flipLeftRight?(this.flippedChildRects=[],this.childRects.forEach((t=>{let e={left:t.left,width:t.width,height:t.height};e=fn(e),this.flippedChildRects.push({layoutId:t.layoutId,id:t.id,left:e.left,width:e.width,height:e.height})})),this.flippedChildRects.sort(((t,e)=>t.left-e.left))):this.flippedChildRects=this.childRects,this.childRects}createItem(e,o){var i;const{transformedLayout:n,itemDraggable:a,itemResizable:s,itemSelectable:l,isMultiRow:r}=this.props,d=this.getConfig(),u=e[o],c=null!==(i=d.space)&&void 0!==i?i:0;let p;if(0===o)p=u.left;else{const t=e[o-1];p=u.left-t.left-t.width}return(0,t.jsx)(bn,{key:`${u.layoutId}_${u.id}`,order:o+1,offset:p,span:u.width,gutter:c,isMultiRow:r,builderTheme:this.builderTheme,layoutId:n.id,layoutItemId:u.id,layoutItem:n.content[u.id],draggable:a,resizable:s,selectable:l,onResizeStart:this.handleItemResizeStart,onResizing:this.handleItemResizing,onResizeEnd:this.handleItemResizeEnd})}render(){var e;const{transformedLayout:o,className:i}=this.props,{isResizing:n,isDragoverCenter:s}=this.state,l=this.getConfig(),r=s;let d;n&&null!=this.state.updatingRects?d=this.state.updatingRects:(this.collectBounds(),d=this.childRects);const u=null!==(e=l.space)&&void 0!==e?e:0;return(0,t.jsx)(a.PageContext.Consumer,null,(e=>(this.maxPageWidth=e.maxWidth,this.builderTheme=e.builderTheme,(0,t.jsx)("div",{className:(0,t.classNames)("row-layout",i,{"row-rtl":this.flipLeftRight}),css:yn,"data-layoutid":o.id},(0,t.jsx)("div",{css:t.css`
                width: 100%;
                max-width: ${e.maxWidth>0?`${e.maxWidth}px`:"none"};
              `},(0,t.jsx)("div",{ref:t=>this.ref=t,css:t.css`
                    position: relative;
                    height: 100%;
                    margin-left: ${-u/2}px;
                    margin-right: ${-u/2}px;
                    display: flex;
                    flex-direction: column;
                    .row {
                      overflow: ${this.props.isMultiRow?"auto":"unset"};
                    }
                    & > .jimu-widget-placeholder {
                      width: calc(100% - ${u}px);
                      align-self: center;
                    }
                  `},(0,t.jsx)(t.IntersectionContext.Provider,{value:{monitor:!1}},(0,t.jsx)(t.OneByOneAnimation,{className:(0,t.classNames)("row m-0",{"flex-nowrap":!this.props.isMultiRow,"h-100":d.length>0}),oid:o.id,"data-layoutid":o.id},(0,t.jsx)(Ve,{css:Mn,layouts:this.props.layouts,highlightDragover:!1,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverCenterEffect}),d.map(((t,e)=>this.createItem(d,e))))),0===d.length&&this.props.children,(0,t.jsx)(Tn,{visible:r||n,builderTheme:e.builderTheme,gutter:u}),(0,t.jsx)("canvas",{css:t.css`
                      ${An};
                      display: ${r?"block":"none"};
                    `,ref:t=>this.guideDragOverRef=t})))))))}}class Ln extends t.React.PureComponent{constructor(e){super(e),this.onResize=(t,e)=>{var o;if(this.props.browserSizeMode!==this.props.mainSizeMode)return;if(0===e)return;const{widgetId:i}=this.props;null!=(null===(o=window.runtimeInfo.widgets)||void 0===o?void 0:o[i])?window.runtimeInfo.widgets[i].height=e:window.runtimeInfo.widgets[i]={height:e}},this.handleDebounceResize=t.lodash.debounce(this.onResize,200)}findExtension(){const e=t.ExtensionManager.getInstance().getExtensions(`${t.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==e?void 0:e.length)>0){const t=e.find((t=>"ROW"===t.layoutType));this.layoutTransform=null==t?void 0:t.transformLayout}}collectRowItems(){var t;const{layout:e,layouts:o,browserSizeMode:i,mainSizeMode:n}=this.props;null==this.layoutTransform&&this.findExtension();let s=e;o[i]!==e.id&&null!=this.layoutTransform&&(s=this.layoutTransform(e,n,i,a.utils.getAppConfig())),this.finalLayout=s;const l=null!==(t=s.order)&&void 0!==t?t:[],r=[];let d=[],u=0;return r.push(d),l.forEach((t=>{if(s.content[t].isPending)return;const e=s.content[t].bbox,o=parseInt(e.left,10),i=Math.floor(o/mn);i>u&&(d=[],u=i,r.push(d)),d.push(t)})),r}createRow(){const{layout:e,layouts:o}=this.props;return(0,t.jsx)(Pn,{layouts:o,layout:e,transformedLayout:this.finalLayout,isMultiRow:this.numOfRows>1},this.props.children)}render(){var e,i;const{layout:n,className:a}=this.props,s=null!==(i=(null!==(e=n.setting)&&void 0!==e?e:pn).style)&&void 0!==i?i:pn.style;return this.numOfRows=this.collectRowItems().length,(0,t.jsx)("div",{className:(0,t.classNames)("layout d-flex",a),css:t.css`
          width: 100%;
          padding: ${o.styleUtils.toCSSPadding(s.padding)};
        `,"data-layoutid":n.id},this.createRow(),(0,t.jsx)(t.ReactResizeDetector,{handleHeight:!0,onResize:this.handleDebounceResize}))}}const jn=t.ReactRedux.connect(a.utils.mapStateToLayoutProps)(Ln);var zn;function Nn(t,e){var o;return null===(o=t.content)||void 0===o?void 0:o[e]}function kn(e,o,i){var n,a,s,l,r,d,u;const{layoutId:c,layoutItemId:p}=o,h=e.layouts[c].content[p];if((null==h?void 0:h.type)===t.LayoutItemType.Widget){const t=e.widgets[h.widgetId];return t?null!==(a=null!==(n=null==t?void 0:t.label)&&void 0!==n?n:h.label)&&void 0!==a?a:h.id:i("placeholder")}if((null==h?void 0:h.type)===t.LayoutItemType.Section){return e.sections[h.sectionId].label}return(null==h?void 0:h.gridType)===t.GridItemType.Row?null!==(s=h.label)&&void 0!==s?s:i("gridRow"):(null==h?void 0:h.gridType)===t.GridItemType.Column?null!==(l=h.label)&&void 0!==l?l:i("gridCol"):(null==h?void 0:h.gridType)===t.GridItemType.Tab?null!==(r=h.label)&&void 0!==r?r:i("tabs"):null!==(u=null!==(d=null==h?void 0:h.label)&&void 0!==d?d:null==h?void 0:h.id)&&void 0!==u?u:""}function $n(t,e){const o={id:`${a.utils.getMaximumId(t)+1}`,gridType:e};return{outLayout:t.setIn(["content",o.id],o),outItem:o}}function On(t,e,o){return t.setIn(["content",e,"bbox"],{width:o})}function En(t,e,o,i){return t.setIn(["content",e,o],i)}function Bn(t,e,o,i,n){const a=Nn(t,o),s=[].concat(a.children),l=n?i:i+1;return s.splice(l,0,e),En(t,o,"children",s)}function Dn(e,o,i,n,a,s){const l=Nn(e,i),{parent:r}=l,d=+l.bbox.width,u=Nn(e,r),c=$n(e,n);let p=c.outLayout;const h=c.outItem;if(p=En(p,h.id,"parent",r),p=On(p,h.id,d),u){const t=u.children.indexOf(i);p=function(t,e,o,i){const n=[...Nn(t,o).children];return n.splice(i,1,e),En(t,o,"children",n)}(p,h.id,r,t)}return p=En(p,o,"parent",h.id),p=En(p,i,"parent",h.id),p=On(p,o,s?100:50),p=On(p,i,s?100:50),p=En(p,h.id,"children",a?[o,i]:[i,o]),n===t.GridItemType.Tab&&(p=En(p,h.id,"activeTab",1)),i===p.setting.rootItem&&(p=p.setIn(["setting","rootItem"],h.id)),p}function Fn(e,o,i,n,a,s){const l=Nn(e,o),{gridType:r}=l;switch(r){case t.GridItemType.Column:case t.GridItemType.Row:return function(e,o,i,n,a,s){const l=o.gridType,r=Nn(e,i),{parent:d}=r,u=+r.bbox.width,c=Nn(e,d);let p=e;if((null==c?void 0:c.gridType)===n){const e=c.children.indexOf(i);if(l===n){const t=o.children,n=[...c.children];a?n.splice(e,0,...t):n.splice(e+1,0,...t),p=En(p,d,"children",n),p=p.set("content",p.content.without(o.id)),t.forEach((t=>{const e=+p.content[t].bbox.width;p=On(p,t,e*u/200),p=En(p,t,"parent",d)})),p=On(p,i,u/2)}else p=Bn(p,o.id,d,e,a),p=En(p,o.id,"parent",d),p=On(p,o.id,s?100:u/2),p=On(p,i,s?100:u/2),n===t.GridItemType.Tab&&(p=En(p,d,"activeTab",e+1));return p}if(l===n){const t=c.children.indexOf(i);p=Bn(p,i,o.id,a?o.children.length:0,!a),p=En(p,i,"parent",o.id),p=On(p,i,50),o.children.forEach((t=>{const e=+p.content[t].bbox.width;p=On(p,t,.5*e)}));const e=[...c.children];return e.splice(t,1,o.id),p=En(p,d,"children",e),p=En(p,o.id,"parent",d),p}return Dn(p,o.id,i,n,a,s)}(e,l,i,n,a,s);case t.GridItemType.Tab:return function(e,o,i,n,a,s){const l=Nn(e,i),{parent:r}=l,d=+l.bbox.width,u=Nn(e,r);let c=e;if(n===t.GridItemType.Tab){if((null==u?void 0:u.gridType)===t.GridItemType.Tab){const t=u.children.indexOf(i),n=[].concat(u.children);return n.splice(t+1,0,...o.children),c=En(e,r,"children",n),o.children.forEach((t=>{c=En(c,t,"parent",r)})),c=c.set("content",c.content.without(o.id)),c}const n=u.children.indexOf(i),a=[].concat(u.children);return a.splice(n,1,o.id),c=En(e,r,"children",a),c=Bn(c,i,o.id,0,!0),c=En(c,i,"parent",o.id),c=En(c,o.id,"parent",r),c}if((null==u?void 0:u.gridType)===n){const t=u.children.indexOf(i);return c=Bn(c,o.id,r,t,a),c=En(c,o.id,"parent",r),c=On(c,o.id,s?100:d/2),c=On(c,i,s?100:d/2),c}return Dn(c,o.id,i,n,a,s)}(e,l,i,n,a,s);default:return function(e,o,i,n,a,s){const l=Nn(e,i),{parent:r}=l,d=+l.bbox.width,u=Nn(e,r);let c=e;if((null==u?void 0:u.gridType)===n){const e=u.children.indexOf(i);return c=Bn(c,o.id,r,e,a),c=En(c,o.id,"parent",r),c=On(c,o.id,s?100:d/2),c=On(c,i,s?100:d/2),n===t.GridItemType.Tab&&(c=En(c,r,"activeTab",e+1)),c}return Dn(c,o.id,i,n,a,s)}(e,l,i,n,a,s)}}function Vn(o,i){const{layoutId:n,layoutItemId:a}=o,s=(0,e.getAppConfigAction)(),{layouts:l}=s.appConfig;let r=l[n];const d=$n(r,t.GridItemType.Plain);r=d.outLayout,r=r.setIn(["content",d.outItem.id,"type"],t.LayoutItemType.Widget);const u=r.content[d.outItem.id];r=Fn(r,u.id,a,"h"===i?t.GridItemType.Row:t.GridItemType.Column,!1,!1);const c=s.appConfig.setIn(["layouts",n],r);(0,e.getAppConfigAction)(c).exec()}!function(t){t.Top="top",t.Bottom="bottom",t.Left="left",t.Right="right",t.Center="center"}(zn||(zn={}));var Hn=function(t,e,o,i){return new(o||(o=Promise))((function(n,a){function s(t){try{r(i.next(t))}catch(t){a(t)}}function l(t){try{r(i.throw(t))}catch(t){a(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,l)}r((i=i.apply(t,e||[])).next())}))};function Gn(e,o,i){return Hn(this,void 0,void 0,(function*(){var n;const{layoutInfo:{layoutId:a,layoutItemId:s},updatedAppConfig:l}=yield V(e,o,i.layoutId);let r=l;return(null===(n=o.layoutInfo)||void 0===n?void 0:n.layoutId)!==i.layoutId&&(r=l.setIn(["layouts",a,"content",s,"gridType"],t.GridItemType.Plain)),{newLayoutItemId:s,updatedAppConfig:r}}))}function Wn(e,o,i,n,a){return Hn(this,void 0,void 0,(function*(){const{layoutId:s}=i;let l=e;const r=yield Gn(e,o,i),d=r.newLayoutItemId;if(l=r.updatedAppConfig,n){const e=function(e,o,i,n){switch(n){case zn.Center:return Fn(e,o,i,t.GridItemType.Tab,!1,!0);case zn.Top:return Fn(e,o,i,t.GridItemType.Column,!0,!1);case zn.Bottom:return Fn(e,o,i,t.GridItemType.Column,!1,!1);case zn.Left:return Fn(e,o,i,t.GridItemType.Row,!0,!1);case zn.Right:return Fn(e,o,i,t.GridItemType.Row,!1,!1)}}(l.layouts[s],d,n,a);l=l.setIn(["layouts",s],e)}else l=l.setIn(["layouts",s,"content",d,"bbox"],{width:100}).setIn(["layouts",s,"content",d,"gridType"],t.GridItemType.Plain).setIn(["layouts",s,"setting","rootItem"],d);return{appConfig:l,layoutInfo:{layoutId:s,layoutItemId:d}}}))}function _n(t,e){const o=t.content[e],{parent:i}=o;if(!i)return t.setting.rootItem===e?t.setIn(["setting","rootItem"],null):t;let n=t.setIn(["content",e],o.without("parent"));const a=t.content[i];if(!a||null==(null==a?void 0:a.children))return t;const s=a.children.indexOf(e),l=a.children.filter((t=>t!==e));if(1===l.length){const e=l[0];if(n=n.setIn(["content",e,"bbox","width"],a.bbox.width),null!=a.parent){n=n.setIn(["content",e,"parent"],a.parent);const o=t.content[a.parent];if(o){const t=[...o.children],s=t.indexOf(i);t.splice(s,1,e),n=n.setIn(["content",a.parent,"children"],t)}}else n=n.setIn(["content",e],n.content[e].without("parent")),n=n.setIn(["setting","rootItem"],e);n=n.set("content",n.content.without(i))}else{if(s<l.length){const t=n.content[l[s]];n=n.setIn(["content",l[s],"bbox","width"],t.bbox.width+o.bbox.width)}else{const t=n.content[l[l.length-1]];n=n.setIn(["content",l[l.length-1],"bbox","width"],t.bbox.width+o.bbox.width)}n=n.setIn(["content",i,"children"],l)}return n}var Un=p(711),Yn=p.n(Un),Zn=p(2597),Xn=p.n(Zn);const qn=[{icon:Yn(),title:t=>t.formatMessage("splitHorizontally"),visible:()=>!st(),onClick:t=>{const{layoutId:e,layoutItem:o}=t;Vn({layoutId:e,layoutItemId:o.id},"h")}},{icon:Xn(),title:t=>t.formatMessage("splitVertically"),visible:()=>!st(),onClick:t=>{const{layoutId:e,layoutItem:o}=t;Vn({layoutId:e,layoutItemId:o.id},"v")}},{icon:Q(),title:t=>t.formatMessage("duplicate"),visible:()=>!st(),onClick:t=>{const{layoutId:o,layoutItem:i}=t;!function(t){const{layoutId:o,layoutItemId:i}=t,n=(0,e.getAppConfigAction)(),a={layoutId:o,layoutItemId:n.duplicateLayoutItemInSameLayout({layoutId:o,layoutItemId:i})};D(n.appConfig,a)}({layoutId:o,layoutItemId:i.id})}},yt,{icon:Z(),title:t=>t.formatMessage("pendingTip"),visible:e=>{const{layoutItem:o}=e,i=o.type===t.LayoutItemType.Widget&&null==o.widgetId;return at()===t.AppMode.Design&&!st()&&!i},onClick:t=>{const{layoutId:o,layoutItem:i}=t;!function(t){const o=(0,e.getAppConfigAction)();o.setLayoutItemToPending(t,!0),D(o.appConfig,null)}({layoutId:o,layoutItemId:i.id})}},{icon:U(),title:t=>t.formatMessage("delete"),visible:e=>at()===t.AppMode.Design&&(!st()||ut(e.layoutItem)),onClick:t=>{const{layoutItem:o,layoutId:i}=t,n={layoutId:i,layoutItemId:o.id};e.appBuilderSync.publishConfirmDeleteToApp(n)}}];var Jn=p(462),Qn=p.n(Jn),Kn=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const ta=e=>{const o=window.SVG,{className:i}=e,n=Kn(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:a,src:Qn()},n)):t.React.createElement("svg",Object.assign({className:a},n))};var ea=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const oa=e=>{const o=window.SVG,{className:i}=e,n=ea(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:a,src:ri()},n)):t.React.createElement("svg",Object.assign({className:a},n))};var ia=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const na=e=>{const o=window.SVG,{className:i}=e,n=ia(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:a,src:ye()},n)):t.React.createElement("svg",Object.assign({className:a},n))},aa=[].concat(be,qn),sa=t.css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
`,la=t.css`
  ${sa};
  pointer-events: none;
`,ra=e=>{const o=(0,u.getTheme2)();return t.css`
    & > .max-grid-item-btn {
      display: none;
      background: var(--ref-palette-neutral-500);
      width: 26px;
      height: 26px;
      position: absolute;
      top: 0;
      right: 0;
    }

    & > .layout-widget > .add-btn {
      display: ${e?"none":"block"};
    }

    & > .add-btn {
      z-index: 20;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .lock-mask {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 20;
      pointer-events: none;
      transition: all 400ms;

      .mask {
        width: 100%;
        height: 100%;
        background: ${o.ref.palette.white};
        opacity: 0.1;
      }

      .lock-btn {
        background: ${t.polished.rgba(o.ref.palette.white,.6)};
        border-color: ${o.ref.palette.black} !important;
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
        width: 38px;
        height: 38px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: all 400ms;
        pointer-events: all;
      }

      &.unlock {
        width: 32px;
        height: 32px;

        .mask {
          background: transparent;
        }

        .lock-btn {
          width: 26px;
          height: 26px;
        }
      }
    }

    body:not(.design-mode) &:hover > .max-grid-item-btn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `},da=t.css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
  z-index: 30;
  background: var(--ref-palette-neutral-200);
`;function ua(i){const{layoutId:n,layoutItemId:s,onDragStart:l,onDragging:r,onDragEnd:d,delay:c,isLastChild:p,className:h}=i,[m,y]=t.React.useState(!1),[f,v]=t.React.useState(!1),[I,x]=t.React.useState(!0),b=t.React.useRef(),w=t.React.useRef(),S=t.React.useRef(!1),C=t.React.useRef(),R=(0,u.getTheme2)(),T=t.hooks.useTranslation($t),M=t.ReactRedux.useSelector((t=>function(t,e,o){var i,n;const a=t.appConfig.layouts[e];if(null!==(i=a.content[o].expandable)&&void 0!==i&&!i)return!1;const s=null===(n=null==a?void 0:a.setting)||void 0===n?void 0:n.rootItem;let l=!1;if(s===o){const t=Nn(a,s);null!=t.children&&0!==t.children.length||(l=!0)}return!l}(t,n,s))),A=t.ReactRedux.useSelector((e=>{var o,i,n;const a=null!==(n=null===(i=null===(o=e.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return!(e.appRuntimeInfo.appMode===t.AppMode.Design)||a})),P=t.ReactRedux.useSelector((e=>{var o,i,a;const l=e.appConfig.layouts[n].content[s];if((null==l?void 0:l.type)===t.LayoutItemType.Section)return!0;if((null==l?void 0:l.type)===t.LayoutItemType.Widget){const n=e.appConfig.widgets[l.widgetId];if((null===(o=null==n?void 0:n.manifest)||void 0===o?void 0:o.widgetType)===t.WidgetType.Layout||(null===(a=null===(i=null==n?void 0:n.manifest)||void 0===i?void 0:i.properties)||void 0===a?void 0:a.hasEmbeddedLayout))return null!=n.layouts}return!1})),L=t.ReactRedux.useSelector((e=>{const o=e.appConfig.layouts[n].content[s];return(null==o?void 0:o.type)===t.LayoutItemType.Widget&&null==(null==o?void 0:o.widgetId)})),j=t.ReactRedux.useSelector((e=>{const o=e.appConfig.layouts[n].content[s];return(null==o?void 0:o.type)===t.LayoutItemType.Section})),z=t.React.useMemo((()=>(0,t.Immutable)({[t.BrowserSizeMode.Large]:`${n}_${s}_tlarge`,[t.BrowserSizeMode.Medium]:`${n}_${s}_tmedium`,[t.BrowserSizeMode.Small]:`${n}_${s}_tsmall`})),[n,s]);t.hooks.useEffectOnce((()=>{const t=(0,u.getTheme)();b.current=new Ji(w.current,t)}));const N=t.hooks.useEventCallback(((t,e)=>{t&&e&&b.current.setSize(t,e,window.devicePixelRatio)})),k=t.hooks.useEventCallback((t=>{S.current=t,document.querySelectorAll("div.grid-layout").forEach((e=>{e.getAttribute("data-layoutid")===n?t&&!e.classList.contains("drop-target")&&e.classList.add("drop-target"):e.classList.contains("drop-target")&&e.classList.remove("drop-target")})),b.current.clear()})),$=t.React.useCallback(((e,o,i,n,a,s)=>{if(!S.current)return;const{width:l,height:r}=i;b.current.clear();const d=(0,u.getTheme)();if(b.current.setColor(t.polished.rgba(d.sys.color.primary.light,.2)),L&&_e(e))return void b.current.drawRect({left:0,top:0,width:l,height:r});let c;c=s<=.2*r?{left:0,top:0,width:l,height:r/2}:s>=.8*r?{left:0,top:r/2,width:l,height:r/2}:a<=.2*l?{left:0,top:0,width:l/2,height:r}:a>=.8*l?{left:l/2,top:0,width:l/2,height:r}:{left:.2*l,top:.2*r,width:.6*l,height:.6*r},b.current.drawRect(c)}),[L]),O=t.React.useCallback(((o,i,l,r,d)=>{let u=(0,e.getAppConfigAction)();if(L&&_e(o))return void Ue({layoutId:n,layoutItemId:s},o);const{width:c,height:p}=i;let h;h=d<=.2*p?zn.Top:d>=.8*p?zn.Bottom:r<=.2*c?a.utils.isRTL()?zn.Right:zn.Left:r>=.8*c?a.utils.isRTL()?zn.Left:zn.Right:zn.Center;const g={layoutId:n};Wn(u.appConfig,o,g,s,h).then((o=>{const{appConfig:i,layoutInfo:n}=o;u=(0,e.getAppConfigAction)(i),u.exec(),(0,t.getAppStore)().dispatch(t.appActions.selectionChanged(n))}))}),[L,n,s]),E=t.React.useCallback((e=>{e.itemType===t.LayoutItemType.Section?Ye({layoutId:n,layoutItemId:s}):Ze({layoutId:n,layoutItemId:s},e),v(!1)}),[n,s]),B=t.React.useCallback((o=>{o.stopPropagation(),(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small?v(!f):e.appBuilderSync.publishSidePanelToApp({type:"widget",isPlaceholder:!0,isItemAccepted:_e,onSelect:E})}),[f,E]),D=t.React.useCallback((()=>{y(!m)}),[m]),F=t.React.useCallback((()=>{x(!I)}),[I]);return(0,t.jsx)(Po,{layoutId:n,layoutItemId:s,resizable:!1,className:h,showDefaultTools:!1,toolItems:j?aa:qn,delay:c,isLastChild:p,onDragStart:l,onDragging:r,onDragEnd:d,css:t.css`${ra(L)};${m?da:""}`},(!P||I)&&!A&&(0,t.jsx)(Ve,{css:sa,layouts:z,highlightDragover:!0,onDragOver:$,onDrop:O,onToggleDragoverEffect:k}),L&&(0,t.jsx)("div",{className:"add-btn"},(0,t.jsx)(g,{title:T("addWidget")},(0,t.jsx)(o.Button,{icon:!0,ref:C,css:t.css`width: 36px; height: 36px; padding: 0.5rem;`,onClick:B,"aria-haspopup":!0},(0,t.jsx)(Ge,null)))),L&&f&&(0,t.jsx)($e.WidgetListPopper,{referenceElement:C.current,isAccepted:_e,onSelect:E,onClose:()=>{v(!1)}}),(0,t.jsx)("canvas",{css:la,ref:w}),(0,t.jsx)(t.ReactResizeDetector,{handleWidth:!0,handleHeight:!0,onResize:N}),M&&(0,t.jsx)(o.Button,{icon:!0,type:"tertiary",className:"max-grid-item-btn p-0",onClick:D,title:T(m?"restore":"maximize")},m&&(0,t.jsx)(na,null),!m&&(0,t.jsx)(ta,null)),P&&!A&&(0,t.jsx)("div",{className:(0,t.classNames)("lock-mask",{unlock:!I})},(0,t.jsx)("div",{className:"mask"}),(0,t.jsx)(o.Tooltip,{title:T(I?"unlockGridItem":"lockGridItem")},(0,t.jsx)(o.Button,{className:"lock-btn rounded-circle",size:"sm",type:"tertiary",icon:!0,onClick:F},!I&&(0,t.jsx)(oa,{size:14,color:R.ref.palette.black}),I&&(0,t.jsx)(Le,{size:20,color:R.ref.palette.black})))))}const ca=32;function pa(t,e,o,i,n,a){let s=i,l=n;if("row"===o){const o=a?e.width:t.width,n=a?t.width:e.width;i<0&&(s=o>ca?-Math.min(Math.abs(i),o-ca):0),i>0&&(s=n>ca?Math.min(i,n-ca):0)}else n<0&&(l=t.height>ca?-Math.min(Math.abs(n),t.height-ca):0),n>0&&(l=e.height>ca?Math.min(n,e.height-ca):0);return{x:s,y:l}}function ha(e){const o=e.getAttribute("data-layoutid"),i=e.getAttribute("data-layoutitemid");return+(0,t.getAppStore)().getState().appConfig.layouts[o].content[i].bbox.width}function ga(e){var o,i;const{referenceItemId:n,direction:a,layoutId:s,onResizeEnd:l}=e,r=t.React.useRef(),d=t.React.useRef(),u=t.React.useRef(null),c=null!==(i=null===(o=(0,t.getAppStore)().getState().appContext)||void 0===o?void 0:o.isRTL)&&void 0!==i&&i,p=t.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode===t.AppMode.Design)),h=t.ReactRedux.useSelector((t=>{var o,i;return null===(i=null===(o=t.appConfig.layouts[e.layoutId].setting)||void 0===o?void 0:o.resizable)||void 0===i||i})),g=t.ReactRedux.useSelector((t=>{var e,o;return null!==(o=null===(e=t.appConfig.layouts[s].setting)||void 0===e?void 0:e.splitSize)&&void 0!==o?o:8})),m=t.ReactRedux.useSelector((t=>{var e,o;return null!==(o=null===(e=t.appConfig.layouts[s].setting)||void 0===e?void 0:e.splitColor)&&void 0!==o?o:"var(--light-500)"})),y=t.React.useMemo((()=>{const e=`${g}px`,o=!!p||h;return t.css`
      width: ${"col"===a?"100%":e};
      height: ${"col"===a?e:"100%"};
      background: ${m};
      position: relative;
      z-index: 10;
      flex-shrink: 0;

      .horizontal-splitter {
        cursor: ${o?"col-resize":"default"};
      }

      .vertical-splitter {
        cursor: ${o?"row-resize":"default"};
      }
    `}),[a,h,p,g,m]);return t.hooks.useEffectOnce((()=>{let e,o,i,s,g,m,y,f,v,I,x,b,w;return t.moduleLoader.loadModule("jimu-core/dnd").then((t=>{const S=t.interact;u.current=S,r.current&&(d.current=S(r.current).origin("parent").draggable({inertia:!1,autoScroll:!1,enabled:!!p||h,modifiers:[S.modifiers.restrict({restriction:"parent"})],lockAxis:"row"===a?"x":"y",onstart:t=>{t.stopPropagation(),e=0,o=0,i=r.current.parentElement.getBoundingClientRect(),s=r.current.previousElementSibling,g=s.getBoundingClientRect(),y=s.style.width,f=s.style.height,m=ha(s),v=r.current.nextElementSibling,I=v.getBoundingClientRect(),b=v.style.width,w=v.style.height,x=ha(v)},onmove:t=>{t.stopPropagation(),e+=t.dx,o+=t.dy;const{x:i,y:n}=pa(g,I,a,e,o,c),l=c?-1:1;"row"===a?(s.style.width=`calc(${m}% + ${i*l}px)`,v.style.width=`calc(${x}% - ${i*l}px)`):(s.style.height=`calc(${m}% + ${n}px)`,v.style.height=`calc(${x}% - ${n}px)`)},onend:t=>{t.stopPropagation(),e+=t.dx,o+=t.dy;const{x:r,y:d}=pa(g,I,a,e,o,c),u=c?-1:1;s.style.width=y,v.style.width=b,s.style.height=f,v.style.height=w,l(n,Math.round(r*u*1e4/i.width)/100,Math.round(1e4*d/i.height)/100)}}))})),()=>{var t;null===(t=d.current)||void 0===t||t.unset(),d.current=null}})),t.React.useEffect((()=>{null!=d.current&&u.current(r.current).draggable(!!p||h)}),[h,p]),(0,t.jsx)("div",{ref:r,css:y,className:"grid-split flex-shrink-0"},(0,t.jsx)("div",{className:(0,t.classNames)("w-100 h-100",{"horizontal-splitter":"row"===a,"vertical-splitter":"col"===a})}))}var ma=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const ya=t.css`
  .nav-link.grid-tab.highlight-pre {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 50%;
      height: 100%;
      background-color: var(--sys-color-primary-light);
    }
  }

  .nav-link.grid-tab.highlight-next {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 50%;
      height: 100%;
      background-color: var(--sys-color-primary-light);
    }
  }
`;function fa(i){const{layoutId:n,layoutItemId:s,onDragStart:l,title:r}=i,d=ma(i,["layoutId","layoutItemId","onDragStart","title"]),u=t.React.useRef(),c=t.React.useRef(!1),p=t.hooks.useTranslation(o.defaultMessages),h=t.React.useContext(a.PageContext),g=t.React.useContext(a.LayoutContext),m=t.ReactRedux.useSelector((t=>{const e=t.appConfig.layouts[n].content[s];return null==e?void 0:e.type})),y=t.ReactRedux.useSelector((t=>kn(t.appConfig,{layoutId:n,layoutItemId:s},p))),f=t.React.useCallback((()=>h.rootLayoutId),[h.rootLayoutId]),v=t.hooks.useEventCallback((()=>{l(s)})),I=t.hooks.useEventCallback(((t,e,o,i,n,a)=>{c.current&&(n<=o.width/2?(u.current.classList.add("highlight-pre"),u.current.classList.remove("highlight-next")):(u.current.classList.remove("highlight-pre"),u.current.classList.add("highlight-next")))})),x=t.hooks.useEventCallback(((o,i,l,r,d)=>{const u={layoutId:n};let c=(0,e.getAppConfigAction)(),p=!1;p=r<=i.width/2?!a.utils.isRTL():a.utils.isRTL(),Wn(c.appConfig,o,u,s,zn.Center).then((o=>{const{appConfig:i,layoutInfo:a}=o;if(c=(0,e.getAppConfigAction)(i),p){const t=i.layouts[n].content[s].parent,e=[...i.layouts[n].content[t].children];e.splice(e.indexOf(s),2,a.layoutItemId,s),c.editLayoutItemProperty({layoutId:n,layoutItemId:t},"children",e)}c.exec(),(0,t.getAppStore)().dispatch(t.appActions.selectionChanged(a))}))})),b=t.hooks.useEventCallback((t=>{c.current=t,t||(u.current.classList.remove("highlight-pre"),u.current.classList.remove("highlight-next"))}));return t.React.useEffect((()=>{u.current.setAttribute("data-layoutid",n),u.current.setAttribute("data-layoutitemid",s);const e=(0,Tt.interact)(u.current).origin("parent");St(e,{layoutId:n,layoutItemId:s,itemType:m,useDragHandler:!1,onDragStart:v,rootLayoutId:f,restrict:()=>!0}).draggable({modifiers:[Tt.interact.modifiers.restrictRect({restriction:u.current.parentElement.parentElement})]});const o={current:{props:{layouts:(0,t.Immutable)({[t.BrowserSizeMode.Large]:`${n}_${s}_tlarge`,[t.BrowserSizeMode.Medium]:`${n}_${s}_tmedium`,[t.BrowserSizeMode.Small]:`${n}_${s}_tsmall`}),highlightDragover:!0,onDragOver:I,onDrop:x,onToggleDragoverEffect:b},layoutId:n,pageContext:h,layoutContext:g}},i=De(u.current,o,".grid-tab");return Fe(u.current,o),()=>{e.unset(),i.unset()}}),[n,s]),(0,t.jsx)(o.Tab,Object.assign({},d,{title:y,innerRef:u,innnerClassName:"grid-tab",css:ya}))}var va=p(4221),Ia=p.n(va);let xa=0;const ba=[{name:"preventOverflow",enabled:!0,options:{boundary:"viewport",altAxis:!0}},{name:"flip",enabled:!0,options:{boundary:"viewport",fallbackPlacements:(0,o.getFallbackPlacementsModifier)(["top-start","bottom-start"],!0).options.fallbackPlacements}}],wa=[{icon:Ia(),title:e=>{const{layoutItem:o,formatMessage:i}=e,n=o.gridType;let a;return n===t.GridItemType.Row?a="distributeSpaceH":n===t.GridItemType.Column&&(a="distributeSpaceV"),i(a)},visible:e=>{const{layoutItem:o}=e,i=o.gridType;return(i===t.GridItemType.Row||i===t.GridItemType.Column)&&!st()},onClick:t=>{const{layoutId:o}=t,i=t.layoutItem,n=(0,e.getAppConfigAction)(),a=100/i.children.length;i.children.forEach((t=>{n.editLayoutItemProperty({layoutId:o,layoutItemId:t},"bbox",{width:a})})),n.exec()},onMouseEnter:t=>{const{layoutId:e,layoutItem:o}=t;document.querySelector(`div.grid-layout[data-layoutid="${e}"]`).querySelector(`div[data-layoutid="${e}"][data-layoutitemid="${o.id}"]`).classList.add("menu-active")},onMouseLeave:t=>{const{layoutId:e,layoutItem:o}=t;document.querySelector(`div.grid-layout[data-layoutid="${e}"]`).querySelector(`div[data-layoutid="${e}"][data-layoutitemid="${o.id}"]`).classList.remove("menu-active")}}];function Sa(e){t.ReactRedux.useSelector((e=>e.extensionsInfo[t.extensionSpec.ExtensionPoints.ContextTool]));const{layoutId:i,layoutItem:n,refElement:a}=e,s=t.hooks.useTranslation(o.defaultMessages);return a?(0,t.jsx)(o._Popper,{placement:"top-start",reference:a,open:!0,modifiers:ba,version:xa++,trapFocus:!1,autoFocus:!1,css:t.css`
        background: transparent;
        box-shadow: none;
      `},(0,t.jsx)("div",null,(0,t.jsx)(kt,{layoutId:i,layoutItem:n,theme:(0,u.getTheme2)(),parentRef:a,tools:wa,formatMessage:s}))):null}function Ca(e){const{layout:o,layoutItemId:i,isLast:n,onDragStart:a,onDragging:s,onDragEnd:l,className:r}=e,d=t.React.useMemo((()=>Nn(o,i)),[o,i]),u=t.React.useMemo((()=>{if(null==d?void 0:d.parent){return Nn(o,d.parent).gridType}return null}),[d,o]),c=t.ReactRedux.useSelector((t=>{var e,i;const n=null!==(i=null===(e=o.setting)||void 0===e?void 0:e.splitSize)&&void 0!==i?i:8;let a=0;if(null==d?void 0:d.parent){a=Nn(o,d.parent).children.length}return n*(a-1)/a})),p=t.React.useContext(t.AnimationContext),h=t.React.useMemo((()=>{var e,o;return(null===(o=null===(e=null==p?void 0:p.setting)||void 0===e?void 0:e.option)||void 0===o?void 0:o.parentMode)===t.ParentAnimationMode.AllAtOnce?0:250}),[p]),g=t.React.useCallback((()=>{let e;return e=c>0?`calc(${+d.bbox.width}% - ${c.toFixed(2)}px)`:+d.bbox.width+"%",u===t.GridItemType.Row?t.css`
        height: 100%;
        width: ${e};
      `:u===t.GridItemType.Column?t.css`
        width: 100%;
        height: ${e};
      `:t.css`
      width: 100%;
      height: 100%;
    `}),[d.bbox.width,c,u]);if(d.gridType===t.GridItemType.Row)return(0,t.jsx)(Ra,{className:r,css:g(),layout:o,layoutItemId:i,items:d.children});if(d.gridType===t.GridItemType.Column)return(0,t.jsx)(Ta,{className:r,css:g(),layout:o,layoutItemId:i,items:d.children});if(d.gridType===t.GridItemType.Tab)return(0,t.jsx)(Ma,{className:r,css:g(),layout:o,layoutItemId:i,items:d.children,onDragStart:a,onDragEnd:l});const m=function(e,o){var i,n;let a=0;const s=Nn(e,e.setting.rootItem);if(s&&(null===(i=s.children)||void 0===i?void 0:i.length)>0){const i=[...s.children];for(;i.length>0;){const s=i.shift(),l=Nn(e,s),r=Nn(e,l.parent);if(`${l.id}`===o||r.gridType===t.GridItemType.Tab&&r.children.includes(o))return a;(null===(n=l.children)||void 0===n?void 0:n.length)>0?i.unshift(...l.children):(r.gridType!==t.GridItemType.Tab||r.gridType===t.GridItemType.Tab&&0===r.children.indexOf(s))&&(a+=1)}}return a}(o,i),y=function(t,e){var o;let i=Nn(t,e);if((null===(o=null==i?void 0:i.children)||void 0===o?void 0:o.length)>0)return!1;for(;null!=i;){const e=i.parent;if(null==e)break;const o=Nn(t,e),n=o.children.length;if(+o.children[n-1]!=+i.id)return!1;i=o}return!0}(o,i);return(0,t.jsx)(ua,{css:g(),className:(0,t.classNames)(`d-flex ${r}`,{"is-last":n}),layoutId:o.id,layoutItemId:i,delay:m*h,isLastChild:y,onDragStart:a,onDragging:s,onDragEnd:l})}function Ra(o){const{layout:i,layoutItemId:n,items:a,className:s}=o,l=t.React.useRef(),r=t.ReactRedux.useSelector((e=>{var o;return(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design})),d=t.ReactRedux.useSelector((t=>{const e=t.appRuntimeInfo.selection;return(null==e?void 0:e.layoutId)===i.id&&(null==e?void 0:e.layoutItemId)===n})),c=t.hooks.useEventCallback(((t,o)=>{const n=(0,e.getAppConfigAction)(),s=a.indexOf(t),l=a[s+1],r=i.content[t],d=i.content[l];n.editLayoutItemProperty({layoutId:i.id,layoutItemId:t},"bbox",{width:+r.bbox.width+o}).editLayoutItemProperty({layoutId:i.id,layoutItemId:l},"bbox",{width:+d.bbox.width-o}).exec()})),p=t.hooks.useEventCallback((t=>{var e;const o=l.current.querySelector(`div[data-layoutitemid="${t}"]`);let i,n;(null===(e=o.nextElementSibling)||void 0===e?void 0:e.classList.contains("grid-split"))?(i=o.nextElementSibling,n=i.nextElementSibling):(i=o.previousElementSibling,n=i.previousElementSibling);const a=o.parentElement.getBoundingClientRect(),s=o.getBoundingClientRect();o.style.width=`${o.clientWidth}px`,o.style.height=`${o.clientHeight}px`,o.style.left=s.left-a.left+"px",o.style.top=s.top-a.top+"px",o.style.position="absolute",n.style.width=`${o.clientWidth+i.clientWidth+n.clientWidth}px`,i.style.display="none"})),h=t.hooks.useEventCallback((t=>{var e;const o=l.current.querySelector(`div[data-layoutitemid="${t}"]`);let i,n;(null===(e=o.nextElementSibling)||void 0===e?void 0:e.classList.contains("grid-split"))?(i=o.nextElementSibling,n=i.nextElementSibling):(i=o.previousElementSibling,n=i.previousElementSibling),o.style.width=null,o.style.height=null,o.style.left=null,o.style.top=null,o.style.position=null,n.style.width=null,i.style.display=null})),g=(0,u.getTheme2)();return(0,t.jsx)("div",{className:`d-flex ${s}`,css:t.css`
        position: ${r?"relative":"initial"};
        .is-last {
          width: auto;
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
        }
        &.menu-active > .grid-row-item {
          &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0.3;
            background: ${g.sys.color.primary.main};
          }
        }
        &.menu-active > .grid-row-item:nth-of-type(4n-1):after {
          background: ${g.sys.color.error.dark};
          opacity: 0.6;
        }
      `,"data-layoutid":i.id,"data-layoutitemid":n,ref:l},a.map(((e,o)=>{return n=e,s=o===a.length-1,(0,t.jsx)(t.React.Fragment,{key:n},(0,t.jsx)(Ca,{key:n,className:"grid-row-item",layout:i,layoutItemId:n,onDragStart:p,onDragEnd:h}),!s&&(0,t.jsx)(ga,{referenceItemId:n,layoutId:i.id,direction:"row",onResizeEnd:c}));var n,s})),d&&(0,t.jsx)(Sa,{layoutId:i.id,layoutItem:i.content[n],refElement:l.current}))}function Ta(o){const{layout:i,layoutItemId:n,items:a,className:s}=o,l=t.React.useRef(),r=t.ReactRedux.useSelector((e=>{var o;return(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design})),d=t.ReactRedux.useSelector((t=>{const e=t.appRuntimeInfo.selection;return(null==e?void 0:e.layoutId)===i.id&&(null==e?void 0:e.layoutItemId)===n})),c=t.hooks.useEventCallback(((t,o,n)=>{const s=(0,e.getAppConfigAction)(),l=a.indexOf(t),r=a[l+1],d=i.content[t],u=i.content[r];s.editLayoutItemProperty({layoutId:i.id,layoutItemId:t},"bbox",{width:+d.bbox.width+n}).editLayoutItemProperty({layoutId:i.id,layoutItemId:r},"bbox",{width:+u.bbox.width-n}).exec()})),p=t.hooks.useEventCallback((t=>{var e;const o=l.current.querySelector(`div[data-layoutitemid="${t}"]`);let i,n;(null===(e=o.nextElementSibling)||void 0===e?void 0:e.classList.contains("grid-split"))?(i=o.nextElementSibling,n=i.nextElementSibling):(i=o.previousElementSibling,n=i.previousElementSibling);const a=o.parentElement.getBoundingClientRect(),s=o.getBoundingClientRect();o.style.width=`${o.clientWidth}px`,o.style.height=`${o.clientHeight}px`,o.style.left=s.left-a.left+"px",o.style.top=s.top-a.top+"px",o.style.position="absolute",n.style.height=`${o.clientHeight+i.clientHeight+n.clientHeight}px`,i.style.display="none"})),h=t.hooks.useEventCallback((t=>{var e;const o=l.current.querySelector(`div[data-layoutitemid="${t}"]`);let i,n;(null===(e=o.nextElementSibling)||void 0===e?void 0:e.classList.contains("grid-split"))?(i=o.nextElementSibling,n=i.nextElementSibling):(i=o.previousElementSibling,n=i.previousElementSibling),o.style.width=null,o.style.height=null,o.style.left=null,o.style.top=null,o.style.position=null,n.style.height=null,i.style.display=null})),g=(0,u.getTheme2)();return(0,t.jsx)("div",{className:`d-flex flex-column ${s}`,css:t.css`
        position: ${r?"relative":"initial"};
        .is-last {
          height: auto;
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
        }
        &.menu-active > .grid-col-item {
          &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0.3;
            background: ${g.sys.color.primary.main};
          }
        }
        &.menu-active > .grid-col-item:nth-of-type(4n-1):after {
          background: ${g.sys.color.error.dark};
          opacity: 0.6;
        }
      `,"data-layoutid":i.id,"data-layoutitemid":n,ref:l},a.map(((e,o)=>{return n=e,s=o===a.length-1,(0,t.jsx)(t.React.Fragment,{key:n},(0,t.jsx)(Ca,{key:n,className:"grid-col-item",layout:i,layoutItemId:n,onDragStart:p,onDragEnd:h}),!s&&(0,t.jsx)(ga,{referenceItemId:n,layoutId:i.id,direction:"col",onResizeEnd:c}));var n,s})),d&&(0,t.jsx)(Sa,{layoutId:i.id,layoutItem:i.content[n],refElement:l.current}))}function Ma(e){var i;const{layout:n,layoutItemId:a,items:s,className:l,onDragStart:r,onDragEnd:d}=e,u=t.ReactRedux.useSelector((e=>{var o;return(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design})),[c,p]=t.React.useState(0),h=t.React.useRef(),g=t.React.useRef(),m=t.React.useRef(),y=(null===(i=n.setting)||void 0===i?void 0:i.rootItem)===a;t.hooks.useEffectOnce((()=>{let e=(0,Tt.interact)(h.current).origin("parent");return e=St(e,{layoutId:n.id,layoutItemId:a,useDragHandler:!1,itemType:t.LayoutItemType.Widget,rootLayoutId:null,restrict:null,onDragStart:r,onDragEnd:d}),e.draggable({modifiers:[Tt.interact.modifiers.restrictRect({restriction:`div.grid-layout[data-layoutid="${n.id}"]`})]}),()=>{e&&(e.unset(),e=null)}})),t.React.useEffect((()=>{h.current&&(y?(0,Tt.interact)(h.current).draggable(!1):(0,Tt.interact)(h.current).draggable(!0))}),[y]);const f=t.React.useMemo((()=>{var t;return null!==(t=Nn(n,a).activeTab)&&void 0!==t?t:0}),[n,a]);t.React.useEffect((()=>{p(f)}),[f]);const v=t.hooks.useEventCallback((t=>{const e=s.indexOf(t);p(e)})),I=t.hooks.useEventCallback((t=>{const e=s.indexOf(t);e===s.length-1?p(s.length-2):p(e+1)})),x=t.hooks.useEventCallback((t=>{const e=h.current.querySelector(`div[data-layoutitemid="${t}"]`).getBoundingClientRect();g.current=e;const o=wt(e);m.current=document.body.appendChild(o);const i=s.indexOf(t);i===s.length-1?p(s.length-2):p(i+1)})),b=t.hooks.useEventCallback(((t,e,o)=>{const i=e-g.current.left,n=o-g.current.top;m.current.style.transform=`translate(${Math.round(i)}px, ${Math.round(n)}px) translateZ(0)`})),w=t.hooks.useEventCallback((t=>{document.body.removeChild(m.current),m.current=null}));return(0,t.jsx)("div",{className:(0,t.classNames)(l,"exb-rnd"),"data-layoutid":n.id,"data-layoutitemid":a,css:t.css`${u?"relative":"initial"};`,ref:h},(0,t.jsx)(o.Tabs,{type:"tabs",fill:!0,scrollable:!0,className:"w-100 h-100",value:s[c],onChange:v,css:t.css`
          & > .tab-content {
            overflow: hidden;
          }
        `},[...s].map(((e,o)=>((e,o)=>(0,t.jsx)(fa,{key:e,id:e,title:`${o}`,layoutId:n.id,layoutItemId:e,onDragStart:I},(0,t.jsx)(Ca,{layout:n,layoutItemId:e,onDragStart:x,onDragging:b,onDragEnd:w})))(e,o)))))}var Aa=p(2756),Pa=p.n(Aa),La=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const ja=e=>{const o=window.SVG,{className:i}=e,n=La(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:a,src:Pa()},n)):t.React.createElement("svg",Object.assign({className:a},n))},za=t.css`
  pointer-events: auto;
`;function Na(e){return t.css`
    body.lock-layout &,
    body:not(.design-mode) & {
      display: none !important;
    }

    display: flex;
    height: ${e?"200px":"100%"};
    padding: 1rem;
    pointer-events: none;
    position: relative;
    z-index: 1;
    .btn-text {
      line-height: 32px;
    }
    .btn {
      margin-right: 8px;
    }
    .action-item {
      width: 32px;
    }
    .action-seprator {
      width: 300px;
      height: 1px;
      background-color: var(--ref-palette-neutral-400);
    }
  `}function ka(i){const{layoutId:n,pageContext:a,onTemplateSelected:s,onPageTemplateSelected:l}=i,{formatMessage:r,rootLayoutId:d}=a,[u,c]=t.React.useState(!1),[p,h]=t.React.useState(!1),[m,y]=t.React.useState(!1),f=n===d,v=t.React.useRef(null),I=t.React.useRef(null),x=t.React.useRef(null),b=t.ReactRedux.useSelector((e=>{var o,i,n;const a=null!==(n=null===(i=null===(o=e.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return e.appRuntimeInfo.appMode===t.AppMode.Design&&!a}));t.hooks.useEffectOnce((()=>{f||(0,t.getAppStore)().getState().browserSizeMode===t.BrowserSizeMode.Small||c(!0)}));const w=r("chooseTemplate",{type:r("grid").toLocaleLowerCase()}),S=r("chooseTemplate",{type:r("page").toLocaleLowerCase()}),C=t=>{c(!1),s(t)},R=t=>{h(!1),l(t)},T=o=>{y(!1);const i=(0,e.getAppConfigAction)();let a;a=o.itemType===t.LayoutItemType.Section?new Promise((t=>{t(i.addNewSectionToLayout(n))})):i.addNewWidgetToLayout(n,{uri:o.uri,itemId:o.itemId}),a.then((t=>{const e={layoutId:n,layoutItemId:t};i.editLayoutProperty(n,"setting.rootItem",t).editLayoutItemProperty(e,"bbox",{width:100}),D(i.appConfig,e)}))};return b?(0,t.jsx)("div",{className:"w-100 flex-column justify-content-center align-items-center",css:Na(f)},(0,t.jsx)("div",{className:"d-flex justify-content-center align-items-center"},!f&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(g,{placement:"bottom",title:r("addWidget")},(0,t.jsx)(o.Button,{icon:!0,ref:v,css:za,onClick:o=>{o.stopPropagation(),(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small?y(!m):e.appBuilderSync.publishSidePanelToApp({type:"widget",isPlaceholder:!1,isItemAccepted:()=>!0,onSelect:T})},"aria-haspopup":!0},(0,t.jsx)(Ge,{size:16}))),(0,t.jsx)(g,{placement:"bottom",title:w},(0,t.jsx)("div",{className:"action-item"},(0,t.jsx)(o.Button,{ref:I,icon:!0,onClick:o=>{o.stopPropagation(),(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small?c(!u):e.appBuilderSync.publishSidePanelToApp({type:"template",templateMethod:"getGridTemplates",onSelect:C})},css:za,"aria-haspopup":!0},(0,t.jsx)(ja,{autoFlip:!0,size:16}))))),f&&(0,t.jsx)(g,{placement:"bottom",title:S},(0,t.jsx)("div",{className:"action-item"},(0,t.jsx)(o.Button,{ref:x,icon:!0,onClick:o=>{o.stopPropagation(),(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small?h(!p):e.appBuilderSync.publishSidePanelToApp({type:"template",templateMethod:"getFullScreenGridPageTemplates",onSelect:R})},css:za,className:"rounded-circle","aria-haspopup":!0},(0,t.jsx)(ja,{autoFlip:!0,size:16}))))),f&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:"action-seprator mt-4"}),(0,t.jsx)("div",null,(0,t.jsx)("h5",{className:"btn-text mt-2"},r("dropWidgetToAdd")))),u&&(0,t.jsx)($e.TemplateSelector,{templates:(0,Gi.getGridTemplates)(),referenceElement:I.current,onItemSelect:C,onClose:()=>{c(!1)}}),m&&(0,t.jsx)($e.WidgetListPopper,{referenceElement:v.current,isAccepted:()=>!0,onSelect:T,onClose:()=>{y(!1)}}),p&&(0,t.jsx)($e.TemplateSelector,{templates:(0,Gi.getFullScreenGridPageTemplates)(!1),referenceElement:x.current,onItemSelect:R,onClose:()=>{h(!1)}})):null}var $a=function(t,e,o,i){return new(o||(o=Promise))((function(n,a){function s(t){try{r(i.next(t))}catch(t){a(t)}}function l(t){try{r(i.throw(t))}catch(t){a(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,l)}r((i=i.apply(t,e||[])).next())}))};const Oa=t.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
  display: flex;
`,Ea=e=>{const i=(0,u.getTheme2)(),n=function(e){var i;const n=o.styleUtils.toCSSPadding(null===(i=null==e?void 0:e.style)||void 0===i?void 0:i.padding);if(n){if(e.paddingColor){const o=n.split(" "),i=e.paddingColor;let a="";const s=window.jimuUA.browser.name.toLowerCase();return"firefox"===s?a="-moz-":"safari"!==s&&"chrome"!==s||(a="-webkit-"),t.css`
        padding: ${n};
        background-image:
        ${a}linear-gradient(270deg, ${i} ${o[0]}, transparent ${o[0]}),
        ${a}linear-gradient(180deg, ${i} ${o[1]}, transparent ${o[1]}),
        ${a}linear-gradient(90deg, ${i} ${o[2]}, transparent ${o[2]}),
        ${a}linear-gradient(0deg, ${i} ${o[3]}, transparent ${o[3]});
      `}return t.css`
      padding: ${n};
    `}}(e);return t.css`
    overflow: hidden;
    position: relative;
    ${n}

    .grid-root-drop-area {
      position: absolute;
      background: rgba(0, 0, 0, 0.4);
      border: 2px solid rgba(255, 255, 255, 0.04);
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
      border-radius: 7px;
      display: none !important;
      z-index: 30;

      &.top {
        top: 2px;
        left: 50%;
        width: 60px;
        height: 10px;
        transform: translateX(-50%);
      }

      &.bottom {
        bottom: 2px;
        left: 50%;
        width: 60px;
        height: 10px;
        transform: translateX(-50%);
      }

      &.right {
        right: 2px;
        top: 50%;
        height: 60px;
        width: 10px;
        transform: translateY(-50%);
      }

      &.left {
        left: 2px;
        top: 50%;
        height: 60px;
        width: 10px;
        transform: translateY(-50%);
      }
    }

    .${It} &.drop-target > .grid-root-drop-area,
    .${vt} &.drop-target > .grid-root-drop-area {
      display: flex !important;
    }

    .highlight-area {
      background: ${t.polished.rgba(i.sys.color.primary.dark,.2)};
      position: absolute;
      opacity: 0.6;
      pointer-events: none;
      display: none;

      &.active {
        display: block;
      }

      &.top {
        top: 0;
        width: 100%;
        height: 50%;
      }
      &.bottom {
        bottom: 0;
        width: 100%;
        height: 50%;
      }
      &.left {
        left: 0;
        width: 50%;
        height: 100%;
      }
      &.right {
        right: 0;
        width: 50%;
        height: 100%;
      }
      &.center {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  `};class Ba extends t.React.PureComponent{constructor(o){super(o),this.handleDragOver=()=>{},this.handleDragEnter=()=>{},this.handleDragLeave=()=>{},this.handleDrop=(o,i,n)=>{const{layout:a}=this.props,s={layoutId:a.id};let l=(0,e.getAppConfigAction)();Wn(l.appConfig,o,s,null,zn.Center).then((o=>{const{appConfig:i,layoutInfo:n}=o;l=(0,e.getAppConfigAction)(i),l.exec(),(0,t.getAppStore)().dispatch(t.appActions.selectionChanged(n))}))},this.handleTemplateSelected=t=>$a(this,void 0,void 0,(function*(){const o=(0,e.getAppConfigAction)(),{layout:i}=this.props;yield o.applyGridTemplate(i.parent.id,t),o.exec()})),this.handlePageTemplateSelected=o=>{const i=(0,e.getAppConfigAction)();this.setState({isLoadingTemplate:!0}),i.applyPageBodyTemplate(this.pageContext.pageId,o).then((()=>{i.exec(),t.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).finally(null)},this.highlight=t=>{this.tipRef.current.classList.add("active",t)},this.clearHighlight=t=>{this.tipRef.current.classList.remove("active",t)};const{layout:i}=this.props;this.fakeLayouts=(0,t.Immutable)({[t.BrowserSizeMode.Large]:`${i.id}_tlarge`,[t.BrowserSizeMode.Medium]:`${i.id}_tmedium`,[t.BrowserSizeMode.Small]:`${i.id}_tsmall`}),this.tipRef=t.React.createRef()}findExtension(){const e=t.ExtensionManager.getInstance().getExtensions(`${t.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==e?void 0:e.length)>0){const o=e.find((e=>e.layoutType===t.LayoutType.GridLayout));this.layoutTransform=null==o?void 0:o.transformLayout}}handleDropAtSide(o,i){this.clearHighlight(i);const n=this.props.layout.id;let s=(0,e.getAppConfigAction)();this.tipRef.current.parentElement.classList.remove("drop-target"),function(e,o,i,n){return Hn(this,void 0,void 0,(function*(){const{layoutInfo:s}=o;let l,r=e;if((null==s?void 0:s.layoutId)===i){const t=a.searchUtils.findLayoutItem(e,s);if(t.isPending)r=r.setIn(["layouts",i,"content",s.layoutItemId],t.without("isPending"));else{const t=_n(r.layouts[i],s.layoutItemId);r=r.setIn(["layouts",i],t)}l=s.layoutItemId}else{const t=yield Gn(e,o,{layoutId:i});l=t.newLayoutItemId,r=t.updatedAppConfig}const d=r.layouts[i],u=d.setting.rootItem,c=d.content[u];let p;if(n===zn.Left||n===zn.Right){if(c.gridType===t.GridItemType.Row){let t=d;t=On(t,u,100),t=On(t,l,50),t=En(t,l,"parent",u),c.children.forEach((e=>{const o=t.content[e];t=On(t,e,+o.bbox.width/2)}));const e=[...c.children];return n===zn.Left?e.unshift(l):e.push(l),t=t.setIn(["content",u,"children"],e),r=r.setIn(["layouts",i],t),{appConfig:r,itemId:l}}p=$n(d,t.GridItemType.Row)}else{if(c.gridType===t.GridItemType.Column){let t=d;t=On(t,u,100),t=On(t,l,50),t=En(t,l,"parent",u),c.children.forEach((e=>{const o=t.content[e];t=On(t,e,+o.bbox.width/2)}));const e=[...c.children];return n===zn.Top?e.unshift(l):e.push(l),t=t.setIn(["content",u,"children"],e),r=r.setIn(["layouts",i],t),{appConfig:r,itemId:l}}p=$n(d,t.GridItemType.Column)}let{outLayout:h,outItem:g}=p;return h=h.setIn(["setting","rootItem"],g.id),h=On(h,g.id,100),h=On(h,u,50),h=En(h,u,"parent",g.id),h=On(h,l,50),h=En(h,l,"parent",g.id),h=n===zn.Left||n===zn.Top?En(h,g.id,"children",[l,u]):En(h,g.id,"children",[u,l]),r=r.setIn(["layouts",i],h),{appConfig:r,itemId:l}}))}(s.appConfig,o,n,i).then((({appConfig:o,itemId:i})=>{s=(0,e.getAppConfigAction)(o),s.exec(),(0,t.getAppStore)().dispatch(t.appActions.selectionChanged({layoutId:n,layoutItemId:i}))}))}render(){var e,o,i;const{layouts:n,layout:s,browserSizeMode:l,mainSizeMode:r,className:d}=this.props,u=n[l]!==s.id;let c=s;u&&(null==this.layoutTransform&&this.findExtension(),null!=this.layoutTransform&&(c=this.layoutTransform(s,r,l)));const{rootItem:p}=null!==(e=c.setting)&&void 0!==e?e:{},h=Nn(c,p),g=(0,t.classNames)("layout grid-layout d-flex w-100 h-100",d),m=null!==(i=null===(o=null==h?void 0:h.children)||void 0===o?void 0:o.length)&&void 0!==i?i:0;return(0,t.jsx)(a.PageContext.Consumer,null,(e=>(this.pageContext=e,(0,t.jsx)("div",{className:g,css:Ea(c.setting),"data-layoutid":c.id},(0,t.jsx)(t.IntersectionContext.Provider,{value:{monitor:!1}},(0,t.jsx)(t.OneByOneAnimation,{oid:c.id,"data-layoutid":c.id,className:"trail-container d-flex w-100 h-100",css:t.css`
                    width: 100%;
                  `},null==h&&(0,t.jsx)(Ve,{css:Oa,layouts:this.props.layouts,highlightDragover:!0,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop},(0,t.jsx)("div",{css:t.css`
                          width: 100%;
                          background: var(--cyan-500);
                        `})),null==h&&!u&&(0,t.jsx)(ka,{layoutId:s.id,pageContext:e,onTemplateSelected:this.handleTemplateSelected,onPageTemplateSelected:this.handlePageTemplateSelected}),h?(0,t.jsx)(Ca,{className:"w-100 h-100",layout:c,layoutItemId:p}):this.props.children)),m>1&&[zn.Top,zn.Right,zn.Bottom,zn.Left].map((e=>(0,t.jsx)(Ve,{key:e,className:`${e} grid-root-drop-area shadow-sm`,layouts:this.fakeLayouts,onDrop:t=>{this.handleDropAtSide(t,e)},onDragEnter:()=>{this.highlight(e)},onDragLeave:()=>{this.clearHighlight(e)}}))),(0,t.jsx)("div",{ref:this.tipRef,className:"highlight-area"})))))}}const Da=t.ReactRedux.connect(a.utils.mapStateToLayoutProps)(Ba);var Fa=p(5562);class Va extends t.React.PureComponent{constructor(o){super(o),this.modalStyle={position:"absolute",top:"0",bottom:"0",width:"100%",height:"auto",paddingBottom:"1px"},this.onTransitionSettingChange=o=>{const{layoutId:i,layoutItemId:n}=this.props,a=(0,e.getAppConfigAction)(),s=a.appConfig.layouts[i].content[n];a.editSectionProperty(s.sectionId,"transition",o).exec(),(null==o?void 0:o.type)!==t.TransitionType.None&&this.previewTransition()},this.onHoverEffectChange=o=>{var i,n;const{layoutId:a,layoutItemId:s}=this.props,l=(0,e.getAppConfigAction)();(null===(n=(null!==(i=l.appConfig.layouts[a].content[s].setting)&&void 0!==i?i:(0,t.Immutable)({})).hoverEffect)||void 0===n?void 0:n.type)!==o.type&&l.editLayoutItemProperty({layoutId:a,layoutItemId:s},"setting.hoverEffect",o).exec(),o.type!==t.HoverType.None&&e.builderAppSync.publishHoverPreviewToApp({layoutInfo:{layoutId:a,layoutItemId:s},id:(0,t.getNextAnimationId)()})},this.onEffectSettingChange=(o,i)=>{const n=t.AnimationTriggerType.ScrollIntoView,{layoutId:a,layoutItemId:s,setting:l}=this.props,r=l||(0,t.Immutable)({}),d=o===t.AnimationPlayMode.OneByOne?"oneByOneEffect":"effect";this.props.onSettingChange({layoutId:a,layoutItemId:s},r.setIn([d,n],i)),(null==i?void 0:i.type)!==t.AnimationType.None&&e.builderAppSync.publishAnimationPreviewToApp({layoutInfo:{layoutId:a,layoutItemId:s},playMode:o,id:(0,t.getNextAnimationId)()})},this.onSectionOneByOneEffectSettingChange=e=>{this.onEffectSettingChange(t.AnimationPlayMode.OneByOne,e)},this.previewAnimation=o=>{this.hasAnimationEffect()&&e.builderAppSync.publishAnimationPreviewToApp({layoutInfo:{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},playMode:o,id:(0,t.getNextAnimationId)()})},this.previewTransition=(o=!1)=>{var i,n,s;const{sectionId:l}=this.props,r=a.searchUtils.getSectionInfo((0,t.getAppStore)().getState().appStateInBuilder,l),{views:d}=r;if((null==d?void 0:d.length)>1){let a=null===(s=null===(n=null===(i=(0,t.getAppStore)().getState().appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo)||void 0===n?void 0:n.sectionNavInfos)||void 0===s?void 0:s[l];if(!a){const e=ve(r),o=d.indexOf(e),i=o>0?o-1:o+1;a=(0,t.Immutable)({currentViewId:e,previousViewId:d[i]})}e.builderAppSync.publishSectionNavInfoToApp(l,a.set("playId",(0,t.getNextAnimationId)()).set("withOneByOne",o).asMutable())}},this.previewTransitionAndOnebyOne=()=>{this.previewTransition(!0)},this.previewOneByOneInSection=()=>{this.previewAnimation(t.AnimationPlayMode.OneByOne)},this.previewHover=()=>{this.hasHoverEffect()&&e.builderAppSync.publishHoverPreviewToApp({layoutInfo:{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},id:(0,t.getNextAnimationId)()})},this.onPlayModeChange=t=>{const{layoutId:o,layoutItemId:i}=this.props;(0,e.getAppConfigAction)().editLayoutItemProperty({layoutId:o,layoutItemId:i},"setting.effectPlayMode",t).exec()},this.switchToIn=()=>{this.setState({animationType:"in"})},this.switchToTransition=()=>{this.setState({animationType:"transition"})},this.switchToHover=()=>{this.setState({animationType:"hover"})},this.state={animationType:"in"}}hasAnimationEffect(){var e,o;const{setting:i}=this.props,n=null===(e=null==i?void 0:i.effect)||void 0===e?void 0:e[t.AnimationTriggerType.ScrollIntoView],a=null===(o=null==i?void 0:i.oneByOneEffect)||void 0===o?void 0:o[t.AnimationTriggerType.ScrollIntoView];return n&&n.type!==t.AnimationType.None||a&&a.type!==t.AnimationType.None}hasHoverEffect(){const{setting:e}=this.props,o=null==e?void 0:e.hoverEffect;return o&&o.type!==t.HoverType.None}render(){var e,i;const{formatMessage:n,isLayoutWidget:a,isSection:s,transitionType:l,transitionDirection:r,setting:d}=this.props,{animationType:u}=this.state,c=null===(e=null==d?void 0:d.effect)||void 0===e?void 0:e[t.AnimationTriggerType.ScrollIntoView],p=null===(i=null==d?void 0:d.oneByOneEffect)||void 0===i?void 0:i[t.AnimationTriggerType.ScrollIntoView];return(0,t.jsx)($e.SettingSection,{role:"group","aria-label":n("animation"),title:n("animation")},s&&(0,t.jsx)($e.SettingRow,null,(0,t.jsx)(o.AdvancedButtonGroup,{className:"w-100",css:t.css`
              border-bottom: 1px solid var(--sys-color-primary-main);
              .jimu-btn {
                width: 50%;
                border-radius: 2px 2px 0 0;
              }
            `},(0,t.jsx)(o.Button,{active:"in"===u,onClick:this.switchToIn},n("in")),(0,t.jsx)(o.Button,{className:"ml-1",active:"transition"===u,onClick:this.switchToTransition},n("transition")))),"in"===u&&(0,t.jsx)($e.SettingRow,null,(0,t.jsx)(Fa.AnimationSettingComponent,{effectSetting:c,oneByOneSetting:p,onSettingChange:this.onEffectSettingChange,previewEnabled:!0,supportAsOne:!0,supportOneByOne:a,onPreviewClicked:this.previewAnimation,formatMessage:n})),"transition"===u&&(0,t.jsx)($e.SettingRow,{flow:"wrap"},(0,t.jsx)(Fa.TransitionSetting,{transition:{type:l,direction:r},transitionLabel:n("view"),oneByOneEffect:p,onOneByOneChange:this.onSectionOneByOneEffectSettingChange,onTransitionChange:this.onTransitionSettingChange,onPreviewTransitionClicked:this.previewTransition,onPreviewOneByOneClicked:this.previewOneByOneInSection,onPreviewAsAWhoneClicked:this.previewTransitionAndOnebyOne,formatMessage:n})))}}const Ha=(0,t.createSelector)([(t,e)=>{var o,i;const{layoutId:n,layoutItemId:a}=e,s=null===(i=null===(o=t.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===i?void 0:i.layouts[n].content[a];return null==s?void 0:s.setting},(e,o)=>{var i,n;const{layoutId:a,layoutItemId:s}=o,l=null===(n=null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===n?void 0:n.layouts[a].content[s];return(null==l?void 0:l.type)===t.LayoutItemType.Widget},(e,o)=>{var i,n,a,s;const{layoutId:l,layoutItemId:r}=o,d=null===(n=null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===n?void 0:n.layouts[l].content[r];if((null==d?void 0:d.type)===t.LayoutItemType.Widget){const o=null===(a=e.appStateInBuilder)||void 0===a?void 0:a.appConfig.widgets[d.widgetId];return(null===(s=null==o?void 0:o.manifest)||void 0===s?void 0:s.widgetType)===t.WidgetType.Layout}return!1},(e,o)=>{var i,n,a;const{layoutId:s,layoutItemId:l}=o,r=null===(n=null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===n?void 0:n.layouts[s].content[l];if((null==r?void 0:r.type)===t.LayoutItemType.Section)return null===(a=e.appStateInBuilder)||void 0===a?void 0:a.appConfig.sections[r.sectionId]}],((t,e,o,i)=>{var n,a;return{setting:t,isWidget:e,isLayoutWidget:o,isSection:null!=i,transitionType:null===(n=null==i?void 0:i.transition)||void 0===n?void 0:n.type,transitionDirection:null===(a=null==i?void 0:i.transition)||void 0===a?void 0:a.direction,sectionId:null==i?void 0:i.id}})),Ga=t.ReactRedux.connect(Ha)(Va);class Wa extends t.React.PureComponent{constructor(){super(...arguments),this.onBackgroundStyleChange=t=>{this.updateStyle("background",t)},this.updateBorder=t=>{this.updateStyle("border",t)},this.updateRadius=t=>{this.updateStyle("borderRadius",t)},this.updateShadow=t=>{this.updateStyle("boxShadow",t)},this.formatMessage=t=>this.props.formatMessage(t)}updateStyle(e,o){var i;const n=(0,t.Immutable)(null!==(i=this.props.style)&&void 0!==i?i:{});this.props.onStyleChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},n.set(e,o))}allowCoverBackground(){var o,i,n;const{layoutId:a,layoutItemId:s}=this.props,l=(0,e.getAppConfigAction)().appConfig,r=l.layouts[a].content[s];if(r.type===t.LayoutItemType.Widget){const t=r.widgetId;return null===(n=null===(i=null===(o=l.widgets[t])||void 0===o?void 0:o.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.coverLayoutBackground}return!1}render(){const{layoutId:e,layoutItemId:o}=this.props,i=this.props.style||{};return(0,t.jsx)("div",{className:"common-layout-item-setting"},(0,t.jsx)(Ga,{layoutId:e,layoutItemId:o,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}),!this.props.isSection&&!this.allowCoverBackground()&&(0,t.jsx)(Fa.ThemeBackgroundSection,{background:i.background,onChange:this.onBackgroundStyleChange}),(0,t.jsx)(Fa.ThemeBorderSection,{border:i.border,borderRadius:i.borderRadius,onBorderChange:this.updateBorder,onBorderRasiusChange:this.updateRadius}),(0,t.jsx)(Fa.ThemeBoxShadowSection,{value:i.boxShadow,onChange:this.updateShadow}))}}class _a extends t.React.PureComponent{constructor(){super(...arguments),this.updateRotation=e=>{var o;const i=(0,t.Immutable)(null!==(o=this.props.setting)&&void 0!==o?o:{});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},i.setIn(["style","transform","rotate"],e))},this.formatMessage=t=>this.props.formatMessage(t)}render(){var e,i,n;const a=this.props.setting||{};return(0,t.jsx)($e.SettingRow,{label:this.formatMessage("rotation"),className:"rotation-setting"},(0,t.jsx)(o.NumericInput,{"aria-label":this.formatMessage("rotation"),value:null!==(n=null===(i=null===(e=a.style)||void 0===e?void 0:e.transform)||void 0===i?void 0:i.rotate)&&void 0!==n?n:0,min:-360,max:360,precision:2,onChange:this.updateRotation,formatter:t=>`${t}\xb0`,parser:t=>t.replace("\xb0",""),css:t.css`width: 72px;`,size:"sm"}))}}var Ua=p(4005),Ya=p.n(Ua),Za=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Xa=e=>{const o=window.SVG,{className:i}=e,n=Za(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:a,src:Ya()},n)):t.React.createElement("svg",Object.assign({className:a},n))},qa=[o.DistanceUnits.PIXEL,o.DistanceUnits.PERCENTAGE];class Ja extends t.React.PureComponent{constructor(t){super(t),this.updateBBox=(t,e)=>{const i=this.props.layoutItem.bbox,{distance:n,unit:s}=e,l=i[t];let r=n.toFixed(2);if(a.utils.isPercentage(l)&&s===o.DistanceUnits.PIXEL){const e=this.getSizeOfContainer();null!=e&&(r="left"===t||"right"===t||"width"===t?Math.round(parseFloat(l)*e.width/100):Math.round(parseFloat(l)*e.height/100))}else if(!a.utils.isPercentage(l)&&s===o.DistanceUnits.PERCENTAGE){const e=this.getSizeOfContainer();null!=e&&(r="left"===t||"right"===t||"width"===t?(100*parseFloat(l)/e.width).toFixed(2):(100*parseFloat(l)/e.height).toFixed(2))}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.set(t,e.unit===o.DistanceUnits.PERCENTAGE?`${r}%`:`${r}px`))},this.flipLeftRight=a.utils.isRTL()}getStyle(){return t.css`
      .position-setting {
        background-color: var(--ref-palette-neutral-500);
        position: relative;
        width: 100%;
        padding-top: 60%;
        overflow: visible;
      }

      .content {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        padding: 7px;
      }

      .w-half {
        width: calc(50% - 16px);
        position: relative;
        z-index: 0;
      }
      .h-half {
        height: calc(50% - 16px);
        position: relative;
        z-index: 0;
      }
      .pos-label {
        z-index: 1;
      }

      .box-column {
        width: 32px;
        overflow: visible;
      }

      .box-item {
        width: 24px;
        height: 24px;
        background-color: var(--ref-palette-neutral-800);
        margin: 4px 0;
        position: relative;
        overflow: visible;

        &.stretch {
          background-color: transparent;
          border: 1px solid var(--ref-palette-neutral-800);
        }
        .h-arrow, .v-arrow {
          display: none;
          .arrow-icon {
            color: var(--ref-palette-neutral-800);
            width: 100%;
            height: 100%;
          }
          position: absolute;
          width: 100%;
        }
        .h-arrow {
          top: 50%;
          transform: translateY(-50%);
        }
        .v-arrow {
          left: 50%;
          transform: translateX(-50%);
        }
        &.stretch-w .h-arrow,
        &.stretch-h .v-arrow {
          display: block;
        }
      }

      .anchor {
        position: absolute;
        width: 16px;
        height: 16px;
        background: transparent;
        overflow: visible;

        &.selected {
          width: 10px;
          height: 10px;
          opacity: 1;
          background: var(--sys-color-primary-dark);
          border: 2px solid var(--sys-color-primary-main) !important;
          border-radius: 3px !important;
        }
        &.top.left {
          border-radius: 3px 0 0 0;
        }
        &.top.right {
          border-radius: 0 3px 0 0;
        }
        &.bottom.right {
          border-radius: 0 0 3px 0;
        }
        &.bottom.left {
          border-radius: 0 0 0 3px;
        }
        &.left {
          left: 6px;
          border-left: 2px solid var(--ref-palette-neutral-800);
          &.selected:before {
            position: absolute;
            right: -10px;
            top: 50%;
            transform: translateY(-50%);
            content: '';
            height: 2px;
            width: 10px;
            background-color: var(--sys-color-primary-main);
          }
        }
        &.top {
          top: 6px;
          border-top: 2px solid var(--ref-palette-neutral-800);
          &.selected:after {
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            content: '';
            width: 2px;
            height: 10px;
            background-color: var(--sys-color-primary-main);
          }
        }
        &.bottom {
          bottom: 6px;
          border-bottom: 2px solid var(--ref-palette-neutral-800);
          &.selected:after {
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            content: '';
            width: 2px;
            height: 10px;
            background-color: var(--sys-color-primary-main);
          }
        }
        &.right {
          right: 6px;
          border-right: 2px solid var(--ref-palette-neutral-800);
          &.selected:before {
            position: absolute;
            left: -10px;
            top: 50%;
            transform: translateY(-50%);
            content: '';
            height: 2px;
            width: 10px;
            background-color: var(--sys-color-primary-main);
          }
        }
      }

      .from-left {
        border-left: 2px solid var(--sys-color-primary-main);
        &.is-auto {
          border-left-color: var(--ref-palette-neutral-800);
        }
        &.allow-change:hover {
          border-left-color: var(--sys-color-primary-main);
        }
      }
      .from-top {
        border-top: 2px solid var(--sys-color-primary-main);
        &.is-auto {
          border-top-color: var(--ref-palette-neutral-800);
        }
        &.allow-change:hover {
          border-top-color: var(--sys-color-primary-main);
        }
      }
      .from-right {
        border-right: 2px solid var(--sys-color-primary-main);
        &.is-auto {
          border-right-color: var(--ref-palette-neutral-800);
        }
        &.allow-change:hover {
          border-right-color: var(--sys-color-primary-main);
        }
      }
      .from-bottom {
        border-bottom: 2px solid var(--sys-color-primary-main);
        &.is-auto {
          border-bottom-color: var(--ref-palette-neutral-800);
        }
        &.allow-change:hover {
          border-bottom-color: var(--sys-color-primary-main);
        }
      }
      /* .line-h.is-auto,
      .line-v.is-auto {
        border-color: var(--ref-palette-neutral-800);
      } */
      .line-h {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        height: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 0;

        &.allow-change {
          cursor: pointer;
          &:hover:after {
            border-top-color: var(--sys-color-primary-main);
          }
        }
        &:after {
          content: '';
          height: 0;
          width: 100%;
          border-top: 2px solid var(--sys-color-primary-main);
        }
        &.is-auto:after {
          border-top-style: dashed;
          border-top-color: var(--ref-palette-neutral-800);
        }
      }
      .line-v {
        position: absolute;
        height: 100%;
        width: 12px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        z-index: 0;

        &.allow-change {
          cursor: pointer;
          &:hover:after {
            border-left-color: var(--sys-color-primary-main);
          }
        }
        &:after {
          content: '';
          width: 0;
          height: 100%;
          border-left: 2px solid var(--sys-color-primary-main);
        }
        &.is-auto:after {
          border-left-style: dashed;
          border-left-color: var(--ref-palette-neutral-800);
        }
      }

      .auto-label {
        width: 16px;
        height: 16px;
        background: var(--sys-color-primary-main);
        border: 1px solid var(--ref-palette-neutral-500);
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--ref-palette-neutral-400);
      }

      .style-setting--input-unit {
        &:hover {
          input.jimu-numeric-input-input {
            background-color: var(--ref-palette-neutral-300);
          }
          .style-setting--unit-selector {
            background-color: var(--ref-palette-neutral-300);
          }
        }
        border-radius: 2px;
        width: 52px;
        height: 24px;

        input.jimu-numeric-input-input {
          height: 24px;
          font-size: 12px;
          padding: 0;
          text-align: center;
          border: none;
          background-color: var(--ref-palette-neutral-500);
          &:focus {
            background-color: var(--ref-palette-neutral-300);
          }
        }
        .style-setting--unit-selector {
          background-color: var(--ref-palette-neutral-500);
          color: var(--ref-palette-neutral-900);
          height: 24px;
          width: auto;
          min-width: 0;
          padding: 0;
          margin-left: 0;
          font-size: 12px;
          border: none;
        }
      }

      .origin-tip {
        margin-top: 8px;
        font-size: 12px;
        color: var(--ref-palette-neutral-900);
      }
    `}inputUnit(e){const{layoutItem:i,formatMessage:n}=this.props,a=o.utils.stringOfLinearUnit(i.bbox[e]);return(0,t.jsx)("div",{className:"pos-label",role:"group","aria-label":n(e)},(0,t.jsx)(Fa.InputUnit,{units:qa,min:-1/0,max:1/0,value:a,onChange:t=>{this.updateBBox(e,t)}}))}getSizeOfContainer(){const t=this.querySelector(`div.fixed-layout[data-layoutid="${this.props.layoutId}"]`);return null==t?void 0:t.getBoundingClientRect()}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return null==o?void 0:o.getBoundingClientRect()}querySelector(e){var o;const i=document.querySelector(`iframe[name="${t.APP_FRAME_NAME_IN_BUILDER}"]`);if(null!=i){return(null!==(o=i.contentDocument)&&void 0!==o?o:i.contentWindow.document).querySelector(e)}return null}switchAuto(e,o,i){var n,s;const{layoutId:l,layoutItem:r}=this.props,d=null!==(n=r.setting)&&void 0!==n?n:(0,t.Immutable)({});let u=null!==(s=r.bbox)&&void 0!==s?s:(0,t.Immutable)({});if(i&&null==u[e]){const t=this.getSizeOfContainer(),o=this.getSizeOfItem();switch(e){case"left":u=u.set(e,a.utils.toRatio(o.left,t.width));break;case"right":u=u.set(e,a.utils.toRatio(t.width-o.right,t.width));break;case"top":u=u.set(e,a.utils.toRatio(o.top,t.height));break;case"bottom":u=u.set(e,a.utils.toRatio(t.height-o.bottom,t.height))}this.props.onPosChange({layoutId:l,layoutItemId:r.id},u)}this.props.onSettingChange({layoutId:l,layoutItemId:r.id},d.setIn(["autoProps",e],!i).setIn(["autoProps",o],i))}checkAutoProps(t){const e=Ei(this.props.layoutItem.bbox,t);return{leftAuto:null==e.left||t.hCenter&&"50%"===e.left,rightAuto:null==e.right||t.hCenter&&"50%"===e.left,topAuto:null==e.top||t.vCenter&&"50%"===e.top,bottomAuto:null==e.bottom||t.vCenter&&"50%"===e.top}}checkOrigin(t,e,o,i){let n=t,s=e,l=o,r=i;return t===e&&(n=a.utils.isRTL(),s=!n),o===i&&(l=!1,r=!0),{top:l,bottom:r,left:n,right:s}}allowChangeAutoProps(t){var e;const o=this.props.layoutItem.setting,i=null!==(e=null==o?void 0:o.autoProps)&&void 0!==e?e:{};return!(a.utils.getLayoutItemSizeMode(t,this.props.layoutItem.bbox,i)===a.LayoutItemSizeModes.Stretch||"width"===t&&(null==o?void 0:o.hCenter)||"height"===t&&(null==o?void 0:o.vCenter))}getOrigin(t,e,o,i){const{formatMessage:n}=this.props;return t||e?o||e?o||i?t||i?"":this.flipLeftRight?n("BR"):n("BL"):this.flipLeftRight?n("BL"):n("BR"):this.flipLeftRight?n("TL"):n("TR"):this.flipLeftRight?n("TR"):n("TL")}render(){const{layoutItem:e,widthMode:i,heightMode:s,formatMessage:l}=this.props;if(null==e)return null;const r=t.lodash.assign({},n,e.setting),{leftAuto:d,rightAuto:u,topAuto:c,bottomAuto:p}=this.checkAutoProps(r),{top:h,bottom:g,left:m,right:y}=this.checkOrigin(d,u,c,p),f=this.allowChangeAutoProps("width"),v=this.allowChangeAutoProps("height");return(0,t.jsx)("div",{css:this.getStyle(),className:"w-100"},(0,t.jsx)("div",{className:"position-setting rounded-2"},(0,t.jsx)("div",{className:"content d-flex justify-content-center align-items-center"},(0,t.jsx)("div",{className:"d-flex w-half flex-column justify-content-center align-items-center"},(0,t.jsx)("div",{className:"d-flex w-100 justify-content-center align-items-center"},(0,t.jsx)(o.Tooltip,{placement:"bottom",title:f?l(d?"changeToCustom":"changeToAuto"):""},(0,t.jsx)("div",{className:(0,t.classNames)("from-left line-h flex-grow-1 flex-shrink-1",{"is-auto":d,"allow-change":f}),onClick:f?this.switchAuto.bind(this,"left","right",d):null})),d?null:this.inputUnit("left"))),(0,t.jsx)("div",{className:"d-flex h-100 flex-column justify-content-center align-items-center box-column"},(0,t.jsx)("div",{className:"d-flex h-half w-100 flex-column justify-content-center align-items-center"},(0,t.jsx)(o.Tooltip,{placement:"bottom",title:v?l(c?"changeToCustom":"changeToAuto"):""},(0,t.jsx)("div",{className:(0,t.classNames)("from-top line-v flex-grow-1 flex-shrink-1",{"is-auto":c,"allow-change":v}),onClick:v?this.switchAuto.bind(this,"top","bottom",c):null})),c?null:this.inputUnit("top")),(0,t.jsx)("div",{className:(0,t.classNames)("box-item rounded-lg",{stretch:i===a.LayoutItemSizeModes.Stretch||s===a.LayoutItemSizeModes.Stretch,"stretch-w":i===a.LayoutItemSizeModes.Stretch,"stretch-h":s===a.LayoutItemSizeModes.Stretch})},(0,t.jsx)("div",{className:"h-arrow"},(0,t.jsx)(Xa,{className:"arrow-icon"})),(0,t.jsx)("div",{className:"v-arrow"},(0,t.jsx)(Xa,{className:"arrow-icon",rotate:90}))),(0,t.jsx)("div",{className:"d-flex h-half w-100 flex-column justify-content-center align-items-center"},(0,t.jsx)(o.Tooltip,{placement:"bottom",title:v?l(p?"changeToCustom":"changeToAuto"):""},(0,t.jsx)("div",{className:(0,t.classNames)("from-bottom line-v flex-grow-1 flex-shrink-1",{"is-auto":p,"allow-change":v}),onClick:v?this.switchAuto.bind(this,"bottom","top",p):null})),p?null:this.inputUnit("bottom"))),(0,t.jsx)("div",{className:"d-flex w-half flex-column justify-content-center align-items-center"},(0,t.jsx)("div",{className:"d-flex w-100 justify-content-center align-items-center"},(0,t.jsx)(o.Tooltip,{placement:"bottom",title:f?l(u?"changeToCustom":"changeToAuto"):""},(0,t.jsx)("div",{className:(0,t.classNames)("from-right line-h flex-grow-1 flex-shrink-1",{"is-auto":u,"allow-change":f}),onClick:f?this.switchAuto.bind(this,"right","left",u):null})),u?null:this.inputUnit("right"))),(0,t.jsx)("div",{className:(0,t.classNames)("anchor top left",{selected:!m&&!h})}),(0,t.jsx)("div",{className:(0,t.classNames)("anchor top right",{selected:!y&&!h})}),(0,t.jsx)("div",{className:(0,t.classNames)("anchor bottom left",{selected:!m&&!g})}),(0,t.jsx)("div",{className:(0,t.classNames)("anchor bottom right",{selected:!g&&!y})}))),(0,t.jsx)("div",{className:"origin-tip d-flex justify-content-center align-item-center"},this.getOrigin(m,h,y,g)))}}const Qa=[a.LayoutItemSizeModes.Auto,a.LayoutItemSizeModes.Custom,a.LayoutItemSizeModes.Stretch],Ka=[a.LayoutItemSizeModes.Custom,a.LayoutItemSizeModes.Stretch],ts=[...[$i[1][1],$i[1][2],$i[1][3],$i[1][4],{seperator:!0},$i[0][1],$i[0][2],$i[0][3]].map((t=>Object.assign(Object.assign({},t),{title:t.title,label:null}))),[{icon:l(),caret:!1},$i[0][4],$i[0][5],$i[0][6],{seperator:!0},$i[0][7],$i[0][8],$i[0][9]]];class es extends t.React.PureComponent{constructor(i){super(i),this.updateBBox=(t,e)=>{var i;let n=this.props.layoutItem.bbox;const{distance:s,unit:l}=e,r=n[t],d=this.getSizeOfContainer();let u,c=s.toFixed(2);if(a.utils.isPercentage(r)&&l===o.DistanceUnits.PIXEL?d&&(c="left"===t||"right"===t||"width"===t?Math.round(parseFloat(r)*d.width/100):Math.round(parseFloat(r)*d.height/100),u=c):a.utils.isPercentage(r)||l!==o.DistanceUnits.PERCENTAGE||(d&&(c="left"===t||"right"===t||"width"===t?(100*parseFloat(r)/d.width).toFixed(4):(100*parseFloat(r)/d.height).toFixed(4)),u=parseFloat(r)),u||l!==o.DistanceUnits.PERCENTAGE)u||l!==o.DistanceUnits.PIXEL||(u=s);else{const e="width"===t?d.width:d.height;u=Math.round(s*e/100)}if(n=n.set(t,l===o.DistanceUnits.PERCENTAGE?`${c}%`:`${c}px`),"ratio"===(null===(i=this.props.layoutItem.setting)||void 0===i?void 0:i.heightMode)){const e=a.utils.parseAspectRatio(this.props.layoutItem.setting.aspectRatio);if("width"===t){const t=u*e;if(a.utils.isPercentage(n.height)){const e=(100*t/d.height).toFixed(4);n=n.set("height",`${e}%`)}else n=n.set("height",`${Math.round(t)}px`)}else{const t=u/e;if(a.utils.isPercentage(n.width)){const e=(100*t/d.width).toFixed(4);n=n.set("width",`${e}%`)}else n=n.set("width",`${Math.round(t)}px`)}}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},n)},this.updateMode=(o,i)=>{var n;const s=null!==(n=this.props.layoutItem.setting)&&void 0!==n?n:(0,t.Immutable)({}),l={layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id};if(i===a.LayoutItemSizeModes.Custom){const t=this.getSizeOfContainer(),n=this.getSizeOfItem();if(t&&n){const a=(100*n[o]/t[o]).toFixed(4);return void(0,e.getAppConfigAction)().editLayoutItemProperty(l,"setting",s.setIn(["autoProps",o],i)).editLayoutItemProperty(l,`bbox.${o}`,`${a}%`).exec()}}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},s.setIn(["autoProps",o],i))},this.updateLockParent=e=>{let o=this.props.layoutItem.setting||(0,t.Immutable)({});o=o.set("lockParent",e.target.checked),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.toggleHeightMode=()=>{let e=this.props.layoutItem.setting||(0,t.Immutable)({});const o="ratio"===e.heightMode?"fixed":"ratio";if(e=e.set("heightMode",o),"ratio"===o){const t=this.getSizeOfItem();t&&(e=e.set("aspectRatio",Number((t.height/t.width).toFixed(2))).setIn(["autoProps","height","AUTO"]))}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.updateAspectRatio=e=>{let o=this.props.layoutItem.setting||(0,t.Immutable)({});o=o.set("aspectRatio",e),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.flipLeftRight=a.utils.isRTL(),this.state={enableToolbar:!1}}componentDidMount(){this.ref&&this.setState({enableToolbar:!0})}getSizeOfContainer(){const t=this.querySelector(`div.fixed-layout[data-layoutid="${this.props.layoutId}"]`);return t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(e){const o=document.querySelector(`iframe[name="${t.APP_FRAME_NAME_IN_BUILDER}"]`);if(o){return(o.contentDocument||o.contentWindow.document).querySelector(e)}return null}getStyle(){return t.css`
      .layout-item-toolbar {
        box-shadow: none;
        background: transparent;

        .toolbar-item, icon-container {
          width: 28px;
          min-height: 28px;
        }
        .toolbar-group {
          background: transparent;
          margin: 0 1px;
        }
        .toolbar-item {
          margin: 0 1px;
          background: transparent;
          &:hover {
            background: var(--ref-palette-neutral-500);
          }

          svg {
            width: 14px;
            height: 14px;
          }
        }
      }

      .ratio-value {
        font-size: 12px;
      }
    `}render(){const{layoutItem:e,layoutId:i,formatMessage:s,isLockLayout:l,supportAutoSize:r}=this.props;if(!e)return null;this.itemSetting=t.lodash.assign({},n,e.setting);const d="ratio"===this.itemSetting.heightMode,c=a.utils.getLayoutItemSizeMode("width",e.bbox,this.itemSetting.autoProps),p=a.utils.getLayoutItemSizeMode("height",e.bbox,this.itemSetting.autoProps),h=e.bbox,g=(0,u.getTheme)(),m=t.css`width: 100px;`;return(0,t.jsx)("div",{className:"fixed-item-setting",css:this.getStyle(),ref:t=>this.ref=t},!l&&this.state.enableToolbar&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)($e.SettingSection,{className:"p-0 d-flex justify-content-center"},(0,t.jsx)(kt,{layoutId:i,layoutItem:e,parentRef:this.ref,theme:g,tools:ts,formatMessage:this.props.formatMessage})),(0,t.jsx)($e.SettingSection,{role:"group","aria-label":`${s("size")} & ${s("position")}`,title:`${s("size")} & ${s("position")}`},(0,t.jsx)($e.SettingRow,{role:"group","aria-label":s("width"),label:s("width")},(0,t.jsx)("div",{css:m},(0,t.jsx)(Fa.SizeEditor,{label:"W",mode:c,sizeModes:r&&!d?Qa:Ka,value:o.utils.stringOfLinearUnit(h.width),onChange:t=>{this.updateBBox("width",t)},onModeChange:t=>{this.updateMode("width",t)}}))),c!==a.LayoutItemSizeModes.Auto&&(0,t.jsx)("div",null,(0,t.jsx)(o.Tooltip,{title:s("keepAspectRatio"),placement:"bottom"},(0,t.jsx)(o.Button,{size:"sm",type:"tertiary",className:"ml-1",icon:!0,onClick:this.toggleHeightMode,"aria-pressed":d},d?(0,t.jsx)(Le,{size:"s"}):(0,t.jsx)(oa,{size:"s"})))),(0,t.jsx)($e.SettingRow,{role:"group","aria-label":s("height"),label:s("height"),className:(0,t.classNames)({"mt-0":c!==a.LayoutItemSizeModes.Auto})},(0,t.jsx)("div",{css:m},(0,t.jsx)(Fa.SizeEditor,{label:"H",mode:p,sizeModes:r?Qa:Ka,disabled:d,value:o.utils.stringOfLinearUnit(h.height),onChange:t=>{this.updateBBox("height",t)},onModeChange:t=>{this.updateMode("height",t)}}))),d&&(0,t.jsx)($e.SettingRow,{"aria-label":s("aspectRatio"),label:s("aspectRatio")},(0,t.jsx)(Fa.InputRatio,{value:this.itemSetting.aspectRatio,style:{width:100},onChange:this.updateAspectRatio})),(0,t.jsx)($e.SettingRow,null,(0,t.jsx)(Ja,Object.assign({},this.props,{widthMode:c,heightMode:p}))),(0,t.jsx)(_a,{layoutId:i,layoutItemId:e.id,setting:e.setting,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage})),(0,t.jsx)($e.SettingSection,null,(0,t.jsx)($e.SettingRow,{label:s("lockParent")},(0,t.jsx)(o.Switch,{"aria-label":s("lockParent"),checked:this.itemSetting.lockParent,onChange:this.updateLockParent})))),(e.type===t.LayoutItemType.Widget||e.sectionId)&&(0,t.jsx)(Wa,{layoutId:i,layoutItemId:e.id,style:this.props.style,isSection:e.type===t.LayoutItemType.Section,onStyleChange:this.props.onStyleChange,formatMessage:this.props.formatMessage,setting:e.setting||(0,t.Immutable)({}),onSettingChange:this.props.onSettingChange}))}}const os={gutter:0,style:{padding:{number:[0],unit:"px"},justifyContent:"flex-start",alignItems:"stretch",borderRadius:{number:[0],unit:o.DistanceUnits.PIXEL}}},is={lockParent:!0,heightMode:"auto",offsetX:0,offsetY:0},ns=(0,t.createSelector)([(t,e)=>{var o;const{layoutItem:i}=e,n=null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.selection;return!!n&&(n.layoutId===e.layoutId&&n.layoutItemId===i.id)},(e,i)=>{var n,a,s;const{layoutItem:l}=i;let r=[0,0,0,0];if(l.type===t.LayoutItemType.Widget){const t=l.widgetId,i=e.appConfig.widgets[t];i&&(r=o.styleUtils.expandStyleArray(null===(s=null===(a=null===(n=i.config)||void 0===n?void 0:n.style)||void 0===a?void 0:a.padding)||void 0===s?void 0:s.number))}return r[0]+r[2]},(e,o)=>{const{layoutItem:i}=o;let n=!0;if(i.type===t.LayoutItemType.Widget){const t=i.widgetId,o=e.appConfig.widgets[t];if(o){const t=Object.keys(o.layouts)[0],i=P(o.layouts[t],e.browserSizeMode,e.appConfig.mainSizeMode),a=e.appConfig.layouts[i];a&&Object.keys(a.content||[]).length>0&&Object.keys(a.content||[]).some((t=>{if(!a.content[t].isPending)return n=!1,!0}))}}return n}],((t,e,o)=>({selected:t,padding:e,isEmpty:o})));function as(t){const e=parseFloat(null==t?void 0:t.width);return e>0?`${t.width}`.includes("px")?`${Math.round(e)}px`:`${Math.round(e)}%`:"100%"}const ss={[t.ScreenTransitionType.Push]:p(8686),[t.ScreenTransitionType.Fade]:p(6663),[t.ScreenTransitionType.Cover]:p(8686)};class ls extends t.React.PureComponent{constructor(){super(...arguments),this.onTypeChanged=(t,e,o)=>{o?this.props.onPanelTransitionTypeChange(e):this.props.onTransitionTypeChange(e)},this.updateFirstPanel=t=>{}}getStyle(){return t.css`
      .animation-cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 12px;
        grid-column-gap: 12px;
      }

      .card-item {
        font-size: 13px;
        flex: 0 0 45%;

        user-select: none;
        cursor: pointer;
        position: relative;

        .card-content {
          width: 100%;
          height: 5rem;
          background-color: var(--ref-palette-neutral-300);
        }

        &.selected .card-content {
          outline: 2px solid var(--sys-color-primary-light);
        }

        .card-image {
          width: 100%;
          height: 100%;
          padding: 8px;
          &:after {
            display: none;
          }
        }

        .card-name {
          max-width: 90px;
          margin: 0 auto;
          color: var(--ref-palette-neutral-1100);
          .card-name-content {
            line-height: 1rem;
            max-height: 2rem;
            white-space: normal;
          }
        }
      }
    `}createAnimationCard(e,i,n=!1){const{transitionType:a,panelTransitionType:s}=this.props;let l;return l=n?null!=s?s:t.ScreenTransitionType.Push:null!=a?a:t.ScreenTransitionType.Fade,(0,t.jsx)("div",{className:(0,t.classNames)("d-flex flex-column align-items-center card-item",{selected:e===l}),key:i,onClick:t=>{this.onTypeChanged(t,e,n)}},(0,t.jsx)("div",{className:"d-flex justify-content-center card-content"},(0,t.jsx)("div",{className:"card-image"},(0,t.jsx)(o.Icon,{className:"w-100",currentColor:!1,icon:ss[e],size:72}))),(0,t.jsx)("div",{className:"card-name flex-grow-1 d-flex align-items-start mt-1"},(0,t.jsx)("span",{className:"text-center text-truncate card-name-content",title:this.props.formatMessage(e.toLowerCase())},this.props.formatMessage(e.toLowerCase()))))}render(){const{formatMessage:e}=this.props;return(0,t.jsx)("div",{className:"bg-default border-color-gray-400",css:this.getStyle()},(0,t.jsx)($e.SettingSection,{title:e("mainStage")},(0,t.jsx)("div",{className:"animation-cards"},[t.ScreenTransitionType.Fade,t.ScreenTransitionType.Cover,t.ScreenTransitionType.Push].map(((t,e)=>this.createAnimationCard(t,e))))),(0,t.jsx)($e.SettingSection,{title:e("scrollingPanel")},(0,t.jsx)("div",{className:"animation-cards"},[t.ScreenTransitionType.Push,t.ScreenTransitionType.Fade].map(((t,e)=>this.createAnimationCard(t,e,!0))))),(0,t.jsx)($e.SettingSection,null,(0,t.jsx)($e.SettingRow,null,(0,t.jsx)(o.Checkbox,{onChange:this.updateFirstPanel,className:"mr-2"}),e("applyToFirstPanel"))))}}const rs=p(9572);class ds extends t.React.PureComponent{constructor(o){super(o),this.sidePopperTrigger=t.React.createRef(),this.onTransitionTypeChange=t=>{const{screenGroupId:o}=this.props.layoutItem;(0,e.getAppConfigAction)().editScreenGroupProperty(o,"transitionType",t).exec()},this.onPanelTransitionTypeChange=t=>{const{screenGroupId:o}=this.props.layoutItem;(0,e.getAppConfigAction)().editScreenGroupProperty(o,"panelTransitionType",t).exec()},this.toggleSidePanel=()=>{this.setState({showSidePanel:!this.state.showSidePanel})},this.state={showSidePanel:!1}}getAnimBoxStyle(){return t.css`
      background-color: transparent;
      width: 100%;
      height: 72px;

      .img-tip {
        position: relative;
        min-width: 90px;
        height: 72px;
        cursor: pointer;
        background: var(--ref-palette-neutral-300);

        .has-sibling {
          position: absolute;
          &.first {
            left: 5px;
            top: 5px;
          }
          &.second {
            bottom: 5px;
            right: 5px;
          }
        }

        .diag-sep {
          position: absolute;
          height: 1px;
          width: 80px;
          top: 36px;
          transform: rotateZ(-45deg);
          background: var(--ref-palette-neutral-500);
        }
      }

      .anim-label {
        align-self: flex-start;
      }
    `}getSidePopperStyle(){return t.css`
      .header {
        height: 60px;
        padding: 0 0.5rem;
      }
      .side-popper-title {
        color: var(--ref-palette-neutral-1000);
        font-size: 13px;
      }
      .side-content {
        position: relative;
        width: 100%;
        height: calc(100% - 60px);
        overflow: auto;
      }
    `}render(){var e,i,n,a,s;const{formatMessage:l}=this.props,r=null!==(e=this.props.transitionType)&&void 0!==e?e:t.ScreenTransitionType.Fade,d=null!==(i=this.props.panelTransitionType)&&void 0!==i?i:t.ScreenTransitionType.Push;return(0,t.jsx)($e.SettingSection,{title:l("transition")},(0,t.jsx)("div",{className:"anima-box d-flex justify-content-between align-items-center",css:this.getAnimBoxStyle()},(0,t.jsx)("div",{className:"img-tip d-flex justify-content-center align-items-center",onClick:this.toggleSidePanel},(0,t.jsx)("div",{className:"anim-icon first has-sibling"},(0,t.jsx)(o.Icon,{icon:null!==(n=ss[r])&&void 0!==n?n:rs,size:32})),(0,t.jsx)("div",{className:"diag-sep"}),(0,t.jsx)("div",{className:"anim-icon second has-sibling"},(0,t.jsx)(o.Icon,{icon:null!==(a=ss[d])&&void 0!==a?a:rs,size:32}))),(0,t.jsx)("div",{className:"d-flex flex-column justify-content-between align-items-end h-100"},(0,t.jsx)("div",{className:"anim-label"},(0,t.jsx)("span",null,l(r.toLowerCase())),(0,t.jsx)("span",{className:"mx-1"},"/"),(0,t.jsx)("span",null,l(d.toLowerCase()))),(0,t.jsx)("div",{className:"amin-icons w-100",ref:this.sidePopperTrigger},(0,t.jsx)(o.Button,{size:"sm",onClick:this.toggleSidePanel,className:"text-truncate",title:l("change")},l("change"))))),this.state.showSidePanel&&(0,t.jsx)($e.SidePopper,{isOpen:!0,title:l("transition"),css:this.getSidePopperStyle(),position:"right",toggle:this.toggleSidePanel,trigger:null===(s=this.sidePopperTrigger)||void 0===s?void 0:s.current},(0,t.jsx)("div",{className:"side-content"},(0,t.jsx)(ls,{transitionType:r,panelTransitionType:d,onTransitionTypeChange:this.onTransitionTypeChange,onPanelTransitionTypeChange:this.onPanelTransitionTypeChange,formatMessage:l}))))}}const us=(0,t.createSelector)([(t,e)=>{const{screenGroupId:o}=e.layoutItem,{appConfig:i}=t.appStateInBuilder;return i.screenGroups[o].transitionType},(t,e)=>{const{screenGroupId:o}=e.layoutItem,{appConfig:i}=t.appStateInBuilder;return i.screenGroups[o].panelTransitionType}],((t,e)=>({transitionType:t,panelTransitionType:e}))),cs=t.ReactRedux.connect(us)(ds),ps={width:110};class hs extends t.React.PureComponent{constructor(){super(...arguments),this.updateWidth=e=>{let i=this.props.layoutItem.setting||(0,t.Immutable)({});i=i.set("width",o.utils.stringOfLinearUnit(e)),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.updateBBoxWidth=e=>{let i=(0,t.Immutable)(this.props.layoutItem.bbox||{});i=i.set("width",o.utils.stringOfLinearUnit(e)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.updateHeight=e=>{let i=(0,t.Immutable)(this.props.layoutItem.bbox||{});i=i.set("height",o.utils.stringOfLinearUnit(e)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.updateOffsetX=e=>{const o=this.props.layoutItem.setting||(0,t.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetX",e))},this.updateOffsetY=e=>{const o=this.props.layoutItem.setting||(0,t.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetY",e))},this.updateHeightMode=e=>{let o=this.props.layoutItem.setting||(0,t.Immutable)({});o=o.set("heightMode",e===a.LayoutItemSizeModes.Custom?"fixed":"auto"),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)}}updateFloatingArea(e){const o=this.props.layoutItem.setting||(0,t.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("floatingArea",e))}getStyle(){return t.css`
      .floating-position {
        margin-bottom: 1rem;
      }

      .floating-area-chooser {
        position: relative;

        .content {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-row-gap: 0;
          grid-column-gap: 0;
          border: 1px solid var(--ref-palette-neutral-500);

          & > div {
            cursor: pointer;
            width: 30px;
            height: 30px;
            position: relative;
          }

          & > div:nth-of-type(3n+1) {
            border-right: 1px solid var(--ref-palette-neutral-500);
          }
          & > div:nth-of-type(3n) {
            border-left: 1px solid var(--ref-palette-neutral-500);
          }
          & > div:nth-of-type(1), & > div:nth-of-type(2), & > div:nth-of-type(3) {
            border-bottom: 1px solid var(--ref-palette-neutral-500);
          }
          & > div:nth-of-type(7), & > div:nth-of-type(8), & > div:nth-of-type(9) {
            border-top: 1px solid var(--ref-palette-neutral-500);
          }

          .selected:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: var(--sys-color-primary-light);
            border: 1px solid var(--sys-color-primary-main);
          }
        }
      }
    `}render(){const{layoutId:e,layoutItem:i,formatMessage:n,isLockLayout:s}=this.props;if(!i)return null;if(i.type===t.LayoutItemType.ScreenGroup)return(0,t.jsx)(cs,Object.assign({},this.props));this.itemSetting=t.lodash.assign({},is,i.setting);const l=i.bbox;return(0,t.jsx)("div",{className:"flow-item-setting",css:this.getStyle()},!s&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)($e.SettingSection,{title:`${n("position")} & ${n("size")}`},(0,t.jsx)("div",{className:"floating-position d-flex"},(0,t.jsx)("div",{className:"floating-area-chooser"},(0,t.jsx)("div",{className:"content"},(0,t.jsx)("div",{className:(0,t.classNames)("top-left",{selected:1===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,1)}),(0,t.jsx)("div",{className:(0,t.classNames)("top-center",{selected:2===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,2)}),(0,t.jsx)("div",{className:(0,t.classNames)("top-right",{selected:3===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,3)}),(0,t.jsx)("div",{className:(0,t.classNames)("middle-left",{selected:4===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,4)}),(0,t.jsx)("div",{className:(0,t.classNames)("middle-center",{selected:5===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,5)}),(0,t.jsx)("div",{className:(0,t.classNames)("middle-right",{selected:6===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,6)}),(0,t.jsx)("div",{className:(0,t.classNames)("bottom-left",{selected:7===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,7)}),(0,t.jsx)("div",{className:(0,t.classNames)("bottom-center",{selected:8===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,8)}),(0,t.jsx)("div",{className:(0,t.classNames)("bottom-right",{selected:9===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,9)}))),(0,t.jsx)("div",{className:"d-flex flex-grow-1 flex-column justify-content-between align-items-end"},(0,t.jsx)("div",{className:"d-flex align-items-center",css:t.css`width: 110px`},(0,t.jsx)("span",{className:"mr-2"},"W"),(0,t.jsx)(Fa.SizeEditor,{label:"W",mode:a.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:null==l?void 0:l.width,onChange:this.updateBBoxWidth})),(0,t.jsx)("div",{className:"d-flex align-items-center",css:t.css`width: 110px`},(0,t.jsx)("span",{className:"mr-2"},"H"),(0,t.jsx)(Fa.SizeEditor,{label:"H",mode:a.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:null==l?void 0:l.height,onChange:this.updateHeight})))),(0,t.jsx)($e.SettingRow,{label:n("offsetX")},(0,t.jsx)(o.NumericInput,{style:ps,value:this.itemSetting.offsetX,precision:0,onChange:this.updateOffsetX,size:"sm"})),(0,t.jsx)($e.SettingRow,{label:n("offsetY")},(0,t.jsx)(o.NumericInput,{style:ps,precision:0,value:this.itemSetting.offsetY,onChange:this.updateOffsetY,size:"sm"})))),(i.type===t.LayoutItemType.Widget||i.sectionId)&&(0,t.jsx)(Wa,{layoutId:e,layoutItemId:i.id,isSection:!1,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const gs={width:110},ms=[a.LayoutItemSizeModes.Auto,a.LayoutItemSizeModes.Custom],ys=[o.DistanceUnits.PIXEL];class fs extends t.React.PureComponent{constructor(){super(...arguments),this.updateWidth=e=>{let i=this.props.layoutItem.setting||(0,t.Immutable)({});i=i.set("width",o.utils.stringOfLinearUnit(e)),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.updateBBoxWidth=e=>{let i=(0,t.Immutable)(this.props.layoutItem.bbox||{});i=i.set("width",o.utils.stringOfLinearUnit(e)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.updateHeight=e=>{let i=(0,t.Immutable)(this.props.layoutItem.bbox||{});i=i.set("height",o.utils.stringOfLinearUnit(e)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.updateOffsetX=e=>{const o=this.props.layoutItem.setting||(0,t.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetX",e))},this.updateOffsetY=e=>{const o=this.props.layoutItem.setting||(0,t.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetY",e))},this.updateHeightMode=e=>{var o,i,n;const{layoutItem:s}=this.props;let l=null!==(o=s.setting)&&void 0!==o?o:(0,t.Immutable)({});if(l=l.set("heightMode",e===a.LayoutItemSizeModes.Custom?"fixed":"auto"),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},l),!(null===(i=s.bbox)||void 0===i?void 0:i.height)){const e=this.getSizeOfItem();if(e){let o=(0,t.Immutable)(null!==(n=s.bbox)&&void 0!==n?n:{});o=o.set("height",`${Math.round(e.height)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)}}}}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(e){const o=document.querySelector(`iframe[name="${t.APP_FRAME_NAME_IN_BUILDER}"]`);if(o){return(o.contentDocument||o.contentWindow.document).querySelector(e)}return null}updateFloatingArea(e){const o=this.props.layoutItem.setting||(0,t.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("floatingArea",e))}render(){var e,i;const{layoutId:n,layoutItem:s,formatMessage:l,isLockLayout:r}=this.props;if(!s)return null;if(s.type===t.LayoutItemType.ScreenGroup)return(0,t.jsx)(cs,Object.assign({},this.props));if(this.itemSetting=t.lodash.assign({},is,s.setting),this.itemSetting.isFloating)return(0,t.jsx)(hs,Object.assign({},this.props));const d=s.bbox,u=o.utils.stringOfLinearUnit(as(this.itemSetting)),c=o.utils.stringOfLinearUnit(parseFloat(null===(e=s.bbox)||void 0===e?void 0:e.height)>0?null===(i=s.bbox)||void 0===i?void 0:i.height:100),p="auto"===this.itemSetting.heightMode||a.utils.isPercentage(null==d?void 0:d.height);return(0,t.jsx)("div",{className:"flow-item-setting"},!r&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)($e.SettingSection,{title:l("size")},(0,t.jsx)($e.SettingRow,{label:l("width")},(0,t.jsx)("div",{style:gs},(0,t.jsx)(Fa.SizeEditor,{label:"W",mode:a.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:u,onChange:this.updateWidth}))),(0,t.jsx)($e.SettingRow,{label:l("height")},(0,t.jsx)("div",{style:gs},(0,t.jsx)(Fa.SizeEditor,{label:"H",mode:p?a.LayoutItemSizeModes.Auto:a.LayoutItemSizeModes.Custom,sizeModes:ms,availableUnits:ys,disableModeSelect:!1,value:c,onChange:this.updateHeight,onModeChange:this.updateHeightMode})))),(0,t.jsx)($e.SettingSection,{title:l("position")},(0,t.jsx)($e.SettingRow,{label:l("offsetX")},(0,t.jsx)(o.NumericInput,{style:gs,value:this.itemSetting.offsetX,onChange:this.updateOffsetX,precision:0,size:"sm"})),(0,t.jsx)($e.SettingRow,{label:l("offsetY")},(0,t.jsx)(o.NumericInput,{style:gs,value:this.itemSetting.offsetY,onChange:this.updateOffsetY,precision:0,size:"sm"})))),(s.type===t.LayoutItemType.Widget||s.sectionId)&&(0,t.jsx)(Wa,{layoutId:n,layoutItemId:s.id,isSection:!1,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const vs=t.css`width: 100px;`,Is=[a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom],xs=[a.LayoutItemSizeModes.Auto,a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom],bs=[a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom],ws=[o.DistanceUnits.PIXEL,o.DistanceUnits.PERCENTAGE],Ss=[o.DistanceUnits.PIXEL];class Cs extends t.React.PureComponent{constructor(){super(...arguments),this.updateBBox=(t,e)=>{var i;let n=this.props.layoutItem.bbox;const{distance:s,unit:l}=e,r=n[t],d=this.getSizeOfContainer();let u,c=s.toFixed(2);if(a.utils.isPercentage(r)&&l===o.DistanceUnits.PIXEL?d&&(c="left"===t||"right"===t||"width"===t?Math.round(parseFloat(r)*d.width/100):Math.round(parseFloat(r)*d.height/100),u=c):a.utils.isPercentage(r)||l!==o.DistanceUnits.PERCENTAGE||(d&&(c="left"===t||"right"===t||"width"===t?(100*parseFloat(r)/d.width).toFixed(4):(100*parseFloat(r)/d.height).toFixed(4)),u=parseFloat(r)),u||l!==o.DistanceUnits.PERCENTAGE)u||l!==o.DistanceUnits.PIXEL||(u=s);else{const e="width"===t?d.width:d.height;u=Math.round(s*e/100)}if(n=n.set(t,l===o.DistanceUnits.PERCENTAGE?`${c}%`:`${c}px`),"ratio"===(null===(i=this.props.layoutItem.setting)||void 0===i?void 0:i.heightMode)){const e=this.props.layoutItem.setting.aspectRatio;if("width"===t){const t=u*e;if(a.utils.isPercentage(n.height)){const e=(100*t/d.height).toFixed(4);n=n.set("height",`${e}%`)}else n=n.set("height",`${Math.round(t)}px`)}else{const t=u/e;if(a.utils.isPercentage(n.width)){const e=(100*t/d.width).toFixed(4);n=n.set("width",`${e}%`)}else n=n.set("width",`${Math.round(t)}px`)}}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},n)},this.toggleHeightMode=()=>{let e=this.props.layoutItem.setting||(0,t.Immutable)({});const o="ratio"===e.heightMode?"fixed":"ratio";if(e=e.set("heightMode",o),"ratio"===o){const t=this.getSizeOfItem();t&&(e=e.set("aspectRatio",Number((t.height/t.width).toFixed(2))))}else{let t=this.props.layoutItem.bbox;const e=this.getSizeOfItem();if(a.utils.isPercentage(t.width)){const o=this.getSizeOfContainer();t=t.set("width",`${(100*e.width/o.width).toFixed(4)}%`)}else t=t.set("width",`${Math.round(e.width)}px`);t=t.set("height",`${Math.round(e.height)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.updateAlignSelf=e=>{let o=this.props.layoutItem.setting||(0,t.Immutable)({});o=o.setIn(["style","alignSelf"],e.target.value),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateHeightMode=e=>{const o=this.props.layoutItem.setting||(0,t.Immutable)({});let i=(0,t.Immutable)(this.props.layoutItem.bbox);if(e===a.LayoutItemSizeModes.Custom&&isNaN(parseFloat(i.height))){const t=this.getSizeOfItem();i=i.set("height",`${Math.round(t.height)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.setIn(["autoProps","height"],e))},this.updateWidthMode=e=>{const o=this.props.layoutItem.setting||(0,t.Immutable)({});let i=(0,t.Immutable)(this.props.layoutItem.bbox);if(e===a.LayoutItemSizeModes.Custom&&isNaN(parseFloat(i.width))){const t=this.getSizeOfItem();i=i.set("width",`${Math.round(t.width)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.setIn(["autoProps","width"],e))},this.updateAspectRatio=e=>{let o=this.props.layoutItem.setting||(0,t.Immutable)({});o=o.set("aspectRatio",e),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.formatMessage=t=>this.props.formatMessage(t)}getSizeOfContainer(){const t=this.querySelector(`div.column-layout[data-layoutid="${this.props.layoutId}"]`);return t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(e){const o=document.querySelector(`iframe[name="${t.APP_FRAME_NAME_IN_BUILDER}"]`);if(o){return(o.contentDocument||o.contentWindow.document).querySelector(e)}return null}getStyle(){return t.css`
      .rotation-setting, .rotation-setting input {
        height: 26px;
      }

      .ratio-value {
        font-size: 12px;
      }

      .align-select {
        .dropdown-button, .dropdown-button:hover {
          height: 26px;
        }
      }
    `}render(){var e,i,n,s;const{layoutId:l,layoutItem:r,isLockLayout:d,supportAutoSize:u}=this.props;if(!r)return null;const c=r.setting||{},p=c.style||{},h=r.bbox||{},g=(null===(e=c.autoProps)||void 0===e?void 0:e.width)!==a.LayoutItemSizeModes.Custom,m=null!==(n=null===(i=c.autoProps)||void 0===i?void 0:i.height)&&void 0!==n?n:a.LayoutItemSizeModes.Custom,y="ratio"===c.heightMode;return(0,t.jsx)("div",{className:"column-item-setting",css:this.getStyle()},!d&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)($e.SettingSection,{role:"group",title:this.formatMessage("size"),"aria-label":this.formatMessage("size")},(0,t.jsx)($e.SettingRow,{role:"group",label:this.formatMessage("width"),"aria-label":this.formatMessage("width")},(0,t.jsx)("div",{css:vs},(0,t.jsx)(Fa.SizeEditor,{label:"W",mode:g?a.LayoutItemSizeModes.Stretch:a.LayoutItemSizeModes.Custom,sizeModes:Is,value:null==h?void 0:h.width,availableUnits:ws,onChange:t=>{this.updateBBox("width",t)},onModeChange:this.updateWidthMode}))),(0,t.jsx)($e.SettingRow,{className:"mt-0",label:(0,t.jsx)(o.Tooltip,{title:this.formatMessage("keepAspectRatio"),placement:"bottom"},(0,t.jsx)(o.Button,{size:"sm",type:"tertiary",className:"ml-1",icon:!0,onClick:this.toggleHeightMode,"aria-pressed":y},y?(0,t.jsx)(Le,{size:"s"}):(0,t.jsx)(oa,{size:"s"})))}),(0,t.jsx)($e.SettingRow,{role:"group",className:"mt-0",label:this.formatMessage("height"),"aria-label":this.formatMessage("height")},(0,t.jsx)("div",{css:vs},(0,t.jsx)(Fa.SizeEditor,{label:"H",mode:m||a.LayoutItemSizeModes.Custom,sizeModes:u?xs:bs,value:h.height,availableUnits:Ss,onChange:t=>{this.updateBBox("height",t)},onModeChange:this.updateHeightMode,disabled:y}))),y&&(0,t.jsx)($e.SettingRow,{label:this.formatMessage("aspectRatio"),"aria-label":this.formatMessage("aspectRatio")},(0,t.jsx)(Fa.InputRatio,{value:c.aspectRatio,style:{width:100},onChange:this.updateAspectRatio})),!g&&(0,t.jsx)($e.SettingRow,{label:this.formatMessage("align")},(0,t.jsx)(o.Select,{"aria-label":this.formatMessage("align"),className:"align-select",value:null!==(s=p.alignSelf)&&void 0!==s?s:"flex-start",onChange:this.updateAlignSelf,css:vs},(0,t.jsx)("option",{value:"flex-start"},this.formatMessage("start")),(0,t.jsx)("option",{value:"flex-end"},this.formatMessage("end")),(0,t.jsx)("option",{value:"center"},this.formatMessage("center")))),(0,t.jsx)(_a,{layoutId:l,layoutItemId:r.id,setting:c,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))),(r.type===t.LayoutItemType.Widget||r.sectionId)&&(0,t.jsx)(Wa,{layoutId:l,layoutItemId:r.id,isSection:r.type===t.LayoutItemType.Section,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const Rs=t.css`width: 72px`,Ts=t.css`width: 100px;`,Ms=[a.LayoutItemSizeModes.Auto,a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom],As=[a.LayoutItemSizeModes.Stretch,a.LayoutItemSizeModes.Custom];class Ps extends t.React.PureComponent{constructor(){super(...arguments),this.handleAlignChange=t=>{this.updateStyle("alignSelf",t.target.value)},this.handleHeightChange=t=>{let e=this.props.layoutItem.bbox;const{distance:i,unit:n}=t,s=e.height,l=this.getSizeOfContainer();let r=i.toFixed(2);a.utils.isPercentage(s)&&n===o.DistanceUnits.PIXEL?null!=l&&(r=Math.round(parseFloat(s)*l.height/100)):a.utils.isPercentage(s)||n!==o.DistanceUnits.PERCENTAGE||null!=l&&(r=(100*parseFloat(s)/l.height).toFixed(4)),e=e.set("height",n===o.DistanceUnits.PERCENTAGE?`${r}%`:`${r}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.handleHeightModeChange=e=>{var o;const i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,t.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.setIn(["autoProps","height"],e))},this.updateAspectSetting=e=>{var o;let i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,t.Immutable)({});if("fit"===i.heightMode&&(i=i.setIn(["autoProps","height"],a.LayoutItemSizeModes.Stretch)),i=i.set("heightMode",e),"ratio"===e){const t=this.getSizeOfItem();null!=t&&(i=i.set("aspectRatio",Number((t.height/t.width).toFixed(2))))}else{const t=this.props.layoutItem.bbox,e=this.getSizeOfItem();if(a.utils.isPercentage(t.height)){const o=this.getSizeOfContainer();this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t.set("height",`${(100*e.height/o.height).toFixed(4)}%`))}else this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t.set("height",`${Math.round(e.height)}px`))}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.handleAspectRatioChange=e=>{var o;let i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,t.Immutable)({});i=i.set("aspectRatio",e),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.handleOffsetXChange=e=>{var o;const i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,t.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.set("offsetX",e))},this.handleOffsetYChange=e=>{var o;const i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,t.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.set("offsetY",e))},this.formatMessage=t=>this.props.formatMessage(t)}updateStyle(e,o){var i;const{layoutItem:n}=this.props,a=(0,t.Immutable)(null!==(i=null==n?void 0:n.setting)&&void 0!==i?i:{});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},a.setIn(["style",e],o))}getSizeOfContainer(){const t=this.querySelector(`div.row-layout[data-layoutid="${this.props.layoutId}"]`);return null!=t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"] > div.layout-item-content`);return null!=o?o.getBoundingClientRect():null}querySelector(e){var o;const i=document.querySelector(`iframe[name="${t.APP_FRAME_NAME_IN_BUILDER}"]`);if(null!=i){return(null!==(o=i.contentDocument)&&void 0!==o?o:i.contentWindow.document).querySelector(e)}return null}getStyle(){return t.css`
      .align-select {
        .dropdown-button,
        .dropdown-button:hover {
          height: 26px;
        }
      }
    `}render(){var e,i,n,s;const{layoutId:l,layoutItem:r,isLockLayout:d,supportAutoSize:u}=this.props;if(null==r)return null;const c=t.lodash.assign({},hn,r.setting),p=r.bbox,h=null!==(e=c.style)&&void 0!==e?e:{},g=null!==(n=null===(i=c.autoProps)||void 0===i?void 0:i.height)&&void 0!==n?n:a.LayoutItemSizeModes.Stretch,m="ratio"===c.heightMode;return(0,t.jsx)("div",{className:"row-item-setting",css:this.getStyle()},!d&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)($e.SettingSection,{role:"group",title:this.formatMessage("size"),"aria-label":this.formatMessage("size")},(0,t.jsx)($e.SettingRow,{role:"group",label:this.formatMessage("height"),"aria-label":this.formatMessage("height")},(0,t.jsx)("div",{css:Ts},(0,t.jsx)(Fa.SizeEditor,{label:"H",mode:g,sizeModes:u?Ms:As,value:o.utils.stringOfLinearUnit(p.height),onChange:this.handleHeightChange,onModeChange:this.handleHeightModeChange,disabled:m}))),(0,t.jsx)($e.SettingRow,null,(0,t.jsx)(o.Checkbox,{"aria-label":this.formatMessage("keepAspectRatio"),checked:m,onChange:t=>{this.updateAspectSetting(t.target.checked?"ratio":"fixed")},className:"mr-2"}),this.formatMessage("keepAspectRatio")),m&&(0,t.jsx)($e.SettingRow,{label:this.formatMessage("aspectRatio"),"aria-label":this.formatMessage("aspectRatio")},(0,t.jsx)(Fa.InputRatio,{value:c.aspectRatio,style:{width:100},onChange:this.handleAspectRatioChange})),g!==a.LayoutItemSizeModes.Stretch&&(0,t.jsx)($e.SettingRow,{label:this.formatMessage("align")},(0,t.jsx)(o.Select,{"aria-label":this.formatMessage("align"),className:"align-select",css:Ts,value:null!==(s=h.alignSelf)&&void 0!==s?s:"flex-start",onChange:this.handleAlignChange},(0,t.jsx)("option",{value:"flex-start"},this.formatMessage("T")),(0,t.jsx)("option",{value:"flex-end"},this.formatMessage("B")),(0,t.jsx)("option",{value:"center"},this.formatMessage("center"))))),(0,t.jsx)($e.SettingSection,{role:"group",title:this.formatMessage("position"),"aria-label":this.formatMessage("position")},(0,t.jsx)(_a,{layoutId:l,layoutItemId:r.id,setting:r.setting,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}),(0,t.jsx)($e.SettingRow,{label:this.formatMessage("offsetX"),"aria-label":this.formatMessage("offsetX")},(0,t.jsx)(o.NumericInput,{css:Rs,value:c.offsetX,onChange:this.handleOffsetXChange,precision:0,size:"sm"})),(0,t.jsx)($e.SettingRow,{label:this.formatMessage("offsetY"),"aria-label":this.formatMessage("offsetY")},(0,t.jsx)(o.NumericInput,{css:Rs,value:c.offsetY,onChange:this.handleOffsetYChange,precision:0,size:"sm"})))),(r.type===t.LayoutItemType.Widget||null!=r.sectionId)&&(0,t.jsx)(Wa,{layoutId:l,layoutItemId:r.id,isSection:r.type===t.LayoutItemType.Section,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}var Ls=p(5508),js=p.n(Ls),zs=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Ns=e=>{const o=window.SVG,{className:i}=e,n=zs(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:a,src:js()},n)):t.React.createElement("svg",Object.assign({className:a},n))};function ks(i){var n,a;const{layoutItem:s,layoutId:l}=i,r=t.hooks.useTranslation(o.defaultMessages),[d,u]=t.React.useState(null!==(n=s.label)&&void 0!==n?n:""),c=t.ReactRedux.useSelector((e=>{const o=e.appStateInBuilder.appConfig.layouts[l];if(s.parent){return o.content[s.parent].gridType===t.GridItemType.Tab}return!1})),p=t.ReactRedux.useSelector((e=>{const o=e.appStateInBuilder.appConfig.layouts[l].content[s.id];return!c||o.gridType!==t.GridItemType.Row&&o.gridType!==t.GridItemType.Column?"":o.label}));t.React.useEffect((()=>{u(p)}),[p]);const h=t.React.useCallback((t=>{(0,e.getAppConfigAction)().editLayoutItemProperty({layoutId:l,layoutItemId:s.id},"label",""!==t?t:void 0).exec()}),[l,s.id]),g=t.React.useCallback((t=>{(0,e.getAppConfigAction)().editLayoutItemProperty({layoutId:l,layoutItemId:s.id},"expandable",t).exec()}),[l,s.id]),m=t.React.useCallback((t=>{u(t.target.value)}),[]);if(!s)return null;const y=s;return!c||y.gridType!==t.GridItemType.Row&&y.gridType!==t.GridItemType.Column?y.gridType===t.GridItemType.Plain?(0,t.jsx)("div",{className:"grid-item-setting h-100"},(0,t.jsx)($e.SettingSection,{title:r("gridItem")},(0,t.jsx)($e.SettingRow,null,(0,t.jsx)(o.Label,{centric:!0},(0,t.jsx)(o.Checkbox,{"aria-label":r("allowExpansion"),checked:null===(a=s.expandable)||void 0===a||a,onChange:(t,e)=>{g(t.target.checked)}}),(0,t.jsx)("span",{className:"ml-2 text-truncate"},r("allowExpansion"))))),(0,t.jsx)(Wa,{layoutId:l,layoutItemId:s.id,style:i.style,isSection:s.type===t.LayoutItemType.Section,onStyleChange:i.onStyleChange,formatMessage:i.formatMessage,setting:s.setting||(0,t.Immutable)({}),onSettingChange:i.onSettingChange})):(0,t.jsx)("div",{className:"grid-item-setting h-100"},(0,t.jsx)("div",{className:"h-100 align-items-center justify-content-center d-flex flex-column",css:t.css`color: var(--ref-palette-neutral-1000)`},(0,t.jsx)("div",null,(0,t.jsx)(Ns,{size:48})),(0,t.jsx)("div",{className:"mt-4"},r("noConfigNeeded")))):(0,t.jsx)("div",{className:"grid-item-setting h-100"},(0,t.jsx)($e.SettingSection,null,(0,t.jsx)($e.SettingRow,{label:r("label"),flow:"wrap"},(0,t.jsx)(o.TextInput,{size:"sm",value:d,onChange:m,onAcceptValue:h,className:"w-100"}))))}const $s={width:110};class Os extends t.React.PureComponent{constructor(){super(...arguments),this.updateSpace=t=>{const{layoutId:o}=this.props;if(!isNaN(t.distance)){(0,e.getAppConfigAction)().editLayoutProperty(o,"setting.gutter",t.distance).exec()}},this.updatePadding=t=>{const{layoutId:o}=this.props;(0,e.getAppConfigAction)().editLayoutProperty(o,"setting.style.padding",t).exec()}}render(){const{formatMessage:e}=this.props,o=this.props.setting||{},i=o.style||{},n=o.gutter>=0?o.gutter:os.gutter;return(0,t.jsx)($e.SettingSection,{role:"group",className:"flow-layout-setting",title:e("layout"),"aria-label":e("layout")},(0,t.jsx)($e.SettingRow,{label:e("gap")},(0,t.jsx)(Fa.InputUnit,{style:$s,"aria-label":e("gap"),min:0,value:{distance:n,unit:void 0},onChange:this.updateSpace})),(0,t.jsx)($e.SettingRow,{flow:"wrap",role:"group",label:e("padding"),"aria-label":e("padding")},(0,t.jsx)(Fa.Padding,{value:i.padding,onChange:this.updatePadding})))}}const Es=(0,t.createSelector)(((t,e)=>{var o,i,n,a;return null===(a=null===(n=null===(i=null===(o=t.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===i?void 0:i.layouts)||void 0===n?void 0:n[e.layoutId])||void 0===a?void 0:a.setting}),(t=>({setting:t}))),Bs=t.ReactRedux.connect(Es)(Os);var Ds=p(4337);const Fs=[o.DistanceUnits.PIXEL];class Vs extends t.React.PureComponent{constructor(){super(...arguments),this.handlePaddingChange=t=>{const o=(0,e.getAppConfigAction)();this.getLayoutIds().forEach((e=>{o.editLayoutProperty(e,"setting.style.padding",t)})),o.exec()},this.handleSettingChange=(t,o)=>{const i=(0,e.getAppConfigAction)();this.getLayoutIds().forEach((e=>{i.editLayoutProperty(e,`setting.${t}`,o)})),i.exec()},this.toggleExpandable=()=>{var o;const{layoutId:i,allItemsExpandable:n}=this.props,a=(0,e.getAppConfigAction)(),s=a.appConfig.layouts[i];Object.keys(null!==(o=s.content)&&void 0!==o?o:{}).forEach((e=>{s.content[e].gridType===t.GridItemType.Plain&&a.editLayoutItemProperty({layoutId:i,layoutItemId:e},"expandable",!n)})),a.exec()}}getLayoutIds(){const t=[],{layouts:e}=this.props;return null!=e&&Object.keys(e).forEach((o=>{t.push(e[o])})),t}render(){var e,i,n,a;const{layoutSetting:s,allItemsExpandable:l,allItemsNotExpandable:r,formatMessage:d,appTheme:u}=this.props;return(0,t.jsx)("div",{className:"flexbox-layout-setting"},(0,t.jsx)($e.SettingSection,{role:"group",title:d("layout"),"aria-label":d("layout")},(0,t.jsx)($e.SettingRow,{label:d("padding"),role:"group","aria-label":d("padding"),flow:"wrap"},(0,t.jsx)(Fa.Padding,{value:null===(e=s.style)||void 0===e?void 0:e.padding,onChange:this.handlePaddingChange})),(0,t.jsx)($e.SettingRow,{label:d("paddingColor")},(0,t.jsx)(Ds.ThemeColorPicker,{"aria-label":d("paddingColor"),specificTheme:u,value:s.paddingColor,onChange:t=>{this.handleSettingChange("paddingColor",t)}})),(0,t.jsx)($e.SettingRow,{label:d("gap"),truncateLabel:!0},(0,t.jsx)(Ds.ThemeColorPicker,{"aria-label":d("gap"),specificTheme:u,value:null!==(i=s.splitColor)&&void 0!==i?i:"var(--light-500)",onChange:t=>{this.handleSettingChange("splitColor",t)}}),(0,t.jsx)(Fa.InputUnit,{css:t.css`width: 74px !important;`,className:"ml-2",units:Fs,min:1,max:100,precision:0,value:{distance:null!==(n=s.splitSize)&&void 0!==n?n:8,unit:o.DistanceUnits.PIXEL},onChange:t=>{this.handleSettingChange("splitSize",t.distance)}}))),(0,t.jsx)($e.SettingSection,{role:"group",title:d("gridItems"),"aria-label":d("gridItems")},(0,t.jsx)($e.SettingRow,null,(0,t.jsx)(o.Label,{centric:!0},(0,t.jsx)(o.Checkbox,{"aria-label":d("allowResize"),checked:null===(a=s.resizable)||void 0===a||a,onChange:(t,e)=>{this.handleSettingChange("resizable",e)}}),(0,t.jsx)("span",{className:"ml-2"},d("allowResize")))),(0,t.jsx)($e.SettingRow,null,(0,t.jsx)("div",{className:"d-flex w-100 align-items-center"},(0,t.jsx)(o.Label,{css:t.css`width: 80%;`,className:"justify-content-start"},(0,t.jsx)(o.Checkbox,{"aria-label":d("allowExpansion"),checked:l,indeterminate:!l&&!r,onClick:this.toggleExpandable}),(0,t.jsx)("span",{className:"ml-2 text-truncate"},d("allowExpansion"))),(0,t.jsx)(o.Tooltip,{title:d("gridSettingOverrideTip"),placement:"bottom"},(0,t.jsx)(o.Button,{className:"ml-auto",type:"tertiary",icon:!0},(0,t.jsx)(Ns,null)))))))}}const Hs=(0,t.createSelector)(((t,e)=>{const o=t.appStateInBuilder;return o?e.layouts[o.browserSizeMode]||e.layouts[o.appConfig.mainSizeMode]:null}),((t,e)=>{var o,i;const n=t.appStateInBuilder;if(!n)return{};const a=e.layouts[n.browserSizeMode]||e.layouts[n.appConfig.mainSizeMode],{layouts:s}=n.appConfig;return null!==(i=null===(o=s[a])||void 0===o?void 0:o.setting)&&void 0!==i?i:{}}),((e,o)=>{var i;const n=e.appStateInBuilder;if(!n)return!1;const a=o.layouts[n.browserSizeMode]||o.layouts[n.appConfig.mainSizeMode],{layouts:s}=n.appConfig,l=s[a],r=Object.keys(null!==(i=l.content)&&void 0!==i?i:{});return!(r.length>0)||r.every((e=>{var o;const i=l.content[e];return i.gridType!==t.GridItemType.Plain||(null===(o=i.expandable)||void 0===o||o)}))}),((e,o)=>{var i;const n=e.appStateInBuilder;if(!n)return!1;const a=o.layouts[n.browserSizeMode]||o.layouts[n.appConfig.mainSizeMode],{layouts:s}=n.appConfig,l=s[a],r=Object.keys(null!==(i=l.content)&&void 0!==i?i:{});return!(r.length>0)||r.every((e=>{const o=l.content[e];return o.gridType!==t.GridItemType.Plain||null!=o.expandable&&!o.expandable}))}),((t,e,o,i)=>({layoutId:t,layoutSetting:e,allItemsExpandable:o,allItemsNotExpandable:i}))),Gs=t.ReactRedux.connect(Hs)(Vs);class Ws{constructor(){this.id="flow-layout-transformer",this.layoutType=t.LayoutType.FlowLayout}transformLayout(e,o,i){if(o!==i&&i===t.BrowserSizeMode.Small){let o=(0,t.Immutable)(e);return(e.order||[]).forEach((t=>{o=o.setIn(["content",t,"setting","heightMode"],"auto")})),o}return e}transformLayoutItem(t,e,o,i,n,a){return{index:e,item:t}}}function _s(e,o,i){var n;const a=function(e,o){var i;const n=e.layouts[o];return(null===(i=null==n?void 0:n.parent)||void 0===i?void 0:i.type)===t.LayoutParentType.Widget?n.parent.id:null}(e,i),s=function(t,e,o){var i,n,a,s,l,r,d;const u=t.widgets[o];if(null!=u){const p=$(),h=t.mainSizeMode,g=u.layouts.DEFAULT[p],m=u.layouts.DEFAULT[h],y=(c=null!==(l=null===(s=null===(a=null===(n=(null!==(i=t.layouts[g])&&void 0!==i?i:t.layouts[m]).setting)||void 0===n?void 0:n.style)||void 0===a?void 0:a.padding)||void 0===s?void 0:s.number)&&void 0!==l?l:[0])&&0!==c.length?1===c.length?[c[0],c[0],c[0],c[0]]:2===c.length?[c[0],c[1],c[0],c[1]]:3===c.length?[c[0],c[1],c[2],0]:[c[0],c[1],c[2],c[3]]:[0,0,0,0],f=null!==(d=null===(r=null==e?void 0:e[o])||void 0===r?void 0:r.height)&&void 0!==d?d:0;let v=y[0],I=y[2];return j(v)&&(v=N(v,f)),j(I)&&(I=N(I,f)),f-v-I}var c;return 0}(e,o,a);if(s>0){const t=null!==(n=e.layouts[i].order)&&void 0!==n?n:[],o={};return t.forEach((t=>{const n=e.layouts[i].content[t];o[t]=function(t,e){var o,i,n,a;const s=null!==(o=e.setting)&&void 0!==o?o:{},l=O("height",e.bbox,s.autoProps);let r;if("ratio"===s.heightMode)r={setting:{heightMode:"ratio",aspectRatio:null!==(i=s.aspectRatio)&&void 0!==i?i:1,autoProps:{height:C.Custom}}};else{if(l!==C.Custom)return{height:l===C.Stretch?t:null,setting:{autoProps:{height:l}}};{let o=null!==(a=null===(n=e.bbox)||void 0===n?void 0:n.height)&&void 0!==a?a:t;o=j(o)?N(o,t):parseInt(o),r={height:o,setting:{heightMode:"fixed",autoProps:{height:C.Custom}}}}}return r}(s,n)})),o}return null}class Us{constructor(){this.id="row-layout-transformer",this.layoutType=t.LayoutType.RowLayout}transformLayout(e,o,i,n){var a,s;if(o===i)return e;let l=(0,t.Immutable)(e);if(i===t.BrowserSizeMode.Small){const o=_s(n,null===(a=window.runtimeInfo)||void 0===a?void 0:a.widgets,e.id);let i=0;Object.keys(null!==(s=e.content)&&void 0!==s?s:{}).sort(((t,o)=>parseInt(e.content[t].bbox.left,10)-parseInt(e.content[o].bbox.left,10))).forEach((n=>{var a,s,r;const d=e.content[n];if(!d.isPending){if(l=l.setIn(["content",n,"bbox"],{left:i*mn,width:mn,height:null!==(s=null===(a=d.bbox)||void 0===a?void 0:a.height)&&void 0!==s?s:"auto"}),null!=o){const e=null!==(r=d.setting)&&void 0!==r?r:(0,t.Immutable)({});l=l.setIn(["content",n,"bbox","height"],o[n].height).setIn(["content",n,"setting"],e.merge(o[n].setting))}i+=1}}))}return l}transformLayoutItem(t,e,o,i,n,a){return{item:t,index:e}}}class Ys{constructor(){this.id="grid-layout-transformer",this.layoutType=t.LayoutType.GridLayout,this.transformLayout=(e,o,i)=>{var n,a;if(o!==i&&i===t.BrowserSizeMode.Small){let o=(0,t.Immutable)(e);const i=null===(n=e.setting)||void 0===n?void 0:n.rootItem;if(i&&(null===(a=e.content)||void 0===a?void 0:a[i])){const n=[],a=e.content[i];o=this.collectItem(e,i,a.children,n),n.length>0&&(o=o.setIn(["content",i,"gridType"],t.GridItemType.Tab),o=o.setIn(["content",i,"children"],n))}return o}return e},this.collectItem=(e,o,i,n)=>{let a=e;return null==i||i.forEach((i=>{var s;if(!e.content[i].isPending){const l=e.content[i];l.gridType!==t.GridItemType.Column&&l.gridType!==t.GridItemType.Row&&l.gridType!==t.GridItemType.Tab?(n.push(i),a=a.setIn(["content",i,"parent"],o)):(null===(s=l.children)||void 0===s?void 0:s.length)>0&&(a=this.collectItem(a,o,l.children,n))}})),a}}transformLayoutItem(t,e,o,i,n,a){return{index:e,item:t}}}const Zs=10;var Xs=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};function qs(e){const{isFirst:o,isLast:i,menuItems:n}=e,a=Xs(e,["isFirst","isLast","menuItems"]),[s,l]=t.React.useState(n),r=t.ReactRedux.useSelector((t=>{var e,o,i;return null!==(i=null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i}));return t.React.useEffect((()=>{const t=n.filter((t=>{var o;return"function"==typeof t.visible?t.visible({layoutId:e.layoutId,layoutItem:e.layoutItem,clientRect:null}):null===(o=t.visible)||void 0===o||o}));l(t)}),[o,i,n,e.layoutId,e.layoutItem,r]),t.React.createElement(Et,Object.assign({menuItems:s},a))}var Js=function(t,e,o,i){return new(o||(o=Promise))((function(n,a){function s(t){try{r(i.next(t))}catch(t){a(t)}}function l(t){try{r(i.throw(t))}catch(t){a(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,l)}r((i=i.apply(t,e||[])).next())}))};function Qs(o,i,n){return Js(this,void 0,void 0,(function*(){const s=yield e.widgetService.createFromTemplate((0,e.getAppConfigAction)().appConfig,n,null,[a.utils.getCurrentSizeMode()],{},{isBlock:!0}),l=s[0],r=s[1],d=(0,e.getAppConfigAction)(l),u=d.addTemplateContentToLayout(o,t.LayoutItemType.Widget,r),c=(d.appConfig.layouts[o].order||[]).indexOf(i);return d.adjustOrderOfItem(u,c>=0?c+1:NaN),(0,t.getAppStore)().dispatch(t.appActions.layoutChanged(d.appConfig,Object.assign(Object.assign({},u),{autoScroll:!0}))),u}))}function Ks(o,i,n){return Js(this,void 0,void 0,(function*(){const s=yield e.screenGroupService.createFromTemplate((0,e.getAppConfigAction)().appConfig,n,null,[a.utils.getCurrentSizeMode()],{}),l=s[0],r=s[1],d=(0,e.getAppConfigAction)(l),u=d.addTemplateContentToLayout(o,t.LayoutItemType.ScreenGroup,r),c=(d.appConfig.layouts[o].order||[]).indexOf(i);return d.adjustOrderOfItem(u,c>=0?c+1:NaN),(0,t.getAppStore)().dispatch(t.appActions.layoutChanged(d.appConfig,Object.assign(Object.assign({},u),{autoScroll:!0}))),u}))}function tl(t,o){var i;const{layoutId:n,layoutItemId:a}=o,s=(0,e.getAppConfigAction)(t),l=s.appConfig.layouts[n],r=l.order,d=[].concat(r),u=r.indexOf(a);let c=r.length-1;for(let t=u+1;t<r.length;t++){const e=r[t];if(!(null===(i=l.content[e].setting)||void 0===i?void 0:i.isFloating)){c=t;break}}return d.splice(c+1,0,a),d.splice(u,1),s.editLayoutProperty(n,"order",d),s.appConfig}function el(t,o){var i;const{layoutId:n,layoutItemId:a}=o,s=(0,e.getAppConfigAction)(t),l=s.appConfig.layouts[n],r=l.order,d=[].concat(r),u=r.indexOf(a);let c=0;for(let t=u-1;t>=0;t--){const e=r[t];if(!(null===(i=l.content[e].setting)||void 0===i?void 0:i.isFloating)){c=t;break}}return d.splice(u,1),d.splice(c,0,a),s.editLayoutProperty(n,"order",d),s.appConfig}var ol=p(5549),il=p.n(ol),nl=p(7528),al=p.n(nl),sl=p(4064),ll=p.n(sl);class rl extends t.React.PureComponent{constructor(o){super(o),this.state={isResizing:!1,dh:0,showBlockTemplatePopup:!1,showScreenTemplatePopup:!1,referenceElem:null},this.onResizeStart=(t,e,o)=>{const{padding:i}=this.props;this.minHeight=16+i,this.initHeight=o,this.setState({dh:0,isResizing:!0})},this.onResizing=(t,e,o,i,n)=>{let a=n;n<0&&this.initHeight+n<this.minHeight&&(a=this.minHeight-this.initHeight),this.setState({dh:a,isResizing:!0})},this.onResizeEnd=(o,i,n,a,s,l)=>{const{layoutId:r,layoutItem:d}=this.props;let u=s;s<0&&this.initHeight+s<this.minHeight&&(u=this.minHeight-this.initHeight);const c=(0,t.Immutable)(d.bbox||{}).set("height",Math.round(this.initHeight+u));(0,e.getAppConfigAction)().editLayoutItemProperty({layoutId:r,layoutItemId:d.id},"bbox",c).exec(),this.setState({isResizing:!1,dh:0})},this.toggleBlockTemplatePopup=()=>{(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small?this.setState({showBlockTemplatePopup:!this.state.showBlockTemplatePopup}):e.appBuilderSync.publishSidePanelToApp({type:"templateBlock",templateMethod:"getBlockTemplates",onSelect:this.onTemplateBlockSelected})},this.toggleScreenTemplatePopup=()=>{(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small?this.setState({showScreenTemplatePopup:!this.state.showScreenTemplatePopup}):e.appBuilderSync.publishSidePanelToApp({type:"template",templateMethod:"getScreenGroupTemplates",onSelect:this.onTemplateScreenGroupSelected})},this.removeLayoutItem=()=>{const{layoutId:t,layoutItemId:o}=this.props;(0,e.getAppConfigAction)().removeLayoutItem({layoutId:t,layoutItemId:o},!0).exec()},this.moveLayoutItemUp=()=>{const{layoutId:t,layoutItemId:o}=this.props,i=el((0,e.getAppConfigAction)().appConfig,{layoutId:t,layoutItemId:o});(0,e.getAppConfigAction)(i).exec()},this.moveLayoutItemDown=()=>{const{layoutId:t,layoutItemId:o}=this.props,i=tl((0,e.getAppConfigAction)().appConfig,{layoutId:t,layoutItemId:o});(0,e.getAppConfigAction)(i).exec()},this.switchSetting=()=>{const{layoutId:e,layoutItemId:o,selected:i}=this.props;i||(0,t.getAppStore)().dispatch(t.appActions.selectionChanged({layoutId:e,layoutItemId:o}))},this.onTemplateBlockSelected=t=>{Qs(this.props.layoutId,this.props.layoutItemId,t),this.setState({showBlockTemplatePopup:!1})},this.onTemplateScreenGroupSelected=t=>{Ks(this.props.layoutId,this.props.layoutItemId,t),this.setState({showScreenTemplatePopup:!1})},this.fakeTopLayouts=(0,t.Immutable)({[t.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[t.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[t.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.fakeBottomLayouts=(0,t.Immutable)({[t.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_blarge`,[t.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_bmedium`,[t.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_bsmall`}),this.minHeight=0,this.contextMenus=[{icon:il(),title:this.props.formatMessage("insertABlock"),onClick:this.toggleBlockTemplatePopup,visible:()=>!st()},{icon:al(),title:this.props.formatMessage("insertAScreenGroup"),onClick:this.toggleScreenTemplatePopup,visible:()=>!st()&&(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small},mt,{icon:nt(),title:this.props.formatMessage("setting"),onClick:this.switchSetting},{icon:q(),title:this.props.formatMessage("dragToMove",{label:lt(this.props.layoutItem)}),className:"tool-drag-handler",onClick:()=>{},visible:()=>!st()},{icon:ll(),onClick:this.moveLayoutItemUp,title:this.props.formatMessage("moveup"),visible:()=>!this.props.isFirst&&!st()},{icon:ll(),rotate:180,onClick:this.moveLayoutItemDown,title:this.props.formatMessage("movedown"),visible:()=>!this.props.isLast&&!st()},{icon:U(),title:this.props.formatMessage("delete"),onClick:this.removeLayoutItem,visible:()=>!st()}]}calHeight(t){if(this.state.isResizing)return`${this.initHeight+this.state.dh}px`;const e=function(t,e){const o=z(t.bbox||{},"height");if(!o||j(o))return"auto";switch(e.heightMode){case"auto":return"auto";case"fixed":return o}}(this.props.layoutItem,t);return this.autoHeight="auto"===e,e}createContextMenu(){const{builderTheme:e}=this.pageContext,{layoutId:o,layoutItem:i,isFirst:n,isLast:a}=this.props;return(0,t.jsx)(qs,{layoutId:o,layoutItem:i,builderTheme:e,positionType:"center",size:28,iconSize:16,className:"widget-context-menu",menuItems:this.contextMenus,isFirst:n,isLast:a},(0,t.jsx)("div",{ref:t=>{this.reference=t},css:t.css`position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;`}),this.state.showBlockTemplatePopup&&(0,t.jsx)($e.TemplateSelector,{templates:(0,Gi.getBlockTemplates)(),referenceElement:this.reference,onItemSelect:this.onTemplateBlockSelected,onClose:this.toggleBlockTemplatePopup}),this.state.showScreenTemplatePopup&&(0,t.jsx)($e.TemplateSelector,{templates:(0,Gi.getScreenGroupTemplates)(),referenceElement:this.reference,onItemSelect:this.onTemplateScreenGroupSelected,onClose:this.toggleScreenTemplatePopup}))}getStyle(e){const{builderTheme:o}=this.pageContext,{index:i,gutter:n}=this.props,s=a.utils.isRTL()?-1:1;return[t.css`
        margin-top: ${i>0?`${n}px`:"unset"};
        width: ${as(e)};
        height: ${this.calHeight(e)};
        flex-shrink: 0;
        position: relative;
        cursor: default;
        & > div.widget-context-menu {
          display: none;
        }

        &:hover > div.widget-context-menu {
          display: flex;
        }

        .template-popup {
          background-color: ${o.ref.palette.black};
        }

        .tool-drag-handler {
          cursor: move;
        }
      `,e.offsetX||e.offsetY?`translate(${(e.offsetX||0)*s}px, ${e.offsetY||0}px)`:null]}render(){const{layoutId:e,layoutItem:o,draggable:i,selectable:n,isEmpty:s,selected:l}=this.props;if(!o||s)return null;const r=t.lodash.assign({},is,o.setting),d=(0,t.classNames)("flow-layout-item d-flex",{selected:l}),u=a.utils.handleOnebyOneAnimation(this.props);return(0,t.jsx)(a.PageContext.Consumer,null,(a=>{this.pageContext=a;const[s,l]=this.getStyle(r);return(0,t.jsx)(Po,Object.assign({id:`${e}_block_${o.id}`,css:s,style:{transform:l},layoutId:e,layoutItemId:o.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,left:!1,right:!1,top:!1,bottom:"fixed"===r.heightMode,restrict:!0,useDragHandler:!0,draggable:i,selectable:n,forbidContextMenu:!0,forbidToolbar:!0,isBlock:!0,className:d,autoHeight:this.autoHeight},u),!a.viewOnly&&this.createContextMenu())}))}}const dl=t.ReactRedux.connect(ns)(rl);class ul extends t.React.PureComponent{constructor(){super(...arguments),this.state={isResizing:!1,dx:0,dy:0,dw:0,dh:0},this.onResizeStart=(t,e,o)=>{this.setState({isResizing:!0}),this.initHeight=o,this.initWidth=e},this.onResizing=(t,e,o,i,n)=>{this.setState({dx:e,dy:o,dw:i,dh:n})},this.onResizeEnd=(t,o,i,n,a,s)=>{const{layoutId:l,layoutItem:r}=this.props;let d=r.bbox;d=d.set("height",Math.round(parseInt(d.height,10)+a)).set("width",Math.round(parseInt(d.width,10)+n)).set("left",Math.round(parseInt(d.left,10)+o)).set("top",Math.round(parseInt(d.top,10)+i)).set("bottom",Math.round(parseInt(d.top,10)-a+i));(0,e.getAppConfigAction)().editLayoutItemProperty({layoutId:l,layoutItemId:r.id},"bbox",d).exec(),this.setState({isResizing:!1,dx:0,dy:0,dw:0,dh:0})}}calculatePosition(){const{layoutItem:e}=this.props,{dh:o,dw:i,isResizing:n}=this.state;return function(e,o={}){var i,n,a;const s=e.setting,l=null!==(i=null==s?void 0:s.floatingArea)&&void 0!==i?i:1,r=`${null!==(n=null==s?void 0:s.offsetX)&&void 0!==n?n:0}px`,d=`${null!==(a=null==s?void 0:s.offsetY)&&void 0!==a?a:0}px`,{dh:u,dw:c,initWidth:p,initHeight:h,isResizing:g}=o,m=k()?`translateX(calc(50% + ${r}))`:`translateX(calc(-50% + ${r}))`,y={};switch(l){case 1:y.left=r,y.top=d,y.transform=null;break;case 2:y.left="50%",y.top=d,y.transform=m;break;case 3:y.right=r,y.top=d,y.transform=null;break;case 4:y.left=r,y.top="50%",y.transform=`translateY(calc(-50% + ${d}))`;break;case 5:y.left="50%",y.top="50%",y.transform=`${m} translateY(calc(-50% + ${d}))`;break;case 6:y.right=r,y.top="50%",y.transform=`translateY(calc(-50% + ${d}))`;break;case 7:y.left=r,y.bottom=d,y.transform=null;break;case 8:y.left="50%",y.bottom=d,y.transform=m;break;case 9:y.right=r,y.bottom=d,y.transform=null}return t.css`
    position: fixed;
    z-index: 1;
    width: ${g?`${p+c}px`:z(e.bbox,"width")};
    height: ${g?`${h+u}px`:z(e.bbox,"height")};
    left: ${y.left};
    right: ${y.right};
    top: ${y.top};
    bottom: ${y.bottom};
    transform: ${y.transform};
  `}(e,{dh:o,dw:i,isResizing:n,initWidth:this.initWidth,initHeight:this.initHeight})}render(){const{layoutId:e,layoutItem:o,selectable:i,selected:n}=this.props;if(!o)return null;const s=(0,t.classNames)("flexbox-layout-item floating d-flex",{selected:n});return(0,t.jsx)(a.PageContext.Consumer,null,(n=>(this.pageContext=n,(0,t.jsx)(Po,{css:this.calculatePosition(),layoutId:e,layoutItemId:o.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,restrict:!0,draggable:!1,selectable:i,className:s}))))}}const cl=t.ReactRedux.connect(a.utils.mapStateToLayoutItemProps)(ul);function pl(i){const{formatMessage:n,activeScreenIndex:a,total:s,layoutId:l,layoutItemId:r,screenGroupId:d,browserSizeMode:c,hasPanel:p}=i,h=!t.ReactRedux.useSelector((e=>{var o,i,n;const a=null!==(i=null===(o=e.appConfig.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i;return(null===(n=e.appRuntimeInfo)||void 0===n?void 0:n.appMode)===t.AppMode.Design&&!a}))||c!==t.BrowserSizeMode.Large,[m,y]=t.React.useState(!1),f=t.React.useRef(),v=t.React.useCallback((()=>{y(!1)}),[]),I=t.React.useCallback((()=>{const e=(0,u.getTheme2)();return t.css`
      border: none;

      .tooltip {
        color: ${e.ref.palette.black};
        background-color: ${e.ref.palette.neutral[600]};
        border-color: ${e.ref.palette.neutral[400]};
      }
    `}),[]),x=t.React.useCallback((o=>{const i=(0,e.getAppConfigAction)(),n=i.appConfig.layouts[l].content[r].screenGroupId;i.createScreenFromTemplate(null,o).then((e=>{let o=i.appConfig;o=o.setIn(["screenGroups",n,"screens"],[].concat(o.screenGroups[n].screens,e)).setIn(["screens",e,"parent"],n),(0,t.getAppStore)().dispatch(t.appActions.appConfigChanged(o)),(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(n,o.screenGroups[n].screens.length-1))})),v()}),[v,l,r]),b=t.React.useCallback((()=>{if(p)y(!m);else{const t=(0,Gi.getScreenTemplates)().find((t=>"nopanel"===t.name));t&&x(t)}}),[m,p,x]),w=t.React.useCallback((()=>{(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(d,a-1))}),[d,a]),S=t.React.useCallback((()=>{(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(d,a+1))}),[d,a]),C=t.React.useCallback((()=>{(0,e.getAppConfigAction)().removeScreenByIndex(a,d).exec(),a===s-1&&(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(d,a-1))}),[a,s,d]),R=t.React.useCallback((()=>{const o=(0,e.getAppConfigAction)();o.duplicateScreenByIndex(a,d),o.exec(),(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(d,a+1))}),[a,d]);return(0,t.jsx)("div",{className:"menu-bar d-flex justify-content-between align-items-center"},(0,t.jsx)("div",{className:"d-flex justify-content-start align-items-center"},(0,t.jsx)("div",{className:"info ml-2"},n("screen"),": ",a+1," / ",s),(0,t.jsx)(g,{title:0===a?"":n("previous"),placement:"bottom",css:I()},(0,t.jsx)(o.Button,{icon:!0,className:"rounded-circle",disabled:0===a,type:"tertiary",onClick:w},(0,t.jsx)(o.Icon,{icon:ll(),size:16}))),(0,t.jsx)(g,{title:a===s-1?"":n("next"),placement:"bottom",css:I()},(0,t.jsx)(o.Button,{icon:!0,className:"rounded-circle",disabled:a===s-1,type:"tertiary",onClick:S},(0,t.jsx)(o.Icon,{icon:ll(),rotate:180,size:16}))),!h&&(0,t.jsx)("div",{ref:f},(0,t.jsx)(g,{title:n("newScreen"),placement:"bottom",css:I()},(0,t.jsx)(o.Button,{icon:!0,onClick:b,className:"rounded-circle",type:"tertiary","data-testid":"addBtn"},(0,t.jsx)(o.Icon,{icon:pe(),size:16})))),!h&&m&&(0,t.jsx)($e.TemplateSelector,{templates:(0,Gi.getScreenTemplates)(),referenceElement:f.current,onItemSelect:x,onClose:v}),!h&&(0,t.jsx)(g,{title:n("duplicateScreen"),placement:"bottom",css:I()},(0,t.jsx)(o.Button,{icon:!0,className:"rounded-circle",type:"tertiary",onClick:R,"data-testid":"duplicateBtn"},(0,t.jsx)(o.Icon,{icon:ge(),size:16}))),!h&&s>1&&(0,t.jsx)(g,{title:n("deleteScreen"),placement:"bottom",css:I()},(0,t.jsx)(o.Button,{icon:!0,className:"rounded-circle",type:"tertiary",onClick:C,"data-testid":"removeBtn"},(0,t.jsx)(o.Icon,{icon:U(),size:16})))))}const hl=2;function gl(){const t=[0];for(let e=1;e<=100;e++)t.push(e/100);return t}function ml(e){switch(e){case t.ScreenTriggerType.Top:return`0% 0% -${100-hl}% 0%`;case t.ScreenTriggerType.Bottom:return`-${100-hl}% 0% -2px 0%`;case t.ScreenTriggerType.Upper:return`-${100/3-hl/2}% 0% -${200/3-hl/2}% 0%`;case t.ScreenTriggerType.Lower:return`-${200/3-hl/2}% 0% -${100/3-hl/2}% 0%`;default:return}}function yl(e,o,i,n){const a=t.React.useRef(),s=t.React.useRef();t.React.useEffect((()=>{a.current&&(a.current.unobserve(e),a.current=null);if(e&&"function"==typeof IntersectionObserver){const t=new IntersectionObserver((t=>{(t=>{const e=t.boundingClientRect,o=t.rootBounds,i=Math.abs(e.bottom-o.top)>=Math.abs(e.top-o.top);if(t.isIntersecting){if(s.current=!0,i)n(!0)}else if(s.current&&(s.current=!1,i))n(!1)})(t[0])}),{threshold:gl(),root:o||document,rootMargin:ml(i)});return t.observe(e),a.current=t,()=>{a.current.unobserve(e),a.current=null}}}),[e,o,n,i])}const fl=.33,vl=.25;function Il(e,i,n,a,s,l,r,d,u){const{side:c,size:p,offset:h,background:g,overlay:m=!0,padding:y}=e.panel||{},f=(0,t.getAppStore)().getState().appContext.isRTL?"left"===c?"-":"":"right"===c?"-":"",v=o.styleUtils.toBackgroundEmotionStyle(null!=g?g:{}),I=parseFloat(s);if(u){const e=!m;return t.css`
      width: 100%;
      background: transparent;
      pointer-events: none;
      position: relative;
      opacity: ${r===t.ScreenTransitionType.Fade?a?"1":"0.5":null};
      min-height: ${d===t.ScreenTransitionType.Cover?`${i}px`:null};
      padding-top: ${d!==t.ScreenTransitionType.Fade&&e?`${Math.round(i*fl)}px`:null};

      &.top-spacing > .panel-content {
        /* margin-top: ${Math.round(i*fl)}px; */
      }

      .panel-content {
        width: 100%;
        ${m?"":v};
        /* margin-top: ${r===t.ScreenTransitionType.Push?"${Math.round(viewHeight * SCREEN_RATIO_IN_SMALL_SIZE)}px":"unset"}; */

        > .layout, > .layout-wrapper > .layout {
          pointer-events: auto;
          ${m?v:""};
          min-height: ${Math.round(i*vl)}px;
          padding: ${o.styleUtils.toCSSPadding(y)};
        }

        > .layout-wrapper > .column-layout > .trail-container,
        > .column-layout > .trail-container {
          overflow-y: hidden;
        }

        > .layout-wrapper > .placeholder-btn {
          pointer-events: auto;
          ${m?v:""};
        }

        .panel-spacing {
          height: ${Math.round(i*I/100)}px;
        }
      }

      .panel-content-placeholder {
        width: 1px;
        min-height: ${i}px;
      }

      body:not(.design-mode) & {
        min-height: ${d===t.ScreenTransitionType.Cover?"100vh":null};
        min-height: ${d===t.ScreenTransitionType.Cover?"calc(var(--vh) * 100)":null};
        padding-top: ${d!==t.ScreenTransitionType.Fade&&e?100*fl+"vh":null};
        padding-top: ${d!==t.ScreenTransitionType.Fade&&e?`calc(var(--vh) * ${100*fl})`:null};

        > .layout, > .layout-wrapper > .layout {
          min-height: ${Math.round(100*vl)}vh;
          min-height: calc(var(--vh) * ${Math.round(100*vl)});
        }

        .panel-content-placeholder {
          min-height: 100vh;
          min-height: calc(var(--vh) * 100);
        }

        .panel-spacing {
          height: ${I}vh;
          height: calc(var(--vh) * ${I});
        }
      }
    `}return t.css`
    width: 100%;
    background: transparent;
    pointer-events: none;
    display: flex;
    flex-direction: ${"right"===c?"row-reverse":"row"};
    justify-content: ${"center"===c&&m?"center":"flex-start"};
    position: relative;
    opacity: ${r===t.ScreenTransitionType.Fade?a?"1":"0.5":null};

    &.top-spacing > .panel-content {
      /* margin-top: ${Math.round(2*i/3)}px; */
    }

    .panel-content {
      width: ${p};
      transform: ${m&&Math.abs(parseFloat(h))>0?`translateX(${f}${h})`:null};
      flex: 0 auto;
      min-height: ${l?`${i}px`:"unset"};
      ${m?"":v};

      > .layout,
      > .layout-wrapper > .layout {
        pointer-events: auto;
        ${m?v:""};
        min-height: ${Math.round(i*vl)}px;
        padding: ${o.styleUtils.toCSSPadding(y)};
      }

      > .layout-wrapper > .column-layout > .trail-container,
      > .column-layout > .trail-container {
        overflow-y: hidden;
      }

      > .layout-wrapper > .placeholder-btn {
        pointer-events: auto;
        ${m?v:""};
      }

      .panel-spacing {
        height: ${Math.round(i*I/100)}px;

        &.last-item {
          height: ${l?`${Math.round(i*I/100)}`:i}px;
        }
      }
    }

    .panel-content-placeholder {
      width: 1px;
      min-height: ${l?i:Math.round(i*vl)}px;
    }

    body:not(.design-mode) & {
      &.top-spacing > .panel-content {
        /* margin-top: 66.7vh; */
      }

      .panel-content {
        min-height: ${l?n>0?`calc(100vh - ${n}px)`:"100vh":"unset"};
        min-height: ${l?n>0?`calc(var(--vh) * 100 - ${n}px)`:"calc(var(--vh) * 100)":"unset"};
        > .layout, > .layout-wrapper > .layout {
          min-height: unset;
        }

        .panel-spacing {
          height: ${I}vh;
          height: calc(var(--vh) * ${I});

          &.last-item {
            height: ${l?I:100}vh;
            height: calc(var(--vh) * ${l?I:100});
          }
        }
      }
      .panel-content-placeholder {
        min-height: ${l?"100":Math.round(100*vl)}vh;
        min-height: calc(var(--vh) * ${l?"100":Math.round(100*vl)});
      }
    }
  `}var xl=p(3529),bl=p.n(xl),wl=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Sl=e=>{const o=window.SVG,{className:i}=e,n=wl(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:a,src:bl()},n)):t.React.createElement("svg",Object.assign({className:a},n))};function Cl(e){const{rootLayoutId:i,viewHeight:n,headerHeight:a,screenId:s,isActive:l,isAbsolute:r,isLast:d,isSmallSize:u,layoutEntry:c,isDesignMode:p,formatMessage:h,builderTheme:m}=e,y=t.ReactRedux.useSelector((t=>t.appConfig.screens[s])),f=t.ReactRedux.useSelector((t=>{var e,o,i;return null===(i=null===(o=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.screenPanelStates)||void 0===o?void 0:o[s])||void 0===i||i})),{main:v}=y,{side:I,size:x,overlay:b=!0}=y.panel||{},w=t.React.useRef(),S=t.React.useCallback((()=>{(0,t.getAppStore)().dispatch(t.appActions.screenPanelVisibleChanged(s,!0))}),[s]);const C=(0,t.classNames)("screen-main-panel",{"is-active":l,"last-one":d});return(0,t.jsx)(Bt.Provider,{value:!r||l},(0,t.jsx)("div",{id:`${i}_screen_${s}`,className:C,css:function(){var e,i,s,l;if(u){const s=!b&&null!=y.panel,l=s?`${Math.round(n*fl)}px`:`${n}px`,r=s?`${Math.round(100*fl)}`:"100";return t.css`
        pointer-events: none !important;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${n}px;

        > .layout {
          ${o.styleUtils.toBackgroundEmotionStyle(null!==(i=null===(e=y.main)||void 0===e?void 0:e.background)&&void 0!==i?i:{})};
          height: ${l} !important;
          border: none !important;
          pointer-events: auto;
        }

        body:not(.design-mode) & {
          height: ${a>0?`calc(100vh - ${a}px)`:"100vh"};
          height: ${a>0?`calc(var(--vh) * 100 - ${a}px)`:"calc(var(--vh) * 100)"};
          > .layout {
            height: ${r}vh !important;
            height: calc(var(--vh) * ${r}) !important;
          }
        }

        .spacing-area {
          flex: 1;
          background: transparent;
          pointer-events: none;
        }

        .toggle-visible-btn {
          position: absolute;
          bottom: 0;
          right: left;
          pointer-events: auto;
        }
      `}let d="0px",c="0px";"none"!==I&&(b||"right"===I||(d=x),b||"right"!==I||(c=x));const p=m?t.css`
      color: ${m.ref.palette.neutral[1200]};
      background-color: ${m.ref.palette.neutral[500]};
      border-color: ${m.ref.palette.neutral[600]};
      &:hover {
        color: ${m.ref.palette.black};
        background-color: ${m.ref.palette.neutral[600]};
      }
    `:null;return t.css`
      ${o.styleUtils.toBackgroundEmotionStyle(null!==(l=null===(s=y.main)||void 0===s?void 0:s.background)&&void 0!==l?l:{})};
      left: ${r?d:null};
      right: ${r?c:null};
      margin-left: ${r?null:d};
      margin-right: ${r?null:c};
      pointer-events: auto;
      display: flex;
      flex-direction: column;
      position: relative;

      > .layout {
        height: ${n}px !important;
        background: transparent;
        border: none !important;
      }

      body:not(.design-mode) & {
        > .layout {
          height: ${a>0?`calc(100vh - ${a}px)`:"100vh"} !important;
          height: ${a>0?`calc(var(--vh) * 100 - ${a}px)`:"calc(var(--vh) * 100)"} !important;
        }
      }

      .spacing-area {
        flex: 1;
        background: transparent;
        pointer-events: none;
      }

      .toggle-visible-btn {
        position: absolute;
        bottom: 0;
        right: 0;

        > button {
          ${p};
          svg {
            margin-right: 0;
            margin-left: 0;
          }
        }
      }
    `}(),ref:w,"data-screenid":s,"data-index":e.index},(0,t.jsx)(c,{layouts:v.layout,isInWidget:!0}),(0,t.jsx)("div",{className:"spacing-area"}),p&&!f&&(0,t.jsx)("div",{className:"toggle-visible-btn",onClick:S,"data-testid":"toggleBtn"},(0,t.jsx)(g,{placement:"auto",title:h("showInDesignView")},(0,t.jsx)(o.Button,{type:"default",size:"sm",className:"rounded-1"},(0,t.jsx)(Sl,{size:"m"}))))))}function Rl(e,o,i,n,a){return e===t.ScreenTransitionType.Fade?t.css`
      position: sticky;
      height: ${o}px;
      top: 0;

      body:not(.design-mode) & {
        height: ${i>0?`calc(100vh - ${i}px)`:"100vh"};
        height: ${i>0?`calc(var(--vh) * 100 - ${i}px)`:"calc(var(--vh) * 100)"};
        top: ${i>0?`${i}px`:0};
        .layout .exb-drop-area {
          pointer-events: none !important;
        }
      }

      .screen-main-panel {
        position: absolute;
        opacity: 0;
        visibility: hidden;
        z-index: 0;
        transition: ${n?null:"opacity 400ms"};
        top: 0;
        /* height: ${n?"unset":"100% !important"}; */

        .layout .exb-drop-area {
          pointer-events: none;
        }

        &.is-active {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          z-index: 1;

          .layout .exb-drop-area {
            pointer-events: auto;
          }
        }
      }
    `:e===t.ScreenTransitionType.Cover?t.css`
      position: sticky;
      height: ${o}px;
      overflow: hidden;
      top: 0;

      body:not(.design-mode) & {
        height: 100%;
        overflow: unset;
        position: relative;

        .screen-main-panel {
          top: ${i>0?`${i}px`:0};
        }
      }

      & > div:first-of-type {
        margin-top: 0 !important;
      }

      .screen-main-panel {
        position: sticky;
        top: 0;
        margin-top: ${1===a?"0 !important":null};

        .spacing-area {
          display: none;
        }
      }
    `:e===t.ScreenTransitionType.Push?t.css`
      position: sticky;
      height: ${o}px;
      overflow: hidden;
      top: 0;

      body:not(.design-mode) & {
        height: auto;
        overflow: unset;

        .screen-main-panel > .layout {
          top: ${i>0?`${i}px`:0};
        }
      }

      .screen-main-panel > .layout {
        position: sticky !important;
        top: 0;
      }
    `:void 0}function Tl(e,o,i){return e===t.ScreenTransitionType.Fade?t.css`
      height: calc(100% - ${o}px);
      background: transparent;
      pointer-events: none;

      body:not(.design-mode) & {
        height: calc(100% - 100vh);
        height: calc(100% - var(--vh) * 100);
      }
    `:e===t.ScreenTransitionType.Cover||e===t.ScreenTransitionType.Push?t.css`
      height: calc(100% - ${o}px);
      background: transparent;
      pointer-events: none;
      display: block;

      body:not(.design-mode) & {
        height: calc(100% - 100vh);
        height: calc(100% - var(--vh) * 100);
        display: none;
      }
    `:void 0}function Ml(e){const{rootLayoutId:o,activeIndex:i,viewHeight:n,headerHeight:a,screens:s,transitionType:l,isSmallSize:r,layoutEntry:d,isDesignMode:u,formatMessage:c,builderTheme:p}=e;return(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:"screen-container",css:Rl(l,n,a,r,s.length)},s.map(((e,h)=>(0,t.jsx)(Cl,{key:e,rootLayoutId:o,index:h,isActive:i===h,screenId:e,viewHeight:n,headerHeight:a,isAbsolute:l===t.ScreenTransitionType.Fade,isLast:h===s.length-1,isSmallSize:r,layoutEntry:d,isDesignMode:u,formatMessage:c,builderTheme:p})))),(0,t.jsx)("div",{className:"screen-placeholder",css:Tl(l,n)}))}const Al=t.css`
  width: 36px;
  height: 36px;
  padding: 0.5rem;
`,Pl=t.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`;function Ll(e){return t.css`
    display: flex;
    height: 200px;
    position: relative;
    z-index: 1;
    border: 1px dashed ${t.polished.rgba(e.ref.palette.neutral[1e3],.6)};

    body.lock-layout &,
    body:not(.design-mode) & {
      display: none !important;
    }

    .action-item {
      z-index: 1;
    }
  `}function jl(i){const{layouts:n,builderTheme:s}=i,l=t.ReactRedux.useSelector((t=>n[t.browserSizeMode]||n[t.appConfig.mainSizeMode])),[r,d]=t.React.useState(!1),u=t.React.useRef(null),c=t.React.useCallback((o=>{V((0,e.getAppConfigAction)().appConfig,o,l).then((({layoutInfo:i,updatedAppConfig:n})=>{const a=e.LayoutServiceProvider.getInstance().getServiceByType(t.LayoutType.ColumnLayout).processAfterItemAdded(n,o,i,null,{width:100,height:100},{left:0,top:0},null);(0,t.getAppStore)().dispatch(t.appActions.layoutChanged(a,i))})),d(!1)}),[l]),p=t.React.useCallback(((o,i,n)=>{V((0,e.getAppConfigAction)().appConfig,o,l).then((({layoutInfo:a,updatedAppConfig:s})=>{const l=e.LayoutServiceProvider.getInstance().getServiceByType(t.LayoutType.ColumnLayout).processAfterItemAdded(s,o,a,null,i,n,null);(0,t.getAppStore)().dispatch(t.appActions.layoutChanged(l,a))}))}),[l]),h=t.React.useCallback((t=>!t.layoutInfo||t.layoutInfo.layoutId!==l),[l]);return(0,t.jsx)(a.LayoutContext.Provider,{value:{isItemAccepted:h}},(0,t.jsx)("div",{className:"placeholder-btn w-100 justify-content-center align-items-center",css:Ll(s)},(0,t.jsx)(Ve,{css:Pl,layouts:n,onDrop:p}),(0,t.jsx)("div",{className:"action-item",ref:u},(0,t.jsx)(o.Button,{icon:!0,css:Al,onClick:o=>{o.stopPropagation(),(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small?d(!r):e.appBuilderSync.publishSidePanelToApp({type:"widget",isPlaceholder:!0,isItemAccepted:h,onSelect:c})}},(0,t.jsx)(Ge,{size:"m"}))),r&&(0,t.jsx)($e.WidgetListPopper,{referenceElement:u.current,isAccepted:h,onSelect:c,onClose:()=>{d(!1)}})))}var zl=p(6490),Nl=p.n(zl),kl=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const $l=e=>{const o=window.SVG,{className:i}=e,n=kl(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:a,src:Nl()},n)):t.React.createElement("svg",Object.assign({className:a},n))},Ol=t.spring.animated;function El(e,o,i,n,a,s,l,r,d,u,c,p,h){const{side:g,size:m}=e.panel||{},y=t.css`
    color: ${c.ref.palette.neutral[1200]};
    background-color: ${c.ref.palette.neutral[500]};
    border-color: ${c.ref.palette.neutral[600]};
    &:hover {
      color: ${c.ref.palette.black};
      background-color: ${c.ref.palette.neutral[600]};
    }
  `;return d?t.css`
      ${Il(e,o,i,n,a,s,l,r,d)};

      .panel-content {
        transform: none !important;

        &:not(.visible) {
          pointer-events: none;
          > .layout-wrapper > .layout,
          > .layout-wrapper > .placeholder-btn {
            pointer-events: none;
          }
        }
      }

      &.minimized .exb-drop-area, &.minimized .toggle-visible-btn {
        pointer-events: none !important;
      }

      .resize-handle {
        display: none;
      }

      .layout-wrapper {
        transform-origin: right bottom;
      }

      .toggle-visible-btn {
        display: flex;
        justify-content: flex-end;
        pointer-events: auto;

        > button {
          ${y};
        }
      }
      body:not(.design-mode) & .toggle-visible-btn {
        display: none !important;
      }
    `:t.css`
    ${Il(e,o,i,n,a,s,l,r,d)};

    .panel-content {
      position: relative;
      touch-action: none;
      width: ${p?`${h}px`:m};

      &:not(.visible) {
        pointer-events: none;
        > .layout-wrapper > .layout,
        > .layout-wrapper > .placeholder-btn {
          pointer-events: none;
        }
      }

      &.simple-mode {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 100% !important;
      }

      .layout-wrapper {
        position: relative;
        transform-origin: right bottom;
      }
    }

    .toggle-visible-btn {
      display: flex;
      justify-content: flex-end;
      pointer-events: auto;
      > button {
        ${y};
        svg {
          margin-right: 0;
          margin-left: 0;
        }
      }
    }

    &.minimized .exb-drop-area, &.minimized .toggle-visible-btn {
        pointer-events: none !important;
      }

    .panel-content:hover {
      .resize-handle {
        display: block;
      }
    }
    body:not(.design-mode) & .resize-handle,
    body:not(.design-mode) & .toggle-visible-btn,
    body.lock-layout & .resize-handle {
      display: none !important;
    }
    .resize-handle {
      position: absolute;
      cursor: ew-resize;
      top: 0;
      bottom: 0;
      display: ${p?"block":"none"};
      touch-action: none;
      outline: 1px solid var(--ref-palette-neutral-500);
      width: 5px;
      pointer-events: auto;
      &:after {
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 50%;
        border-left: 1px dotted var(--ref-palette-neutral-500);
        transform: translate(-50%);
      }

      &.left {
        left: -5px;
        display: ${"left"!==g?"none":"none !important"};
      }
      &.right {
        right: -5px;
        display: ${"right"!==g?"none":"none !important"};
      }
    }
  `}function Bl(i){const{index:n,screenId:s,onInterctionChange:l,onHeightChange:r,builderTheme:d,viewHeight:u,headerHeight:c,layoutEntry:p,isActive:h,isSmallSize:m,isDesignMode:y,transitionType:f,screenTransitionType:v,triggerType:I,stretched:x,viewOnly:b,verticalSpace:w="0",useAnimation:S=!0,formatMessage:C}=i,R=t.ReactRedux.useSelector((t=>t.appConfig.screens[s])),T=t.ReactRedux.useSelector((t=>{var e,o,i;return null===(i=null===(o=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.screenPanelStates)||void 0===o?void 0:o[s])||void 0===i||i})),{panel:M}=R,A=t.React.useRef(),P=t.React.useRef(),L=t.React.useRef(),[j,z]=t.React.useState(!1),[N,k]=t.React.useState(0),$=t.React.useRef(T),O=t.React.useRef(y),E=t.React.useRef(),B=t.React.useMemo((()=>{if(M&&M.overlay&&Math.abs(parseFloat(M.offset))>0){const e=(0,t.getAppStore)().getState().appContext.isRTL?"left"===M.side?-1:1:"right"===M.side?-1:1;return parseFloat(M.offset)*e}return 0}),[M]),[D,F]=t.spring.useSpring((()=>({opacity:1,size:1,x:0,y:0}))),V=t.React.useCallback(((t,e)=>{E.current=e,z(!0),k(0)}),[]),H=t.React.useCallback(((t,e,o,i,n)=>{k(i)}),[]),G=t.React.useCallback(((t,o,i,n,l)=>{!function(t,o){var i;const n=(0,e.getAppConfigAction)(),s=n.appConfig.screens[t];let l;l=a.utils.isPercentage(null===(i=s.panel)||void 0===i?void 0:i.size)?a.utils.toRatio(o,document.body.clientWidth):`${Math.round(o)}px`,n.editScreenProperty(t,"panel.size",l).exec()}(s,E.current+n),z(!1)}),[s]);t.React.useEffect((()=>{O.current!==y&&(O.current=y,y?$.current?F.start({opacity:1,x:0,y:0,immediate:!0,onRest:null}):F.start({opacity:0,immediate:!0,onRest:null}):F.start({opacity:1,x:0,y:0,immediate:!0,onRest:null}))}),[y,F]),t.React.useEffect((()=>{if(!L.current&&P.current)return L.current=(0,Tt.interact)(P.current),Pt(L.current,{layoutItemId:s,onResizeStart:V,onResizing:H,onResizeEnd:G}),()=>{L.current&&(L.current.unset(),L.current=null)}}),[s,V,H,G]);const W=t.React.useCallback((t=>{l(n,t)}),[n,l]),_=t.React.useCallback(((t,e)=>{r(n,e)}),[n,r]),U=t.React.useCallback((e=>{const o=e.target.getBoundingClientRect(),i=A.current.getBoundingClientRect(),n=(0,t.getAppStore)().getState().appContext.isRTL;A.current.classList.add("minimized"),F.start({opacity:0,size:0,x:n?i.left-o.left:i.right-o.right,y:i.bottom-o.bottom,immediate:!S,onRest:()=>{$.current=!1,(0,t.getAppStore)().dispatch(t.appActions.screenPanelVisibleChanged(s,!1))}})}),[F,s,S]),Y=t.React.useCallback((()=>{A.current.classList.remove("minimized"),F.start({opacity:1,size:1,x:0,y:0,immediate:!S,onRest:null})}),[F,S]);t.React.useEffect((()=>{$.current!==T&&T&&(Y(),$.current=T)}),[T,Y]),yl(A.current,i.refElement,m?t.ScreenTriggerType.Lower:null!=I?I:t.ScreenTriggerType.Bottom,W);const Z={opacity:D.opacity,translateX:B,x:D.x,y:D.y},X=t.React.useCallback((()=>!b&&h&&(null==M?void 0:M.overlay)),[M,h,b]);return(0,t.jsx)("div",{className:(0,t.classNames)("screen-side-panel",{"top-spacing":0===n&&((null==M?void 0:M.overlay)||m)}),"data-screenid":s,"data-index":n,ref:A,css:El(R,u,c,h,w,x||null==M,f,v,m,0,d,j,E.current+N)},M&&(0,t.jsx)(Ol.div,{className:(0,t.classNames)("panel-content",{visible:T}),ref:P,style:Z},(0,t.jsx)("div",{className:"layout-wrapper"},(0,t.jsx)(p,{layouts:M.layout}),!b&&(0,t.jsx)(jl,{layouts:M.layout,builderTheme:d}),(0,t.jsx)("span",{className:"resize-handle left rnd-resize-left"}),(0,t.jsx)("span",{className:"resize-handle right rnd-resize-right"})),X()&&(0,t.jsx)("div",{className:"toggle-visible-btn",onClick:U,"data-testid":`toggleBtn-${T}`},(0,t.jsx)(g,{placement:"auto",title:C("hideInDesignView")},(0,t.jsx)(o.Button,{type:"default",size:"sm",className:"rounded-1"},(0,t.jsx)($l,{size:"m"})))),(0,t.jsx)("div",{className:(0,t.classNames)("panel-spacing",{"last-item":i.isLast})})),!M&&T&&(0,t.jsx)("div",{className:"panel-content-placeholder"}),(0,t.jsx)(t.ReactResizeDetector,{handleHeight:!0,onResize:_}))}function Dl(o){const{layoutId:i,layoutItemId:n,builderTheme:s,layoutItem:l,formatMessage:r,isFirst:d,isLast:u}=o,[c,p]=t.React.useState(!1),[h,g]=t.React.useState(!1),m=t.React.useRef(),y=t.React.useCallback((t=>{Qs(i,n,t),p(!1)}),[i,n]),f=t.React.useCallback((()=>{(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small?p(!c):e.appBuilderSync.publishSidePanelToApp({type:"templateBlock",templateMethod:"getBlockTemplates",onSelect:y})}),[c,y]),v=t.React.useCallback((()=>{g(!h)}),[h]),I=t.React.useCallback((t=>{Ks(i,n,t),g(!1)}),[i,n]),x=t.React.useCallback((()=>{const t=el((0,e.getAppConfigAction)().appConfig,{layoutId:i,layoutItemId:n});(0,e.getAppConfigAction)(t).exec()}),[i,n]),b=t.React.useCallback((()=>{const t=tl((0,e.getAppConfigAction)().appConfig,{layoutId:i,layoutItemId:n});(0,e.getAppConfigAction)(t).exec()}),[i,n]),w=t.React.useCallback((()=>{e.appBuilderSync.publishConfirmDeleteToApp({layoutId:i,layoutItemId:n})}),[i,n]),S=t.React.useCallback((()=>(0,t.getAppStore)().getState().browserSizeMode===t.BrowserSizeMode.Large),[]),C=[{icon:il(),title:r("insertABlock"),onClick:f,visible:()=>!st()},{icon:al(),title:r("insertAScreenGroup"),onClick:v,visible:()=>S()&&!st()},pt,Object.assign(Object.assign({},mt),{visible:()=>S()&&!st()}),{icon:nt(),title:r("setting"),onClick:()=>{(0,t.getAppStore)().dispatch(t.appActions.selectionChanged({layoutId:i,layoutItemId:n}))}},{icon:q(),title:r("dragToMove",{label:lt(l)}),className:"tool-drag-handler",onClick:()=>{},visible:()=>!st()},{icon:ll(),onClick:x,title:r("moveup"),visible:()=>!d&&!st()},{icon:ll(),rotate:180,onClick:b,title:r("movedown"),visible:()=>!u&&!st()},{icon:U(),title:r("delete"),onClick:w,visible:()=>!st()}];return(0,t.jsx)(qs,{layoutId:i,layoutItem:l,builderTheme:s,positionType:"center",size:a.CONTEXT_MENU_ITEM_SIZE,iconSize:a.CONTEXT_MENU_ICON_SIZE,className:"widget-context-menu",menuItems:C,isFirst:d,isLast:u},(0,t.jsx)("div",{ref:m,css:t.css`position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;`}),c&&(0,t.jsx)($e.TemplateSelector,{templates:(0,Gi.getBlockTemplates)(),referenceElement:m.current,onItemSelect:y,onClose:f}),h&&(0,t.jsx)($e.TemplateSelector,{templates:(0,Gi.getScreenGroupTemplates)(),referenceElement:m.current,onItemSelect:I,onClose:v}))}function Fl(e,o,i,n,a,s){return t.css`
    position: relative;
    width: 100%;

    & > div.widget-context-menu {
      display: none;
    }

    &:hover > div.widget-context-menu {
      display: flex;
    }

    body.lock-layout & {
      .screen-menu {
        bottom: ${i?n?"-10px":"-32px":"auto"};
        z-index: ${i&&n?10:null};
      }
    }

    .screen-menu {
      display: ${a?"block":"none"};
      position: absolute;
      opacity: ${a?.8:.5};
      left: 0;
      top: ${i?"auto":"-32px"};
      bottom: ${i?"-32px":"auto"};
      height: 32px;
      width: 100%;
      background-color: ${o.ref.palette.neutral[300]};
      overflow: visible;

      .info {
        color: ${o.ref.palette.black};
      }

      .jimu-btn svg {
        color: ${o.ref.palette.neutral[1e3]};
      }
    }

    .screen-group {
      position: relative;
      height: ${e}px;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .main-panels {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      pointer-events: none;
      z-index: 0;
    }

    &.small-size .main-panels {
      z-index: ${s?0:1};
    }

    &.small-size .side-panels {
      z-index: ${s?1:0};
    }

    .side-panels {
      position: relative;
      z-index: 1;
      pointer-events: none;

      > div:first-of-type > div.panel-content {
        padding-top: ${Math.round(e*fl)}px;
      }

      /* > div:nth-last-of-type(2) {
        min-height: ${e}px;
      } */
    }

    body:not(.design-mode) & {
      .screen-group {
        position: static;
        height: auto;
        overflow-y: unset;
        overflow-x: unset;
      }
      .side-panels {
        > div:first-of-type > div.panel-content {
          padding-top: ${100*fl}vh;
          padding-top: calc(var(--vh) * ${100*fl});
        }
        /* > div:nth-last-of-type(2) {
          min-height: 100vh;
        } */
      }
      .screen-menu {
        display: none !important;
      }
    }

    .group-tip {
      display: none;
      padding: inherit;
      position: absolute;
      left: 0;
      bottom: 0;
      top: 0;
      right: 0;
      pointer-events: none;
      .tip-content {
        height: 100%;
        padding: 2px;
        &:after {
          content: '';
          width: 100%;
          height: 100%;
          outline: 2px solid ${o.sys.color.primary.dark};
          display: block;
        }
      }
    }

    &:hover .group-tip {
      display: block;
    }
  `}function Vl(o){var i;const{layoutId:n,layoutItemId:s,layoutItem:l,formatMessage:r,itemIndex:d,isFirst:u,isLast:c}=o,{screenGroupId:p}=l,h=t.ReactRedux.useSelector((t=>{var e;const o=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.selection;return!!o&&(o.layoutId===n&&o.layoutItemId===s)})),g=t.ReactRedux.useSelector((t=>t.appConfig.screenGroups[l.screenGroupId])),m=t.ReactRedux.useSelector((t=>t.appConfig.screenGroups[l.screenGroupId].screens.some((e=>null!=t.appConfig.screens[e].panel)))),y=t.ReactRedux.useSelector((t=>t.browserSizeMode)),{screens:f,stretchPanel:v=!0,triggerType:I=t.ScreenTriggerType.Bottom,verticalSpace:x="0",panelTransitionType:b=t.ScreenTransitionType.Push}=g;let w=null!==(i=g.transitionType)&&void 0!==i?i:t.ScreenTransitionType.Fade;y!==t.BrowserSizeMode.Small||m||(w=t.ScreenTransitionType.Cover);const S=t.ReactRedux.useSelector((t=>{var e;return null===(e=t.appRuntimeInfo.screenGroupNavInfos)||void 0===e?void 0:e[p]})),C=t.ReactRedux.useSelector((e=>t.utils.findViewportSize(e.appConfig,e.browserSizeMode||t.BrowserSizeMode.Large))),R=t.ReactRedux.useSelector((e=>{var o;return(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design})),{viewOnly:T,builderTheme:M,pageId:A}=t.React.useContext(a.PageContext),P=t.ReactRedux.useSelector((t=>{const e=t.appConfig.pages[A];if(null==e?void 0:e.header){const e=t.appConfig.header;if(null==e?void 0:e.sticky){const o=t.browserSizeMode,i=t.appConfig.mainSizeMode,n=e.height[o]||e.height[i]||75;return parseInt(n,10)}}return 0})),L=t.React.useRef(),j=t.React.useRef(),z=t.React.useRef(),N=t.React.useRef(!0),k=t.React.useRef(),$=t.React.useRef(),[O,E]=t.React.useState(0);t.React.useEffect((()=>{if(h){const t=document.querySelector(`div.exb-rnd[data-layoutid="${n}"][data-layoutitemid="${s}"]`);null!=t&&t.scrollIntoView({behavior:"auto",block:"center"})}}),[h,n,s]);const B=t.React.useMemo((()=>{var e,o,i;if(y!==t.BrowserSizeMode.Small)return!1;const n=(0,t.getAppStore)().getState().appConfig,a=null===(o=null===(e=n.screenGroups)||void 0===e?void 0:e[p])||void 0===o?void 0:o.screens;if(null==a?void 0:a[O]){return null===(i=n.screens[a[O]].panel)||void 0===i?void 0:i.overlay}return!1}),[p,O,y]),D=t.React.useCallback((e=>{var o;const i=j.current.querySelectorAll("div.screen-side-panel");let n=0;if(i.forEach((t=>{+t.getAttribute("data-index")<e&&(n+=t.clientHeight)})),j.current.scrollTop=n,w!==t.ScreenTransitionType.Fade){const t=null===(o=z.current)||void 0===o?void 0:o.children[0];t&&(t.scrollTop=j.current.scrollTop)}}),[w]),F=t.React.useCallback((()=>{Ct(!0)}),[]),V=t.React.useCallback((()=>{Ct(!1)}),[]);t.React.useEffect((()=>{if(L.current&&!$.current){const{layoutId:t,layoutItemId:e,layoutItem:i}=o;$.current=(0,Tt.interact)(L.current).origin("parent"),$.current=St($.current,{layoutId:t,layoutItemId:e,onDragStart:F,onDragEnd:V,useDragHandler:!0,itemType:i.type,rootLayoutId:()=>t,restrict:()=>!0}),$.current.draggable({modifiers:[Tt.interact.modifiers.restrictRect({restriction:"parent"})]})}return()=>{$.current&&($.current.unset(),$.current=null)}}),[]),t.React.useEffect((()=>{null!=(null==S?void 0:S.activeIndex)&&S.activeIndex!==O&&(!function(e,o){var i;const n=(0,t.getAppStore)().getState().appConfig,a=(0,t.getAppStore)().getState().browserSizeMode,s=null===(i=(0,t.getAppStore)().getState().appRuntimeInfo)||void 0===i?void 0:i.selection;if(null!=s){const i=n.screenGroups[e].screens[o],l=n.screens[i];if(l){const e=l.main.layout[a];s.layoutId===e&&(0,t.getAppStore)().dispatch(t.appActions.selectionChanged(null)),null!=document.querySelector(`div[data-layoutid="${e}"] div[data-layoutid="${s.layoutId}"][data-layoutitemid="${s.layoutItemId}"]`)&&(0,t.getAppStore)().dispatch(t.appActions.selectionChanged(null))}}}(p,O),E(S.activeIndex),S.scrollIntoView&&(N.current=!1,D(S.activeIndex),setTimeout((()=>{N.current=!0}),200)))}),[S,O,D,p]),t.React.useEffect((()=>{k.current&&(j.current.removeEventListener("scroll",k.current),k.current=null),k.current=()=>{var e;const o=null===(e=z.current)||void 0===e?void 0:e.children[0];o&&w!==t.ScreenTransitionType.Fade&&(o.scrollTop=j.current.scrollTop)},j.current.addEventListener("scroll",k.current)}),[w]),t.React.useEffect((()=>{(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(p,0))}),[R,p]);const H=t.React.useCallback(((e,o)=>{N.current&&(o&&e!==O?(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(p,e,!1)):!o&&e>0&&(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(p,e-1,!1)))}),[O,p]),G=t.React.useCallback((e=>{e.stopPropagation(),st()||T||y===t.BrowserSizeMode.Small||(0,t.getAppStore)().dispatch(t.appActions.selectionChanged({layoutId:n,layoutItemId:s}))}),[T,y,n,s]),W=t.React.useCallback((()=>{if(!j.current)return;const t=j.current.children[0],e=j.current.children[1];t.style.height=`${e.clientHeight}px`}),[]),_=t.React.useMemo((()=>t.lodash.debounce(W,200)),[W]),U=t.React.useCallback(((e,o)=>{if(!j.current)return;const i=j.current.children[0],n=j.current.children[1];if(w!==t.ScreenTransitionType.Fade)if(w!==t.ScreenTransitionType.Cover){if(w===t.ScreenTransitionType.Push){const t=i.querySelector(`div.screen-main-panel[data-index="${e}"]`),o=n.querySelector(`div.screen-side-panel[data-index="${e}"]`);t.style.height=`${o.clientHeight}px`,i.style.height=`${n.clientHeight}px`}}else!function(e,o,i){const n=e.querySelectorAll("div.screen-main-panel"),a=o.querySelectorAll("div.screen-side-panel"),s=n.length;for(let t=1;t<s;t++){const e=n.item(t),o=n.item(t-1),i=a.item(t-1);e.style.marginTop=i.clientHeight-o.clientHeight+"px"}i!==t.BrowserSizeMode.Small&&(e.style.height=`${o.clientHeight}px`)}(i,n,y);else i.style.height=`${n.clientHeight}px`}),[y,w]),Y=t.React.useCallback((()=>{(0,t.getAppStore)().dispatch(e.builderActions.confirmDeleteContentChanged({layoutId:n,layoutItemId:s}))}),[n,s]),Z=t.React.useMemo((()=>({delete:Y,backspace:Y})),[Y]);return f.length>0?(0,t.jsx)(Dt.Provider,{value:`${n}:${s}`},(0,t.jsx)("div",{className:(0,t.classNames)("builder-layout-item exb-rnd",{selected:h,"small-size":y===t.BrowserSizeMode.Small}),css:Fl(C.height,M,u,c,h,B),"data-layoutitemid":s,"data-layoutid":n,onClick:G,ref:L},(0,t.jsx)("div",{className:"screen-menu"},(0,t.jsx)(pl,{activeScreenIndex:O,itemIndex:d,total:f.length,screenGroupId:p,layoutId:n,layoutItemId:s,browserSizeMode:y,hasPanel:m,formatMessage:r})),(0,t.jsx)("div",{className:"screen-group",ref:j},(0,t.jsx)("div",{className:"main-panels",ref:z},(0,t.jsx)(Ml,{rootLayoutId:n,activeIndex:O,viewHeight:C.height,headerHeight:P,screens:f,transitionType:w,layoutEntry:no,isSmallSize:y===t.BrowserSizeMode.Small,isDesignMode:R,builderTheme:M,formatMessage:r})),(0,t.jsx)("div",{className:"side-panels"},f.map(((e,o)=>(0,t.jsx)(Bl,{key:e,index:o,isLast:o===f.length-1,screenId:e,viewHeight:C.height,headerHeight:P,refElement:R?L.current:null,layoutEntry:no,viewOnly:T,builderTheme:M,isActive:o===O,isSmallSize:y===t.BrowserSizeMode.Small,isDesignMode:R,stretched:v,triggerType:I,verticalSpace:x,transitionType:b,screenTransitionType:w,onHeightChange:U,onInterctionChange:H,formatMessage:r}))),(0,t.jsx)(t.ReactResizeDetector,{handleHeight:!0,onResize:_}))),!T&&(0,t.jsx)(Dl,{layoutId:n,layoutItemId:s,layoutItem:l,isFirst:u,isLast:c,builderTheme:M,formatMessage:r}),R&&(0,t.jsx)("div",{className:"group-tip"},(0,t.jsx)("div",{className:"tip-content"})),R&&h&&(0,t.jsx)(t.Keyboard,{bindings:Z}))):null}var Hl=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Gl=e=>{const o=window.SVG,{className:i}=e,n=Hl(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:a,src:il()},n)):t.React.createElement("svg",Object.assign({className:a},n))};var Wl=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const _l=e=>{const o=window.SVG,{className:i}=e,n=Wl(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:a,src:al()},n)):t.React.createElement("svg",Object.assign({className:a},n))},Ul=t.css`
  pointer-events: auto;
`;function Yl(e){return t.css`
    body.lock-layout &,
    body:not(.design-mode) & {
      display: none !important;
    }

    display: flex;
    height: 200px;
    padding: 1rem;
    pointer-events: none;
    position: relative;
    z-index: 1;
    .btn-text {
      line-height: 32px;
    }
    .btn {
      margin-right: 2rem;
      background: ${e.ref.palette.neutral[600]};
      &:hover {
        background: ${e.ref.palette.neutral[700]};
      }
    }
    .action-item {
      width: 32px;
    }

    .action-seprator {
      width: 300px;
      height: 1px;
      background-color: ${e.ref.palette.neutral[1100]};
    }
  `}function Zl(e){return e===t.BrowserSizeMode.Large}function Xl(i){const{pageContext:n,browserSizeMode:a,onPageTemplateSelected:s,onBlockTemplateSelected:l,onScreenTemplateSelected:r,blockOnly:d}=i,{builderTheme:u,formatMessage:c,isHeader:p,isFooter:h}=n,[m,y]=t.React.useState(!1),[f,v]=t.React.useState(!1),[I,x]=t.React.useState(!1),b=t.React.useRef(null),w=t.React.useRef(null),S=t.React.useRef(null),C=t.ReactRedux.useSelector((e=>{var o,i,n;const a=null!==(n=null===(i=null===(o=e.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return e.appRuntimeInfo.appMode===t.AppMode.Design&&!a})),R=!p&&!h;let T;T=p?c("chooseHeaderTemplate"):h?c("chooseFooterTemplate"):c("chooseTemplate",{type:n.isDialog?c("dialog").toLocaleLowerCase():c("page").toLocaleLowerCase()});return C?(0,t.jsx)("div",{className:"w-100 flex-column justify-content-center align-items-center",css:Yl(u)},(0,t.jsx)("div",{className:"d-flex"},R&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(g,{placement:"bottom",title:c("insertABlock")},(0,t.jsx)("div",{className:"action-item"},(0,t.jsx)(o.Button,{ref:b,icon:!0,onClick:o=>{o.stopPropagation(),a!==t.BrowserSizeMode.Small?v(!f):e.appBuilderSync.publishSidePanelToApp({type:"templateBlock",templateMethod:"getBlockTemplates",onSelect:l})},css:Ul,className:"rounded-circle"},(0,t.jsx)(Gl,{size:"m",color:u.ref.palette.neutral[1100]})))),Zl(a)&&(0,t.jsx)(g,{placement:"bottom",title:c("insertAScreenGroup")},(0,t.jsx)("div",{className:"action-item ml-5"},(0,t.jsx)(o.Button,{ref:w,icon:!0,onClick:t=>{t.stopPropagation(),x(!I)},css:Ul,className:"rounded-circle"},(0,t.jsx)(_l,{size:16,color:u.ref.palette.neutral[1100]}))))),!d&&(0,t.jsx)(g,{placement:"bottom",title:T},(0,t.jsx)("div",{className:(0,t.classNames)("action-item",{"ml-5":R})},(0,t.jsx)(o.Button,{ref:S,icon:!0,onClick:o=>{o.stopPropagation(),a!==t.BrowserSizeMode.Small?y(!m):e.appBuilderSync.publishSidePanelToApp({type:"template",templateMethod:"getScrollingPageTemplates",onSelect:s})},css:Ul,className:"rounded-circle"},(0,t.jsx)(Yi,{autoFlip:!0,size:16,color:u.ref.palette.neutral[1100]}))))),(0,t.jsx)("div",{className:"action-seprator mt-4"}),(0,t.jsx)("div",null,(0,t.jsx)("h5",{className:"btn-text mt-2"},c("dropWidgetToAdd"))),R&&f&&(0,t.jsx)($e.TemplateSelector,{templates:(0,Gi.getBlockTemplates)(),referenceElement:b.current,onItemSelect:t=>{v(!1),l(t)},onClose:()=>{v(!1)}}),R&&I&&Zl(a)&&(0,t.jsx)($e.TemplateSelector,{templates:(0,Gi.getScreenGroupTemplates)(),referenceElement:w.current,onItemSelect:t=>{x(!1),r(t)},onClose:()=>{x(!1)}}),!d&&m&&(0,t.jsx)($e.TemplateSelector,{templates:(0,Gi.getScrollingPageTemplates)(!1),referenceElement:S.current,onItemSelect:t=>{y(!1),s(t)},onClose:()=>{y(!1)}})):null}const ql=t.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,Jl=t.css`
  ${ql};
  z-index: ${a.LayoutZIndex.DragMoveTip};
  pointer-events: none;
`;class Ql extends t.React.PureComponent{constructor(o){super(o),this.state={isDragover:!1,isLoadingTemplate:!1},this.handleActivate=e=>{if(!rt()&&!dt())return;if(Math.abs(e.screenX-this.mousedownX)>a.CLICK_TOLRERANCE||Math.abs(e.screenY-this.mousedownY)>a.CLICK_TOLRERANCE)return void e.stopPropagation();const{isInSection:o,isInWidget:i}=this.props;this.pageContext.viewOnly||o||i||jt()||Rt()||(e.stopPropagation(),(0,t.getAppStore)().dispatch(t.appActions.selectionChanged(null)))},this.handleMouseDown=t=>{this.mousedownX=t.screenX,this.mousedownY=t.screenY},this.handleDragOver=(e,o,i,n,a,s)=>{var l,r,d;const{layout:u}=this.props,c=null!==(l=e.layoutInfo)&&void 0!==l?l:{layoutId:null};let p=n;if(this.canvasPane.clear(),(null===(r=this.childRects)||void 0===r?void 0:r.length)>0){const{insertY:t,refId:e}=function(t,e,o,i){let n,a,s=!1;if(o.some(((t,i)=>{if(t.top+t.height/2>e){if(0===i)n=Math.max(t.top/2,t.top-5);else{const e=o[i-1];n=(t.top+e.top+e.height)/2}s=!0,a=t.id}return s})),!s){const e=o[o.length-1];n=Math.min(e.top+e.height+5,(e.top+e.height+t.height)/2)}return{refId:a,insertY:n}}(i,s,this.childRects);if(this.referenceId=e,c.layoutId===this.props.layout.id){const t=u.order,o=t.indexOf(c.layoutItemId),i=t.indexOf(e);if((null===(d=u.content[c.layoutItemId].setting)||void 0===d?void 0:d.isFloating)||o===i-1||null==e&&o===t.length-1)return}p={top:t-5+this.ref.scrollTop,width:i.width-Zs,left:5,height:Zs}}else this.referenceId=null,p={top:i.height/2-5,width:i.width-Zs,left:5,height:Zs};this.canvasPane.setColor(t.polished.rgba(this.builderTheme.sys.color.primary.light,.4)),this.canvasPane.drawRect(p)},this.handleToggleDragoverEffect=(t,e)=>{var o;t&&(this.referenceId=null,this.collectBounds(null!==(o=e.layoutInfo)&&void 0!==o?o:{layoutId:null})),this.canvasPane.clear(),this.setState({isDragover:t})},this.handleDragEnter=t=>{},this.handleDragLeave=()=>{},this.handleDrop=(o,i,n)=>{var a,s;this.canvasPane.clear();const{layout:l}=this.props,r=null!==(a=o.layoutInfo)&&void 0!==a?a:{layoutId:null},d=(0,e.getAppConfigAction)();let u=0;if(null!=this.referenceId?u=l.order.indexOf(this.referenceId):null!=l.order&&(u=l.order.length),this.referenceId=null,this.childRects=[],r.layoutId===l.id){if(null===(s=l.content[r.layoutItemId].setting)||void 0===s?void 0:s.isFloating){const o=(0,e.getAppConfigAction)();return o.setLayoutItemToPending(r,!1),void(0,t.getAppStore)().dispatch(t.appActions.layoutChanged(o.appConfig,Object.assign(Object.assign({},r),{autoScroll:!1})))}return void V(d.appConfig,o,l.id).then((a=>{const{layoutInfo:s,updatedAppConfig:l}=a,r=e.LayoutServiceProvider.getInstance().getServiceByType(t.LayoutType.FlowLayout).processAfterItemAdded(l,o,s,null,i,n,u);(0,t.getAppStore)().dispatch(t.appActions.layoutChanged(r,Object.assign(Object.assign({},s),{autoScroll:!0})))})).finally(null)}const c=(this.maxPageWidth>0?Math.min(this.maxPageWidth,i.width):i.width)/12,p=Math.min(Math.ceil(n.width/c),12);o.itemType===t.LayoutItemType.ScreenGroup?V(d.appConfig,o,l.id).then((a=>{const{layoutInfo:s,updatedAppConfig:l}=a,r=e.LayoutServiceProvider.getInstance().getServiceByType(t.LayoutType.FlowLayout).processAfterItemAdded(l,o,s,null,i,n,u);(0,t.getAppStore)().dispatch(t.appActions.layoutChanged(r,Object.assign(Object.assign({},s),{autoScroll:!0})))})).finally(null):this.addWidgetToLayout(o,i,n,p,u)},this.handleDropAtBoundary=(t,e,o)=>{o<this.props.layout.order.length?this.referenceId=this.props.layout.order[o]:this.referenceId=null,null==this.domRect&&(this.domRect=this.ref.getBoundingClientRect()),this.handleDrop(t,this.domRect,e)},this.onWidgetItemSelected=t=>{var e,o,i;const n=this.ref.getBoundingClientRect(),a={height:null!==(i=null===(o=null===(e=t.manifest)||void 0===e?void 0:e.defaultSize)||void 0===o?void 0:o.height)&&void 0!==i?i:300};this.addWidgetToLayout(t,n,a,4,0)},this.handleBlockTemplateSelected=t=>{this.setState({isLoadingTemplate:!0}),Qs(this.props.layout.id,"",t).finally((()=>{this.setState({isLoadingTemplate:!1})}))},this.handleScreenTemplateSelected=t=>{this.setState({isLoadingTemplate:!0}),Ks(this.props.layout.id,"",t).finally((()=>{this.setState({isLoadingTemplate:!1})}))},this.handlePageTemplateSelected=o=>{const i=(0,e.getAppConfigAction)();this.setState({isLoadingTemplate:!0}),this.pageContext.isHeader?i.applyHeaderTemplate(o).then((()=>{i.exec(),t.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).finally(null):this.pageContext.isFooter?i.applyFooterTemplate(o).then((()=>{i.exec(),t.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).finally(null):i.applyPageBodyTemplate(this.pageContext.pageId,o).then((()=>{i.exec(),t.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).finally(null)};const i=t.ExtensionManager.getInstance().getExtensions(`${t.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==i?void 0:i.length)>0){const t=i.find((t=>t.layoutType===this.props.layout.type));this.layoutTransform=null==t?void 0:t.transformLayout}}componentDidMount(){this.canvasPane=new Ji(this.canvasRef),this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}componentDidUpdate(){this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}addWidgetToLayout(t,e,o,i,n,a){G(t,this.props.layout.id,e,o,i,n,a).finally(null)}collectBounds(t){const{layout:e}=this.props;this.childRects=[],this.domRect=this.ref.getBoundingClientRect();const o=this.ref.parentNode.querySelectorAll(`div[data-layoutid="${e.id}"] > div.exb-rnd`);return(null==o?void 0:o.length)>0&&o.forEach((o=>{var i,n;const s=o.getAttribute("data-layoutitemid");if((t.layoutId!==e.id||t.layoutItemId!==s)&&(null===(i=e.order)||void 0===i?void 0:i.includes(s))){if(!(null===(n=e.content[s].setting)||void 0===n?void 0:n.isFloating)){const t=a.utils.relativeClientRect(o.getBoundingClientRect(),this.domRect);t.id=s,this.childRects.push(t)}}})),this.childRects.sort(((t,e)=>t.top-e.top))}createItem(o,i,n,a){if(null==o?void 0:o.isPending)return null;const{layouts:s,layout:l,itemDraggable:r,itemSelectable:d}=this.props,u=function(t){const{layoutId:o,layoutItemId:i}=t,n=(0,e.getAppConfigAction)().appConfig.layouts[o];let a=!1;return n.order.some((t=>{var e;const o=n.content[t];if(!(null===(e=o.setting)||void 0===e?void 0:e.isFloating)&&!o.isPending)return a=t===i,!0})),a}({layoutId:l.id,layoutItemId:o.id}),c=function(t){var o;const{layoutId:i,layoutItemId:n}=t,a=(0,e.getAppConfigAction)().appConfig.layouts[i];let s=!1;for(let t=a.order.length-1;t>=0;t--){const e=a.order[t],i=a.content[e];if(!(null===(o=i.setting)||void 0===o?void 0:o.isFloating)&&!i.isPending){s=e===n;break}}return s}({layoutId:l.id,layoutItemId:o.id}),p=o.setting;return o.type===t.LayoutItemType.ScreenGroup?(0,t.jsx)(Vl,{key:`${l.id}_${o.id}`,itemIndex:n,isFirst:u,isLast:c,layoutId:l.id,layoutItemId:o.id,layoutItem:o,theme:this.pageContext.builderTheme,formatMessage:this.pageContext.formatMessage}):(null==p?void 0:p.isFloating)?(0,t.jsx)(cl,{key:`${l.id}_${o.id}`,index:n,total:i,builderTheme:this.builderTheme,layouts:s,layoutId:l.id,layoutItemId:o.id,layoutItem:o,gutter:a.gutter,draggable:r,selectable:d,onDropAtBoundary:this.handleDropAtBoundary,formatMessage:this.pageContext.formatMessage}):(0,t.jsx)(dl,{key:`${l.id}_${o.id}`,index:n,isFirst:u,isLast:c,builderTheme:this.builderTheme,layouts:s,layoutId:l.id,layoutItemId:o.id,layoutItem:o,gutter:a.gutter,draggable:r,selectable:d,onDropAtBoundary:this.handleDropAtBoundary,formatMessage:this.pageContext.formatMessage})}getActionStyle(){return t.css`
      height: 200px;
      padding: 1rem;
      pointer-events: none;
      z-index: 1;
      .btn-text {
        line-height: 32px;
      }
      .btn {
        margin-right: 2rem;
        background: ${this.builderTheme.ref.palette.neutral[600]};
        &:hover {
          background: ${this.builderTheme.ref.palette.neutral[700]};
        }
      }
      .action-item {
        width: 32px;
      }

      .action-seprator {
        .sep {
          width: 65px;
          height: 1px;
          background-color: ${this.builderTheme.ref.palette.neutral[1100]};
        }
        .btn-text {
          margin: 0 13px;
        }
      }
    `}getStyle(){const{builderTheme:e}=this.pageContext;return t.css`
      & > .trail-container > .builder-layout-item {
        margin-bottom: 10px;
        border-top: 1px dashed ${t.polished.rgba(e.ref.palette.neutral[1e3],.6)};
        border-bottom: 1px dashed ${t.polished.rgba(e.ref.palette.neutral[1e3],.6)};
        z-index: 0;

        .widget-context-menu {
          width: 100%;
          height: auto;
          top: 0;
        }

        &.selected, &.floating {
          z-index: 1;
        }
      }

      body:not(.design-mode) & {
        & > .trail-container > .builder-layout-item {
          margin-bottom: 0;
          border-top: none;
          border-bottom: none;
        }
      }
    `}createActions(e){const{viewOnly:o,rootLayoutId:i}=this.pageContext,{layout:n}=this.props,a=!this.pageContext.isHeader&&!this.pageContext.isFooter;return this.state.isLoadingTemplate||!a||o||n.id!==i?null:(0,t.jsx)(Xl,{pageContext:this.pageContext,browserSizeMode:this.props.browserSizeMode,blockOnly:e,onPageTemplateSelected:this.handlePageTemplateSelected,onBlockTemplateSelected:this.handleBlockTemplateSelected,onScreenTemplateSelected:this.handleScreenTemplateSelected})}render(){const{layout:e,className:i,isPageItem:n,layouts:s,mainSizeMode:l,browserSizeMode:r}=this.props;if(null==e)return null;const d=(0,t.classNames)("layout flow-layout w-100",i),u={display:this.state.isDragover?"block":"none"};return(0,t.jsx)(a.PageContext.Consumer,null,(i=>{var c;this.builderTheme=i.builderTheme,this.maxPageWidth=i.maxWidth,this.pageContext=i;let p=e;s[r]!==e.id&&null!=this.layoutTransform&&(p=this.layoutTransform(e,l,r));const h=null!==(c=p.order)&&void 0!==c?c:[],g=t.lodash.assign({},os,p.setting),m=Object.assign({position:"relative"},o.styleUtils.toCSSStyle(g.style));return(0,t.jsx)("div",{className:d,ref:t=>this.ref=t,css:this.getStyle(),style:m,"data-layoutid":e.id,onClick:this.handleActivate,onMouseDown:this.handleMouseDown},(0,t.jsx)(t.IntersectionContext.Provider,{value:{monitor:!0}},(0,t.jsx)(t.OneByOneAnimation,{oid:p.id,"data-layoutid":p.id,className:"trail-container d-flex flex-column align-items-center",css:t.css`
                    width: 100%;
                  `},!i.viewOnly&&(0,t.jsx)(Ve,{css:ql,layouts:this.props.layouts,isRepeat:this.props.isRepeat,highlightDragover:!n,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect}),h.length>0&&h.map(((t,e)=>this.createItem(p.content[t],h.length,e,g))))),!this.state.isLoadingTemplate&&!i.viewOnly&&a.utils.isEmptyLayout(p)&&e.id===i.rootLayoutId&&this.createActions(!1),h.length>0&&this.createActions(!0),this.state.isLoadingTemplate&&(0,t.jsx)(o.Loading,{type:o.LoadingType.Primary}),(0,t.jsx)("canvas",{css:Jl,style:u,ref:t=>this.canvasRef=t}))}))}}const Kl=t.ReactRedux.connect(a.utils.mapStateToLayoutProps)(Ql);var tr=p(2046),er=p.n(tr),or=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const ir=e=>{const o=window.SVG,{className:i}=e,n=or(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:a,src:er()},n)):t.React.createElement("svg",Object.assign({className:a},n))},nr=t.css`
  .resize-handler {
    height: ${16}px;
    width: 100%;
    cursor: ns-resize;
    position: absolute;
  }
`,ar=t.css`
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
`;function sr(e){return t.css`
    .edit-btn {
      background: ${e.sys.color.primary.main};
      color: ${e.ref.palette.neutral[1100]};
      border-radius: 2px;
      &:hover {
        background: ${e.sys.color.primary.main};
        color: ${e.ref.palette.black};
      }
    }
  `}function lr(){(0,t.getAppStore)().dispatch(t.appActions.activePagePartChanged(t.PagePart.Header))}function rr(){(0,t.getAppStore)().dispatch(t.appActions.activePagePartChanged(t.PagePart.Footer))}function dr(){(0,t.getAppStore)().dispatch(t.appActions.activePagePartChanged(t.PagePart.Body))}function ur(){const e=(0,t.getAppStore)().getState(),o=e.appConfig.header.layout;return a.searchUtils.findLayoutId(o,e.browserSizeMode,e.appConfig.mainSizeMode)}function cr(){const e=(0,t.getAppStore)().getState(),o=e.appConfig.footer.layout;return a.searchUtils.findLayoutId(o,e.browserSizeMode,e.appConfig.mainSizeMode)}function pr(e){var o;const i=(0,t.getAppStore)().getState(),n=null===(o=i.appConfig.dialogs[e])||void 0===o?void 0:o.layout;return a.searchUtils.findLayoutId(n,i.browserSizeMode,i.appConfig.mainSizeMode)}function hr(t){return Object.keys(t).find((e=>t[e]))}function gr(e,o,i,n,a){var s,l;return t.css`
    ${nr};
    ${sr(n)};
    position: relative;
    z-index: 0;
    top: 0;
    display: ${i?"flex":"none"};
    width: 100%;
    height: auto;
    min-height: ${parseFloat(o)}px;
    overflow: hidden;
    background-color: ${e.backgroundColor||(null===(s=a.comp)||void 0===s?void 0:s.Header.root.vars.bg)||"transparent"};
    background-image: ${e.backgroundIMage};
    background-position: ${e.backgroundPosition};
    color: ${null===(l=a.comp)||void 0===l?void 0:l.Header.root.vars.color};
    border-bottom: 1px dashed ${t.polished.rgba(n.ref.palette.white,.12)};
    flex: 0 0 auto;

    &:hover {
      .edit-mask {
        display: flex;
      }
    }

    body.lock-layout &,
    body:not(.design-mode) & {
      border-bottom: none;
      > .resize-handler {
        display: none !important;
      }
    }
    body:not(.design-mode) & {
      position: ${e.sticky?"sticky":"relative"};
      z-index: ${e.sticky?2:"0"};

      .edit-mask, .edit-mask-all {
        display: none !important;
      }
    }
  `}function mr(i){const{header:n,headerVisible:s,browserSizeMode:l,mainSizeMode:r,activePagePart:d,pageContext:u,onHeightChange:c}=i,p=t.ReactRedux.useSelector((e=>{var o;return(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design})),h=t.React.useRef(null),g=n.height[l]||n.height[r]||75,m=n.layout,y=!m[l],f=u.builderTheme;t.React.useEffect((()=>{let t;return h.current&&(t=function(t){let o,i;return(0,Tt.interact)(t).origin("parent").resizable({inertia:!1,edges:{bottom:".resize-handler"},onstart:e=>{e.stopPropagation(),o=0,i=t.getBoundingClientRect().height,t.style.minHeight="0px"},onmove:e=>{e.stopPropagation();const n=e.deltaRect;o+=n.height,t.style.height=`${i+o}px`},onend:n=>{n.stopPropagation(),t.style.height=null,t.style.minHeight=null,(0,e.getAppConfigAction)().editHeaderProperty(`height.${a.utils.getCurrentSizeMode()}`,Math.round(i+o)).exec()}})}(h.current)),()=>{t&&t.unset()}}),[]);const v=ur(),I=t.React.useMemo((()=>Object.assign(Object.assign({},u),{isHeader:!0,rootLayoutId:v,viewOnly:y||p&&d!==t.PagePart.Header})),[u,v,y,d,p]),x=t.React.useCallback(((t,e)=>{c(Math.round(e))}),[c]);return(0,t.jsx)(a.PageContext.Provider,{value:I},(0,t.jsx)("div",{className:"header",css:gr(n,g,s,u.builderTheme,u.theme),ref:t=>h.current=t},(0,t.jsx)("div",{className:"w-100 h-100",css:t.css`
            overflow: auto;
            display: flex;
            position: relative;
            z-index: 0;
            min-height: ${parseFloat(g)}px;
          `},(0,t.jsx)(no,{layouts:m,isPageItem:!0,visible:s})),!y&&(0,t.jsx)("span",{className:"resize-handler",css:t.css`
              bottom: ${-8}px;
              z-index: 1;
            `}),d!==t.PagePart.Header&&!y&&(0,t.jsx)("div",{className:"edit-mask-all",css:t.css`
              ${ar};
              background: ${d===t.PagePart.Body?"transparent":t.polished.rgba(f.ref.palette.neutral[500],.6)};
              z-index: 1;
            `,onClick:dr}),d===t.PagePart.Body&&(!y||l===r)&&(0,t.jsx)("div",{className:"edit-mask justify-content-center align-items-center",css:t.css`
              ${ar};
              background: ${t.polished.rgba(f.ref.palette.neutral[500],.6)};
              z-index: 1;
              display: none;
            `},(0,t.jsx)(o.Button,{className:"edit-btn btn-large border-0",onClick:lr},(0,t.jsx)(ir,{size:"m"}),u.formatMessage("editHeader"))),(0,t.jsx)(t.ReactResizeDetector,{handleHeight:!0,handleWidth:!1,onResize:x})))}function yr(e,o,i,n,a){var s,l;return t.css`
    ${nr};
    ${sr(n)};
    display: ${i?"flex":"none"};
    position: relative;
    width: 100%;
    height: auto;
    min-height: ${parseFloat(o)}px;
    overflow: hidden;
    background-color: ${e.backgroundColor||(null===(s=a.comp)||void 0===s?void 0:s.Footer.root.vars.bg)||"transparent"};
    background-image: ${e.backgroundIMage};
    background-position: ${e.backgroundPosition};
    color: ${null===(l=a.comp)||void 0===l?void 0:l.Footer.root.vars.color};
    border-top: 1px dashed ${t.polished.rgba(n.ref.palette.white,.12)};
    z-index: 0;

    &:hover {
      .edit-mask {
        display: flex;
      }
    }

    body.lock-layout &,
    body:not(.design-mode) & {
      > .resize-handler {
        display: none !important;
      }
    }
    body:not(.design-mode) & {
      .edit-mask, .edit-mask-all {
        display: none !important;
      }
    }
  `}function fr(i){const{footer:n,footerVisible:s,browserSizeMode:l,mainSizeMode:r,activePagePart:d,pageContext:u,onHeightChange:c}=i,p=t.ReactRedux.useSelector((e=>{var o;return(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design})),h=t.React.useRef(null),g=n.height[l]||n.height[r]||75,m=n.layout,y=!m[l],f=u.builderTheme;t.React.useEffect((()=>{let t;return h.current&&(t=function(t){let o,i;return(0,Tt.interact)(t).origin("parent").resizable({inertia:!1,edges:{top:".resize-handler"},onstart:e=>{e.stopPropagation(),o=0,i=t.getBoundingClientRect().height},onmove:e=>{e.stopPropagation();const n=e.deltaRect;o+=n.height,t.style.height=`${i+o}px`},onend:n=>{n.stopPropagation(),t.style.height=null,(0,e.getAppConfigAction)().editFooterProperty(`height.${a.utils.getCurrentSizeMode()}`,Math.round(i+o)).exec()}})}(h.current)),()=>{t&&t.unset()}}),[]);const v=cr(),I=t.React.useMemo((()=>Object.assign(Object.assign({},u),{isFooter:!0,rootLayoutId:v,viewOnly:y||p&&d!==t.PagePart.Footer})),[u,v,y,d,p]),x=t.React.useCallback(((t,e)=>{c(Math.round(e))}),[c]);return(0,t.jsx)(a.PageContext.Provider,{value:I},(0,t.jsx)("div",{className:"footer",css:yr(n,g,s,u.builderTheme,u.theme),ref:t=>h.current=t},!y&&(0,t.jsx)("span",{className:"resize-handler",css:t.css`
              top: ${-8}px;
              z-index: 1;
            `}),(0,t.jsx)("div",{className:"w-100 h-100",css:t.css`
            overflow: auto;
            display: flex;
            position: relative;
            z-index: 0;
            min-height: ${parseFloat(g)}px;
          `},(0,t.jsx)(no,{layouts:m,isPageItem:!0,visible:s})),d!==t.PagePart.Footer&&!y&&(0,t.jsx)("div",{className:"edit-mask-all",css:t.css`
              ${ar};
              background: ${d===t.PagePart.Body?"transparent":t.polished.rgba(f.ref.palette.neutral[500],.6)};
              z-index: 1;
            `,onClick:dr}),d===t.PagePart.Body&&(!y||l===r)&&(0,t.jsx)("div",{className:"edit-mask justify-content-center align-items-center",css:t.css`
              ${ar};
              background: ${t.polished.rgba(f.ref.palette.neutral[500],.6)};
              z-index: 1;
              display: none;
            `},(0,t.jsx)(o.Button,{className:"edit-btn btn-large border-0",onClick:rr},(0,t.jsx)(ir,{size:"m"}),u.formatMessage("editFooter"))),(0,t.jsx)(t.ReactResizeDetector,{handleHeight:!0,handleWidth:!1,onResize:x})))}function vr(e){let o,i,n;switch(null==e?void 0:e.position){case t.FixedPosition.TopLeft:o=t.css`top: 0; left: 0; bottom: auto; right: auto;`;break;case t.FixedPosition.TopRight:o=t.css`top: 0; left: auto; bottom: auto; right: 0;`;break;case t.FixedPosition.BottomLeft:o=t.css`top: auto; left: 0; bottom: 0; right: auto;`;break;case t.FixedPosition.BottomRight:o=t.css`top: auto; left: auto; bottom: 0; right: 0;`;break;case t.FixedPosition.TopCenter:o=t.css`top: 0; left: 50%; bottom: auto; right: auto;`;break;case t.FixedPosition.BottomCenter:o=t.css`top: auto; left: 50%; bottom: 0; right: auto;`;break;case t.FixedPosition.MiddleLeft:o=t.css`top: 50%; left: 0; bottom: auto; right: auto;`;break;case t.FixedPosition.MiddleRight:o=t.css`top: 50%; left: auto; bottom: auto; right: 0;`;break;case t.FixedPosition.MiddleCenter:o=t.css`top: 50%; left: 50%; bottom: auto; right: auto;`;break;default:o=t.css`top: 0; left: 0; bottom: auto; right: auto;`}return e.widthMode===C.Stretch&&(i=t.css`width:auto;left:${e.left};right:${e.right};`),e.heightMode===C.Stretch&&(n=t.css`height:auto;top:${e.top};bottom:${e.bottom};`),t.css`
    position: fixed;
    ${o}
    width: ${null==e?void 0:e.width};
    height: ${null==e?void 0:e.height};
    ${i};
    ${n}
    overflow: visible;
    z-index: 2;
  `}var Ir=p(9238),xr=p.n(Ir),br=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const wr=e=>{const o=window.SVG,{className:i}=e,n=br(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:a,src:xr()},n)):t.React.createElement("svg",Object.assign({className:a},n))},{animated:Sr,useSpring:Cr}=t.spring,Rr=t.css`
  position: relative;
  display: flex;
  background-color: var(--ref-palette-white);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  .panel-header {
    background-color: var(--sys-color-primary-main);
    color: var(--ref-palette-white);
    font-weight: 500;
    font-size: 0.875rem;
    height: 36px;
    .actions .jimu-btn {
      color: var(--sys-color-primary-light);
      &:hover {
        color: var(--ref-palette-white);
      }
    }
  }
  .panel-content {
    position: relative;
    overflow: hidden;

    .widget-content {
      z-index: 0;
    }

    .widget-mask {
      position: absolute;
      background: transparent;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 1;
    }
  }
`,Tr=[{name:"preventOverflow",enabled:!0,options:{boundary:"viewport",altAxis:!0}},{name:"flip",enabled:!0,options:{boundary:"viewport",fallbackPlacements:(0,o.getFallbackPlacementsModifier)(["top-start","bottom-start"],!0).options.fallbackPlacements}}];function Mr(e){const{layoutId:i,layoutItemId:n,controllerId:a,minimized:s,onClick:l,onToggle:r,onClose:d}=e,[c,p]=t.React.useState(!1),h=t.React.useRef(),g=t.hooks.useTranslation(),m=t.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode===t.AppMode.Design)),y=t.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode===t.AppMode.Express)),f=t.ReactRedux.useSelector((t=>{var e;const o=t.appRuntimeInfo.selection;if(!o)return!1;if(i===o.layoutId&&n===o.layoutItemId)return!0;return null!=(null===(e=h.current)||void 0===e?void 0:e.querySelector(`div.builder-layout-item[data-layoutid="${o.layoutId}"][data-layoutitemid="${o.layoutItemId}"]`))})),v=t.ReactRedux.useSelector((t=>t.appConfig.layouts[i].content[n].widgetId)),I=t.ReactRedux.useSelector((t=>{var e,o,i;const n=t.appConfig.widgets[v];return(null===(o=null===(e=null==n?void 0:n.manifest)||void 0===e?void 0:e.properties)||void 0===o?void 0:o.hasEmbeddedLayout)&&Object.keys(null!==(i=n.layouts)&&void 0!==i?i:{}).length>0})),x=t.ReactRedux.useSelector((e=>{var o;const i=e.appConfig.widgets[v];return(null===(o=null==i?void 0:i.manifest)||void 0===o?void 0:o.widgetType)!==t.WidgetType.Layout})),b=t.ReactRedux.useSelector((t=>{var e,o,i;const n=t.appConfig.widgets[v];return null!==(i=null===(o=null===(e=null==n?void 0:n.manifest)||void 0===e?void 0:e.properties)||void 0===o?void 0:o.supportInlineEditing)&&void 0!==i&&i})),w=t.ReactRedux.useSelector((t=>{const e=t.widgetsRuntimeInfo[v];return b&&(null==e?void 0:e.isInlineEditing)})),S=t.ReactRedux.useSelector((e=>{var o;const i=null===(o=e.widgetsRuntimeInfo)||void 0===o?void 0:o[v];return(null==i?void 0:i.state)===t.WidgetState.Opened})),C=t.ReactRedux.useSelector((t=>{const e=t.appConfig.widgets[v];return null==e?void 0:e.label}),t.ReactRedux.shallowEqual),R=t.ReactRedux.useSelector((t=>{var e;const o=t.widgetsRuntimeInfo[v];return null!==(e=null==o?void 0:o.isClassLoaded)&&void 0!==e&&e})),T=t.ReactRedux.useSelector((t=>t.appConfig.controllerPanels[a].effect)),M=t.React.useMemo((()=>{var e,o;return(null==T?void 0:T.type)&&T.type!==t.AnimationType.None?(0,t.getAnimationEffect)(T.type,{configType:null===(e=T.option)||void 0===e?void 0:e.configType,direction:null===(o=T.option)||void 0===o?void 0:o.direction}):null}),[T]),[A,P]=Cr((()=>t.DEFAULT_ANIMATION_PROPS),[M]),L=t.React.useCallback((t=>{d(t,v);const e=document.querySelector(`.widget-controller .avatar-card[data-widgetid='${v}']`).querySelector("button");null==e||e.focus()}),[v,d]);(0,o.useTrapFocusLoop)(h,!0,!0,!1,c&&S);const j=t.React.useCallback((e=>{var o;e.stopPropagation();const a=null===(o=(0,t.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.selection;a&&a.layoutId===i&&a.layoutItemId===n||(0,t.getAppStore)().dispatch(t.appActions.selectionChanged({layoutId:i,layoutItemId:n})),null==l||l(e)}),[i,n,l]),z=t.React.useCallback((e=>{e.stopPropagation(),b&&(0,t.getAppStore)().dispatch(t.appActions.setWidgetIsInlineEditingState(v,!0))}),[v,b]);let N;t.React.useEffect((()=>{!S&&!f||c||(p(!0),t.WidgetManager.getInstance().loadWidgetClass(v).catch((t=>{console.log(t)})))}),[S,f,v,c]),t.React.useEffect((()=>{S&&!m&&null!=M&&P.start(Object.assign(Object.assign({},M.animateProps()),{onRest:()=>{t.lodash.defer((()=>{h.current.style.clipPath=null,h.current.parentElement.style.clipPath=null}))}}))}),[P,S,m,M]);const k=m?f:S;c&&R&&(N=t.WidgetManager.getInstance().getWidgetClass(v));const $=m&&!w&&x&&!I,O=(0,u.getTheme2)(),E=(0,t.getAppStore)().getState().appConfig.layouts[i].content[n];return(0,t.jsx)(Sr.div,{className:(0,t.classNames)("controller-panel flex-column w-100 h-100",{"d-none":!c||!k}),css:Rr,style:null!=M?A:null,onClick:j,onDoubleClick:z,ref:h},(0,t.jsx)("div",{className:"panel-header d-flex align-items-center flex-shrink-0 px-4"},(0,t.jsx)("div",{className:"label d-flex align-items-center h-100"},(0,t.jsx)("div",{className:"text-truncate"},C)),(0,t.jsx)("div",{className:"actions ml-auto d-flex align-items-center"},(0,t.jsx)(o.Button,{className:"p-0",icon:!0,type:"tertiary",size:"sm",onClick:r,title:g(s?"expand":"collapse"),"aria-label":g(s?"expand":"collapse")},(0,t.jsx)(wr,{css:t.css`
              transform: rotate(${s?180:0}deg);
              transition: transform 0.3s ease-in-out;
            `})),(0,t.jsx)(o.Button,{className:"p-0 ml-2",icon:!0,type:"tertiary",size:"sm",onClick:L,title:g("close"),"aria-label":g("close")},(0,t.jsx)(na,null)))),(0,t.jsx)("div",{className:"panel-content d-flex flex-grow-1"},!R&&(0,t.jsx)(o.Loading,{type:o.LoadingType.Donut}),N&&(0,t.jsx)("div",{className:"w-100 h-100 widget-content p-1"},(0,t.jsx)(t.ErrorBoundary,null,(0,t.jsx)(N,{widgetId:v,layoutId:i,layoutItemId:n}),(m||y)&&(0,t.jsx)(Te,{layoutId:i,layoutItem:E,refElement:h.current,modifiers:Tr,builderTheme:O,formatMessage:g,showDefaultTools:!1}))),$&&(0,t.jsx)("div",{className:"widget-mask"})))}const{useSpring:Ar}=t.spring;const{animated:Pr}=t.spring;function Lr(o){var i,n,s,l;const{controllerId:r,selected:d,innerSelected:c,isDesignMode:p}=o,h=t.React.useRef(),[g,m]=t.React.useState(!1),[y,f]=t.React.useState(),[v,I]=t.React.useState(!1),x=t.ReactRedux.useSelector((t=>{const e=t.appConfig.widgets[r],o=e.manifest.layouts[0].name,i=e.layouts[o];return a.searchUtils.findLayoutId(i,t.browserSizeMode,t.appConfig.mainSizeMode)})),b=t.ReactRedux.useSelector((t=>{var e;const o=t.appConfig.layouts[x];if(!o)return"";const i=Object.keys(null!==(e=o.content)&&void 0!==e?e:{}).filter((t=>{const e=o.content[t];return null!=(null==e?void 0:e.widgetId)&&!e.isPending}));return i.sort(),i.join(",")})),w=t.ReactRedux.useSelector((e=>{var o,i;if(p)return!1;const n=Object.keys(null!==(o=e.widgetsRuntimeInfo)&&void 0!==o?o:{}).filter((o=>e.widgetsRuntimeInfo[o].state===t.WidgetState.Opened)),a=e.appConfig.layouts[x];return Object.keys(null!==(i=a.content)&&void 0!==i?i:{}).some((t=>{const e=a.content[t];return null!=(null==e?void 0:e.widgetId)&&!e.isPending&&n.includes(e.widgetId)}))})),S=t.React.useMemo((()=>b.split(",").filter((t=>""!==t))),[b]),R=t.ReactRedux.useSelector((t=>t.appConfig.controllerPanels[r])),T=function(e){const{controllerId:o}=e,i=t.ReactRedux.useSelector((t=>{var e;const i=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.animationPreview;return(null==i?void 0:i.controllerId)===o?i.id:-1})),n=t.ReactRedux.useSelector((t=>t.appConfig.controllerPanels[o].effect)),a=t.React.useMemo((()=>{var e,o;return(null==n?void 0:n.type)&&n.type!==t.AnimationType.None?(0,t.getAnimationEffect)(n.type,{configType:null===(e=n.option)||void 0===e?void 0:e.configType,direction:null===(o=n.option)||void 0===o?void 0:o.direction}):null}),[n]),[s,l]=Ar((()=>t.DEFAULT_ANIMATION_PROPS),[a]);return t.React.useEffect((()=>{i>0&&null!=a&&l.start(Object.assign(Object.assign({},a.animateProps()),{onRest:()=>{(0,t.getAppStore)().dispatch(t.appActions.clearAnimationPreview())}}))}),[l,i,a]),null!=a?s:null}({controllerId:r});t.React.useEffect((()=>{let t,o;const i=(e,i,n)=>{t=i,o=n,m(!0),f({dx:0,dy:0,dw:0,dh:0,width:i,height:n})},n=(e,i,n,a,s)=>{f({dx:i,dy:n,dw:a,dh:s,width:t+a,height:o+s})},s=(i,n,s,l,d)=>{m(!1),function(t,o,i,n,s,l,r){const d=(0,e.getAppConfigAction)();let u=d.appConfig.controllerPanels[t];u.widthMode===a.LayoutItemSizeModes.Stretch?0!==n&&(u=0!==o?a.utils.isPercentage(u.left)?u.set("left",`${(parseFloat(u.left)+100*o/window.innerWidth).toFixed(2)}%`):u.set("left",`${Math.round(parseFloat(u.left)+o)}px`):a.utils.isPercentage(u.right)?u.set("right",`${(parseFloat(u.right)-100*n/window.innerWidth).toFixed(2)}%`):u.set("right",`${Math.round(parseFloat(u.right)-n)}px`)):u=a.utils.isPercentage(u.width)?u.set("width",`${(100*l/window.innerWidth).toFixed(2)}%`):u.set("width",`${Math.round(l)}px`),u.heightMode===a.LayoutItemSizeModes.Stretch?0!==s&&(u=0!==i?a.utils.isPercentage(u.top)?u.set("top",`${(parseFloat(u.top)+100*i/window.innerHeight).toFixed(2)}%`):u.set("top",`${Math.round(parseFloat(u.top)+i)}px`):a.utils.isPercentage(u.bottom)?u.set("bottom",`${(parseFloat(u.bottom)-100*s/window.innerHeight).toFixed(2)}%`):u.set("bottom",`${Math.round(parseFloat(u.bottom)-s)}px`)):u=a.utils.isPercentage(u.height)?u.set("height",`${(100*r/window.innerHeight).toFixed(2)}%`):u.set("height",`${Math.round(r)}px`),d.editControllerPanel(t,u).exec()}(r,n,s,l,d,t+l,o+d)};if(h.current){Pt((0,Tt.interact)(h.current).origin("parent"),{layoutItemId:"controller",restrictEdges:!0,onResizeStart:i,onResizing:n,onResizeEnd:s})}return()=>{}}),[r]);const M=t.React.useCallback((t=>{t.stopPropagation()}),[]),A=t.React.useCallback((()=>{I(!v)}),[v]),P=t.React.useCallback(((e,o)=>{e.stopPropagation(),(0,t.getAppStore)().dispatch(t.appActions.selectionChanged(null)),(0,t.getAppStore)().dispatch(t.appActions.closeWidget(o))}),[]),L=p?d||c:w;let j=T;const z=function(e){if(null==e)return null;const{position:o,offsetX:i=0,offsetY:n=0}=e;let a;return e.widthMode!==C.Stretch&&(0!==i&&(a=`translateX(${i}px)`),o!==t.FixedPosition.TopCenter&&o!==t.FixedPosition.MiddleCenter&&o!==t.FixedPosition.BottomCenter||(a=null!=a?`${a} translateX(-50%)`:"translateX(-50%)")),e.heightMode!==C.Stretch&&(0!==n&&(a=null!=a?`${a} translateY(${n}px)`:`translateY(${n}px)`),o!==t.FixedPosition.MiddleLeft&&o!==t.FixedPosition.MiddleCenter&&o!==t.FixedPosition.MiddleRight||(a=null!=a?`${a} translateY(-50%)`:"translateY(-50%)")),a}(R);return null!=z&&(j=Object.assign({},{transform:z},T)),0===S.length?null:(0,t.jsx)(Pr.div,{ref:h,style:j,css:(()=>{const e=(0,u.getTheme2)();if(g){let o,i;return R.widthMode===a.LayoutItemSizeModes.Stretch&&(o=t.css`
          left: calc(${R.left} + ${y.dx}px);
          right: ${0===y.dx?`calc(${R.right} - ${y.dw}px)`:R.right};
        `),R.heightMode===a.LayoutItemSizeModes.Stretch&&(i=t.css`
          top: calc(${R.top} + ${y.dy}px);
          bottom: ${0===y.dy?`calc(${R.bottom} - ${y.dh}px)`:R.bottom};
        `),t.css`
        ${vr(R)};
        display: ${L?"block":"none"};
        width: ${R.widthMode!==a.LayoutItemSizeModes.Stretch?y.width+"px":"auto"};
        height: ${R.heightMode!==a.LayoutItemSizeModes.Stretch?y.height+"px":"auto"};
        ${o}
        ${i}
        border: ${d?"1px solid var(--primary-600)":"none"};
        background: ${d?t.polished.rgba(e.sys.color.primary.main,.2):"transparent"};
      `}return t.css`
      ${vr(R)};
      display: ${L?"block":"none"};
      height: ${v?"36px":null==R?void 0:R.height};
      border: ${d?"1px solid var(--primary-600)":"none"};
      transition: height 0.3s ease-in-out;
      background: ${d?t.polished.rgba(e.sys.color.primary.main,.2):"transparent"};
    `})(),onClick:M,className:"panel-container"},d&&(0,t.jsx)(se,{left:!(null===(i=null==R?void 0:R.position)||void 0===i?void 0:i.includes("LEFT"))||R.widthMode===a.LayoutItemSizeModes.Stretch,right:!(null===(n=null==R?void 0:R.position)||void 0===n?void 0:n.includes("RIGHT"))||R.widthMode===a.LayoutItemSizeModes.Stretch,top:!(null===(s=null==R?void 0:R.position)||void 0===s?void 0:s.includes("TOP"))||R.heightMode===a.LayoutItemSizeModes.Stretch,bottom:!(null===(l=null==R?void 0:R.position)||void 0===l?void 0:l.includes("BOTTOM"))||R.heightMode===a.LayoutItemSizeModes.Stretch}),(0,t.jsx)(t.React.Fragment,null,S.map((e=>(0,t.jsx)(Mr,{key:e,controllerId:r,layoutId:x,layoutItemId:e,minimized:v,onToggle:A,onClose:P})))))}function jr(e){const{pageId:o}=e,i=t.ReactRedux.useSelector((e=>function(e,o,i){var n;const a=Object.keys(null!==(n=e.controllerPanels)&&void 0!==n?n:{}).filter((n=>{const a=M(e,n,t.LayoutItemType.Widget,i);return null!=a&&(a.type!==t.ContainerType.Page||a.id===o)}));return a.sort(),a.join(",")}(e.appConfig,o,e.browserSizeMode))),n=t.React.useMemo((()=>i.split(",").filter((t=>""!==t))),[i]),a=t.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode===t.AppMode.Design)),[s,l]=t.ReactRedux.useSelector((e=>{var o,i;if(!a)return[null,null];const n=e.appRuntimeInfo.selection;if(!n)return[null,null];const{layoutId:s,layoutItemId:l}=n,r=e.appConfig.layouts[s].content[l];if((null==r?void 0:r.type)===t.LayoutItemType.Widget&&r.widgetId){const t=e.appConfig.widgets[r.widgetId];if("widgets/common/controller/"===(null==t?void 0:t.uri)&&(null===(o=e.appConfig.controllerPanels)||void 0===o?void 0:o[r.widgetId]))return[r.widgetId,null]}const d=o=>{var i,n,a,s,l,r,d,u;switch(null==o?void 0:o.type){case t.LayoutParentType.View:{const t=o.id,l=e.appConfig.views[t].parent,r=e.appConfig.sections[l],d=(null===(n=null===(i=r.parent)||void 0===i?void 0:i[e.browserSizeMode])||void 0===n?void 0:n[0])||(null===(s=null===(a=r.parent)||void 0===a?void 0:a[e.appConfig.mainSizeMode])||void 0===s?void 0:s[0]),u=e.appConfig.layouts[null==d?void 0:d.layoutId];return null==u?void 0:u.parent}case t.LayoutParentType.Widget:{const t=o.id,i=e.appConfig.widgets[t],n=(null===(r=null===(l=i.parent)||void 0===l?void 0:l[e.browserSizeMode])||void 0===r?void 0:r[0])||(null===(u=null===(d=i.parent)||void 0===d?void 0:d[e.appConfig.mainSizeMode])||void 0===u?void 0:u[0]),a=e.appConfig.layouts[null==n?void 0:n.layoutId];return null==a?void 0:a.parent}default:return null}};let u=e.appConfig.layouts[s].parent;for(;u;){if(u.type===t.LayoutParentType.Widget){const t=e.appConfig.widgets[u.id];if("widgets/common/controller/"===(null==t?void 0:t.uri)&&(null===(i=e.appConfig.controllerPanels)||void 0===i?void 0:i[t.id]))return[u.id,r.id]}u=d(u)}return[null,null]}),t.ReactRedux.shallowEqual);return t.React.useEffect((()=>{var e;if(s){const o=(0,t.getAppStore)().getState(),i=Object.keys(null!==(e=o.widgetsRuntimeInfo)&&void 0!==e?e:{}).filter((e=>{const i=o.widgetsRuntimeInfo[e];return i.state===t.WidgetState.Opened&&i.controllerWidgetId!==s}));i.length>0&&(0,t.getAppStore)().dispatch(t.appActions.closeWidgets(i))}}),[s]),t.React.useEffect((()=>{var e;const o=(0,t.getAppStore)().getState(),i=Object.keys(null!==(e=o.widgetsRuntimeInfo)&&void 0!==e?e:{}).filter((e=>o.widgetsRuntimeInfo[e].state===t.WidgetState.Opened));i.length>0&&(0,t.getAppStore)().dispatch(t.appActions.closeWidgets(i))}),[a]),(0,t.jsx)(t.React.Fragment,null,n.map((e=>(0,t.jsx)(Lr,{key:e,isDesignMode:a,selected:s===e&&null===l,innerSelected:s===e&&null!=l,controllerId:e}))))}function zr(e){const{pageJson:o,visible:i,renderedPageId:n,browserSizeMode:s,activePagePart:l,pageContext:r,headerFooterHeight:d}=e,[u,c]=t.React.useState(0),{previewId:p,playMode:h}=t.ReactRedux.useSelector((t=>function(t,e){const o=t.appRuntimeInfo.animationPreview;return(null==o?void 0:o.pageId)===e?{previewId:o.id,playMode:o.playMode}:{previewId:0,playMode:null}}(t,o.id)),t.ReactRedux.shallowEqual),g=t.React.useMemo((()=>function(e,o){if(e){const i=(0,t.getAppStore)().getState().appConfig,n=e.layout[i.mainSizeMode],a=i.layouts[n];if((null==a?void 0:a.type)===t.LayoutType.GridLayout)return o>0?`calc(100% - ${o}px)`:"100%"}return"auto"}(o,d)),[d]),m=o.layout,y=o.oneByOneEffect&&o.oneByOneEffect.type!==t.AnimationType.None?o.oneByOneEffect:null,f=t.ReactRedux.useSelector((e=>{var o;return null===y||(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design})),v=t.ReactRedux.useSelector((t=>null===y?null:t.browserSizeMode)),I=t.React.useRef(y),x=t.React.useRef(v),b=t.React.useRef(i),w=y?!i:null;t.React.useEffect((()=>{I.current=y})),t.React.useEffect((()=>{f&&b.current||c((0,t.getNextAnimationId)())}),[f]),t.React.useEffect((()=>{f||x.current===v||c((0,t.getNextAnimationId)()),x.current=v}),[v,f]),t.React.useEffect((()=>{!f&&b.current!==i&&I.current&&c((0,t.getNextAnimationId)()),b.current=i}),[i]);const S=!m[s];let C;o.mode!==t.PageMode.FitWindow&&o.maxWidth>0&&(C=o.maxWidth);const R=t.React.useMemo((()=>{const e=(0,t.getAppStore)().getState();let i;return o.layout&&(i=a.searchUtils.findLayoutId(o.layout,s,e.appConfig.mainSizeMode)),Object.assign(Object.assign({},r),{maxWidth:C,viewOnly:S,rootLayoutId:i,pageId:n})}),[r,S,C,n,o.layout,s]),T=t.React.useMemo((()=>({setting:!f||p>0?y:null,revert:w,playId:p>0?p:u,oid:R.rootLayoutId,playMode:h,onContextAnimationEnd:()=>{p>0?(0,t.getAppStore)().dispatch(t.appActions.clearAnimationPreview()):c(-1)}})),[f,w,u,p,y,R.rootLayoutId]),M=t.React.useCallback((()=>t.css`
      display: ${i?"flex":"none"};
      position: relative;
      background-color: ${o.bodyBackgroundColor||"transparent"};
      z-index: 1;
      flex: 1 0 auto;
      height: ${g};

      body:not(.design-mode) & {
        .edit-mask {
          display: none !important;
        }
      }

      .exb-drop-area {
        pointer-events: ${l!==t.PagePart.Body?"none !important":"auto"}
      }
    `),[i,g,l,o.bodyBackgroundColor]);if(m)return(0,t.jsx)(a.PageContext.Provider,{key:o.id,value:R},(0,t.jsx)(a.PageVisibilityContext.Provider,{value:i},(0,t.jsx)("div",{id:o.id,"data-pageid":o.id,className:"page",css:M()},(0,t.jsx)(t.AnimationContext.Provider,{value:T},(0,t.jsx)(no,{layouts:m,isPageItem:!0,visible:i,className:"w-100",css:t.css`
                margin: 0 auto;
                background-color: transparent;
                z-index: 0;
              `})),s!==t.BrowserSizeMode.Small&&(0,t.jsx)(jr,{pageId:o.id}),l!==t.PagePart.Body&&(0,t.jsx)("div",{className:"edit-mask",css:t.css`
                ${ar};
                background: ${t.polished.rgba(r.theme.ref.palette.neutral[1100],.6)};
                z-index: 1;
              `,onClick:dr}))))}function Nr(e){var o,i;let n=(0,t.getAppStore)().getState();window.jimuConfig.isBuilder&&(n=n.appStateInBuilder);const a=null===(o=n.appRuntimeInfo.screenGroupNavInfos)||void 0===o?void 0:o[e];return null!==(i=null==a?void 0:a.activeIndex)&&void 0!==i?i:0}const kr=[{icon:ge(),title:t=>t.formatMessage("duplicateScreen"),visible:()=>at()===t.AppMode.Design&&!st(),onClick:o=>{const{layoutItem:i}=o,n=Nr(i.screenGroupId),a=(0,e.getAppConfigAction)();a.duplicateScreenByIndex(n,i.screenGroupId),a.exec(),(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(i.screenGroupId,n+1))}},{icon:U(),title:t=>t.formatMessage("deleteScreen"),visible:()=>at()===t.AppMode.Design&&!st(),onClick:o=>{const{layoutItem:i}=o,n=Nr(i.screenGroupId),a=(0,e.getAppConfigAction)(),s=a.appConfig.screenGroups[i.screenGroupId].screens.length;a.removeScreenByIndex(n,i.screenGroupId).exec(),n===s-1&&(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(i.screenGroupId,n-1))}}],$r=[mt,yt,pt,ct],Or=[].concat(be,$r);class Er extends e.BaseLayoutService{removeItemFromOrder(t,e){const{layoutId:o,layoutItemId:i}=e,n=t.layouts[o];if(!(null==n?void 0:n.order))return t;let a=[].concat(n.order);return a=a.filter((t=>t!==i)),t.setIn(["layouts",o,"order"],a)}afterItemMoved(t,e,o){let i=super.afterItemMoved(t,e,o);return i=this.removeItemFromOrder(i,e),this.clearEmptyRowInFlowLayout(i,e)}afterItemRemoved(t,e){let o=super.afterItemRemoved(t,e);return o=this.removeItemFromOrder(o,e),this.clearEmptyRowInFlowLayout(o,e)}duplicateItemInSameLayout(t,e,o,i){const n=super.duplicateItemInSameLayout(t,e,o,i);let a=n[0];const s=n[1],l=a.layouts[e.layoutId],r=[].concat(l.order),d=r.indexOf(e.layoutItemId);return r.splice(d,1,e.layoutItemId,s),a=a.setIn(["layouts",e.layoutId,"order"],r),a=this.offsetDupliateItem(a,e.layoutId),[a,s]}getTocStructure(t,o){var i;const n=t.layouts[o],s=a.utils.getCurrentSizeMode();if((null===(i=null==n?void 0:n.order)||void 0===i?void 0:i.length)>0){return[].concat(n.order).filter((t=>!n.content[t].isPending)).map((i=>{const a=n.content[i];return new e.ContentServiceWrapper(t,a).toTocNode({layoutId:o,layoutItemId:i},s)}))}return[]}processAfterItemAdded(t,o,i,n,s,l,r){var d;const u=(0,e.getAppConfigAction)(t),c={left:l.left,width:l.width,height:l.height};return(null===(d=o.layoutInfo)||void 0===d?void 0:d.layoutId)!==i.layoutId&&u.editLayoutItemProperty(i,"setting.autoProps.height",a.LayoutItemSizeModes.Stretch),u.editLayoutItemProperty(i,"bbox",c).adjustOrderOfItem(i,r),u.appConfig}getToolItems(e,o,i){if("view"===(null==i?void 0:i.toLowerCase()))return we;if("screen"===(null==i?void 0:i.toLowerCase()))return kr;return a.searchUtils.findLayoutItem(e,o).type===t.LayoutItemType.Section?Or:$r}offsetDupliateItem(t,e){let o=t;const i=t.layouts[e],n=(t,i)=>parseInt(o.layouts[e].content[t].bbox[i],10),a=(t,i,n)=>{o=o.setIn(["layouts",e,"content",t,"bbox",i],n)},s=Object.keys(i.content).sort(((t,e)=>n(t,"left")-n(e,"left")));let l=0;for(let t=0;t<s.length;t++)l+=n(s[t],"width");if(a(s[0],"left",0),l<=12)for(let t=1;t<s.length;t++)a(s[t],"left",n(s[t-1],"left")+n(s[t-1],"width"));else{const t=l/12;a(s[0],"width",Math.max(1,Math.floor(n(s[0],"width")/t)));for(let e=1;e<s.length;e++)a(s[e],"left",n(s[e-1],"left")+n(s[e-1],"width")),a(s[e],"width",Math.max(1,Math.floor(n(s[e],"width")/t)))}return o}clearEmptyRowInFlowLayout(o,i){var n,s,l;const r=o.layouts[i.layoutId];if((null!==(s=null===(n=null==r?void 0:r.order)||void 0===n?void 0:n.length)&&void 0!==s?s:0)>0)return o;const d=a.searchUtils.getWidgetIdThatUseTheLayoutId(o,i.layoutId);if(d){const i=o.widgets[d];if("row"===(null===(l=null==i?void 0:i.manifest)||void 0===l?void 0:l.name)){const i=a.utils.getCurrentSizeMode(),n=e.widgetService.findParent(o,d,i);if(n){const a=o.layouts[n.layoutId];if((null==a?void 0:a.type)===t.LayoutType.FlowLayout){return e.LayoutServiceProvider.getInstance().getServiceByType(a.type).removeItem(o,n,i,!0,!1)}}}}return o}}const Br=[].concat(be,qn);class Dr extends e.BaseLayoutService{beforeItemRemoved(t,e){const{layoutId:o,layoutItemId:i}=e;let n=t.layouts[o];return n=_n(n,i),t.setIn(["layouts",o],n)}pendItem(t,e){let o=t,i=o.layouts[e.layoutId];return i=_n(i,e.layoutItemId),o=o.setIn(["layouts",e.layoutId],i),i.setting.rootItem===e.layoutItemId&&(o=o.setIn(["layouts",e.layoutId,"setting"],i.setting.without("rootItem"))),o=super.pendItem(o,e),o}duplicateItemInSameLayout(e,o,i,n){const a=super.duplicateItemInSameLayout(e,o,i,n);let s=a[0];const l=a[1],{layoutId:r,layoutItemId:d}=o;let u=s.layouts[r];const c=u.content[d];if(c.parent){const e=Nn(u,c.parent),o=[...e.children],i=o.indexOf(d);if(o.splice(i,0,l),u=En(u,c.parent,"children",o),u=En(u,l,"parent",c.parent),e.gridType===t.GridItemType.Tab)u=On(u,l,+c.bbox.width);else{const t=+c.bbox.width/2;u=On(u,l,t),u=On(u,d,t)}}else u=Fn(u,l,d,t.GridItemType.Row,!1,!1);return s=s.setIn(["layouts",r],u),[s,l]}getTocStructure(t,e){var o;const i=t.layouts[e],n=null===(o=i.setting)||void 0===o?void 0:o.rootItem,s=this.fetchGridNode(t,i,`${n}`,a.utils.getCurrentSizeMode());return null!=s?[s]:[]}getToolItems(e,o,i){if("view"===(null==i?void 0:i.toLowerCase()))return we;if("screen"===(null==i?void 0:i.toLowerCase()))return kr;const n=a.searchUtils.findLayoutItem(e,o);return n.gridType===t.GridItemType.Row||n.gridType===t.GridItemType.Column?wa:n.gridType===t.GridItemType.Tab?[]:n.type===t.LayoutItemType.Section?Br:qn}processAfterItemAdded(t,e,o,i,n,a,s,l){return t}translate(e){return t.i18n.getIntl().formatMessage({id:e})}fetchGridNode(o,i,n,a){var s,l,r,d;const u=null===(s=i.content)||void 0===s?void 0:s[n];if(null==u)return null;const{gridType:c=t.GridItemType.Plain,children:p}=u;if(c===t.GridItemType.Plain){return new e.ContentServiceWrapper(o,u).toTocNode({layoutId:i.id,layoutItemId:n},a)}let h;c===t.GridItemType.Row?h=null!==(l=u.label)&&void 0!==l?l:this.translate("gridRow"):c===t.GridItemType.Column?h=null!==(r=u.label)&&void 0!==r?r:this.translate("gridCol"):c===t.GridItemType.Tab&&(h=null!==(d=u.label)&&void 0!==d?d:this.translate("tabs"));let g=!1;if(u.parent){g=i.content[u.parent].gridType===t.GridItemType.Tab}const m=g&&(c===t.GridItemType.Row||c===t.GridItemType.Column),y={label:h,type:"layoutItem",layoutId:i.id,layoutItemId:n,isLabelReadOnly:!m};return(null==p?void 0:p.length)>0&&(y.children=[...p].map((t=>this.fetchGridNode(o,i,t,a)))),y}}const Fr=[mt,yt,pt,ct],Vr=[].concat($i,Fr),Hr=[].concat($i,be,Fr);class Gr extends e.BaseLayoutService{removeItemFromOrder(t,e){const{layoutId:o,layoutItemId:i}=e,n=t.layouts[o];let a=[].concat(n.order);return a=a.filter((t=>t!==i)),t.setIn(["layouts",o,"order"],a)}afterItemMoved(t,e){return this.removeItemFromOrder(t,e)}afterItemRemoved(t,e){const o=super.afterItemRemoved(t,e);return this.removeItemFromOrder(o,e)}updateBBoxAfterAdd(e,o,i,n,s,l,r){var d,u,c,p,h,g;const m=o.layoutInfo,y=a.searchUtils.findLayoutItem(e,i);let f,v=(0,t.Immutable)(null!==(d=y.setting)&&void 0!==d?d:{});if(null==o.id&&(null==m?void 0:m.layoutId)===i.layoutId){const t=a.searchUtils.findLayoutItem(e,o.layoutInfo),i=null==t?void 0:t.bbox;if(i){f=a.utils.replaceBoundingBox(i,l,n).set("width",i.width).set("height",i.height)}else f=a.utils.replaceBoundingBox(null,l,n)}else if(f=a.utils.replaceBoundingBox(null,l,n),null==o.layoutInfo&&y.type===t.LayoutItemType.Widget&&y.widgetId){const t=e.widgets[y.widgetId];if((!l.width||!l.height)&&(null===(u=t.manifest)||void 0===u?void 0:u.defaultSize)){const{width:e,height:o}=t.manifest.defaultSize;l=Object.assign(Object.assign({},s),{width:e,height:o})}(null===(p=null===(c=t.manifest)||void 0===c?void 0:c.defaultSize)||void 0===p?void 0:p.autoWidth)&&(v=v.setIn(["autoProps","width"],a.LayoutItemSizeModes.Auto)),(null===(g=null===(h=t.manifest)||void 0===h?void 0:h.defaultSize)||void 0===g?void 0:g.autoHeight)&&(v=v.setIn(["autoProps","height"],a.LayoutItemSizeModes.Auto))}const I=Di(f,v,n,s);f=I.bbox,v=I.setting;const x=e.layouts[i.layoutId],b=x.parent.type===t.LayoutParentType.Header,w=x.parent.type===t.LayoutParentType.Footer;if(null==o.layoutInfo&&(b||w)){const t=b?parseInt(`${e.header.height[r]}`):parseInt(`${e.footer.height[r]}`);f=f.set("height",a.utils.toRatio(Math.min(s.height,t),t))}return[f,v]}processAfterItemAdded(t,o,i,n,s,l,r,d){var u;const c=t,{snapResult:p}=d,h=(0,e.getAppConfigAction)(c),[g,m]=this.updateBBoxAfterAdd(c,o,i,s,l,p,n);if(h.editLayoutItemProperty(i,"bbox",a.utils.isRTL()?Bi(g):g).editLayoutItemProperty(i,"setting",m),null!=o.layoutInfo&&o.layoutInfo.layoutId===i.layoutId&&h.editLayoutItemProperty(i,"setting.vCenter",!1).editLayoutItemProperty(i,"setting.hCenter",!1),(null===(u=o.layoutInfo)||void 0===u?void 0:u.layoutId)!==i.layoutId&&h.adjustOrderOfItem(i,null),c.useAutoSortInFixedLayout){const t=zi(h.appConfig.layouts[i.layoutId],s.width,s.height);h.editLayoutProperty(i.layoutId,"order",t.order)}return h.appConfig}duplicateItemInSameLayout(t,e,o,i){const n=super.duplicateItemInSameLayout(t,e,o,i);let a=n[0];const s=n[1],l=a.layouts[e.layoutId],r=[].concat(l.order);return r.push(s),a=a.setIn(["layouts",e.layoutId,"order"],r),a=this.offsetDupliateItem(a,{layoutId:e.layoutId,layoutItemId:s}),[a,s]}getTocStructure(t,o){var i;const n=t.layouts[o],s=a.utils.getCurrentSizeMode();if((null===(i=null==n?void 0:n.order)||void 0===i?void 0:i.length)>0){return[].concat(n.order).filter((t=>!n.content[t].isPending)).map((i=>{const a=n.content[i];return new e.ContentServiceWrapper(t,a).toTocNode({layoutId:o,layoutItemId:i},s)}))}return[]}getToolItems(e,o,i){if("view"===(null==i?void 0:i.toLowerCase()))return we;if("screen"===(null==i?void 0:i.toLowerCase()))return kr;return a.searchUtils.findLayoutItem(e,o).type===t.LayoutItemType.Section?Hr:Vr}offsetDupliateItem(t,e){var o,i;const{layoutId:n,layoutItemId:s}=e,l=t.layouts[n].content[s];let{bbox:r,setting:d}=l;const u=t=>{if(a.utils.isPercentage(t))return`${parseFloat(t)+5}%`;const e=parseInt(t,10);return isNaN(e)?t:e+20};return r=(null===(o=null==d?void 0:d.autoProps)||void 0===o?void 0:o.left)?r.set("right",u(r.right)):r.set("left",u(r.left)),r=(null===(i=null==d?void 0:d.autoProps)||void 0===i?void 0:i.top)?r.set("bottom",u(r.bottom)):r.set("top",u(r.top)),(null==d?void 0:d.hCenter)&&(null==d?void 0:d.vCenter)&&(d=d.set("vCenter",!1)),t.setIn(["layouts",n,"content",s,"bbox"],r).setIn(["layouts",n,"content",s,"setting"],d)}}const Wr=[mt,ft,ct],_r=[pt,mt,ct];class Ur extends e.BaseLayoutService{removeItemFromOrder(t,e){const{layoutId:o,layoutItemId:i}=e,n=t.layouts[o];let a=[].concat(n.order);return a=a.filter((t=>t!==i)),t.setIn(["layouts",o,"order"],a)}afterItemMoved(t,e){return this.removeItemFromOrder(t,e)}afterItemRemoved(t,e){const o=super.afterItemRemoved(t,e);return this.removeItemFromOrder(o,e)}duplicateItemInSameLayout(t,e,o,i){var n;const a=super.duplicateItemInSameLayout(t,e,o,i);let s=a[0];const l=a[1],r=s.layouts[e.layoutId],d=[].concat(r.order),u=d.indexOf(e.layoutItemId);d.splice(u,1,e.layoutItemId,l),s=s.setIn(["layouts",e.layoutId,"order"],d);return(null===(n=r.content[l].setting)||void 0===n?void 0:n.isFloating)&&(s=this.offsetDupliateItem(s,{layoutId:e.layoutId,layoutItemId:l})),[s,l]}getTocStructure(t,o){var i;const n=t.layouts[o],s=a.utils.getCurrentSizeMode();if((null===(i=null==n?void 0:n.order)||void 0===i?void 0:i.length)>0){return[].concat(n.order).filter((t=>!n.content[t].isPending)).map((i=>{const a=n.content[i];return new e.ContentServiceWrapper(t,a).toTocNode({layoutId:o,layoutItemId:i},s)}))}return[]}processAfterItemAdded(t,o,i,n,s,l,r){const d=(0,e.getAppConfigAction)(t),u=a.utils.replaceBoundingBox(null,l,s);return d.editLayoutItemProperty(i,"bbox",u).adjustOrderOfItem(i,r),d.appConfig}getToolItems(e,o,i){if("view"===(null==i?void 0:i.toLowerCase()))return we;if("screen"===(null==i?void 0:i.toLowerCase()))return kr;return a.searchUtils.findLayoutItem(e,o).type===t.LayoutItemType.ScreenGroup?_r:Wr}offsetDupliateItem(t,e){var o,i;const{layoutId:n,layoutItemId:s}=e,l=t.layouts[n].content[s];let{bbox:r,setting:d}=l;const u=t=>{if(a.utils.isPercentage(t))return`${parseFloat(t)+5}%`;const e=parseInt(t,10);return isNaN(e)?t:e+20};return r=(null===(o=null==d?void 0:d.autoProps)||void 0===o?void 0:o.left)?r.set("right",u(r.right)):r.set("left",u(r.left)),r=(null===(i=null==d?void 0:d.autoProps)||void 0===i?void 0:i.top)?r.set("bottom",u(r.bottom)):r.set("top",u(r.top)),(null==d?void 0:d.hCenter)&&(null==d?void 0:d.vCenter)&&(d=d.set("vCenter",!1)),t.setIn(["layouts",n,"content",s,"bbox"],r).setIn(["layouts",n,"content",s,"setting"],d)}}const Yr=[mt,yt,pt,ct],Zr=[].concat(be,Yr);class Xr extends e.BaseLayoutService{removeItemFromOrder(t,e){const{layoutId:o,layoutItemId:i}=e,n=t.layouts[o];let a=[].concat(n.order);return a=a.filter((t=>t!==i)),t.setIn(["layouts",o,"order"],a)}afterItemMoved(t,e){return this.removeItemFromOrder(t,e)}afterItemRemoved(t,e){const o=super.afterItemRemoved(t,e);return this.removeItemFromOrder(o,e)}duplicateItemInSameLayout(t,e,o,i){const n=super.duplicateItemInSameLayout(t,e,o,i);let a=n[0];const s=n[1],l=a.layouts[e.layoutId],r=[].concat(l.order),d=r.indexOf(e.layoutItemId);return r.splice(d,1,e.layoutItemId,s),a=a.setIn(["layouts",e.layoutId,"order"],r),[a,s]}getTocStructure(t,o){var i;const n=t.layouts[o],s=a.utils.getCurrentSizeMode();if((null===(i=null==n?void 0:n.order)||void 0===i?void 0:i.length)>0){return[].concat(n.order).filter((t=>!n.content[t].isPending)).map((i=>{const a=n.content[i];return new e.ContentServiceWrapper(t,a).toTocNode({layoutId:o,layoutItemId:i},s)}))}return[]}processAfterItemAdded(o,i,n,s,l,r,d){var u,c;const p=(0,e.getAppConfigAction)(o);let h=a.utils.replaceBoundingBox(null,r,l);h=h.without("left").without("top").without("right").without("bottom"),p.editLayoutItemProperty(n,"bbox",h).adjustOrderOfItem(n,d);const g=a.searchUtils.findLayoutItem(o,n);if(g.type===t.LayoutItemType.Widget&&g.widgetId){(null===(c=null===(u=o.widgets[g.widgetId].manifest)||void 0===u?void 0:u.defaultSize)||void 0===c?void 0:c.autoHeight)&&p.editLayoutItemProperty(n,"setting.autoProps.height",a.LayoutItemSizeModes.Auto)}return p.appConfig}getToolItems(e,o,i){if("view"===(null==i?void 0:i.toLowerCase()))return we;if("screen"===(null==i?void 0:i.toLowerCase()))return kr;return a.searchUtils.findLayoutItem(e,o).type===t.LayoutItemType.Section?Zr:Yr}}e.LayoutServiceProvider.getInstance().registerService(t.LayoutType.RowLayout,new Er),e.LayoutServiceProvider.getInstance().registerService(t.LayoutType.GridLayout,new Dr),e.LayoutServiceProvider.getInstance().registerService(t.LayoutType.FixedLayout,new Gr),e.LayoutServiceProvider.getInstance().registerService(t.LayoutType.FlowLayout,new Ur),e.LayoutServiceProvider.getInstance().registerService(t.LayoutType.ColumnLayout,new Xr),(0,a.registerLayoutBuilder)(t.LayoutType.FixedLayout,on),(0,a.registerLayoutBuilder)(t.LayoutType.FlowLayout,Kl),(0,a.registerLayoutBuilder)(t.LayoutType.GridLayout,Da),(0,a.registerLayoutBuilder)(t.LayoutType.ColumnLayout,cn);class qr extends t.React.PureComponent{constructor(e){super(e),this.updateHeaderHeight=t=>{this.setState({headerHeight:t})},this.updateFooterHeight=t=>{this.setState({footerHeight:t})},this.startPaste=()=>{var e;const o=null===(e=(0,t.getAppStore)().getState().appRuntimeInfo)||void 0===e?void 0:e.clipboard,{activePagePart:i,pageStatus:n,currentDialogId:s,dialogs:l}=this.props;if(o){let e;if(s&&l[s])e=pr(s);else if(i===t.PagePart.Header)e=ur();else if(i===t.PagePart.Footer)e=cr();else{e=function(e){var o;const i=(0,t.getAppStore)().getState(),n=null===(o=i.appConfig.pages[e])||void 0===o?void 0:o.layout;return n?a.searchUtils.findLayoutId(n,i.browserSizeMode,i.appConfig.mainSizeMode):null}(hr(n))}F(o,e)}},this.isMac=()=>{var t,e;return"macOS"===(null===(e=null===(t=window.jimuUA)||void 0===t?void 0:t.os)||void 0===e?void 0:e.name)},this.clearSelection=e=>{!rt()&&!dt()||jt()||Rt()||(e.stopPropagation(),(0,t.getAppStore)().dispatch(t.appActions.selectionChanged(null)))},this.formatMessage=(t,e)=>this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:$t[t]},e):$t[t],this.state={headerHeight:0,footerHeight:0},t.ExtensionManager.getInstance().registerExtension({epName:t.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Ws}),t.ExtensionManager.getInstance().registerExtension({epName:t.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Us}),t.ExtensionManager.getInstance().registerExtension({epName:t.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Ys}),this.isMac()?this.keyBindings={"command+keyv":this.startPaste}:this.keyBindings={"ctrl+keyv":this.startPaste},this.updatePageContext()}componentDidMount(){rt()&&!document.body.classList.contains("design-mode")&&document.body.classList.add("design-mode"),st()&&!document.body.classList.contains("lock-layout")&&document.body.classList.add("lock-layout")}componentDidUpdate(t){var e;const o=null===(e=window.document)||void 0===e?void 0:e.documentElement;o&&(window.jimuConfig.isInBuilder&&rt()?o.classList.add("is-in-builder"):o.classList.remove("is-in-builder"));hr(t.pageStatus)!==hr(this.props.pageStatus)&&(this.pageRef.scrollTop=0)}getPageStyle(){const{pageStatus:e,pages:o,minHeight:i}=this.props,n=o[Object.keys(e).find((t=>e[t]))];return t.css`
      position: relative;
      margin: 0 auto;
      overflow: hidden;
      height: ${n.mode===t.PageMode.FitWindow?"100%":"auto"};
      min-height: ${i}px;
      .is-dragging {
        z-index: ${a.LayoutZIndex.DraggingItem};
        opacity: 0.8;
      }

      body:not(.design-mode) & {
        overflow: auto;
        height: 100%;
      }
    `}updatePageContext(){const{theme:e}=this.props,o={theme:e,builderTheme:(0,u.getBuilderThemeVariables)(),formatMessage:this.formatMessage};if(this.pageContext)for(const t in o)this.pageContext[t]!==o[t]&&(this.pageContext=this.pageContext.set(t,o[t]));else this.pageContext=(0,t.Immutable)(o)}render(){const{pageStatus:e,pages:o}=this.props,i=hr(e);return i&&(null==o?void 0:o[i])?(this.updatePageContext(),(0,t.jsx)("div",{className:"page-renderer d-flex flex-column align-items-center w-100",ref:t=>this.pageRef=t,css:this.getPageStyle(),"data-testid":"pageRenderer",onClick:this.clearSelection},this.renderDialog(),this.renderHeader(),Object.keys(e).map((t=>this.renderPageBody(t))),this.renderFooter(),(0,t.jsx)(t.Keyboard,{bindings:this.keyBindings}))):null}renderHeader(){if(!this.props.header)return null;const{header:e,headerVisible:o,browserSizeMode:i,mainSizeMode:n,activePagePart:a}=this.props;return(0,t.jsx)(mr,{header:e,activePagePart:a,headerVisible:o,browserSizeMode:i,mainSizeMode:n,pageContext:this.pageContext,onHeightChange:this.updateHeaderHeight})}renderFooter(){if(!this.props.footer)return null;const{footer:e,footerVisible:o,browserSizeMode:i,mainSizeMode:n,activePagePart:a}=this.props;return(0,t.jsx)(fr,{footer:e,activePagePart:a,footerVisible:o,browserSizeMode:i,mainSizeMode:n,pageContext:this.pageContext,onHeightChange:this.updateFooterHeight})}renderPageBody(e){const{pages:o,pageStatus:i,browserSizeMode:n,activePagePart:a}=this.props,s=o[e];if(s&&s.type===t.PageType.Normal)return(0,t.jsx)(zr,{key:s.id,pageJson:s,renderedPageId:e,activePagePart:a,browserSizeMode:n,pageContext:this.pageContext,visible:!!i[s.id],headerFooterHeight:this.state.headerHeight+this.state.footerHeight})}isDialogViewOnly(e){const{browserSizeMode:o}=this.props;return!!(o!==t.BrowserSizeMode.Large&&!e.layout[o])}renderDialog(){const{currentDialogId:e,urlDialogJson:o,splashDialogJson:i,isSplashClosed:n,isPageDlgClosed:s,pageDialogJson:l,pageDialogId:r}=this.props,d=!n&&i,u=!s&&l,c=o?(null==i?void 0:i.id)===o.id||(null==l?void 0:l.id)===o.id?null:o:null;return(0,t.jsx)(t.React.Fragment,null,c&&(0,t.jsx)(a.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:e,isDialog:!0,viewOnly:this.isDialogViewOnly(o),rootLayoutId:pr(e)})},(0,t.jsx)(t.AppDialog,{dialogJson:o})),u&&(0,t.jsx)(a.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:r,isDialog:!0,viewOnly:this.isDialogViewOnly(l),rootLayoutId:pr(l.id)})},(0,t.jsx)(t.AppDialog,{dialogJson:l,isOpenByPage:!0})),d&&(0,t.jsx)(a.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:i.id,isDialog:!0,viewOnly:this.isDialogViewOnly(i),rootLayoutId:pr(i.id)})},(0,t.jsx)(t.AppDialog,{dialogJson:i})))}}qr.displayName="BuilderPageRenderer";const Jr=(0,t.createSelector)([e=>t.utils.findViewportSize(e.appConfig,e.browserSizeMode).height,(t,e)=>hr(e.pageStatus),(t,e)=>e.dialogId,t=>t.appRuntimeInfo.currentPageId,t=>t.appConfig.pages,t=>t.appConfig.dialogs,t=>t.appConfig.header,t=>t.appConfig.footer,t=>t.appConfig.mainSizeMode,t=>t.browserSizeMode,e=>{var o;return null!==(o=e.appRuntimeInfo.activePagePart)&&void 0!==o?o:t.PagePart.Body},t=>t.appRuntimeInfo.clipboard,t=>t.appRuntimeInfo.currentDialogId,t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.dialogInfos},t=>t.appConfig.pages[t.appRuntimeInfo.currentPageId].autoOpenDialogId],((t,e,o,i,n,a,s,l,r,d,u,c,p,h,g)=>{var m,y;if(!e||!n[e])return{};const f=a[Object.keys(a).find((t=>a[t].isSplash))];return{pages:n,dialogs:a,header:s,footer:l,headerVisible:!!n[e].header,footerVisible:!!n[e].footer,mainSizeMode:r,browserSizeMode:d,minHeight:t,activePagePart:u,clipboardItem:c,currentDialogId:p,splashDialogJson:f,isSplashClosed:null===(m=null==h?void 0:h[null==f?void 0:f.id])||void 0===m?void 0:m.isClosed,pageDialogId:g,pageDialogJson:a[g],isPageDlgClosed:null===(y=null==h?void 0:h[i+"-"+g])||void 0===y?void 0:y.isClosed,urlDialogJson:a[o]}})),Qr=(0,t.injectIntl)(t.ReactRedux.connect(Jr)((0,u.withTheme)(qr)));var Kr=p(4146),td=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};function ed(e,o){var i,n,s,l;const r=o.layoutId,d=e.appRuntimeInfo.selection,u=o.layoutItem;let c=!1,p=!1,h=!1,g=!1;if(u&&(c=Boolean(d&&r===d.layoutId&&u.id===d.layoutItemId),u.type===t.LayoutItemType.Widget)){const t=e.appConfig.widgets[u.widgetId],o=null===(n=null===(i=null==t?void 0:t.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.supportInlineEditing;if(h=null===(l=null===(s=null==t?void 0:t.manifest)||void 0===s?void 0:s.properties)||void 0===l?void 0:l.supportRepeat,o){const t=e.widgetsRuntimeInfo[u.widgetId];p=t&&t.isInlineEditing}g=a.utils.isWidgetHasEmbeddedLayout(u.widgetId,e.appConfig)}return{selected:c,supportRepeat:h,isInlineEditing:p,isLayoutWidget:g}}const od=()=>{};function id(e){return e=>{class o extends t.React.PureComponent{constructor(e){super(e),this.ref=t.React.createRef()}componentDidMount(){const{layoutId:t,layoutItemId:e,layoutItem:o,onResizeStart:i,onResizing:n,onResizeEnd:a,onDragStart:s,onDragging:l,onDragEnd:r,useDragHandler:d}=this.props;this.ref.current&&(this.interactable=(0,Tt.interact)(this.ref.current).origin("parent"),this.interactable=St(this.interactable,{layoutId:t,layoutItemId:e,useDragHandler:d,onDragging:l,onDragStart:s,onDragEnd:r,itemType:o.type,rootLayoutId:()=>this.rootLayoutId,restrict:()=>this.props.restrict}),this.interactable=Pt(this.interactable,{layoutItemId:e,onResizing:n,onResizeStart:i,onResizeEnd:a}))}componentWillUnMount(){this.interactable&&(this.interactable.unset(),this.interactable=null)}getStyle(e){return t.css`
          ${this.aspectRatioStyle()};

          &.dragging {
            opacity: 0.9;
          }

          display: flex;
          position: relative;
          touch-action: ${e?"auto":"none"};
          user-select: ${e?"auto":"none"};
        `}aspectRatioStyle(){const{aspectRatio:e,forceAspectRatio:o}=this.props;return o?t.css`
            & > div.rnd-aspect-ratio-wrapper {
              width: 100%;
              position: relative;
              padding-top: ${100*e}%;

              & > div {
                position: absolute !important;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
              }
            }
          `:t.css`
          & > .rnd-aspect-ratio-wrapper {
            width: 100%;
            height: 100%;
            display: flex;
          }
        `}render(){return(0,t.jsx)(a.PageContext.Consumer,null,(o=>{this.rootLayoutId=o.rootLayoutId;const i=this.props,{gridSize:n,draggable:a,onResizeStart:s,onResizing:l,onResizeEnd:r,style:d,className:u,useDragHandler:c,children:p}=i,h=td(i,["gridSize","draggable","onResizeStart","onResizing","onResizeEnd","style","className","useDragHandler","children"]),{isInlineEditing:g}=this.props,m=(0,t.classNames)("exb-rnd",u,{"functional-widget":!this.props.isLayoutWidget}),y="string"==typeof d?JSON.parse(d):Object.assign({},d);return this.props.forceAspectRatio&&(y.height="auto"),(0,t.jsx)("div",{className:m,ref:this.ref,css:this.getStyle(g),"data-layoutid":this.props.layoutId,"data-layoutitemid":this.props.layoutItemId,"data-repeatable":this.props.supportRepeat,style:y},(0,t.jsx)("div",{className:"rnd-aspect-ratio-wrapper"},(0,t.jsx)(e,Object.assign({layoutId:this.props.layoutId,className:"w-100",layoutItemId:this.props.layoutItemId},h))),p)}))}}o.defaultProps={left:!0,top:!0,right:!0,bottom:!0,restrict:!1,onResizeStart:od,onResizing:od,onResizeEnd:od,onDragStart:od,onDragging:od,onDragEnd:od};const i=Kr(o,e);return t.ReactRedux.connect(ed)(i)}}})(),h})())}}}));