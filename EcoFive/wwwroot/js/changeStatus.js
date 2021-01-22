var user = {
    init: function () {
        user.registerEvents();
    },
    registerEvents: function () {
        $('.btn-active').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            $.ajax({
                url: "/Admin/Administraion/AccountStatus",
                data: { id: id },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    if (response.status === true) {
                        btn.text('غير نشط');
                    }
                    else {
                        btn.text('نشط');

                    }
                }
            });
        });
    }
};
user.init();
