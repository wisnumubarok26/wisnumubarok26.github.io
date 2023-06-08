let inputUser = document.getElementById("date")
inputUser.max= new Date().toISOString().split("T")[0];

let hasil = document.getElementById("umur")
let hitungBtn = document.getElementById("hitung")

hitungBtn.addEventListener('click',hitungUmur)

function hitungUmur(){
    let lahir = new Date(inputUser.value)

    let d1 = lahir.getDate()
    let m1 = lahir.getMonth()
    let y1 = lahir.getFullYear()

    let today = new Date()

    let d2 = today.getDate()
    let m2 = today.getMonth()
    let y2 = today.getFullYear()

    let d3,m3,y3

    y3 = y2-y1

    if(m2>=m1){
        m3 = m2-m1
    }else{
        y3--
        m3 = 12+m2-m1
    }

    if(d2 >=d1){
        d3=d2-d1
    }else{
         m3--
        //  d3 = getDaysinMonth(y1,m1)+d2-d1
    }

    if(m3<0){
        m3=11
        y3--
    }
    console.log(y3,m3,d3)

    hasil.innerHTML= `Umur Anda adalah ${y3} Tahun, ${m3} Bulan, ${d3} Hari`
}

// function getDaysinMonth(){
//     return new Date(year,month).getDate();
// }

