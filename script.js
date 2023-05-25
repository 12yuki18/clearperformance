$(function(){
    $("form").submit(function(){

    //エラーの初期化
    $("p.error").remove();
    $("dl dd").removeClass("error");

    $("input[type='text'].validate,textarea.validate").each(function(){
    
    //必須項目のチェック
    if($(this).hasClass("required")){
        if($(this).val()==""){
            $(this).parent().prepend("<p class='error'>必須項目です</p>");
        }
    }
    
    //数値のチェック
    if($(this).hasClass("number")){
        if(isNaN($(this).val())){
            $(this).parent().prepend("<p class='error'>数値のみ入力可能です</p>");
        }
    }
    
    //メールアドレスのチェック
    if($(this).hasClass("mail")){
        if($(this).val() && !$(this).val().match(/.+@.+\..+/g)){
            $(this).parent().prepend("<p class='error'>メールアドレスの形式が異なります</p>");
        }
    }
    
    //メールアドレス確認のチェック
    if($(this).hasClass("mail_check")){
        if($(this).val() && $(this).val()!=$("input[name="+$(this).attr("name").replace(/^(.+)_check$/, "$1")+"]").val()){
            $(this).parent().prepend("<p class='error'>メールアドレスと内容が異なります</p>");
        }
    }
    
});

    //ラジオボタンのチェック
    $("input[type='radio'].validate.required").each(function(){

        if($("input[name="+$(this).attr("name")+"]:checked").length == 0){
            $(this).parent().prepend("<p class='error'>選択してください</p>");
        }
    });

    //チェックボックスのチェック
    $(".checkboxRequired").each(function(){
        if($(":checked",this).length==0){
        $(this).prepend("<p class='error'>選択してください</p>");
        }
    });

    // その他項目のチェック
    $(".validate.add_text").each(function(){
        if($(this).prop("checked") && $("input[name="+$(this).attr("name").replace(/^(.+)$/, "$1_text")+"]").val()==""){
            $(this).parent().prepend("<p class='error'>その他の項目を入力してください。</p>");
        }
    });

    //エラーの際の処理
    if($("p.error").length > 0){
        $('html,body').animate({
            scrollTop: $("p.error:first").offset().top-40
        }, 'slow');
        $("p.error").parent().addClass("error");
        return false;
    }
});
});