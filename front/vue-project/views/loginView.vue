<script setup>
import { ref } from 'vue';


let user = ref('');
let password = ('');

</script>

<template>
<section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card text-white" style="border-radius: 1rem;">
          <div class="card1 p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class=" titre fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                <label class="form-label" for="typePasswordX">Password</label>
              </div>

              <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

            </div>

            <div>
              <p class="mb-5">Don't have an account? <a href="/sign" class="login">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<style>
.card1 {
  background-color:  rgb(135, 215, 135);
  border-radius: 10px;
  filter: drop-shadow(0 0 0.75rem rgb(180, 178, 178));
}
</style>