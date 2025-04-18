
import sunset from './sunset rose.jpg'
import blush from './Blush Peony.jpg'
import lavender from './Lavender.jpg'
import diazy from './diazy.jpg'
import tulips from './Dreamy Tulips.jpg'
import bliss from './Eucalyptus Bliss.jpg'
import garden from './Garden Party Mix.jpg'
import lilacs from './lilacs.jpg'
import morning from './Morning Glory Mix.jpg'
import pastel from './Pastel Hydrangeas.jpg'
import peachy from './Peachy Keen.jpg'
import ranunculus from './Pink Ranunculus.jpg'
import romantic from './Romantic Red Roses.jpg'
import rose from './Rose Quartz Bunch.jpg'
import snowy from './Snowy Lilies.jpg'
import soft from './Soft Petal Charm.jpg'
import spring from './Spring Fever.jpg'
import sun from './Sun-Kissed Lilies.jpg'
import sunflower from './Sunflower Hug.jpg'
import sweetheart from './Sweetheart Bouquet.jpg'
import tropical from './Tropical Breeze.jpg'
import vintage from './Vintage Blooms.jpg'
import whimsical from './Whimsical Wisteria.jpg'
import white from './White Orchid Touch.jpg'
import wildflower from './Wildflower Mix.jpg'
import berry from './Berry Rose Blend.jpg'
import boho from './Boho Blossoms.jpg'


