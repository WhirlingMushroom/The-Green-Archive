const page = document.body;
const themeControls = document.getElementById("theme-controls");
const languageButtons = document.querySelectorAll(".language-button");
const historyGrid = document.getElementById("history-grid");
const literatureGrid = document.getElementById("literature-grid");
const psychologyGrid = document.getElementById("psychology-grid");
const fashionGrid = document.getElementById("fashion-grid");

const themes = [
  { id: "soft", label: { en: "Soft Green", zh: "\u67d4\u96fe\u7eff" } },
  { id: "forest", label: { en: "Forest Green", zh: "\u68ee\u6797\u7eff" } },
  { id: "neon", label: { en: "Neon Green", zh: "\u9713\u5149\u7eff" } },
  { id: "vintage", label: { en: "Vintage Green", zh: "\u590d\u53e4\u7eff" } }
];

const copy = {
  en: {
    topbar: { left: "Portfolio Case Study", right: "Interactive Archive" },
    hero: {
      eyebrow: "Color Study / Living Palette",
      titleTop: "The",
      titleGreen: "Green",
      titleBottom: "Archive",
      subtitle: "A portfolio-ready digital exhibition on color, mood, nature, and design.",
      metaOne: "Research-led visual direction",
      metaTwo: "Bilingual editorial system",
      metaThree: "Interactive static website",
      body:
        "Green can feel botanical, cinematic, medicinal, haunted, or quietly domestic. This project turns those associations into an exhibition-style case study: pigment history, literary fragments, emotional studies, and fashion notes arranged as a living portfolio piece."
    },
    controls: {
      themeEyebrow: "Theme Switcher",
      themeTitle: "Choose a Green Weather",
      languageEyebrow: "Language",
      languageTitle: "English / \u4e2d\u6587",
      note: "Theme buttons recolor the page, while language buttons switch the editorial text across the whole archive."
    },
    project: {
      eyebrow: "Project Overview",
      title: "Turning a color archive into an exhibition-style portfolio piece",
      lead:
        "This project reframes a research archive as a complete digital case study: part editorial essay, part moodboard, part interface experiment. The result is a self-contained static website that demonstrates research synthesis, visual systems thinking, and front-end craft.",
      tagOne: "Color research",
      tagTwo: "Art direction",
      tagThree: "Editorial UX",
      tagFour: "Responsive web",
      roleLabel: "Role",
      roleValue: "Research, visual direction, web design, front-end build",
      toolsLabel: "Codex Workflow",
      toolsValue:
        "Used Codex as a creative coding partner to translate raw archive material into a portfolio case study: shaping the information architecture, refining bilingual editorial copy, implementing the responsive HTML/CSS/JavaScript interface, and polishing the page into a deployable static exhibition.",
      outputLabel: "Output",
      outputValue: "Interactive static website / digital exhibition",
      focusLabel: "Focus",
      focusValue: "How one color can carry history, emotion, language, and style",
      visualLabel: "A contact-sheet style palette becomes the bridge between research material and portfolio presentation."
    },
    history: {
      eyebrow: "Origins of Eight Greens",
      title: "Origins of Eight Greens",
      intro:
        "Rather than strict invention dates, this section maps how modern green names connect to pigments, interiors, print culture, botanical study, and industrial color systems."
    },
    literature: {
      eyebrow: "Green and Literature",
      title: "How Literature Writes Green",
      intro:
        "Literary green does more than describe landscape. It can mark safety, dampness, delay, ripeness, secrecy, youth, and the fragile interval before something changes."
    },
    psychology: {
      eyebrow: "Green and Psychology",
      title: "How Green Shapes Feeling",
      intro:
        "Environmental psychology and visual design often describe green as dual-purpose: muted greens tend to soothe, while high-intensity greens are more likely to signal action and alertness."
    },
    fashion: {
      eyebrow: "Green and Fashion",
      title: "How Green Enters Fashion",
      intro:
        "From uniforms and workwear to wellness minimalism, jewel-tone eveningwear, and neon sports styling, green keeps shifting class, function, and meaning inside fashion."
    },
    process: {
      eyebrow: "Design Method",
      title: "From archive material to portfolio narrative",
      intro:
        "The page is structured to show not only what the archive contains, but how the project thinks: gathering references, shaping a visual language, and turning research into an explorable interface.",
      stepOneKicker: "01 / Research",
      stepOneTitle: "Map the meanings",
      stepOneBody:
        "The archive begins by separating green into historical, literary, psychological, and fashion contexts so the color can be read as a cultural system instead of a single mood.",
      stepTwoKicker: "02 / Visual System",
      stepTwoTitle: "Build an atmosphere",
      stepTwoBody:
        "Paper textures, soft gradients, image cards, and theme controls turn the archive into an exhibition table rather than a flat list of facts.",
      stepThreeKicker: "03 / Interaction",
      stepThreeTitle: "Make it browsable",
      stepThreeBody:
        "Bilingual copy, responsive grids, and color-theme switching make the piece easy to present in a portfolio, classroom, or design review."
    },
    footer: {
      eyebrow: "Portfolio Ready",
      title: "A compact case study for research, visual design, and front-end storytelling.",
      line: "Some colors feel like a place to return to.",
      linkProject: "Project Overview",
      linkArchive: "Explore Archive",
      linkProcess: "Design Method"
    }
  },
  zh: {
    topbar: { left: "作品集案例", right: "互动档案" },
    hero: {
      eyebrow: "\u8272\u5f69\u7814\u7a76 / \u6d3b\u7684\u8272\u677f",
      titleTop: "The",
      titleGreen: "Green",
      titleBottom: "Archive",
      subtitle: "一件适合作品集展示的数字展览：关于颜色、情绪、自然与设计。",
      metaOne: "研究驱动的视觉方向",
      metaTwo: "双语编辑系统",
      metaThree: "互动静态网页",
      body:
        "绿色可以是植物性的、电影感的、药性的、幽微不安的，也可以安静得像室内日常。这个项目把这些联想整理成一件展览式作品集案例：颜料历史、文学片段、心理线索与时装笔记被安排成一套可以浏览的视觉叙事。"
    },
    controls: {
      themeEyebrow: "\u4e3b\u9898\u5207\u6362",
      themeTitle: "\u5207\u6362\u4e00\u79cd\u7eff\u8272\u5929\u6c14",
      languageEyebrow: "\u8bed\u8a00",
      languageTitle: "English / \u4e2d\u6587",
      note: "\u4e3b\u9898\u6309\u94ae\u4f1a\u6539\u53d8\u6574\u9875\u914d\u8272\uff0c\u8bed\u8a00\u6309\u94ae\u4f1a\u5207\u6362\u6574\u5957\u6587\u5b57\u3002"
    },
    project: {
      eyebrow: "项目概览",
      title: "把一份颜色档案转化成展览式作品集页面",
      lead:
        "这个项目把研究档案重新包装成完整的数字案例：它既是视觉随笔，也是情绪板和界面实验。最终产出是一页可独立展示的静态网站，用来呈现资料整合、视觉系统思考与前端实现能力。",
      tagOne: "色彩研究",
      tagTwo: "视觉指导",
      tagThree: "编辑型体验",
      tagFour: "响应式网页",
      roleLabel: "职责",
      roleValue: "研究、视觉方向、网页设计、前端实现",
      toolsLabel: "Codex 工作流",
      toolsValue:
        "将 Codex 作为创意编程协作者使用：从原始档案材料出发，一起梳理作品集叙事结构、优化双语编辑文案、实现响应式 HTML/CSS/JavaScript 页面，并把最终网页打磨成可部署的静态数字展览。",
      outputLabel: "产出",
      outputValue: "互动静态网页 / 数字展览",
      focusLabel: "关注点",
      focusValue: "一种颜色如何承载历史、情绪、语言与风格",
      visualLabel: "像联系表一样的色彩板，成为研究材料与作品集呈现之间的桥。"
    },
    history: {
      eyebrow: "\u516b\u79cd\u7eff\u8272\u7684\u6765\u5386",
      title: "\u516b\u79cd\u7eff\u8272\u7684\u6765\u5386",
      intro: "\u8fd9\u91cc\u4e0d\u662f\u4e25\u683c\u7684\u201c\u53d1\u660e\u65f6\u95f4\u8868\u201d\uff0c\u800c\u662f\u628a\u8272\u540d\u3001\u989c\u6599\u3001\u5de5\u827a\u3001\u5ba4\u5185\u98ce\u683c\u548c\u5370\u5237\u6280\u672f\u4e32\u8054\u8d77\u6765\u7684\u7b80\u77ed\u8c31\u7cfb\u3002"
    },
    literature: {
      eyebrow: "\u7eff\u8272\u4e0e\u6587\u5b66",
      title: "\u6587\u5b66\u5982\u4f55\u5199\u7eff\u8272",
      intro:
        "\u6587\u5b66\u91cc\u7684\u7eff\u8272\u4e0d\u4ec5\u6307\u5411\u666f\u89c2\uff0c\u4e5f\u6307\u5411\u6210\u719f\u3001\u5ef6\u8fdf\u3001\u9752\u6625\u3001\u6e7f\u6c14\u3001\u79d8\u5bc6\u4e0e\u590d\u82cf\uff0c\u56e0\u6b64\u5b83\u5e38\u5e38\u5e26\u7740\u60c5\u7eea\u6e29\u5ea6\u3002"
    },
    psychology: {
      eyebrow: "\u7eff\u8272\u4e0e\u5fc3\u7406\u5b66",
      title: "\u7eff\u8272\u5982\u4f55\u4f5c\u7528\u4e8e\u611f\u53d7",
      intro:
        "\u73af\u5883\u5fc3\u7406\u5b66\u548c\u89c6\u89c9\u8bbe\u8ba1\u90fd\u5e38\u8ba8\u8bba\u7eff\u8272\u7684\u53cc\u91cd\u6027\uff1a\u4f4e\u9971\u548c\u5ea6\u7684\u7eff\u66f4\u5bb9\u6613\u5b89\u629a\uff0c\u9ad8\u4eae\u5ea6\u7684\u7eff\u5219\u66f4\u5bb9\u6613\u523a\u6fc0\u6ce8\u610f\u3002"
    },
    fashion: {
      eyebrow: "\u7eff\u8272\u4e0e\u65f6\u88c5\u6f6e\u6d41",
      title: "\u7eff\u8272\u600e\u6837\u8fdb\u5165\u65f6\u88c5",
      intro:
        "\u4ece\u519b\u88c5\u548c\u5de5\u88c5\uff0c\u5230\u7597\u6108\u7cfb\u6781\u7b80\u3001\u7956\u6bcd\u7eff\u665a\u88c5\u4e0e\u9713\u5149\u8fd0\u52a8\u98ce\uff0c\u7eff\u8272\u5728\u65f6\u88c5\u91cc\u603b\u80fd\u8de8\u8d8a\u9636\u5c42\u3001\u529f\u80fd\u4e0e\u5e74\u4ee3\u3002"
    },
    process: {
      eyebrow: "设计方法",
      title: "从档案材料到作品集叙事",
      intro:
        "页面不只展示档案里有什么，也展示这个项目如何思考：如何收集参照、建立视觉语言，并把研究转化成可探索的界面。",
      stepOneKicker: "01 / 研究",
      stepOneTitle: "梳理意义",
      stepOneBody:
        "档案先把绿色拆分到历史、文学、心理和时装语境中，让颜色被看作一种文化系统，而不只是单一情绪。",
      stepTwoKicker: "02 / 视觉系统",
      stepTwoTitle: "建立氛围",
      stepTwoBody:
        "纸张质感、柔和渐变、图片卡片和主题切换，把资料变成一张展览桌，而不是一组平铺的事实。",
      stepThreeKicker: "03 / 互动",
      stepThreeTitle: "让它可浏览",
      stepThreeBody:
        "双语文案、响应式网格和色彩主题切换，让这个作品既适合放进作品集，也适合课堂展示或设计评审。"
    },
    footer: {
      eyebrow: "作品集就绪",
      title: "一个浓缩的案例，展示研究、视觉设计与前端叙事能力。",
      line: "\u6709\u4e9b\u989c\u8272\u50cf\u4e00\u4e2a\u603b\u60f3\u56de\u53bb\u7684\u5730\u65b9\u3002",
      linkProject: "项目概览",
      linkArchive: "浏览档案",
      linkProcess: "设计方法"
    }
  }
};

