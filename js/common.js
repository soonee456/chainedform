$(function(){    
    var demo_c_checkbox = '<input type="checkbox" id="demo_c_checkbox" class="trigger"><label class="label" for="demo_c_checkbox">active</label>';
    var demo_c_input = '<input type="text" class="trigger">';
    var demo_c_radio = '<input type="radio" id="demo_c_radio1" name="demo_c_radio"><label class="label" for="demo_c_radio1">none active</label><input type="radio" id="demo_c_radio2" name="demo_c_radio" class="trigger"><label class="label" for="demo_c_radio2">active</label>';
    var demo_c_select = '<select class="select"><option>option 1</option><option>option 2</option><option class="active">active</option></select>';
    var demo_c_textarea = '<textarea class="trigger"></textarea>';

    var demo_t_checkbox = '<input type="checkbox" class="target" id="demo_t_checkbox" disabled><label class="label" for="demo_t_checkbox">target</label>';
    var demo_t_input = '<input type="text" class="target" disabled>';
    var demo_t_radio = '<input type="radio" name="demo_t_radio" id="demo_t_radio1" class="target" disabled><label class="label" for="demo_t_radio1">active</label><input type="radio" name="demo_t_radio" id="demo_t_radio2" class="target" disabled><label class="label" for="demo_t_radio2">none active</label>';
    var demo_t_select = '<select class="select target" disabled><option>option 1</option><option>option 2</option><option>option 3</option></select>';
    var demo_t_textarea = '<textarea class="target" disabled></textarea>';

    $(".item_table input[type='radio']").change(function(){ 
    
    var demo_control = demo_c_input;
    var demo_target = demo_t_input;
    var demo_c_value = $('input[name="c_item"]:checked').val();
    var demo_t_value = $('input[name="t_item"]:checked').val();

    switch (demo_c_value) {
        case 'checkbox' :
        demo_control = demo_c_checkbox;
        break;
        case 'input' :
        demo_control = demo_c_input;
        break;
        case 'radio' :
        demo_control = demo_c_radio;
        break;
        case 'select' :
        demo_control = demo_c_select;
        break;
        case 'textarea' :
        demo_control = demo_c_textarea;
        break;
        default :
        break;
    }
    
    switch (demo_t_value) {
        case 'checkbox' :
        demo_target = demo_t_checkbox;
        break;
        case 'input' :
        demo_target = demo_t_input;
        break;
        case 'radio' :
        demo_target = demo_t_radio;
        break;
        case 'select' :
        demo_target = demo_t_select;
        break;
        case 'textarea' :
        demo_target = demo_t_textarea;
        break;
        default :
        break;
    }
    
    $("#demo_template").find(".triggers").html(demo_control);
    $("#demo_template").find(".targets").html(demo_target);
    });
});

/* type 1, type 2, type 3, type 4, type 5 */
$(document).on("change", ".element input[type='checkbox']", function(){
    $(this).parents(".element").find(".targets .target").attr('disabled', !$(this).is(":checked")); 
});

/* type 6, type 7, type 8, type 9, type 10 */
$(document).on("change", ".element .triggers input[type='radio']", function(){
    $(this).parents(".element").find(".targets .target").attr('disabled', !$(this).filter(".trigger").is(":checked"));
});

/* type 11, type 12, type 13, type 14, type 15 */
$(document).on("change", ".element .triggers select", function(){
console.log('select change : ' + $(this).find("option:selected").attr('class'));
    $(this).parents(".element").find(".targets .target").attr('disabled', !$(this).find("option:selected").attr('class'));
});

/* type 16, type 17, type 18, type 19, type 20 */
$(document).on("keyup", ".element .triggers input[type='text']", function(){
    $(this).parents(".element").find(".targets .target").attr('disabled', !$(this).val());
});

/* type 21, type 22, type 23, type 24, type 25 */
$(document).on("keyup", ".element .triggers textarea", function(){
    $(this).parents(".element").find(".targets .target").attr('disabled', !$(this).val());
});