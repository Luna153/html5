let storage = localStorage
function doFirst() {
    if (storage['addItemList'] == null) {
        storage['addItemList'] = ''
    }

    //storge.setItem['addItemList', '']



    //先幫每個 Add Cart 建立事件聆聽
    let list = document.querySelectorAll('.addButton') // list 是陣列
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function (e) {
            // 箭頭函數和 this 不能同時使用 --> 
            // 使用箭頭函數的 this 會指向windows 而非物件本身
            // alert(e.target.id)
            // alert(this.id)
            // alert(this)

            // 要找 .addButton 本身物件的 id 內的 input 的 value 值 -->
            // 用 selector 找
            // let teddyInfo = document.querySelector(`#A1001 input`).value
            let teddyInfo = document.querySelector(`#${e.target.id} input`).value

            addItem(e.target.id, teddyInfo) //呼叫
        })
    }
}
function addItem(itemId, itemValue) {  //宣告
    // alert(`${itemId}: ${itemValue}`)
    let image = document.createElement('img')

    image.src = `imgs/` + itemValue.split('|')[1]
    // 字串.split(delimiter)
    // 字串.split-->切割成陣列(找字串方法)
    // 陣列.glue/join-->組成字串(找陣列方法)

    let title = document.createElement('span')
    title.innerText = itemValue.split('|')[0]

    let price = document.createElement('span')
    price.innerText = itemValue.split('|')[2]

    let newItem = document.getElementById('newItem')
    //先判斷此處是否已有物件，如果有要先刪除
    // alert(newItem.childNodes.length)
    // while(newItem.childNodes.length >=1 ){
    //     newItem.removeChild(newItem.firstChild)
    // }

    newItem.innerHTML = ''

    // 再顯示物件
    newItem.appendChild(image)
    newItem.appendChild(title)
    newItem.appendChild(price)

    // 存入 storage

    if (storage[itemId]) {
        // 買過會跳出視窗提示
        alert(`You have checked`)
    } else {
        // 沒買過才會存入 storage
        storage['addItemList'] += `${itemId}, `
        storage.setItem(itemId, itemValue)
    }

    // 計算購買數量和小計
    let itemString = storage.getItem('addItemList')
    let items = itemString.substring(0, itemString.length - 2).split(', ')
    //  substring 字串擷取子字串
    // 先處理字串再處理陣列
    // alert(items.length) //['A1001','A1005','A1003','A1006']
    // console.log(items)

    for(let i =0 ; i <itemId.length ; i++){
        let itemInfo = storage.getItem(items[i])
        subtotal += parseInt(itemInfo.split('|')[2])
        
    }

    document.getElementById('itemCount').innerText = items.length
    // document.getElementById('subtotal').innerText = subtotal 
    document.getElementById('subtotal').innerText = '123' 
}

window.addEventListener('load', doFirst);