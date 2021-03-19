const WorksHead = ({ setPage, page }) => {
    return (
        <>
            <div className="headText">
                <h2 style={{fontFamily: "system-ui"}}>My Works</h2>
            </div>
            <div className="worksHeadCont">
                <p onClick={() => setPage("react")} className={`${page === "react" ? "worksHeadActiveItem" : "worksHeadItem"}`}>React</p>
                <p onClick={() => setPage("reactNative")} className={`${page === "reactNative" ? "worksHeadActiveItem" : "worksHeadItem"}`}>React-Native</p>
                <p onClick={() => setPage("jsFun")} className={`${page === "jsFun" ? "worksHeadActiveItem" : "worksHeadItem"}`}>JS Fun</p>
                <p onClick={() => setPage("teamWork")} className={`${page === "teamWork" ? "worksHeadActiveItem" : "worksHeadItem"}`}>TeamWork</p>
            </div>
        </>
    );
}

export default WorksHead;