"use strict";


function InvokeSignalR(userId) {

    const connection = new signalR.HubConnectionBuilder()
        .withUrl("/chatHub")
        .build();

    //This method receive the message and Append to our list  
    connection.on("ReceiveMessage", (userName, userId, message) => {

        console.log(userName)
        console.log(userId)

        $.chatCtrl = function (element, chat) {
            var chat = $.extend({
                position: 'chat-right',
                text: '',
                time: moment(new Date().toISOString()).format('hh:mm'),
                picture: '',
                type: 'text', // or typing
                timeout: 0,
                onShow: function () { }
            }, chat);

            var target = $(element),

                element = '<div class="chat-item ' + chat.position + '" style="display:none">' +
                    '<img src="' + chat.picture + '">' +
                    '<div class="chat-details">' +
                    '<div class="chat-text">' + chat.text + '</div>' +
                    '<div class="chat-time">' + chat.time + '</div>' +
                    '</div>' +
                    '</div>',
                typing_element = '<div class="chat-item chat-left  chat-typing" style="display:none">' +
                    '<img src="' + chat.picture + '">' +
                    '<div class="chat-details">' +
                    '<div class="chat-text"></div>' +
                    '</div>' +
                    '</div>';

            var append_element = element;
            if (chat.type == 'typing') {
                append_element = typing_element;
            }

            if (chat.timeout > 0) {
                setTimeout(function () {
                    target.find('.chat-content').append($(append_element).fadeIn());
                }, chat.timeout);
            } else {
                target.find('.chat-content').append($(append_element).fadeIn());
            }

            var target_height = 0;
            target.find('.chat-content .chat-item').each(function () {
                target_height += $(this).outerHeight();
            });
            setTimeout(function () {
                target.find('.chat-content').scrollTop(target_height, -1);
            }, 100);
            chat.onShow.call(this, append_element);
        }

        if ($("#chat-scroll").length) {
            $("#chat-scroll").css({
                height: 450
            }).niceScroll();
        }

        if ($(".chat-content").length) {
            $(".chat-content").niceScroll({
                cursoropacitymin: .3,
                cursoropacitymax: .8,
            });
            $('.chat-content').getNiceScroll(0).doScrollTop($('.chat-content').height());
        }


        if (userName == "agmghazi") {
            const messageText = document.getElementById("userMessage").value;

            console.log(messageText)
            debugger


            $.chatCtrl('#mychatbox', {
                text: (messageText != undefined ? messageText : ''),
                picture: ('right' == 'left text-left' ? '/Templetes/Admin/assets/img/users/user-5.png' : '/Templetes/Admin/assets/img/users/user-1.png'),
                position: 'chat-' + 'right',
                type: type
            });

            $("#chat-form").submit(function () {
                var me = $(this);
                if (me.find('input').val().trim().length > 0) {
                    $.chatCtrl('#mychatbox', {
                        text: me.find('input').val(),
                        picture: '/Templetes/Admin/assets/img/users/user-5.png'
                    });
                    me.find('input').val('');
                }
                return false;
            });


        } else {
            debugger
            var chatLeft = [
                {
                    text: message,
                    position: 'left text-left'
                }
            ];
            for (var i = 0; i < chatLeft.length; i++) {
                var type = 'text';
                if (chatLeft[i].typing != undefined) type = 'typing';
                $.chatCtrl('#mychatbox', {
                    text: (message != undefined ? message : ''),
                    picture: ('left text-left' == 'left text-left' ? '/Templetes/Admin/assets/img/users/user-5.png' : '/Templetes/Admin/assets/img/users/user-1.png'),
                    position: 'chat-' + 'left text-left',
                    type: type
                });
            }
        }
    });
    connection.start().catch(err => console.error(err.toString()));

    ////Send the message  
    document.getElementById("sendMessage").addEventListener("click", event => {
        const messageText = document.getElementById("userMessage").value;

        //var userId = "02974cw0–9412–4nfe-afbf-59f701d72cf6"
        console.log(userId);
        console.log(messageText);
        connection.invoke("SendMessage", userId, messageText)
            .then(function () {
                return console.log("Send Success.");
            })
            .catch(function (err) {
                return console.error(err.toString());
            });
        event.preventDefault();
    });
}
