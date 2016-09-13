$(document).ready(
    function () 
    {
        // Crete the dropdown base
        $('<select />').appendTo('nav');

        // Create default option "Go To ..."
        $('<option />', {
            'selected' : 'selected',

            'value' : '',

            'text' : "Go to..."

        }).appendTo('nav select');

        // Populate dropdown with menu items
        $('nav a').each(function() 
        {
            var element = $(this);

            $('<option />', {

                'value' : element.attr('href'),

                'text'  : element.text()

            }).appendTo('nav select');

        });

        // make the select menu navigate when its value is changed
        $('nav select').change(function () 
        {
            window.location = $(this).find('option:selected').val();
        });





    }// ! document ready function    

);// ! document ready