var table=document.getElementById('data');
var btns=document.getElementsByTagName('button');
for(var btn of btns){
  btn.onclick=function(){
    var span=this.parentNode.children[1];
    var n=parseInt(span.innerHTML);
    if(this.innerHTML==="+")
      n++;
     else if(n>1)
       n--;
     span.innerHTML=n;
     var price=parseFloat(this.parentNode.previousElementSibling.innerHTML.slice(1))*n;
     this.parentNode.nextElementSibling.innerHTML="￥"+price.toFixed(2);
  }
}
