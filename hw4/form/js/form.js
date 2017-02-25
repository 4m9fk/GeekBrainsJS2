/**
 * Created by Sirozhka on 25.02.2017.
 */

function Message(error, elem, text) {
    elem.parentElement.className = (error) ? 'form-group has-danger' : 'form-group has-success';
    msg = elem.parentElement.getElementsByClassName('form-control-feedback')[0];
    msg.innerHTML = text;

}


function Form() {
    var inputs = $('input:not(:submit)');

    var data = {};
    $(inputs).each(function () {
        data[this.id] = this.value;
    });
 $.ajax({
        url: 'validator.php',
        type: 'POST',
        data: data,
        dataType: 'json',
    }).done(function (res, textStatus) {
        $(inputs).each(function () {
            Message(0, this, '');
        });
        //console.log(res);
        $.each(res.error, function (key, value) {
            var id = '#' + key.toLowerCase().replace(' ', '_');
            var elem = $(id)[0];
            Message(1, elem, value);

        });
        return res.result
    });

return false
}
