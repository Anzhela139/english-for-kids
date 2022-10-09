const cards = [
  ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Foods', 'Weather'],
  [
    {
      word: 'cry',
      translation: 'плакать',
      image: 'assets/images/cry.jpg',
      audioSrc: 'assets/audio/cry.mp3'
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: 'assets/images/dance.jpg',
      audioSrc: 'assets/audio/dance.mp3'
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: 'assets/images/dive.jpg',
      audioSrc: 'assets/audio/dive.mp3'
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: 'assets/images/draw.jpg',
      audioSrc: 'assets/audio/draw.mp3'
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: 'assets/images/fish.jpg',
      audioSrc: 'assets/audio/fish.mp3'
    },
    {
      word: 'fly',
      translation: 'летать',
      image: 'assets/images/fly.jpg',
      audioSrc: 'assets/audio/fly.mp3'
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: 'assets/images/hug.jpg',
      audioSrc: 'assets/audio/hug.mp3'
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: 'assets/images/jump.jpg',
      audioSrc: 'assets/audio/jump.mp3'
    }
  ],
  [
    {
      word: 'open',
      translation: 'открывать',
      image: 'assets/images/open.jpg',
      audioSrc: 'assets/audio/open.mp3'
    },
    {
      word: 'play',
      translation: 'играть',
      image: 'assets/images/play.jpg',
      audioSrc: 'assets/audio/play.mp3'
    },
    {
      word: 'point',
      translation: 'указывать',
      image: 'assets/images/point.jpg',
      audioSrc: 'assets/audio/point.mp3'
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: 'assets/images/ride.jpg',
      audioSrc: 'assets/audio/ride.mp3'
    },
    {
      word: 'run',
      translation: 'бегать',
      image: 'assets/images/run.jpg',
      audioSrc: 'assets/audio/run.mp3'
    },
    {
      word: 'sing',
      translation: 'петь',
      image: 'assets/images/sing.jpg',
      audioSrc: 'assets/audio/sing.mp3'
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: 'assets/images/skip.jpg',
      audioSrc: 'assets/audio/skip.mp3'
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: 'assets/images/swim.jpg',
      audioSrc: 'assets/audio/swim.mp3'
    }
  ],
  [
    {
      word: 'cat',
      translation: 'кот',
      image: 'assets/images/cat.jpg',
      audioSrc: 'assets/audio/cat.mp3'
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: 'assets/images/chick.jpg',
      audioSrc: 'assets/audio/chick.mp3'
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: 'assets/images/chicken.jpg',
      audioSrc: 'assets/audio/chicken.mp3'
    },
    {
      word: 'dog',
      translation: 'собака',
      image: 'assets/images/dog.jpg',
      audioSrc: 'assets/audio/dog.mp3'
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: 'assets/images/horse.jpg',
      audioSrc: 'assets/audio/horse.mp3'
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: 'assets/images/pig.jpg',
      audioSrc: 'assets/audio/pig.mp3'
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      image: 'assets/images/rabbit.jpg',
      audioSrc: 'assets/audio/rabbit.mp3'
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: 'assets/images/sheep.jpg',
      audioSrc: 'assets/audio/sheep.mp3'
    }
  ],
  [
    {
      word: 'bird',
      translation: 'птица',
      image: 'assets/images/bird.jpg',
      audioSrc: 'assets/audio/bird.mp3'
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: 'assets/images/fish1.jpg',
      audioSrc: 'assets/audio/fish.mp3'
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: 'assets/images/frog.jpg',
      audioSrc: 'assets/audio/frog.mp3'
    },
    {
      word: 'giraffe',
      translation: 'жирафа',
      image: 'assets/images/giraffe.jpg',
      audioSrc: 'assets/audio/giraffe.mp3'
    },
    {
      word: 'lion',
      translation: 'лев',
      image: 'assets/images/lion.jpg',
      audioSrc: 'assets/audio/lion.mp3'
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: 'assets/images/mouse.jpg',
      audioSrc: 'assets/audio/mouse.mp3'
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: 'assets/images/turtle.jpg',
      audioSrc: 'assets/audio/turtle.mp3'
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: 'assets/images/dolphin.jpg',
      audioSrc: 'assets/audio/dolphin.mp3'
    }
  ],
  [
    {
      word: 'skirt',
      translation: 'юбка',
      image: 'assets/images/skirt.jpg',
      audioSrc: 'assets/audio/skirt.mp3'
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: 'assets/images/pants.jpg',
      audioSrc: 'assets/audio/pants.mp3'
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: 'assets/images/blouse.jpg',
      audioSrc: 'assets/audio/blouse.mp3'
    },
    {
      word: 'dress',
      translation: 'платье',
      image: 'assets/images/dress.jpg',
      audioSrc: 'assets/audio/dress.mp3'
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: 'assets/images/boot.jpg',
      audioSrc: 'assets/audio/boot.mp3'
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: 'assets/images/shirt.jpg',
      audioSrc: 'assets/audio/shirt.mp3'
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: 'assets/images/coat.jpg',
      audioSrc: 'assets/audio/coat.mp3'
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: 'assets/images/shoe.jpg',
      audioSrc: 'assets/audio/shoe.mp3'
    }
  ],
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: 'assets/images/sad.jpg',
      audioSrc: 'assets/audio/sad.mp3'
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: 'assets/images/angry.jpg',
      audioSrc: 'assets/audio/angry.mp3'
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: 'assets/images/happy.jpg',
      audioSrc: 'assets/audio/happy.mp3'
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: 'assets/images/tired.jpg',
      audioSrc: 'assets/audio/tired.mp3'
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: 'assets/images/surprised.jpg',
      audioSrc: 'assets/audio/surprised.mp3'
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: 'assets/images/scared.jpg',
      audioSrc: 'assets/audio/scared.mp3'
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: 'assets/images/smile.jpg',
      audioSrc: 'assets/audio/smile.mp3'
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: 'assets/images/laugh.jpg',
      audioSrc: 'assets/audio/laugh.mp3'
    }
  ],
  [
    {
      word: 'burger',
      translation: 'бургер',
      image: 'assets/images/burger.jpg',
      audioSrc: 'assets/audio/burger.mp3'
    },
    {
      word: 'salad',
      translation: 'салат',
      image: 'assets/images/salad.jpg',
      audioSrc: 'assets/audio/salad.mp3'
    },
    {
      word: 'pie',
      translation: 'пирог',
      image: 'assets/images/pie.jpg',
      audioSrc: 'assets/audio/pie.mp3'
    },
    {
      word: 'egg',
      translation: 'яйцо',
      image: 'assets/images/egg.jpg',
      audioSrc: 'assets/audio/egg.mp3'
    },
    {
      word: 'french fries',
      translation: 'картошка фри',
      image: 'assets/images/french-fries.jpg',
      audioSrc: 'assets/audio/french-fries.mp3'
    },
    {
      word: 'soup',
      translation: 'суп',
      image: 'assets/images/soup.jpg',
      audioSrc: 'assets/audio/soup.mp3'
    },
    {
      word: 'pancake',
      translation: 'блинчики',
      image: 'assets/images/pancake.jpg',
      audioSrc: 'assets/audio/pancake.mp3'
    },
    {
      word: 'pizza',
      translation: 'пицца',
      image: 'assets/images/pizza.jpg',
      audioSrc: 'assets/audio/pizza.mp3'
    }
  ],
  [
    {
      word: 'rain',
      translation: 'дождь',
      image: 'assets/images/rain.jpg',
      audioSrc: 'assets/audio/rain.mp3'
    },
    {
      word: 'snow',
      translation: 'снег',
      image: 'assets/images/snow.jpg',
      audioSrc: 'assets/audio/snow.mp3'
    },
    {
      word: 'cloud',
      translation: 'облако',
      image: 'assets/images/cloud.jpg',
      audioSrc: 'assets/audio/cloud.mp3'
    },
    {
      word: 'fog',
      translation: 'туман',
      image: 'assets/images/fog.jpg',
      audioSrc: 'assets/audio/fog.mp3'
    },
    {
      word: 'rainbow',
      translation: 'радуга',
      image: 'assets/images/rainbow.jpg',
      audioSrc: 'assets/audio/rainbow.mp3'
    },
    {
      word: 'frost',
      translation: 'иней',
      image: 'assets/images/frost.jpg',
      audioSrc: 'assets/audio/frost.mp3'
    },
    {
      word: 'lighting',
      translation: 'молния',
      image: 'assets/images/lighting.jpg',
      audioSrc: 'assets/audio/lighting.mp3'
    },
    {
      word: 'storm',
      translation: 'буря',
      image: 'assets/images/storm.jpg',
      audioSrc: 'assets/audio/storm.mp3'
    }
  ]
]

export default cards;