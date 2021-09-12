export const categoriesList = [
  {
    id: 0,
    name: 'Pizza',
    photo_url: 'https://townsquare.media/site/959/files/2020/08/GettyImages-1133727757.jpg'
  },
  {
    id: 1,
    name: 'Mexican Food',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
  },
  {
    id: 2,
    name: 'Italian Food',
    photo_url:
      'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },    
  {
    id: 3,
    name: 'Desserts',
    photo_url:
    'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
  },
  {
    id: 4,
    name: 'Smoothies and Milkshakes',
    photo_url:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
  },
  {
    id: 5,
    name: 'American',
    photo_url: 'https://i.insider.com/53b579166da811b136c10d7b?width=1000&format=jpeg&auto=webp',
  },
  {
    id: 6,
    name: 'Breakfast',
    photo_url: 'https://simply-delicious-food.com/wp-content/uploads/2018/10/breakfast-board-500x500.jpg'
  }  

];

export const recipesList = [
  {
    recipeId: 0,
    categoryId: 5,
    title: 'French Fries',
    photo_url: 'https://img.apmcdn.org/4b2716626c9ff3f6e5dfebe520eb592c33cf1e7b/uncropped/941f50-splendid-table-french-fries.jpg',
    photosArray: [
      'https://img.apmcdn.org/4b2716626c9ff3f6e5dfebe520eb592c33cf1e7b/uncropped/941f50-splendid-table-french-fries.jpg',
      'https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg',
      'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e',
    ],
    time: '15',
    ingredients: [
      {key: '200ml Oil'}, 
      {key: '5g Salt'}, 
      {key: '300g Russet Potatoes'}
    ],
    description: 
      ' 1 - Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.\n\n'
      + ' 2 - Meanwhile, you preheat your hot oil to 350º F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. \n\n'
      + ' 3 - Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 325º - 330º F. \n\n'
      + ' 4 - Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.\n\n' 
      + ' 5 - To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375º F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.'
  },    
  {
    recipeId: 1,
    categoryId: 5,
    title: 'Chicken Nuggets',
    photo_url: 'https://pixel.nymag.com/imgs/daily/grub/2017/11/22/22-mcds-chicken-tenders.w330.h330.jpg',
    photosArray: [
      'https://pixel.nymag.com/imgs/daily/grub/2017/11/22/22-mcds-chicken-tenders.w330.h330.jpg',
      'https://ichef.bbci.co.uk/news/660/cpsprodpb/B2C0/production/_106106754_vegnuggets976.jpg',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge_16_9%2Fpublic%2Fstyles%2Fmain%2Fpublic%2Fgettyimages-508510211.jpg%3Fitok%3Dh-Uryi8r&w=400&c=sc&poi=face&q=85'
    ],
    time: '30',
    ingredients: [
      {key: '2 quarts Oil'},
      {key: '1 Egg'},
      {key: '1 cup All-Purpose Flour'},
      {key: '1 cup Water'},
      {key: '1 tsp Onion Powder'},
      {key: '2 tsp Salt'},
      {key: '¼ tsp Black Pepper'},
      {key: '⅛ tsp Garlic Powder'},
      {key: '½ tsp MSG'},
      {key: '4 Chicken Breasts'}
    ],
    description: 
      ' 1 - Beat the egg and then combine it with water in a bowl. Stir. \n\n' 
      + ' 2 - Combine the flour, salt, MSG, pepper, onion powder and garlic powder in a gallon size zip lock bag. Pound each of the breast filets until about 1/4-inch thick. Then cut into bite sized pieces. Coat each piece with the flour mixture by shaking in the zip lock bag. \n\n' 
      + ' 3 - Remove and coat in the egg mixture. Then coat in the flour mixture again. Shake to coat. \n\n' 
      + ' 4 - Deep fry at 375º F for 10-12 minutes, until browned and crispy.'
  },
  {
    recipeId: 2,
    categoryId: 1,
    title: 'Crunchwrap',
    photo_url:
      'https://i1.wp.com/kitchenfunwithmy3sons.com/wp-content/uploads/2021/03/crunchwrap-supreme-recipe-feature-scaled.jpg',
    photosArray: [
      'https://i1.wp.com/kitchenfunwithmy3sons.com/wp-content/uploads/2021/03/crunchwrap-supreme-recipe-feature-scaled.jpg',
      'https://pinchofyum.com/wp-content/uploads/Crunchwrap-Inside.jpg',
      'https://monsonmadethis.com/wp-content/uploads/2017/10/IMG_20171015_161017_025-e1533869302263.jpg'
    ],
    time: '45',
    ingredients: [
      {key: '2 Tbsp Oil'},
      {key: '½ Onion, Chopped'},
      {key: '2 Tbsp Tomato Paste'},
      {key: '2 cloves Garlic'},
      {key: '1 tsp Paprika'},
      {key: '1 Tbsp Chilli Powder'},
      {key: '1 lb Ground Beef'},
      {key: '2 tsp Salt'},
      {key: '2 tsp Black Pepper'},
      {key: '15 oz Canned Kidney Beans, Rinsed and Drained'},
      {key: '8 Large Tortillas'},
      {key: '2 Bags of Fritos'},
      {key: '1 cup Cheddar Cheese, Shredded'}
    ],
    description: 
      ' 1 - In a medium pot over medium heat, heat 1 Tbsp oil. Add onion and cook until soft, 5 minutes. Add garlic and cook until fragrant, 1 minute more. Add tomato paste and stir to coat onion and garlic. Add ground beef and cook, breaking up meat with a wooden spoon, until no longer pink, 6 minutes. Drain fat.\n\n' 
      + ' 2 - Return beef to pot and season with chili powder, paprika, salt, and pepper. Add tomato sauce and kidney beans. Bring to a boil, then reduce heat and let simmer 15 minutes. Add some chili to center of each tortilla, leaving room to fold in edges. Top with Fritos, then cheddar. Fold edges of tortillas toward the center, creating pleats. Invert Crunchwraps so pleats are on the bottom and stay together.\n\n' 
      + ' 3 - In medium skillet over medium heat, heat remaining Tbsp oil. Add a Crunchwrap seam side down and cook until tortilla is golden, 3 to 5 minutes per side. Repeat with remaining Crunchwraps'
  },
  {
    recipeId: 3,
    categoryId: 5,
    title: 'Fried Chicken',
    photo_url: 'https://static.toiimg.com/thumb/61589069.cms?width=1200&height=900',
    photosArray: [
      'https://static.toiimg.com/thumb/61589069.cms?width=1200&height=900',
      'https://www.thecountrycook.net/wp-content/uploads/2021/02/thumbnail-Southern-Fried-Chicken-scaled.jpg',
      'https://thestayathomechef.com/wp-content/uploads/2016/06/Fried-Chicken-4-1.jpg'
    ],
    time: '30',
    ingredients: [
      {key: '2 Tbsp Salt'},
      {key: '1 Tbsp Paprika'},
      {key: '1 tsp Black Pepper'},
      {key: '½ tsp Celery Salt'},
      {key: '½ tsp Dried Sage'},
      {key: '½ tsp Garlic Powder'},
      {key: '½ tsp Ground Allspice'},
      {key: '½ tsp Dried Oregano'},
      {key: '½ tsp Dried Basil'},
      {key: '½ tsp Dried Marjoram'},
      {key: '½ cups All-Purpose Flour'},
      {key: '1 Tbsp Brown Sugar'},
      {key: '1 Tbsp Kosher Salt'},
      {key: 'Whole Chicken, Divided into 2 Breasts, 2 Thighs, 2 Drumsticks, 2 Wings'},
      {key: '1 Egg'},
      {key: '2 quarts Neutral Oil'}
    ],
    description: 
      ' 1 - Preheat fryer to 350°F. Thoroughly mix together all spices. Combine spices with flour, brown sugar and salt. Dip chicken pieces in egg white to lightly coat them, then transfer to flour mixture. Turn a few times and make sure the flour mix is really stuck to the chicken.\n\n' 
      + ' 2 - Repeat with all the chicken pieces. Let chicken pieces rest for 5 minutes so crust has a chance to dry a bit. Fry chicken in batches. Breasts and wings should take 12-14 minutes, and legs and thighs will need a few more minutes. Chicken pieces are done when a meat thermometer inserted into the thickest part reads 165°F. Let chicken drain on a few paper towels when it comes out of the fryer. Serve hot.'
  },
  {
    recipeId: 4,
    categoryId: 1,
    title: 'Perfect Fish Tacos',
    photo_url: 'https://hips.hearstapps.com/hmg-prod/images/190307-fish-tacos-112-1553283299.jpg',
    photosArray: [
      'https://hips.hearstapps.com/hmg-prod/images/190307-fish-tacos-112-1553283299.jpg',
      'http://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2014/04/WGC-Fish-Tacos-copy-2.jpg',
      'https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg',
    ],
    time: '35',
    ingredients: [
      {key: 'Juice of 1 Lime'},
      {key: '2 tsp Chilli Powder'},
      {key: '3 Tbsp Oil'},
      {key: '1 tsp Paprika'},
      {key: '½ tsp Ground Cumin'},
      {key: '½ tsp Cayenne Pepper'},
      {key: '2 tsp Black Pepper'},
      {key: '½ lb Flaky White Fish'},
      {key: '8 Large Tortillas'},
      {key: '2 tsp Kosher Salt'},
      {key: '1 Avacado'}
    ],
    description: 
      ' 1 - In a medium shallow bowl, whisk together olive oil, lime juice, paprika, chili powder, cumin, and cayenne. Add cod, tossing until evenly coated. Let marinate 15 minutes.\n\n' 
      + ' 2 - Meanwhile, make slaw: In a large bowl, whisk together mayonnaise, lime juice, cilantro, and honey. Stir in cabbage, corn, and jalapeño. Season with salt and pepper.\n\n' 
      + ' 3 - In a large nonstick skillet over medium-high heat, heat vegetable oil. Remove cod from marinade and season both sides of each filet with salt and pepper. Add fish flesh side-down. Cook until opaque and cooked through, 3 to 5 minutes per side.\n\n' 
      + ' 4 - Let rest 5 minutes before flaking with a fork. Assemble tacos: Serve fish over grilled tortillas with corn slaw and avocado. Squeeze lime juice on top and garnish with sour cream. '
  },
  {
    recipeId: 5,
    categoryId: 1,
    title: 'Chicken Fajitas',
    photo_url:
      'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Flavorful-Chicken-Fajitas_EXPS_GHBZ18_12540_B08_15_8b.jpg',
    photosArray: [
      'https://dadwithapan.com/wp-content/uploads/2015/07/Spicy-Chicken-Fajitas-22-1200x480.jpg',
      'https://3.bp.blogspot.com/-X-dHj7ORF9Q/XH4ssgTuSZI/AAAAAAAAEig/E46HP9wCfdsvyJFcMTX30cw-ICep8lF9ACHMYCw/s1600/chicken-fajitas-mexican-food-id-149559-buzzerg.jpg',
      'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201403-xl-chipotle-chicken-fajitas.jpg?itok=ghVcI5SQ'
    ],
    time: 35,
    ingredients: [
      {key: '½ tsp Dried Oregano'},
      {key: '4 Tbsp Oil'},
      {key: '½ tsp Salt'},
      {key: '2 Tbsp Lime Juice'},
      {key: '1 tsp Ground Cumin'},
      {key: '1 tsp Garlic Powder'},
      {key: '½ tsp Chilli Powder'},
      {key: '½ tsp Paprika'},
      {key: '1 lb Chicken Breast'},
      {key: '½ cup Onion, Chopped'},
      {key: '6 Large Tortillas'},
      {key: '4 Onions'},
      {key: '½ Green Pepper'},
      {key: '½ Red Pepper'}
    ],
    description:
      ' 1 - In a large bowl, combine 2 Tbsp oil, lemon juice and seasonings; add the chicken. Turn to coat; cover. Refrigerate for 1-4 hours\n\n' 
      + ' 2 - In a large skillet, saute peppers and onions in remaining oil until crisp-tender. Remove and keep warm. Drain chicken, discarding marinade. In the same skillet, cook chicken over medium-high heat for 5-6 minutes or until no longer pink.\n\n' 
      + ' 3 - Return pepper mixture to pan; heat through. Spoon filling down the center of tortillas; fold in half. Serve with toppings as desired.'
  },
  {
    recipeId: 6,
    categoryId: 0,
    title: 'Homemade Pepperoni Pizza',
    photo_url:
      'https://www.cookingclassy.com/wp-content/uploads/2014/07/pepperoni-pizza6+srgb..jpg',
    photosArray: [
      'https://www.cookingclassy.com/wp-content/uploads/2014/07/pepperoni-pizza6+srgb..jpg',
      'https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2014/09/Classic-Pepperoni-Pizza-3.jpg',
      'https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8aDM2L2g1Mi8xMzA5NzI3MzI2MjExMC5qcGd8N2MxZDhmNmI5ZTgzZDZlZWQyZGQ4YjFlZjUyNDlkMTExYjdkZDdlZmFkY2I0N2NmNjljOGViNmExZjIyMDU4Yw'
    ],
    time: 40,
    ingredients: [
      {key: '1 can (8 oz each) Hunts® Tomato Sauce-No Salt Added'},
      {key: '1/4 cup grated Parmesan cheese'},
      {key: '1/4 teaspoon dried oregano'},
      {key: '1 prebaked thin pizza crust (12-inch)'},
      {key: '1 cup shredded part-skim mozzarella cheese'},
      {key: '1/3 cup sliced pepperoni'},
    ],
    description:
      ' 1 - Preheat oven to 450°F. Combine tomato sauce, Parmesan cheese and oregano in small bowl; spread tomato sauce evenly over crust. Sprinkle pizza with mozzarella cheese; top with pepperoni.\n\n'
      + ' 2 - Place on ungreased pizza pan. Bake 12 to 15 minutes or until edges of crust are browned lightly and cheese melts. Cut pizza into 6 slices.'
  },
  {
    recipeId: 7,
    categoryId: 2,
    title: 'Classic Lasagna',
    photo_url: 'https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-3.jpg',
    photosArray: [
      'https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-3.jpg',
      'https://i.pinimg.com/originals/97/cb/e8/97cbe8c58ab4bc664bc4a02862112ac1.jpg',
      'https://keviniscooking.com/wp-content/uploads/2020/05/Homemade-Italian-Lasagna-square.jpg'
    ],
    time: '75',
    ingredients: [
      {key: '¾ lbs Lagasna Noodles'},
      {key: '1 tsp Extra Virign Olive Oil'},
      {key: '2 lbs Ground Beef'},
      {key: '4 cloves Garlic, Minced'},
      {key: '2 tsp Dried Oregano'},
      {key: 'Kosher Salt'},
      {key: 'Freshly Ground Black Pepper'},
      {key: '2 (32 oz) jars Marinara Sauce'},
      {key: '16 oz Whole Milk Ricotta'},
      {key: '½ cup Freshly Grated Parmesan, Divided'},
      {key: '¼ cup Parsley, Chopped'},
      {key: '1 Large Egg'},
      {key: '2 lbs Mozarella, Sliced'},
    ],
    description:
      ' 1 - Preheat oven to 375º F. In a large pot of salted boiling water, cook pasta according to package directions until al dente, less 2 minutes. Drain and drizzle a bit of olive oil to prevent noodles from sticking together.\n\n' 
      + ' 2 - Meanwhile, in a large pot over medium-high heat, heat oil. Cook ground beef until no longer pink, breaking up with a wooden spoon. Remove from heat and drain fat. Return beef to skillet and add garlic and oregano and cook, stirring, for 1 minute. Season with salt and pepper, then add marinara and stir until warmed through.\n\n' 
      + ' 3 - Combine ricotta, ¼ cup Parmesan, parsley, and egg in a large mixing bowl and season with salt and pepper. Set aside.\n\n' 
      + ' 4 - In a large casserole dish, evenly spread a quarter of the meat sauce across the bottom of the dish, then top with a single layer of lasagna noodles, a layer of ricotta mixture, a single layer of mozzarella, and a layer of meat sauce. Repeat layers, topping the last layer of noodles with meat sauce, Parmesan, and mozzarella.\n\n' 
      + ' 5 - Cover with foil and bake for 15 minutes, then increase temperature to 400º F and bake uncovered for 18 to 20 minutes.\n\n'
      + ' 6 - Garnish with parsley before serving.'
  },
  {
    recipeId: 8,
    categoryId: 2,
    title: 'Spaghetti Carbonara',
    photo_url: 'https://truffle-assets.imgix.net/655ce202-862-butternutsquashcarbonara-land.jpg',
    photosArray: [
      'https://truffle-assets.imgix.net/655ce202-862-butternutsquashcarbonara-land.jpg',
      'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
      'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
    ],
    time: 15,
    ingredients: [
      {key: '50g Parmesan Cheese'},
      {key: '100g Pancetta'},
      {key: '350g Spaghetti'},
      {key: '2 Garlic Cloves'},
      {key: '50g Butter'},
      {key: '3 Eggs'},
      {key: '2 tsp Salt'},
      {key: '2 tsp Black Pepper'}
    ],
    description:
      ' 1 - Put the egg yolks into a bowl, finely grate in the Parmesan, season with pepper, then mix well with a fork and put to one side.\n\n' 
      + ' 2 - Cut any hard skin off the pancetta and set aside, then chop the meat. Cook the spaghetti in a large pan of boiling salted water until al dente.\n\n' 
      + ' 3 - Meanwhile, rub the pancetta skin, if you have any, all over the base of a medium frying pan (this will add fantastic flavour, or use 1 Tbsp of oil instead), then place over a medium-high heat. Peel the garlic, then crush with the palm of your hand, add it to the pan and leave it to flavour the fat for 1 minute. \n\n' 
      + ' 4 - Stir in the pancetta, then cook for 4 minutes, or until it starts to crisp up. Pick out and discard the garlic from the pan, then, reserving some of the cooking water, drain and add the spaghetti.\n\n' 
      + ' 5 - Toss well over the heat so it really soaks up all that lovely flavour, then remove the pan from the heat. Add a splash of the cooking water and toss well, season with pepper, then pour in the egg mixture – the pan will help to cook the egg gently, rather than scrambling it.\n\n' 
      + ' 6 - Toss well, adding more cooking water until it’s lovely and glossy. Serve with a grating of Parmesan and an extra twist of pepper.'
  },
  {
    recipeId: 9,
    categoryId: 2,
    title: 'Lazania',
    photo_url: 'https://images8.alphacoders.com/817/817353.jpg',
    photosArray: [
      'https://images8.alphacoders.com/817/817353.jpg',
      'https://previews.123rf.com/images/somegirl/somegirl1509/somegirl150900048/46103208-top-view-of-a-delicious-traditional-italian-lasagna-made-with-minced-beef-bolognese-sauce-topped-wit.jpg',
      'https://truffle-assets.imgix.net/87f324e4-YOUTUBE-NO-TXT.00_03_19_14.Imagen_fija001.jpg',
      'https://images4.alphacoders.com/817/817350.jpg'
    ],
    time: 100,
    ingredients: [
      {key: '1 large Onion'},
      {key: '1 lb Ground Beef'},
      {key: '5 Garlic Cloves'},
      {key: '1 lb Lasagna Noodles'},
      {key: '1 lb Italian Sauce'},
      {key: '28 oz Crushed Tomatoes'},
      {key: '12 oz Tomato Paste'},
      {key: '2 Tbsp Sugar'},
      {key: '¼ cup Fresh Parsley, Minced'},
      {key: '½ cup Dried Basil'},
      {key: '½ tsp Salt'},
      {key: '1 tsp Fennel Seeds'},
      {key: '¼ tsp Black Pepper'},
      {key: '1 large Egg'},
      {key: '1 lb Mozzarella'},
      {key: '1 cup Parmesan Cheese'},
      {key: '30 oz Ricotta Cheese'}
    ],
    description:
      ' 1 - Cook noodles according to package directions; drain.\n\n' 
      + ' 2 - Meanwhile, in a Dutch oven, cook sausage, beef and onion over medium heat 8-10 minutes or until meat is no longer pink, breaking up meat into crumbles. Add garlic; cook 1 minute. Drain.\n\n' 
      + ' 3 - Stir in tomatoes, tomato paste, water, sugar, 3 Tbsp parsley, basil, fennel, ½ tsp salt and pepper; bring to a boil. Reduce heat; simmer, uncovered, 30 minutes, stirring occasionally.\n\n' 
      + ' 4 - In a small bowl, mix egg, ricotta cheese, and remaining parsley and salt.\n\n' 
      + ' 5 - Preheat oven to 375°. Spread 2 cups meat sauce into an ungreased 13x9-in. baking dish. Layer with 3 noodles and a third of the ricotta mixture. Sprinkle with 1 cup mozzarella cheese and 2 Tbsp Parmesan cheese.\n\n' 
      + ' 6 - Repeat layers twice. Top with remaining meat sauce and cheeses (dish will be full). Bake, covered, 25 minutes. Bake, uncovered, 25 minutes longer or until bubbly. Let stand 15 minutes before serving.'
  },
  {
    recipeId: 10,
    categoryId: 4,
    title: 'Triple Berry Smoothie',
    photo_url:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
    photosArray: [
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
      'https://www.vitamix.com/media/other/images/xVitamix-Triple-Berry-Smoothie-square-crop__1.jpg.pagespeed.ic.OgTC3ILD3R.jpg',
      'http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ'
    ],
    time: '10',
    ingredients: [
      {key: '1 Banana'},
      {key: '½ lb Frozen Straberries'},
      {key: '½ liter Greek Yogurt'},
    ],
    description: 
      ' 1 - In a blender, combine all ingredients and blend until smooth.\n\n'
      + ' 2 - Divide between 2 cups and top with blackberries, if desired.'
  },
  {
    recipeId: 11,
    categoryId: 3,
    title: 'Brownies',
    photo_url: 'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
      'https://assets.epicurious.com/photos/57b360e7df05218810c5212a/6:4/w_620%2Ch_413/katharine-hepburns-brownies.jpg',
      'https://www.hersheyland.com/content/dam/hersheyland/en-us/recipes/recipe-images/60-hersheys-chocolate-one-bowl-brownies.jpg'
    ],
    time: '45',
    ingredients: [
      {key: '½ cup + 3 Tbsp Butter'},
      {key: '1 cup Sugar'},
      {key: '2 Eggs'},
      {key: '2 tsp Vanilla Extract'},
      {key: '⅓ cup + 3 Tbsp Unsweetened Cocoa Powder'},
      {key: '½ cup All-Purpose Flour'},
      {key: '¼ tsp Salt'},
      {key: '¼ tsp Baking Powder'},
      {key: '1 Tbsp Honey'},
      {key: '1 cup Confectioners\' Sugar'},
    ],
    description: 
      ' 1 - Preheat oven to 350º F (175º C). Grease and flour an 8-inch square pan.\n\n' 
      + ' 2 - In a large saucepan, melt ½ cup butter. Remove from heat, and stir in sugar, eggs, and 1 tsp vanilla. Beat in ⅓ cup cocoa, ½ cup flour, salt, and baking powder. Spread batter into prepared pan.\n\n' 
      + ' 3 - Bake in preheated oven for 25 to 30 minutes. Do not overcook.\n\n' 
      + ' 4 - To Make Frosting: Combine 3 Tbsps softened butter, 3 Tbsps cocoa, honey, 1 tsp vanilla extract, and 1 cup confectioners\' sugar. Stir until smooth. Frost brownies while they are still warm'
  },
  {
    recipeId: 12,
    categoryId: 4,
    title: 'Vanilla Berry Protein Smoothie',
    photo_url: 'https://i2.wp.com/gatherforbread.com/wp-content/uploads/2017/05/Raspberry-Vanilla-Protein-Smoothie-square-7.jpg?fit=750%2C750&ssl=1',
    photosArray: [
      'https://i2.wp.com/gatherforbread.com/wp-content/uploads/2017/05/Raspberry-Vanilla-Protein-Smoothie-square-7.jpg?fit=750%2C750&ssl=1',
      'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/dd3ea4e4a8dd42ec97db43d518431bd6/BFV21177_ProteinSmoothies5Ways-FB1080SQ.jpg'
    ],
    time: '10',
    ingredients: [
    {key: ' ½ cups Water/Yogurt/Milk of Choice'},
      {key: '1 scoop Vanilla Protein Powder'},
      {key: '1 cup Strawberry, Frozen'},
      {key: '1 cup Blueberry, Frozen'},
      {key: '½ cup Raspberry, Frozen'},
      {key: '½ cup Blackberry, Frozen'},
    ],
    description: ' 1 - In a blender, combine all ingredients and blend until smooth.'
  },
  {
    recipeId: 13,
    categoryId: 4,
    title: 'Green Protein Power Breakfast Smoothie',
    photo_url: 'https://www.ilovevegan.com/wp-content/uploads/2014/04/Green-Smoothie-1280-x-1280.jpg',
    photosArray: [
      'https://www.ilovevegan.com/wp-content/uploads/2014/04/Green-Smoothie-1280-x-1280.jpg',
      'https://www.ilovevegan.com/wp-content/uploads/2014/04/Green-Protein-Power-Breakfast-Smoothie-Pre-and-Post-Blend2.jpg'
    ],
    time: '7',
    ingredients: [
      {key: '1 cup of Unsweetened Almond Milk'},
      {key: '1 Ripe Banana, Frozen'},
      {key: '½ cup Mango, Chopped & Frozen'},
      {key: '1-2 large handfuls of Baby Spinach'},
      {key: '¼ cup Pumpkin Seeds (Pepita Seeds)'},
      {key: '2 Tbsp Hemp Hearts (Hulled Hemp Seeds)'},
      {key: '½ scoop Vanilla Protein Powder + ¼ cup Water (Optional'}
    ],
    description: ' 1 - In a blender layer the spinach, banana, mango, pumpkin seeds, and hemp hearts. Add the almond milk and blend until smooth. Blend this smoothie for about 2 minutes (long enough to blend the pumpkin seeds really really smooth.)'
  },
  {
    recipeId: 14,
    categoryId: 4,
    title: 'Carrot Sunshine Smoothie',
    photo_url: 'https://www.ilovevegan.com/wp-content/uploads/2016/03/Carrot-Orange-Fruit-Smoothie2.jpg',
    photosArray: [
      'https://www.ilovevegan.com/wp-content/uploads/2016/03/Carrot-Orange-Fruit-Smoothie2.jpg',
      'https://www.ilovevegan.com/wp-content/uploads/2016/03/Carrot-Orange-Fruit-Smoothie.jpg',
      'https://www.ilovevegan.com/wp-content/uploads/2016/03/Carrot-Orange-Fruit-Smoothie6.jpg'
    ],
    time: '5',
    ingredients: [
      {key: '1 cup Orange Juice'},
      {key: '1 cup Mixed Fruit (Peach, Mango, Pineapple, Strawberry Mix)'},
      {key: '1 large Carrot'},
      {key: '2 Tbsp Coconut Yogurt'},
      {key: '1-2 Tbsp Hemp Seeds'},
      {key: '1 Tbsp Flax Seed Oil (Optional - but SO good)'},
      {key: '½ Tbsp Maple Syrup (Optional)'}
    ],
    description: ' 1 - In a blender combine all ingredients and blend on high until smooth.'
  },
  {
    recipeId: 15,
    categoryId: 4,
    title: 'PB & Banana Iced Mocha',
    photo_url: 'https://www.ilovevegan.com/wp-content/uploads/2014/06/mochasmoothie-688x917.jpg',
    photosArray: [
      'https://www.ilovevegan.com/wp-content/uploads/2014/06/mochasmoothie-688x917.jpg',
      'https://www.ilovevegan.com/wp-content/uploads/2014/06/mocha-smoothie.jpg',
      'https://www.ilovevegan.com/wp-content/uploads/2014/06/mocha-smoothie-ingredients-4.jpg'
    ],
    time: '7',
    ingredients: [
      {key: '2 Frozen Bananas'},
      {key: '1 cup Unsweetened Soy Milk (Use Vanilla for Extra Sweetness)'},
      {key: '1 cup Iced Coffee Cubes'},
      {key: '2 Tbsp Coconut Yogurt'},
      {key: '¼ tsp Vanilla Extract'},
      {key: '2 Tbsp Cocoa Powder'},
      {key: '1 Tbsp Cacao Nibs'},
      {key: '1 Tbsp Dark Chocolate Chips'},
      {key: '1 Tbsp Natural Peanut Butter'}
    ],
    description: ' 1 - In a blender combine all ingredients and blend on high until smooth.'
  },
  {
    recipeId: 16,
    categoryId: 6,
    title: 'Sheet Pan Sausage and Egg Breakfast Bake',
    photo_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sheet-pan-sausage-and-egg-breakfast-bake-1620053515.jpg?crop=1xw:0.9989806320081549xh;center,top&resize=640:*',
    photosArray: [
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sheet-pan-sausage-and-egg-breakfast-bake-1620053515.jpg?crop=1xw:0.9989806320081549xh;center,top&resize=640:*',
      'https://www.ilovevegan.com/wp-content/uploads/2014/06/mocha-smoothie.jpg',
      'https://www.ilovevegan.com/wp-content/uploads/2014/06/mocha-smoothie-ingredients-4.jpg'
    ],
    time: '50',
    ingredients: [
      {key: '4 Uncooked Breakfast Sausages (6 oz Total)'},
      {key: '4 Slices Bacon'},
      {key: '8 oz. Small Cremini Mushrooms, Halved or Quartered'},
      {key: '16 Campari or Cocktail Tomatoes, Halved'},
      {key: '2 cloves Garlic, Finely Chopped'},
      {key: '1 Tbsp. Olive Oil'},
      {key: 'Kosher Salt and Pepper'},
      {key: '4 large Eggs'},
      {key: '½ cup Flat-Leaf Parsley, Chopped'},
      {key: 'Toast for Serving'}
    ],
    description: 
      ' 1 - Heat oven to 400°F. On large rimmed baking sheet, roast sausages and bacon, 15 minutes. \n\n'
      + ' 2 - In large bowl, toss mushrooms, tomatoes, and garlic with oil and a pinch each of salt and pepper. Add to baking sheet and roast 10 minutes.\n\n'
      + ' 3 - Make wells among vegetables and crack 1 egg into each space; return to oven and roast until meat is cooked through and egg whites are opaque throughout, 8 to 10 minutes more. \n\n'
      + ' 4 - Sprinkle with parsley and serve with toast if desired.'
  },
  {
    recipeId: 17,
    categoryId: 6,
    title: 'Spiced Apple Breakfast Bowl',
    photo_url: 'https://www.ilovevegan.com/wp-content/uploads/2016/09/Spiced-Apple-Oatmeal-Bowl-ilovevegan-0273-3.jpg',
    photosArray: [
      'https://www.ilovevegan.com/wp-content/uploads/2016/09/Spiced-Apple-Oatmeal-Bowl-ilovevegan-0273-3.jpg',
      'https://www.ilovevegan.com/wp-content/uploads/2016/09/Spiced-Apple-Oatmeal-Bowl-ilovevegan-0298-33.jpg',
      'https://www.ilovevegan.com/wp-content/uploads/2016/09/Spiced-Apple-Oatmeal-Bowl-ilovevegan-0266-3.jpg'
    ],
    time: '15',
    ingredients: [
      {key: '2 tsp Coconut Oil'},
      {key: '½ cup Chopped Apple (approx. ½ small apple)'},
      {key: '2 Tbsp Chopped Pecans'},
      {key: '¼ tsp Cinnamon'},
      {key: '¼ tsp Pumpkin Pie Spice'},
      {key: '1 ½ cups Water'},
      {key: '¾ cup Large Flake Oats'},
      {key: 'Pinch Salt'},
      {key: '1 Tbsp Ground Flax Seeds'},
      {key: '2 Tbsp Thompson Raisins'},
      {key: '1 Tbsp Brown Sugar'},
      {key: 'splash Almond Milk'},
    ],
    description: 
      ' 1 - In a small saucepan, heat coconut oil over medium-high heat. Add the apple and sauté for 2 minutes. \n\n' 
      + ' 2 - Add the pecans, pumpkin pie spice, and cinnamon. Stir and cook for 1 minute. Add water and bring to a boil. \n\n'
      + ' 3 - Add the oats and a pinch of salt. Turn heat down to medium and simmer until oats begin to thicken up. \n\n'
      + ' 4 - Add the ground flax seed (this will help thicken the oatmeal), raisins, brown sugar, and a splash of almond milk. Cook until thick. \n\n'
      + ' 5 - Serve in a bowl topped with a generous amount of vanilla almond milk, a sprinkle each of brown sugar, pecans, raisins, granola, (and pumpkin seeds - optional), fresh apple slices, and a drizzle of molasses.'
  },
  {
    recipeId: 18,
    categoryId: 6,
    title: 'Ham and Swiss Omelet',
    photo_url: 'https://food-images.files.bbci.co.uk/food/recipes/cheeseomelette_80621_16x9.jpg',
    photosArray: [
      'https://food-images.files.bbci.co.uk/food/recipes/cheeseomelette_80621_16x9.jpg',
      'https://cdn.greatlifepublishing.net/wp-content/uploads/sites/2/2014/11/21135757/iStock_000036614706_Small.jpg',
      'https://www.weightwatchers.com/images/1033/dynamic/foodandrecipes/2011/11/HamCheeseOmelet_061_xl.jpg'
    ],
    time: '20',
    ingredients: [
      {key: '1 Tbsp Butter'},
      {key: '3 Eggs'},
      {key: '3 Tbsps Water'},
      {key: '⅛ tsp Salt'},
      {key: '⅛ tsp Pepper'},
      {key: '½ cup Fully Cooked Ham, Cubed'},
      {key: '¼ cup Swiss Cheese, Shredded'},
    ],
    description: 
      ' 1 - In a small nonstick skillet, melt butter over medium-high heat. Whisk the eggs, water, salt and pepper. Add egg mixture to skillet (mixture should set immediately at edges). \n\n'
      + ' 2 - As eggs set, push cooked edges toward the center, letting uncooked portion flow underneath. When the eggs are set, place ham on one side and sprinkle with cheese; fold other side over filling. Slide omelet onto a plate.'
  },
  {
    recipeId: 19,
    categoryId: 6,
    title: 'Banana Oatmeal Pancakes',
    photo_url: 'https://www.thehealthymaven.com/wp-content/uploads/2018/03/Banana-Oatmeal-Blender-Pancakes-4-e1561651840217.jpg',
    photosArray: [
      'https://www.thehealthymaven.com/wp-content/uploads/2018/03/Banana-Oatmeal-Blender-Pancakes-4-e1561651840217.jpg',
      'http://www.makingthymeforhealth.com/wp-content/uploads/2015/09/Banana-Oatmeal-Blender-Pancakes-3_thumb.jpg',
      'http://031b7b3.netsolhost.com/WordPress/wp-content/uploads/2015/02/Banana-oatmeal-pancakes.jpg'
    ],
    time: '15',
    ingredients: [
      {key: '2 cups Complete Whole Wheat Pancake Mix'},
      {key: '1 large firm Banana, Finely Chopped'},
      {key: '½ cup Old-Fashioned Oats'},
      {key: '¼ cup Chopped Walnuts'}, 
    ],
    description: ' 1 - Prepare pancake batter according to package directions. Stir in the banana, oats and walnuts. Pour batter by ¼ cupfuls onto a hot griddle coated with cooking spray; turn when bubbles form on top. Cook until the second side is golden brown.'
  },
  {
    recipeId: 20,
    categoryId: 4,
    title: 'Strawberry Lemonade Smoothie',
    photo_url: 'https://onelittleproject.com/wp-content/uploads/2017/04/strawberry_lemonade_smoothie_5.jpg',
    photosArray: [
      'https://onelittleproject.com/wp-content/uploads/2017/04/strawberry_lemonade_smoothie_5.jpg',
      'https://yupitsvegan.com/wp-content/uploads/2019/06/strawberry-lemonade-smoothies-1.jpg',
      'https://www.vitacost.com/blog/wp-content/uploads/2017/04/Vitamin-Packed-Strawberry-Lemonade-Smoothie-Recipe-e1491323021842.jpg'
    ],
    time: '5',
    ingredients: [
      {key: '2 cups Lemonade'},
      {key: '¾ cup Lemon Yogurt'},
      {key: '½ tsp Vanilla Extract'},
      {key: '2 cups Frozen Unsweetened Strawberries'},
    ],
    description: ' 1 - Place all ingredients in a blender; cover and process 15 seconds or until blended. Serve immediately.'
  },

  {
    recipeId: 21,
    categoryId: 0,
    title: 'Basic Pizza Dough',
    photo_url: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/0/RX-FNM_030111-All-Star-Pizzas-028_s4x3.jpg.rend.hgtvcom.826.620.suffix/1383671735013.jpeg',
    photosArray: [
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/0/RX-FNM_030111-All-Star-Pizzas-028_s4x3.jpg.rend.hgtvcom.826.620.suffix/1383671735013.jpeg',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/26/2/GT0303_pizza-dough_s4x3.jpg.rend.hgtvcom.616.462.suffix/1433073345479.jpeg',
      'https://www.onceuponachef.com/images/2020/06/Pizza-Dough-scaled.jpg'
    ],
    time: '120',
    ingredients: [
      {key: '1 Tbsp Sugar'},
      {key: '1 packet (¼ oz) Active Dry Yeast'},
      {key: '3 Tbps Extra Virgin Olive Oil'},
      {key: '3 ¾ cups All-Purpose Flour'},
      {key: '1 ½ tsp Salt'},
    ],
    description: 
      ' 1 - Whisk 1 ⅓ cups warm water (105º F) and the sugar in a bowl; sprinkle the yeast on top. Set aside until foamy, about 10 minutes. Stir in the olive oil.\n\n' 
      + ' 2 - Whisk the flour and salt in a large bowl. Make a well in the center of the flour and pour in the yeast mixture. Gradually stir with a wooden spoon to make a rough dough.\n\n' 
      + ' 3 - Turn the dough out onto a lightly floured surface. Knead until smooth and elastic, about 5 minutes, dusting with more flour if necessary. Form into 2 balls. Brush 2 large bowls with olive oil, add a ball of dough to each and turn to coat with the oil. Cover tightly with plastic wrap and set aside at room temperature until doubled in size, about 1 hour, 30 minutes. Roll out and top as desired.\n\n' 
      + ' 4 - Note: Can be wrapped in plastic wrap and frozen for up to 1 month'
  },
  {
    recipeId: 22,
    categoryId: 4,
    title: 'Cookies & Cream Milkshake',
    photo_url: 'https://bellyfull.net/wp-content/uploads/2020/07/Oreo-Milkshake-blog-3.jpg',
    photosArray: [
      'https://bellyfull.net/wp-content/uploads/2020/07/Oreo-Milkshake-blog-3.jpg',
      'https://thesaltymarshmallow.com/wp-content/uploads/2018/08/oreo-milkshakes2.jpg',
      'https://eatingglutenanddairyfree.com/wp-content/uploads/2020/02/EGADFHomemadeoreomilkshake6.jpg'
    ],
    time: 5,
    ingredients: [
      {key: '2 cups Vanilla Ice Cream'},
      {key: '⅔ cup Milk'},
      {key: '8 Oreo Cookies'},
      {key: '1 tsp Vanilla Extract (Optional)'},
      {key: 'Whipped Cream (Optional)'}
    ],
    description: 
      ' 1 - Add the ice cream, milk, and Oreo cookies to your blender. Pulse until mostly smooth.\n\n' 
      + ' 2 - Serve in large glasses with whipped cream if desired.'
  },
  {
    recipeId: 23,
    categoryId: 3,
    title: 'Chocolate Lava Cake',
    photo_url: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/02/chocolate-lava-cakes-2-600x900.jpg',
    photosArray: [
      'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/02/chocolate-lava-cakes-2-600x900.jpg',
      'https://www.foodnetwork.com/content/dam/images/food/video/0/02/023/0235/0235472.jpg',
      'https://www.garnishandglaze.com/wp-content/uploads/2015/02/molten-lava-cake-9.jpg'
    ],
    time: '25',
    ingredients: [
      {key: '6 oz Semi-Sweet Chocolate'},
      {key: '1 stick of Butter'},
      {key: '¼ cup All-Purpose Flour'},
      {key: '½ cup Confectioners\' Sugar'},
      {key: '⅛ tsp Salt'},
      {key: '2 Large Eggs'},
      {key: '2 Large Egg Yolks'},
      {key: 'Icecream, Raspberries, Chocolate Syrup (Optional)'},
    ],
    description: 
      ' 1 - Spray four 6 oz ramekin with nonstick cooking spray and dust with cocoa powder. This ensures the cakes will seamlessly come out of the ramekins when inverted onto a plate in step 7. *Or spray half of a 12-count muffin pan and dust with cocoa powder. If baking in a muffin pan, the recipe will yield 6 cakes.\n\n' 
      + ' 2 - Preheat oven to 425º F (218º C).\n\n' 
      + ' 3 - Coarsely chop the chocolate. Place butter into a medium heat-proof bowl, then add chopped chocolate on top. Microwave on high in 10 second increments, stirring after each until completely smooth. Set aside.\n\n' 
      + ' 4 - Whisk the flour, confectioners’ sugar, and salt together in a small bowl. Whisk the eggs and egg yolks together until combined in another small bowl. Pour the flour mixture and eggs into the bowl of chocolate. Slowly stir everything together using a rubber spatula or wooden spoon. If there are any lumps, gently use your whisk to rid them. The batter will be slightly thick.\n\n' 
      + ' 5 - Spoon chocolate batter evenly into each prepared ramekin or muffin cup.\n\n' 
      + ' 6 - Place ramekins onto a baking sheet and bake for 12-14 minutes until the sides appear solid and firm– the tops will still look soft.\n*If baking in a muffin pan, the cakes only take about 8-10 minutes.\n\n' 
      + ' 7 - Allow to cool for 1 minute, then cover each with an inverted plate and turn over. Use an oven mitt because those ramekins are hot! The cakes should release easily from the ramekin. *If you used a muffin pan, use a spoon to release the cakes from the pan and place each upside down on plates.\n\n' 
      + ' 8 - Add toppings. Serve immediately.'
  },
  {
    recipeId: 24,
    categoryId: 6,
    title: 'Omelette Du Fromage\n(Cheese Omelette)',
    photo_url: 'https://assets.epicurious.com/photos/54cad8d21f13bb9b2edf9930/6:4/w_620%2Ch_413/51262180_cheese-omelette_1x1.jpg',
    photosArray: [
      'https://assets.epicurious.com/photos/54cad8d21f13bb9b2edf9930/6:4/w_620%2Ch_413/51262180_cheese-omelette_1x1.jpg',
      'https://caciobebe.com/wp-content/uploads/2020/11/DSC_1146-2.jpg',
      'https://video-images.vice.com/articles/58ef6567db85c76446efadf3/lede/1492084191479-Screen-Shot-2017-04-13-at-124842.png?crop=1xw:1xh;center,center&resize=1200:*',
    ],
    time: 15,
    ingredients: [
      {key: '3 Eggs'},
      {key: '1 Tbsp Milk'},
      {key: 'Salt & Pepper'},
      {key: '2 Tbsp Butter'},
      {key: '¼ cup Cheese, Shredded'},
    ],
    description: 
      ' 1 - Beat eggs in a bowl with a whisk. Add milk and season with salt and white pepper. Whisk for a few minutes until egg mixture is foamy; beating in air makes the omelette fluffy.\n\n'
      + ' 2 - Melt butter in a small, nonstick skillet over medium-low heat. Pour in egg mixture and twirl skillet so bottom is evenly covered with egg. Cook for 1 minute until egg starts to set. Lift edges with a spatula and tilt the skillet so uncooked egg mixture can run towards the bottom of the skillet to set. Repeat until no visible liquid egg remains.\n\n' 
      + ' 3 - Carefully flip omelette and cook for another 30 seconds to 1 minute. Sprinkle cheese in one line in the middle of the omelette and fold omelette in half. Cook for 20 seconds, then slide omelette onto plate'
  },
  {
    recipeId: 25,
    categoryId: 6,
    title: 'Homemade Waffles',
    photo_url: 'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2020_belgian-style-waffles_16700_760x580.jpg?ext=.jpg',
    photosArray: [
      'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2020_belgian-style-waffles_16700_760x580.jpg?ext=.jpg',
      'https://www.spendwithpennies.com/wp-content/uploads/2020/01/Homemade-Waffles-SpendWithPennies-4.jpg',
      'https://tatyanaseverydayfood.com/wp-content/uploads/2020/09/Cinnamon-Waffles-with-Fruit.jpg',
    ],
    time: 25,
    ingredients: [
      {key: '2 cups Flour'},
      {key: '1 Tbsp Baking Powder'},
      {key: '½ tsp Salt'},
      {key: '2 Tbsp Sugar'},
      {key: '2 Eggs'},
      {key: '1 ⅔ cup Milk'},
      {key: '⅓ cup Butter, Melted (or Oil)'},
    ],
    description: 
      ' 1 - Preheat waffle iron according to manufacturer\'s directions.\n\n' 
      + ' 2 - Place flour, baking powder, sugar and salt in a bowl. Whisk to combine.\n\n' 
      + ' 3 - In a small bowl, mix egg yolks, milk and butter. Set aside.\n\n' 
      + ' 4 - In a separate bowl, beat egg whites with a mixer on medium high speed until stiff peaks form.\n\n' 
      + ' 5 - Add egg yolk mixture to flour mixture and stir to combine. Fold in egg whites.\n\n' 
      + ' 6 - Drop by large spoonfuls onto greased waffle iron, close the lid and cook about 3-5 minutes.'
  },
  {
    recipeId: 26,
    categoryId: 5,
    title: 'Hamburger Patties',
    photo_url: 'https://cdn-aiapl.nitrocdn.com/KZJKWDkEwMJCwERIlnRsPNdqobwBIlEo/assets/static/optimized/rev-e0253d2/wp-content/uploads/2020/05/Best-Hamburger-Patty-Recipe-14-650x882.jpg',
    photosArray: [
      'https://cdn-aiapl.nitrocdn.com/KZJKWDkEwMJCwERIlnRsPNdqobwBIlEo/assets/static/optimized/rev-e0253d2/wp-content/uploads/2020/05/Best-Hamburger-Patty-Recipe-14-650x882.jpg',
      'https://cdn-aiapl.nitrocdn.com/KZJKWDkEwMJCwERIlnRsPNdqobwBIlEo/assets/static/optimized/rev-e0253d2/wp-content/uploads/2020/05/Best-Hamburger-Patty-Recipe-21-650x950.jpg',
      'https://cdn-aiapl.nitrocdn.com/KZJKWDkEwMJCwERIlnRsPNdqobwBIlEo/assets/static/optimized/rev-e0253d2/wp-content/uploads/2020/05/Best-Hamburger-Patty-Recipe-18-650x957.jpg',
    ],
    time: 25,
    ingredients: [
      {key: '2 lbs Ground Chuck'},
      {key: '½ cup Saltine Crackers, Crushed (or Panko Breakcrumbs)'},
      {key: '1 large Egg'},
      {key: '2 Tbsp Worchestershire Sauce'},
      {key: '2 Tbsp Milk'},
      {key: '1 tsp Salt'},
      {key: '1 tsp Garlic Powder'},
      {key: '1 tsp Onion Powder'},
      {key: '½ tsp Black Pepper'},
    ],
    description:
      ' 1 - Set out a large mixing bowl. Add in the ground beef, crushed crackers, egg, Worcestershire sauce, milk, salt, garlic powder, onion powder, and pepper. Mix by hand until the meat mixture is very smooth.\n\n'
      + ' 2 - Press the meat down in the bowl, into an even disk. Use a knife to cut and divide the hamburger patty mixture into 6 – ⅓ pound grill or skillet patties, or 12 thin griddle patties.\n\n'
      + ' 3 - Set out a baking sheet, lined with wax paper or foil, to hold the patties. One at a time, gather the patty mix and press firmly into patties. Shape them just slightly larger than the buns you plan to use, to account for shrinkage during cooking. Set the patties on the baking sheet. Use a spoon to press a dent in the center of each patty so they don\'t puff up as they cook. If you need to stack the patties separate them with a sheet of wax paper.\n\n'
      + ' 4 - Preheat the grill or a skillet to medium heat. (Approximately 350º-400º F.)\n\n'
      + ' 5 - For thick patties: 3-4 minutes per side.\n'
      + '      For thin patties: 2 minutes per side.\n\n'
      + ' 6 - Stack the hot patties on hamburger buns, and top with your favorite hamburgers toppings. Serve warm.'
  },
  {
    recipeId: 27,
    categoryId: 3,
    title: 'Creamy Caramel Flan',
    photo_url: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Creamy-Caramel-Flan_EXPS_FT20_2197_F_0723_1.jpg',
    photosArray: [
      'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Creamy-Caramel-Flan_EXPS_FT20_2197_F_0723_1.jpg',
      'https://www.cookingclassy.com/wp-content/uploads/2020/09/flan-6.jpg',
      'https://mccormick.widen.net/content/fdtoqhhrps/jpeg/flan_de_queso_cremoso_creamy_cheese_flan5769.jpg',
    ],
    time: 120,
    ingredients: [
      {key: '¾ cup Sugar'},
      {key: '¼ cup Water'},
      {key: '1 package (8 oz) Cream Cheese, Softened'},
      {key: '5 large Eggs'},
      {key: '1 can (14 oz) Sweetend Condensed Milk'},
      {key: '1 can (12 oz) Evaporated Milk'},
      {key: '1 tsp Vanilla Extract'},
    ],
    description:
      ' 1 - In a heavy saucepan, cook sugar and water over medium-low heat until melted and golden, about 15 minutes. Brush down crystals on the side of the pan with additional water as necessary. Quickly pour into an ungreased 2-qt. round baking or souffle dish, tilting to coat the bottom; let stand for 10 minutes.\n\n'
      + ' 2 - Preheat oven to 350°. In a bowl, beat the cream cheese until smooth. Beat in eggs, 1 at a time, until thoroughly combined. Add remaining ingredients; mix well. Pour over caramelized sugar.\n\n'
      + ' 3 - Place the dish in a larger baking pan. Pour boiling water into larger pan to a depth of 1 in. Bake until the center is just set (mixture will jiggle), 50-60 minutes.\n\n'
      + ' 4 - Remove dish from a larger pan to a wire rack; cool for 1 hour. Refrigerate overnight.\n\n'
      + ' 5 - To unmold, run a knife around edges and invert onto a large rimmed serving platter. Cut into wedges or spoon onto dessert plates; spoon sauce over each serving.'
  },
  {    
    recipeId: 28,
    categoryId: 0,
    title: 'Classic Margherita Pizza',
    photo_url: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_913/k%2Farchive%2Fb36036a54e1cf9c084f4b702a63e5a08f1e98983',
    photosArray: [
      'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_913/k%2Farchive%2Fb36036a54e1cf9c084f4b702a63e5a08f1e98983',
      'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_913/k%2Farchive%2Ff2203c0e403286947dcf80815b656236fec71e88',
      'https://www.onceuponachef.com/images/2020/06/Margherita-Pizza-scaled.jpg',
    ],
    time: 30,
    ingredients: [
      {key: '4 cloves Garlic'},
      {key: '1 (14.5 oz) can Diced Tomatoes'},
      {key: '2 Tbsp Olive Oil'},
      {key: '1 tsp Granulated Sugar'},
      {key: '1 tsp Balsamic Vinegar'},
      {key: '¾ tsp Salt'},
      {key: '⅛ tsp Freshly Ground Black Pepper'},
      {key: '1 lb Pizza Dough (at room temp for 1 hour)'},
      {key: 'All-Purpose Flour'},
      {key: '2 Tbsp Extra Virgin Olive Oil'},
      {key: '¼ cup Fresh Basil Leaves (Sliced into Ribbons if Large)'},
      {key: '8 oz Fresh Mozzarella Cheese, Sliced and Divided'},
      {key: '¼ cup Grated Parmesan Cheese'},
    ],
    description:
      ' 1 - Arrange a rack in the bottom third of the oven. Place a heavy rimmed baking sheet upside-down on the rack, and heat the oven to 450°F.\n\n'
      + ' 2 - Make the sauce: Place the garlic in a food processor fitted with the blade attachment and pulse until coarsely chopped, 2 to 3 pulses. Add the tomatoes and their juices, olive oil, sugar, vinegar, salt, and pepper and process until puréed or to desired consistency, 20 to 30 seconds; set aside.\n\n'
      + ' 3 - Divide the pizza dough into two pieces. If the dough is sticky, dust with a little bit of all-purpose flour. Dust a 12-inch piece of parchment paper with cornmeal and place the dough on it. Use the heel of your hand to press the dough flat. Work from the middle out to shape it into a 10-inch round with your hands or a rolling pin. The dough will stick to the parchment; if it starts to shrink back, wait a few minutes to let it relax and continue shaping.\n\n'
      + ' 4 - Brush the dough with 1 teaspoon of the olive oil, then spread ¼ cup of the sauce into a thin layer onto dough, leaving a ½-inch border. Carefully remove the preheated baking sheet from the oven and use the parchment paper to slide the pizza onto the back of the baking sheet.\n\n'
      + ' 5 - Bake for 4 minutes. Top the pizza with half of the mozzarella, leaving some space between the slices. Bake until the crust is golden brown and crisp and the cheese melts, 6 to 7 minutes more.\n\n'
      + ' 6 - Remove the pizza from the oven. Immediately drizzle with 2 teaspoons of the olive oil. Scatter half of the basil on the pizza and sprinkle with half of the Parmesan. Cool for 2 minutes before slicing and serving. Repeat with the remaining dough and toppings.'
  },
  {
    recipeId: 29,
    categoryId: 2,
    title: 'Chicken Parmigiana (Parmesan)',
    photo_url: 'https://www.dinneratthezoo.com/wp-content/uploads/2018/12/baked-chicken-parmesan-3.jpg',
    photosArray: [
      'https://www.dinneratthezoo.com/wp-content/uploads/2018/12/baked-chicken-parmesan-3.jpg',
      'https://asimplepalate.com/wp-content/uploads/2018/10/chicken-parmigiana-5-1.jpg',
      'https://www.cookingclassy.com/wp-content/uploads/2013/02/chicken-parmesan-16.jpg',
    ],
    time: 45,
    ingredients: [
      {key: '3 Chicken Breasts or Cutlets, Sliced in Half'},
      {key: '½ cup All-Purpose Flour'},
      {key: '3 Eggs, Whisked'},
      {key: '⅓ cup Olive Oil'},
      {key: '1 ½ cups Bread Crumbs'},
      {key: '½ + ⅓ cup Parmesan Cheese, Shredded'},
      {key: '½ Salt'},
      {key: '½ Pepper'},
      {key: '2 tsp Italian Herb Blend (Thyme, Oregano, Basil, Rosemary)'},
      {key: '1 tsp Garlic Powder'},
      {key: '6 slices Mozzarella'},
      {key: '1 ½ cups Marinara Sauce'},
      {key: '2 Tbsp Fresh Basil, Chopped'},
    ],
    description:
      ' 1 - Preheat oven to 450°F.\n\n'
      + ' 2 - Place chicken cutlets/breasts in a ziplock bag, and firmly pound with a rolling pin or smooth side of a meat hammer (chicken thickness should be 1/2 inch).\n\n'
      + ' 3 - In a shallow dish, mix the bread crumbs, ½ cup of parmesan cheese, salt, pepper, italian herb blend, and garlic powder together.\n\n'
      + ' 4 - Set up a line of shallow bowls/dishes with flour, whisked eggs, and breadcrumb mix.\n\n'
      + ' 5 - First, coat chicken in flour on both sides. Then, transfer to whisked eggs, dip both sides. Last, lay both sides of chicken in bread crumbs. Evenly coat and pack breadcrumbs lightly with your hand.\n\n'
      + ' 6 - Heat 3 tablespoons of oil at a time in a cast iron skillet or pan on LOW to MEDIUM heat. Brown chicken for 2 minutes on both sides.\n\n'
      + ' 7 - arrange browned chicken in a large baking dish or pan. Layer first with mozzarella slices then tomato sauce over top. Bake uncovered in oven for 14 minutes – remove from oven then sprinkle with rest of parmesan cheese. Place pan back in oven and broil on HIGH for 1 minute until cheese is melted and browned. Sprinkle with fresh basil and serve with your favorite pasta!'
  },
  {
    recipeId: 30,
    categoryId: 2,
    title: 'Mushroom Risotto',
    photo_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F246711.jpg',
    photosArray: [
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F246711.jpg',
      'https://www.daringgourmet.com/wp-content/uploads/2020/09/Mushroom-Risotto-15-final.jpg',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7712052.jpg',
    ],
    time: 50,
    ingredients: [
      {key: '6 cups Chicken Broth'},
      {key: '3 Tbsp Olive Oil'},
      {key: '1 lb Portobello Mushrooms, Thinly Sliced'},
      {key: '1 lb White Mushrooms, Thinly Sliced'},
      {key: '2 Shallots, Diced'},
      {key: '1 ½ cups Arborio Rice'},
      {key: '½ cup Dry White Wine'},
      {key: 'Sea Salt'},
      {key: 'Freshly Ground Black Pepper'},
      {key: '3 Tbsp Chives, Finely Chopped'},
      {key: '4 Tbsp Butter'},
      {key: '⅓ cup Freshly Grated Parmesan Cheese'},
    ],
    description:
      ' 1 - In a saucepan, warm the broth over low heat.\n\n'
      + ' 2 - Warm 2 tablespoons olive oil in a large saucepan over medium-high heat. Stir in the mushrooms, and cook until soft, about 3 minutes. Remove mushrooms and their liquid, and set aside.\n\n'
      + ' 3 - Add 1 tablespoon olive oil to skillet, and stir in the shallots. Cook 1 minute. Add rice, stirring to coat with oil, about 2 minutes. When the rice has taken on a pale, golden color, pour in wine, stirring constantly until the wine is fully absorbed. Add ½ cup broth to the rice, and stir until the broth is absorbed. Continue adding broth ½ cup at a time, stirring continuously, until the liquid is absorbed and the rice is al dente, about 15 to 20 minutes.\n\n'
      + ' 4 - Remove from heat, and stir in mushrooms with their liquid, butter, chives, and parmesan. Season with salt and pepper to taste.'
  },
  {
    recipeId: 31,
    categoryId: 3,
    title: 'Oreo Truffles',
    photo_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-oreo-truffles-094-1544218913.jpg?crop=0.668xw:1.00xh;0.191xw,0&resize=480:*',
    photosArray: [
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-oreo-truffles-094-1544218913.jpg?crop=0.668xw:1.00xh;0.191xw,0&resize=480:*',
      'https://amyinthekitchen.com/wp-content/uploads/2014/12/oreo-balls-8.jpg',
      'https://www.cookingclassy.com/wp-content/uploads/2018/12/oreo-balls-14.jpg',
    ],
    time: 65,
    ingredients: [
      {key: '1 (14 oz.) package Oreos'},
      {key: '8 oz. cream cheese, softened'},
      {key: '1 Tsp. pure vanilla extract'},
      {key: '2 cups white chocolate chips, melted'},
      {key: '1/2 cup semisweet chocolate chips, melted'},
    ],
    description:
      ' 1 - Use a food processor to crush cookies into fine crumbs.\n\n'
      + ' 2 - Add all but 2 tablespoons crushed cookies to a medium bowl. Add cream cheese and vanilla and stir until evenly combined.\n\n'
      + ' 3 - Line a baking sheet with parchment paper. Using a small cookie scoop, form mixture into small balls. Place on prepared baking sheet and freeze until slightly hardened, about 30 minutes.\n\n'
      + ' 4 - Dip the frozen balls in melted white chocolate until coated and return to baking sheet. Drizzle with semisweet chocolate. Freeze until chocolate hardens, about 15 minutes.'
  },
  {
    recipeId: 32,
    categoryId: 3,
    title: 'Strawberry Cheescale Stuffed Cupcakes',
    photo_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-strawberry-cheesecake-stuffed-cupcakes-still001-1523295863.jpg?crop=0.853xw:0.758xh;0.0705xw,0.0684xh&resize=1200:*',
    photosArray: [
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-strawberry-cheesecake-stuffed-cupcakes-still001-1523295863.jpg?crop=0.853xw:0.758xh;0.0705xw,0.0684xh&resize=1200:*',
      'https://images-gmi-pmc.edge-generalmills.com/c98c3f1f-db2a-4ec8-b2b2-edafdfa83617.jpg',
      'https://insidebrucrewlife.com/wp-content/uploads/2011/04/Strawberry-Cheesecake-Cupcakes-10-1.jpg',
    ],
    time: 40,
    ingredients: [
      {key: '1 box vanilla cake mix, plus ingredients called for on box'},
      {key: '2 (8-oz.) blocks cream cheese, softened'},
      {key: '1/2 cup powdered sugar'},
      {key: '1 tsp. vanilla extract'},
      {key: '3 cups cool whip, divided'},
      {key: '1 cup chopped strawberries'},
      {key: '1/2 cup crushed graham crackers'},
      {key: 'Strawberry slices, for garnish'},
    ],
    description:
      ' 1 - Preheat oven to 350° and line two muffin tins with cupcake liners. Prepare vanilla cake batter according to package instructions and divide between cupcake liners. Bake according to package instructions. Let cool completely.\n\n'
      + ' 2 - Make filling: In a large bowl, using a hand mixer, beat together cream cheese, powdered sugar, and vanilla. Fold in 1 cup of cool whip and strawberries.\n\n'
      + ' 3 - Using a teaspoon or melon baller, scoop out the middle of each cupcake to create a small well. Fill each cupcake with cheesecake filling.\n\n'
      + ' 4 - Pipe remaining cool whip on top and garnish with a strawberry slice and graham cracker crumbs.'
  },
  {
    recipeId: 33,
    categoryId: 3,
    title: 'Quick Mango Sorbet',
    photo_url: 'https://www.spoonfulofflavor.com/wp-content/uploads/2013/04/Mango-sorbet.jpg',
    photosArray: [
      'https://www.spoonfulofflavor.com/wp-content/uploads/2013/04/Mango-sorbet.jpg',
      'https://www.simplyrecipes.com/thmb/-Z_jaf2xe5hJFb0oZVQ94lq78UU=/1600x1106/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2007__05__mango-sorbet-horiz-a-1600-2a-4684a8cd0ad04f7d9d07b719f9eda108.jpg',
      'https://www.thepetitecook.com/wp-content/uploads/2020/07/vegan-mango-sorbet-recipe.jpg',
    ],
    time: 5,
    ingredients: [
      {key: '1 package (16 ounces) frozen mango chunks, slightly thawed'},
      {key: '1/2 cup passion fruit juice'},
      {key: '2 tablespoons sugar'},
    ],
    description:
      ' 1 - Place all ingredients in a blender; cover and process until smooth. Serve immediately. If desired, for a firmer texture, cover and freeze at least 3 hours.'
  },
  {
    recipeId: 34,
    categoryId: 3,
    title: 'Coconut Macaroons',
    photo_url: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/First-Place-Coconut-Macaroons_EXPS_HRBZ17_4383_C09_01_3b.jpg',
    photosArray: [
      'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/First-Place-Coconut-Macaroons_EXPS_HRBZ17_4383_C09_01_3b.jpg',
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2013%2F03%2F6b9728b114d0131d0214648a218daa2d507de5e7.jpeg',
      'https://www.thatskinnychickcanbake.com/wp-content/uploads/2012/10/Coconut-Macaroons-Recipe-3-480x480.jpg',
    ],
    time: 40,
    ingredients: [
      {key: '1-1/3 cups sweetened shredded coconut'},
      {key: '1/3 cup sugar'},
      {key: '2 tablespoons all-purpose flour'},
      {key: '1/8 teaspoon salt'},
      {key: '2 large egg whites, room temperature'},
      {key: '1/2 teaspoon vanilla extract'},
    ],
    description:
      ' 1 - In a small bowl, combine the coconut, sugar, flour and salt. Add egg whites and vanilla; mix well.\n\n'
      + ' 2 - Drop by rounded teaspoonfuls onto greased baking sheets. Bake at 325° for 18-20 minutes or until golden brown. Cool on a wire rack.'
  },
  {
    recipeId: 35,
    categoryId: 1,
    title: 'Carnitas - Pressure Cooker',
    photo_url: 'https://www.cookingclassy.com/wp-content/uploads/2018/03/instant-pot-slow-cooker-carnitas-1.jpg',
    photosArray: [
      'https://www.cookingclassy.com/wp-content/uploads/2018/03/instant-pot-slow-cooker-carnitas-1.jpg',
      'https://www.gimmesomeoven.com/wp-content/uploads/2017/03/Instant-Pot-Pressure-Cooker-Carnitas-Recipe-3.jpg',
      'http://howdoyoufood.com/wp-content/uploads/2018/01/pressure-cooker-pork-carnitas-close.jpg',
    ],
    time: 95,
    ingredients: [
      {key: '1 (6 pound) pork roast'},
      {key: '1 ½ tablespoons salt'},
      {key: '1 tablespoon dried oregano'},
      {key: '2 teaspoons ground cumin'},
      {key: '1 teaspoon ground black pepper'},
      {key: '½ teaspoon chile powder'},
      {key: '½ teaspoon paprika'},
      {key: '2 tablespoons olive oil, or more to taste'},
      {key: '1 cup orange juice'},
      {key: '1 onion, coarsely chopped'},
      {key: '4 cloves garlic, diced, or more to taste'},
    ],
    description:
      ' 1 - Trim excess fat from pork butt; cut pork into two inch cubes and transfer to a bowl.\n\n'
      + ' 2 - Combine salt, oregano, cumin, black pepper, chile powder, and paprika together in a bowl. Rub pork cubes with spice mixture. Coat seasoned pork cubes lightly in olive oil; place in pressure cooker. Cover pork cubes with orange juice, onion, and garlic.\n\n'
      + ' 3 - Place lid on pressure cooker and lock; bring to full pressure over medium heat until pork is no longer pink in the center, about 60 minutes. Let pressure come down naturally, about 15 minutes.\n\n'
      + ' 4 - Remove pork from pressure cooker and shred meat.'
  },
  {
    recipeId: 36,
    categoryId: 1,
    title: 'Chicken Flautas',
    photo_url: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-06-how-to-make-the-best-chicken-flautas%2FHow-to-Make-Best-Chicken-Flautas_094',
    photosArray: [
      'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-06-how-to-make-the-best-chicken-flautas%2FHow-to-Make-Best-Chicken-Flautas_094',
      'https://www.goya.com/media/3202/chicken-flautas.jpg?quality=80',
      'https://res.cloudinary.com/mealthy1/image/upload/ar_16:11,c_fill,f_auto,h_600,q_auto:best,w_800/v1497459283/Mexican-Chicken-Flautas-3-5.jpg',
    ],
    time: 50,
    ingredients: [
      {key: '¼ cup butter'},
      {key: '¼ cup all-purpose flour'},
      {key: '¼ cup minced onion'},
      {key: '¼ cup chopped black olives'},
      {key: '2 tablespoons lemon juice'},
      {key: '1 tablespoon oil'},
      {key: '¼ teaspoon ground paprika'},
      {key: '⅛ teaspoon ground black pepper'},
      {key: '⅛ teaspoon salt'},
      {key: '1 ½ cups cooked shredded chicken'},
      {key: '8 flour tortillas'},
      {key: 'oil for frying, or as needed'},
      {key: 'toothpicks'},
    ],
    description:
      ' 1 - Melt butter in a skillet over medium heat; stir flour into butter until smooth. Add onion to flour-butter mixture; cook and stir until onion is softened, 5 to 10 minutes. Mix black olives, lemon juice, oil, paprika, black pepper, and salt into onion mixture; cook and stir until heated through, about 2 minutes. Stir chicken into mixture and remove skillet from heat and cover.\n\n'
      + ' 2 - Heat oil in a large, heavy saucepan or deep-fryer.\n\n'
      + ' 3 - Fill tortillas with chicken mixture. Roll tortilla around filling and secure with a toothpick.\n\n'
      + ' 4 - Fry the rolled tortillas, working in batches, in the hot oil until browned, about 2 minutes. Transfer fried tortillas to a paper towel-lined plate using a slotted spoon or tongs.'
  },
  {
    recipeId: 37,
    categoryId: 1,
    title: 'Mexican Sopes',
    photo_url: 'https://www.mylatinatable.com/wp-content/uploads/2018/10/sopes-2.jpg',
    photosArray: [
      'https://www.mylatinatable.com/wp-content/uploads/2018/10/sopes-2.jpg',
      'https://www.elcomal.com/wp-content/uploads/2018/12/recipe-sopes.jpg',
      'https://www.yellowblissroad.com/wp-content/uploads/2019/04/Mexican-Sopes-social.jpg',
    ],
    time: 25,
    ingredients: [
      {key: '3 cups masa harina (corn flour)'},
      {key: '1 tablespoon salt'},
      {key: '2 cups warm water, or as needed'},
      {key: '1 quart oil for frying'},
    ],
    description:
      ' 1 - Whisk masa harina (corn flour) and salt together; stir enough water into mixture until dough is smooth and holds together. Form dough into 2-inch balls. Flatten each ball to a 1/2-inch thick circle.\n\n'
      + ' 2 - Heat oil to 400 degrees F (200 degrees C) in a deep-fryer or large saucepan.\n\n'
      + ' 3 - Fry dough in the hot oil until sopes are just lightly browned, about 30 seconds per side. Remove sopes with tongs and place on a paper towel-lined plate; cool just until sopes can be handled. Pinch the edges of each sope together forming little boats. Return to hot oil and fry until golden and cooked through, 1 to 2 minutes.'
  },
  {
    recipeId: 38,
    categoryId: 1,
    title: 'Taco Lettuce Wraps',
    photo_url: 'https://hips.hearstapps.com/vidthumb/images/delish-turkey-taco-lettuce-cups-1-1527874187.jpg',
    photosArray: [
      'https://hips.hearstapps.com/vidthumb/images/delish-turkey-taco-lettuce-cups-1-1527874187.jpg',
      'https://www.cookingclassy.com/wp-content/uploads/2015/07/turkey-taco-lettuce-wraps7-srgb..jpg',
      'https://www.cookingclassy.com/wp-content/uploads/2015/07/turkey-taco-lettuce-wraps5-srgb..jpg',
    ],
    time: 25,
    ingredients: [
      {key: '1 pound ground turkey'},
      {key: '1 (16 ounce) package frozen corn'},
      {key: '1 (15 ounce) can black beans'},
      {key: '1 (14.5 ounce) can diced tomatoes'},
      {key: '1 (1 ounce) package taco seasoning mix'},
      {key: 'romaine leaves, rinsed and dried'},
    ],
    description:
      ' 1 - Heat a large nonstick skillet over medium-high heat. Cook and stir ground turkey in the hot skillet until browned and crumbly, 5 to 7 minutes. Stir in corn, black beans, diced tomatoes, and taco seasoning. Bring to a simmer and cook until heated through, 10 to 12 minutes.\n\n'
      + ' 2 - Lay lettuce leaves on a flat surface and fill with turkey and bean mixture.'
  },
  {
    recipeId: 39,
    categoryId: 1,
    title: 'Enchiladas Verdes',
    photo_url: 'https://www.simplyrecipes.com/thmb/z7txqLgdkONdPVh9Au2E1vaLBf8=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2008__08__chicken-enchiladas-verdes-vertical-a-1600-5d11f4ce95214456a80d685fd0099628.jpg',
    photosArray: [
      'https://www.simplyrecipes.com/thmb/z7txqLgdkONdPVh9Au2E1vaLBf8=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2008__08__chicken-enchiladas-verdes-vertical-a-1600-5d11f4ce95214456a80d685fd0099628.jpg',
      'https://static01.nyt.com/images/2019/01/08/dining/08CHICKEN-ENCHILADA/08CHICKEN-ENCHILADA-articleLarge.jpg',
      'https://mavencookery.com/wp-content/uploads/enchiladas-verdes-top-sq.jpeg',
    ],
    time: 60,
    ingredients: [
      {key: '2 cloves garlic'},
      {key: '3 serrano peppers'},
      {key: '2 ¼ pounds small green tomatillos, husks removed'},
      {key: '1 cup vegetable oil for frying'},
      {key: '9 corn tortillas'},
      {key: '3 cups water'},
      {key: '4 teaspoons chicken bouillon granules'},
      {key: '½ store-bought rotisserie chicken, meat removed and shredded'},
      {key: '¼ head iceberg lettuce, shredded'},
      {key: '1 cup cilantro leaves'},
      {key: '1 (8 ounce) container Mexican crema, crema fresca'},
      {key: '1 cup grated cotija cheese'},
    ],
    description:
      ' 1 - Cover a large griddle with aluminum foil and preheat to medium-high.\n\n'
      + ' 2 - Cook the garlic, serrano peppers, and tomatillos on the hot griddle until toasted and blackened, turning occasionally, about 5 minutes for the garlic, 10 minutes for the peppers, and 15 minutes for the tomatillos. Remove to a bowl and allow to cool.\n\n'
      + ' 3 - Heat oil in a small, deep skillet to 350 degrees F (175 degrees C). Using kitchen tongs, fry the tortillas individually, turning them once for no more than 5 seconds per side. Remove excess oil with paper towels and keep warm. Remember that the hotter the oil, the less that the tortillas will absorb.\n\n'
      + ' 4 - Place the toasted garlic, serrano peppers, tomatillos, and the water in a blender and blend until smooth; pour into a saucepan over medium heat and bring to a boil. Dissolve the chicken bouillon into the mixture, reduce heat to medium-low, and cook at a simmer until slightly thickened, about 10 minutes.\n\n'
      + ' 5 - Soak three tortillas in the sauce, one at a time, for a few seconds, fill them with shredded chicken, sprinkle the meat with some of the sauce, roll them and place them seam side down on a pasta bowl. Spoon a generous amount of sauce over them and top them with lettuce, cilantro, crema, and cotija cheese. Pour a little more sauce over the whole thing if desired. Repeat the procedure twice more. Serve immediately.'
  },
  {
    recipeId: 40,
    categoryId: 0,
    title: 'Buffalo Style Chicken Pizza',
    photo_url: 'https://www.tablefortwoblog.com/wp-content/uploads/2019/01/buffalo-chicken-pizza-recipe-photos-tablefortwoblog-3.jpg',
    photosArray: [
      'https://www.tablefortwoblog.com/wp-content/uploads/2019/01/buffalo-chicken-pizza-recipe-photos-tablefortwoblog-3.jpg',
      'https://www.tablefortwoblog.com/wp-content/uploads/2019/01/buffalo-chicken-pizza-recipe-photos-tablefortwoblog-5-960x1200.jpg.webp',
      'https://easychickenrecipes.com/wp-content/uploads/2019/11/buffalo-chicken-pizza-4.jpg',
    ],
    time: 55,
    ingredients: [
      {key: '3 skinless, boneless chicken breast halves - cooked and cubed'},
      {key: '2 tablespoons butter, melted'},
      {key: '1 (2 ounce) bottle hot sauce'},
      {key: '1 (8 ounce) bottle blue cheese salad dressing'},
      {key: '1 (16 inch) prepared pizza crust'},
      {key: '1 (8 ounce) package shredded mozzarella cheese'},
      {key: '4 teaspoons chicken bouillon granules'},
    ],
    description:
      ' 1 - Preheat oven to 425 degrees F (220 degrees C).\n\n'
      + ' 2 - In a medium bowl combine the cubed chicken, melted butter and hot sauce. Mix well. Spread whole bottle of salad dressing over crust, then top with chicken mixture and sprinkle with shredded cheese.\n\n'
      + ' 3 - Bake in preheated oven until crust is golden brown and cheese is bubbly, about 5 to 10 minutes. Let set a few minutes before slicing, and serve.'
  },
  {
    recipeId: 41,
    categoryId: 0,
    title: 'Homeade Pizza Supreme',
    photo_url: 'https://static.onecms.io/wp-content/uploads/sites/24/2019/12/10/sl_supremepizza_00072-2000.jpg',
    photosArray: [
      'https://static.onecms.io/wp-content/uploads/sites/24/2019/12/10/sl_supremepizza_00072-2000.jpg',
      'https://www.recipetineats.com/wp-content/uploads/2020/05/Supreme-Pizza.jpg',
      'https://www.recipetineats.com/wp-content/uploads/2020/05/Pizza-Crust-without-yeast_5.jpg',
    ],
    time: 75,
    ingredients: [
      {key: '1 package (1/4 ounce) active dry yeast'},
      {key: '2 cups warm water (110° to 115°)'},
      {key: '3 tablespoons vegetable oil'},
      {key: '1-1/2 teaspoons salt'},
      {key: '4 to 6 cups all-purpose flour'},
      {key: '2 cans (8 ounces each) tomato sauce'},
      {key: '1-1/2 teaspoons grated onion'},
      {key: '1 teaspoon dried oregano'},
      {key: '1/4 teaspoon salt'},
      {key: '1/8 teaspoon pepper'},
      {key: '4 cups shredded part-skim mozzarella cheese'},
      {key: '4 ounces Canadian bacon, diced'},
      {key: '1-1/2 teaspoons grated onion'},
      {key: '1 package (3-1/2 ounces) sliced pepperoni'},
      {key: '1 medium sweet red pepper, sliced'},
      {key: '1 medium green pepper, sliced'},
      {key: '1 can (2-1/4 ounces) sliced ripe olives, drained'},
      {key: '1 cup chopped onion'},
      {key: '1 cup grated Parmesan cheese'},
      {key: '1/2 cup minced fresh basil'},
    ],
    description:
      ' 1 - In a large bowl, dissolve yeast in warm water. Add oil, salt and 2 cups flour. Beat on medium speed for 3 minutes. Stir in enough remaining flour to form a soft dough. Turn onto a floured surface; knead until smooth and elastic, about 6-8 minutes. Place in a greased bowl, turning once to grease top. Cover and let rest in a warm place for 10 minutes.\n\n'
      + ' 2 - Combine sauce ingredients; set aside. Divide dough in half. On a floured surface, roll each portion into a 13-in. circle. Transfer to two greased 12-in. pizza pans; build up edges slightly.\n\n'
      + ' 3 - Bake at 375° for 15 minutes or until lightly browned. Spread with sauce; sprinkle with toppings. Bake for 15-20 minutes or until cheese is melted.'
  },
];