// Vue 3.x
  const { createApp } = Vue

  createApp({
    data() {
      return {
        mail:[],
        title: "mail list"
       
      }
    },
    mounted() {
        for (let index = 0; index < 10; index++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((risposta) => {
                const result = risposta.data.response;
                this.mail.push(result);
                console.log(risposta);

            }) 
            
        }
        
        
    }
  }).mount('#app')
