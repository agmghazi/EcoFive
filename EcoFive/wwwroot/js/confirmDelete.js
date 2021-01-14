function confirmDelete(id) {
    $.confirm({
        title: '!حذف',
        content: '!هل تريد الحذف',
        autoClose: 'الغاء|8000',
        buttons: {
            الغاء: function () {

            },
            موافق: function () {
                document.getElementById(id).click();
            }
        }
    });
}