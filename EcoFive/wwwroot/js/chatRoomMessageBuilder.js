var messageBuilder = function () {
    var message = null;
    var header = null;
    var headerText = null;
    var headerP = null;
    var timeSpan = null;
    var timeSpanI = null;
    var timeSpanSpan = null;
    var footer = null;
    var content = null;
    var contentConv = null;
    var contentLi = null;
    var avatar = null;
    var img = null;

    return {
        createMessage: function (classList) {
            message = document.createElement("div");
            if (classList === undefined)
                classList = [];

            for (var i = 0; i < classList.length; i++) {
                message.classList.add(classList[i]);
            }

            return this;
        },
        withLi: function (text) {
            contentLi = document.createElement("li");

            contentLi.classList.add(`${text}`);

            return this;
        },
        withHeader: function (text) {
            contentConv = document.createElement("div");
            content = document.createElement("div");
            
            header = document.createElement("div");
            headerText = document.createElement("div");
            headerP = document.createElement("p");

            content.classList.add('user-chat-content');
            header.classList.add('ctext-wrap');
            headerText.classList.add('ctext-wrap-content');
            headerP.classList.add('mb-0');

            contentConv.classList.add('conversation-list');


            headerP.appendChild(document.createTextNode(text));

            return this;
        },
        withAvatar: function (text, imgURL) {
            avatar = document.createElement("div");
            img = document.createElement("img");

            img.src = `"${imgURL}"`;
            img.alt = `"${text}"`;
            avatar.classList.add('chat-avatar');

            return this;
        },
        withTimeSpan: function (text) {
            timeSpan = document.createElement("p"); 
            timeSpanI = document.createElement("i"); 
            timeSpanSpan = document.createElement("span"); 

            timeSpan.classList.add('chat-time');
            timeSpan.classList.add('mb-0');

            timeSpanI.classList.add('ri-time-line');
            timeSpanI.classList.add('align-middle');

            timeSpanSpan.classList.add('align-middle');

            timeSpanSpan.appendChild(document.createTextNode(text));

            return this;
        },
        withFooter: function (text) {
            footer = document.createElement("div");
            footer.appendChild(document.createTextNode(text));

            footer.classList.add('conversation-name');

            return this;
        },
        build: function () {
            message.appendChild(contentLi);
            contentLi.appendChild(contentConv);

            contentConv.appendChild(avatar);
            avatar.appendChild(img);

            contentConv.appendChild(content);

            content.appendChild(header);
            header.appendChild(headerText);
            headerText.appendChild(headerP);
            headerText.appendChild(timeSpan);

            timeSpan.appendChild(timeSpanI);
            timeSpan.appendChild(timeSpanSpan);
            content.appendChild(footer);

            return message;
        }
    }
}