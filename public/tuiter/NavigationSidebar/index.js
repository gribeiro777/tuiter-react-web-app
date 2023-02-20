
const init = () => {
    $('#wd-navbar').append(`
   <div class="container">
       ${NavigationSidebar()}
   </div>
`);
}
$(init)

const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <li class="list-group-item">
        <i class="fab fa-twitter"></i>
    </li>
    <a class="list-group-item" href="../home.html">
        <i class="fas fa-home"></i> <span class="d-xl-inline-block d-none">Home</span>
    </a>
    <a class="list-group-item active" href="index.html">
        <i class="fas fa-hashtag"></i> <span class="d-xl-inline-block d-none">Explore</span>
    </a>
    <a class="list-group-item" href="../notifications.html">
        <i class="fas fa-bell"></i> <span class="d-xl-inline-block d-none">Notifications</span>
    </a>
    <a class="list-group-item" href="../messages.html">
        <i class="fas fa-envelope"></i> <span class="d-xl-inline-block d-none">Messages</span>
    </a>
    <a class="list-group-item" href="../bookmarks/index.html">
        <i class="fas fa-bookmark"></i> <span class="d-xl-inline-block d-none">Bookmarks</span>
    </a>
    <a class="list-group-item" href="../lists.html">
        <i class="fas fa-list"></i> <span class="d-xl-inline-block d-none">Lists</span>
    </a>
    <a class="list-group-item" href="../more.html">
        <i class="fas fa-ellipsis-h"></i> <span class="d-xl-inline-block d-none">More</span>
    </a>
   </div>
   <div class="d-grid mt-2">
     <a href="../tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

