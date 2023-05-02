<template>
    <section class="h-100 gradient-form" style="background-color: #eee;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">

                <div class="text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    style="width: 185px;" alt="logo">
                  <h4 class="mt-1 mb-5 pb-1">Login de turnera</h4>
                </div>
                <div class="text-center" >
                  {{ this.mensaje }}
                </div>

                <form>
                  <p>Please login to your account</p>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control" v-model="usuario"
                      placeholder="Phone number or email address" />
                    <label class="form-label" for="form2Example11">Username</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example22" class="form-control" v-model="password" />
                    <label class="form-label" for="form2Example22">Password</label>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" @click="iniciarSession()">Log in</button>
                    <a class="text-muted" href="#!">Forgot password?</a>
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Don't have an account?</p>
                    <button type="button" class="btn btn-outline-danger">Create new</button>
                  </div>

                </form>

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">We are more than just a company</h4>
                <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
</template>

<script>



    export default
    {
        data()
        {
            return {
                usaurio : '',
                password : '',
                mensaje : 'asdasd'
            }
        }, 
        methods:{
            async iniciarSession(){
                
                const url = new URL('https://6448719ce7eb3378ca2eb11b.mockapi.io/users');
                url.searchParams.append('password', this.password); //https://PROJECT_TOKEN.mockapi.io/tasks?completed=false
                url.searchParams.append('user', this.usuario);

                fetch(url, {
                            method: 'GET',
                            headers: {'content-type':'application/json'},
                            })
                            .then((response) => { 
                                return response.json().then((data) => {
                                console.log(data);
                                if (data.length == 0)
                                  this.mensaje = 'El usuario no se encontro';
                                else
                                  this.mensaje = data[0].id;
                                return data;
                            }).catch((err) => {
                            console.log(err);
                }) 
        });
            }
        }
    }
</script>