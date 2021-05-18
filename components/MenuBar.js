import Link from "next/link"
import TreeView from '@material-ui/lab/TreeView'
import TreeItem from '@material-ui/lab/TreeItem'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const MenuBar = ({ data }) => {
    let mainRoot = { children: [] } // will have sub-roots

    // Get each menu object from data array
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

    return <div>
        <header>
            <h1>Decoupled Menus Demo using NextJS</h1>
        </header>
        {/* Main root level - using single map */}
        <TreeView
            className="treeView"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
        >
            {mainRoot.children.map(child => {
                return createTreeItem(child)
            })}
        </TreeView>
    </div>
}

// Inner roots level - using recursion
const createTreeItem = (menuObj) => {
    // Links for Leaf nodes
    if (menuObj.children.length === 0 || menuObj.children === []) {
        return <TreeItem
            className="treeItem"
            key={menuObj['drupal-menu-hierarchy'][0]}
            nodeId={menuObj['drupal-menu-hierarchy'][0]}
            label={<Link href={menuObj.href}><a>- {menuObj.title}</a></Link>}>
        </TreeItem>
    }
    // Recursing through sub-menus
    else
        return <TreeItem
            key={menuObj['drupal-menu-hierarchy'][0]}
            nodeId={menuObj['drupal-menu-hierarchy'][0]}
            label={menuObj.title}>
            {menuObj.children.map(child => createTreeItem(child))}
        </TreeItem>
}

export default MenuBar;