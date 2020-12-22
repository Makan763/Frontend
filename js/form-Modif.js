new Vue({
	el:"#app",
	data:{
		user:{
			id:"",
			prenom: '',
			nom: '',
			age: ''
		},
	},
	computed:{
		
	},
	mounted(){
	},
	methods:{
		
		Enregistrer(){
			
			var user = this.user;
			axios.put("http://localhost:3000/users/upadate", user);
			location.href = "index.html";
		},
	}
});