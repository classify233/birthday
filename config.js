// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的小可爱",  // 同上...
        "今天是你的生日",
        "虽然认识时间不长",
        "但我相信缘分会让我们一直走下去",
        "在这个特殊的日子里",
        "我想把最真挚的祝福送给你",
        "愿你贪吃不胖",
        "愿你懒惰不丑",
        "愿你永远健康依旧",
        "愿你做过的美梦全部实现",
        "愿你每个晨曦都绽放笑颜",
        "我们即使不见，亦能不散，一生平安",
        "Wishes From Mr.Wu！",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/xiaokeai.png",
        "今天是你的生日": "./imgs/birthday.jpg",
        "虽然认识时间不长": "./imgs/1.png",
        "但我相信缘分会让我们一直走下去": "./imgs/way.jpg",
        "在这个特殊的日子里": "./imgs/birthday.jpg",
        "我想把最真挚的祝福送给你": "./imgs/3.jpg",
        "愿你贪吃不胖": "./imgs/food.png",
        "愿你懒惰不丑": "./imgs/2.jpg",
        "愿你做过的美梦全部实现": "./imgs/beauty.png",
        "愿你每个晨曦都绽放笑颜": "./imgs/beauty.png",
        "Wishes From Mr.Wu！": "./imgs/wishes.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
