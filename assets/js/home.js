const printPosts = () => {
    let postsCollection = {};
    $("").empty();
    $.ajax({
        url: "https://blog-6g.firebaseio.com/team1.json",
        method: "GET",
        success: (response) => {
            console.log(response)
            let maxMiddle = 0;
            let countPopular = 1;
            postsCollection = response;
            $.each(postsCollection, (i, value) => {
                if (value.blockDisplay === "list") {
                    $(".ctn__suggested").find('.extremePostPreview').remove()
                    $(".ctn__suggested").prepend(`
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
                }
                if (value.blockDisplay === "featured") {
                    $("#featured-post").find('.extremePostPreview').remove()
                    $("#featured-post").html(`
                    <div class=" d-flex justify-content-between  flex-column item__preview hero__item hero__left">
                    <div class="item__image d-flex img__post">
                        <img src='${value.imgDataLarge}'
                            alt="">
                    </div>
                    <div class="left d-flex flex-column desc mt-2">
                        <h2 class="title__item">${value.title}</h2>
                        <p class="description">${value.content}</p>
                        <div class="d-flex justify-content-between">
                            <div class=" mt-3 mr-2 ellipsis">
                                <p class="ellipsis"><span class="autor">${value.author}</span> in <span
                                        class="group">${value.category}</span></p>
                                <p class="ellipsis">
                                    <span class="timeago">${value.date}</span> .
                                    <span class="read">${value.minute} minutes to read</span>
                                    <span class="icon-star1 "></span>
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
                `)
                }
                if (value.blockDisplay === "highlight") {
                    $("#highlight__post").find('.extremePostPreview').remove()
                    $("#highlight__post").html(`
                            <div class=" d-flex justify-content-between  flex-column item__preview hero__item hero__right">
                            <div class="item__image d-flex img__post">
                                <img src="${value.imgDataLarge}" alt="">
                            </div>
                            <div class="left mr d-flex flex-column desc">
                                <h2 class="title__item">${value.title}</h2>
                                <span class="description">${value.content}</span>
                                <div class="d-flex justify-content-between">
                                    <div class=" mt-3 mr-2 ellipsis">
                                        <p class="ellipsis"><span class="autor">${value.author}</span> in <span class="group">${value.category}</span></p>
                                        <p class="ellipsis">
                                            <span class="timeago">${value.date}</span> .
                                            <span class="read">${value.minute} min read</span>
                                            <span class="icon-star1 "></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `)
                }
                if (value.blockDisplay === "middle") {
                    // clean preload image
                    $("#middle__post").find('.extremePostPreview').remove()
                    maxMiddle ++;
                    console.log(i, value)
                    if(maxMiddle <= 3){
                        $("#middle__post").prepend(`
                        <div class=" d-flex justify-content-between  flex-row-reverse flex-md-row item__preview small">
                            <div class="item__image d-flex img__post">
                                <img src="${value.imgDataSquare}" alt="">
                            </div>
                            <div class="left ml-md-3 d-flex flex-column desc">
                                <h2 class="title__item">${value.title}</h2>
                                <span class="description d-block d-md-none">${value.content}</span>
                                <div class="d-flex justify-content-between">
                                    <div class=" mt-1 mr-2 ellipsis">
                                        <p class="ellipsis"><span class="autor">${value.author}</span> in <span class="group">${value.category}</span></p>
                                        <p class="ellipsis">
                                            <span class="timeago">${value.date}</span> .
                                            <span class="read">${value.minute} min read</span>
                                            <span class="icon-star1 "></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `)
                    }
                }
                if (value.blockDisplay === "popular") {
                    $("#popular__post").find('.extremePostPreview').remove()
                    $("#popular__post").append(`
                    <div class="item__preview d-flex justify-content-between">
                        <div class="left mr-3 d-flex flex-column">
                            <h4 class="category_number">${countPopular}</h4>
                        </div>
                        <div class="left mr-3 d-flex flex-column">
                            <h2 class="title__item small">${value.title}</h2>
                            <div class=" mt-3 mr-2 ellipsis">
                                <p class="ellipsis">
                                    <span class="autor">${value.author}</span> in <span class="group">${value.category}</span>
                                </p>
                                <p class="ellipsis">
                                    <span class="timeago">${value.date}</span> .
                                    <span class="read">${value.minute} min read</span>
                                    <span class="icon-star1 "></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    `)
                    countPopular++
                }
                if (value.blockDisplay === "network") {
                    $("#network__post").find('.extremePostPreview').remove()
                    $("#network__post").prepend(`
                    <div class="item__preview d-flex justify-content-between mt-3 mb-2 px-2 py-2">
                            <div class="left mr-3 d-flex flex-column">
                                <span class="active__img"><img src="${value.imgDataNetwork}" alt="" class="medium__avatar"></span>
                            </div>
                            <div class="left mr-1 d-flex flex-column">
                                <h2 class="title__item small">${value.title}</h2>
                                <div class=" mt-3 mr-2 ellipsis">
                                    <p class="ellipsis">
                                        <span class="autor">${value.author}</span> in <span class="group">${value.category}</span>
                                    </p>
                                    <p class="ellipsis">
                                        <span class="timeago">${value.date}</span> .
                                        <span class="read">${value.minute} min read</span>
                                        <span class="icon-star1 "></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    `)
                }
                if (value.blockDisplay === "reading") {
                    $("#reading__post").find('.extremePostPreview').remove()
                    $("#reading__post").prepend(`
                        <div class="item__preview d-flex justify-content-between mt-3 mb-2 px-2 py-2">
                            <div class="left mr-3 d-flex flex-column">
                                <span class="icon__book"><span class="icon-bookmark "></span></span>
                            </div>
                            <div class="left mr-3 d-flex flex-column">
                                <h2 class="title__item small">${value.title}</h2>
                                <div class=" mt-1 mr-2 ellipsis">
                                    <p class="ellipsis">
                                        <span class="autor">${value.author}</span> in <span class="group">${value.category}</span>
                                    </p>
                                    <p class="ellipsis">
                                        <span class="timeago">${value.date}</span> .
                                        <span class="read">${value.minute} min read</span>
                                        <span class="icon-star1 "></span>
                                    </p>
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