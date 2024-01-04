export type ColorLibrary = {
  [key in
    | 'sw_lg'
    | 'sw_cl'
    | 'sw_st'
    | 'sc_lg'
    | 'sc_cl'
    | 'sc_mt'
    | 'fw_mt'
    | 'fw_st'
    | 'fw_dp'
    | 'wc_br'
    | 'wc_tr'
    | 'wc_dp']: {
    name: string;
    iconColor: { name: string; code: { r: number; g: number; b: number } };
    tags: [string, string, string];
    best: Record<string, { name: string; r: number; g: number; b: number }>;
    worst: { description: string; color: Record<string, { name: string; r: number; g: number; b: number }> };
  };
};

export const color = {
  gray: {
    gray000: '#fff',
    gray010: '#f4f4f4',
    gray020: '#e0e0e0',
    gray030: '#c6c6c6',
    gray040: '#adadad',
    gray050: '#878787',
    gray060: '#676767',
    gray070: '#414141',
    gray080: '#282828',
    gray090: '#1b1b1b',
    gray100: '#000000',
  },
  blue: {
    blue100: '#0f62fe',
  },
  red: {
    red100: '#da2e28',
  },
  purple: {
    purple050: '#cd9de9',
    purple040: '#EBD8F6 ',
  },
};

export const gradation = {
  sm: 'linear-gradient(92deg, #C4A1D8 0%, #A3ABD2 24.72%, #89B3CD 52.32%, #FFF3AB 107.2%)',
  md: 'linear-gradient(92deg, #B281CE 0%, #8892C1 24.72%, #74A5C3 52.32%, #F5E583 107.2%)',
  lg: 'linear-gradient(60deg, #AB70CC 0%, #7481C0 24.72%, #5C97BB 52.32%, #E9D55E 107.2%)',
};

