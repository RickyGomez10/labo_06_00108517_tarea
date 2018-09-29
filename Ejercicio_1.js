var numero = 0;
var arreglo = [];
var ventas = 0;
var sumaventas = 0;
var promedioventas = 0;
while(numero != 6){
	console.log("Que opcion desea realizar?");
	console.log("1. Agregar producto");
	console.log("2.	Opciones para modificar un producto");
	console.log("3. Registrar venta y reducir stock");
	console.log("4. Mostrar promedio de ventas realizadas");
	console.log("5. Mostrar productos con stock 0");
	console.log("6. Salir del programa");
	numero = prompt("Ingrese el numero de una de las opciones");
	if (numero ==1) {
		var codigo1 = prompt("Ingrese el codigo del producto");
		for(let i of arreglo){
			if(i.codigo == codigo1){
				console.log("El codigo que usted desea ingresar ya existe, ingrese otro por favor");
				break;
			}else{
				var descrpicion1 = prompt("Ingrese la descripcion del producto");
		var tipo1 = prompt("Ingrese el tipo del producto");
		var preciocompra1 = prompt("Ingrese el precio de compra del producto");
		var precioventa1 = prompt("Ingrese el precio de venta del producto");
		var stock1 = prompt("Ingrese el stock del producto");
		var producto = {
			codigo: codigo1,
			descripcion: descrpicion1,
			tipo: tipo1,
			preciocompra: preciocompra1,
			precioventa: precioventa1,
			stock: stock1
		}
		arreglo.push(producto);

			}
		}
		

	}else if (numero ==2) {
		var buscar = prompt("Ingrese el codigo del producto que desea modificar");
		for(let i of arreglo){
			if (i.codigo == buscar) {
				console.log("Que desea modificar del producto");
				console.log("1. Modificar descrpicion");
				console.log("2. Modificar tipo");
				console.log("3. Modificar precio de compra del producto");
				console.log("4. Modificar precio de venta del producto");
				console.log("5. Modificar el stock del producto");
				var modificar = prompt("Ingrese la opcion para modificar valor del producto");
				if(modificar == 1){

				}else if(modificar ==2){
					var nuevovalor= prompt("Ingrese el nuevo tipo del producto");
					i.tipo= nuevovalor;

				}else if(modificar ==3){
					var nuevovalor= prompt("Ingrese el nuevo precio de compra del producto");
					if(nuevovalor <0){
						console.log("No se puede ingresar valores negativos al precio de compra del producto");
						break;
					}else{
					i.preciocompra = nuevovalor;
					}
				}
				else if(modificar ==4){
					var nuevovalor= prompt("Ingrese el nuevo precio de venta del producto");
					if(nuevovalor <0){
						console.log("No se puede ingresar valores negativos al precio de venta del producto");
						break;
					}else{
					i.precioventa = nuevovalor;
					}
				}
				else if(modificar ==5){
					var nuevovalor= prompt("Ingrese el nuevo stock del producto");
					if(nuevovalor < 0){
						console.log("No puede ingresar valores negativos al stock");
						break
					}else{
					i.stock = nuevovalor;
					}
				}
			}
		}

	}else if (numero ==3) {
		var buscar= prompt("Ingrese el codigo del producto que desea vender");
		for(let i of arreglo){
			if(i.codigo == buscar){
				if(i.stock == 0){
					console.log("No puede vender el producto porque usted tiene 0 de stock");
					break;
				}else{
					var vender = prompt("Usted posee: "+i.stock + " del producto: "+i.codigo+", Cuantos desea vender?");
					var resultadostock = i.stock - vender;
					if(resultadostock < 0){
						console.log("No se puede vender la cantidad deseada, usted solo posee: " +i.stock);
					}else{
						i.stock = resultadostock;
						console.log("Producto vendido");
						ventas = ventas +1;
					}
				}
				

			}
		}

	}else if (numero ==4) {
		for(let i of arreglo){

			sumaventas = sumaventas + (i.precioventa-i.preciocompra);
		}
		if(ventas == 0){
			console.log("Usted no tiene promedio de ventas puesto que no ha realizado ninguna venta");
		}else{
			promedioventas = sumaventas/ventas;
			console.log("Su promedio de ganancia por venta es: "+promedioventas);
		}


	}else if (numero ==5) {
		var encontrado = false;
		for(let i of arreglo){
			if(i.stock == 0){
				encontrado = true;
				console.log(i);
				break;
			}
		}
		if(encontrado == false){
			console.log("No tiene productos con stock 0");
		}

	}else if (numero ==6) {
		console.log("Usted esta saliendo del programa");
		break;

	}
}