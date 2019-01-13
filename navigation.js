var tabsNav = $(".tni"),
    tabsItems = $(".content"),
    activeClass = "topnavItemsActive";
    
    tabsNav.first().addClass(activeClass);
    tabsItems.not(":first").hide();
    
 
    tabsNav.on("click", function(){
            
            var tabNav = $(this),
                index = tabNav.index();

            tabsNav.removeClass(activeClass);
            tabNav.addClass(activeClass);
            tabsItems.delay(500).fadeOut().eq(index).fadeIn(500);

    });
        

