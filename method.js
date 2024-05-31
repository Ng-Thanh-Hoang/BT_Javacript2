export function kiemTraTrungTuyen(diemTK,diemChuan,diemMon1,diemMon2,diemMon3) {//input:(number)
    //process:ketLuan(str)
    let ketLuan='';
    if(diemTK>=diemChuan&&diemMon1!=0&&diemMon2!=0&&diemMon3!=0){
        ketLuan='Bạn đã trúng tuyển';
    }
    else{
        ketLuan='Bạn đã ko trúng tuyển';
    }
    //output
    return ketLuan;
}

export function tinhTongKet(diemMon1,diemMon2,diemMon3,diemKhuVuc,diemDoiTuong){//input:(number)
    //process:tinhTong(number),pointKhuVuc(number),point(doiTuong)
    let tinhTong=0;
    let pointKhuVuc=0;
    let pointDoiTuong=0;
    if(diemKhuVuc==='A'){
        pointKhuVuc+=2;
    }
    else if(diemKhuVuc==='B'){
        pointKhuVuc+=1;
    }
    else if(diemKhuVuc==='C'){
        pointKhuVuc+=0.5;
    }
    else{
        pointKhuVuc=0;
    }
    if(diemDoiTuong==1){
        pointDoiTuong=2.5;
    }
    else if(diemDoiTuong==2){
        pointDoiTuong=1.5;
    }
    else if(diemDoiTuong==3){
        pointDoiTuong=1;
    }
    else{
        pointDoiTuong=0;
    }
    tinhTong=(diemMon1+diemMon2+diemMon3+(pointKhuVuc+pointDoiTuong));
    //output
    return tinhTong;
}

export function tinhSoKW(soKW) {//input:soKW(number)
    //process:tongTien(number)
    let tongTien=0;
    if(soKW<=50){
        tongTien=soKW*500;
    }
    else if(soKW>50&&soKW<=100){
        tongTien=50*500 + (soKW-50)*650;
    }
    else if(soKW>100&&soKW<=200){
        tongTien=50*500 + 50*650 + (soKW-100)*850;
    }
    else if(soKW>200&&soKW<=350){
        tongTien=50*500 + 50*650 + 100*850 + (soKW-150)*1100;
    }
    else{
        tongTien=50*500 + 50*650 + 100*850 + 150*1100 (soKW-350)*1300;
    }
    //output:
    return tongTien;
}

export function tinhTienThueThuNhap(tongTNNam,soNguoiPhuThuoc) {//input: tongTNNam(number),soNguoiPhuThuoc(number)
    //process:thuNhapChiuThue(number),thueSuat(number)
    //Công Thức: Thu Nhập Chịu Thuế=Tổng Thu Nhập Năm - 4tr - Số người phụ thuộc * 1.6tr\
    let thuNhapChiuThue=0;
    thuNhapChiuThue=tongTNNam-4000000-soNguoiPhuThuoc*1600000;
    let thueSuat=0;
    if(thuNhapChiuThue<=60000000){
        thueSuat=5/100;  
    }
    else if(thuNhapChiuThue>60000000 && thuNhapChiuThue<=120000000){
        thueSuat=10/100;
    }
    else if(thuNhapChiuThue>120000000 && thuNhapChiuThue<=210000000){
        thueSuat+=15/100;
    }
    else if(thuNhapChiuThue>210000000 && thuNhapChiuThue<=384000000){
        thueSuat+=20/100;
    }
    else if(thuNhapChiuThue>384000000 && thuNhapChiuThue<=624000000){
        thueSuat+=25/100;
    }
    else if(thuNhapChiuThue>624000000 && thuNhapChiuThue<=960000000){
        thueSuat+=30/100;
    }
    else {
        thueSuat+=35/100;
    }
    //output
    let xuatThueTNCAPhaiTra=thuNhapChiuThue*thueSuat;
    return xuatThueTNCAPhaiTra;
}

export function tinhTienCap(maKhachHang,khachHang,soKetNoi,soKenhCaoCap){//input
    //process:phiXuLyHoaDon(number),phiDichVuCoBan(number),thueKenhCaoCap(number),tongBill(number)
    let phiXuLyHoaDon=0;
    let phiDichVuCoBan=0;
    let thueKenhCaoCap=0;
    let tongBill=0;
    if(khachHang==='Nhà dân'){
        phiXuLyHoaDon+=4.5;
        phiDichVuCoBan+=20.5;
        thueKenhCaoCap=7.5*soKenhCaoCap;
        tongBill=phiXuLyHoaDon+phiDichVuCoBan+thueKenhCaoCap;
    }
    else if(khachHang==='Doanh nghiệp'){
        phiXuLyHoaDon+=15;
        if(soKetNoi<=10){
            phiDichVuCoBan+=75;
        }
        else if(soKetNoi>10){
            phiDichVuCoBan=75+(soKetNoi-10)*5;
        } 
        thueKenhCaoCap=50*soKenhCaoCap;
        tongBill=phiXuLyHoaDon+phiDichVuCoBan+thueKenhCaoCap;
    }
    //output
    return tinhTienCap.innerHTML = `
        <h2>Hóa đơn khách hàng ${maKhachHang}:</h2>
        <p>Phí xử lý hoá đơn: $${phiXuLyHoaDon.toFixed(1)}</p>
        <p>Phí dịch vụ cơ bản: $${phiDichVuCoBan.toFixed(1)}</p>
        <p>Phí thuê kênh cao cấp: $${thueKenhCaoCap.toFixed(1)}</p>
        <p>Tổng cộng: $${tongBill.toFixed(1)}</p>
    `;
}

