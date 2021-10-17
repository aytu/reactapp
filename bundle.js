
document.getElementById("btn").addEventListener("click",function(){
    alert("button clicked");
})
document.getElementById('root').replaceChildren("DONE");
const start = Date.now();
while (Date.now() - start < 2000) {
}

document.write("after page load");
