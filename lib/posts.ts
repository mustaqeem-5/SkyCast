export type ContentBlock = { type: "heading" | "paragraph"; text: string };
export type BlogPost = {
  slug: string; title: string; category: string; date: string; readTime: string;
  excerpt: string; image: string; imageAlt: string; icon: string; theme: string; content: ContentBlock[];
};
export const posts: BlogPost[] = [
  {
    slug: "understanding-weather-forecasts", title: "How to read a weather forecast without the confusion", category: "Weather Basics", date: "Oct 18, 2026", readTime: "5 min", icon: "🌤", theme: "art-sky",
    excerpt: "A simple guide to temperature, feels-like values, rain chances, and the details that help you plan your day.",
    image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1400&q=85", imageAlt: "Dramatic clouds across a wide blue sky",
    content: [
      { type: "paragraph", text: "A weather forecast is more than a single temperature. It is a collection of clues about what the atmosphere may do, helping you make a better plan while leaving room for conditions to change." },
      { type: "heading", text: "Temperature and feels-like" },
      { type: "paragraph", text: "The air temperature is measured in the shade using standard conditions. The feels-like value estimates how your body may experience the weather, taking factors such as humidity and wind into account. On a humid day, the same temperature can feel warmer; a strong breeze can make a cool day feel colder." },
      { type: "heading", text: "What does a rain percentage mean?" },
      { type: "paragraph", text: "A precipitation probability is an estimate of the chance that measurable precipitation will occur at a location during a stated period. It is not simply a prediction of how much of the day will be rainy, and it does not tell you the amount of rain by itself." },
      { type: "heading", text: "Look beyond the headline number" },
      { type: "paragraph", text: "Check wind speed, cloud cover, the hourly pattern, and the forecast period. A small chance of rain may still matter for an outdoor event, while a breezy afternoon may affect cycling or travel even when skies are clear." },
      { type: "heading", text: "Build a flexible plan" },
      { type: "paragraph", text: "Use the forecast as a guide, check it again before you leave, and keep a backup plan for activities affected by rain, heat, or strong winds. Forecasts become less certain farther into the future." }
    ]
  },
  {
    slug: "heat-and-humidity", title: "Why humid days can feel much hotter", category: "Climate & Science", date: "Oct 15, 2026", readTime: "4 min", icon: "☀", theme: "art-sun",
    excerpt: "Learn why humidity changes how your body cools itself, and how to prepare for muggy weather.",
    image: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=1400&q=85", imageAlt: "Bright sunlight shining over a warm landscape",
    content: [
      { type: "paragraph", text: "Have you ever stepped outside on a humid day and felt warmer than the thermometer suggested? Humidity is part of the reason. It describes how much water vapour is present in the air, relative to the amount the air can hold at that temperature." },
      { type: "heading", text: "Your body's cooling system" },
      { type: "paragraph", text: "Your body cools itself partly by allowing sweat to evaporate from your skin. When the air is humid, sweat evaporates more slowly, so this cooling process becomes less effective. That can make hot conditions feel more uncomfortable." },
      { type: "heading", text: "Plan around heat" },
      { type: "paragraph", text: "During hot, humid weather, take breaks in cooler places, drink water regularly, wear lightweight clothing, and reduce strenuous activity during the hottest part of the day. Follow local heat advisories, especially if you work or exercise outdoors." },
      { type: "heading", text: "Humidity is only one factor" },
      { type: "paragraph", text: "Sun exposure, wind, activity level, clothing, and personal health also affect heat stress. A feels-like value is useful context, but it is not a guarantee of how any individual will feel." }
    ]
  },
  {
    slug: "pack-for-changing-weather", title: "A practical packing list for unpredictable weather", category: "Everyday Planning", date: "Oct 12, 2026", readTime: "3 min", icon: "🎒", theme: "art-travel",
    excerpt: "A few versatile essentials can make a day out easier when the forecast is changeable.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85", imageAlt: "Open landscape beneath a changing sky",
    content: [
      { type: "paragraph", text: "Weather can shift between morning and evening, especially when you are travelling or spending a long day outdoors. Packing a few flexible items can help you stay comfortable without carrying your entire wardrobe." },
      { type: "heading", text: "Start with layers" },
      { type: "paragraph", text: "A lightweight base layer, an extra top, and a compact outer layer are often more versatile than one heavy item. Layers let you adjust as temperatures rise or fall throughout the day." },
      { type: "heading", text: "Check the details that matter" },
      { type: "paragraph", text: "Look at the forecast for the full time you will be outside. Rain probability, wind, expected high and low temperatures, and the timing of any showers can each change what makes sense to bring." },
      { type: "heading", text: "Keep the essentials simple" },
      { type: "paragraph", text: "Depending on the forecast, consider a small umbrella or rain shell, water, sun protection, and comfortable shoes. For remote areas or severe-weather risks, plan more carefully and follow local guidance." }
    ]
  },
  {
    slug: "what-clouds-can-tell-you", title: "What clouds can tell you about the sky", category: "Climate & Science", date: "Oct 08, 2026", readTime: "5 min", icon: "☁", theme: "art-cloud",
    excerpt: "From wispy high clouds to thick grey layers, here is a beginner-friendly introduction to cloud watching.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=85", imageAlt: "Clouds and mist drifting over green hills",
    content: [
      { type: "paragraph", text: "Clouds form when water vapour cools and condenses into tiny droplets or ice crystals. Their shapes and heights can offer clues about what is happening in the atmosphere, though clouds alone cannot provide a reliable forecast." },
      { type: "heading", text: "High, wispy clouds" },
      { type: "paragraph", text: "Cirrus clouds are thin and feather-like, usually found high in the atmosphere. They often appear in fair weather, but a spreading veil of high clouds can sometimes arrive ahead of a larger weather system." },
      { type: "heading", text: "Puffy clouds and grey layers" },
      { type: "paragraph", text: "Small cumulus clouds often appear on fair days. Broad, uniform stratus clouds can make the sky look grey and may bring mist or drizzle. Tall, growing clouds can be associated with showers or thunderstorms when the atmosphere is unstable." },
      { type: "heading", text: "Use more than one clue" },
      { type: "paragraph", text: "Cloud watching is a fun way to build curiosity, but combine it with a current forecast and official alerts when making plans. Cloud types can overlap, and local conditions can change quickly." }
    ]
  },
  {
    slug: "wind-speed-explained", title: "Wind speed explained: what the numbers mean", category: "Weather Basics", date: "Oct 04, 2026", readTime: "4 min", icon: "〰", theme: "art-wind",
    excerpt: "Understand wind speed in everyday terms and why gusts can matter as much as the average.",
    image: "https://images.unsplash.com/photo-1505672678657-cc7037095e60?auto=format&fit=crop&w=1400&q=85", imageAlt: "Wind moving through trees beneath the sky",
    content: [
      { type: "paragraph", text: "Wind speed describes how fast air is moving. Weather apps commonly show it in kilometres per hour, miles per hour, or metres per second. The unit matters, so check it before comparing forecasts." },
      { type: "heading", text: "Average wind versus gusts" },
      { type: "paragraph", text: "A sustained wind value describes the general wind over a measurement period, while a gust is a brief increase in speed. Gusts can be especially important for cycling, driving high-sided vehicles, boating, and outdoor setups." },
      { type: "heading", text: "Why wind changes how weather feels" },
      { type: "paragraph", text: "Wind moves heat away from your skin and can make cool weather feel colder. In hot conditions, its effect depends on temperature and humidity. Wind can also carry dust or affect how quickly surfaces dry." },
      { type: "heading", text: "Make a safer plan" },
      { type: "paragraph", text: "If strong winds are forecast, secure loose outdoor items and check local advisories. Pay attention to gusts as well as the average, and avoid relying on a single number for activities where wind creates a safety risk." }
    ]
  },
  {
    slug: "make-the-most-of-a-sunny-day", title: "Make the most of a sunny day, comfortably", category: "Everyday Planning", date: "Sep 29, 2026", readTime: "3 min", icon: "🌞", theme: "art-sun",
    excerpt: "Simple ways to enjoy outdoor plans while being mindful of sun exposure and heat.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=85", imageAlt: "Sunlit flowers on a bright day",
    content: [
      { type: "paragraph", text: "A sunny forecast can be an invitation to spend time outside. A little planning can help make that time more comfortable, whether you are walking, meeting friends, or exploring somewhere new." },
      { type: "heading", text: "Think about timing" },
      { type: "paragraph", text: "If the day is expected to be very hot, consider scheduling more active plans for cooler hours and choosing shaded places when possible. Check local heat and UV guidance as well as the temperature." },
      { type: "heading", text: "Bring the basics" },
      { type: "paragraph", text: "Water, a hat, sunglasses, and suitable sun protection can be useful on bright days. Take breaks, and remember that shade and clouds do not always eliminate UV exposure." },
      { type: "heading", text: "Let the forecast guide you" },
      { type: "paragraph", text: "Conditions differ from place to place and can change during the day. Check a local forecast before leaving, and adjust your plans if heat or other weather hazards become a concern." }
    ]
  }
];
