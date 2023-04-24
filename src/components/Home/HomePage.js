import videoHomepage from '../../assets/homepage.webm'
import { useSelector } from 'react-redux'
const HomePage = (props) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const account = useSelector(state => state.user.account)
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