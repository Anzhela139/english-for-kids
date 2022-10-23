const cards = [
  ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Foods', 'Weather'],
  [
    {
      word: 'cry',
      translation: 'плакать',
      id: 1,
    },
    {
      word: 'dance',
      translation: 'танцевать',
      id: 2,
    },
    {
      word: 'dive',
      translation: 'нырять',
      id: 3,
    },
    {
      word: 'draw',
      translation: 'рисовать',
      id: 4,
    },
    {
      word: 'fishing',
      translation: 'ловить рыбу',
      id: 5,
    },
    {
      word: 'fly',
      translation: 'летать',
      id: 6,
    },
    {
      word: 'hug',
      translation: 'обнимать',
      id: 7,
    },
    {
      word: 'jump',
      translation: 'прыгать',
      id: 8,
    }
  ],
  [
    {
      word: 'open',
      translation: 'открывать',
      id: 9,
    },
    {
      word: 'play',
      translation: 'играть',
      id: 10,
    },
    {
      word: 'point',
      translation: 'указывать',
      id: 11,
    },
    {
      word: 'ride',
      translation: 'ездить',
      id: 12,
    },
    {
      word: 'run',
      translation: 'бегать',
      id: 13,
    },
    {
      word: 'sing',
      translation: 'петь',
      id: 14,
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      id: 15,
    },
    {
      word: 'swim',
      translation: 'плавать',
      id: 16,
    }
  ],
  [
    {
      word: 'cat',
      translation: 'кот',
      id: 17,
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      id: 18,
    },
    {
      word: 'chicken',
      translation: 'курица',
      id: 19,
    },
    {
      word: 'dog',
      translation: 'собака',
      id: 20,
    },
    {
      word: 'horse',
      translation: 'лошадь',
      id: 21,
    },
    {
      word: 'pig',
      translation: 'свинья',
      id: 22,
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      id: 23,
    },
    {
      word: 'sheep',
      translation: 'овца',
      id: 24,
    }
  ],
  [
    {
      word: 'bird',
      translation: 'птица',
      id: 25,
    },
    {
      word: 'fish',
      translation: 'рыба',
      id: 26,
    },
    {
      word: 'frog',
      translation: 'жаба',
      id: 27,
    },
    {
      word: 'giraffe',
      translation: 'жирафа',
      id: 28,
    },
    {
      word: 'lion',
      translation: 'лев',
      id: 2,
    },
    {
      word: 'mouse',
      translation: 'мышь',
      id: 30,
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      id: 31,
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      id: 32,
    }
  ],
  [
    {
      word: 'skirt',
      translation: 'юбка',
      id: 33,
    },
    {
      word: 'pants',
      translation: 'брюки',
      id: 34,
    },
    {
      word: 'blouse',
      translation: 'блузка',
      id: 35,
    },
    {
      word: 'dress',
      translation: 'платье',
      id: 36,
    },
    {
      word: 'boot',
      translation: 'ботинок',
      id: 37,
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      id: 38,
    },
    {
      word: 'coat',
      translation: 'пальто',
      id: 39,
    },
    {
      word: 'shoe',
      translation: 'туфли',
      id: 40,
    }
  ],
  [
    {
      word: 'sad',
      translation: 'грустный',
      id: 41,
    },
    {
      word: 'angry',
      translation: 'сердитый',
      id: 42,
    },
    {
      word: 'happy',
      translation: 'счастливый',
      id: 43,
    },
    {
      word: 'tired',
      translation: 'уставший',
      id: 44,
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      id: 45,
    },
    {
      word: 'scared',
      translation: 'испуганный',
      id: 46,
    },
    {
      word: 'smile',
      translation: 'улыбка',
      id: 47,
    },
    {
      word: 'laugh',
      translation: 'смех',
      id: 48,
    }
  ],
  [
    {
      word: 'burger',
      translation: 'бургер',
      id: 49,
    },
    {
      word: 'salad',
      translation: 'салат',
      id: 50,
    },
    {
      word: 'pie',
      translation: 'пирог',
      id: 51,
    },
    {
      word: 'egg',
      translation: 'яйцо',
      id: 52,
    },
    {
      word: 'candy',
      translation: 'конфеты',
      id: 53,
    },
    {
      word: 'soup',
      translation: 'суп',
      id: 54,
    },
    {
      word: 'pancake',
      translation: 'блинчики',
      id: 55,
    },
    {
      word: 'pizza',
      translation: 'пицца',
      id: 56,
    }
  ],
  [
    {
      word: 'rain',
      translation: 'дождь',
      id: 57,
    },
    {
      word: 'snow',
      translation: 'снег',
      id: 58,
    },
    {
      word: 'cloud',
      translation: 'облако',
      id: 59,
    },
    {
      word: 'fog',
      translation: 'туман',
      id: 60,
    },
    {
      word: 'rainbow',
      translation: 'радуга',
      id: 61,
    },
    {
      word: 'frost',
      translation: 'иней',
      id: 62,
    },
    {
      word: 'lighting',
      translation: 'молния',
      id: 63,
    },
    {
      word: 'storm',
      translation: 'буря',
      id: 64,
    }
  ]
]

export default cards;