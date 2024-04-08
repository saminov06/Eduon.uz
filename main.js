fetch('http://puluch7h.beget.tech/api/get_kurs.php')
      .then(response => response.json())
      .then(json => {
          for(let i =0; i <= json.data.length; i++){
            var div30 = document.getElementById('div30')
            
            var div1 = document.createElement('div')
            div1.style.width="23%"
            div1.style.height="70vh"
            div1.style.backgroundColor="yellow"
            div1.style.display="inline-flex"
            div1.style.flexDirection="column"
            div1.style.justifyContent="space-between"
            div1.style.marginLeft="20px"
            div1.style.marginTop="10px"
            var div2 = document.createElement('div')
            div2.style.width="100%"
            div2.style.height="20vh"
            div2.style.backgroundColor="brown"
            var img1 = document.createElement('img')
            img1.setAttribute("src", json.data[i].img)
    
            var div3 = document.createElement('div')
            div3.style.width="100%"
            div3.style.height="7vh"
            div3.style.backgroundColor="brown"
            div3.style.display="inline-flex"
            div3.style.justifyContent="space-evenly"
            div3.style.alignItems="center"
            var a1 = document.createElement('a')
            var but1 = document.createElement('button')
            but1.style.width="40px"
            but1.style.height="6vh"
            but1.style.backgroundColor="white"
            but1.style.borderRadius="10px"
            but1.style.border ="none"
            a1.innerText = json.data[i].kname
    
            var div4 = document.createElement('div')
            div4.style.width="100%"
            div4.style.height="7vh"
            div4.style.backgroundColor="blueviolet"
            var h1 = document.createElement('h1')
            h1.innerText = json.data[i].tname
            h1.style.fontSize="20px"
    
            var div5 = document.createElement('div')
            div5.style.width="100%"
            div5.style.height="7vh"
            div5.style.backgroundColor="white"
            div5.style.display ="inline-flex"
            div5.style.justifyContent ="space-evenly"
            div5.style.alignItems="center"
            var i1 = document.createElement('i');
            i1.classList.add('fa-solid');
            i1.classList.add('fa-cart-shopping');

            console.log(i1);
            but1.appendChild(i1);

           
            var p1 = document.createElement('p1')
            p1.innerText = json.data[i].rote
            var i2 = document.createElement('i')
            i2.classList.add('fa-solid')
            i2.classList.add('fa-star')
           
            var i3 = document.createElement('i')
            i3.classList.add('fa-solid')
            i3.classList.add('fa-graduation-cap')

            var i4 = document.createElement('i')
            i4.classList.add('fa-solid')
            i4.classList.add('fa-graduation-cap')

            
           
            
            var p2 = document.createElement('p')
            p2.innerText = json.data[i].student
    
            var div6 = document.createElement('div')
            div6.style.width="100%"
            div6.style.height="7vh"
            div6.style.backgroundColor="brown"
            div6.style.display="inline-flex"
            div6.style.justifyContent="space-evenly"
            div6.style.alignItems="center"
            
            var a2 = document.createElement('a')
            a2.innerText = json.data[i].sum
            var but2 = document.createElement('button')
            but2.innerText = "Xarid qilish"
            but2.style.width="90px"
            but2.style.height="5vh"
            but2.style.backgroundColor="blueviolet"
            img1.style.width ="100%"
            but2.style.border="none"
            but2.style.borderRadius="10px"
            but2.style.marginLeft="50px"
    
    
            ;
            div30.appendChild(div1)
    
            div1.appendChild(div2)
            div2.appendChild(img1)
            div3.appendChild(a1)
            div1.appendChild(div3)
            div3.appendChild(but1)
            div1.appendChild(div4)
            div4.appendChild(h1)
            div1.appendChild(div5)
            div5.appendChild(p1)
            div5.appendChild(i2)
            div5.appendChild(p2)
            div1.appendChild(div6)
            div6.appendChild(a2)
            div6.appendChild(but2)
            
            div5.appendChild(i3)
            
          }
      })