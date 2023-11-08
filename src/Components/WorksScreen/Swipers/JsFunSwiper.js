import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperSlideItem from '../Components/SwiperSlideItem';

const JsfunSwiper = ({ gitClone, setGitClone, copyLink }) => {

    const jsFunData = [
        {
            name: "Minesweeper",
            description: "Minesweeper game",
            used: "HTML, CSS, Javascript",
            github: "https://github.com/sahak77/JS_Fun/tree/master/minesweeper",
            webPage: "https://js-fun-ead8b.web.app/minesweeper/",
            video: "",
            gitClone: "https://github.com/sahak77/JS_Fun.git"
        },
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
            name: "Hashing algorithm",
            description: "Text hashing algorithm",
            used: "Javascript",
            github: "https://github.com/sahak77/JS_Fun/tree/master/hash",
            webPage: "https://js-fun-ead8b.web.app/hash/",
            video: "",
            gitClone: "https://github.com/sahak77/JS_Fun.git"
        },
        {
            name: "Game of Life",
            description: "simple Game of Life",
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
            name: "tic tac toe game",
            description: "simple tic tac toe game",
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