var body = document.querySelector("body")
var innertext = document.getElementById("innertext")
var Boys = document.getElementById("Boys")
var Girls = document.getElementById("Girls")

function getrandomnameswhithoutapi(){
// var Array_Of_Names_Of_Girls = [
//    // Popular English names
//    "Emma", "Olivia", "Ava", "Isabella", "Sophia", "Charlotte", "Mia", "Amelia", "Harper", "Evelyn",
//    "Emily", "Abigail", "Ella", "Elizabeth", "Camila", "Luna", "Sofia", "Avery", "Mila", "Scarlett",
//    // Popular European names
//    "Ava", "Chloe", "Lily", "Ella", "Grace", "Alice", "Isla", "Sophia", "Emily", "Isabella",
//    "Mia", "Olivia", "Amelia", "Jessica", "Lucy", "Emilia", "Maya", "Eva", "Zoe", "Ivy",
//    // Popular Spanish names
//    "Sophia", "Isabella", "Valeria", "Ximena", "Camila", "Victoria", "Mariana", "Martina", "Aitana", "Luciana",
//    "Emma", "Sara", "Sofia", "Valentina", "Maria", "Regina", "Paula", "Daniela", "Julia", "Montserrat",
//    // Popular Arabic names
//    "Aaliyah", "Layla", "Amina", "Fatima", "Zahra", "Nour", "Maryam", "Salma", "Aya", "Jana",
//    "Lina", "Malak", "Sana", "Sara", "Aya", "Hana", "Jana", "Malak", "Nour", "Rania",
//    // Popular African names
//    "Aaliyah", "Amina", "Ayana", "Imani", "Janelle", "Kiara", "Layla", "Malika", "Naomi", "Nia",
//    "Nyla", "Sade", "Zuri", "Aisha", "Amina", "Fatima", "Halima", "Nailah", "Safiya", "Zainab",
//    // Popular Asian names
//    "Aiko", "Akira", "Amaya", "Chiyo", "Emi", "Hana", "Himari", "Kaede", "Kasumi", "Mai",
//    "Mei", "Mizuki", "Sakura", "Yumi", "Aditi", "Anika", "Chhavi", "Deepika", "Esha", "Hina",
//    // Unique and creative names
//    "Alana", "Aurora", "Blair", "Brielle", "Cadence", "Cora", "Eden", "Elodie", "Fiona", "Gemma",
//    "Iris", "Juniper", "Lilah", "Maeve", "Olive", "Phoebe", "Quinn", "Riley", "Rowan", "Sadie",
//    "Skylar", "Violet", "Willow", "Zara"
// ];
    
// var Array_Of_Names_Of_Boys = [
//    // English names
//    "Noah", "Liam", "Oliver", "Elijah", "William", "James", "Benjamin", "Lucas", "Mason", "Logan",
//    "Alexander", "Ethan", "Jacob", "Michael", "Daniel", "Henry", "Jackson", "Sebastian", "Aiden", "Matthew",
//    // Arabic names
//    "Ali", "Ahmed", "Mohamed", "Youssef", "Omar", "Abdullah", "Mahmoud", "Khalid", "Yusuf", "Adam",
//    "Karim", "Hassan", "Hussein", "Samir", "Faisal", "Said", "Ibrahim", "Bashir", "Nabil", "Rashid",
//    // Spanish names
//    "Mateo", "Santiago", "Sebastian", "Matías", "Alejandro", "Diego", "Samuel", "Lucas", "David", "Martin",
//    // French names
//    "Lucas", "Gabriel", "Louis", "Raphaël", "Adam", "Léo", "Arthur", "Jules", "Hugo", "Noah",
//    // Italian names
//    "Leonardo", "Francesco", "Alessandro", "Lorenzo", "Mattia", "Andrea", "Gabriele", "Riccardo", "Tommaso", "Edoardo",
//    // Indian names
//    "Aarav", "Arjun", "Vivaan", "Rohan", "Rahul", "Ayaan", "Vihaan", "Kabir", "Sohan", "Shivaay",
//    // Chinese names
//    "Hao", "Yi", "Ze", "Xuan", "Yu", "Jia", "Chen", "Bo", "Xu", "Zhi",
//    // Japanese names
//    "Ren", "Haruto", "Hiroto", "Sota", "Minato", "Yuto", "Kota", "Riku", "Kaito", "Ayato",
//    // Russian names
//    "Artyom", "Maksim", "Mikhail", "Ivan", "Daniil", "Dmitry", "Kirill", "Andrey", "Ilya", "Nikita",
//    // Brazilian names
//    "Miguel", "Arthur", "Davi", "Gabriel", "Bernardo", "Heitor", "Lucas", "Matheus", "Pedro", "Guilherme",
//    // Nigerian names
//    "Chibueze", "Chukwuemeka", "Chigozie", "Chinedu", "Chidera", "Chisom", "Chukwuebuka", "Chibuzo", "Chika", "Chukwudi"
// ]

// var random = Math.random(Math.floor() * Array_Of_Names_Of_Boys)
// const randomboyname = Math.floor(Math.random() * Array_Of_Names_Of_Boys.length);
// const randomgirlname = Math.floor(Math.random() * Array_Of_Names_Of_Girls.length);

// body.onload = ()=>{
   // innertext.innerHTML = `Boys name = ${Array_Of_Names_Of_Boys[randomboyname]} <br> Girls name = ${Array_Of_Names_Of_Girls[randomgirlname]}`
   // console.log(`Boys = ${Array_Of_Names_Of_Boys[randomboyname]}`)
   // console.log(`Girls = ${Array_Of_Names_Of_Girls[randomgirlname]}`)
// }


// var random = Math.floor(Math.random() * Array_Of_Names_Of_Boys.length)
// array[random]
}
function getrandomnameswhithapi(){
   requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    body.onload = async()=>{
      var fetch_resp = await fetch("https://randomuser.me/api/", requestOptions)
      var response =  await fetch_resp.json()
      
      function index(){
      document.getElementById("img").src = `${response.results[0].picture.large}`
      document.getElementById("username").innerHTML = `Full Name : ${response.results[0].name.title} ` + ` ${response.results[0].name.first} ` + ` ${response.results[0].name.last}`
      document.getElementById("gender").innerHTML = `Gedner : ${response.results[0].gender}`   
      document.getElementById("gmail").innerHTML = `Gmail : ${response.results[0].login.username}@gamil.com`   
      document.getElementById("contry").innerHTML = `Contry : ${response.results[0].location.country}`   
      document.getElementById("Age").innerHTML= `Age : ${response.results[0].dob.age}`   
      document.getElementById("usernameId").innerHTML=`UsernNameId: ${response.results[0].login.uuid}`   
      }
     
      function console_info(){
      console.log(`Gedner =>    ${response.results[0].gender}`)
      console.log(`Full Name => ${response.results[0].name.title} ` + ` ${response.results[0].name.first} ` + ` ${response.results[0].name.last}`)
      console.log(`UserName Id =>${response.results[0].login.uuid}`)
      console.log(`Gmail =>      ${response.results[0].login.username}@gamil.com`)
      console.log(`Age => ${response.results[0].dob.age}`)
      console.log(`Contry => ${response.results[0].location.country}`)
      } 
      //   console_info() 
      index()  
   }
}
getrandomnameswhithapi()

//  all info about your character :

// response.results[0].email

// img
// username
// gender
// gmail
// password
// contry
// Age
// usernameId


