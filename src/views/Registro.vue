<template>
<BasicLayoutVue>
    <!-- Formulario para el registro -->
  <div class="register">
    <h2>Registro para un nuevo usuario <hr class="custom-hr"> </h2>
    <form action="" class="ui form" @submit.prevent="register">
        <div class="field">
            <input type="text" placeholder="Nombre de usuario" v-model="formData.username" :class="{error: formError.username}" />
        </div>
        <div class="field">
            <input type="email" placeholder="Correo electrónico"  v-model="formData.email" :class="{error: formError.email}" />
        </div>
        <div class="field">
            <input type="password" placeholder="Contraseña" v-model="formData.password" :class="{error: formError.password}" />
        </div>

        <button type="submit" class="ui button fluid primary" :class="{loading}">
            Crear usuario
        </button>
    </form>

    <router-link to="/login">
    <br>
        <div class="inicioSesion">
        Iniciar sesión
    </div>
    </router-link>

  </div>
</BasicLayoutVue>
</template>

<script>
import { ref } from "vue";
import * as Yup from "yup";
import {useRouter} from "vue-router";
import BasicLayoutVue from '@/layouts/BasicLayout.vue';
import {registerApi} from "../api/user";

export default {
    name:"Registro",
    components:{
        BasicLayoutVue
    },
    setup(){
        let formData = ref({});
        let formError = ref({});
        const ruter = useRouter();
        let loading = ref(false);

        const schemaForm = Yup.object().shape({
            username: Yup.string().required(true),
            email: Yup.string().email(true).required(true),
            password: Yup.string().required(true),
        });

        const register = async () =>{
            formError.value = {};
            loading.value=true;
            try {
                await schemaForm.validate(formData.value, {abortEarly: false});
                
                try {
                    const response = await registerApi(formData.value);
                    ruter.push("/login")
                } catch (error) {
                    console.log(error)
                }
                
            } catch (error) {
                error.inner.forEach((err) => {
                    formError.value[err.path] = err.message;
                    
                });
            }

            loading.value=false;
        };

        return{
            formData,
            register,
            formError,
            loading,
        }
    }
};
</script>

<style lang="scss" scoped>
.register{
    text-align: center;
    > h2{
        margin: 50px 0 30px 0;
    }
.ui.form{
    max-width: 300px !important;
    margin: 0 auto;
    margin-bottom: 10 px;
    input.error{
        border-color: #faa;
        background-color: #ffeded;
    }
    .button{
        background-color: #EBEAE6;
        color: #615447;
    }
}

}
.inicioSesion{
    color: #615447;
}

.custom-hr {
    height: 1px; /* Altura de la línea */
    width: 22%; /* Ancho de la línea */
    background-color: #615447; /* Color de la línea */
    margin: 22px auto; /* Margen superior e inferior de 20px, y margen izquierda y derecha automáticos para centrar */
    border: none; /* No queremos bordes para el hr */
}
</style>