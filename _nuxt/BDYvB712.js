import{a as C,_ as N}from"./DMXmE3_x.js";import{_ as B}from"./Bym7JsFH.js";import{h as G,l as I,A as V,o,g as f,w as l,a as t,c as g,F as x,j as b,d as p,t as i,b as _,e as $,C as j,i as z,G as A,H as L,m as S,k as q}from"./Dqu8gxQy.js";import E from"./CUuJDR40.js";import{_ as H}from"./_B5gYgnP.js";import{a as M,q as D}from"./BfClAhrA.js";import"./DcI08x3d.js";const F=t("div",{class:"absolute top-0 left-0 z-20 w-full h-full glow"},null,-1),O={class:"flex gap-2 px-4"},P={class:"badge-container"},R={class:"px-4 @container"},T={class:"text-2xl @sm:text-2xl @sm:py-2 font-semibold text-black dark:text-white"},U={class:"text-sm"},W=G({__name:"Card",props:{path:{},title:{},technologies:{},date:{},thumbnail:{},type:{},description:{},url:{},width:{},height:{}},setup(h){const e=h,n=I(null),{elementX:s,elementY:r,isOutside:m}=C(n);return V(()=>m.value?"":`radial-gradient(
      circle at
      ${s.value}px
      ${r.value}px,
      #ffffff55,
      #0000000f)`),(y,k)=>{const u=N,c=B,w=$;return o(),f(w,{ref_key:"card",ref:n,to:e.path,class:"relative flex flex-col justify-between w-100 h-96 gap-4 pt-6 overflow-hidden bg-white border isolate dark:bg-black border-zinc-300 dark:border-zinc-700 rounded-xl"},{default:l(()=>[F,t("ul",O,[t("li",null,[t("div",P,[(o(!0),g(x,null,b(e.technologies,(d,v)=>(o(),f(u,{key:v,class:"text-sm badge-spacing"},{default:l(()=>[p(i(d),1)]),_:2},1024))),128))])])]),t("div",R,[t("h2",T,i(e.title),1),t("p",U,i(e.description),1)]),_(c,{src:e.thumbnail||"https://placekitten.com/268/168",alt:"",height:"height",width:"weight",class:"w-full border-t --1 border-zinc-300 dark:border-zinc-700"},null,8,["src"])]),_:1},8,["to"])}}}),X=async()=>{const{data:h,pending:e}=await M("repos",()=>$fetch("https://api.github.com/users/Mallipudijaya/repos",{query:{type:"all"}}),{server:!1,transform:n=>n.filter(s=>!s.fork&&!s.private&&s.name!==".github"&&s.name!=="Mallipudijaya").sort((s,r)=>r.stargazers_count-s.stargazers_count).map(({id:s,name:r,html_url:m,description:y,stargazers_count:k,stargazers_url:u,homepage:c})=>({id:s,name:r,html_url:m,description:y,stargazers_count:k,stargazers_url:u,homepage:c}))});return{pending:e,repos:h}},Y={class:"relative flex flex-col items-center justify-center w-full gap-4 sm:gap-10 pt-12 pb-16 font-sans md:pb-24 md:pt-16 lg:pb-30 lg:pt-30 isolate gradient px-6 2xl:px-0 overflow-hidden"},J={class:"relative isolate flex flex-col items-center"},K=t("div",{class:"absolute w-full h-full -z-1 left-0 top-25 [background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(284,_84%,_60%,_0.1)_0%,_rgba(34,_57,_16,_0)_100%)] dark:[background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(244,_64%,_25%,_0.8)_0%,_rgba(34,_57,_16,_0)_100%)]"},null,-1),Q=t("div",{class:"max-w-3xl flex flex-col items-center justify-center gap-4 sm:gap-8 mb-8 relative"},[t("h1",{class:"text-4xl sm:text-5xl font-bold font-headings 2xl:text-6xl magic text-center",style:{"--stagger":"1"},"data-animate":""}," I work on projects that make a difference "),t("p",{class:"prose text-center text-lg sm:text-2xl leading-8 dark:text-gray-300",style:{"--stagger":"2"},"data-animate":""}," full-stack web apps, AI applications,and more ")],-1),Z={class:"w-full max-w-6xl relative my-6 lg:my-24"},tt=t("div",{class:"absolute top-0 -left-8 text-2xl floating"}," ✨ ",-1),et=t("div",{class:"absolute -bottom-10 -right-8 transform-scale-x-[-1] text-2xl floating"}," ✨ ",-1),at={class:"grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-4 w-full lg:h-90",style:{"--stagger":"3"},"data-animate":""},st=t("div",{style:{height:"1100px"}},null,-1),lt={class:"w-full mt-24 flex flex-col container max-w-4xl justify-center relative"},ot=A('<div class="absolute w-sm h-full -z-10 left-30 bottom-30 [background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(284,_84%,_60%,_0.1)_0%,_rgba(34,_57,_16,_0)_100%)] dark:[background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(244,_64%,_25%,_0.6)_0%,_rgba(34,_57,_16,_0)_100%)] rotate-45"></div><div class="absolute w-sm h-full -z-10 right-40 top-70 [background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(284,_84%,_60%,_0.1)_0%,_rgba(34,_57,_16,_0)_100%)] dark:[background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(244,_64%,_25%,_0.6)_0%,_rgba(34,_57,_16,_0)_100%)] rotate-45"></div><div class="flex flex-col w-full max-w-6xl sm:items-center gap-y-6 sm:justify-center relative z-10"><h2 class="text-3xl font-semibold font-headings 2xl:text-5xl magic" style="--stagger:4;" data-animate> Open-source projects </h2><p class="prose sm:text-center text-lg sm:text-xl leading-8 dark:text-gray-300 max-w-43ch" style="--stagger:5;" data-animate> Star my projects on GitHub if you find them useful! </p></div>',3),nt={class:"items-center flex justify-between"},gt={__name:"index",async setup(h){let e,n;const s=([e,n]=j(()=>D("projects").find()),e=await e,n(),e),{repos:r,pending:m}=([e,n]=j(()=>X()),e=await e,n(),e);return(y,k)=>{const u=W,c=E,w=q,d=$,v=H;return o(),g("div",Y,[t("div",J,[K,Q,t("div",Z,[tt,et,t("div",at,[(o(!0),g(x,null,b(z(s),a=>(o(),f(u,L({key:a._path,path:a._path,class:"mt-6",ref_for:!0},a),null,16,["path"]))),128))])])]),st,t("div",lt,[ot,_(v,{num:"3",class:"mt-12",style:{"--stagger":"6"},"data-animate":""},{default:l(()=>[z(m)?(o(),g(x,{key:0},b(8,a=>_(c,{key:a,class:"min-h-[130px] animate-pulse"})),64)):(o(!0),g(x,{key:1},b(z(r),a=>(o(),f(c,{key:a.id},{type:l(()=>[t("div",nt,[_(d,{to:a.stargazers_url,"aria-label":"Stargazers"},{default:l(()=>[_(w,{class:"i-ph-star-bold"}),p(" "+i(a.stargazers_count),1)]),_:2},1032,["to"]),a.homepage?(o(),f(d,{key:0,"aria-label":"Homepage",class:"lowercase",to:a.homepage},{default:l(()=>[p(i(a.homepage.substring(8)),1)]),_:2},1032,["to"])):S("",!0)])]),description:l(()=>[_(d,{to:a.html_url},{default:l(()=>[p(i(a.description),1)]),_:2},1032,["to"])]),default:l(()=>[_(d,{to:a.html_url},{default:l(()=>[p(i(a.name),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})])])}}};export{gt as default};