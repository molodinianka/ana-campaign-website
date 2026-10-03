// Initiative Data Store - All 12 Campaigns
const initiatives = [
  {
    title: "Cafeteria Food Diversity & Coffee Access",
    category: "cafeteria",
    badge: "Cafeteria & Coffee",
    images: [
      "images/coffee.jpg",
      "images/waffles.jpg"
    ],
    description: "Expanding the cafeteria menu to include fresh options like waffles and snacks, along with official permission for students to drink coffee during school hours.",
    promise: "I promise to improve cafeteria food options and grant students the right to drink coffee during school hours."
  },
  {
    title: "Human Library & Cultural Exchange",
    category: "academics",
    badge: "Human Library & Exchange",
    images: [
      "images/human-library-1.jpg",
      "images/human-library-2.jpg",
      "images/human-library-3.jpg",
      "images/human-library-4.jpg",
      "images/human-library-5.jpg"
    ],
    description: "Partnership with Georgia's leading NGOs including Caritas to offer interactive human library sessions and official volunteer certificates for all participants.",
    promise: "I promise to guarantee accessible volunteering opportunities with certified hours for every high school student."
  },
  {
    title: "Football Championship League",
    category: "sports",
    badge: "Sports",
    images: [
      "images/football-1.jpg",
      "images/football-2.jpg",
      "images/football-3.jpg"
    ],
    description: "Multi-sector football tournaments featuring IB, Georgian, and American school sectors, including student vs. teacher showdown matches.",
    promise: "I promise to organize regular sports tournaments to boost unity across all school divisions."
  },
  {
    title: "Volleyball & Basketball Tournaments",
    category: "sports",
    badge: "Sports",
    images: [
      "images/volleyball-1.jpg",
      "images/volleyball-2.jpg",
      "images/volleyball-3.jpg"
    ],
    description: "High-energy indoor league matches designed for equal representation across all grade levels.",
    promise: "I promise to organise more volleyball and basketball championships to encourage athletes and make the school year more fun."
  },
  {
    title: "Chess Championship",
    category: "sports",
    badge: "Sports",
    images: ["images/chess-championship.jpg"],
    description: "Strategic mind games championship open to all students with trophy awards and sector rankings.",
    promise: "I promise to support intellectual sports alongside physical athletics."
  },
  {
    title: '"What? Where? When?" Mind Games',
    category: "academics",
    badge: "Mind Games",
    images: ["images/what-where-when.jpg"],
    description: "Academic team trivia competitions organized term-by-term to foster team cooperation.",
    promise: "I promise to establish seasonal intellectual leagues with awards for top-performing teams."
  },
  {
    title: "Student Voice & Collaboration Hub",
    category: "student-life",
    badge: "Student Voice",
    images: ["images/collaboration.jpg"],
    description: "Direct channel for student ideas, transparent student council meetings, and administrative advocacy.",
    promise: "I promise to maintain transparent communication between students and school administration."
  },
  {
    title: "Principal Approved & Action-Ready Plan",
    category: "events",
    badge: "Endorsed",
    images: ["images/principal-approval.jpg"],
    description: "Full feasibility verification and formal alignment with school leadership.",
    promise: "I promise to only propose realistic initiatives that have clear administrative backing."
  },
  {
    title: "Educational & Recreational Excursions",
    category: "excursions",
    badge: "Excursions",
    images: [
      "images/traveling.jpg",
      "images/traveling1.jpg"
    ],
    description: "Planning and organizing pre-approved school field trips and outdoor excursions to provide hands-on learning and bonding experiences outside the classroom.",
    promise: "I promise to coordinate with administration to organize more exciting, educational school excursions."
  },
  {
    title: "Spirit Weeks & Stress Relief Activities",
    category: "student-life",
    badge: "Student Life",
    images: [
      "images/spiritweek.jpg",
      "images/pijamoday.jpg"
    ],
    description: "Introducing themed spirit days—such as Pyjama Day and creative dress-up events—to neutralize academic stress and bring energy and fun to the school routine.",
    promise: "I promise to host regular Spirit Weeks to boost morale and foster a relaxed, enjoyable school environment."
  },
  {
    title: "Comfortable Uniform Trousers Initiative",
    category: "student-life",
    badge: "Dress Code",
    images: [
      "images/forms.jpg",
      "images/formapics.jpg"
    ],
    description: "Advocating for student dress code flexibility by introducing high-quality, comfortable uniform trouser options that prioritize daily student comfort.",
    promise: "I promise to work with school administration to offer practical and comfortable trouser options for all students."
  },
  {
    title: "Prom & Pre-Prom Celebrations",
    category: "events",
    badge: "School Events",
    images: [
      "images/prom.jpg",
      "images/Preprom.jpg"
    ],
    description: "Organizing pre-prom gatherings and an unforgettable Prom night at the end of the school year for upperclassmates and students to create lasting memories together.",
    promise: "I promise to organize a memorable Prom experience for upperclassmates and students to end the school year with unforgettable moments."
  }
];

let currentModalIndex = 0;
let currentCarouselIndex = 0;

// Filter Gallery Items
function filterGallery(event, category) {
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.currentTarget.classList.add('active');

  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(`category-${category}`)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Modal Functions
function openActivityModal(index) {
  currentModalIndex = index;
  currentCarouselIndex = 0;
  updateModalContent();
  document.getElementById('activityModal').style.display = 'flex';
}

function closeActivityModal() {
  document.getElementById('activityModal').style.display = 'none';
}

function updateModalContent() {
  const item = initiatives[currentModalIndex];
  
  document.getElementById('modalTitle').innerText = item.title;
  document.getElementById('modalCategory').innerText = item.badge;
  document.getElementById('modalDescription').innerText = item.description;
  document.getElementById('modalPromise').innerText = item.promise;
  document.getElementById('modalCurrentIndex').innerText = currentModalIndex + 1;
  document.getElementById('modalTotalCount').innerText = initiatives.length;

  updateCarouselImage();
}

function updateCarouselImage() {
  const item = initiatives[currentModalIndex];
  const imgElement = document.getElementById('modalImage');
  const carouselControls = document.getElementById('imageCarouselControls');
  
  imgElement.src = item.images[currentCarouselIndex];

  if (item.images.length > 1) {
    carouselControls.style.display = 'flex';
    document.getElementById('carouselCounter').innerText = `${currentCarouselIndex + 1} / ${item.images.length}`;
  } else {
    carouselControls.style.display = 'none';
  }
}

function nextCarouselImage(e) {
  e.stopPropagation();
  const item = initiatives[currentModalIndex];
  currentCarouselIndex = (currentCarouselIndex + 1) % item.images.length;
  updateCarouselImage();
}

function prevCarouselImage(e) {
  e.stopPropagation();
  const item = initiatives[currentModalIndex];
  currentCarouselIndex = (currentCarouselIndex - 1 + item.images.length) % item.images.length;
  updateCarouselImage();
}

function nextActivity() {
  currentModalIndex = (currentModalIndex + 1) % initiatives.length;
  currentCarouselIndex = 0;
  updateModalContent();
}

function prevActivity() {
  currentModalIndex = (currentModalIndex - 1 + initiatives.length) % initiatives.length;
  currentCarouselIndex = 0;
  updateModalContent();
}

// Close Modal when clicking outside container
window.onclick = function(event) {
  const modal = document.getElementById('activityModal');
  if (event.target === modal) {
    closeActivityModal();
  }
};