import videoHomepage from '../../assets/homepage.webm'
const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay="autoplay" muted loop="" >
                <source src={videoHomepage} type="video/webm" />
            </video>
            <div className='homepage-contain'>
                <div className='title-1'>There's a better way to ask</div>
                <div className='title-2'>You don't want to make a boring form.
                    And your audience won't answer one.
                    Create a typeform instead—and make everyone happy.</div>
                <div className='title-3'>
                    <button>Get's statted. It's free</button>
                </div>
            </div>
        </div>
    )
}
export default HomePage