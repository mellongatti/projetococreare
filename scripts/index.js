function show(item){
    let imgClass = document.getElementById("image");
    let tweetClass = document.getElementById("tweet");
    if (item === 'image'){
        imgClass.className = "postimage-responsive-tweets postimage-responsive-active"
        tweetClass.className = "postimage-responsive-tweets"
    }
    if (item === 'tweet') {
        tweetClass.className = "postimage-responsive-tweets postimage-responsive-active"
        imgClass.className = "postimage-responsive-tweets"
    }
}
