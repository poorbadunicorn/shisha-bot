// База миксов. strength: light | medium | strong
// profile: sour | sweet | sourSweet | neutral | fresh | spicy | dessert
window.MIXES = [
  // ===== LIGHT =====
  {
    id: "l1", name: "Арбуз — Дыня", strength: "light", profile: ["sweet"],
    emoji: "🍉",
    short: "Сладкий, сочный, лёгкий",
    desc: "Классика летнего вечера. Сладкий и очень сочный, без резкости. Отлично заходит новичкам и большой компании, держит 45–60 минут.",
    tags: ["новичкам", "лето", "компания"],
    recipe: [
      { brand: "Element Вода", flavor: "Арбуз", parts: 50 },
      { brand: "Element Вода", flavor: "Дыня", parts: 50 }
    ],
    bowl: "Классик / Turkish", heat: "3 угля 25мм, прогрев 4–5 мин", note: "Не перегревать — арбуз быстро горчит."
  },
  {
    id: "l2", name: "Малиновый лимонад", strength: "light", profile: ["sourSweet"],
    emoji: "🫐",
    short: "Кисло-сладкий, освежающий",
    desc: "Ягодная кислинка на лимонадной базе. Освежает, не приторный, хорошо пьётся в жару.",
    tags: ["лето", "освежающий"],
    recipe: [
      { brand: "Daily Hookah", flavor: "Малина", parts: 40 },
      { brand: "Element Вода", flavor: "Лимон", parts: 30 },
      { brand: "Element Вода", flavor: "Гуава", parts: 30 }
    ],
    bowl: "Классик", heat: "3 угля 25мм", note: "Цитрус даёт кислоту — не добавляй больше 30%."
  },
  {
    id: "l3", name: "Мятный огурец", strength: "light", profile: ["fresh", "neutral"],
    emoji: "🥒",
    short: "Свежий, чистый, почти без сахара",
    desc: "Очень лёгкий и чистый вкус. Хорош как «сброс» после плотных десертных миксов или на утро.",
    tags: ["освежающий", "нейтральный"],
    recipe: [
      { brand: "Element Вода", flavor: "Огурец", parts: 60 },
      { brand: "Element Воздух", flavor: "Мята", parts: 25 },
      { brand: "Element Вода", flavor: "Лайм", parts: 15 }
    ],
    bowl: "Фаннел", heat: "2–3 угля 25мм", note: "Мяту не больше 25%, иначе забьёт всё."
  },
  {
    id: "l4", name: "Груша с ванилью", strength: "light", profile: ["sweet", "dessert"],
    emoji: "🍐",
    short: "Мягкий, сливочный, согревающий",
    desc: "Тёплый десертный микс. Мягкая груша с ванильным шлейфом, обволакивающий вкус. Хорошо держится, идёт под чай.",
    tags: ["зима", "вечер", "десерт"],
    recipe: [
      { brand: "Element Земля", flavor: "Груша", parts: 60 },
      { brand: "Daily Hookah", flavor: "Ваниль", parts: 25 },
      { brand: "Element Земля", flavor: "Сливки", parts: 15 }
    ],
    bowl: "Классик", heat: "3 угля 25мм, низкий жар", note: "Ваниль легко перегреть — держи чашу прохладной."
  },
  {
    id: "l5", name: "Персик — Маракуйя", strength: "light", profile: ["sourSweet"],
    emoji: "🍑",
    short: "Тропический, кисло-сладкий",
    desc: "Сладкий персик и кислая маракуйя дают яркий тропический баланс. Очень «пьётся», подходит для длинных сессий.",
    tags: ["тропики", "компания"],
    recipe: [
      { brand: "Element Вода", flavor: "Персик", parts: 55 },
      { brand: "Element Вода", flavor: "Маракуйя", parts: 45 }
    ],
    bowl: "Классик", heat: "3 угля 25мм", note: "Идеален на калауде."
  },
  {
    id: "l6", name: "Зелёный чай — Жасмин", strength: "light", profile: ["neutral", "fresh"],
    emoji: "🍵",
    short: "Нейтральный, травяной, спокойный",
    desc: "Тонкий чайно-цветочный вкус без сладости. Для тех, кто устал от фруктов. Очень долгий и ровный.",
    tags: ["нейтральный", "долгий"],
    recipe: [
      { brand: "Daily Hookah", flavor: "Зелёный чай", parts: 65 },
      { brand: "Element Воздух", flavor: "Жасмин", parts: 20 },
      { brand: "Element Вода", flavor: "Лимон", parts: 15 }
    ],
    bowl: "Классик", heat: "2–3 угля 25мм", note: "Жасмин очень концентрированный, больше 20% не надо."
  },
  {
    id: "l7", name: "Дыня — Мята", strength: "light", profile: ["sweet", "fresh"],
    emoji: "🍈",
    short: "Сладкий с холодком",
    desc: "Медовая дыня с мягким ментоловым финишем. Классический «летний» вариант для террасы.",
    tags: ["лето", "новичкам"],
    recipe: [
      { brand: "Element Вода", flavor: "Дыня", parts: 70 },
      { brand: "Element Воздух", flavor: "Мята", parts: 30 }
    ],
    bowl: "Классик", heat: "3 угля 25мм", note: "—"
  },
  {
    id: "l8", name: "Кола — Лайм", strength: "light", profile: ["sourSweet"],
    emoji: "🥤",
    short: "Газированный, кисло-сладкий",
    desc: "Вкус холодной колы со льдом и долькой лайма. Узнаваемый, весёлый, заходит вообще всем.",
    tags: ["новичкам", "компания"],
    recipe: [
      { brand: "Daily Hookah", flavor: "Кола", parts: 60 },
      { brand: "Element Вода", flavor: "Лайм", parts: 25 },
      { brand: "Element Воздух", flavor: "Мята", parts: 15 }
    ],
    bowl: "Классик", heat: "3 угля 25мм", note: "—"
  },

  // ===== MEDIUM =====
  {
    id: "m1", name: "Малина — Лимон — Мята", strength: "medium", profile: ["sourSweet", "fresh"],
    emoji: "🍋",
    short: "Кисло-сладкий, яркий, с холодком",
    desc: "Топовый универсал. Ягодная сладость, цитрусовая кислота и мятный финиш. Держится очень стабильно, не темнеет по вкусу.",
    tags: ["универсал", "хит"],
    recipe: [
      { brand: "MustHave", flavor: "Raspberry", parts: 45 },
      { brand: "MustHave", flavor: "Lemon", parts: 30 },
      { brand: "Sebero", flavor: "Icemint", parts: 25 }
    ],
    bowl: "Фаннел / Классик", heat: "3 угля 25мм, калауд", note: "Если кисло — сдвинь лимон до 20%."
  },
  {
    id: "m2", name: "Пина Колада", strength: "medium", profile: ["sweet", "dessert"],
    emoji: "🥥",
    short: "Сладкий, кремовый, тропический",
    desc: "Ананас с кокосовыми сливками. Плотный десертный микс, ощущается «жирным» и обволакивающим.",
    tags: ["десерт", "вечер"],
    recipe: [
      { brand: "MustHave", flavor: "Pineapple", parts: 50 },
      { brand: "Element Земля", flavor: "Кокос", parts: 30 },
      { brand: "Element Земля", flavor: "Сливки", parts: 20 }
    ],
    bowl: "Классик", heat: "3 угля 25мм, аккуратный прогрев", note: "Кокос требует меньше жара."
  },
  {
    id: "m3", name: "Грейпфрут — Барбарис", strength: "medium", profile: ["sour"],
    emoji: "🍊",
    short: "Кислый, терпкий, бодрящий",
    desc: "Для любителей чистой кислоты. Грейпфрутовая горчинка и барбарисовая терпкость. Не сладкий совсем.",
    tags: ["кислый", "для опытных"],
    recipe: [
      { brand: "Sebero", flavor: "Grapefruit", parts: 55 },
      { brand: "MustHave", flavor: "Barberry", parts: 45 }
    ],
    bowl: "Фаннел", heat: "3 угля 25мм", note: "Цитрус быстро выгорает — меняй угли вовремя."
  },
  {
    id: "m4", name: "Виноград — Смородина", strength: "medium", profile: ["sourSweet"],
    emoji: "🍇",
    short: "Ягодный, насыщенный, с кислинкой",
    desc: "Плотный ягодный вкус с приятной кислой подложкой. Один из самых «долгоиграющих» миксов — легко тянет час с лишним.",
    tags: ["долгий", "универсал"],
    recipe: [
      { brand: "MustHave", flavor: "Grape", parts: 50 },
      { brand: "Sebero", flavor: "Blackcurrant", parts: 35 },
      { brand: "MustHave", flavor: "Lime", parts: 15 }
    ],
    bowl: "Фаннел", heat: "3 угля 25мм", note: "—"
  },
  {
    id: "m5", name: "Облепиха — Мёд", strength: "medium", profile: ["sourSweet"],
    emoji: "🍯",
    short: "Кисло-сладкий и согревающий",
    desc: "Осенне-зимний микс. Резкая облепиховая кислота смягчается мёдом. Хорошо держится, вкус не плывёт.",
    tags: ["зима", "согревающий"],
    recipe: [
      { brand: "Darkside Base", flavor: "Sunny Berry", parts: 50 },
      { brand: "MustHave", flavor: "Honey", parts: 30 },
      { brand: "Element Земля", flavor: "Чай", parts: 20 }
    ],
    bowl: "Классик", heat: "3 угля 25мм", note: "Мёд даёт сироп — чаша может «потечь», клади фольгу плотнее."
  },
  {
    id: "m6", name: "Яблоко — Корица", strength: "medium", profile: ["spicy", "sweet"],
    emoji: "🍎",
    short: "Пряный, тёплый, десертный",
    desc: "Печёное яблоко с корицей. Согревающий пряный микс, идеально под зимний вечер и глинтвейн.",
    tags: ["зима", "пряный"],
    recipe: [
      { brand: "Element Земля", flavor: "Яблоко", parts: 60 },
      { brand: "Element Земля", flavor: "Корица", parts: 15 },
      { brand: "Daily Hookah", flavor: "Ваниль", parts: 25 }
    ],
    bowl: "Классик", heat: "3 угля 25мм", note: "Корицы много не клади — 15% предел."
  },
  {
    id: "m7", name: "Манго — Лайм — Лёд", strength: "medium", profile: ["sourSweet", "fresh"],
    emoji: "🥭",
    short: "Сочный, кисло-сладкий, холодный",
    desc: "Спелое манго, острая лаймовая кислота и ледяной финиш. Очень освежает, любимец летних веранд.",
    tags: ["лето", "хит"],
    recipe: [
      { brand: "MustHave", flavor: "Mango", parts: 50 },
      { brand: "MustHave", flavor: "Lime", parts: 25 },
      { brand: "Sebero", flavor: "Icemint", parts: 25 }
    ],
    bowl: "Фаннел", heat: "3 угля 25мм", note: "—"
  },
  {
    id: "m8", name: "Личи — Роза", strength: "medium", profile: ["sweet", "neutral"],
    emoji: "🌸",
    short: "Сладкий, цветочный, изящный",
    desc: "Тонкий и необычный вкус. Сладость личи с цветочным шлейфом розы. Для тех, кто хочет что-то не банальное.",
    tags: ["необычный", "вечер"],
    recipe: [
      { brand: "Sebero", flavor: "Lychee", parts: 65 },
      { brand: "Element Воздух", flavor: "Роза", parts: 20 },
      { brand: "MustHave", flavor: "Pomegranate", parts: 15 }
    ],
    bowl: "Классик", heat: "3 угля 25мм", note: "Роза очень мыльная в передозе — максимум 20%."
  },
  {
    id: "m9", name: "Мохито", strength: "medium", profile: ["fresh", "sour"],
    emoji: "🌿",
    short: "Свежий, кислый, с холодком",
    desc: "Лайм, мята и лёгкая сладость тростника. Классика, которая никогда не надоедает.",
    tags: ["лето", "классика"],
    recipe: [
      { brand: "MustHave", flavor: "Lime", parts: 40 },
      { brand: "Sebero", flavor: "Icemint", parts: 30 },
      { brand: "Element Вода", flavor: "Виноград", parts: 30 }
    ],
    bowl: "Фаннел", heat: "3 угля 25мм", note: "—"
  },
  {
    id: "m10", name: "Чизкейк — Малина", strength: "medium", profile: ["dessert", "sweet"],
    emoji: "🍰",
    short: "Сливочный десерт с ягодой",
    desc: "Плотный кремовый чизкейк с ягодным верхом. Сытный вечерний микс, отлично под кофе.",
    tags: ["десерт", "вечер"],
    recipe: [
      { brand: "Daily Hookah", flavor: "Чизкейк", parts: 55 },
      { brand: "MustHave", flavor: "Raspberry", parts: 30 },
      { brand: "Element Земля", flavor: "Сливки", parts: 15 }
    ],
    bowl: "Классик", heat: "3 угля 25мм, низкий жар", note: "Кремовые вкусы горчат от перегрева."
  },
  {
    id: "m11", name: "Арбуз — Маракуйя — Мята", strength: "medium", profile: ["sourSweet", "fresh"],
    emoji: "🍉",
    short: "Сладко-кислый, освежающий",
    desc: "Улучшенная версия арбузной классики: маракуйя добавляет кислоту, мята — свежесть. Не приедается.",
    tags: ["лето", "универсал"],
    recipe: [
      { brand: "MustHave", flavor: "Watermelon", parts: 45 },
      { brand: "MustHave", flavor: "Passionfruit", parts: 35 },
      { brand: "Sebero", flavor: "Icemint", parts: 20 }
    ],
    bowl: "Фаннел", heat: "3 угля 25мм", note: "—"
  },
  {
    id: "m12", name: "Дюшес — Барбарис", strength: "medium", profile: ["sweet", "sourSweet"],
    emoji: "🍬",
    short: "Ностальгический, конфетный",
    desc: "Вкус советского лимонада и барбарисовых леденцов. Сладкий с кислым краем, очень узнаваемый.",
    tags: ["необычный", "компания"],
    recipe: [
      { brand: "Daily Hookah", flavor: "Дюшес", parts: 60 },
      { brand: "MustHave", flavor: "Barberry", parts: 40 }
    ],
    bowl: "Классик", heat: "3 угля 25мм", note: "—"
  },
  {
    id: "m13", name: "Гранат — Вишня", strength: "medium", profile: ["sour", "sourSweet"],
    emoji: "🍒",
    short: "Терпкий, кислый, глубокий",
    desc: "Насыщенный тёмно-ягодный микс с гранатовой терпкостью. Хорошо держит крепость, вкус не выцветает.",
    tags: ["кислый", "долгий"],
    recipe: [
      { brand: "MustHave", flavor: "Pomegranate", parts: 50 },
      { brand: "Darkside Base", flavor: "Cherry", parts: 35 },
      { brand: "MustHave", flavor: "Lime", parts: 15 }
    ],
    bowl: "Фаннел", heat: "3 угля 25мм", note: "—"
  },

  // ===== STRONG =====
  {
    id: "s1", name: "Кислый лимон — Мята", strength: "strong", profile: ["sour", "fresh"],
    emoji: "🧊",
    short: "Резко-кислый, ледяной, крепкий",
    desc: "Жёсткий бодрящий микс. Чистая цитрусовая кислота с мощным ментоловым ударом. Не для новичков.",
    tags: ["для опытных", "кислый"],
    recipe: [
      { brand: "Darkside Core", flavor: "Supernova", parts: 40 },
      { brand: "Darkside Core", flavor: "Citrus Mint", parts: 60 }
    ],
    bowl: "Фаннел / Тёрнинг", heat: "3 угля 25мм, калауд обязательно", note: "Darkside требует меньше жара — иначе горечь."
  },
  {
    id: "s2", name: "Тёмная вишня", strength: "strong", profile: ["sourSweet"],
    emoji: "🍒",
    short: "Плотный, кисло-сладкий, крепкий",
    desc: "Густой вишнёвый вкус с косточковой горчинкой. Крепкий, долгий, ровно держит всю сессию.",
    tags: ["для опытных", "долгий"],
    recipe: [
      { brand: "Darkside Core", flavor: "Cherry Slow", parts: 60 },
      { brand: "Darkside Core", flavor: "Bergamonstr", parts: 25 },
      { brand: "Darkside Base", flavor: "Sunny Berry", parts: 15 }
    ],
    bowl: "Тёрнинг / Фаннел", heat: "3 угля 25мм, калауд", note: "Забивай воздушно, Darkside не любит уплотнения."
  },
  {
    id: "s3", name: "Бергамот — Чай", strength: "strong", profile: ["neutral", "spicy"],
    emoji: "🫖",
    short: "Нейтральный, терпкий, крепкий",
    desc: "Эрл Грей в чаше. Терпкий чайный вкус с бергамотовым цитрусом. Взрослый, не сладкий, очень «характерный».",
    tags: ["нейтральный", "для опытных"],
    recipe: [
      { brand: "Darkside Core", flavor: "Bergamonstr", parts: 50 },
      { brand: "Tangiers Noir", flavor: "Earl Grey", parts: 30 },
      { brand: "Darkside Base", flavor: "Lemonad", parts: 20 }
    ],
    bowl: "Фаннел", heat: "2–3 угля 25мм, калауд", note: "Tangiers греется медленно — дай 7–8 мин прогрева."
  },
  {
    id: "s4", name: "Мятный удар", strength: "strong", profile: ["fresh"],
    emoji: "❄️",
    short: "Максимально холодный и крепкий",
    desc: "Морозный микс на грани. Сильный ментоловый холод и жёсткий никотиновый удар. Отрезвляет.",
    tags: ["для опытных", "освежающий"],
    recipe: [
      { brand: "Darkside Core", flavor: "Needl Mint", parts: 60 },
      { brand: "Darkside Core", flavor: "Supernova", parts: 40 }
    ],
    bowl: "Тёрнинг", heat: "3 угля 25мм, калауд", note: "Не для пустого желудка."
  },
  {
    id: "s5", name: "Пряный апельсин", strength: "strong", profile: ["spicy", "sourSweet"],
    emoji: "🍊",
    short: "Пряный, тёплый, крепкий",
    desc: "Апельсин с корицей и гвоздикой — вкус глинтвейна. Согревающий, плотный, зимний.",
    tags: ["зима", "пряный"],
    recipe: [
      { brand: "Tangiers Noir", flavor: "Orange Soda", parts: 50 },
      { brand: "Darkside Core", flavor: "Bergamonstr", parts: 30 },
      { brand: "Element Земля", flavor: "Корица", parts: 20 }
    ],
    bowl: "Фаннел", heat: "3 угля 25мм, калауд", note: "Tangiers забивать плотно, но не утрамбовывать."
  },
  {
    id: "s6", name: "Кактус — Лайм", strength: "strong", profile: ["sour", "fresh"],
    emoji: "🌵",
    short: "Кислый, зелёный, крепкий",
    desc: "Необычный зелёно-кислый профиль. Кактус даёт свежесть, лайм — резкость. Очень бодрит.",
    tags: ["необычный", "кислый"],
    recipe: [
      { brand: "Tangiers Noir", flavor: "Cactus", parts: 55 },
      { brand: "Darkside Base", flavor: "Lemonad", parts: 30 },
      { brand: "Darkside Core", flavor: "Needl Mint", parts: 15 }
    ],
    bowl: "Фаннел", heat: "3 угля 25мм, калауд", note: "—"
  },
  {
    id: "s7", name: "Чёрный виноград", strength: "strong", profile: ["sweet", "sourSweet"],
    emoji: "🍇",
    short: "Сладкий, но крепкий",
    desc: "Редкое сочетание: сладкий десертный вкус при высокой крепости. Плотный виноград с ягодным низом.",
    tags: ["для опытных", "долгий"],
    recipe: [
      { brand: "Darkside Core", flavor: "Dark Grape", parts: 65 },
      { brand: "Darkside Base", flavor: "Sunny Berry", parts: 20 },
      { brand: "Darkside Core", flavor: "Bergamonstr", parts: 15 }
    ],
    bowl: "Тёрнинг / Фаннел", heat: "3 угля 25мм, калауд", note: "—"
  },
  {
    id: "s8", name: "Кофе — Шоколад", strength: "strong", profile: ["dessert", "neutral"],
    emoji: "☕",
    short: "Горький десерт, очень крепкий",
    desc: "Тёмный шоколад и эспрессо. Горьковато-сладкий, тяжёлый, вечерний. Хорош после плотного ужина.",
    tags: ["десерт", "вечер", "для опытных"],
    recipe: [
      { brand: "Tangiers Noir", flavor: "Cocoa", parts: 45 },
      { brand: "Darkside Core", flavor: "Coffee", parts: 35 },
      { brand: "Element Земля", flavor: "Сливки", parts: 20 }
    ],
    bowl: "Фаннел", heat: "3 угля 25мм, низкий жар, калауд", note: "Легко перегреть — начинай с 2 углей."
  },
  {
    id: "s9", name: "Дикая смородина", strength: "strong", profile: ["sour"],
    emoji: "🫐",
    short: "Кислый, ягодный, крепкий",
    desc: "Резкая чёрная смородина без сглаживания. Терпкий кислый профиль для тех, кто любит пожёстче.",
    tags: ["кислый", "для опытных"],
    recipe: [
      { brand: "Darkside Core", flavor: "Currant Flash", parts: 60 },
      { brand: "Darkside Base", flavor: "Lemonad", parts: 25 },
      { brand: "Darkside Core", flavor: "Needl Mint", parts: 15 }
    ],
    bowl: "Тёрнинг", heat: "3 угля 25мм, калауд", note: "—"
  },
  {
    id: "s10", name: "Медовая дыня", strength: "strong", profile: ["sweet"],
    emoji: "🍈",
    short: "Очень сладкий, плотный, крепкий",
    desc: "Приторно-медовая дыня на крепкой базе. Сладкоежкам, которым нужен никотиновый удар.",
    tags: ["для опытных", "сладкий"],
    recipe: [
      { brand: "Tangiers Noir", flavor: "Cane Mint", parts: 20 },
      { brand: "Darkside Core", flavor: "Melonsun", parts: 55 },
      { brand: "MustHave", flavor: "Honey", parts: 25 }
    ],
    bowl: "Фаннел", heat: "3 угля 25мм, калауд", note: "—"
  },
  {
    id: "s11", name: "Пряная слива", strength: "strong", profile: ["spicy", "sourSweet"],
    emoji: "🫑",
    short: "Пряный, терпкий, глубокий",
    desc: "Копчёная слива с перечными нотами. Необычный и очень взрослый вкус, хорош на осень.",
    tags: ["необычный", "пряный", "для опытных"],
    recipe: [
      { brand: "Darkside Core", flavor: "Plum Ridge", parts: 55 },
      { brand: "Tangiers Noir", flavor: "Cocoa", parts: 20 },
      { brand: "Element Земля", flavor: "Корица", parts: 15 },
      { brand: "Darkside Base", flavor: "Lemonad", parts: 10 }
    ],
    bowl: "Фаннел", heat: "3 угля 25мм, калауд", note: "—"
  },
  {
    id: "s12", name: "Грейпфрут Нуар", strength: "strong", profile: ["sour", "fresh"],
    emoji: "🍊",
    short: "Горько-кислый, холодный, жёсткий",
    desc: "Грейпфрутовая горечь с ледяным финишем. Один из самых «отрезвляющих» миксов в списке.",
    tags: ["кислый", "для опытных"],
    recipe: [
      { brand: "Tangiers Noir", flavor: "Grapefruit", parts: 60 },
      { brand: "Darkside Core", flavor: "Needl Mint", parts: 25 },
      { brand: "Darkside Base", flavor: "Lemonad", parts: 15 }
    ],
    bowl: "Фаннел", heat: "3 угля 25мм, калауд", note: "Tangiers Grapefruit очень концентрированный."
  }
];
