const WhoToFollowListItem = (who) => {
    return(`
    <a class="list-group-item" href="#">
        <div class="row">
            <div class="col col-xxl-2 col-xl-2 col-lg-2 d-flex align-items-center">
                <img src=../../images/${who.avatarIcon} class="rounded-circle w-100">
            </div>
            <div class="col col-xxl-6 col-xl-6 col-lg-6">
                <span class="topic">${who.userName} <i class="fa fa-check-circle"></i></span><br>
                <span class="subtopic">@${who.handle}</span>
            </div>
            <div class="col col-xxl-4 col-xl-4 col-lg-4">
                <button class="btn btn-primary rounded-pill w-100">Follow</button>
            </div>
        </div>
    </a>`
    );
}
export default WhoToFollowListItem;

