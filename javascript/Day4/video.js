//  let v=document.title()
//  console.log(v)
 let a=document.querySelector("button")
let b=document.querySelector("video");
        console.log(b);
        function mp()
        {
                let play_pause=b.classList.toggle("mp")
                if(play_pause)
                {
                b.play()
a.textContent="play"
// v.textContent="play"
                }
                else 
                {
                        b.pause();
                        a.textContent="pause"
                        // a.textContent="pause"
                }
        }
        let h=document.querySelector("#hi");
        console.log(h);
        function sri(){
            document.title="fcuk these world"
            
        }