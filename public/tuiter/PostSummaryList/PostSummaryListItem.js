const PostSummaryListItem = (post) => {
    return(`
    <a class="list-group-item" href="#">
        <div class="row">
            <div class="col col-10">
                <span class="subtopic">${post.topic}</span><br>
                <span class="topic">
        ${post.userName} <i class="fa fa-check-circle"></i>
      </span>
                <span class="subtopic"> - ${post.time}</span><br>
                <span class="topic">
        ${post.title}
      </span>
            </div>
            <div class="col col-2 d-flex align-items-center">
                <img src="${post.image}" class="mx-auto tuit-image">
            </div>
        </div>
    </a>`
    );
}
export default PostSummaryListItem;

