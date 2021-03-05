function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
async function selection(){
    for (let i = 0; i < numbers.length; i++){
        let minimum = [numbers[i], i]
        for (let y = i+1; y < numbers.length; y++){
            let a = document.getElementById(`${y}`)
            a.style.backgroundColor = "blue"
            await Sleep(1)
            a.style.backgroundColor = "red"
            if (numbers[y] < minimum[0]){
                document.getElementById(`${minimum[1]}`).style.backgroundColor = "red"
                minimum = [numbers[y],y]
                document.getElementById(`${minimum[1]}`).style.backgroundColor = "yellow"
            }
        }
        let a = document.getElementById(`${i}`)
        let b = document.getElementById(`${minimum[1]}`)
        a.style.backgroundColor = "black"
        b.style.backgroundColor = "yellow"
        await Sleep(100)
        let temp = numbers[i]
        numbers[i] = minimum[0]
        numbers[minimum[1]] = temp
        document.getElementById(`${i}`).className = `_${minimum[0]}`
        document.getElementById(`${minimum[1]}`).className = `_${temp}`
        a.style.backgroundColor = "yellow"
        b.style.backgroundColor = "black"
        await Sleep(100)
        a.style.backgroundColor = "red"
        b.style.backgroundColor = "red"
        document.getElementById(`${i}`).style.backgroundColor = "green"
    }
    for (let i = 0; i < numbers.length; i++){
        document.getElementById(`${i}`).style.backgroundColor = "red"
    }
    return
}
async function insertion(){
    var new_array = [numbers[0]]
    for (let i = 1; i < numbers.length; i++){
        document.getElementById(`${i}`).style.backgroundColor = "black"
        var a = true
        for (let y = 0; y < new_array.length; y++){
            if (a){
                document.getElementById(`${y}`).style.backgroundColor = "blue"
                await Sleep(2)
                document.getElementById(`${y}`).style.backgroundColor = "red"
                if (numbers[i] < new_array[y]){
                    new_array.splice(y, 0, numbers[i])
                    document.getElementById(`${i}`).style.backgroundColor = "red"
                    document.getElementById(`${y}`).style.backgroundColor = "black"
                    a = false
                    for (let x = 0; x < new_array.length; x++){
                        document.getElementById(`${x}`).className = `_${new_array[x]}`
                    }
                    await Sleep(8)
                    document.getElementById(`${y}`).style.backgroundColor = "red"
                }
            }
        }
        if (a){
            document.getElementById(`${i}`).style.backgroundColor = "red"
            new_array.push(numbers[i])
        }
        document.getElementById(`${i}`).style.backgroundColor = "red"
    }
    for (let i = 0; i < numbers.length; i++){
        await Sleep(5)
        document.getElementById(`${i}`).style.backgroundColor = "green"
    }
    await Sleep(1000)
    for (let i = 0; i < new_array.length; i++){
        numbers[i] = new_array[i]
        document.getElementById(`${i}`).style.backgroundColor = "red"
    }
    return
}
async function bubble(){
    /*numbers.sort(function(a,b) {
        return a - b;
    })*/
    for (let i = 0; i < numbers.length; i++){
        for (let y = 1; y < numbers.length-i; y++){
            if (numbers[y-1] > numbers[y]){
                document.getElementById(`${y-1}`).style.backgroundColor = "black"
                document.getElementById(`${y}`).style.backgroundColor = "yellow"
            }else{
                document.getElementById(`${y-1}`).style.backgroundColor = "yellow"
                document.getElementById(`${y}`).style.backgroundColor = "black"
            }
            if (numbers[y-1] > numbers[y]){
                let temp = numbers[y-1]
                numbers[y-1] = numbers[y]
                numbers[y] = temp 
                document.getElementById(`${y-1}`).className = `_${numbers[y-1]}`
                document.getElementById(`${y}`).className = `_${numbers[y]}`
                document.getElementById(`${y-1}`).style.backgroundColor = "black"
                document.getElementById(`${y}`).style.backgroundColor = "yellow"
                //numbers[y] = 10
            }
            await Sleep(1)
            document.getElementById(`${y-1}`).style.backgroundColor = "red"
            document.getElementById(`${y}`).style.backgroundColor = "red"
        }
        document.getElementById(`${numbers.length-i-1}`).style.backgroundColor = "green"
        await Sleep(1)
    }
    await Sleep(80)
    for (let i = 0; i < numbers.length; i++){
        document.getElementById(`${i}`).style.backgroundColor = "red"
    }
}
async function MergeSort(l,r) {
    if (l < r){
        let m = Math.floor((l+r-1)/2)
        await MergeSort(l,m)
        await MergeSort(m+1,r)
        await merge_(l,m,r)
    }
    return
  }
  
