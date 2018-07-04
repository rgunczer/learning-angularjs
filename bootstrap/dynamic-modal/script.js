$(document).ready(function() {
    $('#btn-modal-1').click(function() {
        showBSModal({
            title: "Event Listener",
            body: "You can perform certain actions onShow or onHide as well.",
            onShow: function(e){
                //do something
                console.log('on show...');
            },
            onHide: function(e){
                //do something
                console.log('on hide...');
            }
        });
    })

    $('#btn-modal-2').click(function() {
        showBSModal({
            title: "Do you want to logo out?",
            body: "You will loose all unsaved work, press 'Cancel' to return to page or 'Confirm' to log out",
            size: "small",
            actions: [{
                label: 'Cancel',
                cssClass: 'btn-success',
                onClick: function(e){
                    $(e.target).parents('.modal').modal('hide');
                }
            },{
                label: 'Confirm',
                cssClass: 'btn-danger',
                onClick: function(e){
                    //proceed to log out

                    showBSModal({
                        title: "Stack Event Listener",
                        body: "You can perform certain actions onShow or onHide as well.",
                        onShow: function(e){
                            //do something
                            console.log('on show...');
                        },
                        onHide: function(e){
                            //do something
                            console.log('on hide...');
                        }
                    });

                }
            }]
        });
    })
})