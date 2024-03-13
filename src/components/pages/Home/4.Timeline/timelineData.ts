import img1 from '/src/assets/img/timeline/1.png'
import img2 from '/src/assets/img/timeline/2.png'
import img3 from '/src/assets/img/timeline/3.png'
import img4 from '/src/assets/img/timeline/4sm.png'
import img5 from '/src/assets/img/timeline/5.png'
import img6 from '/src/assets/img/timeline/6.png'
import img7 from '/src/assets/img/timeline/7.png'
import img8 from '/src/assets/img/timeline/8.png'
import img9 from '/src/assets/img/timeline/9.png'
import img10 from '/src/assets/img/timeline/10.png'
import img11 from '/src/assets/img/timeline/11.png'

const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]
// const alts = [
// 	'DBF logo', 
// 	'DEMİRDAĞ-14 UÇAĞI', 
// 	'VECİHİ-15 UÇAĞI',
// 	'HAZERFEN-16 UÇAĞI',
// 	'CEVHERİ-17 UÇAĞI',
// ]
// const headings = []
const descr = [
	'2012 yılında kurulduk. 2012-2013 yarışmasını altyapı çalışmaları oluşturma açısından, yaptığımız gözlemlerle herhangi bir yarışmaya katılma amacı gütmeden ‘GÖKÇEN’i tasarlayıp,ürettik.',

	'Kazandığımız tecrübe ve birikimlerimizle, 2014’te DBF yarışmasına “DEMİRAĞ-14” adlı uçağımız ile katıldık.',

	'İkinci kez 2015 yılında katıldığımız DBF yarışmasında mühendislik yeteneklerimizi geliştirmek ve yeni tecrübeleer kazaanmak amacı ile karbon fiber kabuğa sahip olan “VECİHİ-15” i tasarladık. Ve yarışma sonucunda dünya çapındaki üniversiteler arasında uçuş alnanında 8. olduk.',

	'Ülkemizde 2016’da TÜBİTAK tarafından düzenlenen TÜBİTAK İHA adlı yarışmaya ‘HAZERFEN-16’ adlı uçağımızı tasarlayıp, üretimini gerçekleştirerek katıldık. Yarışmada Detaylı Tasarım Raporumuz ile 100 uluslararası üniversite arasında 2.lik kazandık.',

	'2017 yılındaki yarışmada ise ‘CEVHERİ-17’ adlı uçağımız ile Türkiye’den finale katılmaya hak kazanan tek Teknik Üniversite olmanın gururunu yaşadık.',

	'“GÖKMEN-18” isimli uçağımızın üretim sürecinde, karbon fiber kompozit ile kalıpta üretim gibi imalat yöntemleri konularında çok ciddi tecrübeler kazanılmış olup, uçağımız tam kaplama kompozit karbon fiber yüzeyi ve detaylı tasarımı, analizi ile yarışma alanında ilgi odağı oldu.',

	'Bu yıl da TÜBİTAK UAV Turkey’de teknik anlamda sene içerisinde sıfırdan eğittiğimiz ekibimiz tarafından tasarlanıp,analizlerini ve üreitmini gerçekleştirip yaz boyu test uçuşlarını yaptığımız HÜRKUŞ’19 ile “Sabit Kanat” kategorisinde, Kavramsal Tasarım Raporu 1.’si, Detaylı Tasarım Raporu 2.’si olduk.',

	'2020 TÜBİTAK İHA yarışması için “SBN-20” isimli aracımızı tasarladık. Aracımızın gövdesini kendi atölyemizde el yatırma yöntemi kullanarak karbon fiberden ürettik.',

	'2021 Yılı için tasarlayıp ürettiğimiz test uçağımız Sigma-21. Bu aracımızda daha önceki üretim yöntemlerimizden farklı olarak ekleme imalat yöntemini kullandık. Aynı zamanda otonom uçuş testleri gerçekleştirdik.',

	'2022 DBF yarışması için ürettiğimiz aracımız ön eleme raporunda 127 takım arasında 38. olarak, detaylı tasarım raporunda 97 takım arasından 32. olarak yarışmaya katılmaya hak kazandı. Aynı zamanda yarışmaya Türkiye’den katılan takımlar arasından en yüksek rapor puanına sahip takım olduk. ',

	'2023 yılında konseptimizi değiştirerek farklı hava aracı konseptlerine yöneldik. Bu amaçla ilk olarak VTOL ( Vertical take off and landing) aracımızın tasarımını ve üretimini yaptık.',


]

const timelineData : {
	img : string,
	heading : string,
	descr : string,
	index : number
}[] = []

for(let index=0; index<imgs.length; index++){

	timelineData.push(
		{
			img : imgs[index],
			heading : `20${index+13	}`,
			descr : descr[index],
	
			index,
		}
	)
}

export default timelineData;