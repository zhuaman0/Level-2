const testimonials = [
	{
		 text: "“Achter deze creatieve planeet zitten niet enkel gepassioneerde designers met liefde voor het webdesign/grafisch vak, maar vooral very NICE people. Meesterlijke toewijding, kennis, humor, zin voor detail en allround service, ook nadat de cake is gebakken, en je nog even een prangende vraag hebt over het recept. Telkens opnieuw voert Weblounge je mee doorheen jouw eigen hoofd en visie, trekt er alle registers open en maakt er samen met jou een adembenemende trip à la “Allice in Wonderland” van, maar dan voor grote mensen. Keer op keer voert zijn schip jou doorheen dat creatieve onuitputtelijke landschap: steeds anders, nooit vervelend. Ze lieten honderden Christoffel Columbussen de nieuwe wereld ontdekken, en hun schepen worden door miljoenen mensen gevolgd. Betrouwbaar, correct en een pionier in zijn vak.”",
		 name: "Tom & Annique Audoore",
		 company: "Audoore Consulting",
		 location: "Maarkedal - Oudenaarde - Vlaamse Ardennen",
		 img: "https://www.weblounge.be/wp-content/uploads/2019/05/kantientje-logo.png"
	},
	{
		 text: "“Wij werken al meer dan veertien jaar (ik ben de tel kwijt) met het webdesign bureau Weblounge in West-Vlaanderen (Brugge). En dat voor verschillende projecten. Een beter bewijs van tevredenheid is er niet, denk ik 🙂 Weblounge werkte de afgelopen jaren mee aan diverse webdesign en grafische opdrachten, zoals het Goodbye-magazine, maar ook voor onze klanten, zoals voor NBTC, Westtoer, Toerisme Leuven, Toerisme Brugge, Visit Oostende enz. Het is vooral het persoonlijk contact en de inspirerende brainstormsessies die onze samenwerking steeds boeiend maken.”",
		 name: "Dominique en Marleen Pille",
		 company: "Restaurant 't Kantientje",
		 location: "Ramskapelle",
		 img: "https://www.weblounge.be/wp-content/uploads/2022/08/kurt-decat-winetime-nieuwpoort.jpg"
	},
	{
		 text: "“Creativiteit, velen praten erover en menen alles erover te weten, maar het is maar 🙂  weinigen echt gegeven. Al heel wat jaren werken wij samen met Weblounge en keer op keer verrassen ze ons met prachtige ontwerpen. Met onze webshop krijgen we heel vaak complimenten en onze maandelijkse nieuwsbrief is telkens opnieuw een pareltje.”",
		 name: "Lisa Vermeer",
		 company: "Vermeer Advies",
		 location: "Gent",
		 img: "https://www.weblounge.be/wp-content/uploads/2019/05/tom-annique-refuge1.jpg"
	},
	{
		 text: "“Creativiteit, velen praten erover en menen alles erover te weten, maar het is maar 🙂  weinigen echt gegeven. Al heel wat jaren werken wij samen met Weblounge en keer op keer verrassen ze ons met prachtige ontwerpen. Met onze webshop krijgen we heel vaak complimenten en onze maandelijkse nieuwsbrief is telkens opnieuw een pareltje.”",
		 name: "Peter Van Dam",
		 company: "Van Dam Bedrijf",
		 location: "Antwerpen",
		 img: "https://www.weblounge.be/wp-content/uploads/2019/05/cappaert-annelies.jpg"
	},
	{
		 text: "“Creativiteit, velen praten erover en menen alles erover te weten, maar het is maar 🙂  weinigen echt gegeven. Al heel wat jaren werken wij samen met Weblounge en keer op keer verrassen ze ons met prachtige ontwerpen. Met onze webshop krijgen we heel vaak complimenten en onze maandelijkse nieuwsbrief is telkens opnieuw een pareltje.”",
		 name: "Sophie De Wilde",
		 company: "De Wilde Innovaties",
		 location: "Leuven",
		 img: "https://www.weblounge.be/wp-content/uploads/2022/08/marie-rotsaert-villa-ostinato-oostende.jpg"
	}
];

let currentIndex = 0;

const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const testimonialText = document.getElementById('testimonial-text');
const profileName = document.getElementById('profile-name');
const profileCompany = document.getElementById('profile-company');
const profileLocation = document.getElementById('profile-location');
const profileImg = document.getElementById('profile-img');

function updateTestimonial(index, direction) {
	testimonialText.classList.remove('slide-left', 'slide-right');
	
	testimonialText.textContent = testimonials[index].text;
	profileName.textContent = testimonials[index].name;
	profileCompany.textContent = testimonials[index].company;
	profileLocation.textContent = testimonials[index].location;
	profileImg.src = testimonials[index].img;
	
	if (direction === 'left') {
		 testimonialText.classList.add('slide-left');
	} else {
		 testimonialText.classList.add('slide-right');
	}
}

document.getElementById("bar").addEventListener("click", function() {
	const navbar = document.getElementById("navbar");
	navbar.classList.add("active"); 
 });
 
 document.getElementById("close").addEventListener("click", function() {
	const navbar = document.getElementById("navbar");
	navbar.classList.remove("active"); 
 });