let flowerProducts = [
  {
    id: 1,
    name: "Sunset Roses",
    image: sunset,
    new_price: 24.99,
    old_price: 29.99,
    meaning: "A symbol of peace and quiet beauty, these roses bloom at the close of day, reminding us that every ending holds the promise of a new beginning.",
    description:"A flower born from the morning light, carrying within its petals a promise of peace. It spreads its fragrance gently, as if whispering to the world: (Be kind, for all things beautiful grow quietly.)"
  },
  {
    id: 2,
    name: "Blush Peonies",
    image: blush,
    new_price: 34.5,
    old_price: 39.95,
    meaning: "These peonies represent the sweetness of life and unspoken love. A gentle reminder of emotions that are felt deeply but rarely spoken aloud.",
    description:"Like a line from an unspoken poem, this shy rose blushes with the color of love. It looks at you softly, as if it knows your secrets. Between its petals... a heart beating with life."
  },
  {
    id: 3,
    name: "Lavender Fields",
    image: lavender,
    new_price: 19.99,
    old_price: 24.99,
    meaning: "Lavender is known for its calming powers, and this flower represents tranquility and peace of mind. It whispers of quiet strength and timeless grace.",
    description:"Bathed in golden sunlight, this flower sings silently of new beginnings. Every curve of its petals feels like a lullaby from the Earth, soothing, sweet, and timeless."
  },
  {
    id: 4,
    name: "Golden Daisies",
    image: diazy,
    new_price: 14.99,
    old_price: 19.99,
    meaning: "These daisies are symbols of hope and purity. With every gentle sway, they remind us to stay grounded and embrace the simplicity and beauty of life.",
    description:"Hidden between leaves and dreams, this bloom unfolds like a whispered secret. With every sway, it dances to the rhythm of the wind, enchanting all who pass by."
  },
  {
    id: 5,
    name: "Wildflower Mix",
    image: wildflower,
    new_price: 17.75,
    old_price: 22.0,
    meaning: "A wildflower’s beauty lies in its spontaneity, reminding us that life’s greatest treasures often come unexpectedly, blooming where we least expect them.",
    description:"Not just a flower — but a spell in bloom. Its colors shimmer with emotion, its scent stirs memories you didn’t know you had. It's the kind of beauty that makes time pause... just for a moment."
  },
  {
    id: 6,
    name: "Dreamy Tulips",
    image: tulips,
    new_price: 21.95,
    old_price: 26.95,
    meaning: "Tulips symbolize perfect love, and these dreamy tulips reflect the calm and warmth that come from the embrace of someone you truly care about.",
    description:"A flower born from the morning light, carrying within its petals a promise of peace. It spreads its fragrance gently, as if whispering to the world: (Be kind, for all things beautiful grow quietly.)"
  },
  {
    id: 7,
    name: "Pastel Hydrangeas",
    image: pastel,
    new_price: 28.0,
    old_price: 33.0,
    meaning: "Hydrangeas stand for heartfelt emotions and gratitude, and these pastel hues remind us of the softness and beauty found in every genuine relationship.",
    description:"Like a line from an unspoken poem, this shy rose blushes with the color of love. It looks at you softly, as if it knows your secrets. Between its petals... a heart beating with life."
  },
  {
    id: 8,
    name: "Eucalyptus Bliss",
    image: bliss,
    new_price: 16.99,
    old_price: 21.99,
    meaning: "This eucalyptus symbolizes cleansing and purification. It encourages clarity of mind and invites calmness into your space.",
    description:"Bathed in golden sunlight, this flower sings silently of new beginnings. Every curve of its petals feels like a lullaby from the Earth, soothing, sweet, and timeless."
  },
  {
    id: 9,
    name: "White Orchid Touch",
    image: white,
    new_price: 38.0,
    old_price: 44.0,
    meaning: "The orchid represents rare beauty and strength. These white orchids remind us that even in moments of fragility, there is immense strength to be found.",
    description:"Hidden between leaves and dreams, this bloom unfolds like a whispered secret. With every sway, it dances to the rhythm of the wind, enchanting all who pass by."
  },
  {
    id: 10,
    name: "Romantic Red Roses",
    image: romantic,
    new_price: 29.99,
    old_price: 34.99,
    meaning: "Red roses have long been a symbol of passionate love. These romantic roses express deep affection and everlasting devotion.",
    description:"Not just a flower — but a spell in bloom. Its colors shimmer with emotion, its scent stirs memories you didn’t know you had. It's the kind of beauty that makes time pause... just for a moment."
  },
  {
    id: 11,
    name: "Pink Ranunculus",
    image: ranunculus,
    new_price: 26.75,
    old_price: 31.5,
    meaning: "Ranunculus flowers stand for radiant charm. The pink variety speaks of affection and admiration, perfect for conveying love in its gentlest form.",
    description:"A flower born from the morning light, carrying within its petals a promise of peace. It spreads its fragrance gently, as if whispering to the world: (Be kind, for all things beautiful grow quietly.)"
  },
  {
    id: 12,
    name: "Lilac Dreams",
    image: lilacs,
    new_price: 22.99,
    old_price: 28.99,
    meaning: "Lilacs are symbols of renewal and rebirth. The lilac’s gentle color reflects grace and the power of love's quiet persistence.",
    description:"Like a line from an unspoken poem, this shy rose blushes with the color of love. It looks at you softly, as if it knows your secrets. Between its petals... a heart beating with life."
  },
  {
    id: 13,
    name: "Sweetheart Bouquet",
    image: sweetheart,
    new_price: 33.0,
    old_price: 38.0,
    meaning: "A bouquet that embodies affection, tenderness, and devotion. Perfect for sharing your heart with someone special.",
    description:"Bathed in golden sunlight, this flower sings silently of new beginnings. Every curve of its petals feels like a lullaby from the Earth, soothing, sweet, and timeless."
  },
  {
    id: 14,
    name: "Vintage Blooms",
    image: vintage,
    new_price: 18.95,
    old_price: 23.95,
    meaning: "These vintage blooms capture the beauty of timeless love, celebrating the past while continuing to bloom and thrive in the present.",
    description:"Hidden between leaves and dreams, this bloom unfolds like a whispered secret. With every sway, it dances to the rhythm of the wind, enchanting all who pass by."
  },
  {
    id: 15,
    name: "Peachy Keen",
    image: peachy,
    new_price: 27.5,
    old_price: 32.5,
    meaning: "This peach flower symbolizes sincerity, enthusiasm, and joy. It's a celebration of positivity, warmth, and affection.",
    description:"Not just a flower — but a spell in bloom. Its colors shimmer with emotion, its scent stirs memories you didn’t know you had. It's the kind of beauty that makes time pause... just for a moment."
  },
  {
    id: 16,
    name: "Morning Glory Mix",
    image: morning,
    new_price: 20.0,
    old_price: 25.0,
    meaning: "Morning Glories symbolize renewal and fresh starts. Their vibrant colors reflect the excitement of a new day filled with endless possibilities.",
    description:"A flower born from the morning light, carrying within its petals a promise of peace. It spreads its fragrance gently, as if whispering to the world: (Be kind, for all things beautiful grow quietly.)"
  },
  {
    id: 17,
    name: "Whimsical Wisteria",
    image: whimsical,
    new_price: 24.25,
    old_price: 29.25,
    meaning: "Wisteria blooms stand for elegance, grace, and long-lasting love. Their whimsical nature invites dreamers to lose themselves in their beauty.",
    description:"Like a line from an unspoken poem, this shy rose blushes with the color of love. It looks at you softly, as if it knows your secrets. Between its petals... a heart beating with life."
  },
  {
    id: 18,
    name: "Snowy Lilies",
    image: snowy,
    new_price: 30.0,
    old_price: 35.0,
    meaning: "Snowy Lilies symbolize purity and new beginnings. Their pristine petals remind us of life's clean slates and fresh opportunities.",
    description:"Bathed in golden sunlight, this flower sings silently of new beginnings. Every curve of its petals feels like a lullaby from the Earth, soothing, sweet, and timeless."
  },
  {
    id: 19,
    name: "Berry Rose Blend",
    image: berry,
    new_price: 22.45,
    old_price: 27.45,
    meaning: "A burst of color that represents vibrant energy and joy. This blend celebrates the unity of many beautiful things coming together.",
    description:"Hidden between leaves and dreams, this bloom unfolds like a whispered secret. With every sway, it dances to the rhythm of the wind, enchanting all who pass by."
  },
  {
    id: 20,
    name: "Spring Fever",
    image: spring,
    new_price: 19.95,
    old_price: 24.95,
    meaning: "Spring Fever is a symbol of the fresh, invigorating feeling of spring’s arrival. It represents growth, rejuvenation, and the joy of new beginnings.",
    description:"Not just a flower — but a spell in bloom. Its colors shimmer with emotion, its scent stirs memories you didn’t know you had. It's the kind of beauty that makes time pause... just for a moment."
  },
  {
    id: 21,
    name: "Tropical Breeze",
    image: tropical,
    new_price: 25.99,
    old_price: 30.99,
    meaning: "Tropical flowers remind us to embrace life with energy and zest. They celebrate the adventurous spirit and beauty in every new horizon.",
    description:"A flower born from the morning light, carrying within its petals a promise of peace. It spreads its fragrance gently, as if whispering to the world: (Be kind, for all things beautiful grow quietly.)"
  },
  {
    id: 22,
    name: "Sun-Kissed Lilies",
    image: sun,
    new_price: 34.5,
    old_price: 39.95,
    meaning: "Sun-Kissed Lilies represent happiness and vitality. They shine bright, just like the joy that comes from within when we are most alive.",
    description:"Bathed in golden sunlight, this flower sings silently of new beginnings. Every curve of its petals feels like a lullaby from the Earth, soothing, sweet, and timeless."
  },
  {
    id: 23,
    name: "Boho Blossoms",
    image: boho,
    new_price: 22.5,
    old_price: 27.5,
    meaning: "Boho Blossoms express individuality and free spirit. Their carefree beauty embodies the essence of being unique, free, and unapologetically yourself.",
    description:"Not just a flower — but a spell in bloom. Its colors shimmer with emotion, its scent stirs memories you didn’t know you had. It's the kind of beauty that makes time pause... just for a moment."
  }
 
];
export default flowerProducts;