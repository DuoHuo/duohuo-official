<template>
    <div class="project">
        <div class="content">
            <div class="intro">
                <h2 class="title">项目总览</h2>
                <p class="text">
                    这里本来是预留给那些日活千万的项目的，可我小叮当翻了一圈也没找到，就只好临时放一些知名度略低的了。对于一个项目来说，技术上的实现仅仅是第一步，运营或许更决定它们日后的命运吧。因此咱现在也在寻找一些运营伙伴啊可恶 (`д´)
                </p>
            </div> 
            <div class="project-container">
                <h3 class="title">
                    项目陈列室
                </h3>
                <div class="row">
                    <a class="item" href="https://wiki.nuister.org" target="_blank">
                        <div class="img-container">
                            <img src="../assets/wiki.jpg" class="img">
                        </div>
                        <div class="text-container">
                            <h4 class="title">信大百科</h4>
                            <p class="text">
                                技术上已经没有太大问题，但正如所有wiki一样，需要有更多的人来编辑才有意义啊！咱已经和一些小伙伴一起完善了不少词条，但还远远不够......编辑申请通道一直开放着，快来人啊！
                            </p>
                        </div>
                    </a>
                    <a class="item" href="https://idoc.duohuo.org/" target="_blank">
                        <div class="img-container">
                            <img src="../assets/idoc.jpg" class="img">
                        </div>
                        <div class="text-container">
                            <h4 class="title">idoc</h4>
                            <p class="text">
                                idoc，期末的救星，让你成为考试的豪杰。集中了相当量的各学科历年期末试卷与复习资料。不过现在新的卷子是越来越难收集到了，咱也在和神秘的相关组织协商，希望能够扩充试题库哒！
                            </p>
                        </div>
                    </a>
                    <a class="item" href="http://mirrors.duohuo.org/" target="_blank">
                        <div class="img-container">
                            <img src="../assets/mirror.jpg" class="img">
                        </div>
                        <div class="text-container">
                            <h4 class="title">Nuist开源镜像站</h4>
                            <p class="text">
                                如果你是南信大的Linux使用者，肯定不能错过这个站点，但我感觉俺说啥都会被隔壁老王喷，所以干脆告诉你老王有个组织叫Linux In Nuist得了【逃】
                            </p>
                        </div>
                    </a>
                </div>
                <div class="row">
                    <a class="item unclickable">
                        <div class="img-container">
                            <img src="../assets/duohuo.jpg" class="img">
                        </div>
                        <div class="text-container">
                            <h4 class="title">微信公众号</h4>
                            <p class="text">
                                咱也是有个微信公众号的，除了偶尔更新点文章或活动信息，更重要的是一些小工具可以在公众号使用——像什么一键测评啦，四六级查询啦，idoc和信大百科的移动端入口啦，反正蛮好玩的，右下角就有二维码，关注一个嘛d(`･∀･)b
                            </p>
                        </div>
                    </a>
                    <a class="item" href="http://hackathon.b-sirius.me/" target="_blank">
                        <div class="img-container">
                            <img src="../assets/hackfire.jpg" class="img">
                        </div>
                        <div class="text-container">
                            <h4 class="title">HackFire</h4>
                            <p class="text">
                                项目并不局限于上线一个站点或完成一个工具，也可以是一场活动。HackFire是17年4月末多火携手计软院一起举办的黑客马拉松，6支队伍在同一屋檐下肝了20个小时，并完成了各自的作品。选手纷纷表示“HackFire真好玩，明年还要再来”（5毛一条，括
                            </p>
                        </div>
                    </a>
                    <a class="item unclickable">
                        <div class="img-container">
                            <img src="../assets/jojo.jpg" class="img">
                        </div>
                        <div class="text-container">
                            <h4 class="title">未完...</h4>
                            <p class="text">
                                不管怎样，这都是已经完成的项目啦，不管它们做的怎样，都是历史（你不维护啦！？）。咱以后还有很多的坑要挖，因此请各位提高自己的姿势水平，还是要学习一个呐！
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <pageFooter @changePage="changePage"></pageFooter>
    </div>
</template>
<script>
import Footer from '@/components/Footer';

export default {
    name: 'team',
    data() {
        return {
        }
    },
    components: {
        'pageFooter': Footer
    },
    methods: {
        changePage: function() {
            let args = [].slice.apply(arguments);
            let page = args.shift();

            this.$emit('changePage', page);
        }
    }
}
</script>
<style lang="scss">
$black: #1e2022;
$lightBlack: #323232;
$darkBlack: #1c1e20;
$grey: #c1c7d4;
$red: #ff0042;
$lightBlue: #f0f9fd;
$dark: #96a0aa;
$white: #fff;
$outline: #13A7FF;
$title: 20px;
$text: 14px;
$lineHeight: 22.65px;

.project {
    position: absolute;
    width: 100%;
    .content {
        box-sizing: border-box;
        width: 1200px;
        margin: auto;
        padding: 60px 30px 150px 30px;
        .intro {
            width: 784px;
            margin: auto;
            margin-bottom: 100px;
            .title {
                text-align: center;
                font-weight: normal;
                font-size: $title;
                color: $grey;
                margin-bottom: 30px;
            }
            .text {
                font-size: $text;
                color: $lightBlack;
                line-height: $lineHeight;
            }
        }
        .project-container {
            .title {
                font-size: $title;
                color: $grey;
                text-align: center;
                margin-bottom:  50px;
            }
            .row {
                display: flex;
                flex-direction: flex-start;
                margin-bottom: 50px;
                &:last-child {
                    margin-bottom: 0; 
                }
            }
            .item {
                display: inline-block;
                width: 355px;
                height: 490px;
                box-shadow: 0 5px 40px 0 rgba(100,146,188,0.30);
                background: $white;
                margin-right: 37px;
                transition: 0.2s;
                cursor: pointer;
                &.unclickable {
                    cursor: default;
                }
                &:last-child {
                    margin-right: 0;
                }
                &:hover {
                    box-shadow: 0 20px 60px 0 rgba(100,146,188,0.30);
                    transform: translate(0, -10px);
                }
                .img-container {
                    height: 270px;
                    background: #8DB8EB;
                    .img {
                        width: 355px;
                        height: 270px;
                    }
                }
                .text-container { 
                    padding: 30px;
                    .title {
                        text-align: left;
                        font-size: $title;
                        color: $lightBlack;
                        margin-bottom: 15px;
                        line-height: 20px;
                    }
                    .text {
                        font-size: $text;
                        color: $grey;
                        line-height: $lineHeight;
                    }
                }
            }
        }
    }
}
</style>
