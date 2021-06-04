import Footer from './Footer'
import MenuBar from './MenuBar'

const Layout = ({ children }) => {
    return <div className="content">
        <MenuBar data={children.props.data} />
        <Footer />
    </div>
}

export default Layout;