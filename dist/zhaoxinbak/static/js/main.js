var $$ = mdui.JQ;

const indexTxt = `
  <div class="mdui-typo doc-content">
    <h1>README</h1>
    <blockquote>
      <p>欢迎你参加多火招新，请完成任意一组的题目，并填写个人信息登记表，发至指定邮箱。通过测试后即可加入多火的大家庭，期待与你们相见。</p>
      <footer> ——多火工作室 </footer>
    </blockquote>
    <button class="mdui-btn mdui-color-pink-accent mdui-ripple"><a href="./static/file/个人信息登记表.xlsx" download="./static/file/个人信息登记表.xlsx">下载报名表</a></button>
  </div>
`

const frontEndTxt = `
  <div class="mdui-typo doc-content">
    <h1>前端组</h1>
    <blockquote>
      <p>前端组致力于让成员入门并掌握HTML+CSS+JavaScript的基础&进阶语法、JavaScript的高级特性，在自学与积累中掌握各式组件&网页特效的实现方法，学习常用布局、模式与思想，熟练使用基本的前端构建工具、流行框架，甚至掌握Node.js全栈开发，以便于参与到项目中来。</p>
      <footer> ——前端组 </footer>
    </blockquote>
    <p><mark>完成一个关于个人简介的web页面</mark></p>
    <ul>
        <li>尽力学习相关技术</li>
        <li>个人简介内容不限，随便想写什么写什么都可以</li>
        <li>可以简单讲一下对前端的理解，以及加入前端组的原因</li>
        <li>尽自己最大努力去做，做成<a href="./static/page/demo1.html" target="_blank">demo1</a>这样也行，<a href="https://mumu1993.github.io/" target="_blank">demo2[随便找的]</a>或者<a href="http://zhangwenli.com/cv/cn.html" target="_blank">demo3[随便找的]</a>也行，尽力就好，会给每个人加入的机会</li>
        <li>参考资料<a href="http://www.runoob.com/" target="_blank">http://www.runoob.com/</a></li>
    </ul>
    <p><mark>如果做题途中有问题或者说中间有不会的地方可以随时联系我，就是招新群里面的小七</mark></p>
    <p><mark>完成后将文件同社员信息表发至308805548@qq.com。 </mark></p>
    <p><mark>有任何问题可以联系QQ：308805548 </mark></p>
  </div>
`

const aiTxt = `
  <div class="mdui-typo doc-content">
    <h1>AI组</h1>
    <blockquote>
      <p>小萌新们你们好，你们听说过人工智能么，那又有多少了解呢，如果你对这些充满了兴趣，那么就别犹豫，快快加入我们的多火人工智能小组吧，小组也是今年刚刚成立的，学习方向上更多是偏向于深度学习与机器学习，目前的状态也还是在探索阶段，因此需要我们的共同努力来使它进步成长，在这里有着一群与你志趣相投的学长学姐，我们可以一起学习一起探索，加入我们的队伍需要一定的自学能力，因为在这之后，需要自己学习Python与机器学习理论，所以，你做好准备了么，答案如果是“yes”，那么就快来吧，我们在这里等你！</p>
      <footer> ——AI组 </footer>
    </blockquote>
    <p><mark>配置tensorflow-GPU版环境，输出"duohuo"。并将配置过程以blog的形式进行记录，配以每步操作的截图。</mark></p>
    <ul>
      <li>可以使用anaconda套件，但不要用conda配置环境 </li>
      <li>在Linux环境下配置为加分项</li>
    </ul>
    <p><mark>完成后将博客链接和社员信息表发至ruiwenfan97@gmail.com </mark></p>
    <p><mark>如有任何疑问欢迎联系QQ：892438725 </mark></p> 
  </div>
`

const pythonTxt = `
  <div class="mdui-typo doc-content">
    <h1>Python组</h1>
    <blockquote>
      <p>Python作为世界上最好的语言（笑），学好Python可以延长寿命（+1s），减少脑细胞死亡，将更多的时间留给调bug。Python不仅拥有强大的社区支持和丰富的第三方库，而且拥有极强的兼容性，能够将其他语言编写的模块（为了提高运行速度）植入自己的Python程序中，使其拥有强大的性能。尽管Python如此强大，但他远比想象中的简单，别的不说，弱类型赛高！</p>
      <footer> ——Python组 </footer>
    </blockquote>
    <p><mark>使用python计算256*256!的结果中有多少个数字0，给出结果和算法。</mark></p>
    <p><mark>完成后将结果和算法同社员信息表发至925147750@qq.com。 </mark></p>
  </div>
`

