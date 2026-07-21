// ==== БАЗА МИКСОВ ====
// strength: light | medium | strong
// profile:  sour | sweet | sourSweet | neutral | fresh | spicy | dessert
// duration: примерное время курения на 1 забивку
window.MIXES = [

  // ============ LIGHT (лёгкие) ============
  {
    id:"l1", name:"Арбуз — Дыня", strength:"light", profile:["sweet"], emoji:"🍉",
    short:"Сладкий, сочный, лёгкий", duration:"45–60 мин",
    desc:"Классика летнего вечера. Сладкий и очень сочный, без резкости. Отлично заходит новичкам и большой компании.",
    tags:["новичкам","лето","компания"],
    recipe:[{brand:"Element Вода",flavor:"Арбуз",parts:50},{brand:"Element Вода",flavor:"Дыня",parts:50}],
    bowl:"Классик / Turkish", heat:"3 угля 25мм, прогрев 4–5 мин", note:"Не перегревать — арбуз быстро горчит."
  },
  {
    id:"l2", name:"Малиновый лимонад", strength:"light", profile:["sourSweet"], emoji:"🫐",
    short:"Кисло-сладкий, освежающий", duration:"40–55 мин",
    desc:"Ягодная кислинка на лимонадной базе. Освежает, не приторный, хорошо пьётся в жару.",
    tags:["лето","освежающий"],
    recipe:[{brand:"Трофимов",flavor:"Малина",parts:40},{brand:"Element Вода",flavor:"Лимон",parts:30},{brand:"Element Вода",flavor:"Гуава",parts:30}],
    bowl:"Классик", heat:"3 угля 25мм", note:"Цитрус даёт кислоту — не больше 30%."
  },
  {
    id:"l3", name:"Мятный огурец", strength:"light", profile:["fresh","neutral"], emoji:"🥒",
    short:"Свежий, чистый, почти без сахара", duration:"50–65 мин",
    desc:"Очень лёгкий и чистый вкус. Хорош как «сброс» после плотных десертов или с утра.",
    tags:["освежающий","нейтральный"],
    recipe:[{brand:"Element Вода",flavor:"Огурец",parts:60},{brand:"Element Воздух",flavor:"Мята",parts:25},{brand:"Element Вода",flavor:"Лайм",parts:15}],
    bowl:"Фаннел", heat:"2–3 угля 25мм", note:"Мяту не больше 25%, иначе забьёт всё."
  },
  {
    id:"l4", name:"Груша с ванилью", strength:"light", profile:["sweet","dessert"], emoji:"🍐",
    short:"Мягкий, сливочный, согревающий", duration:"55–70 мин",
    desc:"Тёплый десертный микс. Мягкая груша с ванильным шлейфом, обволакивающий вкус. Идёт под чай.",
    tags:["зима","вечер","десерт"],
    recipe:[{brand:"Богатырь",flavor:"Соловей (груша)",parts:55},{brand:"Daily Hookah",flavor:"Ваниль",parts:25},{brand:"Element Земля",flavor:"Сливки",parts:20}],
    bowl:"Классик", heat:"3 угля 25мм, низкий жар", note:"Ваниль легко перегреть — держи чашу прохладной."
  },
  {
    id:"l5", name:"Персик — Маракуйя", strength:"light", profile:["sourSweet"], emoji:"🍑",
    short:"Тропический, кисло-сладкий", duration:"45–60 мин",
    desc:"Сладкий персик и кислая маракуйя дают яркий тропический баланс. Очень «пьётся».",
    tags:["тропики","компания"],
    recipe:[{brand:"Element Вода",flavor:"Персик",parts:55},{brand:"Element Вода",flavor:"Маракуйя",parts:45}],
    bowl:"Классик", heat:"3 угля 25мм", note:"Идеален на калауде."
  },
  {
    id:"l6", name:"Зелёный чай — Жасмин", strength:"light", profile:["neutral","fresh"], emoji:"🍵",
    short:"Нейтральный, травяной, спокойный", duration:"60–75 мин",
    desc:"Тонкий чайно-цветочный вкус без сладости. Для тех, кто устал от фруктов. Очень долгий и ровный.",
    tags:["нейтральный","долгий"],
    recipe:[{brand:"Daily Hookah",flavor:"Зелёный чай",parts:65},{brand:"Element Воздух",flavor:"Жасмин",parts:20},{brand:"Element Вода",flavor:"Лимон",parts:15}],
    bowl:"Классик", heat:"2–3 угля 25мм", note:"Жасмин концентрированный, больше 20% не надо."
  },
  {
    id:"l7", name:"Дыня — Мята", strength:"light", profile:["sweet","fresh"], emoji:"🍈",
    short:"Сладкий с холодком", duration:"45–55 мин",
    desc:"Медовая дыня с мягким ментоловым финишем. Классический «летний» вариант для террасы.",
    tags:["лето","новичкам"],
    recipe:[{brand:"Chabacco Medium",flavor:"Melon",parts:70},{brand:"Element Воздух",flavor:"Мята",parts:30}],
    bowl:"Классик", heat:"3 угля 25мм", note:"—"
  },
  {
    id:"l8", name:"Кола — Лайм", strength:"light", profile:["sourSweet"], emoji:"🥤",
    short:"Газированный, кисло-сладкий", duration:"40–50 мин",
    desc:"Вкус холодной колы со льдом и долькой лайма. Узнаваемый, весёлый, заходит вообще всем.",
    tags:["новичкам","компания"],
    recipe:[{brand:"Blackburn",flavor:"Fresh Cola",parts:60},{brand:"Element Вода",flavor:"Лайм",parts:25},{brand:"Element Воздух",flavor:"Мята",parts:15}],
    bowl:"Классик", heat:"3 угля 25мм", note:"—"
  },
  {
    id:"l9", name:"Черника — Йогурт", strength:"light", profile:["sweet","dessert"], emoji:"🫐",
    short:"Нежный, ягодно-сливочный", duration:"50–60 мин",
    desc:"Мягкий десерт: спелая черника в йогуртовой основе. Ненавязчивый и обволакивающий.",
    tags:["десерт","новичкам"],
    recipe:[{brand:"Наш",flavor:"Черника",parts:55},{brand:"Element Земля",flavor:"Йогурт",parts:30},{brand:"Element Земля",flavor:"Сливки",parts:15}],
    bowl:"Классик", heat:"3 угля 25мм, низкий жар", note:"Кремовую базу не перегревай."
  },
  {
    id:"l10", name:"Дюшес — Барбарис", strength:"light", profile:["sweet","sourSweet"], emoji:"🍬",
    short:"Ностальгический, конфетный", duration:"45–55 мин",
    desc:"Вкус советского лимонада и барбарисовых леденцов. Сладкий с кислым краем, очень узнаваемый.",
    tags:["необычный","компания"],
    recipe:[{brand:"Наш",flavor:"Дюшес",parts:60},{brand:"Наш",flavor:"Барбарис",parts:40}],
    bowl:"Классик", heat:"3 угля 25мм", note:"—"
  },
  {
    id:"l11", name:"Двойное яблоко", strength:"light", profile:["spicy","sweet"], emoji:"🍎",
    short:"Классический анисовый вкус", duration:"55–70 мин",
    desc:"Легендарное «двойное яблоко» с анисовой ноткой. Восточная классика, которую любят в любой компании.",
    tags:["классика","компания"],
    recipe:[{brand:"Al Fakher",flavor:"Двойное яблоко",parts:80},{brand:"Al Fakher",flavor:"Мята",parts:20}],
    bowl:"Классик / Turkish", heat:"3–4 угля 25мм", note:"Al Fakher любит жар — можно 4 угля."
  },
  {
    id:"l12", name:"Виноград — Мята", strength:"light", profile:["sweet","fresh"], emoji:"🍇",
    short:"Сладкий виноград с холодком", duration:"50–60 мин",
    desc:"Сочный зелёный виноград с мятной свежестью. Простой и безотказный микс на каждый день.",
    tags:["новичкам","лето"],
    recipe:[{brand:"Al Fakher",flavor:"Виноград",parts:65},{brand:"Afzal",flavor:"Grape Mint",parts:35}],
    bowl:"Классик", heat:"3 угля 25мм", note:"—"
  },
  {
    id:"l13", name:"Клубника со сливками", strength:"light", profile:["sweet","dessert"], emoji:"🍓",
    short:"Сладкий летний десерт", duration:"45–55 мин",
    desc:"Спелая клубника в сливках. Очень сладкий и мягкий, любимец тех, кто не любит кислое.",
    tags:["десерт","новичкам"],
    recipe:[{brand:"Adalya",flavor:"Strawberry",parts:60},{brand:"Element Земля",flavor:"Сливки",parts:25},{brand:"Element Земля",flavor:"Ваниль",parts:15}],
    bowl:"Классик", heat:"3 угля 25мм, низкий жар", note:"—"
  },
  {
    id:"l14", name:"Лимон — Лайм — Лёд", strength:"light", profile:["sour","fresh"], emoji:"🍋",
    short:"Кислый и очень свежий", duration:"40–50 мин",
    desc:"Чистый цитрусовый дуэт с ледяным финишем. Освежает в жару, бодрит, не сладкий.",
    tags:["лето","кислый","освежающий"],
    recipe:[{brand:"Afzal",flavor:"Lemon Mint",parts:50},{brand:"Element Вода",flavor:"Лайм",parts:35},{brand:"Element Воздух",flavor:"Лёд",parts:15}],
    bowl:"Фаннел", heat:"3 угля 25мм", note:"Цитрус выгорает — меняй угли вовремя."
  },
  {
    id:"l15", name:"Манго — Персик", strength:"light", profile:["sweet"], emoji:"🥭",
    short:"Мягкий тропический, сладкий", duration:"45–60 мин",
    desc:"Спелое манго и нежный персик. Тёплый сладкий микс без кислоты, очень «уютный».",
    tags:["тропики","новичкам"],
    recipe:[{brand:"Bonche",flavor:"Peach",parts:50},{brand:"Serbetli",flavor:"Mango",parts:50}],
    bowl:"Классик", heat:"3 угля 25мм", note:"—"
  },
  {
    id:"l16", name:"Тархун", strength:"light", profile:["fresh","neutral"], emoji:"🌿",
    short:"Свежий, травяной, необычный", duration:"50–60 мин",
    desc:"Вкус того самого зелёного лимонада. Свежий эстрагон с лёгкой сладостью. Нестандартно и приятно.",
    tags:["необычный","освежающий"],
    recipe:[{brand:"Северный",flavor:"Тархун",parts:70},{brand:"Element Воздух",flavor:"Мята",parts:30}],
    bowl:"Классик", heat:"3 угля 25мм", note:"—"
  },

  // ============ MEDIUM (средние) ============
  {
    id:"m1", name:"Малина — Лимон — Мята", strength:"medium", profile:["sourSweet","fresh"], emoji:"🍋",
    short:"Кисло-сладкий, яркий, с холодком", duration:"55–70 мин",
    desc:"Топовый универсал. Ягодная сладость, цитрусовая кислота и мятный финиш. Держится очень стабильно.",
    tags:["универсал","хит"],
    recipe:[{brand:"MustHave",flavor:"Raspberry",parts:45},{brand:"MustHave",flavor:"Lemon",parts:30},{brand:"Sebero",flavor:"Icemint",parts:25}],
    bowl:"Фаннел / Классик", heat:"3 угля 25мм, калауд", note:"Если кисло — сдвинь лимон до 20%."
  },
  {
    id:"m2", name:"Пина Колада", strength:"medium", profile:["sweet","dessert"], emoji:"🥥",
    short:"Сладкий, кремовый, тропический", duration:"55–65 мин",
    desc:"Ананас с кокосовыми сливками. Плотный десертный микс, ощущается «жирным» и обволакивающим.",
    tags:["десерт","вечер"],
    recipe:[{brand:"Chabacco Medium",flavor:"Pinacolada",parts:55},{brand:"Хулиган",flavor:"Cocos",parts:25},{brand:"Element Земля",flavor:"Сливки",parts:20}],
    bowl:"Классик", heat:"3 угля 25мм, аккуратный прогрев", note:"Кокос требует меньше жара."
  },
  {
    id:"m3", name:"Грейпфрут — Барбарис", strength:"medium", profile:["sour"], emoji:"🍊",
    short:"Кислый, терпкий, бодрящий", duration:"50–65 мин",
    desc:"Для любителей чистой кислоты. Грейпфрутовая горчинка и барбарисовая терпкость. Не сладкий совсем.",
    tags:["кислый","для опытных"],
    recipe:[{brand:"Bonche",flavor:"Grapefruit",parts:55},{brand:"Blackburn",flavor:"Barberry",parts:45}],
    bowl:"Фаннел", heat:"3 угля 25мм", note:"Цитрус быстро выгорает — меняй угли."
  },
  {
    id:"m4", name:"Виноград — Смородина", strength:"medium", profile:["sourSweet"], emoji:"🍇",
    short:"Ягодный, насыщенный, с кислинкой", duration:"60–75 мин",
    desc:"Плотный ягодный вкус с кислой подложкой. Один из самых долгоиграющих миксов — легко тянет час с лишним.",
    tags:["долгий","универсал"],
    recipe:[{brand:"Трофимов",flavor:"Виноград",parts:45},{brand:"Трофимов",flavor:"Смородина",parts:40},{brand:"MustHave",flavor:"Lime",parts:15}],
    bowl:"Фаннел", heat:"3 угля 25мм", note:"—"
  },
  {
    id:"m5", name:"Облепиха — Мёд", strength:"medium", profile:["sourSweet"], emoji:"🍯",
    short:"Кисло-сладкий и согревающий", duration:"55–70 мин",
    desc:"Осенне-зимний микс. Резкая облепиховая кислота смягчается мёдом. Хорошо держится, вкус не плывёт.",
    tags:["зима","согревающий"],
    recipe:[{brand:"Darkside Base",flavor:"Sunny Berry",parts:50},{brand:"MustHave",flavor:"Honey",parts:30},{brand:"Element Земля",flavor:"Чай",parts:20}],
    bowl:"Классик", heat:"3 угля 25мм", note:"Мёд даёт сироп — клади фольгу плотнее."
  },
  {
    id:"m6", name:"Яблоко — Корица", strength:"medium", profile:["spicy","sweet"], emoji:"🍎",
    short:"Пряный, тёплый, десертный", duration:"55–70 мин",
    desc:"Печёное яблоко с корицей. Согревающий пряный микс, идеально под зимний вечер и глинтвейн.",
    tags:["зима","пряный"],
    recipe:[{brand:"Element Земля",flavor:"Яблоко",parts:60},{brand:"Element Земля",flavor:"Корица",parts:15},{brand:"Daily Hookah",flavor:"Ваниль",parts:25}],
    bowl:"Классик", heat:"3 угля 25мм", note:"Корицы много не клади — 15% предел."
  },
  {
    id:"m7", name:"Манго — Лайм — Лёд", strength:"medium", profile:["sourSweet","fresh"], emoji:"🥭",
    short:"Сочный, кисло-сладкий, холодный", duration:"55–65 мин",
    desc:"Спелое манго, острая лаймовая кислота и ледяной финиш. Очень освежает, любимец летних веранд.",
    tags:["лето","хит"],
    recipe:[{brand:"MustHave",flavor:"Mango",parts:50},{brand:"MustHave",flavor:"Lime",parts:25},{brand:"Sebero",flavor:"Icemint",parts:25}],
    bowl:"Фаннел", heat:"3 угля 25мм", note:"—"
  },
  {
    id:"m8", name:"Личи — Роза", strength:"medium", profile:["sweet","neutral"], emoji:"🌸",
    short:"Сладкий, цветочный, изящный", duration:"55–65 мин",
    desc:"Тонкий и необычный вкус. Сладость личи с цветочным шлейфом розы. Для тех, кто хочет что-то не банальное.",
    tags:["необычный","вечер"],
    recipe:[{brand:"Sebero",flavor:"Lychee",parts:65},{brand:"Element Воздух",flavor:"Роза",parts:20},{brand:"MustHave",flavor:"Pomegranate",parts:15}],
    bowl:"Классик", heat:"3 угля 25мм", note:"Роза мыльная в передозе — максимум 20%."
  },
  {
    id:"m9", name:"Мохито", strength:"medium", profile:["fresh","sour"], emoji:"🌿",
    short:"Свежий, кислый, с холодком", duration:"55–65 мин",
    desc:"Лайм, мята и лёгкая сладость тростника. Классика, которая никогда не надоедает.",
    tags:["лето","классика"],
    recipe:[{brand:"MustHave",flavor:"Lime",parts:40},{brand:"Sebero",flavor:"Icemint",parts:30},{brand:"Element Вода",flavor:"Виноград",parts:30}],
    bowl:"Фаннел", heat:"3 угля 25мм", note:"—"
  },
  {
    id:"m10", name:"Чизкейк — Малина", strength:"medium", profile:["dessert","sweet"], emoji:"🍰",
    short:"Сливочный десерт с ягодой", duration:"55–65 мин",
    desc:"Плотный кремовый чизкейк с ягодным верхом. Сытный вечерний микс, отлично под кофе.",
    tags:["десерт","вечер"],
    recipe:[{brand:"Daily Hookah",flavor:"Чизкейк",parts:55},{brand:"MustHave",flavor:"Raspberry",parts:30},{brand:"Element Земля",flavor:"Сливки",parts:15}],
    bowl:"Классик", heat:"3 угля 25мм, низкий жар", note:"Кремовые вкусы горчат от перегрева."
  },
  {
    id:"m11", name:"Арбуз — Маракуйя — Мята", strength:"medium", profile:["sourSweet","fresh"], emoji:"🍉",
    short:"Сладко-кислый, освежающий", duration:"55–65 мин",
    desc:"Улучшенная арбузная классика: маракуйя даёт кислоту, мята — свежесть. Не приедается.",
    tags:["лето","универсал"],
    recipe:[{brand:"Serbetli",flavor:"Ice Watermelon",parts:45},{brand:"MustHave",flavor:"Passionfruit",parts:35},{brand:"Sebero",flavor:"Icemint",parts:20}],
    bowl:"Фаннел", heat:"3 угля 25мм", note:"—"
  },
  {
    id:"m12", name:"Гранат — Вишня", strength:"medium", profile:["sour","sourSweet"], emoji:"🍒",
    short:"Терпкий, кислый, глубокий", duration:"60–70 мин",
    desc:"Насыщенный тёмно-ягодный микс с гранатовой терпкостью. Хорошо держит вкус, не выцветает.",
    tags:["кислый","долгий"],
    recipe:[{brand:"MustHave",flavor:"Pomegranate",parts:50},{brand:"Blackburn",flavor:"Ice Cherry",parts:35},{brand:"MustHave",flavor:"Lime",parts:15}],
    bowl:"Фаннел", heat:"3 угля 25мм", note:"—"
  },
  {
    id:"m13", name:"Бабушкино варенье", strength:"medium", profile:["sweet","sourSweet"], emoji:"🫙",
    short:"Тёплый ягодный джем", duration:"60–70 мин",
    desc:"Густой вкус домашнего варенья из смородины и малины. Тёплый, ламповый, с лёгкой кислинкой.",
    tags:["зима","необычный"],
    recipe:[{brand:"Северный",flavor:"Бабушкино варенье",parts:60},{brand:"Трофимов",flavor:"Малина",parts:25},{brand:"MustHave",flavor:"Lime",parts:15}],
    bowl:"Классик", heat:"3 угля 25мм", note:"—"
  },
  {
    id:"m14", name:"Мандарин — Облепиха", strength:"medium", profile:["sourSweet"], emoji:"🍊",
    short:"Новогодний, цитрусово-ягодный", duration:"55–65 мин",
    desc:"Сочный мандарин с облепиховой кислинкой. Пахнет новым годом, яркий и настроенческий.",
    tags:["зима","цитрус"],
    recipe:[{brand:"Хулиган",flavor:"Grand (мандарин)",parts:55},{brand:"Darkside Base",flavor:"Sunny Berry",parts:30},{brand:"MustHave",flavor:"Lime",parts:15}],
    bowl:"Фаннел", heat:"3 угля 25мм", note:"—"
  },
  {
    id:"m15", name:"Дыня — Клубника", strength:"medium", profile:["sweet"], emoji:"🍈",
    short:"Сладкий, летний, сочный", duration:"50–60 мин",
    desc:"Медовая дыня и спелая клубника. Очень сладкий и ароматный, идёт на ура у сладкоежек.",
    tags:["лето","сладкий"],
    recipe:[{brand:"Chabacco Medium",flavor:"Melon",parts:55},{brand:"Adalya",flavor:"Strawberry",parts:45}],
    bowl:"Классик", heat:"3 угля 25мм", note:"—"
  },
  {
    id:"m16", name:"Кактус — Лайм", strength:"medium", profile:["sour","fresh"], emoji:"🌵",
    short:"Кислый, зелёный, необычный", duration:"55–65 мин",
    desc:"Свежий зелёно-кислый профиль. Кактус даёт сочность, лайм — резкость. Бодрит и удивляет.",
    tags:["необычный","кислый"],
    recipe:[{brand:"MustHave",flavor:"Cactus",parts:55},{brand:"Element Вода",flavor:"Лайм",parts:30},{brand:"Sebero",flavor:"Icemint",parts:15}],
    bowl:"Фаннел", heat:"3 угля 25мм", note:"—"
  },
  {
    id:"m17", name:"Груша — Дюшес", strength:"medium", profile:["sweet"], emoji:"🍐",
    short:"Сладкий, газированный, мягкий", duration:"55–65 мин",
    desc:"Сочная груша плюс лимонад дюшес. Сладкий, лёгкий на восприятие, отлично на компанию.",
    tags:["компания","сладкий"],
    recipe:[{brand:"Богатырь",flavor:"Соловей (груша)",parts:55},{brand:"Наш",flavor:"Дюшес",parts:45}],
    bowl:"Классик", heat:"3 угля 25мм", note:"—"
  },
  {
    id:"m18", name:"Чёрный чай — Лимон", strength:"medium", profile:["neutral","sour"], emoji:"🫖",
    short:"Терпкий чай с цитрусом", duration:"60–75 мин",
    desc:"Крепкий чёрный чай с долькой лимона. Взрослый нейтральный вкус, очень долгий и ровный.",
    tags:["нейтральный","долгий"],
    recipe:[{brand:"Element Земля",flavor:"Чай",parts:60},{brand:"Element Вода",flavor:"Лимон",parts:25},{brand:"MustHave",flavor:"Bergamot",parts:15}],
    bowl:"Классик", heat:"3 угля 25мм", note:"—"
  },
  {
    id:"m19", name:"Киви — Клубника", strength:"medium", profile:["sourSweet"], emoji:"🥝",
    short:"Кисло-сладкий, свежий", duration:"50–60 мин",
    desc:"Кислый киви и сладкая клубника в балансе. Яркий, летний, освежающий без мяты.",
    tags:["лето","универсал"],
    recipe:[{brand:"Blackburn",flavor:"Kiwi",parts:50},{brand:"Adalya",flavor:"Strawberry",parts:35},{brand:"Element Вода",flavor:"Лайм",parts:15}],
    bowl:"Фаннел", heat:"3 угля 25мм", note:"—"
  },
  {
    id:"m20", name:"Восточная сказка", strength:"medium", profile:["spicy","sweet"], emoji:"🕌",
    short:"Пряный, медово-ореховый", duration:"60–70 мин",
    desc:"Восточный десерт: мёд, специи, орехи и сухофрукты. Насыщенный согревающий вкус для вечера.",
    tags:["зима","пряный","необычный"],
    recipe:[{brand:"Северный",flavor:"Восточная сказка",parts:60},{brand:"MustHave",flavor:"Honey",parts:25},{brand:"Element Земля",flavor:"Корица",parts:15}],
    bowl:"Классик", heat:"3 угля 25мм", note:"—"
  },

  // ============ STRONG (крепкие) ============
  {
    id:"s1", name:"Кислый цитрус — Мята", strength:"strong", profile:["sour","fresh"], emoji:"🧊",
    short:"Резко-кислый, ледяной, крепкий", duration:"60–75 мин",
    desc:"Жёсткий бодрящий микс. Чистая цитрусовая кислота с мощным ментоловым ударом. Не для новичков.",
    tags:["для опытных","кислый"],
    recipe:[{brand:"Darkside Core",flavor:"Supernova",parts:40},{brand:"Darkside Core",flavor:"Citrus Mint",parts:60}],
    bowl:"Фаннел / Тёрнинг", heat:"3 угля 25мм, калауд обязательно", note:"Darkside — меньше жара, иначе горечь."
  },
  {
    id:"s2", name:"Тёмная вишня", strength:"strong", profile:["sourSweet"], emoji:"🍒",
    short:"Плотный, кисло-сладкий, крепкий", duration:"65–80 мин",
    desc:"Густой вишнёвый вкус с косточковой горчинкой. Крепкий, долгий, ровно держит всю сессию.",
    tags:["для опытных","долгий"],
    recipe:[{brand:"Darkside Core",flavor:"Cherry Slow",parts:60},{brand:"Darkside Core",flavor:"Bergamonstr",parts:25},{brand:"Darkside Base",flavor:"Sunny Berry",parts:15}],
    bowl:"Тёрнинг / Фаннел", heat:"3 угля 25мм, калауд", note:"Забивай воздушно, Darkside не любит уплотнения."
  },
  {
    id:"s3", name:"Бергамот — Чай", strength:"strong", profile:["neutral","spicy"], emoji:"🫖",
    short:"Нейтральный, терпкий, крепкий", duration:"70–85 мин",
    desc:"Эрл Грей в чаше. Терпкий чайный вкус с бергамотовым цитрусом. Взрослый, не сладкий, характерный.",
    tags:["нейтральный","для опытных"],
    recipe:[{brand:"Darkside Core",flavor:"Bergamonstr",parts:50},{brand:"Tangiers Noir",flavor:"Earl Grey",parts:30},{brand:"Darkside Base",flavor:"Lemonad",parts:20}],
    bowl:"Фаннел", heat:"2–3 угля 25мм, калауд", note:"Tangiers греется медленно — 7–8 мин прогрева."
  },
  {
    id:"s4", name:"Мятный удар", strength:"strong", profile:["fresh"], emoji:"❄️",
    short:"Максимально холодный и крепкий", duration:"55–70 мин",
    desc:"Морозный микс на грани. Сильный ментоловый холод и жёсткий никотиновый удар. Отрезвляет.",
    tags:["для опытных","освежающий"],
    recipe:[{brand:"Darkside Core",flavor:"Needl Mint",parts:60},{brand:"Darkside Core",flavor:"Supernova",parts:40}],
    bowl:"Тёрнинг", heat:"3 угля 25мм, калауд", note:"Не для пустого желудка."
  },
  {
    id:"s5", name:"Пряный апельсин", strength:"strong", profile:["spicy","sourSweet"], emoji:"🍊",
    short:"Пряный, тёплый, крепкий", duration:"65–80 мин",
    desc:"Апельсин с корицей и гвоздикой — вкус глинтвейна. Согревающий, плотный, зимний.",
    tags:["зима","пряный"],
    recipe:[{brand:"Tangiers Noir",flavor:"Orange Soda",parts:50},{brand:"Darkside Core",flavor:"Bergamonstr",parts:30},{brand:"Element Земля",flavor:"Корица",parts:20}],
    bowl:"Фаннел", heat:"3 угля 25мм, калауд", note:"Tangiers забивать плотно, но не трамбовать."
  },
  {
    id:"s6", name:"Чёрный виноград", strength:"strong", profile:["sweet","sourSweet"], emoji:"🍇",
    short:"Сладкий, но крепкий", duration:"65–80 мин",
    desc:"Редкое сочетание: сладкий десертный вкус при высокой крепости. Плотный виноград с ягодным низом.",
    tags:["для опытных","долгий"],
    recipe:[{brand:"Darkside Core",flavor:"Dark Grape",parts:65},{brand:"Darkside Base",flavor:"Sunny Berry",parts:20},{brand:"Darkside Core",flavor:"Bergamonstr",parts:15}],
    bowl:"Тёрнинг / Фаннел", heat:"3 угля 25мм, калауд", note:"—"
  },
  {
    id:"s7", name:"Кофе — Шоколад", strength:"strong", profile:["dessert","neutral"], emoji:"☕",
    short:"Горький десерт, очень крепкий", duration:"60–75 мин",
    desc:"Тёмный шоколад и эспрессо. Горьковато-сладкий, тяжёлый, вечерний. Хорош после плотного ужина.",
    tags:["десерт","вечер","для опытных"],
    recipe:[{brand:"Tangiers Noir",flavor:"Cocoa",parts:45},{brand:"Satyr",flavor:"Кофе",parts:35},{brand:"Element Земля",flavor:"Сливки",parts:20}],
    bowl:"Фаннел", heat:"3 угля 25мм, низкий жар, калауд", note:"Легко перегреть — начинай с 2 углей."
  },
  {
    id:"s8", name:"Дикая смородина", strength:"strong", profile:["sour"], emoji:"🫐",
    short:"Кислый, ягодный, крепкий", duration:"65–75 мин",
    desc:"Резкая чёрная смородина без сглаживания. Терпкий кислый профиль для тех, кто любит пожёстче.",
    tags:["кислый","для опытных"],
    recipe:[{brand:"Darkside Core",flavor:"Currant Flash",parts:60},{brand:"Darkside Base",flavor:"Lemonad",parts:25},{brand:"Darkside Core",flavor:"Needl Mint",parts:15}],
    bowl:"Тёрнинг", heat:"3 угля 25мм, калауд", note:"—"
  },
  {
    id:"s9", name:"Медовая дыня", strength:"strong", profile:["sweet"], emoji:"🍈",
    short:"Очень сладкий, плотный, крепкий", duration:"60–75 мин",
    desc:"Приторно-медовая дыня на крепкой базе. Сладкоежкам, которым нужен никотиновый удар.",
    tags:["для опытных","сладкий"],
    recipe:[{brand:"Tangiers Noir",flavor:"Cane Mint",parts:20},{brand:"Darkside Core",flavor:"Melonsun",parts:55},{brand:"MustHave",flavor:"Honey",parts:25}],
    bowl:"Фаннел", heat:"3 угля 25мм, калауд", note:"—"
  },
  {
    id:"s10", name:"Пряная слива", strength:"strong", profile:["spicy","sourSweet"], emoji:"🫑",
    short:"Пряный, терпкий, глубокий", duration:"65–80 мин",
    desc:"Копчёная слива с перечными нотами. Необычный и очень взрослый вкус, хорош на осень.",
    tags:["необычный","пряный","для опытных"],
    recipe:[{brand:"Darkside Core",flavor:"Plum Ridge",parts:55},{brand:"Tangiers Noir",flavor:"Cocoa",parts:20},{brand:"Element Земля",flavor:"Корица",parts:15},{brand:"Darkside Base",flavor:"Lemonad",parts:10}],
    bowl:"Фаннел", heat:"3 угля 25мм, калауд", note:"—"
  },
  {
    id:"s11", name:"Грейпфрут Нуар", strength:"strong", profile:["sour","fresh"], emoji:"🍊",
    short:"Горько-кислый, холодный, жёсткий", duration:"60–75 мин",
    desc:"Грейпфрутовая горечь с ледяным финишем. Один из самых «отрезвляющих» миксов в списке.",
    tags:["кислый","для опытных"],
    recipe:[{brand:"Tangiers Noir",flavor:"Grapefruit",parts:60},{brand:"Darkside Core",flavor:"Needl Mint",parts:25},{brand:"Darkside Base",flavor:"Lemonad",parts:15}],
    bowl:"Фаннел", heat:"3 угля 25мм, калауд", note:"Tangiers Grapefruit очень концентрированный."
  },
  {
    id:"s12", name:" Overdose Виноград", strength:"strong", profile:["sourSweet"], emoji:"💥",
    short:"Экстра-крепкий виноград", duration:"55–70 мин",
    desc:"Overdose — линейка для самых стойких. Плотный виноград с ягодной кислинкой и мощным ударом по горлу.",
    tags:["хардкор","для опытных"],
    recipe:[{brand:"Overdose",flavor:"Purple (виноград)",parts:60},{brand:"Darkside Base",flavor:"Sunny Berry",parts:25},{brand:"Darkside Core",flavor:"Needl Mint",parts:15}],
    bowl:"Тёрнинг", heat:"2–3 угля 25мм, калауд", note:"Overdose очень крепкий — забивай пореже и воздушно."
  },
  {
    id:"s13", name:"Лакрица — Анис", strength:"strong", profile:["spicy","neutral"], emoji:"🖤",
    short:"Пряный, лакричный, специфичный", duration:"70–85 мин",
    desc:"На любителя: чёрная лакрица с анисом. Тёмный, терпкий, «медицинский» вкус. Очень долгий.",
    tags:["необычный","для опытных","долгий"],
    recipe:[{brand:"Satyr",flavor:"Bortimer (лакрица)",parts:60},{brand:"Tangiers Noir",flavor:"Anise",parts:25},{brand:"Darkside Core",flavor:"Bergamonstr",parts:15}],
    bowl:"Фаннел", heat:"2–3 угля 25мм, калауд", note:"Satyr крепкий и долго раскуривается."
  },
  {
    id:"s14", name:"Северная ягода", strength:"strong", profile:["sourSweet"], emoji:"🌲",
    short:"Дикие ягоды, крепкий", duration:"65–75 мин",
    desc:"Микс лесных ягод: брусника, клюква, черника. Кисло-сладкий, терпкий, с характером севера.",
    tags:["для опытных","ягодный"],
    recipe:[{brand:"Северный",flavor:"Ясная поляна",parts:55},{brand:"Darkside Base",flavor:"Sunny Berry",parts:30},{brand:"Darkside Core",flavor:"Needl Mint",parts:15}],
    bowl:"Фаннел", heat:"3 угля 25мм, калауд", note:"—"
  },
  {
    id:"s15", name:"Манго — Маракуйя Нуар", strength:"strong", profile:["sourSweet"], emoji:"🥭",
    short:"Тропики с крепким ударом", duration:"60–75 мин",
    desc:"Плотное манго и кислая маракуйя на крепкой базе. Тропический вкус, который бьёт по-взрослому.",
    tags:["тропики","для опытных"],
    recipe:[{brand:"Tangiers Noir",flavor:"Cantaloupe",parts:45},{brand:"Darkside Core",flavor:"Passion",parts:35},{brand:"Darkside Base",flavor:"Lemonad",parts:20}],
    bowl:"Фаннел", heat:"3 угля 25мм, калауд", note:"—"
  },
  {
    id:"s16", name:"Хулиган Hype", strength:"strong", profile:["sweet","fresh"], emoji:"😈",
    short:"Сладко-ледяной, дерзкий", duration:"55–70 мин",
    desc:"Сладкий фруктовый леденец с ледяным финишем на крепком листе. Яркий и наглый вкус.",
    tags:["для опытных","сладкий"],
    recipe:[{brand:"Хулиган",flavor:"Hype",parts:60},{brand:"Darkside Core",flavor:"Needl Mint",parts:25},{brand:"MustHave",flavor:"Lime",parts:15}],
    bowl:"Фаннел", heat:"3 угля 25мм, калауд", note:"—"
  },
  {
    id:"s17", name:"Табак — Виски", strength:"strong", profile:["neutral","dessert"], emoji:"🥃",
    short:"Тёплый, алкогольный, крепкий", duration:"70–85 мин",
    desc:"Ноты выдержанного виски и натурального табачного листа. Тёмный вечерний вкус для ценителей.",
    tags:["необычный","вечер","для опытных"],
    recipe:[{brand:"Tangiers Noir",flavor:"Whisky",parts:50},{brand:"Satyr",flavor:"Табак",parts:30},{brand:"Element Земля",flavor:"Ваниль",parts:20}],
    bowl:"Фаннел", heat:"2–3 угля 25мм, калауд", note:"Крепко и терпко — не на голодный желудок."
  },
  {
    id:"s18", name:"Ледяной арбуз Нуар", strength:"strong", profile:["sweet","fresh"], emoji:"🍉",
    short:"Сладкий арбуз, морозный, крепкий", duration:"60–75 мин",
    desc:"Сочный арбуз с сильным холодком на крепкой базе. Освежает и одновременно бьёт — контраст на любителя.",
    tags:["лето","для опытных"],
    recipe:[{brand:"Darkside Core",flavor:"Watermelon Ice",parts:60},{brand:"Darkside Core",flavor:"Needl Mint",parts:25},{brand:"Darkside Base",flavor:"Lemonad",parts:15}],
    bowl:"Фаннел / Тёрнинг", heat:"3 угля 25мм, калауд", note:"—"
  }
];