// These arrays drive the repeating archive cards for each section.
const historyData = [
  {
    shade: "#C7D9C1",
    era: { en: "18th-19th c.", zh: "18-19\u4e16\u7eaa" },
    title: { en: "Sage Green", zh: "\u9f20\u5c3e\u8349\u7eff" },
    text: {
      en: "Muted herb greens grew out of celadon ceramics, botanical studies, and softened interior palettes.",
      zh: "\u8fd9\u79cd\u504f\u7070\u7684\u8349\u672c\u7eff\uff0c\u6765\u81ea\u9752\u74f7\u3001\u690d\u7269\u56fe\u8c31\u4e0e\u66f4\u67d4\u548c\u7684\u5ba4\u5185\u8272\u8c31\u3002"
    },
    detail: {
      en: "Because it is low in saturation, sage green often behaves more like a background color than a signal color, which is why it became so common in restrained interiors and calm domestic palettes.",
      zh: "\u5b83\u5e38\u89c1\u4e8e\u88ab\u5f31\u5316\u7684\u5ba4\u5185\u8272\u677f\u4e2d\uff0c\u56e0\u6b64\u6bd4\u9c9c\u4eae\u7684\u8349\u7eff\u66f4\u50cf\u4e00\u79cd\u53ef\u505c\u7559\u3001\u53ef\u4e45\u770b\u7684\u80cc\u666f\u8272\u3002"
    }
  },
  {
    shade: "#8A9A5B",
    era: { en: "Early modern cloth", zh: "\u8fd1\u4ee3\u7ec7\u7269" },
    title: { en: "Olive Green", zh: "\u6a44\u6984\u7eff" },
    text: {
      en: "Olive greens formed where yellow and darker earth greens met in uniforms, workwear, and textiles.",
      zh: "\u6a44\u6984\u7eff\u751f\u6210\u4e8e\u9ec4\u8c03\u4e0e\u6df1\u571f\u7eff\u7684\u4ea4\u6c47\uff0c\u5e38\u89c1\u4e8e\u5236\u670d\u3001\u5de5\u88c5\u4e0e\u7ec7\u7269\u3002"
    },
    detail: {
      en: "Its yellow and gray undertones make olive green practical rather than decorative, which helps explain why it travels so easily between military utility, field clothing, and everyday wardrobes.",
      zh: "\u56e0\u4e3a\u5e26\u9ec4\u8c03\u548c\u7070\u8c03\uff0c\u6a44\u6984\u7eff\u65e2\u4e0d\u523a\u773c\uff0c\u4e5f\u4e0d\u8106\u5f31\uff0c\u6240\u4ee5\u7279\u522b\u9002\u5408\u5236\u670d\u4e0e\u8010\u7a7f\u7684\u65e5\u5e38\u8863\u7740\u3002"
    }
  },
  {
    shade: "#6B8E23",
    era: { en: "Green earth lineage", zh: "\u7eff\u571f\u989c\u6599\u8c31\u7cfb" },
    title: { en: "Moss Green", zh: "\u82d4\u85d3\u7eff" },
    text: {
      en: "Moss tones descend from green earth pigments and from painters' love of wet, shaded ground.",
      zh: "\u82d4\u85d3\u7eff\u627f\u63a5\u4e86\u7eff\u571f\u989c\u6599\uff0c\u4e5f\u627f\u63a5\u4e86\u753b\u5bb6\u5bf9\u6e7f\u6da6\u9634\u5f71\u5730\u8868\u7684\u8ff7\u604b\u3002"
    },
    detail: {
      en: "Moss green is culturally tied to damp stone, roots, bark, and shaded surfaces, which is why it often feels older, quieter, and closer to the ground than brighter leaf greens.",
      zh: "\u82d4\u85d3\u7eff\u901a\u5e38\u4e0e\u6f6e\u6e7f\u3001\u9634\u5f71\u3001\u77f3\u9762\u548c\u6811\u6839\u8054\u7cfb\u5728\u4e00\u8d77\uff0c\u56e0\u6b64\u5b83\u7684\u6587\u5316\u5370\u8c61\u5f80\u5f80\u66f4\u5b89\u9759\u3001\u66f4\u65e7\u3001\u66f4\u8d34\u8fd1\u5730\u8868\u3002"
    }
  },
  {
    shade: "#0F5D3F",
    era: { en: "19th c. depth", zh: "19\u4e16\u7eaa\u6df1\u8272\u5316" },
    title: { en: "Forest Green", zh: "\u68ee\u6797\u7eff" },
    text: {
      en: "Deeper woodland greens intensified when more stable industrial pigments entered painting and print.",
      zh: "\u968f\u7740\u66f4\u7a33\u5b9a\u7684\u5de5\u4e1a\u989c\u6599\u8fdb\u5165\u7ed8\u753b\u4e0e\u5370\u5237\uff0c\u68ee\u6797\u822c\u7684\u6df1\u7eff\u88ab\u8fdb\u4e00\u6b65\u52a0\u6df1\u3002"
    },
    detail: {
      en: "Only when printing, dyeing, and pigment chemistry became more reliable could such dark greens circulate widely across posters, cloth, upholstery, and public graphics.",
      zh: "\u5f53\u5370\u5237\u548c\u67d3\u8272\u5de5\u827a\u66f4\u7a33\u5b9a\u4e4b\u540e\uff0c\u6df1\u7eff\u624d\u5f97\u4ee5\u5927\u9762\u79ef\u51fa\u73b0\uff0c\u4e8e\u662f\u68ee\u6797\u7eff\u5f00\u59cb\u66f4\u9891\u7e41\u5730\u8fdb\u5165\u6d77\u62a5\u3001\u5e03\u6599\u548c\u516c\u5171\u89c6\u89c9\u3002"
    }
  },
  {
    shade: "#B9F5D0",
    era: { en: "Glasshouse pastel", zh: "\u6e29\u5ba4\u6d45\u5f69" },
    title: { en: "Mint Green", zh: "\u8584\u8377\u7eff" },
    text: {
      en: "Mint green belongs to glazed surfaces, greenhouse light, and the airy interiors of modern design.",
      zh: "\u8584\u8377\u7eff\u5c5e\u4e8e\u91c9\u9762\u3001\u6e29\u5ba4\u5149\u7ebf\u4e0e\u73b0\u4ee3\u8bbe\u8ba1\u91cc\u8f7b\u76c8\u7684\u6d45\u5f69\u5ba4\u5185\u3002"
    },
    detail: {
      en: "Its popularity rose with glass, tile, bathroom color, and modern domestic surfaces because mint can communicate hygiene and lightness at the same time.",
      zh: "\u8584\u8377\u7eff\u5728\u4e8c\u5341\u4e16\u7eaa\u7684\u73bb\u7483\u3001\u74f7\u7816\u548c\u73b0\u4ee3\u5ba4\u5185\u91cc\u683c\u5916\u5e38\u89c1\uff0c\u56e0\u4e3a\u5b83\u80fd\u628a\u201c\u6e05\u6d01\u201d\u548c\u201c\u8f7b\u76c8\u201d\u540c\u65f6\u8868\u8fbe\u51fa\u6765\u3002"
    }
  },
  {
    shade: "#7FFF6A",
    era: { en: "Synthetic brightness", zh: "\u5408\u6210\u4eae\u8272" },
    title: { en: "Lime Green", zh: "\u9752\u67e0\u7eff" },
    text: {
      en: "Lime depends on brighter synthetic pigments and the visual appetite of packaging, signage, and display.",
      zh: "\u9752\u67e0\u7eff\u4f9d\u8d56\u66f4\u4eae\u7684\u5408\u6210\u989c\u6599\uff0c\u4e5f\u4f9d\u8d56\u5305\u88c5\u3001\u6807\u8bc6\u4e0e\u5c55\u793a\u7cfb\u7edf\u5bf9\u9ad8\u4eae\u5ea6\u7684\u504f\u7231\u3002"
    },
    detail: {
      en: "Lime green became especially useful to advertisers and product designers because a very bright yellow-green remains highly legible and attention-grabbing even at distance.",
      zh: "\u9752\u67e0\u7eff\u7684\u6d41\u884c\u548c\u5e7f\u544a\u3001\u5305\u88c5\u3001\u8fd0\u52a8\u7528\u54c1\u5173\u7cfb\u5bc6\u5207\uff0c\u56e0\u4e3a\u8fd9\u79cd\u9ad8\u4eae\u7eff\u8272\u5728\u8fdc\u5904\u4e5f\u6709\u6781\u5f3a\u8fa8\u8bc6\u5ea6\u3002"
    }
  },
  {
    shade: "#169873",
    era: { en: "1814 onward", zh: "1814\u5e74\u4ee5\u540e" },
    title: { en: "Emerald Green", zh: "\u7956\u6bcd\u7eff" },
    text: {
      en: "Emerald green entered the 19th century as a vivid but notoriously toxic copper-arsenic pigment.",
      zh: "\u7956\u6bcd\u7eff\u572819\u4e16\u7eaa\u6210\u4e3a\u4e00\u79cd\u6781\u9c9c\u660e\u3001\u4f46\u4e5f\u4ee5\u6bd2\u6027\u95fb\u540d\u7684\u94dc\u7837\u7eff\u989c\u6599\u3002"
    },
    detail: {
      en: "Its history is therefore double-sided: emerald green was prized for intensity and glamour, yet feared because early pigment chemistry made that brightness physically dangerous.",
      zh: "\u7956\u6bcd\u7eff\u4e00\u65b9\u9762\u56e0\u6d53\u8273\u800c\u53d7\u6b22\u8fce\uff0c\u53e6\u4e00\u65b9\u9762\u4e5f\u56e0\u65e9\u671f\u94dc\u7837\u7eff\u989c\u6599\u7684\u6bd2\u6027\u800c\u7559\u4e0b\u590d\u6742\u7684\u5386\u53f2\u540d\u58f0\u3002"
    }
  },
  {
    shade: "#5F7F4C",
    era: { en: "Botanical revival", zh: "\u690d\u7269\u590d\u5174\u98ce\u683c" },
    title: { en: "Fern Green", zh: "\u8568\u53f6\u7eff" },
    text: {
      en: "Fern greens belong to botanical illustration, conservatory culture, and the Arts and Crafts return to plant forms.",
      zh: "\u8568\u53f6\u7eff\u5c5e\u4e8e\u690d\u7269\u56fe\u8c31\u3001\u6e29\u5ba4\u6587\u5316\uff0c\u4ee5\u53ca\u5de5\u827a\u7f8e\u672f\u8fd0\u52a8\u5bf9\u690d\u7269\u5f62\u6001\u7684\u56de\u5f52\u3002"
    },
    detail: {
      en: "Because it travels with fern motifs, wallpapers, specimens, and conservatory culture, fern green often feels archival, bookish, and slightly scientific.",
      zh: "\u8568\u53f6\u7eff\u5f80\u5f80\u548c\u6e29\u5ba4\u6587\u5316\u3001\u690d\u7269\u6807\u672c\u3001\u58c1\u7eb8\u88c5\u9970\u8fde\u5728\u4e00\u8d77\uff0c\u56e0\u6b64\u5b83\u603b\u5e26\u4e00\u70b9\u4e66\u9875\u611f\u548c\u535a\u7269\u5b66\u6c14\u606f\u3002"
    }
  }
];

