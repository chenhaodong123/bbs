<%@ page language="java" contentType="text/html; charset=gbk"
	pageEncoding="gbk"%>
<%@ page import="java.util.*,com.dao.*"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<HTML>
<HEAD>
<TITLE>��ӭ����У԰��̳��ҳ</TITLE>
<META http-equiv=Content-Type content="text/html; charset=gbk">
<Link rel="stylesheet" type="text/css" href="style/style.css" />
</HEAD>
<BODY>
	<%@ include file="top.jsp"%>
	<DIV></DIV>
	<DIV class="h">
		<%@ include file="showLogin.jsp"%>
	</DIV>
	<%
			List<SectionInfo> listParent = null;		//������б�
			List<SectionInfo> listChild = null;			//�Ӱ���б�
			int sParentId = 0;							//�������
			int sId = 0;								//�Ӱ����
			int tId = 0;								//���ӱ��
			SectionInfoDAO section_dao = new SectionInfoDAO();//���DAO
			TopicInfoDAO topic_dao = new TopicInfoDAO();	//����DAO
			ReplyInfoDAO reply_dao = new ReplyInfoDAO();	//�ظ�DAO
		%>
	
	<TABLE cellSpacing="0" cellPadding="0" width="100%">
			<TR class="tr2" align="center">
				<TD colSpan="2">��̳</TD>
				<TD style="WIDTH: 10%">����</TD>
				<TD style="WIDTH: 30%">��󷢱�</TD>
			</TR>
			<TR class="tr3">
				<TD colspan="4">
					
				</TD>
			</TR>
			
			<TR class="tr3">
				<TD width="5%">&nbsp;</TD>
				<TH align="left"><IMG src="image/board.gif">
				</TH>
				<TD align="center"></TD>
				
			</TR>
			
		</TABLE>

	<BR />
	<%@ include file="bottom.html"%>
</BODY>
</HTML>