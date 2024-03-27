
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  

  users = users.map(user => ({ ...user, admin: false }));
  
  console.log(users); 
  




  const mashaIndex = users.findIndex(user => user.name === "Маша");
  if (mashaIndex !== -1) {
    users[mashaIndex].admin = true;
  }
  
  console.log(users);
  