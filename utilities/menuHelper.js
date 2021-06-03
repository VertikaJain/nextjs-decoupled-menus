// Logical component to create Menu tree based on given hierarchy

const util = ((data) => {

    let mainRoot = { children: [] } // will have sub-roots

    // Get each menu object from data array
    if (data !== undefined)
        data.map(menuObj => {
            // As per data given in menuId = drupal-wiki, this condition is required.
            if (menuObj.title === "A̶̝̺̽u̵͇̜͑t̸̢̗͝h̵̛̥ͅḙ̴̰̎n̸̦̈́t̸͖̍i̶̩͐͝ć̶͉̳̚ą̸̳͆t̵̙̉̋i̴͙͔͗͋ő̷͙n̸͍̆̃ ̶̼̉̚͜o̸͙͍͋̃ṽ̸̗è̶͕͈̚r̴͈͍̂v̷̺̣͗i̶̻̞̇̽é̷̳̥͠w̷͍̮̋͝")
                menuObj.title = "Authentication-overview"

            let hierarchyArr = menuObj['drupal-menu-hierarchy'][0].split(".")
            let curr = mainRoot;

            // Iterate over each sub-menu
            for (let hIdx = 1; hIdx < hierarchyArr.length; hIdx++) {
                let menuId = parseInt(hierarchyArr[hIdx])
                if (curr.children[menuId] === undefined) {
                    curr.children[menuId] = { ...menuObj, children: [] } // create new child
                } else {
                    curr = curr.children[menuId]
                }
            }
        })
    return mainRoot
})

export default util