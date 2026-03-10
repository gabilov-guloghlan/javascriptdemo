"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) {
        e.preventDefault();

        let a = $('input').val();

        

        if (!isNaN(a)) {

            for (let i = 1; i <= a; i++) {
                $('.miniboxes').append(`
                    <div class="minibox d-flex justify-content-center align-items-center mt-3">
                        <h2>${a}</h2>
                    </div>
                `);
            }

        } else {

            $('.miniboxes').append(`
                <div class="minibox d-flex justify-content-center align-items-center mt-3">
                    <h2>${a}</h2>
                </div>
            `);

        }

    });

});