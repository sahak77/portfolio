
import copy from 'copy-to-clipboard';

import { useState } from "react";
import SwiperCore, { Navigation, A11y, Pagination } from 'swiper';

import WorksHead from "./Components/WorksHead";
import JsfunSwiper from "./Swipers/JsFunSwiper";
import ReactSwiper from "./Swipers/ReactSwiper";
import ReactNativeSwiper from "./Swipers/ReactNativeSwiper";

import "./Works.css"
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, A11y, Pagination]);

const WorksScreen = () => {

    const [page, setPage] = useState("react")
    const [gitClone, setGitClone] = useState("git clone link")

    const copyLink = (text) => {
        copy(text)
        setGitClone("Link Copied!");
        setTimeout(() => {
            setGitClone("git clone link")
        }, 2000);
    }

    return (
        <div className="WorksContainer">
            <WorksHead setPage={setPage} page={page} />
            {
                page === "react"
                    ? <ReactSwiper gitClone={gitClone} setGitClone={setGitClone} copyLink={copyLink} />
                    : page === "reactNative"
                        ? <ReactNativeSwiper gitClone={gitClone} setGitClone={setGitClone} copyLink={copyLink} />
                        : <JsfunSwiper gitClone={gitClone} setGitClone={setGitClone} copyLink={copyLink} />
            }
        </div>
    );
};

export default WorksScreen