import Footer from './Footer'
import MenuBar from './MenuBar'

const Layout = ({ children }) => {
    return <div className="content">
        <MenuBar data={children.props.data} />
        <div className="container">{children}</div>
        <Footer />
    </div>
}

export default Layout;