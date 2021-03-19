import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperSlideItem from '../Components/SwiperSlideItem';

const TeamWorkSwiper = ({ gitClone, setGitClone, copyLink }) => {

    const reactData = [
        {
            name: "Alias",
            description: "app by GilazLPC",
            used: "react-native, expo, SQLite, react, mongoDB(mongoose), node, express",
            github: "",
            webPage: "https://play.google.com/store/apps/details?id=com.gilaz.alias",
            video: "",
            gitClone: ""
        },
        {
            name: "Planterre",
            description: "app by GilazLPC",
            used: "react-native, expo, SQLite",
            github: "",
            webPage: "https://play.google.com/store/apps/details?id=com.gilaz.planterre",
            video: "",
            gitClone: ""
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