// ==== СПРАВКА: ЧАШИ ====
window.BOWLS = [
  {
    id:"classic", name:"Классическая (Классик)", emoji:"🏺",
    img:'<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bc" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#c67f45"/><stop offset="1" stop-color="#7e4522"/></linearGradient></defs><path d="M34 46 Q30 118 72 138 L128 138 Q170 118 166 46 Z" fill="url(#bc)"/><ellipse cx="100" cy="46" rx="66" ry="19" fill="#33210f"/><ellipse cx="100" cy="46" rx="66" ry="19" fill="none" stroke="#e0a468" stroke-width="3"/><ellipse cx="86" cy="66" rx="5" ry="2.6" fill="#140d07"/><ellipse cx="114" cy="66" rx="5" ry="2.6" fill="#140d07"/><ellipse cx="100" cy="76" rx="5" ry="2.6" fill="#140d07"/></svg>',
    tag:"Универсал для новичка",
    forWhat:"Подходит почти под любой табак, особенно листовой и ароматизированный средней влажности.",
    pack:"Забивка «вровень»: разрыхли табак, укладывай щепотками до края чаши, оставляя 2–3 мм до фольги/калауда. Не трамбуй — табак должен лежать воздушно.",
    heat:"3 угля 25мм по краям. Прогрев 4–5 минут.",
    tip:"Самый прощающий вариант: если пережёг — просто убери один уголь."
  },
  {
    id:"funnel", name:"Фаннел (Phunnel)", emoji:"🌪",
    img:'<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bf" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#c67f45"/><stop offset="1" stop-color="#7e4522"/></linearGradient></defs><path d="M34 46 Q30 118 72 138 L128 138 Q170 118 166 46 Z" fill="url(#bf)"/><ellipse cx="100" cy="46" rx="66" ry="19" fill="#33210f"/><ellipse cx="100" cy="46" rx="66" ry="19" fill="none" stroke="#e0a468" stroke-width="3"/><path d="M82 84 Q100 52 118 84 Z" fill="#9a5a2c"/><ellipse cx="100" cy="84" rx="18" ry="6" fill="#8e5027"/><ellipse cx="100" cy="60" rx="6" ry="2.4" fill="#140d07"/></svg>',
    tag:"Держит сироп, долгая сессия",
    forWhat:"Идеальна для жидких/сиропных табаков (Darkside, MustHave, Tangiers). Центральное отверстие не даёт соку стекать в шахту.",
    pack:"Забивка «с горкой» или вровень. Насыпь табак воздушно, чуть выше центральной башенки, слегка прижми пальцем сверху. Обязательно калауд.",
    heat:"3 угля 25мм, калауд. Табаку с глицерином нужен стабильный жар.",
    tip:"Не закрывай центральное отверстие табаком — это главная ошибка."
  },
  {
    id:"turkish", name:"Turkish / Тёрнинг", emoji:"⚱️",
    img:'<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bt" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#c67f45"/><stop offset="1" stop-color="#7e4522"/></linearGradient></defs><path d="M52 40 Q46 128 84 146 L116 146 Q154 128 148 40 Z" fill="url(#bt)"/><ellipse cx="100" cy="40" rx="48" ry="15" fill="#33210f"/><ellipse cx="100" cy="40" rx="48" ry="15" fill="none" stroke="#e0a468" stroke-width="3"/><ellipse cx="100" cy="66" rx="6" ry="2.6" fill="#140d07"/></svg>',
    tag:"Для крепких и жаростойких",
    forWhat:"Высокая узкая чаша под крепкие тёмнолистовые табаки (Tangiers, Darkside, Overdose). Даёт много жара и насыщенный вкус.",
    pack:"Плотная забивка с горкой: табак укладывается плотнее обычного, горкой выше края. Крепкие табаки это любят.",
    heat:"3 угля 25мм, калауд. Долгий прогрев 7–8 минут.",
    tip:"Новичку тяжело — легко пережечь и получить жёсткую горечь."
  },
  {
    id:"killer", name:"Killer / UFO (перфорированная)", emoji:"🛸",
    img:'<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bk" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#c67f45"/><stop offset="1" stop-color="#7e4522"/></linearGradient></defs><path d="M34 46 Q30 118 72 138 L128 138 Q170 118 166 46 Z" fill="url(#bk)"/><ellipse cx="100" cy="46" rx="66" ry="19" fill="#33210f"/><ellipse cx="100" cy="46" rx="66" ry="19" fill="none" stroke="#e0a468" stroke-width="3"/><g fill="#140d07"><ellipse cx="84" cy="64" rx="3" ry="1.6"/><ellipse cx="100" cy="64" rx="3" ry="1.6"/><ellipse cx="116" cy="64" rx="3" ry="1.6"/><ellipse cx="92" cy="72" rx="3" ry="1.6"/><ellipse cx="108" cy="72" rx="3" ry="1.6"/><ellipse cx="100" cy="80" rx="3" ry="1.6"/><ellipse cx="76" cy="72" rx="3" ry="1.6"/><ellipse cx="124" cy="72" rx="3" ry="1.6"/></g></svg>',
    tag:"Максимум вкуса, для опытных",
    forWhat:"Много мелких отверстий на дне вместо одного. Раскрывает вкус ярче, но требовательна к настройке жара.",
    pack:"Воздушная забивка вровень, без трамбовки. Табак не должен проваливаться в отверстия.",
    heat:"3 угля 25мм, калауд. Начинай с меньшего жара и добавляй.",
    tip:"Даёт самый насыщенный вкус, но капризна — не для первого раза."
  },
  {
    id:"vortex", name:"Vortex (с центральным штырём)", emoji:"🌀",
    img:'<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bv" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#c67f45"/><stop offset="1" stop-color="#7e4522"/></linearGradient></defs><path d="M34 46 Q30 118 72 138 L128 138 Q170 118 166 46 Z" fill="url(#bv)"/><ellipse cx="100" cy="46" rx="66" ry="19" fill="#33210f"/><ellipse cx="100" cy="46" rx="66" ry="19" fill="none" stroke="#e0a468" stroke-width="3"/><path d="M88 88 L100 50 L112 88 Z" fill="#9a5a2c"/><ellipse cx="100" cy="88" rx="12" ry="4.5" fill="#8e5027"/><ellipse cx="90" cy="82" rx="3" ry="1.5" fill="#140d07"/><ellipse cx="110" cy="82" rx="3" ry="1.5" fill="#140d07"/></svg>',
    tag:"Сироп не пропадает",
    forWhat:"Центральный конус с отверстиями по бокам. Сок остаётся в чаше и продолжает работать — вкуса хватает надолго.",
    pack:"Забивка вокруг штыря, воздушно, вровень с краями. Не засыпай верх конуса.",
    heat:"3 угля 25мм, калауд.",
    tip:"Хороший компромисс между фаннелом и классикой."
  }
];

// ==== СПРАВКА: ОБЩИЕ ПРАВИЛА ====
window.TIPS = [
  { q:"Сколько углей?", a:"Стандарт — 3 кубика 25мм по краю чаши. Для крепких табаков и Turkish можно 3–4, для нежных десертных начинай с 2." },
  { q:"Калауд или фольга?", a:"Калауд удобнее и стабильнее держит жар — рекомендуется для сиропных табаков (Darkside, MustHave, Tangiers). Фольга — 2–3 слоя, 6–8 дырок, чуть больше жара." },
  { q:"Почему горчит?", a:"Перегрев. Убери один уголь, приподними калауд/сделай продув. Чаще всего дело в слишком плотной забивке или лишнем угле." },
  { q:"Почему нет дыма?", a:"Мало жара или пересушен табак. Добавь уголь, продуй, проверь плотность — при слишком плотной забивке воздух не проходит." },
  { q:"Сколько прогревать?", a:"Классик — 4–5 мин, фаннел — 5–6 мин, Turkish/Tangiers — 7–8 мин. Периодически делай тестовые затяжки." },
  { q:"Продув каждые сколько?", a:"Если не куришь пару минут — сделай лёгкий продув, чтобы табак не перегревался и не горчил." }
];
