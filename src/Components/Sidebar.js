
export default function Sidebar() {
    const logo = "https://picsum.photos/150"
    return (
        <div className="sidebar">

            <div className="sidebar-content">

                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                
                <div className="button-wrapper">

                    <div className="button">
                        <button>Button 1</button>
                    </div>
                    <div className="button">
                        <button>Button 2</button>
                    </div>
                    <div className="button">
                        <button>Button 3</button>
                    </div>
                    <div className="button">
                        <button>Button 4</button>
                    </div>
                    <div className="button">
                        <button>Button 5</button>
                    </div>
                </div>

                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
            </div>
        </div>
    )
}