const literatureData = [
  {
    label: { en: "Pastoral", zh: "\u7530\u56ed" },
    title: {
      en: "Green as meadow, grass, and first shelter",
      zh: "\u7eff\u8272\u50cf\u8349\u5730\u3001\u7267\u573a\u4e0e\u6700\u521d\u7684\u5e87\u62a4"
    },
    body: {
      en: "In pastoral poems and nursery verse, green often names land that can be inhabited. It suggests nourishment, shelter, and a world still capable of renewal.",
      zh: "\u5728\u7530\u56ed\u8bd7\u4e0e\u513f\u7ae5\u8bd7\u91cc\uff0c\u7eff\u8272\u5f80\u5f80\u9996\u5148\u610f\u5473\u7740\u53ef\u5c45\u4f4f\u7684\u571f\u5730\uff1a\u8349\u5730\u3001\u7267\u573a\u3001\u6811\u836b\uff0c\u4ee5\u53ca\u751f\u547d\u53ef\u4ee5\u7ee7\u7eed\u751f\u957f\u7684\u5730\u65b9\u3002"
    },
    quote: {
      en: "\"What is green? the grass is green.\"",
      zh: "\u201c\u4ec0\u4e48\u662f\u7eff\u8272\uff1f\u9752\u8349\u5c31\u662f\u7eff\u8272\u3002\u201d"
    },
    credit: {
      en: "Christina Rossetti, Color",
      zh: "\u514b\u91cc\u65af\u8482\u5a1c\u00b7\u7f57\u585e\u8482\uff0c\u300aColor\u300b"
    },
    image: "assets/literature-pastoral.png",
    position: "center",
    size: "cover"
  },
  {
    label: { en: "Climbing", zh: "\u8513\u5ef6" },
    title: {
      en: "Green as ivy, hedge, and patient attachment",
      zh: "\u7eff\u8272\u50cf\u5e38\u6625\u85e4\u3001\u6811\u7bf1\u4e0e\u7f13\u6162\u9644\u7740"
    },
    body: {
      en: "When green appears as ivy, hedge, or moss, it often carries the idea of time attaching itself to a place. The color becomes a record of memory rather than a flat description.",
      zh: "\u5f53\u7eff\u8272\u51fa\u73b0\u5728\u5e38\u6625\u85e4\u3001\u6811\u7bf1\u6216\u82d4\u9762\u4e0a\u65f6\uff0c\u5b83\u5e38\u88ab\u5199\u6210\u4e00\u79cd\u201c\u9644\u7740\u7684\u65f6\u95f4\u201d\uff0c\u6697\u793a\u623f\u5c4b\u3001\u8bb0\u5fc6\u4e0e\u65e7\u4e8b\u7f13\u6162\u5730\u7559\u4e86\u4e0b\u6765\u3002"
    },
    quote: {
      en: "\"A dainty plant is the ivy green.\"",
      zh: "\u201c\u5e38\u6625\u85e4\u662f\u4e00\u79cd\u7ea4\u79c0\u7684\u7eff\u8272\u690d\u7269\u3002\u201d"
    },
    credit: {
      en: "Charles Dickens, The Ivy Green",
      zh: "\u67e5\u5c14\u65af\u00b7\u72c4\u66f4\u65af\uff0c\u300aThe Ivy Green\u300b"
    },
    image: "assets/literature-ivy.png",
    position: "center",
    size: "cover"
  },
  {
    label: { en: "Season", zh: "\u5b63\u8282" },
    title: {
      en: "Green as a brief season that cannot stay",
      zh: "\u7eff\u8272\u50cf\u4e00\u6bb5\u4e0d\u4f1a\u505c\u7559\u592a\u4e45\u7684\u5b63\u8282"
    },
    body: {
      en: "Early spring green is often written as unstable because it has not yet ripened. Writers use it to describe beginnings that feel luminous precisely because they will not last.",
      zh: "\u65e9\u6625\u7684\u7eff\u5e38\u88ab\u6587\u5b66\u5199\u6210\u4e00\u79cd\u4e0d\u7a33\u5b9a\u7684\u5f00\u59cb\uff0c\u56e0\u4e3a\u5b83\u8fd8\u6ca1\u6709\u5b8c\u5168\u6210\u719f\uff0c\u6240\u4ee5\u603b\u4e0e\u77ed\u6682\u3001\u8f6c\u77ac\u5373\u901d\u548c\u53d8\u8272\u7684\u65f6\u523b\u6709\u5173\u3002"
    },
    quote: {
      en: "\"Nature's first green is gold.\"",
      zh: "\u201c\u81ea\u7136\u6700\u521d\u7684\u7eff\uff0c\u5176\u5b9e\u5e26\u7740\u91d1\u8272\u3002\u201d"
    },
    credit: {
      en: "Robert Frost, Nothing Gold Can Stay",
      zh: "\u7f57\u4f2f\u7279\u00b7\u5f17\u7f57\u65af\u7279\uff0c\u300aNothing Gold Can Stay\u300b"
    },
    image: "assets/literature-season.png",
    position: "center",
    size: "cover"
  },
  {
    label: { en: "Song", zh: "\u9e23\u5531" },
    title: {
      en: "Green as plumage, brightness, and a living voice",
      zh: "\u7eff\u8272\u50cf\u7fbd\u6bdb\u3001\u4eae\u5149\u4e0e\u4e00\u526f\u6d3b\u7740\u7684\u55d3\u97f3"
    },
    body: {
      en: "In lyric writing, green frequently joins sound: feathers, leaves, wind, and birdsong. The color starts to behave like motion, turning sight into something almost musical.",
      zh: "\u5728\u6292\u60c5\u8bd7\u91cc\uff0c\u7eff\u8272\u4e5f\u5e38\u548c\u58f0\u97f3\u8fde\u5728\u4e00\u8d77\uff1a\u9e1f\u7fbd\u3001\u679d\u53f6\u3001\u98ce\u4e0e\u9e23\u5531\u8ba9\u7eff\u8272\u4ece\u9759\u6b62\u7684\u989c\u8272\u53d8\u6210\u4e00\u79cd\u4f1a\u6d41\u52a8\u7684\u751f\u547d\u611f\u3002"
    },
    quote: {
      en: "\"Thou, Linnet! in thy green array.\"",
      zh: "\u201c\u4e91\u96c0\u554a\uff0c\u4f60\u62ab\u7740\u4e00\u8eab\u7eff\u8272\u7684\u7fbd\u8863\u3002\u201d"
    },
    credit: {
      en: "William Wordsworth, To the Green Linnet",
      zh: "\u5a01\u5ec9\u00b7\u534e\u5179\u534e\u65af\uff0c\u300aTo the Green Linnet\u300b"
    },
    image: "assets/literature-songbird.png",
    position: "center",
    size: "cover"
  }
];

