System.register(["jimu-core","jimu-core/react","jimu-arcgis","jimu-ui","esri/widgets/Legend"],(function(e,t){var i={},a={},r={},o={},s={};return{setters:[function(e){i.css=e.css,i.jsx=e.jsx},function(e){a.useState=e.useState},function(e){r.JimuMapViewComponent=e.JimuMapViewComponent},function(e){o.Label=e.Label,o.Radio=e.Radio,o.Switch=e.Switch},function(e){s.default=e.default}],execute:function(){e((()=>{var e={828:e=>{"use strict";e.exports=s},686:e=>{"use strict";e.exports=r},244:e=>{"use strict";e.exports=i},972:e=>{"use strict";e.exports=a},321:e=>{"use strict";e.exports=o}},t={};function l(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,l),r.exports}l.d=(e,t)=>{for(var i in t)l.o(t,i)&&!l.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var d={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(d),l.d(d,{__set_webpack_public_path__:()=>u,default:()=>n});var e=l(244),t=l(972),i=l(686),a=l(321),r=l(828);function o(t){const i=t.surfaces[1].bg;return e.css`
    .widget-body {
        align-items: center;
        justify-content: right;
        font-size: 14px;
        background-color: ${i};
        height: inherit;
        overflow: auto;

        .header-container {
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 0.25rem;
          padding-right: 0.25rem;
          top: 0;
          display: flex;
          justify-content: space-between;
          position: sticky;
          position: -webkit-sticky;
          background-color: ${i};
          border-bottom: 1px solid gray;

          .header-title {
            font-weight:bold;
          }

          .header-legend {
            padding-left: 5px;
          }
        }

        .body-radio-group {
          padding-left: 10px;
          /*height: inherit;*/
          /*overflow: auto;*/
          /*height: calc(100vh - 131px);*/

          .radio-box {
            display: flex;

            .radio-label {
              padding-left: 10px;
            }
          }
        }
    }
  `}var s=function(e,t,i,a){return new(i||(i=Promise))((function(r,o){function s(e){try{d(a.next(e))}catch(e){o(e)}}function l(e){try{d(a.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,l)}d((a=a.apply(e,t||[])).next())}))};function n(l){var d;const[n,u]=(0,t.useState)(null),[c,p]=(0,t.useState)(null),[y,f]=(0,t.useState)(null),[g,b]=(0,t.useState)(null),[v,h]=(0,t.useState)(!0),m=e=>{if(!g){const t=new r.default({view:e,visible:!0});e.ui.add(t,{position:"bottom-left"}),b(t)}},x=e=>s(this,void 0,void 0,(function*(){p(e);const t=[];e.forEach(((e,i)=>{if("feature"===e.layer.type||"imagery"===e.layer.type){const a=e.layer.type+"_"+e.layer.id,r={type:e.layer.type,layId:e.layer.id,title:e.layer.title,radioId:a};0===i?(e.layer.visible=!0,f(a)):e.layer.visible=!1,t.push(r)}else"map-image"===e.layer.type&&(e.layer.visible=0===i,e.layer.allSublayers.forEach(((a,r)=>{if("Group Layer"===a.sourceJSON.type)a.visible=!1;else{const o=e.layer.type+"_"+e.layer.id+"_"+a.id,s={type:e.layer.type,layId:e.layer.id,subLayId:a.id,title:a.title,radioId:o};0===i&&0===r?(a.visible=!0,f(o)):a.visible=!1,t.push(s)}})))})),u(t)})),w=e=>{let t=(e=>{let t=null;return n.forEach((i=>{i.radioId===e&&(t=i)})),t})(e.target.value);f(t.radioId),t&&(e=>{c.forEach((t=>{"feature"===t.layer.type||"imagery"===t.layer.type?t.layer.id===e.layId?t.layer.visible=!0:t.layer.visible=!1:"map-image"===t.layer.type&&(t.layer.id===e.layId?t.layer.visible=!0:t.layer.visible=!1,t.layer.allSublayers.forEach((t=>{"Group Layer"===t.sourceJSON.type||t.id===e.subLayId?t.visible=!0:t.visible=!1})))}))})(t)};return(0,e.jsx)("div",{css:o(l.theme),className:"jimu-widget"},l.hasOwnProperty("useMapWidgetIds")&&l.useMapWidgetIds&&1===l.useMapWidgetIds.length&&(0,e.jsx)(i.JimuMapViewComponent,{useMapWidgetId:null===(d=l.useMapWidgetIds)||void 0===d?void 0:d[0],onActiveViewChange:e=>s(this,void 0,void 0,(function*(){yield e.whenAllJimuLayerViewLoaded(),e&&(x(e.getAllJimuLayerViews()),m(e.view))}))}),(0,e.jsx)("div",{className:"widget-body"},(0,e.jsx)("div",{className:"header-container"},(0,e.jsx)("div",{className:"header-title"},"Web Map Layer Toggle"),(0,e.jsx)("div",null,(0,e.jsx)(a.Switch,{className:"toggle-visibility",checked:v,onChange:e=>{h(e.target.checked),g.visible=!v}}),(0,e.jsx)("span",{className:"header-legend"},"Legend"))),(0,e.jsx)("div",{className:"body-radio-group"},n?n.map((t=>(0,e.jsx)(a.Label,{for:t.radioId,key:t.radioId,className:"radio-box"},(0,e.jsx)(a.Radio,{name:"vislays",id:t.radioId,value:t.radioId,onChange:w,checked:y===t.radioId}),(0,e.jsx)("div",{className:"radio-label"},t.title)))):"")))}function u(e){l.p=e}})(),d})())}}}));