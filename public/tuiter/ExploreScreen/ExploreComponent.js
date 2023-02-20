import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row bottom-padding">
                <div class="col col-11">
                    <div class="form">
                        <i class="fa fa-search"></i>
                        <input type="text" class="form-control form-input rounded-pill" placeholder="Search Tuiter">
                    </div>
                </div>
                <div class="col col-1 d-flex align-items-center">
                    <i class="fa fa-cog fa-2x text-primary"></i>
                </div>
            </div>
           <ul class="nav nav-tabs flex-nowrap">
                <li class="nav-item">
                    <a class="nav-link active text-nowrap" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-md-block" href="#">Entertainment</a>
                </li>
            </ul>
           <div class="top-padding card">
                <img src="../../images/starship.webp" class="w-100">
                <div class="card-img-overlay card-inverse d-flex align-items-end">
                    <h4 class="image-overlay">
                        SpaceX's Starship
                    </h4>
                </div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