const psychologyData = [
  {
    shade: "#C7D9C1",
    label: { en: "Calm", zh: "\u5e73\u9759" },
    title: {
      en: "Soft greens reduce visual tension",
      zh: "\u67d4\u548c\u7684\u7eff\u8272\u4f1a\u964d\u4f4e\u89c6\u89c9\u5f20\u529b"
    },
    text: {
      en: "Sage and mint shades often make a room feel slower, gentler, and easier to stay inside.",
      zh: "\u9f20\u5c3e\u8349\u7eff\u4e0e\u8584\u8377\u7eff\u5e38\u5e38\u4f1a\u8ba9\u7a7a\u95f4\u663e\u5f97\u66f4\u6162\u3001\u66f4\u67d4\u548c\uff0c\u4e5f\u66f4\u5bb9\u6613\u8ba9\u4eba\u505c\u7559\u3002"
    },
    detail: {
      en: "This is one reason hotels, wellness spaces, and residential interiors often prefer sage or mint over fluorescent greens: the quieter hues ask for less constant attention.",
      zh: "\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u9152\u5e97\u3001\u7597\u6108\u7a7a\u95f4\u548c\u4f4f\u5b85\u8f6f\u88c5\u7ecf\u5e38\u4f7f\u7528\u9f20\u5c3e\u8349\u7eff\u6216\u8584\u8377\u7eff\uff0c\u800c\u4e0d\u662f\u7279\u522b\u9c9c\u4eae\u7684\u8367\u5149\u7eff\u3002"
    }
  },
  {
    shade: "#6B8E23",
    label: { en: "Renewal", zh: "\u66f4\u65b0" },
    title: {
      en: "Green is closely tied to recovery and growth",
      zh: "\u7eff\u8272\u5929\u7136\u4e0e\u6062\u590d\u548c\u751f\u957f\u76f8\u8fde"
    },
    text: {
      en: "Across design and branding, green often signals becoming, freshness, healing, and forward movement.",
      zh: "\u5728\u8bbe\u8ba1\u4e0e\u54c1\u724c\u8bed\u8a00\u91cc\uff0c\u7eff\u8272\u5f80\u5f80\u610f\u5473\u7740\u66f4\u65b0\u3001\u7597\u6108\u3001\u65b0\u9c9c\u611f\u4e0e\u5411\u524d\u63a8\u8fdb\u3002"
    },
    detail: {
      en: "Brands regularly use green to imply improvement or a closer relation to nature, so the color appears frequently in health, sustainability, and fresh-food visual systems.",
      zh: "\u54c1\u724c\u559c\u6b22\u7528\u7eff\u8272\u6697\u793a\u201c\u6b63\u5728\u53d8\u597d\u201d\u6216\u201c\u66f4\u63a5\u8fd1\u81ea\u7136\u201d\uff0c\u56e0\u6b64\u5b83\u5e38\u51fa\u73b0\u5728\u5065\u5eb7\u3001\u73af\u4fdd\u548c\u65b0\u9c9c\u98df\u54c1\u76f8\u5173\u7684\u89c6\u89c9\u7cfb\u7edf\u91cc\u3002"
    }
  },
  {
    shade: "#0F5D3F",
    label: { en: "Ambivalence", zh: "\u77db\u76fe" },
    title: {
      en: "Dark greens can soothe and unsettle at once",
      zh: "\u6df1\u7eff\u8272\u80fd\u540c\u65f6\u5b89\u629a\u4e0e\u4ee4\u4eba\u4e0d\u5b89"
    },
    text: {
      en: "Forest tones calm the eye while still carrying mystery, secrecy, and the feeling that something is hidden.",
      zh: "\u68ee\u6797\u822c\u7684\u6df1\u7eff\u65e2\u80fd\u5b89\u629a\u89c6\u7ebf\uff0c\u4e5f\u4f1a\u5e26\u7740\u795e\u79d8\u3001\u9690\u533f\u4e0e\u67d0\u79cd\u88ab\u906e\u853d\u7684\u4e1c\u897f\u3002"
    },
    detail: {
      en: "Compared with pale greens, dark greens more easily suggest boundary, density, and distance, which is why they can feel grounded in one context and ominous in another.",
      zh: "\u6df1\u7eff\u8272\u6bd4\u6d45\u7eff\u8272\u66f4\u5bb9\u6613\u8ba9\u4eba\u8054\u60f3\u5230\u8fb9\u754c\u3001\u5bc6\u5ea6\u4e0e\u8ddd\u79bb\uff0c\u6240\u4ee5\u5b83\u65e2\u80fd\u6c89\u9759\uff0c\u4e5f\u53ef\u80fd\u663e\u5f97\u66f4\u795e\u79d8\u6216\u66f4\u5c01\u95ed\u3002"
    }
  },
  {
    shade: "#7FFF6A",
    label: { en: "Stimulation", zh: "\u523a\u6fc0" },
    title: {
      en: "Bright greens sharpen attention quickly",
      zh: "\u9ad8\u4eae\u7eff\u8272\u4f1a\u8fc5\u901f\u62c9\u9ad8\u6ce8\u610f\u529b"
    },
    text: {
      en: "Lime and neon greens feel immediate and restless, which is why they work so well in sport, signage, and digital cues.",
      zh: "\u9752\u67e0\u7eff\u548c\u9713\u5149\u7eff\u4f1a\u8ba9\u4eba\u7acb\u523b\u6ce8\u610f\u5230\u5b83\u4eec\uff0c\u56e0\u6b64\u5e38\u89c1\u4e8e\u8fd0\u52a8\u3001\u6807\u8bc6\u4e0e\u6570\u5b57\u63d0\u793a\u3002"
    },
    detail: {
      en: "That same visual force is why lime and neon greens are effective in interface prompts, performance gear, street graphics, and anywhere designers do not want a signal to be missed.",
      zh: "\u56e0\u6b64\u9752\u67e0\u7eff\u548c\u9713\u5149\u7eff\u5728\u754c\u9762\u63d0\u793a\u3001\u8fd0\u52a8\u88c5\u5907\u548c\u8857\u5934\u89c6\u89c9\u91cc\u5f88\u6709\u6548\uff0c\u56e0\u4e3a\u5b83\u4eec\u51e0\u4e4e\u4e0d\u4f1a\u88ab\u5ffd\u89c6\u3002"
    }
  }
];

