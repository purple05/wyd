/**
 * Created by purple on 2016/12/5.
 */
$(function () {
	$.ajax({
		url : "sec_data",
		type : "GET",
		success : function (data) {
			alert(data);
		},
		error : function (error) {
			alert(error.code);
		}
	});
});