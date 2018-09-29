var convertor = {
	convertir: function convertir(medida,medida_de_pieza,medida_a_convertir,tipo_de_medida){
		if(medida_de_pieza == 'm' && medida_a_convertir =='ft' && tipo_de_medida == 'L'){
				return medida*3.2808 +' ft';
				
		} else if(medida_de_pieza == 'm' && medida_a_convertir =='cm'  && tipo_de_medida == 'L'){
				return medida/0.01 + ' cm';
				
		}else if(medida_de_pieza == 'm' && medida_a_convertir =='km' && tipo_de_medida == 'L'){
				return medida/1000 +' km';
				
			
		}else if(medida_de_pieza == 'ft' && medida_a_convertir =='m' && tipo_de_medida == 'L'){
				return medida/3.2808 +' m';
				
		}else if(medida_de_pieza == 'km' && medida_a_convertir =='m' && tipo_de_medida == 'L'){
				return medida*1000 +' m';
				
		}
		else if(medida_de_pieza == 'cm' && medida_a_convertir =='m' && tipo_de_medida == 'L'){
				return medida/100 +'m';
				
		}else if(medida_de_pieza == 'cm' && medida_a_convertir =='m' && tipo_de_medida == 'L'){
				return medida/100+' m';
				
		}else if(medida_de_pieza == 'F' && medida_a_convertir =='C' && tipo_de_medida == 'T'){
				return (medida-32)/1.8+' C';
				
		}
		else if(medida_de_pieza == 'C' && medida_a_convertir =='F' && tipo_de_medida == 'T'){
				return (medida*1.8)+32+' F';
				
		}else if(medida_de_pieza == 'K' && medida_a_convertir =='F' && tipo_de_medida == 'T'){
				return ((medida-273.15)*1.8)+32 +' F';
				
		}
		else if(medida_de_pieza == 'F' && medida_a_convertir =='K' && tipo_de_medida == 'T'){
				return ((medida-32)/1.8)+273.15 +' K';
				
		}
		else if(medida_de_pieza == 'C' && medida_a_convertir =='K' && tipo_de_medida == 'T'){
				return medida+273.15+' K';
				
		}
		else if(medida_de_pieza == 'K' && medida_a_convertir =='C' && tipo_de_medida == 'T'){
				return K-273.15+' C';
				
		}else{
			console.log('no se cumplen los requerimientos de conversion, revise la medida actual, la medida a la que se desea convertir y el tipo de medida si es temperatura (T) o longitud (L)');
		}

	}
}


