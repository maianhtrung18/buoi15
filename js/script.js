function tinhDiem(){
    var mon1 = document.getElementById("mon1").value;
    var mon2 = document.getElementById("mon2").value;
    var mon3 = document.getElementById("mon3").value;
    var diemChuan = document.getElementById("diemChuan").value;
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = document.getElementById("doiTuong").value;
    var tongDiem = 0;
    
    if(mon1 == "" || mon2 == "" || mon3 == ""){
        document.getElementById("kqKetQua").innerHTML = "Hãy nhập điểm";
        return;
    }

    mon1 = Number(mon1);
    mon2 = Number(mon2);
    mon3 = Number(mon3);
    diemChuan = Number(diemChuan);
    khuVuc = Number(khuVuc);
    doiTuong = Number(doiTuong);

    if((mon1<0 || mon1>10) || (mon2<0 || mon2>10) || (mon3<0 || mon3>10) || (diemChuan<0 || diemChuan>30)){
        document.getElementById("kqKetQua").innerHTML = "Nhập sai điểm";
    }
    else{
        if(mon1 == 0 || mon2 == 0 || mon3 == 0){
            document.getElementById("kqKetQua").innerHTML = "Failed";
        }
        else{
            tongDiem = mon1 + mon2 + mon3 + khuVuc + doiTuong;
            if(tongDiem >= diemChuan){
                document.getElementById("kqKetQua").innerHTML = "Passed";
            }
            else{
                document.getElementById("kqKetQua").innerHTML = "Failed";
            }
        }
    }
}

document.getElementById("ketqua").onclick = tinhDiem;




const KW_50_DAU = 500;
const KW_51_100 = 650;
const KW_101_200 = 850;
const KW_201_350 = 1100;
const KW_TREN_350 = 1300;

function tinhTienDien(){
    var soKw = document.getElementById("soKw").value;
    soKw = Number(soKw);
    console.log(soKw);
    document.getElementById("kqTinhTien").innerHTML = tinh(soKw).toLocaleString();
}

function tinh(soKw){
    var soTien = 0;
    if(soKw>=0 && soKw<=50){
        soTien = KW_50_DAU * soKw;
    }
    else if(soKw>50 && soKw<=100){
        soTien = KW_50_DAU * 50 + (soKw - 50) * KW_51_100;
    }
    else if(soKw>100 && soKw<=200){
        soTien = KW_50_DAU * 50 + KW_51_100 * 50 + (soKw - 100) * KW_101_200;
    }
    else if(soKw>200 && soKw<=350){
        soTien = KW_50_DAU * 50 + KW_51_100 * 50 + KW_101_200 * 100 + (soKw - 200) * KW_201_350;
    }
    else if(soKw>350){
        soTien = KW_50_DAU * 50 + KW_51_100 * 50 + KW_101_200 * 100 + KW_201_350 * 150 + (soKw - 350) * KW_TREN_350;
    }
    return soTien;
}

document.getElementById("tinhTien").onclick = tinhTienDien;