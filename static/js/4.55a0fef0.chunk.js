(this["webpackJsonpapp-map-db"]=this["webpackJsonpapp-map-db"]||[]).push([[4],{1369:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return J}));var r=n(12),o=n(0),a=n(10),i=n(6),c=n(69),l=Object(a.c)((function(e,t){var n=t.name,r=t.placeholder,o=e.table[n],a=t.primary||"No ".concat(n),c=t.secondary||r;return Object(i.a)({},t,{tab:o&&o.tab&&o.tab,primary:a,secondary:c})}))((function(e){var t=e.primary,n=e.secondary,r=e.renderPlaceholder;return r?r(e):o.createElement(o.Fragment,null,t&&o.createElement(c.a,{color:"textSecondary",variant:"subtitle1",style:{padding:16},align:"center"},t),n&&o.createElement(c.a,{color:"textSecondary",variant:"body1",style:{padding:16},align:"center"},n))})),d=n(58),s=n(1367),u=n(1368),m=n(1095),h=n(1096),g=n(50),f=n(1136),b=n(1131),w=n(1190),p=n(1279),v=n.n(p),y=n(1276),R=n.n(y),E=n(1277),k=n(227),I=n.n(k),j=n(46),x=n(4),O={border:0,"scrollbar-width":"none"},C={border:0,"& .topLeftGrid":O,"& .topRightGrid":O,"& .bottomLeftGrid":O},H=Object(i.a)({},C,{"& .bottomRightGrid":{border:0,"&::-webkit-scrollbar":{display:"none"},"scrollbar-width":"none","-ms-overflow-style":"none","-webkit-overflow-scrolling":"auto","&::-webkit-overflow-scrolling":"auto"}}),S=function(e){var t=e.palette;return Object(i.a)({},C,{"& .bottomRightGrid":{"&::-webkit-scrollbar":{display:"auto",width:6,height:6},"&::-webkit-scrollbar-thumb":{backgroundColor:t.primary.light,borderRadius:25},border:0,"-ms-overflow-style":"none","-webkit-overflow-scrolling":"auto","&::-webkit-overflow-scrolling":"auto"}})},B=Object(m.a)((function(e){var t=e.palette,n=e.spacing,r=e.layout;return Object(h.a)({table:Object(i.a)({},H),tableRounded:Object(i.a)({borderBottomLeftRadius:12,borderBottomRightRadius:12},H),tableScroll:Object(i.a)({},S({palette:t})),tableScrollRounded:Object(i.a)({borderBottomLeftRadius:12,borderBottomRightRadius:12},S({palette:t})),cellHovered:{backgroundColor:t.primary.light},cellSelected:{color:t.common.white+" !important",backgroundColor:t.primary.main},checkbox:{paddingLeft:0,paddingRight:0},checkboxIcon:{backgroundColor:t.common.white},selectedHeader:{paddingLeft:n(1),paddingRight:n(1),color:t.common.white,backgroundColor:t.primary.main,height:r.multiselectbarheight,marginBottom:r.contentrowspacing},cell:{},collapse:{background:t.grey[400]}})}));function L(e,t){return e.map((function(e){return t.find((function(t){return t.id===e}))})).filter((function(e){return e})).map((function(e){return e.getRowData?Object(i.a)({},e.getRowData(e)):{id:e.id}}))}function N(e){var t=B(e),n=Object(g.a)().layout,r=e.name,a=e.includeHeaders,l=void 0===a||a,m=e.fixedRowCount,h=void 0===m?1:m,p=e.rowHeight,y=void 0===p?n.tableRowHeight:p,k=e.rounded,O=void 0!==k&&k,C=e.hover,H=e.select,S=e.checkbox,N=e.data,D=e.height,G=e.columns,W=e.MultiSelectToolbar,F=e.showScroll,M=void 0!==F&&F,P=e.rowDivider,z=void 0===P||P,J=j.b(r),T=j.d(),V=Object(x.f)(G,e).map((function(e){return Object(i.a)({},e,{onHeaderClick:e.sort?function(){return t=e.name,n=e.sort,void(J&&T({id:J.id,orderBy:t,orderDirection:"asc"===J.orderDirection?"desc":"asc",sortComparator:n}));var t,n}:void 0})}));return o.createElement("div",{style:{height:D}},o.createElement(E.a,{initialState:{selectedRowIds:[]}},(function(e){var r=e.state,a=e.setState,i=r.selectedRowIds,m=i.length,g=0===m?"":1===m?m+" item":m+" items",p=m>0?D-n.multiselectbarheight-n.contentrowspacing:D;return o.createElement(R.a,null,(function(e){var n=e.width;return o.createElement(o.Fragment,null,o.createElement("div",{style:{width:n}},o.createElement(f.a,{className:t.collapse,in:m>0},o.createElement(b.a,{className:t.selectedHeader,container:!0,direction:"row",justify:"space-between",alignItems:"center",spacing:0},o.createElement(b.a,{item:!0,xs:!0,zeroMinWidth:!0},o.createElement(c.a,{noWrap:!0,color:"inherit",variant:"h5"},g)),o.createElement(b.a,{item:!0,xs:!0},o.createElement(b.a,{container:!0,justify:"flex-end",alignItems:"center",alignContent:"center"},o.createElement(b.a,{item:!0},m>0&&W&&o.createElement(W,{rowData:L(i,N)}))))))),o.createElement(v.a,{cellProps:{size:"small",style:{paddingLeft:16,paddingRight:0,borderBottom:!1===z?0:void 0}},classes:{table:M?I()(t.tableScroll,O&&t.tableScrollRounded):I()(t.table,O&&t.tableRounded),cellHovered:t.cellHovered,cellSelected:t.cellSelected,cell:t.cell},fixedRowCount:h,width:n,height:p,rowHeight:y,includeHeaders:l,orderBy:J&&J.orderBy,orderDirection:J?J.orderDirection:"asc",data:N,columns:S?[{name:"checkbox",header:o.createElement(w.a,Object.assign({checkedIcon:o.createElement(s.a,{className:t.checkboxIcon,color:"primary"}),indeterminateIcon:o.createElement(u.a,{className:t.checkboxIcon,color:"primary"}),checked:r.selectedRowIds.filter((function(e){return N.find((function(t){return t.id===e}))})).length>0,onChange:function(e){return a((function(e){return e.selectedRowIds.filter((function(e){return N.find((function(t){return t.id===e}))})).length===N.length?{selectedRowIds:[]}:{selectedRowIds:N.map((function(e){return e.id}))}}))}},r.selectedRowIds.filter((function(e){return N.find((function(t){return t.id===e}))})).length>0&&r.selectedRowIds.filter((function(e){return N.find((function(t){return t.id===e}))})).length!==N.length&&{indeterminate:!0,color:"default"})),cell:function(e){return o.createElement(w.a,{checkedIcon:o.createElement(s.a,{className:t.checkboxIcon,color:"primary"}),checked:r.selectedRowIds.filter((function(e){return N.find((function(t){return t.id===e}))})).some((function(t){return e.id===t}))})},cellProps:{style:{paddingLeft:8,paddingRight:0}},width:48}].concat(Object(d.a)(V)):V,isCellSelected:H?function(e,t){return r.selectedRowIds.some((function(e){return t&&t.id===e}))}:void 0,isCellHovered:C?function(e,t,n,r){return t&&t.id&&t.id===r.id}:void 0,onCellClick:H?function(e,t){t.column;var n=t.rowData;a((function(e){return e.selectedRowIds.some((function(e){return n.id===e}))?{selectedRowIds:e.selectedRowIds.filter((function(e){return e!==n.id}))}:{selectedRowIds:[].concat(Object(d.a)(e.selectedRowIds),[n.id])}}))}:void 0,style:{backgroundColor:"white"}}))}))})))}var D=n(251),G=n(1138),W=n(8),F=n(1361);function M(e){var t=Object(g.a)().layout,n=e.rowHeight,r=void 0===n?t.tableRowHeight:n,a=e.data,i=e.columns,c=e.height,l=Object(x.f)(i,e);return o.createElement("div",{style:{height:c}},o.createElement(E.a,{initialState:{selectedRowIds:[]}},(function(e){var n=e.state.selectedRowIds.length>0?c-t.multiselectbarheight-t.contentrowspacing:c;return o.createElement(R.a,null,(function(e){var t=e.width;return o.createElement(P,{data:a,rowHeight:r,width:t,height:n,columns:l})}))})))}var P=function(e){var t,n=e,r=n.height,a=n.width,c=n.data,l=n.columns,d=n.rowHeight,s=void 0===d?50:d,u=n.getClassName,m=function(){b(new F.b({fixedWidth:!0,minHeight:s}))};o.useEffect((function(){b(new F.b({fixedWidth:!0,minHeight:s}))}),[c,l,u,r,s,a]);var h=o.useState(new F.b({fixedWidth:!0,minHeight:null!==(t=e.rowHeight)&&void 0!==t?t:50})),g=Object(W.a)(h,2),f=g[0],b=g[1];return o.createElement(F.c,{deferredMeasurementCache:f,height:r,overscanRowCount:0,rowCount:c.length,rowHeight:f.rowHeight,rowRenderer:function(e){var t=e.index,n=e.key,r=e.parent,a=e.style,d=u&&u({columnIndex:0,rowIndex:t});return o.createElement(F.a,{cache:f,columnIndex:0,key:n,rowIndex:t,parent:r},(function(e){e.measure;var n=e.registerChild;return o.createElement("div",{ref:n,className:d,style:a},l[0].cell(Object(i.a)({},c[t],{handleRefresh:m}),l[0]))}))},width:a})},z=Object(m.a)((function(e){var t=e.palette,n=e.spacing,r=e.layout;return Object(h.a)({placeholder:{padding:n(1),background:t.grey[50]},footer:{paddingRight:n(1),background:t.grey[200],border:8,height:r.tablefooterheight,color:t.text.hint},paper:function(e){var t=e.rounded;return{borderBottomLeftRadius:t?4:0,borderBottomRightRadius:t?4:0}}})}));function J(e){var t=e.elevation,n=void 0===t?4:t,i=(e.placeholder,e.footer),d=e.name,s=e.selector,u=e.data,m=void 0===u?[]:u,h=e.height,f=e.isList,w=Object(r.a)(e,["elevation","placeholder","footer","name","selector","data","height","isList"]),p=z(e),v=Object(g.a)().layout,y=Object(a.f)((function(t){return s?s(t,e):m})),R=y&&y.length?y.length:0,E=i?h-v.tablefooterheight:h,k=f?M:N;return o.createElement(D.a,{elevation:n,className:p.paper},0===R?o.createElement(b.a,{style:{height:E},container:!0,className:p.placeholder,alignItems:"center",justify:"center"},o.createElement(b.a,{item:!0,xs:!0},o.createElement(l,e)),o.createElement(b.a,{item:!0,xs:12})):o.createElement(k,Object.assign({name:d,data:y,height:E},w)),i&&o.createElement(o.Fragment,null,o.createElement(G.a,null),o.createElement(b.a,{container:!0,className:p.footer,alignContent:"center",alignItems:"center",justify:"flex-end"},o.createElement(b.a,{item:!0,container:!0,alignItems:"center",justify:"flex-end"},o.createElement(c.a,{align:"right",variant:"caption"},"Viewing ",R," ",d)))))}}}]);
//# sourceMappingURL=4.55a0fef0.chunk.js.map