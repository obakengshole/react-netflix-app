import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'

export default function Featured() {
    return (
        <div className="featured">
            <img src="https://trendsinusa.com/wp-content/uploads/2018/01/Anonymous-hacker-profile-picture.jpg" alt="" />
            
            <div className="info">
                <img src="https://trendsinusa.com/wp-content/uploads/2018/01/Anonymous-hacker-profile-picture.jpg" alt="" />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos illum excepturi explicabo debitis, tempora exercitationem nulla voluptatibus repudiandae rem laborum accusamus quam, aperiam commodi porro expedita. Velit dolore quaerat assumenda!
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
