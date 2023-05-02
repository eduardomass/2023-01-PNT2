import { defineStore } from "pinia";        

export const usuariosStore = defineStore('usuarios',
    {
        state: () => ({
            cantidad : 0,
            usuarios: []
        })
        , actions:
        {
            incrementarUsuarios(){
                this.cantidad++;
            },
            buscar()
            {
                const url = new URL('https://6448719ce7eb3378ca2eb11b.mockapi.io/users');
                fetch(url, {
                    method: 'GET',
                    headers: {'content-type':'application/json'},
                    })
                    .then((response) => { 
                        return response.json().then((data) => {
                            this.usuarios = data;
                        return data;
                    }).catch((err) => {
                    console.log(err);
        }) 
});
            }

        }
        
    }
)