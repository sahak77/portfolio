import github from "../../../assets/github.png"
import globe from "../../../assets/global.png"
import playButton from "../../../assets/play-button.png"

const SwiperSlideItem = ({ data, gitClone, copyLink }) => {

    return (
        <div className="SwiperSlideItemCont">
            <div className="itemHeadCont">
                <div style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
                    <h1 className="title">{data.name}</h1>
                    <button className="button" onClick={() => copyLink(data.gitClone)} >{gitClone}</button>
                </div>
                <p className="text">({data.description})</p>
                <p className="text">used: {data.used}</p>
            </div>
            <div className="linkCont">
                {data.github ? <img
                    src={github}
                    className="linkImg"
                    alt="github"
                    onClick={() => window.open(data.github, "_blank")}
                /> : null}
                {data.webPage ? <img
                    src={globe}
                    className="linkImg"
                    alt="demo"
                    onClick={() => window.open(data.webPage, "_blank")}
                /> : null}
                {data.video ? <img
                    src={playButton}
                    className="linkImg"
                    alt="video"
                    onClick={() => window.open(data.video, "_blank")}
                /> : null}
            </div>
        </div>
    );
}

export default SwiperSlideItem;