async function merge_(l,m,r) {
    let divider = m+1
    let l_cache = l
    let  out_list = []
    for (let i = 0; i < r-l_cache+1; i++){
        if (l > m){
            out_list.push([numbers[divider],divider,false,false])
            divider += 1
        }else if(divider > r){
            out_list.push([numbers[l],l,false, false])
            l += 1
        }else if(numbers[l] < numbers[divider]){
            out_list.push([numbers[l],l, l, divider])
            l += 1
        }else if(numbers[l] >= numbers[divider]){
            out_list.push([numbers[divider],divider, divider, l])
            divider += 1
        }
    }
    for (let i = 0; i < out_list.length; i++){
        if (out_list[i][2] !== false){
            document.getElementById(`${out_list[i][2]}`).style.backgroundColor = "black"
            document.getElementById(`${out_list[i][3]}`).style.backgroundColor = "black"
        }
        numbers[i+l_cache] = out_list[i][0]
        let cache = document.getElementById(`${i+l_cache}`).className
        document.getElementById(`${i+l_cache}`).className = `_${out_list[i][0]}`
        for (let y = i+l_cache+1; y <= out_list[i][1]; y++){
            let a = cache
            cache = document.getElementById(`${y}`).className
            document.getElementById(`${y}`).className = a
        }
        await Sleep(20)
        if (out_list[i][2] !== false){
            document.getElementById(`${out_list[i][2]}`).style.backgroundColor = "red"
            document.getElementById(`${out_list[i][3]}`).style.backgroundColor = "red"
        }
    }
    return
}
async function merge(){
    await MergeSort(0,numbers.length-1)
    for (let i = 0; i < numbers.length; i++){
        await Sleep(5)
        document.getElementById(`${i}`).style.backgroundColor = "green"
    }
    await Sleep(1000)
    for (let i = 0; i < numbers.length; i++){
        document.getElementById(`${i}`).style.backgroundColor = "red"
    }
    return
}
async function part(low, high){
    var pivot = numbers[high]
    var low_cache = low
    var high_cache = high
    document.getElementById(`${high}`).style.backgroundColor = "black"
    document.getElementById(`${low}`).style.backgroundColor = "blue"
    await Sleep(15)
    /*document.getElementById(`${high}`).style.backgroundColor = "red"
   //await Sleep(15)
    document.getElementById(`${low}`).style.backgroundColor = "red"*/
    while (low < high){
        while (high > low_cache && numbers[high] >= pivot){
            await Sleep(15)
            high = high -1
            document.getElementById(`${high+1}`).style.backgroundColor = "red"
            document.getElementById(`${high}`).style.backgroundColor = "black"
        }
        while (low < high_cache && numbers[low] < pivot){
            await Sleep(15)
            low = low+1
            document.getElementById(`${low-1}`).style.backgroundColor = "red"
            document.getElementById(`${low}`).style.backgroundColor = "blue"
        }
        if (low < high){
            let cache = numbers[low]
            numbers[low] = numbers[high]
            numbers[high] = cache
            document.getElementById(`${low}`).className = `_${numbers[low]}`
            document.getElementById(`${high}`).className = `_${numbers[high]}`
        }else{
            break
        }
    }
    if (numbers[low] > pivot){
        let cache = numbers[low]
        numbers[low] = numbers[high_cache]
        numbers[high_cache] = cache
        document.getElementById(`${low}`).className = `_${numbers[low]}`
        document.getElementById(`${high_cache}`).className = `_${numbers[high_cache]}`
    }
    document.getElementById(`${low}`).style.backgroundColor = "red"
    document.getElementById(`${high}`).style.backgroundColor = "red"
    return low
}
async function quick_sort(low, high){
    if (low < high){
        let pivot = await part(low, high)
        await quick_sort(low, pivot-1)
        await quick_sort(pivot+1, high)
    }
}
async function quik(){
    await quick_sort(0,numbers.length-1)
    /*numbers.sort(function(a,b) {
        return a - b;
    })*/
    /*for (let i = 0; i < numbers.length; i++){
        //await Sleep(20)
        document.getElementById(`${i}`).className = `_${numbers[i]}`
    }*/
    for (let i = 0; i < numbers.length; i++){
        await Sleep(5)
        document.getElementById(`${i}`).style.backgroundColor = "green"
    }
    await Sleep(1000)
    for (let i = 0; i < numbers.length; i++){
        document.getElementById(`${i}`).style.backgroundColor = "red"
    }
    return
}


async function visualize_sort(){
    if (document.getElementById("visualize").parentNode.className === "navigation-grid-visualizing"){
        return
    }
    document.getElementById("dropdown_id").parentNode.className = "navigation-grid-visualizing"
    document.getElementById("visualize").parentNode.className = "navigation-grid-visualizing"
    document.getElementById("generate-array").parentNode.className = "navigation-grid-visualizing"
    document.getElementById("dropdown_id").className = ""
    var al = document.getElementById("visualize").className
    if (al === "selection sort"){
        await selection()
    }else if (al === "insertion sort"){
        await insertion()
    }else if (al === "bubble sort"){
        await bubble()
    }else if (al === "merge sort"){
        await merge()
    }else if (al === "quik sort"){
        await quik()
    }else{
        document.getElementById("visualize").innerHTML = "<p>Pick an algorithm!</p>"
    }
    document.getElementById("dropdown_id").parentNode.className = "navigation-grid-normal"
    document.getElementById("visualize").parentNode.className = "navigation-grid-normal"
    document.getElementById("generate-array").parentNode.className = "navigation-grid-normal"
}
document.getElementById("visualize").addEventListener("click", visualize_sort)