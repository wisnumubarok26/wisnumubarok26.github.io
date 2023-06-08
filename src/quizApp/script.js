const soal = [
    {
        pertanyaan:"Apa hewan tercepat di darat?",
        jawaban:[
            {
                text:"Singa",
                pilihan : "false"
            },
            {
                text:"gepard",
                pilihan : "true"
            },
            {
                text:"Harimau",
                pilihan : "false"
            },
            {
                text:"Kuda",
                pilihan : "false"
            },
        ]
    },
    {
        pertanyaan:"Apa nama hewan terbesar di dunia?",
        jawaban:[
            {
                text:"Paus Biru",
                pilihan : "true"
            },
            {
                text:"Gajah",
                pilihan : "false"
            },
            {
                text:"Badak",
                pilihan : "false"
            },
            {
                text:"Jerapah",
                pilihan : "false"
            },
        ]
    },
    {
        pertanyaan:"Hewan apakah yang bisa terbang terpanjang di antara semua hewan?",
        jawaban:[
            {
                text:"Elang",
                pilihan : "false"
            },
            {
                text:"Kupu-kupu",
                pilihan : "false"
            },
            {
                text:"Kakak Tua",
                pilihan : "false"
            },
            {
                text:"Kolibri",
                pilihan : "true"
            },
        ]
    },
    {
        pertanyaan:"Apa hewan yang tidur terpanjang di dunia?",
        jawaban:[
            {
                text:"Beruang Kutub",
                pilihan : "false"
            },
            {
                text:"Buaya",
                pilihan : "false"
            },
            {
                text:"Kelelawar",
                pilihan : "true"
            },
            {
                text:"Katak",
                pilihan : "false"
            },
        ]
    },
    {
        pertanyaan:"Apa nama hewan yang bisa berenang melawan arus sungai?",
        jawaban:[
            {
                text:"Salmon",
                pilihan : "true"
            },
            {
                text:"Paus",
                pilihan : "false"
            },
            {
                text:"Ikan Hiu",
                pilihan : "false"
            },
            {
                text:"Kepiting",
                pilihan : "false"
            },
        ]
    }
]

const soalElement = document.getElementById("soal")
const jawabanButton = document.getElementById("jawaban-btn")
const nextButton = document.getElementById("next-btn")

let soalIndex= 0
let skor = 0

function mulaiQuiz(){
    soalIndex=0
    skor=0
    nextButton.innerHTML="selanjutnya1 "
    tampilkanPertanyaan()
}

 function resetState(){
    nextButton.style.display="none";
    while(jawabanButton.firstChild){
        jawabanButton.removeChild(jawabanButton.firstChild)
    }
 }

function tampilkanPertanyaan(){
    resetState()
    let soalSekarang = soal[soalIndex]
    let noSoal = soalIndex + 1
    soalElement.innerHTML= noSoal + ". "+ soalSekarang.pertanyaan


    soalSekarang.jawaban.forEach(jawaban=>{
        const button = document.createElement("button")
        button.innerHTML = jawaban.text
        button.classList.add("btn")
        jawabanButton.appendChild(button)
        if(jawaban.pilihan){
            button.dataset.pilihan = jawaban.pilihan
        }
        button.addEventListener('click',pilihjawaban)
    })
}

function pilihjawaban(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.pilihan==="true"
    if(isCorrect){
        selectBtn.classList.add("correct")
        skor++
    }else{
        selectBtn.classList.add("incorrect")
    }

    Array.from(jawabanButton.children).forEach(button=>{
        if(button.dataset.pilihan==="true"){
            button.classList.add("correct")
        }
        button.disabled= true;
    })
    nextButton.style.display="block";
}

nextButton.addEventListener("click",()=>{
    if(soalIndex < soal.length){
        handleNextButton()
    }else{
        mulaiQuiz()
    }
})

function handleNextButton(){
    soalIndex++
    if(soalIndex < soal.length){
        tampilkanPertanyaan();
    }else{
        tampilkanSkor()
    }
}

function tampilkanSkor(){
    resetState()
    let nilai = skor/soal.length*100
    soalElement.innerHTML= `kamu mendapatkan skor ${skor}/${soal.length} dengan Nilai ${nilai}`
    nextButton.innerHTML="Ulangi"
    nextButton.style.display="block"
}
mulaiQuiz()