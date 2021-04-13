$(function(){

    //初始化轮播图
    $("#slider").slidebox({
        boxh: 430,//盒子的高度
        w: 1000,//图片的宽度
        h: 400,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });  

    //初始化轮播图
    $(".eSlider").slidebox({
        boxh: 218,//盒子的高度
        w: 328,//图片的宽度
        h: 218,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 30,//控制按钮宽度
        controlsH: 6,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });  

    /* 
        电子书选项卡： 

            思路： 鼠标移入电子书菜单(#ebook .ebookLeft .cTitle li),显示对应的产品（#ebook .ebookProduct > ul）
    
    */
    $("#ebook .ebookLeft .cTitle li").mouseover(function(){

        //给当前菜单添加激活样式
        $(this).addClass("active").siblings().removeClass("active");

        //获取当前菜单的索引
        let index = $(this).index();

        //显示对应产品
        $("#ebook .ebookProduct > ul").removeClass("active").eq(index).addClass("active");

    })



    /* 
        电子书手风琴

            需求： 
                1. 鼠标移入(#ebook .ebookRight li)
                2. 显示当前li下面的内容 div
                3. 隐藏当前li下面的标题 h4
    */

    $("#ebook .ebookRight li").mouseenter(function(){

        //先 = 隐藏 其他li下面的div
        $(this).siblings().find("div").hide();

        //先 = 显示 其他li下面的h4
        $(this).siblings().find("h4").show();

        // 2. 显示当前li下面的内容 div
        $("div",this).show();

        // 3. 隐藏当前li下面的标题 h4
        $("h4",this).hide();

    });


    /* 
        楼层滚动
            需求1： 
                移入楼层： 改变背景色  宽度变为80  切换了背景图标  显示文字

                移出楼层： 回到静态

                思想： 
                        1. 背景色 作为 每个楼层li的自定义属性值
                        2. 可以用数组保存背景色

            需求2： 
                点击楼层 跳转到对应的楼层盒子

                深入理解： 点击楼层，让滚动条 滚动到 对应楼层盒子 距离 浏览器窗口顶部的距离


    */

    //定义数组保存背景色
    let bgColor = ["#93d46f","#f65727","#bb9dee","#ff7394","#c2ec51"];


    $("#floor li").hover(function(){

        //获取当前楼层的索引值
        let index = $(this).index();

        //设置当前楼层的样式
        $(this).css({
            "background-color": bgColor[index],
            "width": "80px",
            "background-position-x": "-40px"
        })


    },function(){

        $(this).css({
            "background-color": "",
            "width": "",
            "background-position-x": ""
        })

    }).click(function(){

        //获取当前点击楼层的索引
        let index = $(this).index();

        //找到楼层 对应的 楼层盒子 到浏览器窗口的顶部距离
        let sTop = $(".floorBox").eq(index).offset().top
        
        //设置滚动条的位置
        $("html,body").animate({ "scrollTop": sTop - 20 },500)
        
    })


    /* 
        固定顶部搜索框
            需求： 滚动 滚动条， 判断如果滚动距离 大于了 1000 ，显示顶部盒子fixedTopBox
    
    */
    $(window).scroll(function(){

        //获取滚动距离
        let sTop = $("html,body").scrollTop();

        console.log(sTop);
        
        
        //判断
        if(sTop > 1000){
            //显示
            $("#fixedTopBox").stop(true,false).slideDown();

            //将search盒子追加到 fixedTopBox
            $(".search").appendTo("#fixedTopBox")


        }else{
            //隐藏
            $("#fixedTopBox").stop(true,false).slideUp();

            //将search盒子追加到searchBox
            $(".search").appendTo(".searchBox")
        }
        


    });






})