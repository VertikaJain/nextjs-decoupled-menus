import Footer from './Footer'
import MenuBar from './MenuBar'

const Layout = ({ children }) => {
    return <div className="content">
        <header>
            <h1>Decoupled Menus Demo using NextJS</h1>
        </header>
        <div className="menuBar">
            <MenuBar data={children.props.data} />
        </div>
        <Footer />
    </div>
}

export default Layout;