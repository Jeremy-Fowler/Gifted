import{z as n,c,a as i,o as t,b as s,F as p,u as d,x as l}from"./vendor.1269b5c5.js";import{_ as f,s as m,l as _,P as u,A as g}from"./index.bdc33da6.js";const x={setup(){return n(async()=>{try{await m.get()}catch(e){_.error(e),u.toast(e.message,"error")}}),{gifts:c(()=>g.gifts)}}},v={class:"row m-4 p-5 scroll"};function b(e,k,h,o,y,B){const a=i("Gift");return t(),s("div",v,[(t(!0),s(p,null,d(o.gifts,r=>(t(),l(a,{key:r.id,gift:r},null,8,["gift"]))),128))])}var j=f(x,[["render",b]]);export{j as default};