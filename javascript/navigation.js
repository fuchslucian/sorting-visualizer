var sort_algo = ""
function change_sort_algo(a){
    sort_algo = a
    document.getElementById("visualize").innerHTML = `<p>Visualize ${sort_algo}!</p>`
    document.getElementById("visualize").className = `${sort_algo}`
}
//document.getElementById("dropdown_id").addEventListener("click", x)
document.getElementById("selection_sort").addEventListener("click", function(){
    change_sort_algo("selection sort")
})
document.getElementById("insertion_sort").addEventListener("click", function(){
    change_sort_algo("insertion sort")
})
document.getElementById("bubble_sort").addEventListener("click", function(){
    change_sort_algo("bubble sort")
})
document.getElementById("merge_sort").addEventListener("click", function(){
    change_sort_algo("merge sort")
})
document.getElementById("quik_sort").addEventListener("click", function(){
    change_sort_algo("quik sort")
})
function get_dropdown(){
    if (document.getElementById("dropdown_id").parentNode.className === "navigation-grid-visualizing"){
        return
    }
    var e = document.getElementById("dropdown_id")
    if (e.className === ""){
        e.className = "dropdown"
    }else{
        e.className = ""
    }
}

document.getElementById("dropdown_id").addEventListener("click", get_dropdown)
