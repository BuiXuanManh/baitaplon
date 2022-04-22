$(document).ready(function () {
    $(document).ready(function () {
        var i = 1;
        $("#myBtn").click(function () {
            $("#myModal").modal();
        });
    })
    setInterval(function () {
        $('#btn-next').trigger('click');
    }, 2000);
    function KTTDN() {
        var k = /^[a-z0-9_-]+$/;
        if ($("#txtDN").val() == "") {
            $("#tendn").html("* bắt buộc nhập");
            return false;
        }
        if (!k.test($("#txtDN").val())) {
            $("#tendn").html("* Chỉ dùng chữ thường, số, - và _!!");
            return false;
        }
        $("#tendn").html("*");
        return true;
    }
    $("#txtDN").blur(KTTDN);
    function KTDN() {
        var k = /^[a-z0-9_-]+$/;
        if ($("#txtlg").val() == "") {
            $("#tblg").html("* bắt buộc nhập");
            return false;
        }
        if (!k.test($("#txtlg").val())) {
            $("#tblg").html("* Chỉ dùng chữ thường, số, - và _!!");
            return false;
        }
        $("#tblg").html("*");
        return true;
    }
    $("#txtlg").blur(KTDN);
    function KTTen() {
        var kt = /^[A-Za-z_\s-]+$/;
        if ($("#txtName").val() == "") {
            $("#hoten").html("* Bắt buộc nhập");
            return false;
        }
        if (!kt.test($("#txtName").val())) {
            $("#hoten").html("*Sai định dạng chỉ dùng chữ!!");
            return false;
        }
        $("#hoten").html("*");
        return true;
    }
    $("#txtName").blur(KTTen);
    function KTDT() {
        var sdt = /^[0-9]{9,10}$/;
        if ($("#txtDT").val() == "") {
            $("#dienthoai").html("* Bắt buộc nhập");
            return false;
        }
        if (!sdt.test($("#txtDT").val())) {
            $("#dienthoai").html("Nhập 9-10 số");
            return false
        }
        $("#dienthoai").html("*");
        return true;
    }
    $("#txtDT").blur(KTDT);
    function KTDC() {
        var dc = /^[A-Za-z0-9_\s-]+$/;
        if ($("#txtDC").val() == "") {
            $("#diachi").html("* Bắt buộc nhập");
            return false;
        }
        if (!dc.test($("#txtDC").val())) {
            $("#diachi").html("Chỉ nhập chữ, số và dáu cách");
            return false;
        }
        $("#diachi").html("*");
        return true;
    }
    $("#txtDC").blur(KTDC);
    function KTMK() {
        var mk = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
        if ($("#txtMK").val() == "") {
            $("#mk").html("* Bắt buộc nhập");
            return false;
        }
        if (!mk.test($("#txtMK").val())) {
            $("#mk").html("Nhập it nhat 6 chu va so ");
            return false;
        }
        $("#mk").html("*");
        return true;
    }
    function KTP() {
        var mk = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
        if ($("#txtp").val() == "") {
            $("#tbp").html("* Bắt buộc nhập");
            return false;
        }
        if (!mk.test($("#txtp").val())) {
            $("#tbp").html("Nhập it nhat 6 chu va so ");
            return false;
        }
        $("#tbp").html("*");
        return true;
    }
    $("#txtp").blur(KTP);
    function KTXNMK() {
        if ($("#txtXNMK").val() == "") {
            $("#xnmk").html("* Bắt buộc nhập");
            return false;
        }
        if ($("#txtMK").val() != $("#txtXNMK").val()) {
            $("#xnmk").html("Phải giống mk");
            return false;
        }
        $("#xnmk").html("*");
        return true;
    }
    $("#txtXNMK").blur(KTXNMK);
    function KTNS() {
        if ($("#txtNS").val() == "") {
            $("#ngaysinh").html("* Bắt buộc nhập");
            return false;
        }
        var day = new Date($("#txtNS").val());
        var today = new Date();
        if (eval(today.getFullYear() - day.getFullYear()) <= 10) {
            $("#ngaysinh").html("* Tuổi phải lớn hơn hoặc bằng 10");
            return false;
        }
        $("#ngaysinh").html("*");
        return true;
    }
    $("#txtNS").blur(KTNS);
    function KTMail() {
        var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,3})$/;
        if ($("#txtEmail").val() == "") {
            $("#email").html("* Bắt buộc nhập");
            return false;
        }
        if (!mail.test($("#txtEmail").val())) {
            $("#email").html("Nhập đúng định dạng mail");
            return false;
        }
        $("#email").html("*");
        return true;
    }
    $("#txtEmail").blur(KTMail);
    $("#submit").click(function () {
        if (KTTDN() == false || KTMK() == false || KTDC() == false || KTDT() == false || KTNS() == false || KTMail() == false || KTTen() == false || KTXNMK() == false) {
            alert("Mời bạn nhập đúng và đầy đủ thông tin");
            return false;
        }
        else {
            alert("Đăng ký thành công");
            $("#txtlg").val($("#txtDN").val());
            $("#txtp").val($("#txtMK").val());
            return true
        }
    });
    $("#lg").click(function () {
        if (KTDN() == false || KTP() == false || $("#txtp").val() != $("#txtMK").val() || $("#txtDN").val() != $("#txtlg").val()) {
            alert("Sai thông tin tk hoặc mk");
            return false;
        }
        else {
            alert("Đăng nhập thành công");
            return true
        }
    });
    $(document).ready(function () {
        $("#bep").click(function () {
            $("#mkd").hide()
            $("#gsf").hide()
            $("#gdxp").hide()
            $("#mhb").hide()
            $("#b").hide()
            $("#t").hide()
            $("#bdt").show()
            $("#ncd").show()
            $("#od").show()
            $("#cnm").show()
            $("#crc").show()
        })
        $("#noithat").click(function () {
            $("#mkd").hide()
            $("#gdxp").hide()
            $("#t").hide()
            $("#bdt").hide()
            $("#cnm").hide()
            $("#crc").hide()
            $("#od").hide()
            $("#ncd").hide()
            $("#b").show()
            $("#gsf").show()
            $("#mhb").show()
        })
        $("#sinhhoat").click(function () {
            $("#mkd").hide()
            $("#t").hide()
            $("#bdt").hide()
            $("#cnm").hide()
            $("#crc").hide()
            $("#od").hide()
            $("#ncd").hide()
            $("#gsf").hide()
            $("#b").hide()
            $("#gdxp").show()
            $("#mhb").show()
        })
        $("#km").click(function () {
            $("#cnm").hide()
            $("#crc").hide()
            $("#od").show()
            $("#ncd").show()
            $("#gsf").show()
            $("#b").show()
            $("#gdxp").show()
            $("#mhb").show()
            $("#mkd").show()
            $("#t").show()
            $("#bdt").show()
        })
        $("#hcm").click(function () {
            $("#mkd").hide()
            $("#t").hide()
            $("#bdt").hide()
            $("#cnm").hide()
            $("#crc").hide()
            $("#mhb").hide()
            $("#od").show()
            $("#ncd").show()
            $("#gsf").show()
            $("#b").show()
            $("#gdxp").show()
        })
        $("#dt").click(function () {
            $("#b").hide()
            $("#t").hide()
            $("#gsf").hide()
            $("#gdxp").hide()
            $("#bdt").show()
            $("#cnm").show()
            $("#crc").show()
            $("#mhb").show()
            $("#od").show()
            $("#ncd").show()
            $("#mkd").show()
        })
    })
    $(document).ready(function () {
        if ($("#txts").val() == $("#mkd").val()) {
            $("#txtbts").click(function () {
                $("#mkd").show()
                $("#gsf").hide()
                $("#gdxp").hide()
                $("#mhb").hide()
                $("#b").hide()
                $("#t").hide()
                $("#bdt").hide()
                $("#ncd").hide()
                $("#od").hide()
                $("#cnm").hide()
                $("#crc").hide()
            })
        }
    })
    $(document).ready(function () {
        if ($("#txts").val() == $("#od").val()) {
            $("#txtbts").click(function () {
                $("#mkd").hide()
                $("#gsf").hide()
                $("#gdxp").hide()
                $("#mhb").hide()
                $("#b").hide()
                $("#t").hide()
                $("#bdt").hide()
                $("#ncd").hide()
                $("#od").show()
                $("#cnm").hide()
                $("#crc").hide()
            })
        }
    })
    $(document).ready(function () {
        if ($("#txts").val() == $("#bdt").val()) {
            $("#txtbts").click(function () {
                $("#mkd").hide()
                $("#gsf").hide()
                $("#gdxp").hide()
                $("#mhb").hide()
                $("#b").hide()
                $("#t").hide()
                $("#bdt").show()
                $("#ncd").hide()
                $("#od").hide()
                $("#cnm").hide()
                $("#crc").hide()
            })
        }
    })
    $(document).ready(function () {
        if ($("#txts").val() == $("#bdt").val()) {
            $("#txtbts").click(function () {
                $("#mkd").hide()
                $("#gsf").hide()
                $("#gdxp").hide()
                $("#mhb").hide()
                $("#b").hide()
                $("#t").hide()
                $("#bdt").show()
                $("#ncd").hide()
                $("#od").hide()
                $("#cnm").hide()
                $("#crc").hide()
            })
        }
    })
    $(document).ready(function () {
        if ($("#txts").val() == $("#gdxp").val()) {
            $("#txtbts").click(function () {
                $("#mkd").hide()
                $("#gsf").hide()
                $("#gdxp").show()
                $("#mhb").hide()
                $("#b").hide()
                $("#t").hide()
                $("#bdt").hide()
                $("#ncd").hide()
                $("#od").hide()
                $("#cnm").hide()
                $("#crc").hide()
            })
        }
    })
    $(document).ready(function () {
        if ($("#txts").val() == $("#crc").val()) {
            $("#txtbts").click(function () {
                $("#mkd").hide()
                $("#gsf").hide()
                $("#gdxp").hide()
                $("#mhb").hide()
                $("#b").hide()
                $("#t").hide()
                $("#bdt").hide()
                $("#ncd").hide()
                $("#od").hide()
                $("#cnm").hide()
                $("#crc").show()
            })
        }
    })
    $(document).ready(function () {
        if ($("#txts").val() == $("#cnm").val()) {
            $("#txtbts").click(function () {
                $("#mkd").hide()
                $("#gsf").hide()
                $("#gdxp").hide()
                $("#mhb").hide()
                $("#b").hide()
                $("#t").hide()
                $("#bdt").hide()
                $("#ncd").hide()
                $("#od").hide()
                $("#cnm").show()
                $("#crc").hide()
            })
        }
    })
    $(document).ready(function () {
        if ($("#txts").val() == $("#ncd").val()) {
            $("#txtbts").click(function () {
                $("#mkd").hide()
                $("#gsf").hide()
                $("#gdxp").hide()
                $("#mhb").hide()
                $("#b").hide()
                $("#t").hide()
                $("#bdt").hide()
                $("#ncd").show()
                $("#od").hide()
                $("#cnm").hide()
                $("#crc").hide()
            })
        }
    })
    $(document).ready(function () {
        if ($("#txts").val() == $("#gsf").val()) {
            $("#txtbts").click(function () {
                $("#mkd").hide()
                $("#gsf").show()
                $("#gdxp").hide()
                $("#mhb").hide()
                $("#b").hide()
                $("#t").hide()
                $("#bdt").hide()
                $("#ncd").hide()
                $("#od").hide()
                $("#cnm").hide()
                $("#crc").hide()
            })
        }
    })
    $(document).ready(function () {
        if ($("#txts").val() == $("#b").val()) {
            $("#txtbts").click(function () {
                $("#mkd").hide()
                $("#gsf").hide()
                $("#gdxp").hide()
                $("#mhb").hide()
                $("#b").show()
                $("#t").hide()
                $("#bdt").hide()
                $("#ncd").hide()
                $("#od").hide()
                $("#cnm").hide()
                $("#crc").hide()
            })
        }
    })
    $(document).ready(function () {
        if ($("#txts").val() == $("#mhb").val()) {
            $("#txtbts").click(function () {
                $("#mkd").hide()
                $("#gsf").hide()
                $("#gdxp").hide()
                $("#mhb").show()
                $("#b").hide()
                $("#t").hide()
                $("#bdt").hide()
                $("#ncd").hide()
                $("#od").hide()
                $("#cnm").hide()
                $("#crc").hide()
            })
        }
    })
    $(document).ready(function () {
        $("#mn").click(function () {
            $("#mkd").show()
            $("#gsf").show()
            $("#gdxp").hide()
            $("#mhb").hide()
            $("#b").hide()
            $("#t").hide()
            $("#bdt").show()
            $("#ncd").show()
            $("#od").show()
            $("#cnm").show()
            $("#crc").show()
        })
    })
    $(document).ready(function () {
        $("#bc").click(function () {
            $("#mkd").show()
            $("#gsf").hide()
            $("#gdxp").hide()
            $("#mhb").hide()
            $("#b").show()
            $("#t").hide()
            $("#bdt").hide()
            $("#ncd").show()
            $("#od").show()
            $("#cnm").hide()
            $("#crc").show()
        })
    })
    $('#btn-next').click(function (event) {
        var slide_sau = $('.active').next();
        var vi_tri_hien_tai = $('.active_nut').index() + 1;
        if (slide_sau.length != 0) {
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function (event) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            });
            slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });
            // xử lý nút 
            $('.nut-slide ul li').removeClass('active_nut');
            $('.nut-slide ul li:nth-child(' + (vi_tri_hien_tai + 1) + ')').addClass('active_nut');
        } else {
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function (event) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            });
            $('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });
            // xử lý nút 
            $('.nut-slide ul li').removeClass('active_nut');
            $('.nut-slide ul li:nth-child(1)').addClass('active_nut');
        }
    });
    $('#btn-prev').click(function (event) {
        var slide_truoc = $('.active').prev();
        var vi_tri_hien_tai = $('.active_nut').index() + 1;
        if (slide_truoc.length != 0) {
            $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
            });
            slide_truoc.addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
            });
            // xử lý nút 
            $('.nut-slide ul li').removeClass('active_nut');
            $('.nut-slide ul li:nth-child(' + (vi_tri_hien_tai - 1) + ')').addClass('active_nut');
        } else {
            $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
            });
            $('.slide:last-child').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
            });
            // xử lý nút 
            $('.nut-slide ul li').removeClass('active_nut');
            $('.nut-slide ul li:last-child').addClass('active_nut');
        }
    });

    $('.nut-slide ul li').click(function (event) {
        var vi_tri_hien_tai = $('.active_nut').index() + 1;
        var vi_tri_click = $(this).index() + 1;
        $('.nut-slide ul li').removeClass('active_nut');
        $(this).addClass('active_nut');
        if (vi_tri_click > vi_tri_hien_tai) {
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function (event) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            });
            $('.slide:nth-child(' + vi_tri_click + ')').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });
        }
        if (vi_tri_click < vi_tri_hien_tai) {
            $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
            });
            $('.slide:nth-child(' + vi_tri_click + ')').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
            });
        }

    });

});
