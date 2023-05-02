import { defineStore } from "pinia"; 

export const contadorStore = defineStore('contador',
    {
        state: () => ({
            cantidad : 0
        })
        , actions:
        {
            incrementar(){
                this.cantidad++;
            },
            decrementar(){
                this.cantidad--;
            }
        }
    }
)