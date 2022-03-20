(this.webpackJsonpstreamlit_component_template=this.webpackJsonpstreamlit_component_template||[]).push([[0],{58:function(e,t,a){e.exports=a(75)},73:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var r=a(5),n=a.n(r),i=a(24),s=a.n(i),o=a(0),l=a(1),c=a(8),u=a(7),d=a(2),f=a(3),h=a(40),m=a(9),v=Object(l.a)((function e(t,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(o.a)(this,e),this.name=t,this.imgSrc=a,this.sampleSrc=r})),p=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var r;Object(o.a)(this,a),r=t.call(this,e),console.log("PROPS",e);var n="number"===typeof e.defaultIdx?e.defaultIdx:null;return r.state={actors:e.actors||[],selected:n},r.select(n),r}return Object(l.a)(a,[{key:"select",value:function(e){console.log("Selecting...",e),e!==this.state.selected&&this.setState({selected:e}),this.props.onSelect&&this.props.onSelect(e)}},{key:"componentDidUpdate",value:function(e,t,a){this.props.actors!==e.actors&&this.setState({actors:this.props.actors||[]})}},{key:"render",value:function(){var e,t=this,a=[],r=0,i=Object(m.a)(this.state.actors);try{var s=function(){var i=e.value,s=["actor"];r===t.state.selected&&(console.log("SELECTED!",r),s.push("actor--selected"));var o=r;a.push(n.a.createElement("div",{key:o},n.a.createElement("figure",{className:s.join(" "),onClick:function(){console.log("selecting",o),t.select(o)}},n.a.createElement("img",{src:i.imgSrc,alt:i.name}),n.a.createElement("figcaption",null,i.name)))),r++};for(i.s();!(e=i.n()).done;)s()}catch(o){i.e(o)}finally{i.f()}return n.a.createElement("div",{className:"actor-grid"},a)}}]),a}(n.a.Component),y=a(42),g=a(94),S=a(93),k=a(53),b=a.n(k),R=a(54),E=a.n(R),O=a(48),j=a.n(O),w=a(92),T=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).audioSliderSrc=e.audioSliderSrc,r.waveformSlider=null,r.waveformSliderRef=n.a.createRef(),r.state={playing:!1,progress:0,time:0,totalTime:0,trigger:0},r.sliderRef=n.a.createRef(),r}return Object(l.a)(a,[{key:"initWaveformSlider",value:function(){var e=this;if(!this.waveformSlider){this.waveformSlider=j.a.create({container:this.waveformSliderRef.current,waveColor:"violet",progressColor:"purple",responsive:!0,xhr:{cache:"default",mode:"no-cors"}}),this.waveformSlider.load(this.audioSliderSrc),this.waveformSlider.setMute(!0),this.waveformSlider.on("seek",(function(t){console.log("Seeek!"),e.seek(t,!1),e.state.playing!==e.waveformSlider.isPlaying()&&(console.log("Warning waveform slider state not in sync with the player, syncing to playing:",e.state.playing),e.state.playing?e.waveformSlider.play():e.waveformSlider.pause())})),this.setState({trigger:Math.random()})}}},{key:"componentDidMount",value:function(){this.audioSliderSrc&&this.initWaveformSlider()}},{key:"updateProgress",value:function(e,t){var a=e/t;this.setState({progress:a,time:e,totalTime:t}),a>=1&&this.state.playing&&this.pause()}},{key:"seek",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.props.onSeek(e),this.waveformSlider&&t&&this.waveformSlider.seekTo(e)}},{key:"play",value:function(){this.state.progress>=1&&this.seek(0),this.setState({playing:!0}),this.props.onPlay(),this.waveformSlider&&this.waveformSlider.play()}},{key:"pause",value:function(){this.setState({playing:!1}),this.props.onPause(),this.waveformSlider&&this.waveformSlider.pause()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"player-ui"},this.audioSliderSrc?n.a.createElement("div",{className:"waveform-slider",ref:this.waveformSliderRef,style:{width:"100%"}}):null,this.waveformSlider?null:n.a.createElement(g.a,{value:Math.max(Math.min(100*this.state.progress,100),0),onChange:function(t,a){return e.seek(a/100)},"aria-label":"small",valueLabelDisplay:"off"}),n.a.createElement("br",null),this.state.totalTime>0?n.a.createElement("span",{className:"player-controls"},n.a.createElement(S.a,{onClick:function(){e.state.playing?e.pause():e.play()}}," ",this.state.playing?n.a.createElement(E.a,{className:"player-button"}):n.a.createElement(b.a,{className:"player-button"})," "),n.a.createElement("div",{className:"player-time"},n.a.createElement(y.FormattedTime,{numSeconds:this.state.time})," / ",n.a.createElement(y.FormattedTime,{numSeconds:this.state.totalTime})," ")):n.a.createElement(w.a,null))}}]),a}(n.a.Component),P=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).audiosRef=n.a.createRef(),r.audioSrcs=e.audioSrcs,r.videoSrc=e.videoSrc,r.useWaveformSlider=!!e.useWaveformSlider,r.onReady=e.onReady,r.audios=[],r.mediasReady={},r.playerUIRef=n.a.createRef(),r.videoPlayerRef=n.a.createRef(),r.selectedTrack=0,r.state={ready:!1,actors:r.props.actors},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.audios=[];var e,t=Object(m.a)(this.audiosRef.current.children);try{for(t.s();!(e=t.n()).done;){var a=e.value;console.log(a),this.audios.push(a)}}catch(r){t.e(r)}finally{t.f()}}},{key:"markMediaReady",value:function(e){this.mediasReady[e]=!0,console.log("Audio ready:",e),Object.getOwnPropertyNames(this.mediasReady).length===this.audioSrcs.length+(this.videoSrc?1:0)&&(this.setState({ready:!0}),this.selectTrack(this.selectedTrack),this.onReady&&this.onReady())}},{key:"play",value:function(){var e,t=Object(m.a)(this.audios);try{for(t.s();!(e=t.n()).done;){var a=e.value;console.log("play"),a.play()}}catch(r){t.e(r)}finally{t.f()}this.videoPlayerRef.current&&(this.videoPlayerRef.current.muted=!0,this.videoPlayerRef.current.play())}},{key:"pause",value:function(){var e,t=Object(m.a)(this.audios);try{for(t.s();!(e=t.n()).done;){var a=e.value;console.log("pause"),a.pause()}}catch(r){t.e(r)}finally{t.f()}this.videoPlayerRef.current&&this.videoPlayerRef.current.pause(),this.audios.length>0&&this.seek(this.audios[0].currentTime/this.audios[0].duration)}},{key:"seek",value:function(e){if(!(this.audios.length<=0)){var t,a=(e=Math.min(Math.max(e,0),1))*this.audios[0].duration,r=Object(m.a)(this.audios);try{for(r.s();!(t=r.n()).done;){var n=t.value;console.log("seek"),n.currentTime=a}}catch(i){r.e(i)}finally{r.f()}this.videoPlayerRef.current&&(this.videoPlayerRef.current.currentTime=a)}}},{key:"selectTrack",value:function(e){console.log("selected track",e),this.selectedTrack=e;var t,a=0,r=Object(m.a)(this.audios);try{for(r.s();!(t=r.n()).done;){var n=t.value;n.muted=a!==this.selectedTrack,console.log(n.volume),a++}}catch(i){r.e(i)}finally{r.f()}}},{key:"render",value:function(){var e,t=this,a=[],r=Object(m.a)(this.audioSrcs);try{var i=function(){var r=e.value,i={};0===a.length&&(i.onTimeUpdate=function(e){return t.playerUIRef.current.updateProgress(e.target.currentTime,e.target.duration)},i.onDurationChange=function(e){return t.playerUIRef.current.updateProgress(e.target.currentTime,e.target.duration)},i.onEnded=function(e){return t.playerUIRef.current.updateProgress(e.target.currentTime,e.target.duration)}),a.push(n.a.createElement("audio",Object.assign({src:r,preload:"auto",onCanPlayThrough:function(){t.markMediaReady(r)},key:r},i)))};for(r.s();!(e=r.n()).done;)i()}catch(s){r.e(s)}finally{r.f()}return n.a.createElement("div",{className:"vcdemo"},n.a.createElement("br",null),this.videoSrc?n.a.createElement("video",{src:this.videoSrc,playsInline:!0,muted:!0,preload:"auto",type:"video/mp4",ref:this.videoPlayerRef,onCanPlayThrough:function(){return t.markMediaReady("video")}}):null,n.a.createElement(T,{onSeek:function(e){t.seek(e)},onPlay:function(){t.play()},onPause:function(){t.pause()},ref:this.playerUIRef,audioSliderSrc:this.useWaveformSlider?this.audioSrcs[0]:null}),n.a.createElement("br",null),n.a.createElement(p,{actors:this.state.actors,defaultIdx:0,onSelect:function(e){t.selectTrack(e)}}),n.a.createElement("div",{ref:this.audiosRef},a))}}]),a}(n.a.Component),M=(a(73),function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={ready:!1},e.render=function(){var t=e.props.args.actors.map((function(e){return new v(e.name,e.img_src,e.sample_src)})),a=e.props.args.audio_srcs,r=e.props.args.video_src,i=e.props.args.use_wavesurfer_slider,s=n.a.createElement(P,{audioSrcs:a,actors:t,onReady:function(){e.state.ready||(console.log("Ready!!!!"),e.setState({ready:!0}),setTimeout((function(){return h.a.setComponentValue(1)}),300))},useWaveformSlider:i,videoSrc:r});return n.a.createElement("center",null,s)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){Object(c.a)(Object(u.a)(a.prototype),"componentDidMount",this).call(this)}}]),a}(h.b)),C=Object(h.c)(M);s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.5958ee6a.chunk.js.map