/**
 * @Author: Alcwyn Parker <alcwynparker>
 * @Date:   2017-09-24T20:35:12+01:00
 * @Email:  alcwynparker@gmail.com
 * @Project: Concept Shed - Autowed
 * @Filename: scripts.js
 * @Last modified by:   alcwynparker
 * @Last modified time: 2017-10-07T12:06:18+01:00
 */

(function ($, window, document, undefined) {

  'use strict';

  $('.option-container li a').on('click', function(e){
    e.preventDefault();
    $('.option-container li a').removeClass('selected');
    $(this).addClass('selected');
  })

  $(function () {
    $('#keyboard-bride').jkeyboard({

      layout: 'english',
      input: $('#name-bride')
    });

    $('#keyboard-groom').jkeyboard({

      layout: 'english',
      input: $('#name-groom')
    });

    $('input.keyboard-input').on('input', function(e){
      this.value = toTitleCase(this.value);
    });

    function toTitleCase(str){
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
  });



})(jQuery, window, document);
