let blockBorderExp = document.querySelectorAll('.blockBorderExp')
let numRank = document.querySelectorAll('.numRank')
let blockbackGreen = document.querySelectorAll('.blockbackGreen')

let nowLvl;
let nowExp
let topFull = []
blockBorderExp.forEach((e)=>{
    nowExp = e.children[1].style.height.split('px').join('')
    nowLvl = e.children[2].innerText
    topFull.push([nowLvl, nowExp])
})




function upgrade(arr, sec, index, power){
    sec = sec * 1000
    setInterval(()=>{
        
        arr[1]+=power
        blockBorderExp[index].children[1].style.height = arr[1] + 'px'
        if (arr[1] >=50){
            arr[0] = Number(arr[0])+1
            blockBorderExp[index].children[2].innerText = arr[0]
            arr[1] = 0
        }
    },sec)
}

upgrade(topFull[0],1.5,0, 7)
upgrade(topFull[1],2,1, 1)
upgrade(topFull[2],1,2, 3)
upgrade(topFull[3],1.2,3, 2)
upgrade(topFull[4],1.1,4, 1,5)
upgrade(topFull[5],1.5,5, 0,8)
upgrade(topFull[6],1.9,6, 8)
upgrade(topFull[7],1.2,7, 4)
upgrade(topFull[8],0.4,8, 5)
upgrade(topFull[9],1,9, 3)