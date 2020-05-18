<template>
  <form ref="checkout_form" class="checkout-form container">
    <div class="row">
      <div class="checkout-form__first-group col-12 col-sm-6">
        <div class="checkout-form__input-group col-12">
          <label for="name" class="checkout-form__label">Nome*</label>
          <input id="name" v-model="$v.name.$model" @blur="$v.name.$touch()" type="text" class="checkout-form__input mktplace-input" :class="$v.name.$error ? 'invalid-input' : ''"/>
          <span class="checkout-form__input-error" :class="$v.name.$error ? 'show-input-error' : ''">Campo obrigatório</span>
        </div>
        <div class="checkout-form__input-group col-12">
          <label for="email" class="checkout-form__label">E-mail*</label>
          <input
            id="email"
            placeholder="exemplo@email.com"
            v-model="$v.email.$model"
            @blur="$v.email.$touch()"
            type="email"
            class="checkout-form__input mktplace-input"
            :class="$v.email.$error ? 'invalid-input' : ''"
          />
          <span class="checkout-form__input-error" :class="$v.email.$error ? 'show-input-error' : ''">Campo obrigatório. Digite um e-mail válido</span>
        </div>
        <div class="checkout-form__input-group col-12">
          <label for="cpf" class="checkout-form__label">CPF*</label>
          <input
            id="cpf"
            v-model="$v.cpf.$model"
            @blur="$v.cpf.$touch()"
            v-mask="'###.###.###-##'"
            type="tel"
            class="checkout-form__input mktplace-input"
            :class="$v.cpf.$error ? 'invalid-input' : ''"
          />
          <span class="checkout-form__input-error" :class="$v.cpf.$error ? 'show-input-error' : ''">Campo obrigatório. Mínimo de 11 caracteres</span>
        </div>
        <div class="checkout-form__input-group col-12 col-sm-6">
          <label for="birthday" class="checkout-form__label">Data de Nascimento*</label>
          <input
            id="birthday"
            placeholder="dd/mm/yyyy"
            v-model="$v.birthday.$model"
            @blur="$v.birthday.$touch()"
            v-mask="'##/##/####'"
            type="tel"
            class="checkout-form__input mktplace-input"
            :class="$v.birthday.$error ? 'invalid-input' : ''"
          />
          <span class="checkout-form__input-error" :class="$v.birthday.$error ? 'show-input-error' : ''">Campo obrigatório.</span>
        </div>
        <div class="checkout-form__input-group col-12 col-sm-6">
          <label for="phone" class="checkout-form__label">Telefone*</label>
          <input
            id="phone"
            v-model="$v.phone.$model"
            v-mask="phoneMask"
            @blur="$v.phone.$touch()"
            type="tel"
            class="checkout-form__input mktplace-input"
            :class="$v.phone.$error ? 'invalid-input' : ''"
          />
          <span class="checkout-form__input-error" :class="$v.phone.$error ? 'show-input-error' : ''">Campo obrigatório. Mínimo 10 caracteres</span>
        </div>
      </div>
      <div class="checkout-form__second-group col-12 col-sm-6">
        <div class="checkout-form__input-group col-12">
          <label for="cep" class="checkout-form__label">CEP*</label>
          <input
            id="cep"
            v-model="$v.cep.$model"
            @blur="cep ? getViaCEP() : '', $v.cep.$touch()"
            v-mask="'##-###-###'"
            type="tel"
            class="checkout-form__input mktplace-input"
            :class="$v.cep.$error ? 'invalid-input' : ''"
          />
          <span class="checkout-form__input-error" :class="$v.cep.$error ? 'show-input-error' : ''">Campo obrigatório.</span>
        </div>
        <div class="checkout-form__input-group col-12 col-sm-8">
          <label for="address" class="checkout-form__label">Endereço*</label>
          <input
            id="address"
            v-model="$v.address.$model"
            @blur="$v.address.$touch()"
            type="text"
            class="checkout-form__input mktplace-input"
            :class="$v.address.$error ? 'invalid-input' : ''"
          />
          <span class="checkout-form__input-error" :class="$v.address.$error ? 'show-input-error' : ''">Campo obrigatório.</span>
        </div>
        <div class="checkout-form__input-group col-12 col-sm-4">
          <label for="street_number" class="checkout-form__label">Número*</label>
          <input
            id="street_number"
            v-model="$v.street_number.$model"
            @blur="$v.street_number.$touch()"
            ref="street_number"
            type="tel"
            class="checkout-form__input mktplace-input"
            :class="$v.street_number.$error ? 'invalid-input' : ''"
          />
          <span class="checkout-form__input-error" :class="$v.street_number.$error ? 'show-input-error' : ''">Campo obrigatório.</span>
        </div>
        <div class="checkout-form__input-group col-12 col-sm-6">
          <label for="complement" class="checkout-form__label">Complemento</label>
          <input
            id="complement"
            v-model="complement"
            type="text"
            class="checkout-form__input mktplace-input"
          />
        </div>
        <div class="checkout-form__input-group col-12 col-sm-6">
          <label for="neighborhood" class="checkout-form__label">Bairro*</label>
          <input
            id="neighborhood"
            v-model="$v.neighborhood.$model"
            @blur="$v.neighborhood.$touch()"
            type="text"
            class="checkout-form__input mktplace-input"
            :class="$v.neighborhood.$error ? 'invalid-input' : ''"
          />
          <span class="checkout-form__input-error" :class="$v.neighborhood.$error ? 'show-input-error' : ''">Campo obrigatório.</span>
        </div>
        <div class="checkout-form__input-group col-12 col-sm-8">
          <label for="city" class="checkout-form__label">Cidade*</label>
          <input id="city" v-model="$v.city.$model" @blur="$v.city.$touch()" type="text" class="checkout-form__input mktplace-input" :class="$v.city.$error ? 'invalid-input' : ''"/>
          <span class="checkout-form__input-error" :class="$v.city.$error ? 'show-input-error' : ''">Campo obrigatório.</span>
        </div>
        <div class="checkout-form__input-group col-12 col-sm-4">
          <label for="state" class="checkout-form__label">Estado*</label>
          <input
            id="state"
            placeholder="Exemplo: SP"
            v-model="$v.state.$model"
            @blur="$v.state.$touch()"
            v-mask="'AA'"
            type="text"
            class="checkout-form__input mktplace-input"
            :class="$v.state.$error ? 'invalid-input' : ''"
          />
          <span class="checkout-form__input-error" :class="$v.state.$error ? 'show-input-error' : ''">Campo obrigatório.</span>
        </div>
      </div>
    </div>
    <div class="col-6 checkout-form__finish-btn-wrapper">
      <button class="checkout-form__finish-btn col-12 col-sm-8" @click.prevent="submitForm()">Concluir compra</button>
    </div>
  </form>
