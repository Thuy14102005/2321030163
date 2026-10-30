var danhSachVid = [
    {
    id: 1,
    ten: "3 PHẢI 6 ĐỪNG - Quân A.P (Official MV)",
    duongDanAnh: "quanap.avif",
    duongDanYoutube: "https://www.youtube.com/embed/INJuqE_34eQ?si=zVEX03BXbatwgQgL",
    },
    {
    id: 2,
    ten: "QUÂN A.P | BÔNG HOA ĐẸP NHẤT | OFFICIAL MUSIC VIDEO",
    duongDanAnh: "baihat2.avif",
    duongDanYoutube: "https://www.youtube.com/embed/fTXd-DpN3AI?si=8sVvElWuPjHFg9gk",
    },
    {
    id: 3,
    ten: "SUÝT NỮA THÌ | ANDIEZ | In The Moonlight Show",
    duongDanAnh: "baihat3.avif",
    duongDanYoutube: "https://www.youtube.com/embed/9GLwkGkMIxc?si=Le_4UyoM63VXv5AP",
    },
    {
    id: 4,
    ten: "Lửa Gần Rơm - ANIMATION MV | Quân A.P",
    duongDanAnh: "luaganrom.avif",
    duongDanYoutube: "https://www.youtube.com/embed/vvkPBiSc4Zw?si=NG8OxXJAo4k9WWgf",
    }
];
function chonBai(id){
    for (let i = 0; i < danhSachVid.length; i++){
        if(danhSachVid[i].id == id){
            document.getElementsByClassName("video")[1].src = danhSachVid[i].duongDanYoutube;
        }
    }
}