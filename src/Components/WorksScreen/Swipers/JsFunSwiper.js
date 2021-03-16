import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperSlideItem from '../Components/SwiperSlideItem';

const JsfunSwiper = ({ gitClone, setGitClone, copyLink }) => {

    const jsFunData = [
        {
            name: "Line sorting",
            description: "Line sorting animation using algorithms",
            used: "HTML, Javascript, p5.js",
            github: "https://github.com/sahak77/JS_Fun/tree/master/line_sort_animation",
            webPage: "https://js-fun-ead8b.web.app/line_sort_animation/",
            video: "",
            gitClone: "https://github.com/sahak77/JS_Fun.git"
        },
        {
            name: "Game of Life",
            description: "there are 6 characters with different stats (movment, lifetime etc. ) and they wont to bettle",
            used: "HTML, Javascript, p5.js",
            github: "https://github.com/sahak77/JS_Fun/tree/master/Game_of_Life",
            webPage: "https://js-fun-ead8b.web.app/Game_of_Life/",
            video: "",
            gitClone: "https://github.com/sahak77/JS_Fun.git"
        },
        {
            name: "Snake Game",
            description: "simple Snake Game",
            used: "HTML, Javascript",
            github: "https://github.com/sahak77/JS_Fun/tree/master/snake_game",
            webPage: "https://js-fun-ead8b.web.app/snake_game/",
            video: "",
            gitClone: "https://github.com/sahak77/JS_Fun.git"
        },
        {
            name: "Brick Ball Game",
            description: "simple Brick Ball Game",
            used: "HTML, Javascript",
            github: "https://github.com/sahak77/JS_Fun/tree/master/Bricks_Ball_game",
            webPage: "https://js-fun-ead8b.web.app/Bricks_Ball_game/",
            video: "",
            gitClone: "https://github.com/sahak77/JS_Fun.git"
        },
        {
            name: "X_&_O game",
            description: "simple X_&_O game",
            used: "HTML, Javascript",
            github: "https://github.com/sahak77/JS_Fun/tree/master/X_%26_O_game",
            webPage: "https://js-fun-ead8b.web.app/X_&_O_game/",
            video: "",
            gitClone: "https://github.com/sahak77/JS_Fun.git"
        },
        {
            name: "Loading animation",
            description: "loading animation uing CSS",
            used: "HTML, CSS, Jquery",
            github: "https://github.com/sahak77/JS_Fun/tree/master/lodaing_animation",
            webPage: "https://js-fun-ead8b.web.app/lodaing_animation/",
            video: "",
            gitClone: "https://github.com/sahak77/JS_Fun.git"
        }
    ]

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
                jsFunData.map((i, index) => {
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

export default JsfunSwiper;