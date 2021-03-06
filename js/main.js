
  const btn = document.querySelector('#btn');
  const contents = document.querySelector('.btn-1');

  contents.addEventListener("click", ()=>{
    const results = ['グー','チョキ','パー'];
    const n =Math.floor(Math.random()*results.length);
    btn.textContent=results[n];

    
  });
  // switch(n){
  //   case 0:
  //     btn.textContent ="グー";
  //     break;
  //   case 1:
  //     btn.textContent ="チョキ";
  //     break;
  //   case 2:
  //     btn.textContent ="パー";
  //     break;

  // }