function Player(a,b,c) {
    this.name  = a;
    this.sex   = b;
    this.advan = c;
}
let topSpell = [
    {id:0,name:`Bền bỉ`, img:`/image/icon/spell/benbi.webp`, detail:"Giỏi đánh kèo dưới. Có thể bám sát chỉ số lính với đối thủ khi đang ở trạng thái khó khăn."},
    {id:1 ,name:`Tanker`, img:`/image/icon/spell/tanker.webp`, detail:"Thuần thục tướng chống chịu. Giỏi ra vào giao tranh với cơ hội sống sót cao."},
    {id:2,name:`Pusher`,img:`/image/icon/spell/captain.png`, detail:"Khi thắng đường, khả năng đẩy đường tăng đáng kể. Snowball mạnh ở giữa trận nếu được chăm sóc."}
]
let jungSpell = [
    {id: 1,name:`Khát máu`, img:`/image/icon/spell/khatmau.webp`, detail:"Đánh hổ báo ở khai cuộc. Dành thời gian vào các lane để đạt được mạng sớm hơn là đạt cấp 6 sớm."},
    {id: 2 ,name:`Trên cơ`, img:`/image/icon/spell/trenco.webp`, detail:"Giỏi cướp bóc. Có khả năng đọc Map và trì hoãn sự thăng tiến của Jungle đối phương. (Đồng đội tự lực)"},
    {id: 3,name:`Chính xác`, img:`/image/icon/spell/chinhxac.webp`, detail:"Thành thạo kĩ năng định hướng. Tỉ lệ gank thành công được cải thiện với tướng có kĩ năng CC quan trọng."},
    {id: 4,name:`Chu đáo`, img:`/image/icon/spell/chudao.webp`, detail:"Nhiệt tình cống hiến. Dành nhiều tài nguyên cho đường giữa và dưới. Hoạt động như 1 support thứ 2."},
    {id: 5,name:`Thợ săn`, img:`/image/icon/spell/thosan.webp`, detail:"Bám vào mục tiêu lớn. Có xu hướng ưu tiên rồng và sứ giả trên hết mọi sự kiện. (Cần sự hỗ trợ từ support)"},
    {id: 6,name:`Tầm nhìn`, img:`/image/icon/spell/vision.webp`, detail:"Nhìn xa trông rộng. Kiểm soát đường sông và mục tiêu lớn tốt."}
    
]
let midSpell = [
    {id: 1,name:`Tập trung`, img:`/image/icon/spell/minhman.webp`, detail:"Tập trung tuyệt đối. Chỉ số lính ở giai đoạn đi đường duy trì tốt, ít bị hạ gục sớm. Mạnh ở giữa game!"},
    {id: 2,name:`Roaming`, img:`/image/icon/spell/roaming.webp`, detail:"Dành phần lớn thời gian can thiệp vào các đường khác hơn. Tăng khả năng có được mục tiêu lớn ở khai cuộc."},
    {id: 3,name:`Snowball`, img:`/image/icon/spell/snowball.webp`, detail:"Giỏi tận dụng lợi thế. Tăng khả năng đi đường đáng kể nếu đang dẫn trước."}
]
let adSpell = [
    {id: 1,name:`Tập trung`, img:`/image/icon/spell/minhman.webp`, detail:"Tập trung tuyệt đối. Chỉ số lính ở giai đoạn đi đường duy trì tốt, ít bị hạ gục sớm. Mạnh ở giữa game!"},
    {id: 2,name:`Khéo léo`, img:`/image/icon/spell/captain.png`, detail:"Giữ vị trí và né chiêu tốt. Có khả năng tự lực khi không được cover."},
    {id: 3,name:`Liều lĩnh`, img:`/image/icon/spell/captain.png`, detail:"Đắc thắng. Thường có những pha xử lí quyết đoán. Đổi mạng thì vì không có gì."},
    {id: 4,name:`Cầu toàn`, img:`/image/icon/spell/captain.png`, detail:"Cẩn thận và chỉnh chu. Ít chủ động nhưng khó bị khai thác. Cần 1 nguồn sát thương khác trợ damage."}
]
let supSpell = [
    {id: 1,name:`Khát máu`, img:`/image/icon/spell/khatmau.webp`, detail:"Đánh hổ báo ở khai cuộc. Dành thời gian vào các lane để đạt được mạng sớm hơn là đạt cấp 6 sớm."},
    {id: 2,name:`Chu đáo`, img:`/image/icon/spell/chudao.webp`, detail:"Nhiệt tình cống hiến. Dành nhiều tài nguyên cho đường giữa và dưới. Hoạt động như 1 Jungle thứ 2."},
    {id: 3,name:`Chính xác`, img:`/image/icon/spell/chinhxac.webp`, detail:"Thành thạo kĩ năng định hướng. Tỉ lệ gank thành công được cải thiện với tướng có kĩ năng CC quan trọng."},
    {id: 4,name:`Roaming`, img:`/image/icon/spell/roaming.webp`, detail:"Dành phần lớn thời gian can thiệp vào các đường khác hơn. Tăng khả năng có được mục tiêu lớn ở khai cuộc."},
    {id: 5,name:`Tầm nhìn`, img:`/image/icon/spell/vision.webp`, detail:"Nhìn xa trông rộng. Kiểm soát đường sông và mục tiêu lớn tốt."}
    
]
let Spells = [ topSpell, jungSpell, midSpell, adSpell, supSpell];