function del(myform)
	{
			
		if(myform.id == null){
			alert("没有要处理的项");
			return ;
		}	
			var del_flag_len = 0;
	        var isExist = false;          
	        del_flag_len =  myform.id.length;  
        	if(myform.id.length>=2){ 
		        for (i = 0 ;i<del_flag_len ;i++){	          	
		            if(myform.id[i].checked){	              
		              isExist=true;
		              break;
		            } 
	        	}if (isExist){
					if (confirm("您确定要处理所选项！")){
		            	myform.submit();
		            }
		        }else{    
		          	alert("请选择要处理的项！");
		        }
	     	}else if(myform.id.checked){  
				if (confirm("您确定要处理所选项！")){
	            	myform.submit();
	            }
		    }else{    
	         	alert("请选择要处理的项！");
	        }
	}
	function ListSubmit(myform,command)
	{
		if (confirm("您确定要"+command+"所选项！"))
		{
			var del_flag_len = 0;
	        var isExist = false;          
	        del_flag_len =  myform.id.length;  
        	if(myform.id.length>=2)
        	{ 
		        for (i = 0 ;i<del_flag_len ;i++)
		        {	          	
		            if(myform.id[i].checked)
		            {	              
		              isExist=true;
		              break;
		            } 
	        	}
		        if (isExist)
		        {
		            myform.submit();
		        } 
		        else
		        {    
		          	alert("请选择要"+command+"的项！");
		        }
	     	}
		    else if(myform.id.checked)
		    {  
		     	 myform.submit();
		    }
	        else
	        {    
	         	alert("请选择要"+command+"的项！");
	        }
	    }	
	}
	function update(myform,name)
	{
		var k = 0;
		var j = 0;
		var del_flag_len = 0;
	    del_flag_len =  myform.id.length;  
        if(myform.id.length>=2) 
        { 
		        for (i = 0 ;i<del_flag_len ;i++)
		        {	          	
		            if(myform.id[i].checked)
		            {	              
		              k++;
		              j=i;
		            }
	        	}
		        if (k==1)
		        {
		            location.href=name+"?key="+myform.id[j].value;
		        } 
		        else if(k>1)
		        {    
		          	alert("只能选一个要修改的项！");
		        }	   
		        else
		        {
		        	alert("请选择要修改的项！");
		        }     
	     }
		    else if(myform.id.checked)
		    {
		     	location.href=name+"?key="+myform.id.value;
		    }
	        else
	        {    
	         	alert("请选择要修改的项！");
	        }
	}
	function update_cs(myform,name,csStr)
	{
		var k = 0;
		var j = 0;
		var del_flag_len = 0;
	    del_flag_len =  myform.id.length;  
        if(myform.id.length>=2)
        { 
		        for (i = 0 ;i<del_flag_len ;i++)
		        {	          	
		            if(myform.id[i].checked)
		            {	              
		              k++;
		              j=i;
		            }
	        	}
		        if (k==1)
		        {
		            location.href=name+"_update.jsp?key="+myform.id[j].value+csStr;
		        } 
		        else if(k>1)
		        {    
		          	alert("只能选一个要修改的项！");
		        }	   
		        else
		        {
		        	alert("请选择要修改的项！");
		        }     
	     }
		    else if(myform.id.checked)
		    {
		     	location.href=name+"_update.jsp?key="+myform.id.value+csStr;
		    }
	        else
	        {    
	         	alert("请选择要修改的项！");
	        }
	}
	
	function commandSelectOne(myform,url,csStr)
	{
		if(myform.id == null){
			alert("没有要操作的项");
			return ;
		}
		var k = 0;
		var j = 0;
		var del_flag_len = 0;
	    del_flag_len =  myform.id.length;  
        if(myform.id.length>=2)
        { 
		        for (i = 0 ;i<del_flag_len ;i++)
		        {	          	
		            if(myform.id[i].checked)
		            {	              
		              k++;
		              j=i;
		            }
	        	}
		        if (k==1)
		        {
		            //location.href = url+"?key="+myform.id[j].value+csStr;
		            showWin(url+"?key="+myform.id[j].value+csStr,470,350,url+"?key="+myform.id[j].value+csStr);
		            //window.open(url+"?key="+myform.id[j].value+csStr,"",'width=470,height=350,top=200,left=300, toolbar=no, menubar=no, scrollbars=yes, resizable=no,location=no, status=no');
		        } 
		        else if(k>1)
		        {    
		          	alert("只能选一个要操作的项！");
		        }	   
		        else
		        {
		        	alert("请选择要操作的项！");
		        }     
	     }
		    else if(myform.id.checked)
		    {
		     	//location.href = url+"?key="+myform.id.value+csStr;
		     	showWin(url+"?key="+myform.id.value+csStr,470,350,url+"?key="+myform.id.value+csStr);
		     	//window.open(url+"?key="+myform.id.value+csStr,"",'width=470,height=350,top=200,left=300, toolbar=no, menubar=no, scrollbars=yes, resizable=no,location=no, status=no');
		    }
	        else
	        {    
	         	alert("请选择要操作的项！");
	        }
	}
	
	function commandSelectMu(myform)
	{
			
		if(myform.id == null){
			alert("没有要操作的项");
			return ;
		}	
			var del_flag_len = 0;
	        var isExist = false;          
	        del_flag_len =  myform.id.length;  
        	if(myform.id.length>=2){ 
		        for (i = 0 ;i<del_flag_len ;i++){	          	
		            if(myform.id[i].checked){	              
		              isExist=true;
		              break;
		            } 
	        	}if (isExist){
		            	return true;
		        }else{    
		          	alert("请选择要操作的项！");
		          	return false;
		        }
	     	}else if(myform.id.checked){  
					return true;
		    }else{    
	         	alert("请选择要操作的项！");
	         	return false;
	        }
	}
	function commandSelect(myform,url)
	{
		if(myform.id == null){
			alert("没有要操作的项");
			return ;
		}
		var k = 0;
		var j = 0;
		var del_flag_len = 0;
	    del_flag_len =  myform.id.length;  
        if(myform.id.length>=2)
        { 
		        for (i = 0 ;i<del_flag_len ;i++)
		        {	          	
		            if(myform.id[i].checked)
		            {	              
		              k++;
		              j=i;
		            }
	        	}
		        if (k==1)
		        {
		            //location.href = url+"?key="+myform.id[j].value+csStr;
		            showWin(url+"?key="+myform.id[j].value,470,350,url+"?key="+myform.id[j].value+"&state="+myform.state[j].value);
		            //window.open(url+"?key="+myform.id[j].value+csStr,"",'width=470,height=350,top=200,left=300, toolbar=no, menubar=no, scrollbars=yes, resizable=no,location=no, status=no');
		        } 
		        else if(k>1)
		        {    
		          	alert("只能选一个要操作的项！");
		        }	   
		        else
		        {
		        	alert("请选择要操作的项！");
		        }     
	     }
		    else if(myform.id.checked)
		    {
		     	//location.href = url+"?key="+myform.id.value+csStr;
		     	showWin(url+"?key="+myform.id.value,470,350,url+"?key="+myform.id.value+"&state="+myform.state.value);
		     	//window.open(url+"?key="+myform.id.value+csStr,"",'width=470,height=350,top=200,left=300, toolbar=no, menubar=no, scrollbars=yes, resizable=no,location=no, status=no');
		    }
	        else
	        {    
	         	alert("请选择要操作的项！");
	        }
	}
	function direction_idea(myform,name)
	{
		var k = 0;
		var j = 0;
		var del_flag_len = 0;
	    del_flag_len =  myform.id.length;  
        if(myform.id.length>=2)
        { 
		        for (i = 0 ;i<del_flag_len ;i++)
		        {	          	
		            if(myform.id[i].checked)
		            {	              
		              k++;
		              j=i;
		            }
	        	}
		        if (k==1)
		        {
		            window.open(name+'_direction_idea.jsp?key='+myform.id[j].value,'','width=400,height=300');
		        } 
		        else if(k>1)
		        {    
		          	alert("只能选一个要审核意见的项！");
		        }	   
		        else
		        {
		        	alert("请选择要审核意见的项！");
		        }     
	     }
		    else if(myform.id.checked)
		    {
		     	window.open(name+'_direction_idea.jsp?key='+myform.id.value,'','width=400,height=300');
		    }
	        else
	        {    
	         	alert("请选择要审核意见的项！");
	        }
	}
	function checkselect(myform)
    {
    	var del_flag_len = 0;
        var isExist = false;         
        del_flag_len =  myform.id.length;         
        if(myform.id.length>=2)
        { 
	        for (i = 0 ;i<del_flag_len ;i++)
	        {	          	
	            if(myform.id[i].checked)
	            {	              
	              isExist=true;
	              break;
	            }
	        }
	        if (!isExist)
	        {
	        	alert("请选择要操作的项！");
	        	return false;
	        }
	     }
	    else if(!myform.id.checked)
	    {
	        alert("请选择要操作的项！");
	        return false;
	    }	
	    return true;
    }
    function checkselectone(myform)
    {
    	var k = 0;
		var j = 0;
		var del_flag_len = 0;
	    del_flag_len =  myform.id.length;  
        if(myform.id.length>=2)
        { 
		        for (i = 0 ;i<del_flag_len ;i++)
		        {	          	
		            if(myform.id[i].checked)
		            {	              
		              k++;
		              j=i;
		            }
	        	}
		        if (k==1)
		        {
		           return true;
		        } 
		        else if(k>1)
		        {    
		          	alert("只能选一个要操作的项！");
		          	return false;
		        }	   
		        else
		        {
		        	alert("请选择要操作的项！");
		        	return false;
		        }     
	     }
		    else if(myform.id.checked)
		    {
		     	return true;
		    }
	        else
	        {    
	         	alert("请选择要操作的项！");
	         	return false;
	        }
    }
    
    function selectAll(myform)
    {
    	if(myform.id.length>=2)
        { 
	        for (i = 0 ;i<myform.id.length;i++)
	        {	
	        	if(!myform.id[i].disabled)
	        	{
	        		myform.id[i].checked = myform.all.checked;
	        	}
	        }
	    }
	    else 
	    {
	    	if(!myform.id.disabled)
	        {
	    		myform.id.checked = myform.all.checked;
	    	}
	    }
    }
    
    function checkall(field)
	{   if(!field.disabled)
	    {
		if(field.checked==false)
		{ field.checked = true;}
		else
		{ field.checked = false;}
        }
        
		for(var i = 0; i < field.length; i++)
		{	if(!field[i].disabled)
		    {
			if(field[i].checked == false)
			{	field[i].checked = true;}
			else
			{	field[i].checked = false;}
			}
		}
	}
	
   //丁春朝添加
	function del1(myform)//删除单个文件
	{
		var isExist = false;
		if(confirm("您确定要删除该项？")){
			isExist=true;
		}
		if(isExist){
			myform.submit();
		}
	}
	function buttonc(whichone,size)
	{
		if (document.all)
		{
			whichone.style.left=document.body.scrollLeft+event.clientX-event.offsetX-size*8		
			whichone.style.top=document.body.scrollTop+event.clientY-event.offsetY+23
			if (whichone.style.visibility=="hidden")
			{
				whichone.style.visibility="visible"
				whichone.style.zIndex=zindex++
			}
			else
			{
				whichone.style.visibility="hidden";
			}
		}
	}
	
	