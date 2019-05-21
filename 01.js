const app = new Vue({
	//el objeto sera administrado por view
	el: '#app',

	data: {	
		titulo:'Hola M',
		//array
		frutas:['manzana', 'pera','platano'],
		//array de objetos

		frutas2:[
		{nombre: 'Pera', estado: 'verde'},
		{nombre: 'manzana', estado: 'rojo'},
		{nombre: 'mango', estado: 'amarillo'}
		],

		//CLASE 2: CONEXION DE HTML CON JAVASCRIPT
		nuevaFruta: '',

		//clase 3: key up
		nuevoColor:'',
		//clase 4: v-bind class
		fondo: 'bg-warning',
		//clase 5: Computed
		mensaje: 'Vue.js',
		contador: 0
		



	},
	computed:{
		invertido(){

			return this.mensaje.split('').reverse().join('');
		},
		//clase 5:computed
		color(){
			return{
				'bg-success' :this.contador <=10,
				'bg-warning' :this.contador >10 && this.contador < 20,
				'bg-danger' :this.contador >=20
			} 

		}






	},
 	methods: {
 		agregarFruta(){
 			//accede a propiedades de tda la instancia

 			this.frutas2.push({
 				nombre: this.nuevaFruta, cantidad: 0


 			});

 			//clase 3: key up de vue js
 			this.nuevaFruta= '';
 		},
 		setColor(){
 			this.frutas2.push({
 				estado: this.nuevoColor,cantidad: 0
 			});
 			this.nuevoColor='';


 		}
 	}
})