</template>

<script>
import CEP from "../services/cep/cep";
import { EventBus } from "../main";
import { required, minLength, between, email, numeric} from 'vuelidate/lib/validators'

export default {
  name: "mktplace-checkout",
  data: () => ({
    name: null,
    email: null,
    cpf: null,
    birthday: null,
    phone: null,
    cep: null,
    address: null,
    street_number: null,
    complement: null,
    neighborhood: null,
    city: null,
    state: null
  }),
  mounted() {
    /*Devido a falta de conteúdo no form para gerar altura suficiente
      é preciso tratar a altura do componente para que o footer não fique
      solto no meio da tela.*/
    window.addEventListener("resize", this.setFooterToBottom);
    this.setFooterToBottom();
  },
  computed: {
    phoneMask: function() {
      if (this.phone) {
        return this.phone.replace(/[^0-9]/g, "").length <= 10
          ? "(##) ####-####"
          : "(##) # ####-####";
      }
      return "";
    }
  },
  validations: {
    name: {required},
    email: {required, email},
    cpf:{
      required,
      minLength: minLength(11)
    },
    birthday: {required},
    phone: {
      required,
      minLength: minLength(10)  
    },
    cep: {required},
    address: {required},
    street_number: {required},
    neighborhood: {required},
    city: {required},
    state: {required}
  },
  methods: {
    setFooterToBottom() {
      let headerHeight = this.$root.$el.getElementsByClassName("header")[0]
        .clientHeight;
      let footerHeight = this.$root.$el.getElementsByClassName("footer")[0]
        .clientHeight;
      let min_height =
        window.innerHeight -
        this.$refs.checkout_form.offsetTop -
        footerHeight +
        "px";

      this.$refs.checkout_form.style.minHeight = min_height;

    },
    async getViaCEP() {
      try {
        await CEP.searchCep(this.cep.replace("-", "").replace("-", "")).then(
          result => {
            let data = result.data;

            if(data.erro === true){
              EventBus.$emit("setAlert", 'cepWarning')
              return;
            }

            data.logradouro ? this.$refs.street_number.focus() : '';

            this.address = data.logradouro;
            this.neighborhood = data.bairro;
            this.city = data.localidade;
            this.state = data.uf;
          }
        );
      }catch(e){
        // console.log("Houve um erro ao trazer os dados do CEP")
        // console.log(e)
      }
    },
    submitForm(){
      this.$v.$touch();
      if(!this.$v.$invalid){
        EventBus.$emit("setAlert", 'checkoutSuccess');
      }
    }
  }
};
</script>

<style src="../assets/scss/pages/_checkout.scss" lang="scss" scoped />