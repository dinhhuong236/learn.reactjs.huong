import{w as y}from"./with-props-kfWWD9C7.js";import{r,l as e}from"./chunk-K6CSEXPM-BkoTNwhC.js";function v(){const[n,d]=r.useState([]),[c,m]=r.useState(null),[u,h]=r.useState([]),[x,l]=r.useState(null),[p,i]=r.useState(null);r.useEffect(()=>{(async()=>{try{const a=(await(await fetch("./vocabulary.txt")).text()).split(`
`).map(b=>{const[g,j]=b.split("|");return{en:g.trim(),vi:j.trim()}});d(a)}catch(s){console.error("Lỗi đọc file:",s)}})()},[]);const f=()=>{if(n.length===0)return;const t=Math.floor(Math.random()*n.length),s=n[t];m(s);let o=new Set;for(o.add(s.vi);o.size<4;){const a=n[Math.floor(Math.random()*n.length)].vi;o.add(a)}h([...o].sort(()=>Math.random()-.5)),l(null),i(null)},w=t=>{c&&(l(t),i(t===c.vi))};return e.jsx("main",{className:"flex items-center justify-center pt-16 pb-4",children:e.jsxs("div",{className:"flex flex-col items-center p-6 bg-gray-100 min-h-screen",children:[e.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Vocabulary Practice"}),e.jsx("button",{onClick:f,className:"px-4 py-2 bg-blue-500 text-white rounded mb-4",children:"Start Quiz"}),c&&e.jsxs("div",{className:"bg-white p-4 rounded shadow-md w-80 text-center",children:[e.jsx("p",{className:"text-xl font-bold",children:c.en}),e.jsx("div",{className:"mt-4",children:u.map((t,s)=>e.jsx("button",{onClick:()=>w(t),className:`block w-full px-4 py-2 my-1 rounded ${x===t?p?"bg-green-500 text-white":"bg-red-500 text-white":"bg-gray-200"}`,children:t},s))})]})]})})}function W({}){return[{title:"New React Router App"},{name:"description",content:"Welcome to React Router!"}]}const C=y(function(){return e.jsx(v,{})});export{C as default,W as meta};
