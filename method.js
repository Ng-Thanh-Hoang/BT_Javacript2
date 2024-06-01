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
    //process:thueThuNhap(number),thueCaNhan(number)
    //Công Thức: Thu Nhập Chịu Thuế=Tổng Thu Nhập Năm - 4tr - Số người phụ thuộc * 1.6tr\
    let thueThuNhap=0;
    thueThuNhap=tongTNNam-4000000-soNguoiPhuThuoc*1600000;
    let thueCaNhan = 0;
    if (0 < thueThuNhap && thueThuNhap <= 60e+6) {
        thueCaNhan = thueThuNhap * (5 / 100); 
    } else if(60e+6 < thueThuNhap && thueThuNhap <= 120e+6) {
        // 3e+6 = 60e+6 * 0.05
        thueCaNhan = 3e+6 + (thueThuNhap - 60e+6) * (10 / 100);
    } else if(120e+6 < thueThuNhap && thueThuNhap <= 210e+6) {
        // 9e+6 = 60e+6 * 0.05  6+0e+6 * 0.1
        thueCaNhan = 9e+6 + (thueThuNhap - 120e+6) * (15 / 100);
    } else if(210e+6 < thueThuNhap && thueThuNhap <= 384e+6) {
        // 22500000 = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15
        thueCaNhan = 22500000 + (thueThuNhap - 210e+6) * (20 / 100);
    } else if(384e+6 < thueThuNhap && thueThuNhap <= 624e+6) {
        // 57300000 = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2
        thueCaNhan = 57300000 + (thueThuNhap - 384e+6) * (25 / 100);
    } else if(624e+6 < thueThuNhap && thueThuNhap <= 960e+6) {
        // 117300000 = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25
        thueCaNhan = 117300000 + (thueThuNhap - 624e+6) * (30 / 100);
    } else if(960e+6 < thueThuNhap) {
        // 218100000 = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + 336e+6 * 0.35
        thueCaNhan = 218100000 + (thueThuNhap - 960e+6) * (35 / 100);
    }
    //output
    return thueCaNhan;
}

export function tinhTienCap(maKhachHang,khachHang,soKetNoi,soKenhCaoCap){//input
    //process:phiXuLyHoaDon(number),phiDichVuCoBan(number),thueKenhCaoCap(number),tongBill(number)
    let phiXuLyHoaDon=0;
    let phiDichVuCoBan=0;
    let thueKenhCaoCap=0;
    let tongBill=0;
    if(khachHang==='nhaDan'){
        phiXuLyHoaDon+=4.5;
        phiDichVuCoBan+=20.5;
        thueKenhCaoCap=7.5*soKenhCaoCap;
        tongBill=phiXuLyHoaDon+phiDichVuCoBan+thueKenhCaoCap;
    }
    else if(khachHang==='doanhNghiep'){
        phiXuLyHoaDon+=15;
        if(soKetNoi<=10){
            phiDichVuCoBan=7.5*soKetNoi;
        }
        else if(soKetNoi>10){
            phiDichVuCoBan=75+(soKetNoi-10)*5;
        } 
        thueKenhCaoCap=50*soKenhCaoCap;
        tongBill=phiXuLyHoaDon+phiDichVuCoBan+thueKenhCaoCap;
    }
    //output
    return tinhTienCap.innerHTML = `
        <h2>Hóa đơn khách hàng ${maKhachHang} có:</h2>
        <p>Phí xử lý hoá đơn: $${phiXuLyHoaDon.toFixed(1)}</p>
        <p>Phí dịch vụ cơ bản: $${phiDichVuCoBan.toFixed(1)}</p>
        <p>Phí thuê kênh cao cấp: $${thueKenhCaoCap.toFixed(1)}</p>
        <p>Tổng cộng: $${tongBill.toFixed(1)}</p>
    `;
}

