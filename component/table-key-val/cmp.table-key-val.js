// © 2025 DJS 
 
 
 
 
 
class ComponentTableKeyVal { 
 
 
 
	//static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 
		let html = ''; 
 
		//console.log( 'objData: ', objData ); 
 
		let htmlTBody = ''; 
		objData.forEach( tr => {

			//console.log( 'tr: ', tr ); 


			let htmlKey, htmlVal = '';

			if ( tr.k || tr.v ) {

				if ( tr.k ) 
					htmlKey = tr.k;
				
				if ( tr.v ) {

					if ( tr.href ) {
						htmlVal = `<a href="${ tr.href }" target="_blank">${ tr.v } ${ HTML_HREF_SIGN }</a>`;
					
					} else
						htmlVal = tr.v;
				} 

				htmlTBody += `<tr>
					<td class="txt-key">${ htmlKey }</td>
					<td class="txt-val">${ htmlVal }</td>
				</tr>`;
			}

			if ( tr.backspace ) 
				htmlTBody += `<tr><td class="tr-separator" colspan="2">&nbsp;</td></tr>`;
			

			//htmlTBody += `<tr><td class="key">${ k.key }</td><td class="val">${ htmlVal }</td></tr>`;
		});

 		if ( htmlTBody )
 			html = `<table>${ htmlTBody }</table>`;
 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
