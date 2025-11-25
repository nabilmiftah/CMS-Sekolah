const bcrypt = require("bcrypt");

// Ganti '123456' dengan password yang ingin kamu gunakan
const plainPassword = "123456"; 
const saltRounds = 10;

bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log("Hash password:", hash);
});
