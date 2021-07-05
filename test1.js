const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'thanos', fromMe: true}, (async (message, match) => {

    var r_text = new Array ();
r_text[0] = "*İşim bittiğinde, insanlığın yarısı hala var olacak. Her şeyin olması gerektiği gibi mükemmel dengelenmiş. Umarım seni hatırlarlar.*";
r_text[1] = "*Tüm fetih, şiddet, katliam yıllarımda bunlar asla kişisel değildi. Ama şimdi size anlatacağım! İnatçı, sinir bozucu küçük gezegeninize ne yapmak üzereyim.. Bundan zevk alacağım. Çok, çok fazla.*";
r_text[2] = "*Küçük olan, basit bir hesap. Bu evren sonludur, kaynakları sınırlıdır. Hayat kontrolsüz bırakılırsa, yaşam sona erecektir. Düzeltilmeye Muhtaç!*";
r_text[3] = "*Sonunda dinleniyorum ve güneşin doğuşunu minnettar bir evrende izliyorum. En zor seçimler en güçlü iradeleri gerektirir.*";
r_text[4] = "*Kelimelerini akıllıca seçmelisin.*";
r_text[5] = "*Bu evreni son atomuna kadar parçalayacağım ve sonra benim için topladığın taşlarla yeni bir tane yaratacağım. Kaybedilen şey değil, sadece ona minnettar bir evren verildiği şeydir.*";
r_text[6] = "*İş bitti. Kazandım. Ne yapmak üzereyim? Bundan keyif alacağım. Çok, çok fazla!*";
r_text[7] = "*Kalbimde, hala umursadığını biliyordum. Ama kimse kesin olarak bilmiyor. Gerçeklik genellikle hayal kırıklığı yaratır.*";
r_text[8] = "*Güçlüsün. Ben.. Sen cömertsin. Ben.. Ama sana asla yalan söylemeyi öğretmedim. Bu yüzden bu konuda çok kötüsün. Ruh Taşı nerede?*";
r_text[9] = "*Güçlüsünüz. Ama parmaklarımı çektimdiğimde hepiniz var olmaktan vazgeçersiniz!*";
r_text[10] = "*Kaybetmenin nasıl bir şey olduğunu biliyorum. Haklı olduğunuzu ümitsiz hissetmek, yine de başarısız olmaktır.*";
r_text[11] = "*Bugün, bildiğinden daha fazlasını kaybettim. Ama şimdi yas tutmanın vakti yok. Şimdi hiç zaman yok.*";
r_text[12] = "*Korkun. Ondan kaç. Kader hâlâ geliyor. Yoksa söylemem gerekir mi?*";
r_text[13] = "*Hapse mahkum olurum! Gurur: benim tek ölümcül kusurum.*";
r_text[14] = "*Ben... kaçınılmazım.*";
r_text[15] = "*Rastgele. Tam ve adil. Zengin ve fakir aynı. Bana deli dediler. Ve tahmin ettiğim gibi, önümde diz çökmeye geldiler.*";
r_text[16] = "*Aç yatacaktın, hurdaya fırlamıştın. Gezegeniniz çöküşün eşiğindeydi. Bunu durduran benim. O zamandan beri ne oldu biliyor musun? Doğan çocuklar tam karın ve berrak gökyüzü dışında hiçbir şey bilmiyorlar. Bu bir cennet.*";
r_text[17] = "*Hiçbir şey yapmamak; sıkışıp kalarak, açlık çekerek, günah içinde yuvarlanarak Dantenin cehennemine kucak açmaktır. Ve ben de cesaretle eyleme geçtim. Kimileri dehşetle bakacaktır; ama kurtuluşun bir bedeli vardır. Dünya bir gün fedakârlığımın güzelliğine kavrayacaktır. Çünkü ben sizin kurtuluşunuzum. Ben Gölgeyim. Ben insanlık sonrası çağının kapısıyım.*";
r_text[18] = "*Yaratılıştaki bütün varlıkların kendilerine ait dökülebilecek kanları vardır. Ve kimsenin onlara başkalarınınkini dökebileceklerini öğretmesi gerekmez. Hepsi bunu doğuştan bilir. Nefes almayı bildikleri gibi!*";
r_text[19] = "*Tüm savaşlar daha ilk darbe vurulmadan kazanılır ya da kaybedilir. Uygulama kısmı ise yalnızca formalitedir.*";
r_text[20] = "*Kaderimi bir kere reddettim, bir daha olmasına izin veremem!*";
r_text[21] = "*Ben senin güvenini istemedim. Sadece itaatini istiyorum.*";
var i = Math.floor(22*Math.random())

await message.sendMessage(r_text[i]);

}));