export const colorLibrary: ColorLibrary = {
  sw_lg: {
    name: '봄 웜 라이트',
    iconColor: { name: '트로피칼 블루', code: { r: 210, g: 238, b: 250 } },
    tags: ['청순한', '은은한', '가벼운'],
    best: {
      carnationPink: {
        name: '카네이션 핑크',
        r: 251,
        g: 208,
        b: 215,
      },
      peppermint: {
        name: '페퍼민트',
        r: 233,
        g: 247,
        b: 230,
      },
      tropicalBlue: {
        name: '트로피칼블루',
        r: 210,
        g: 238,
        b: 250,
      },
      parisDaisy: {
        name: '파리 데이지',
        r: 255,
        g: 247,
        b: 250,
      },
      yellowGreen: {
        name: '옐로우 그린',
        r: 197,
        g: 225,
        b: 122,
      },
      pola: {
        name: '폴라',
        r: 233,
        g: 247,
        b: 250,
      },
      champagne: {
        name: '샴페인',
        r: 250,
        g: 236,
        b: 204,
      },
    },
    worst: {
      description: '저명도 고채도의 차가운 컬러는 소화하기 어려워요',
      color: {
        congoBrown: {
          name: '콩고 브라운',
          r: 89,
          g: 55,
          b: 55,
        },
        gableGreen: {
          name: '게이블 그린',
          r: 22,
          g: 53,
          b: 49,
        },
        paco: {
          name: '파코',
          r: 65,
          g: 31,
          b: 16,
        },
        rimmedSpruce: {
          name: '림드 스푸르스',
          r: 57,
          g: 72,
          b: 81,
        },
        bunker: {
          name: '벙커',
          r: 13,
          g: 17,
          b: 23,
        },
        chocolate: {
          name: '초콜릿색',
          r: 91,
          g: 71,
          b: 73,
        },
        englishWalnut: {
          name: '잉글리시 월넛',
          r: 62,
          g: 43,
          b: 35,
        },
      },
    },
  },
  sw_cl: {
    name: '봄 웜 클리어',
    iconColor: { name: '브라이트 썬', code: { r: 254, g: 211, b: 60 } },
    tags: ['선명한', '또렷한', '화사한'],
    best: {
      flamingo: {
        name: '플라밍고',
        r: 244,
        g: 78,
        b: 42,
      },
      mushroomFlush: {
        name: '머쉬룸 플러쉬',
        r: 195,
        g: 33,
        b: 72,
      },
      royalBlue: {
        name: '로얄 블루',
        r: 65,
        g: 105,
        b: 225,
      },
      bananaMania: {
        name: '바나나 마니아',
        r: 251,
        g: 211,
        b: 60,
      },
      brightSun: {
        name: '브라이트 썬',
        r: 254,
        g: 211,
        b: 60,
      },
      chateauGreen: {
        name: '샤또 그린',
        r: 64,
        g: 168,
        b: 96,
      },
      lemon: {
        name: '레몬',
        r: 253,
        g: 254,
        b: 101,
      },
    },
    worst: {
      description: '과한 저채도 또는 고채도, 저명도의 차가운 컬러는 소화하기 어려워요',
      color: {
        dalus: {
          name: '댈러스',
          r: 110,
          g: 75,
          b: 38,
        },
        irishCoffee: {
          name: '아이리쉬 커피',
          r: 95,
          g: 61,
          b: 38,
        },
        baja: {
          name: '바자',
          r: 152,
          g: 119,
          b: 123,
        },
        bukunia: {
          name: '버커니어',
          r: 98,
          g: 102,
          b: 114,
        },
        suttleGray: {
          name: '셔틀 그레이',
          r: 95,
          g: 102,
          b: 114,
        },
        hitGray: {
          name: '히트 그레이',
          r: 161,
          g: 173,
          b: 181,
        },
        pinkSwan: {
          name: '핑크 스완',
          r: 190,
          g: 181,
          b: 183,
        },
      },
    },
  },
  sw_st: {
    name: '봄 웜 스트롱',
    iconColor: { name: '코니퍼', code: { r: 172, g: 221, b: 77 } },
    tags: ['강렬한', '뜨거운', '화려한'],
    best: {
      thunderbird: {
        name: '썬더버드',
        r: 192,
        g: 43,
        b: 24,
      },
      grass: {
        name: '풀',
        r: 117,
        g: 166,
        b: 74,
      },
      dodgerBlue: {
        name: '다저 블루',
        r: 30,
        g: 144,
        b: 255,
      },
      mustard: {
        name: '머스타드',
        r: 255,
        g: 219,
        b: 88,
      },
      purple: {
        name: '자주',
        r: 128,
        g: 31,
        b: 82,
      },
      pumpkin: {
        name: '펌킨',
        r: 255,
        g: 117,
        b: 24,
      },
      conifer: {
        name: '코니퍼',
        r: 172,
        g: 221,
        b: 77,
      },
    },
    worst: {
      description: '저명도 저채도의 차가운 컬러는 소화하기 어려워요',
      color: {
        butterflyBush: {
          name: '버터플라이 부시',
          r: 98,
          g: 78,
          b: 154,
        },
        linch: {
          name: '린치',
          r: 105,
          g: 126,
          b: 154,
        },
        silver: {
          name: '은색',
          r: 147,
          g: 148,
          b: 153,
        },
        white: {
          name: '흰색',
          r: 255,
          g: 255,
          b: 255,
        },
        maco: {
          name: '마코',
          r: 68,
          g: 73,
          b: 84,
        },
        indigo: {
          name: '남색',
          r: 42,
          g: 54,
          b: 92,
        },
        cosmic: {
          name: '코스믹',
          r: 118,
          g: 57,
          b: 93,
        },
      },
    },
  },
  sc_lg: {
    name: '여름 쿨 라이트',
    iconColor: { name: '샹티', code: { r: 248, g: 195, b: 223 } },
    tags: ['시원한', '상큼한', '청초한'],
    best: {
      chantilly: {
        name: '샹티',
        r: 0,
        g: 0,
        b: 0,
      },
      cornField: {
        name: '콘 필드',
        r: 0,
        g: 0,
        b: 0,
      },
      spunPearl: {
        name: '스펀 펄',
        r: 0,
        g: 0,
        b: 0,
      },
      coldTurkey: {
        name: '콜드 터키',
        r: 0,
        g: 0,
        b: 0,
      },
      brilliantRose: {
        name: '화려한 장미',
        r: 0,
        g: 0,
        b: 0,
      },
      ivory: {
        name: '아이보리',
        r: 0,
        g: 0,
        b: 0,
      },
      surfCrest: {
        name: '서프 크레스트',
        r: 0,
        g: 0,
        b: 0,
      },
    },
    worst: {
      description: '저명도, 고채도의 따뜻한 컬러는 소화하기 어려워요',
      color: {
        bunker: {
          name: '벙커',
          r: 13,
          g: 17,
          b: 23,
        },
        everglade: {
          name: '에버글레이드',
          r: 28,
          g: 64,
          b: 46,
        },
        steeleto: {
          name: '스틸레토',
          r: 156,
          g: 51,
          b: 54,
        },
        cratorBrown: {
          name: '크레이터 브라운',
          r: 70,
          g: 36,
          b: 37,
        },
        oldGold: {
          name: '올드 골드',
          r: 207,
          g: 181,
          b: 59,
        },
        nutmeg: {
          name: '너트메그',
          r: 129,
          g: 66,
          b: 44,
        },
        mud: {
          name: '황토색',
          r: 220,
          g: 151,
          b: 48,
        },
      },
    },
  },
  sc_cl: {
    name: '여름 쿨 클리어',
    iconColor: { name: '스타쉽', code: { r: 236, g: 242, b: 69 } },
    tags: ['청량한', '생생한', '깨끗한'],
    best: {
      heliotrope: {
        name: '헬리오트로프',
        r: 223,
        g: 115,
        b: 255,
      },
      concrete: {
        name: '콘크리트',
        r: 242,
        g: 242,
        b: 242,
      },
      blueRibbon: {
        name: '블루 리본',
        r: 0,
        g: 102,
        b: 255,
      },
      turquoise: {
        name: '청록',
        r: 48,
        g: 213,
        b: 200,
      },
      starship: {
        name: '스타쉽',
        r: 236,
        g: 242,
        b: 69,
      },
      magenta: {
        name: '마젠타',
        r: 255,
        g: 51,
        b: 153,
      },
      hawkesBlue: {
        name: '호크스 블루',
        r: 212,
        g: 226,
        b: 252,
      },
    },
    worst: {
      description: '저명도, 저채도의 따뜻한 컬러는 소화하기 어려워요',
      color: {
        potersClay: {
          name: '포터스 클레이',
          r: 140,
          g: 87,
          b: 56,
        },
        mulPon: {
          name: '뮬 폰',
          r: 140,
          g: 71,
          b: 47,
        },
        oldGold: {
          name: '올드 골드',
          r: 207,
          g: 181,
          b: 59,
        },
        rowSiena: {
          name: '로우 시엔나',
          r: 210,
          g: 125,
          b: 70,
        },
        mediumCamin: {
          name: '미디엄 카민',
          r: 175,
          g: 64,
          b: 53,
        },
        flamePi: {
          name: '플레임 피',
          r: 218,
          g: 91,
          b: 56,
        },
        welLid: {
          name: '웰 리드',
          r: 180,
          g: 51,
          b: 50,
        },
      },
    },
  },
  sc_mt: {
    name: '여름 쿨 뮤트',
    iconColor: { name: '비올라', code: { r: 203, g: 143, b: 169 } },
    tags: ['지적인', '성숙한', '우아한'],
    best: {
      mountbattenPink: {
        name: '마운트배튼 핑크',
        r: 153,
        g: 122,
        b: 141,
      },
      alto: {
        name: '알토',
        r: 219,
        g: 219,
        b: 219,
      },
      shipCove: {
        name: '쉽 코브',
        r: 120,
        g: 139,
        b: 186,
      },
      dustyGray: {
        name: '더스티 그레이',
        r: 168,
        g: 152,
        b: 155,
      },
      regentGray: {
        name: '리젠트 그레이',
        r: 134,
        g: 148,
        b: 159,
      },
      viola: {
        name: '비올라',
        r: 203,
        g: 143,
        b: 169,
      },
      ghost: {
        name: '고스트',
        r: 199,
        g: 201,
        b: 213,
      },
    },
    worst: {
      description: '과한 저명도 또는 고명도, 고채도의 따뜻한 컬러는 소화하기 어려워요',
      color: {
        bunker: {
          name: '벙커',
          r: 13,
          g: 17,
          b: 23,
        },
        zakarta: {
          name: '자카르타',
          r: 58,
          g: 42,
          b: 106,
        },
        punch: {
          name: '펀치',
          r: 220,
          g: 67,
          b: 51,
        },
        serishe: {
          name: '세리세',
          r: 218,
          g: 50,
          b: 135,
        },
        gorshe: {
          name: '고르세',
          r: 255,
          g: 241,
          b: 79,
        },
        wattle: {
          name: '와틀',
          r: 220,
          g: 215,
          b: 71,
        },
        everGlade: {
          name: '에버글레이드',
          r: 28,
          g: 64,
          b: 46,
        },
      },
    },
  },
  fw_mt: {
    name: '가을 웜 뮤트',
    iconColor: { name: '버닝 샌드', code: { r: 217, g: 147, b: 118 } },
    tags: ['편안한', '차분한', '따뜻한'],
    best: {
      burningSand: {
        name: '버닝 샌드',
        r: 217,
        g: 147,
        b: 118,
      },
      anzac: {
        name: '앤잭',
        r: 224,
        g: 182,
        b: 70,
      },
      leather: {
        name: '래더',
        r: 150,
        g: 112,
        b: 89,
      },
      copper: {
        name: '구리',
        r: 160,
        g: 83,
        b: 75,
      },
      clayCreek: {
        name: '클레이 크릭',
        r: 138,
        g: 131,
        b: 96,
      },
      juniper: {
        name: '향나무',
        r: 109,
        g: 146,
        b: 146,
      },
      grayAsparagus: {
        name: '그레이 아스파라거스',
        r: 79,
        g: 89,
        b: 69,
      },
    },
    worst: {
      description: '과한 저명도 또는 고명도, 고채도의 차가운 컬러는 소화하기 어려워요',
      color: {
        purpleHeart: {
          name: '퍼플 하트',
          r: 101,
          g: 45,
          b: 193,
        },
        hibiscus: {
          name: '히비스커스',
          r: 182,
          g: 49,
          b: 108,
        },
        red: {
          name: '홍색',
          r: 240,
          g: 76,
          b: 85,
        },
        starship: {
          name: '스타쉽',
          r: 236,
          g: 242,
          b: 69,
        },
        silverTree: {
          name: '실버 트리',
          r: 102,
          g: 181,
          b: 143,
        },
        blue: {
          name: '블루',
          r: 0,
          g: 0,
          b: 255,
        },
        heliotrope: {
          name: '헬리오트로프',
          r: 223,
          g: 115,
          b: 255,
        },
      },
    },
  },
  fw_st: {
    name: '가을 웜 스트롱',
    iconColor: { name: '감', code: { r: 212, g: 96, b: 59 } },
    tags: ['그윽한', '내추럴', '앤틱한'],
    best: {
      cognac: {
        name: '코냑',
        r: 159,
        g: 56,
        b: 29,
      },
      tropicalRainForest: {
        name: '열대우림',
        r: 0,
        g: 117,
        b: 94,
      },
      persimmon: {
        name: '감',
        r: 212,
        g: 96,
        b: 59,
      },
      pottersClay: {
        name: '포터스 클레이',
        r: 140,
        g: 87,
        b: 56,
      },
      oldGold: {
        name: '올드 골드',
        r: 207,
        g: 181,
        b: 59,
      },
      rhino: {
        name: '라이노',
        r: 46,
        g: 63,
        b: 98,
      },
      luxorGold: {
        name: '룩소르 골드',
        r: 167,
        g: 136,
        b: 44,
      },
    },
    worst: {
      description: '과한 저명도 또는 고명도, 저채도의 차가운 컬러는 소화하기 어려워요',
      color: {
        white: {
          name: '화이트',
          r: 255,
          g: 255,
          b: 255,
        },
        vanillaIce: {
          name: '바닐라 아이스',
          r: 190,
          g: 181,
          b: 183,
        },
        spindle: {
          name: '스핀들',
          r: 161,
          g: 173,
          b: 181,
        },
        rockBlue: {
          name: '록 블루',
          r: 95,
          g: 102,
          b: 114,
        },
        lailac: {
          name: '라일락',
          r: 152,
          g: 119,
          b: 123,
        },
        berlyGreen: {
          name: '베릴 그린',
          r: 226,
          g: 146,
          b: 192,
        },
        cement: {
          name: '시멘트',
          r: 138,
          g: 143,
          b: 138,
        },
      },
    },
  },
  fw_dp: {
    name: '가을 웜 딥',
    iconColor: { name: '토템 폴', code: { r: 153, g: 27, b: 7 } },
    tags: ['고혹적', '섹시한', '매트한'],
    best: {
      totemPole: {
        name: '토템 폴',
        r: 153,
        g: 27,
        b: 7,
      },
      yellowMetal: {
        name: '옐로우 메탈',
        r: 113,
        g: 99,
        b: 56,
      },
      bunting: {
        name: '번팅',
        r: 21,
        g: 31,
        b: 76,
      },
      cedarWood: {
        name: '삼나무',
        r: 113,
        g: 26,
        b: 0,
      },
      bean: {
        name: '팥',
        r: 61,
        g: 12,
        b: 2,
      },
      turtleGreen: {
        name: '터틀 그린',
        r: 42,
        g: 56,
        b: 11,
      },
      brown: {
        name: '브라운',
        r: 89,
        g: 40,
        b: 4,
      },
    },
    worst: {
      description: '고명도, 고채도의 차가운 컬러는 소화하기 어려워요',
      color: {
        white: {
          name: '화이트',
          r: 255,
          g: 255,
          b: 255,
        },
        pinkSwan: {
          name: '핑크 스완',
          r: 190,
          g: 181,
          b: 183,
        },
        hitGray: {
          name: '히트 그레이',
          r: 161,
          g: 173,
          b: 181,
        },
        suttleGray: {
          name: '셔틀 그레이',
          r: 95,
          g: 102,
          b: 114,
        },
        baja: {
          name: '바자',
          r: 152,
          g: 119,
          b: 123,
        },
        shocking: {
          name: '쇼킹',
          r: 226,
          g: 146,
          b: 192,
        },
        stack: {
          name: '스택',
          r: 138,
          g: 143,
          b: 138,
        },
      },
    },
  },
  wc_br: {
    name: '겨울 쿨 브라이트',
    iconColor: { name: '산 초원', code: { r: 26, g: 179, b: 133 } },
    tags: ['차가운', '뚜렷한', '도시적'],
    best: {
      shockingPink: {
        name: '쇼킹 핑크',
        r: 252,
        g: 15,
        b: 192,
      },
      yellow: {
        name: '옐로우',
        r: 255,
        g: 255,
        b: 0,
      },
      darkBlue: {
        name: '아크 블루',
        r: 0,
        g: 0,
        b: 200,
      },
      wildSand: {
        name: '와일드 샌드',
        r: 244,
        g: 244,
        b: 244,
      },
      codGray: {
        name: '커드 그레이',
        r: 11,
        g: 11,
        b: 11,
      },
      darkOrchid: {
        name: '다크 오키드',
        r: 153,
        g: 50,
        b: 204,
      },
      mountainMeadow: {
        name: '산 초원',
        r: 26,
        g: 179,
        b: 133,
      },
    },
    worst: {
      description: '고명도, 저채도의 따뜻한 컬러는 소화하기 어려워요',
      color: {
        limedAsh: {
          name: '림드 애쉬',
          r: 116,
          g: 125,
          b: 99,
        },
        razor: {
          name: '레이저',
          r: 200,
          g: 181,
          b: 104,
        },
        orientalPink: {
          name: '오리엔탈 핑크',
          r: 198,
          g: 145,
          b: 145,
        },
        brendy: {
          name: '브랜디',
          r: 222,
          g: 193,
          b: 150,
        },
        bon: {
          name: '본',
          r: 228,
          g: 209,
          b: 192,
        },
        hitGray: {
          name: '히트 그레이',
          r: 161,
          g: 173,
          b: 181,
        },
        westar: {
          name: '웨스타',
          r: 220,
          g: 217,
          b: 210,
        },
      },
    },
  },
  wc_tr: {
    name: '겨울 쿨 트루',
    iconColor: { name: '말리부', code: { r: 125, g: 200, b: 247 } },
    tags: ['상쾌한', '깔끔한', '세련된'],
    best: {
      pinkLace: {
        name: '핑크레이스',
        r: 255,
        g: 221,
        b: 244,
      },
      dawn: {
        name: '새벽',
        r: 166,
        g: 162,
        b: 154,
      },
      malibu: {
        name: '말리부',
        r: 125,
        g: 200,
        b: 247,
      },
      eden: {
        name: '에덴',
        r: 16,
        g: 88,
        b: 82,
      },
      puertoRico: {
        name: '푸에르토 리코',
        r: 63,
        g: 193,
        b: 170,
      },
      cloudBurst: {
        name: '클라우드 버스트',
        r: 32,
        g: 46,
        b: 84,
      },
      athensGray: {
        name: '아테네 그레이',
        r: 238,
        g: 240,
        b: 243,
      },
    },
    worst: {
      description: '과한 저명도 또는 고명도, 저채도의 따뜻한 컬러는 소화하기 어려워요',
      color: {
        mulPon: {
          name: '뮬 폰',
          r: 140,
          g: 71,
          b: 47,
        },
        gold: {
          name: '금색',
          r: 164,
          g: 130,
          b: 82,
        },
        oldGold: {
          name: '올드 골드',
          r: 207,
          g: 181,
          b: 59,
        },
        rockust: {
          name: '로커스트',
          r: 168,
          g: 175,
          b: 142,
        },
        sikamoa: {
          name: '시카모어',
          r: 144,
          g: 141,
          b: 57,
        },
        mandisPink: {
          name: '맨디스 핑크',
          r: 242,
          g: 195,
          b: 178,
        },
        tonyPink: {
          name: '토니 핑크',
          r: 231,
          g: 159,
          b: 140,
        },
      },
    },
  },
  wc_dp: {
    name: '겨울 쿨 딥',
    iconColor: { name: '나이트 샤즈', code: { r: 170, g: 55, b: 90 } },
    tags: ['도도한', '시크한', '중후한'],
    best: {
      cannonPink: {
        name: '캐논 핑크',
        r: 137,
        g: 67,
        b: 103,
      },
      black: {
        name: '블랙',
        r: 0,
        g: 0,
        b: 0,
      },
      nightShadz: {
        name: '나이트 샤즈',
        r: 170,
        g: 55,
        b: 90,
      },
      tomThumb: {
        name: '톰 썸',
        r: 63,
        g: 88,
        b: 59,
      },
      minsk: {
        name: '민스크',
        r: 63,
        g: 48,
        b: 127,
      },
      wineBerry: {
        name: '와인 베리',
        r: 89,
        g: 29,
        b: 53,
      },
      lunarGreen: {
        name: '루나 그린',
        r: 60,
        g: 73,
        b: 58,
      },
    },
    worst: {
      description: '고명도, 고채도의 따뜻한 컬러는 소화하기 어려워요',
      color: {
        nutmeg: {
          name: '너트메그',
          r: 129,
          g: 66,
          b: 44,
        },
        copper: {
          name: '코퍼',
          r: 184,
          g: 115,
          b: 51,
        },
        mud: {
          name: '황토색',
          r: 220,
          g: 151,
          b: 48,
        },
        chenin: {
          name: '체닌',
          r: 223,
          g: 205,
          b: 111,
        },
        stro: {
          name: '스트로',
          r: 212,
          g: 191,
          b: 141,
        },
        sandwisp: {
          name: '샌드위스프',
          r: 245,
          g: 231,
          b: 162,
        },
        blondy: {
          name: '금발색',
          r: 219,
          g: 188,
          b: 134,
        },
      },
    },
  },
};
