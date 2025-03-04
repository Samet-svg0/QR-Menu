import fetchMenu from "./api.js";
import { elements, renderCard } from "./ui.js";

//sayfa yuklendiginde api a istek at ve gelen veriyi dataya ata

document.addEventListener('DOMContentLoaded', async () => {

    //apia dan veri al

    const data = await fetchMenu();

   // api a dan gelen veri ile arayuzu dinamik sekilde renderla

    

    renderCard(data);


//inputlara bir olay izleyicisi ekle ve degisen inputun kategorisine erisip bu
elements.inputs.forEach((input) => {
    input.addEventListener("change", () => {
        //secili inputun id sini al
        const selected = input.id;

         console.log(selected);

         if (selected === "all") {

            renderCard(data);

          } else{ const filtred = data.filter((item) => item.category ==selected);

            renderCard(filtred);
        
        }


    });    
});
       
      });

      


