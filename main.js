new Vue({
    el: "#app",
    data:{
        id:null,
        title: null,
        text: null,
        type:null,
        by:null,
        alls: null
    },
    methods: {
        getIds: async function (){
            try{
                let response = await fetch("allIds.json");
                let data = await response.json();
                this.alls = data
            }catch(e){
                console.log(e)
            }
        },
        getNews: async function(id){
                let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
                let data = await response.json()
                this.id = data.id
                this.title = data.title
                this.text = data.text
                this.type = data.type
                this.by = data.by
        }
    },
    computed: {
        idsArray: function() {
            
        }
    },
     mounted(){
            const ids = this.getIds()
            ids.then((value)=>{
                console.log(value)
            }).catch((message)=>{
                console.log(message)
            })
        this.getNews("28103531")
       
    }
})


