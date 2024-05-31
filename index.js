import { kiemTraTrungTuyen, tinhTongKet, tinhSoKW, tinhTienThueThuNhap,tinhTienCap} from './method.js'

//Bài 1:
document.getElementById('ketQua').onclick = function (e) {
    //input
    let diemChuan = document.getElementById('diemChuan').value * 1;
    let diemMon1 = document.getElementById('diemMon1').value * 1;
    let diemMon2 = document.getElementById('diemMon2').value * 1;
    let diemMon3 = document.getElementById('diemMon3').value * 1;
    let diemKhuVuc = document.getElementById('khuVuc').value;
    let diemDoiTuong = document.getElementById('doiTuong').value * 1;
    //process
    let diemTongKet = 0;
    let ketQuaKiemTra = '';
    diemTongKet = tinhTongKet(diemMon1, diemMon2, diemMon3, diemKhuVuc, diemDoiTuong);
    ketQuaKiemTra = kiemTraTrungTuyen(diemTongKet, diemChuan, diemMon1, diemMon2, diemMon3);
    //output
    document.getElementById('inNoiDung').innerHTML = `${ketQuaKiemTra} và tổng số điểm bạn đạt được là :${diemTongKet}`
}

//Bài 2:
document.getElementById('tinhSoDien').onclick = function (e) {
    //input:hoTen(str),soKW(number)
    let hoTen = document.getElementById('nhapHoTen').value;
    let soKW = document.getElementById('nhapSoDien').value * 1;
    //process:
    let tinhSoDien = 0;
    tinhSoDien = tinhSoKW(soKW);
    //output:
    document.getElementById('outPut').innerHTML = `Chủ hộ: ${hoTen} có số điện tháng này là: ${soKW} KW và cần phải trả là: ${tinhSoDien.toLocaleString('vi')} VNĐ`
}

//Bài 3:
document.getElementById('tinhThue').onclick = function (e) {
    //input:hoTen(str),tongTNNam(number),soNguoiPhuThuoc(number)
    let nhapHoTen=document.getElementById('hoTen').value;
    let thuNhapNam=document.getElementById('tongThuNhapNam').value*1;
    let nguoiPhuThuoc=document.getElementById('soNguoiPhuThuoc').value*1;
    //process:
    let tinhTienThueCaNhan=0;
    tinhTienThueCaNhan=tinhTienThueThuNhap(thuNhapNam,nguoiPhuThuoc);
    //output:
    document.getElementById('outPut1').innerHTML=`Thuế thu nhập cá nhân ${nhapHoTen} phải trả là: ${tinhTienThueCaNhan.toLocaleString('vi')
    } VNĐ`
}

//Bài 4:
document.getElementById('tinhTienCap').onclick=function(e){
    //input:maKH(str),loaiKH(str),soKetNoi(number),soKenhCaoCap(number)
    let maKH=document.getElementById('maKH').value;
    let loaiKH=document.getElementById('customerType').value;
    let soKetNoi=document.getElementById('soKetNoi').value*1;
    let soKenh=document.getElementById('soKenh').value*1;
    //process:
    let tongTienCap=0;
    tongTienCap=tinhTienCap(maKH,loaiKH,soKetNoi,soKenh)
    //output:
    document.getElementById('inTienCap').innerHTML=tongTienCap;
}