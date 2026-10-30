var danhSachPhim = [
    {
    id: 1,
    ten: "Oggy und die Kakerlaken | Oggy hat einen grünen Daumen | Ganze Folge in HD",
    duongDanAnh: "oggy.png",
    duongDanYoutube: "https://www.youtube.com/embed/Zi7DnLaXp-Y?si=4BYhuZh3z_m72qFn",
    },
    {
    id: 2,
    ten: "Winx Club - Winx Công chúa phép thuật - Phần 8 Tập 1 [trọn bộ]",
    duongDanAnh: "win.jpg",
    duongDanYoutube: "https://www.youtube.com/embed/7MXcjgVRMFc?si=g1Z_Q3wKe_14GtpL",
    },
    {
    id: 3,
    ten: "ĐỘI CHÓ CỨU HỘ PAW PATROL MINI | Tập 20: Giải Cứu Những Chú Mèo Hoàng Gia | Phim hoạt hình",
    duongDanAnh: "doicho.pjg",
    duongDanYoutube: "https://www.youtube.com/embed/7T8K3jKVCUs?si=hltCrhYO77lCM7hn",
    },
    {
    id: 4,
    ten: "Larva Tuba | BÉO PHÌ 2🍟 ẤU TRÙNG TINH NGHỊCH 🥗 NHỮNG CHÚ SÂU VUI NHỘN 🍿 PHIM HOẠT HÌNH HAY NHẤT 2025",
    duongDanAnh: "lava.pjg",
    duongDanYoutube: "https://www.youtube.com/embed/cqM_HFH3ueg?si=2DpJms9b5U-SDs1I",
    },
    {
    id: 5,
    ten: "Cô Bé Masha và Chú Gấu Xiếc 🎁🌟 Những điều tuyệt vời nhất trong tháng 😊 Tuyển tập các tập phim",
    duongDanAnh: "chugau.pjg",
    duongDanYoutube: "https://www.youtube.com/embed/rpn0DMB2OYc?si=m8dT05OUgsxqrZFG",
    }
];
function chonPhim(id){
    for (let i = 0; i < danhSachPhim.length; i++){
        if(danhSachPhim[i].id == id){
            document.getElementsByClassName("banner-img")[0].src = danhSachPhim[i].duongDanYoutube;
        }
    }
}