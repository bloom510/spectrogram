(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(183)},183:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(7),r=a.n(s),l=a(12),c=a(14),o=a(15),h=a(23),d=a(22),u=a(18),m=a(24),y=(n.Component,i.a.createContext()),p=a(105),f=function(e){return parseFloat(e)||0},g=function(e){if(e===window||e===document.body)return[window.innerWidth,window.innerHeight];var t=!1;!e.parentNode&&document.body&&(t=!0,document.body.appendChild(e));var a=e.getBoundingClientRect(),n=getComputedStyle(e),i=(0|a.height)+f(n.getPropertyValue("margin-top"))+f(n.getPropertyValue("margin-bottom")),s=(0|a.width)+f(n.getPropertyValue("margin-left"))+f(n.getPropertyValue("margin-right"));return t&&document.body&&document.body.removeChild(e),[s,i]},v=void 0,w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).handleResize=function(){var t=Object(u.a)(e),a=(t.ctx,t.canvas,e.state),n=a.width,i=a.height;e.setState(Object(l.a)({},e.setSize()),function(){e.props.canvasApp.setSize(n,i)})},e.setSize=function(){var t=e.canvas.parentElement;if(t){var a=g(t),n=Object(p.a)(a,2);return{width:n[0],height:n[1]}}},e.setRef=function(t){if(t){var a=e.props.createRef;e.canvas=t,"function"===typeof canvasRef&&a(t)}},e.state={width:0,height:0},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState(Object(l.a)({},this.setSize()),function(){window.addEventListener("resize",e.handleResize,!1),e.ctx=e.canvas.getContext("2d");var t=e.ctx,a=e.canvas,n=e.state,i=n.width,s=n.height;e.props.canvasApp.init(t,a,i,s)})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize,!1)}},{key:"render",value:function(){var e=window.devicePixelRatio||1,t=this.state,a=t.width,n=t.height;return i.a.createElement("canvas",{ref:this.setRef,width:a*e,height:n*e,style:Object(l.a)({width:a,height:n},this.props.style,{border:"1px solid"})})}}]),t}(n.Component),b=function(e){return i.a.createElement(w,{style:Object(l.a)({},e.style),canvasRef:function(e){v.canvas=e},canvasApp:e.canvasApp})},S=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).call(this))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e){return!!e.streamData}},{key:"init",value:function(e,t,a,n){this.ctx=e,this.canvas=t,this.canvas.width=a,this.canvas.height=n,this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.slice=this.ctx.getImageData(0,0,1,this.canvas.height),this.draw()}},{key:"setSize",value:function(e,t){this.canvas.width=e,this.canvas.height=t,cancelAnimationFrame(this.animationLoop),this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.slice=this.ctx.getImageData(0,0,1,this.canvas.height),this.draw(this.x,this.y)}},{key:"scaleImageData",value:function(e,t){for(var a=this.ctx.createImageData(e.width*t,e.height*t),n=0;n<e.height;n++)for(var i=0;i<e.width;i++)for(var s=[e.data[4*(n*e.width+i)+0],e.data[4*(n*e.width+i)+1],e.data[4*(n*e.width+i)+2],e.data[4*(n*e.width+i)+3]],r=0;r<t;r++)for(var l=n*t+r,c=0;c<t;c++)for(var o=i*t+c,h=0;h<4;h++)a.data[4*(l*a.width+o)+h]=s[h];return a}},{key:"draw",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.ctx,i=this.props,s=this.canvas,r=this.slice,l=s.width,c=(s.height,i.streamData);this.animationLoop=requestAnimationFrame(function(){t>l&&(t=0),e.x=t,e.y=a,t+=1,e.draw(t,a)});for(var o=r.data,h=0;h<o.length;h+=4)c?(o[h]=c[h],o[h+1]=c[h+1],o[h+2]=c[h+2]):(o[h]=0,o[h+1]=0,o[h+2]=0);n.putImageData(this.scaleImageData(r,2),t,a,0,0,s.width,s.height)}},{key:"render",value:function(){var e=this;return i.a.createElement(b,{style:{transform:"rotate(180deg) scaleX(-1)"},canvasRef:function(t){e.canvas=t},canvasApp:this})}}]),t}(n.Component),E=a(185),k=a(186),j=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).handleUpload=function(){var t=Object(u.a)(e),a=t.props,n=t.reader;e.setState({loading:!0});var i=new Audio,s=e.el.files[0];s?n.readAsDataURL(s):i.src="",n.onloadend=function(){i.src=n.result,a.onUploadSuccess({name:s.name,el:i}),e.setState({loading:!1})}},e.state={loading:!1},e.reader=new FileReader,e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state;return i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,{title:"upload audio"},i.a.createElement(k.a,{size:"small",shape:"circle",icon:"upload",loading:t.loading,onClick:function(){return e.el.click()}})),i.a.createElement("input",{accept:"audio/*",ref:function(t){return e.el=t},type:"file",style:{display:"none"},onChange:function(){return e.handleUpload()}}))}}]),t}(n.Component),O=function(e){return i.a.createElement(E.a,{title:"download image"},i.a.createElement(k.a,Object.assign({},e,{size:"small",shape:"circle",icon:"download"})))},A=function(e){return i.a.createElement(E.a,{title:e.isPlaying?"pause":"play"},i.a.createElement(k.a,Object.assign({},e,{size:"small",shape:"circle",icon:e.isPlaying?"pause-circle":"play-circle",onClick:e.handlePlayback})))},x=a(184),P=a(13),C=a(103),D=function(e){var t=e.onUploadSuccess,a=e.handleSelect,n=e.handlePlayback,s=e.isPlaying,r=e.selectedFile,l=e.dataSource;return i.a.createElement(x.a,{style:e.style,header:i.a.createElement("div",null,i.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},i.a.createElement(j,{onUploadSuccess:t}),i.a.createElement(A,{disabled:!r,handlePlayback:n,isPlaying:s}),i.a.createElement(O,null),e.loading?i.a.createElement(C.a,null):null),r?i.a.createElement("div",{style:{textAlign:"center",marginTop:"2%"}},i.a.createElement(P.a,{type:"sound"})," ",r.name):null),bordered:!0,dataSource:l,renderItem:function(e){return i.a.createElement(x.a.Item,null,i.a.createElement(k.a,{block:!0,style:{margin:"0 auto"},onClick:function(){return a(e)}},i.a.createElement(x.a.Item.Meta,{avatar:i.a.createElement("img",{width:25,height:25,src:"https://www.svgrepo.com/show/8210/musical-notes.svg"}),title:e.name})))}})},F=function(e){var t=Object(l.a)({display:"grid",gridTemplateColumns:"repeat(".concat(e.cols,", 1fr)"),gridTemplateRows:"repeat(".concat(e.rows,", 1fr)")},e.style),a=e.rows,n=e.cols;return i.a.createElement("div",{className:"grid",style:t},i.a.Children.map(e.children,function(e,t){return i.a.cloneElement(e,{id:t+1,rows:a+1,cols:n+1})}))},R=function(e){var t=Object(l.a)({},e.rowStart?{gridRowStart:e.rowStart}:{gridRowStart:e.id},e.rowEnd?{gridRowEnd:e.rowEnd+1}:null,e.colStart?{gridColumnStart:e.colStart}:{gridColumnStart:1},e.colEnd?{gridColumnEnd:e.colEnd+1}:{gridColumnEnd:e.cols},e.style);return i.a.createElement("div",{style:t},e.children)},z=function(){function e(){Object(c.a)(this,e),this.play=this.play.bind(this),this.getStreamData=this.getStreamData.bind(this)}return Object(o.a)(e,[{key:"checkContext",value:function(){if(!this.actx)try{console.log("New context instantiated"),this.actx=new(window.AudioContext||window.webkitAudioContext)}catch(e){console.log("Sorry, but your browser doesn't support the Web Audio API!",e)}}},{key:"fromElement",value:function(e){this.checkContext();var t=this.actx;try{this.analyser=t.createAnalyser(),this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.source=t.createMediaElementSource(e);var a=this.analyser,n=this.source;return a.fftSize=16384,a.minDecibels=-120,a.maxDecibels=-15,a.connect(t.destination),n.connect(this.analyser),this.source}catch(i){console.log("Failed to make stream: ",i)}}},{key:"play",value:function(e){e.play(),this.getStreamData()}},{key:"getStreamData",value:function(){return this.analyserLoop=requestAnimationFrame(this.getStreamData),this.analyser.getByteFrequencyData(this.dataArray),this.dataArray}},{key:"stop",value:function(e){e.pause(),e.currentTime=0,cancelAnimationFrame(this.analyserLoop)}}]),e}(),U=F,L=R,I=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={files:[],isPlaying:!1},e.onUploadSuccess=e.onUploadSuccess.bind(Object(u.a)(e)),e.handlePlayback=e.handlePlayback.bind(Object(u.a)(e)),e.handleSelect=e.handleSelect.bind(Object(u.a)(e)),e.handleStreamData=e.handleStreamData.bind(Object(u.a)(e)),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onUploadSuccess",value:function(e){var t=this;this.setState({files:this.state.files.concat(Object(l.a)({},e,{index:this.state.files.length})),selectedFile:this.state.selectedFile?this.state.selectedFile:e},function(){if(t.state.AudioStream&&t.state.isPlaying)t.AudioStream.stop(t.state.selectedFile.el),t.setState({isPlaying:!1});else{var a=new z;t.setState({AudioStream:a},function(){t.state.AudioStream.fromElement(e.el)})}})}},{key:"handlePlayback",value:function(){var e=this,t=this.state.AudioStream,a=this.state,n=a.isPlaying,i=a.selectedFile;this.setState({isPlaying:!this.state.isPlaying},function(){n?(cancelAnimationFrame(e.analyserLoop),t.stop(i.el)):(e.handleStreamData(),t.play(i.el))})}},{key:"handleStreamData",value:function(){this.setState({streamData:this.state.AudioStream.getStreamData()}),this.analyserLoop=requestAnimationFrame(this.handleStreamData)}},{key:"handleSelect",value:function(e){var t=this;this.state.selectedFile&&this.state.selectedFile.name!==e.name&&(this.state.AudioStream.stop(this.state.selectedFile.el),e.el.removeEventListener("pause",function(){return cancelAnimationFrame(t.analyserLoop)})),this.setState({selectedFile:e,isPlaying:!1}),e.el.addEventListener("pause",function(){return cancelAnimationFrame(t.analyserLoop)})}},{key:"render",value:function(){return i.a.createElement(U,{cols:8,rows:2},i.a.createElement(L,{style:{height:"50vh"}},i.a.createElement(S,{streamData:this.state.streamData,isPlaying:this.state.isPlaying})),i.a.createElement(L,null,i.a.createElement(D,{style:{height:"100%"},selectedFile:this.state.selectedFile,onUploadSuccess:this.onUploadSuccess,handlePlayback:this.handlePlayback,handleSelect:this.handleSelect,isPlaying:this.state.isPlaying,dataSource:this.state.files})))}}]),t}(n.Component);a(182);r.a.render(i.a.createElement(I,null),document.getElementById("root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.a7f01c1f.chunk.js.map