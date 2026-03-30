let data = {};
let hasil = 0;

let troli = document.getElementById("senarai-troli");
let paparjumlah = document.getElementById("total-harga");

function tambahData(barang){
    if(data[barang.nama]){
        data[barang.nama].jumlah++;
    } else {
        data[barang.nama] = { harga: barang.harga, jumlah: 1 };
    }
    kiraHasil();
    renderTroli();
}

function buangData(nama){
    if(data[nama].jumlah > 1){
        data[nama].jumlah--; // kurangkan satu
    } else {
        delete data[nama]; // kalau tinggal satu, baru delete
    }
    kiraHasil();
    renderTroli();
}

function kiraHasil(){
    hasil = 0;
    for(let key in data){
        hasil += data[key].harga * data[key].jumlah;
    }
    paparjumlah.textContent = `RM ${hasil.toFixed(2)}`;
}

function renderTroli(){
    troli.innerHTML = "";

    for(let key in data){
        let div_item = document.createElement("div");
        div_item.classList.add("item-troli");

        let nama = document.createElement("span");
        nama.textContent = `${key} (X${data[key].jumlah})`;

        let butang = document.createElement("button");
        butang.classList.add("buang");
        butang.innerHTML = `<i class="fas fa-trash"></i> Buang`;
        butang.onclick = function(){
            buangData(key);
        };

        div_item.appendChild(nama);
        div_item.appendChild(butang);

        troli.appendChild(div_item);
    }

    // jika troli kosong
    if(Object.keys(data).length === 0){
        let kosong = document.createElement("p");
        kosong.style.color = "gray";
        kosong.style.padding = "20px";
        kosong.textContent = "Troli kosong...";
        troli.appendChild(kosong);
    }
}