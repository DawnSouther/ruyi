import{$ as it,$a as Wt,A as yi,Aa as Ja,Ab as kn,B as Se,Ba as vn,Bb as ys,C as yr,Ca as ts,Cb as bs,D as Ht,Da as X,Db as Rr,E as qa,Ea as es,Eb as vs,F as hn,Fa as Er,Fb as As,G as Zt,Ga as is,Gb as Or,H as br,Ha as ki,Hb as ws,I as Ha,Ia as Ei,J as Wa,Ja as ns,K as vr,Ka as rs,L as un,La as os,M as Tt,Ma as Ot,N as Xt,Na as Bt,O as st,Oa as yt,P as tt,Pa as Jt,Q as Ar,Qa as Me,R as H,Ra as as,S as et,Sa as ss,T as $a,Ta as ls,U as Z,Ua as lt,V as wr,Va as mt,W as q,Wa as _t,X as P,Xa as An,Y as bi,Ya as te,Z as vi,Za as Lt,_ as Rt,_a as Ci,a as L,aa as pt,ab as ee,b as at,ba as Ai,bb as Cr,ca as Ya,cb as Ft,d as lp,da as fn,db as Nt,e as dp,ea as de,eb as ds,f as Ee,fa as wi,fb as cs,g as za,ga as gn,gb as $t,h as cn,ha as yn,hb as wn,i as ur,ia as Qa,ib as ps,j as pn,ja as Ka,jb as Sr,k as ot,ka as Ie,kb as Te,l as ft,la as Ga,lb as Pt,m as Gt,ma as _r,mb as _n,n as St,na as ut,nb as xn,o as z,oa as gt,ob as Ir,p as fi,pa as xr,pb as ms,q as fr,qa as Za,qb as Dr,r as Va,ra as bn,rb as Mr,s as W,sa as Xa,sb as pe,t as gi,ta as ce,tb as hs,u as wt,ua as De,ub as Re,v as mn,va as _i,vb as us,w as gr,wa as xi,wb as Tr,x as Ua,xa as dt,xb as fs,y as Mt,ya as K,yb as gs,z as Ce,za as kr,zb as ht}from"./chunk-3NK2HCSQ.js";var ql=lp((Yn,$o)=>{"use strict";(function(i,t){typeof Yn=="object"&&typeof $o=="object"?$o.exports=t():typeof define=="function"&&define.amd?define("DPlayer",[],t):typeof Yn=="object"?Yn.DPlayer=t():i.DPlayer=t()})(self,()=>(()=>{var i={916:(n,l,p)=>{var y=p(471);n.exports=function(v){"use strict";var b,u="",x=(v=v||{}).video,E=v.options,k=y.$escape,T=v.tran,B=v.icons,R=v.index,V=y.$each;return v.$value,v.$index,u+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,b=p(568)(x),u+=b,u+=`
    `,E.logo&&(u+=`
    <div class="dplayer-logo">
        <img src="`,u+=k(E.logo),u+=`">
    </div>
    `),u+=`
    <div class="dplayer-danmaku"`,E.danmaku&&E.danmaku.bottom&&(u+=' style="margin-bottom:',u+=k(E.danmaku.bottom),u+='"'),u+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,E.danmaku&&(u+=`
        <span class="dplayer-danloading">`,u+=k(T("danmaku-loading")),u+=`</span>
        `),u+=`
        <span class="diplayer-loading-icon">`,u+=B.loading,u+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,u+=k(T("setting")),u+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,u+=B.pallette,u+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,u+=k(T("set-danmaku-color")),u+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,u+=k(R),u+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,u+=k(R),u+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,u+=k(R),u+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,u+=k(R),u+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,u+=k(R),u+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,u+=k(R),u+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,u+=k(T("set-danmaku-type")),u+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,u+=k(R),u+=`" value="1">
                    <span>`,u+=k(T("top")),u+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,u+=k(R),u+=`" value="0" checked>
                    <span>`,u+=k(T("rolling")),u+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,u+=k(R),u+=`" value="2">
                    <span>`,u+=k(T("bottom")),u+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,u+=k(T("input-danmaku-enter")),u+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,u+=k(T("send")),u+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,u+=B.send,u+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,u+=B.play,u+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,u+=B.volumeDown,u+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,u+=k(E.theme),u+=`;">
                        <span class="dplayer-thumb" style="background: `,u+=k(E.theme),u+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,E.live&&(u+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,u+=k(E.theme),u+=';"></span>',u+=k(T("live")),u+=`</span>
        `),u+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,E.video.quality&&(u+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,u+=k(E.video.quality[E.video.defaultQuality].name),u+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,V(E.video.quality,function(j,It){u+=`
                    <div class="dplayer-quality-item" data-index="`,u+=k(It),u+='">',u+=k(j.name),u+=`</div>
                `}),u+=`
                </div>
            </div>
        </div>
        `),u+=`
        `,E.screenshot&&(u+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,u+=k(T("screenshot")),u+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,u+=B.camera,u+=`</span>
        </div>
        `),u+=`
        `,E.airplay&&(u+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,u+=k(T("airplay")),u+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,u+=B.airplay,u+=`</span>
        </div>
        `),u+=`
        `,E.chromecast&&(u+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,u+=k(T("chromecast")),u+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,u+=B.chromecast,u+=`</span>
        </div>
        `),u+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,u+=k(T("send-danmaku")),u+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,u+=B.comment,u+=`</span>
            </button>
        </div>
        `,E.subtitle&&(u+=`
        `,typeof E.subtitle.url=="string"?(u+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,u+=k(T("hide-subs")),u+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,u+=B.subtitle,u+=`</span>
            </button>
        </div>
        `):(u+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,u+=k(T("subtitle")),u+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,u+=B.subtitle,u+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,V(E.subtitle.url,function(j,It){u+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,u+=k(j.url),u+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,u+=k(j.lang?j.name?j.name+" ("+T(j.lang)+")":T(j.lang):j.name),u+=`</span>
                        </div>
                    `}),u+=`
                </div>
            </div>
        </div>
        `),u+=`
        `),u+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,u+=k(T("setting")),u+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,u+=B.setting,u+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,u+=k(T("speed")),u+=`</span>
                        <div class="dplayer-toggle">`,u+=B.right,u+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,u+=k(T("loop")),u+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,u+=k(T("show-danmaku")),u+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,u+=k(T("unlimited-danmaku")),u+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,u+=k(T("opacity-danmaku")),u+=`</span>
                        <div class="dplayer-danmaku-bar-wrap">
                            <div class="dplayer-danmaku-bar">
                                <div class="dplayer-danmaku-bar-inner">
                                    <span class="dplayer-thumb"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dplayer-setting-speed-panel">
                    `,V(E.playbackSpeed,function(j,It){u+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,u+=k(j),u+=`">
                            <span class="dplayer-label">`,u+=k(j===1?T("normal"):j),u+=`</span>
                        </div>
                    `}),u+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,u+=k(T("web-fullscreen")),u+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,u+=B.fullWeb,u+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,u+=k(T("fullscreen")),u+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,u+=B.full,u+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,u+=k(E.theme),u+=`">
                <span class="dplayer-thumb" style="background: `,u+=k(E.theme),u+=`"></span>
            </div>
        </div>
    </div>
</div>
<div class="dplayer-info-panel dplayer-info-panel-hide">
    <div class="dplayer-info-panel-close">[x]</div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">
        <span class="dplayer-info-panel-item-title">Player version</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">
        <span class="dplayer-info-panel-item-title">Player FPS</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">
        <span class="dplayer-info-panel-item-title">Video type</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">
        <span class="dplayer-info-panel-item-title">Video url</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">
        <span class="dplayer-info-panel-item-title">Video resolution</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">
        <span class="dplayer-info-panel-item-title">Video duration</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `,E.danmaku&&(u+=`
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">
        <span class="dplayer-info-panel-item-title">Danmaku id</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">
        <span class="dplayer-info-panel-item-title">Danmaku api</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">
        <span class="dplayer-info-panel-item-title">Danmaku amount</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `),u+=`
</div>
<div class="dplayer-menu">
    `,V(E.contextmenu,function(j,It){u+=`
        <div class="dplayer-menu-item">
            <a`,j.link&&(u+=' target="_blank"'),u+=' href="',u+=k(j.link||"javascript:void(0);"),u+='">',j.key&&(u+=" ",u+=k(T(j.key))),j.text&&(u+=" ",u+=k(j.text)),u+=`</a>
        </div>
    `}),u+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,u+=B.play,u+=`
</button>`}},568:(n,l,p)=>{var y=p(471);n.exports=function(v){"use strict";var b="",u=(v=v||{}).enableSubtitle,x=v.subtitle,E=v.current,k=v.airplay,T=v.pic,B=y.$escape,R=v.screenshot,V=v.preload,j=v.url;return u=x&&x.type==="webvtt",b+=`
<video
    class="dplayer-video `,E&&(b+="dplayer-video-current"),b+=`"
    webkit-playsinline
    `,k&&(b+=' x-webkit-airplay="allow" '),b+=`
    playsinline
    `,T&&(b+='poster="',b+=B(T),b+='"'),b+=`
    `,(R||u)&&(b+='crossorigin="anonymous"'),b+=`
    `,V&&(b+='preload="',b+=B(V),b+='"'),b+=`
    `,k?b+=`
    nosrc
    `:j&&(b+=`
    src="`,b+=B(j),b+=`"
    `),b+=`
    >
    `,k&&(b+=`
    <source src="`,b+=B(j),b+=`">
    `),b+=`
    `,u&&(b+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,b+=B(typeof x.url=="string"?x.url:x.url[x.index].url),b+=`"></track>
    `),b+`
</video>`}},49:(n,l,p)=>{"use strict";p.d(l,{Z:()=>x});var y=p(415),v=p.n(y),b=p(352),u=p.n(b)()(v());u.push([n.id,`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: 12px;
    font-size: var(--balloon-font-size);
    background: rgba(16, 16, 16, 0.95);
    background: var(--balloon-color);
    border-radius: 2px;
    color: #fff;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: rgba(16, 16, 16, 0.95);
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, 4px);
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, 4px);
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(4px * -1));
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: rgba(16, 16, 16, 0.95);
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(4px * -1));
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(4px, -50%);
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: rgba(16, 16, 16, 0.95);
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(4px * -1), -50%);
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: rgba(16, 16, 16, 0.95);
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`,"",{version:3,sources:["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",sourcesContent:[`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--balloon-font-size);
    background: var(--balloon-color);
    border-radius: 2px;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`],sourceRoot:""}]);let x=u},685:(n,l,p)=>{"use strict";p.d(l,{Z:()=>V});var y=p(415),v=p.n(y),b=p(352),u=p.n(b),x=p(49),E=p(80),k=p.n(E),T=new URL(p(831),p.b),B=u()(v());B.i(x.Z);var R=k()(T);B.push([n.id,`@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(`+R+`) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,"",{version:3,sources:["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/notice.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/subtitle.less","webpack://./src/css/video.less","webpack://./src/css/info-panel.less"],names:[],mappings:"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,qBAAA;AHkTpB;AIlXC;EDgEmB,qBAAA;AHqTpB;AIrXC;EDgEmB,qBAAA;AHwTpB;AIxXC;EDgEmB,qBAAA;AH2TpB;AI3XC;EDgEmB,qBAAA;AH8TpB;AI9XC;EDgEmB,qBAAA;AHiUpB;AIjYC;EDgEmB,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,yBAAA;EACA,iCAAA;EACA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;AIjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;AJmqCJ;AItqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,0CAAA;AJmqCR;AIhrCA;EAiBQ,4CAAA;AJkqCR;AI9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;EJgqCN;EI9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJgqCN;AACF;AI7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJ+pCN;EI7pCE;IACI,eAAA;EJ+pCN;EI7pCE;IACI,YAAA;IACA,iBAAA;EJ+pCN;EI7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;EJ+pCN;AACF;ASltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;ATotCJ;ASntCI;EACI,aAAA;ATqtCR;AU/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AViuCJ;AUhuCI;EACI,cAAA;AVkuCR;AU9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AVguCJ;AUruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AViuCR;AU1uCA;EAYQ,cAAA;AViuCR;AU7uCA;EAeQ,aAAA;AViuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",sourcesContent:[`@keyframes my-face {
    2% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    4% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    6% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    8% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    10% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    12% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    14% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    16% {
        transform: translate(0, -0.5px) rotate(-1.5deg);
    }
    18% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    20% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    22% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    24% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    26% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    28% {
        transform: translate(0, 0.5px) rotate(1.5deg);
    }
    30% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    32% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    34% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    36% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    38% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    40% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    42% {
        transform: translate(0, 2.5px) rotate(-1.5deg);
    }
    44% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    46% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    48% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    50% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    52% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    54% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    56% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    58% {
        transform: translate(0, 0.5px) rotate(2.5deg);
    }
    60% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    62% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    64% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    66% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    68% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    70% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    72% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    74% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    76% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    78% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    80% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    82% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    84% {
        transform: translate(0, 1.5px) rotate(2.5deg);
    }
    86% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    88% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    90% {
        transform: translate(0, 2.5px) rotate(-0.5deg);
    }
    92% {
        transform: translate(0, 0.5px) rotate(-0.5deg);
    }
    94% {
        transform: translate(0, 2.5px) rotate(0.5deg);
    }
    96% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    98% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}`,`@import '../../node_modules/balloon-css/balloon.css';
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,`.dplayer {
    position: relative;
    overflow: hidden;
    user-select: none;
    line-height: 1;

    * {
        box-sizing: content-box;
    }

    svg {
        width: 100%;
        height: 100%;

        path,
        circle {
            fill: #fff;
        }
    }

    &:-webkit-full-screen {
        width: 100%;
        height: 100%;
        background: #000;
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        margin: 0;
        padding: 0;
        transform: translate(0, 0);
        
    }

    &.dplayer-no-danmaku {
        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
            .dplayer-setting-showdan,
            .dplayer-setting-danmaku,
            .dplayer-setting-danunlimit {
                display: none;
            }
        }

        .dplayer-controller .dplayer-icons .dplayer-comment {
            display: none;
        }

        .dplayer-danmaku {
            display: none;
        }
    }

    &.dplayer-live {
        .dplayer-time {
            display: none;
        }
        .dplayer-bar-wrap {
            display: none;
        }
        .dplayer-setting-speed {
            display: none;
        }
        .dplayer-setting-loop {
            display: none;
        }

        &.dplayer-no-danmaku {
            .dplayer-setting {
                display: none;
            }
        }
    }

    &.dplayer-arrow {
        .dplayer-danmaku {
            font-size: 18px;
        }
        .dplayer-icon {
            margin: 0 -3px;
        }
    }

    &.dplayer-playing {
        .dplayer-danmaku .dplayer-danmaku-move {
            animation-play-state: running;
        }

        @media (min-width: 900px) {
            .dplayer-controller-mask {
                opacity: 0;
            }
            .dplayer-controller {
                opacity: 0;
            }

            &:hover {
                .dplayer-controller-mask {
                    opacity: 1;
                }
                .dplayer-controller {
                    opacity: 1;
                }
            }
        }
    }

    &.dplayer-loading {
        .dplayer-bezel .diplayer-loading-icon {
            display: block;
        }
    }

    &.dplayer-loading,
    &.dplayer-paused {
        .dplayer-danmaku,
        .dplayer-danmaku-move {
            animation-play-state: paused;
        }
    }

    &.dplayer-hide-controller {
        cursor: none;

        .dplayer-controller-mask {
            opacity: 0;
            transform: translateY(100%);
        }
        .dplayer-controller {
            opacity: 0;
            transform: translateY(100%);
        }
    }
    &.dplayer-show-controller {
        .dplayer-controller-mask {
            opacity: 1;
        }
        .dplayer-controller {
            opacity: 1;
        }
    }
    &.dplayer-fulled {
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        width: 100% !important;
        height: 100% !important;
    }
    &.dplayer-mobile {
        .dplayer-controller .dplayer-icons {
            .dplayer-volume,
            .dplayer-camera-icon,
            .dplayer-airplay-icon,
            .dplayer-chromecast-icon,
            .dplayer-play-icon {
                display: none;
            }
            .dplayer-full .dplayer-full-in-icon {
                position: static;
                display: inline-block;
            }
        }

        .dplayer-bar-time {
            display: none;
        }

        &.dplayer-hide-controller {
            .dplayer-mobile-play {
                display: none;
            }
        }

        .dplayer-mobile-play {
            display: block;
        }
    }
}

// To hide scroll bar, apply this class to <body>
.dplayer-web-fullscreen-fix {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
}
`,`@import '../../node_modules/balloon-css/balloon.css';

[data-balloon]:before {
    display: none;
}

[data-balloon]:after {
    padding: 0.3em 0.7em;
    background: rgba(17, 17, 17, 0.7);
}

[data-balloon][data-balloon-pos="up"]:after {
    margin-bottom: 0;
}`,`.dplayer-bezel {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    pointer-events: none;
    .dplayer-bezel-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -26px 0 0 -26px;
        height: 52px;
        width: 52px;
        padding: 12px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, .5);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        &.dplayer-bezel-transition {
            animation: bezel-hide .5s linear;
        }
        @keyframes bezel-hide {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    }
    .dplayer-danloading {
        position: absolute;
        top: 50%;
        margin-top: -7px;
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        animation: my-face 5s infinite ease-in-out;
    }
    .diplayer-loading-icon {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -18px 0 0 -18px;
        height: 36px;
        width: 36px;
        pointer-events: none;
        .diplayer-loading-hide {
            display: none;
        }
        .diplayer-loading-dot {
            animation: diplayer-loading-dot-fade .8s ease infinite;
            opacity: 0;
            transform-origin: 4px 4px;
            each(range(7), {
                &.diplayer-loading-dot-@{value} {
                    animation-delay: (@value * 0.1s);
                }
            });
        }
        @keyframes diplayer-loading-dot-fade {
            0% {
                opacity: .7;
                transform: scale(1.2, 1.2)
            }
            50% {
                opacity: .25;
                transform: scale(.9, .9)
            }
            to {
                opacity: .25;
                transform: scale(.85, .85)
            }
        }
    }
}`,`.dplayer-notice-list{
    position: absolute;
    bottom: 60px;
    left: 20px;

    .dplayer-notice {
        border-radius: 2px;
        background: rgba(28, 28, 28, 0.9);
        transition: all .3s ease-in-out;
        overflow: hidden;
        color: #fff;
        display: table;
        pointer-events: none;
        animation: showNotice .3s ease 1 forwards;
    }

    .remove-notice{
        animation: removeNotice .3s ease 1 forwards;
    }
}

@keyframes showNotice {
    from {
        padding: 0;
        font-size: 0;
        margin-top: 0;
    }
    to {
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
}

@keyframes removeNotice {
    0%{
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
    20%{
        font-size: 12px;
    }
    21%{
        font-size: 0;
        padding: 7px 10px;
    }
    100%{
        padding: 0;
        margin-top: 0;
        font-size: 0;
    }
}
`,`.dplayer-controller-mask {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
    height: 98px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
}

.dplayer-controller {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 41px;
    padding: 0 20px;
    user-select: none;
    transition: all 0.3s ease;
    &.dplayer-controller-comment {
        .dplayer-icons {
            display: none;
        }
        .dplayer-icons.dplayer-comment-box {
            display: block;
        }
    }
    .dplayer-bar-wrap {
        padding: 5px 0;
        cursor: pointer;
        position: absolute;
        bottom: 33px;
        width: calc(100% - 40px);
        height: 3px;
        &:hover {
            .dplayer-bar .dplayer-played .dplayer-thumb {
                transform: scale(1);
            }
            .dplayer-highlight {
                display: block;
                width: 8px;
                transform: translateX(-4px);
                top: 4px;
                height: 40%;
            }
        }
        .dplayer-highlight {
            z-index: 12;
            position: absolute;
            top: 5px;
            width: 6px;
            height: 20%;
            border-radius: 6px;
            background-color: #fff;
            text-align: center;
            transform: translateX(-3px);
            transition: all .2s ease-in-out;
            &:hover {
                .dplayer-highlight-text {
                    display: block;
                }
                &~.dplayer-bar-preview {
                    opacity: 0;
                }
                &~.dplayer-bar-time {
                    opacity: 0;
                }
            }
            .dplayer-highlight-text {
                display: none;
                position: absolute;
                left: 50%;
                top: -24px;
                padding: 5px 8px;
                background-color: rgba(0, 0, 0, .62);
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                transform: translateX(-50%);
            }
        }
        .dplayer-bar-preview {
            position: absolute;
            background: #fff;
            pointer-events: none;
            display: none;
            background-size: 16000px 100%;
        }
        .dplayer-bar-preview-canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        .dplayer-bar-time {
            &.hidden {
                opacity: 0;
            }
            position: absolute;
            left: 0px;
            top: -20px;
            border-radius: 4px;
            padding: 5px 7px;
            background-color: rgba(0, 0, 0, 0.62);
            color: #fff;
            font-size: 12px;
            text-align: center;
            opacity: 1;
            transition: opacity .1s ease-in-out;
            word-wrap: normal;
            word-break: normal;
            z-index: 2;
            pointer-events: none;
        }
        .dplayer-bar {
            position: relative;
            height: 3px;
            width: 100%;
            background: rgba(255, 255, 255, .2);
            cursor: pointer;
            .dplayer-loaded {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: rgba(255, 255, 255, .4);
                height: 3px;
                transition: all 0.5s ease;
                will-change: width;
            }
            .dplayer-played {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                height: 3px;
                will-change: width;
                .dplayer-thumb {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    margin-top: -4px;
                    margin-right: -10px;
                    height: 11px;
                    width: 11px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    transform: scale(0);
                }
            }
        }
    }
    .dplayer-icons {
        height: 38px;
        position: absolute;
        bottom: 0;
        &.dplayer-comment-box {
            display: none;
            position: absolute;
            transition: all .3s ease-in-out;
            z-index: 2;
            height: 38px;
            bottom: 0;
            left: 20px;
            right: 20px;
            color: #fff;
            .dplayer-icon {
                padding: 7px;
            }
            .dplayer-comment-setting-icon {
                position: absolute;
                left: 0;
                top: 0;
            }
            .dplayer-send-icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .dplayer-comment-setting-box {
                position: absolute;
                background: rgba(28, 28, 28, 0.9);
                bottom: 41px;
                left: 0;
                box-shadow: 0 0 25px rgba(0, 0, 0, .3);
                border-radius: 4px;
                padding: 10px 10px 16px;
                font-size: 14px;
                width: 204px;
                transition: all .3s ease-in-out;
                transform: scale(0);
                &.dplayer-comment-setting-open {
                    transform: scale(1);
                }
                input[type=radio] {
                    display: none;
                }
                label {
                    cursor: pointer;
                }
                .dplayer-comment-setting-title {
                    font-size: 13px;
                    color: #fff;
                    line-height: 30px;
                }
                .dplayer-comment-setting-type {
                    font-size: 0;
                    .dplayer-comment-setting-title {
                        margin-bottom: 6px;
                    }
                    label {
                        &:nth-child(2) {
                            span {
                                border-radius: 4px 0 0 4px;
                            }
                        }
                        &:nth-child(4) {
                            span {
                                border-radius: 0 4px 4px 0;
                            }
                        }
                    }
                    span {
                        width: 33%;
                        padding: 4px 6px;
                        line-height: 16px;
                        display: inline-block;
                        font-size: 12px;
                        color: #fff;
                        border: 1px solid #fff;
                        margin-right: -1px;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                    }
                    input:checked+span {
                        background: #E4E4E6;
                        color: #1c1c1c;
                    }
                }
                .dplayer-comment-setting-color {
                    font-size: 0;
                    label {
                        font-size: 0;
                        padding: 6px;
                        display: inline-block;
                    }
                    span {
                        width: 22px;
                        height: 22px;
                        display: inline-block;
                        border-radius: 50%;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover {
                            animation: my-face 5s infinite ease-in-out;
                        }
                    }
                }
            }
            .dplayer-comment-input {
                outline: none;
                border: none;
                padding: 8px 31px;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                border-radius: 4px;
                background: none;
                margin: 0;
                height: 100%;
                box-sizing: border-box;
                width: 100%;
                color: #fff;
                &::placeholder {
                    color: #fff;
                    opacity: 0.8;
                }
                &::-ms-clear {
                    display: none;
                }
            }
        }
        &.dplayer-icons-left {
            .dplayer-icon {
                padding: 7px;
            }
        }
        &.dplayer-icons-right {
            right: 20px;
            .dplayer-icon {
                padding: 8px;
            }
        }
        .dplayer-time,
        .dplayer-live-badge {
            line-height: 38px;
            color: #eee;
            text-shadow: 0 0 2px rgba(0, 0, 0, .5);
            vertical-align: middle;
            font-size: 13px;
            cursor: default;
        }
        .dplayer-live-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            vertical-align: 4%;
            margin-right: 5px;
            content: '';
            border-radius: 6px;
        }
        .dplayer-icon {
            width: 40px;
            height: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
            vertical-align: middle;
            box-sizing: border-box;
            display: inline-block;
            .dplayer-icon-content {
                transition: all .2s ease-in-out;
                opacity: .8;
            }
            &:hover {
                .dplayer-icon-content {
                    opacity: 1;
                }
            }
            &.dplayer-quality-icon {
                color: #fff;
                width: auto;
                line-height: 22px;
                font-size: 14px;
            }
            &.dplayer-comment-icon {
                padding: 10px 9px 9px;
            }
            &.dplayer-setting-icon {
                padding-top: 8.5px;
            }
            &.dplayer-volume-icon {
                width: 43px;
            }
        }
        .dplayer-volume {
            position: relative;
            display: inline-block;
            cursor: pointer;
            height: 100%;
            &:hover {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            &.dplayer-volume-active {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            .dplayer-volume-bar-wrap {
                display: inline-block;
                margin: 0 10px 0 -5px;
                vertical-align: middle;
                height: 100%;
                .dplayer-volume-bar {
                    position: relative;
                    top: 17px;
                    width: 0;
                    height: 3px;
                    background: #aaa;
                    transition: all 0.3s ease-in-out;
                    .dplayer-volume-bar-inner {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 100%;
                        transition: all 0.1s ease;
                        will-change: width;
                        .dplayer-thumb {
                            position: absolute;
                            top: 0;
                            right: 5px;
                            margin-top: -4px;
                            margin-right: -10px;
                            height: 11px;
                            width: 11px;
                            border-radius: 50%;
                            cursor: pointer;
                            transition: all .3s ease-in-out;
                            transform: scale(0);
                        }
                    }
                }
            }
        }
        .dplayer-subtitle-btn {
            display: inline-block;
            height: 100%;
        }
        .dplayer-subtitles {
            display: inline-block;
            height: 100%;
            .dplayer-subtitles-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: fit-content;
                max-width: 240px;
                min-width: 120px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: auto;
                z-index: 2;
                &.dplayer-subtitles-panel {
                    display: block;
                }
                &.dplayer-subtitles-box-open {
                    transform: scale(1);
                }
            }
            .dplayer-subtitles-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-setting {
            display: inline-block;
            height: 100%;
            .dplayer-setting-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: 150px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                z-index: 2;
                &>div {
                    display: none;
                    &.dplayer-setting-origin-panel {
                        display: block;
                    }
                }
                &.dplayer-setting-box-open {
                    transform: scale(1);
                }
                &.dplayer-setting-box-narrow {
                    width: 70px;
                    text-align: center;
                }
                &.dplayer-setting-box-speed {
                    .dplayer-setting-origin-panel {
                        display: none;
                    }
                    .dplayer-setting-speed-panel {
                        display: block;
                    }
                }
            }
            .dplayer-setting-item,
            .dplayer-setting-speed-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
            .dplayer-setting-danmaku {
                padding: 5px 0;
                .dplayer-label {
                    padding: 0 10px;
                    display: inline;
                }
                &:hover {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                &.dplayer-setting-danmaku-active {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                .dplayer-danmaku-bar-wrap {
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: none;
                    vertical-align: middle;
                    height: 100%;
                    width: 100%;
                    .dplayer-danmaku-bar {
                        position: relative;
                        top: 8.5px;
                        width: 100%;
                        height: 3px;
                        background: #fff;
                        transition: all 0.3s ease-in-out;
                        .dplayer-danmaku-bar-inner {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            height: 100%;
                            transition: all 0.1s ease;
                            background: #aaa;
                            will-change: width;
                            .dplayer-thumb {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                margin-top: -4px;
                                margin-right: -10px;
                                height: 11px;
                                width: 11px;
                                border-radius: 50%;
                                cursor: pointer;
                                transition: all .3s ease-in-out;
                                background: #aaa;
                            }
                        }
                    }
                }
            }
        }
        .dplayer-full {
            display: inline-block;
            height: 100%;
            position: relative;
            &:hover {
                .dplayer-full-in-icon {
                    display: block;
                }
            }
            .dplayer-full-in-icon {
                position: absolute;
                top: -30px;
                z-index: 1;
                display: none;
            }
        }
        .dplayer-quality {
            position: relative;
            display: inline-block;
            height: 100%;
            z-index: 2;
            &:hover {
                .dplayer-quality-list {
                    display: block;
                }
                .dplayer-quality-mask {
                    display: block;
                }
            }
            .dplayer-quality-mask {
                display: none;
                position: absolute;
                bottom: 38px;
                left: -18px;
                width: 80px;
                padding-bottom: 12px;
            }
            .dplayer-quality-list {
                display: none;
                font-size: 12px;
                width: 80px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 5px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                color: #fff;
                text-align: center;
            }
            .dplayer-quality-item {
                height: 25px;
                box-sizing: border-box;
                cursor: pointer;
                line-height: 25px;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-comment {
            display: inline-block;
            height: 100%;
        }
        .dplayer-label {
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
        }
        .dplayer-toggle {
            width: 32px;
            height: 20px;
            text-align: center;
            font-size: 0;
            vertical-align: middle;
            position: absolute;
            top: 5px;
            right: 10px;
            input {
                max-height: 0;
                max-width: 0;
                display: none;
            }
            input+label {
                display: inline-block;
                position: relative;
                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
                border: 1px solid rgb(223, 223, 223);
                height: 20px;
                width: 32px;
                border-radius: 10px;
                box-sizing: border-box;
                cursor: pointer;
                transition: .2s ease-in-out;
            }
            input+label:before {
                content: "";
                position: absolute;
                display: block;
                height: 18px;
                width: 18px;
                top: 0;
                left: 0;
                border-radius: 15px;
                transition: .2s ease-in-out;
            }
            input+label:after {
                content: "";
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                border-radius: 15px;
                background: #fff;
                transition: .2s ease-in-out;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                height: 18px;
                width: 18px;
            }
            input:checked+label {
                border-color: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:before {
                width: 30px;
                background: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:after {
                left: 12px;
            }
        }
    }
}

.dplayer-mobile-play {
    display: none;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    opacity: 0.8;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`,`.dplayer-danmaku {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    .dplayer-danmaku-item {
        display: inline-block;
        pointer-events: none;
        user-select: none;
        cursor: default;
        white-space: nowrap;
        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);
        &--demo {
            position: absolute;
            visibility: hidden;
        }
    }
    .dplayer-danmaku-right {
        position: absolute;
        right: 0;
        transform: translateX(100%);
        &.dplayer-danmaku-move {
            will-change: transform;
            animation-name: 'danmaku';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku {
        from {
            transform: translateX(100%);
        }
    }
    .dplayer-danmaku-top,
    .dplayer-danmaku-bottom {
        position: absolute;
        width: 100%;
        text-align: center;
        visibility: hidden;
        &.dplayer-danmaku-move {
            will-change: visibility;
            animation-name: 'danmaku-center';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku-center {
        from {
            visibility: visible;
        }
        to {
            visibility: visible;
        }
    }
}`,`.dplayer-logo {
    pointer-events: none;
    position: absolute;
    left: 20px;
    top: 20px;
    max-width: 50px;
    max-height: 50px;
    img {
        max-width: 100%;
        max-height: 100%;
        background: none;
    }
}`,`.dplayer-menu {
    position: absolute;
    width: 170px;
    border-radius: 2px;
    background: rgba(28, 28, 28, 0.85);
    padding: 5px 0;
    overflow: hidden;
    z-index: 3;
    display: none;
    &.dplayer-menu-show {
        display: block;
    }
    .dplayer-menu-item {
        height: 30px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, .1);
        }
        a {
            display: inline-block;
            padding: 0 10px;
            line-height: 30px;
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            width: 100%;
            box-sizing: border-box;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:hover {
                text-decoration: none;
            }
        }
    }
}`,`.dplayer-subtitle {
    position: absolute;
    bottom: 40px;
    width: 90%;
    left: 5%;
    text-align: center;
    color: #fff;
    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    &.dplayer-subtitle-hide {
        display: none;
    }
}`,`.dplayer-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: none;
    &.dplayer-mask-show {
        display: block;
    }
}

.dplayer-video-wrap {
    position: relative;
    background: #000;
    font-size: 0;
    width: 100%;
    height: 100%;
    .dplayer-video {
        width: 100%;
        height: 100%;
        display: none;
    }
    .dplayer-video-current {
        display: block;
    }
    .dplayer-video-prepare {
        display: none;
    }
}`,`.dplayer-info-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 400px;
    background: rgba(28, 28, 28, 0.8);
    padding: 10px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;

    &-hide {
        display: none;
    }

    .dplayer-info-panel-close {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .dplayer-info-panel-item {
        & > span {
            display: inline-block;
            vertical-align: middle;
            line-height: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .dplayer-info-panel-item-title {
        width: 100px;
        text-align: right;
        margin-right: 10px;
    }
    
    .dplayer-info-panel-item-data {
        width: 260px;
    }
}`],sourceRoot:""}]);let V=B},856:n=>{"use strict";var l=[];function p(b){for(var u=-1,x=0;x<l.length;x++)if(l[x].identifier===b){u=x;break}return u}function y(b,u){for(var x={},E=[],k=0;k<b.length;k++){var T=b[k],B=u.base?T[0]+u.base:T[0],R=x[B]||0,V="".concat(B," ").concat(R);x[B]=R+1;var j=p(V),It={css:T[1],media:T[2],sourceMap:T[3],supports:T[4],layer:T[5]};if(j!==-1)l[j].references++,l[j].updater(It);else{var ae=v(It,u);u.byIndex=k,l.splice(k,0,{identifier:V,updater:ae,references:1})}E.push(V)}return E}function v(b,u){var x=u.domAPI(u);return x.update(b),function(E){if(E){if(E.css===b.css&&E.media===b.media&&E.sourceMap===b.sourceMap&&E.supports===b.supports&&E.layer===b.layer)return;x.update(b=E)}else x.remove()}}n.exports=function(b,u){var x=y(b=b||[],u=u||{});return function(E){E=E||[];for(var k=0;k<x.length;k++){var T=p(x[k]);l[T].references--}for(var B=y(E,u),R=0;R<x.length;R++){var V=p(x[R]);l[V].references===0&&(l[V].updater(),l.splice(V,1))}x=B}}},370:n=>{"use strict";var l={};n.exports=function(p,y){var v=function(b){if(l[b]===void 0){var u=document.querySelector(b);if(window.HTMLIFrameElement&&u instanceof window.HTMLIFrameElement)try{u=u.contentDocument.head}catch{u=null}l[b]=u}return l[b]}(p);if(!v)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");v.appendChild(y)}},278:n=>{"use strict";n.exports=function(l){var p=document.createElement("style");return l.setAttributes(p,l.attributes),l.insert(p,l.options),p}},458:(n,l,p)=>{"use strict";n.exports=function(y){var v=p.nc;v&&y.setAttribute("nonce",v)}},470:n=>{"use strict";n.exports=function(l){var p=l.insertStyleElement(l);return{update:function(y){(function(v,b,u){var x="";u.supports&&(x+="@supports (".concat(u.supports,") {")),u.media&&(x+="@media ".concat(u.media," {"));var E=u.layer!==void 0;E&&(x+="@layer".concat(u.layer.length>0?" ".concat(u.layer):""," {")),x+=u.css,E&&(x+="}"),u.media&&(x+="}"),u.supports&&(x+="}");var k=u.sourceMap;k&&typeof btoa<"u"&&(x+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(k))))," */")),b.styleTagTransform(x,v,b.options)})(p,l,y)},remove:function(){(function(y){if(y.parentNode===null)return!1;y.parentNode.removeChild(y)})(p)}}}},488:n=>{"use strict";n.exports=function(l,p){if(p.styleSheet)p.styleSheet.cssText=l;else{for(;p.firstChild;)p.removeChild(p.firstChild);p.appendChild(document.createTextNode(l))}}},251:n=>{n.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},113:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},193:n=>{n.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},807:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},300:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},574:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},182:n=>{n.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},965:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},74:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},428:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},254:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},934:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},410:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},644:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},324:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},437:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},897:(n,l,p)=>{"use strict";var y=typeof self<"u"?self:typeof window<"u"?window:p.g!==void 0?p.g:{},v=Object.create(y),b=/["&'<>]/;function u(x){return typeof x!="string"&&(x=x==null?"":typeof x=="function"?u(x.call(x)):JSON.stringify(x)),x}v.$escape=function(x){return function(E){var k=""+E,T=b.exec(k);if(!T)return E;var B="",R=void 0,V=void 0,j=void 0;for(R=T.index,V=0;R<k.length;R++){switch(k.charCodeAt(R)){case 34:j="&#34;";break;case 38:j="&#38;";break;case 39:j="&#39;";break;case 60:j="&#60;";break;case 62:j="&#62;";break;default:continue}V!==R&&(B+=k.substring(V,R)),V=R+1,B+=j}return V!==R?B+k.substring(V,R):B}(u(x))},v.$each=function(x,E){if(Array.isArray(x))for(var k=0,T=x.length;k<T;k++)E(x[k],k);else for(var B in x)E(x[B],B)},n.exports=v},471:(n,l,p)=>{"use strict";n.exports=p(897)},352:n=>{"use strict";n.exports=function(l){var p=[];return p.toString=function(){return this.map(function(y){var v="",b=y[5]!==void 0;return y[4]&&(v+="@supports (".concat(y[4],") {")),y[2]&&(v+="@media ".concat(y[2]," {")),b&&(v+="@layer".concat(y[5].length>0?" ".concat(y[5]):""," {")),v+=l(y),b&&(v+="}"),y[2]&&(v+="}"),y[4]&&(v+="}"),v}).join("")},p.i=function(y,v,b,u,x){typeof y=="string"&&(y=[[null,y,void 0]]);var E={};if(b)for(var k=0;k<this.length;k++){var T=this[k][0];T!=null&&(E[T]=!0)}for(var B=0;B<y.length;B++){var R=[].concat(y[B]);b&&E[R[0]]||(x!==void 0&&(R[5]===void 0||(R[1]="@layer".concat(R[5].length>0?" ".concat(R[5]):""," {").concat(R[1],"}")),R[5]=x),v&&(R[2]&&(R[1]="@media ".concat(R[2]," {").concat(R[1],"}")),R[2]=v),u&&(R[4]?(R[1]="@supports (".concat(R[4],") {").concat(R[1],"}"),R[4]=u):R[4]="".concat(u)),p.push(R))}},p}},80:n=>{"use strict";n.exports=function(l,p){return p||(p={}),l&&(l=String(l.__esModule?l.default:l),/^['"].*['"]$/.test(l)&&(l=l.slice(1,-1)),p.hash&&(l+=p.hash),/["'() \t\n]|(%20)/.test(l)||p.needQuotes?'"'.concat(l.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):l)}},415:n=>{"use strict";n.exports=function(l){var p=l[1],y=l[3];if(!y)return p;if(typeof btoa=="function"){var v=btoa(unescape(encodeURIComponent(JSON.stringify(y)))),b="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(v),u="/*# ".concat(b," */");return[p].concat([u]).join(`
`)}return[p].join(`
`)}},937:n=>{function l(p){return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},l(p)}n.exports=(typeof self>"u"?"undefined":l(self))=="object"?self.FormData:window.FormData},831:n=>{"use strict";n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},t={};function r(n){var l=t[n];if(l!==void 0)return l.exports;var p=t[n]={id:n,exports:{}};return i[n](p,p.exports,r),p.exports}r.m=i,r.n=n=>{var l=n&&n.__esModule?()=>n.default:()=>n;return r.d(l,{a:l}),l},r.d=(n,l)=>{for(var p in l)r.o(l,p)&&!r.o(n,p)&&Object.defineProperty(n,p,{enumerable:!0,get:l[p]})},r.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),r.o=(n,l)=>Object.prototype.hasOwnProperty.call(n,l),r.b=document.baseURI||self.location.href,r.nc=void 0;var e={};return(()=>{"use strict";r.d(e,{default:()=>sp});var n=r(856),l=r.n(n),p=r(470),y=r.n(p),v=r(370),b=r.n(v),u=r(458),x=r.n(u),E=r(278),k=r.n(E),T=r(488),B=r.n(T),R=r(685),V={};V.styleTagTransform=B(),V.setAttributes=x(),V.insert=b().bind(null,"head"),V.domAPI=y(),V.insertStyleElement=k(),l()(R.Z,V),R.Z&&R.Z.locals&&R.Z.locals;function j(a){return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},j(a)}function It(a,s){this.name="AggregateError",this.errors=a,this.message=s||""}It.prototype=Error.prototype;function ae(a){return ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},ae(a)}var Yl=setTimeout;function Yo(a){return!!(a&&a.length!==void 0)}function Ql(){}function G(a){if(!(this instanceof G))throw new TypeError("Promises must be constructed via new");if(typeof a!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],Ko(a,this)}function Qo(a,s){for(;a._state===3;)a=a._value;a._state!==0?(a._handled=!0,G._immediateFn(function(){var m=a._state===1?s.onFulfilled:s.onRejected;if(m!==null){var o;try{o=m(a._value)}catch(d){return void Ue(s.promise,d)}Qn(s.promise,o)}else(a._state===1?Qn:Ue)(s.promise,a._value)})):a._deferreds.push(s)}function Qn(a,s){try{if(s===a)throw new TypeError("A promise cannot be resolved with itself.");if(s&&(ae(s)==="object"||typeof s=="function")){var m=s.then;if(s instanceof G)return a._state=3,a._value=s,void Kn(a);if(typeof m=="function")return void Ko((o=m,d=s,function(){o.apply(d,arguments)}),a)}a._state=1,a._value=s,Kn(a)}catch(c){Ue(a,c)}var o,d}function Ue(a,s){a._state=2,a._value=s,Kn(a)}function Kn(a){a._state===2&&a._deferreds.length===0&&G._immediateFn(function(){a._handled||G._unhandledRejectionFn(a._value)});for(var s=0,m=a._deferreds.length;s<m;s++)Qo(a,a._deferreds[s]);a._deferreds=null}function Kl(a,s,m){this.onFulfilled=typeof a=="function"?a:null,this.onRejected=typeof s=="function"?s:null,this.promise=m}function Ko(a,s){var m=!1;try{a(function(o){m||(m=!0,Qn(s,o))},function(o){m||(m=!0,Ue(s,o))})}catch(o){if(m)return;m=!0,Ue(s,o)}}G.prototype.catch=function(a){return this.then(null,a)},G.prototype.then=function(a,s){var m=new this.constructor(Ql);return Qo(this,new Kl(a,s,m)),m},G.prototype.finally=function(a){var s=this.constructor;return this.then(function(m){return s.resolve(a()).then(function(){return m})},function(m){return s.resolve(a()).then(function(){return s.reject(m)})})},G.all=function(a){return new G(function(s,m){if(!Yo(a))return m(new TypeError("Promise.all accepts an array"));var o=Array.prototype.slice.call(a);if(o.length===0)return s([]);var d=o.length;function c(f,g){try{if(g&&(ae(g)==="object"||typeof g=="function")){var A=g.then;if(typeof A=="function")return void A.call(g,function(w){c(f,w)},m)}o[f]=g,--d==0&&s(o)}catch(w){m(w)}}for(var h=0;h<o.length;h++)c(h,o[h])})},G.any=function(a){var s=this;return new s(function(m,o){if(!a||a.length===void 0)return o(new TypeError("Promise.any accepts an array"));var d=Array.prototype.slice.call(a);if(d.length===0)return o();for(var c=[],h=0;h<d.length;h++)try{s.resolve(d[h]).then(m).catch(function(f){c.push(f),c.length===d.length&&o(new It(c,"All promises were rejected"))})}catch(f){o(f)}})},G.allSettled=function(a){return new this(function(s,m){if(!a||a.length===void 0)return m(new TypeError(j(a)+" "+a+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var o=Array.prototype.slice.call(a);if(o.length===0)return s([]);var d=o.length;function c(f,g){if(g&&(j(g)==="object"||typeof g=="function")){var A=g.then;if(typeof A=="function")return void A.call(g,function(w){c(f,w)},function(w){o[f]={status:"rejected",reason:w},--d==0&&s(o)})}o[f]={status:"fulfilled",value:g},--d==0&&s(o)}for(var h=0;h<o.length;h++)c(h,o[h])})},G.resolve=function(a){return a&&ae(a)==="object"&&a.constructor===G?a:new G(function(s){s(a)})},G.reject=function(a){return new G(function(s,m){m(a)})},G.race=function(a){return new G(function(s,m){if(!Yo(a))return m(new TypeError("Promise.race accepts an array"));for(var o=0,d=a.length;o<d;o++)G.resolve(a[o]).then(s,m)})},G._immediateFn=typeof setImmediate=="function"&&function(a){setImmediate(a)}||function(a){Yl(a,0)},G._unhandledRejectionFn=function(a){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",a)};let Gl=G;var Xi=/mobile/i.test(window.navigator.userAgent);let F={secondToTime:function(a){if((a=a||0)===0||a===1/0||a.toString()==="NaN")return"00:00";var s=Math.floor(a/3600),m=Math.floor((a-3600*s)/60),o=Math.floor(a-3600*s-60*m);return(s>0?[s,m,o]:[m,o]).map(function(d){return d<10?"0"+d:""+d}).join(":")},getElementViewLeft:function(a){var s=a.offsetLeft,m=a.offsetParent,o=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;m!==null&&m!==a;)s+=m.offsetLeft,m=m.offsetParent;else for(;m!==null;)s+=m.offsetLeft,m=m.offsetParent;return s-o},getBoundingClientRectViewLeft:function(a){var s=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(a.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var m=document.createElement("div");m.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(m),this.getBoundingClientRectViewLeft.offset=-m.getBoundingClientRect().top-s,document.body.removeChild(m),m=null}var o=a.getBoundingClientRect(),d=this.getBoundingClientRectViewLeft.offset;return o.left+d}return this.getElementViewLeft(a)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(a){var s=a.left,m=s===void 0?0:s,o=a.top,d=o===void 0?0:o;this.isFirefox?(document.documentElement.scrollLeft=m,document.documentElement.scrollTop=d):window.scrollTo(m,d)},isMobile:Xi,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(a,s){localStorage.setItem(a,s)},get:function(a){return localStorage.getItem(a)}},nameMap:{dragStart:Xi?"touchstart":"mousedown",dragMove:Xi?"touchmove":"mousemove",dragEnd:Xi?"touchend":"mouseup"},color2Number:function(a){return a[0]==="#"&&(a=a.substr(1)),a.length===3&&(a="".concat(a[0]).concat(a[0]).concat(a[1]).concat(a[1]).concat(a[2]).concat(a[2])),parseInt(a,16)+0&16777215},number2Color:function(a){return"#"+("00000"+a.toString(16)).slice(-6)},number2Type:function(a){switch(a){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function Go(a,s){return function(){return a.apply(s,arguments)}}function qe(a){return qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},qe(a)}var Gn,Zo=Object.prototype.toString,Zn=Object.getPrototypeOf,Xn=(Gn=Object.create(null),function(a){var s=Zo.call(a);return Gn[s]||(Gn[s]=s.slice(8,-1).toLowerCase())}),Ut=function(a){return a=a.toLowerCase(),function(s){return Xn(s)===a}},Ji=function(a){return function(s){return qe(s)===a}},be=Array.isArray,He=Ji("undefined"),Xo=Ut("ArrayBuffer"),Zl=Ji("string"),se=Ji("function"),Jo=Ji("number"),Jn=function(a){return a!==null&&qe(a)==="object"},tn=function(a){if(Xn(a)!=="object")return!1;var s=Zn(a);return!(s!==null&&s!==Object.prototype&&Object.getPrototypeOf(s)!==null||Symbol.toStringTag in a||Symbol.iterator in a)},Xl=Ut("Date"),Jl=Ut("File"),td=Ut("Blob"),ed=Ut("FileList"),id=Ut("URLSearchParams");function We(a,s){var m,o,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},c=d.allOwnKeys,h=c!==void 0&&c;if(a!=null)if(qe(a)!=="object"&&(a=[a]),be(a))for(m=0,o=a.length;m<o;m++)s.call(null,a[m],m,a);else{var f,g=h?Object.getOwnPropertyNames(a):Object.keys(a),A=g.length;for(m=0;m<A;m++)f=g[m],s.call(null,a[f],f,a)}}function ta(a,s){s=s.toLowerCase();for(var m,o=Object.keys(a),d=o.length;d-- >0;)if(s===(m=o[d]).toLowerCase())return m;return null}var tr,ea,ia=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,na=function(a){return!He(a)&&a!==ia},nd=(tr=typeof Uint8Array<"u"&&Zn(Uint8Array),function(a){return tr&&a instanceof tr}),rd=Ut("HTMLFormElement"),ra=(ea=Object.prototype.hasOwnProperty,function(a,s){return ea.call(a,s)}),od=Ut("RegExp"),oa=function(a,s){var m=Object.getOwnPropertyDescriptors(a),o={};We(m,function(d,c){s(d,c,a)!==!1&&(o[c]=d)}),Object.defineProperties(a,o)};let _={isArray:be,isArrayBuffer:Xo,isBuffer:function(a){return a!==null&&!He(a)&&a.constructor!==null&&!He(a.constructor)&&se(a.constructor.isBuffer)&&a.constructor.isBuffer(a)},isFormData:function(a){var s="[object FormData]";return a&&(typeof FormData=="function"&&a instanceof FormData||Zo.call(a)===s||se(a.toString)&&a.toString()===s)},isArrayBufferView:function(a){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(a):a&&a.buffer&&Xo(a.buffer)},isString:Zl,isNumber:Jo,isBoolean:function(a){return a===!0||a===!1},isObject:Jn,isPlainObject:tn,isUndefined:He,isDate:Xl,isFile:Jl,isBlob:td,isRegExp:od,isFunction:se,isStream:function(a){return Jn(a)&&se(a.pipe)},isURLSearchParams:id,isTypedArray:nd,isFileList:ed,forEach:We,merge:function a(){for(var s=na(this)&&this||{},m=s.caseless,o={},d=function(f,g){var A=m&&ta(o,g)||g;tn(o[A])&&tn(f)?o[A]=a(o[A],f):tn(f)?o[A]=a({},f):be(f)?o[A]=f.slice():o[A]=f},c=0,h=arguments.length;c<h;c++)arguments[c]&&We(arguments[c],d);return o},extend:function(a,s,m){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},d=o.allOwnKeys;return We(s,function(c,h){m&&se(c)?a[h]=Go(c,m):a[h]=c},{allOwnKeys:d}),a},trim:function(a){return a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(a){return a.charCodeAt(0)===65279&&(a=a.slice(1)),a},inherits:function(a,s,m,o){a.prototype=Object.create(s.prototype,o),a.prototype.constructor=a,Object.defineProperty(a,"super",{value:s.prototype}),m&&Object.assign(a.prototype,m)},toFlatObject:function(a,s,m,o){var d,c,h,f={};if(s=s||{},a==null)return s;do{for(c=(d=Object.getOwnPropertyNames(a)).length;c-- >0;)h=d[c],o&&!o(h,a,s)||f[h]||(s[h]=a[h],f[h]=!0);a=m!==!1&&Zn(a)}while(a&&(!m||m(a,s))&&a!==Object.prototype);return s},kindOf:Xn,kindOfTest:Ut,endsWith:function(a,s,m){a=String(a),(m===void 0||m>a.length)&&(m=a.length),m-=s.length;var o=a.indexOf(s,m);return o!==-1&&o===m},toArray:function(a){if(!a)return null;if(be(a))return a;var s=a.length;if(!Jo(s))return null;for(var m=new Array(s);s-- >0;)m[s]=a[s];return m},forEachEntry:function(a,s){for(var m,o=(a&&a[Symbol.iterator]).call(a);(m=o.next())&&!m.done;){var d=m.value;s.call(a,d[0],d[1])}},matchAll:function(a,s){for(var m,o=[];(m=a.exec(s))!==null;)o.push(m);return o},isHTMLForm:rd,hasOwnProperty:ra,hasOwnProp:ra,reduceDescriptors:oa,freezeMethods:function(a){oa(a,function(s,m){if(se(a)&&["arguments","caller","callee"].indexOf(m)!==-1)return!1;var o=a[m];se(o)&&(s.enumerable=!1,"writable"in s?s.writable=!1:s.set||(s.set=function(){throw Error("Can not rewrite read-only method '"+m+"'")}))})},toObjectSet:function(a,s){var m={},o=function(d){d.forEach(function(c){m[c]=!0})};return be(a)?o(a):o(String(a).split(s)),m},toCamelCase:function(a){return a.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(s,m,o){return m.toUpperCase()+o})},noop:function(){},toFiniteNumber:function(a,s){return a=+a,Number.isFinite(a)?a:s},findKey:ta,global:ia,isContextDefined:na,toJSONObject:function(a){var s=new Array(10);return function m(o,d){if(Jn(o)){if(s.indexOf(o)>=0)return;if(!("toJSON"in o)){s[d]=o;var c=be(o)?[]:{};return We(o,function(h,f){var g=m(h,d+1);!He(g)&&(c[f]=g)}),s[d]=void 0,c}}return o}(a,0)}};function ve(a,s,m,o,d){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=a,this.name="AxiosError",s&&(this.code=s),m&&(this.config=m),o&&(this.request=o),d&&(this.response=d)}_.inherits(ve,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var aa=ve.prototype,sa={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(a){sa[a]={value:a}}),Object.defineProperties(ve,sa),Object.defineProperty(aa,"isAxiosError",{value:!0}),ve.from=function(a,s,m,o,d,c){var h=Object.create(aa);return _.toFlatObject(a,h,function(f){return f!==Error.prototype},function(f){return f!=="isAxiosError"}),ve.call(h,a.message,s,m,o,d),h.cause=a,h.name=a.name,c&&Object.assign(h,c),h};let Y=ve,ad=r(937);function er(a){return er=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},er(a)}function ir(a){return _.isPlainObject(a)||_.isArray(a)}function la(a){return _.endsWith(a,"[]")?a.slice(0,-2):a}function da(a,s,m){return a?a.concat(s).map(function(o,d){return o=la(o),!m&&d?"["+o+"]":o}).join(m?".":""):s}var sd=_.toFlatObject(_,{},null,function(a){return/^is[A-Z]/.test(a)});let en=function(a,s,m){if(!_.isObject(a))throw new TypeError("target must be an object");s=s||new(ad||FormData);var o,d=(m=_.toFlatObject(m,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,D){return!_.isUndefined(D[M])})).metaTokens,c=m.visitor||w,h=m.dots,f=m.indexes,g=(m.Blob||typeof Blob<"u"&&Blob)&&(o=s)&&_.isFunction(o.append)&&o[Symbol.toStringTag]==="FormData"&&o[Symbol.iterator];if(!_.isFunction(c))throw new TypeError("visitor must be a function");function A(M){if(M===null)return"";if(_.isDate(M))return M.toISOString();if(!g&&_.isBlob(M))throw new Y("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(M)||_.isTypedArray(M)?g&&typeof Blob=="function"?new Blob([M]):Buffer.from(M):M}function w(M,D,S){var O=M;if(M&&!S&&er(M)==="object"){if(_.endsWith(D,"{}"))D=d?D:D.slice(0,-2),M=JSON.stringify(M);else if(_.isArray(M)&&function(N){return _.isArray(N)&&!N.some(ir)}(M)||_.isFileList(M)||_.endsWith(D,"[]")&&(O=_.toArray(M)))return D=la(D),O.forEach(function(N,rt){!_.isUndefined(N)&&N!==null&&s.append(f===!0?da([D],rt,h):f===null?D:D+"[]",A(N))}),!1}return!!ir(M)||(s.append(da(S,D,h),A(M)),!1)}var C=[],I=Object.assign(sd,{defaultVisitor:w,convertValue:A,isVisitable:ir});if(!_.isObject(a))throw new TypeError("data must be an object");return function M(D,S){if(!_.isUndefined(D)){if(C.indexOf(D)!==-1)throw Error("Circular reference detected in "+S.join("."));C.push(D),_.forEach(D,function(O,N){(!(_.isUndefined(O)||O===null)&&c.call(s,O,_.isString(N)?N.trim():N,S,I))===!0&&M(O,S?S.concat(N):[N])}),C.pop()}}(a),s};function ca(a){var s={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g,function(m){return s[m]})}function pa(a,s){this._pairs=[],a&&en(a,this,s)}var ma=pa.prototype;ma.append=function(a,s){this._pairs.push([a,s])},ma.toString=function(a){var s=a?function(m){return a.call(this,m,ca)}:ca;return this._pairs.map(function(m){return s(m[0])+"="+s(m[1])},"").join("&")};let ha=pa;function ld(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ua(a,s,m){if(!s)return a;var o,d=m&&m.encode||ld,c=m&&m.serialize;if(o=c?c(s,m):_.isURLSearchParams(s)?s.toString():new ha(s,m).toString(d)){var h=a.indexOf("#");h!==-1&&(a=a.slice(0,h)),a+=(a.indexOf("?")===-1?"?":"&")+o}return a}function $e(a){return $e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},$e(a)}function dd(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if($e(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if($e(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),$e(d)==="symbol"?d:String(d)),o)}var d}var cd=function(){function a(){(function(o,d){if(!(o instanceof d))throw new TypeError("Cannot call a class as a function")})(this,a),this.handlers=[]}var s,m;return s=a,m=[{key:"use",value:function(o,d,c){return this.handlers.push({fulfilled:o,rejected:d,synchronous:!!c&&c.synchronous,runWhen:c?c.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(o){this.handlers[o]&&(this.handlers[o]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(o){_.forEach(this.handlers,function(d){d!==null&&o(d)})}}],m&&dd(s.prototype,m),Object.defineProperty(s,"prototype",{writable:!1}),a}();let fa=cd,ga={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},pd=typeof URLSearchParams<"u"?URLSearchParams:ha,md=FormData;var nr,hd=(typeof navigator>"u"||(nr=navigator.product)!=="ReactNative"&&nr!=="NativeScript"&&nr!=="NS")&&typeof window<"u"&&typeof document<"u",ud=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";let Dt={isBrowser:!0,classes:{URLSearchParams:pd,FormData:md,Blob},isStandardBrowserEnv:hd,isStandardBrowserWebWorkerEnv:ud,protocols:["http","https","file","blob","url","data"]},ya=function(a){function s(o,d,c,h){var f=o[h++],g=Number.isFinite(+f),A=h>=o.length;return f=!f&&_.isArray(c)?c.length:f,A?(_.hasOwnProp(c,f)?c[f]=[c[f],d]:c[f]=d,!g):(c[f]&&_.isObject(c[f])||(c[f]=[]),s(o,d,c[f],h)&&_.isArray(c[f])&&(c[f]=function(w){var C,I,M={},D=Object.keys(w),S=D.length;for(C=0;C<S;C++)M[I=D[C]]=w[I];return M}(c[f])),!g)}if(_.isFormData(a)&&_.isFunction(a.entries)){var m={};return _.forEachEntry(a,function(o,d){s(function(c){return _.matchAll(/\w+|\[(\w*)]/g,c).map(function(h){return h[0]==="[]"?"":h[1]||h[0]})}(o),d,m,0)}),m}return null};var fd={"Content-Type":void 0},nn={transitional:ga,adapter:["xhr","http"],transformRequest:[function(a,s){var m,o=s.getContentType()||"",d=o.indexOf("application/json")>-1,c=_.isObject(a);if(c&&_.isHTMLForm(a)&&(a=new FormData(a)),_.isFormData(a))return d&&d?JSON.stringify(ya(a)):a;if(_.isArrayBuffer(a)||_.isBuffer(a)||_.isStream(a)||_.isFile(a)||_.isBlob(a))return a;if(_.isArrayBufferView(a))return a.buffer;if(_.isURLSearchParams(a))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();if(c){if(o.indexOf("application/x-www-form-urlencoded")>-1)return function(f,g){return en(f,new Dt.classes.URLSearchParams,Object.assign({visitor:function(A,w,C,I){return Dt.isNode&&_.isBuffer(A)?(this.append(w,A.toString("base64")),!1):I.defaultVisitor.apply(this,arguments)}},g))}(a,this.formSerializer).toString();if((m=_.isFileList(a))||o.indexOf("multipart/form-data")>-1){var h=this.env&&this.env.FormData;return en(m?{"files[]":a}:a,h&&new h,this.formSerializer)}}return c||d?(s.setContentType("application/json",!1),function(f,g,A){if(_.isString(f))try{return(0,JSON.parse)(f),_.trim(f)}catch(w){if(w.name!=="SyntaxError")throw w}return(0,JSON.stringify)(f)}(a)):a}],transformResponse:[function(a){var s=this.transitional||nn.transitional,m=s&&s.forcedJSONParsing,o=this.responseType==="json";if(a&&_.isString(a)&&(m&&!this.responseType||o)){var d=!(s&&s.silentJSONParsing)&&o;try{return JSON.parse(a)}catch(c){if(d)throw c.name==="SyntaxError"?Y.from(c,Y.ERR_BAD_RESPONSE,this,null,this.response):c}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Dt.classes.FormData,Blob:Dt.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};_.forEach(["delete","get","head"],function(a){nn.headers[a]={}}),_.forEach(["post","put","patch"],function(a){nn.headers[a]=_.merge(fd)});let rr=nn;var gd=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function Ye(a){return Ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Ye(a)}function ba(a,s){(s==null||s>a.length)&&(s=a.length);for(var m=0,o=new Array(s);m<s;m++)o[m]=a[m];return o}function va(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if(Ye(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if(Ye(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),Ye(d)==="symbol"?d:String(d)),o)}var d}var Aa=Symbol("internals");function Qe(a){return a&&String(a).trim().toLowerCase()}function rn(a){return a===!1||a==null?a:_.isArray(a)?a.map(rn):String(a)}function wa(a,s,m,o){return _.isFunction(o)?o.call(this,s,m):_.isString(s)?_.isString(o)?s.indexOf(o)!==-1:_.isRegExp(o)?o.test(s):void 0:void 0}var on=function(a,s){function m(h){(function(f,g){if(!(f instanceof g))throw new TypeError("Cannot call a class as a function")})(this,m),h&&this.set(h)}var o,d,c;return o=m,d=[{key:"set",value:function(h,f,g){var A=this;function w(N,rt,J){var Q=Qe(rt);if(!Q)throw new Error("header name must be a non-empty string");var Kt=_.findKey(A,Q);(!Kt||A[Kt]===void 0||J===!0||J===void 0&&A[Kt]!==!1)&&(A[Kt||rt]=rn(N))}var C,I,M,D,S,O=function(N,rt){return _.forEach(N,function(J,Q){return w(J,Q,rt)})};return _.isPlainObject(h)||h instanceof this.constructor?O(h,f):_.isString(h)&&(h=h.trim())&&!/^[-_a-zA-Z]+$/.test(h.trim())?O((S={},(C=h)&&C.split(`
`).forEach(function(N){D=N.indexOf(":"),I=N.substring(0,D).trim().toLowerCase(),M=N.substring(D+1).trim(),!I||S[I]&&gd[I]||(I==="set-cookie"?S[I]?S[I].push(M):S[I]=[M]:S[I]=S[I]?S[I]+", "+M:M)}),S),f):h!=null&&w(f,h,g),this}},{key:"get",value:function(h,f){if(h=Qe(h)){var g=_.findKey(this,h);if(g){var A=this[g];if(!f)return A;if(f===!0)return function(w){for(var C,I=Object.create(null),M=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;C=M.exec(w);)I[C[1]]=C[2];return I}(A);if(_.isFunction(f))return f.call(this,A,g);if(_.isRegExp(f))return f.exec(A);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(h,f){if(h=Qe(h)){var g=_.findKey(this,h);return!(!g||f&&!wa(0,this[g],g,f))}return!1}},{key:"delete",value:function(h,f){var g=this,A=!1;function w(C){if(C=Qe(C)){var I=_.findKey(g,C);!I||f&&!wa(0,g[I],I,f)||(delete g[I],A=!0)}}return _.isArray(h)?h.forEach(w):w(h),A}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(h){var f=this,g={};return _.forEach(this,function(A,w){var C=_.findKey(g,w);if(C)return f[C]=rn(A),void delete f[w];var I=h?function(M){return M.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(D,S,O){return S.toUpperCase()+O})}(w):String(w).trim();I!==w&&delete f[w],f[I]=rn(A),g[I]=!0}),this}},{key:"concat",value:function(){for(var h,f=arguments.length,g=new Array(f),A=0;A<f;A++)g[A]=arguments[A];return(h=this.constructor).concat.apply(h,[this].concat(g))}},{key:"toJSON",value:function(h){var f=Object.create(null);return _.forEach(this,function(g,A){g!=null&&g!==!1&&(f[A]=h&&_.isArray(g)?g.join(", "):g)}),f}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(h){var f,g,A=(g=2,function(w){if(Array.isArray(w))return w}(f=h)||function(w,C){var I=w==null?null:typeof Symbol<"u"&&w[Symbol.iterator]||w["@@iterator"];if(I!=null){var M,D,S,O,N=[],rt=!0,J=!1;try{if(S=(I=I.call(w)).next,C===0){if(Object(I)!==I)return;rt=!1}else for(;!(rt=(M=S.call(I)).done)&&(N.push(M.value),N.length!==C);rt=!0);}catch(Q){J=!0,D=Q}finally{try{if(!rt&&I.return!=null&&(O=I.return(),Object(O)!==O))return}finally{if(J)throw D}}return N}}(f,g)||function(w,C){if(w){if(typeof w=="string")return ba(w,C);var I=Object.prototype.toString.call(w).slice(8,-1);return I==="Object"&&w.constructor&&(I=w.constructor.name),I==="Map"||I==="Set"?Array.from(w):I==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I)?ba(w,C):void 0}}(f,g)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());return A[0]+": "+A[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],c=[{key:"from",value:function(h){return h instanceof this?h:new this(h)}},{key:"concat",value:function(h){for(var f=new this(h),g=arguments.length,A=new Array(g>1?g-1:0),w=1;w<g;w++)A[w-1]=arguments[w];return A.forEach(function(C){return f.set(C)}),f}},{key:"accessor",value:function(h){var f=(this[Aa]=this[Aa]={accessors:{}}).accessors,g=this.prototype;function A(w){var C=Qe(w);f[C]||(function(I,M){var D=_.toCamelCase(" "+M);["get","set","has"].forEach(function(S){Object.defineProperty(I,S+D,{value:function(O,N,rt){return this[S].call(this,M,O,N,rt)},configurable:!0})})}(g,w),f[C]=!0)}return _.isArray(h)?h.forEach(A):A(h),this}}],d&&va(o.prototype,d),c&&va(o,c),Object.defineProperty(o,"prototype",{writable:!1}),m}();on.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),_.freezeMethods(on.prototype),_.freezeMethods(on);let qt=on;function or(a,s){var m=this||rr,o=s||m,d=qt.from(o.headers),c=o.data;return _.forEach(a,function(h){c=h.call(m,c,d.normalize(),s?s.status:void 0)}),d.normalize(),c}function _a(a){return!(!a||!a.__CANCEL__)}function xa(a,s,m){Y.call(this,a??"canceled",Y.ERR_CANCELED,s,m),this.name="CanceledError"}_.inherits(xa,Y,{__CANCEL__:!0});let an=xa,yd=Dt.isStandardBrowserEnv?{write:function(a,s,m,o,d,c){var h=[];h.push(a+"="+encodeURIComponent(s)),_.isNumber(m)&&h.push("expires="+new Date(m).toGMTString()),_.isString(o)&&h.push("path="+o),_.isString(d)&&h.push("domain="+d),c===!0&&h.push("secure"),document.cookie=h.join("; ")},read:function(a){var s=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(a){this.write(a,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function ka(a,s){return a&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)?function(m,o){return o?m.replace(/\/+$/,"")+"/"+o.replace(/^\/+/,""):m}(a,s):s}let bd=Dt.isStandardBrowserEnv?function(){var a,s=/(msie|trident)/i.test(navigator.userAgent),m=document.createElement("a");function o(d){var c=d;return s&&(m.setAttribute("href",c),c=m.href),m.setAttribute("href",c),{href:m.href,protocol:m.protocol?m.protocol.replace(/:$/,""):"",host:m.host,search:m.search?m.search.replace(/^\?/,""):"",hash:m.hash?m.hash.replace(/^#/,""):"",hostname:m.hostname,port:m.port,pathname:m.pathname.charAt(0)==="/"?m.pathname:"/"+m.pathname}}return a=o(window.location.href),function(d){var c=_.isString(d)?o(d):d;return c.protocol===a.protocol&&c.host===a.host}}():function(){return!0};function Ea(a,s){var m=0,o=function(d,c){d=d||10;var h,f=new Array(d),g=new Array(d),A=0,w=0;return c=c!==void 0?c:1e3,function(C){var I=Date.now(),M=g[w];h||(h=I),f[A]=C,g[A]=I;for(var D=w,S=0;D!==A;)S+=f[D++],D%=d;if((A=(A+1)%d)===w&&(w=(w+1)%d),!(I-h<c)){var O=M&&I-M;return O?Math.round(1e3*S/O):void 0}}}(50,250);return function(d){var c=d.loaded,h=d.lengthComputable?d.total:void 0,f=c-m,g=o(f);m=c;var A={loaded:c,total:h,progress:h?c/h:void 0,bytes:f,rate:g||void 0,estimated:g&&h&&c<=h?(h-c)/g:void 0,event:d};A[s?"download":"upload"]=!0,a(A)}}var ar={http:null,xhr:typeof XMLHttpRequest<"u"&&function(a){return new Promise(function(s,m){var o,d=a.data,c=qt.from(a.headers).normalize(),h=a.responseType;function f(){a.cancelToken&&a.cancelToken.unsubscribe(o),a.signal&&a.signal.removeEventListener("abort",o)}_.isFormData(d)&&(Dt.isStandardBrowserEnv||Dt.isStandardBrowserWebWorkerEnv)&&c.setContentType(!1);var g=new XMLHttpRequest;if(a.auth){var A=a.auth.username||"",w=a.auth.password?unescape(encodeURIComponent(a.auth.password)):"";c.set("Authorization","Basic "+btoa(A+":"+w))}var C=ka(a.baseURL,a.url);function I(){if(g){var O=qt.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders());(function(N,rt,J){var Q=J.config.validateStatus;J.status&&Q&&!Q(J.status)?rt(new Y("Request failed with status code "+J.status,[Y.ERR_BAD_REQUEST,Y.ERR_BAD_RESPONSE][Math.floor(J.status/100)-4],J.config,J.request,J)):N(J)})(function(N){s(N),f()},function(N){m(N),f()},{data:h&&h!=="text"&&h!=="json"?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:O,config:a,request:g}),g=null}}if(g.open(a.method.toUpperCase(),ua(C,a.params,a.paramsSerializer),!0),g.timeout=a.timeout,"onloadend"in g?g.onloadend=I:g.onreadystatechange=function(){g&&g.readyState===4&&(g.status!==0||g.responseURL&&g.responseURL.indexOf("file:")===0)&&setTimeout(I)},g.onabort=function(){g&&(m(new Y("Request aborted",Y.ECONNABORTED,a,g)),g=null)},g.onerror=function(){m(new Y("Network Error",Y.ERR_NETWORK,a,g)),g=null},g.ontimeout=function(){var O=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded",N=a.transitional||ga;a.timeoutErrorMessage&&(O=a.timeoutErrorMessage),m(new Y(O,N.clarifyTimeoutError?Y.ETIMEDOUT:Y.ECONNABORTED,a,g)),g=null},Dt.isStandardBrowserEnv){var M=(a.withCredentials||bd(C))&&a.xsrfCookieName&&yd.read(a.xsrfCookieName);M&&c.set(a.xsrfHeaderName,M)}d===void 0&&c.setContentType(null),"setRequestHeader"in g&&_.forEach(c.toJSON(),function(O,N){g.setRequestHeader(N,O)}),_.isUndefined(a.withCredentials)||(g.withCredentials=!!a.withCredentials),h&&h!=="json"&&(g.responseType=a.responseType),typeof a.onDownloadProgress=="function"&&g.addEventListener("progress",Ea(a.onDownloadProgress,!0)),typeof a.onUploadProgress=="function"&&g.upload&&g.upload.addEventListener("progress",Ea(a.onUploadProgress)),(a.cancelToken||a.signal)&&(o=function(O){g&&(m(!O||O.type?new an(null,a,g):O),g.abort(),g=null)},a.cancelToken&&a.cancelToken.subscribe(o),a.signal&&(a.signal.aborted?o():a.signal.addEventListener("abort",o)));var D,S=(D=/^([-+\w]{1,25})(:?\/\/|:)/.exec(C))&&D[1]||"";S&&Dt.protocols.indexOf(S)===-1?m(new Y("Unsupported protocol "+S+":",Y.ERR_BAD_REQUEST,a)):g.send(d||null)})}};_.forEach(ar,function(a,s){if(a){try{Object.defineProperty(a,"name",{value:s})}catch{}Object.defineProperty(a,"adapterName",{value:s})}});function sr(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new an(null,a)}function Ca(a){return sr(a),a.headers=qt.from(a.headers),a.data=or.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),function(s){for(var m,o,d=(s=_.isArray(s)?s:[s]).length,c=0;c<d&&(m=s[c],!(o=_.isString(m)?ar[m.toLowerCase()]:m));c++);if(!o)throw o===!1?new Y("Adapter ".concat(m," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error(_.hasOwnProp(ar,m)?"Adapter '".concat(m,"' is not available in the build"):"Unknown adapter '".concat(m,"'"));if(!_.isFunction(o))throw new TypeError("adapter is not a function");return o}(a.adapter||rr.adapter)(a).then(function(s){return sr(a),s.data=or.call(a,a.transformResponse,s),s.headers=qt.from(s.headers),s},function(s){return _a(s)||(sr(a),s&&s.response&&(s.response.data=or.call(a,a.transformResponse,s.response),s.response.headers=qt.from(s.response.headers))),Promise.reject(s)})}var Sa=function(a){return a instanceof qt?a.toJSON():a};function Ae(a,s){s=s||{};var m={};function o(A,w,C){return _.isPlainObject(A)&&_.isPlainObject(w)?_.merge.call({caseless:C},A,w):_.isPlainObject(w)?_.merge({},w):_.isArray(w)?w.slice():w}function d(A,w,C){return _.isUndefined(w)?_.isUndefined(A)?void 0:o(void 0,A,C):o(A,w,C)}function c(A,w){if(!_.isUndefined(w))return o(void 0,w)}function h(A,w){return _.isUndefined(w)?_.isUndefined(A)?void 0:o(void 0,A):o(void 0,w)}function f(A,w,C){return C in s?o(A,w):C in a?o(void 0,A):void 0}var g={url:c,method:c,data:c,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:f,headers:function(A,w){return d(Sa(A),Sa(w),!0)}};return _.forEach(Object.keys(a).concat(Object.keys(s)),function(A){var w=g[A]||d,C=w(a[A],s[A],A);_.isUndefined(C)&&w!==f||(m[A]=C)}),m}function sn(a){return sn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},sn(a)}var lr={};["object","boolean","number","function","string","symbol"].forEach(function(a,s){lr[a]=function(m){return sn(m)===a||"a"+(s<1?"n ":" ")+a}});var Ia={};lr.transitional=function(a,s,m){function o(d,c){return"[Axios v1.2.3] Transitional option '"+d+"'"+c+(m?". "+m:"")}return function(d,c,h){if(a===!1)throw new Y(o(c," has been removed"+(s?" in "+s:"")),Y.ERR_DEPRECATED);return s&&!Ia[c]&&(Ia[c]=!0,console.warn(o(c," has been deprecated since v"+s+" and will be removed in the near future"))),!a||a(d,c,h)}};let dr={assertOptions:function(a,s,m){if(sn(a)!=="object")throw new Y("options must be an object",Y.ERR_BAD_OPTION_VALUE);for(var o=Object.keys(a),d=o.length;d-- >0;){var c=o[d],h=s[c];if(h){var f=a[c],g=f===void 0||h(f,c,a);if(g!==!0)throw new Y("option "+c+" must be "+g,Y.ERR_BAD_OPTION_VALUE)}else if(m!==!0)throw new Y("Unknown option "+c,Y.ERR_BAD_OPTION)}},validators:lr};function Ke(a){return Ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Ke(a)}function vd(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if(Ke(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if(Ke(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),Ke(d)==="symbol"?d:String(d)),o)}var d}var Yt=dr.validators,ln=function(){function a(o){(function(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")})(this,a),this.defaults=o,this.interceptors={request:new fa,response:new fa}}var s,m;return s=a,(m=[{key:"request",value:function(o,d){typeof o=="string"?(d=d||{}).url=o:d=o||{};var c,h=d=Ae(this.defaults,d),f=h.transitional,g=h.paramsSerializer,A=h.headers;f!==void 0&&dr.assertOptions(f,{silentJSONParsing:Yt.transitional(Yt.boolean),forcedJSONParsing:Yt.transitional(Yt.boolean),clarifyTimeoutError:Yt.transitional(Yt.boolean)},!1),g!==void 0&&dr.assertOptions(g,{encode:Yt.function,serialize:Yt.function},!0),d.method=(d.method||this.defaults.method||"get").toLowerCase(),(c=A&&_.merge(A.common,A[d.method]))&&_.forEach(["delete","get","head","post","put","patch","common"],function(Q){delete A[Q]}),d.headers=qt.concat(c,A);var w=[],C=!0;this.interceptors.request.forEach(function(Q){typeof Q.runWhen=="function"&&Q.runWhen(d)===!1||(C=C&&Q.synchronous,w.unshift(Q.fulfilled,Q.rejected))});var I,M=[];this.interceptors.response.forEach(function(Q){M.push(Q.fulfilled,Q.rejected)});var D,S=0;if(!C){var O=[Ca.bind(this),void 0];for(O.unshift.apply(O,w),O.push.apply(O,M),D=O.length,I=Promise.resolve(d);S<D;)I=I.then(O[S++],O[S++]);return I}D=w.length;var N=d;for(S=0;S<D;){var rt=w[S++],J=w[S++];try{N=rt(N)}catch(Q){J.call(this,Q);break}}try{I=Ca.call(this,N)}catch(Q){return Promise.reject(Q)}for(S=0,D=M.length;S<D;)I=I.then(M[S++],M[S++]);return I}},{key:"getUri",value:function(o){return ua(ka((o=Ae(this.defaults,o)).baseURL,o.url),o.params,o.paramsSerializer)}}])&&vd(s.prototype,m),Object.defineProperty(s,"prototype",{writable:!1}),a}();_.forEach(["delete","get","head","options"],function(a){ln.prototype[a]=function(s,m){return this.request(Ae(m||{},{method:a,url:s,data:(m||{}).data}))}}),_.forEach(["post","put","patch"],function(a){function s(m){return function(o,d,c){return this.request(Ae(c||{},{method:a,headers:m?{"Content-Type":"multipart/form-data"}:{},url:o,data:d}))}}ln.prototype[a]=s(),ln.prototype[a+"Form"]=s(!0)});let dn=ln;function Ge(a){return Ge=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Ge(a)}function Da(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if(Ge(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if(Ge(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),Ge(d)==="symbol"?d:String(d)),o)}var d}var Ad=function(){function a(d){if(function(f,g){if(!(f instanceof g))throw new TypeError("Cannot call a class as a function")}(this,a),typeof d!="function")throw new TypeError("executor must be a function.");var c;this.promise=new Promise(function(f){c=f});var h=this;this.promise.then(function(f){if(h._listeners){for(var g=h._listeners.length;g-- >0;)h._listeners[g](f);h._listeners=null}}),this.promise.then=function(f){var g,A=new Promise(function(w){h.subscribe(w),g=w}).then(f);return A.cancel=function(){h.unsubscribe(g)},A},d(function(f,g,A){h.reason||(h.reason=new an(f,g,A),c(h.reason))})}var s,m,o;return s=a,m=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(d){this.reason?d(this.reason):this._listeners?this._listeners.push(d):this._listeners=[d]}},{key:"unsubscribe",value:function(d){if(this._listeners){var c=this._listeners.indexOf(d);c!==-1&&this._listeners.splice(c,1)}}}],o=[{key:"source",value:function(){var d;return{token:new a(function(c){d=c}),cancel:d}}}],m&&Da(s.prototype,m),o&&Da(s,o),Object.defineProperty(s,"prototype",{writable:!1}),a}();let wd=Ad;function Ma(a,s){(s==null||s>a.length)&&(s=a.length);for(var m=0,o=new Array(s);m<s;m++)o[m]=a[m];return o}var cr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(cr).forEach(function(a){var s,m,o=(m=2,function(h){if(Array.isArray(h))return h}(s=a)||function(h,f){var g=h==null?null:typeof Symbol<"u"&&h[Symbol.iterator]||h["@@iterator"];if(g!=null){var A,w,C,I,M=[],D=!0,S=!1;try{if(C=(g=g.call(h)).next,f===0){if(Object(g)!==g)return;D=!1}else for(;!(D=(A=C.call(g)).done)&&(M.push(A.value),M.length!==f);D=!0);}catch(O){S=!0,w=O}finally{try{if(!D&&g.return!=null&&(I=g.return(),Object(I)!==I))return}finally{if(S)throw w}}return M}}(s,m)||function(h,f){if(h){if(typeof h=="string")return Ma(h,f);var g=Object.prototype.toString.call(h).slice(8,-1);return g==="Object"&&h.constructor&&(g=h.constructor.name),g==="Map"||g==="Set"?Array.from(h):g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)?Ma(h,f):void 0}}(s,m)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),d=o[0],c=o[1];cr[c]=d});let _d=cr;var nt=function a(s){var m=new dn(s),o=Go(dn.prototype.request,m);return _.extend(o,dn.prototype,m,{allOwnKeys:!0}),_.extend(o,m,null,{allOwnKeys:!0}),o.create=function(d){return a(Ae(s,d))},o}(rr);nt.Axios=dn,nt.CanceledError=an,nt.CancelToken=wd,nt.isCancel=_a,nt.VERSION="1.2.3",nt.toFormData=en,nt.AxiosError=Y,nt.Cancel=nt.CanceledError,nt.all=function(a){return Promise.all(a)},nt.spread=function(a){return function(s){return a.apply(null,s)}},nt.isAxiosError=function(a){return _.isObject(a)&&a.isAxiosError===!0},nt.mergeConfig=Ae,nt.AxiosHeaders=qt,nt.formToJSON=function(a){return ya(_.isHTMLForm(a)?new FormData(a):a)},nt.HttpStatusCode=_d,nt.default=nt;let Ta=nt,xd={send:function(a){Ta.post(a.url,a.data).then(function(s){var m=s.data;m&&m.code===0?a.success&&a.success(m):a.error&&a.error(m&&m.msg)}).catch(function(s){console.error(s),a.error&&a.error()})},read:function(a){Ta.get(a.url).then(function(s){var m=s.data;m&&m.code===0?a.success&&a.success(m.data.map(function(o){return{time:o[0],type:o[1],color:o[2],author:o[3],text:o[4]}})):a.error&&a.error(m&&m.msg)}).catch(function(s){console.error(s),a.error&&a.error()})}};function pr(a){return pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},pr(a)}function kd(a){var s=this;this.lang=a,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(m){return m=m.toLowerCase(),we[s.lang]&&we[s.lang][m]?we[s.lang][m]:we[s.fallbackLang]&&we[s.fallbackLang][m]?we[s.fallbackLang][m]:mr[m]?mr[m]:m}}var mr={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},we={en:mr,"zh-cn":{"danmaku-loading":"\u5F39\u5E55\u52A0\u8F7D\u4E2D",top:"\u9876\u90E8",bottom:"\u5E95\u90E8",rolling:"\u6EDA\u52A8","input-danmaku-enter":"\u8F93\u5165\u5F39\u5E55\uFF0C\u56DE\u8F66\u53D1\u9001","about-author":"\u5173\u4E8E\u4F5C\u8005","dplayer-feedback":"\u64AD\u653E\u5668\u610F\u89C1\u53CD\u9988","about-dplayer":"\u5173\u4E8E DPlayer \u64AD\u653E\u5668",loop:"\u6D17\u8111\u5FAA\u73AF",speed:"\u901F\u5EA6","opacity-danmaku":"\u5F39\u5E55\u900F\u660E\u5EA6",normal:"\u6B63\u5E38","please-input-danmaku":"\u8981\u8F93\u5165\u5F39\u5E55\u5185\u5BB9\u554A\u5582\uFF01","set-danmaku-color":"\u8BBE\u7F6E\u5F39\u5E55\u989C\u8272","set-danmaku-type":"\u8BBE\u7F6E\u5F39\u5E55\u7C7B\u578B","show-danmaku":"\u663E\u793A\u5F39\u5E55","video-failed":"\u89C6\u9891\u52A0\u8F7D\u5931\u8D25","danmaku-failed":"\u5F39\u5E55\u52A0\u8F7D\u5931\u8D25","danmaku-send-failed":"\u5F39\u5E55\u53D1\u9001\u5931\u8D25","switching-quality":"\u6B63\u5728\u5207\u6362\u81F3 %q \u753B\u8D28","switched-quality":"\u5DF2\u7ECF\u5207\u6362\u81F3 %q \u753B\u8D28",ff:"\u5FEB\u8FDB %s \u79D2",rew:"\u5FEB\u9000 %s \u79D2","unlimited-danmaku":"\u6D77\u91CF\u5F39\u5E55","send-danmaku":"\u53D1\u9001\u5F39\u5E55",setting:"\u8BBE\u7F6E",fullscreen:"\u5168\u5C4F","web-fullscreen":"\u9875\u9762\u5168\u5C4F",send:"\u53D1\u9001",screenshot:"\u622A\u56FE",airplay:"\u65E0\u7EBF\u6295\u5C4F",chromecast:"ChromeCast",subtitle:"\u5B57\u5E55",off:"\u5173\u95ED","show-subs":"\u663E\u793A\u5B57\u5E55","hide-subs":"\u9690\u85CF\u5B57\u5E55",volume:"\u97F3\u91CF",live:"\u76F4\u64AD","video-info":"\u89C6\u9891\u7EDF\u8BA1\u4FE1\u606F"},"zh-tw":{"danmaku-loading":"\u5F48\u5E55\u8F09\u5165\u4E2D",top:"\u9802\u90E8",bottom:"\u5E95\u90E8",rolling:"\u6EFE\u52D5","input-danmaku-enter":"\u8F38\u5165\u5F48\u5E55\uFF0CEnter \u767C\u9001","about-author":"\u95DC\u65BC\u4F5C\u8005","dplayer-feedback":"\u64AD\u653E\u5668\u610F\u898B\u56DE\u994B","about-dplayer":"\u95DC\u65BC DPlayer \u64AD\u653E\u5668",loop:"\u5FAA\u74B0\u64AD\u653E",speed:"\u901F\u5EA6","opacity-danmaku":"\u5F48\u5E55\u900F\u660E\u5EA6",normal:"\u6B63\u5E38","please-input-danmaku":"\u8ACB\u8F38\u5165\u5F48\u5E55\u5167\u5BB9\u554A\uFF01","set-danmaku-color":"\u8A2D\u5B9A\u5F48\u5E55\u984F\u8272","set-danmaku-type":"\u8A2D\u5B9A\u5F48\u5E55\u985E\u578B","show-danmaku":"\u986F\u793A\u5F48\u5E55","video-failed":"\u5F71\u7247\u8F09\u5165\u5931\u6557","danmaku-failed":"\u5F48\u5E55\u8F09\u5165\u5931\u6557","danmaku-send-failed":"\u5F48\u5E55\u767C\u9001\u5931\u6557","switching-quality":"\u6B63\u5728\u5207\u63DB\u81F3 %q \u756B\u8CEA","switched-quality":"\u5DF2\u7D93\u5207\u63DB\u81F3 %q \u756B\u8CEA",ff:"\u5FEB\u9032 %s \u79D2",rew:"\u5FEB\u9000 %s \u79D2","unlimited-danmaku":"\u5DE8\u91CF\u5F48\u5E55","send-danmaku":"\u767C\u9001\u5F48\u5E55",setting:"\u8A2D\u5B9A",fullscreen:"\u5168\u87A2\u5E55","web-fullscreen":"\u9801\u9762\u5168\u87A2\u5E55",send:"\u767C\u9001",screenshot:"\u622A\u5716",airplay:"\u7121\u7DDA\u6295\u5C4F",chromecast:"ChromeCast",subtitle:"\u5B57\u5E55",off:"\u95DC\u9589","show-subs":"\u986F\u793A\u5B57\u5E55","hide-subs":"\u96B1\u85CF\u5B57\u5E55",volume:"\u97F3\u91CF",live:"\u76F4\u64AD","video-info":"\u5F71\u7247\u7D71\u8A08\u8A0A\u606F"},"ko-kr":{"danmaku-loading":"Danmaku\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku\uB97C \uC785\uB825\uD558\uACE0 Enter\uB97C \uB204\uB974\uC138\uC694.","about-author":"\uB9CC\uB4E0\uC774","dplayer-feedback":"\uD53C\uB4DC\uBC31 \uBCF4\uB0B4\uAE30","about-dplayer":"DPlayer \uC815\uBCF4",loop:"\uBC18\uBCF5",speed:"\uBC30\uC18D","opacity-danmaku":"Danmaku \uBD88\uD22C\uBA85\uB3C4",normal:"\uD45C\uC900","please-input-danmaku":"Danmaku\uB97C \uC785\uB825\uD558\uC138\uC694!","set-danmaku-color":"Danmaku \uC0C9\uC0C1","set-danmaku-type":"Danmaku \uC124\uC815","show-danmaku":"Danmaku \uD45C\uC2DC","video-failed":"\uBE44\uB514\uC624\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","danmaku-failed":"Danmaku\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","danmaku-send-failed":"Danmaku \uC804\uC1A1\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","Switching to":"","Switched to":"","switching-quality":"\uC804\uD658 %q \uD654\uC9C8","switched-quality":"\uC804\uD658 \uB428 %q \uD654\uC9C8",ff:"\uC55E\uC73C\uB85C %s \uCD08",rew:"\uB4A4\uB85C %s \uCD08","unlimited-danmaku":"\uB05D\uC5C6\uB294 Danmaku","send-danmaku":"Danmaku \uBCF4\uB0B4\uAE30",setting:"\uC124\uC815",fullscreen:"\uC804\uCCB4 \uD654\uBA74","web-fullscreen":"\uC6F9 \uB0B4 \uC804\uCCB4\uD654\uBA74",send:"\uBCF4\uB0B4\uAE30",screenshot:"\uD654\uBA74 \uCEA1\uCCD0",airplay:"\uC5D0\uC5B4\uD50C\uB808\uC774",chromecast:"ChromeCast",subtitle:"\uBD80\uC81C",off:"\uB044\uB2E4","show-subs":"\uC790\uB9C9 \uBCF4\uC774\uAE30","hide-subs":"\uC790\uB9C9 \uC228\uAE30\uAE30",Volume:"\uBCFC\uB968",live:"\uC0DD\uBC29\uC1A1","video-info":"\uBE44\uB514\uC624 \uC815\uBCF4"},de:{"danmaku-loading":"Danmaku l\xE4dt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Dr\xFCcke Enter nach dem Einf\xFCgen vom Danmaku","about-author":"\xDCber den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"\xDCber DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz f\xFCr Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualit\xE4t","switched-quality":"Zur %q Qualit\xE4t gewechselt",ff:"%s s Vorw\xE4rts",rew:"%s s Zur\xFCck","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schlie\xDFung","hide-subs":"Verstecke Untertitel",volume:"Lautst\xE4rke",live:"Live","video-info":"Video Info"}},Ed=r(730),Cd=r.n(Ed),Sd=r(74),Id=r.n(Sd),Dd=r(437),Md=r.n(Dd),Td=r(644),Rd=r.n(Td),Od=r(324),Bd=r.n(Od),Ld=r(574),Fd=r.n(Ld),Nd=r(300),Pd=r.n(Nd),jd=r(934),zd=r.n(jd),Vd=r(428),Ud=r.n(Vd),qd=r(807),Hd=r.n(qd),Wd=r(338),$d=r.n(Wd),Yd=r(254),Qd=r.n(Yd),Kd=r(965),Gd=r.n(Kd),Zd=r(113),Xd=r.n(Zd),Jd=r(251),tc=r.n(Jd),ec=r(410),ic=r.n(ec),nc=r(182),rc=r.n(nc),oc=r(193),ac=r.n(oc);let Ct={play:Cd(),pause:Id(),volumeUp:Md(),volumeDown:Rd(),volumeOff:Bd(),full:Fd(),fullWeb:Pd(),setting:zd(),right:Ud(),comment:Hd(),commentOff:$d(),send:Qd(),pallette:Gd(),camera:Xd(),subtitle:ic(),loading:rc(),airplay:tc(),chromecast:ac()};var sc=r(916),lc=r.n(sc);function Ze(a){return Ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Ze(a)}function Ra(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if(Ze(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if(Ze(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),Ze(d)==="symbol"?d:String(d)),o)}var d}var dc=function(){function a(d){(function(c,h){if(!(c instanceof h))throw new TypeError("Cannot call a class as a function")})(this,a),this.container=d.container,this.options=d.options,this.index=d.index,this.tran=d.tran,this.init()}var s,m,o;return s=a,o=[{key:"NewNotice",value:function(d,c,h){var f=document.createElement("div");return f.classList.add("dplayer-notice"),f.style.opacity=c,f.innerText=d,h&&(f.id="dplayer-notice-".concat(h)),f}}],(m=[{key:"init",value:function(){this.container.innerHTML=lc()({options:this.options,index:this.index,tran:this.tran,icons:Ct,mobile:F.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!F.isSafari||F.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&Ra(s.prototype,m),o&&Ra(s,o),Object.defineProperty(s,"prototype",{writable:!1}),a}();let Oa=dc;function _e(a){return _e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},_e(a)}function cc(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if(_e(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if(_e(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),_e(d)==="symbol"?d:String(d)),o)}var d}var pc=function(){function a(o){(function(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")})(this,a),this.options=o,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var s,m;return s=a,m=[{key:"load",value:function(){var o,d=this;o=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var c=(this.options.api.addition||[]).slice(0);c.push(o),this.events&&this.events.trigger("danmaku_load_start",c),this._readAllEndpoints(c,function(h){d.dan=[].concat.apply([],h).sort(function(f,g){return f.time-g.time}),window.requestAnimationFrame(function(){d.frame()}),d.options.callback(),d.events&&d.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(o){this.options.api=o,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(o,d){for(var c=this,h=[],f=0,g=function(w){c.options.apiBackend.read({url:o[w],success:function(C){h[w]=C,++f===o.length&&d(h)},error:function(C){c.options.error(C||c.options.tran("danmaku-failed")),h[w]=[],++f===o.length&&d(h)}})},A=0;A<o.length;++A)g(A)}},{key:"send",value:function(o,d){var c=this,h={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:o.text,color:o.color,type:o.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:h,success:d,error:function(g){c.options.error(g||c.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,h),this.danIndex++;var f={text:this.htmlEncode(h.text),color:h.color,type:h.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(f),this.events&&this.events.trigger("danmaku_send",h)}},{key:"frame",value:function(){var o=this;if(this.dan.length&&!this.paused&&this.showing){for(var d=this.dan[this.danIndex],c=[];d&&this.options.time()>parseFloat(d.time);)c.push(d),d=this.dan[++this.danIndex];this.draw(c)}window.requestAnimationFrame(function(){o.frame()})}},{key:"opacity",value:function(o){if(o!==void 0){for(var d=this.container.getElementsByClassName("dplayer-danmaku-item"),c=0;c<d.length;c++)d[c].style.opacity=o;this._opacity=o,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(o){var d=this;if(this.showing){var c=this.options.height,h=this.container.offsetWidth,f=this.container.offsetHeight,g=parseInt(f/c),A=function(S){var O=S.offsetWidth||parseInt(S.style.width),N=S.getBoundingClientRect().right||d.container.getBoundingClientRect().right+O;return d.container.getBoundingClientRect().right-N},w=function(S){return(h+S)/5},C=function(S,O,N){for(var rt=h/w(N),J=function(le){var ke=d.danTunnel[O][le+""];if(!ke||!ke.length)return d.danTunnel[O][le+""]=[S],S.addEventListener("animationend",function(){d.danTunnel[O][le+""].splice(0,1)}),{v:le%g};if(O!=="right")return"continue";for(var ui=0;ui<ke.length;ui++){var ja=A(ke[ui])-10;if(ja<=h-rt*w(parseInt(ke[ui].style.width))||ja<=0)break;if(ui===ke.length-1)return d.danTunnel[O][le+""].push(S),S.addEventListener("animationend",function(){d.danTunnel[O][le+""].splice(0,1)}),{v:le%g}}},Q=0;d.unlimited||Q<g;Q++){var Kt=J(Q);if(Kt!=="continue"&&_e(Kt)==="object")return Kt.v}return-1};Object.prototype.toString.call(o)!=="[object Array]"&&(o=[o]);for(var I=document.createDocumentFragment(),M=function(){o[D].type=F.number2Type(o[D].type),o[D].color||(o[D].color=16777215);var S=document.createElement("div");S.classList.add("dplayer-danmaku-item"),S.classList.add("dplayer-danmaku-".concat(o[D].type)),o[D].border?S.innerHTML='<span style="border:'.concat(o[D].border,'">').concat(o[D].text,"</span>"):S.innerHTML=o[D].text,S.style.opacity=d._opacity,S.style.color=F.number2Color(o[D].color),S.addEventListener("animationend",function(){d.container.removeChild(S)});var O,N=d._measure(o[D].text);switch(o[D].type){case"right":(O=C(S,o[D].type,N))>=0&&(S.style.width=N+1+"px",S.style.top=c*O+"px",S.style.transform="translateX(-".concat(h,"px)"));break;case"top":(O=C(S,o[D].type))>=0&&(S.style.top=c*O+"px");break;case"bottom":(O=C(S,o[D].type))>=0&&(S.style.bottom=c*O+"px");break;default:console.error("Can't handled danmaku type: ".concat(o[D].type))}O>=0&&(S.classList.add("dplayer-danmaku-move"),S.style.animationDuration=d._danAnimation(o[D].type),I.appendChild(S))},D=0;D<o.length;D++)M();return this.container.appendChild(I),I}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(o){if(!this.context){var d=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=d.getPropertyValue("font")}return this.context.measureText(o).width}},{key:"seek",value:function(){this.clear();for(var o=0;o<this.dan.length;o++){if(this.dan[o].time>=this.options.time()){this.danIndex=o;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var o=this.container.offsetWidth,d=this.container.getElementsByClassName("dplayer-danmaku-item"),c=0;c<d.length;c++)d[c].style.transform="translateX(-".concat(o,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(o){this.unlimited=o}},{key:"speed",value:function(o){this.options.api.speedRate=o}},{key:"_danAnimation",value:function(o){var d=this.options.api.speedRate||1,c=!!this.player.fullScreen.isFullScreen();return{top:"".concat((c?6:4)/d,"s"),right:"".concat((c?8:5)/d,"s"),bottom:"".concat((c?6:4)/d,"s")}[o]}}],m&&cc(s.prototype,m),Object.defineProperty(s,"prototype",{writable:!1}),a}();let mc=pc;function Xe(a){return Xe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Xe(a)}function hc(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if(Xe(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if(Xe(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),Xe(d)==="symbol"?d:String(d)),o)}var d}let uc=function(){function a(){(function(o,d){if(!(o instanceof d))throw new TypeError("Cannot call a class as a function")})(this,a),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var s,m;return s=a,(m=[{key:"on",value:function(o,d){this.type(o)&&typeof d=="function"&&(this.events[o]||(this.events[o]=[]),this.events[o].push(d))}},{key:"trigger",value:function(o,d){if(this.events[o]&&this.events[o].length)for(var c=0;c<this.events[o].length;c++)this.events[o][c](d)}},{key:"type",value:function(o){return this.playerEvents.indexOf(o)!==-1?"player":this.videoEvents.indexOf(o)!==-1?"video":(console.error("Unknown event name: ".concat(o)),null)}}])&&hc(s.prototype,m),Object.defineProperty(s,"prototype",{writable:!1}),a}();function Je(a){return Je=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Je(a)}function fc(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if(Je(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if(Je(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),Je(d)==="symbol"?d:String(d)),o)}var d}var gc=function(){function a(o){var d=this;(function(c,h){if(!(c instanceof h))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=o,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){d.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){d.player.resize(),F.setScrollPosition(d.lastScrollPosition)}),this.fullscreenchange=function(){d.player.resize(),d.isFullScreen("browser")?d.player.events.trigger("fullscreen"):(F.setScrollPosition(d.lastScrollPosition),d.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var c=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;c&&c!==d.player.container||(d.player.resize(),c?d.player.events.trigger("fullscreen"):(F.setScrollPosition(d.lastScrollPosition),d.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var s,m;return s=a,m=[{key:"isFullScreen",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(o){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",d=o==="browser"?"web":"browser",c=this.isFullScreen(d);switch(c||(this.lastScrollPosition=F.getScrollPosition()),o){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}c&&this.cancel(d)}},{key:"cancel",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(o){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(o)?this.cancel(o):this.request(o)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],m&&fc(s.prototype,m),Object.defineProperty(s,"prototype",{writable:!1}),a}();let yc=gc;function ti(a){return ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},ti(a)}function bc(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if(ti(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if(ti(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),ti(d)==="symbol"?d:String(d)),o)}var d}var vc=function(){function a(o){(function(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")})(this,a),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:o.options.hasOwnProperty("volume")?o.options.volume:.7,unlimited:(o.options.danmaku&&o.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var s,m;return s=a,(m=[{key:"init",value:function(){for(var o in this.storageName){var d=this.storageName[o];this.data[o]=parseFloat(F.storage.get(d)||this.default[o])}}},{key:"get",value:function(o){return this.data[o]}},{key:"set",value:function(o,d){this.data[o]=d,F.storage.set(this.storageName[o],d)}}])&&bc(s.prototype,m),Object.defineProperty(s,"prototype",{writable:!1}),a}();let Ac=vc;function ei(a){return ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},ei(a)}function wc(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if(ei(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if(ei(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),ei(d)==="symbol"?d:String(d)),o)}var d}var _c=function(){function a(o,d,c,h){(function(f,g){if(!(f instanceof g))throw new TypeError("Cannot call a class as a function")})(this,a),this.container=o,this.video=d,this.options=c,this.events=h,this.init()}var s,m;return s=a,m=[{key:"init",value:function(){var o=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var d=this.video.textTracks[0];d.oncuechange=function(){var c=d.activeCues[d.activeCues.length-1];if(o.container.innerHTML="",c){var h=document.createElement("div");h.appendChild(c.getCueAsHTML());var f=h.innerHTML.split(/\r?\n/).map(function(g){return"<p>".concat(g,"</p>")}).join("");o.container.innerHTML=f}o.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],m&&wc(s.prototype,m),Object.defineProperty(s,"prototype",{writable:!1}),a}();let xc=_c;function ii(a){return ii=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},ii(a)}function kc(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if(ii(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if(ii(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),ii(d)==="symbol"?d:String(d)),o)}var d}var Ec=function(){function a(o){var d=this;(function(g,A){if(!(g instanceof A))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=o,this.player.template.mask.addEventListener("click",function(){d.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){d.adaptiveHeight(),d.show()});for(var c=this.player.template.subtitlesItem.length-1,h=function(g){d.player.template.subtitlesItem[g].addEventListener("click",function(){d.hide(),d.player.options.subtitle.index!==g&&(d.player.template.subtitle.innerHTML="<p></p>",d.player.template.subtrack.src=d.player.template.subtitlesItem[g].dataset.subtitle,d.player.options.subtitle.index=g,d.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&d.subContainerShow())})},f=0;f<c;f++)h(f);this.player.template.subtitlesItem[c].addEventListener("click",function(){d.hide(),d.player.options.subtitle.index!==c&&(d.player.template.subtitle.innerHTML="<p></p>",d.player.template.subtrack.src="",d.player.options.subtitle.index=c,d.subContainerHide())})}var s,m;return s=a,(m=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var o=30*this.player.template.subtitlesItem.length+14,d=.8*this.player.template.videoWrap.offsetHeight;o>=d-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=d-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=d-50+"px")}}])&&kc(s.prototype,m),Object.defineProperty(s,"prototype",{writable:!1}),a}();let Cc=Ec;function ni(a){return ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},ni(a)}function Sc(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if(ni(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if(ni(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),ni(d)==="symbol"?d:String(d)),o)}var d}var Ic=function(){function a(o){(function(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")})(this,a),this.elements={},this.elements.volume=o.volumeBar,this.elements.played=o.playedBar,this.elements.loaded=o.loadedBar,this.elements.danmaku=o.danmakuOpacityBar}var s,m;return s=a,(m=[{key:"set",value:function(o,d,c){d=Math.max(d,0),d=Math.min(d,1),this.elements[o].style[c]=100*d+"%"}},{key:"get",value:function(o){return parseFloat(this.elements[o].style.width)/100}}])&&Sc(s.prototype,m),Object.defineProperty(s,"prototype",{writable:!1}),a}();let Dc=Ic;function ri(a){return ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},ri(a)}function Mc(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if(ri(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if(ri(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),ri(d)==="symbol"?d:String(d)),o)}var d}var Tc=function(){function a(o){(function(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=o,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(d){window.setTimeout(d,1e3/60)},this.types=["loading","info","fps"],this.init()}var s,m;return s=a,(m=[{key:"init",value:function(){var o=this;this.types.map(function(d){return d!=="fps"&&o["init".concat(d,"Checker")](),d})}},{key:"initloadingChecker",value:function(){var o=this,d=0,c=0,h=!1;this.loadingChecker=setInterval(function(){o.enableloadingChecker&&(c=o.player.video.currentTime,h||c!==d||o.player.video.paused||(o.player.container.classList.add("dplayer-loading"),h=!0),h&&c>d&&!o.player.video.paused&&(o.player.container.classList.remove("dplayer-loading"),h=!1),d=c)},100)}},{key:"initfpsChecker",value:function(){var o=this;window.requestAnimationFrame(function(){if(o.enablefpsChecker)if(o.initfpsChecker(),o.fpsStart){o.fpsIndex++;var d=new Date;d-o.fpsStart>1e3&&(o.player.infoPanel.fps(o.fpsIndex/(d-o.fpsStart)*1e3),o.fpsStart=new Date,o.fpsIndex=0)}else o.fpsStart=new Date,o.fpsIndex=0;else o.fpsStart=0,o.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var o=this;this.infoChecker=setInterval(function(){o.enableinfoChecker&&o.player.infoPanel.update()},1e3)}},{key:"enable",value:function(o){this["enable".concat(o,"Checker")]=!0,o==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(o){this["enable".concat(o,"Checker")]=!1}},{key:"destroy",value:function(){var o=this;this.types.map(function(d){return o["enable".concat(d,"Checker")]=!1,o["".concat(d,"Checker")]&&clearInterval(o["".concat(d,"Checker")]),d})}}])&&Mc(s.prototype,m),Object.defineProperty(s,"prototype",{writable:!1}),a}();let Rc=Tc;function oi(a){return oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},oi(a)}function Oc(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if(oi(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if(oi(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),oi(d)==="symbol"?d:String(d)),o)}var d}let Bc=function(){function a(o){var d=this;(function(c,h){if(!(c instanceof h))throw new TypeError("Cannot call a class as a function")})(this,a),this.container=o,this.container.addEventListener("animationend",function(){d.container.classList.remove("dplayer-bezel-transition")})}var s,m;return s=a,(m=[{key:"switch",value:function(o){this.container.innerHTML=o,this.container.classList.add("dplayer-bezel-transition")}}])&&Oc(s.prototype,m),Object.defineProperty(s,"prototype",{writable:!1}),a}();function ai(a){return ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},ai(a)}function Lc(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if(ai(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if(ai(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),ai(d)==="symbol"?d:String(d)),o)}var d}var Fc=function(){function a(o){(function(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")})(this,a),this.container=o.container,this.barWidth=o.barWidth,this.container.style.backgroundImage="url('".concat(o.url,"')"),this.events=o.events}var s,m;return s=a,(m=[{key:"resize",value:function(o,d,c){this.container.style.width="".concat(o,"px"),this.container.style.height="".concat(d,"px"),this.container.style.top="".concat(2-d,"px"),this.barWidth=c}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(o){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(o/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(o-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&Lc(s.prototype,m),Object.defineProperty(s,"prototype",{writable:!1}),a}();let Nc=Fc;function si(a){return si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},si(a)}function Pc(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if(si(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if(si(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),si(d)==="symbol"?d:String(d)),o)}var d}var Qt,Ba=!0,hr=!1,jc=function(){function a(o){(function(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=o,this.autoHideTimer=0,F.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),F.isMobile||this.initVolumeButton()}var s,m;return s=a,(m=[{key:"initPlayButton",value:function(){var o=this;this.player.template.playButton.addEventListener("click",function(){o.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){o.player.toggle()}),F.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){o.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){o.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){o.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){o.player.toggle()}))}},{key:"initHighlights",value:function(){var o=this;this.player.on("durationchange",function(){if(o.player.video.duration!==1&&o.player.video.duration!==1/0&&o.player.options.highlight){var d=o.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(d,0).forEach(function(f){o.player.template.playedBarWrap.removeChild(f)});for(var c=0;c<o.player.options.highlight.length;c++)if(o.player.options.highlight[c].text&&o.player.options.highlight[c].time){var h=document.createElement("div");h.classList.add("dplayer-highlight"),h.style.left=o.player.options.highlight[c].time/o.player.video.duration*100+"%",h.innerHTML='<span class="dplayer-highlight-text">'+o.player.options.highlight[c].text+"</span>",o.player.template.playedBarWrap.insertBefore(h,o.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var o=this;this.player.options.video.thumbnails&&(this.thumbnails=new Nc({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){o.thumbnails.resize(160,o.player.video.videoHeight/o.player.video.videoWidth*160,o.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var o=this,d=function(h){var f=((h.clientX||h.changedTouches[0].clientX)-F.getBoundingClientRectViewLeft(o.player.template.playedBarWrap))/o.player.template.playedBarWrap.clientWidth;f=Math.max(f,0),f=Math.min(f,1),o.player.bar.set("played",f,"width"),o.player.template.ptime.innerHTML=F.secondToTime(f*o.player.video.duration)},c=function h(f){document.removeEventListener(F.nameMap.dragEnd,h),document.removeEventListener(F.nameMap.dragMove,d);var g=((f.clientX||f.changedTouches[0].clientX)-F.getBoundingClientRectViewLeft(o.player.template.playedBarWrap))/o.player.template.playedBarWrap.clientWidth;g=Math.max(g,0),g=Math.min(g,1),o.player.bar.set("played",g,"width"),o.player.seek(o.player.bar.get("played")*o.player.video.duration),o.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(F.nameMap.dragStart,function(){o.player.timer.disable("progress"),document.addEventListener(F.nameMap.dragMove,d),document.addEventListener(F.nameMap.dragEnd,c)}),this.player.template.playedBarWrap.addEventListener(F.nameMap.dragMove,function(h){if(o.player.video.duration){var f=o.player.template.playedBarWrap.getBoundingClientRect().left,g=(h.clientX||h.changedTouches[0].clientX)-f;if(g<0||g>o.player.template.playedBarWrap.offsetWidth)return;var A=o.player.video.duration*(g/o.player.template.playedBarWrap.offsetWidth);F.isMobile&&o.thumbnails&&o.thumbnails.show(),o.thumbnails&&o.thumbnails.move(g),o.player.template.playedBarTime.style.left="".concat(g-(A>=3600?25:20),"px"),o.player.template.playedBarTime.innerText=F.secondToTime(A),o.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(F.nameMap.dragEnd,function(){F.isMobile&&o.thumbnails&&o.thumbnails.hide()}),F.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){o.player.video.duration&&(o.thumbnails&&o.thumbnails.show(),o.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){o.player.video.duration&&(o.thumbnails&&o.thumbnails.hide(),o.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var o=this;this.player.template.browserFullButton.addEventListener("click",function(){o.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){o.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var o=this,d=function(h){var f=h||window.event,g=((f.clientX||f.changedTouches[0].clientX)-F.getBoundingClientRectViewLeft(o.player.template.volumeBarWrap)-5.5)/35;o.player.volume(g)},c=function h(){document.removeEventListener(F.nameMap.dragEnd,h),document.removeEventListener(F.nameMap.dragMove,d),o.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(h){var f=h||window.event,g=((f.clientX||f.changedTouches[0].clientX)-F.getBoundingClientRectViewLeft(o.player.template.volumeBarWrap)-5.5)/35;o.player.volume(g)}),this.player.template.volumeBarWrapWrap.addEventListener(F.nameMap.dragStart,function(){document.addEventListener(F.nameMap.dragMove,d),document.addEventListener(F.nameMap.dragEnd,c),o.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){o.player.video.muted?(o.player.video.muted=!1,o.player.switchVolumeIcon(),o.player.bar.set("volume",o.player.volume(),"width")):(o.player.video.muted=!0,o.player.template.volumeIcon.innerHTML=Ct.volumeOff,o.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var o=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(d){d.target.classList.contains("dplayer-quality-item")&&o.player.switchQuality(d.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var o=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var d,c=document.createElement("canvas");c.width=o.player.video.videoWidth,c.height=o.player.video.videoHeight,c.getContext("2d").drawImage(o.player.video,0,0,c.width,c.height),c.toBlob(function(h){d=URL.createObjectURL(h);var f=document.createElement("a");f.href=d,f.download="DPlayer.png",f.style.display="none",document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(d),o.player.events.trigger("screenshot",d)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",(function(o){o.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",(function(){this.video.webkitShowPlaybackTargetPicker()}).bind(this))}).bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var o=window.document.createElement("script");o.setAttribute("type","text/javascript"),o.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(o),window.__onGCastApiAvailable=function(d){if(d){var c=new(Qt=window.chrome.cast).SessionRequest(Qt.media.DEFAULT_MEDIA_RECEIVER_APP_ID),h=new Qt.ApiConfig(c,function(){},function(f){f===Qt.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",f)});Qt.initialize(h,function(){})}}}},{key:"initChromecastButton",value:function(){var o=this;if(this.player.options.chromecast){Ba&&(Ba=!1,this.initChromecast());var d=function(h,f){o.currentMedia=f},c=function(h){console.error("Error launching media",h)};this.player.template.chromecastButton.addEventListener("click",function(){hr?(hr=!1,o.currentMedia.stop(),o.session.stop(),o.initChromecast()):(hr=!0,Qt.requestSession(function(h){var f,g,A;o.session=h,f=o.player.options.video.url,g=new Qt.media.MediaInfo(f),A=new Qt.media.LoadRequest(g),o.session?o.session.loadMedia(A,d.bind(o,"loadMedia"),c).play():window.open(f)},function(h){h.code==="cancel"?o.session=void 0:console.error("Error selecting a cast device",h)}))})}}},{key:"initSubtitleButton",value:function(){var o=this;this.player.events.on("subtitle_show",function(){o.player.template.subtitleButton.dataset.balloon=o.player.tran("hide-subs"),o.player.template.subtitleButtonInner.style.opacity="",o.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){o.player.template.subtitleButton.dataset.balloon=o.player.tran("show-subs"),o.player.template.subtitleButtonInner.style.opacity="0.4",o.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){o.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var o=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!o.player.video.played.length||o.player.paused||o.disableAutoHide||o.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){F.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&Pc(s.prototype,m),Object.defineProperty(s,"prototype",{writable:!1}),a}();let zc=jc;function li(a){return li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},li(a)}function Vc(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if(li(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if(li(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),li(d)==="symbol"?d:String(d)),o)}var d}var Uc=function(){function a(o){var d=this;(function(A,w){if(!(A instanceof w))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=o,this.player.template.mask.addEventListener("click",function(){d.hide()}),this.player.template.settingButton.addEventListener("click",function(){d.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){d.player.template.loopToggle.checked=!d.player.template.loopToggle.checked,d.player.template.loopToggle.checked?d.loop=!0:d.loop=!1,d.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){d.player.template.showDanmakuToggle.checked=!d.player.template.showDanmakuToggle.checked,d.player.template.showDanmakuToggle.checked?(d.showDanmaku=!0,d.player.danmaku.show()):(d.showDanmaku=!1,d.player.danmaku.hide()),d.player.user.set("danmaku",d.showDanmaku?1:0),d.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){d.player.template.unlimitDanmakuToggle.checked=!d.player.template.unlimitDanmakuToggle.checked,d.player.template.unlimitDanmakuToggle.checked?(d.unlimitDanmaku=!0,d.player.danmaku.unlimit(!0)):(d.unlimitDanmaku=!1,d.player.danmaku.unlimit(!1)),d.player.user.set("unlimited",d.unlimitDanmaku?1:0),d.hide()}),this.player.template.speed.addEventListener("click",function(){d.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),d.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var c=function(A){d.player.template.speedItem[A].addEventListener("click",function(){d.player.speed(d.player.template.speedItem[A].dataset.speed),d.hide()})},h=0;h<this.player.template.speedItem.length;h++)c(h);if(this.player.danmaku){this.player.on("danmaku_opacity",function(A){d.player.bar.set("danmaku",A,"width"),d.player.user.set("opacity",A)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var f=function(A){var w=A||window.event,C=((w.clientX||w.changedTouches[0].clientX)-F.getBoundingClientRectViewLeft(d.player.template.danmakuOpacityBarWrap))/130;C=Math.max(C,0),C=Math.min(C,1),d.player.danmaku.opacity(C)},g=function A(){document.removeEventListener(F.nameMap.dragEnd,A),document.removeEventListener(F.nameMap.dragMove,f),d.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(A){var w=A||window.event,C=((w.clientX||w.changedTouches[0].clientX)-F.getBoundingClientRectViewLeft(d.player.template.danmakuOpacityBarWrap))/130;C=Math.max(C,0),C=Math.min(C,1),d.player.danmaku.opacity(C)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(F.nameMap.dragStart,function(){document.addEventListener(F.nameMap.dragMove,f),document.addEventListener(F.nameMap.dragEnd,g),d.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var s,m;return s=a,(m=[{key:"hide",value:function(){var o=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){o.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),o.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&Vc(s.prototype,m),Object.defineProperty(s,"prototype",{writable:!1}),a}();let qc=Uc;function di(a){return di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},di(a)}function Hc(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if(di(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if(di(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),di(d)==="symbol"?d:String(d)),o)}var d}var Wc=function(){function a(o){var d=this;(function(c,h){if(!(c instanceof h))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=o,this.player.template.mask.addEventListener("click",function(){d.hide()}),this.player.template.commentButton.addEventListener("click",function(){d.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){d.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(d.player.template.commentColorSettingBox.querySelector("input:checked+span")){var c=d.player.template.commentColorSettingBox.querySelector("input:checked").value;d.player.template.commentSettingFill.style.fill=c,d.player.template.commentInput.style.color=c,d.player.template.commentSendFill.style.fill=c}}),this.player.template.commentInput.addEventListener("click",function(){d.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(c){(c||window.event).keyCode===13&&d.send()}),this.player.template.commentSendButton.addEventListener("click",function(){d.send()})}var s,m;return s=a,(m=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var o=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:F.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){o.player.template.commentInput.value="",o.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&Hc(s.prototype,m),Object.defineProperty(s,"prototype",{writable:!1}),a}();let $c=Wc;function ci(a){return ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},ci(a)}function Yc(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if(ci(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if(ci(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),ci(d)==="symbol"?d:String(d)),o)}var d}var Qc=function(){function a(o){(function(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=o,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var s,m;return s=a,(m=[{key:"doHotKey",value:function(o){if(this.player.focus){var d=document.activeElement.tagName.toUpperCase(),c=document.activeElement.getAttribute("contenteditable");if(d!=="INPUT"&&d!=="TEXTAREA"&&c!==""&&c!=="true"){var h,f=o||window.event;switch(f.keyCode){case 32:f.preventDefault(),this.player.toggle();break;case 37:if(f.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(f.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:f.preventDefault(),h=this.player.volume()+.1,this.player.volume(h);break;case 40:f.preventDefault(),h=this.player.volume()-.1,this.player.volume(h)}}}}},{key:"cancelFullScreen",value:function(o){(o||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&Yc(s.prototype,m),Object.defineProperty(s,"prototype",{writable:!1}),a}();let Kc=Qc;function pi(a){return pi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},pi(a)}function Gc(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if(pi(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if(pi(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),pi(d)==="symbol"?d:String(d)),o)}var d}var Zc=function(){function a(o){var d=this;(function(c,h){if(!(c instanceof h))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=o,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(c,h){d.player.options.contextmenu[h].click&&c.addEventListener("click",function(){d.player.options.contextmenu[h].click(d.player),d.hide()})}),this.contextmenuHandler=function(c){if(d.shown)d.hide();else{var h=c||window.event;h.preventDefault();var f=d.player.container.getBoundingClientRect();d.show(h.clientX-f.left,h.clientY-f.top),d.player.template.mask.addEventListener("click",function(){d.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var s,m;return s=a,(m=[{key:"show",value:function(o,d){this.player.template.menu.classList.add("dplayer-menu-show");var c=this.player.container.getBoundingClientRect();o+this.player.template.menu.offsetWidth>=c.width?(this.player.template.menu.style.right=c.width-o+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=o+"px",this.player.template.menu.style.right="initial"),d+this.player.template.menu.offsetHeight>=c.height?(this.player.template.menu.style.bottom=c.height-d+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=d+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&Gc(s.prototype,m),Object.defineProperty(s,"prototype",{writable:!1}),a}();let Xc=Zc;function mi(a){return mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},mi(a)}function Jc(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(d=function(c,h){if(mi(c)!=="object"||c===null)return c;var f=c[Symbol.toPrimitive];if(f!==void 0){var g=f.call(c,"string");if(mi(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(o.key),mi(d)==="symbol"?d:String(d)),o)}var d}var tp=function(){function a(o){var d=this;(function(c,h){if(!(c instanceof h))throw new TypeError("Cannot call a class as a function")})(this,a),this.container=o.template.infoPanel,this.template=o.template,this.video=o.video,this.player=o,this.template.infoPanelClose.addEventListener("click",function(){d.hide()})}var s,m;return s=a,(m=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(o){this.template.infoFPS.innerHTML="".concat(o.toFixed(1))}}])&&Jc(s.prototype,m),Object.defineProperty(s,"prototype",{writable:!1}),a}();let ep=tp;var ip=r(568),np=r.n(ip);function hi(a){return hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},hi(a)}function La(a,s){var m=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);s&&(o=o.filter(function(d){return Object.getOwnPropertyDescriptor(a,d).enumerable})),m.push.apply(m,o)}return m}function rp(a,s,m){return(s=Na(s))in a?Object.defineProperty(a,s,{value:m,enumerable:!0,configurable:!0,writable:!0}):a[s]=m,a}function Fa(a,s){for(var m=0;m<s.length;m++){var o=s[m];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,Na(o.key),o)}}function Na(a){var s=function(m,o){if(hi(m)!=="object"||m===null)return m;var d=m[Symbol.toPrimitive];if(d!==void 0){var c=d.call(m,"string");if(hi(c)!=="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(m)}(a);return hi(s)==="symbol"?s:String(s)}var Pa=0,xe=[],op=function(){function a(d){var c=this;(function(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")})(this,a),this.options=function(h){var f={container:h.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:xd,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var g in f)f.hasOwnProperty(g)&&!h.hasOwnProperty(g)&&(h[g]=f[g]);return h.video&&!h.video.type&&(h.video.type="auto"),pr(h.danmaku)==="object"&&h.danmaku&&!h.danmaku.user&&(h.danmaku.user="DIYgod"),h.subtitle&&(!h.subtitle.type&&(h.subtitle.type="webvtt"),!h.subtitle.fontSize&&(h.subtitle.fontSize="20px"),!h.subtitle.bottom&&(h.subtitle.bottom="40px"),!h.subtitle.color&&(h.subtitle.color="#fff")),h.video.quality&&(h.video.url=h.video.quality[h.video.defaultQuality].url),h.lang&&(h.lang=h.lang.toLowerCase()),h.contextmenu=h.contextmenu.concat([{key:"video-info",click:function(A){A.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),h}(function(h){for(var f=1;f<arguments.length;f++){var g=arguments[f]!=null?arguments[f]:{};f%2?La(Object(g),!0).forEach(function(A){rp(h,A,g[A])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(g)):La(Object(g)).forEach(function(A){Object.defineProperty(h,A,Object.getOwnPropertyDescriptor(g,A))})}return h}({preload:d.video.type==="webtorrent"?"none":"metadata"},d)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new kd(this.options.lang).tran,this.events=new uc,this.user=new Ac(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),F.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(h){return h.lang===c.options.subtitle.defaultSubtitle||h.name===c.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(h){return h.lang===c.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new Oa({container:this.container,options:this.options,index:Pa,tran:this.tran}),this.video=this.template.video,this.bar=new Dc(this.template),this.bezel=new Bc(this.template.bezel),this.fullScreen=new yc(this),this.controller=new zc(this),this.options.danmaku&&(this.danmaku=new mc({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){c.template.danmakuLoading.style.display="none",c.options.autoplay&&c.play()},0)},error:function(h){c.notice(h)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return c.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(h){return c.tran(h)}}),this.comment=new $c(this)),this.setting=new qc(this),this.plugins={},this.docClickFun=function(){c.focus=!1},this.containerClickFun=function(){c.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new Rc(this),this.hotkey=new Kc(this),this.contextmenu=new Xc(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new ep(this),!this.danmaku&&this.options.autoplay&&this.play(),Pa++,xe.push(this)}var s,m,o;return s=a,m=[{key:"seek",value:function(d){d=Math.max(d,0),this.video.duration&&(d=Math.min(d,this.video.duration)),this.video.currentTime<d?this.notice("".concat(this.tran("ff").replace("%s",(d-this.video.currentTime).toFixed(0)))):this.video.currentTime>d&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-d).toFixed(0)))),this.video.currentTime=d,this.danmaku&&this.danmaku.seek(),this.bar.set("played",d/this.video.duration,"width"),this.template.ptime.innerHTML=F.secondToTime(d)}},{key:"play",value:function(d){var c=this;if(this.paused=!1,this.video.paused&&!F.isMobile&&this.bezel.switch(Ct.play),this.template.playButton.innerHTML=Ct.pause,this.template.mobilePlayButton.innerHTML=Ct.pause,d||Gl.resolve(this.video.play()).catch(function(){c.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var h=0;h<xe.length;h++)this!==xe[h]&&xe[h].pause()}},{key:"pause",value:function(d){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||F.isMobile||this.bezel.switch(Ct.pause),this.template.playButton.innerHTML=Ct.play,this.template.mobilePlayButton.innerHTML=Ct.play,d||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=Ct.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=Ct.volumeDown:this.template.volumeIcon.innerHTML=Ct.volumeOff}},{key:"volume",value:function(d,c,h){if(d=parseFloat(d),!isNaN(d)){d=Math.max(d,0),d=Math.min(d,1),this.bar.set("volume",d,"width");var f="".concat((100*d).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=f,c||this.user.set("volume",d),h||this.notice("".concat(this.tran("volume")," ").concat((100*d).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=d,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(d,c){this.events.on(d,c)}},{key:"switchVideo",value:function(d,c){this.pause(),this.video.poster=d.pic?d.pic:"",this.video.src=d.url,this.initMSE(this.video,d.type||"auto"),c&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:c.id,address:c.api,token:c.token,maximum:c.maximum,addition:c.addition,user:c.user}))}},{key:"initMSE",value:function(d,c){var h=this;if(this.type=c,this.options.video.customType&&this.options.video.customType[c])Object.prototype.toString.call(this.options.video.customType[c])==="[object Function]"?this.options.video.customType[c](this.video,this):console.error("Illegal customType: ".concat(c));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(d.src)?this.type="hls":/.flv(#|\?|$)/i.exec(d.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(d.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(d.canPlayType("application/x-mpegURL")||d.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var f=this.options.pluginOptions.hls,g=new window.Hls(f);this.plugins.hls=g,g.loadSource(d.src),g.attachMedia(d),this.events.on("destroy",function(){g.destroy(),delete h.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var A=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:d.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=A,A.attachMediaElement(d),A.load(),this.events.on("destroy",function(){A.unload(),A.detachMediaElement(),A.destroy(),delete h.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var w=window.dashjs.MediaPlayer().create().initialize(d,d.src,!1),C=this.options.pluginOptions.dash;w.updateSettings(C),this.plugins.dash=w,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete h.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var I=this.options.pluginOptions.webtorrent,M=new window.WebTorrent(I);this.plugins.webtorrent=M;var D=d.src;d.src="",d.preload="metadata",d.addEventListener("durationchange",function(){return h.container.classList.remove("dplayer-loading")},{once:!0}),M.add(D,function(S){S.files.find(function(O){return O.name.endsWith(".mp4")}).renderTo(h.video,{autoplay:h.options.autoplay,controls:!1})}),this.events.on("destroy",function(){M.remove(D),M.destroy(),delete h.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(d,c){var h=this;this.initMSE(d,c),this.on("durationchange",function(){d.duration!==1&&d.duration!==1/0&&(h.template.dtime.innerHTML=F.secondToTime(d.duration))}),this.on("progress",function(){var A=d.buffered.length?d.buffered.end(d.buffered.length-1)/d.duration:0;h.bar.set("loaded",A,"width")}),this.on("error",function(){h.video.error&&h.tran&&h.notice&&h.type!=="webtorrent"&&h.notice(h.tran("video-failed"))}),this.on("ended",function(){h.bar.set("played",1,"width"),h.setting.loop?(h.seek(0),h.play()):h.pause(),h.danmaku&&(h.danmaku.danIndex=0)}),this.on("play",function(){h.paused&&h.play(!0)}),this.on("pause",function(){h.paused||h.pause(!0)}),this.on("timeupdate",function(){h.bar.set("played",h.video.currentTime/h.video.duration,"width");var A=F.secondToTime(h.video.currentTime);h.template.ptime.innerHTML!==A&&(h.template.ptime.innerHTML=A)});for(var f=function(A){d.addEventListener(h.events.videoEvents[A],function(w){h.events.trigger(h.events.videoEvents[A],w)})},g=0;g<this.events.videoEvents.length;g++)f(g);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new xc(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new Cc(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(d){var c=this;if(d=typeof d=="string"?parseInt(d):d,this.qualityIndex!==d&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=d,this.switchingQuality=!0,this.quality=this.options.video.quality[d],this.template.qualityButton.innerHTML=this.quality.name;var h=this.video.paused;this.video.pause();var f=np()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),g=new DOMParser().parseFromString(f,"text/html").body.firstChild;this.template.videoWrap.insertBefore(g,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=g,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(c.prevVideo){if(c.video.currentTime!==c.prevVideo.currentTime)return void c.seek(c.prevVideo.currentTime);c.template.videoWrap.removeChild(c.prevVideo),c.video.classList.add("dplayer-video-current"),h||c.video.play(),c.prevVideo=null,c.notice("".concat(c.tran("switched-quality").replace("%q",c.quality.name)),void 0,void 0,"switch-quality"),c.switchingQuality=!1,c.events.trigger("quality_end")}}),this.on("error",function(){c.video.error&&c.prevVideo&&(c.template.videoWrap.removeChild(c.video),c.video=c.prevVideo,h||c.video.play(),c.qualityIndex=c.prevIndex,c.quality=c.options.video.quality[c.qualityIndex],c.noticeTime=setTimeout(function(){c.template.notice.style.opacity=0,c.events.trigger("notice_hide")},3e3),c.prevVideo=null,c.switchingQuality=!1)})}}},{key:"notice",value:function(d){var c,h,f,g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,w=arguments.length>3?arguments[3]:void 0;if(w&&((c=document.getElementById("dplayer-notice-".concat(w)))&&(c.innerHTML=d),this.noticeList[w]&&(clearTimeout(this.noticeList[w]),this.noticeList[w]=null)),!c){var C=Oa.NewNotice(d,A,w);this.template.noticeList.appendChild(C),c=C}this.events.trigger("notice_show",c),g>0&&(this.noticeList[w]=setTimeout((h=c,f=this,function(){h.addEventListener("animationend",function(){f.template.noticeList.removeChild(h)}),h.classList.add("remove-notice"),f.events.trigger("notice_hide"),f.noticeList[w]=null}),g))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(d){this.video.playbackRate=d}},{key:"destroy",value:function(){xe.splice(xe.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],o=[{key:"version",get:function(){return"1.27.1"}}],m&&Fa(s.prototype,m),o&&Fa(s,o),Object.defineProperty(s,"prototype",{writable:!1}),a}();let ap=op;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");let sp=ap})(),e.default})())});var Fr=class extends gs{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Nr=class i extends Fr{static makeCurrent(){fs(new i)}onAndCancel(t,r,e){return t.addEventListener(r,e),()=>{t.removeEventListener(r,e)}}dispatchEvent(t,r){t.dispatchEvent(r)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,r){return r=r||this.getDefaultDocument(),r.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,r){return r==="window"?window:r==="document"?t:r==="body"?t.body:null}getBaseHref(t){let r=mp();return r==null?null:hp(r)}resetBaseElement(){Si=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return ys(document.cookie,t)}},Si=null;function mp(){return Si=Si||document.querySelector("base"),Si?Si.getAttribute("href"):null}function hp(i){return new URL(i,document.baseURI).pathname}var up=(()=>{let t=class t{build(){return new XMLHttpRequest}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=H({token:t,factory:t.\u0275fac});let i=t;return i})(),Pr=new Z(""),ks=(()=>{let t=class t{constructor(e,n){this._zone=n,this._eventNameToPlugin=new Map,e.forEach(l=>{l.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,l){return this._findPluginFor(n).addEventListener(e,n,l)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(p=>p.supports(e)),!n)throw new tt(5101,!1);return this._eventNameToPlugin.set(e,n),n}};t.\u0275fac=function(n){return new(n||t)(q(Pr),q(X))},t.\u0275prov=H({token:t,factory:t.\u0275fac});let i=t;return i})(),En=class{constructor(t){this._doc=t}},Br="ng-app-id",Es=(()=>{let t=class t{constructor(e,n,l,p={}){this.doc=e,this.appId=n,this.nonce=l,this.platformId=p,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Or(p),this.resetHostNodes()}addStyles(e){for(let n of e)this.changeUsageCount(n,1)===1&&this.onStyleAdded(n)}removeStyles(e){for(let n of e)this.changeUsageCount(n,-1)<=0&&this.onStyleRemoved(n)}ngOnDestroy(){let e=this.styleNodesInDOM;e&&(e.forEach(n=>n.remove()),e.clear());for(let n of this.getAllStyles())this.onStyleRemoved(n);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(let n of this.getAllStyles())this.addStyleToHost(e,n)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(let n of this.hostNodes)this.addStyleToHost(n,e)}onStyleRemoved(e){let n=this.styleRef;n.get(e)?.elements?.forEach(l=>l.remove()),n.delete(e)}collectServerRenderedStyles(){let e=this.doc.head?.querySelectorAll(`style[${Br}="${this.appId}"]`);if(e?.length){let n=new Map;return e.forEach(l=>{l.textContent!=null&&n.set(l.textContent,l)}),n}return null}changeUsageCount(e,n){let l=this.styleRef;if(l.has(e)){let p=l.get(e);return p.usage+=n,p.usage}return l.set(e,{usage:n,elements:[]}),n}getStyleElement(e,n){let l=this.styleNodesInDOM,p=l?.get(n);if(p?.parentNode===e)return l.delete(n),p.removeAttribute(Br),p;{let y=this.doc.createElement("style");return this.nonce&&y.setAttribute("nonce",this.nonce),y.textContent=n,this.platformIsServer&&y.setAttribute(Br,this.appId),e.appendChild(y),y}}addStyleToHost(e,n){let l=this.getStyleElement(e,n),p=this.styleRef,y=p.get(n)?.elements;y?y.push(l):p.set(n,{elements:[l],usage:1})}resetHostNodes(){let e=this.hostNodes;e.clear(),e.add(this.doc.head)}};t.\u0275fac=function(n){return new(n||t)(q(ht),q(bn),q(_i,8),q(ce))},t.\u0275prov=H({token:t,factory:t.\u0275fac});let i=t;return i})(),Lr={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Vr=/%COMP%/g,Cs="%COMP%",fp=`_nghost-${Cs}`,gp=`_ngcontent-${Cs}`,yp=!0,bp=new Z("",{providedIn:"root",factory:()=>yp});function vp(i){return gp.replace(Vr,i)}function Ap(i){return fp.replace(Vr,i)}function Ss(i,t){return t.map(r=>r.replace(Vr,i))}var Cn=(()=>{let t=class t{constructor(e,n,l,p,y,v,b,u=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=l,this.removeStylesOnCompDestroy=p,this.doc=y,this.platformId=v,this.ngZone=b,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=Or(v),this.defaultRenderer=new Ii(e,y,b,this.platformIsServer)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===bi.ShadowDom&&(n=at(L({},n),{encapsulation:bi.Emulated}));let l=this.getOrCreateRenderer(e,n);return l instanceof Sn?l.applyToHost(e):l instanceof Di&&l.applyStyles(),l}getOrCreateRenderer(e,n){let l=this.rendererByCompId,p=l.get(n.id);if(!p){let y=this.doc,v=this.ngZone,b=this.eventManager,u=this.sharedStylesHost,x=this.removeStylesOnCompDestroy,E=this.platformIsServer;switch(n.encapsulation){case bi.Emulated:p=new Sn(b,u,n,this.appId,x,y,v,E);break;case bi.ShadowDom:return new jr(b,u,e,n,y,v,this.nonce,E);default:p=new Di(b,u,n,x,y,v,E);break}l.set(n.id,p)}return p}ngOnDestroy(){this.rendererByCompId.clear()}};t.\u0275fac=function(n){return new(n||t)(q(ks),q(Es),q(bn),q(bp),q(ht),q(ce),q(X),q(_i))},t.\u0275prov=H({token:t,factory:t.\u0275fac});let i=t;return i})(),Ii=class{constructor(t,r,e,n){this.eventManager=t,this.doc=r,this.ngZone=e,this.platformIsServer=n,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(t,r){return r?this.doc.createElementNS(Lr[r]||r,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,r){(_s(t)?t.content:t).appendChild(r)}insertBefore(t,r,e){t&&(_s(t)?t.content:t).insertBefore(r,e)}removeChild(t,r){t&&t.removeChild(r)}selectRootElement(t,r){let e=typeof t=="string"?this.doc.querySelector(t):t;if(!e)throw new tt(-5104,!1);return r||(e.textContent=""),e}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,r,e,n){if(n){r=n+":"+r;let l=Lr[n];l?t.setAttributeNS(l,r,e):t.setAttribute(r,e)}else t.setAttribute(r,e)}removeAttribute(t,r,e){if(e){let n=Lr[e];n?t.removeAttributeNS(n,r):t.removeAttribute(`${e}:${r}`)}else t.removeAttribute(r)}addClass(t,r){t.classList.add(r)}removeClass(t,r){t.classList.remove(r)}setStyle(t,r,e,n){n&(xi.DashCase|xi.Important)?t.style.setProperty(r,e,n&xi.Important?"important":""):t.style[r]=e}removeStyle(t,r,e){e&xi.DashCase?t.style.removeProperty(r):t.style[r]=""}setProperty(t,r,e){t!=null&&(t[r]=e)}setValue(t,r){t.nodeValue=r}listen(t,r,e){if(typeof t=="string"&&(t=Tr().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${r}`);return this.eventManager.addEventListener(t,r,this.decoratePreventDefault(e))}decoratePreventDefault(t){return r=>{if(r==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(r)):t(r))===!1&&r.preventDefault()}}};function _s(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var jr=class extends Ii{constructor(t,r,e,n,l,p,y,v){super(t,l,p,v),this.sharedStylesHost=r,this.hostEl=e,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let b=Ss(n.id,n.styles);for(let u of b){let x=document.createElement("style");y&&x.setAttribute("nonce",y),x.textContent=u,this.shadowRoot.appendChild(x)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,r){return super.appendChild(this.nodeOrShadowRoot(t),r)}insertBefore(t,r,e){return super.insertBefore(this.nodeOrShadowRoot(t),r,e)}removeChild(t,r){return super.removeChild(this.nodeOrShadowRoot(t),r)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Di=class extends Ii{constructor(t,r,e,n,l,p,y,v){super(t,l,p,y),this.sharedStylesHost=r,this.removeStylesOnCompDestroy=n,this.styles=v?Ss(v,e.styles):e.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Sn=class extends Di{constructor(t,r,e,n,l,p,y,v){let b=n+"-"+e.id;super(t,r,e,l,p,y,v,b),this.contentAttr=vp(b),this.hostAttr=Ap(b)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,r){let e=super.createElement(t,r);return super.setAttribute(e,this.contentAttr,""),e}},wp=(()=>{let t=class t extends En{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,l){return e.addEventListener(n,l,!1),()=>this.removeEventListener(e,n,l)}removeEventListener(e,n,l){return e.removeEventListener(n,l)}};t.\u0275fac=function(n){return new(n||t)(q(ht))},t.\u0275prov=H({token:t,factory:t.\u0275fac});let i=t;return i})(),xs=["alt","control","meta","shift"],_p={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},xp={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},kp=(()=>{let t=class t extends En{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,l){let p=t.parseEventName(n),y=t.eventCallback(p.fullKey,l,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Tr().onAndCancel(e,p.domEventName,y))}static parseEventName(e){let n=e.toLowerCase().split("."),l=n.shift();if(n.length===0||!(l==="keydown"||l==="keyup"))return null;let p=t._normalizeKey(n.pop()),y="",v=n.indexOf("code");if(v>-1&&(n.splice(v,1),y="code."),xs.forEach(u=>{let x=n.indexOf(u);x>-1&&(n.splice(x,1),y+=u+".")}),y+=p,n.length!=0||p.length===0)return null;let b={};return b.domEventName=l,b.fullKey=y,b}static matchEventFullKeyCode(e,n){let l=_p[e.key]||e.key,p="";return n.indexOf("code.")>-1&&(l=e.code,p="code."),l==null||!l?!1:(l=l.toLowerCase(),l===" "?l="space":l==="."&&(l="dot"),xs.forEach(y=>{if(y!==l){let v=xp[y];v(e)&&(p+=y+".")}}),p+=l,p===n)}static eventCallback(e,n,l){return p=>{t.matchEventFullKeyCode(p,e)&&l.runGuarded(()=>n(p))}}static _normalizeKey(e){return e==="esc"?"escape":e}};t.\u0275fac=function(n){return new(n||t)(q(ht))},t.\u0275prov=H({token:t,factory:t.\u0275fac});let i=t;return i})();function Is(i,t){return hs(L({rootComponent:i},Ep(t)))}function Ep(i){return{appProviders:[...Mp,...i?.providers??[]],platformProviders:Dp}}function Cp(){Nr.makeCurrent()}function Sp(){return new _r}function Ip(){return Za(document),document}var Dp=[{provide:ce,useValue:vs},{provide:Xa,useValue:Cp,multi:!0},{provide:ht,useFactory:Ip,deps:[]}];var Mp=[{provide:Ya,useValue:"root"},{provide:_r,useFactory:Sp,deps:[]},{provide:Pr,useClass:wp,multi:!0,deps:[ht,X,ce]},{provide:Pr,useClass:kp,multi:!0,deps:[ht]},Cn,Es,ks,{provide:vn,useExisting:Cn},{provide:ws,useClass:up,deps:[]},[]];var Ds=(()=>{let t=class t{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}};t.\u0275fac=function(n){return new(n||t)(q(ht))},t.\u0275prov=H({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var U="primary",Hi=Symbol("RouteTitle"),$r=class{constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let r=this.params[t];return Array.isArray(r)?r[0]:r}return null}getAll(t){if(this.has(t)){let r=this.params[t];return Array.isArray(r)?r:[r]}return[]}get keys(){return Object.keys(this.params)}};function Ne(i){return new $r(i)}function Rp(i,t,r){let e=r.path.split("/");if(e.length>i.length||r.pathMatch==="full"&&(t.hasChildren()||e.length<i.length))return null;let n={};for(let l=0;l<e.length;l++){let p=e[l],y=i[l];if(p.startsWith(":"))n[p.substring(1)]=y;else if(p!==y.path)return null}return{consumed:i.slice(0,e.length),posParams:n}}function Op(i,t){if(i.length!==t.length)return!1;for(let r=0;r<i.length;++r)if(!jt(i[r],t[r]))return!1;return!0}function jt(i,t){let r=i?Yr(i):void 0,e=t?Yr(t):void 0;if(!r||!e||r.length!=e.length)return!1;let n;for(let l=0;l<r.length;l++)if(n=r[l],!Ls(i[n],t[n]))return!1;return!0}function Yr(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function Ls(i,t){if(Array.isArray(i)&&Array.isArray(t)){if(i.length!==t.length)return!1;let r=[...i].sort(),e=[...t].sort();return r.every((n,l)=>e[l]===n)}else return i===t}function Fs(i){return i.length>0?i[i.length-1]:null}function re(i){return fr(i)?i:Ir(i)?St(Promise.resolve(i)):z(i)}var Bp={exact:Ps,subset:js},Ns={exact:Lp,subset:Fp,ignored:()=>!0};function Ms(i,t,r){return Bp[r.paths](i.root,t.root,r.matrixParams)&&Ns[r.queryParams](i.queryParams,t.queryParams)&&!(r.fragment==="exact"&&i.fragment!==t.fragment)}function Lp(i,t){return jt(i,t)}function Ps(i,t,r){if(!he(i.segments,t.segments)||!Mn(i.segments,t.segments,r)||i.numberOfChildren!==t.numberOfChildren)return!1;for(let e in t.children)if(!i.children[e]||!Ps(i.children[e],t.children[e],r))return!1;return!0}function Fp(i,t){return Object.keys(t).length<=Object.keys(i).length&&Object.keys(t).every(r=>Ls(i[r],t[r]))}function js(i,t,r){return zs(i,t,t.segments,r)}function zs(i,t,r,e){if(i.segments.length>r.length){let n=i.segments.slice(0,r.length);return!(!he(n,r)||t.hasChildren()||!Mn(n,r,e))}else if(i.segments.length===r.length){if(!he(i.segments,r)||!Mn(i.segments,r,e))return!1;for(let n in t.children)if(!i.children[n]||!js(i.children[n],t.children[n],e))return!1;return!0}else{let n=r.slice(0,i.segments.length),l=r.slice(i.segments.length);return!he(i.segments,n)||!Mn(i.segments,n,e)||!i.children[U]?!1:zs(i.children[U],t,l,e)}}function Mn(i,t,r){return t.every((e,n)=>Ns[r](i[n].parameters,e.parameters))}var ie=class{constructor(t=new $([],{}),r={},e=null){this.root=t,this.queryParams=r,this.fragment=e}get queryParamMap(){return this._queryParamMap??=Ne(this.queryParams),this._queryParamMap}toString(){return jp.serialize(this)}},$=class{constructor(t,r){this.segments=t,this.children=r,this.parent=null,Object.values(r).forEach(e=>e.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Tn(this)}},me=class{constructor(t,r){this.path=t,this.parameters=r}get parameterMap(){return this._parameterMap??=Ne(this.parameters),this._parameterMap}toString(){return Us(this)}};function Np(i,t){return he(i,t)&&i.every((r,e)=>jt(r.parameters,t[e].parameters))}function he(i,t){return i.length!==t.length?!1:i.every((r,e)=>r.path===t[e].path)}function Pp(i,t){let r=[];return Object.entries(i.children).forEach(([e,n])=>{e===U&&(r=r.concat(t(n,e)))}),Object.entries(i.children).forEach(([e,n])=>{e!==U&&(r=r.concat(t(n,e)))}),r}var Ao=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=H({token:t,factory:()=>new On,providedIn:"root"});let i=t;return i})(),On=class{parse(t){let r=new Kr(t);return new ie(r.parseRootSegment(),r.parseQueryParams(),r.parseFragment())}serialize(t){let r=`/${Mi(t.root,!0)}`,e=Up(t.queryParams),n=typeof t.fragment=="string"?`#${zp(t.fragment)}`:"";return`${r}${e}${n}`}},jp=new On;function Tn(i){return i.segments.map(t=>Us(t)).join("/")}function Mi(i,t){if(!i.hasChildren())return Tn(i);if(t){let r=i.children[U]?Mi(i.children[U],!1):"",e=[];return Object.entries(i.children).forEach(([n,l])=>{n!==U&&e.push(`${n}:${Mi(l,!1)}`)}),e.length>0?`${r}(${e.join("//")})`:r}else{let r=Pp(i,(e,n)=>n===U?[Mi(i.children[U],!1)]:[`${n}:${Mi(e,!1)}`]);return Object.keys(i.children).length===1&&i.children[U]!=null?`${Tn(i)}/${r[0]}`:`${Tn(i)}/(${r.join("//")})`}}function Vs(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function In(i){return Vs(i).replace(/%3B/gi,";")}function zp(i){return encodeURI(i)}function Qr(i){return Vs(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Rn(i){return decodeURIComponent(i)}function Ts(i){return Rn(i.replace(/\+/g,"%20"))}function Us(i){return`${Qr(i.path)}${Vp(i.parameters)}`}function Vp(i){return Object.entries(i).map(([t,r])=>`;${Qr(t)}=${Qr(r)}`).join("")}function Up(i){let t=Object.entries(i).map(([r,e])=>Array.isArray(e)?e.map(n=>`${In(r)}=${In(n)}`).join("&"):`${In(r)}=${In(e)}`).filter(r=>r);return t.length?`?${t.join("&")}`:""}var qp=/^[^\/()?;#]+/;function Ur(i){let t=i.match(qp);return t?t[0]:""}var Hp=/^[^\/()?;=#]+/;function Wp(i){let t=i.match(Hp);return t?t[0]:""}var $p=/^[^=?&#]+/;function Yp(i){let t=i.match($p);return t?t[0]:""}var Qp=/^[^&#]+/;function Kp(i){let t=i.match(Qp);return t?t[0]:""}var Kr=class{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new $([],{}):new $([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let r={};this.peekStartsWith("/(")&&(this.capture("/"),r=this.parseParens(!0));let e={};return this.peekStartsWith("(")&&(e=this.parseParens(!1)),(t.length>0||Object.keys(r).length>0)&&(e[U]=new $(t,r)),e}parseSegment(){let t=Ur(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new tt(4009,!1);return this.capture(t),new me(Rn(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let r=Wp(this.remaining);if(!r)return;this.capture(r);let e="";if(this.consumeOptional("=")){let n=Ur(this.remaining);n&&(e=n,this.capture(e))}t[Rn(r)]=Rn(e)}parseQueryParam(t){let r=Yp(this.remaining);if(!r)return;this.capture(r);let e="";if(this.consumeOptional("=")){let p=Kp(this.remaining);p&&(e=p,this.capture(e))}let n=Ts(r),l=Ts(e);if(t.hasOwnProperty(n)){let p=t[n];Array.isArray(p)||(p=[p],t[n]=p),p.push(l)}else t[n]=l}parseParens(t){let r={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let e=Ur(this.remaining),n=this.remaining[e.length];if(n!=="/"&&n!==")"&&n!==";")throw new tt(4010,!1);let l;e.indexOf(":")>-1?(l=e.slice(0,e.indexOf(":")),this.capture(l),this.capture(":")):t&&(l=U);let p=this.parseChildren();r[l]=Object.keys(p).length===1?p[U]:new $([],p),this.consumeOptional("//")}return r}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new tt(4011,!1)}};function qs(i){return i.segments.length>0?new $([],{[U]:i}):i}function Hs(i){let t={};for(let[e,n]of Object.entries(i.children)){let l=Hs(n);if(e===U&&l.segments.length===0&&l.hasChildren())for(let[p,y]of Object.entries(l.children))t[p]=y;else(l.segments.length>0||l.hasChildren())&&(t[e]=l)}let r=new $(i.segments,t);return Gp(r)}function Gp(i){if(i.numberOfChildren===1&&i.children[U]){let t=i.children[U];return new $(i.segments.concat(t.segments),t.children)}return i}function Pe(i){return i instanceof ie}function Zp(i,t,r=null,e=null){let n=Ws(i);return $s(n,t,r,e)}function Ws(i){let t;function r(l){let p={};for(let v of l.children){let b=r(v);p[v.outlet]=b}let y=new $(l.url,p);return l===i&&(t=y),y}let e=r(i.root),n=qs(e);return t??n}function $s(i,t,r,e){let n=i;for(;n.parent;)n=n.parent;if(t.length===0)return qr(n,n,n,r,e);let l=Xp(t);if(l.toRoot())return qr(n,n,new $([],{}),r,e);let p=Jp(l,n,i),y=p.processChildren?Oi(p.segmentGroup,p.index,l.commands):Qs(p.segmentGroup,p.index,l.commands);return qr(n,p.segmentGroup,y,r,e)}function Bn(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function Fi(i){return typeof i=="object"&&i!=null&&i.outlets}function qr(i,t,r,e,n){let l={};e&&Object.entries(e).forEach(([v,b])=>{l[v]=Array.isArray(b)?b.map(u=>`${u}`):`${b}`});let p;i===t?p=r:p=Ys(i,t,r);let y=qs(Hs(p));return new ie(y,l,n)}function Ys(i,t,r){let e={};return Object.entries(i.children).forEach(([n,l])=>{l===t?e[n]=r:e[n]=Ys(l,t,r)}),new $(i.segments,e)}var Ln=class{constructor(t,r,e){if(this.isAbsolute=t,this.numberOfDoubleDots=r,this.commands=e,t&&e.length>0&&Bn(e[0]))throw new tt(4003,!1);let n=e.find(Fi);if(n&&n!==Fs(e))throw new tt(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Xp(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new Ln(!0,0,i);let t=0,r=!1,e=i.reduce((n,l,p)=>{if(typeof l=="object"&&l!=null){if(l.outlets){let y={};return Object.entries(l.outlets).forEach(([v,b])=>{y[v]=typeof b=="string"?b.split("/"):b}),[...n,{outlets:y}]}if(l.segmentPath)return[...n,l.segmentPath]}return typeof l!="string"?[...n,l]:p===0?(l.split("/").forEach((y,v)=>{v==0&&y==="."||(v==0&&y===""?r=!0:y===".."?t++:y!=""&&n.push(y))}),n):[...n,l]},[]);return new Ln(r,t,e)}var Le=class{constructor(t,r,e){this.segmentGroup=t,this.processChildren=r,this.index=e}};function Jp(i,t,r){if(i.isAbsolute)return new Le(t,!0,0);if(!r)return new Le(t,!1,NaN);if(r.parent===null)return new Le(r,!0,0);let e=Bn(i.commands[0])?0:1,n=r.segments.length-1+e;return tm(r,n,i.numberOfDoubleDots)}function tm(i,t,r){let e=i,n=t,l=r;for(;l>n;){if(l-=n,e=e.parent,!e)throw new tt(4005,!1);n=e.segments.length}return new Le(e,!1,n-l)}function em(i){return Fi(i[0])?i[0].outlets:{[U]:i}}function Qs(i,t,r){if(i??=new $([],{}),i.segments.length===0&&i.hasChildren())return Oi(i,t,r);let e=im(i,t,r),n=r.slice(e.commandIndex);if(e.match&&e.pathIndex<i.segments.length){let l=new $(i.segments.slice(0,e.pathIndex),{});return l.children[U]=new $(i.segments.slice(e.pathIndex),i.children),Oi(l,0,n)}else return e.match&&n.length===0?new $(i.segments,{}):e.match&&!i.hasChildren()?Gr(i,t,r):e.match?Oi(i,0,n):Gr(i,t,r)}function Oi(i,t,r){if(r.length===0)return new $(i.segments,{});{let e=em(r),n={};if(Object.keys(e).some(l=>l!==U)&&i.children[U]&&i.numberOfChildren===1&&i.children[U].segments.length===0){let l=Oi(i.children[U],t,r);return new $(i.segments,l.children)}return Object.entries(e).forEach(([l,p])=>{typeof p=="string"&&(p=[p]),p!==null&&(n[l]=Qs(i.children[l],t,p))}),Object.entries(i.children).forEach(([l,p])=>{e[l]===void 0&&(n[l]=p)}),new $(i.segments,n)}}function im(i,t,r){let e=0,n=t,l={match:!1,pathIndex:0,commandIndex:0};for(;n<i.segments.length;){if(e>=r.length)return l;let p=i.segments[n],y=r[e];if(Fi(y))break;let v=`${y}`,b=e<r.length-1?r[e+1]:null;if(n>0&&v===void 0)break;if(v&&b&&typeof b=="object"&&b.outlets===void 0){if(!Os(v,b,p))return l;e+=2}else{if(!Os(v,{},p))return l;e++}n++}return{match:!0,pathIndex:n,commandIndex:e}}function Gr(i,t,r){let e=i.segments.slice(0,t),n=0;for(;n<r.length;){let l=r[n];if(Fi(l)){let v=nm(l.outlets);return new $(e,v)}if(n===0&&Bn(r[0])){let v=i.segments[t];e.push(new me(v.path,Rs(r[0]))),n++;continue}let p=Fi(l)?l.outlets[U]:`${l}`,y=n<r.length-1?r[n+1]:null;p&&y&&Bn(y)?(e.push(new me(p,Rs(y))),n+=2):(e.push(new me(p,{})),n++)}return new $(e,{})}function nm(i){let t={};return Object.entries(i).forEach(([r,e])=>{typeof e=="string"&&(e=[e]),e!==null&&(t[r]=Gr(new $([],{}),0,e))}),t}function Rs(i){let t={};return Object.entries(i).forEach(([r,e])=>t[r]=`${e}`),t}function Os(i,t,r){return i==r.path&&jt(t,r.parameters)}var Bi="imperative",ct=function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i}(ct||{}),kt=class{constructor(t,r){this.id=t,this.url=r}},Ni=class extends kt{constructor(t,r,e="imperative",n=null){super(t,r),this.type=ct.NavigationStart,this.navigationTrigger=e,this.restoredState=n}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ue=class extends kt{constructor(t,r,e){super(t,r),this.urlAfterRedirects=e,this.type=ct.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},vt=function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i}(vt||{}),Zr=function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i}(Zr||{}),ne=class extends kt{constructor(t,r,e,n){super(t,r),this.reason=e,this.code=n,this.type=ct.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},fe=class extends kt{constructor(t,r,e,n){super(t,r),this.reason=e,this.code=n,this.type=ct.NavigationSkipped}},Pi=class extends kt{constructor(t,r,e,n){super(t,r),this.error=e,this.target=n,this.type=ct.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Fn=class extends kt{constructor(t,r,e,n){super(t,r),this.urlAfterRedirects=e,this.state=n,this.type=ct.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xr=class extends kt{constructor(t,r,e,n){super(t,r),this.urlAfterRedirects=e,this.state=n,this.type=ct.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Jr=class extends kt{constructor(t,r,e,n,l){super(t,r),this.urlAfterRedirects=e,this.state=n,this.shouldActivate=l,this.type=ct.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},to=class extends kt{constructor(t,r,e,n){super(t,r),this.urlAfterRedirects=e,this.state=n,this.type=ct.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},eo=class extends kt{constructor(t,r,e,n){super(t,r),this.urlAfterRedirects=e,this.state=n,this.type=ct.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},io=class{constructor(t){this.route=t,this.type=ct.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},no=class{constructor(t){this.route=t,this.type=ct.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},ro=class{constructor(t){this.snapshot=t,this.type=ct.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},oo=class{constructor(t){this.snapshot=t,this.type=ct.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ao=class{constructor(t){this.snapshot=t,this.type=ct.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},so=class{constructor(t){this.snapshot=t,this.type=ct.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var ji=class{},zi=class{constructor(t){this.url=t}};var lo=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new Un,this.attachRef=null}},Un=(()=>{let t=class t{constructor(){this.contexts=new Map}onChildOutletCreated(e,n){let l=this.getOrCreateContext(e);l.outlet=n,this.contexts.set(e,l)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new lo,this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=H({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Nn=class{constructor(t){this._root=t}get root(){return this._root.value}parent(t){let r=this.pathFromRoot(t);return r.length>1?r[r.length-2]:null}children(t){let r=co(t,this._root);return r?r.children.map(e=>e.value):[]}firstChild(t){let r=co(t,this._root);return r&&r.children.length>0?r.children[0].value:null}siblings(t){let r=po(t,this._root);return r.length<2?[]:r[r.length-2].children.map(n=>n.value).filter(n=>n!==t)}pathFromRoot(t){return po(t,this._root).map(r=>r.value)}};function co(i,t){if(i===t.value)return t;for(let r of t.children){let e=co(i,r);if(e)return e}return null}function po(i,t){if(i===t.value)return[t];for(let r of t.children){let e=po(i,r);if(e.length)return e.unshift(t),e}return[]}var bt=class{constructor(t,r){this.value=t,this.children=r}toString(){return`TreeNode(${this.value})`}};function Be(i){let t={};return i&&i.children.forEach(r=>t[r.value.outlet]=r),t}var Pn=class extends Nn{constructor(t,r){super(t),this.snapshot=r,_o(this,t)}toString(){return this.snapshot.toString()}};function Ks(i){let t=rm(i),r=new ft([new me("",{})]),e=new ft({}),n=new ft({}),l=new ft({}),p=new ft(""),y=new je(r,e,l,p,n,U,i,t.root);return y.snapshot=t.root,new Pn(new bt(y,[]),t)}function rm(i){let t={},r={},e={},n="",l=new Vi([],t,e,n,r,U,i,null,{});return new jn("",new bt(l,[]))}var je=class{constructor(t,r,e,n,l,p,y,v){this.urlSubject=t,this.paramsSubject=r,this.queryParamsSubject=e,this.fragmentSubject=n,this.dataSubject=l,this.outlet=p,this.component=y,this._futureSnapshot=v,this.title=this.dataSubject?.pipe(W(b=>b[Hi]))??z(void 0),this.url=t,this.params=r,this.queryParams=e,this.fragment=n,this.data=l}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(W(t=>Ne(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(W(t=>Ne(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function wo(i,t,r="emptyOnly"){let e,{routeConfig:n}=i;return t!==null&&(r==="always"||n?.path===""||!t.component&&!t.routeConfig?.loadComponent)?e={params:L(L({},t.params),i.params),data:L(L({},t.data),i.data),resolve:L(L(L(L({},i.data),t.data),n?.data),i._resolvedData)}:e={params:L({},i.params),data:L({},i.data),resolve:L(L({},i.data),i._resolvedData??{})},n&&Zs(n)&&(e.resolve[Hi]=n.title),e}var Vi=class{get title(){return this.data?.[Hi]}constructor(t,r,e,n,l,p,y,v,b){this.url=t,this.params=r,this.queryParams=e,this.fragment=n,this.data=l,this.outlet=p,this.component=y,this.routeConfig=v,this._resolve=b}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Ne(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Ne(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(e=>e.toString()).join("/"),r=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${r}')`}},jn=class extends Nn{constructor(t,r){super(r),this.url=t,_o(this,r)}toString(){return Gs(this._root)}};function _o(i,t){t.value._routerState=i,t.children.forEach(r=>_o(i,r))}function Gs(i){let t=i.children.length>0?` { ${i.children.map(Gs).join(", ")} } `:"";return`${i.value}${t}`}function Hr(i){if(i.snapshot){let t=i.snapshot,r=i._futureSnapshot;i.snapshot=r,jt(t.queryParams,r.queryParams)||i.queryParamsSubject.next(r.queryParams),t.fragment!==r.fragment&&i.fragmentSubject.next(r.fragment),jt(t.params,r.params)||i.paramsSubject.next(r.params),Op(t.url,r.url)||i.urlSubject.next(r.url),jt(t.data,r.data)||i.dataSubject.next(r.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function mo(i,t){let r=jt(i.params,t.params)&&Np(i.url,t.url),e=!i.parent!=!t.parent;return r&&!e&&(!i.parent||mo(i.parent,t.parent))}function Zs(i){return typeof i.title=="string"||i.title===null}var om=(()=>{let t=class t{constructor(){this.activated=null,this._activatedRoute=null,this.name=U,this.activateEvents=new gt,this.deactivateEvents=new gt,this.attachEvents=new gt,this.detachEvents=new gt,this.parentContexts=P(Un),this.location=P(es),this.changeDetector=P(pe),this.environmentInjector=P(fn),this.inputBinder=P(xo,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:l}=e.name;if(n)return;this.isTrackedInParentContexts(l)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(l)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new tt(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new tt(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new tt(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new tt(4013,!1);this._activatedRoute=e;let l=this.location,y=e.snapshot.component,v=this.parentContexts.getOrCreateContext(this.name).children,b=new ho(e,v,l.injector);this.activated=l.createComponent(y,{index:l.length,injector:b,environmentInjector:n??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=pt({type:t,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[wi]});let i=t;return i})(),ho=class{constructor(t,r,e){this.route=t,this.childContexts=r,this.parent=e,this.__ngOutletInjector=!0}get(t,r){return t===je?this.route:t===Un?this.childContexts:this.parent.get(t,r)}},xo=new Z("");function am(i,t,r){let e=Ui(i,t._root,r?r._root:void 0);return new Pn(e,t)}function Ui(i,t,r){if(r&&i.shouldReuseRoute(t.value,r.value.snapshot)){let e=r.value;e._futureSnapshot=t.value;let n=sm(i,t,r);return new bt(e,n)}else{if(i.shouldAttach(t.value)){let l=i.retrieve(t.value);if(l!==null){let p=l.route;return p.value._futureSnapshot=t.value,p.children=t.children.map(y=>Ui(i,y)),p}}let e=lm(t.value),n=t.children.map(l=>Ui(i,l));return new bt(e,n)}}function sm(i,t,r){return t.children.map(e=>{for(let n of r.children)if(i.shouldReuseRoute(e.value,n.value.snapshot))return Ui(i,e,n);return Ui(i,e)})}function lm(i){return new je(new ft(i.url),new ft(i.params),new ft(i.queryParams),new ft(i.fragment),new ft(i.data),i.outlet,i.component,i)}var Xs="ngNavigationCancelingError";function Js(i,t){let{redirectTo:r,navigationBehaviorOptions:e}=Pe(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,n=tl(!1,vt.Redirect);return n.url=r,n.navigationBehaviorOptions=e,n}function tl(i,t){let r=new Error(`NavigationCancelingError: ${i||""}`);return r[Xs]=!0,r.cancellationCode=t,r}function dm(i){return el(i)&&Pe(i.url)}function el(i){return!!i&&i[Xs]}var cm=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=Rt({type:t,selectors:[["ng-component"]],standalone:!0,features:[Pt],decls:1,vars:0,template:function(n,l){n&1&&_t(0,"router-outlet")},dependencies:[om],encapsulation:2});let i=t;return i})();function pm(i,t){return i.providers&&!i._injector&&(i._injector=rs(i.providers,t,`Route: ${i.path}`)),i._injector??t}function ko(i){let t=i.children&&i.children.map(ko),r=t?at(L({},i),{children:t}):L({},i);return!r.component&&!r.loadComponent&&(t||r.loadChildren)&&r.outlet&&r.outlet!==U&&(r.component=cm),r}function zt(i){return i.outlet||U}function mm(i,t){let r=i.filter(e=>zt(e)===t);return r.push(...i.filter(e=>zt(e)!==t)),r}function Wi(i){if(!i)return null;if(i.routeConfig?._injector)return i.routeConfig._injector;for(let t=i.parent;t;t=t.parent){let r=t.routeConfig;if(r?._loadedInjector)return r._loadedInjector;if(r?._injector)return r._injector}return null}var hm=(i,t,r,e)=>W(n=>(new uo(t,n.targetRouterState,n.currentRouterState,r,e).activate(i),n)),uo=class{constructor(t,r,e,n,l){this.routeReuseStrategy=t,this.futureState=r,this.currState=e,this.forwardEvent=n,this.inputBindingEnabled=l}activate(t){let r=this.futureState._root,e=this.currState?this.currState._root:null;this.deactivateChildRoutes(r,e,t),Hr(this.futureState.root),this.activateChildRoutes(r,e,t)}deactivateChildRoutes(t,r,e){let n=Be(r);t.children.forEach(l=>{let p=l.value.outlet;this.deactivateRoutes(l,n[p],e),delete n[p]}),Object.values(n).forEach(l=>{this.deactivateRouteAndItsChildren(l,e)})}deactivateRoutes(t,r,e){let n=t.value,l=r?r.value:null;if(n===l)if(n.component){let p=e.getContext(n.outlet);p&&this.deactivateChildRoutes(t,r,p.children)}else this.deactivateChildRoutes(t,r,e);else l&&this.deactivateRouteAndItsChildren(r,e)}deactivateRouteAndItsChildren(t,r){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,r):this.deactivateRouteAndOutlet(t,r)}detachAndStoreRouteSubtree(t,r){let e=r.getContext(t.value.outlet),n=e&&t.value.component?e.children:r,l=Be(t);for(let p of Object.values(l))this.deactivateRouteAndItsChildren(p,n);if(e&&e.outlet){let p=e.outlet.detach(),y=e.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:p,route:t,contexts:y})}}deactivateRouteAndOutlet(t,r){let e=r.getContext(t.value.outlet),n=e&&t.value.component?e.children:r,l=Be(t);for(let p of Object.values(l))this.deactivateRouteAndItsChildren(p,n);e&&(e.outlet&&(e.outlet.deactivate(),e.children.onOutletDeactivated()),e.attachRef=null,e.route=null)}activateChildRoutes(t,r,e){let n=Be(r);t.children.forEach(l=>{this.activateRoutes(l,n[l.value.outlet],e),this.forwardEvent(new so(l.value.snapshot))}),t.children.length&&this.forwardEvent(new oo(t.value.snapshot))}activateRoutes(t,r,e){let n=t.value,l=r?r.value:null;if(Hr(n),n===l)if(n.component){let p=e.getOrCreateContext(n.outlet);this.activateChildRoutes(t,r,p.children)}else this.activateChildRoutes(t,r,e);else if(n.component){let p=e.getOrCreateContext(n.outlet);if(this.routeReuseStrategy.shouldAttach(n.snapshot)){let y=this.routeReuseStrategy.retrieve(n.snapshot);this.routeReuseStrategy.store(n.snapshot,null),p.children.onOutletReAttached(y.contexts),p.attachRef=y.componentRef,p.route=y.route.value,p.outlet&&p.outlet.attach(y.componentRef,y.route.value),Hr(y.route.value),this.activateChildRoutes(t,null,p.children)}else{let y=Wi(n.snapshot);p.attachRef=null,p.route=n,p.injector=y,p.outlet&&p.outlet.activateWith(n,p.injector),this.activateChildRoutes(t,null,p.children)}}else this.activateChildRoutes(t,null,e)}},zn=class{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},Fe=class{constructor(t,r){this.component=t,this.route=r}};function um(i,t,r){let e=i._root,n=t?t._root:null;return Ti(e,n,r,[e.value])}function fm(i){let t=i.routeConfig?i.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:i,guards:t}}function Ve(i,t){let r=Symbol(),e=t.get(i,r);return e===r?typeof i=="function"&&!$a(i)?i:t.get(i):e}function Ti(i,t,r,e,n={canDeactivateChecks:[],canActivateChecks:[]}){let l=Be(t);return i.children.forEach(p=>{gm(p,l[p.value.outlet],r,e.concat([p.value]),n),delete l[p.value.outlet]}),Object.entries(l).forEach(([p,y])=>Li(y,r.getContext(p),n)),n}function gm(i,t,r,e,n={canDeactivateChecks:[],canActivateChecks:[]}){let l=i.value,p=t?t.value:null,y=r?r.getContext(i.value.outlet):null;if(p&&l.routeConfig===p.routeConfig){let v=ym(p,l,l.routeConfig.runGuardsAndResolvers);v?n.canActivateChecks.push(new zn(e)):(l.data=p.data,l._resolvedData=p._resolvedData),l.component?Ti(i,t,y?y.children:null,e,n):Ti(i,t,r,e,n),v&&y&&y.outlet&&y.outlet.isActivated&&n.canDeactivateChecks.push(new Fe(y.outlet.component,p))}else p&&Li(t,y,n),n.canActivateChecks.push(new zn(e)),l.component?Ti(i,null,y?y.children:null,e,n):Ti(i,null,r,e,n);return n}function ym(i,t,r){if(typeof r=="function")return r(i,t);switch(r){case"pathParamsChange":return!he(i.url,t.url);case"pathParamsOrQueryParamsChange":return!he(i.url,t.url)||!jt(i.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!mo(i,t)||!jt(i.queryParams,t.queryParams);case"paramsChange":default:return!mo(i,t)}}function Li(i,t,r){let e=Be(i),n=i.value;Object.entries(e).forEach(([l,p])=>{n.component?t?Li(p,t.children.getContext(l),r):Li(p,null,r):Li(p,t,r)}),n.component?t&&t.outlet&&t.outlet.isActivated?r.canDeactivateChecks.push(new Fe(t.outlet.component,n)):r.canDeactivateChecks.push(new Fe(null,n)):r.canDeactivateChecks.push(new Fe(null,n))}function $i(i){return typeof i=="function"}function bm(i){return typeof i=="boolean"}function vm(i){return i&&$i(i.canLoad)}function Am(i){return i&&$i(i.canActivate)}function wm(i){return i&&$i(i.canActivateChild)}function _m(i){return i&&$i(i.canDeactivate)}function xm(i){return i&&$i(i.canMatch)}function il(i){return i instanceof Va||i?.name==="EmptyError"}var Dn=Symbol("INITIAL_VALUE");function ze(){return Tt(i=>gi(i.map(t=>t.pipe(Ht(1),un(Dn)))).pipe(W(t=>{for(let r of t)if(r!==!0){if(r===Dn)return Dn;if(r===!1||r instanceof ie)return r}return!0}),Mt(t=>t!==Dn),Ht(1)))}function km(i,t){return wt(r=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:l,canDeactivateChecks:p}}=r;return p.length===0&&l.length===0?z(at(L({},r),{guardsResult:!0})):Em(p,e,n,i).pipe(wt(y=>y&&bm(y)?Cm(e,l,i,t):z(y)),W(y=>at(L({},r),{guardsResult:y})))})}function Em(i,t,r,e){return St(i).pipe(wt(n=>Tm(n.component,n.route,r,t,e)),Zt(n=>n!==!0,!0))}function Cm(i,t,r,e){return St(t).pipe(yi(n=>mn(Im(n.route.parent,e),Sm(n.route,e),Mm(i,n.path,r),Dm(i,n.route,r))),Zt(n=>n!==!0,!0))}function Sm(i,t){return i!==null&&t&&t(new ao(i)),z(!0)}function Im(i,t){return i!==null&&t&&t(new ro(i)),z(!0)}function Dm(i,t,r){let e=t.routeConfig?t.routeConfig.canActivate:null;if(!e||e.length===0)return z(!0);let n=e.map(l=>gr(()=>{let p=Wi(t)??r,y=Ve(l,p),v=Am(y)?y.canActivate(t,i):de(p,()=>y(t,i));return re(v).pipe(Zt())}));return z(n).pipe(ze())}function Mm(i,t,r){let e=t[t.length-1],l=t.slice(0,t.length-1).reverse().map(p=>fm(p)).filter(p=>p!==null).map(p=>gr(()=>{let y=p.guards.map(v=>{let b=Wi(p.node)??r,u=Ve(v,b),x=wm(u)?u.canActivateChild(e,i):de(b,()=>u(e,i));return re(x).pipe(Zt())});return z(y).pipe(ze())}));return z(l).pipe(ze())}function Tm(i,t,r,e,n){let l=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!l||l.length===0)return z(!0);let p=l.map(y=>{let v=Wi(t)??n,b=Ve(y,v),u=_m(b)?b.canDeactivate(i,t,r,e):de(v,()=>b(i,t,r,e));return re(u).pipe(Zt())});return z(p).pipe(ze())}function Rm(i,t,r,e){let n=t.canLoad;if(n===void 0||n.length===0)return z(!0);let l=n.map(p=>{let y=Ve(p,i),v=vm(y)?y.canLoad(t,r):de(i,()=>y(t,r));return re(v)});return z(l).pipe(ze(),nl(e))}function nl(i){return za(st(t=>{if(Pe(t))throw Js(i,t)}),W(t=>t===!0))}function Om(i,t,r,e){let n=t.canMatch;if(!n||n.length===0)return z(!0);let l=n.map(p=>{let y=Ve(p,i),v=xm(y)?y.canMatch(t,r):de(i,()=>y(t,r));return re(v)});return z(l).pipe(ze(),nl(e))}var qi=class{constructor(t){this.segmentGroup=t||null}},Vn=class extends Error{constructor(t){super(),this.urlTree=t}};function Oe(i){return fi(new qi(i))}function Bm(i){return fi(new tt(4e3,!1))}function Lm(i){return fi(tl(!1,vt.GuardRejected))}var fo=class{constructor(t,r){this.urlSerializer=t,this.urlTree=r}lineralizeSegments(t,r){let e=[],n=r.root;for(;;){if(e=e.concat(n.segments),n.numberOfChildren===0)return z(e);if(n.numberOfChildren>1||!n.children[U])return Bm(t.redirectTo);n=n.children[U]}}applyRedirectCommands(t,r,e){let n=this.applyRedirectCreateUrlTree(r,this.urlSerializer.parse(r),t,e);if(r.startsWith("/"))throw new Vn(n);return n}applyRedirectCreateUrlTree(t,r,e,n){let l=this.createSegmentGroup(t,r.root,e,n);return new ie(l,this.createQueryParams(r.queryParams,this.urlTree.queryParams),r.fragment)}createQueryParams(t,r){let e={};return Object.entries(t).forEach(([n,l])=>{if(typeof l=="string"&&l.startsWith(":")){let y=l.substring(1);e[n]=r[y]}else e[n]=l}),e}createSegmentGroup(t,r,e,n){let l=this.createSegments(t,r.segments,e,n),p={};return Object.entries(r.children).forEach(([y,v])=>{p[y]=this.createSegmentGroup(t,v,e,n)}),new $(l,p)}createSegments(t,r,e,n){return r.map(l=>l.path.startsWith(":")?this.findPosParam(t,l,n):this.findOrReturn(l,e))}findPosParam(t,r,e){let n=e[r.path.substring(1)];if(!n)throw new tt(4001,!1);return n}findOrReturn(t,r){let e=0;for(let n of r){if(n.path===t.path)return r.splice(e),n;e++}return t}},go={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Fm(i,t,r,e,n){let l=Eo(i,t,r);return l.matched?(e=pm(t,e),Om(e,t,r,n).pipe(W(p=>p===!0?l:L({},go)))):z(l)}function Eo(i,t,r){if(t.path==="**")return Nm(r);if(t.path==="")return t.pathMatch==="full"&&(i.hasChildren()||r.length>0)?L({},go):{matched:!0,consumedSegments:[],remainingSegments:r,parameters:{},positionalParamSegments:{}};let n=(t.matcher||Rp)(r,i,t);if(!n)return L({},go);let l={};Object.entries(n.posParams??{}).forEach(([y,v])=>{l[y]=v.path});let p=n.consumed.length>0?L(L({},l),n.consumed[n.consumed.length-1].parameters):l;return{matched:!0,consumedSegments:n.consumed,remainingSegments:r.slice(n.consumed.length),parameters:p,positionalParamSegments:n.posParams??{}}}function Nm(i){return{matched:!0,parameters:i.length>0?Fs(i).parameters:{},consumedSegments:i,remainingSegments:[],positionalParamSegments:{}}}function Bs(i,t,r,e){return r.length>0&&zm(i,r,e)?{segmentGroup:new $(t,jm(e,new $(r,i.children))),slicedSegments:[]}:r.length===0&&Vm(i,r,e)?{segmentGroup:new $(i.segments,Pm(i,r,e,i.children)),slicedSegments:r}:{segmentGroup:new $(i.segments,i.children),slicedSegments:r}}function Pm(i,t,r,e){let n={};for(let l of r)if(qn(i,t,l)&&!e[zt(l)]){let p=new $([],{});n[zt(l)]=p}return L(L({},e),n)}function jm(i,t){let r={};r[U]=t;for(let e of i)if(e.path===""&&zt(e)!==U){let n=new $([],{});r[zt(e)]=n}return r}function zm(i,t,r){return r.some(e=>qn(i,t,e)&&zt(e)!==U)}function Vm(i,t,r){return r.some(e=>qn(i,t,e))}function qn(i,t,r){return(i.hasChildren()||t.length>0)&&r.pathMatch==="full"?!1:r.path===""}function Um(i,t,r,e){return zt(i)!==e&&(e===U||!qn(t,r,i))?!1:Eo(t,i,r).matched}function qm(i,t,r){return t.length===0&&!i.children[r]}var yo=class{};function Hm(i,t,r,e,n,l,p="emptyOnly"){return new bo(i,t,r,e,n,p,l).recognize()}var Wm=31,bo=class{constructor(t,r,e,n,l,p,y){this.injector=t,this.configLoader=r,this.rootComponentType=e,this.config=n,this.urlTree=l,this.paramsInheritanceStrategy=p,this.urlSerializer=y,this.applyRedirects=new fo(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(t){return new tt(4002,`'${t.segmentGroup}'`)}recognize(){let t=Bs(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(t).pipe(W(r=>{let e=new Vi([],Object.freeze({}),Object.freeze(L({},this.urlTree.queryParams)),this.urlTree.fragment,{},U,this.rootComponentType,null,{}),n=new bt(e,r),l=new jn("",n),p=Zp(e,[],this.urlTree.queryParams,this.urlTree.fragment);return p.queryParams=this.urlTree.queryParams,l.url=this.urlSerializer.serialize(p),this.inheritParamsAndData(l._root,null),{state:l,tree:p}}))}match(t){return this.processSegmentGroup(this.injector,this.config,t,U).pipe(Ce(e=>{if(e instanceof Vn)return this.urlTree=e.urlTree,this.match(e.urlTree.root);throw e instanceof qi?this.noMatchError(e):e}))}inheritParamsAndData(t,r){let e=t.value,n=wo(e,r,this.paramsInheritanceStrategy);e.params=Object.freeze(n.params),e.data=Object.freeze(n.data),t.children.forEach(l=>this.inheritParamsAndData(l,e))}processSegmentGroup(t,r,e,n){return e.segments.length===0&&e.hasChildren()?this.processChildren(t,r,e):this.processSegment(t,r,e,e.segments,n,!0).pipe(W(l=>l instanceof bt?[l]:[]))}processChildren(t,r,e){let n=[];for(let l of Object.keys(e.children))l==="primary"?n.unshift(l):n.push(l);return St(n).pipe(yi(l=>{let p=e.children[l],y=mm(r,l);return this.processSegmentGroup(t,y,p,l)}),Wa((l,p)=>(l.push(...p),l)),yr(null),Ha(),wt(l=>{if(l===null)return Oe(e);let p=rl(l);return $m(p),z(p)}))}processSegment(t,r,e,n,l,p){return St(r).pipe(yi(y=>this.processSegmentAgainstRoute(y._injector??t,r,y,e,n,l,p).pipe(Ce(v=>{if(v instanceof qi)return z(null);throw v}))),Zt(y=>!!y),Ce(y=>{if(il(y))return qm(e,n,l)?z(new yo):Oe(e);throw y}))}processSegmentAgainstRoute(t,r,e,n,l,p,y){return Um(e,n,l,p)?e.redirectTo===void 0?this.matchSegmentAgainstRoute(t,n,e,l,p):this.allowRedirects&&y?this.expandSegmentAgainstRouteUsingRedirect(t,n,r,e,l,p):Oe(n):Oe(n)}expandSegmentAgainstRouteUsingRedirect(t,r,e,n,l,p){let{matched:y,consumedSegments:v,positionalParamSegments:b,remainingSegments:u}=Eo(r,n,l);if(!y)return Oe(r);n.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Wm&&(this.allowRedirects=!1));let x=this.applyRedirects.applyRedirectCommands(v,n.redirectTo,b);return this.applyRedirects.lineralizeSegments(n,x).pipe(wt(E=>this.processSegment(t,e,r,E.concat(u),p,!1)))}matchSegmentAgainstRoute(t,r,e,n,l){let p=Fm(r,e,n,t,this.urlSerializer);return e.path==="**"&&(r.children={}),p.pipe(Tt(y=>y.matched?(t=e._injector??t,this.getChildConfig(t,e,n).pipe(Tt(({routes:v})=>{let b=e._loadedInjector??t,{consumedSegments:u,remainingSegments:x,parameters:E}=y,k=new Vi(u,E,Object.freeze(L({},this.urlTree.queryParams)),this.urlTree.fragment,Qm(e),zt(e),e.component??e._loadedComponent??null,e,Km(e)),{segmentGroup:T,slicedSegments:B}=Bs(r,u,x,v);if(B.length===0&&T.hasChildren())return this.processChildren(b,v,T).pipe(W(V=>V===null?null:new bt(k,V)));if(v.length===0&&B.length===0)return z(new bt(k,[]));let R=zt(e)===l;return this.processSegment(b,v,T,B,R?U:l,!0).pipe(W(V=>new bt(k,V instanceof bt?[V]:[])))}))):Oe(r)))}getChildConfig(t,r,e){return r.children?z({routes:r.children,injector:t}):r.loadChildren?r._loadedRoutes!==void 0?z({routes:r._loadedRoutes,injector:r._loadedInjector}):Rm(t,r,e,this.urlSerializer).pipe(wt(n=>n?this.configLoader.loadChildren(t,r).pipe(st(l=>{r._loadedRoutes=l.routes,r._loadedInjector=l.injector})):Lm(r))):z({routes:[],injector:t})}};function $m(i){i.sort((t,r)=>t.value.outlet===U?-1:r.value.outlet===U?1:t.value.outlet.localeCompare(r.value.outlet))}function Ym(i){let t=i.value.routeConfig;return t&&t.path===""}function rl(i){let t=[],r=new Set;for(let e of i){if(!Ym(e)){t.push(e);continue}let n=t.find(l=>e.value.routeConfig===l.value.routeConfig);n!==void 0?(n.children.push(...e.children),r.add(n)):t.push(e)}for(let e of r){let n=rl(e.children);t.push(new bt(e.value,n))}return t.filter(e=>!r.has(e))}function Qm(i){return i.data||{}}function Km(i){return i.resolve||{}}function Gm(i,t,r,e,n,l){return wt(p=>Hm(i,t,r,e,p.extractedUrl,n,l).pipe(W(({state:y,tree:v})=>at(L({},p),{targetSnapshot:y,urlAfterRedirects:v}))))}function Zm(i,t){return wt(r=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=r;if(!n.length)return z(r);let l=new Set(n.map(v=>v.route)),p=new Set;for(let v of l)if(!p.has(v))for(let b of ol(v))p.add(b);let y=0;return St(p).pipe(yi(v=>l.has(v)?Xm(v,e,i,t):(v.data=wo(v,v.parent,i).resolve,z(void 0))),st(()=>y++),br(1),wt(v=>y===p.size?z(r):Gt))})}function ol(i){let t=i.children.map(r=>ol(r)).flat();return[i,...t]}function Xm(i,t,r,e){let n=i.routeConfig,l=i._resolve;return n?.title!==void 0&&!Zs(n)&&(l[Hi]=n.title),Jm(l,i,t,e).pipe(W(p=>(i._resolvedData=p,i.data=wo(i,i.parent,r).resolve,null)))}function Jm(i,t,r,e){let n=Yr(i);if(n.length===0)return z({});let l={};return St(n).pipe(wt(p=>th(i[p],t,r,e).pipe(Zt(),st(y=>{l[p]=y}))),br(1),qa(l),Ce(p=>il(p)?Gt:fi(p)))}function th(i,t,r,e){let n=Wi(t)??e,l=Ve(i,n),p=l.resolve?l.resolve(t,r):de(n,()=>l(t,r));return re(p)}function Wr(i){return Tt(t=>{let r=i(t);return r?St(r).pipe(W(()=>t)):z(t)})}var al=(()=>{let t=class t{buildTitle(e){let n,l=e.root;for(;l!==void 0;)n=this.getResolvedTitleForRoute(l)??n,l=l.children.find(p=>p.outlet===U);return n}getResolvedTitleForRoute(e){return e.data[Hi]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=H({token:t,factory:()=>P(eh),providedIn:"root"});let i=t;return i})(),eh=(()=>{let t=class t extends al{constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}};t.\u0275fac=function(n){return new(n||t)(q(Ds))},t.\u0275prov=H({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Co=new Z("",{providedIn:"root",factory:()=>({})}),So=new Z(""),ih=(()=>{let t=class t{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=P(Mr)}loadComponent(e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return z(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let n=re(e.loadComponent()).pipe(W(sl),st(p=>{this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=p}),hn(()=>{this.componentLoaders.delete(e)})),l=new pn(n,()=>new ot).pipe(ur());return this.componentLoaders.set(e,l),l}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return z({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let p=nh(n,this.compiler,e,this.onLoadEndListener).pipe(hn(()=>{this.childrenLoaders.delete(n)})),y=new pn(p,()=>new ot).pipe(ur());return this.childrenLoaders.set(n,y),y}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=H({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function nh(i,t,r,e){return re(i.loadChildren()).pipe(W(sl),wt(n=>n instanceof ns||Array.isArray(n)?z(n):St(t.compileModuleAsync(n))),W(n=>{e&&e(i);let l,p,y=!1;return Array.isArray(n)?(p=n,y=!0):(l=n.create(r).injector,p=l.get(So,[],{optional:!0,self:!0}).flat()),{routes:p.map(ko),injector:l}}))}function rh(i){return i&&typeof i=="object"&&"default"in i}function sl(i){return rh(i)?i.default:i}var Io=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=H({token:t,factory:()=>P(oh),providedIn:"root"});let i=t;return i})(),oh=(()=>{let t=class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=H({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),ah=new Z("");var sh=(()=>{let t=class t{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new ot,this.transitionAbortSubject=new ot,this.configLoader=P(ih),this.environmentInjector=P(fn),this.urlSerializer=P(Ao),this.rootContexts=P(Un),this.location=P(kn),this.inputBindingEnabled=P(xo,{optional:!0})!==null,this.titleStrategy=P(al),this.options=P(Co,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=P(Io),this.createViewTransition=P(ah,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>z(void 0),this.rootComponentType=null;let e=l=>this.events.next(new io(l)),n=l=>this.events.next(new no(l));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;this.transitions?.next(at(L(L({},this.transitions.value),e),{id:n}))}setupNavigations(e,n,l){return this.transitions=new ft({id:0,currentUrlTree:n,currentRawUrl:n,extractedUrl:this.urlHandlingStrategy.extract(n),urlAfterRedirects:this.urlHandlingStrategy.extract(n),rawUrl:n,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:Bi,restoredState:null,currentSnapshot:l.snapshot,targetSnapshot:null,currentRouterState:l,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Mt(p=>p.id!==0),W(p=>at(L({},p),{extractedUrl:this.urlHandlingStrategy.extract(p.rawUrl)})),Tt(p=>{let y=!1,v=!1;return z(p).pipe(Tt(b=>{if(this.navigationId>p.id)return this.cancelNavigationTransition(p,"",vt.SupersededByNewNavigation),Gt;this.currentTransition=p,this.currentNavigation={id:b.id,initialUrl:b.rawUrl,extractedUrl:b.extractedUrl,trigger:b.source,extras:b.extras,previousNavigation:this.lastSuccessfulNavigation?at(L({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),x=b.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&x!=="reload"){let E="";return this.events.next(new fe(b.id,this.urlSerializer.serialize(b.rawUrl),E,Zr.IgnoredSameUrlNavigation)),b.resolve(null),Gt}if(this.urlHandlingStrategy.shouldProcessUrl(b.rawUrl))return z(b).pipe(Tt(E=>{let k=this.transitions?.getValue();return this.events.next(new Ni(E.id,this.urlSerializer.serialize(E.extractedUrl),E.source,E.restoredState)),k!==this.transitions?.getValue()?Gt:Promise.resolve(E)}),Gm(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),st(E=>{p.targetSnapshot=E.targetSnapshot,p.urlAfterRedirects=E.urlAfterRedirects,this.currentNavigation=at(L({},this.currentNavigation),{finalUrl:E.urlAfterRedirects});let k=new Fn(E.id,this.urlSerializer.serialize(E.extractedUrl),this.urlSerializer.serialize(E.urlAfterRedirects),E.targetSnapshot);this.events.next(k)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(b.currentRawUrl)){let{id:E,extractedUrl:k,source:T,restoredState:B,extras:R}=b,V=new Ni(E,this.urlSerializer.serialize(k),T,B);this.events.next(V);let j=Ks(this.rootComponentType).snapshot;return this.currentTransition=p=at(L({},b),{targetSnapshot:j,urlAfterRedirects:k,extras:at(L({},R),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=k,z(p)}else{let E="";return this.events.next(new fe(b.id,this.urlSerializer.serialize(b.extractedUrl),E,Zr.IgnoredByUrlHandlingStrategy)),b.resolve(null),Gt}}),st(b=>{let u=new Xr(b.id,this.urlSerializer.serialize(b.extractedUrl),this.urlSerializer.serialize(b.urlAfterRedirects),b.targetSnapshot);this.events.next(u)}),W(b=>(this.currentTransition=p=at(L({},b),{guards:um(b.targetSnapshot,b.currentSnapshot,this.rootContexts)}),p)),km(this.environmentInjector,b=>this.events.next(b)),st(b=>{if(p.guardsResult=b.guardsResult,Pe(b.guardsResult))throw Js(this.urlSerializer,b.guardsResult);let u=new Jr(b.id,this.urlSerializer.serialize(b.extractedUrl),this.urlSerializer.serialize(b.urlAfterRedirects),b.targetSnapshot,!!b.guardsResult);this.events.next(u)}),Mt(b=>b.guardsResult?!0:(this.cancelNavigationTransition(b,"",vt.GuardRejected),!1)),Wr(b=>{if(b.guards.canActivateChecks.length)return z(b).pipe(st(u=>{let x=new to(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(x)}),Tt(u=>{let x=!1;return z(u).pipe(Zm(this.paramsInheritanceStrategy,this.environmentInjector),st({next:()=>x=!0,complete:()=>{x||this.cancelNavigationTransition(u,"",vt.NoDataFromResolver)}}))}),st(u=>{let x=new eo(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(x)}))}),Wr(b=>{let u=x=>{let E=[];x.routeConfig?.loadComponent&&!x.routeConfig._loadedComponent&&E.push(this.configLoader.loadComponent(x.routeConfig).pipe(st(k=>{x.component=k}),W(()=>{})));for(let k of x.children)E.push(...u(k));return E};return gi(u(b.targetSnapshot.root)).pipe(yr(null),Ht(1))}),Wr(()=>this.afterPreactivation()),Tt(()=>{let{currentSnapshot:b,targetSnapshot:u}=p,x=this.createViewTransition?.(this.environmentInjector,b.root,u.root);return x?St(x).pipe(W(()=>p)):z(p)}),W(b=>{let u=am(e.routeReuseStrategy,b.targetSnapshot,b.currentRouterState);return this.currentTransition=p=at(L({},b),{targetRouterState:u}),this.currentNavigation.targetRouterState=u,p}),st(()=>{this.events.next(new ji)}),hm(this.rootContexts,e.routeReuseStrategy,b=>this.events.next(b),this.inputBindingEnabled),Ht(1),st({next:b=>{y=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new ue(b.id,this.urlSerializer.serialize(b.extractedUrl),this.urlSerializer.serialize(b.urlAfterRedirects))),this.titleStrategy?.updateTitle(b.targetRouterState.snapshot),b.resolve(!0)},complete:()=>{y=!0}}),Xt(this.transitionAbortSubject.pipe(st(b=>{throw b}))),hn(()=>{!y&&!v&&this.cancelNavigationTransition(p,"",vt.SupersededByNewNavigation),this.currentTransition?.id===p.id&&(this.currentNavigation=null,this.currentTransition=null)}),Ce(b=>{if(v=!0,el(b))this.events.next(new ne(p.id,this.urlSerializer.serialize(p.extractedUrl),b.message,b.cancellationCode)),dm(b)?this.events.next(new zi(b.url)):p.resolve(!1);else{this.events.next(new Pi(p.id,this.urlSerializer.serialize(p.extractedUrl),b,p.targetSnapshot??void 0));try{p.resolve(e.errorHandler(b))}catch(u){this.options.resolveNavigationPromiseOnError?p.resolve(!1):p.reject(u)}}return Gt}))}))}cancelNavigationTransition(e,n,l){let p=new ne(e.id,this.urlSerializer.serialize(e.extractedUrl),n,l);this.events.next(p),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=H({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function lh(i){return i!==Bi}var dh=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=H({token:t,factory:()=>P(ch),providedIn:"root"});let i=t;return i})(),vo=class{shouldDetach(t){return!1}store(t,r){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,r){return t.routeConfig===r.routeConfig}},ch=(()=>{let t=class t extends vo{};t.\u0275fac=(()=>{let e;return function(l){return(e||(e=Ie(t)))(l||t)}})(),t.\u0275prov=H({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),ll=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=H({token:t,factory:()=>P(ph),providedIn:"root"});let i=t;return i})(),ph=(()=>{let t=class t extends ll{constructor(){super(...arguments),this.location=P(kn),this.urlSerializer=P(Ao),this.options=P(Co,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=P(Io),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new ie,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=Ks(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&e(n.url,n.state)})}handleRouterEvent(e,n){if(e instanceof Ni)this.stateMemento=this.createStateMemento();else if(e instanceof fe)this.rawUrlTree=n.initialUrl;else if(e instanceof Fn){if(this.urlUpdateStrategy==="eager"&&!n.extras.skipLocationChange){let l=this.urlHandlingStrategy.merge(n.finalUrl,n.initialUrl);this.setBrowserUrl(l,n)}}else e instanceof ji?(this.currentUrlTree=n.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(n.finalUrl,n.initialUrl),this.routerState=n.targetRouterState,this.urlUpdateStrategy==="deferred"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,n))):e instanceof ne&&(e.code===vt.GuardRejected||e.code===vt.NoDataFromResolver)?this.restoreHistory(n):e instanceof Pi?this.restoreHistory(n,!0):e instanceof ue&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let l=this.urlSerializer.serialize(e);if(this.location.isCurrentPathEqualTo(l)||n.extras.replaceUrl){let p=this.browserPageId,y=L(L({},n.extras.state),this.generateNgRouterState(n.id,p));this.location.replaceState(l,"",y)}else{let p=L(L({},n.extras.state),this.generateNgRouterState(n.id,this.browserPageId+1));this.location.go(l,"",p)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let l=this.browserPageId,p=this.currentPageId-l;p!==0?this.location.historyGo(p):this.currentUrlTree===e.finalUrl&&p===0&&(this.resetState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetState(e),this.resetUrlToCurrentUrlTree())}resetState(e){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}};t.\u0275fac=(()=>{let e;return function(l){return(e||(e=Ie(t)))(l||t)}})(),t.\u0275prov=H({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Ri=function(i){return i[i.COMPLETE=0]="COMPLETE",i[i.FAILED=1]="FAILED",i[i.REDIRECTING=2]="REDIRECTING",i}(Ri||{});function mh(i,t){i.events.pipe(Mt(r=>r instanceof ue||r instanceof ne||r instanceof Pi||r instanceof fe),W(r=>r instanceof ue||r instanceof fe?Ri.COMPLETE:(r instanceof ne?r.code===vt.Redirect||r.code===vt.SupersededByNewNavigation:!1)?Ri.REDIRECTING:Ri.FAILED),Mt(r=>r!==Ri.REDIRECTING),Ht(1)).subscribe(()=>{t()})}function hh(i){throw i}var uh={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},fh={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},dl=(()=>{let t=class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=P(xn),this.stateManager=P(ll),this.options=P(Co,{optional:!0})||{},this.pendingTasks=P(os),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=P(sh),this.urlSerializer=P(Ao),this.location=P(kn),this.urlHandlingStrategy=P(Io),this._events=new ot,this.errorHandler=this.options.errorHandler||hh,this.navigated=!1,this.routeReuseStrategy=P(dh),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=P(So,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!P(xo,{optional:!0}),this.eventsSubscription=new Ee,this.isNgZoneEnabled=P(X)instanceof X&&X.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let l=this.navigationTransitions.currentTransition,p=this.navigationTransitions.currentNavigation;if(l!==null&&p!==null){if(this.stateManager.handleRouterEvent(n,p),n instanceof ne&&n.code!==vt.Redirect&&n.code!==vt.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof ue)this.navigated=!0;else if(n instanceof zi){let y=this.urlHandlingStrategy.merge(n.url,l.currentRawUrl),v={info:l.extras.info,skipLocationChange:l.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||lh(l.source)};this.scheduleNavigation(y,Bi,null,v,{resolve:l.resolve,reject:l.reject,promise:l.promise})}}yh(n)&&this._events.next(n)}catch(l){this.navigationTransitions.transitionAbortSubject.next(l)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Bi,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(e,"popstate",n)},0)})}navigateToSyncWithBrowser(e,n,l){let p={replaceUrl:!0},y=l?.navigationId?l:null;if(l){let b=L({},l);delete b.navigationId,delete b.\u0275routerPageId,Object.keys(b).length!==0&&(p.state=b)}let v=this.parseUrl(e);this.scheduleNavigation(v,n,y,p)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(ko),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:l,queryParams:p,fragment:y,queryParamsHandling:v,preserveFragment:b}=n,u=b?this.currentUrlTree.fragment:y,x=null;switch(v){case"merge":x=L(L({},this.currentUrlTree.queryParams),p);break;case"preserve":x=this.currentUrlTree.queryParams;break;default:x=p||null}x!==null&&(x=this.removeEmptyProps(x));let E;try{let k=l?l.snapshot:this.routerState.snapshot.root;E=Ws(k)}catch{(typeof e[0]!="string"||!e[0].startsWith("/"))&&(e=[]),E=this.currentUrlTree.root}return $s(E,e,x,u??null)}navigateByUrl(e,n={skipLocationChange:!1}){let l=Pe(e)?e:this.parseUrl(e),p=this.urlHandlingStrategy.merge(l,this.rawUrlTree);return this.scheduleNavigation(p,Bi,null,n)}navigate(e,n={skipLocationChange:!1}){return gh(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.urlSerializer.parse("/")}}isActive(e,n){let l;if(n===!0?l=L({},uh):n===!1?l=L({},fh):l=n,Pe(e))return Ms(this.currentUrlTree,e,l);let p=this.parseUrl(e);return Ms(this.currentUrlTree,p,l)}removeEmptyProps(e){return Object.entries(e).reduce((n,[l,p])=>(p!=null&&(n[l]=p),n),{})}scheduleNavigation(e,n,l,p,y){if(this.disposed)return Promise.resolve(!1);let v,b,u;y?(v=y.resolve,b=y.reject,u=y.promise):u=new Promise((E,k)=>{v=E,b=k});let x=this.pendingTasks.add();return mh(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(x))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:l,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:p,resolve:v,reject:b,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(E=>Promise.reject(E))}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=H({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function gh(i){for(let t=0;t<i.length;t++)if(i[t]==null)throw new tt(4008,!1)}function yh(i){return!(i instanceof ji)&&!(i instanceof zi)}var bh=new Z("");function cl(i,...t){return Ai([{provide:So,multi:!0,useValue:i},[],{provide:je,useFactory:vh,deps:[dl]},{provide:ms,multi:!0,useFactory:Ah},t.map(r=>r.\u0275providers)])}function vh(i){return i.routerState.root}function Ah(){let i=P(Ga);return t=>{let r=i.get(Dr);if(t!==r.components[0])return;let e=i.get(dl),n=i.get(wh);i.get(_h)===1&&e.initialNavigation(),i.get(xh,null,wr.Optional)?.setUpPreloading(),i.get(bh,null,wr.Optional)?.init(),e.resetRootComponentType(r.componentTypes[0]),n.closed||(n.next(),n.complete(),n.unsubscribe())}}var wh=new Z("",{factory:()=>new ot}),_h=new Z("",{providedIn:"root",factory:()=>1});var xh=new Z("");var pl=[];var kh="@",Eh=(()=>{let t=class t{constructor(e,n,l,p,y){this.doc=e,this.delegate=n,this.zone=l,this.animationType=p,this.moduleImpl=y,this._rendererFactoryPromise=null,this.scheduler=P(Ja,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-DT7TXG5G.js")).catch(n=>{throw new tt(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:l})=>{this._engine=n(this.animationType,this.doc,this.scheduler);let p=new l(this.delegate,this._engine,this.zone);return this.delegate=p,p})}createRenderer(e,n){let l=this.delegate.createRenderer(e,n);if(l.\u0275type===0)return l;typeof l.throwOnSyntheticProps=="boolean"&&(l.throwOnSyntheticProps=!1);let p=new Do(l);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(y=>{let v=y.createRenderer(e,n);p.use(v)}).catch(y=>{p.use(l)}),p}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};t.\u0275fac=function(n){kr()},t.\u0275prov=H({token:t,factory:t.\u0275fac});let i=t;return i})(),Do=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let r of this.replay)r(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,r){return this.delegate.createElement(t,r)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,r){this.delegate.appendChild(t,r)}insertBefore(t,r,e,n){this.delegate.insertBefore(t,r,e,n)}removeChild(t,r,e){this.delegate.removeChild(t,r,e)}selectRootElement(t,r){return this.delegate.selectRootElement(t,r)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,r,e,n){this.delegate.setAttribute(t,r,e,n)}removeAttribute(t,r,e){this.delegate.removeAttribute(t,r,e)}addClass(t,r){this.delegate.addClass(t,r)}removeClass(t,r){this.delegate.removeClass(t,r)}setStyle(t,r,e,n){this.delegate.setStyle(t,r,e,n)}removeStyle(t,r,e){this.delegate.removeStyle(t,r,e)}setProperty(t,r,e){this.shouldReplay(r)&&this.replay.push(n=>n.setProperty(t,r,e)),this.delegate.setProperty(t,r,e)}setValue(t,r){this.delegate.setValue(t,r)}listen(t,r,e){return this.shouldReplay(r)&&this.replay.push(n=>n.listen(t,r,e)),this.delegate.listen(t,r,e)}shouldReplay(t){return this.replay!==null&&t.startsWith(kh)}};function ml(i="animations"){return ts("NgAsyncAnimations"),Ai([{provide:vn,useFactory:(t,r,e)=>new Eh(t,r,e,i),deps:[ht,Cn,X]},{provide:De,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var hl={providers:[cl(pl),ml()]};function Vt(i){return i!=null&&`${i}`!="false"}function Yi(i,t=0){return Ch(i)?Number(i):t}function Ch(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function Mo(i){return Array.isArray(i)?i:[i]}function Qi(i){return i instanceof ut?i.nativeElement:i}var To;try{To=typeof Intl<"u"&&Intl.v8BreakIterator}catch{To=!1}var oe=(()=>{let t=class t{constructor(e){this._platformId=e,this.isBrowser=this._platformId?As(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||To)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};t.\u0275fac=function(n){return new(n||t)(q(ce))},t.\u0275prov=H({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var Ki;function Sh(){if(Ki==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ki=!0}))}finally{Ki=Ki||!1}return Ki}function Ro(i){return Sh()?i:!!i.capture}function ul(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let t=i.shadowRoot.activeElement;if(t===i)break;i=t}return i}function fl(i){return i.composedPath?i.composedPath()[0]:i.target}function gl(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function Hn(i,...t){return t.length?t.some(r=>i[r]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}function Ih(i){if(i.type==="characterData"&&i.target instanceof Comment)return!0;if(i.type==="childList"){for(let t=0;t<i.addedNodes.length;t++)if(!(i.addedNodes[t]instanceof Comment))return!1;for(let t=0;t<i.removedNodes.length;t++)if(!(i.removedNodes[t]instanceof Comment))return!1;return!0}return!1}var yl=(()=>{let t=class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=H({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Dh=(()=>{let t=class t{constructor(e){this._mutationObserverFactory=e,this._observedElements=new Map}ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=Qi(e);return new cn(l=>{let y=this._observeElement(n).pipe(W(v=>v.filter(b=>!Ih(b))),Mt(v=>!!v.length)).subscribe(l);return()=>{y.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new ot,l=this._mutationObserverFactory.create(p=>n.next(p));l&&l.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:l,stream:n,count:1})}return this._observedElements.get(e).stream}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:l}=this._observedElements.get(e);n&&n.disconnect(),l.complete(),this._observedElements.delete(e)}}};t.\u0275fac=function(n){return new(n||t)(q(yl))},t.\u0275prov=H({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),bl=(()=>{let t=class t{get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}get debounce(){return this._debounce}set debounce(e){this._debounce=Yi(e),this._subscribe()}constructor(e,n,l){this._contentObserver=e,this._elementRef=n,this._ngZone=l,this.event=new gt,this._disabled=!1,this._currentSubscription=null}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular(()=>{this._currentSubscription=(this.debounce?e.pipe(Se(this.debounce)):e).subscribe(this.event)})}_unsubscribe(){this._currentSubscription?.unsubscribe()}};t.\u0275fac=function(n){return new(n||t)(K(Dh),K(ut),K(X))},t.\u0275dir=pt({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[vi.HasDecoratorInputTransform,"cdkObserveContentDisabled","disabled",Re],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"],standalone:!0,features:[Ei]});let i=t;return i})(),vl=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=it({type:t}),t.\u0275inj=et({providers:[yl]});let i=t;return i})();var Al=new Set,ge,Mh=(()=>{let t=class t{constructor(e,n){this._platform=e,this._nonce=n,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Rh}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Th(e,this._nonce),this._matchMedia(e)}};t.\u0275fac=function(n){return new(n||t)(q(oe),q(_i,8))},t.\u0275prov=H({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function Th(i,t){if(!Al.has(i))try{ge||(ge=document.createElement("style"),t&&ge.setAttribute("nonce",t),ge.setAttribute("type","text/css"),document.head.appendChild(ge)),ge.sheet&&(ge.sheet.insertRule(`@media ${i} {body{ }}`,0),Al.add(i))}catch(r){console.error(r)}}function Rh(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var _l=(()=>{let t=class t{constructor(e,n){this._mediaMatcher=e,this._zone=n,this._queries=new Map,this._destroySubject=new ot}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return wl(Mo(e)).some(l=>this._registerQuery(l).mql.matches)}observe(e){let l=wl(Mo(e)).map(y=>this._registerQuery(y).observable),p=gi(l);return p=mn(p.pipe(Ht(1)),p.pipe(vr(1),Se(0))),p.pipe(W(y=>{let v={matches:!1,breakpoints:{}};return y.forEach(({matches:b,query:u})=>{v.matches=v.matches||b,v.breakpoints[u]=b}),v}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),p={observable:new cn(y=>{let v=b=>this._zone.run(()=>y.next(b));return n.addListener(v),()=>{n.removeListener(v)}}).pipe(un(n),W(({matches:y})=>({query:e,matches:y})),Xt(this._destroySubject)),mql:n};return this._queries.set(e,p),p}};t.\u0275fac=function(n){return new(n||t)(q(Mh),q(X))},t.\u0275prov=H({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function wl(i){return i.map(t=>t.split(",")).reduce((t,r)=>t.concat(r)).map(t=>t.trim())}var Lo=class{constructor(t,r){this._items=t,this._activeItemIndex=-1,this._activeItem=null,this._wrap=!1,this._letterKeyStream=new ot,this._typeaheadSubscription=Ee.EMPTY,this._vertical=!0,this._allowedModifierKeys=[],this._homeAndEnd=!1,this._pageUpAndDown={enabled:!1,delta:10},this._skipPredicateFn=e=>e.disabled,this._pressedLetters=[],this.tabOut=new ot,this.change=new ot,t instanceof xr?this._itemChangesSubscription=t.changes.subscribe(e=>this._itemsChanged(e.toArray())):Er(t)&&(this._effectRef=us(()=>this._itemsChanged(t()),{injector:r}))}skipPredicate(t){return this._skipPredicateFn=t,this}withWrap(t=!0){return this._wrap=t,this}withVerticalOrientation(t=!0){return this._vertical=t,this}withHorizontalOrientation(t){return this._horizontal=t,this}withAllowedModifierKeys(t){return this._allowedModifierKeys=t,this}withTypeAhead(t=200){return this._typeaheadSubscription.unsubscribe(),this._typeaheadSubscription=this._letterKeyStream.pipe(st(r=>this._pressedLetters.push(r)),Se(t),Mt(()=>this._pressedLetters.length>0),W(()=>this._pressedLetters.join(""))).subscribe(r=>{let e=this._getItemsArray();for(let n=1;n<e.length+1;n++){let l=(this._activeItemIndex+n)%e.length,p=e[l];if(!this._skipPredicateFn(p)&&p.getLabel().toUpperCase().trim().indexOf(r)===0){this.setActiveItem(l);break}}this._pressedLetters=[]}),this}cancelTypeahead(){return this._pressedLetters=[],this}withHomeAndEnd(t=!0){return this._homeAndEnd=t,this}withPageUpDown(t=!0,r=10){return this._pageUpAndDown={enabled:t,delta:r},this}setActiveItem(t){let r=this._activeItem;this.updateActiveItem(t),this._activeItem!==r&&this.change.next(this._activeItemIndex)}onKeydown(t){let r=t.keyCode,n=["altKey","ctrlKey","metaKey","shiftKey"].every(l=>!t[l]||this._allowedModifierKeys.indexOf(l)>-1);switch(r){case 9:this.tabOut.next();return;case 40:if(this._vertical&&n){this.setNextItemActive();break}else return;case 38:if(this._vertical&&n){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&n){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&n){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&n){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&n){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&n){let l=this._activeItemIndex-this._pageUpAndDown.delta;this._setActiveItemByIndex(l>0?l:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&n){let l=this._activeItemIndex+this._pageUpAndDown.delta,p=this._getItemsArray().length;this._setActiveItemByIndex(l<p?l:p-1,-1);break}else return;default:(n||Hn(t,"shiftKey"))&&(t.key&&t.key.length===1?this._letterKeyStream.next(t.key.toLocaleUpperCase()):(r>=65&&r<=90||r>=48&&r<=57)&&this._letterKeyStream.next(String.fromCharCode(r)));return}this._pressedLetters=[],t.preventDefault()}get activeItemIndex(){return this._activeItemIndex}get activeItem(){return this._activeItem}isTyping(){return this._pressedLetters.length>0}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._items.length-1,-1)}setNextItemActive(){this._activeItemIndex<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(t){let r=this._getItemsArray(),e=typeof t=="number"?t:r.indexOf(t),n=r[e];this._activeItem=n??null,this._activeItemIndex=e}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._letterKeyStream.complete(),this.tabOut.complete(),this.change.complete(),this._pressedLetters=[]}_setActiveItemByDelta(t){this._wrap?this._setActiveInWrapMode(t):this._setActiveInDefaultMode(t)}_setActiveInWrapMode(t){let r=this._getItemsArray();for(let e=1;e<=r.length;e++){let n=(this._activeItemIndex+t*e+r.length)%r.length,l=r[n];if(!this._skipPredicateFn(l)){this.setActiveItem(n);return}}}_setActiveInDefaultMode(t){this._setActiveItemByIndex(this._activeItemIndex+t,t)}_setActiveItemByIndex(t,r){let e=this._getItemsArray();if(e[t]){for(;this._skipPredicateFn(e[t]);)if(t+=r,!e[t])return;this.setActiveItem(t)}}_getItemsArray(){return Er(this._items)?this._items():this._items instanceof xr?this._items.toArray():this._items}_itemsChanged(t){if(this._activeItem){let r=t.indexOf(this._activeItem);r>-1&&r!==this._activeItemIndex&&(this._activeItemIndex=r)}}};var Wn=class extends Lo{constructor(){super(...arguments),this._origin="program"}setFocusOrigin(t){return this._origin=t,this}setActiveItem(t){super.setActiveItem(t),this.activeItem&&this.activeItem.focus(this._origin)}};function El(i){return i.buttons===0||i.detail===0}function Cl(i){let t=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var ye=function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i}(ye||{}),xl="cdk-high-contrast-black-on-white",kl="cdk-high-contrast-white-on-black",Bo="cdk-high-contrast-active",Sl=(()=>{let t=class t{constructor(e,n){this._platform=e,this._document=n,this._breakpointSubscription=P(_l).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return ye.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let n=this._document.defaultView||window,l=n&&n.getComputedStyle?n.getComputedStyle(e):null,p=(l&&l.backgroundColor||"").replace(/ /g,"");switch(e.remove(),p){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return ye.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return ye.BLACK_ON_WHITE}return ye.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Bo,xl,kl),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===ye.BLACK_ON_WHITE?e.add(Bo,xl):n===ye.WHITE_ON_BLACK&&e.add(Bo,kl)}}};t.\u0275fac=function(n){return new(n||t)(q(oe),q(ht))},t.\u0275prov=H({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var No=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=it({type:t}),t.\u0275inj=et({});let i=t;return i})();function $h(){return!0}var Yh=new Z("mat-sanity-checks",{providedIn:"root",factory:$h}),At=(()=>{let t=class t{constructor(e,n,l){this._sanityChecks=n,this._document=l,this._hasDoneGlobalChecks=!1,e._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(e){return gl()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[e]}};t.\u0275fac=function(n){return new(n||t)(q(Sl),q(Yh,8),q(ht))},t.\u0275mod=it({type:t}),t.\u0275inj=et({imports:[No,No]});let i=t;return i})();var zo=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=it({type:t}),t.\u0275inj=et({imports:[At,At]});let i=t;return i})(),Et=function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i}(Et||{}),Po=class{constructor(t,r,e,n=!1){this._renderer=t,this.element=r,this.config=e,this._animationForciblyDisabledThroughCss=n,this.state=Et.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},Il=Ro({passive:!0,capture:!0}),jo=class{constructor(){this._events=new Map,this._delegateEventHandler=t=>{let r=fl(t);r&&this._events.get(t.type)?.forEach((e,n)=>{(n===r||n.contains(r))&&e.forEach(l=>l.handleEvent(t))})}}addHandler(t,r,e,n){let l=this._events.get(r);if(l){let p=l.get(e);p?p.add(n):l.set(e,new Set([n]))}else this._events.set(r,new Map([[e,new Set([n])]])),t.runOutsideAngular(()=>{document.addEventListener(r,this._delegateEventHandler,Il)})}removeHandler(t,r,e){let n=this._events.get(t);if(!n)return;let l=n.get(r);l&&(l.delete(e),l.size===0&&n.delete(r),n.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,Il)))}},Dl={enterDuration:225,exitDuration:150},Qh=800,Ml=Ro({passive:!0,capture:!0}),Tl=["mousedown","touchstart"],Rl=["mouseup","mouseleave","touchend","touchcancel"],Gi=class Gi{constructor(t,r,e,n){this._target=t,this._ngZone=r,this._platform=n,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,n.isBrowser&&(this._containerElement=Qi(e))}fadeInRipple(t,r,e={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),l=L(L({},Dl),e.animation);e.centered&&(t=n.left+n.width/2,r=n.top+n.height/2);let p=e.radius||Kh(t,r,n),y=t-n.left,v=r-n.top,b=l.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${y-p}px`,u.style.top=`${v-p}px`,u.style.height=`${p*2}px`,u.style.width=`${p*2}px`,e.color!=null&&(u.style.backgroundColor=e.color),u.style.transitionDuration=`${b}ms`,this._containerElement.appendChild(u);let x=window.getComputedStyle(u),E=x.transitionProperty,k=x.transitionDuration,T=E==="none"||k==="0s"||k==="0s, 0s"||n.width===0&&n.height===0,B=new Po(this,u,e,T);u.style.transform="scale3d(1, 1, 1)",B.state=Et.FADING_IN,e.persistent||(this._mostRecentTransientRipple=B);let R=null;return!T&&(b||l.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let V=()=>this._finishRippleTransition(B),j=()=>this._destroyRipple(B);u.addEventListener("transitionend",V),u.addEventListener("transitioncancel",j),R={onTransitionEnd:V,onTransitionCancel:j}}),this._activeRipples.set(B,R),(T||!b)&&this._finishRippleTransition(B),B}fadeOutRipple(t){if(t.state===Et.FADING_OUT||t.state===Et.HIDDEN)return;let r=t.element,e=L(L({},Dl),t.config.animation);r.style.transitionDuration=`${e.exitDuration}ms`,r.style.opacity="0",t.state=Et.FADING_OUT,(t._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let r=Qi(t);!this._platform.isBrowser||!r||r===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=r,Tl.forEach(e=>{Gi._eventManager.addHandler(this._ngZone,e,r,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Rl.forEach(r=>{this._triggerElement.addEventListener(r,this,Ml)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===Et.FADING_IN?this._startFadeOutTransition(t):t.state===Et.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let r=t===this._mostRecentTransientRipple,{persistent:e}=t.config;t.state=Et.VISIBLE,!e&&(!r||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let r=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=Et.HIDDEN,r!==null&&(t.element.removeEventListener("transitionend",r.onTransitionEnd),t.element.removeEventListener("transitioncancel",r.onTransitionCancel)),t.element.remove()}_onMousedown(t){let r=El(t),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Qh;!this._target.rippleDisabled&&!r&&!e&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!Cl(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let r=t.changedTouches;if(r)for(let e=0;e<r.length;e++)this.fadeInRipple(r[e].clientX,r[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let r=t.state===Et.VISIBLE||t.config.terminateOnPointerUp&&t.state===Et.FADING_IN;!t.config.persistent&&r&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(Tl.forEach(r=>Gi._eventManager.removeHandler(r,t,this)),this._pointerUpEventsRegistered&&Rl.forEach(r=>t.removeEventListener(r,this,Ml)))}};Gi._eventManager=new jo;var $n=Gi;function Kh(i,t,r){let e=Math.max(Math.abs(i-r.left),Math.abs(i-r.right)),n=Math.max(Math.abs(t-r.top),Math.abs(t-r.bottom));return Math.sqrt(e*e+n*n)}var Vo=new Z("mat-ripple-global-options");var Ol=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=it({type:t}),t.\u0275inj=et({imports:[At,At]});let i=t;return i})();var Bl=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=it({type:t}),t.\u0275inj=et({imports:[At]});let i=t;return i})();var Ll=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=it({type:t}),t.\u0275inj=et({imports:[At,At]});let i=t;return i})();var Zi=class{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(t=!1,r,e=!0,n){this._multiple=t,this._emitChanges=e,this.compareWith=n,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new ot,r&&r.length&&(t?r.forEach(l=>this._markSelected(l)):this._markSelected(r[0]),this._selectedToEmit.length=0)}select(...t){this._verifyValueAssignment(t),t.forEach(e=>this._markSelected(e));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}deselect(...t){this._verifyValueAssignment(t),t.forEach(e=>this._unmarkSelected(e));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}setSelection(...t){this._verifyValueAssignment(t);let r=this.selected,e=new Set(t);t.forEach(l=>this._markSelected(l)),r.filter(l=>!e.has(this._getConcreteValue(l,e))).forEach(l=>this._unmarkSelected(l));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(t){return this.isSelected(t)?this.deselect(t):this.select(t)}clear(t=!0){this._unmarkAll();let r=this._hasQueuedChanges();return t&&this._emitChangeEvent(),r}isSelected(t){return this._selection.has(this._getConcreteValue(t))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(t){this._multiple&&this.selected&&this._selected.sort(t)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(t){t=this._getConcreteValue(t),this.isSelected(t)||(this._multiple||this._unmarkAll(),this.isSelected(t)||this._selection.add(t),this._emitChanges&&this._selectedToEmit.push(t))}_unmarkSelected(t){t=this._getConcreteValue(t),this.isSelected(t)&&(this._selection.delete(t),this._emitChanges&&this._deselectedToEmit.push(t))}_unmarkAll(){this.isEmpty()||this._selection.forEach(t=>this._unmarkSelected(t))}_verifyValueAssignment(t){t.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(t,r){if(this.compareWith){r=r??this._selection;for(let e of r)if(this.compareWith(t,e))return e;return t}else return t}};var Fl=new Z("");var Gh={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Cy=at(L({},Gh),{"[class.ng-submitted]":"isSubmitted"});var Jh=["*"],tu='@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-list-divider::after{content:"";display:block;border-bottom-width:1px;border-bottom-style:solid}}.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item__wrapper{display:block}.mdc-list-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer}.mdc-list-item:focus{outline:none}.mdc-list-item.mdc-list-item--with-one-line{height:48px}.mdc-list-item.mdc-list-item--with-two-lines{height:64px}.mdc-list-item.mdc-list-item--with-three-lines{height:88px}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--disabled,.mdc-list-item.mdc-list-item--non-interactive{cursor:auto}.mdc-list-item:not(.mdc-list-item--selected):focus::before,.mdc-list-item.mdc-ripple-upgraded--background-focused::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-list-item:not(.mdc-list-item--selected):focus::before,.mdc-list-item.mdc-ripple-upgraded--background-focused::before{border-color:CanvasText}}.mdc-list-item.mdc-list-item--selected::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:3px double rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-list-item.mdc-list-item--selected::before{border-color:CanvasText}}.mdc-list-item.mdc-list-item--selected:focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:3px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-list-item.mdc-list-item--selected:focus::before{border-color:CanvasText}}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__content[for]{pointer-events:none}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item__overline-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-three-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-three-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px}[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start,.mdc-list-item--with-leading-avatar .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-avatar.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-avatar .mdc-list-item__start{border-radius:50%}.mdc-list-item--with-leading-icon.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start,.mdc-list-item--with-leading-icon .mdc-list-item__start[dir=rtl]{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-icon.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-thumbnail.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-thumbnail.mdc-list-item,.mdc-list-item--with-leading-thumbnail.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-thumbnail .mdc-list-item__start{margin-left:16px;margin-right:16px}[dir=rtl] .mdc-list-item--with-leading-thumbnail .mdc-list-item__start,.mdc-list-item--with-leading-thumbnail .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-image.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-image.mdc-list-item,.mdc-list-item--with-leading-image.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-image .mdc-list-item__start{margin-left:16px;margin-right:16px}[dir=rtl] .mdc-list-item--with-leading-image .mdc-list-item__start,.mdc-list-item--with-leading-image .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-image.mdc-list-item--with-one-line{height:72px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-leading-video.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-video.mdc-list-item,.mdc-list-item--with-leading-video.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-video .mdc-list-item__start{margin-left:0;margin-right:16px}[dir=rtl] .mdc-list-item--with-leading-video .mdc-list-item__start,.mdc-list-item--with-leading-video .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:0}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-video.mdc-list-item--with-one-line{height:72px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-checkbox.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start[dir=rtl]{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-radio.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-radio.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-radio .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-radio .mdc-list-item__start[dir=rtl]{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-switch.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-switch.mdc-list-item,.mdc-list-item--with-leading-switch.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-switch .mdc-list-item__start{margin-left:16px;margin-right:16px}[dir=rtl] .mdc-list-item--with-leading-switch .mdc-list-item__start,.mdc-list-item--with-leading-switch .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-switch.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item,.mdc-list-item--with-trailing-icon.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-icon .mdc-list-item__end,.mdc-list-item--with-trailing-icon .mdc-list-item__end[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item,.mdc-list-item--with-trailing-meta.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-trailing-meta .mdc-list-item__end[dir=rtl]{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mdc-typography-caption-font-family);font-size:var(--mdc-typography-caption-font-size);line-height:var(--mdc-typography-caption-line-height);font-weight:var(--mdc-typography-caption-font-weight);letter-spacing:var(--mdc-typography-caption-letter-spacing);text-decoration:var(--mdc-typography-caption-text-decoration);text-transform:var(--mdc-typography-caption-text-transform)}.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end[dir=rtl]{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-radio.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-list-item--with-trailing-radio .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-radio .mdc-list-item__end[dir=rtl]{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-switch.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-switch.mdc-list-item,.mdc-list-item--with-trailing-switch.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-list-item--with-trailing-switch .mdc-list-item__end{margin-left:16px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-switch .mdc-list-item__end,.mdc-list-item--with-trailing-switch .mdc-list-item__end[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-switch.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item--with-overline.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-overline.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-overline.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-overline.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-list-item,.mdc-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-list-group .mdc-deprecated-list{padding:0}.mdc-list-group__subheader{margin:calc((3rem - 1.5rem)/2) 16px}.mdc-list-divider{padding:0;background-clip:content-box}.mdc-list-divider.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset{padding-left:16px;padding-right:auto}[dir=rtl] .mdc-list-divider.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset,.mdc-list-divider.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset[dir=rtl]{padding-left:auto;padding-right:16px}.mdc-list-divider.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset{padding-left:auto;padding-right:16px}[dir=rtl] .mdc-list-divider.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset,.mdc-list-divider.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset[dir=rtl]{padding-left:16px;padding-right:auto}.mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset{padding-left:0px;padding-right:auto}[dir=rtl] .mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset[dir=rtl]{padding-left:auto;padding-right:0px}[dir=rtl] .mdc-list-divider,.mdc-list-divider[dir=rtl]{padding:0}.mdc-list-item{background-color:var(--mdc-list-list-item-container-color)}.mdc-list-item.mdc-list-item--selected{background-color:var(--mdc-list-list-item-selected-container-color)}.mdc-list-item--with-one-line{border-radius:var(--mdc-list-list-item-container-shape)}.mdc-list-item--with-one-line.mdc-list-item--with-leading-avatar,.mdc-list-item--with-one-line.mdc-list-item--with-leading-icon,.mdc-list-item--with-one-line.mdc-list-item--with-leading-thumbnail,.mdc-list-item--with-one-line.mdc-list-item--with-leading-checkbox,.mdc-list-item--with-one-line.mdc-list-item--with-leading-radio,.mdc-list-item--with-one-line.mdc-list-item--with-leading-switch{border-radius:var(--mdc-list-list-item-container-shape)}.mdc-list-item--with-one-line.mdc-list-item--with-leading-image,.mdc-list-item--with-one-line.mdc-list-item--with-leading-video{border-radius:var(--mdc-list-list-item-container-shape)}.mdc-list-item--with-two-lines{border-radius:var(--mdc-list-list-item-container-shape)}.mdc-list-item--with-two-lines.mdc-list-item--with-leading-avatar,.mdc-list-item--with-two-lines.mdc-list-item--with-leading-icon,.mdc-list-item--with-two-lines.mdc-list-item--with-leading-thumbnail,.mdc-list-item--with-two-lines.mdc-list-item--with-leading-checkbox,.mdc-list-item--with-two-lines.mdc-list-item--with-leading-radio,.mdc-list-item--with-two-lines.mdc-list-item--with-leading-switch,.mdc-list-item--with-two-lines.mdc-list-item--with-leading-image,.mdc-list-item--with-two-lines.mdc-list-item--with-leading-video{border-radius:var(--mdc-list-list-item-container-shape)}.mdc-list-item--with-three-lines{border-radius:var(--mdc-list-list-item-container-shape)}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mdc-list-list-item-one-line-container-height)}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mdc-list-list-item-two-line-container-height)}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mdc-list-list-item-three-line-container-height)}.mdc-list-item__primary-text{color:var(--mdc-list-list-item-label-text-color)}.mdc-list-item__primary-text{font-family:var(--mdc-list-list-item-label-text-font);line-height:var(--mdc-list-list-item-label-text-line-height);font-size:var(--mdc-list-list-item-label-text-size);font-weight:var(--mdc-list-list-item-label-text-weight);letter-spacing:var(--mdc-list-list-item-label-text-tracking)}.mdc-list-item__secondary-text{color:var(--mdc-list-list-item-supporting-text-color)}.mdc-list-item__secondary-text{font-family:var(--mdc-list-list-item-supporting-text-font);line-height:var(--mdc-list-list-item-supporting-text-line-height);font-size:var(--mdc-list-list-item-supporting-text-size);font-weight:var(--mdc-list-list-item-supporting-text-weight);letter-spacing:var(--mdc-list-list-item-supporting-text-tracking)}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mdc-list-list-item-leading-icon-color)}.mdc-list-item--with-leading-icon .mdc-list-item__start{width:var(--mdc-list-list-item-leading-icon-size);height:var(--mdc-list-list-item-leading-icon-size)}.mdc-list-item--with-leading-icon .mdc-list-item__start>i{font-size:var(--mdc-list-list-item-leading-icon-size)}.mdc-list-item--with-leading-icon .mdc-list-item__start .mdc-list-item__icon{font-size:var(--mdc-list-list-item-leading-icon-size);width:var(--mdc-list-list-item-leading-icon-size);height:var(--mdc-list-list-item-leading-icon-size)}.mdc-list-item--with-leading-icon .mdc-list-item__start .mdc-list-item__icon,.mdc-list-item--with-leading-icon .mdc-list-item__start .mdc-list-item__icon>.materialdesignWizIconSvgsSvgIcon{display:block}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mdc-list-list-item-leading-avatar-size);height:var(--mdc-list-list-item-leading-avatar-size)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mdc-list-list-item-trailing-supporting-text-color)}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mdc-list-list-item-trailing-supporting-text-font);line-height:var(--mdc-list-list-item-trailing-supporting-text-line-height);font-size:var(--mdc-list-list-item-trailing-supporting-text-size);font-weight:var(--mdc-list-list-item-trailing-supporting-text-weight);letter-spacing:var(--mdc-list-list-item-trailing-supporting-text-tracking)}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mdc-list-list-item-trailing-icon-color)}.mdc-list-item--with-trailing-icon .mdc-list-item__end{width:var(--mdc-list-list-item-trailing-icon-size);height:var(--mdc-list-list-item-trailing-icon-size)}.mdc-list-item--with-trailing-icon .mdc-list-item__end>i{font-size:var(--mdc-list-list-item-trailing-icon-size)}.mdc-list-item--with-trailing-icon .mdc-list-item__end .mdc-list-item__icon{font-size:var(--mdc-list-list-item-trailing-icon-size);width:var(--mdc-list-list-item-trailing-icon-size);height:var(--mdc-list-list-item-trailing-icon-size)}.mdc-list-item--with-trailing-icon .mdc-list-item__end .mdc-list-item__icon,.mdc-list-item--with-trailing-icon .mdc-list-item__end .mdc-list-item__icon>.materialdesignWizIconSvgsSvgIcon{display:block}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mdc-list-list-item-selected-trailing-icon-color)}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text,.mdc-list-item--disabled .mdc-list-item__overline-text{opacity:var(--mdc-list-list-item-disabled-label-text-opacity)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mdc-list-list-item-disabled-leading-icon-color)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{opacity:var(--mdc-list-list-item-disabled-leading-icon-opacity)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mdc-list-list-item-disabled-trailing-icon-color)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{opacity:var(--mdc-list-list-item-disabled-trailing-icon-opacity)}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mdc-list-list-item-hover-label-text-color)}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mdc-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mdc-list-list-item-hover-trailing-icon-color)}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mdc-list-list-item-focus-label-text-color)}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mdc-list-list-item-disabled-label-text-color)}.mdc-list-item:hover::before{background-color:var(--mdc-list-list-item-hover-state-layer-color);opacity:var(--mdc-list-list-item-hover-state-layer-opacity)}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mdc-list-list-item-disabled-state-layer-color);opacity:var(--mdc-list-list-item-disabled-state-layer-opacity)}.mdc-list-item:focus::before{background-color:var(--mdc-list-list-item-focus-state-layer-color);opacity:var(--mdc-list-list-item-focus-state-layer-opacity)}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mdc-list-list-item-disabled-label-text-opacity)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mdc-list-list-item-leading-avatar-shape);background-color:var(--mdc-list-list-item-leading-avatar-color)}.mat-mdc-list-item-icon{font-size:var(--mdc-list-list-item-leading-icon-size)}.cdk-high-contrast-active a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none}.mat-mdc-list-item>.mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus>.mat-mdc-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape);--mat-mdc-focus-indicator-border-radius:var(--mat-list-active-indicator-shape)}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color)}',eu=["unscopedContent"];var iu=[[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["mat-divider"]],[["","matListItemAvatar",""],["","matListItemIcon",""]]],nu=["[matListItemTitle]","[matListItemLine]","*","mat-divider","[matListItemAvatar],[matListItemIcon]"];function ru(i,t){i&1&&Wt(0,4)}function ou(i,t){if(i&1&&(lt(0,"div",10),_t(1,"input",11),lt(2,"div",12),Qa(),lt(3,"svg",13),_t(4,"path",14),mt(),Ka(),_t(5,"div",15),mt()()),i&2){let r=Lt();Jt("mdc-checkbox--disabled",r.disabled),dt(),yt("checked",r.selected)("disabled",r.disabled)}}function au(i,t){if(i&1&&(lt(0,"div",16),_t(1,"input",17),lt(2,"div",18),_t(3,"div",19)(4,"div",20),mt()()),i&2){let r=Lt();Jt("mdc-radio--disabled",r.disabled),dt(),yt("checked",r.selected)("disabled",r.disabled)}}function su(i,t){}function lu(i,t){if(i&1&&(lt(0,"span",4),Ot(1,su,0,0,"ng-template",5),mt()),i&2){Lt();let r=$t(3);dt(),yt("ngTemplateOutlet",r)}}function du(i,t){}function cu(i,t){if(i&1&&(lt(0,"span",21),Ot(1,du,0,0,"ng-template",5),mt()),i&2){Lt();let r=$t(5);dt(),yt("ngTemplateOutlet",r)}}function pu(i,t){}function mu(i,t){if(i&1&&Ot(0,pu,0,0,"ng-template",5),i&2){Lt();let r=$t(1);yt("ngTemplateOutlet",r)}}function hu(i,t){}function uu(i,t){if(i&1&&(lt(0,"span",8),Ot(1,hu,0,0,"ng-template",5),mt()),i&2){Lt();let r=$t(3);dt(),yt("ngTemplateOutlet",r)}}function fu(i,t){}function gu(i,t){if(i&1&&(lt(0,"span",8),Ot(1,fu,0,0,"ng-template",5),mt()),i&2){Lt();let r=$t(5);dt(),yt("ngTemplateOutlet",r)}}function yu(i,t){}function bu(i,t){if(i&1&&Ot(0,yu,0,0,"ng-template",5),i&2){Lt();let r=$t(1);yt("ngTemplateOutlet",r)}}var Pl=new Z("ListOption"),vu=(()=>{let t=class t{constructor(e){this._elementRef=e}};t.\u0275fac=function(n){return new(n||t)(K(ut))},t.\u0275dir=pt({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"],standalone:!0});let i=t;return i})(),Au=(()=>{let t=class t{constructor(e){this._elementRef=e}};t.\u0275fac=function(n){return new(n||t)(K(ut))},t.\u0275dir=pt({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"],standalone:!0});let i=t;return i})();var jl=(()=>{let t=class t{constructor(e){this._listOption=e}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}};t.\u0275fac=function(n){return new(n||t)(K(Pl,8))},t.\u0275dir=pt({type:t,hostVars:4,hostBindings:function(n,l){n&2&&Jt("mdc-list-item__start",l._isAlignedAtStart())("mdc-list-item__end",!l._isAlignedAtStart())},standalone:!0});let i=t;return i})(),wu=(()=>{let t=class t extends jl{};t.\u0275fac=(()=>{let e;return function(l){return(e||(e=Ie(t)))(l||t)}})(),t.\u0275dir=pt({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],standalone:!0,features:[ki]});let i=t;return i})(),_u=(()=>{let t=class t extends jl{};t.\u0275fac=(()=>{let e;return function(l){return(e||(e=Ie(t)))(l||t)}})(),t.\u0275dir=pt({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],standalone:!0,features:[ki]});let i=t;return i})(),xu=new Z("MAT_LIST_CONFIG"),Uo=(()=>{let t=class t{constructor(){this._isNonInteractive=!0,this._disableRipple=!1,this._disabled=!1,this._defaultOptions=P(xu,{optional:!0})}get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Vt(e)}get disabled(){return this._disabled}set disabled(e){this._disabled=Vt(e)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=pt({type:t,hostVars:1,hostBindings:function(n,l){n&2&&Bt("aria-disabled",l.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"},standalone:!0});let i=t;return i})(),Nl=(()=>{let t=class t{set lines(e){this._explicitLines=Yi(e,null),this._updateItemLines(!1)}get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Vt(e)}get disabled(){return this._disabled||!!this._listBase?.disabled}set disabled(e){this._disabled=Vt(e)}get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(e,n,l,p,y,v){this._elementRef=e,this._ngZone=n,this._listBase=l,this._platform=p,this._explicitLines=null,this._disableRipple=!1,this._disabled=!1,this._subscriptions=new Ee,this._rippleRenderer=null,this._hasUnscopedTextContent=!1,this.rippleConfig=y||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._noopAnimations=v==="NoopAnimations",l&&!l._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new $n(this,this._ngZone,this._hostElement,this._platform),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Ua(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let n=this._explicitLines??this._inferLinesFromContent(),l=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",n<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",n<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",n===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",n===3),this._hasUnscopedTextContent){let p=this._titles.length===0&&n===1;l.classList.toggle("mdc-list-item__primary-text",p),l.classList.toggle("mdc-list-item__secondary-text",!p)}else l.classList.remove("mdc-list-item__primary-text"),l.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}};t.\u0275fac=function(n){return new(n||t)(K(ut),K(X),K(Uo,8),K(oe),K(Vo,8),K(De,8))},t.\u0275dir=pt({type:t,contentQueries:function(n,l,p){if(n&1&&(ee(p,wu,4),ee(p,_u,4)),n&2){let y;Ft(y=Nt())&&(l._avatars=y),Ft(y=Nt())&&(l._icons=y)}},hostVars:4,hostBindings:function(n,l){n&2&&(Bt("aria-disabled",l.disabled)("disabled",l._isButtonElement&&l.disabled||null),Jt("mdc-list-item--disabled",l.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"},standalone:!0});let i=t;return i})();var zl=new Z("SelectionList"),Ho=(()=>{let t=class t extends Nl{get checkboxPosition(){return this.togglePosition}set checkboxPosition(e){this.togglePosition=e}get color(){return this._color||this._selectionList.color}set color(e){this._color=e}get value(){return this._value}set value(e){this.selected&&e!==this.value&&this._inputsInitialized&&(this.selected=!1),this._value=e}get selected(){return this._selectionList.selectedOptions.isSelected(this)}set selected(e){let n=Vt(e);n!==this._selected&&(this._setSelected(n),(n||this._selectionList.multiple)&&this._selectionList._reportValueChange())}constructor(e,n,l,p,y,v,b){super(e,n,l,p,v,b),this._selectionList=l,this._changeDetectorRef=y,this.selectedChange=new gt,this.togglePosition="after",this._selected=!1,this._inputsInitialized=!1}ngOnInit(){let e=this._selectionList;e._value&&e._value.some(l=>e.compareWith(this._value,l))&&this._setSelected(!0);let n=this._selected;Promise.resolve().then(()=>{(this._selected||n)&&(this.selected=!0,this._changeDetectorRef.markForCheck())}),this._inputsInitialized=!0}ngOnDestroy(){super.ngOnDestroy(),this.selected&&Promise.resolve().then(()=>{this.selected=!1})}toggle(){this.selected=!this.selected}focus(){this._hostElement.focus()}getLabel(){return(this._titles?.get(0)?._elementRef.nativeElement||this._unscopedContent?.nativeElement)?.textContent||""}_hasCheckboxAt(e){return this._selectionList.multiple&&this._getTogglePosition()===e}_hasRadioAt(e){return!this._selectionList.multiple&&this._getTogglePosition()===e&&!this._selectionList.hideSingleSelectionIndicator}_hasIconsOrAvatarsAt(e){return this._hasProjected("icons",e)||this._hasProjected("avatars",e)}_hasProjected(e,n){return this._getTogglePosition()!==n&&(e==="avatars"?this._avatars.length!==0:this._icons.length!==0)}_handleBlur(){this._selectionList._onTouched()}_getTogglePosition(){return this.togglePosition||"after"}_setSelected(e){return e===this._selected?!1:(this._selected=e,e?this._selectionList.selectedOptions.select(this):this._selectionList.selectedOptions.deselect(this),this.selectedChange.emit(e),this._changeDetectorRef.markForCheck(),!0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_toggleOnInteraction(){this.disabled||(this._selectionList.multiple?(this.selected=!this.selected,this._selectionList._emitChangeEvent([this])):this.selected||(this.selected=!0,this._selectionList._emitChangeEvent([this])))}_setTabindex(e){this._hostElement.setAttribute("tabindex",e+"")}};t.\u0275fac=function(n){return new(n||t)(K(ut),K(X),K(zl),K(oe),K(pe),K(Vo,8),K(De,8))},t.\u0275cmp=Rt({type:t,selectors:[["mat-list-option"]],contentQueries:function(n,l,p){if(n&1&&(ee(p,Au,5),ee(p,vu,5)),n&2){let y;Ft(y=Nt())&&(l._lines=y),Ft(y=Nt())&&(l._titles=y)}},viewQuery:function(n,l){if(n&1&&Cr(eu,5),n&2){let p;Ft(p=Nt())&&(l._unscopedContent=p.first)}},hostAttrs:["role","option",1,"mat-mdc-list-item","mat-mdc-list-option","mdc-list-item"],hostVars:25,hostBindings:function(n,l){n&1&&te("blur",function(){return l._handleBlur()})("click",function(){return l._toggleOnInteraction()}),n&2&&(Bt("aria-selected",l.selected),Jt("mdc-list-item--selected",l.selected&&!l._selectionList.multiple&&l._selectionList.hideSingleSelectionIndicator)("mdc-list-item--with-leading-avatar",l._hasProjected("avatars","before"))("mdc-list-item--with-leading-icon",l._hasProjected("icons","before"))("mdc-list-item--with-trailing-icon",l._hasProjected("icons","after"))("mat-mdc-list-option-with-trailing-avatar",l._hasProjected("avatars","after"))("mdc-list-item--with-leading-checkbox",l._hasCheckboxAt("before"))("mdc-list-item--with-trailing-checkbox",l._hasCheckboxAt("after"))("mdc-list-item--with-leading-radio",l._hasRadioAt("before"))("mdc-list-item--with-trailing-radio",l._hasRadioAt("after"))("mat-accent",l.color!=="primary"&&l.color!=="warn")("mat-warn",l.color==="warn")("_mat-animation-noopable",l._noopAnimations))},inputs:{togglePosition:"togglePosition",checkboxPosition:"checkboxPosition",color:"color",value:"value",selected:"selected"},outputs:{selectedChange:"selectedChange"},exportAs:["matListOption"],standalone:!0,features:[Te([{provide:Nl,useExisting:t},{provide:Pl,useExisting:t}]),ki,Pt],ngContentSelectors:nu,decls:20,vars:4,consts:[["icons",""],["checkbox",""],["radio",""],["unscopedContent",""],[1,"mdc-list-item__start","mat-mdc-list-option-checkbox-before"],[3,"ngTemplateOutlet"],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mdc-list-item__end"],[1,"mat-mdc-focus-indicator"],[1,"mdc-checkbox"],["type","checkbox",1,"mdc-checkbox__native-control",3,"checked","disabled"],[1,"mdc-checkbox__background"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],[1,"mdc-radio"],["type","radio",1,"mdc-radio__native-control",3,"checked","disabled"],[1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],[1,"mdc-list-item__start","mat-mdc-list-option-radio-before"]],template:function(n,l){if(n&1){let p=An();Ci(iu),Ot(0,ru,1,0,"ng-template",null,0,_n)(2,ou,6,4,"ng-template",null,1,_n)(4,au,5,4,"ng-template",null,2,_n)(6,lu,2,1,"span",4)(7,cu,2,1)(8,mu,1,1,null,5),lt(9,"span",6),Wt(10),Wt(11,1),lt(12,"span",7,3),te("cdkObserveContent",function(){return gn(p),yn(l._updateItemLines(!0))}),Wt(14,2),mt()(),Ot(15,uu,2,1,"span",8)(16,gu,2,1)(17,bu,1,1,null,5),Wt(18,3),_t(19,"div",9)}n&2&&(dt(6),Me(6,l._hasCheckboxAt("before")?6:l._hasRadioAt("before")?7:-1),dt(2),Me(8,l._hasIconsOrAvatarsAt("before")?8:-1),dt(7),Me(15,l._hasCheckboxAt("after")?15:l._hasRadioAt("after")?16:-1),dt(2),Me(17,l._hasIconsOrAvatarsAt("after")?17:-1))},dependencies:[bs,bl],styles:['.mat-mdc-list-option-with-trailing-avatar.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item,.mat-mdc-list-option-with-trailing-avatar.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{margin-left:16px;margin-right:16px}[dir=rtl] .mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end,.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end[dir=rtl]{margin-left:16px;margin-right:16px}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{width:40px;height:40px}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{border-radius:50%}.mat-mdc-list-option .mdc-touch-target-wrapper{display:inline}.mat-mdc-list-option .mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mat-mdc-list-option .mdc-checkbox[hidden]{display:none}.mat-mdc-list-option .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mat-mdc-list-option .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mat-mdc-list-option .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mat-mdc-list-option .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{border-color:CanvasText}}.mat-mdc-list-option .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mat-mdc-list-option .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mat-mdc-list-option .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mat-mdc-list-option .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{border-color:CanvasText}}@media all and (-ms-high-contrast: none){.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__focus-ring{display:none}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-list-option .mdc-checkbox__mixedmark{margin:0 1px}}.mat-mdc-list-option .mdc-checkbox--disabled{cursor:default;pointer-events:none}.mat-mdc-list-option .mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color}.mat-mdc-list-option .mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0}.mdc-checkbox--upgraded .mat-mdc-list-option .mdc-checkbox__checkmark{opacity:1}.mat-mdc-list-option .mdc-checkbox__checkmark-path{stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mat-mdc-list-option .mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mat-mdc-list-option .mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mat-mdc-list-option .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mat-mdc-list-option .mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mat-mdc-list-option .mdc-checkbox--touch{margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mat-mdc-list-option .mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:var(--mdc-checkbox-state-layer-size, 48px);height:var(--mdc-checkbox-state-layer-size, 48px)}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{opacity:1}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mat-mdc-list-option .mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0}.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mat-mdc-list-option .mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mat-mdc-list-option .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mat-mdc-list-option .mdc-radio[hidden]{display:none}.mat-mdc-list-option .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-list-option .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:""}.mat-mdc-list-option .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%}.mat-mdc-list-option .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%}.mat-mdc-list-option .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mat-mdc-list-option .mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mat-mdc-list-option .mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mat-mdc-list-option .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mat-mdc-list-option .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mat-mdc-list-option .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mat-mdc-list-option .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{border-color:CanvasText}}.mat-mdc-list-option .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mat-mdc-list-option .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mat-mdc-list-option .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mat-mdc-list-option .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{border-color:CanvasText}}.mat-mdc-list-option .mdc-radio--disabled{cursor:default;pointer-events:none}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5)}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background,.mat-mdc-list-option [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mat-mdc-list-option .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}@media all and (-ms-high-contrast: none){.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox .mdc-checkbox__focus-ring{display:none}}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox__background{transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox__mixedmark{transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-radio__background::before{transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option:not(._mat-animation-noopable) .mdc-radio__native-control:focus+.mdc-radio__background::before{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-unselected-icon-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-selected-icon-color, rgba(0, 0, 0, 0.38))}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:white;color:var(--mdc-checkbox-selected-checkmark-color, white)}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:white;border-color:var(--mdc-checkbox-selected-checkmark-color, white)}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-disabled-selected-checkmark-color, #fff)}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, #fff)}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unselected-icon-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#f44336;border-color:var(--mdc-checkbox-selected-icon-color, #f44336);background-color:#f44336;background-color:var(--mdc-checkbox-selected-icon-color, #f44336)}@keyframes mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unselected-icon-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#f44336;border-color:var(--mdc-checkbox-selected-icon-color, #f44336);background-color:#f44336;background-color:var(--mdc-checkbox-selected-icon-color, #f44336)}}@keyframes mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336{0%,80%{border-color:#f44336;border-color:var(--mdc-checkbox-selected-icon-color, #f44336);background-color:#f44336;background-color:var(--mdc-checkbox-selected-icon-color, #f44336)}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unselected-icon-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mat-mdc-list-option .mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336}.mat-mdc-list-option .mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336}.mat-mdc-list-option .mdc-checkbox:hover .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:#212121;border-color:var(--mdc-checkbox-unselected-hover-icon-color, #212121);background-color:transparent}.mat-mdc-list-option .mdc-checkbox:hover .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#f44336;border-color:var(--mdc-checkbox-selected-hover-icon-color, #f44336);background-color:#f44336;background-color:var(--mdc-checkbox-selected-hover-icon-color, #f44336)}@keyframes mdc-checkbox-fade-in-background-FF212121FFF4433600000000FFF44336{0%{border-color:#212121;border-color:var(--mdc-checkbox-unselected-hover-icon-color, #212121);background-color:transparent}50%{border-color:#f44336;border-color:var(--mdc-checkbox-selected-hover-icon-color, #f44336);background-color:#f44336;background-color:var(--mdc-checkbox-selected-hover-icon-color, #f44336)}}@keyframes mdc-checkbox-fade-out-background-FF212121FFF4433600000000FFF44336{0%,80%{border-color:#f44336;border-color:var(--mdc-checkbox-selected-hover-icon-color, #f44336);background-color:#f44336;background-color:var(--mdc-checkbox-selected-hover-icon-color, #f44336)}100%{border-color:#212121;border-color:var(--mdc-checkbox-unselected-hover-icon-color, #212121);background-color:transparent}}.mat-mdc-list-option .mdc-checkbox:hover.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-FF212121FFF4433600000000FFF44336}.mat-mdc-list-option .mdc-checkbox:hover.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-FF212121FFF4433600000000FFF44336}.mat-mdc-list-option .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:#212121;border-color:var(--mdc-checkbox-unselected-focus-icon-color, #212121);background-color:transparent}.mat-mdc-list-option .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#f44336;border-color:var(--mdc-checkbox-selected-focus-icon-color, #f44336);background-color:#f44336;background-color:var(--mdc-checkbox-selected-focus-icon-color, #f44336)}@keyframes mdc-checkbox-fade-in-background-FF212121FFF4433600000000FFF44336{0%{border-color:#212121;border-color:var(--mdc-checkbox-unselected-focus-icon-color, #212121);background-color:transparent}50%{border-color:#f44336;border-color:var(--mdc-checkbox-selected-focus-icon-color, #f44336);background-color:#f44336;background-color:var(--mdc-checkbox-selected-focus-icon-color, #f44336)}}@keyframes mdc-checkbox-fade-out-background-FF212121FFF4433600000000FFF44336{0%,80%{border-color:#f44336;border-color:var(--mdc-checkbox-selected-focus-icon-color, #f44336);background-color:#f44336;background-color:var(--mdc-checkbox-selected-focus-icon-color, #f44336)}100%{border-color:#212121;border-color:var(--mdc-checkbox-unselected-focus-icon-color, #212121);background-color:transparent}}.mat-mdc-list-option .mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:not(.mdc-ripple-upgraded):focus.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:not(.mdc-ripple-upgraded):focus.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-FF212121FFF4433600000000FFF44336}.mat-mdc-list-option .mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:not(.mdc-ripple-upgraded):focus.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:not(.mdc-ripple-upgraded):focus.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-FF212121FFF4433600000000FFF44336}.mat-mdc-list-option .mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unselected-pressed-icon-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mat-mdc-list-option .mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#f44336;border-color:var(--mdc-checkbox-selected-pressed-icon-color, #f44336);background-color:#f44336;background-color:var(--mdc-checkbox-selected-pressed-icon-color, #f44336)}@keyframes mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unselected-pressed-icon-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#f44336;border-color:var(--mdc-checkbox-selected-pressed-icon-color, #f44336);background-color:#f44336;background-color:var(--mdc-checkbox-selected-pressed-icon-color, #f44336)}}@keyframes mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336{0%,80%{border-color:#f44336;border-color:var(--mdc-checkbox-selected-pressed-icon-color, #f44336);background-color:#f44336;background-color:var(--mdc-checkbox-selected-pressed-icon-color, #f44336)}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unselected-pressed-icon-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mat-mdc-list-option .mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336}.mat-mdc-list-option .mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__ripple::before,.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__ripple::after{background-color:black;background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, black)}.mat-mdc-list-option .mdc-checkbox:hover .mdc-checkbox__ripple::before,.mat-mdc-list-option .mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity, 0.04)}.mat-mdc-list-option .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mat-mdc-list-option .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.16;opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity, 0.16)}.mat-mdc-list-option .mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mat-mdc-list-option .mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.16;opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, 0.16)}.mat-mdc-list-option .mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, 0.16)}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__ripple::before{background-color:black;background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, black)}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__ripple::after{background-color:black;background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, black)}.mat-mdc-list-option .mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mat-mdc-list-option .mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#f44336;background-color:var(--mdc-checkbox-selected-hover-state-layer-color, #f44336)}.mat-mdc-list-option .mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mat-mdc-list-option .mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity, 0.04)}.mat-mdc-list-option .mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mat-mdc-list-option .mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.16;opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity, 0.16)}.mat-mdc-list-option .mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mat-mdc-list-option .mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.16;opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, 0.16)}.mat-mdc-list-option .mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, 0.16)}.mat-mdc-list-option .mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mat-mdc-list-option .mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#f44336;background-color:var(--mdc-checkbox-selected-hover-state-layer-color, #f44336)}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px) / 2)}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-state-layer-size, 40px);height:40px;height:var(--mdc-checkbox-state-layer-size, 40px)}.mat-mdc-list-option .mdc-radio{padding:calc((40px - 20px) / 2);padding:calc((var(--mdc-radio-state-layer-size, 40px) - 20px) / 2)}.mat-mdc-list-option .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-list-option .mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:black;border-color:var(--mdc-radio-disabled-selected-icon-color, black)}.mat-mdc-list-option .mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-list-option .mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:black;border-color:var(--mdc-radio-disabled-selected-icon-color, black)}.mat-mdc-list-option .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-list-option .mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{opacity:0.38;opacity:var(--mdc-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-list-option .mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{opacity:0.38;opacity:var(--mdc-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-list-option .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:black;border-color:var(--mdc-radio-disabled-unselected-icon-color, black)}.mat-mdc-list-option .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-list-option .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{opacity:0.38;opacity:var(--mdc-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-list-option .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#f44336;border-color:var(--mdc-radio-selected-focus-icon-color, #f44336)}.mat-mdc-list-option .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-list-option .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#f44336;border-color:var(--mdc-radio-selected-focus-icon-color, #f44336)}.mat-mdc-list-option .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#f44336;border-color:var(--mdc-radio-selected-hover-icon-color, #f44336)}.mat-mdc-list-option .mdc-radio:hover .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#f44336;border-color:var(--mdc-radio-selected-hover-icon-color, #f44336)}.mat-mdc-list-option .mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#f44336;border-color:var(--mdc-radio-selected-icon-color, #f44336)}.mat-mdc-list-option .mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#f44336;border-color:var(--mdc-radio-selected-icon-color, #f44336)}.mat-mdc-list-option .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#f44336;border-color:var(--mdc-radio-selected-pressed-icon-color, #f44336)}.mat-mdc-list-option .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#f44336;border-color:var(--mdc-radio-selected-pressed-icon-color, #f44336)}.mat-mdc-list-option .mdc-radio:hover .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:#212121;border-color:var(--mdc-radio-unselected-hover-icon-color, #212121)}.mat-mdc-list-option .mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-radio-unselected-icon-color, rgba(0, 0, 0, 0.54))}.mat-mdc-list-option .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-radio-unselected-pressed-icon-color, rgba(0, 0, 0, 0.54))}.mat-mdc-list-option .mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);top:calc(-1 * (var(--mdc-radio-state-layer-size, 40px) - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (var(--mdc-radio-state-layer-size, 40px) - 20px) / 2);width:40px;width:var(--mdc-radio-state-layer-size, 40px);height:40px;height:var(--mdc-radio-state-layer-size, 40px)}.mat-mdc-list-option .mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);top:calc((var(--mdc-radio-state-layer-size, 40px) - var(--mdc-radio-state-layer-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((var(--mdc-radio-state-layer-size, 40px) - var(--mdc-radio-state-layer-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((var(--mdc-radio-state-layer-size, 40px) - var(--mdc-radio-state-layer-size, 40px)) / 2);width:40px;width:var(--mdc-radio-state-layer-size, 40px);height:40px;height:var(--mdc-radio-state-layer-size, 40px)}.mat-mdc-list-option .mdc-checkbox__native-control,.mat-mdc-list-option .mdc-radio__native-control{display:none}.cdk-high-contrast-active .mat-mdc-list-option.mdc-list-item--selected::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active .mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after{right:auto;left:16px}'],encapsulation:2,changeDetection:0});let i=t;return i})();var ku={provide:Fl,useExisting:Ar(()=>Wo),multi:!0},qo=class{constructor(t,r){this.source=t,this.options=r}},Wo=(()=>{let t=class t extends Uo{get multiple(){return this._multiple}set multiple(e){let n=Vt(e);n!==this._multiple&&(this._multiple=n,this.selectedOptions=new Zi(this._multiple,this.selectedOptions.selected))}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=Vt(e)}constructor(e,n){super(),this._element=e,this._ngZone=n,this._initialized=!1,this._destroyed=new ot,this._onChange=l=>{},this.selectionChange=new gt,this.color="accent",this.compareWith=(l,p)=>l===p,this._multiple=!0,this._hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1,this.selectedOptions=new Zi(this._multiple),this._onTouched=()=>{},this._selectionListDisabled=!1,this._handleFocusout=()=>{setTimeout(()=>{this._containsFocus()||this._resetActiveOption()})},this._handleFocusin=l=>{if(this.disabled)return;let p=this._items.toArray().findIndex(y=>y._elementRef.nativeElement.contains(l.target));p>-1?this._setActiveOption(p):this._resetActiveOption()},this._isNonInteractive=!1}ngAfterViewInit(){this._initialized=!0,this._setupRovingTabindex(),this._ngZone.runOutsideAngular(()=>{this._element.nativeElement.addEventListener("focusin",this._handleFocusin),this._element.nativeElement.addEventListener("focusout",this._handleFocusout)}),this._value&&this._setOptionsFromValues(this._value),this._watchForSelectionChange()}ngOnChanges(e){let n=e.disabled,l=e.disableRipple,p=e.hideSingleSelectionIndicator;(l&&!l.firstChange||n&&!n.firstChange||p&&!p.firstChange)&&this._markOptionsForCheck()}ngOnDestroy(){this._keyManager?.destroy(),this._element.nativeElement.removeEventListener("focusin",this._handleFocusin),this._element.nativeElement.removeEventListener("focusout",this._handleFocusout),this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0}focus(e){this._element.nativeElement.focus(e)}selectAll(){return this._setAllOptionsSelected(!0)}deselectAll(){return this._setAllOptionsSelected(!1)}_reportValueChange(){if(this.options&&!this._isDestroyed){let e=this._getSelectedOptionValues();this._onChange(e),this._value=e}}_emitChangeEvent(e){this.selectionChange.emit(new qo(this,e))}writeValue(e){this._value=e,this.options&&this._setOptionsFromValues(e||[])}setDisabledState(e){this.disabled=e}get disabled(){return this._selectionListDisabled}set disabled(e){this._selectionListDisabled=Vt(e),this._selectionListDisabled&&this._keyManager?.setActiveItem(-1)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}_watchForSelectionChange(){this.selectedOptions.changed.pipe(Xt(this._destroyed)).subscribe(e=>{for(let n of e.added)n.selected=!0;for(let n of e.removed)n.selected=!1;this._containsFocus()||this._resetActiveOption()})}_setOptionsFromValues(e){this.options.forEach(n=>n._setSelected(!1)),e.forEach(n=>{let l=this.options.find(p=>p.selected?!1:this.compareWith(p.value,n));l&&l._setSelected(!0)})}_getSelectedOptionValues(){return this.options.filter(e=>e.selected).map(e=>e.value)}_markOptionsForCheck(){this.options&&this.options.forEach(e=>e._markForCheck())}_setAllOptionsSelected(e,n){let l=[];return this.options.forEach(p=>{(!n||!p.disabled)&&p._setSelected(e)&&l.push(p)}),l.length&&this._reportValueChange(),l}get options(){return this._items}_handleKeydown(e){let n=this._keyManager.activeItem;if((e.keyCode===13||e.keyCode===32)&&!this._keyManager.isTyping()&&n&&!n.disabled)e.preventDefault(),n._toggleOnInteraction();else if(e.keyCode===65&&this.multiple&&!this._keyManager.isTyping()&&Hn(e,"ctrlKey")){let l=this.options.some(p=>!p.disabled&&!p.selected);e.preventDefault(),this._emitChangeEvent(this._setAllOptionsSelected(l,!0))}else this._keyManager.onKeydown(e)}_setupRovingTabindex(){this._keyManager=new Wn(this._items).withHomeAndEnd().withTypeAhead().withWrap().skipPredicate(()=>this.disabled),this._resetActiveOption(),this._keyManager.change.subscribe(e=>this._setActiveOption(e)),this._items.changes.pipe(Xt(this._destroyed)).subscribe(()=>{let e=this._keyManager.activeItem;(!e||this._items.toArray().indexOf(e)===-1)&&this._resetActiveOption()})}_setActiveOption(e){this._items.forEach((n,l)=>n._setTabindex(l===e?0:-1)),this._keyManager.updateActiveItem(e)}_resetActiveOption(){if(this.disabled){this._setActiveOption(-1);return}let e=this._items.find(n=>n.selected&&!n.disabled)||this._items.first;this._setActiveOption(e?this._items.toArray().indexOf(e):-1)}_containsFocus(){let e=ul();return e&&this._element.nativeElement.contains(e)}};t.\u0275fac=function(n){return new(n||t)(K(ut),K(X))},t.\u0275cmp=Rt({type:t,selectors:[["mat-selection-list"]],contentQueries:function(n,l,p){if(n&1&&ee(p,Ho,5),n&2){let y;Ft(y=Nt())&&(l._items=y)}},hostAttrs:["role","listbox",1,"mat-mdc-selection-list","mat-mdc-list-base","mdc-list"],hostVars:1,hostBindings:function(n,l){n&1&&te("keydown",function(y){return l._handleKeydown(y)}),n&2&&Bt("aria-multiselectable",l.multiple)},inputs:{color:"color",compareWith:"compareWith",multiple:"multiple",hideSingleSelectionIndicator:"hideSingleSelectionIndicator",disabled:"disabled"},outputs:{selectionChange:"selectionChange"},exportAs:["matSelectionList"],standalone:!0,features:[Te([ku,{provide:Uo,useExisting:t},{provide:zl,useExisting:t}]),ki,wi,Pt],ngContentSelectors:Jh,decls:1,vars:0,template:function(n,l){n&1&&(Ci(),Wt(0))},styles:[tu],encapsulation:2,changeDetection:0});let i=t;return i})(),Vl=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=it({type:t}),t.\u0275inj=et({imports:[vl,Rr,At,Ol,Bl,Ll]});let i=t;return i})();var Ul=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=it({type:t}),t.\u0275inj=et({imports:[zo,At,zo,At]});let i=t;return i})();var Wl=dp(ql());var Cu=["player"];function Su(i,t){if(i&1&&(lt(0,"mat-list-option",5),wn(1),mt()),i&2){let r=t.$implicit;yt("value",r),dt(),ps(r)}}var Hl="https://file.note.0moe.cn/video/",$l=(()=>{let t=class t{constructor(){this.playerEle=is.required("player"),this.title="ruyi",this.videos=["01--\u301024\u5E745\u6708\u301101.\u8F6F\u8003\u4ECB\u7ECD\u53CA\u5B66\u4E60\u65B9\u5F0F\u8BF4\u660E\uFF08\u4ECE\u672C\u89C6\u9891\u5F00\u59CB\u6309\u987A\u5E8F\u5F80\u4E0B\u770B\u5373\u53EF\uFF09.mp4","02--\u301024\u5E745\u6708\u301102.\u673A\u8003\u5E38\u89C1\u95EE\u9898\u8BF4\u660E.mp4","03--\u301024\u5E745\u6708\u301103.\u7B2C1\u7AE0-\u4FE1\u606F\u5316\u53D1\u5C55\uFF081.1-1.3\uFF09.mp4","04--\u301024\u5E745\u6708\u301104.\u7B2C1\u7AE0-\u4FE1\u606F\u5316\u53D1\u5C55\uFF081.4-1.5\uFF09.mp4","05--\u301024\u5E745\u6708\u301105.\u7B2C1\u7AE0-\u4E60\u9898\u8BFE.mp4","06--\u301024\u5E745\u6708\u301106.\u7B2C2\u7AE0-\u4FE1\u606F\u6280\u672F\u53D1\u5C55(2.1).mp4","07--\u301024\u5E745\u6708\u301107.\u7B2C2\u7AE0-\u4FE1\u606F\u6280\u672F\u53D1\u5C55(2.2).mp4","08--\u301024\u5E745\u6708\u301108.\u7B2C2\u7AE0-\u4E60\u9898\u8BFE.mp4","09--\u301024\u5E745\u6708\u301109.\u7B2C3\u7AE0-\u4FE1\u606F\u7CFB\u7EDF\u6CBB\u7406.mp4","10--\u301024\u5E745\u6708\u301110.\u7B2C3\u7AE0-\u4E60\u9898\u8BFE.mp4","11--\u301024\u5E745\u6708\u301111.\u7B2C4\u7AE0-\u4FE1\u606F\u7CFB\u7EDF\u7BA1\u7406.mp4","12--\u301024\u5E745\u6708\u301112.\u7B2C4\u7AE0-\u4E60\u9898\u8BFE.mp4","13--\u301024\u5E745\u6708\u301113.\u7B2C5\u7AE0-\u4FE1\u606F\u7CFB\u7EDF\u5DE5\u7A0B\uFF085.1\uFF09.mp4","14--\u301024\u5E745\u6708\u301114.\u7B2C5\u7AE0-\u4FE1\u606F\u7CFB\u7EDF\u5DE5\u7A0B\uFF085.2-5.4\uFF09.mp4","15--\u301024\u5E745\u6708\u301115.\u7B2C5\u7AE0-\u4E60\u9898\u8BFE.mp4","16--\u301024\u5E745\u6708\u301116.\u7B2C6\u7AE0-\u9879\u76EE\u7BA1\u7406\u6982\u8FF0\uFF086.1-6.2\uFF09.mp4","17--\u301024\u5E745\u6708\u301117.\u7B2C6\u7AE0-\u9879\u76EE\u7BA1\u7406\u6982\u8BBA\uFF086.3-6.4\uFF09.mp4","18--\u301024\u5E745\u6708\u301117.\u7B2C6\u7AE0-\u4E60\u9898\u8BFE.mp4","19--\u301024\u5E745\u6708\u301118.\u7B2C7\u7AE0-\u9879\u76EE\u7ACB\u9879\u7BA1\u7406.mp4","20--\u301024\u5E745\u6708\u301119.\u7B2C7\u7AE0-\u4E60\u9898\u8BFE.mp4","21--\u301024\u5E745\u6708\u301120.\u7B2C8\u7AE0-\u9879\u76EE\u6574\u5408\u7BA1\u7406\uFF088.1-8.5\uFF09.mp4","22--\u301024\u5E745\u6708\u301121.\u7B2C8\u7AE0-\u9879\u76EE\u6574\u5408\u7BA1\u7406\uFF088.6-8.9\uFF09.mp4","23--\u301024\u5E745\u6708\u301122.\u7B2C8\u7AE0-\u4E60\u9898\u8BFE.mp4","24--\u301024\u5E745\u670823.\u7B2C9\u7AE0-\u9879\u76EE\u8303\u56F4\u7BA1\u7406\uFF089.1-9.4\uFF09.mp4","25--\u301024\u5E745\u6708\u301124.\u7B2C9\u7AE0-\u9879\u76EE\u8303\u56F4\u7BA1\u7406\uFF089.5-9.8\uFF09.mp4","26--\u301024\u5E745\u6708\u301126.\u7B2C9\u7AE0-\u4E60\u9898\u8BFE.mp4","27--\u301024\u5E745\u6708\u301126.\u7B2C10\u7AE0-\u9879\u76EE\u8FDB\u5EA6\u7BA1\u7406\uFF0810.1-10.6\uFF09.mp4","28--\u301024\u5E745\u6708\u301127.\u7B2C10\u7AE0-\u9879\u76EE\u8FDB\u5EA6\u7BA1\u7406\uFF0810.7-10.8\uFF09.mp4","29--\u301024\u5E745\u6708\u301129.\u7B2C10\u7AE0-\u4E60\u9898\u8BFE.mp4","30--\u301024\u5E745\u6708\u301130.\u7B2C11\u7AE0-\u9879\u76EE\u6210\u672C\u7BA1\u7406.mp4","31--\u301024\u5E745\u6708\u301131.\u7B2C11\u7AE0-\u4E60\u9898\u8BFE.mp4","32--\u301024\u5E745\u6708\u301131.\u7B2C12\u7AE0-\u9879\u76EE\u8D28\u91CF\u7BA1\u7406\uFF0812.1-12.2\uFF09.mp4","33--\u301024\u5E745\u6708\u301132.\u7B2C12\u7AE0-\u9879\u76EE\u8D28\u91CF\u7BA1\u7406\uFF0812.3-12.5\uFF09.mp4","34--\u301024\u5E745\u6708\u301133.\u7B2C12\u7AE0-\u4E60\u9898\u8BFE.mp4","35--\u301024\u5E745\u6708\u301134.\u7B2C13\u7AE0-\u9879\u76EE\u8D44\u6E90\u7BA1\u7406\uFF0813.1-13.3\uFF09.mp4","36--\u301024\u5E745\u6708\u301135.\u7B2C13\u7AE0-\u9879\u76EE\u8D44\u6E90\u7BA1\u7406\uFF0813.4-13.8\uFF09.mp4","37--\u301024\u5E745\u6708\u301136.\u7B2C13\u7AE0-\u4E60\u9898\u8BFE.mp4","38--\u301024\u5E745\u6708\u301137.\u7B2C14\u7AE0-\u9879\u76EE\u6C9F\u901A\u7BA1\u7406.mp4","39--\u301024\u5E745\u6708\u301139.\u7B2C14\u7AE0-\u4E60\u9898\u8BFE.mp4","40--\u301024\u5E745\u6708\u301139.\u7B2C15\u7AE0-\u9879\u76EE\u98CE\u9669\u7BA1\u7406\uFF0815.1-15.4\uFF09.mp4","41--\u301024\u5E745\u6708\u301140.\u7B2C15\u7AE0-\u9879\u76EE\u98CE\u9669\u7BA1\u7406\uFF0815.5-15.9\uFF09.mp4","42--\u301024\u5E745\u6708\u301142.\u7B2C15\u7AE0-\u4E60\u9898\u8BFE.mp4","43--\u301024\u5E745\u6708\u301143.\u7B2C16\u7AE0-\u9879\u76EE\u91C7\u8D2D\u7BA1\u7406\uFF0816.1-16.5\uFF09.mp4","44--\u301024\u5E745\u6708\u301144.\u7B2C16\u7AE0-\u9879\u76EE\u91C7\u8D2D\u7BA1\u7406\uFF0816.6\uFF09.mp4","45--\u301024\u5E745\u6708\u301145.\u7B2C16\u7AE0-\u4E60\u9898\u8BFE.mp4","46--\u301024\u5E745\u6708\u301146.\u7B2C17\u7AE0-\u5E72\u7CFB\u4EBA\u7BA1\u7406.mp4","47--\u301024\u5E745\u6708\u301147.\u7B2C17\u7AE0-\u4E60\u9898\u8BFE.mp4","48--\u301024\u5E745\u6708\u301147.\u7B2C18\u7AE0-\u9879\u76EE\u7EE9\u6548\u57DF\uFF0818.1-18.4\uFF09.mp4","49--\u301024\u5E745\u6708\u301148.\u7B2C18\u7AE0-\u9879\u76EE\u7EE9\u6548\u57DF\uFF0818.5-18.8\uFF09.mp4","50--\u301024\u5E745\u6708\u301150.\u7B2C18\u7AE0-\u4E60\u9898\u8BFE.mp4","51--\u301024\u5E745\u6708\u301151.\u7B2C19\u7AE0-\u914D\u7F6E\u4E0E\u53D8\u66F4\u7BA1\u7406\uFF081\uFF09.mp4","52--\u301024\u5E745\u6708\u301152.\u7B2C19\u7AE0-\u914D\u7F6E\u4E0E\u53D8\u66F4\u7BA1\u7406\uFF082\uFF09.mp4","53--\u301024\u5E745\u6708\u301153.\u7B2C19\u7AE0-\u4E60\u9898\u8BFE.mp4","54--\u301024\u5E745\u6708\u301154.\u7B2C20\u7AE0-\u9AD8\u7EA7\u9879\u76EE\u7BA1\u7406.mp4","55--\u301024\u5E745\u6708\u301155.\u7B2C20\u7AE0-\u4E60\u9898\u8BFE.mp4","56--\u301024\u5E745\u6708\u301156.\u7B2C21\u7AE0-\u9879\u76EE\u7BA1\u7406\u79D1\u5B66\u57FA\u7840.mp4","57--\u301024\u5E745\u6708\u301157.\u7B2C22\u7AE0-\u7EC4\u7EC7\u901A\u7528\u6CBB\u7406.mp4","58--\u301024\u5E745\u6708\u301158.\u7B2C21\u300122\u7AE0-\u4E60\u9898\u8BFE.mp4","59--\u301024\u5E745\u6708\u301159.\u7B2C23\u7AE0-\u7EC4\u7EC7\u901A\u7528\u7BA1\u7406.mp4","59--\u301024\u5E745\u6708\u301159.\u7B2C23\u7AE0-\u7EC4\u7EC7\u901A\u7528\u7BA1\u7406.mp4.baiduyun.downloading","59--\u301024\u5E745\u6708\u301159.\u7B2C23\u7AE0-\u7EC4\u7EC7\u901A\u7528\u7BA1\u7406.mp4.baiduyun.downloading.cfg","60--\u301024\u5E745\u6708\u301160.\u7B2C23\u7AE0-\u4E60\u9898\u8BFE.mp4","61--\u301024\u5E745\u6708\u301161.\u7B2C24\u7AE0-\u6CD5\u5F8B\u6CD5\u89C4\u4E0E\u6807\u51C6\u89C4\u8303\uFF081\uFF09.mp4","62--\u301024\u5E745\u6708\u301162.\u7B2C24\u7AE0-\u6CD5\u5F8B\u6CD5\u89C4\u4E0E\u6807\u51C6\u89C4\u8303\uFF082\uFF09.mp4","63--\u301024\u5E745\u6708\u301163.\u7B2C24\u7AE0-\u4E60\u9898\u8BFE.mp4","64--\u301024\u5E745\u6708\u301164.\u8865\u5145\u5B66\u4E60\u2014\u5341\u56DB\u4E94\u89C4\u5212\u3001\u65B0\u6CD5\u89C4\u3001\u65B0\u6280\u672F\uFF081\uFF09.mp4","65--\u301024\u5E745\u6708\u301165.\u8865\u5145\u5B66\u4E60\u2014\u5341\u56DB\u4E94\u89C4\u5212\u3001\u65B0\u6CD5\u89C4\u3001\u65B0\u6280\u672F\uFF082\uFF09.mp4","66--\u301024\u5E745\u6708\u301166.\u8865\u5145\u5B66\u4E60-\u4E60\u9898\u8BFE.mp4","67--\u301024\u5E745\u6708\u301167.\u5386\u5E74\u82F1\u8BED\u771F\u9898-\u4E60\u9898\u8BFE.mp4"]}ngAfterViewInit(){let e=localStorage.getItem("current");e=e?Hl+e:"",this.dp=new Wl.default({container:this.playerEle().nativeElement,video:{url:e}})}change(e){let n=e.options[0].value;localStorage.setItem("current",n),this.dp.switchVideo({url:Hl+n},{})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=Rt({type:t,selectors:[["app-root"]],viewQuery:function(n,l){n&1&&ds(l.playerEle,Cu,5),n&2&&cs()},standalone:!0,features:[Pt],decls:10,vars:2,consts:[["shoes",""],["player",""],[2,"height","100%","display","flex"],[2,"display","block","width","300px"],[2,"overflow-y","scroll","height","100%",3,"selectionChange","multiple"],[3,"value"],["id","player"]],template:function(n,l){if(n&1){let p=An();lt(0,"div",2)(1,"div",3)(2,"p"),wn(3),mt(),lt(4,"mat-selection-list",4,0),te("selectionChange",function(v){return gn(p),yn(l.change(v))}),ss(6,Su,2,2,"mat-list-option",5,as),mt()(),_t(8,"div",6,1),mt()}if(n&2){let p=$t(5);dt(3),Sr(" \u5F53\u524D\u64AD\u653E: ",p.selectedOptions.hasValue()?p.selectedOptions.selected[0].value:"\u65E0"," "),dt(),yt("multiple",!1),dt(2),ls(l.videos)}},dependencies:[Vl,Wo,Ho,Ul],changeDetection:0});let i=t;return i})();Is($l,hl).catch(i=>console.error(i));
