const printPosts = () => {
    let postsCollection = {};
    $("").empty();
    $.ajax({
        url: "https://blog-6g.firebaseio.com/team1.json",
        method: "GET",
        success: (response) => {
            console.log(response)
            postsCollection = response;
            $.each(postsCollection, (i, value) => {
                if (value.blockDisplay === "list") {
                    $(".ctn__suggested").append(`
                <div class="item__preview d-flex justify-content-between">
                <div class="left mr-3 d-flex flex-column desc">
                <span class="category">${value.category}<i class="ml-2">Popular topic</i></span>
                    <h2 class="title__item">${value.title}</h2>
                    <span class="description">${value.content}</span>
                    <div class="d-flex justify-content-between">
                        <div class=" mt-3 mr-2 ellipsis">
                            <p class="ellipsis"><span class="autor"></span>${value.author}<span
                                class="group">${value.group}
                                                        </span></p>
                            <p class="ellipsis">
                                <span class="timeago">${value.date}</span> .
                                                        <span class="read">${value.minute}</span>
                                <span class="icon-star1 "></span>
                            </p>
            
            
                        </div>
                        <div class="mt-3 ml-2">
                            <span class="icon-bookmark-o"></span>
                            <span class="icon-navigation-more d-none d-md-inline-block"></span>
                        </div>
                    </div>
                </div>
                <div class="item__image d-flex img__post">
                    <img src='${value.imgDataSquare}'
                        alt="">
                                        </div>
                </div>
                `)
                } if (value.blockDisplay === "featured") {
                    $("#featured-post").append(`
                    <div class=" d-flex justify-content-between  flex-column item__preview hero__item hero__left">
                    <div class="item__image d-flex img__post">
                        <img src='${value.imgDataLarge}'
                            alt="">
                    </div>
                    <div class="left d-flex flex-column desc mt-2">
                        <h2 class="title__item">${value.title}</h2>
                        <p class="description">Use this promo code to land yourself a new lady. (ME!) Exclusions
                            apply.</p>
                        <div class="d-flex justify-content-between">
                            <div class=" mt-3 mr-2 ellipsis">
                                <p class="ellipsis"><span class="autor">Javascript Jeep🚙💨</span> in <span
                                        class="group">Better
                                        Programming</span></p>
                                <p class="ellipsis">
                                    <span class="timeago">a few hours ago</span> .
                                    <span class="read">2 min read</span>
                                    <span class="icon-star1 "></span>
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
                `)
                }
            })
        }
    })
}
printPosts()


