function doFirst() {
    //先跟 HTML 畫面產生關聯
    image = document.getElementById('image')
    rightbox = document.getElementById('rightbox')



    //再建事件聆聽功能
    image.addEventListener('dragstart', startDrag)
    image.addEventListener('dragend', endDrag)

    // rightbox.addEventListener('dragenter', e => e.preventDefault())
    rightbox.addEventListener('dragover', e => e.preventDefault())
    rightbox.addEventListener('drop', dropped)
}
function startDrag(e) {
    let data = `<img src="${image.src}" alt="${image.alt}">`
    // e.dataTransfer.setData('image/png', data)
    //不要寫資料型態 當很多圖的時候會抓不到是哪一個image/png圖檔
    //setData 命名 = getData 就好
    e.dataTransfer.setData('Shin', data)

}
function endDrag() {
    // image.style.visibility='hidden'
    image.style.display = 'none'
}
function dropped(e) {
    e.preventDefault()
    // rightbox.innerHTML = e.dataTransfer.getData('image/png')
    rightbox.innerHTML = e.dataTransfer.getData('Shin')
}

window.addEventListener('load', doFirst)
