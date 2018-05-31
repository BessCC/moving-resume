function writeCode(preview,str,fn){
  let n=0;
  dompaper1 = document.querySelector('#code')
  var preview = '' || preview;
  var time=setInterval(()=>{
    n++;
    dompaper1.innerHTML = Prism.highlight(preview + str.slice(0,n), Prism.languages.css,'css');
    dompaper1.scrollTop = dompaper1.scrollHeight
    styleType.innerHTML = preview + str.slice(0,n);
    if(n>=str.length){
      window.clearInterval(time);
      fn.call();
    }
  },0)
}
var result=`
*{
   box-sizing:border-box;
   margin:0;
   padding:0;   
   transition:all 1s;
}
/**设置页面边框及背景颜色**/
#code{
  border:1px solid red;    
  background-color:rgb(222,222,222);
  padding:30px;
  height:100vh;
  position:fixed;
  left:0;
  width:50%;
}
/**代码进行高亮**/
.token.selector{
  color:#690;
}
.token.function{
  color:#DD4A68;
}
.token.property{
  color:#905;
}
/**页面进行旋转**/
#code{
  transform:rotate(360deg);
}
`;
let result2=`
/**设置页面效果**/
#paper{
  padding:10px;
  height:100%;
  position:fixed;
  background:grey;
  right:0;
  width:50%;
}
/**白纸**/
#paper > .content{
  width:100%;
  height:100%;
  background-color:white;
}
/**更换的白纸**/
.hp{
  width:100%;
  height:100%;
  background-color:white;
}
`
var result3 = `
自我介绍
-------------
我叫 谢加进
1994 年 11 月出生
江苏理工学院 毕业
自学前端半年
希望应聘前端开发岗位
项目
-------------
1. XXX 轮播
2. XXX 简历
3. XXX 画板

联系方式
-------------
- QQ 2435105797
- 手机 15240583938

自我介绍
-------------
我叫 谢加进
1994 年 11 月出生
江苏理工学院 毕业
自学前端半年
希望应聘前端开发岗位
项目
-------------
1. XXX 轮播
2. XXX 简历
3. XXX 画板

联系方式
-------------
- QQ 2435105797
- 手机 15240583938

自我介绍
-------------
我叫 谢加进
1994 年 11 月出生
江苏理工学院 毕业
自学前端半年
希望应聘前端开发岗位
项目
-------------
1. XXX 轮播
2. XXX 简历
3. XXX 画板

联系方式
-------------
- QQ 2435105797
- 手机 15240583938
` 
writeCode('',result,()=>{
  createPaper(()=>{
    writeCode(result,result2,()=>{
      writeHtml(result3,()=>{
        f4(result3,()=>{console.log('完成了')})
        
      })
    })  
  })
}
);
function createPaper(fn){
  let paper = document.createElement('div');
  let content = document.createElement('pre');
  content.className = 'content';
  content.id = 'content'
  paper.id='paper';
  document.body.appendChild(paper);
  paper.appendChild(content);  
  fn();
}
function writeHtml(str,fn){
  let n=0;
  let time=setInterval(()=>{
    n++;
    var dompaper = document.querySelector('#paper > .content')
    dompaper.innerHTML = str.slice(0,n);
    dompaper.scrollTop = dompaper.scrollHeight;
    if(n>=str.length){
      window.clearInterval(time);
      fn();
    }
  },0)
}
function f4(str,fn){
  let aaaa=document.createElement('div');
  aaaa.className = 'hp';
  aaaa.innerHTML = marked(str);
  let xxxx=document.querySelector('#paper > .content');
  console.log('cdc')
  xxxx.replaceWith(aaaa)
  fn.call()
}