const designTxt = `
  <div class="mdui-typo doc-content">
    <h1>设计组</h1>
    <blockquote>
      <p>我们的工作是通过：PS AI SKETCH AE进行虚拟项目的设计后，开发上线。你所看到那些有趣的网页界面，酷炫的海报设计，都出自我们的设计。心动了吗，加入我们吧。</p>
      <footer> ——设计组 </footer>
    </blockquote>
    <p><mark>设计一张电影海报，42x57cm大小，分辨率100以上，下列五个题目任选一个完成，电影内容相关链接已附，主要信息需要体现的已经列出来，可适当增加内容</mark></p>
    <h3>1、秒速5センチメートル (秒速5厘米)</h3>
    <ul>
      <li>制片地区：日本</li>
      <li>出品方：CoMix Wave Films</li>
      <li>导演：新海诚</li>
      <li>编剧：新海诚</li>
      <li>主演(CV)：水桥研二，近藤好美，花村怜美，尾上绫华</li>
      <li>配乐：天门</li>
      <li>详细：<a href="http://movie.douban.com/subject/2043546/">http://movie.douban.com/subject/2043546/</a></li>
    </ul>
    <h3>2、香水：一个谋杀犯的故事 (Perfume: The Story of a Murderer)</h3>
    <ul>
      <li>出品公司：梦工厂电影发行公司、百代电影公司</li>
      <li>发行公司：VIP 4 Medienfonds、Davis-Films</li>
      <li>导演：汤姆·提克威</li>
      <li>编剧：安德鲁·柏金、柏恩·伊钦格</li>
      <li>制片人：柏恩·伊钦格</li>
      <li>主演：本·威士肖，达斯汀·霍夫曼，瑞秋·哈伍德，艾伦·瑞克曼</li>
      <li>原创小说：Patrick Süskind</li>
      <li>制作人：伯纳德艾辛格 胡里奥费尔南德兹</li>
      <li>详细：<a href="http://movie.douban.com/subject/1760622/">http://movie.douban.com/subject/1760622/</a></li>
    </ul>
    <h3>3、中文名：海上钢琴师 (The Legend of 1900)</h3>
    <ul>
      <li>导演：吉赛贝·托纳多雷</li>
      <li>编剧：亚历山大·巴利科</li>
      <li>主演：蒂姆·罗斯，比尔·努恩，梅兰尼·蒂埃里</li>
      <li>详细：<a href="http://movie.douban.com/subject/1292001/">http://movie.douban.com/subject/1292001/</a></li>
    </ul>
    <h3>4、我是谁：没有绝对安全的系统 (Who Am I -Kein System ist sicher)</h3>
    <ul>
      <li>导演: Baran bo Odar</li>
      <li>编剧: Jantje Friese / Baran bo Odar</li>
      <li>制片国家/地区: 德国</li>
      <li>语言: 德语</li>
      <li>详细：<a href="http://movie.douban.com/subject/25932086/">http://movie.douban.com/subject/25932086/</a></li>
    </ul>
    <h3>5、多火招新海报</h3>
    <ul>
      <li>请设计一张多火的招新海报，细节内容随意发挥，有自己的思考和想法，附上作品和想法（这张海报为什么要怎么做，自己的思考过程）发送到邮箱</li>
    </ul>
    <p><mark>完成后将海报和社员信息表发至levina303@163.com </mark></p>
    <p><mark>如果有从事设计方面工作的想法，请额外注明。 </mark></p>
  </div>
`

const javaTxt = `
  <div class="doc-container">
    <div class="mdui-typo doc-content">
      <h1>Java组</h1>
      <blockquote>
        <p>Java组主要负责网站后台的搭建，能够学习到基本的Java知识，完善的项目流程以及基本的架构设计。</p>
        <footer> ——Java组 </footer>
      </blockquote>
      <ul>
        <li>安装JDK</li>
        <li>安装IntelliJ IDEA</li>
        <li>Windows用户安装Ubuntu（可选）</li>
      </ul>
      <p><mark>联系方式qq：3503176298 </mark></p>
    </div>
  </div>
`

const securityTxt = `
  <div class="mdui-typo doc-content">
    <h1>安全组</h1>
    <p><mark>出题人：cc</mark></p>
    <p>应我们伟大的社长大人的要求，鉴于诸多小伙伴对安全的浓厚兴趣。因此，这道招新题目营运而生～</p>
    <p>（咳咳\`\`\`好了 好了不扯皮了）</p>
    <p>首先珍重申明，大佬绕道。。。这题目其实挺。。。明白人就不要揭穿了好吧</p>
    <h3>正题：</h3>
    <p><mark>要求：社长大人的报名表我留了一份在某个服务器上，得到ta。还有在这份表格当前目录下的一个flag（旗子），把flag和报名表下载下来！你的任务就完成啦～</mark></p>
    <h4>注意：</h4>
    <ol>
      <li>请记下你下载flag的时间，年月日时分～这很重要哦，关系到对你的评定</li>
      <li>完工之后请将你的解决问题的思路（writeup）写下来，形成txt文件（里面写下你下载flag的时间）</li>
      <li>将你的个人信息表填写好。</li>
      <li>将以下材料</li>
      <ul>
        <li>flag，个人信息表，解题思路报告（writeup）</li>
      </ul>
      <p><mark>三个东西打包发送到邮箱chainyuuki@gmail.com</mark></p>
    </ol>
    <p><mark>服务器地址：Duohuo.somethingfornothing.top</mark></p>
    <p>科普：世界上最大黑客组织，也是世界上最大的政治性黑客组织，你知道是什么麽？</p>
  </div>
`

const secretaryTxt = `
  <div class="mdui-typo doc-content">
    <h1>秘书组</h1>
    <p><mark>主要参与工作室活动的策划和日常活动的微信推送工作，学妹优先。</mark></p>
    <h4>要求：</h4>
    <ul>
      <li>不限制软件完成一份微信推送的排版，文案可使用工作室之前的推送内容。 </li>
    </ul>
    <p><mark>完成后联系QQ:892438725</mark></p>
  </div>
`

$$(document).ready(function () {
  $$(".mdui-list li").on('click', function() {
    let group = $$(this).attr("data-url");
    let groupTxt = eval(group + 'Txt');
    $$(".doc-container").empty();
    $$(".doc-container").append(groupTxt);
  })

});
  

