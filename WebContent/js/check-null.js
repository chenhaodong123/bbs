function check1()
 {
	 var name=document.regform.userName.value;
	 var pass=document.regform.userPass.value;
	 var validateCode=document.regform.validateCode.value;
	 //var  codeNumbers='<%= session.setAttribute(codeNumbers) %>';
     
	 
if(name==""||name==null)
   {
	alert("学号/工号不能为空");
	return false;
	}
else if(pass==""||pass==null)
     {alert("密码不能为空");
     return false;
     }
else if(validateCode==""||validateCode==null)
     {alert("验证码不能为空");
     return false;
     }
//else if(validateCode !=codeNumbers)
//{alert("你输入的验证码不正确");
//return false;
}



//}






function check2()
{
	 var name=document.regform.Book_Name.value;
	var author=document.regform.Book_Author.value;
	 var man=document.regform.Recommend_Man.value;
	// var Press=document.regform.Press.value;
	// var Year=document.regform.Year.value;
	// var Price=document.regform.Price.value;
	 var Isbn=document.regform.Isbn.value;
	 var Reson=document.regform.Reson.value;
	
	 
if(name==""||name==null)
  {
	alert("书名不能为空");return false;
	}
else if(author==""||author==null)
    {
	  alert("著作者不能为空");return false;
    }
else if(man==""||man==null)
         {
	        alert("推荐人不能为空");return false;
	        
           }
//else if(Press==""||Press==null)
//{
   //alert("出版社不能为空");return false;
  //}
//else if(Year==""||Year==null)
//{
  // alert("出版年不能为空");return false;
  //}
//else if(Price==""||Price==null)
//{
   //alert("价格不能为空");return false;
  //}
else if(Isbn==""||Isbn==null)
{
   alert("ISBN不能为空");return false;
  }
else if(Reson==""||Reson==null)
{
   alert("推荐理由不能为空");return false;
  }

}


function check3()
{
	 var pass=document.regform.pass.value;
	 var pass_ed=document.regform.pass_ed.value;
	 
if(pass==""||pass==null)
  {
	alert("新密码不能为空");return false;
	}
else if(pass_ed==""||pass_ed==null)
    {
	  alert("确认密码不能为空");return false;
    }
else if(pass!=pass_ed)
         {
	        alert("两次输入的密码不一致，请重新输入");return false;
           }

}
function check5()
{
	 var nr=document.regform.nr.value;
	 
if(nr==""||nr==null)
  {
	alert("检索内容不能为空");return false;
	}


}



function check6()
{
	 var yh=document.regform.admin_username.value;
	 var mm=document.regform.admin_pass.value;
if(yh==""||yh==null)
  {
	alert("请输入用户名!");return false;
	}
if(mm==""||mm==null)
{
	alert("请输入密码!");return false;
	}

}