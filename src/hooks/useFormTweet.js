import {ref} from "vue";  // importo funcion para almacenar el estado de formulario


export default function useFormTweet(){
    const showForm = ref (false); //creamos constante para almacenar el valor de formulario abierto o cerrado

    const openCloseForm = ()=>{          //creamos función para cambiar valor de formulario
        showForm.value = !showForm.value;
    };

    return {             //exportamos para poder utilizar
        showForm,
        openCloseForm,
    };
}