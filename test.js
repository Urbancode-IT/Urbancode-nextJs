async function users(){
  try{
     const res  =  await fetch('https://jsonplaceholder.typicode.com/users');
     const data  = await res.json();
     console.log(data.name);
     data.map((user)=>(
      console.log(user.name)
     ));
  }
  catch(err){
      console.log(err);
  }
}
users();
