function resize()
{
//��������� ������ (������ � �����) � �������� (px)
var otstup=20; 

// ��������� ������� ������
// ��� ������ ������� ��������� ��������
var w=0;
var h=0;

//������� ����� ��������������� ��� ������������� ������� ��������
var w_scroll=0;

if((navigator.appName=='Microsoft Internet Explorer')||(navigator.appName=='Opera'))
		{
		// � ����� � ����� ������������� ����� ��� ����. �������, ���� ���� �� �� �����
	    w_scroll=18;
		w=document.documentElement.clientWidth;
		h=document.documentElement.clientHeight;

		if(w==0) //IE 5.5, ���� ���!!!
			{
			w=document.body.clientWidth;
			h=document.body.clientHeight;
			}
		}

if(navigator.appName=='Netscape')
	{
	w=window.innerWidth;
	h=window.innerHeight;
	}

if(h==null)
	{
	h=500;
	}

if(h==0)
	{
	h=500;
	}

/*---------------------
���������� ������� ������
w - ������
h - ������
-----------------------*/


var global=document.getElementById('global');
if(global!=null)
	{
	global.style.width=Math.max(1,(w-2*otstup+w_scroll))+'px';
	global.style.left=otstup+'px';
	global.style.top='0px';
	global.style.height=h+'px';
	}

var content_h=Math.max(1,h-235-20-5);
var content=document.getElementById('content');
if(content!=null)
	{
	content.style.width=Math.max(1,(w-2*otstup-150+w_scroll))+'px';
	content.style.height=content_h+'px';
	}

var content_body=document.getElementById('content_body');
if(content_body!=null)
	{
	content_body.style.width=Math.max(1,(w-2*otstup-150-25+w_scroll))+'px';
	content_body.style.height=Math.max(1,(content_h-25))+'px';
	}

document.getElementById('menu').style.height=content_h+'px';

document.getElementById('bottom').style.top=Math.max(1,(h-20))+'px';


}