$(document).ready( ()=>{
    news();
});


function news(){
    let action = 'newsResult';
    $.ajax({
        url: './event/event.php',
        method: 'post',
        data: {action: action},
        success: function(data){
            $('.newsResult').html(data);
        }
    })
}