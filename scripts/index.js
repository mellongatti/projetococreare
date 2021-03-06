/**
 * Função para trocar a view entre imagens e tweets no mobile
 * @param {recebe o tipo de item retornado do html para fazer a devida verificação} item 
 */
function show(item){
    let imgClass = document.getElementById("image");
    let tweetClass = document.getElementById("tweet");
    let imglist = document.getElementById("imagelist");
    let tweetlist = document.getElementById("tweetlist");
    if (item === 'image'){
        imgClass.className = "postimage-responsive-tweets postimage-responsive-active"
        tweetClass.className = "postimage-responsive-tweets"
        imglist.className = "postimage-imagelist"
        tweetlist.className = "postimage-postlist hide"
    }
    if (item === 'tweet') {
        tweetClass.className = "postimage-responsive-tweets postimage-responsive-active"
        imgClass.className = "postimage-responsive-tweets"
        imglist.className = "postimage-imagelist hide"
        tweetlist.className = "postimage-postlist"
    }
}
