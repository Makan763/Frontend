new Vue({
	el:"#app",
	data:{
		user:{},
	},
	computed:{
		
	},
	mounted(){
	},
	methods:{
		Enregistrer(){
			var scope = this;
			var user = this.user;
			axios.post("http://localhost:3000/users/add", user);
			location.href = "index.html";
		},
	}
});