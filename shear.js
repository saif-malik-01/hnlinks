!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.shear=n()}(this,function(){"use strict";var A=!("modify"in window.getSelection());function H(e){return[].slice.call(e)}function L(e){var n=[];return e.nodeType===Node.TEXT_NODE&&n.push(e),H(e.childNodes).map(function(e){n=n.concat(L(e))}),n}function M(e,n,t,r){return void 0===n&&(n=""),void 0===t&&(t=""),void 0===r&&(r=""),{isCuted:e,fullHTML:n,cutedHTML:t,cutedWithAfterHTML:r}}return function(o,e,n){if(void 0===e&&(e=2),void 0===n&&(n=null),!o.childNodes.length)return M(!1);var t,r,i,d,l,a,c,u=window.getSelection(),f=o.innerHTML,g=o.getBoundingClientRect().height;if(u.collapse(o,0),A)r=o,i=e,d=document.createRange(),l=L(r),a=null,c=0,d.setStart(l[0],0),function(){for(var e=0;e<l.length;e++)for(var n=0;n<l[e].length;n++){d.setEnd(l[e],n);var t=d.getBoundingClientRect().height;if(null===a&&(a=t),t!==a&&(c++,a=t),i<c)return d.setStart(l[e],n),d.setEnd(l[e],n)}}(),t=d;else{for(var s=0;s<e;s++)if(u.modify("extend","right","character"),u.modify("extend","right","lineboundary"),!o.contains(u.focusNode)){u.selectAllChildren(o);break}u.collapseToEnd(),t=u.getRangeAt(0).cloneRange()}u.selectAllChildren(o),t.setEnd(u.getRangeAt(0).endContainer,u.getRangeAt(0).endOffset),t.cloneRange().deleteContents();var h=o.innerHTML,v=f!==h,m=h,p=o.getBoundingClientRect().height;if(p<g&&n){var C=function(e){var n=document.createElement("DIV");n.innerHTML=e;var t=document.createDocumentFragment();return H(n.childNodes).forEach(function(e){return t.appendChild(e)}),t}(n),R=L(o),T=R[R.length-1],E=T.length,y=document.createRange();y.setStart(T,E),y.setEnd(T,E),o.appendChild(C),function(){for(var e=R.length-1;0<=e;e--)for(var n=R[e].length-1;0<=n;n--){if(o.getBoundingClientRect().height<=p)return;var t=document.createRange();t.setStart(R[e],n),t.setEnd(R[e],n+1),t.deleteContents();var r=R[e].parentNode;r&&r!==o&&!r.textContent&&o.removeChild(r)}}(),m=o.innerHTML}return u.removeAllRanges(),M(v,f,h,m)}});
