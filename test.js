let data = {}
let hasil = 0

let troli = document.querySelector("#troli")
let jumlahPaparan = document.querySelector('#jumlah')

function tambahData(dapatkanBarang){
    if(dapatkanBarang.nama in data){
        data[dapatkanBarang.nama].jumlah++
    } else {
        data[dapatkanBarang.nama] = {
            harga: dapatkanBarang.harga,
            jumlah: 1  
        }
    }
    kiraHasil()
    renderTroli()
    paparJumlah()
}

function paparJumlah(){
    kosongkanElemen(jumlahPaparan)
    let p = document.createElement("p")
    p.classList.add("bold")
    p.innerHTML = `RM${hasil}`
    jumlahPaparan.appendChild(p)
}

function buangBarang(barangUntukDibuang){
    delete data[barangUntukDibuang]
    kiraHasil()
    renderTroli()
    paparJumlah()
}

function kiraHasil(){
    hasil = 0
    for(let key in data){
        hasil += data[key].harga * data[key].jumlah
    }
}

function renderTroli(){
    kosongkanElemen(troli)
    for(let key in data){
        let div_barang = document.createElement("div")  
        div_barang.classList.add("kedua-padding")
        div_barang.innerHTML = `${key} (${data[key].jumlah}x)`

        let butang = document.createElement("button")
        butang.classList.add("buang")
        butang.setAttribute("onclick", `buangBarang('${key}')`)

        let i = document.createElement("i")
        i.classList.add("fa-solid", "fa-trash")
        butang.appendChild(i)
        butang.insertAdjacentHTML("beforeend", "<span> Buang</span>")

        let div_butang = document.createElement("div")
        div_butang.appendChild(butang)

        troli.appendChild(div_barang)
        troli.appendChild(div_butang)
    }
}

function kosongkanElemen(elemen) {
    while(elemen.firstChild){
        elemen.removeChild(elemen.firstChild)
    }
}