const fetchMenu = async () => {

    //api a istek at

  const res = await fetch("../db.json");

  // api dan gelen cevabi json formatina cevir


  const data = await res.json()

  //data icersindeki menuyu fonk cagrildiginda return et

  return data.menu;
};




export default fetchMenu;