$( function(){
	
	var valor1 = 0, valor2 = 0, op, r;
	
	$("input[name=btn]").click( function(){
		$("#visor").val($("#visor").val() + $(this).val());
	});
	
	// botao backspace pressionado
	
	$("input[name=bkspace]").click( function(){
		valor = $("#visor").val();
		newV = valor.substr(0, valor.length - 1);
		$("#visor").val(newV);
	});
	
	// botao CE pressionado
	
	$("input[name=ce]").click( function(){
		$("#visor").val('');
	});
	
	//botao C pressionado
	
	$("input[name=c]").click( function(){
		$("#visor").val('');
		valor1 = "";
		valor2 = "";
		r = "";
		$("#op").text('');
	});
	
	// botao % pressionado
	
	$("input[name=pcento]").click( function(){
		if(valor2 != ""){
			valor2 = "";
		}
		if($("#visor").val() != ''){
			$("#op").text($(this).val());
			valor1 = parseFloat($("#visor").val());
			$("#visor").val('');
			op = "pcento";
		}else{
			alert("Insira um valor para efetuar a operação!");
		}
	});
	
	// Botao Pot Pressionado
	
	$("input[name=exp]").click( function(){
		if(valor2 != ""){
			valor2 = "";
		}
		if($("#visor").val() != ''){
			$("#op").text($(this).val());
			valor1 = parseFloat($("#visor").val());
			$("#visor").val('');
			op = "exp";
		}else{
			alert("Insira um valor para efetuar a operação!");
		}
	});
	
	// Botao + pressionado
	
	$("input[name=soma]").click( function(){
		if(valor2 != ""){
			valor2 = "";
		}
		if($("#visor").val() != ''){
			$("#op").text($(this).val());
			valor1 = parseFloat($("#visor").val());
			$("#visor").val('');
			op = "soma";
		}else{
			alert("Insira um valor para efetuar a operação!");
		}
	});
	
	// botao * pressionado
	
	$("input[name=multi]").click( function(){
		if(valor2 != ""){
			valor2 = "";
		}
		if($("#visor").val() != ''){
			$("#op").text($(this).val());
			valor1 = parseFloat($("#visor").val());
			$("#visor").val('');
			op = "multi";
		}else{
			alert("Insira um valor para efetuar a operação!");
		}
	});
	
	// botao / pressionado
	
	$("input[name=div]").click( function(){
		if(valor2 != ""){
			valor2 = "";
		}
		if($("#visor").val() != ''){
			$("#op").text($(this).val());
			valor1 = parseFloat($("#visor").val());
			$("#visor").val('');
			op = "div";
		}else{
			alert("Insira um valor para efetuar a operação!");
		}
	});

	// botao - pressionado
	
	$("input[name=sub]").click( function(){
		if(valor2 != ""){
			valor2 = "";
		}
		if($("#visor").val() == ""){
			$("#visor").val($(this).val());
		}else{
			$("#op").text($(this).val());
			valor1 = parseFloat($("#visor").val());
			$("#visor").val('');
			op = "sub";
		}
	});
	
	// botao = pressionado
	
	$("input[name=igual]").click( function(){
		if(valor2 == 0){
			valor2 = parseFloat($("#visor").val());
		}else{
			valor2 = valor2;
		}
		$("#op").text($(this).val());
		switch(op){
			case "soma":
				r = valor1 + valor2;
				break;
			case "sub":
				r = valor1 - valor2;
				break;
			case "div":
				r = valor1 / valor2;
				break;
			case "multi":
				r = valor1 * valor2;
				break;
			case "exp":
				r = Math.pow(valor1, valor2);
				break;
			case "pcento":
				r = (valor1 * valor2 / 100);
				break;
		}
		
		$("#visor").val(r);
		valor1 = r;
	});
	
	
	// Raiz Quadrada
	
	$("input[name=sqrt]").click( function(){
		
		valor1 = parseFloat($("#visor").val());
		r = Math.sqrt(valor1);
		
		$("#visor").val(r);
		
		$("#op").text($(this).val());
		
	});
		
});