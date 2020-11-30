const cappagh = document.getElementById('myList');
cappagh.addEventListener('change', event => {
  hiveOne = (event.target.value);
  console.log(hiveOne);
});

function fillJar() { 
    if (hiveOne === '0'){
  return document.getElementById("honey-fill").innerHTML = '<img id="honey" class="fade-in" src=""/>'; 
}   else if (hiveOne === '10'){
  return document.getElementById("honey-fill").innerHTML = '<img id="honey" class="fade-in" src="./assets/images/10-full.png"/>'; 
}   else if (hiveOne === '20'){
  return document.getElementById("honey-fill").innerHTML = '<img id="honey" class="fade-in" src="./assets/images/20-full.png"/>'; 
}   else if (hiveOne === '30'){
  return document.getElementById("honey-fill").innerHTML = '<img id="honey" class="fade-in" src="./assets/images/30-full.png"/>'; 
}   else if (hiveOne === '40'){
  return document.getElementById("honey-fill").innerHTML = '<img id="honey" class="fade-in" src="./assets/images/40-full.png"/>'; 
}   else if (hiveOne === '50'){
  return document.getElementById("honey-fill").innerHTML = '<img id="honey" class="fade-in" src="./assets/images/50-full.png"/>'; 
}   else if (hiveOne === '60'){
  return document.getElementById("honey-fill").innerHTML = '<img id="honey" class="fade-in" src="./assets/images/60-full.png"/>'; 
}   else if (hiveOne === '70'){
  return document.getElementById("honey-fill").innerHTML = '<img id="honey" class="fade-in" src="./assets/images/70-full.png"/>'; 
}   else if (hiveOne === '80'){
  return document.getElementById("honey-fill").innerHTML = '<img id="honey" class="fade-in" src="./assets/images/80-full.png"/>'; 
}   else if (hiveOne === '90'){
  return document.getElementById("honey-fill").innerHTML = '<img id="honey" class="fade-in" src="./assets/images/90-full.png"/>'; 
}   else if (hiveOne === '100'){
  return document.getElementById("honey-fill").innerHTML = '<img id="honey" class="fade-in" src="./assets/images/100-full.png"/>'; 
}
};



