(this["webpackJsonpapp-map-db"]=this["webpackJsonpapp-map-db"]||[]).push([[4],{1260:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return J}));var r=n(16),o=n(0),a=n(14),i=n(3),c=n(63),l=Object(a.c)((function(e,t){var n=t.name,r=t.placeholder,o=e.table[n],a=t.primary||"No ".concat(n),c=t.secondary||r;return Object(i.a)(Object(i.a)({},t),{},{tab:o&&o.tab&&o.tab,primary:a,secondary:c})}))((function(e){var t=e.primary,n=e.secondary,r=e.renderPlaceholder;return r?r(e):o.createElement(o.Fragment,null,t&&o.createElement(c.a,{color:"textSecondary",variant:"subtitle1",style:{padding:16},align:"center"},t),n&&o.createElement(c.a,{color:"textSecondary",variant:"body1",style:{padding:16},align:"center"},n))})),d=n(33),s=n(1258),u=n(1259),m=n(957),h=n(958),g=n(45),b=n(1022),f=n(1017),w=n(1080),p=n(1170),v=n.n(p),y=n(1167),R=n.n(y),E=n(1168),j=n(120),k=n.n(j),I=n(34),O=n(5),x={border:0,"scrollbar-width":"none"},C={border:0,"& .topLeftGrid":x,"& .topRightGrid":x,"& .bottomLeftGrid":x},H=Object(i.a)(Object(i.a)({},C),{},{"& .bottomRightGrid":{border:0,"&::-webkit-scrollbar":{display:"none"},"scrollbar-width":"none","-ms-overflow-style":"none","-webkit-overflow-scrolling":"auto","&::-webkit-overflow-scrolling":"auto"}}),S=function(e){var t=e.palette;return Object(i.a)(Object(i.a)({},C),{},{"& .bottomRightGrid":{"&::-webkit-scrollbar":{display:"auto",width:6,height:6},"&::-webkit-scrollbar-thumb":{backgroundColor:t.primary.light,borderRadius:25},border:0,"-ms-overflow-style":"none","-webkit-overflow-scrolling":"auto","&::-webkit-overflow-scrolling":"auto"}})},B=Object(m.a)((function(e){var t=e.palette,n=e.spacing,r=e.layout;return Object(h.a)({table:Object(i.a)({},H),tableRounded:Object(i.a)({borderBottomLeftRadius:12,borderBottomRightRadius:12},H),tableScroll:Object(i.a)({},S({palette:t})),tableScrollRounded:Object(i.a)({borderBottomLeftRadius:12,borderBottomRightRadius:12},S({palette:t})),cellHovered:{backgroundColor:t.primary.light},cellSelected:{color:t.common.white+" !important",backgroundColor:t.primary.main},checkbox:{paddingLeft:0,paddingRight:0},checkboxIcon:{backgroundColor:t.common.white},selectedHeader:{paddingLeft:n(1),paddingRight:n(1),color:t.common.white,backgroundColor:t.primary.main,height:r.multiselectbarheight,marginBottom:r.contentrowspacing},cell:{},collapse:{background:t.grey[400]}})}));function L(e,t){return e.map((function(e){return t.find((function(t){return t.id===e}))})).filter((function(e){return e})).map((function(e){return e.getRowData?Object(i.a)({},e.getRowData(e)):{id:e.id}}))}function N(e){var t=B(e),n=Object(g.a)().layout,r=e.name,a=e.includeHeaders,l=void 0===a||a,m=e.fixedRowCount,h=void 0===m?1:m,p=e.rowHeight,y=void 0===p?n.tableRowHeight:p,j=e.rounded,x=void 0!==j&&j,C=e.hover,H=e.onCellClick,S=void 0===H?void 0:H,N=e.onHeaderClick,D=void 0===N?void 0:N,G=e.isCellHovered,W=void 0===G?void 0:G,F=e.select,M=e.checkbox,P=e.data,z=e.height,J=e.columns,T=e.MultiSelectToolbar,V=e.showScroll,q=void 0!==V&&V,A=e.rowDivider,K=void 0===A||A,Q=I.b(r),U=I.d(),X=Object(O.f)(J,e).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{onHeaderClick:e.sort?function(t,n){var r,o;r=e.name,o=e.sort,Q&&U({id:Q.id,orderBy:r,orderDirection:"asc"===Q.orderDirection?"desc":"asc",sortComparator:o}),D(t,n)}:D})}));return o.createElement("div",{style:{height:z}},o.createElement(E.a,{initialState:{selectedRowIds:[]}},(function(e){var r=e.state,a=e.setState,i=r.selectedRowIds,m=i.length,g=0===m?"":1===m?m+" item":m+" items",p=m>0?z-n.multiselectbarheight-n.contentrowspacing:z;return o.createElement(R.a,null,(function(e){var n=e.width;return o.createElement(o.Fragment,null,o.createElement("div",{style:{width:n}},o.createElement(b.a,{className:t.collapse,in:m>0},o.createElement(f.a,{className:t.selectedHeader,container:!0,direction:"row",justify:"space-between",alignItems:"center",spacing:0},o.createElement(f.a,{item:!0,xs:!0,zeroMinWidth:!0},o.createElement(c.a,{noWrap:!0,color:"inherit",variant:"h5"},g)),o.createElement(f.a,{item:!0,xs:!0},o.createElement(f.a,{container:!0,justify:"flex-end",alignItems:"center",alignContent:"center"},o.createElement(f.a,{item:!0},m>0&&T&&o.createElement(T,{rowData:L(i,P)}))))))),o.createElement(v.a,{cellProps:{size:"small",style:{paddingLeft:16,paddingRight:0,borderBottom:!1===K?0:void 0}},classes:{table:q?k()(t.tableScroll,x&&t.tableScrollRounded):k()(t.table,x&&t.tableRounded),cellHovered:t.cellHovered,cellSelected:t.cellSelected,cell:t.cell},fixedRowCount:h,width:n,height:p,rowHeight:y,includeHeaders:l,orderBy:Q&&Q.orderBy,orderDirection:Q?Q.orderDirection:"asc",data:P,columns:M?[{name:"checkbox",header:o.createElement(w.a,Object.assign({checkedIcon:o.createElement(s.a,{className:t.checkboxIcon,color:"primary"}),indeterminateIcon:o.createElement(u.a,{className:t.checkboxIcon,color:"primary"}),checked:r.selectedRowIds.filter((function(e){return P.find((function(t){return t.id===e}))})).length>0,onChange:function(e){return a((function(e){return e.selectedRowIds.filter((function(e){return P.find((function(t){return t.id===e}))})).length===P.length?{selectedRowIds:[]}:{selectedRowIds:P.map((function(e){return e.id}))}}))}},r.selectedRowIds.filter((function(e){return P.find((function(t){return t.id===e}))})).length>0&&r.selectedRowIds.filter((function(e){return P.find((function(t){return t.id===e}))})).length!==P.length&&{indeterminate:!0,color:"default"})),cell:function(e){return o.createElement(w.a,{checkedIcon:o.createElement(s.a,{className:t.checkboxIcon,color:"primary"}),checked:r.selectedRowIds.filter((function(e){return P.find((function(t){return t.id===e}))})).some((function(t){return e.id===t}))})},cellProps:{style:{paddingLeft:8,paddingRight:0}},width:48}].concat(Object(d.a)(X)):X,isCellSelected:F?function(e,t){return r.selectedRowIds.some((function(e){return t&&t.id===e}))}:void 0,isCellHovered:W||C?function(e,t,n,r){return W?W(e,t,n,r):t&&t.id&&t.id===r.id}:void 0,onHeaderClick:D,onCellClick:S||(F?function(e,t){t.column;var n=t.rowData;a((function(e){return e.selectedRowIds.some((function(e){return n.id===e}))?{selectedRowIds:e.selectedRowIds.filter((function(e){return e!==n.id}))}:{selectedRowIds:[].concat(Object(d.a)(e.selectedRowIds),[n.id])}}))}:void 0),style:{backgroundColor:"white"}}))}))})))}var D=n(174),G=n(1024),W=n(8),F=n(1252);function M(e){var t=Object(g.a)().layout,n=e.rowHeight,r=void 0===n?t.tableRowHeight:n,a=e.data,i=e.columns,c=e.height,l=Object(O.f)(i,e);return o.createElement("div",{style:{height:c}},o.createElement(E.a,{initialState:{selectedRowIds:[]}},(function(e){var n=e.state.selectedRowIds.length>0?c-t.multiselectbarheight-t.contentrowspacing:c;return o.createElement(R.a,null,(function(e){var t=e.width;return o.createElement(P,{data:a,rowHeight:r,width:t,height:n,columns:l})}))})))}var P=function(e){var t,n=e,r=n.height,a=n.width,c=n.data,l=n.columns,d=n.rowHeight,s=void 0===d?50:d,u=n.getClassName,m=function(){f(new F.b({fixedWidth:!0,minHeight:s}))};o.useEffect((function(){f(new F.b({fixedWidth:!0,minHeight:s}))}),[c,l,u,r,s,a]);var h=o.useState(new F.b({fixedWidth:!0,minHeight:null!==(t=e.rowHeight)&&void 0!==t?t:50})),g=Object(W.a)(h,2),b=g[0],f=g[1];return o.createElement(F.c,{deferredMeasurementCache:b,height:r,overscanRowCount:0,rowCount:c.length,rowHeight:b.rowHeight,rowRenderer:function(e){var t=e.index,n=e.key,r=e.parent,a=e.style,d=u&&u({columnIndex:0,rowIndex:t});return o.createElement(F.a,{cache:b,columnIndex:0,key:n,rowIndex:t,parent:r},(function(e){e.measure;var n=e.registerChild;return o.createElement("div",{ref:n,className:d,style:a},l[0].cell(Object(i.a)(Object(i.a)({},c[t]),{},{handleRefresh:m}),l[0]))}))},width:a})},z=Object(m.a)((function(e){var t=e.palette,n=e.spacing,r=e.layout;return Object(h.a)({placeholder:{padding:n(1),background:t.grey[50]},footer:{paddingRight:n(1),background:t.grey[200],border:8,height:r.tablefooterheight,color:t.text.hint},paper:function(e){var t=e.rounded;return{borderBottomLeftRadius:t?4:0,borderBottomRightRadius:t?4:0}}})}));function J(e){var t=e.elevation,n=void 0===t?4:t,i=(e.placeholder,e.footer),d=e.name,s=e.selector,u=e.data,m=void 0===u?[]:u,h=e.height,b=e.isList,w=Object(r.a)(e,["elevation","placeholder","footer","name","selector","data","height","isList"]),p=z(e),v=Object(g.a)().layout,y=Object(a.f)((function(t){return s?s(t,e):m})),R=y&&y.length?y.length:0,E=i?h-v.tablefooterheight:h,j=b?M:N;return o.createElement(D.a,{elevation:n,className:p.paper},0===R?o.createElement(f.a,{style:{height:E},container:!0,className:p.placeholder,alignItems:"center",justify:"center"},o.createElement(f.a,{item:!0,xs:!0},o.createElement(l,e)),o.createElement(f.a,{item:!0,xs:12})):o.createElement(j,Object.assign({name:d,data:y,height:E},w)),i&&o.createElement(o.Fragment,null,o.createElement(G.a,null),o.createElement(f.a,{container:!0,className:p.footer,alignContent:"center",alignItems:"center",justify:"flex-end"},o.createElement(f.a,{item:!0,container:!0,alignItems:"center",justify:"flex-end"},o.createElement(c.a,{align:"right",variant:"caption"},"Viewing ",R," ",d)))))}}}]);
//# sourceMappingURL=4.af4384df.chunk.js.map