
   const homePage = Vue.component("homePage",{
        template:"#tpl-home-page",
    });
    const espaceEtuPage = Vue.component("espaceEtuPage",{
        template:"#tpl-etudiantespace-page",
        data(){
            return{
                etudiants:[],

            }
        },
        computed:{
            id(){
                return this.$route.params.id;

            },
            etudiant(){
                let id = this.id;
                let res = this.etudiants.filter(etudiant=>{
                    if(etudiant._id == id) return etudiant;
                });
                return (res[0] != undefined) ? res[0] : {};

            },
        },
        mounted(){

        },
        methods:{
            Add(){

            },
        },
    });
    const etudiantaddPage = Vue.component("etudiantaddPage",{
        template:"#tpl-etudiantadd-page",
        data(){
            return{
                etudiants:[],
                classes:[],
            }
        }, 
        computed:{
            id(){
                return this.$route.params.id;
            }, 
            etudiant(){
                let id = this.id;
                let res = this.etudiants.filter(etudiant=>{
                    if(etudiant._id == id) return etudiant;
                });
                 return (res[0] != undefined) ? res[0] : {};
            },
            
        },
        mounted(){

        },
        methods:{           
            Add(){
                const etudiant = this.etudiant
                axios.post("http://localhost:3000/etudiants/add/", etudiant).then((etudiant)=>{
                    this.$router.push("/")
                });
            },
        },
    });
    const etudiantmodPage = Vue.component("etudiantmodPage",{
        template:"#tpl-etudiantmod-page",
        data(){
            return{
                etudiants:[],
                
            }
        },
        computed:{
            id(){
                return this.$route.params.id;
    
            },                       
            etudiant(){
                let id = this.id;
                let res = this.etudiants.filter(etudiant=>{
                    if(etudiant._id == id) return etudiant;
                });
                 return (res[0] != undefined) ? res[0] : {};
            },
           
        },
                  
        mounted(){
            this.GetListe();
        },
        methods:{
            GetListe(){
                let scope = this;
                axios.get("http://localhost:3000/etudiants/").then(datas=>scope.etudiants = datas.data);
            },
            GetListePromotion(){
                let scope = this;
                axios.get("http://localhost:3000/classes/").then(datas=>scope.classes = datas.data);
            },
            Modifier(etudiant){
                let scope = this;
                var id = etudiant._id;                  
                var prenom = etudiant.prenom;                   
                var nom = etudiant.nom;                  
                var age = parseInt(etudiant.age);                  
                var dataEtudiant = {prenom,nom,age};             
                var rep = confirm(`Etes-vous sûr de vouloir modifier cet étudiant ${etudiant.prenom} ${etudiant.nom}?`);
                if(rep === false)return;          
                axios.put("http://localhost:3000/etudiants/:id",{id,dataEtudiant}).then( ()=>{
                    this.$router.push("/") 
                }); 
               
            },
        
        },
    });

    const etudiantsPage = Vue.component("etudiantsPage", {
            template: "#tpl-etudiants-page",
            data(){
                return{
                    etudiants:[],
                   
                }
            },
            mounted(){
                this.GetListe();
            },
            methods:{
                GetListe(){
                    let scope = this;
                    axios.get("http://localhost:3000/etudiants/").then(datas=>scope.etudiants = datas.data);
                },                        
                Supprimer(etudiant){
                    let scope = this;
                    var rep = confirm(`Etes vous sur de vouloir supprimer cet étudiant ${etudiant.prenom} ${etudiant.nom} ?`);
                    if(rep === false) return;
                    var id = etudiant._id;                                                           
                    axios.delete("http://localhost:3000/etudiants/" + id, {id}).then(()=>{
                        this.$router.push("/")
                    });
                },
               
            },
        });
        const espaceProfPage = Vue.component("espaceProfPage",{
            template:"#tpl-professeurespace-page",
            data(){
                return{
                    professeurs:[],
    
                }
            },
            computed:{
                id(){
                    return this.$route.params.id;
    
                },
                professeur(){
                    let id = this.id;
                    let res = this.professeurs.filter(professeur=>{
                        if(professeur._id == id) return professeur;
                    });
                    return (res[0] != undefined) ? res[0] : {};
    
                },
            },
            mounted(){
    
            },
            methods:{
                Add(){
    
                },
            },
        });
    const professeuraddPage = Vue.component("professeuraddPage",{
        template:"#tpl-professeuradd-page",

        data(){
            return{
                professeurs:[],
                
            }
        }, 
        computed:{
            id(){
                return this.$route.params.id;
            },
            professeur(){
                let id = this.id;
                let res = this.professeurs.filter(professeur=>{
                    if(professeur._id == id) return professeur;
                });
                 return (res[0] != undefined) ? res[0] : {};
            },

        },
        mounted(){

        },
        methods:{
            Add(){
                const professeur = this.professeur
                axios.post("http://localhost:3000/professeurs/add/", professeur).then(()=>{
                    this.$router.push("/")                    
                });
            },

        },
    });
    const professeurmodPage = Vue.component("professeurmodPage",{
        template:"#tpl-professeurmod-page",
        data(){
            return{
                professeurs:[],
            }
        },
        computed:{
            id(){
                return this.$route.params.id;
            },
           
            professeur(){
                let id = this.id;
                let res = this.professeurs.filter(professeur=>{
                    if(professeur._id == id) return professeur;
                });
                 return (res[0] != undefined) ? res[0] : {};
            },
           
        },
                  
        mounted(){
            this.GetListeP();
        },
        methods:{
            GetListeP(){
                let scope = this;
                axios.get("http://localhost:3000/professeurs/").then(infos=>scope.professeurs = infos.data);
               
            },
            Modifier(professeur){
                let scope = this;
                var id = professeur._id;                  
                var prenom = professeur.prenom;                   
                var nom = professeur.nom;                                    
                var dataProfesseur = {prenom,nom};             
                var rep = confirm(`Etes-vous sûr de vouloir modifier cet professeur ${professeur.prenom} ${professeur.nom}?`);
                if(rep === false)return;          
                axios.put("http://localhost:3000/professeurs/:id",{id,dataProfesseur}).then(()=>{
                    this.$router.push("/")
                });
                                           
            },
        
        },
    });

    const professeursPage = Vue.component("professeursPage", {
            template: "#tpl-professeurs-page",

            data(){
                return{
                    professeurs:[],
                }
            },
            mounted(){
                this.GetListeP();
            },
            methods:{
                GetListeP(){
                    let scope = this;
                    axios.get("http://localhost:3000/professeurs/").then(infos=>scope.professeurs = infos.data);
                },                        
                Supprimer(professeur){
                    let scope = this;
                    var rep = confirm(`Etes vous sur de vouloir supprimer cet professeur ${professeur.prenom} ${professeur.nom} ?`);
                    if(rep === false) return;
                    var id = professeur._id;                      
                    axios.delete("http://localhost:3000/professeurs/"+ id, {id}).then(()=>{
                        this.$router.push("/");
                    })
                  
                },
            },
        });
    const router = new VueRouter({
        routes:[
            { path: '/', component: homePage },
            { path:'/etudiantespace', component: espaceEtuPage},
            { path: '/etudiants/', component: etudiantsPage },
            { path: '/etudiants/add/', component: etudiantaddPage },               
            { path: '/etudiants/:id', component: etudiantmodPage },
            { path: '/etudiants/:id', component: etudiantsPage },
            { path:'/professeurespace', component: espaceProfPage},
            { path: '/professeurs/', component: professeursPage },
            { path: '/professeurs/add/', component: professeuraddPage },
            { path: '/professeurs/:id', component: professeurmodPage },
            { path: '/professeurs/:id', component: professeursPage },
       
        ]
    })
    new Vue({
        el:"#app",
        router,
        data:{

        },
        computed:{

        },
        mounted(){
            
        },
        methods:{
           
        },
    });
