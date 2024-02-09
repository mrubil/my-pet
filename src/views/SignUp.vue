<template>
  <body>
    <div class="Zaglavlje">
      <h2>Registracija</h2>
    </div>
    <div class="SignUp">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1" style="color: white">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" style="color: white"
            >Lozinka</label
          >
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2" style="color: white"
            >Lozinka</label
          >
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" class="button-Registracija">Submit</button>
      </form>
    </div>
  </body>
</template>

<style>
body {
  background: #ff344c;
}
.Zaglavlje {
  background: white;
  padding: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.button-Registracija {
  background-color: black;
  color: white;
  margin-bottom: 10%;
  border-radius: 20px;
  padding: 10px;
  border: none;
  text-decoration: none;
  width: 200px;
  font-weight: 600;
}
.SignUp {
  width: 300px;
  margin: 0 auto;
}
</style>