const fashionData = [
  {
    label: { en: "Utility Olive", zh: "\u5b9e\u7528\u6a44\u6984\u7eff" },
    title: {
      en: "Workwear, uniforms, and urban practicality",
      zh: "\u5de5\u88c5\u3001\u5236\u670d\u4e0e\u90fd\u5e02\u5b9e\u7528\u4e3b\u4e49"
    },
    text: {
      en: "Olive stays durable in fashion because it balances neutrality with character and pairs easily with leather, denim, and black.",
      zh: "\u6a44\u6984\u7eff\u5728\u65f6\u88c5\u91cc\u4e00\u76f4\u7a33\u5b9a\uff0c\u56e0\u4e3a\u5b83\u517c\u5177\u4e2d\u6027\u4e0e\u4e2a\u6027\uff0c\u4e5f\u5f88\u5bb9\u6613\u4e0e\u76ae\u9769\u3001\u4e39\u5b81\u548c\u9ed1\u8272\u642d\u914d\u3002"
    },
    detail: {
      en: "This branch of green enters contemporary wardrobes through military surplus, field clothing, and workwear tradition, so its authority in fashion is often based on reliability and endurance.",
      zh: "\u8fd9\u4e00\u652f\u7eff\u8272\u7ecf\u5e38\u901a\u8fc7\u519b\u88c5\u3001\u91ce\u5916\u670d\u9970\u548c\u5de5\u88c5\u4f20\u7edf\u8fdb\u5165\u73b0\u4ee3\u8863\u6a71\uff0c\u6240\u4ee5\u5b83\u7684\u65f6\u5c1a\u611f\u5e38\u5efa\u7acb\u5728\u201c\u53ef\u9760\u201d\u548c\u201c\u8010\u7528\u201d\u4e0a\u3002"
    },
    a: "#8A9A5B",
    b: "#5F7F4C",
    image: "assets/fashion-utility-olive.png",
    position: "center",
    size: "cover"
  },
  {
    label: { en: "Sage Minimalism", zh: "\u9f20\u5c3e\u8349\u6781\u7b80" },
    title: {
      en: "Wellness palettes and quiet luxury",
      zh: "\u7597\u6108\u914d\u8272\u4e0e\u5b89\u9759\u5962\u611f"
    },
    text: {
      en: "Sage green rose with interior-led fashion moods: linen tailoring, tonal dressing, and a softer form of restraint.",
      zh: "\u9f20\u5c3e\u8349\u7eff\u4f34\u968f\u7740\u5ba4\u5185\u611f\u65f6\u88c5\u5ba1\u7f8e\u5347\u6e29\uff1a\u4e9a\u9ebb\u5957\u88c5\u3001\u540c\u8272\u7cfb\u7a7f\u642d\uff0c\u4ee5\u53ca\u66f4\u6e29\u548c\u7684\u514b\u5236\u611f\u3002"
    },
    detail: {
      en: "Its recent popularity rose alongside home aesthetics, natural fibers, and low-contrast tonal dressing, which is why sage is often read as breathable minimalism rather than formal luxury.",
      zh: "\u9f20\u5c3e\u8349\u7eff\u8fd1\u5e74\u6d41\u884c\uff0c\u548c\u5bb6\u5c45\u5ba1\u7f8e\u3001\u81ea\u7136\u7ea4\u7ef4\u4e0e\u4f4e\u5bf9\u6bd4\u5ea6\u7a7f\u642d\u540c\u6b65\u5347\u6e29\uff0c\u56e0\u6b64\u5e38\u88ab\u770b\u4f5c\u201c\u53ef\u547c\u5438\u7684\u6781\u7b80\u4e3b\u4e49\u201d\u3002"
    },
    a: "#C7D9C1",
    b: "#B9F5D0",
    image: "assets/fashion-sage-minimalism.png",
    position: "center",
    size: "cover"
  },
  {
    label: { en: "Emerald Evening", zh: "\u7956\u6bcd\u7eff\u591c\u8272" },
    title: {
      en: "Satin, velvet, and occasion dressing",
      zh: "\u7f0e\u9762\u3001\u4e1d\u7ed2\u4e0e\u591c\u95f4\u7a7f\u7740"
    },
    text: {
      en: "Emerald keeps returning whenever fashion wants drama without losing refinement.",
      zh: "\u5f53\u65f6\u88c5\u65e2\u60f3\u8981\u620f\u5267\u6027\u3001\u53c8\u4e0d\u60f3\u5931\u53bb\u7cbe\u81f4\u611f\u65f6\uff0c\u7956\u6bcd\u7eff\u603b\u4f1a\u56de\u6765\u3002"
    },
    detail: {
      en: "Once emerald is placed in satin, velvet, and jewel-tone styling, the color shifts away from plant associations and toward evening formality, theatricality, and ceremonial display.",
      zh: "\u5f53\u7956\u6bcd\u7eff\u88ab\u7528\u5728\u4e1d\u7ed2\u3001\u7f0e\u9762\u548c\u73e0\u5b9d\u8c03\u9020\u578b\u91cc\u65f6\uff0c\u5b83\u4f1a\u628a\u7eff\u8272\u4ece\u690d\u7269\u8054\u60f3\u62c9\u5411\u620f\u5267\u6027\u548c\u793c\u670d\u611f\u3002"
    },
    a: "#169873",
    b: "#0F5D3F",
    image: "assets/fashion-emerald-evening.png",
    position: "center",
    size: "cover"
  },
  {
    label: { en: "Acid Bright", zh: "\u9178\u4eae\u9752\u67e0" },
    title: {
      en: "Sportswear, youth culture, and digital shine",
      zh: "\u8fd0\u52a8\u88c5\u3001\u9752\u5e74\u6587\u5316\u4e0e\u6570\u5b57\u5149\u6cfd"
    },
    text: {
      en: "Lime and neon greens move through trend cycles as symbols of visibility, rebellion, and high-energy styling.",
      zh: "\u9752\u67e0\u7eff\u4e0e\u9713\u5149\u7eff\u5e38\u5728\u6f6e\u6d41\u5faa\u73af\u91cc\u4ee3\u8868\u53ef\u89c1\u5ea6\u3001\u53cd\u53db\u611f\u4e0e\u9ad8\u80fd\u91cf\u7a7f\u642d\u3002"
    },
    detail: {
      en: "Because acid green connects naturally to technical fabric, night-running gear, and sneaker culture, fashion often reads it as a color of speed, energy, and engineered visibility.",
      zh: "\u9178\u4eae\u7684\u7eff\u8272\u548c\u6280\u672f\u9762\u6599\u3001\u591c\u8dd1\u88c5\u5907\u3001\u7403\u978b\u6587\u5316\u5173\u7cfb\u5bc6\u5207\uff0c\u6240\u4ee5\u5b83\u5728\u65f6\u88c5\u91cc\u5e38\u88ab\u7406\u89e3\u4e3a\u901f\u5ea6\u3001\u80fd\u91cf\u4e0e\u53ef\u89c1\u5ea6\u3002"
    },
    a: "#7FFF6A",
    b: "#8FD153",
    image: "assets/fashion-acid-bright.png",
    position: "center",
    size: "cover"
  }
];

