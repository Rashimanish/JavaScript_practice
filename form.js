function check(){

            area = document.getElementById("section_two")
            box = section_two.getElementsByTagName("input");
            data = document.getElementsByTagName("p");

          /*  data[0].innerHTML = box[0].value;
            data[1].innerHTML = box[1].value;
            data[2].innerHTML = box[2].value;*/

            //when the number of items are large - use FOR loop

            for(i=0;i<box.length;i++){
                data[i].innerHTML = box[i].value;
                data[i].className="myclass";

            }


        }
