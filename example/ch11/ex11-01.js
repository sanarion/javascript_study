//ex11-01 and 02
function validateEmail(email) {
  return email.match(/@/) ? email : new Error(`Invalid mail address : ${email}`);
}
/*
const email = "janedoe.com";
const validatedEmail = validateEmail(email);
if (validatedEmail instanceof Error) {
  console.error(validatedEmail.message);
} 
else {
  console.log(`Valid mail address : ${email}`);
}
*/
const email = null;
try {
  const validatedEmail = validateEmail(email);
  if (validatedEmail instanceof Error) {
    console.error(validatedEmail.message);
  } 
  else {
    console.log(`Valid mail address : ${email}`);
  }
}
catch(err) {
  console.error(`Error : ${err.message}`);
}