function getLanguage() {
  return page.dataset.lang || "en";
}

function renderStaticCopy() {
  const lang = getLanguage();
  const langCopy = copy[lang];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const path = element.dataset.i18n.split(".");
    let value = langCopy;

    path.forEach((part) => {
      value = value[part];
    });

    element.textContent = value;
  });
}

function renderThemeButtons() {
  const lang = getLanguage();
  const activeTheme = page.dataset.theme;

  themeControls.innerHTML = themes
    .map((theme) => {
      const isActive = theme.id === activeTheme;

      return `
        <button class="theme-button ${isActive ? "is-active" : ""}" data-theme="${theme.id}" type="button" aria-pressed="${isActive}">
          ${theme.label[lang]}
        </button>
      `;
    })
    .join("");

  themeControls.querySelectorAll(".theme-button").forEach((button) => {
    button.addEventListener("click", () => {
      page.dataset.theme = button.dataset.theme;
      renderThemeButtons();
    });
  });
}

function renderHistory() {
  const lang = getLanguage();

  historyGrid.innerHTML = historyData
    .map((item) => {
      return `
        <article class="history-card" style="--shade:${item.shade};">
          <p class="history-card__era">${item.era[lang]}</p>
          <div class="history-card__swatch" aria-hidden="true"></div>
          <h3>${item.title[lang]}</h3>
          <p>${item.text[lang]}</p>
          <p class="history-card__detail">${item.detail[lang]}</p>
        </article>
      `;
    })
    .join("");
}

