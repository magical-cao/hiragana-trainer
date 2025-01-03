// 五十音数据
const hiraganaData = [
    { hiragana: "あ", katakana: "ア", pinyin: "a" },
    { hiragana: "い", katakana: "イ", pinyin: "i" },
    { hiragana: "う", katakana: "ウ", pinyin: "u" },
    { hiragana: "え", katakana: "エ", pinyin: "e" },
    { hiragana: "お", katakana: "オ", pinyin: "o" },
    { hiragana: "か", katakana: "カ", pinyin: "ka" },
    { hiragana: "き", katakana: "キ", pinyin: "ki" },
    { hiragana: "く", katakana: "ク", pinyin: "ku" },
    { hiragana: "け", katakana: "ケ", pinyin: "ke" },
    { hiragana: "こ", katakana: "コ", pinyin: "ko" },
    { hiragana: "さ", katakana: "サ", pinyin: "sa" },
    { hiragana: "し", katakana: "シ", pinyin: "shi" },
    { hiragana: "す", katakana: "ス", pinyin: "su" },
    { hiragana: "せ", katakana: "セ", pinyin: "se" },
    { hiragana: "そ", katakana: "ソ", pinyin: "so" },
    { hiragana: "た", katakana: "タ", pinyin: "ta" },
    { hiragana: "ち", katakana: "チ", pinyin: "chi" },
    { hiragana: "つ", katakana: "ツ", pinyin: "tsu" },
    { hiragana: "て", katakana: "テ", pinyin: "te" },
    { hiragana: "と", katakana: "ト", pinyin: "to" },
    { hiragana: "な", katakana: "ナ", pinyin: "na" },
    { hiragana: "に", katakana: "ニ", pinyin: "ni" },
    { hiragana: "ぬ", katakana: "ヌ", pinyin: "nu" },
    { hiragana: "ね", katakana: "ネ", pinyin: "ne" },
    { hiragana: "の", katakana: "ノ", pinyin: "no" },
    { hiragana: "は", katakana: "ハ", pinyin: "ha" },
    { hiragana: "ひ", katakana: "ヒ", pinyin: "hi" },
    { hiragana: "ふ", katakana: "フ", pinyin: "fu" },
    { hiragana: "へ", katakana: "ヘ", pinyin: "he" },
    { hiragana: "ほ", katakana: "ホ", pinyin: "ho" },
    { hiragana: "ま", katakana: "マ", pinyin: "ma" },
    { hiragana: "み", katakana: "ミ", pinyin: "mi" },
    { hiragana: "む", katakana: "ム", pinyin: "mu" },
    { hiragana: "め", katakana: "メ", pinyin: "me" },
    { hiragana: "も", katakana: "モ", pinyin: "mo" },
    { hiragana: "や", katakana: "ヤ", pinyin: "ya" },
    { hiragana: "ゆ", katakana: "ユ", pinyin: "yu" },
    { hiragana: "よ", katakana: "ヨ", pinyin: "yo" },
    { hiragana: "ら", katakana: "ラ", pinyin: "ra" },
    { hiragana: "り", katakana: "リ", pinyin: "ri" },
    { hiragana: "る", katakana: "ル", pinyin: "ru" },
    { hiragana: "れ", katakana: "レ", pinyin: "re" },
    { hiragana: "ろ", katakana: "ロ", pinyin: "ro" },
    { hiragana: "わ", katakana: "ワ", pinyin: "wa" },
    { hiragana: "を", katakana: "ヲ", pinyin: "wo" },
    { hiragana: "ん", katakana: "ン", pinyin: "n" }
  ];
  
  
  // 获取随机整数
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  // 生成一个随机问题
  function generateQuestion() {
    const questionIndex = getRandomInt(hiraganaData.length);
    const questionData = hiraganaData[questionIndex];
  
    const allAnswers = hiraganaData.map((item) => item.katakana);
    const options = new Set();
  
    // 确保正确答案和随机选项都出现在选项中
    options.add(questionData.katakana);
    while (options.size < 4) {
      options.add(allAnswers[getRandomInt(allAnswers.length)]);
    }
  
    return {
      questionData,
      options: Array.from(options).sort(() => Math.random() - 0.5), // 打乱顺序
    };
  }
  
  // 渲染问题
  function loadQuestion() {
    const questionDiv = document.getElementById('question');
    const pinyinDiv = document.getElementById('pinyin');
    const optionsDiv = document.getElementById('options');
    const resultDiv = document.getElementById('result');
  
    // 清空结果
    resultDiv.textContent = '';
  
    // 生成新的问题
    const { questionData, options } = generateQuestion();
  
    // 显示平假名和拼音
    questionDiv.textContent = `平假名: ${questionData.hiragana}`;
    pinyinDiv.textContent = `发音: ${questionData.pinyin}`;
  
    // 渲染选项按钮
    optionsDiv.innerHTML = '';
    options.forEach((option) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.onclick = () => {
        if (option === questionData.katakana) {
            // 回答正确
            resultDiv.textContent = "正确！";
            resultDiv.style.color = "green";
            setTimeout(() => loadQuestion(), 1000); // 1秒后加载下一题
        } else {
            // 回答错误
            resultDiv.textContent = "错误！";
            resultDiv.style.color = "red";
            // 不加载下一题，只提示错误
        }
    };
      optionsDiv.appendChild(button);
    });
  }
  
  // 初始化
  loadQuestion();
  