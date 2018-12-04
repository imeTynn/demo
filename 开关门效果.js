<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>
  <style>
  div{
	  float:left;
	  width:100px;
	  height:100px; 
	  line-height:100px;
  }
  #d1,#d3{
  background:#f00;
  }
  #d2{
  background:yellow;
  color:#f00;
  font-size:20px;
  cursor:pointer;
  }
  </style>
 </head>
 <body> 
  <div id="d1">树形列表</div>
  <div id="d2">&gt;&gt;</div>
  <div id="d3">内容的主体</div>
   <script>
    var d2=document.getElementById("d2");
	d2.onclick=function(){
		var d1=document.getElementById('d1');
		if(d2.innerHTML=="&gt;&gt;"){
			d1.style.display="none";
			d2.innerHTML="&lt;&lt;";
		}else{
			d1.style.display="block";
			d2.innerHTML="&gt;&gt;";
		}
	};
   </script>
 </body>
</html>
