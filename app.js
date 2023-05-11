var endDate = new Date();
endDate.setDate(endDate.getDate()+5);

nextday=new Date(endDate.getFullYear(),endDate.getMonth(),endDate.getDate()+1);

var endDate = document.getElementById("end-date")


const inputs = document.querySelectorAll("input")

function clock(){
  const end = nextday;
  const now = new Date;
  var diff = (end - now) /1000;
  inputs[0].value =Math.floor(diff / 3600 / 24 );
  inputs[1].value =Math.floor(diff / 3600 % 24 );
  inputs[2].value =Math.floor(diff / 60 % 60  );
  inputs[3].value =Math.floor(diff % 60 + 1 );

  if (inputs.values[3] == 0){
    console.log('The countdown has ended!')
    inputs.value = 0;
   }
  
}

setInterval(() => {
  clock()
}, 1000);