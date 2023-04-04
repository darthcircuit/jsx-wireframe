export default function Header() {

    const headerImage = "https://picsum.photos/500"
    const headerText = 'Hello There!'
    const subheaderText = "Welcome to the World of Tomorrow!"

    const header = (

        <div className="header-wrapper">
            <div className="header-image">
                <img src={headerImage}/>
            </div>

            <div className="header-text">

                <h1 className="header">
                    { headerText }
                </h1>

                <h2 className="subheader">
                    { subheaderText }
                </h2>

            </div>
        </div>
            )


    return header
}