function renderLiterature() {
  const lang = getLanguage();

  literatureGrid.innerHTML = literatureData
    .map((item) => {
      return `
        <article class="literature-card">
          <div
            class="literature-card__image"
            aria-hidden="true"
            style="background-image:url('${item.image}'); background-position:${item.position}; background-size:${item.size};"
          ></div>
          <p class="literature-card__label">${item.label[lang]}</p>
          <h3>${item.title[lang]}</h3>
          <p class="literature-card__body">${item.body[lang]}</p>
          <p class="literature-card__quote">${item.quote[lang]}</p>
          <p class="literature-card__credit">${item.credit[lang]}</p>
        </article>
      `;
    })
    .join("");
}

function renderPsychology() {
  const lang = getLanguage();

  psychologyGrid.innerHTML = psychologyData
    .map((item) => {
      return `
        <article class="psychology-card" style="--shade:${item.shade};">
          <p class="psychology-card__label">${item.label[lang]}</p>
          <div class="psychology-card__dot" aria-hidden="true"></div>
          <h3>${item.title[lang]}</h3>
          <p>${item.text[lang]}</p>
          <p class="psychology-card__detail">${item.detail[lang]}</p>
        </article>
      `;
    })
    .join("");
}

function renderFashion() {
  const lang = getLanguage();

  fashionGrid.innerHTML = fashionData
    .map((item) => {
      return `
        <article class="fashion-card" style="--shade-a:${item.a}; --shade-b:${item.b};">
          <div
            class="fashion-card__image"
            aria-hidden="true"
            style="background-image:url('${item.image}'); background-position:${item.position}; background-size:${item.size};"
          ></div>
          <p class="fashion-card__label">${item.label[lang]}</p>
          <div class="fashion-card__band" aria-hidden="true"></div>
          <h3>${item.title[lang]}</h3>
          <p>${item.text[lang]}</p>
          <p class="fashion-card__detail">${item.detail[lang]}</p>
        </article>
      `;
    })
    .join("");
}

function renderLanguageButtons() {
  const activeLanguage = getLanguage();
  const labels = { en: "English", zh: "\u4e2d\u6587" };

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === activeLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    button.textContent = labels[button.dataset.lang];
  });
}

function renderPage() {
  document.documentElement.lang = getLanguage();
  renderStaticCopy();
  renderThemeButtons();
  renderHistory();
  renderLiterature();
  renderPsychology();
  renderFashion();
  renderLanguageButtons();
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    page.dataset.lang = button.dataset.lang;
    renderPage();
  });
});

renderPage();
