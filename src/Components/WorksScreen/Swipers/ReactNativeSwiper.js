import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperSlideItem from '../Components/SwiperSlideItem';

const ReactNativeSwiper = ({ gitClone, setGitClone, copyLink }) => {

    const reactNativeData = [
        {
            name: "BadBook",
            description: "simple social app",
            used: "Expo, react-native, node, express, socket, mongoDB(mongoose), firebase",
            github: "https://github.com/sahak77/badBook",
            webPage: "",
            video: "https://drive.google.com/file/d/17_3uZBLPmtFobXQ-EA0sXuw0K_u80CNj/view?usp=sharing",
            gitClone: "https://github.com/sahak77/badBook.git"
        },
        {
            name: "AstroApp",
            description: "simple forum app",
            used: "Expo, react-native, firebase, (react, firebase for admin panel)",
            github: "https://github.com/sahak77/AstroApp",
            webPage: "",
            video: "https://drive.google.com/file/d/1bqG9JhtVi6T95mZTkpN2Nmmllz4EcxNg/view?usp=sharing",
            gitClone: "https://github.com/sahak77/AstroApp.git"
        },
    ]

    return (
        <Swiper
            className="Swiper"
            allowTouchMove={false}
            slidesPerView={1}
            navigation={true}
            scrollbar={{ draggable: true }}
            pagination={{ clickable: true, }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(i) => console.log(i)}
        >
            {
                reactNativeData.map((i, index) => {
                    return (
                        <SwiperSlide key={index} >
                            <SwiperSlideItem data={i} setGitClone={setGitClone} gitClone={gitClone} copyLink={copyLink} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}

export default ReactNativeSwiper;