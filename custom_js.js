  jQuery(document).ready(function(){
    var custom_image_name ;
    //this code drag image
    jQuery(function(){

      jQuery(".ui-widget-content").draggable({
        grid: [10, 10],
        containment: 'parent'
      });
    });
    //this code replace image
    jQuery('.multi-items-varint').click(function(){
      var images =  jQuery(this).find('.bracletImg').attr("src");
      var variant_id =  jQuery(this).find('.bracelets_id').val();
      var product_variant_id =  jQuery(this).find('.bracelets_first_id').val();
      var product_price =  jQuery(this).find('.bracelets_price').val();
      var price_cal =  jQuery(this).find('.bracelets_cal').val();
       price_cal = price_cal.replace(',','');
      jQuery('.srcbtn').attr('data-for-src', images);
      jQuery('.srcbtn').attr('data-varient', variant_id);
      jQuery('.srcbtn').attr('data-prdct-varient', product_variant_id);
      jQuery('.srcbtn').attr('data-for-price', product_price);
      jQuery('.srcbtn').attr('data-calultn', price_cal);
      /*   	var variant_id = jQuery('.bracelets_id').val();
		var product_price = jQuery('.bracelets_price').val();
		var price_cal = jQuery('.bracelets_cal').val(); */
    });

    jQuery('.srcbtn').click(function(){
      var images = jQuery(this).attr('data-for-src');
      var variant_id = jQuery(this).attr('data-varient');
      var product_variant_id = jQuery(this).attr('data-prdct-varient');
      var product_price = jQuery(this).attr('data-for-price');
      var price_cal = jQuery(this).attr('data-calultn');
      jQuery('#arm-img').attr('src', images);
      //this code cart img
      var varbleInputs =  jQuery('input[type=hidden].cartVal');
      var cartVal = [];
      varbleInputs.each(function(){ 
        var singlePrdctId = jQuery('.produc_varint_id').val();
        if(product_variant_id != singlePrdctId){  
            cartVal.push(jQuery(this).val());
        }else{
            cartVal.pop(jQuery(this).val());
        }
      });
      if(cartVal == ''){
        var cartValue = 1;
      }else{
        var maxVal = Math.max.apply(Math,cartVal);
        var cartValue = parseInt(maxVal) + parseInt("1");
      }
      var singlePrdctId = jQuery('.produc_varint_id').val();
      if(product_variant_id == singlePrdctId){
        //jQuery('.cartImg'+product_variant_id).attr('src', images);
        jQuery( "#braclet_div" ).remove();
        jQuery( "#bracletNotemty" ).remove();
          var j =1;
        jQuery('.prodctItems').each(function() {

          // within each matched .input-wrap element, find each <input> element  
          jQuery(this).find('.prod-numbers').text(j);
          jQuery(this).find('.cartVal').val(j);

          j++;
        });
        cartValue = j;
        jQuery('#review_product').append('<div id="braclet_div" class="col-lg-3 col-md-3 col-sm-4 added-product prodctItems" rel="328-8012"><div class="prod-numbers">'+cartValue+'</div><img src="'+images+'" class="imgBracelet cartImg'+product_variant_id+'"><div>Qty: 1</div><div style="color: #898989;">'+product_price+'</div><input type="hidden" class="singlePrdctId" name="id[]" value="'+variant_id+'"><input type="hidden" name="cartVal[]" class="cartVal" value="'+cartValue+'"><input type="hidden" class="prdct_amount" name="total_amount[]" value="'+price_cal+'"><input type="hidden" data-variant-id="'+variant_id+'" class="Quantity" value="1"><input type="hidden" class="produc_varint_id" value="'+product_variant_id+'"></div><input type="hidden" id="bracletNotemty" value="">');
        jQuery('#total_price').text(price_cal);
      }else{
        jQuery('#review_product').append('<div id="braclet_div" class="col-lg-3 col-md-3 col-sm-4 added-product prodctItems" rel="328-8012"><div class="prod-numbers">'+cartValue+'</div><img src="'+images+'" class="imgBracelet cartImg'+product_variant_id+'"><div>Qty: 1</div><div style="color: #898989;">'+product_price+'</div><input type="hidden" class="singlePrdctId" name="id[]" value="'+variant_id+'"><input type="hidden" name="cartVal[]" class="cartVal" value="'+cartValue+'"><input type="hidden" class="prdct_amount" name="total_amount[]" value="'+price_cal+'"><input type="hidden" data-variant-id="'+variant_id+'" class="Quantity" value="1"><input type="hidden" class="produc_varint_id" value="'+product_variant_id+'"></div><input type="hidden" id="bracletNotemty" value="">');
        jQuery('#total_price').text(price_cal);
      }



      //this code for total amount
      var varbleInputs =  jQuery('input[type=hidden].prdct_amount');
      var prdct_amount = [];
      varbleInputs.each(function(){ 
        prdct_amount.push(jQuery(this).val()); 
      });
      var sum = 0;
      jQuery.each(prdct_amount,function(){sum+=parseFloat(this) || 0;});
      jQuery('#total_price').text(sum);
    });
    //this code append img
    jQuery('.dragAppnd').click(function(){
      var dragSrc = jQuery(this).attr('data-img');
      var dragId = jQuery(this).attr('id');
      var varbleInputs =  jQuery('input[type=hidden].dragVal');
      var drgVal = [];
      varbleInputs.each(function(){ 

        drgVal.push(jQuery(this).val()); 
      });
      //alert(dragSrc);
      if(drgVal == ''){
        var dup_id = 1;
      }else{
        var maxVal = Math.max.apply(Math,drgVal);
        var dup_id = parseInt(maxVal) + parseInt("1");

      }
      var variant_id =  jQuery(this).find('.charms_id').val();
      var product_price =  jQuery(this).find('.charms_price').val();
      var price_cal =  jQuery(this).find('.charms_cal').val();
      price_cal = price_cal.replace(',','');
      jQuery('.drgedImgIN').prepend('<span style="margin-top: 0px;margin-left: -35px;" data-divId="img'+dup_id+'" class="drgBox ui-widget-content"><img class="dragImg img-'+dup_id+'" data-id="img'+dup_id+'" src="'+dragSrc+'"><div id="img'+dup_id+'" class="builder-bubbleContainer moveablex"><div class="builder-bubble callout bottom" style="z-index: 12;"><button data-varient-id="'+variant_id+'" data-prdct-price="'+product_price+'" data-price-calc="'+price_cal+'" type="button" class="duplicateImg" id="img'+dup_id+'"><i class="fa fa-plus-circle" aria-hidden="true"></i> Add another</button><button class="removeImg" data-varient-id="'+variant_id+'" data-prdct-price="'+product_price+'" data-price-calc="'+price_cal+'" type="button" id="img'+dup_id+'"><i class="fa fa-minus-circle" aria-hidden="true"></i> Remove</button></div></div><input type="hidden" name="dragVal[]" class="dragVal" value="'+dup_id+'"></span>');
      jQuery('.drgedImgIN').prepend(jQuery('#box'));
      jQuery(".ui-widget-content").draggable({
        //  grid: [50, 20],
        containment: 'parent'
      });

      //this code for prodct add to cart
      var varbleInputs =  jQuery('input[type=hidden].cartVal');
      
      var cartVal = [];
      varbleInputs.each(function(){ 

        cartVal.push(jQuery(this).val()); 
          
      });
      if(cartVal == ''){
        var cartValue = 1;
      }else{
        var maxVal = Math.max.apply(Math,cartVal);
        var cartValue = parseInt(maxVal) + parseInt("1");
      }
      var qtyVal = jQuery('.qty-'+variant_id).val();
      // alert(qtyVal);

      if(typeof qtyVal === 'undefined'){
        total_qty = 1;
        jQuery('#review_product').append('<div id="'+variant_id+'" class="col-lg-3 col-md-3 col-sm-4 added-product prodctItems" rel="328-8012"><div class="prod-numbers">'+cartValue+'</div><img src="'+dragSrc+'" class="cartImg"><div class="qtyVal-'+variant_id+'">Qty: '+total_qty+'</div><div style="color: #898989;" class="priceVal-'+variant_id+'">'+product_price+'</div><input type="hidden" class="crtPrdctId" name="id[]" value="'+variant_id+'"><input type="hidden" name="cartVal[]" class="cartVal" value="'+cartValue+'"><input type="hidden" class="qty-'+variant_id+'" value="'+total_qty+'"><input type="hidden" name="total_amount[]" class="prdct_amount total_amount-'+variant_id+'" value="'+price_cal+'"><input type="hidden" data-variant-id="'+variant_id+'" class="Quantity totlQunty-'+variant_id+'" value="'+total_qty+'"></div>');
        jQuery('#total_price').text(price_cal);
        
      }else{

        var total_qty = parseInt(qtyVal) + parseInt("1"); 
        // alert(total_qty);
        var total_product_price = parseInt(price_cal) * parseInt(total_qty);
         

        //var currency_symbol = product_price;
        var symbol = product_price.charAt(0); 
        jQuery('.priceVal-'+variant_id).html('');
        jQuery('.priceVal-'+variant_id).html(symbol+total_product_price);
        jQuery('.total_amount-'+variant_id).val(total_product_price);

        jQuery('.totlQunty-'+variant_id).val(total_qty);
        jQuery('.qtyVal-'+variant_id).html('');
        jQuery('.qtyVal-'+variant_id).html('Qty: '+total_qty);
        jQuery('.qty-'+variant_id).val(total_qty);
      }


      //this code for total amount
      var varbleInputs =  jQuery('input[type=hidden].prdct_amount');
      var prdct_amount = [];
      varbleInputs.each(function(){ 
        prdct_amount.push(jQuery(this).val());
      });
      var sum = 0;
      jQuery.each(prdct_amount,function(){sum+=parseFloat(this) || 0;});
      jQuery('#total_price').text(sum);
    });		

    //this code display img option
    jQuery(document).on('click','.dragImg', function(){
      var dragSrcId = jQuery(this).attr('data-id');
      //alert(dragSrcId);
      jQuery('.moveablex').css("display", "none");
      jQuery('#'+dragSrcId).css("display", "block");

    });
    //this code remove img option
    jQuery(document).on('click','.removeImg', function(){
      var removeImgId = jQuery(this).attr('id');
      var data_varient_id = jQuery(this).attr('data-varient-id');
      var data_prdct_price = jQuery(this).attr('data-prdct-price');
      var data_price_calc = jQuery(this).attr('data-price-calc');
      jQuery('.drgBox[data-divId="'+removeImgId+'"]' ).remove();
      //alert(data_varient_id);


      // jQuery("#review_product").children('div[id='+data_varient_id+']:last').remove();
      /*   jQuery('.qtyVal-'+variant_id).html('');
	  jQuery('.qtyVal-'+variant_id).html('Qty: '+total_qty);

		jQuery('.totlQunty-'+variant_id+'-'+variant_id).val(total_qty);

		 jQuery('.qty-'+variant_id).val(total_qty); */


      var qtyVal = jQuery('.qty-'+data_varient_id).val();
      //alert(qtyVal);
      var newQtyVal = parseInt(qtyVal) - parseInt(1); 
      if(newQtyVal != 0 ){
        //alert(newQtyVal);
        jQuery('.qty-'+data_varient_id).val(newQtyVal);
        jQuery('.qtyVal-'+data_varient_id).html('');
        jQuery('.qtyVal-'+data_varient_id).html('Qty: '+newQtyVal);
        jQuery('.totlQunty-'+data_varient_id).val(newQtyVal);

        var total_product_price = parseInt(data_price_calc) * parseInt(newQtyVal); 
        var symbol = data_prdct_price.charAt(0); 
        jQuery('.priceVal-'+data_varient_id).html('');
        jQuery('.priceVal-'+data_varient_id).html(symbol+total_product_price);

      }else{

        jQuery('#'+data_varient_id).remove();


        // for each element on the page with the class .input-wrap
        var j =1;
        jQuery('.prodctItems').each(function() {

          // within each matched .input-wrap element, find each <input> element  
          jQuery(this).find('.prod-numbers').text(j);
          jQuery(this).find('.cartVal').val(j);


          j++;
        });

      }

      var total_amount  = jQuery('#total_price').text();

      var total_product_amount = parseInt(total_amount) - parseInt(data_price_calc); 
      jQuery('#total_price').text(total_product_amount);

    });	

    //this code add duplicate Img option
    jQuery(document).on('click','.duplicateImg', function(){
      //attributes
      var variant_id = jQuery(this).attr('data-varient-id');
      var product_price = jQuery(this).attr('data-prdct-price');
      var price_cal = jQuery(this).attr('data-price-calc');
      price_cal = price_cal.replace(',','');
      var duplicateId = jQuery(this).attr('id');
      var imgSrc = jQuery('.dragImg[data-id="'+duplicateId+'"]').attr("src");
      var varbleInputs =  jQuery('input[type=hidden].dragVal');
      var drgVal = [];
      varbleInputs.each(function(){ 
        drgVal.push(jQuery(this).val()); 
      });
      var maxVal = Math.max.apply(Math,drgVal);
      var dup_id = parseInt(maxVal) + parseInt(1);
      jQuery('.drgedImgIN').prepend('<span style="margin-top: 0px;margin-left: 23px;" data-divId="img'+dup_id+'" class="drgBox ui-widget-content"><img class="dragImg img-'+dup_id+'" data-id="img'+dup_id+'" src="'+imgSrc+'"><div id="img'+dup_id+'" class="builder-bubbleContainer moveablex"><div class="builder-bubble callout bottom" style="z-index: 12;"><button data-varient-id="'+variant_id+'" data-prdct-price="'+product_price+'" data-price-calc="'+price_cal+'" type="button" class="duplicateImg" id="img'+dup_id+'"><i class="fa fa-plus-circle" aria-hidden="true"></i> Add another</button><button data-varient-id="'+variant_id+'" data-prdct-price="'+product_price+'" data-price-calc="'+price_cal+'" class="removeImg"  type="button" id="img'+dup_id+'"><i class="fa fa-minus-circle" aria-hidden="true"></i> Remove</button></div></div><input type="hidden" name="dragVal[]" class="dragVal" value="'+dup_id+'"></span>');
      jQuery('.drgedImgIN').prepend(jQuery('#box'));
      jQuery(".ui-widget-content").draggable({
        //  grid: [50, 20],
        containment: 'parent'
      });
      //this code for duplicate product add to cart
      var qtyVal = jQuery('.qty-'+variant_id).val();
      var total_qty = parseInt(qtyVal) + parseInt("1"); 
      var total_product_price = parseInt(price_cal) * parseInt(total_qty); 
      var symbol = product_price.charAt(0); 
      jQuery('.priceVal-'+variant_id).html('');
      jQuery('.priceVal-'+variant_id).html(symbol+total_product_price);
      jQuery('.total_amount-'+variant_id).val(total_product_price);
      jQuery('.qtyVal-'+variant_id).html('');
      jQuery('.qtyVal-'+variant_id).html('Qty: '+total_qty);

      jQuery('.totlQunty-'+variant_id).val(total_qty);

      jQuery('.qty-'+variant_id).val(total_qty);

      //this code for total amount
      var varbleInputs =  jQuery('input[type=hidden].prdct_amount');
      var prdct_amount = [];
      varbleInputs.each(function(){ 
        prdct_amount.push(jQuery(this).val()); 
      });
      var sum = 0;
      jQuery.each(prdct_amount,function(){sum+=parseFloat(this) || 0;});
      jQuery('#total_price').text(sum);

      jQuery('.totlQunty-'+variant_id).val(total_qty);

    });	

    //this code for accordian display next step
    jQuery(document).on('click','#divFirst', function(){
      var braceletsize = jQuery("#braceletsize").val();
        if(!braceletsize) {
         alert('Please Choose Bracelet Size! ');
         return false;
        }

      var divId = jQuery(this).attr('id');

      jQuery('.stepSecond').removeAttr( 'style' );
      //alert(divId);
      jQuery(".stepfirst").fadeOut(300, function(){jQuery(this).removeClass("in", 300)});
      //jQuery(".stepfirst").removeClass("in", 1000);

      jQuery(".stepSecond").fadeIn(1000, function(){jQuery(this).addClass("in", 1000)});
      //jQuery('.stepSecond').addClass("in");

    });	

    jQuery(document).on('click','#divSecond', function(){
      
      var braceletsize = jQuery("#braceletsize").val();
        if(!braceletsize) {
         alert('Please Choose Bracelet Size! ');
         return false;
        }

      jQuery(".stepSecond").fadeOut(300, function(){jQuery(this).removeClass("in", 300)});
      //jQuery(".stepSecond").removeClass("in");
      jQuery(".stepThird").fadeIn(1000, function(){jQuery(this).addClass("in", 1000)});
      //jQuery('.stepThird').addClass("in");

    });	

    jQuery(document).on('click','#divThird', function(){

      //jQuery('.stepThird').slideUp();
      jQuery(".stepThird").fadeOut(300, function(){jQuery(this).removeClass("in", 300)});

      //jQuery(".stepThird").removeClass("in");


    });	

    jQuery(document).on('click','#heading1', function(){

      jQuery('.stepfirst').removeAttr( 'style' ); 
      jQuery('.stepSecond').removeAttr( 'style' ); 
      jQuery('.stepThird').removeAttr( 'style' ); 
    });	

    jQuery(document).on('click','#heading2', function(){

      jQuery('.stepfirst').removeAttr( 'style' ); 
      jQuery('.stepSecond').removeAttr( 'style' ); 
      jQuery('.stepThird').removeAttr( 'style' ); 

    });	

    jQuery(document).on('click','#heading3', function(){

      jQuery('.stepfirst').removeAttr( 'style' ); 
      jQuery('.stepSecond').removeAttr( 'style' ); 
      jQuery('.stepThird').removeAttr( 'style' ); 

    });	

    //this code for hide option block
    jQuery(document).mouseup(function(e){
      var container = jQuery(".moveablex");

      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) 
      {
        jQuery('.moveablex').hide();
        //         jQuery('.forMobleIcon').addClass('collapsed');

      }
    });

    //this code for save png imng
    jQuery(document).on('click','.btn-cart', function(){
      //window.scrollTo(0,0);
      var bracletNotemty = jQuery('#bracletNotemty').val();
      if(typeof  bracletNotemty != 'undefined'){
        var braceletsize = jQuery("#braceletsize").val();
        if(!braceletsize) {
         alert('Please Choose Bracelet Size! ');
         return false;
        }
		  
        var node = document.getElementById('defaultImg');
        domtoimage.toPng(node)
        .then(function(dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            var theDiv = document.getElementById("dataSrc");
            theDiv.value = dataUrl;
        })
        .catch(function(error) {
            console.error('oops, something went wrong!', error);
        });

        function explode(){
           // $("#wait").css("display","block");
            jQuery("#btn").prop("disabled",true);
            //$("#btn").text('Please Wait...');
             jQuery("#btn").html('Please Wait... <img src="//cdn.shopify.com/s/files/1/0021/1877/8938/t/2/assets/fancybox_loading_small.gif?9002148179024137023">');
            //$("#btn").text('Please Wait...<img src="//cdn.shopify.com/s/files/1/0021/1877/8938/t/2/assets/fancybox_loading_small.gif?9002148179024137023">');
            
          var image_id = jQuery('#dataSrc').val();
          if(image_id != ''){
            //alert(image_id);
            jQuery.ajax({
              type: 'POST',
              url: 'https://contractorscommercial.com/apps/bracelet-designer/img_save.php',
              data: { 
                'product_id': '22', 
                'image_id': image_id 
              },
              success: function(msg){
                //alert(msg);
                custom_image_name= msg;
                addCartProduct();
              }
            }); 
          }else{
            explode();						
          }
        }
        setTimeout(explode, 2000);
      }else{
        alert("Please Select Bracelet Type");
      }
    });


    //this code to add cart product

    function addCartProduct(){
        //jQuery("#txt").load("demo_ajax_load.asp");
        var braceletsize = jQuery("#braceletsize").val();
        var productCount=1;
        var prodctItems =jQuery('.prodctItems').length;
        var imageString = custom_image_name.replace('image_','');
        var custom_img = imageString.replace('.png','');
        var response_id ='';
        var count=1;
        jQuery('.prodctItems').each(function() {
            var quanty = jQuery(this).find('.Quantity').val();
            var varint_id =  jQuery(this).find('.Quantity').attr('data-variant-id');
            //alert("variant Id : "+ varint_id+ "quantyfffff :"+quanty);
            //alert(" count :"+count+" prodctItems : "+prodctItems);
            jQuery.ajax({
              type: "POST",   
              url: '/cart/add.js',
              data: {
          			quantity: quanty,
          			id: varint_id,
          			properties: {
            			"C_Id":custom_img,
            			"braceletsize": braceletsize,
            		}, 
            		success: function(response){
                      if(count===prodctItems){
                        window.location.replace("/cart");
                      }
                	} 
        		},
              async: false
            })
            count++;
      });
    } 
    
    // jQuery("#select_theme").val("");  
    jQuery(document).on('change','#theme_select', function(){
        var theme = $(this).val();
        jQuery(".charms_remove").css("display", "none");
        jQuery("#"+theme).css("display", "block");
    });

    jQuery(document).ajaxStart(function(){
      jQuery("#wait").css("display", "block");
    });
    jQuery(document).ajaxComplete(function(){
      jQuery("#wait").css("display", "none");
    });
  });