// let index = 0

import img1 from '/src/assets/img/planes/plane1.png'
import img2 from '/src/assets/img/planes/plane2.png'
import img3 from '/src/assets/img/planes/plane3.png'
import img4 from '/src/assets/img/planes/plane4.png'
import img5 from '/src/assets/img/planes/plane5.png'
import img6 from '/src/assets/img/planes/plane6.png'
import img7 from '/src/assets/img/planes/plane7.png'
import img8 from '/src/assets/img/planes/plane8.png'

const imgs = [img1, img2, img3, img4, img5, img6, img7, img8]
const names = ["GÖKÇEN", "VECİHİ", "HEZARFEN", "SGM-22", "SVG-22", "SKYRIDER", "VTOL", "BOMBUS"]
const descrParagraf = [
	"Yıldız Teknik Üniversitesinin ilk insansız hava aracı ", 
	"", 
	"", 
	"2022 DBF yarışması için ürettiğimiz aracımız ön eleme raporunda 127 takım arasında 38. olarak, detaylı tasarım raporunda 97 takım arasından 32. olarak yarışmaya katılmaya hak kazanmıştır.",
	"2022 Teknofest Uluslararası İHA yarışması için ürettiğimiz aracımız tüm rapor aşamalarını başarıyla tamamlayarak uçuşa hak kazanan finalist takımlar arasında yerini almıştır.",
	"Takımımızın daha önce döner kanat İHA sistemi üzerine çalışması olmadığı için bu alanda know-how oluşturmak amacıyla çalışmalara başladık. Aynı zamanda VTOL araçlarımızın uçuş kontrolünü bu proje sayesinde geliştirdik.",
	"",
	""
]
const descrList = [
	["1,74 m Kanat açıklığı ", "4,25 kg Ağırlık", "30 m/sn Seyir hızı", "Tam otonom uçuş", "Görüntü işleme ve alan tespiti", "Otomatik varış noktası belirleme", "Faydalı yük taşıma ve bırakma"], 
	["1,65 m Kanat açıklığı", "6 kg Ağırlık", "22 m/sn Seyir hızı", "Tam otonom uçuş ", "Görüntü işleme ve alan tespiti", "Otomatik varış noktası belirleme", "Faydalı yük taşıma ve bırakma"],
	["1,6 m Kanat açıklığı", "4 kg Ağırlık", "20 m/s Seyir hızı", "Tam otonom uçuş ", "Görüntü işleme ve alan tespiti", "Otomatik varış noktası belirleme", "Faydalı yük taşıma ve bırakma"],
	["1,6 m Kanat açıklığı", "5 kg Ağırlık", "24 m/s Seyir hızı",  "30 dk uçuş süresi", "2 kg yük kapasitesi ", "Geniş iç hacim", "Uzaktan kontrollü yük bırakma sistemi", "Hassas medikal ve tıbbi ürünler taşıma"],
	["1,4 m Kanat açıklığı", "2,5 kg Ağırlık", "18 m/s Seyir hızı", "Tam otonom uçuş ", "Görüntü işleme ve alan tespiti", "Otomatik varış noktası belirleme", "Faydalı yük taşıma ve bırakma"],
	["Görüntü işleme ve alan tespiti", "Otomatik varış noktası belirleme", "Faydalı yük taşıma ve bırakma"],
	["1,6 m Kanat açıklığı", "3 kg Ağırlık", "20 m/s Seyir hızı", "Tam otonom uçuş ", "Görüntü işleme ile alan ve yük tespiti", "Otomatik varış noktası belirleme", "Otonom yük alıp bırakma", "Dikey iniş kalkış"],
	["2,4 m Kanat açıklığı", "6 kg Ağırlık", "24 m/s Seyir hızı", "Tam otonom uçuş ", "Görüntü işleme ve alan tespiti", "Otomatik varış noktası belirleme", "Uzaktan kontrollü yük bırakma sistemi", "Hassas medikal ve tıbbi ürünler taşıma", "Dikey iniş kalkış"]
]

type ProjectDataType = {
	img: string,
	name: string,
	index: number,
	descrParagraf : string,
	descrList : string[],
}[]

const projectData : ProjectDataType = []

for (let index=0; index<imgs.length; index++){
	projectData.push(
		{
			img: imgs[index],
			name: names[index],
			descrParagraf : descrParagraf[index],
			descrList : descrList[index],
			index,
		}
	)
}

// let index = 0;

// const projectData : ProjectDataType = [
// 	{
// 		img: imgs[index],
// 		name: names[index],

// 		index : index++,
// 	}
// ]
export default projectData;