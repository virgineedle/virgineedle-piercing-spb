/**
 * Каталог украшений virgineedle piercing
 * 
 * Как добавить новое украшение:
 * 1. Сохраните фото в папку images/catalog/ (для топов) или images/rings_chains/ (для колец).
 * 2. Добавьте в массив 'tops' или 'rings' новый объект:
 *    {
 *      "title": "Название украшения",
 *      "thread": "р. 1.2",          // резьба/размер (необязательно)
 *      "price": "2 000 ₽",          // цена, если она одна
 *      // ИЛИ если есть несколько размеров:
 *      // "variants": [
 *      //   { "size": "8 мм", "price": "1 800 ₽" },
 *      //   { "size": "10 мм", "price": "2 200 ₽" }
 *      // ],
 *      "image": "images/catalog/имя_файла.jpg",
 *      "objectPosition": "50% 50%"  // фокус кадрирования фото (по умолчанию 50% 50%)
 *    }
 */
window.CATALOG_DATA = {
  tops: [
    {
        "title": "цветок с фианитами",
        "thread": "р. 0.9",
        "price": "3 200 ₽",
        "image": "images/catalog/item_78.jpg",
        "objectPosition": "50% 50%"
    },
    {
        "title": "звезда с фианитом",
        "thread": "р. 0.9",
        "price": "2 800 ₽",
        "image": "images/catalog/item_79.jpg",
        "objectPosition": "50% 50%"
    },
    {
        "title": "веер маркиз",
        "thread": "р. 0.9",
        "price": "3 800 ₽",
        "image": "images/catalog/item_80.jpg",
        "objectPosition": "50% 50%"
    },
    {
        "title": "кластер дуга",
        "thread": "р. 0.9",
        "price": "4 300 ₽",
        "image": "images/catalog/item_81.jpg",
        "objectPosition": "50% 50%"
    },
    {
        "title": "арка с цепочкой",
        "thread": "р. 0.9",
        "price": "2 200 ₽",
        "image": "images/catalog/item_82.jpg",
        "objectPosition": "50% 50%"
    },
    {
        "title": "радужный фианит",
        "thread": "р. 0.9",
        "price": "2 000 ₽",
        "image": "images/catalog/item_83.jpg",
        "objectPosition": "50% 50%"
    },
    {
        "title": "топ перо",
        "thread": "р. 1.2",
        "price": "1 800 ₽",
        "image": "images/catalog/item_84.jpg",
        "objectPosition": "50% 50%"
    },
    {
        "title": "кластер волна",
        "thread": "р. 0.9",
        "price": "4 600 ₽",
        "image": "images/catalog/item_85.jpg",
        "objectPosition": "50% 50%"
    },
    {
        "title": "кошачий глаз",
        "thread": "р. 1.2",
        "variants": [
            {
                "size": "4 мм",
                "price": "2 400 ₽"
            },
            {
                "size": "5 мм",
                "price": "2 800 ₽"
            }
        ],
        "image": "images/catalog/item_86.jpg",
        "objectPosition": "50% 50%"
    },
{
    "title": "опалит frozen",
    "thread": "р. 1.2",
    "variants": [
      {
        "size": "3 мм",
        "price": "1  600 ₽"
      }
    ],
    "image": "images/catalog/item_77.jpg",
    "objectPosition": "50% 50%"
  },
{
    "title": "опалит",
    "thread": "р. 1.2",
    "variants": [
      {
        "size": "3 мм",
        "price": "1  600 ₽"
      },
      {
        "size": "4 мм",
        "price": "1  800 ₽"
      },
      {
        "size": "5 мм",
        "price": "2  000 ₽"
      }
    ],
    "image": "images/catalog/item_76.jpg",
    "objectPosition": "50% 50%"
  },
{
    "title": "подвеска маркиз",
    "thread": "р. 1.2",
    "price": "2  800 ₽",
    "image": "images/catalog/item_0.jpg",
    "objectPosition": "50% 45.4%"
  },
{
    "title": "цветок с фианитами",
    "thread": "р. 1.2",
    "price": "3  800 ₽",
    "image": "images/catalog/item_1.jpg",
    "objectPosition": "50% 58.6%"
  },
{
    "title": "топ круг",
    "thread": "р. 0.9",
    "price": "2  200 ₽",
    "image": "images/catalog/item_2.jpg",
    "objectPosition": "50% 60.2%"
  },
{
    "title": "моховой агат",
    "thread": "р. 0.9",
    "price": "2  500 ₽",
    "image": "images/catalog/item_3.jpg",
    "objectPosition": "50% 54.1%"
  },
{
    "title": "топ амулет",
    "thread": "р. 0.9",
    "price": "1  600 ₽",
    "image": "images/catalog/item_4.jpg",
    "objectPosition": "50% 77.1%"
  },
{
    "title": "пронг с фианитом",
    "price": "2  000 ₽",
    "image": "images/catalog/item_5.jpg",
    "objectPosition": "50% 78.1%"
  },
{
    "title": "лунный камень",
    "thread": "р. 0.9",
    "price": "3  900 ₽",
    "image": "images/catalog/item_6.jpg",
    "objectPosition": "50% 60.2%"
  },
{
    "title": "фианит / опалит",
    "thread": "р. 0.9",
    "price": "3  500 ₽",
    "image": "images/catalog/item_7.jpg",
    "objectPosition": "50% 64.7%"
  },
{
    "title": "топ звенья",
    "thread": "р. 0.9",
    "price": "2  200 ₽",
    "image": "images/catalog/item_8.jpg",
    "objectPosition": "50% 60.1%"
  },
{
    "title": "цветок с фианитами",
    "price": "3  500 ₽",
    "image": "images/catalog/item_9.jpg",
    "objectPosition": "50% 62.6%"
  },
{
    "title": "топ ромашка",
    "price": "3  200 ₽",
    "image": "images/catalog/item_10.jpg",
    "objectPosition": "50% 65.4%"
  },
{
    "title": "кластер тиара",
    "price": "2  900 ₽",
    "image": "images/catalog/item_11.jpg",
    "objectPosition": "50% 66%"
  },
{
    "title": "кластер дуга",
    "variants": [
      {
        "size": "малый",
        "price": "2  900 ₽"
      },
      {
        "size": "большой",
        "price": "4  300 ₽"
      }
    ],
    "image": "images/catalog/item_12.jpg",
    "objectPosition": "50% 50.4%"
  },
{
    "title": "цветок с фианитами",
    "price": "3  600 ₽",
    "image": "images/catalog/item_13.jpg",
    "objectPosition": "50% 52.1%"
  },
{
    "title": "топ звезда",
    "thread": "р. 1.2",
    "price": "1  000 ₽",
    "image": "images/catalog/item_14.jpg",
    "objectPosition": "50% 33.6%"
  },
{
    "title": "фианит куб",
    "thread": "р. 0.9",
    "price": "2  000 ₽",
    "image": "images/catalog/item_15.jpg",
    "objectPosition": "50% 78.6%"
  },
{
    "title": "натуральный авантюрин",
    "thread": "р. 0.9",
    "price": "1  700 ₽",
    "image": "images/catalog/item_16.jpg",
    "objectPosition": "50% 36.9%"
  },
{
    "title": "моховой агат",
    "thread": "р. 0.9",
    "price": "2  000 ₽",
    "image": "images/catalog/item_17.jpg",
    "objectPosition": "50% 49.3%"
  },
{
    "title": "опалит",
    "price": "2  800 ₽",
    "image": "images/catalog/item_18.jpg",
    "objectPosition": "50% 56.3%"
  },
{
    "title": "кошачий глаз",
    "thread": "р. 0.9",
    "price": "1  800 ₽",
    "image": "images/catalog/item_19.jpg",
    "objectPosition": "50% 57.9%"
  },
{
    "title": "фактурный диск",
    "variants": [
      {
        "size": "3 мм",
        "price": "950 ₽"
      },
      {
        "size": "4 мм",
        "price": "1  200 ₽"
      }
    ],
    "image": "images/catalog/item_20.jpg",
    "objectPosition": "50% 95%"
  },
{
    "title": "кластер дуга",
    "thread": "р. 1.2",
    "price": "2  500 ₽",
    "image": "images/catalog/item_21.jpg",
    "objectPosition": "50% 89.4%"
  },
{
    "title": "тринити с опалитами",
    "thread": "р. 1.2",
    "price": "2  600 ₽",
    "image": "images/catalog/item_22.jpg",
    "objectPosition": "50% 99.3%"
  },
{
    "title": "топ ракушка",
    "thread": "р. 1.2",
    "price": "2  200 ₽",
    "image": "images/catalog/item_23.jpg",
    "objectPosition": "50% 85.6%"
  },
{
    "title": "фианит",
    "variants": [
      {
        "size": "3 мм",
        "price": "1  200 ₽"
      },
      {
        "size": "4 мм",
        "price": "1  500 ₽"
      },
      {
        "size": "5 мм",
        "price": "1  800 ₽"
      },
      {
        "size": "6 мм",
        "price": "2  000 ₽"
      }
    ],
    "image": "images/catalog/item_24.jpg",
    "objectPosition": "50% 84.2%"
  },
{
    "title": "опалит",
    "thread": "р. 1.2",
    "price": "1  600 ₽",
    "image": "images/catalog/item_25.jpg",
    "objectPosition": "50% 94.3%"
  },
{
    "title": "синтетический лунный камень",
    "thread": "р. 1.2",
    "variants": [
      {
        "size": "4 мм",
        "price": "1  800 ₽"
      },
      {
        "size": "5 мм",
        "price": "2  200 ₽"
      }
    ],
    "image": "images/catalog/item_26.jpg",
    "objectPosition": "50% 100%"
  },
{
    "title": "тринити",
    "thread": "р. 0.9",
    "price": "1 200 ₽",
    "image": "images/catalog/item_27.jpg",
    "objectPosition": "50% 90.3%"
  },
{
    "title": "тринити с фианитами",
    "thread": "р. 1.2",
    "price": "2  000 ₽",
    "image": "images/catalog/item_28.jpg",
    "objectPosition": "50% 98.2%"
  },
{
    "title": "диски титановые",
    "price": "600 ₽",
    "image": "images/catalog/item_29.jpg",
    "objectPosition": "50% 92.1%"
  },
{
    "title": "фианит",
    "variants": [
      {
        "size": "3 мм",
        "price": "1  200 ₽"
      },
      {
        "size": "4 мм",
        "price": "1  500 ₽"
      }
    ],
    "image": "images/catalog/item_30.jpg",
    "objectPosition": "50% 58.4%"
  },
{
    "title": "кварц",
    "price": "1  500 ₽",
    "image": "images/catalog/item_32.jpg",
    "objectPosition": "50% 55.2%"
  },
{
    "title": "голубая бирюза",
    "price": "1  800 ₽",
    "image": "images/catalog/item_33.jpg",
    "objectPosition": "50% 65.8%"
  },
{
    "title": "рутиловый кварц",
    "price": "3  000 ₽",
    "image": "images/catalog/item_34.jpg",
    "objectPosition": "50% 100%"
  },
{
    "title": "дуга с фианитами",
    "thread": "р. 1.2",
    "price": "2  200 ₽",
    "image": "images/catalog/item_35.jpg",
    "objectPosition": "50% 72.2%"
  },
{
    "title": "лабрадорит",
    "price": "2  500 ₽",
    "image": "images/catalog/item_36.jpg",
    "objectPosition": "50% 86.3%"
  },
{
    "title": "тринити",
    "thread": "р. 1.2",
    "price": "1 200 ₽",
    "image": "images/catalog/item_37.jpg",
    "objectPosition": "50% 85.2%"
  },
{
    "title": "ракушки",
    "variants": [
      {
        "size": "4 мм",
        "price": "1  500 ₽"
      },
      {
        "size": "5 мм",
        "price": "2  000 ₽"
      }
    ],
    "image": "images/catalog/item_38.jpg",
    "objectPosition": "50% 73.8%"
  },
{
    "title": "красный гессонит",
    "price": "1  500 ₽",
    "image": "images/catalog/item_39.jpg",
    "objectPosition": "50% 61.4%"
  },
{
    "title": "топ молния",
    "price": "1  000 ₽",
    "image": "images/catalog/item_40.jpg",
    "objectPosition": "50% 78.9%"
  },
{
    "title": "топ с подвеской",
    "thread": "р. 1.2",
    "price": "2  400 ₽",
    "image": "images/catalog/item_41.jpg",
    "objectPosition": "50% 38.7%"
  },
{
    "title": "тигровый глаз",
    "variants": [
      {
        "size": "3 мм",
        "price": "1  200 ₽"
      },
      {
        "size": "4 мм",
        "price": "1  500 ₽"
      }
    ],
    "image": "images/catalog/item_42.jpg",
    "objectPosition": "50% 94.4%"
  },
{
    "title": "фианит",
    "variants": [
      {
        "size": "3 мм",
        "price": "2  000 ₽"
      },
      {
        "size": "5 мм",
        "price": "2  500 ₽"
      }
    ],
    "image": "images/catalog/item_43.jpg",
    "objectPosition": "50% 55.8%"
  },
{
    "title": "турмалиновый кварц",
    "price": "3  000 ₽",
    "image": "images/catalog/item_44.jpg",
    "objectPosition": "50% 61.2%"
  },
{
    "title": "синий ляпис",
    "variants": [
      {
        "size": "3 мм",
        "price": "1  200 ₽"
      },
      {
        "size": "4 мм",
        "price": "1  500 ₽"
      }
    ],
    "image": "images/catalog/item_45.jpg",
    "objectPosition": "50% 64%"
  },
{
    "title": "лабрадорит",
    "price": "2  500 ₽",
    "image": "images/catalog/item_46.jpg",
    "objectPosition": "50% 59.6%"
  },
{
    "title": "фиолетовая бирюза",
    "price": "1  500 ₽",
    "image": "images/catalog/item_47.jpg",
    "objectPosition": "50% 46.8%"
  },
{
    "title": "оникс",
    "variants": [
      {
        "size": "3 мм",
        "price": "1  200 ₽"
      },
      {
        "size": "4 мм",
        "price": "1  500 ₽"
      }
    ],
    "image": "images/catalog/item_48.jpg",
    "objectPosition": "50% 42.6%"
  },
{
    "title": "аметист",
    "variants": [
      {
        "size": "3 мм",
        "price": "1  500 ₽"
      },
      {
        "size": "4 мм",
        "price": "1  800 ₽"
      }
    ],
    "image": "images/catalog/item_49.jpg",
    "objectPosition": "50% 50.3%"
  },
{
    "title": "сапфир",
    "price": "1  500 ₽",
    "image": "images/catalog/item_50.jpg",
    "objectPosition": "50% 93%"
  },
{
    "title": "лунный камень",
    "variants": [
      {
        "size": "3 мм",
        "price": "2  000 ₽"
      },
      {
        "size": "4 мм",
        "price": "2  500 ₽"
      }
    ],
    "image": "images/catalog/item_51.jpg",
    "objectPosition": "50% 93.9%"
  },
{
    "title": "лабрадорит",
    "thread": "р. 1.2",
    "price": "2  500 ₽",
    "image": "images/catalog/item_52.jpg",
    "objectPosition": "50% 98.4%"
  },
{
    "title": "кластер с маркизами",
    "thread": "б/р",
    "price": "3  800 ₽",
    "image": "images/catalog/item_53.jpg",
    "objectPosition": "50% 45.1%"
  },
{
    "title": "фианит в огранке",
    "thread": "б/р",
    "price": "3  200 ₽",
    "image": "images/catalog/item_54.jpg",
    "objectPosition": "50% 31.3%"
  },
{
    "title": "лабрадорит",
    "thread": "р. 0.9",
    "price": "2  500 ₽",
    "image": "images/catalog/item_55.jpg",
    "objectPosition": "50% 29.8%"
  },
{
    "title": "моховой агат",
    "thread": "р. 0.9",
    "price": "2  500 ₽",
    "image": "images/catalog/item_56.jpg",
    "objectPosition": "50% 36.8%"
  },
{
    "title": "моховой агат",
    "variants": [
      {
        "size": "3 мм",
        "price": "1  600 ₽"
      },
      {
        "size": "4 мм",
        "price": "2  000 ₽"
      },
      {
        "size": "5 мм",
        "price": "2  500 ₽"
      },
      {
        "size": "6 мм",
        "price": "3  000 ₽"
      }
    ],
    "image": "images/catalog/item_57.jpg",
    "objectPosition": "50% 100%"
  },
{
    "title": "прозрачный кварц",
    "price": "1  200 ₽",
    "image": "images/catalog/item_58.jpg",
    "objectPosition": "50% 100%"
  },
{
    "title": "клубничный кварц",
    "price": "3  000 ₽",
    "image": "images/catalog/item_59.jpg",
    "objectPosition": "50% 92.9%"
  },
{
    "title": "голубой агат",
    "variants": [
      {
        "size": "3 мм",
        "price": "1  600 ₽"
      },
      {
        "size": "4 мм",
        "price": "2  000 ₽"
      },
      {
        "size": "5 мм",
        "price": "2  500 ₽"
      },
      {
        "size": "6 мм",
        "price": "2  800 ₽"
      }
    ],
    "image": "images/catalog/item_60.jpg",
    "objectPosition": "50% 61.6%"
  },
{
    "title": "розовый кварц",
    "price": "1  500 ₽",
    "image": "images/catalog/item_61.jpg",
    "objectPosition": "50% 70.4%"
  },
{
    "title": "гранат",
    "variants": [
      {
        "size": "3 мм",
        "price": "1  200 ₽"
      },
      {
        "size": "4 мм",
        "price": "1  500 ₽"
      }
    ],
    "image": "images/catalog/item_62.jpg",
    "objectPosition": "50% 62.2%"
  },
{
    "title": "стекло",
    "price": "1  500 ₽",
    "image": "images/catalog/item_63.jpg",
    "objectPosition": "50% 59%"
  },
{
    "title": "красный жадеит",
    "variants": [
      {
        "size": "3 мм",
        "price": "1  200 ₽"
      },
      {
        "size": "4 мм",
        "price": "1  500 ₽"
      }
    ],
    "image": "images/catalog/item_64.jpg",
    "objectPosition": "50% 54.8%"
  },
{
    "title": "белый жадеит",
    "price": "1  500 ₽",
    "image": "images/catalog/item_65.jpg",
    "objectPosition": "50% 58.4%"
  },
{
    "title": "зеленый агат",
    "thread": "р. 1.2",
    "variants": [
      {
        "size": "3 мм",
        "price": "1  200 ₽"
      },
      {
        "size": "4 мм",
        "price": "1  500 ₽"
      }
    ],
    "image": "images/catalog/item_66.jpg",
    "objectPosition": "50% 66.3%"
  },
{
    "title": "зеленый жадеит",
    "thread": "р. 1.2",
    "variants": [
      {
        "size": "3 мм",
        "price": "1  200 ₽"
      },
      {
        "size": "4 мм",
        "price": "1  500 ₽"
      }
    ],
    "image": "images/catalog/item_67.jpg",
    "objectPosition": "50% 42.8%"
  },
{
    "title": "белая бирюза",
    "thread": "р. 1.2",
    "variants": [
      {
        "size": "3 мм",
        "price": "1  200 ₽"
      },
      {
        "size": "4 мм",
        "price": "1  500 ₽"
      }
    ],
    "image": "images/catalog/item_68.jpg",
    "objectPosition": "50% 56%"
  },
{
    "title": "маркиз с фианитом",
    "thread": "р. 1.2",
    "price": "2  000 ₽",
    "image": "images/catalog/item_69.jpg",
    "objectPosition": "50% 54.7%"
  },
{
    "title": "ракушки",
    "thread": "р. 1.2",
    "variants": [
      {
        "size": "4 мм",
        "price": "1  600 ₽"
      },
      {
        "size": "5 мм",
        "price": "2  000 ₽"
      },
      {
        "size": "6 мм",
        "price": "2  500 ₽"
      }
    ],
    "image": "images/catalog/item_70.jpg",
    "objectPosition": "50% 62.5%"
  },
{
    "title": "тринити с фианитами",
    "thread": "р. 1.2",
    "variants": [
      {
        "size": "маленький",
        "price": "2  500 ₽"
      },
      {
        "size": "большой",
        "price": "3  000 ₽"
      }
    ],
    "image": "images/catalog/item_71.jpg",
    "objectPosition": "50% 49.1%"
  },
{
    "title": "топ дуга",
    "thread": "р. 1.2",
    "price": "1  800 ₽",
    "image": "images/catalog/item_72.jpg",
    "objectPosition": "50% 34.4%"
  },
{
    "title": "топ полумесяц",
    "thread": "р. 1.2",
    "price": "1  600 ₽",
    "image": "images/catalog/item_73.jpg",
    "objectPosition": "50% 20.9%"
  },
{
    "title": "топ капля",
    "thread": "р. 0.9",
    "price": "2  500 ₽",
    "image": "images/catalog/item_74.jpg",
    "objectPosition": "50% 57.8%"
  },
{
    "title": "кошачий глаз",
    "thread": "р. 0.9",
    "price": "1  800 ₽",
    "image": "images/catalog/item_75.jpg",
    "objectPosition": "50% 99.3%"
  }
],
  rings: [
    {
        "title": "кликер с дорожкой фианитов",
        "price": "4 800 ₽",
        "image": "images/rings_chains/clicker_cz_row.jpg",
        "objectPosition": "50% 50%"
    },
    {
        "title": "кликер с фианитами",
        "price": "2 500 ₽",
        "image": "images/rings_chains/clicker_crystals.jpg",
        "objectPosition": "50% 50%"
    },
    {
        "title": "фактурный кликер",
        "price": "2 000 ₽",
        "image": "images/rings_chains/clicker_textured.jpg",
        "objectPosition": "50% 50%"
    },
  {
    "title": "кликер с фианитами (gold)",
    "price": "5 400 ₽",
    "image": "images/rings_chains/clicker_gold_baguette.jpg",
    "objectPosition": "50% 59.1%"
  },
  {
    "title": "цепочка с турмалиновым кварцем",
    "price": "3 900 ₽",
    "image": "images/rings_chains/chain_crystals.jpg",
    "objectPosition": "50% 66.3%"
  },
  {
    "title": "кликер с фианитами",
    "price": "3 700 ₽",
    "image": "images/rings_chains/clicker_crystal_chevron.jpg",
    "objectPosition": "50% 49.6%"
  },
  {
    "title": "цепочки",
    "variants": [
      {
        "size": "одинарная",
        "price": "1 000 ₽"
      },
      {
        "size": "двойная",
        "price": "1 800 ₽"
      },
      {
        "size": "тройная",
        "price": "2 800 ₽"
      }
    ],
    "image": "images/rings_chains/chain_tray.jpg",
    "objectPosition": "50% 55%"
  },
  {
    "title": "двойной кликер",
    "price": "1 800 ₽",
    "image": "images/rings_chains/clicker_double.jpg",
    "objectPosition": "50% 51.8%"
  },
  {
    "title": "кликер базовый",
    "price": "1 500 ₽",
    "image": "images/rings_chains/clicker_basic.jpg",
    "objectPosition": "50% 40%"
  },
  {
    "title": "кликер-капля",
    "variants": [
      {
        "size": "8 мм",
        "price": "1 800 ₽"
      },
      {
        "size": "10 мм",
        "price": "2 200 ₽"
      }
    ],
    "image": "images/rings_chains/clicker_drop.jpg",
    "objectPosition": "50% 49.6%"
  }
]
};
