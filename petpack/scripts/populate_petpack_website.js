var x = -1
async function populate() {
  const temp = await fetch("/scripts/references/allays.json");
  const references = await temp.json();   

references.forEach(item => {
    x++
    console.log(x)
    let longCategories = (references[x]).categories_long;
    let shortCategories = (references[x]).categories_short;
    let longsCategories = (references[x]).subcategories_long;
    let shortsCategories = (references[x]).subcategories_short
    let id = references[x].id
    let title = references[x].title
    //console.log(id)
    //console.log(longCategories)
    //console.log(shortCategories)

    let scx = -1
    shortCategories.forEach(item => {
        scx++
        //console.log("."+ shortCategories[scx])

        // if the category does not exist, we create one
        if (!document.querySelector("."+ shortCategories[scx])) {

            let newH2 = document.createElement('h2')
            newH2.classList.add(shortCategories[scx], "subheading")
            newH2.innerHTML = longCategories[scx]
            console.log(newH2.outerHTML)
            document.body.appendChild(newH2)
        }

        if(shortsCategories[0]){
            // if there is a subcatregory
        }else{
            // if there isn't
         var maingrid = document.querySelector("."+ shortCategories[scx] + ".maingrid")
           // console.log(maingrid.outerHTML)
              //if there isn't a maingrid next
              if(!maingrid){
                var maingrid = document.createElement('div')
                maingrid.classList.add("maingrid", shortCategories[scx])
                //console.log(maingrid.outerHTML)
              }
              let newDiv = document.createElement('div')
              newDiv.classList.add("item")
              newDiv.innerHTML = `<img src="previews/${shortCategories[scx] + "/" + id +".png"}"><p class="imgdesc">${title}</p>`
              //console.log(newDiv.outerHTML)
              maingrid.appendChild(newDiv);
              //console.log(maingrid.outerHTML)
              if (true)
              {
                document.body.appendChild(maingrid)
              }
        // console.log(document.body.innerHTML)
          //  console.log(document.head.innerHTML)
        }
    })
    //    console.log(longCategories)
    //    console.log(shortCategories)
})};
populate();
