
function menu_hide()
	{
	var divs=document.getElementsByTagName('DIV');
	var re=/^popup(\d+)$/;
	for (var i=0;i<divs.length;i++)
		{
		if (divs[i].id!=null)
				{
				if (re.test(divs[i].id))
					{
					divs[i].style.display='none';
					}
				}
		}

	}	

//==================================================

 function show_popup(id)
		{
		menu_hide();

		var div=document.getElementById('popup'+id);
		if (div!=null)
			{
			div.style.display='block';
			}
		}

//===================================================
function mainitem_over(id)
	{
	var div=document.getElementById('mainitem'+id);
	div.className='item_over';
	var a=document.getElementById('a'+id);
	if(a!=null)
		{
		a.className='item_over';
		}
	show_popup(id);
	}

//========

function mainitem_out(id,className)
	{
	var div=document.getElementById('mainitem'+id);
	div.className=className;
	var a=document.getElementById('a'+id);
	if(a!=null)
		{
		a.className=className;
		}
	}


//====================================================
function subitem_over(td,id)
	{
	td.className='popup_over';
	var a=document.getElementById('a_popup'+id);
	if(a!=null)
		{
		a.className='popup_over';
		}
	}

//========

function subitem_out(td,id)
	{
	td.className='popup';
	var a=document.getElementById('a_popup'+id);
	if(a!=null)
		{
		a.className='popup';
		}
	}