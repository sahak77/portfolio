import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperSlideItem from '../Components/SwiperSlideItem';

const TeamWorkSwiper = ({ gitClone, setGitClone, copyLink }) => {

    const reactData = [
        {
            name: "Hello World",
            description: "simple social network",
            used: "HTML, CSS, Javascript, react, mongoDB(mongoose), node, express",
            github: "https://github.com/sahak77/Hello_World",
            webPage: "https://hello-world-sahak77.vercel.app/",
            video: "https://drive.google.com/file/d/1IDtVwrp27EV2TnDKmcdFivSZvM1geYGm/view?usp=sharing",
            gitClone: "https://github.com/sahak77/Hello_World.git"
        },
        {
            name: "portfolio",
            description: "portfolio project",
            used: "HTML, CSS, Javascript, react",
            github: "https://github.com/sahak77/portfolio",
            webPage: "https://portfolio-sahak77.vercel.app/",
            video: "",
            gitClone: "https://github.com/sahak77/portfolio.git"
        },
        {
            name: "Learn_Redux",
            description: "redux learn project",
            used: "react, redux, bootstrap",
            github: "https://github.com/sahak77/redux_part_2",
            webPage: "https://redux-part-2.vercel.app/",
            video: "",
            gitClone: "https://github.com/sahak77/redux_part_2.git"
        },
    ];

    return (

        <Swiper
            className="Swiper"
            allowTouchMove={false}
            slidesPerView={1}
            navigation={true}
            scrollbar={{ draggable: true }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(i) => console.log(i)}
        >
            {
                reactData.map((i, index) => {
                    return (
                        <SwiperSlide key={index}  >
                            <SwiperSlideItem data={i} setGitClone={setGitClone} gitClone={gitClone} copyLink={copyLink} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}

export default TeamWorkSwiper;