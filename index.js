function fun(){
    const inp = document.getElementById("in").value;
    const p = document.getElementById("p");
    let n = inp;
    console.log(n);
    let url = fetch(`https://api.genderize.io?name=${n}`);
    url.then(data => data.json()).then((d)=>{
     console.log(d)
     p.innerText =`${n} is ` + d.gender;
    })
   }